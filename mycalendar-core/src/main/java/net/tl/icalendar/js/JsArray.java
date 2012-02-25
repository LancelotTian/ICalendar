package net.tl.icalendar.js;

import java.util.ArrayList;
import java.util.List;



public class JsArray extends JsElement {
	private List list;
	
	public JsArray(){
		list = new ArrayList();
		type = JsElement.ARRAY;
	}
	
	public static JsArray fromString(String str){
		JsArray jsa = new JsArray();
		int leftSquareBracket = 0;
		
		boolean inStrElement = false;
		int startIndex = 1;
		for(int i=1;i<str.length()-1;i++){
			char curC = str.charAt(i);
			switch(curC){
			case '[':
					if(!inStrElement)
						leftSquareBracket++;
					break;
			case '\'':
					inStrElement = !inStrElement;
					break;
			case ',':
					if(!inStrElement&&leftSquareBracket==0){
						String substr = str.substring(startIndex, i);
						int type = JsElement.getElementType(substr);
						switch(type){
							case JsElement.NONE:
								jsa.putJsNone();
								break;
							case JsElement.NULL:
								jsa.putJsNull();
								break;
							case JsElement.STRING:
								int len = substr.length();
								substr = substr.substring(1,len-1);
								jsa.putJsString(substr);
								break;
							case JsElement.INTEGER:
								jsa.putJsLong(new Long(Long.parseLong(substr)));
								break;
							case JsElement.ARRAY:
								jsa.putJsArray(JsArray.fromString(substr));
								break;
						}
						startIndex = i+1;
					}
					break;
			case ']':
					if(!inStrElement)
						leftSquareBracket--;
					break;
			default:;
			}
		}
		
		String substr = str.substring(startIndex,str.length()-1);
		int type = JsElement.getElementType(substr);
		switch(type){
			case JsElement.NONE:
				jsa.putJsNone();
				break;
			case JsElement.NULL:
				jsa.putJsNull();
				break;
			case JsElement.STRING:
				int len = substr.length();
				substr = substr.substring(1,len-1);
				jsa.putJsString(substr);
				break;
			case JsElement.INTEGER:
				jsa.putJsLong(new Long(Long.parseLong(substr)));
				break;
			case JsElement.ARRAY:
				jsa.putJsArray(JsArray.fromString(substr));
				break;
		}
		
		return jsa;
	}
	
	public int size(){
		return list.size();
	}
	
	//put
	public JsArray putJsString(int index,String str){
		list.add(index, new JsString(str));
		return this;
	}
	
	public JsArray putJsString(int index,String str,JsEscape jsEscape){
		list.add(index, new JsString(jsEscape.escape(str)));
		return this;
	}
	
	public JsArray putJsLong(int index,Long l){
		list.add(index, new JsLong(l));
		return this;
	}
	
	public JsArray putJsLong(int index,long l){
		list.add(index, new JsLong(new Long(l)));
		return this;
	}
	
	public JsArray putJsArray(int index,JsArray jsArray){
		list.add(index,jsArray);
		return this;
	}
	
	public JsArray putJsNone(int index){
		list.add(index,new JsNone());
		return this;
	}
	
	public JsArray putJsNull(int index){
		list.add(index, new JsNull());
		return this;
	}
	
	public JsArray putJsString(String str){
		return this.putJsString(this.size(),str);
	}
	
	public JsArray putJsString(String str,JsEscape jsEscape){
		return this.putJsString(this.size(),str,jsEscape);
	}
	
	public JsArray putJsLong(Long l){
		return  this.putJsLong(this.size(),l);
	}
	
	public JsArray putJsLong(long l){
		return  this.putJsLong(this.size(),l);
	}
	
	public JsArray putJsArray(JsArray jsArray){
		return this.putJsArray(this.size(),jsArray);
	}
	
	public JsArray putJsNone(){
		return this.putJsNone(this.size());
	}
	
	public JsArray putJsNull(){
		return this.putJsNull(this.size());
	}
	
	//get 
	public Long getJsLong(int index){
		JsElement e = (JsElement) list.get(index);
		if(e.type!=JsElement.LONG) return null;
		return (Long)e.value;
	}
	
	public String getJsString(int index){
		JsElement e = (JsElement) list.get(index);
		if(e.type!=JsElement.STRING) return null;
		return (String)e.value;
	}
	
	public String getJsString(int index,JsEscape jsEscape){
		JsElement e = (JsElement) list.get(index);
		if(e.type!=JsElement.STRING) return null;
		return jsEscape.escape((String)e.value);
	}
	
	public JsArray getJsArray(int index){
		JsElement e = (JsElement) list.get(index);
		if(e.type!=JsElement.ARRAY) return null;
		return (JsArray)e;
	}
	
	public boolean isJsNull(int index){
		JsElement e = (JsElement) list.get(index);
		return e.type==JsElement.NULL;
	}
	
	public boolean isJsNone(int index){
		JsElement e = (JsElement) list.get(index);
		return e.type==JsElement.NONE;
	}
	
	public JsElement get(int index){
		return (JsElement) list.get(index);
	}
	
	//remove
	public Object remove(int index){
		if(index>=this.size()) return null;
		JsElement e = (JsElement) list.remove(index);
		if(e.type!=JsElement.ARRAY) return e.value;
		else return e;
	}
	
	public Object remove(){
		return this.remove(this.size()-1);
	}
	
	public String toString(){
		StringBuffer strBuf = new StringBuffer("[");
		for(int i=0;i<list.size();i++){
			JsElement curE = (JsElement) list.get(i);
			if(i>0) strBuf.append(",");
			 strBuf.append(curE.toString());
		}
		return strBuf.append("]").toString();
	}
}
