//i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh_CNCommon from './locales/zh_CN/common';
import zh_CNDoc from './locales/zh_CN/doc';
import zh_CNButton from './locales/zh_CN/button';
import en_USCommon from './locales/en_US/common';
import en_USButton from './locales/en_US/button';
import en_USDoc from './locales/en_US/doc';
import {getLanguage} from "./utils";

const resources = {
    zh_CN: {
        translation: {
            ...zh_CNCommon,
            ...zh_CNButton,
            ...zh_CNDoc,
        }
    },
    en_US: {
        translation: {
            ...en_USCommon,
            ...en_USButton,
            ...en_USDoc,
        },
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: getLanguage(),

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;