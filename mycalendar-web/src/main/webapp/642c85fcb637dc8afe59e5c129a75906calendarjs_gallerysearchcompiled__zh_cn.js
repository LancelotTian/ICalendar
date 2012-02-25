
var vO = "label";
function wO() {
	if (KB) {
		return KB;
	}
	KB = tA(window, "DI_Iframe");
	Ba(KB[F], $l);
	l(KB[F], "block");
	KB[F].top = 0;
	Wa(KB[F], 0);
	KB[F].border = Je;
	return KB;
}
function xO() {
	if (Q) {
		l(KB[ud][F], U);
	}
}
function yO(a) {
	if (!Q) {
		return;
	}
	var b = a || 200, c = wO();
	l(c[ud][F], M);
	mb(c[F], b - 1);
}
function zO(a) {
	mp = a;
}
function AO(a) {
	ex = a;
}
function BO(a) {
	dx = a;
}
function CO(a) {
	cx = a;
}
function DO(a) {
	bx = a;
}
function EO(a) {
	ax = a;
}
function FO(a) {
	$w = a;
}
function GO(a) {
	Zw = a;
}
function HO(a) {
	Vw = a;
}
var IO = "POPULAR", JO = "ENTERTAINMENT", KO = "&laquo; \u4e0a\u4e00\u9875", LO = "\u534f\u52a9\u65e5\u5386\u627e\u5230\u9002\u5408\u60a8\u6240\u5728\u533a\u57df\u7684\u65f6\u95f4\u548c\u9891\u9053\u3002", MO;
function NO(a) {
	MO || (MO = new OO);
	MO.Uj(a);
}
function PO() {
	MO.V();
}
function OO() {
	this.Bd = "moreEventsPopup";
	this.Hg = "moreEventsPopup-shadow";
	this.Uu = "moreEvents-holder";
	this.gt = "moreEventsCulled";
	this.Z = false;
}
var QO = new T("<div style=\"position:absolute; z-index:5;top:0; width:0; background-color: #666;visibility: hidden;\" id=\"${shadowID}\"></div><div style=\"position:absolute; z-index:5;background-color:white; border:1px solid #ababab;top:0; visibility:hidden;\" id=\"${elementID}\"><div style=\"background-color: #e8eef7; padding-bottom: 1px;\" id=\"moreEventsPopup-title\"><img src=\"images/close.gif\" style=\"" + R.ea.$k("margin", "2px", "2px", Je, Je) + ";float:right;cursor: pointer;\" onclick=\"" + S(PO) + "()\"><div style=\"padding-left: 4px;\"><span style=\"font-weight: bold; font-size: 85%; cursor: pointer;color:#5a80c0\" onmousedown=\"" + S(yp) + "(${cIndex})\">${date}</span><span style=\"color: #7f7d81;font-size: 85%;cursor: pointer;\" onmousedown=\"" + S(yp) + "(${cIndex})\">(${day})</span></div></div></div>"), RO = new T("<div style=\"position:absolute;z-index:5;top:${top}px;width:${width}px;height:${height}px;left:${left}px\" id=\"${id}\" class=\"moreevents lk\" onmousedown=\"" + S(yp) + "(${cell})\">${text}</div>");
OO[z].Uj = function (a) {
	this.Z && this.V();
	if (!W("more-" + a)) {
		return;
	}
	this.be = a;
	var b = ip.ja;
	this.Td = a / b.bb() | 0;
	this.Li = a % b.bb();
	this.io = b.Tb(this.Li, this.Td, undefined).H();
	this.qp();
	this.eI();
};
OO[z].qp = function () {
	var a = bn(this.io), b = il[this.io.ya()], c = QO;
	c.b("elementID", this.Bd);
	c.b("shadowID", this.Hg);
	c.b("cIndex", this.be);
	c.b(Vt, a);
	c.b("day", b);
	k(W(this.Uu), c[r]());
};
OO[z].eI = function () {
	this.jl = [];
	var a = W(this.Bd), b = W(this.Hg), c = [], d = this.io, e = d.Sc();
	ip.ja.Xt(c, {}, d, e);
	if (c[t] == 0) {
		this.V();
		return;
	}
	var f = nt() + 1, g = Rl(W("moreEventsPopup-title")).h, i = Ku(this.Li, this.Td), j = Rl(W(Xp)), m = f * c[t] + g, n = c[t];
	if (m >= j.h) {
		n = ((j.h - g) / f | 0) - 1;
		m = f * (n + 1) + g;
	}
	ob(a[F], m + X);
	Fa(a[F], "17em");
	var p = Rl(a);
	ob(b[F], p.h + X);
	Fa(b[F], p.w + X);
	var s = Rl(b), u, v, w, x = i.x, y = j.x + j.w;
	u = y - (x + (s.w + 2)) < 0 ? y + -(s.w + 2) : x;
	v = i.y + s.h + 2 > j.y + j.h ? j.y + j.h - s.h - 4 : i.y + 1;
	v = v - j.y;
	u = u - j.x;
	u = u;
	Wa(a[F], u + X);
	a[F].top = v + X;
	Wa(b[F], u + 1 + X);
	b[F].top = v + 1 + X;
	this.Pa();
	v += g + 1;
	u += 2;
	w = p.w - 4;
	var C = [];
	for (var D = 0; D < n; ++D) {
		var L = av(c[D]);
		L.x = u;
		L.y = v;
		L.w = w;
		c[D].x = u;
		c[D].y = v;
		c[D].w = w;
		c[D].h = f;
		c[D].Aa = 1;
		C[q](Ru(c[D], L));
		this.jl[q](L.ke);
		v += f;
	}
	if (n < c[t]) {
		var O = RO;
		O.b(zu, v);
		O.b(Tu, u);
		O.b(jk, w);
		O.b(ik, f);
		O.b(Wt, this.gt);
		O.b("text", Wd(c[t] - n));
		O.b("cell", this.be);
		C[q](O[r]());
		this.jl[q](this.gt);
	}
	var ba = W(this.Uu), ea = ba[bc] + C[K](M);
	k(ba, ea);
};
OO[z].Pa = function () {
	ub(W(this.Bd)[F], "visible");
	ub(W(this.Hg)[F], "visible");
	this.Z = true;
	oA(this);
};
OO[z].Nm = function () {
	function a(b) {
		var c = W(b);
		if (c && c[ud]) {
			c[ud][Gc](c);
			ub(c[F], am);
		}
	}
	a(this.Bd);
	a(this.Hg);
	this.nI();
};
OO[z].V = function () {
	this.Nm();
	this.Z = false;
};
OO[z].nI = function () {
	for (var a = 0; a < this.jl[t]; a++) {
		var b = this.jl[a], c = W(b);
		c && c[ud] && c[ud][Gc](c);
		b in iq && delete iq[b];
	}
};
OO[z].Ue = function (a) {
	if (this.Z) {
		var b = Zl(a), c = W(this.Bd), d = W("infowindow");
		if (Rl(c)[ld](b) || wA(d, qA(a))) {
			return false;
		} else {
			this.V();
			return true;
		}
	} else {
		return true;
	}
};
var SO;
function TO() {
	this.Gi = "moreContentBox";
	this.Bd = "moreContentPopup";
	this.Hg = "moreContentPopup-shadow";
	this.Z = false;
	this.qp();
}
TO[z].Jm = 1;
function UO(a) {
	SO || (SO = new TO);
	if (SO.Z) {
		SO.V();
		if (SO.be == a) {
			return;
		}
	}
	SO.Uj(a);
}
function VO() {
	MO && MO.Z && MO.Uj(MO.be);
	SO && SO.Z && SO.Uj(SO.be);
}
var WO = new T("<div style=\"width:1px; height:1px;background-color: #666;position:absolute\" id=\"${shadowID}\"></div><div style=\"background-color:white;border:1px solid #ababab;position:absolute;width:1px;height:1px\" id=\"${elementID}\"></div>");
TO[z].Uj = function (a) {
	if (!W("moreContent-" + a)) {
		this.Z = false;
		return;
	}
	this.be = a;
	var b = ip.ja;
	this.Td = a / b.bb() | 0;
	this.Li = a % b.bb();
	this.CF();
	this.kK();
	this.QH();
	this.Pa();
};
TO[z].qp = function () {
	var a = document[Xc]("DIV"), b = a[F];
	ub(b, am);
	Ba(b, $l);
	Fa(b, "1px");
	ob(b, "1px");
	b.top = "1px";
	Wa(b, "1px");
	a.id = this.Gi;
	document[Bc][o](a);
	var c = WO;
	c.b("shadowID", this.Hg);
	c.b("elementID", this.Bd);
	k(a, c[r]());
};
TO[z].CF = function () {
	var a = this.be, b = ju[a], c = [], d = Ku(this.Li, this.Td);
	this.Ke = (Rl(W("dh" + this.be)).x - d.x - 17) / 17;
	if (this.Ke > b[t]) {
		this.Ke = b[t];
	}
	this.Ke = this.Ke | 0;
	this.tL = this.Ke > 0 ? h[Qb](b[t] / this.Ke) : 0;
	for (var e = 0; e < b[t]; e++) {
		var f = (e % this.Ke | 0) * 17 + 1, g = (e / this.Ke | 0) * 17 + 1, i = b[e], j = i.u ? Xu : Yu;
		if (i.u) {
			j.b("i1", a);
			j.b("i2", e);
		}
		j.b(Uu, P(i.t));
		j.b("imgUrl", i.i);
		j.b(Tu, f);
		j.b(zu, g);
		c[q](j[r]());
	}
	k(W(this.Bd), c[K](M));
};
TO[z].kK = function () {
	var a = W(this.Gi), b = W(this.Bd), c = W(this.Hg), d = 17 * this.Ke + 1, e = 17 * this.tL + 1;
	Fa(b[F], d + X);
	ob(b[F], e + X);
	Fa(c[F], d + 2 + X);
	ob(c[F], e + 2 + X);
	Wa(c[F], this.Jm + X);
	c[F].top = this.Jm + X;
	Fa(a[F], d + this.Jm + 2 + X);
	ob(a[F], e + this.Jm + 2 + X);
};
TO[z].QH = function () {
	var a = W(this.Gi), b = Rl(a), c = Rl(W(Xp)), d = Ku(this.Li, this.Td), e = d.y;
	if (d.y + b.h > c.y + c.h) {
		e = c.y + c.h - b.h;
	}
	a[F].top = e + X;
	Wa(a[F], d.x + X);
};
TO[z].Pa = function () {
	ub(W(this.Gi)[F], M);
	this.Z = true;
	oA(this);
};
TO[z].V = function () {
	this.Nm();
	this.Z = false;
};
TO[z].Nm = function () {
	var a = W(this.Gi);
	ub(a[F], am);
	a[F].top = "1px";
	Wa(a[F], "1px");
};
TO[z].Ue = function (a) {
	if (this.Z) {
		var b = Zl(a), c = W(this.Bd), d = W("moreContent-" + this.be);
		if (Rl(c)[ld](b) || Rl(d)[ld](b)) {
			return false;
		} else {
			this.V();
			return true;
		}
	} else {
		return true;
	}
};
function XO(a, b) {
	var c = a ? SO : MO;
	if (c) {
		b ? c.Nm() : c.V();
	}
}
R.nF = XO;
R.wH = NO;
R.vH = UO;
R.dI = VO;
function YO(a, b) {
	if (!a.u) {
		return;
	}
	var c = Ul(b), d = c.y + 16, e = c.x, f = a.h + 16 + 4, g = window[Qc] || document[Bc][Fd];
	if (d + f > g) {
		d = g - f - 10;
		if (d < 10) {
			d = 10;
		}
		e += 16;
	}
	var i = a.w + 4, j = window[My] || document[Bc][cc];
	if (e + i > j) {
		e = j - i - 10;
		if (e < 10) {
			e = 10;
		}
	}
	var m = ZO();
	m.Oq(e, d, a);
	m.Pa();
}
function $O() {
	var a = "<div id=wc style=\"position: absolute; background-color:white;z-index:6;border: 1px solid gray; font-family: Arial; font-size: 83%\"><div><div style=\"background-color: #e8eef7; padding-bottom: 2px\" onclick=\"" + S(aP) + "(event)\"><div style=\"float:right;" + R.ea.$k("margin", "2px", "2px", Je, Je) + "\"><img src=\"" + mh + "\" id=\"wc-edit\" width=14 height=13 style=\"cursor:pointer; background-position: 0 -71px;background-image: url(" + nh + ");\"><img src=\"" + mh + "\" onclick=\"" + S(bP) + "()\" width=14 height=13 style=\"cursor:pointer; background-position: 0 -50px;background-image: url(" + nh + ");\"></div><div id=\"wc-title\" style=\"padding-left: 2px; font-weight: bold\"></div></div><div id=\"wc-body\"></div></div></div>";
	this.fa = pA(a);
	this.Z = false;
}
$O[z].Oq = function (a, b, c) {
	var d = c.w, e = c.h, f = c.u, g = c.t, i = c.p;
	k(W("wc-title"), P(g));
	Wa(this.fa[F], a + X);
	this.fa[F].top = b + X;
	Fa(this.fa[F], d + X);
	if (i == 2) {
		var j = Uk().J(bh, "US")[oz]();
		f = "http://www.gmodules.com/ig/ifr?url=" + ia(f) + "&synd=calendar&w=" + d + "&h=" + e + "&up_startdate=" + c[H] + "&up_enddate=" + c.end + "&up_tzoffset=" + ia(xo()) + "&lang=" + He[A](Jl, to) + "&country=" + ia(j);
		var m = c.g;
		if (m) {
			for (var n in m) {
				f += "&up_" + n + "=" + ia(m[n]);
			}
		}
	}
	var p = yf + (i == 0 ? "img" : "iframe frameborder=\"0\"");
	if (i == 2) {
		p += " scrolling=\"no\"";
	}
	p += " id=\"wc-root\" src=\"" + f + "\" width=\"" + d + "px\" height=\"" + e + "px\" style=\"border: 0\">";
	var s = W("wc-body"), u = c.eid, v = Ep(Gj.ta(u)), w = W("wc-edit");
	l(w[F], v ? M : U);
	if (v) {
		Gy(w, sf(cP, u));
	}
	ob(s[F], e + 2 + X);
	k(s, p);
};
$O[z].Pa = function () {
	l(this.fa[F], M);
	this.Z = true;
	oA(this);
};
$O[z].V = function () {
	l(this.fa[F], U);
	aP();
};
$O[z].Ue = function (a) {
	if (this.Z) {
		var b = Zl(a);
		if (Rl(this.fa)[ld](b)) {
			return false;
		} else {
			this.V();
			return true;
		}
	} else {
		return true;
	}
};
var dP;
function ZO() {
	dP || (dP = new $O);
	return dP;
}
function bP() {
	ZO().V();
}
function cP(a) {
	if (aP()) {
		return;
	}
	var b = W("wc-menu");
	if (!b) {
		b = pA("<div id=\"wc-menu\" style=\"display:none\"><div onmouseover=\"this.className='wc-menu-on'\" id=\"wc-menu-edit\" onmouseout=\"this.className=''\" style=\"display:none\">\u4fee\u6539</div><div onmouseover=\"this.className='wc-menu-on'\" id=\"wc-menu-delete\" onmouseout=\"this.className=''\">\u5220\u9664</div></div>");
		mb(b[F], 20);
		Fa(b[F], "60px");
	}
	var c = Q ? -1 : -2, d = Q ? 1 : 0, e = Ul(W("wc-edit"));
	Wa(b[F], e.x - 60 + 14 + c + X);
	b[F].top = e.y + 13 - 1 + d + X;
	Gy(W("wc-menu-delete"), sf(Bx, a));
	l(b[F], M);
}
function aP(a) {
	var b = W("wc-menu");
	if (!b) {
		return false;
	}
	if (a) {
		var c = Zl(a);
		if (Rl(W("wc-edit"))[ld](c)) {
			return false;
		}
	}
	if (b[F][xd] == M) {
		l(b[F], U);
		return true;
	}
	return false;
}
R.Pz = YO;
var eP = "@group.v.calendar.google.com";
function fP(a) {
	var b = a[Vc](eP);
	if (b > 0 && b + eP[t] == a[t]) {
		return a[I](0, b)[E]("#") >= 0;
	}
	return false;
}
function gP(a) {
	if (!fP(a)) {
		return null;
	}
	var b = a[E]("#");
	if (b < 0) {
		return null;
	}
	return sa(a[I](0, b));
}
function hP(a, b) {
	if (!fP(a)) {
		return null;
	}
	var c = a[E]("#");
	if (c < 0) {
		return null;
	}
	var d = a[I](c, a[t]);
	return ia(b) + d;
}
var iP = new RegExp(/~/g), jP = new RegExp(/_/g);
var kP = new RegExp(/~~/g), lP = new RegExp(/~_/g);
function mP(a) {
	return a[A](kP, "~")[A](lP, Jl);
}
function nP() {
	this.Be = [];
	this.Kg = null;
}
kb(nP[z], function () {
	za(this.Be, 0);
	this.Kg = null;
});
nP[z].add = function (a) {
	this.Be[q](a);
	this.Kg = null;
};
nP[z].sD = function () {
	return this.Be[Kb](0);
};
nP[z].yh = function () {
	return this.Be[t];
};
nP[z].FH = function (a) {
	this[od]();
	if (null === a || undefined === a) {
		return;
	}
	var b = 0, c = 0, d = 0;
	while ((b = a[E](Jl, c)) >= 0) {
		if (b > 0) {
			var e = 0, f = b - 1;
			while (f >= 0) {
				if ("~" == a[ic](f)) {
					++e;
				} else {
					break;
				}
				--f;
			}
			if (e & 1) {
				c = b + 1;
				continue;
			}
		}
		this.Be[q](mP(a[I](d, b)));
		d = c = b + 1;
	}
	this.Be[q](mP(a[I](d)));
	this.Kg = a;
};
nP[z].HC = function (a) {
	this[od]();
	this.Be = a[fc]();
};
xa(nP[z], function () {
	if (null != this.Kg) {
		return this.Kg;
	}
	var a = [], b = this.Be[t];
	if (0 == b) {
		return null;
	}
	for (var c = 0; c < b; ++c) {
		a[q](this.Be[c][A](iP, "~~")[A](jP, "~_"));
		c < b - 1 && a[q](Jl);
	}
	this.Kg = a[K](M);
	return this.Kg;
});
var oP = {};
oP[IO] = {label:"\u70ed\u95e8\u9009\u62e9"};
oP.EVENTS = {ve:"gallery_events.gif", label:"\u6d3b\u52a8"};
oP.SPORTS = {ve:"gallery_sports.gif", label:"\u4f53\u80b2"};
oP[JO] = {ve:"gallery_entertainment.gif", label:"\u5a31\u4e50"};
oP.GOOGLE = {ve:"gallery_google.gif", label:"\u7531 Google \u63d0\u4f9b"};
oP.NONE = {ve:"gallery_misc.gif", label:"\u5176\u4ed6"};
oP.HOLIDAY = {ve:"gallery_holiday.gif", label:"\u8282\u5047\u65e5"};
oP.TV = {ve:"gallery_tv.gif", label:"\u7535\u89c6\u8282\u76ee"};
var pP = [IO, "TV", "EVENTS", "SPORTS", JO, "NONE", "HOLIDAY", "GOOGLE"], qP = 10, rP = null;
function sP() {
	return true == window._enableTv;
}
function tP(a, b) {
	for (var c = 0; c < a[t]; ++c) {
		if (a[c] == b) {
			return c;
		}
	}
	return -1;
}
if (!sP()) {
	var uP = tP(pP, "TV");
	uP >= 0 && pP[Dd](uP, 1);
}
var vP = {};
vP[0] = "NONE";
vP[1] = JO;
vP[2] = "EVENTS";
vP[3] = "SPORTS";
vP[4] = "RELIGIOUS";
vP[5] = "GOOGLE";
vP[6] = IO;
vP[7] = "HOLIDAY";
vP[8] = "TV";
function wP(a, b, c, d) {
	var e = [], f = b ? b.CalendarItem : null, g = d;
	if (c == "TV" && !sP()) {
		g = oP[c][vO];
		c = null;
		f = null;
		b = null;
	}
	if (c && oP[c] && (!d || 0 == d[t])) {
		g = oP[c][vO];
	}
	var i = f ? f[t] : 0;
	if (b && b.total_results) {
		i = b.total_results | 0;
	}
	var j = 0;
	if (b && b.start_index) {
		j = b.start_index | 0;
	}
	var m = 0;
	if (b && b.esfe_offset) {
		m = b.esfe_offset | 0;
	}
	var n = xP, p;
	p = g ? f && f[t] ? "<span class=\"keyword\">" + P(g) + "</span> \u7684\u7ed3\u679c\uff0c\u7b2c " + (j + 1) + to + (j + f[t]) + " \u9879\uff0c\u5171 " + i + " \u9879" : "\u672a\u627e\u5230\u7b26\u5408 <span class=\"keyword\">" + P(g) + "</span> \u7684\u67e5\u8be2\u7ed3\u679c" : M;
	n.b("logoOnClickStr", S(yP) + "()");
	n.b("infobar", zP(c, d));
	n.b("details", p);
	e[q](n[r]());
	e[q]("<table cellpadding=0 cellspacing=0 width=\"100%\"><tr>");
	e[q]("<td id=categories valign=top>");
	for (var s = 0; s < pP[t]; ++s) {
		var u = pP[s];
		e[q](AP(u));
	}
	e[q](Cr);
	e[q]("<td id=searchResults valign=top>");
	var v, w;
	if (c == "TV") {
		v = LO;
		w = Xk;
	} else {
		v = "\u534f\u52a9\u65e5\u5386\u670d\u52a1\u627e\u5230\u60a8\u6240\u5728\u533a\u57df\u7684\u5176\u4ed6\u6d3b\u52a8\u3002";
		w = bi;
	}
	var x = BP;
	x.b("message", v);
	x.b(Wt, "tv_zip");
	x.b("defaultValue", P(CP()));
	x.b("buttonLabel", "\u4fdd\u5b58");
	x.b(Pv, "_GA_saveZipButton(this, " + w + Xj);
	x.b("display", U);
	e[q](x[r]());
	if (f && f[t]) {
		var y = (new Date)[Ed]() / 86400000;
		for (var s = 0; s < f[t]; s++) {
			var C = DP, D = f[s], L = D.id, O = D.email, ba = D.snippet, ea = !!D.supports_feeds, ta = D.image;
			if (ta) {
				ta = "image?iid=" + ia(ta);
			}
			var V = ba.calendar_title, Aa = ba.calendar_desc_snippet;
			Aa = Aa ? Aa[0] : M;
			C.b("supportsFeeds", ea ? bi : Xk);
			C.b("email", vg(O));
			C.b(Uu, EP(V));
			C.b("description", EP(Aa));
			var Ma;
			if (!ta) {
				var Pa = D.category;
				if (Pa in vP) {
					Ma = oP[vP[Pa]];
				}
				if (!Ma || !Ma.ve) {
					Ma = oP[c];
				}
			}
			ta || (ta = Ma && Ma.ve ? "images/" + ia(Ma.ve) : "images/gallery_misc.gif");
			C.b("img", P(ta));
			var Ea = [], Ga = "Event" in ba ? JA(ba.Event, function (fl) {
				return Vt in fl;
			}) : [], Fb = y;
			if (Ga) {
				Ga = Ga[gd](FP);
				for (var Ib = 0; Ib < Ga[t]; ++Ib) {
					if (Ga[Ib].date <= y) {
						Fb = Ga[Ib].date;
					}
					if (Ga[Ib].date > y && Fb <= y) {
						Fb = Ga[Ib].date;
					}
					var Mb = P(GP(Ga[Ib]));
					Ea[q](EP(Mb + ": " + Ga[Ib].title));
				}
			}
			C.b("events", Ea[K]("<br>"));
			var Rb = new Date(Fb * 86400000 + HP), Sb = Ih(Rb.getFullYear(), Rb.getMonth() + 1, 1), yd = uh(Sb.B, Sb.z), ac = Ih(Sb.B, Sb.z, yd), Rd = Sb[r]() + "/" + ac[r]();
			C.b("dates", vg(Rd));
			var u = "category" in D && D.category in vP ? vP[D.category] : c;
			C.b("addButton", IP(L, O, u));
			e[q](C[r]());
		}
		var Cb = null, nf = null, pf = c ? vg(c) : "null", pi = d ? vg(d) : "null";
		if (j >= qP) {
			var qi = JP;
			qi.b("start", j - qP);
			qi.b("offset", m);
			qi.b("query", pi);
			qi.b("category", pf);
			qi.b("text", KO);
			Cb = qi[r]();
		}
		if (j + qP < i) {
			var Ig = JP;
			Ig.b("start", j + qP);
			Ig.b("offset", m);
			Ig.b("query", pi);
			Ig.b("category", pf);
			Ig.b("text", "\u66f4\u591a &raquo;");
			nf = Ig[r]();
			var zd = JP;
			zd.b("start", j);
			zd.b("offset", m);
			zd.b("query", pi);
			zd.b("category", pf);
			zd.b("text", KO);
			rP = zd[r]();
		}
		if (Cb || nf) {
			var ng = KP;
			if (!Cb) {
				ng.b("text", KO);
				Cb = ng[r]();
			}
			if (!nf) {
				ng.b("text", "\u66f4\u591a &raquo;");
				nf = ng[r]();
			}
			e[q]("<br clear=all><div class=\"pagination\">", Cb, "&nbsp;", nf, so);
		}
	} else {
		Cb = rP;
		var Yj = c ? oP[c][vO] : d;
		e[q]("<div style=\"" + R.ea.$k("padding", "1em", Je, Je, "1em") + wk, "\u672a\u53d1\u73b0\u4e0e <span class=\"keyword\">" + P(Yj) + "</span> \u76f8\u5339\u914d\u7684\u65e5\u5386", so);
		e[q]("<br clear=all><div class=\"pagination\">", Cb, so);
	}
	e[q](Cr);
	e[q]("</tr></table>");
	k(a, e[K](M));
	var el = W("tv_zip");
	if (LP(c, d)) {
		l(el[F], "block");
	}
	var Zj = W("cat_" + c);
	Zj && xm(Zj, "selectedCategory");
}
function LP(a, b) {
	if (a == "TV") {
		return true;
	}
	return a == "HOLIDAY" || a == "GOOGLE" || a == IO || b == M || MP() ? false : true;
}
function EP(a, b) {
	if (!a) {
		return M;
	}
	var c = b || 80;
	if (a[t] <= c) {
		return a;
	}
	var d = a[Kd](), e = d[Vc]("<b>", c);
	if (e < 0) {
		return a[I](0, c) + "&hellip;";
	} else {
		var f = d[E]("</b>", e + "<b>"[t]);
		return f < c ? a[I](0, f) + "</b>&hellip;" : a[I](0, h.max(c, e + "<b>"[t])) + "</b>&hellip;";
	}
}
var HP = (new Date).getTimezoneOffset() * 60 * 1000;
function GP(a) {
	var b = new Date(a.date * 86400 * 1000 + HP), c = Ih(b.getFullYear(), b.getMonth() + 1, b.getDate());
	return bn(c);
}
function FP(a, b) {
	return a.date - b.date;
}
var xP = new T("<form name=gasearch method=GET onsubmit=\"return _GA_submit()\"       action=\"gallery\"><div id=static>  <div id=gallery-logo>    <img src=\"images/calendar_sm2_" + window._locale + ".gif\"         onclick=\"${logoOnClickStr}\">  </div>  <div id=search>    <div style=\"overflow: auto\">      <input id=\"gallery-q\" size=35 name=q>      <input type=SUBMIT value=\"\u641c\u7d22\u516c\u5171\u65e5\u5386\">      <span id=addByUrl class=glk onmousedown=\"_GA_addByUrl()\">\u901a\u8fc7 URL \u6dfb\u52a0</span>    </div>    <div id=searchExample>\u4f8b\u5982\uff1a \u6253\u5f00\u9ea6\u514b\u98ce\u3001\u8db3\u7403\u3001CSI</div>  </div></div></form><br clear=all>${infobar}<div id=\"gallery-header\">  <img src=\"images/gallery_cal.gif\" id=\"gallery-cal-image\">  <div id=\"gallery-header-details\">${details}</div>  <div id=\"gallery-header-add\">\u6dfb\u52a0\u516c\u5171\u65e5\u5386</div></div>"), BP = new T("  <table id=\"${id}\" style=\"display:${display}\" class=\"gallery-tv\"     cellpadding=0 cellspacing=0>    <tr>      <td class=\"gallery-tv-message\">${message}</td>    </tr>    <tr>      <td>\u7f8e\u56fd\u90ae\u653f\u7f16\u7801\uff1a&nbsp;        <input id=\"${id}-text\" size=5 maxlength=5 value=\"${defaultValue}\"                onkeyup=\"_GA_zip(this)\" onchange=\"_GA_zip(this)\"                onkeydown=\"_GA_maybeSaveZip(this, event)\"                class=\"gallery-input-fix\">&nbsp;        <input id=\"${id}-save\" type=BUTTON value=\"${buttonLabel}\"                disabled=true onclick=\"${onclick}\" class=\"gallery-input-fix\">      </td>    </tr>  </table>"), DP = new T("<div class=result>  <div class=\"result-image\">    <img src=\"${img}\" width=120 height=60>  </div>  <div class=\"result-content\">    <div class=\"result-title\">      <span class=glk onclick=\"_GA_preview(${email},${dates},                                 ${supportsFeeds},this.innerHTML)\">${title}      </span>    </div>    <div class=\"result-subtitle\">${description}</div>    <div class=\"result-events\">${events}</div>    ${addButton}  </div></div>"), JP = new T("<span class=glk       onclick=\"_GA_page(${start}, ${offset}, ${query}, ${category})\">${text}</span>"), KP = new T("<span class=\"pagination-inactive\">${text}</span>");
function _GA_preview(a, b, c, d) {
	a = NP(a);
	var e = OP, f = PP(), g = (c ? "embed" : "htmlembed") + "?src=" + ia(a) + xf + Fg + "=" + ia(b) + "&showCalendars=0";
	if (f) {
		g += "&ctz=" + ia(f);
	}
	var i = h.min(window[Xy][Cd] - 350, 800);
	e.b(Lx, g);
	e.b(jk, 700);
	e.b(ik, i);
	var j = e[r]();
	Pp(d, j);
}
var OP = new T("<iframe src=\"${src}\" id=\"gallery-preview\" width=\"${width}\" height=\"${height}\"         style=\"padding: 0 3px; background-color: white\"         onload=\"_GA_previewOnload()\" frameborder=\"0\"></iframe>");
var QP = "gallery-cover", RP = "gallery-inner-content", SP = 0, TP = 0;
function UP(a, b) {
	l(W("mothertable")[F], U);
	l(W("topBar")[F], U);
	a ? VP(a) : WP(b);
	XP(true);
}
var YP;
function XP(a) {
	var b = a ? 400 : M;
	mb(W("guser")[F], b);
	var c = W("cornerBookmarks");
	if (c) {
		mb(c[F], b);
	} else {
		var d = W("gbarc");
		if (d) {
			mb(d[F], b);
		}
		var e = W("gbar");
		if (e) {
			mb(e[F], b);
		}
	}
	var f = W("help");
	if (a) {
		if (!YP) {
			YP = f[id];
		}
		f.href = "http://www.google.com/support/calendar/bin/topic.py?topic=8570";
	} else {
		f.href = YP;
	}
}
function _GA_page(a, b, c, d) {
	c ? VP(c, a, b) : WP(d, a, b);
}
function WP(a, b, c) {
	var d = a || IO, e = ["cat", d];
	b && e[q]("esfestart", b);
	c && e[q]("esfeoffset", c);
	Sn(true, "gallery");
	Nk("bundle", e, undefined, ZP(d, null));
}
function VP(a, b, c) {
	var d = ["q", a];
	b && d[q]("esfestart", b);
	c && d[q]("esfeoffset", c);
	Sn(true, "gallery");
	Nk("bundle", d, undefined, ZP(M, a));
}
function ZP(a, b) {
	var c = ++SP;
	return function (d) {
		if (SP != c) {
			d[Ty]();
			return;
		}
		var e = {};
		try {
			if (lm(d) == 200) {
				e = eval(Vj + d[Xb] + Xj);
			}
		}
		catch (f) {
		}
		$P(e, a, b);
		if (b) {
			Oa(W("gallery-q"), b);
		}
		Sn(false, "gallery");
		return false;
	};
}
function aQ() {
	var a = W(QP);
	if (!a) {
		a = CB(QP, 100, 198);
		$i(window, kj, function () {
			GB(QP);
		});
		GB(QP);
	}
	yO(198);
	l(a[F], M);
	return a;
}
function $P(a, b, c) {
	function d() {
		bQ(a, b, c);
	}
	Mp(d, "\u6dfb\u52a0\u516c\u5171\u65e5\u5386", "GA_showData_" + b + Jl + c + TP);
	d();
	++TP;
}
function bQ(a, b, c) {
	var d = aQ(), e = EB("gallery-content", 199, true);
	k(e, "<div id=\"" + RP + "\"></div>");
	wP(W(RP), a, b, c);
	ub(W("gallery-msg")[F], am);
	l(e[F], M);
	zO(true);
	if (Q) {
		l(d[F], U);
		pa(function () {
			l(d[F], "block");
		}, 0);
	}
}
var cQ;
function dQ(a) {
	cQ = a;
}
function eQ(a, b) {
	k(W("gallery-msg-content"), "\u5df2\u6dfb\u52a0 " + P(a) + "&nbsp;<span class=glk " + fQ() + ">\u67e5\u770b\u60a8\u7684\u65e5\u5386</span>");
	ub(W("gallery-msg")[F], "visible");
	var c = W("gallery-" + b);
	if (c) {
		k(c, gQ());
	} else {
		if (cQ) {
			var d = W("gallery-" + cQ);
			if (d) {
				k(d, gQ());
			}
		}
	}
	cQ = null;
}
function yP() {
	if (!mp) {
		return;
	}
	l(W(QP)[F], U);
	l(W("gallery-content")[F], U);
	xO();
	l(W("mothertable")[F], M);
	l(W("topBar")[F], M);
	XP(false);
	zO(false);
	Wn();
	Yo(true);
}
function fQ() {
	return "onmousedown=\"" + S(yP) + "()\"";
}
function _GA_submit() {
	var a = W("gallery-q")[B];
	pa(function () {
		VP(a);
	}, 0);
	return false;
}
function _GA_addByUrl() {
	on(function () {
		yP();
		R.$d(3);
	});
}
function zP() {
	var a = hQ;
	a.b("back", fQ());
	return a[r]();
}
var hQ = new T("<div id=\"gallery-infobar\">  <div id=\"gallery-back\" class=\"glk\" ${back}>" + $d + "</div>  <div id=\"gallery-info\" align=\"center\">    <table id=\"gallery-msg\" style=\"visibility: hidden\"            cellpadding=\"0\" cellspacing=\"0\">      <tr>        <td>          <div id=\"gallery-msg-top\">&nbsp;</div>          <div id=\"gallery-msg-content\">Text to preserve space</div>          <div id=\"gallery-msg-bottom\">&nbsp;</div>        </td>      </tr>    </table>  </div></div>");
var PP = Hn;
function iQ(a) {
	return /^\d{5}$/[zb](a) || /\s+\d{5}$/[zb](a) ? a[I](a[t] - 5) : M;
}
var jQ = undefined, kQ = undefined;
function lQ() {
	var a = null;
	if (!We(jQ)) {
		a = Uk();
		var b = a.J("tvLoc", M);
		jQ = iQ(b);
	}
	if (!We(kQ)) {
		if (a == null) {
			a = Uk();
		}
		var c = a.J("userLoc", M);
		kQ = iQ(c);
	}
}
function CP() {
	lQ();
	return jQ;
}
function mQ() {
	lQ();
	return nQ() ? jQ : kQ;
}
function MP() {
	return /^\d{5}$/[zb](mQ());
}
function nQ() {
	lQ();
	return /^\d{5}$/[zb](jQ);
}
function _GA_zip(a) {
	var b = a[B], c = a.id[A](/-text$/, "-save");
	Ra(W(c), b == CP() || !/^\d{5}$/[zb](b));
}
function _GA_saveZipButton(a, b) {
	var c = a.id[A](/-save$/, "-text"), d = W(c)[B];
	oQ(d, pQ(b));
	Ra(a, true);
}
function pQ(a) {
	if (!a) {
		return null;
	}
	return function () {
		jQ = undefined;
		_GA_submit();
	};
}
function oQ(a, b) {
	var c = Uk();
	c.aa("tvLoc", a);
	c.vc(b);
	jQ = a;
}
function _GA_maybeSaveZip(a, b) {
	if (Mz(b) != 13) {
		return;
	}
	if (!a || !a.id) {
		return;
	}
	var c = a.id[A](/-text$/, "-save"), d = W(c);
	d && !d[Yy] && d.click();
}
function AP(a) {
	var b = [], c = oP[a];
	b[q]("<div id=\"cat_", a, "\" class=\"category\"><span class=\"glk\" ", "onmousedown=\"", S(WP), Vj, vg(a), Xj, wk, c[vO], "</span></div>");
	return b[K](M);
}
function _GA_previewOnload() {
}
function IP(a, b, c) {
	var d, e, f = Y.f().$(a);
	if (f && !f.Ja) {
		d = gQ();
	} else {
		if (f && f.Ja) {
			var g = vg(a);
			e = S(qQ) + Vj + g + Xj;
			d = rQ(e);
		} else {
			if (c == "TV") {
				var g = vg(a);
				e = S(dQ) + Vj + g + ");" + S(sQ) + "(this," + g + Xj;
				d = rQ(e);
			} else {
				e = S(no) + Vj + vg(a) + ",false,null)";
				d = rQ(e);
			}
		}
	}
	return "<div id=\"gallery-" + a + wk + d + so;
}
function gQ() {
	return "<div class=\"gallery-add-button\"><button disabled=true>" + Yz() + "</button></div>";
}
function qQ(a) {
	Y.f().Ud(a, true);
	var b = "\u65e5\u5386\u65e0\u540d\u79f0", c = Un(a), d = Y.f().$(a);
	if (c && c.ua) {
		b = c.ua;
	} else {
		if (d && d[td]) {
			b = d[td];
		}
	}
	eQ(b, a);
}
function sQ(a, b) {
	if (!/^tv:/[zb](b)) {
		no(b, false);
		return;
	}
	var c = CP();
	if (c) {
		tQ(b, c);
	} else {
		uQ();
		var d = W("tv_zip");
		if (d) {
			ub(d[F], am);
		}
		var e = BP, f = "tv_zip2";
		e.b("message", LO);
		e.b(Wt, f);
		e.b("defaultValue", M);
		e.b("buttonLabel", "\u6dfb\u52a0\u65e5\u5386");
		e.b("display", "''");
		var g = S(vQ) + "(this," + vg(b) + Xj;
		e.b(Pv, g);
		wQ = a[ud];
		xQ = a[ud][bc];
		k(a[ud], e[r]());
		pa(function () {
			rA(f + "-text");
		}, 0);
	}
}
function vQ(a, b) {
	var c = a.id[A](/-save$/, "-text"), d = W(c)[B];
	oQ(d);
	tQ(b, d);
	uQ();
}
function uQ() {
	var a = wQ, b = xQ;
	try {
		k(a, b);
	}
	catch (c) {
	}
	wQ = null;
	xQ = null;
	var d = W("tv_zip-text");
	if (d && MP()) {
		Oa(d, mQ());
		var e = W("tv_zip-save");
		if (e) {
			Ra(e, true);
		}
	}
	var f = W("tv_zip");
	if (f) {
		ub(f[F], "visible");
	}
}
var wQ, xQ;
function tQ(a, b) {
	a = a[A](/\d{5}$/, b);
	no(a, false);
}
function rQ(a) {
	return "<div class=\"gallery-add-button\"><button onclick=\"this.disabled = true;" + a + "\">\u6dfb\u52a0\u5230\u65e5\u5386</button></div>";
}
function NP(a) {
	if (!MP()) {
		return a;
	}
	var b = gP(a);
	if (!b) {
		return a;
	}
	var c = new nP;
	c.FH(b);
	var d = c.sD(), e = d[t], f = /^\d{5}$/;
	for (var g = 0; g < e; ++g) {
		if (d[g][Lc](f)) {
			d[g] = mQ();
			break;
		}
	}
	c.HC(d);
	b = c[r]();
	return hP(a, b);
}
R.nz = UP;
R.pz = aQ;
R.oz = eQ;
R.mz = yP;
function yQ(a) {
	gx("advanced");
	var b = a.sr_what[B], c = a.sr_who[B], d = a.sr_where[B], e = a.sr_calendar[B], f = a.sr_minusWords[B], g = W("sr_daterange-sd")[B];
	DO(g);
	var i = W("sr_daterange-ed")[B];
	CO(i);
	HO(e);
	if (e == M) {
		om(be);
		return;
	}
	GO(b);
	if (b) {
		b = wf(b);
	}
	AO(c);
	if (c) {
		c = wf(c);
	}
	FO(d);
	if (d) {
		d = wf(d);
	}
	EO(f);
	if (f) {
		f = wf(f);
	}
	if (!b && !c && !d && !f && !g && !i) {
		om(ae);
		return;
	}
	if (g && i) {
		var j = hi(XG("sr_daterange"));
		BO(j);
		jx(Hn(), "advanced", j[H][r](), j.A[r](), M, e, b, c, d, f);
	} else {
		jx(Hn(), "advanced", M, M, M, e, b, c, d, f);
	}
}
function zQ() {
	pn(AQ);
}
function AQ() {
	l(W("srreg")[F], U);
	//*********tianliang edit,remove search options:search scope 
	//k(W("sropt"), ["<div class=\"logoMargin\" style=\"position:relative;zoom:1\"><div style=\"padding:4px 7px 0;background:#74dd82;position:absolute;left:0;right:0;bottom:0\"><span class=\"lk small\" style=\"float:right\" onclick=\"" + S(ox) + "();\">\u9690\u85cf\u641c\u7d22\u9009\u9879</span><h2 style=\"font-size:120%\">\u641c\u7d22\u9009\u9879</h2></div></div><div style=\"border:3px solid #74dd82;background:#b5edbc; padding:6px 5%;margin-bottom:4px\"><form onsubmit=\"", S(yQ), "(this); return false\" id=advancedSearchForm method=post> <table cellpadding=0 width=100% cellspacing=4 border=0> <tr><td width=2% rowspan=5>&nbsp;</td></tr> <tr> <td class=asl title=\"\u540d\u79f0/\u8bf4\u660e\"><span class=nobr>\u5185\u5bb9\uff1a</span></td> <td width=40%> <input style=\"width:100%\" name=sr_what value=\"\" maxlength=200 id=sr_what tabindex=1> </td> <td width=10%></td> <td class=asl title=\"\u540d\u79f0/\u8bf4\u660e/\u4eba/\u5730\u70b9\"><span class=nobr>\u4e0d\u5305\u542b\uff1a</span></td> <td width=40%> <input style=\"width:100%\" name=sr_minusWords value=\"\" maxlength=200 id=sr_minusWords tabindex=5> </td> </tr> <tr> <td class=asl title=\"\u5305\u62ec\u8fd9\u4e9b\u4eba\"><span class=nobr>\u53c2\u52a0\u8005\uff1a</span></td> <td> <input style=\"width:100%\" name=sr_who value=\"\" maxlength=200 tabindex=2> </td> </tr> <tr> <td class=asl title=\"\u5730\u533a\"><span class=nobr>\u5730\u70b9\uff1a</span></td> <td> <input style=\"width:100%\" name=sr_where value=\"\" maxlength=200 tabindex=3> </td> </tr> <tr> <td class=asl title=\"\u5728\u4ee5\u4e0b\u65e5\u5386\u4e2d\u641c\u7d22\"><span class=nobr>\u641c\u7d22\uff1a</span></td> <td style=\"text-align:left\"> <select style=\"width:12em\" tabindex=4 id=sr_calendar name=sr_calendar></select> </td> <td></td> <td class=asl title=\"\u65e5\u671f\u8303\u56f4\"> <span class=nobr>\u5f00\u59cb\u65e5\u671f &nbsp;:</span></td><td style=\"text-align:left\"> <div id=sr_dateRangeOwner></div></td> </tr> </table> <div style=\"text-align:center\"><input style=\"font-size:10pt\" type=submit value=\"\u641c\u7d22\" tabindex=8> &nbsp;&nbsp; <input style=\"font-size:10pt\" type=button value=\"", "\u53d6\u6d88", "\" onclick=\"", S(ox), "();return false\" tabindex=9> </div></form> </div>"][K](M));
	  k(W("sropt"), ["<div class=\"logoMargin\" style=\"position:relative;zoom:1\"><div style=\"padding:4px 7px 0;background:#74dd82;position:absolute;left:0;right:0;bottom:0\"><span class=\"lk small\" style=\"float:right\" onclick=\"" + S(ox) + "();\">\u9690\u85cf\u641c\u7d22\u9009\u9879</span><h2 style=\"font-size:120%\">\u641c\u7d22\u9009\u9879</h2></div></div><div style=\"border:3px solid #74dd82;background:#b5edbc; padding:6px 5%;margin-bottom:4px\"><form onsubmit=\"", S(yQ), "(this); return false\" id=advancedSearchForm method=post> <table cellpadding=0 width=100% cellspacing=4 border=0> <tr><td width=2% rowspan=5>&nbsp;</td></tr> <tr> <td class=asl title=\"\u540d\u79f0/\u8bf4\u660e\"><span class=nobr>\u5185\u5bb9\uff1a</span></td> <td width=40%> <input style=\"width:100%\" name=sr_what value=\"\" maxlength=200 id=sr_what tabindex=1> </td> <td width=10%></td> <td class=asl title=\"\u540d\u79f0/\u8bf4\u660e/\u4eba/\u5730\u70b9\"><span class=nobr>\u4e0d\u5305\u542b\uff1a</span></td> <td width=40%> <input style=\"width:100%\" name=sr_minusWords value=\"\" maxlength=200 id=sr_minusWords tabindex=5> </td> </tr> <tr style='display:none'> <td class=asl title=\"\u5305\u62ec\u8fd9\u4e9b\u4eba\"><span class=nobr>\u53c2\u52a0\u8005\uff1a</span></td> <td> <input style=\"width:100%\" name=sr_who value=\"\" maxlength=200 tabindex=2> </td> </tr> <tr> <td class=asl title=\"\u5730\u533a\"><span class=nobr>\u5730\u70b9\uff1a</span></td> <td> <input style=\"width:100%\" name=sr_where value=\"\" maxlength=200 tabindex=3> </td> </tr> <tr> <td class=asl title=\"\u5728\u4ee5\u4e0b\u65e5\u5386\u4e2d\u641c\u7d22\"><span class=nobr>\u641c\u7d22\uff1a</span></td> <td style=\"text-align:left\"> <select style=\"width:12em\" tabindex=4 id=sr_calendar name=sr_calendar></select> </td> <td></td> <td class=asl title=\"\u65e5\u671f\u8303\u56f4\"> <span class=nobr>\u5f00\u59cb\u65e5\u671f &nbsp;:</span></td><td style=\"text-align:left\"> <div id=sr_dateRangeOwner></div></td> </tr> </table> <div style=\"text-align:center\"><input style=\"font-size:10pt\" type=submit value=\"\u641c\u7d22\" tabindex=8> &nbsp;&nbsp; <input style=\"font-size:10pt\" type=button value=\"", "\u53d6\u6d88", "\" onclick=\"", S(ox), "();return false\" tabindex=9> </div></form> </div>"][K](M));
	px = true;
	Wp(Vp);
	W("advancedSearchForm")[rd]();
	var a = W("sr_dateRangeOwner");
	k(a, cI("sr_daterange", "sr_rangeIcal"));
	R.ks("sr_daterange-sd");
	R.ks("sr_daterange-ed");
	Ka(W("sr_daterange-ad"), true);
	var b = a[Hd]("label");
	for (var c = 0; c < b[t]; ++c) {
		if (b[c].htmlFor == "sr_daterange-ad") {
			k(b[c], M);
			break;
		}
	}
	Nn();
	W("sr_what")[Wc]();
	ro();
}
function BQ() {
	var a = W("sr_calendar");
	za(a[ez], 0);
	var b = [], c = [], d = null;
	Dw(function (g) {
		if (g.id == Yn) {
			d = g;
		} else {
			2 == g[J] ? b[q](g) : c[q](g);
		}
	});
	b[gd](Xn);
	c[gd](Xn);
	var e = 0;
	//*****tianliang edit,move userDefaultCalendar to first option.
	/*
	if (d != null) {
		a[ez][e++] = CQ(d.id, true);
	}
	for (var f = 0; f < b[t]; ++f) {
		a[ez][e++] = CQ(b[f].id, true);
	}
	a[ez][e++] = new Option("\u6240\u6709\u65e5\u5386", "all");
	a[ez][e++] = new Option("\u6211\u5168\u90e8\u7684\u65e5\u5386", "my");
	a[ez][e++] = new Option("\u6240\u6709\u5176\u4ed6\u65e5\u5386", "other");
	for (var f = 0; f < c[t]; ++f) {
		a[ez][e++] = CQ(c[f].id, false);
	}
	*/
	a[ez][e++] = new Option("\u6240\u6709\u65e5\u5386", "all");
	a[ez][e++] = new Option("\u6211\u5168\u90e8\u7684\u65e5\u5386", "my");
	if (d != null) {
		a[ez][e++] = CQ(d.id, true);
	}
	for (var f = 0; f < b[t]; ++f) {
		a[ez][e++] = CQ(b[f].id, true);
	}
	a[ez][e++] = new Option("\u6240\u6709\u5176\u4ed6\u65e5\u5386", "other");
	for (var f = 0; f < c[t]; ++f) {
		a[ez][e++] = CQ(c[f].id, false);
	}
	
}
function CQ(a) {
	var b = Y.f().th(a, false), c = new Option("   " + b, a);
	if ($f) {
		k(c, "&nbsp;&nbsp;&nbsp;" + P(b));
	}
	return c;
}
R.EM = yQ;
R.gK = zQ;
R.jJ = BQ;
function DQ() {
	$n(function (a) {
		a === 0 && pa(function () {
			uo();
			window.print();
		}, 0);
		return false;
	}, "\u65e5\u5386\u6253\u5370\u9884\u89c8", "\u8131\u673a\u65f6\u65e0\u6cd5\u4f7f\u7528 Google \u65e5\u5386\u6253\u5370\u89c6\u56fe\u3002 \u662f\u5426\u8981\u6253\u5370\u6d4f\u89c8\u5668\u4e2d\u6240\u663e\u793a\u7684\u9875\u9762\uff1f", [Zn("\u6253\u5370"), Zn("\u53d6\u6d88")]);
}
function EQ(a) {
	if (6 == cp[J]) {
		window.print();
		return;
	}
	var b = zp.H(), c = Fh(b);
	if (ip.Ef()) {
		c.l += ip.Ef();
	}
	c = c.H();
	var d = [];
	ur(function (s) {
		d[q](s);
	});
	d[gd](Xn);
	var e = [];
	for (var f = 0; f < d[t]; ++f) {
		e[q](d[f].id);
	}
	var g = "WEEK";
	if (cp[J] == 2) {
		g = "MONTH";
	} else {
		if (cp[J] == 4 && cp.pa > 7) {
			g = "COMPACT";
		} else {
			if (cp[J] == 3 || cp[J] == 6) {
				g = "AGENDA";
			}
		}
	}
	var i;
	if (Uk().fc(Xg, Pk(Xk))) {
		if (g == "WEEK" && cp.pa == 5 && cp[J] != 4 || cp[J] == 2) {
			i = "23456";
		}
	}
	var j = [Fg, b + "/" + c, "ctz", Hn(), "hl", Sk, "pgsz", "letter", "wkst", ds() + 1, "mode", g];
	i && j[q]("wdtp", i);
	for (var f = 0; f < e[t]; ++f) {
		j[q](Lx, e[f]);
	}
	var m = window[nc][id][A](/[\?\#].*/, M)[A](/\/?[^\/]*$/, "/print_preview"), n = "?";
	for (var f = 0; f < j[t]; f += 2) {
		m += n + ia(j[f]) + "=" + ia(j[f + 1]);
		n = xf;
	}
	function p() {
		a[zc]();
		DQ();
		return true;
	}
	Nk(m, undefined, undefined, Lk(function (s) {
		a[Ob][Dc](s[Xb]);
		try {
			a[Ob][zc]();
			a[Wc]();
		}
		catch (u) {
		}
		return true;
	}, p));
}
R.Uy = EQ;
var FQ = null;
function GQ() {
	this.fa = document[Xc]("DIV");
	ub(this.fa[F], am);
	Ba(this.fa[F], $l);
	document[Bc][o](this.fa);
	this.Z = false;
}
GQ[z].Pa = function () {
	if (R[mc].Ff && FQ == null) {
		FQ = tA(window, "AP_iframe_");
		l(FQ[ud][F], U);
		Ba(FQ[F], $l);
	}
	vB("calendars_fav");
	k(this.fa, HQ);
	var a = Rl(W("add_cals_link")), b = this.fa[F], c = a.x;
	if (Q && !W("cornerBookmarks")) {
		c += 7;
	}
	Wa(b, c + X);
	var d = a.y + a.h;
	b.top = d + X;
	mb(b, 20);
	var e = Rl(this.fa);
	if (FQ) {
		l(FQ[ud][F], M);
		Wa(FQ[F], e.x + X);
		FQ[F].top = d + X;
		Fa(FQ[F], e.w - 8 + X);
		ob(FQ[F], e.h - 8 + X);
		mb(FQ[F], this.fa[F][wd] - 1);
		l(FQ[F], M);
	}
	if (!Kk.f().$b) {
		var f = W("addP")[pd];
		for (var g = f[t]; --g >= 0; ) {
			Dy(f[g], Fy(f[g], function () {
			}));
			xm(f[g], "link-disabled");
		}
	}
	this.Z = true;
	oA(this);
	e = Rl(this.fa);
	b.top = a.y - e.h + X;
	if (FQ) {
		FQ[F].top = b.top;
	}
	ub(b, "visible");
};
GQ[z].V = function () {
	uB("calendars_fav");
	ub(this.fa[F], am);
	if (FQ) {
		l(FQ[ud][F], U);
	}
	this.Z = false;
};
GQ[z].Ue = function (a) {
	if (this.Z) {
		var b = Zl(a);
		if (Rl(this.fa)[ld](b) || Rl(W("calendarsBottomChrome"))[ld](b)) {
			return false;
		} else {
			this.V();
			return true;
		}
	} else {
		return true;
	}
};
function IQ() {
	tx() ? $s() : on(function () {
		R.$d(0);
	});
}
function JQ(a) {
	if (a == 0) {
		Cw();
	} else {
		a == 1 ? IQ() : on(function () {
			R.$d(a);
		});
	}
	KQ();
}

//****Only show "Import into calendar" menuitem alter clicking "add"
//var LQ = "<div class=addmenu onmouseover=\"this.style.background='#c3d9ff'\" onmouseout=\"this.style.background=''\"  onmousedown=\"" + S(JQ), HQ = "<div id=addP>" + LQ + "(1)\">\u6dfb\u52a0\u516c\u5171\u65e5\u5386</div>" + LQ + "(2)\">\u6dfb\u52a0\u670b\u53cb\u7684\u65e5\u5386</div>" + LQ + "(3)\">\u901a\u8fc7 URL \u6dfb\u52a0</div>" + LQ + "(4)\">\u5bfc\u5165\u65e5\u5386</div></div>";

var LQ = "<div class=addmenu onmouseover=\"this.style.background='#c3d9ff'\" onmouseout=\"this.style.background=''\"  onmousedown=\"" + S(JQ), HQ = "<div id=addP>" + LQ + "(4)\">\u5bfc\u5165\u65e5\u5386</div></div>";

//****end
function MQ() {
	NQ || (NQ = new GQ);
	NQ.Pa();
}
function KQ() {
	NQ.V();
}
var NQ;
R.Ny = MQ;

