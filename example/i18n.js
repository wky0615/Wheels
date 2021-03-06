//i18n.js
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import zh_CNCommon from './locales/zh_CN/common';
import zh_CNDoc from './locales/zh_CN/doc';
import zh_CNButton from './locales/zh_CN/button';
import en_USCommon from './locales/en_US/common';
import en_USButton from './locales/en_US/button';
import en_USDoc from './locales/en_US/doc';
import {getLanguage} from "./utils";
import zh_CNDialog from "./locales/zh_CN/dialog";
import en_USDialog from "./locales/en_US/dialog";
import zh_CNForm from "./locales/zh_CN/form";
import en_USForm from "./locales/en_US/form";
import zh_CNInput from "./locales/zh_CN/input";
import en_USInput from "./locales/en_US/input";
import en_USTable from "./locales/en_US/table";
import zh_CNTable from "./locales/zh_CN/table";
import en_USScroll from "./locales/en_US/scroll";
import zh_CNScroll from "./locales/zh_CN/scroll";
import en_USDropdown from "./locales/en_US/dropdown";
import zh_CNDropdown from "./locales/zh_CN/dropdown";
import en_USIcon from "./locales/en_US/icon";
import zh_CNIcon from "./locales/zh_CN/icon";
import en_USGrid from "./locales/en_US/grid";
import zh_CNGrid from "./locales/zh_CN/grid";
import en_USLayout from "./locales/en_US/layout";
import zh_CNLayout from "./locales/zh_CN/layout";
import en_USDrawer from "./locales/en_US/drawer";
import zh_CNDrawer from "./locales/zh_CN/drawer";
import zh_CNTree from "./locales/zh_CN/tree";
import en_USTree from "./locales/en_US/tree";

const resources = {
    zh_CN: {
        translation: {
            ...zh_CNCommon,
            ...zh_CNButton,
            ...zh_CNDialog,
            ...zh_CNForm,
            ...zh_CNInput,
            ...zh_CNTable,
            ...zh_CNScroll,
            ...zh_CNDropdown,
            ...zh_CNIcon,
            ...zh_CNGrid,
            ...zh_CNLayout,
            ...zh_CNDrawer,
            ...zh_CNDoc,
            ...zh_CNTree,
        }
    },
    en_US: {
        translation: {
            ...en_USCommon,
            ...en_USButton,
            ...en_USDialog,
            ...en_USForm,
            ...en_USInput,
            ...en_USTable,
            ...en_USScroll,
            ...en_USDropdown,
            ...en_USIcon,
            ...en_USGrid,
            ...en_USLayout,
            ...en_USDrawer,
            ...en_USDoc,
            ...en_USTree,
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
