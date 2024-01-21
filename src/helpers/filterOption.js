// Filter the options when typed
const filterOption = (option, inputValue) => {
    return option.label.toLowerCase().includes(inputValue.toLowerCase()) || option.value.toLowerCase().includes(inputValue.toLowerCase());
}
export default filterOption;