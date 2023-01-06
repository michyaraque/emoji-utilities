export type IEmojiColorCompose = {
  rgb: { r: number, g: number, b: number }, hex: string
} | string | number[];

export interface IEmojiData {
  base: IEmojiColorCompose
  soft: IEmojiColorCompose
  darken: IEmojiColorCompose
}

export type TColor = "rgb" | "hex" | "both";

export type EmojiAccepted = "💯" | "🔢" | "☔" | "☕" | "♈" | "♉" | "♐" | "♑" | "♒" | "♓" | "⚓" | "✅" | "✨" | "❓" | "❔" | "❕" | "❗" | "❗" | "➕" | "➖" | "➗" | "#️⃣" | "*️⃣" | "0️⃣" | "1️⃣" | "2️⃣" | "3️⃣" | "4️⃣" | "5️⃣" | "6️⃣" | "7️⃣" | "8️⃣" | "9️⃣" | "©️" | "®️" | "🀄" | "🃏" | "🅰️" | "🅱️" | "🅾️" | "🅿️" | "🆎" | "🆑" | "🆒" | "🆓" | "🆔" | "🆕" | "🆖" | "🆗" | "🆘" | "🆙" | "🆚" | "🇦🇨" | "🇦🇩" | "🇦🇪" | "🇦🇫" | "🇦🇬" | "🇦🇮" | "🇦🇱" | "🇦🇲" | "🇦🇴" | "🇦🇶" | "🇦🇷" | "🇦🇸" | "🇦🇹" | "🇦🇺" | "🇦🇼" | "🇦🇽" | "🇦🇿" | "🇧🇦" | "🇧🇧" | "🇧🇩" | "🇧🇪" | "🇧🇫" | "🇧🇬" | "🇧🇭" | "🇧🇮" | "🇧🇯" | "🇧🇱" | "🇧🇲" | "🇧🇳" | "🇧🇴" | "🇧🇶" | "🇧🇷" | "🇧🇸" | "🇧🇹" | "🇧🇻" | "🇧🇼" | "🇧🇾" | "🇧🇿" | "🇨🇦" | "🇨🇨" | "🇨🇩" | "🇨🇫" | "🇨🇬" | "🇨🇭" | "🇨🇮" | "🇨🇰" | "🇨🇱" | "🇨🇲" | "🇨🇳" | "🇨🇳" | "🇨🇴" | "🇨🇵" | "🇨🇷" | "🇨🇺" | "🇨🇻" | "🇨🇼" | "🇨🇽" | "🇨🇾" | "🇨🇿" | "🇩🇪" | "🇩🇪" | "🇩🇬" | "🇩🇯" | "🇩🇰" | "🇩🇲" | "🇩🇴" | "🇩🇿" | "🇪🇦" | "🇪🇨" | "🇪🇪" | "🇪🇬" | "🇪🇭" | "🇪🇷" | "🇪🇸" | "🇪🇸" | "🇪🇹" | "🇪🇺" | "🇫🇮" | "🇫🇯" | "🇫🇰" | "🇫🇲" | "🇫🇴" | "🇫🇷" | "🇫🇷" | "🇬🇦" | "🇬🇧" | "🇬🇧" | "🇬🇧" | "🇬🇩" | "🇬🇪" | "🇬🇫" | "🇬🇬" | "🇬🇭" | "🇬🇮" | "🇬🇱" | "🇬🇲" | "🇬🇳" | "🇬🇵" | "🇬🇶" | "🇬🇷" | "🇬🇸" | "🇬🇹" | "🇬🇺" | "🇬🇼" | "🇬🇾" | "🇭🇰" | "🇭🇲" | "🇭🇳" | "🇭🇷" | "🇭🇹" | "🇭🇺" | "🇮🇨" | "🇮🇩" | "🇮🇪" | "🇮🇱" | "🇮🇲" | "🇮🇳" | "🇮🇴" | "🇮🇶" | "🇮🇷" | "🇮🇸" | "🇮🇹" | "🇮🇹" | "🇯🇪" | "🇯🇲" | "🇯🇴" | "🇯🇵" | "🇯🇵" | "🇰🇪" | "🇰🇬" | "🇰🇭" | "🇰🇮" | "🇰🇲" | "🇰🇳" | "🇰🇵" | "🇰🇷" | "🇰🇷" | "🇰🇼" | "🇰🇾" | "🇰🇿" | "🇱🇦" | "🇱🇧" | "🇱🇨" | "🇱🇮" | "🇱🇰" | "🇱🇷" | "🇱🇸" | "🇱🇹" | "🇱🇺" | "🇱🇻" | "🇱🇾" | "🇲🇦" | "🇲🇨" | "🇲🇩" | "🇲🇪" | "🇲🇫" | "🇲🇬" | "🇲🇭" | "🇲🇰" | "🇲🇱" | "🇲🇲" | "🇲🇳" | "🇲🇴" | "🇲🇵" | "🇲🇶" | "🇲🇷" | "🇲🇸" | "🇲🇹" | "🇲🇺" | "🇲🇻" | "🇲🇼" | "🇲🇽" | "🇲🇾" | "🇲🇿" | "🇳🇦" | "🇳🇨" | "🇳🇪" | "🇳🇫" | "🇳🇬" | "🇳🇮" | "🇳🇱" | "🇳🇴" | "🇳🇵" | "🇳🇷" | "🇳🇺" | "🇳🇿" | "🇴🇲" | "🇵🇦" | "🇵🇪" | "🇵🇫" | "🇵🇬" | "🇵🇭" | "🇵🇰" | "🇵🇱" | "🇵🇲" | "🇵🇳" | "🇵🇷" | "🇵🇸" | "🇵🇹" | "🇵🇼" | "🇵🇾" | "🇶🇦" | "🇷🇪" | "🇷🇴" | "🇷🇸" | "🇷🇺" | "🇷🇺" | "🇷🇼" | "🇸🇦" | "🇸🇧" | "🇸🇨" | "🇸🇩" | "🇸🇪" | "🇸🇬" | "🇸🇭" | "🇸🇮" | "🇸🇯" | "🇸🇰" | "🇸🇱" | "🇸🇲" | "🇸🇳" | "🇸🇴" | "🇸🇷" | "🇸🇸" | "🇸🇹" | "🇸🇻" | "🇸🇽" | "🇸🇾" | "🇸🇿" | "🇹🇦" | "🇹🇨" | "🇹🇩" | "🇹🇫" | "🇹🇬" | "🇹🇭" | "🇹🇯" | "🇹🇰" | "🇹🇱" | "🇹🇲" | "🇹🇳" | "🇹🇴" | "🇹🇷" | "🇹🇹" | "🇹🇻" | "🇹🇼" | "🇹🇿" | "🇺🇦" | "🇺🇬" | "🇺🇲" | "🇺🇳" | "🇺🇸" | "🇺🇸" | "🇺🇾" | "🇺🇿" | "🇻🇦" | "🇻🇨" | "🇻🇪" | "🇻🇬" | "🇻🇮" | "🇻🇳" | "🇻🇺" | "🇼🇫" | "🇼🇸" | "🇽🇰" | "🇾🇪" | "🇾🇹" | "🇿🇦" | "🇿🇲" | "🇿🇼" | "🈁" | "🈂️" | "🈚" | "🈯" | "🈲" | "🈳" | "🈴" | "🈵" | "🈶" | "🈷️" | "🈸" | "🈹" | "🈺" | "🉐" | "🉑" | "🌀" | "🌁" | "🌂" | "🌃" | "🌄" | "🌅" | "🌆" | "🌇" | "🌈" | "🌉" | "🌊" | "🌋" | "🌌" | "🌍" | "🌎" | "🌏" | "🌐" | "🌑" | "🌒" | "🌓" | "🌔" | "🌔" | "🌕" | "🌖" | "🌗" | "🌘" | "🌙" | "🌚" | "🌛" | "🌜" | "🌝" | "🌞" | "🌟" | "🌠" | "🌡️" | "🌤️" | "🌤️" | "🌥️" | "🌥️" | "🌦️" | "🌦️" | "🌧️" | "🌨️" | "🌩️" | "🌩️" | "🌪️" | "🌪️" | "🌫️" | "🌬️" | "🌭" | "🌮" | "🌯" | "🌰" | "🌱" | "🌲" | "🌳" | "🌴" | "🌵" | "🌶️" | "🌷" | "🌸" | "🌹" | "🌺" | "🌻" | "🌼" | "🌽" | "🌾" | "🌿" | "🍀" | "🍁" | "🍂" | "🍃" | "🍄" | "🍅" | "🍆" | "🍇" | "🍈" | "🍉" | "🍊" | "🍋" | "🍌" | "🍍" | "🍎" | "🍏" | "🍐" | "🍑" | "🍒" | "🍓" | "🍔" | "🍕" | "🍖" | "🍗" | "🍘" | "🍙" | "🍚" | "🍛" | "🍜" | "🍝" | "🍞" | "🍟" | "🍠" | "🍡" | "🍢" | "🍣" | "🍤" | "🍥" | "🍦" | "🍧" | "🍨" | "🍩" | "🍪" | "🍫" | "🍬" | "🍭" | "🍮" | "🍯" | "🍰" | "🍱" | "🍲" | "🍳" | "🍳" | "🍴" | "🍵" | "🍶" | "🍷" | "🍸" | "🍹" | "🍺" | "🍻" | "🍼" | "🍽️" | "🍾" | "🍿" | "🎀" | "🎁" | "🎂" | "🎃" | "🎄" | "🎅" | "🎆" | "🎇" | "🎈" | "🎉" | "🎊" | "🎋" | "🎌" | "🎍" | "🎎" | "🎏" | "🎐" | "🎑" | "🎒" | "🎓" | "🎖️" | "🎗️" | "🎙️" | "🎚️" | "🎛️" | "🎞️" | "🎟️" | "🎠" | "🎡" | "🎢" | "🎣" | "🎤" | "🎥" | "🎦" | "🎧" | "🎨" | "🎩" | "🎪" | "🎫" | "🎬" | "🎭" | "🎮" | "🎯" | "🎰" | "🎱" | "🎲" | "🎳" | "🎴" | "🎵" | "🎶" | "🎷" | "🎸" | "🎹" | "🎺" | "🎻" | "🎼" | "🎽" | "🎾" | "🎿" | "🏀" | "🏁" | "🏂" | "🏃‍♀️" | "🏃‍♂️" | "🏃‍♂️" | "🏃‍♂️" | "🏄‍♀️" | "🏄‍♂️" | "🏄‍♂️" | "🏅" | "🏆" | "🏇" | "🏈" | "🏉" | "🏊‍♀️" | "🏊‍♂️" | "🏊‍♂️" | "🏋️‍♀️" | "🏋️‍♂️" | "🏋️‍♂️" | "🏌️‍♀️" | "🏌️‍♂️" | "🏌️‍♂️" | "🏍️" | "🏎️" | "🏏" | "🏐" | "🏑" | "🏒" | "🏓" | "🏔️" | "🏕️" | "🏖️" | "🏗️" | "🏘️" | "🏙️" | "🏚️" | "🏛️" | "🏜️" | "🏝️" | "🏞️" | "🏟️" | "🏠" | "🏡" | "🏢" | "🏣" | "🏤" | "🏥" | "🏦" | "🏧" | "🏨" | "🏩" | "🏪" | "🏫" | "🏬" | "🏭" | "🏮" | "🏮" | "🏯" | "🏰" | "🏳️‍🌈" | "🏳️‍⚧️" | "🏳️" | "🏴‍☠️" | "🏴󠁧󠁢󠁥󠁮󠁧󠁿" | "🏴󠁧󠁢󠁳󠁣󠁴󠁿" | "🏴󠁧󠁢󠁷󠁬󠁳󠁿" | "🏴" | "🏵️" | "🏷️" | "🏸" | "🏹" | "🏺" | "🏻" | "🏼" | "🏽" | "🏾" | "🏿" | "🐀" | "🐁" | "🐂" | "🐃" | "🐄" | "🐅" | "🐆" | "🐇" | "🐈‍⬛" | "🐈" | "🐉" | "🐊" | "🐋" | "🐌" | "🐍" | "🐎" | "🐏" | "🐐" | "🐑" | "🐒" | "🐓" | "🐔" | "🐕‍🦺" | "🐕" | "🐖" | "🐗" | "🐘" | "🐙" | "🐚" | "🐛" | "🐜" | "🐝" | "🐝" | "🐞" | "🐞" | "🐟" | "🐠" | "🐡" | "🐢" | "🐣" | "🐤" | "🐥" | "🐦" | "🐧" | "🐨" | "🐩" | "🐪" | "🐫" | "🐬" | "🐬" | "🐭" | "🐮" | "🐯" | "🐰" | "🐱" | "🐲" | "🐳" | "🐴" | "🐵" | "🐶" | "🐷" | "🐸" | "🐹" | "🐺" | "🐻‍❄️" | "🐻" | "🐼" | "🐽" | "🐾" | "🐾" | "🐿️" | "👀" | "👁️‍🗨️" | "👁️" | "👂" | "👃" | "👄" | "👅" | "👆" | "👇" | "👈" | "👉" | "👊" | "👊" | "👋" | "👌" | "👍" | "👍" | "👎" | "👎" | "👏" | "👐" | "👑" | "👒" | "👓" | "👔" | "👕" | "👕" | "👖" | "👗" | "👘" | "👙" | "👚" | "👛" | "👜" | "👝" | "👞" | "👞" | "👟" | "👠" | "👡" | "👢" | "👣" | "👤" | "👥" | "👦" | "👧" | "👨‍🌾" | "👨‍🍳" | "👨‍🍼" | "👨‍🎓" | "👨‍🎤" | "👨‍🎨" | "👨‍🏫" | "👨‍🏭" | "👨‍👦‍👦" | "👨‍👦" | "👨‍👧‍👦" | "👨‍👧‍👧" | "👨‍👧" | "👨‍👨‍👦" | "👨‍👨‍👦‍👦" | "👨‍👨‍👧" | "👨‍👨‍👧‍👦" | "👨‍👨‍👧‍👧" | "👨‍👩‍👦" | "👨‍👩‍👦" | "👨‍👩‍👦‍👦" | "👨‍👩‍👧" | "👨‍👩‍👧‍👦" | "👨‍👩‍👧‍👧" | "👨‍💻" | "👨‍💼" | "👨‍🔧" | "👨‍🔬" | "👨‍🚀" | "👨‍🚒" | "👨‍🦯" | "👨‍🦰" | "👨‍🦱" | "👨‍🦲" | "👨‍🦳" | "👨‍🦼" | "👨‍🦽" | "👨‍⚕️" | "👨‍⚖️" | "👨‍✈️" | "👨‍❤️‍👨" | "👨‍❤️‍💋‍👨" | "👨" | "👩‍🌾" | "👩‍🍳" | "👩‍🍼" | "👩‍🎓" | "👩‍🎤" | "👩‍🎨" | "👩‍🏫" | "👩‍🏭" | "👩‍👦‍👦" | "👩‍👦" | "👩‍👧‍👦" | "👩‍👧‍👧" | "👩‍👧" | "👩‍👩‍👦" | "👩‍👩‍👦‍👦" | "👩‍👩‍👧" | "👩‍👩‍👧‍👦" | "👩‍👩‍👧‍👧" | "👩‍💻" | "👩‍💼" | "👩‍🔧" | "👩‍🔬" | "👩‍🚀" | "👩‍🚒" | "👩‍🦯" | "👩‍🦰" | "👩‍🦱" | "👩‍🦲" | "👩‍🦳" | "👩‍🦼" | "👩‍🦽" | "👩‍⚕️" | "👩‍⚖️" | "👩‍✈️" | "👩‍❤️‍👨" | "👩‍❤️‍👩" | "👩‍❤️‍💋‍👨" | "👩‍❤️‍💋‍👩" | "👩" | "👫" | "👫" | "👫" | "👬" | "👬" | "👭" | "👭" | "👮‍♀️" | "👮‍♂️" | "👮‍♂️" | "👯‍♀️" | "👯‍♀️" | "👯‍♀️" | "👯‍♂️" | "👯‍♂️" | "👰‍♀️" | "👰‍♂️" | "👰" | "👱‍♀️" | "👱‍♂️" | "👱‍♂️" | "👲" | "👳‍♀️" | "👳‍♂️" | "👳‍♂️" | "👴" | "👵" | "👶" | "👷‍♀️" | "👷‍♂️" | "👷‍♂️" | "👸" | "👹" | "👺" | "👻" | "👼" | "👽" | "👾" | "👿" | "💀" | "💁‍♀️" | "💁‍♀️" | "💁‍♂️" | "💂‍♀️" | "💂‍♂️" | "💂‍♂️" | "💃" | "💄" | "💅" | "💆‍♀️" | "💆‍♀️" | "💆‍♂️" | "💇‍♀️" | "💇‍♀️" | "💇‍♂️" | "💈" | "💉" | "💊" | "💋" | "💌" | "💍" | "💎" | "💏" | "💐" | "💑" | "💒" | "💓" | "💔" | "💕" | "💖" | "💗" | "💘" | "💙" | "💚" | "💛" | "💜" | "💝" | "💞" | "💟" | "💠" | "💡" | "💢" | "💣" | "💤" | "💥" | "💥" | "💦" | "💧" | "💨" | "💩" | "💩" | "💩" | "💪" | "💫" | "💬" | "💭" | "💮" | "💰" | "💱" | "💲" | "💳" | "💴" | "💵" | "💶" | "💷" | "💸" | "💹" | "💺" | "💻" | "💼" | "💽" | "💾" | "💿" | "📀" | "📁" | "📂" | "📃" | "📄" | "📅" | "📆" | "📇" | "📈" | "📉" | "📊" | "📋" | "📌" | "📍" | "📎" | "📏" | "📐" | "📑" | "📒" | "📓" | "📔" | "📕" | "📖" | "📖" | "📗" | "📘" | "📙" | "📚" | "📛" | "📜" | "📝" | "📝" | "📞" | "📟" | "📠" | "📡" | "📢" | "📣" | "📤" | "📥" | "📦" | "📧" | "📨" | "📩" | "📪" | "📫" | "📬" | "📭" | "📮" | "📯" | "📰" | "📱" | "📲" | "📳" | "📴" | "📵" | "📶" | "📷" | "📸" | "📹" | "📺" | "📻" | "📼" | "📽️" | "📿" | "🔀" | "🔁" | "🔂" | "🔃" | "🔄" | "🔅" | "🔆" | "🔇" | "🔈" | "🔉" | "🔊" | "🔋" | "🔌" | "🔍" | "🔎" | "🔏" | "🔐" | "🔑" | "🔒" | "🔓" | "🔔" | "🔕" | "🔖" | "🔗" | "🔘" | "🔙" | "🔚" | "🔛" | "🔜" | "🔝" | "🔞" | "🔟" | "🔠" | "🔡" | "🔣" | "🔤" | "🔥" | "🔦" | "🔧" | "🔨" | "🔩" | "🔪" | "🔪" | "🔫" | "🔬" | "🔭" | "🔮" | "🔯" | "🔰" | "🔱" | "🔲" | "🔳" | "🔴" | "🔵" | "🔶" | "🔷" | "🔸" | "🔹" | "🔺" | "🔻" | "🔼" | "🔽" | "🕉️" | "🕊️" | "🕋" | "🕌" | "🕍" | "🕎" | "🕐" | "🕑" | "🕒" | "🕓" | "🕔" | "🕕" | "🕖" | "🕗" | "🕘" | "🕙" | "🕚" | "🕛" | "🕜" | "🕝" | "🕞" | "🕟" | "🕠" | "🕡" | "🕢" | "🕣" | "🕤" | "🕥" | "🕦" | "🕧" | "🕯️" | "🕰️" | "🕳️" | "🕴️" | "🕵️‍♀️" | "🕵️‍♂️" | "🕵️‍♂️" | "🕶️" | "🕷️" | "🕸️" | "🕹️" | "🕺" | "🖇️" | "🖊️" | "🖋️" | "🖌️" | "🖍️" | "🖐️" | "🖕" | "🖕" | "🖖" | "🖤" | "🖥️" | "🖨️" | "🖱️" | "🖲️" | "🖼️" | "🗂️" | "🗃️" | "🗄️" | "🗑️" | "🗒️" | "🗓️" | "🗜️" | "🗝️" | "🗞️" | "🗡️" | "🗣️" | "🗨️" | "🗯️" | "🗳️" | "🗺️" | "🗻" | "🗼" | "🗽" | "🗾" | "🗿" | "😀" | "😁" | "😂" | "😃" | "😄" | "😅" | "😆" | "😆" | "😇" | "😈" | "😉" | "😊" | "😋" | "😌" | "😍" | "😎" | "😏" | "😐" | "😑" | "😒" | "😓" | "😔" | "😕" | "😖" | "😗" | "😘" | "😙" | "😚" | "😛" | "😜" | "😝" | "😞" | "😟" | "😠" | "😡" | "😢" | "😣" | "😤" | "😥" | "😦" | "😧" | "😨" | "😩" | "😪" | "😫" | "😬" | "😭" | "😮‍💨" | "😮" | "😯" | "😰" | "😱" | "😲" | "😳" | "😴" | "😵‍💫" | "😵" | "😶‍🌫️" | "😶" | "😷" | "😸" | "😹" | "😺" | "😻" | "😼" | "😽" | "😾" | "😿" | "🙀" | "🙁" | "🙂" | "🙃" | "🙄" | "🙅‍♀️" | "🙅‍♀️" | "🙅‍♂️" | "🙆‍♀️" | "🙆‍♀️" | "🙆‍♂️" | "🙇‍♀️" | "🙇‍♂️" | "🙇‍♂️" | "🙈" | "🙉" | "🙊" | "🙋‍♀️" | "🙋‍♀️" | "🙋‍♂️" | "🙌" | "🙍‍♀️" | "🙍‍♀️" | "🙍‍♂️" | "🙎‍♀️" | "🙎‍♀️" | "🙎‍♂️" | "🙏" | "🚀" | "🚁" | "🚂" | "🚃" | "🚄" | "🚅" | "🚆" | "🚇" | "🚈" | "🚉" | "🚊" | "🚋" | "🚌" | "🚍" | "🚎" | "🚏" | "🚐" | "🚑" | "🚒" | "🚓" | "🚔" | "🚕" | "🚖" | "🚗" | "🚗" | "🚘" | "🚙" | "🚚" | "🚛" | "🚜" | "🚝" | "🚞" | "🚟" | "🚠" | "🚡" | "🚢" | "🚣‍♀️" | "🚣‍♂️" | "🚣‍♂️" | "🚤" | "🚥" | "🚦" | "🚧" | "🚨" | "🚩" | "🚪" | "🚫" | "🚬" | "🚭" | "🚮" | "🚯" | "🚰" | "🚱" | "🚲" | "🚳" | "🚴‍♀️" | "🚴‍♂️" | "🚴‍♂️" | "🚵‍♀️" | "🚵‍♂️" | "🚵‍♂️" | "🚶‍♀️" | "🚶‍♂️" | "🚶‍♂️" | "🚷" | "🚸" | "🚹" | "🚺" | "🚻" | "🚼" | "🚽" | "🚾" | "🚿" | "🛀" | "🛁" | "🛂" | "🛃" | "🛄" | "🛅" | "🛋️" | "🛌" | "🛍️" | "🛎️" | "🛏️" | "🛐" | "🛑" | "🛒" | "🛕" | "🛖" | "🛗" | "🛠️" | "🛡️" | "🛢️" | "🛣️" | "🛤️" | "🛥️" | "🛩️" | "🛫" | "🛬" | "🛰️" | "🛳️" | "🛴" | "🛵" | "🛶" | "🛷" | "🛸" | "🛹" | "🛺" | "🛻" | "🛼" | "🟠" | "🟡" | "🟢" | "🟣" | "🟤" | "🟥" | "🟦" | "🟧" | "🟨" | "🟩" | "🟪" | "🟫" | "🤌" | "🤍" | "🤎" | "🤏" | "🤐" | "🤑" | "🤒" | "🤓" | "🤔" | "🤕" | "🤖" | "🤗" | "🤘" | "🤘" | "🤙" | "🤚" | "🤛" | "🤜" | "🤝" | "🤞" | "🤞" | "🤟" | "🤠" | "🤡" | "🤢" | "🤣" | "🤤" | "🤥" | "🤦‍♀️" | "🤦‍♂️" | "🤦" | "🤧" | "🤨" | "🤨" | "🤩" | "🤩" | "🤪" | "🤪" | "🤫" | "🤫" | "🤬" | "🤬" | "🤭" | "🤭" | "🤮" | "🤮" | "🤯" | "🤯" | "🤰" | "🤱" | "🤲" | "🤳" | "🤴" | "🤵‍♀️" | "🤵‍♂️" | "🤵" | "🤶" | "🤶" | "🤷‍♀️" | "🤷‍♂️" | "🤷" | "🤸‍♀️" | "🤸‍♂️" | "🤸" | "🤹‍♀️" | "🤹‍♂️" | "🤹" | "🤺" | "🤼‍♀️" | "🤼‍♂️" | "🤼" | "🤽‍♀️" | "🤽‍♂️" | "🤽" | "🤾‍♀️" | "🤾‍♂️" | "🤾" | "🤿" | "🥀" | "🥁" | "🥂" | "🥃" | "🥄" | "🥅" | "🥇" | "🥈" | "🥉" | "🥊" | "🥋" | "🥌" | "🥍" | "🥎" | "🥏" | "🥐" | "🥑" | "🥒" | "🥓" | "🥔" | "🥕" | "🥖" | "🥗" | "🥘" | "🥙" | "🥚" | "🥛" | "🥜" | "🥝" | "🥞" | "🥟" | "🥠" | "🥡" | "🥢" | "🥣" | "🥤" | "🥥" | "🥦" | "🥧" | "🥨" | "🥩" | "🥪" | "🥫" | "🥬" | "🥭" | "🥮" | "🥯" | "🥰" | "🥱" | "🥲" | "🥳" | "🥴" | "🥵" | "🥶" | "🥷" | "🥸" | "🥺" | "🥻" | "🥼" | "🥽" | "🥾" | "🥿" | "🦀" | "🦁" | "🦂" | "🦃" | "🦄" | "🦅" | "🦆" | "🦇" | "🦈" | "🦉" | "🦊" | "🦋" | "🦌" | "🦍" | "🦎" | "🦏" | "🦐" | "🦑" | "🦒" | "🦓" | "🦔" | "🦕" | "🦖" | "🦗" | "🦘" | "🦙" | "🦚" | "🦛" | "🦜" | "🦝" | "🦞" | "🦟" | "🦠" | "🦡" | "🦢" | "🦣" | "🦤" | "🦥" | "🦦" | "🦧" | "🦨" | "🦩" | "🦪" | "🦫" | "🦬" | "🦭" | "🦮" | "🦯" | "🦴" | "🦵" | "🦶" | "🦷" | "🦸‍♀️" | "🦸‍♂️" | "🦸" | "🦹‍♀️" | "🦹‍♂️" | "🦹" | "🦺" | "🦻" | "🦼" | "🦽" | "🦾" | "🦿" | "🧀" | "🧁" | "🧂" | "🧃" | "🧄" | "🧅" | "🧆" | "🧇" | "🧈" | "🧉" | "🧊" | "🧋" | "🧍‍♀️" | "🧍‍♂️" | "🧍" | "🧎‍♀️" | "🧎‍♂️" | "🧎" | "🧏‍♀️" | "🧏‍♂️" | "🧏" | "🧐" | "🧑‍🌾" | "🧑‍🍳" | "🧑‍🍼" | "🧑‍🎄" | "🧑‍🎓" | "🧑‍🎤" | "🧑‍🎨" | "🧑‍🏫" | "🧑‍🏭" | "🧑‍💻" | "🧑‍💼" | "🧑‍🔧" | "🧑‍🔬" | "🧑‍🚀" | "🧑‍🚒" | "🧑‍🤝‍🧑" | "🧑‍🦯" | "🧑‍🦰" | "🧑‍🦱" | "🧑‍🦲" | "🧑‍🦳" | "🧑‍🦼" | "🧑‍🦽" | "🧑‍⚕️" | "🧑‍⚖️" | "🧑‍✈️" | "🧑" | "🧒" | "🧓" | "🧔‍♀️" | "🧔‍♂️" | "🧔" | "🧕" | "🧖‍♀️" | "🧖‍♂️" | "🧖‍♂️" | "🧗‍♀️" | "🧗‍♀️" | "🧗‍♂️" | "🧘‍♀️" | "🧘‍♀️" | "🧘‍♂️" | "🧙‍♀️" | "🧙‍♀️" | "🧙‍♂️" | "🧚‍♀️" | "🧚‍♀️" | "🧚‍♂️" | "🧛‍♀️" | "🧛‍♀️" | "🧛‍♂️" | "🧜‍♀️" | "🧜‍♂️" | "🧜‍♂️" | "🧝‍♀️" | "🧝‍♂️" | "🧝‍♂️" | "🧞‍♀️" | "🧞‍♂️" | "🧞‍♂️" | "🧟‍♀️" | "🧟‍♂️" | "🧟‍♂️" | "🧠" | "🧡" | "🧢" | "🧣" | "🧤" | "🧥" | "🧦" | "🧧" | "🧨" | "🧩" | "🧪" | "🧫" | "🧬" | "🧭" | "🧮" | "🧯" | "🧰" | "🧱" | "🧲" | "🧳" | "🧴" | "🧵" | "🧶" | "🧷" | "🧸" | "🧹" | "🧺" | "🧻" | "🧼" | "🧽" | "🧾" | "🧿" | "🩰" | "🩱" | "🩲" | "🩳" | "🩴" | "🩸" | "🩹" | "🩺" | "🪀" | "🪁" | "🪂" | "🪃" | "🪄" | "🪅" | "🪆" | "🪐" | "🪑" | "🪒" | "🪓" | "🪔" | "🪕" | "🪖" | "🪗" | "🪘" | "🪙" | "🪚" | "🪛" | "🪜" | "🪝" | "🪞" | "🪟" | "🪠" | "🪡" | "🪢" | "🪣" | "🪤" | "🪥" | "🪦" | "🪧" | "🪨" | "🪰" | "🪱" | "🪲" | "🪳" | "🪴" | "🪵" | "🪶" | "🫀" | "🫁" | "🫂" | "🫐" | "🫑" | "🫒" | "🫓" | "🫔" | "🫕" | "🫖" | "‼️" | "⁉️" | "™️" | "ℹ️" | "↔️" | "↕️" | "↖️" | "↗️" | "↘️" | "↙️" | "↩️" | "↪️" | "⌚" | "⌛" | "⌨️" | "⏏️" | "⏩" | "⏪" | "⏫" | "⏬" | "⏭️" | "⏮️" | "⏯️" | "⏰" | "⏱️" | "⏲️" | "⏳" | "⏸️" | "⏹️" | "⏺️" | "Ⓜ️" | "▪️" | "▫️" | "▶️" | "◀️" | "◻️" | "◼️" | "◽" | "◾" | "☀️" | "☁️" | "☂️" | "☃️" | "☄️" | "☎️" | "☎️" | "☑️" | "☘️" | "☝️" | "☠️" | "☢️" | "☣️" | "☦️" | "☪️" | "☮️" | "☯️" | "☸️" | "☹️" | "☺️" | "♀️" | "♂️" | "♊" | "♋" | "♌" | "♍" | "♎" | "♏" | "♟️" | "♠️" | "♣️" | "♥️" | "♦️" | "♨️" | "♻️" | "♾️" | "♿" | "⚒️" | "⚔️" | "⚕️" | "⚕️" | "⚖️" | "⚗️" | "⚙️" | "⚛️" | "⚜️" | "⚠️" | "⚡" | "⚧️" | "⚪" | "⚫" | "⚰️" | "⚱️" | "⚽" | "⚾" | "⛄" | "⛅" | "⛈️" | "⛎" | "⛏️" | "⛑️" | "⛓️" | "⛔" | "⛩️" | "⛪" | "⛰️" | "⛱️" | "⛲" | "⛳" | "⛴️" | "⛵" | "⛵" | "⛷️" | "⛸️" | "⛹️‍♀️" | "⛹️‍♂️" | "⛹️‍♂️" | "⛺" | "⛽" | "✂️" | "✈️" | "✉️" | "✉️" | "✊" | "✋" | "✋" | "✌️" | "✍️" | "✏️" | "✒️" | "✔️" | "✖️" | "✝️" | "✡️" | "✳️" | "✴️" | "❄️" | "❇️" | "❌" | "❎" | "❣️" | "❤️‍🔥" | "❤️‍🩹" | "❤️" | "➡️" | "➰" | "➿" | "⤴️" | "⤵️" | "⬅️" | "⬆️" | "⬇️" | "⬛" | "⬜" | "⭐" | "⭕" | "〰️" | "〽️" | "㊗️" | "㊙️" | "�" | "�" | "�" | "�" | "🇪" | "�" | "�" | "�" | "�" | "�" | "�" | "�" | "�" | "🇳" | "�" | "🇵" | "�" | "�" | "�" | "�" | "�" | "�" | "�" | "�" | "�" | "�"
