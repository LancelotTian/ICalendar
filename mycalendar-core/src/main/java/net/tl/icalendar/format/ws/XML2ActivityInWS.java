package net.tl.icalendar.format.ws;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

import net.tl.icalendar.beans.Activity;
import net.tl.icalendar.util.CalendarBeanUtil;

public class XML2ActivityInWS {
	protected String xml;
	protected Document doc;
	private Element root;
	
	private static final String ATTR_OPER = "oper";
	private static final String ATTR_SEQUENCE = "sequence";
	private static final String ATTR_TYPE = "type";
	private static final String ATTR_ID = "id";
	
	private static final String ELE_SECID = "secid";
	private static final String ELE_ACTIVITY = "activity";
	private static final String ELE_STIM = "stim";
	private static final String ELE_ETIM = "etim";
	private static final String ELE_EREMS = "erems";
	private static final String ELE_EREM = "erem";
	private static final String ELE_ICC = "icc";
	private static final String ELE_TRP = "trp";
	private static final String ELE_LOCATION = "location";
	private static final String ELE_DETAILS = "details";
	private static final String ELE_TEXT = "text";
	
	private static final String OPER_ADD = "add";
	private static final String OPER_MODIFY = "modify";
	private static final String OPER_DELETE = "delete";
	
	public XML2ActivityInWS(String xml) throws DocumentException{
		this.xml = xml;
		this.doc = DocumentHelper.parseText(xml);
	}
	
	private Element getRoot(){
		if(this.root==null)
			this.root = doc.getRootElement();
		return this.root;
	}
	
	private String getOpertype() throws DocumentException{
		Attribute a_oper = this.getRoot().attribute(ATTR_OPER);
		if(a_oper==null)
			throw new DocumentException("### %Error XML ,No 'oper' attribute of element activities in xml!% ###");
		String oper = a_oper.getText();
		if(oper==null||oper.trim().equals(""))
			throw new DocumentException("### %Error XML ,Invalidate 'oper' attribute(null or \"\") of element activities in xml!% ###");
		oper = oper.trim().toLowerCase();
		if(!oper.equalsIgnoreCase(OPER_ADD)&&!oper.equalsIgnoreCase(OPER_DELETE)&&!oper.equalsIgnoreCase(OPER_MODIFY))
			throw new DocumentException("### %Error XML ,Invalidate 'oper' attribute(must be 'add'、'delete'、'modify') of element activities in xml!% ###");
		
		return oper;
	}
	
	private String getSecid(){
		Element e_secid = this.getRoot().element(ELE_SECID);
		String secid = null;
		if(e_secid==null) return null;
		secid = e_secid.getText().trim();
		if(secid.equals("")) return null;
		return secid;
	}
	
//	private String getCalendarid(){
//		Element e_calid = this.getRoot().element("calid");
//		String calid = null;
//		if(e_calid==null) return null;
//		calid = e_calid.getText().trim();
//		if(calid.equals("")) return null;
//		return calid;
//	}
	
	/**
	 * 
	 * 根据接收到的xml解析本次操作信息，详细说明看调用的各个方法
	 * 
	 * @return
	 * @throws DocumentException
	 */
	public List getInfoByXml() throws DocumentException{
		String oper = this.getOpertype();
		if(oper.equalsIgnoreCase(OPER_ADD))
			return this.getActs4Add();
		else if(oper.equalsIgnoreCase(OPER_MODIFY))
			return this.getActinfo4Modify();
		else if(oper.equalsIgnoreCase(OPER_DELETE))
			return this.getActids4Delete();
		return null;
	}
	
	/**
	 * 
	 * 由xml中解析出所有要添加的活动集合
	 * 
	 * @return List<Object[2]> 本次添加的活动集合,Object[0]<String>添加活动操作在xml中的唯一标识，用以处理返回值；Object[1]<Activity>实际要添加的活动bean
	 * @throws DocumentException
	 */
	private List getActs4Add() throws DocumentException{
		String secid = this.getSecid();
		if(secid==null||secid.equals(""))
			throw new DocumentException("### %Error XML ,No secid in add operation!% ###");
		List ret = new ArrayList();

		Element root = this.getRoot();
		Iterator it= root.elementIterator(ELE_ACTIVITY);
		
		while(it.hasNext()){
			Object[] sequence_act = new Object[2]; 
			Element e_act = (Element)it.next();
			
			
			//get sequence from xml
			Attribute a_sequence = e_act.attribute(ATTR_SEQUENCE);
			if(a_sequence==null) //appid must be used in add operation
				throw new DocumentException("### %Error XML ,No sequence in add operation!% ###");
			String sequence = a_sequence.getText();
			if(sequence==null||sequence.trim().equals("")) //appid must be validate in add operation
				throw new DocumentException("### %Error XML ,Invalidate sequence(null or \"\") in add operation!% ###");
			
			sequence_act[0] = sequence;
			
//			//get idinapp from xml
//			Attribute a_idinapp = e_act.attribute("idinapp");
//			if(a_idinapp==null)//idinapp must be used in add operation
//				throw new DocumentException("### %Error XML ,No idinapp in add operation!% ###");
//			String idinapp = a_idinapp.getText();
//			if(idinapp==null||idinapp.equals(""))
//				throw new DocumentException("### %Error XML ,Invalidate idinapp(null or \"\") in add operation!% ###");
			
			//get acitivty 'startTime' attribute
			Element e_stim = e_act.element(ELE_STIM);
			if(e_stim==null) 
				throw new DocumentException("### %Error XML ,No stim in add operation!% ###");
			String stim = e_stim.getText();
			if(stim==null||stim.equals(""))
				throw new DocumentException("### %Error XML ,Invalidate stim(null or \"\") in add operation!% ###");
			Date stimd = CalendarBeanUtil.dateStrToDate(stim);
			if(stimd==null )
				throw new DocumentException("### %Error XML ,Invalidate stim(" + stim + " not matchs 20090910T122200) in add operation!% ###");
			
			//get acitivty 'endTime' attribute
			Element e_etim = e_act.element(ELE_ETIM);
			if(e_etim==null) 
				throw new DocumentException("### %Error XML ,No stim in add operation!% ###");
			String etim = e_etim.getText();
			if(etim==null||etim.equals(""))
				throw new DocumentException("### %Error XML ,Invalidate etim(null or \"\") in add operation!% ###");
			Date etimd = CalendarBeanUtil.dateStrToDate(etim);
			if(etimd==null )
				throw new DocumentException("### %Error XML ,Invalidate etim(" + etim + " not matchs 20090910T122200) in add operation!% ###");
		
			if(stimd.getTime()>=etimd.getTime())
				throw new DocumentException("### %Error XML ,Stim should not be larger than etim in add operation!% ###");
			
			Activity act = new Activity();
			act.setSecid(secid);
			act.setStartTime(stimd);
			act.setEndTime(etimd);
			
			//get acitivty 'erem' attribute
			Element e_erems = e_act.element(ELE_EREMS);
			if(e_erems!=null){
				StringBuffer stb = new StringBuffer("");
				Iterator itErem = e_erems.elementIterator(ELE_EREM);
				while(itErem.hasNext()){
					Element e_erem = (Element) itErem.next();
					//get type of erem
					Attribute a_type = e_erem.attribute(ATTR_TYPE);
					if(a_type==null)
						throw new DocumentException("### %Error XML ,No type of erem[" + e_erem.asXML() + "] in add operation!% ###");
					String type = a_type.getText();
					if(type==null||type.equals(""))
						throw new DocumentException("### %Error XML ,Invalidate type(null or \"\") of erem[" + e_erem.asXML() + "] in add operation!% ###");
					if(!type.equals("1")&&!type.equals("2")&&!type.equals("3"))//提醒方式不存在
						throw new DocumentException("### %Error XML ,Invalidate type[" + type + "] of erem[" + e_erem.asXML() + "] in add operation!% ###");
					
					if(stb.length()>0) stb.append(";");	//添加分隔字符
					stb.append(type + ":");
					
					//get value of erme
					String erem = e_erem.getText();
					if(erem==null||erem.equals(""))
						throw new DocumentException("### %Error XML ,No erem value(null or \"\") of erem[" + e_erem.asXML() + "] in add operation!% ###");
					try{
						int tmpe = Integer.parseInt(erem); 
						if(tmpe<=0) throw new Exception();
					}catch (Exception e) {
						throw new DocumentException("### %Error XML ,Invalid erem value(should be number and >0) of erem[" + e_erem.asXML() + "] in add operation!% ###");
					}
					stb.append(erem);
					
				}
				
				act.setErem(stb.toString());
			}
			
			//get acitivty 'text' attribute
			Element e_text = e_act.element(ELE_TEXT);
			if(e_text!=null){
				String text = e_text.getText();
				if(text!=null)
					act.setText(text);
			}
			
			//get acitivty 'details' attribute
			Element e_details = e_act.element(ELE_DETAILS);
			if(e_details!=null){
				String details = e_details.getText();
				if(details!=null)
					act.setDetails(details);
			}
			
			//get acitivty 'details' attribute
			Element e_location = e_act.element(ELE_LOCATION);
			if(e_location!=null){
				String location = e_location.getText();
				if(location!=null)
					act.setLocation(location);
			}
			
			//get activity 'icc' attribute
			Element e_icc = e_act.element(ELE_ICC);
			if(e_icc!=null){
				String icc = e_icc.getText();
				if(icc!=null){
					icc = icc.trim().toUpperCase();
					if(!icc.equals("DEFAULT")&&!icc.equals("PRIVATE")&&!icc.equals("PUBLIC"))
						throw new DocumentException("### %Error XML ,Invalid value of icc[" + e_icc.asXML() + "] in add operation!% ###");
					act.setIcc(icc);
				}
			}
			
			
			Element e_trp = e_act.element(ELE_TRP);
			if(e_trp!=null){
				String trp = e_trp.getText();
				if(trp!=null){
					trp = trp.trim().toUpperCase();
					act.setTrp(new Boolean(trp.equalsIgnoreCase("true")));
				}
			}
			
			sequence_act[1] = act;
			ret.add(sequence_act);
		}
		
		return ret;
	}
	
	/**
	 * 
	 * 由xml中解析出所有要删除的活动标识集合，或者为日历应用中的id，或者为外部应用标识和在外部应用中的id联合
	 * 
	 * @return List<Object[2]> 本次要删除的活动标识集合,Object[0]<String>删除活动操作在xml中的唯一标识，用以处理返回值；Object[1]<String>实际要删除活动的id
	 * @throws DocumentException
	 */
	private List getActids4Delete() throws DocumentException{
		List ret = new ArrayList();

		Element root = this.getRoot();
		Iterator it= root.elementIterator(ELE_ACTIVITY);
		
		
		while(it.hasNext()){
			Object[] sequence_act = new Object[2]; 
			Element e_act = (Element)it.next();
			
			//get sequence from xml
			Attribute a_sequence = e_act.attribute(ATTR_SEQUENCE);
			if(a_sequence==null) //appid must be used in add operation
				throw new DocumentException("### %Error XML ,No sequence in delete operation!% ###");
			String sequence = a_sequence.getText();
			if(sequence==null||sequence.trim().equals("")) //appid must be validate in add operation
				throw new DocumentException("### %Error XML ,Invalidate sequence(null or \"\") in delete operation!% ###");
			
			sequence_act[0] = sequence;
			
			//get Activity id from xml
			Attribute a_id = e_act.attribute(ATTR_ID);
			if(a_id==null)
				throw new DocumentException("### %Error XML ,No id in delete operation!% ###");
			String id = a_id.getText();
			if(id==null||id.trim().equals(""))
				throw new DocumentException("### %Error XML ,Invalidate id(null or \"\") in delete operation!% ###");
			
			sequence_act[1] = id;
			
			ret.add(sequence_act);
		}
		
		return ret;
	}
	
	/**
	 * 
	 * 由xml中解析出所有要修改的活动信息
	 * 
	 * @return List<Object[2]> 本次要修改的活动信息集合,Object[0]<String>修改活动操作在xml中的唯一标识，用以处理返回值；Object[1]<HashMap>实际要修改的活动
	 * 信息,其中key=id的value表示要修改活动的id
	 * @throws DocumentException
	 */
	private List getActinfo4Modify() throws DocumentException{
		
		List ret = new ArrayList();

		Element root = this.getRoot();
		Iterator it= root.elementIterator(ELE_ACTIVITY);
		
		while(it.hasNext()){
			Object[] sequece_map = new Object[2];
			Element e_act = (Element)it.next();
			
			//get sequence from xml
			Attribute a_sequence = e_act.attribute(ATTR_SEQUENCE);
			if(a_sequence==null) //appid must be used in add operation
				throw new DocumentException("### %Error XML ,No sequence in modify operation!% ###");
			String sequence = a_sequence.getText();
			if(sequence==null||sequence.trim().equals("")) //appid must be validate in add operation
				throw new DocumentException("### %Error XML ,Invalidate sequence(null or \"\") in modify operation!% ###");
			
			sequece_map[0] = sequence;
			
			//get Activity id from xml
			Attribute a_id = e_act.attribute(ATTR_ID);
			if(a_id==null)
				throw new DocumentException("### %Error XML ,No id in modify operation!% ###");
			String id = a_id.getText();
			if(id==null||id.trim().equals(""))
				throw new DocumentException("### %Error XML ,Invalidate id(null or \"\") in modify operation!% ###");
			
			Map props = new HashMap();
			props.put("id", id);
			
			//get acitivty 'startTime' and 'endTime' attribute
			Element e_stim = e_act.element(ELE_STIM);
			Element e_etim = e_act.element(ELE_ETIM);
			if((e_stim==null)^(e_etim==null))
				throw new DocumentException("### %Error XML ,Element stim and etim must exist or not exist at the same time in modify operation!% ###");
			
			if(e_stim!=null && e_etim!=null){ 
				String stim = e_stim.getText();
				if(stim==null||stim.equals(""))
					throw new DocumentException("### %Error XML ,Invalidate stim(null or \"\") in modify operation!% ###");
				Date stimd = CalendarBeanUtil.dateStrToDate(stim);
				if(stimd==null )
					throw new DocumentException("### %Error XML ,Invalidate stim(" + stim + " not matchs 20090910T122200) in modify operation!% ###");
				
				
				String etim = e_etim.getText().trim();
				if(etim==null||etim.equals(""))
					throw new DocumentException("### %Error XML ,Invalidate etim(null or \"\") in modify operation!% ###");
				Date etimd = CalendarBeanUtil.dateStrToDate(etim);
				if(etimd==null )
					throw new DocumentException("### %Error XML ,Invalidate etim(" + etim + " not matchs 20090910T122200) in modify operation!% ###");
				
				if(stimd.getTime()>=etimd.getTime())
					throw new DocumentException("### %Error XML ,Stim should not be larger than etim in modify operation!% ###");
		
				props.put("startTime", stimd);
				props.put("endTime", etimd);
			}
			
			
			//get acitivty 'erem' attribute
			Element e_erems = e_act.element(ELE_EREMS);
			if(e_erems!=null){
				StringBuffer stb = new StringBuffer("");
				Iterator itErem = e_erems.elementIterator(ELE_EREM);
				while(itErem.hasNext()){
					Element e_erem = (Element) itErem.next();
					//get type of erem
					Attribute a_type = e_erem.attribute(ATTR_TYPE);
					if(a_type==null)
						throw new DocumentException("### %Error XML ,No type of erem[" + e_erem.asXML() + "] in modify operation!% ###");
					String type = a_type.getText().trim();
					if(type==null||type.equals(""))
						throw new DocumentException("### %Error XML ,Invalidate type(null or \"\") of erem[" + e_erem.asXML() + "] in modify operation!% ###");
					if(!type.equals("1")&&!type.equals("2")&&!type.equals("3"))//提醒方式不存在
						throw new DocumentException("### %Error XML ,Invalidate type[" + type + "] of erem[" + e_erem.asXML() + "] in modify operation!% ###");
					
					if(stb.length()>0) stb.append(";");	//添加分隔字符
					stb.append(type + ":");
					
					//get value of erme
					String erem = e_erem.getText().trim();
					if(erem==null||erem.equals(""))
						throw new DocumentException("### %Error XML ,No erem value(null or \"\") of erem[" + e_erem.asXML() + "] in modify operation!% ###");
					try{
						int tmpe = Integer.parseInt(erem); 
						if(tmpe<=0) throw new Exception();
					}catch (Exception e) {
						throw new DocumentException("### %Error XML ,Invalid erem value(should be number and >0) of erem[" + e_erem.asXML() + "] in modify operation!% ###");
					}
					stb.append(erem);
					
				}
				
				props.put("erems",stb.toString());
			}
			
			//get acitivty 'text' attribute
			Element e_text = e_act.element(ELE_TEXT);
			if(e_text!=null){
				String text = e_text.getText().trim();
				if(text!=null)
					props.put("text",text);
			}
			
			//get acitivty 'details' attribute
			Element e_details = e_act.element(ELE_DETAILS);
			if(e_details!=null){
				String details = e_details.getText().trim();
				if(details!=null)
					props.put("details",details);
			}
			
			//get acitivty 'details' attribute
			Element e_location = e_act.element(ELE_LOCATION);
			if(e_location!=null){
				String location = e_location.getText().trim();
				if(location!=null)
					props.put("location",location);
			}
			
			//get activity 'icc' attribute
			Element e_icc = e_act.element(ELE_ICC);
			if(e_icc!=null){
				String icc = e_icc.getText().trim().toUpperCase();
				if(icc!=null){
					if(!icc.equals("DEFAULT")&&!icc.equals("PRIVATE")&&!icc.equals("PUBLIC"))
						throw new DocumentException("### %Error XML ,Invalid value of icc[" + e_icc.asXML() + "] in add operation!% ###");
					props.put("icc",icc);
				}
			}
			
			
			Element e_trp = e_act.element(ELE_TRP);
			if(e_trp!=null){
				String trp = e_trp.getText().trim().toUpperCase();
				if(trp!=null){
					props.put("trp",new Boolean(trp.equalsIgnoreCase("true")));
				}
			}
			
			sequece_map[1] = props;
			ret.add(sequece_map);
		}
		return ret;
	}
}
