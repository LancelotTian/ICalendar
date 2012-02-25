package net.tl.icalendar.js;

public class EscapeToOct  implements JsEscape{

	/**
	 * 
	 * @param sourceStr 原始字符串
	 * @return	将原始字符串转化成八进制表示
	 * 
	 *	<	\74
	 * 	>	\76
	 * 	'	\47
	 * 	\	\\
	 * 	=	\75
	 * 	"	\42
	 * 	&	\46
	 * 如果以上字符是sourceStr的最后一个字符或者其后续字符是一个数字时需要在\和数字之间加0（\\除外）
	 * @deprecated 未来版本可能使用
	 */
	public String escape(String source) {
		// TODO Auto-generated method stub
		return null;
	}

}
