import { data } from "./data.js"

listenLanguageSelection()
selectLanguage()

function detectLanguage() {
    const browserLanguages = navigator.languages
    const siteLanguages = Object.keys(data)
    const intersection = browserLanguages.filter(
        language => siteLanguages.includes(language)
    );
    const selectedLanguage = intersection.length === 0 ? 'en' : intersection[0]
    return selectedLanguage
}

function getLocalData() {
    const languageSelection = document.getElementById("language-selection")
    const selectedOption = languageSelection.selectedOptions[0].value
    const localData = data[selectedOption]
    return localData
}

function handleList(element, key, value) {
    if (!isObject(value[0])) {
        setListValues(key, value, element)
    } else {
        setListData(key, value, element)
    }
}

function isObject(value) {
    return typeof value === "object"
}

function listenLanguageSelection() {
    document.getElementById("language-selection")
        .addEventListener("change", setData);
}

function selectLanguage() {
    const language = detectLanguage()
    document.getElementById("language-selection").value = language
    setData()
}

function setAttributes(key, value, element = document, index = 0) {
    const elemWithAttr = element.querySelectorAll(`[data-attr-${key}]`)[index]
    if (elemWithAttr) {
        elemWithAttr.setAttribute(key, value)
    }
}

function setData() {
    const localData = getLocalData()
    setLocalData(localData)
}

function setDataDependsOnType(key, value, element, index) {
    if (Array.isArray(value)) {
        handleList(element, key, value)
    }
    else if (isObject(value)) {
        setLocalData(value, element, index)
    }
    else {
        setValues(key, value, element, index)
    }
}

function setInnerHTML(key, value, element = document, index = 0) {
    const elemWithData = element.querySelectorAll(`[data-${key}]`)[index]
    if (elemWithData) {
        elemWithData.innerHTML = value
    }
}

function setListData(key, value, element) {
    const arrayElements = element.querySelectorAll(`[data-${key}]`)
    for (let i = 0; i < value.length; i++) {
        setLocalData(value[i], arrayElements[i])
    }
}

function setListValues(key, value, element) {
    for (let i = 0; i < value.length; i++) {
        setValues(key, value[i], element, i)
    }
}

function setLocalData(localData, element = document, index = 0) {
    for (const [key, value] of Object.entries(localData)) {
        setDataDependsOnType(key, value, element, index)
    }
}

function setValues(key, value, element, index) {
    setAttributes(key, value, element, index)
    setInnerHTML(key, value, element, index)
}

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}