import PageManager from './page-manager';
import nod from './common/nod';
import checkIsGiftCertValid from './common/gift-certificate-validator';
import formModel from './common/models/forms';
import { createTranslationDictionary } from './common/utils/translations-utils';
import { announceInputErrorMessage } from './common/utils/form-utils';
import { api } from '@bigcommerce/stencil-utils';
import { defaultModal } from './global/modal';

export default class GiftCertificate extends PageManager {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);

        const $certBalanceForm = $('#gift-certificate-balance');

        const purchaseModel = {
            recipientName(val) {
                return val.length;
            },
            recipientEmail(...args) {
                return formModel.email(...args);
            },
            senderName(val) {
                return val.length;
            },
            senderEmail(...args) {
                return formModel.email(...args);
            },
            customAmount(value, min, max) {
                return value && value >= min && value <= max;
            },
            setAmount(value, options) {
                let found = false;

                options.forEach((option) => {
                    if (option === value) {
                        found = true;
                        return false;
                    }
                });

                return found;
            },
        };

        const $purchaseForm = $('#gift-certificate-form');
        const $customAmounts = $purchaseForm.find('input[name="certificate_amount"]');
        const purchaseValidator = nod({
            submit: '#gift-certificate-form input[type="submit"]',
            delay: 300,
            tap: announceInputErrorMessage,
        });

        if ($customAmounts.length) {
            const $element = $purchaseForm.find('input[name="certificate_amount"]');
            const min = $element.data('min');
            const minFormatted = $element.data('minFormatted');
            const max = $element.data('max');
            const maxFormatted = $element.data('maxFormatted');
            const insertFormattedAmountsIntoErrorMessage = (message, ...amountRange) => {
                const amountPlaceholders = ['[MIN]', '[MAX]'];
                let updatedErrorText = message;
                amountPlaceholders.forEach((placeholder, i) => {
                    updatedErrorText = updatedErrorText.includes(placeholder) ?
                        updatedErrorText.replace(placeholder, amountRange[i]) :
                        updatedErrorText;
                });
                return updatedErrorText;
            };

            purchaseValidator.add({
                selector: '#gift-certificate-form input[name="certificate_amount"]',
                validate: (cb, val) => {
                    const numberVal = Number(val);

                    if (!numberVal) {
                        cb(false);
                    }

                    cb(numberVal >= min && numberVal <= max);
                },
                errorMessage: insertFormattedAmountsIntoErrorMessage(this.validationDictionary.certificate_amount_range, minFormatted, maxFormatted),
            });
        }

        purchaseValidator.add([
            {
                selector: '#gift-certificate-form input[name="to_name"]',
                validate: (cb, val) => {
                    const result = purchaseModel.recipientName(val);

                    cb(result);
                },
                errorMessage: this.context.toName,
            },
            {
                selector: '#gift-certificate-form input[name="to_email"]',
                validate: (cb, val) => {
                    const result = purchaseModel.recipientEmail(val);

                    cb(result);
                },
                errorMessage: this.context.toEmail,
            },
            {
                selector: '#gift-certificate-form input[name="to_email2"]',
                validate: (cb, val) => {
                    const result = purchaseModel.recipientEmail(val);

                    cb(result);
                },
                errorMessage: this.context.toEmail2,
            },
            {
                selector: '#gift-certificate-form input[name="from_name"]',
                validate: (cb, val) => {
                    const result = purchaseModel.senderName(val);

                    cb(result);
                },
                errorMessage: this.context.fromName,
            },
            {
                selector: '#gift-certificate-form input[name="from_email"]',
                validate: (cb, val) => {
                    const result = purchaseModel.senderEmail(val);

                    cb(result);
                },
                errorMessage: this.context.fromEmail,
            },
            {
                selector: '#gift-certificate-form input[name="from_email2"]',
                validate: (cb, val) => {
                    const result = purchaseModel.senderEmail(val);

                    cb(result);
                },
                errorMessage: this.context.fromEmail2,
            },
            {
                selector: '#gift-certificate-form input[name="certificate_theme"]:first-of-type',
                triggeredBy: '#gift-certificate-form input[name="certificate_theme"]',
                validate: (cb) => {
                    const val = $purchaseForm.find('input[name="certificate_theme"]:checked').val();

                    cb(typeof (val) === 'string');
                },
                errorMessage: this.context.certTheme,
            },
            {
                selector: '#gift-certificate-form input[name="agree"]',
                validate: (cb) => {
                    const val = $purchaseForm.find('input[name="agree"]').get(0).checked;

                    cb(val);
                },
                errorMessage: this.context.agreeToTerms,
            },
            {
                selector: '#gift-certificate-form input[name="agree2"]',
                validate: (cb) => {
                    const val = $purchaseForm.find('input[name="agree2"]').get(0).checked;

                    cb(val);
                },
                errorMessage: this.context.agreeToTerms,
            },
        ]);

        if ($certBalanceForm.length) {
            const balanceVal = this.checkCertBalanceValidator($certBalanceForm);

            $certBalanceForm.on('submit', () => {
                balanceVal.performCheck();

                if (!balanceVal.areAll('valid')) {
                    return false;
                }
            });
        }

        $purchaseForm.on('submit', event => {
            purchaseValidator.performCheck();

            if (!purchaseValidator.areAll('valid')) {
                return event.preventDefault();
            }
        });

        $('#gift-certificate-preview').click(event => {
            event.preventDefault();

            // purchaseValidator.performCheck();

            // if (!purchaseValidator.areAll('valid')) {
            //     return;
            // }

            const modal = defaultModal();
            const previewUrl = `${$(event.currentTarget).data('previewUrl')}&${$purchaseForm.serialize()}`;

            let updateContent = document.querySelector('.updateCardContent');

            
            // modal.open();

            api.getPage(previewUrl, {}, (err, content) => {
                if (err) {
                    // return modal.updateContent(this.context.previewError);
                    updateContent.innerHTML = err;
                }

                // modal.updateContent(content, { wrap: true });

                updateContent.innerHTML = content;
            });
        });
    }

    checkCertBalanceValidator($balanceForm) {
        const balanceValidator = nod({
            submit: $balanceForm.find('input[type="submit"]'),
            tap: announceInputErrorMessage,
        });

        balanceValidator.add({
            selector: $balanceForm.find('input[name="giftcertificatecode"]'),
            validate(cb, val) {
                cb(checkIsGiftCertValid(val));
            },
            errorMessage: this.validationDictionary.invalid_gift_certificate,
        });

        return balanceValidator;
    }
}