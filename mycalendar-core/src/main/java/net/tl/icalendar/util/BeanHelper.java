/**
 * 
 */
package net.tl.icalendar.util;

import java.beans.PropertyDescriptor;
import java.util.Collection;

import org.apache.commons.beanutils.PropertyUtils;

/**
 * @author ray
 * 
 */
public class BeanHelper {


	/**
	 * Copy properties of orig to dest Exception the Entity and Collection Type
	 * 
	 * @param dest
	 * @param orig
	 * @return the dest bean
	 */
	public static Object copyProperties(Object dest, Object orig) {
		if (dest == null || orig == null) {
			return dest;
		}

		PropertyDescriptor[] destDesc = PropertyUtils
				.getPropertyDescriptors(dest);
		try {
			for (int i = 0; i < destDesc.length; i++) {
				Class destType = destDesc[i].getPropertyType();
				Class origType = PropertyUtils.getPropertyType(orig,
						destDesc[i].getName());
				if (destType != null && destType.equals(origType)
						&& !destType.equals(Class.class)) {
					if (!Collection.class.isAssignableFrom(origType)) {
						try {
							Object value = PropertyUtils.getProperty(orig,
									destDesc[i].getName());
							PropertyUtils.setProperty(dest, destDesc[i]
									.getName(), value);
						} catch (Exception ex) {
						}
					}
				}
			}

			return dest;
		} catch (Exception ex) {
			ex.printStackTrace();
			// throw new CopyException(ex);
			// return dest;
		}

		return dest;
	}

	/**
	 * Copy properties of orig to dest Exception the Entity and Collection Type
	 * 
	 * @param dest
	 * @param orig
	 * @param ignores
	 * @return the dest bean
	 */
	public static Object copyProperties(Object dest, Object orig,
			String[] ignores,boolean ignoreNull) {
		if (dest == null || orig == null) {
			return dest;
		}

		PropertyDescriptor[] destDesc = PropertyUtils
				.getPropertyDescriptors(dest);
		try {
			for (int i = 0; i < destDesc.length; i++) {
				if (contains(ignores, destDesc[i].getName())) {
					continue;
				}

				Class destType = destDesc[i].getPropertyType();
				Class origType = PropertyUtils.getPropertyType(orig,
						destDesc[i].getName());
				if (destType != null && destType.equals(origType)
						&& !destType.equals(Class.class)) {
					if (!Collection.class.isAssignableFrom(origType)) {
						Object value = PropertyUtils.getProperty(orig,
								destDesc[i].getName());
						
						if(ignoreNull){
							if(null!=value){
								PropertyUtils.setProperty(dest, destDesc[i].getName(),
										value);
							}
						}else{
							
							PropertyUtils.setProperty(dest, destDesc[i].getName(),
									value);
						}
					}
				}
			}

			return dest;
		} catch (Exception ex) {
			ex.printStackTrace();
			// throw new CopyException(ex);
		}

		return dest;
	}

	public static boolean contains(String[] ignores, String name) {
		boolean ignored = false;
		for (int j = 0; ignores != null && j < ignores.length; j++) {
			if (ignores[j].equals(name)) {
				ignored = true;
				break;
			}
		}

		return ignored;
	}


	

	// �ж��Ƿ�������
	public static boolean isNumeric(String s) {
		if ((s != null) && (s != ""))
			return s.matches("^[0-9]*$");
		else
			return false;
	}

	// �жϴ���4���Ƿ�������
	public static int checkID(String s) {
		if ((s == null) || (s.length() == 0) || !s.matches("^[0-9]*$")) {
			return 0;
		} else {
			if (s.length() < 10) {
				return Integer.parseInt(s);
			} else {
				return 0;
			}
		}
	}

	// �жϴ���4���Ƿ����ַ�
	public static String checkString(String s) {
		if ((s == null) || (s.length() == 0) || s.matches("^[0-9]*$")) {
			return "";
		} else {
			return s;
		}
	}
	
	public static boolean isNullOrEmpty(String str){
		
		if(null == str) return true;
		
		if("".equals(str.trim())) return true;
		
		return false;
	}
	
	public static boolean isNullOrEmpty(String[] strs){
		
		if(null == strs) return true;
		
		if(strs.length == 0) return true;
		
		return false;
	}

	
}
