package com.smartdot.calendar.beans;
// Generated 2009-1-6 11:25:31 by Hibernate Tools 3.1.0 beta3



/**
 * ActivityShare generated by hbm2java
 */

public class ActivityShare  implements java.io.Serializable {


    // Fields    

     /**
	 * 
	 */
	private static final long serialVersionUID = 113373818302360557L;
	private String id;
     private String uid;
     /**
      * 参与方式 0,waitting; 1,join; 2,no;3,maybe
      */
     private Integer join;
     /**
      * 是否具有修改权限
      */
     private Boolean modifiable;
     /**
      * 是否能邀请他人
      */
     private Boolean inviteable;
     /**
      * 是否能够查看来宾列表
      */
     private Boolean viewable;
     
     /**
      * 共享的活动
      */
     private Activity activity;
     
     /**
      * 额外来宾
      */
     private Integer extraGuests;
     
     /**
      * 评论
      */
     private String comment;


    // Constructors

    /** default constructor */
    public ActivityShare() {
    }

	/** minimal constructor */
    public ActivityShare(Activity activity) {
        this.activity = activity;
    }
    
    /** full constructor */
    public ActivityShare(String uid, Integer join, Boolean modifiable, Boolean inviteable, Boolean viewable, Activity activity) {
        this.uid = uid;
        this.join = join;
        this.modifiable = modifiable;
        this.inviteable = inviteable;
        this.viewable = viewable;
        this.activity = activity;
    }
    

   
    // Property accessors

    public String getId() {
        return this.id;
    }
    
    public void setId(String id) {
        this.id = id;
    }

    public String getUid() {
        return this.uid;
    }
    
    public void setUid(String uid) {
        this.uid = uid;
    }

    public Integer getJoin() {
        return this.join;
    }
    
    public void setJoin(Integer join) {
        this.join = join;
    }

    public Boolean getModifiable() {
        return this.modifiable;
    }
    
    public void setModifiable(Boolean modifiable) {
        this.modifiable = modifiable;
    }

    public Boolean getInviteable() {
        return this.inviteable;
    }
    
    public void setInviteable(Boolean inviteable) {
        this.inviteable = inviteable;
    }

    public Boolean getViewable() {
        return this.viewable;
    }
    
    public void setViewable(Boolean viewable) {
        this.viewable = viewable;
    }

    public Activity getActivity() {
        return this.activity;
    }
    
    public void setActivity(Activity activity) {
        this.activity = activity;
    }

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Integer getExtraGuests() {
		return extraGuests;
	}

	public void setExtraGuests(Integer extraGuests) {
		this.extraGuests = extraGuests;
	}
   








}
