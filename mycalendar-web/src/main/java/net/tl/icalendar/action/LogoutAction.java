package net.tl.icalendar.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

public class LogoutAction extends Action {

	public ActionForward execute(ActionMapping mapping, ActionForm form, HttpServletRequest request, HttpServletResponse response) throws Exception {
		/* 使用自己的登录模块时使用
		HttpSession session = request.getSession();
		if(session!=null){
			session.removeAttribute("USERBEAN");
		}
		return mapping.findForward("Logon");
		*/
		return super.execute(mapping, form, request, response);
	}
	
	
}
