import SettingField from "../settingfield";
import {DiscordModules} from "modules";

//TODO: Documentation

/** 
 * Creates a textbox using discord's built in textbox.
 * @memberof module:Settings
 * @version 0.1.0
 * @extends module:Settings.SettingField
 */
class Textbox extends SettingField {
    /**
	 * @param {string} name - name label of the setting 
	 * @param {string} note - help/note to show underneath or above the setting
	 * @param {string} value - current text in box
	 * @param {callable} onChange - callback to perform on setting change, callback receives text
	 * @param {object} [options] - object of options to give to the setting
	 * @param {string} [options.placeholder=""] - placeholder for when textbox is empty
	 */
    constructor(name, note, value, onChange, options = {}) {
		super(name, note, onChange, DiscordModules.Textbox, {
            onChange: textbox => value => {
                textbox.props.value = value;
                textbox.forceUpdate();
                this.onChange(value);
            },
            value: value,
            placeholder: options.placeholder ? options.placeholder : ""
        });
	}
}

export default Textbox;