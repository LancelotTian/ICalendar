package net.tl.icalendar.format.ws;

import java.util.List;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

public class Results2XMLInWs {
	
	public static String results2XMLStr(List results){
		Document doc = DocumentHelper.createDocument();
		Element root = doc.addElement("results");
		root.addAttribute("xmlerror", "false");
		
		int opernum = results.size();
		int successnum = 0;
		int failnum = 0;
		for(int i=0;i<opernum;i++){
			ResultInWs re = (ResultInWs) results.get(i);
			Element e_result = root.addElement("result");
			e_result.addAttribute("sequence", re.getSequence());
			e_result.addAttribute("success", ""+re.isSuccess());
			
			Element e_return = e_result.addElement("return");
			Element e_errmsg = e_result.addElement("errmsg");
			
			if(re.isSuccess()){
				successnum++;
				if(re.getRetvalue()!=null)
					e_return.setText(re.getRetvalue().toString());
			}else{
				failnum++;
				e_errmsg.setText(re.getErrmsg());
			}
		}
		
		root.addAttribute("opernum", ""+opernum);
		root.addAttribute("successnum", ""+successnum);
		root.addAttribute("failnum", ""+failnum);
		
		return doc.asXML();
	}
	
	public static String results2XMLStr(String xmlerror){
		Document doc = DocumentHelper.createDocument();
		Element root = doc.addElement("results");
		root.addAttribute("xmlerror", "true");
		Element e_xmlerrormsg = root.addElement("xmlerrormsg");
		e_xmlerrormsg.setText(xmlerror);
		return doc.asXML();
	}

}
