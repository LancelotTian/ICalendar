
var xy = clearTimeout, yy = confirm, zy = _enableEventSuggestions, Ay = _ol_enabled;
function By(a, b) {
	return a.selectedIndex = b;
}
function Cy(a, b) {
	return a.onkeyup = b;
}
function Dy(a, b) {
	return a.onmouseover = b;
}
function Ey(a, b) {
	return a.scrollLeft = b;
}
function Fy(a, b) {
	return a.onmousedown = b;
}
function Gy(a, b) {
	return a.onclick = b;
}
var Hy = "onchange", Iy = "forms", Jy = "direction", Ky = "stop", Ly = "filter", My = "innerWidth", Ny = "create", Oy = "selectedIndex", Py = "clearTimeout", Qy = "index", Ry = "collapse", Sy = "clientWidth", Ty = "abort", Uy = "data", Vy = "summary", Wy = "stack", Xy = "screen", Yy = "disabled", Zy = "message", $y = "getComputedStyle", az = "nodeName", bz = "createTextRange", cz = "hasPermission", dz = "isOpen", ez = "options", fz = "select", gz = "currentStyle", hz = "elements", iz = "detach", jz = "every", kz = "tagName", lz = "which", mz = "fileName", nz = "contentWindow", oz = "toUpperCase", pz = "parse", qz = "eid", rz = null, sz, tz = "\">)]", uz = "\"<([";
function vz(a) {
	var b = a[Lc](hy);
	if (b) {
		return [b[3] || null, b[1] || b[4] || null];
	}
	return null;
}
function wz() {
	var a = null;
	ur(function (b) {
		var c = Un(b.id);
		if (c && c.tc >= 60) {
			if (a) {
				a = null;
				return false;
			} else {
				a = b.id;
			}
		}
	});
	return a;
}
function xz() {
	xq && xq.kk(0, uo);
}
function yz() {
	rz || (rz = W("coverinner"));
	return rz;
}
var zz = true;
function Az() {
	sz || (sz = new vk);
	return sz;
}
function Bz(a, b) {
	var c = a[ic](b), d = uz[E](c);
	if (d == -1) {
		return c;
	}
	var e = a[E](tz[ic](d), b + 1);
	return e >= 0 ? a[I](b, e + 1) : a[Qd](b);
}
function Cz(a, b) {
	var c = a[t];
	if (a[ic](0) == b && a[ic](c - 1) == b) {
		return a[I](1, c - 1);
	}
	return a;
}
function Dz(a) {
	return a[A](/[\s\xa0]+/g, qg)[A](/^\s+|\s+$/g, M);
}
var Ez = "<table cellspacing=0 cellpadding=0><tr><td><div style=\"position:relative;width:13px;height:12px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/check.png')\"></div></td><td style=\"font-family: Arial\">&nbsp;\u5df2\u6dfb\u52a0</td></tr></table>";
function Fz(a) {
	var b = vz(a);
	return b ? b[1] : null;
}
var Gz;
function Hz(a) {
	var b = a[Hd]("dl");
	for (var c = 0; c < b[t]; ++c) {
		if (b[c][Bb] == "innerChip") {
			return b[c];
		}
	}
	return null;
}
function Iz() {
	var a = wz();
	a || (a = Yn);
	return Y.f().$(a);
}
function Jz(a) {
	var b = (Uk().J(bh) || "US")[Kd](), c = (Xq[b] || Xq["*"]) + "?hl=" + ia(Ie);
	if (a) {
		c += "&q=" + ia(a);
	}
	return c;
}
function Kz(a, b, c) {
	function d() {
		b || (b = "#fad163");
		var e = pq(), f = qq();
		dq && dq.V();
		xz();
		sq("cover", b);
		var g = yz();
		k(g, M);
		l(f[F], U);
		l(e[F], M);
		mq("auto");
		k(g, a);
		if (zz) {
			Sp = true;
			zz = false;
		}
		c();
	}
	$o(d) && d();
}
var Lz;
function Mz(a) {
	if (a.cu) {
		a = a.yb;
	}
	var b;
	if (a[J] == "keypress") {
		if (Q) {
			b = a[$c];
		} else {
			if ($f) {
				b = a[lz];
				if (!b) {
					b = a[$c];
				}
			} else {
				return a[$c] || a[lz];
			}
		}
	} else {
		if (a[$c]) {
			b = a[$c];
		} else {
			if (a[lz]) {
				b = a[lz];
			}
		}
	}
	return b;
}
function Nz(a, b, c) {
	if (We(b.selectionEnd) && We(b.selectionStart)) {
		b.selectionStart = c;
		b.selectionEnd = c;
	} else {
		if (a[Ob].selection && b[bz]) {
			var d = b[bz]();
			d[Ry](true);
			d.move("character", c);
			d[fz]();
		}
	}
}
function Oz(a, b, c) {
	var d = a[Ob][Xc](c);
	b[o](d);
	return d;
}
function Pz(a) {
	return a ? new vk(qk(a)) : Az();
}
function Qz(a, b, c) {
	a[b] = c;
}
var Rz = "location", Sz = "recur", Tz = "details";
function Uz(a) {
	var b = M, c = M;
	for (var d = 0; d < a[t]; ) {
		var e = Bz(a, d);
		if (e[ic](0) == yf) {
			var f = e[E](zf);
			c = e[I](1, f != -1 ? f : e[t]);
		} else {
			if (c == M) {
				b += e;
			}
		}
		d += e[t];
	}
	if (c == M && b[E](Sm) != -1) {
		c = b;
		b = M;
	}
	b = Dz(b);
	b = Cz(b, "'");
	b = Cz(b, Af);
	c = Dz(c);
	return [b, c];
}
function Vz() {
}
var Wz = /^[a-zA-Z0-9\-_.!~*'()]*$/, Xz = "\u8131\u673a\u5de5\u4f5c\u65f6\uff0c\u5bf9\u91cd\u590d\u6d3b\u52a8\u7684\u66f4\u6539\u4e0d\u9002\u7528\u4e8e\u6574\u4e2a\u6d3b\u52a8\u3002 \u60a8\u53ea\u80fd\u4fee\u6539\u5355\u72ec\u67d0\u6b21\u7684\u91cd\u590d\u6d3b\u52a8\u3002";
function Yz() {
	return Q && !R[mc].ri ? Ez : "<img src=\"images/check.png\">&nbsp;\u5df2\u6dfb\u52a0";
}
function Zz(a) {
	var b = Fz(a);
	if (b) {
		var c = b[Lc](py);
		if (c) {
			return c[3][Kd]();
		}
	}
	return null;
}
function $z(a) {
	return !a[Lc](/\.(?:com|edu|gov|int|mil|net|org|aero|asia|cat|coop|museum|biz|info|jobs|mobi|name|pro|tel|travel|\w\w)$/i);
}
function aA(a) {
	var b = [], c = Mx[a];
	if (!c) {
		return [];
	}
	for (var d in c) {
		var e = c[d];
		if (e && e[J] === 1 && e[nd] === 3) {
			var f = e.mc;
			if (f <= 0) {
				throw new Error(" Bad alert time: " + f);
			}
			b[q](f);
		}
	}
	return b;
}
function bA(a, b) {
	var c = [Zn("\u786e\u5b9a"), Zn("\u53d6\u6d88")];
	$n(b, "\u60a8\u662f\u5426\u786e\u5b9a\uff1f", "\u60a8\u505a\u51fa\u7684\u66f4\u6539\u53ea\u4f1a\u53cd\u6620\u5728 " + P(a) + " \u65e5\u5386\u4e0a\u3002\u662f\u5426\u7ee7\u7eed\uff1f", c);
}
function cA(a, b) {
	var c, d, e;
	if (Kk.f().$b) {
		if (a) {
			d = ["ONE", "ALL", "TAIL"];
			c = [Zn("\u4ec5\u6b64\u4e8b\u4f8b"), Zn("\u6b64\u7cfb\u5217\u4e2d\u7684\u6240\u6709\u6d3b\u52a8"), Zn("\u4ee5\u4e0b\u5168\u90e8"), Zn("\u53d6\u6d88")];
			e = "\u60a8\u662f\u60f3\u4ec5\u66f4\u6539\u8fd9\u4e00\u7cfb\u5217\u4e2d\u7684\u6b64\u6d3b\u52a8\u3001\u6240\u6709\u6d3b\u52a8\uff0c\u8fd8\u662f\u7cfb\u5217\u4e2d\u7684\u8fd9\u4e00\u6d3b\u52a8\u53ca\u5c06\u6765\u6240\u6709\u6d3b\u52a8\uff1f";
		} else {
			d = ["ONE", "ALL"];
			c = [Zn("\u4ec5\u6b64\u4e8b\u4f8b"), Zn("\u6b64\u7cfb\u5217\u4e2d\u7684\u6240\u6709\u6d3b\u52a8"), Zn("\u53d6\u6d88")];
			e = "\u60a8\u662f\u4ec5\u4ec5\u66f4\u6539\u6b64\u6d3b\u52a8\u7684\u8fd9\u4e00\u6d3b\u52a8\u4e8b\u4f8b\uff0c\u8fd8\u662f\u66f4\u6539\u6b64\u7cfb\u5217\u4e2d\u7684\u6240\u6709\u6d3b\u52a8\uff1f";
		}
	} else {
		d = ["ONE"];
		c = [Zn("\u4ec5\u6b64\u4e8b\u4f8b"), Zn("\u53d6\u6d88")];
		e = Xz;
	}
	$n(function (f) {
		return b(d[f]);
	}, "\u4fee\u6539\u91cd\u590d\u6d3b\u52a8", e, c);
}
function dA(a) {
	a[q]("nopts", 2, "nopts", 3, "nopts", 4);
	return a;
}
function eA(a) {
	var b = R.W.Ma();
	b.sd("ef_new_from_menu");
	pn(function () {
		return Kx(a, b);
	});
}
function fA(a, b, c, d, e) {
	nn(function () {
		gA(a, b, c, d, e);
	});
}
function hA(a) {
	if (a == null || a[Lc](/^\s*$/)) {
		return "\uff08\u65e0\u4e3b\u9898\uff09";
	}
	return a;
}
var iA = "timelabel";
function jA(a) {
	var b = a[Hd]("span");
	for (var c = 0; c < b[t]; ++c) {
		if (b[c][Bb] == iA) {
			return b[c];
		}
	}
	return null;
}
function kA(a, b) {
	var c = b[0], d = b[2], e = b[0], f = a[Hd](xk);
	for (var g = 0; g < f[t]; ++g) {
		var i = f[g], j = i[Bb];
		if (j == "t1" || j == "b1") {
			Ua(i[F], c);
		} else {
			if (j == "t2") {
				Ua(i[F], e);
			} else {
				if (j == "b2" || j == "chipbody edit") {
					Ua(i[F], d);
					pb(i[F], e);
				}
			}
		}
	}
	pb(Hz(a)[F], c);
	var m = a[Hd]("dt");
	for (var g = 0; g < m[t]; ++g) {
		Ua(m[g][F], e);
	}
}
function lA(a, b) {
	var c = Iz(), d = wo[c[vc]], e = a.w - (R[mc].Le ? 3 : 0), f = Lv;
	f.b(Av, d[0]);
	f.b(Bv, d[2]);
	f.b(Cv, d[0]);
	f.b(Dv, Ev);
	f.b(Fv, "tempEvent");
	f.b(jk, e + X);
	f.b(ik, a.h - 4);
	f.b(zu, 0);
	f.b(Tu, 0);
	f.b(Iv, M);
	f.b(Jv, M);
	f.b(Kv, M);
	f.b("innerChipDetails", "class=\"innerChip\"");
	f.b("timeStyle", M);
	f.b(Gv, zv(b[H], b.A, M));
	f.b(Uu, M);
	f.b(Hv, M);
	return f[r]();
}
function mA(a) {
	var b = Rl(a), c = new ll(b.x + b.w / 2, b.y + b.h / 2, window), d = Ss(c, false), e = ip.ja.Tb(d.ka, d.Y, undefined), f = Fh(e), g = f.H();
	f.l++;
	var i = f.H();
	return {start:g, A:i, C:16};
}
function nA(a) {
	if (!Yq) {
		return Jz(a);
	}
	var b = Yq[A]("{q}", ia(a));
	b = b[A]("{hl}", ia(Ie));
	if (b[E]("{googUrl}") >= 0) {
		var c = Jz(a);
		b = b[A]("{googUrl}", ia(c));
	}
	return b;
}
function oA(a) {
	for (var b = 0; b < No.If[t]; ++b) {
		if (a === No.If[b]) {
			return false;
		}
	}
	No.If[q](a);
	return true;
}
function pA(a, b) {
	if (Lz == null) {
		Lz = document[Xc]("DIV");
		document[Bc][o](Lz);
		l(Lz[F], U);
	}
	k(Lz, a);
	var c = Lz[pd], d = [], e = [];
	for (var f = 0; f < c[t]; ++f) {
		var g = c[f];
		(g[Nb] == 1 ? d : e)[q](g);
	}
	if (!b) {
		b = document[Bc];
	}
	b[o](d[0]);
	for (var f = 0; f < e[t]; ++f) {
		Lz[Gc](e[f]);
	}
	return d[0];
}
function qA(a) {
	return a[ec] || a[Hc];
}
function rA(a) {
	var b = typeof a == hf ? W(a) : a;
	if (b) {
		try {
			b[Wc]();
			if (b[kz] == "INPUT" && (b[J] == "text" || b[J] == "password")) {
				Nz(window, b, 0);
			}
		}
		catch (c) {
		}
	}
}
function sA(a) {
	if ("innerWidth" in a) {
		return a[My];
	} else {
		if ("documentElement" in a[Ob] && "clientWidth" in a[Ob][Pd]) {
			return a[Ob][Pd][Sy];
		} else {
			if ("clientWidth" in a[Ob][Bc]) {
				return a[Ob][Bc][Sy];
			}
		}
	}
	return 0;
}
function tA(a, b, c, d) {
	var e = a[Ob][$b](b), f = c || um;
	if (!e) {
		var g = Oz(a, a[Ob][Bc], xk), i = ["<iframe id=", b, " name=", b, " src=\"", P(f), Af];
		d && i[q](" style=\"width:0;height:0;border:0\"");
		i[q]("></iframe>");
		k(g, i[K](M));
		e = W(b);
	}
	return e;
}
function uA(a, b) {
	var c = a[Ob][$b](b);
	if (!c) {
		c = Oz(a, a[Ob][Bc], xk);
		c.id = b;
	}
	return c;
}
function vA(a, b) {
	l(a[F], b ? M : U);
}
function wA(a, b) {
	do {
		if (a === b) {
			return true;
		}
		b = b[ud];
	} while (b && b !== document[Bc]);
	return false;
}
function xA(a, b) {
	var c = a[Fc];
	if (c[sd] && c[sd][$y]) {
		var d = c[sd][$y](a, M);
		if (d) {
			return d[b];
		}
	}
	return null;
}
var yA = "mousemove", zA = Yt;
function AA() {
	var a = arguments[t];
	if (a == 1 && ff(arguments[0])) {
		return AA[md](null, arguments[0]);
	}
	if (a % 2) {
		throw Error("Uneven number of arguments");
	}
	var b = {};
	for (var c = 0; c < a; c += 2) {
		b[arguments[c]] = arguments[c + 1];
	}
	return b;
}
function BA(a, b, c) {
	if (b in a) {
		return a[b];
	}
	return c;
}
function CA(a, b, c) {
	if (b in a) {
		throw Error("The object already contains the key \"" + b + Af);
	}
	Qz(a, b, c);
}
function DA(a, b) {
	for (var c in a) {
		if (a[c] == b) {
			return true;
		}
	}
	return false;
}
function EA(a) {
	var b = [], c = 0;
	for (var d in a) {
		b[c++] = a[d];
	}
	return b;
}
function FA(a) {
	var b = 0;
	for (var c in a) {
		b++;
	}
	return b;
}
function GA(a) {
	for (var b = 1; b < arguments[t]; b++) {
		var c = arguments[b];
		ff(c) ? a[q][md](a, c) : a[q](c);
	}
}
function HA(a, b, c) {
	Ai(a, c, 0, b);
}
function IA(a, b, c) {
	if (a[jz]) {
		return a[jz](b, c);
	}
	if (Array[jz]) {
		return Array[jz](a, b, c);
	}
	var d = a[t], e = jf(a) ? a[Vb](M) : a;
	for (var f = 0; f < d; f++) {
		if (f in e && !b[G](c, e[f], f, a)) {
			return false;
		}
	}
	return true;
}
function JA(a, b, c) {
	if (a[Ly]) {
		return a[Ly](b, c);
	}
	if (Array[Ly]) {
		return Array[Ly](a, b, c);
	}
	var d = a[t], e = [], f = 0, g = jf(a) ? a[Vb](M) : a;
	for (var i = 0; i < d; i++) {
		if (i in g) {
			var j = g[i];
			if (b[G](c, j, i, a)) {
				e[f++] = j;
			}
		}
	}
	return e;
}
var KA = "images/bubble_combined.png", LA = "CREATE", MA = "TEMPLATE", NA = "event", OA = "output", PA = "action";
function QA(a, b) {
	for (var c = 0, d = 1; c < b[t]; c++, d += 2) {
		a[d] = b[c];
	}
	return a[K](M);
}
function RA(a) {
	return sa(a[A](/\+/g, qg));
}
function SA(a) {
	a = ma(a);
	if (!Wz[zb](a)) {
		return ia(a);
	}
	return a;
}
function TA(a, b, c) {
	a[b] = c;
}
function UA(a, b) {
	var c = b || {};
	for (var d in c) {
		a = a[A](new RegExp("\\{\\$" + d + "\\}", "gi"), c[d]);
	}
	return a;
}
var VA = "\u63d0\u9192\u65f6\u95f4\u5fc5\u987b\u4e3a\u6d3b\u52a8\u53d1\u751f\u524d 4 \u5468\u81f3 5 \u5206\u949f\u3002";
function WA(a) {
	this.Bw = 0.25;
	this.Cw = true;
	this.I = window[Ob][Xc]("DIV");
	Ba(this.I[F], $l);
	mb(this.I[F], 180);
	this.I.id = "infowindow";
	this.RB();
	this.HB(a);
	this.Un = null;
	this.FB();
	this.Ox(208, 69);
	this.ei = true;
	this.Vn = -1;
	this.qk = -1;
	this.V();
}
WA[z].mJ = function (a, b) {
	ob(this.Xk[F], b + X);
	Fa(this.Xk[F], a + X);
	this.Ox(a - (this.Je.w[Eb] - 15) * 2, b - (this.Je.Ae[Cd] - 15) * 2);
};
WA[z].Ox = function (a, b) {
	if (a < 0) {
		a = 0;
	}
	if (b < 0) {
		b = 0;
	}
	Fa(this, a);
	ob(this, b);
	this.VJ(a, b);
	Wa(this.Ad[F], (xA(this.Ad, "direction") || (this.Ad[gz] ? this.Ad[gz][Jy] : null) || this.Ad[F][Jy]) == "rtl" ? "11px" : this.sE() - this.Ad[Eb] - 10 - 1 + X);
	this.Ad[F].top = "10px";
};
WA[z].rE = function () {
	return this[Cd] + this.Je.Qd[Cd] + this.Je.Ae[Cd];
};
WA[z].sE = function () {
	return this[Eb] + this.Je.w[Eb] + this.Je.Q[Eb];
};
WA[z].VJ = function (a, b) {
	var c = a + X, d = b + X, e = this.Je;
	Fa(e.Sv[F], c);
	Fa(e.Ae[F], c);
	ob(e.so[F], d);
	ob(e.Q[F], "100%");
	Fa(e.Mn[F], c);
	Fa(e.Ln[F], c);
	ob(e.Mn[F], d);
	ob(e.Ln[F], d);
	ob(e.Hy[F], d);
	ob(e.w[F], "100%");
	var f = this.On(a);
	if (this.Cw) {
		Fa(e.ym[F], f + X);
		Fa(e.fk[F], f + X);
		l(e.Qd[F], M);
		Wa(e.Qd[F], f + e.Mg[Eb] + X);
		Wa(e.Zh[F], f + e.Qd[Eb] + e.Mg[Eb] + X);
		Fa(e.Zh[F], a - f - e.Qd[Eb] + X);
		Fa(e.gk[F], a - f - e.Qd[Eb] + X);
	} else {
		Fa(e.ym[F], Je);
		Fa(e.fk[F], Je);
		l(e.Qd[F], U);
		Wa(e.Zh[F], e.Mg[Eb] + X);
		Fa(e.Zh[F], a + X);
		Fa(e.gk[F], a + X);
	}
	var g = a + e.w[Eb] + X;
	Wa(e.gm[F], g);
	Wa(e.so[F], g);
	Wa(e.Am[F], g);
	var i = b + e.Ae[Cd] + X;
	e.Mg[F].top = i;
	e.ym[F].top = i;
	e.Qd[F].top = i;
	e.Zh[F].top = i;
	e.Am[F].top = i;
};
WA[z].V = function () {
	if (!this.ei) {
		return;
	}
	if (this.Un) {
		if (!this.Un[G](this)) {
			return;
		}
	}
	this.Vn = tf();
	var a = this.Vn - this.qk;
	if (this.Fn && this.qk && a < 200) {
		if (!this.Fn[G](this)) {
			return;
		}
	}
	this.ei = false;
	l(this.I[F], U);
};
WA[z].Pa = function () {
	if (this.ei) {
		return;
	}
	this.ei = true;
	this.qk = tf();
	l(this.I[F], M);
	oA(this);
};
WA[z].Ue = function (a) {
	if (this.Mb()) {
		if (wA(this.I, qA(a))) {
			return false;
		} else {
			this.V();
			return true;
		}
	} else {
		return false;
	}
};
WA[z].Mb = function () {
	return this.ei;
};
WA[z].pv = function () {
	return this.ei || tf() - this.Vn < 200;
};
WA[z].OH = function (a, b) {
	var c = this.On(this[Eb]) + this.Je.w[Eb] + 5, d = this[Cd] + this.Je.Ae[Cd] + 96;
	Wa(this, a - c);
	this.top = b - d;
	Wa(this.I[F], this[Cc] + X);
	this.I[F].top = this.top + X;
};
WA[z].On = function (a) {
	return h[Wb](a * this.Bw);
};
WA[z].Wq = function (a) {
	this.Bw = a;
};
WA[z].Gm = function (a) {
	this.Cw = a;
};
WA[z].dh = function (a) {
	var b = window[Ob][Xc]("DIV");
	cb(b[F], "overflow:hidden;position:absolute;width:" + a[Eb] + "px;height:" + a[Cd] + "px;left:" + a[F][Cc] + ";top:" + a[F].top + ";z-index:" + a[F][wd]);
	Wa(a[F], Je);
	a[F].top = Je;
	b[o](a);
	return b;
};
var XA = "solid 1px #ababab";
function YA(a, b, c, d) {
	var e = document[Xc](xk);
	Fa(e, a);
	ob(e, b);
	var f = e[F];
	Ua(f, "#fff");
	Fa(f, a + X);
	ob(f, b + X);
	Ba(f, $l);
	Wa(f, c + X);
	f.top = d + X;
	return e;
}
function ZA(a, b) {
	var c = document[Xc](xk), d = c[F];
	if (b == "l" || b == "r") {
		ob(d, "100%");
	} else {
		Fa(d, "100%");
	}
	Ba(d, $l);
	switch (b) {
	  case "l":
		d.borderLeft = XA;
		Wa(d, Je);
		break;
	  case "r":
		d.borderRight = XA;
		tb(d, R[mc].Le ? "-1px" : Je);
		break;
	  case "t":
		d.borderTop = XA;
		d.top = Je;
		break;
	  case "b":
		d.borderBottom = XA;
		d.bottom = R[mc].Le ? "-1px" : Je;
		break;
	}
	a[o](c);
}
WA[z].RB = function () {
	var a = {};
	a.km = $A(KA, 25, 25, 148, 96, 0, 0);
	a.Ae = YA(300, 25, a.km[Eb], 0);
	ZA(a.Ae, "t");
	a.gm = $A(KA, 25, 25, 148, 96, -25, 0);
	a.w = YA(25, 200, 0, a.km[Cd]);
	ZA(a.w, "l");
	a.Ln = YA(300, 640, a.w[Eb], a.Ae[Cd]);
	a.Q = YA(25, 200, 0, a.gm[Cd]);
	ZA(a.Q, "r");
	a.Mg = $A(KA, 25, 25, 148, 96, 0, -25);
	a.fk = YA(300, 25, a.Mg[Eb], 0);
	ZA(a.fk, "b");
	a.Qd = $A(KA, 98, 96, 148, 96, -50, 0);
	a.gk = YA(300, 25, 0, 0);
	ZA(a.gk, "b");
	a.Am = $A(KA, 25, 25, 148, 96, -25, -25);
	a.Sv = this.dh(a.Ae);
	a.Hy = this.dh(a.w);
	a.so = this.dh(a.Q);
	a.ym = this.dh(a.fk);
	a.Zh = this.dh(a.gk);
	a.Mn = this.dh(a.Ln);
	var b = aB(this);
	if (!Q) {
		Fy(a.km, b);
		Fy(a.Ae, b);
		Fy(a.gm, b);
		Fy(a.w, b);
		Fy(a.Q, b);
		Fy(a.Mg, b);
		Fy(a.fk, b);
		Fy(a.Qd, b);
		Fy(a.gk, b);
		Fy(a.Am, b);
	}
	var c = this.Jy = window[Ob][Xc]("DIV");
	Ba(c[F], $l);
	Wa(c[F], Je);
	c[F].top = Je;
	mb(c[F], 181);
	Gy(c, bB(this));
	this.I[o](c);
	c[o](a.km);
	c[o](a.Sv);
	c[o](a.gm);
	c[o](a.Hy);
	c[o](a.Mn);
	c[o](a.so);
	c[o](a.Mg);
	c[o](a.ym);
	c[o](a.Qd);
	c[o](a.Zh);
	c[o](a.Am);
	this.Je = a;
};
function aB(a) {
	return function () {
		a.V();
	};
}
function bB(a) {
	return function () {
		a.Fn && a.qk && tf() - a.qk < 200 && a.V();
	};
}
WA[z].ma = function () {
	return this.I;
};
WA[z].HB = function (a) {
	var b = window[Ob][Xc]("DIV");
	cb(b[F], "width:" + a + "px;position:absolute;left:15px;top:15px;overflow:hidden;z-index:183;cursor:default");
	this.Jy[o](b);
	this.Xk = b;
};
WA[z].FB = function () {
	this.Ad = $A(nh, 14, 13, 341, 117, 0, -50, 184);
	Ca(this.Ad[F], Ps);
	var a = this;
	Fy(this.Ad, function () {
		a.V[G](a);
	});
	this.Jy[o](this.Ad);
};
WA[z].Dx = function (a) {
	this.Un = a;
};
WA[z].hJ = function (a) {
	this.Fn = a;
};
function $A(a, b, c, d, e, f, g, i) {
	var j = window[Ob][Xc]("DIV"), m = We(i) ? ";z-index:" + i : M, j = window[Ob][Xc]("DIV");
	cb(j[F], "overflow:hidden;position:absolute;left:0;width:" + b + "px;height:" + c + X + m);
	ob(j[F], c + X);
	Fa(j, b);
	ob(j, c);
	var n = cB(d, e);
	cb(n[F], "position:absolute;left:" + f + "px;top:" + g + X + m);
	j[o](n);
	if (Q) {
		n.src = mh;
		wa(n[F], "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"" + a + "\")");
	} else {
		n.src = a;
	}
	return j;
}
function cB(a, b) {
	if (!ag) {
		return new Image(a, b);
	}
	var c = document[Xc]("img");
	if (a && b) {
		Fa(c, a);
		ob(c, b);
	}
	return c;
}
function dB() {
	pa(function () {
		dq = new WA(300);
		document[Bc][o](dq.ma());
	}, 0);
}
function eB(a, b, c, d) {
	if (!(b.C & 64) && !!(b.C & 512)) {
		a[q]("<b>\u53c2\u52a0\uff1f</b>&nbsp;&nbsp;&nbsp;");
		var e = [1, "\u662f", 3, "\u4e5f\u8bb8", 2, "\u5426"];
		for (var f = 0; f < e[t]; f += 2) {
			c === e[f] ? a[q](e[f + 1]) : a[q]("<a href=\"javascript:void(", S(Cx), Vj, d, ",", e[f], "))\">", e[f + 1], "</a>");
			if (f < 4 || Ep(b)) {
				a[q]("&nbsp;|&nbsp;");
			}
		}
	}
	if (Ep(b)) {
		a[q]("[<a href=\"javascript:void(_bubbleDeleteEvent(", d, "))\">\u5220\u9664</a>]");
		if (b.Fl()) {
			a[q]("<div style=\"margin-top:5px;height:3px;border-top:1px solid ", wo[Y.f().$(b.src)[vc]][0], ";width:100%\" class=bubbleSeparator></div> \u60a8\u5bf9\u6b64\u6d3b\u52a8\u7684\u8be6\u60c5\u8fdb\u884c\u4e86\u66f4\u6539\u3002<br>");
			Kk.f().$b && a[q]("<a href=\"" + ("javascript:void(" + S(fB) + Vj + d + ",true,true))") + "\">\u6062\u590d</a>\u539f\u59cb\u6d3b\u52a8\u8be6\u60c5");
		}
	}
	Ep(b) && b.Vb != Yn && b.lb != Yn && b.Eb >= 30 && a[q](" [<a href=\"javascript:void(_reportSpamEvent(" + vg(b.N) + "))\">\u62a5\u544a\u5783\u573e\u90ae\u4ef6</a>]");
}
function gB(a) {
	var b = vg(a.N), c = hA(a[Gb]);
	if (c[t] > 500) {
		c = c[Qd](0, 500);
	}
	c = "<div id=mtb style=\"width:23em;font-size:80%;line-height:1.3em\">" + c + so;
	var d = ["<div style=\"min-width:23em;\"><span style=\"font-size:120%; color:", wo[Y.f().$(a.src)[vc]][0], "\"><b>", c, "</b><br></span><font size=-1>", At(a), "<br><br style=\"line-height:6px\">"];
	if (a[nc] && a[nc][t] > 0) {
		var e = P(a[nc]);
		d[q]("<div style=\"width:23em\"><b>\u5730\u70b9\uff1a</b> ", e, " (<a target=\"_BLANK\" href=\"", P(nA(a[nc])), "\">\u5730\u56fe</a>)</div>");
	}
	var f = Bt(a);
	f && d[q]("<b>\u521b\u5efa\u8005</b> ", f, "<br>");
	var g = [], i = Ct(a, g);
	a.Eb > 0 && d[q]("<div style=\"width:23em\">");
	i > 0 && d[q]("<b>\u53c2\u52a0\u8005\uff1a</b> ", g[K](M));
	var j = a.Eb - i;
	j > 0 && d[q]("&nbsp;+&nbsp;", j);
	a.Eb > 0 && d[q](so);
	d[q]("<div class=responsetext>");
	eB(d, a, a.C & 7, b);
	d[q](so);
	if (a.C & 64) {
		d[q]("<nobr>\uff08\u4ecd\u5728\u4fdd\u5b58\u66f4\u6539...\uff09</nobr><br><br>");
	} else {
		if ((a.C & 32) == 0) {
			d[q]("<div style=\"margin-top: 5px; height: 3px; border-top:1px solid ", wo[Y.f().$(a.src)[vc]][0], ";width:100%\" class=bubbleSeparator></div> ");
			var m = S(fB) + Vj + b, n;
			if ((a.src == a.lb || a.cp()) && Ep(a)) {
				n = "\u4fee\u6539\u6d3b\u52a8\u8be6\u7ec6\u4fe1\u606f";
				m += ", true)";
			} else {
				n = "\u8be6\u60c5";
				m += Xj;
			}
			d[q]("<nobr><span class=lk onmousedown=\"", m, wk, n, "&raquo;</span>");
			//in shared in activity , Link "copy to my calendar",
			//not show the link
			a.src != Yn && !(Yn in a.Ha()) && d[q]("&nbsp;&nbsp;&nbsp;", "<a href=\"javascript:void(", S(hB), Vj, b, "))\"></a>");
			//show the link
			//a.src != Yn && !(Yn in a.Ha()) && d[q]("&nbsp;&nbsp;&nbsp;", "<a href=\"javascript:void(", S(hB), Vj, b, "))\">\u590d\u5236\u5230\u6211\u7684\u65e5\u5386</a>");
			d[q]("</nobr><br style=\"line-height:2em\">");
		}
	}
	d[q]("</div></font>");
	return d[K](M);
}
function iB() {
	delete dq[Vy];
	delete dq.wc;
	delete dq[nc];
	delete dq[H];
	delete dq.A;
	delete dq.zs;
	delete dq.Qw;
	delete dq.Sw;
}
function jB() {
	return dq.Mb() ? dq.N : null;
}
function kB(a) {
	var b = Gj.ta(a);
	return gB(b);
}
function lB() {
	if (!dq.Mb() || null == dq.N) {
		return;
	}
	var a = dq.Xk[Hd](xk);
	for (var b = 0; b < a[t]; ++b) {
		var c = a[b];
		if (c[Bb] == "responsetext") {
			var d = [], e = Gj.ta(dq.N), f = vg(dq.N);
			eB(d, e, e.C & 7, f);
			k(c, d[K](M));
			break;
		}
	}
}
function Tv(a, b, c, d) {
	var e = R.W.Ma(), f = c === true, g = dq.pv() && a && dq.N == a;
	ro(true);
	if (g) {
		return;
	}
	var i;
	i = d ? d : kB(a);
	var j = bm(i), m = j.h, n = j.w + 5;
	dq.N = a;
	k(dq.Xk, i);
	f |= b.Aa !== 1;
	var p = b.x, s = b.y, u = b.h, v = b.y + b.h, w = b.x, x = b.x + b.w;
	p += b.w * 2 / 3;
	s += u * 2 / 3;
	var y = W(Xp);
	if (!f) {
		s -= y[vb];
		v -= y[vb];
	}
	if (s < 0) {
		s = 0;
	}
	if (!f) {
		if (s > y[Fd]) {
			s = y[Fd];
		}
		var C = Ul(W("grid"));
		p += C.x;
		s += C.y;
		w += C.x;
		x += C.x;
		v += C.y;
	}
	var D = s - m - (dq.rE() - dq[Cd]), L = h[Wb](p + n * 0.75 + 20);
	if (D < 0) {
		s -= D;
		s > v && dq.Gm(false);
	}
	if (L + 30 > sA(window)) {
		dq.Wq(0.65);
		var O = n - 20, ba = dq.On(O);
		if (O - ba - 100 <= 0) {
			dq.Wq(0.25);
			p = sA(window) - (n * 0.75 + 20);
			if (p < w || p > x) {
				dq.Gm(false);
			}
		} else {
			L = p + n * 0.35 + 30;
			if (L + 30 > sA(window)) {
				p = sA(window) - (n * 0.35 + 30);
				if (p < w || p > x) {
					dq.Gm(false);
				}
			}
		}
	}
	dq.mJ(n, m);
	dq.OH(h[Wb](p), h[Wb](s));
	dq.hJ(function () {
		a && fB(a);
	});
	dq.Pa();
	dq.Wq(0.25);
	dq.Gm(true);
	e.ac("ShowBubbleFor" + (d ? "CreateEvent" : "EventDetails"));
}
function hB(a) {
	var b = R.W.Ma();
	b.sd(b, "ef_copy_from_bubble");
	pn(function () {
		var c = Gj.ta(a);
		R.Zy(false, Yn, c.src, a);
	});
}
function fB(a, b, c) {
	var d = R.W.Ma();
	d.sd("ef_edit_from_bubble");
	pn(function () {
		R.en(a, b, c, null, d);
	});
}
var mB = null;
function nB(a) {
	this.px = a;
}
function oB(a) {
	Y.f().Tm(a);
}
function pB(a, b) {
	Y.f().wA(a, b);
}
function qB(a) {
	var b = Y.f();
	b[bd](function (c) {
		b.Ud(c.id, c.id == a);
	});
}
nB[z].bk = function () {
	var a = document[Xc]("DIV");
	l(a[F], U);
	Ba(a[F], $l);
	Da(a, "pbox");
	document[Bc][o](a);
	this.qd = a;
	this.ef = Dg(this.V, this);
	var b = [rB], c = S(pB);
	for (var d = 1; d <= 21; ++d) {
		b[q]("<li><a href=\"javascript:", c, "(${id},", d, ");" + this.ef + "()\" style=\"background-color:", wo[d][1], "\"${item", d, "}>&nbsp;</a>");
		d % 7 == 0 && b[q]("<div class=reset></div>");
		b[q]("</li>");
	}
	b[q](sB);
	this.Qa = new T(b[K](M));
	this.Z = false;
	this.bk = Ye;
};
nB[z].Pa = function (a, b, c) {
	this.bk();
	if (R[mc].Ff && mB == null) {
		mB = tA(window, "CP_Iframe");
		l(mB[ud][F], U);
		Ba(mB[F], $l);
	}
	var d = Y.f().$(a), e = d[vc], f = wo[e][3], g = wo[e][4];
	this.Qa.b(Bv, g);
	this.Qa.b(Cv, f);
	this.Qa.b(Av, wo[e][0]);
	var i = "onmouseover=\"this.style.backgroundColor=" + vg(f) + "\" onmouseout=\"this.style.backgroundColor=" + vg(g) + Af;
	this.Qa.b("handlers", i);
	var j = Un(a), m = j.ua || d[td];
	m = P(m);
	this.Qa.b(Uu, m);
	var n = 2 == d[J], p = j ? j.tc : n ? 70 : 0;
	if (p >= 60) {
		var s = "javascript:" + this.ef + "();" + S(eA) + "('" + a + "')";
		this.Qa.b("createEvent", "<li><a " + i + " href=\"" + s + "\">\u5728\u6b64\u65e5\u5386\u4e0a\u521b\u5efa\u6d3b\u52a8</a></li>");
	} else {
		this.Qa.b("createEvent", M);
	}
	this.Qa.b("showOnlyFn", S(qB) + Vj + vg(a) + ");" + this.ef + "();");
	this.Qa.b("showOnlyMsg", "\u53ea\u663e\u793a\u6b64\u65e5\u5386");
	if (ql() && a != Yn) {
		var u = S(oB) + Vj + vg(a) + ", false);" + this.ef + "();" + S(eo) + "()";
		this.Qa.b("hideFromList", "<li><a " + i + " href=\"javascript:" + u + "\">\u5728\u5217\u8868\u4e2d\u9690\u85cf\u6b64\u65e5\u5386</a></li>");
	} else {
		this.Qa.b("hideFromList", M);
	}
	var v = "_ShowDetails('" + a + "');" + this.ef + "()", w = M;
	if (p >= 70) {
	//**************************************tianliang edit, calendar right-side button menu in calendar list .The item is "share the calendar"
	//show this item
	w = "<li><a " + i + " href=\"javascript:_ShowDetails(" + vg(a) + ",1);" + this.ef + "()\">\u5171\u4eab\u6b64\u65e5\u5386</a></li>";
	//not show this item use below expression
	//w = "<li style='display:none'><a " + i + " href=\"javascript:_ShowDetails(" + vg(a) + ",1);" + this.ef + "()\">\u5171\u4eab\u6b64\u65e5\u5386</a></li>";
	}
	this.Qa.b("sharing", w);
	this.Qa.b("settingsFn", v);
	this.Qa.b(Wt, vg(a));
	//**************************************tianliang edit, calendar right-side button menu in calendar list .The item is "inform"
	//show this item use below expression
	//this.Qa.b("notifications", !(j && j.Fk) && p >= 20 ? "<li><a href=\"javascript:_ShowDetails(" + vg(a) + ",2);" + this.ef + "()\" " + i + " >\u901a\u77e5</a></li>" : M);
	//not show this item
	this.Qa.b("notifications", !(j && j.Fk) && p >= 20 ? "<li style='display:none'><a href=\"javascript:_ShowDetails(" + vg(a) + ",2);" + this.ef + "()\" " + i + " >\u901a\u77e5</a></li>" : M);
	var x = M, y = j ? j.Th : 0;
	if (y && y >= 20) {
		var C = S(tB);
		x = "<li><a " + i + " href=\"javascript:" + C + Vj + vg(a) + ");" + this.ef + "()\">\u53d1\u9001\u7ed9\u4e00\u4f4d\u670b\u53cb</a></li>";
	}
	this.Qa.b("recommend", x);
	for (var D = wo[t] - 1; D > 0; --D) {
		this.Qa.b("item" + D, e == D ? " class=\"caloptsel\"" : M);
	}
	k(this.qd, this.Qa[r]());
	var L = Rl(b), O = L.y - W(c)[vb];
	this.Kn = b;
	this.Jn = O;
	Wa(this.qd[F], Je);
	this.qd[F].top = Je;
	mb(this.qd[F], 20);
	l(this.qd[F], M);
	var ba = Rl(this.qd), ea = L.x - 0, ta = ba.h, V = O + L.h;
	if (V + ta >= document[Bc][cd]) {
		V += L.h - ta;
		V += 3 - 2 * L.h;
	}
	Wa(this.qd[F], ea + X);
	this.qd[F].top = V + X;
	if (mB) {
		l(mB[ud][F], M);
		Wa(mB[F], ea + X);
		mB[F].top = V + X;
		Fa(mB[F], ba.w - 8 + X);
		ob(mB[F], ta - 8 + X);
		mb(mB[F], this.qd[F][wd] - 1);
		l(mB[F], M);
	}
	this.Z = true;
	oA(this);
};
nB[z].V = function () {
	uB(this.px);
	l(this.qd[F], U);
	if (mB) {
		l(mB[ud][F], U);
	}
	this.Z = false;
};
nB[z].Ue = function (a) {
	if (!this.Z) {
		return true;
	}
	var b = Zl(a);
	if (Rl(this.qd)[ld](b)) {
		return false;
	}
	if (this.Kn) {
		var c = Rl(this.Kn);
		if (this.Jn) {
			c.y = this.Jn;
		}
		if (Q) {
			c.h += 4;
			c.w += 4;
		}
		if (c[ld](b)) {
			vB(this.px);
			return false;
		}
	}
	this.Kn = null;
	this.Jn = null;
	this.V();
	return true;
};
nB[z].isOpen = function () {
	return this.Z;
};
nB[z].RE = function (a, b, c) {
	this[dz]() ? this.V() : this.Pa(a, b, c);
};
//****************************************tianliang edit ,calendar right-side button menu in calendar list .The item is "only show this calendar" and "calendar config" 
//show the two item
var rB = "<table cellpadding=0 cellspacing=0><tr><td class=\"calpopupcell\"><div class=t2 style=\"background-color:${borderColor}\">&nbsp;</div><div class=offset style=\"border-color:${glowColor}\"><div class=boxbody style=\"border-color:${borderColor};background-color:${bgColor}\"><ul class=caloptions style=\"border-color:${borderColor}\"><li><div class=caltitle style=\"border-color:${borderColor}\">${title}</div></li><li><a href=\"javascript:${showOnlyFn}\" ${handlers}>${showOnlyMsg}</a></li>${hideFromList}<li><a href=\"javascript:${settingsFn}\" ${handlers}>\u65e5\u5386\u8bbe\u7f6e</a></li>${createEvent} ${sharing} ${notifications} ${recommend}</ul><div class=calcolor><ul>", sB = " </ul></div><div class=reset>&nbsp;</div></div></div><div class=b2 style=\"background-color:${borderColor};border-color:${glowColor}\">&nbsp;</div><div class=sb2 style=\"background-color:${glowColor}\">&nbsp;</div></td></tr></table>";
//not show the two item
//var rB = "<table cellpadding=0 cellspacing=0><tr><td class=\"calpopupcell\"><div class=t2 style=\"background-color:${borderColor}\">&nbsp;</div><div class=offset style=\"border-color:${glowColor}\"><div class=boxbody style=\"border-color:${borderColor};background-color:${bgColor}\"><ul class=caloptions style=\"border-color:${borderColor}\"><li><div class=caltitle style=\"border-color:${borderColor}\">${title}</div></li><li style='display:none'><a href=\"javascript:${showOnlyFn}\" ${handlers}>${showOnlyMsg}</a></li>${hideFromList}<li style='display:none'><a href=\"javascript:${settingsFn}\" ${handlers}>\u65e5\u5386\u8bbe\u7f6e</a></li>${createEvent} ${sharing} ${notifications} ${recommend}</ul><div class=calcolor><ul>", sB = " </ul></div><div class=reset>&nbsp;</div></div></div><div class=b2 style=\"background-color:${borderColor};border-color:${glowColor}\">&nbsp;</div><div class=sb2 style=\"background-color:${glowColor}\">&nbsp;</div></td></tr></table>";
function tB(a) {
	var b = "\u53d1\u9001\u7ed9\u4e00\u4f4d\u670b\u53cb", c = "\u5c06 <b>" + Y.f().th(a, false) + "</b> \u65e5\u5386\u53d1\u9001\u7ed9\u670b\u53cb\u3002", d = wB(a);
	pn(function () {
		xB.f().Pa(b, c, d, "\u4f7f\u7528 Google \u65e5\u5386\u6709\u4e00\u6bb5\u65f6\u95f4\u4e86\u3002\u6211\u7528\u5b83\u6765\u5b89\u6392\u65e5\u5386\uff0c\u67e5\u627e\u6709\u8da3\u7684\u6d3b\u52a8\uff0c\u4e0e\u4eb2\u670b\u597d\u53cb\u5171\u4eab\u6211\u7684\u65e5\u7a0b\u3002\u8fd9\u4e2a\u65e5\u5386\u5f88\u6709\u610f\u601d\uff0c\u8d76\u5feb\u4e86\u89e3\u4e00\u4e0b\u5427\uff01");
	});
}
function wB(a) {
	return function (b) {
		if (b != 0) {
			return;
		}
		var c = ["cid", a];
		pn(function () {
			xB.f().OI("RECOMMEND", c);
		});
		return false;
	};
}
function vB(a) {
	if (Vf && $f) {
		var b = W(a);
		if (b[F].overflowY == "scroll") {
			Ia(b[F], am);
		}
	}
}
function uB(a) {
	if (Vf && $f) {
		var b = W(a);
		if (b[F].overflowY == am) {
			Ia(b[F], "scroll");
		}
	}
}
var yB = {}, zB, AB = Q;
function gA(a, b, c, d, e) {
	pa(function () {
		BB();
		zB = bp(false);
		var f = CB(DB), g = EB(FB);
		$i(window, kj, GB);
		$i(window, "scroll", GB);
		Da(g, d || M);
		ub(g[F], am);
		l(g[F], "block");
		k(g, e ? a : "<table class=dialog cellspacing=0 cellpadding=0><tr><td><div class=top1>&nbsp;</div><div class=top2>&nbsp;</div>" + a + "<div class=bot2>&nbsp;</div><div class=bot1>&nbsp;</div></td></tr></table>");
		GB();
		HB = b;
		if (Q) {
			yB = {};
			var i = [window];
			for (var j = 0; j < window[Ld][t]; ++j) {
				i[q](window[Ld][j]);
			}
			for (var m = 0; m < i[t]; ++m) {
				try {
					var n = i[m][Ob];
				}
				catch (p) {
					continue;
				}
				for (var j = 0; j < n[Iy][t]; ++j) {
					var s = n[Iy][j];
					for (var u = 0; u < s[t]; ++u) {
						var v = s[u];
						if (v[kz] == "SELECT") {
							var w = v[F].visibility;
							w || (w = M);
							w in yB || (yB[w] = []);
							var x = yB[w];
							ub(v[F], am);
							x[q](v);
						}
					}
				}
			}
		}
		var y = g[Hd]("button");
		y[t] > 0 && rA(y[0]);
		c && c();
		ub(g[F], "visible");
		l(f[F], "block");
	}, 0);
}
function CB(a, b, c) {
	var d = document[$b](a);
	if (d) {
		return d;
	}
	d = document[Xc]("DIV");
	d.id = a;
	Fa(d[F], ob(d[F], "100%"));
	Wa(d[F], tb(d[F], d[F].top = d[F].bottom = Je));
	mb(d[F], c || 200);
	Va(d[F], "#fff");
	zm(d, b || 50);
	Ba(d[F], $l);
	Fy(d, d.onmouseup = d.onmousemove = d.onkeydown = Cy(d, d.onkeypress = Gy(d, d.ondblclick = IB(false))));
	l(d[F], U);
	document[Bc][o](d);
	return d;
}
function EB(a, b, c) {
	var d = document[$b](a);
	if (d) {
		return d;
	}
	d = document[Xc]("DIV");
	d.id = a;
	Fy(d, d.onmouseup = d.onmousemove = d.onkeypress = Cy(d, Gy(d, d.ondblclick = IB(true))));
	d.onkeydown = JB;
	Ba(d[F], AB || c ? $l : "fixed");
	l(d[F], U);
	mb(d[F], b || 201);
	document[Bc][o](d);
	return d;
}
var KB = null;
function tw(a, b) {
	b || LB();
	if (HB) {
		var c = HB(a);
		if (c) {
			if (hf == typeof c) {
				k(document[$b]("dialogcontent") || document[$b]("dialogbody"), c);
			}
			return;
		}
		HB = null;
	}
	b && LB();
	MB();
}
function BB() {
	LB();
	MB();
}
function LB() {
	if (Q) {
		for (var a in yB) {
			var b = yB[a];
			for (var c = 0; c < b[t]; ++c) {
				var d = b[c];
				try {
					ub(d[F], a);
				}
				catch (e) {
				}
			}
		}
	}
	var f = document[$b](DB), g = document[$b](FB);
	if (f) {
		l(f[F], U);
	}
	if (g) {
		l(g[F], U);
		k(g, M);
	}
}
function MB() {
	NB();
	We(zB) && bp(zB);
	bj(window, kj, GB);
	bj(window, "scroll", GB);
	var a = HB;
	if (a) {
		HB = null;
		a(undefined);
	}
}
function vw(a, b, c, d, e, f, g) {
	var i = [], j = f ? 1 : 0;
	if (g) {
		i[q]("<div class=newstyle-dialog>", "<table class=dialog cellspacing=\"0\" cellpadding=\"0\"><tr><td>", "<div class=newstyle-dialog-title>", "<span class=newstyle-dialog-title-text>", b, mg, "<span class=newstyle-dialog-title-close>", "<img id=\"dialogBtnClose\"", "width=\"15\" height=\"15\" src=\"images/btn_close.gif\" onclick=\"", S(sw), "(-1)\"></span></div>", "<div class=newstyle-dialog-body>", c, so);
		if (d[t]) {
			i[q]("<div>");
			for (var m = 0; m < d[t]; m++) {
				i[q]("<span onclick=\"", S(sw), Vj, m, ",", j, ")\">", d[m], mg);
			}
			i[q](so);
		}
		i[q]("</td></tr></table>");
	} else {
		i[q]("<div class=\"border titlebar\">", b, "</div><div class=\"border body\" id=\"", "dialogcontent", wk, c);
		if (d[t]) {
			i[q]("<center><table class=buttontable cellspacing=6><tr>");
			for (var m = 0; m < d[t]; ++m) {
				i[q]("<td align=center><span onclick=\"", S(sw), Vj, m, ",", j, ")\">", d[m], mg);
			}
			i[q]("</table></center>");
		}
		i[q](so);
	}
	fA(i[K](M), a, e, undefined, g);
}
function GB(a, b) {
	var c = jf(a) && a || DB, d = b || FB, e = Q ? sA(window) : document[Eb], f = Dm(window), g = document[$b](c);
	if (g) {
		var i = h.max(document[Bc][Sy], e) + X, j = h.max(document[Bc][cd], f) + X;
		Fa(g[F], i);
		ob(g[F], j);
		if (KB) {
			Fa(KB[F], i);
			ob(KB[F], j);
		}
	}
	var m = document[$b](d);
	if (m) {
		var n = (e - (Q && m[ad] ? m[ad][cc] : m[cc])) / 2, p = (f - m[Fd]) / 2;
		if (AB) {
			p += Cm(window);
		}
		Wa(m[F], n + X);
		m[F].top = p + X;
	}
}
function OB() {
	return document[$b](FB);
}
var PB = [];
function NB() {
	PB = [];
}
function IB(a) {
	return function (b) {
		b = b || window[Sd];
		for (var c in PB) {
			if (PB[c](b)) {
				return true;
			}
		}
		qb(b, true);
		"stopPropagation" in b && b[lc]();
		return a;
	};
}
function JB(a) {
	a = a || window[Sd];
	if (!(a[wb] || a[Tb] || a[tc]) && Mz(a) == 27) {
		sw(-1);
	}
	return IB(true)(a);
}
var DB = "dialogcover", FB = "dialogwindow", HB;
function QB(a, b) {
	return RB([a], b);
}
function RB(a, b) {
	b || (b = 3);
	return function (c, d, e, f) {
		var g = null;
		for (var i = 0; i < a[t]; ++i) {
			var j = W(a[i]), m = Rl(j);
			if (g) {
				g.w = h.max(g.x + g.w, m.x + m.w);
				g.h = h.max(g.y + g.h, m.y + m.h);
				g.x = h.min(g.x, m.x);
				g.y = h.min(g.y, m.y);
				g.w -= g.x;
				g.h -= g.y;
			} else {
				g = m;
			}
		}
		if (g) {
			var n = Rl(d), p, s, u, v;
			switch (e) {
			  case 1:
				p = n.x + f.la;
				s = n.y + f.ga;
				break;
			  case 2:
				p = n.x;
				s = n.y;
				break;
			  default:
				return true;
			}
			u = n.x + f.la + n.w;
			v = n.y + f.ga + n.h;
			var w = g.x - p, x = u - (g.x + g.w), y = g.y - s, C = v - (g.y + g.h);
			switch (e) {
			  case 1:
				if (b & 1) {
					if (w > 0) {
						f.la += w;
					} else {
						if (x > 0) {
							f.la -= x;
						}
					}
				}
				if (b & 2) {
					if (y > 0) {
						f.ga += y;
					} else {
						if (C > 0) {
							f.ga -= C;
						}
					}
				}
				break;
			  case 2:
				if (x > 0 && b & 1) {
					f.la -= x;
				}
				if (C > 0 && b & 2) {
					f.ga -= C;
				}
				break;
			}
		}
		return true;
	};
}
var Z = undefined, Ir = 0, SB = undefined, TB = undefined, UB = undefined, VB = undefined, WB = undefined, Jr = undefined, XB = undefined, YB = undefined, ZB = undefined, $B = undefined;
function aC(a, b) {
	return function () {
		return a[md](this, arguments) && b[md](this, arguments);
	};
}
function _DD_Install(a) {
	if (!a) {
		a = document[Bc];
	}
	var b = a;
	$i(b, ij, bC(b));
}
function cC(a, b) {
	for (var c = vr[t] - 1; c >= 0; --c) {
		var d = vr[c](a, b);
		if (d) {
			return d;
		}
	}
	return undefined;
}
var dC;
function eC(a) {
	for (var b = a[Hc]; b; b = b[ud]) {
		if (cC(b, a)) {
			return true;
		}
	}
	return false;
}
function bC(a) {
	return function (b) {
		if (eC(b)) {
			b[oc]();
			$B = a;
			dC = Em(b);
			$i($B, yA, fC);
			$i($B, zA, gC);
		}
	};
}
function hC(a) {
	var b = undefined;
	for (var c = a[Hc]; c; c = c[ud]) {
		b = cC(c, a);
		if (!b) {
			continue;
		}
		TB = Zl(a);
		if (b.Jc(a, c)) {
			Z && Ir >= 0 && Ir < 6 && 1 === 1 + Ir % 1 && Jr && 0 === (Jr & -4) || iC();
			a[lc]();
			SB = b;
			UB = TB;
			VB = {x:Z[uc], y:Z[Bd], w:Z[cc], h:Z[Fd]};
			XB = new ml(0, 0);
			YB = new ml(0, 0);
			if (Ir === 1 || Ir === 2 || Ir === 5) {
				Ir !== 2 && SB.Gy && false && zm(Z, 50);
				ZB = Z[F][wd];
				mb(Z[F], 2000);
			}
			Q ? $i($B, "mouseleave", jC) : $i($B, "mouseout", jC);
		} else {
			iC();
		}
		return false;
	}
	return true;
}
function gC(a) {
	if (dC) {
		dC = null;
		bj($B, yA, fC);
		bj($B, zA, gC);
		var b = undefined;
		for (var c = a[Hc]; c; c = c[ud]) {
			b = cC(c, a);
			b && b.rj && b.rj(c);
		}
		return;
	}
	SB.Dd(a, Z, Ir) ? iC() : kC();
}
function fC(a) {
	a[oc]();
	if (dC) {
		var b = hC(dC);
		dC = null;
		if (b) {
			kC();
			return true;
		}
	}
	if (!Z) {
		return true;
	}
	if (!SB) {
		return true;
	}
	a[lc]();
	var c = Zl(a), d = new ml(c.x - TB.x + XB.la, c.y - TB.y + XB.ga);
	if (!(d.la | d.ga)) {
		return false;
	}
	var e = new ml(d.la, d.ga);
	TB = c;
	var f;
	try {
		f = Ul(Z);
	}
	catch (g) {
		iC();
		return;
	}
	if (Jr & 1) {
		YB.la += e.la;
	}
	if (Jr & 2) {
		YB.ga += e.ga;
	}
	if (SB.cb(a, Z, Ir, e, YB)) {
		var i = Ul(Z);
		YB.la -= i.x - f.x;
		YB.ga -= i.y - f.y;
		switch (Ir) {
		  case 1:
		  case 2:
		  case 5:
			XB.la = d.la - e.la;
			XB.ga = d.ga - e.ga;
			break;
		}
		switch (Ir) {
		  case 1:
			if (!(Jr & 1)) {
				e.la = 0;
			}
			if (!(Jr & 2)) {
				e.ga = 0;
			}
			var j = Z[gz] ? Z[gz] : Z[Fc][sd][$y](Z, M);
			if (j && j.position == "relative") {
				Wa(Z[F], YB.la + X);
				Z[F].top = YB.ga + X;
			} else {
				var m = Z[uc] + e.la, n = Z[Bd] + e.ga;
				if (e.la) {
					Wa(Z[F], m + X);
					tb(Z[F], "auto");
				}
				if (e.ga) {
					Z[F].top = n + X;
				}
				if (e.la && m !== Z[uc]) {
					Wa(Z[F], m + m - Z[uc] + X);
				}
				if (e.ga && n !== Z[Bd]) {
					Z[F].top = n + n - Z[Bd] + X;
				}
			}
			break;
		  case 5:
			var p = Rl(Z);
			if (Jr & 1) {
				var s = TB.x + XB.la, u = h.min(s, UB.x), v = h.abs(s - UB.x);
				if (u !== p.x) {
					var m = u;
					Wa(Z[F], m + X);
					if (m !== Z[uc]) {
						Wa(Z[F], m + m - Z[uc] + X);
					}
				}
				if (v !== p.w) {
					Fa(Z[F], v + X);
					if (v != Z[cc]) {
						v = h.max(0, v + v - Z[cc]);
						Fa(Z[F], v + X);
					}
				}
			}
			if (Jr & 2) {
				var w = TB.y + XB.ga, x = h.min(w, UB.y), y = h.abs(w - UB.y);
				if (x !== p.y) {
					var n = x;
					Z[F].top = n + X;
					if (n !== Z[Bd]) {
						Z[F].top = n + n - Z[Bd] + X;
					}
				}
				if (y !== p.h) {
					ob(Z[F], y + X);
					if (y != Z[Fd]) {
						y = h.max(0, y + y - Z[Fd]);
						ob(Z[F], y + X);
					}
				}
			}
			break;
		  case 2:
			if (e.la && Jr & 1) {
				var v = Z[cc] + e.la;
				if (v < 0) {
					XB.la += v;
					v = 0;
				}
				if (v < 1) {
					XB.la += v - 1;
					v = 1;
				}
				Fa(Z[F], v + X);
				if (v != Z[cc]) {
					v += v - Z[cc];
					if (v < 1) {
						v = 1;
					}
					Fa(Z[F], v + X);
				}
			}
			if (e.ga && Jr & 2) {
				var y = Z[Fd] + e.ga;
				if (y < 0) {
					XB.ga += y;
					y = 0;
				}
				if (y < 1) {
					XB.ga += y - 1;
					y = 1;
				}
				ob(Z[F], y + X);
				if (y != Z[Fd]) {
					y += y - Z[Fd];
					if (y < 1) {
						y = 1;
					}
					ob(Z[F], y + X);
				}
			}
			break;
		  case 3:
			if (!(Jr & 1)) {
				e.la = 0;
			}
			if (!(Jr & 2)) {
				e.ga = 0;
			}
			if (Z[Yc]) {
				Z[Yc](e.la, e.ga);
			} else {
				e.la *= -1;
				e.ga *= -1;
				var C = Z[dd], D = Z[vb], L = Z[vb] + Z[Zc] - Z[Fd];
				e.la = h.max(h.min(e.la, Z[dd] + Z.scrollWidth - Z[cc]), -C);
				e.ga = h.max(h.min(e.ga, L), -D);
				if (e.la) {
					Ey(Z, Z[dd] + e.la);
				}
				if (e.ga) {
					va(Z, Z[vb] + e.ga);
				}
			}
			break;
		  case 4:
			break;
		}
	} else {
		kC();
	}
	return false;
}
function jC(a) {
	a = a || window[Sd];
	a.relatedTarget || a.toElement || kC();
}
function iC() {
	if (Ir !== 0) {
		Z && SB.hd(Z, Ir);
		if (Ir === 1 || Ir === 2 || Ir === 5) {
			Ir !== 2 && SB.Gy && false && zm(Z, 100);
			if (undefined !== ZB) {
				mb(Z[F], ZB);
				ZB = undefined;
			} else {
				delete Z[F][wd];
			}
		}
	}
	Z = undefined;
	Ir = 0;
	TB = undefined;
	VB = undefined;
	Jr = 0;
	XB = undefined;
	if (SB && $B) {
		Q ? bj($B, "mouseleave", jC) : bj($B, "mouseout", jC);
	}
	SB = undefined;
	if ($B) {
		bj($B, yA, fC);
		bj($B, zA, gC);
	}
}
function kC() {
	switch (Ir) {
	  case 1:
		var a = Z[gz] ? Z[gz] : window[$y](Z, M);
		if (a && a.position == "relative") {
			Wa(Z[F], "0px");
			Z[F].top = "0px";
		} else {
			Wa(Z[F], VB.x + X);
			Z[F].top = VB.y + X;
		}
		break;
	  case 2:
		Fa(Z[F], VB.w + X);
		ob(Z[F], VB.h + X);
		break;
	  case 3:
		break;
	  case 4:
		WB = [];
		break;
	  case 0:
		break;
	  case 5:
		break;
	  default:
	}
	iC();
}
function Hr(a) {
	this.rx = a;
	this.ux = a ? lC(a) : undefined;
	this.Qt = false;
	this.$F = null;
	this.Dn = 3;
}
function lC(a, b) {
	var c = b || [];
	if (a[Bb] && a[Bb][Lc](/\bddSelected\b/)) {
		c[q](a);
	} else {
		for (var d = a[ad]; d; d = d[Ad]) {
			lC(d, c);
		}
	}
	return c;
}
Hr[z].cv = function (a, b) {
	Wa(a[F], b.x + X);
	a[F].top = b.y + X;
	if (this.Dn & 1) {
		Fa(a[F], Je);
	}
	if (this.Dn & 2) {
		ob(a[F], Je);
	}
};
Hr[z].Kl = function (a) {
	l(a[F], "block");
};
Hr[z].Jc = function (a) {
	var b = W("ddLasso");
	if (!b) {
		b = document[Xc](xk);
		b.id = "ddLasso";
		Ba(b[F], $l);
		l(b[F], U);
		document[Bc][o](b);
	}
	var c = Zl(a);
	this.cv(b, c);
	this.Kl(b);
	Ir = 5;
	Jr = this.Dn;
	Z = b;
	this.$F = b;
	var d = this;
	pa(function () {
		d.Eo || d.Yn(b);
	}, 200);
	return true;
};
Hr[z].Dd = function () {
	return true;
};
Hr[z].RF = function (a) {
	return a[Bb] && a[Bb][Lc](/\bddSelectable\b/);
};
Hr[z].Zs = function (a, b, c) {
	if (this.RF(a)) {
		var d = Rl(a);
		b.x + b.w < d.x || d.x + d.w < b.x || b.y + b.h < d.y || d.y + d.h < b.y || c[q](a);
		return;
	} else {
		for (var e = a[ad]; e; e = e[Ad]) {
			this.Zs(e, b, c);
		}
	}
};
Hr[z].Yn = function (a) {
	if (!this.rx) {
		return;
	}
	var b = [];
	this.Zs(this.rx, Rl(a), b);
	this.Vd(b);
	if (!this.Qt) {
		var c = this;
		pa(function () {
			c.Eo || c.Yn(a);
		}, 200);
	}
};
Hr[z].Vd = function (a) {
	var b = this.ux;
	for (var c = a[t]; --c >= 0; ) {
		a[c].VB = true;
	}
	for (var c = b[t]; --c >= 0; ) {
		var d = b[c];
		d.lt = true;
		if (!d.VB) {
			Da(d, d[Bb][A](/\s*\bddSelected\b/g, M));
		}
	}
	for (var c = a[t]; --c >= 0; ) {
		var d = a[c];
		if (!d.lt) {
			Da(d, (d[Bb] || qg) + " ddSelected");
		}
		d.dd_newSelection = false;
	}
	for (var c = b[t]; --c >= 0; ) {
		b[c].lt = false;
	}
	this.ux = a;
};
Hr[z].cb = function () {
	return true;
};
Hr[z].hd = function (a) {
	this.Qt = true;
	this.Yn(a);
	l(a[F], U);
};
function mC() {
}
function nC(a) {
	if (200 != lm(a) || !Hm(a)) {
		return null;
	}
	var b = eval(Jm(a[Xb]))[0], c = {summary:b[1], wc:b[2], location:b[3], start:b[4], A:b[5], zs:b[6], Qw:b[7], Sw:b[8]};
	if (c[Vy]) {
		c.summary = wf(c[Vy]);
	}
	if (c.wc) {
		c.wc = wf(c.wc);
	}
	return c;
}
var oC = "i", pC = {8:"backspace", 9:"tab", 13:"enter", 16:"shift", 17:"ctrl", 18:"alt", 19:"pause", 20:"caps-lock", 27:"esc", 32:"space", 33:"pg-up", 34:"pg-down", 35:"end", 36:"home", 37:Tu, 38:"up", 39:"right", 40:"down", 45:"insert", 46:"delete", 48:Je, 49:mt, 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:oC, 74:yu, 75:"k", 76:"l", 77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z", 93:"context", 107:"num-plus", 109:"num-minus", 112:"f1", 113:"f2", 114:"f3", 115:"f4", 116:"f5", 117:"f6", 118:"f7", 119:"f8", 120:"f9", 121:"f10", 122:"f11", 123:"f12", 187:"equals", 188:",", 190:".", 191:"/", 220:"\\", 224:"win"};
function qC(a) {
	pj[G](this);
	this.nk = {};
	this.ye = {Lg:[], Ea:0};
	this.yl = {};
	this.CJ([27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19]);
	this.yA = true;
	this.ws = false;
	this.BF(a);
}
N(qC, pj);
var rC = {zz:0, Kz:1, Ty:2, My:4, wz:8}, sC = {Nz:"shortcut", Mz:"shortcut_"}, tC = null;
qC[z].Sl = null;
function uC(a) {
	if (!tC) {
		var b = {};
		for (var c in pC) {
			b[pC[c]] = c;
		}
		tC = b;
	}
	return tC[a];
}
qC[z].iI = function (a) {
	this.rs(this.nk, this.FF(1, arguments), a);
};
qC[z].FF = function (a, b) {
	var c;
	if (jf(b[a])) {
		c = vC(b[a]);
	} else {
		var d = b[a], e = 0;
		if (!ff(d)) {
			d = b;
			e = a;
		}
		c = [];
		for (; e < d[t]; e += 2) {
			c[q]({keyCode:d[e], Ov:d[e + 1]});
		}
	}
	return c;
};
qC[z].ZK = function () {
	this.nk = {};
};
qC[z].CJ = function (a) {
	this.yl = {};
	for (var b, c = 0; b = a[c]; c++) {
		this.yl[b] = true;
	}
};
qC[z].S = function () {
	qC.ba.S[G](this);
	this.ZK();
	this.oB();
};
function vC(a) {
	a = a[A](/[ +]*\+[ +]*/g, "+")[A](/[ ]+/g, qg)[Kd]();
	var b = rC, c = a[Vb](qg), d = [];
	for (var e, f = 0; e = c[f]; f++) {
		var g = e[Vb]("+"), i, j = b.zz;
		for (var m, n = 0; m = g[n]; n++) {
			switch (m) {
			  case "shift":
				j |= b.Kz;
				continue;
			  case "ctrl":
				j |= b.Ty;
				continue;
			  case "alt":
				j |= b.My;
				continue;
			  case "meta":
				j |= b.wz;
				continue;
			}
			i = uC(m);
			break;
		}
		d[q]({keyCode:i, Ov:j});
	}
	return d;
}
qC[z].BF = function (a) {
	this.Sl = a;
	$i(this.Sl, jj, this.Dl, false, this);
};
qC[z].oB = function () {
	bj(this.Sl, jj, this.Dl, false, this);
	this.Sl = null;
};
qC[z].rs = function (a, b, c) {
	var d = b[Ab](), e = this.pG(d[$c], d.Ov), f = a[e];
	if (f && c && (b[t] == 0 || jf(f))) {
		throw Error("Keyboard shortcut conflicts with existing shortcut");
	}
	if (b[t]) {
		a[e] || (a[e] = {});
		this.rs(a[e], b, c);
	} else {
		a[e] = c;
	}
};
qC[z].vu = function (a, b, c) {
	var d = b || 0, e = (c || this.nk)[a[d]];
	if (e && !jf(e) && a[t] - d > 1) {
		return this.vu(a, d + 1, e);
	}
	return e;
};
qC[z].pG = function (a, b) {
	return a & 255 | b << 8;
};
qC[z].Dl = function (a) {
	var b = a[Hc];
	if (a[$c] == 16 || a[$c] == 17 || a[$c] == 18) {
		return;
	}
	if ((b.isContentEditable || b[Fc] && b[Fc].designMode == "on") && !this.yl[a[$c]] && !this.ws) {
		return;
	}
	if ((b[kz] == "TEXTAREA" || b[kz] == "INPUT" || b[kz] == "BUTTON" || b[kz] == "SELECT") && !a[wb] && !a[Tb] && !a[tc] && !this.WF(a[$c], b)) {
		return;
	}
	var c = a[$c] & 255 | ((a[qd] ? 1 : 0) | (a[Tb] ? 2 : 0) | (a[wb] ? 4 : 0) | (a[tc] ? 8 : 0)) << 8, d, e, f = tf();
	if (this.ye.Lg[t] && f - this.ye.Ea <= 1500) {
		d = this.vu(this.ye.Lg);
	} else {
		za(this.ye.Lg, 0);
	}
	d = d ? d[c] : this.nk[c];
	if (!d) {
		d = this.nk[c];
		this.ye.Lg = [];
	}
	if (d && jf(d)) {
		e = d;
	} else {
		if (d) {
			this.ye.Lg[q](c);
			this.ye.Ea = f;
		} else {
			za(this.ye.Lg, 0);
		}
	}
	if (e) {
		var g = sC, i = new wC(g.Nz, e, a[Hc]);
		this[xc](i);
		var j = new wC(g.Mz + e, e, a[Hc]);
		this[xc](j);
		if (this.yA || !i.xf || !j.xf) {
			a[oc]();
		}
		za(this.ye.Lg, 0);
	}
};
qC[z].WF = function (a, b) {
	if (this.yl[a] || this.ws) {
		return true;
	}
	if (b[kz] == "INPUT" && (b[J] == "text" || b[J] == "password")) {
		return a == 13;
	}
	if (b[kz] == "INPUT" || b[kz] == "BUTTON") {
		return a != 32;
	}
	if (b[kz] == "TEXTAREA" || b[kz] == "SELECT") {
		return false;
	}
	return true;
};
function wC(a, b, c) {
	si[G](this, a, c);
	this.identifier = b;
}
N(wC, si);
if ("StopIteration" in Te) {
	var xC = Te.StopIteration;
} else {
	xC = Error("StopIteration");
}
function yC() {
}
La(yC[z], function () {
	throw xC;
});
yC[z].vi = function () {
	return this;
};
function zC(a) {
	if (typeof a.Ab == cf) {
		return a.Ab();
	}
	if (gf(a) || jf(a)) {
		return a[t];
	}
	return FA(a);
}
function AC(a) {
	if (typeof a.kd == cf) {
		return a.kd();
	}
	if (jf(a)) {
		return a[Vb](M);
	}
	if (gf(a)) {
		var b = [], c = a[t];
		for (var d = 0; d < c; d++) {
			b[q](a[d]);
		}
		return b;
	}
	return EA(a);
}
function BC(a) {
	if (typeof a.hg == cf) {
		return a.hg();
	}
	if (typeof a.kd == cf) {
		return undefined;
	}
	if (gf(a) || jf(a)) {
		var b = [], c = a[t];
		for (var d = 0; d < c; d++) {
			b[q](d);
		}
		return b;
	}
	return Di(a);
}
function CC(a, b) {
	if (typeof a[ld] == cf) {
		return a[ld](b);
	}
	if (typeof a.Zn == cf) {
		return a.Zn(b);
	}
	if (gf(a) || jf(a)) {
		return xi(a, b);
	}
	return DA(a, b);
}
function DC(a, b, c) {
	if (typeof a[bd] == cf) {
		a[bd](b, c);
	} else {
		if (gf(a) || jf(a)) {
			vi(a, b, c);
		} else {
			var d = BC(a), e = AC(a), f = e[t];
			for (var g = 0; g < f; g++) {
				b[G](c, e[g], d && d[g], a);
			}
		}
	}
}
function EC(a, b, c) {
	if (typeof a[jz] == cf) {
		return a[jz](b, c);
	}
	if (gf(a) || jf(a)) {
		return IA(a, b, c);
	}
	var d = BC(a), e = AC(a), f = e[t];
	for (var g = 0; g < f; g++) {
		if (!b[G](c, e[g], d && d[g], a)) {
			return false;
		}
	}
	return true;
}
function FC(a) {
	this.O = {};
	this.ha = [];
	var b = arguments[t];
	if (b > 1) {
		if (b % 2) {
			throw Error("Uneven number of arguments");
		}
		for (var c = 0; c < b; c += 2) {
			this.aa(arguments[c], arguments[c + 1]);
		}
	} else {
		a && this.Nk(a);
	}
}
FC[z].Ta = 0;
FC[z].Ek = 0;
FC[z].Ab = function () {
	return this.Ta;
};
FC[z].kd = function () {
	this.Uk();
	var a = [];
	for (var b = 0; b < this.ha[t]; b++) {
		a[q](this.O[this.ha[b]]);
	}
	return a;
};
FC[z].hg = function () {
	this.Uk();
	return this.ha[fc]();
};
FC[z].Mc = function (a) {
	return GC(this.O, a);
};
FC[z].Zn = function (a) {
	for (var b = 0; b < this.ha[t]; b++) {
		var c = this.ha[b];
		if (GC(this.O, c) && this.O[c] == a) {
			return true;
		}
	}
	return false;
};
kb(FC[z], function () {
	this.O = {};
	za(this.ha, 0);
	this.Ta = 0;
	this.Ek = 0;
});
ab(FC[z], function (a) {
	if (GC(this.O, a)) {
		delete this.O[a];
		this.Ta--;
		this.Ek++;
		this.ha[t] > 2 * this.Ta && this.Uk();
		return true;
	}
	return false;
});
FC[z].Uk = function () {
	if (this.Ta != this.ha[t]) {
		var a = 0, b = 0;
		while (a < this.ha[t]) {
			var c = this.ha[a];
			if (GC(this.O, c)) {
				this.ha[b++] = c;
			}
			a++;
		}
		za(this.ha, b);
	}
	if (this.Ta != this.ha[t]) {
		var d = {}, a = 0, b = 0;
		while (a < this.ha[t]) {
			var c = this.ha[a];
			if (!GC(d, c)) {
				this.ha[b++] = c;
				d[c] = 1;
			}
			a++;
		}
		za(this.ha, b);
	}
};
FC[z].J = function (a, b) {
	if (GC(this.O, a)) {
		return this.O[a];
	}
	return b;
};
FC[z].aa = function (a, b) {
	if (!GC(this.O, a)) {
		this.Ta++;
		this.ha[q](a);
		this.Ek++;
	}
	this.O[a] = b;
};
FC[z].Nk = function (a) {
	var b, c;
	if (a instanceof FC) {
		b = a.hg();
		c = a.kd();
	} else {
		b = Di(a);
		c = EA(a);
	}
	for (var d = 0; d < b[t]; d++) {
		this.aa(b[d], c[d]);
	}
};
FC[z].ab = function () {
	return new FC(this);
};
FC[z].UK = function () {
	var a = new FC;
	for (var b = 0; b < this.ha[t]; b++) {
		var c = this.ha[b];
		a.aa(this.O[c], c);
	}
	return a;
};
FC[z].vi = function (a) {
	this.Uk();
	var b = 0, c = this.ha, d = this.O, e = this.Ek, f = this, g = new yC;
	La(g, function () {
		while (true) {
			if (e != f.Ek) {
				throw Error("The map has changed since the iterator was created");
			}
			if (b >= c[t]) {
				throw xC;
			}
			var i = c[b++];
			return a ? i : d[i];
		}
	});
	return g;
};
if (ra[z][wc]) {
	var GC = function (a, b) {
		return ra[z][wc][G](a, b);
	};
} else {
	GC = function (a, b) {
		return b in a && a[b] !== ra[z][b];
	};
}
R.Ul = {};
var HC = {CL:"ks0", BL:"ks1", Rz:"ks2", Uz:"ks10", Wz:"ks11", Yz:"ks12", Xz:"ks13", Vz:"ks14", Fz:"ks20", lz:"ks21", Dz:"ks22", Cz:"ks23", Hz:"ks24", Lz:"ks25", Sy:"ks30", gz:"ks31", Wy:"ks32", uL:"ks33"};
R.Ul.bn = {p:"ks0", n:"ks1", k:"ks0", j:"ks1", t:"ks2", a:"ks10", d:"ks11", w:"ks12", m:"ks13", x:"ks14", "/":"ks20", "num-plus":"ks21", q:"ks22", "Ctrl+p":"ks23", s:"ks24", "Shift+/":"ks25", c:"ks30", "delete":"ks32", e:"ks31", esc:"ks33"};
R.md.Zu = {};
R.md.CM = function (a) {
	var b = jB();
	if (b) {
		if (!!(Gj.ta(b).C & 512)) {
			Cx(b, a, true);
			lB(a);
		}
		return true;
	} else {
		return false;
	}
};
R.md.TE = function (a) {
	if (!R.md.Yf) {
		return;
	}
	switch (a.identifier) {
	  case "ks0":
		gp(-1);
		break;
	  case "ks1":
		gp(1);
		break;
	  case "ks2":
		gp(0);
		break;
	  case "ks10":
		Bp("list");
		break;
	  case "ks12":
		Bp("week");
		break;
	  case "ks14":
		dp();
		break;
	  case "ks20":
		Sw && yx();
		window[Lb](function () {
			rA("maininput");
		}, 0);
		break;
	  case "ks21":
		window[Lb](function () {
			rA("searchAddCal");
		}, 0);
		break;
	  case "ks22":
		Sw && yx();
		mC();
		break;
	  case "ks23":
		xp();
		break;
	  case "ks24":
		Sw && hx(false);
		fo();
		break;
	  case "ks25":
		R.Oz();
		break;
	  case "ks30":
		Sw && hx(false);
		Gs();
		break;
	  case "ks11":
	  case "ks32":
		var b = jB();
		if (b) {
			var c = Gj.ta(b);
			Ep(c) && _handleDeleteEvent(b);
		} else {
			Bp("day");
		}
		break;
	  case "ks13":
		Bp("month");
		break;
	  case "ks31":
		var b = jB();
		b && fB(b);
		break;
	  case "ks33":
		Sw && hx(false);
		kC();
		hp();
		break;
	}
};
R.md.Zu.Bc = function () {
	if (R.md.Yf) {
		var a = new qC(document);
		for (var b in R.Ul.bn) {
			a.iI(R.Ul.bn[b], b);
		}
		$i(a, "shortcut", R.md.TE);
	}
};
function IC() {
	_OpenQuickAdd = mC;
	dB();
	_DD_Install();
	var a = new nB("calendars_fav");
	fq.Cx(a);
	gq.Cx(a);
	JC();
	R.md.Zu.Bc();
	Kk.f().Qb("contacts", []);
	Ay && kn(["offline"], function () {
		_ol_init();
	});
}
R.Cc.yJ(IC);
var KC = ["month_row_0", "month_row_1", "month_row_2"];
function LC(a, b, c, d) {
	if (Q) {
		a.y = a.y + 1;
	}
	var e;
	if (d) {
		e = d;
	} else {
		if (b.id in iq) {
			e = iq[b.id];
		}
	}
	if (!e) {
		return {event:undefined};
	}
	var f = e.Q, g = Ss(a, c != 2), i = g.ka, j = g.Y, m = Ss(new ll(a.x, a.y + a.h, a.Aa), c === 1).Y, n = false, p = false, s = ip.ja;
	switch (c) {
	  case 1:
		n = !((h.abs(e.x - b[uc]) | h.abs(e.y - b[Bd])) < 16 || f[H].T(s.Tb(i, j, undefined)));
		p = j > Rr || !s.X && Ho(f);
		break;
	  case 2:
		n = !(h.abs(e.h - b[Fd]) < 16 || f.A.T(s.Tb(i, m, undefined)));
		break;
	}
	return n ? {ka:i, fb:j, lc:m, event:f, jc:e, Nl:p} : {event:f, jc:e};
}
function MC(a, b, c) {
	var d = undefined;
	try {
		d = LC(Rl(a), a, b, c);
	}
	catch (e) {
	}
	if (undefined === d || undefined === d.ka) {
		return true;
	}
	var f = NC(d, a, b);
	!f && d[Sd] && d[Sd].N && Nj.f()[Uc](d[Sd].N);
	return f;
}
function NC(a, b, c) {
	var d;
	switch (a.jc.Aa) {
	  case 1:
		d = W("gridcontainercell") || W(Xp);
		break;
	  case 2:
		d = W(nu);
		break;
	  default:
		break;
	}
	var e = a[Sd], f = a.ka, g = a.fb, i = a.lc, j = a.Nl, m = e[H], n = e.A, p = m, s = n, u = ip.ja;
	if (c === 1) {
		R.W.Od("chip_move");
		var v = Ku(f, h[Wb](g)), w = Ul(d);
		Wa(b[F], v.x - w.x + X);
		b[F].top = v.y + v.h * (g % 1) - w.y + X;
		var x;
		p = u.Tb(f, g, e[H]);
		if (j != Ho(e)) {
			if (Go(e)) {
				p = p.H().K();
				x = Th;
			} else {
				x = new Sh(0, 0, Tr, 0);
			}
		} else {
			x = e.A.Db(e[H]);
		}
		if (j) {
			if (Go(e)) {
				p = p.H();
			} else {
				p = p.K();
				p.F = e[H].F;
				p.D = e[H].D;
				p.L = e[H].L;
			}
		} else {
			p = p.K();
		}
		s = Fh(p);
		s.Kf(x);
		s = Go(e) ? s.H() : s.K();
		if (Go(e) && m.H().T(p) && n.H().T(s)) {
			return false;
		}
	} else {
		if (c === 2) {
			R.W.Od("chip_resize");
			var y = Ku(f, h[Wb](g)), C = Ku(f, h[Wb](i));
			ob(b[F], C.y + C.h * (i % 1) - (y.y + y.h * (g % 1)) + X);
			s = u.Tb(f, i, e.A);
		} else {
			return false;
		}
	}
	if (m.T(p) && n.T(s)) {
		return false;
	} else {
		if (!e.Fl() && e.src !== e.lb && !e.cp()) {
			var D = Un(e.src), L;
			if (D && D.ua) {
				L = D.ua;
			} else {
				var O = Qm.f().Ba(e.src);
				L = O ? O.pe() : M;
			}
			bA(L, OC(e, p, s));
			return true;
		}
		if ((e.C & 10240) === 2048 && e.src === e.lb) {
			if (m.T(p)) {
				cA(e.lb === e.src, PC(e, p, s, true));
				return true;
			}
		}
		PC(e, p, s, false)("ONE");
		return true;
	}
}
var QC = [], RC = false;
xr = function () {
	return RC;
};
function Ws(a) {
	QC[q](a);
}
function SC() {
	RC = true;
}
function TC() {
	RC = false;
	var a = QC[t];
	for (var b = 0; b < a; ++b) {
		QC[b]();
	}
	QC = [];
}
function UC(a) {
	Kk.f().$b || Nj.f()[Uc](a.N);
	Qn();
	Yo();
}
function OC(a, b, c) {
	return function (d) {
		d === 0 ? PC(a, b, c, false)("ONE") : UC(a);
		return false;
	};
}
function PC(a, b, c, d) {
	return function (e) {
		if (undefined === e) {
			UC(a);
			return false;
		}
		Ko(a) && (a.src === a.lb || a.cp()) ? $n(VC(a, b, c, d, e), "\u53d1\u9001\u901a\u77e5\uff1f", "\u60a8\u5e0c\u671b\u5c06\u6240\u505a\u66f4\u6539\u901a\u77e5\u6765\u5bbe\u5417\uff1f", [Zn("\u53d1\u9001"), Zn("\u4e0d\u53d1\u9001"), Zn("\u53d6\u6d88")]) : VC(a, b, c, d, e)(1);
		return false;
	};
}
function VC(a, b, c, d, e) {
	var f = ["scp", e];
	if (d && e !== "ONE") {
		var g = c.Db(b)[r]();
		if (Go(a)) {
			g = g[A](/T.*/, M);
		} else {
			/T/[zb](g) || (g += "T0H");
		}
		f[q]("rdur", g);
	} else {
		f[q](Fg, Go(a) ? b.H()[r]() + "/" + c.H()[r]() : b[r]() + "/" + c[r]());
	}
	e !== "ONE" && f[q]("scp", e);
	return function (i) {
		pn(function () {
			switch (i) {
			  case 0:
				dA(f);
				R.Yr(a, f);
				break;
			  case 1:
				R.Yr(a, f);
				break;
			  case 2:
				break;
			}
			UC(a);
		});
		return false;
	};
}
function WC(a, b) {
	var c = iq[a.id].Q, d = Rl(a), e, f, g = ip.ja;
	if (g.X) {
		e = Rl(W(nu)).w;
		f = e / cp.pa;
	} else {
		e = Rl(W("grid")).w;
		f = e / Qr;
	}
	f = f | 0;
	var i = c.A.Db(c[H]);
	i = i.l == 1 ? M : Vj + (i.l + " \u5929") + ") ";
	var j = Qv;
	j.b("edge", Tu);
	j.b("edgeOffset", d.x + X);
	if (g.X) {
		var m = Rl(W(nu)).h - Rl(a).h - 2;
		j.b(zu, m + X);
	} else {
		j.b(zu, d.y + X);
	}
	j.b(jk, f + X);
	j.b(Fv, M);
	j.b(Uu, "&nbsp;<nobr>" + i + c[Gb] + "</nobr>");
	j.b("moreright", M);
	j.b("moreleft", M);
	var n = wo[c.jj()][c.vp() ? 4 : 2];
	j.b(Bv, n);
	j.b(Pv, M);
	j.b("ondblclick", M);
	return pA(j[r](), b);
}
function XC(a, b, c) {
	var d = Yv, e = Zv, f = Rl(a);
	if (Rs()) {
		f.w = Rl(W("grid")).w / Qr | 0;
	}
	d.b(Fv, M);
	d.b(Vv, wo[c.Q.jj()][0]);
	d.b(zu, f.y);
	d.b("edge", Tu);
	d.b("edgeOffset", f.x);
	d.b(jk, f.w);
	d.b(ik, f.h);
	d.b(Wv, Ps);
	d.b(Pv, M);
	e.b(Xv, M);
	e.b(Gv, cn(c.Q[H], true));
	d.b("iconAndTime", e[r]());
	d.b(Uu, c.Q[Gb]);
	return pA(d[r](), b);
}
function YC(a, b) {
	this.fa = a;
	this.jc = b;
	this.xt = false;
}
YC[z].rj = function () {
};
YC[z].Jc = function (a, b) {
	this.Ge = Zl(a);
	this.yH = Em(a);
	this.pC = b;
	this.kf = document[Xc]("DIV");
	document[Bc][o](this.kf);
	Z = this.kf;
	Ir = 1;
	Jr = 1;
	this.cb = this.bB;
	return true;
};
YC[z].bB = function (a) {
	if (ip.Ef() == 1) {
		return true;
	}
	var b = Zl(a), c = b.x - this.Ge.x, d = b.y - this.Ge.y;
	c * c + d * d >= 100 && this.XJ(this.yH, this.pC);
	return true;
};
YC[z].XJ = function (a) {
	this.xt = true;
	var b = this.fa, c = this.jc, d = Zl(a), e = ip.ja;
	this.sm = e.X ? W(nu) : document[Bc];
	this.ak = Ho(c.Q) ? WC(b, this.sm) : XC(b, this.sm, c);
	if (Ho(c.Q) || !Q) {
		zm(this.fa, 40);
	}
	if (!e.X) {
		Wa(this.ak[F], d.x + X);
		this.ak[F].top = d.y + X;
	}
	var f = e.X ? nu : "grid";
	this.cb = QB(f);
	if (e.X) {
		var g = ZC(), i = Rl(W(f)), j = new ll(i.x + 3, i.y + 3, i.Aa), m = new ll(i.x + i.w - 5, i.y + 3, i.Aa), n = g(j);
		Fa(this.ak[F], n.w + X);
		Wa(this.ak[F], this.jc.x + (Q ? 2 : -1) + X);
		var p = n.x, s = g(m).x;
		this.cb = aC(this.cb, function (u, v, w, x) {
			var y = g(Zl(u));
			if (y.x < p) {
				y.x = p;
			} else {
				if (y.x > s) {
					y.x = s;
				}
			}
			Q && --y.x;
			x.la = y.x - Rl(v).x;
			return true;
		});
	} else {
		this.nd = Ss(d, true);
		this.Al = $C();
		this.ue = document[Xc]("DIV");
		Ba(this.ue[F], $l);
		l(this.ue[F], M);
		Va(this.ue[F], "rgb(170, 204, 238)");
		document[Bc][o](this.ue);
		zm(this.ue, 30);
		this.cb = aC(this.cb, this.oF);
	}
	Z = this.ak;
	Ir = 1;
	Jr = e.X ? 1 : 3;
	return true;
};
YC[z].oF = function (a) {
	var b = Zl(a), c = Ss(b, true);
	if (!c) {
		return this.Ou();
	}
	c.Y |= 0;
	if (c.Y < 0) {
		c.Y = 0;
	} else {
		if (c.Y >= Rr) {
			c.Y = Rr - 1;
		}
	}
	if (c.ka < 0) {
		c.ka = 0;
	} else {
		if (c.ka >= Qr) {
			c.ka = Qr - 1;
		}
	}
	this.nd = c;
	var d = Ku(c.ka, c.Y), d = this.Al(new ll(d.x + d.w / 2, d.y + d.h / 2, d.Aa));
	if (!d) {
		return this.Ou();
	}
	var e = this.ue[F];
	Wa(e, d.x + X);
	e.top = d.y + X;
	Fa(e, d.w + X);
	ob(e, d.h + X);
	l(e, M);
	return true;
};
YC[z].Ou = function () {
	l(this.ue[F], U);
	return true;
};
function aD(a) {
	if ("filter" in a[F]) {
		wa(a[F], M);
	} else {
		if ("opacity" in a[F]) {
			a[F].opacity = M;
		} else {
			if ("MozOpacity" in a[F]) {
				a[F].MozOpacity = M;
			}
		}
	}
}
YC[z].Dd = function (a, b, c) {
	document[Bc][Gc](this.kf);
	this.kf = null;
	if (!this.xt) {
		return false;
	}
	if (ip.ja.X) {
		return MC(b, c, this.jc);
	} else {
		if (!this.nd) {
			return false;
		}
		var d = {ka:this.nd.ka, fb:this.nd.Y, lc:this.nd.Y, event:this.jc.Q, jc:this.jc, Nl:Ho(this.jc.Q)};
		return NC(d, b, c);
	}
};
YC[z].hd = function (a) {
	aD(this.fa);
	this.sm && this.sm[Gc](a);
	this.ue && document[Bc][Gc](this.ue);
};
function Zt() {
}
Zt[z].Jc = function () {
	this.kf = document[Xc]("DIV");
	document[Bc][o](this.kf);
	Z = this.kf;
	Ir = 1;
	Jr = 1;
	return true;
};
Zt[z].cb = function () {
	return true;
};
Zt[z].Dd = function () {
	return true;
};
Zt[z].hd = function () {
	document[Bc][Gc](this.kf);
};
function bD() {
	var a = KC;
	if (!W(a[0])) {
		for (var b = 0; b < a[t]; ++b) {
			var c = uA(window, a[b]);
			cD(c);
		}
	}
}
function $C() {
	var a = dD(W("grid"));
	return Q ? function (b) {
		var c = a(b);
		--c.x;
		++c.y;
		return c;
	} : a;
}
function eD(a, b) {
	Hr[G](this, undefined);
	this.Al = $C();
	this.se = Rl(a);
	tb(this.se, this.se.x + this.se.w);
	var c = Zl(b);
	this.Mf = this.Ss(c);
	this.xs = this.Us(this.Mf);
	this.Lf = this.Al(c);
	this.Io = {ka:this.Mf.ka, Y:this.Mf.Y};
	this.Tt = this.Lf.ab();
	bD();
	var d = KC;
	this.Yh = W(d[0]);
	this.lx = W(d[1]);
	this.wm = W(d[2]);
	this.Jo = -1;
}
N(eD, Hr);
eD[z].Ss = function (a) {
	var b = Ss(a, false);
	if (!b || b.Y < 0 || b.ka < 0) {
		return undefined;
	}
	b.Y |= 0;
	b.ka |= 0;
	var c = ip.ja;
	if (b.Y >= c.Vc || b.ka >= c.bb()) {
		return undefined;
	}
	return b;
};
eD[z].Us = function (a) {
	return ip.ja.bb() * a.Y + a.ka;
};
eD[z].Kl = function (a) {
	l(a[F], U);
};
eD[z].cb = function (a) {
	var b = Zl(a), c = this.Al(b), d = this.Ss(b);
	if (!d) {
		return true;
	}
	var e = this.Us(d);
	if (e == this.Jo) {
		return true;
	}
	var f = e < this.xs, g = f ? c : this.Lf, i = f ? this.Lf : c, j = h.min(2, (f ? this.Mf : d).Y - (f ? d : this.Mf).Y), m = this.Yh[F], n = this.lx[F], p = this.wm[F];
	switch (j) {
	  case 0:
		Wa(m, g.x + X);
		m.top = g.y + X;
		Fa(m, i.x + i.w - g.x + X);
		ob(m, g.h + X);
		l(m, M);
		l(n, U);
		l(p, U);
		break;
	  case 1:
	  case 2:
		Wa(m, g.x + X);
		m.top = g.y + X;
		Fa(m, this.se.x + this.se.w - g.x + X);
		ob(m, g.h + X);
		Wa(n, this.se.x + X);
		n.top = i.y + X;
		Fa(n, i.x + i.w - this.se.x + X);
		ob(n, i.h + X);
		l(m, M);
		l(n, M);
		if (j == 1) {
			l(p, U);
			break;
		}
		Wa(p, this.se.x + X);
		p.top = g.y + g.h + X;
		Fa(p, this.se.w + X);
		ob(p, i.y - g.y - g.h + X);
		l(p, M);
		break;
	  default:
	}
	this.Jo = e;
	this.Io = d;
	this.Tt = c;
	return true;
};
eD[z].hd = function (a) {
	if (this.Yh[F][xd] == U) {
		var b = this.Yh[F];
		Wa(b, this.Lf.x + X);
		b.top = this.Lf.y + X;
		Fa(b, this.Lf.w + X);
		ob(b, this.Lf.h + X);
		l(b, M);
		a = this.Yh;
	} else {
		a = this.wm[F][xd] != U ? this.wm : this.Yh;
	}
	var c = this.Jo < this.xs, d = c ? this.Io : this.Mf, e = c ? this.Mf : this.Io, f = ip.ja, g = f.Tb(d.ka, d.Y, undefined).H(), i = f.Tb(e.ka, e.Y, undefined), j = Fh(i);
	j.l += 1;
	i = j.H();
	var m = {start:g, A:i, C:16};
	function n() {
		return m;
	}
	var p = [this.Yh, this.lx, this.wm];
	fD(n, i.T(g.Sc()), "MONTH_GRID", p, this.Tt)(a, undefined, p);
};
var gD;
function hD() {
	gD || (gD = pA("<div id=backuplasso></div>"));
	return gD;
}
function iD(a, b, c, d) {
	Hr[G](this, undefined);
	this.gc = a;
	this.Da = hD();
	this.Ge = d.ab();
	this.af = false;
	this.cb = aC(RB([nu], 3), this.cb);
}
iD.prototype = new Hr(undefined);
iD[z].Kl = function (a) {
	l(a[F], U);
};
iD[z].cb = function (a) {
	if (!this.af) {
		if (Yl(this.Ge, Zl(a)) > 5) {
			this.af = true;
			cD(this.Da);
			this.Za = this.gc(this.Ge);
			Wa(this.Da[F], this.Za.x + X);
			this.Da[F].top = this.Za.y + X;
			Fa(this.Da[F], this.Za.w + X);
			ob(this.Da[F], this.Za.h + X);
			k(this.Da, M);
		} else {
			return true;
		}
	}
	var b = this.gc(TB), c, d;
	if (b.x < this.Za.x) {
		c = b.x;
		d = this.Za.x + this.Za.w - c;
	} else {
		if (b.x > this.Za.x) {
			c = this.Za.x;
			d = b.x + b.w - c;
		} else {
			c = b.x;
			d = b.w;
		}
	}
	Wa(this.Da[F], c + X);
	this.tH = this.Za.w === d;
	Fa(this.Da[F], d + X);
	return true;
};
iD[z].hd = function () {
	if (this.af) {
		fD(jD, !this.af || this.tH, "ALL_DAY_AREA")(this.Da);
	} else {
		l(this.Da[F], U);
	}
};
iD[z].rj = function () {
	l(this.Da[F], U);
};
function jD(a) {
	var b = Rl(a), c = new ll(b.x + 3, b.y + 3, window), d = new ll(b.x + b.w - 4, b.y + b.h - 3, window);
	if (ag) {
		var e = W(nu), f = Rl(e);
		d.x = h.min(d.x, f.x + e[cc] - 3);
	}
	if (d.x <= c.x) {
		return null;
	}
	var g = Ss(c, false), i = Ss(d, false), j = ip.ja, m = j.Tb(g.ka, g.Y, undefined).H(), n = j.Tb(i.ka, i.Y, undefined).H();
	n = Fh(n);
	n.l += 1;
	return {start:m.H(), A:n.H(), C:16};
}
function ZC() {
	var a = W(nu), b = Rl(a), c = b.y;
	if (Q || ag) {
		c += 1;
	}
	var d = b.h - 2, e = b.x + b.w - 2;
	if (Q) {
		e += 1;
	} else {
		if (ag && !R[mc].Lk) {
			e += 6;
		}
	}
	var f = b.Aa, g = [], i = -3;
	if (Q || R[mc].Lk) {
		i = 1;
	} else {
		if (ag) {
			i = 2;
		}
	}
	var j = ip.ja.bb();
	for (var m = 0; m < j; ++m) {
		g[q](Wl(W("allDay" + m)) + i);
	}
	return function (n) {
		var p = Gl(g, n.x, false);
		if (p < 0) {
			p = 0;
		} else {
			if (p >= g[t]) {
				p = g[t] - 1;
			}
		}
		var s = g[p] + 3;
		return new nl(s, c, (p == g[t] - 1 ? e : g[p + 1]) - s, d, f);
	};
}
function kD(a, b, c) {
	Hr[G](this, undefined);
	this.gc = b;
	this.Ge = c.ab();
	this.Gy = function () {
		return true;
	};
	this.Da = hD();
	this.Ng = null;
	this.fv = null;
	this.af = false;
}
N(kD, Hr);
kD[z].Kl = function (a) {
	l(a[F], U);
};
kD[z].cb = function (a) {
	if (!this.af) {
		if (Yl(this.Ge, Zl(a)) > 5) {
			this.af = true;
			cD(this.Da, true);
			this.Za = this.gc(this.Ge);
			this.Za.w = h.max(0, this.Za.w - (Q ? 2 : 3));
			Wa(this.Da[F], this.Za.x + X);
			Fa(this.Da[F], this.Za.w + X);
			this.Da[F].top = this.Za.y + X;
			ob(this.Da[F], this.Za.h + X);
			k(this.Da, lA(this.Za, lD(this.Da)));
			this.Ng = jA(this.Da);
			this.fv = Hz(this.Da);
			var b = Rl(W(Xp));
			this.Au = b.y;
			R[mc].Ff && --this.Au;
			this.bp = b.y + b.h + (ag ? 6 : 0);
		} else {
			return true;
		}
	}
	var c = this.gc(TB), d, e;
	if (c.y < this.Za.y) {
		d = c.y;
		e = this.Za.y + this.Za.h - d;
	} else {
		if (c.y > this.Za.y) {
			d = this.Za.y;
			e = c.y + c.h - d;
		} else {
			d = c.y;
			e = c.h;
		}
	}
	if (Q) {
		d += 2;
	}
	if (d < this.Au || d + e > this.bp) {
		return true;
	}
	this.Da[F].top = d + X;
	ob(this.Da[F], e + X);
	ob(this.fv[F], e - 4 + X);
	mD(this.Da, this.Ng);
	return true;
};
kD[z].hd = function () {
	if (this.af) {
		fD(lD, true, "WEEK_GRID")(this.Da);
	} else {
		l(this.Da[F], U);
	}
};
kD[z].rj = function () {
	l(this.Da[F], U);
};
kD[z].cv = function (a, b) {
	var c = this.gc(b);
	Wa(a[F], c.x + X);
	Fa(a[F], c.w - 2 + X);
};
function nD(a) {
	var b = a[B], c = wo[Y.f().$(b)[vc]];
	kA(hD(), c);
}
function fD(a, b, c, d, e) {
	return function (f, g, i) {
		var j = a(f);
		if (j == null) {
			if (i) {
				for (var m = 0; m < i[t]; ++m) {
					l(i[m][F], U);
				}
			} else {
				l(f[F], U);
			}
			return;
		}
		var n = oD;
		n.b("usertime", b ? bi : Xk);
		n.b("quickAddSource", vg(c));
		n.b(Gv, At(j));
		var p;
		p = b ? Rs() ? "\u4f8b\u5982\uff0c\u665a\u4e0a 7 \u70b9\u5728\u5fc5\u80dc\u5ba2\u665a\u9910" : j.C & 16 ? "\u4f8b\u5982\uff0c\u5988\u5988\u7684\u751f\u65e5" : "\u4f8b\u5982\uff0c\u5728\u8482\u51e1\u5c3c\u65e9\u9910" : j.C & 16 ? "\u4f8b\u5982\uff0c\u5728\u5317\u4eac\u8bbf\u95ee" : "\u4f8b\u5982\uff0c\u5728\u8482\u51e1\u5c3c\u65e9\u9910";
		n.b("sampleInput", p);
		var s = Y.f().fE(), u = wz(), v;
		if (s[t] > 1) {
			var w = [], x = Y.f();
			for (var m = 0; m < s[t]; ++m) {
				var y = s[m];
				w[q]("<option value=\"", P(y.id), Af);
				y.id == u && w[q](" selected");
				w[q](zf, P(x.Ah(y)), "</option>");
			}
			v = "<p><nobr><label forid=dragEventCalendar>\u65e5\u5386\uff1a</label> <select style=\"width:12em\" id=dragEventCalendar ";
			if (!(j.C & 16) && !Rs()) {
				v += "onchange=\"" + S(nD) + "(this)\"";
			}
			v += zf + w[K](M) + "</select></nobr>";
		} else {
			v = "<input type=hidden id=dragEventCalendar value=\"" + Yn + wk;
		}
		n.b("calendar_select", v);
		var C = M;
		if (zy) {
			var D = {}, L = [], O = Qm.f();
			Gj[bd](function (Ea) {
				if (Ea.Vb == Yn) {
					for (var Ga in Ea.ae) {
						var Fb = O.Ba(Ga);
						if (Ga != Yn && Fb && Fb.Ml()) {
							if (Ga in D) {
								D[Ga]++;
							} else {
								D[Ga] = 1;
								L[q](Ga);
							}
						}
					}
				}
			});
			Y.f()[bd](function (Ea) {
				if (!Ea.Ja && Ea.Xc) {
					var Ga = O.Ba(Ea.id);
					if (Ga && Ga.Ml() && Ea.id != Yn && !(Ea.id in D)) {
						D[Ea.id] = 2;
						L[q](Ea.id);
					}
				}
			});
			if (L[t] > 0) {
				L[gd](function (Ea, Ga) {
					if (D[Ea] < D[Ga]) {
						return 1;
					}
					if (D[Ea] > D[Ga]) {
						return -1;
					}
					return 0;
				});
				var ba = [];
				for (var m = 0; m < 2; ++m) {
					ba[m] = [];
				}
				var ea = h.min(L[t], 4);
				for (var m = 0; m < ea; ++m) {
					var ta = L[m], V = Un(ta), Aa = M;
					if (V) {
						Aa = V.ua;
					} else {
						var Ma = O.Ba(ta);
						Aa = Ma.na;
					}
					Aa = Aa[Kb](0, 30);
					ba[m % 2][q]("<label for=\"" + ta + "\"><input name=guestlist type=checkbox id=\"" + ta + wk + Aa + "</input></label>");
				}
				C = "<tr><td>\u8bbf\u5ba2\uff1a</td><td><table style=\"width:100%\"><tr>";
				for (var m = 0; m < 2; ++m) {
					C += "<td valign=top>" + ba[m][K]("<br>") + Cr;
				}
				C += "</tr></table></td></tr>";
			}
		}
		n.b("calendar_guests", C);
		iB();
		bb(dq, j[H]);
		dq.A = j.A;
		var Pa = n[r]();
		Tv(null, e || Rl(f), true, Pa);
		dq.Dx(pD(f, i));
		Q ? pa(function () {
			rA(qD());
		}, 0) : rA(qD());
	};
}
function rD(a) {
	pn(function () {
		R.bz(a);
	});
}
function sD() {
	pn(function () {
		R.fz();
	});
}
var oD = new T("<form onsubmit=\"" + S(tD) + "(${usertime},${quickAddSource});return false;\" style=\"display:block; width:auto\" id=\"newEventForm\"><font size=-1>${time}<p><table style=\"width:auto\"><tr><td><label forid=\"b_subject\">\u5185\u5bb9\uff1a</label><td id=\"bubble_input\">" + (R[mc].Ff ? "<div style=\"overflow:auto\"><div style=\"overflow:hidden\">" : M) + "<input name=\"b_subject\" size=35 id=dragEventSubject>" + (R[mc].Ff ? "</div></div>" : M) + "</td></tr><tr><td>&nbsp;</td><td style=\"font-size:86%\">${sampleInput}</td></tr>${calendar_guests}</table>${calendar_select}</p><span><input id=\"create_event_btn\"  type=submit value=\"\u521b\u5efa\u6d3b\u52a8\">&nbsp;<a id=\"event_details_btn\" href=\"javascript:" + S(uD) + "(${usertime})\">\u4fee\u6539\u6d3b\u52a8\u8be6\u7ec6\u4fe1\u606f <strong>&raquo;</strong></a></span></font></form>");
function qD() {
	return W("dragEventSubject");
}
function tD(a, b) {
	var c = R.W.Ma();
	c.sd("chip_drag_create");
	vD(sf(rD, c), a, b);
}
function uD(a) {
	R.W.Od("chip_create_edit");
	vD(sD, a);
}
function vD(a, b, c) {
	if (dq) {
		if (!dq.Mb()) {
			return;
		}
		dq.V();
	}
	var d = ["ctext", qD()[B], "qa-src", c];
	dq && d[q]("stim", dq[H], "etim", dq.A);
	Mk("compose", d, Lk(wD(a, b), xD(a, b)));
}
function xD() {
	return function () {
		pa(function () {
			pn(function () {
				var a = R.cz();
				dq.V();
				R.pi(a);
			});
		}, 0);
		return false;
	};
}
function wD(a, b) {
	return function (c) {
		var d = c[Xb];
		if (d && d !== "null") {
			var e = nC(c);
			if (b) {
				bb(dq, e[H]);
				dq.A = e.A;
				if (e[H][ic](8) != Qh) {
					dq.C |= 16;
				} else {
					dq.C &= -17;
				}
			}
			if (e[Vy]) {
				dq.summary = e[Vy];
			}
			for (var f in e) {
				if (e[f] && !dq[f]) {
					dq[f] = e[f];
				}
			}
		}
		a();
		return false;
	};
}
function pD(a, b) {
	return function () {
		b || (b = [a]);
		for (var c = 0; c < b[t]; ++c) {
			l(b[c][F], U);
		}
		var d = qD();
		d && d[jc]();
		dq.Dx(null);
		return true;
	};
}
function cD(a, b) {
	Ba(a[F], $l);
	Ua(a[F], b ? M : "rgb(204, 204, 204)");
	l(a[F], "block");
	mb(a[F], 10);
	zm(a, 66);
}
function yD(a, b, c, d) {
	return function (e) {
		var f = Rs() ? 0 : d[vb], g = Gl(a, e.x), i = Gl(b, e.y + f);
		if (g < 0) {
			g = 0;
		} else {
			if (g >= a[t] - 1) {
				g = a[t] - 2;
			}
		}
		if (i < 0) {
			i = 0;
		} else {
			if (i >= b[t] - 1) {
				i = b[t] - 2;
			}
		}
		var j = new nl(a[g], b[i] - f, a[g + 1] - a[g], b[i + 1] - b[i], e.Aa);
		if (c) {
			j.x += c.x;
			j.y += c.y;
		}
		if (Q) {
			j.x += 3;
		} else {
			if (ag) {
				if (R[mc].Lk) {
					j.x += Rs() ? 2 : 3;
					j.y += 1;
				} else {
					j.x += Rs() ? 6 : 8;
				}
			}
		}
		return j;
	};
}
function zD(a, b) {
	return a - b;
}
function dD(a, b) {
	var c = Rl(a), d = [], e = [];
	d[q](c.x + 0, c.x + c.w + 0);
	e[q](c.y, c.y + c.h);
	for (var f = a[ad]; f; f = f[Ad]) {
		var g = f[Bb];
		if (!g) {
			continue;
		}
		if (g[Lc](/\bhrule\b/)) {
			e[q](Xl(f));
		} else {
			g[Lc](/\bvrule\b/) && d[q](Vl(f) + 0);
		}
	}
	d[gd](zD);
	e[gd](zD);
	var i;
	if (b) {
		var c = Rl(W(b));
		i = new ll(-c.x, -c.y, c.Aa);
	}
	return yD(d, e, i, W(Xp));
}
function AD(a, b) {
	this.fa = a;
	this.jC = b;
	this.gc = dD(W("grid"));
	this.EI = W(Xp)[vb];
	var c = Rl(a);
	this.EC = c.h - Rl(b).h;
	c.y += 1 - this.EI;
	this.Fo = this.gc(c);
	var d = Rl(W(Xp));
	this.bp = d.y + d.h;
	var e = ag ? 0 : -1;
	this.Nv = this.gc(new ll(Rl(b).x, this.bp + e, d.Aa)).y;
	this.Ng = jA(this.fa);
	var f = iq[a.id].Q;
	this.rK = f.A.Db(f[H]).Rm() > 30;
	this.gl = f[Gb];
}
AD[z].Jc = function () {
	var a = Rl(this.fa), b = LC(a, this.fa, 2);
	if (undefined !== b[Sd]) {
		if (0 === Ep(b[Sd])) {
			return false;
		}
		Kk.f().$b && Nj.f().iv(b[Sd]);
	}
	SC();
	Z = hD();
	Ir = 2;
	Jr = 2;
	mb(this.fa[F], 10);
	return true;
};
AD[z].cb = function (a, b, c, d) {
	var e = null;
	if (TB.y > this.Nv) {
		e = this.Nv;
	} else {
		var f = this.gc(TB);
		e = f.y + f.h;
	}
	var g = e - this.Fo.y;
	if (g < this.Fo.h) {
		g = this.Fo.h;
	}
	g -= this.EC;
	ob(this.jC[F], g + X);
	d.ga = 0;
	d.la = 0;
	BD(this.fa, this.Ng, this.gl, !this.rK);
	return true;
};
AD[z].Dd = function (a, b, c) {
	mb(this.fa[F], M);
	MC(this.fa, c);
};
AD[z].hd = function () {
	TC();
};
function CD(a) {
	this.fa = a;
	this.Yi = null;
	this.gc = dD(W("grid"));
	this.fp = false;
	this.fq = true;
	this.aw = null;
	this.Ng = jA(this.fa);
	this.gl = iq[a.id].Q[Gb];
}
CD[z].Jc = function (a, b) {
	var c = Rl(b), d = LC(c, b, 1);
	if (undefined !== d[Sd]) {
		if (0 === Ep(d[Sd])) {
			return false;
		}
		Kk.f().$b && Nj.f().iv(d[Sd]);
	}
	SC();
	var e = Zl(a);
	this.pw = this.gc(e);
	var f = this.gc(e), g = Rl(b);
	this.Yi = f.y - g.y;
	this.Gp = e;
	this.ai = false;
	this.$h = false;
	var i = W(Xp);
	this.mr = b[Bd] < i[vb];
	this.nr = b[Bd] + b[Fd] > i[vb] + i[Fd];
	this.HI = fa(DD(this, i), 10);
	Z = b;
	Ir = 1;
	Jr = 3;
	return true;
};
CD[z].cb = function (a, b, c, d) {
	var e = Zl(a), f = this.gc(e);
	if (!this.fp) {
		if (this.pw.x == f.x && this.pw.y == f.y) {
			d.la = 0;
			d.ga = 0;
			return true;
		}
		this.fp = true;
	}
	f.y -= this.Yi;
	if (this.fq) {
		this.aw = Rl(b);
	}
	var g = this.aw;
	d.la = f.x - g.x;
	d.ga = f.y - g.y;
	var i = this.Gp.y < e.y, j = this.Gp.y > e.y;
	this.Gp = e;
	if (this.ai && i) {
		this.ai = false;
	} else {
		if (this.$h && j) {
			this.$h = false;
		}
	}
	var m = W(Xp), n = m[vb], p = m[Fd], s = n + p, u = b[Bd], v = u + d.ga, w = b[Fd], x = u + w, y = x + d.ga;
	if (this.mr && u >= n) {
		this.mr = false;
	}
	if (this.nr && x <= s) {
		this.nr = false;
	}
	if (v <= n) {
		if (!this.ai && j) {
			if (u != n) {
				var C = h.max(0, v);
				this.Yi -= C - n;
				va(m, C);
			}
			this.ai = true;
		}
		if (!this.mr) {
			d.ga = m[vb] - u;
		}
	} else {
		if (y >= s) {
			var D = ws[Rr] - ws[0];
			if (!this.$h && i) {
				if (x != s) {
					var C = h.min(D - p, y - p);
					this.Yi -= C - n;
					va(m, C);
				}
				this.$h = true;
			}
			if (!this.nr) {
				d.ga = m[vb] + p - w - u;
			}
		}
	}
	this.fq = d.la || d.ga;
	BD(this.fa, this.Ng, this.gl);
	return true;
};
CD[z].Dd = function (a, b, c) {
	if (!this.fp) {
		return true;
	}
	var d = MC(b, c);
	Gy(b, ED(b, b.onclick));
	return d;
};
function mD(a, b) {
	var c = lD(a);
	k(b, zv(c[H], c.A, M));
}
function ED(a, b) {
	return function () {
		Gy(a, b);
	};
}
function BD(a, b, c, d) {
	var e = Rl(a), f = new ll(e.x, e.y + e.h, e.Aa);
	f.y -= 1;
	var g = Ss(e, false), i = Ss(f, false), j = ip.ja, m = j.Tb(g.ka, g.Y, undefined), n = j.Tb(i.ka, i.Y, undefined), p = n.Db(m).Rm() > 30;
	k(b, p || !c ? zv(m, n, d ? c : M) : te(cn(m), c));
}
CD[z].hd = function () {
	window[kd](this.HI);
	TC();
};
function DD(a, b) {
	return function () {
		if (!a.ai && !a.$h) {
			return;
		}
		var c = a.fa, d = c[Bd], e = c[Fd], f = d + e, g = ws[1] - ws[0], i = ws[Rr] - ws[0], j = b[vb], m = b[Fd], n = j + m, p = j, s = d;
		if (a.ai) {
			if (d == j) {
				s = h.max(0, d - g);
				p = h.max(0, j - g);
			}
		} else {
			if (a.$h) {
				if (f == n) {
					s = h.min(i - e, d + g);
					p = h.min(i - m, j + g);
				}
			}
		}
		var u = p - j;
		if (u != 0) {
			va(b, p);
			c[F].top = s + X;
			a.Yi -= u;
			a.fq = true;
			BD(a.fa, a.Ng, a.gl);
		}
	};
}
function FD(a) {
	return a[kz] == "DL";
}
var GD = /\b(b1|b2|resize)\b/;
function HD(a, b) {
	if (b[J] == zA || !a || !(ip instanceof Zp)) {
		return undefined;
	}
	var c = ip.ja;
	if (a.id) {
		var d = iq[a.id];
		if (d && !Ho(d.Q) && Ep(d.Q) && c.X) {
			return new CD(a);
		}
	}
	if (GD[zb](a[Bb])) {
		var e = a;
		do {
			e = e[ud];
		} while (e.id[I](0, "reldiv"[t]) != "reldiv");
		var f = iq[e.id];
		if (f && Ep(f.Q)) {
			var g = Am(e, FD);
			return new AD(e, g[0]);
		}
	}
	if (a.id == "grid" && c.X) {
		var i = Zl(b);
		return new kD(a, dD(a), i);
	}
	if (a.id == nu && c.X) {
		var j = Zl(b), m = Rl(a), n = m.h, p = m.y;
		return new iD(ZC(), p, n, j);
	}
	if (Rs() && a.id == "grid") {
		return new eD(a, b);
	}
	if (a.id) {
		var d = iq[a.id];
		if (d && (Ho(d.Q) || !c.X)) {
			return Ep(d.Q) ? new YC(a, d) : new Zt;
		}
	}
	return undefined;
}
wr(HD);
function lD(a) {
	var b = Rl(a);
	b.y += W(Xp)[vb];
	var c = new ll(b.x + b.w / 2, b.y, b.Aa), d = Ss(c, false);
	d.Y = h[Hb](d.Y);
	var e = new ll(c.x, b.y + b.h - 3, b.Aa);
	if (ag) {
		var f = Rl(W("grid"));
		e.y = h.min(e.y, f.y + f.h - 1);
	}
	var g = Ss(e, false);
	g.ka = d.ka;
	g.Y = h[Hb](g.Y);
	if (d.Y == g.Y) {
		return null;
	}
	var i = ip.ja, j = i.Tb(d.ka, d.Y, undefined), m = i.Tb(d.ka, g.Y, undefined);
	return {start:j, A:m};
}
function ID(a) {
	var b = Zl(a);
	b.Aa = window;
	var c = Ss(b, false), d = ip.ja;
	c = d.X ? c.ka : c.Y * d.bb() + c.ka;
	var e = W("dh" + c);
	if (e && Rl(e)[ld](b)) {
		yp(c);
		return true;
	}
	return false;
}
function JD(a) {
	var b = false, c = false;
	for (var d = qA(a); d; d = d[ud]) {
		if (vm(d, "chip")) {
			break;
		} else {
			if (d.id == "grid" || d.id == nu) {
				b = true;
				c = d.id == nu;
				break;
			}
		}
	}
	if (!b) {
		return;
	}
	var e = Zl(a);
	e.Aa = window;
	var f = (c ? ZC() : dD(W("grid")))(e);
	if (ip.ja.X) {
		if (!c) {
			e.y += W(Xp)[vb];
			var g = h[Wb](Ss(e, false).Y), i = h[Qb](Tr / 30);
			if (g + i >= 48) {
				i = 48 - g;
			} else {
				if (g < 0) {
					i = 1;
				}
			}
			f.h *= i;
			f.w -= Q ? 2 : 3;
			if (Q) {
				f.y += 2;
			}
		}
		f.w = h.max(0, f.w);
	} else {
		if (Q) {
			f.y++;
			f.x--;
		}
	}
	bD();
	var j = Rs() ? W("month_row_0") : hD();
	cD(j);
	Wa(j[F], f.x + X);
	j[F].top = f.y + X;
	Fa(j[F], f.w + X);
	ob(j[F], f.h + X);
	if (!c && !Rs()) {
		var m = lD(j);
		k(j, lA(f, m));
	} else {
		k(j, M);
	}
	var n, p;
	if (Rs()) {
		n = mA;
		p = "MONTH_GRID";
	} else {
		if (c) {
			n = jD;
			p = "ALL_DAY_AREA";
		} else {
			n = lD;
			p = "WEEK_GRID";
		}
	}
	fD(n, true, p)(j);
}
function KD(a) {
	if (!dq || dq.Mb()) {
		return;
	}
	if (R[mc].Ff && ID(a)) {
		return;
	}
	JD(a);
}
ku = KD;
function JC() {
	$i(W(nu), hj, KD);
}
function LD(a) {
	if (a.xn == null) {
		return aA(a.src);
	}
	return a.xn;
}
function MD(a) {
	if (!a) {
		var b = R.U.zb().zc(), c = b.o(), d = [];
		Gj[bd](function (w) {
			if ((w.C & 7) == 2 || (w.C & 65536) !== 0) {
				return;
			}
			if (w[H].o() < c) {
				return;
			}
			var x = LD(w);
			for (var y = 0; y < x[t]; ++y) {
				var C = x[y];
				if (C >= 0) {
					var D = w[H].Db(b).Br;
					if (D < C && C - 150 < D) {
						if (w.vA == C) {
							break;
						}
						d[q](w);
						w.vA = C;
						break;
					}
				}
			}
		});
		d[gd](function (w, x) {
			return w[H].o() - x[H].o();
		});
		var e = [], f = Y.f();
		for (var g = 0; g < d[t]; ++g) {
			var i = d[g], j = i[H].H(), m = i[nc] ? P(i[nc]) : null, n = hA(i[Gb]), p = P(f.Ah(f.$(i.src))), s = cn(i[H]), u = !j.T(R.U.xa()) ? gt(j) : null;
			e[q](m ? u ? n + " (" + p + ") \u5c06\u4e8e " + u + " \u7684 " + s + " \u5728 " + m + " \u8fdb\u884c\u3002" : n + " (" + p + ") \u5c06\u4e8e " + s + " \u5728" + m + "\u5f00\u59cb\u3002" : u ? n + " (" + p + ") \u5c06\u4e8e " + u + qg + s + " \u5f00\u59cb\u3002" : n + " (" + p + ") \u5c06\u4e8e " + s + " \u5f00\u59cb\u3002");
		}
		if (e[t]) {
			var v = e[K]("\n");
			R.ea[xb](Gf(v[A](fv, M)));
		}
	}
	pa(ND, 30000);
}
function ND() {
	MD(false);
}
MD(true);
function OD(a, b, c, d) {
	Wa(this, We(a) ? oa(a) : undefined);
	this.top = We(b) ? oa(b) : undefined;
	Fa(this, We(c) ? oa(c) : undefined);
	ob(this, We(d) ? oa(d) : undefined);
}
OD[z].ab = function () {
	return new OD(this[Cc], this.top, this[Eb], this[Cd]);
};
xa(OD[z], function () {
	return Vj + this[Cc] + Wj + this.top + " - " + this[Eb] + "w x " + this[Cd] + "h)";
});
ib(OD[z], function (a) {
	return this[Cc] <= a[Cc] && this[Cc] + this[Eb] >= a[Cc] + a[Eb] && this.top <= a.top && this.top + this[Cd] >= a.top + a[Cd];
});
function PD(a, b) {
	var c = qk(a);
	if (c[sd] && c[sd][$y]) {
		var d = c[sd][$y](a, M);
		if (d) {
			return d[b];
		}
	}
	return null;
}
function QD(a, b) {
	return PD(a, b) || (a[gz] ? a[gz][b] : null) || a[F][b];
}
function RD(a, b, c) {
	var d, e;
	if (b instanceof Uj) {
		d = b.x;
		e = b.y;
	} else {
		d = b;
		e = c;
	}
	Wa(a[F], typeof d == bf ? h[Hb](d) + X : d);
	a[F].top = typeof e == bf ? h[Hb](e) + X : e;
}
function SD(a) {
	if (QD(a, "display") != U) {
		return new $j(a[cc], a[Fd]);
	}
	var b = a[F], c = b[xd], d = b.visibility, e = b.position;
	ub(b, am);
	Ba(b, $l);
	l(b, M);
	var f = a[cc], g = a[Fd];
	l(b, c);
	Ba(b, e);
	ub(b, d);
	return new $j(f, g);
}
function TD(a, b) {
	l(a[F], b ? M : U);
}
var UD = $f ? "MozUserSelect" : ag ? "WebkitUserSelect" : null;
function VD() {
}
VD[z].bH = 0;
VD[z].WD = function () {
	return Ke + (this.bH++)[r](36);
};
var WD = new VD;
function XD(a) {
	pj[G](this);
	this.P = a || Pz();
	this.AI = YD;
}
N(XD, pj);
XD[z].tF = WD;
var YD = null, ZD = "Component already rendered", $D = "Unable to set parent component";
XD[z].wa = null;
XD[z].P = null;
XD[z].hc = false;
XD[z].I = null;
XD[z].AI = null;
XD[z].KG = null;
XD[z].mb = null;
XD[z].Ub = null;
XD[z].Qf = null;
XD[z].kL = null;
XD[z].qe = function () {
	return this.wa || (this.wa = this.tF.WD());
};
XD[z].ma = function () {
	return this.I;
};
XD[z].ci = function (a) {
	this.I = a;
};
XD[z].Fm = function (a) {
	if (this == a) {
		throw Error($D);
	}
	if (a && this.mb && this.mb.du(this.wa)) {
		throw Error($D);
	}
	this.mb = a;
};
XD[z].nj = function () {
	return this.mb;
};
XD[z].Xo = function () {
	return this.mb;
};
XD[z].R = function () {
	this.I = this.P[Xc](xk);
};
XD[z].ub = function (a) {
	this.bx(a);
};
XD[z].bx = function (a, b) {
	if (this.hc) {
		throw Error(ZD);
	}
	this.I || this.R();
	a ? a[qc](this.I, b || null) : this.P.va[Bc][o](this.I);
	if (!this.mb || this.mb.hc) {
		this.yc();
	}
};
XD[z].yc = function () {
	this.hc = true;
	this.Ho(function (a) {
		!a.hc && a.ma() && a.yc();
	});
};
XD[z].ne = function () {
	this.Ho(function (a) {
		a.hc && a.ne();
	});
	this.hc = false;
};
XD[z].S = function () {
	XD.ba.S[G](this);
	this.hc && this.ne();
	this.Ho(function (a) {
		a.ia();
	});
	!this.kL && this.I && nk(this.I);
	this.Ub = null;
	this.Qf = null;
	this.I = null;
	this.KG = null;
	this.mb = null;
};
XD[z].Kv = function (a) {
	return this.qe() + "." + a;
};
XD[z].on = function (a, b) {
	this.jA(a, this.ml(), b);
};
XD[z].jA = function (a, b, c) {
	if (a.hc && (c || !this.hc)) {
		throw Error(ZD);
	}
	if (b < 0 || b > this.ml()) {
		throw Error("Child component index out of bounds");
	}
	a.Fm(this);
	if (!this.Qf || !this.Ub) {
		this.Qf = {};
		this.Ub = [];
	}
	CA(this.Qf, a.qe(), a);
	HA(this.Ub, a, b);
	if (c) {
		this.I || this.R();
		var d = this.Po(b + 1);
		a.bx(this.nl(), d ? d.I : null);
	} else {
		this.hc && !a.hc && a.I && a.yc();
	}
};
XD[z].nl = function () {
	return this.I;
};
XD[z].hF = function () {
	return !!this.Ub && this.Ub[t] != 0;
};
XD[z].ml = function () {
	return this.Ub ? this.Ub[t] : 0;
};
XD[z].du = function (a) {
	return this.Qf && a ? BA(this.Qf, a) || null : null;
};
XD[z].Po = function (a) {
	return this.Ub ? this.Ub[a] || null : null;
};
XD[z].Ho = function (a, b) {
	this.Ub && vi(this.Ub, a, b);
};
XD[z].removeChild = function (a, b) {
	if (a) {
		var c = jf(a) ? a : a.qe();
		a = this.du(c);
		if (c && a) {
			Fi(this.Qf, c);
			yi(this.Ub, a);
			if (b) {
				a.ne();
				a.I && nk(a.I);
			}
			a.Fm(null);
		}
	}
	if (!a) {
		throw Error("Child is not in parent component");
	}
	return a;
};
XD[z].lI = function (a, b) {
	return this[Gc](this.Po(a), b);
};
XD[z].Yw = function (a) {
	while (this.hF()) {
		this.lI(0, a);
	}
};
R.da = {};
R.da.jM = [1, 2, 3];
R.da.yx = [1, 2];
R.da.lK = [1, 2, 3];
R.da.dH = [1, 2, 3];
//R.da.dH = [1, 3];
R.da.Vo = function () {
	return R.da.Yp || (R.da.Yp = AA(1, "\u7535\u5b50\u90ae\u4ef6", 2, "SMS", 3, "\u5f39\u51fa\u5f0f\u7a97\u53e3"));
};
R.da.ru = function (a) {
	return a ? R.da.lK : R.da.dH;
};
R.da.Ax = [2, 3, 4, 5, 6];
R.da.cE = function () {
	if (!R.da.zx) {
		var a = "\u6bcf\u65e5\u65e5\u7a0b:<em class=desc>" + ("\u5728\u60a8\u5f53\u524d\u65f6\u533a\u7684\u6bcf\u5929" + dn(hi("T050000")) + "\u53d1\u9001") + "</em>";
		R.da.zx = AA(2, "\u65b0\u9080\u8bf7:", 3, "\u5df2\u53d8\u66f4\u7684\u9080\u8bf7:", 4, "\u5df2\u53d6\u6d88\u7684\u9080\u8bf7:", 5, "\u9080\u8bf7\u56de\u590d:", 6, a);
	}
	return R.da.zx;
};
R.da.UL = [300, 600, 900, 1200, 1500, 1800, 2700, 3600, 7200, 10800, 43200, 86400, 172800, 604800];
R.da.ZL = function () {
	return R.XB || (R.XB = AA(300, "5 \u5206\u949f", 600, "10 \u5206\u949f", 900, "15 \u5206\u949f", 1200, "20 \u5206\u949f", 1500, "25 \u5206\u949f", 1800, "30 \u5206\u949f", 2700, "45 \u5206\u949f", 3600, "1 \u5c0f\u65f6", 7200, "2 \u5c0f\u65f6", 10800, "3 \u5c0f\u65f6", 43200, "12 \u5c0f\u65f6", 86400, "1 \u5929", 172800, "2 \u5929", 604800, "1 \u5468"));
};
R.da.kI = [60, 3600, 86400];
R.da.aE = function () {
	return R.da.jI || (R.da.jI = AA(60, "\u5206\u949f", 3600, "\u5c0f\u65f6", 86400, "\u5929"));
};
R.da.xz = 300;
R.da.vz = 2419200;
R.da.Wr = "600";
R.da.Vr = 1;
var aE;
function bE(a, b, c, d) {
	this.Cy = a;
	this.ZG = b;
	this.Ec = c;
	this.Dc = d;
}
bE[z].RD = function (a) {
	return this.ZG[a];
};
bE[z].YF = function (a) {
	return a >= this.Ec && a <= this.Dc && a % 1 == 0;
};
bE[z].dC = function (a) {
	var b = this.Cy;
	if (a != 0) {
		for (var c = b[t]; c--; ) {
			if (a % b[c] == 0) {
				return b[c];
			}
		}
	}
	return b[0];
};
function cE(a, b) {
	XD[G](this);
	this.zF = a;
	this.zm = b || aE || (aE = new bE(R.da.kI, R.da.aE(), R.da.xz, R.da.vz));
	this.oa = new al(this);
}
N(cE, XD);
cE[z].R = function () {
	this.Zv = this.Kv(bf);
	this.Ay = this.Kv("unit");
	var a = [], b = this.zm.Cy;
	for (var c = 0; c < b[t]; c++) {
		a[q]("<option value=\"", b[c], wk, P(this.zm.RD(b[c])), "</option>");
	}
	var d = this.Qa;
	d.b("options", a[K](M));
	d.b("numId", this.Zv);
	d.b("unitId", this.Ay);
	this.ci(this.P.rF(d[r]()));
};
cE[z].yc = function () {
	cE.ba.yc[G](this);
	this.Tj = this.P.Qr(this.Zv);
	this.By = this.P.Qr(this.Ay);
	this.Wd(this.zF);
	this.oa.ra(this.Tj, "keyup", this.$E);
};
cE[z].$E = function () {
	var a = this.Tj[B], b = a[A](/[^0-9]/g, M);
	if (a != b) {
		Oa(this.Tj, b);
	}
};
cE[z].Qa = new T("<span class=\"gcal-durpicker\"><input type=text id=\"${numId}\" class=\"gcal-durpicker-number\"></input><select class=\"gcal-durpicker-unit\" id=\"${unitId}\">${options}</select></span>");
cE[z].S = function () {
	cE.ba.S[G](this);
	this.oa.ia();
};
cE[z].Bb = function () {
	var a = oa(this.Tj[B]) * oa(this.By[B]);
	return this.zm.YF(a) ? a : null;
};
cE[z].Wd = function (a) {
	var b = this.zm.dC(a);
	Oa(this.Tj, a / b);
	Oa(this.By, b);
};
function dE(a, b) {
	jb(this, a);
	this.mc = b;
}
function eE(a, b, c, d, e) {
	XD[G](this);
	this.Mh = a;
	this.YG = b;
	this.yF = c;
	this.zt = d;
	this.oa = new al(this);
	this.cB = e || M;
}
eE.bv(XD);
eE[z].R = function () {
	var a = this.P, b = this.YG, c = wi(this.Mh, function (d) {
		return a.R("option", {value:d}, a[kc](b[d]));
	});
	this.Xp = a.R("select", {"class":"gcal-reminder-method"}, c);
	Oa(this.Xp, this.yF);
	this.Oi = a.R("span");
	this.Zw = a.R("a", {href:"#"}, a[kc]("\u79fb\u9664"));
	this.ci(a.R(xk, {"class":"gcal-reminder"}, this.Xp, this.Oi, a[kc](qg + this.cB + qg), this.Zw));
	this.on(this.zt, true);
	this.oa.ra(this.Zw, ij, this.dF);
};
eE[z].yc = function () {
	eE.ba.yc[G](this);
};
eE[z].Bb = function () {
	var a = this.zt.Bb();
	return a == null ? null : new dE(oa(this.Xp[B]), a);
};
eE[z].S = function () {
	eE.ba.S[G](this);
	this.oa.ia();
};
eE[z].nl = function () {
	return this.Oi;
};
eE[z].dF = function (a) {
	this[xc]("rmv");
	a[oc]();
};
function fE(a, b, c) {
	XD[G](this);
	this.dv = a;
	this.YB = b;
	this.oa = new al(this);
	this.yG = c || Infinity;
}
fE.bv(XD);
fE[z].R = function () {
	this.ci(this.ij());
	for (var a = 0; a < this.dv[t]; a++) {
		this.ns(this.dv[a]);
	}
	this.Qg();
};
fE[z].ij = function () {
	var a = this.P;
	this.Oi = a.R(xk);
	this.Bi = a.R("a", {href:"#"}, a[kc]("\u6dfb\u52a0\u63d0\u9192"));
	var b = a.R(xk, {"class":"gcal-reminderlist"}, this.Oi, this.Bi);
	this.oa.ra(this.Bi, ij, this.FE);
	return b;
};
fE[z].NE = function (a) {
	var b = a[Hc];
	this[Gc](b, true);
	b.ia();
	this.Qg();
};
fE[z].FE = function (a) {
	this.ns(this.YB);
	this.Qg();
	a[oc]();
};
fE[z].ns = function (a) {
	var b = this.co(a);
	this.on(b, true);
	this.oa.ra(b, "rmv", this.NE);
};
fE[z].co = $e;
fE[z].Qg = function () {
	l(this.Bi[F], this.Zo() < this.yG ? M : U);
};
fE[z].Bb = function () {
	var a = this.ml(), b = [];
	for (var c = 0; c < a; c++) {
		var d = this.Po(c).Bb();
		if (d) {
			b[q](d);
		} else {
			return null;
		}
	}
	return b;
};
fE[z].Zo = function () {
	return this.ml();
};
fE[z].nl = function () {
	return this.Oi;
};
fE[z].S = function () {
	fE.ba.S[G](this);
	this.oa.ia();
};
function gE() {
	return h[Hb](h.random() * 2147483648);
}
function hE(a, b, c) {
	var d = a[E]("?") >= 0 ? xf : "?";
	return a + d + ia(b) + "=" + ia(c);
}
var iE = /@(gmail\.com)|(googlemail\.com)$/;
var jE, kE;
function lE(a, b, c) {
	var d = {Qv:Q ? c[Nd] + document[Bc][dd] : c[sc], OG:Q ? c[Od] + document[Bc][vb] : c[rc], mi:sA(window)}, e = uA(window, "tip"), f = e[F];
	k(e, a);
	Ba(f, $l);
	Va(f, "#ffd");
	f.borderWidth = "1px";
	f.borderStyle = "outset";
	f.padding = "2px";
	Dy(e, function () {
		xy(kE);
		kE = null;
	});
	e.onmouseout = rw;
	if (b) {
		Wa(f, M);
		tb(f, d.mi - d.Qv + 16 + X);
	} else {
		Wa(f, d.Qv + 16 + X);
		tb(f, M);
	}
	f.top = d.OG + X;
	mb(f, 2000);
	vA(e, true);
}
function mE() {
	var a = W("tip");
	a && vA(a, false);
}
if (ag) {
	var pE = ["<img src=\"", , "\" onload=\"" + S(nE) + "('", , "','", , "','", , "').call(this)\" onerror=\"" + S(oE) + "('", , "','", , "').call(this)\">"];
}
function qE(a, b, c) {
	var d = a[A](/\b\s*<\S*>$/, M), e = "<center><b>" + P(d) + "</b><br><a href=\"mailto:" + P(b) + wk + P(a) + "</a><br>";
	if (c) {
		e += "<br><img src=\"" + P(c) + "\" width=150>";
	}
	e += "</center>";
	return e;
}
function nE(a, b, c) {
	return function () {
		lE(qE(a, b, c), false, jE);
	};
}
function oE(a, b) {
	return function () {
		lE(qE(a, b, null), false, jE);
	};
}
function qw(a, b, c, d) {
	if (kE) {
		xy(kE);
		kE = null;
	}
	var e = d[Lc](iE) ? "http://mail.google.com/mail/photos/" + d + "?" + (gE()[r](36) + (gE() ^ tf())[r](36)) : undefined;
	if (e) {
		e = hE(e, "pld", mt);
		jE = {clientX:b[Nd], pageX:b[sc], clientY:b[Od], pageY:b[rc]};
		if (ag) {
			var f = uA(window, "spld");
			k(f, QA(pE, [e, c, d, e, c, d]));
			l(f[F], U);
		} else {
			var g = new Image;
			g.onload = nE(c, d, e);
			g.onerror = oE(c, d);
			g.src = e;
		}
	} else {
		lE(qE(c, d, null), false, b);
	}
}
function rw() {
	kE = pa(mE, 200);
}
var _TT_HidePhoto = rw, _TT_ShowPhoto = qw;
function rE(a) {
	this.O = new FC;
	a && this.Nk(a);
}
function sE(a) {
	var b = typeof a;
	return b == "object" ? "o" + mf(a) : b[Qd](0, 1) + a;
}
rE[z].Ab = function () {
	return this.O.Ab();
};
rE[z].add = function (a) {
	this.O.aa(sE(a), a);
};
rE[z].Nk = function (a) {
	var b = AC(a), c = b[t];
	for (var d = 0; d < c; d++) {
		this.add(b[d]);
	}
};
rE[z].Bg = function (a) {
	var b = AC(a), c = b[t];
	for (var d = 0; d < c; d++) {
		this[Uc](b[d]);
	}
};
ab(rE[z], function (a) {
	return this.O[Uc](sE(a));
});
kb(rE[z], function () {
	this.O[od]();
});
ib(rE[z], function (a) {
	return this.O.Mc(sE(a));
});
rE[z].kd = function () {
	return this.O.kd();
};
rE[z].ab = function () {
	return new rE(this);
};
rE[z].T = function (a) {
	return this.Ab() != zC(a) ? false : this.TF(a);
};
rE[z].TF = function (a) {
	var b = zC(a);
	if (this.Ab() > b) {
		return false;
	}
	if (!(a instanceof rE) && b > 5) {
		a = new rE(a);
	}
	return EC(this, function (c) {
		return CC(a, c);
	});
};
rE[z].vi = function () {
	return this.O.vi(false);
};
function tE(a, b) {
	try {
		var c = uE(a);
		return "Message: " + P(c[Zy]) + "\nUrl: <a href=\"view-source:" + c[mz] + "\" target=\"_new\">" + c[mz] + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + P(c[Wy] + "-> ") + "[end]\n\nJS stack traversal:\n" + P(vE(b) + "-> ");
	}
	catch (d) {
		return "Exception trying to expose exception! You win, we lose. " + d;
	}
}
function uE(a) {
	var b = Xe("document.location.href");
	return typeof a == hf ? {message:a, name:"Unknown error", lineNumber:"Not available", fileName:b, stack:"Not available"} : !a.lineNumber || !a[mz] || !a[Wy] ? {message:a[Zy], name:a[td], lineNumber:a.lineNumber || a.line || "Not available", fileName:a[mz] || a.sourceURL || b, stack:a[Wy] || "Not available"} : a;
}
function vE(a) {
	return wE(a || arguments.callee.caller, []);
}
function wE(a, b) {
	var c = [];
	if (xi(b, a)) {
		c[q]("[...circular reference...]");
	} else {
		if (a && b[t] < 50) {
			c[q](xE(a) + Vj);
			var d = a.arguments;
			for (var e = 0; e < d[t]; e++) {
				e > 0 && c[q](Wj);
				var f, g = d[e];
				switch (typeof g) {
				  case "object":
					f = g ? "object" : "null";
					break;
				  case hf:
					f = g;
					break;
				  case bf:
					f = ma(g);
					break;
				  case "boolean":
					f = g ? bi : Xk;
					break;
				  case cf:
					f = xE(g);
					f = f ? f : "[fn]";
					break;
				  case "undefined":
				  default:
					f = typeof g;
					break;
				}
				if (f[t] > 40) {
					f = f[Qd](0, 40) + "...";
				}
				c[q](f);
			}
			b[q](a);
			c[q](")\n");
			try {
				c[q](wE(a.caller, b));
			}
			catch (i) {
				c[q]("[exception trying to get caller]\n");
			}
		} else {
			a ? c[q]("[...long stack...]") : c[q]("[end]");
		}
	}
	return c[K](M);
}
function xE(a) {
	var b = ma(a);
	if (!yE[b]) {
		var c = /function ([^\(]+)/[Db](b);
		yE[b] = c ? c[1] : "[Anonymous]";
	}
	return yE[b];
}
var yE = {};
function zE(a, b, c) {
	this.KM = AE++;
	this.PM = tf();
	this.Kh = a;
	this.TG = b;
	this.gM = c;
}
zE[z].CC = null;
zE[z].BC = null;
var AE = 0;
zE[z].wJ = function (a) {
	this.CC = a;
};
zE[z].xJ = function (a) {
	this.BC = a;
};
zE[z].Ix = function (a) {
	this.Kh = a;
};
zE[z].nu = function () {
	return this.TG;
};
function BE(a) {
	this.Fc = a;
	this.mb = null;
	this.Ub = {};
	this.Kd = [];
}
BE[z].Kh = null;
function CE(a, b) {
	lb(this, a);
	Oa(this, b);
}
xa(CE[z], function () {
	return this[td];
});
new CE("OFF", Infinity);
new CE("SHOUT", 1200);
var DE = new CE("SEVERE", 1000), EE = new CE("WARNING", 900), FE = new CE("INFO", 800), GE = new CE("CONFIG", 700), HE = new CE("FINE", 500);
new CE("FINER", 400);
var IE = new CE("FINEST", 300);
new CE("ALL", 0);
BE[z].nj = function () {
	return this.mb;
};
BE[z].Ix = function (a) {
	this.Kh = a;
};
BE[z].wp = function (a) {
	if (this.Kh) {
		return a[B] >= this.Kh[B];
	}
	if (this.mb) {
		return this.mb.wp(a);
	}
	return false;
};
BE[z].log = function (a, b, c) {
	if (!this.wp(a)) {
		return;
	}
	var d = new zE(a, ma(b), this.Fc);
	if (c) {
		d.wJ(c);
		d.xJ(tE(c, arguments.callee.caller));
	}
	this.mG(d);
};
BE[z].$J = function (a, b) {
	this.log(DE, a, b);
};
BE[z].Xm = function (a, b) {
	this.log(EE, a, b);
};
BE[z].we = function (a, b) {
	this.log(FE, a, b);
};
BE[z].Qc = function (a, b) {
	this.log(HE, a, b);
};
BE[z].Do = function (a, b) {
	this.log(IE, a, b);
};
BE[z].mG = function (a) {
	if (!this.wp(a.Kh)) {
		return;
	}
	var b = this;
	while (b) {
		b.XA(a);
		b = b.nj();
	}
};
BE[z].XA = function (a) {
	for (var b = 0; b < this.Kd[t]; b++) {
		this.Kd[b](a);
	}
};
BE[z].IJ = function (a) {
	this.mb = a;
};
BE[z].kA = function (a, b) {
	this.Ub[a] = b;
};
var JE = {}, KE = null;
function LE() {
	if (!KE) {
		KE = new BE(M);
		JE[M] = KE;
		KE.Ix(GE);
	}
}
function ME(a) {
	LE();
	return a in JE ? JE[a] : NE(a);
}
function NE(a) {
	var b = new BE(a), c = a[Vb]("."), d = c[c[t] - 1];
	za(c, c[t] - 1);
	var e = c[K]("."), f = ME(e);
	f.kA(d, b);
	b.IJ(f);
	JE[a] = b;
	return b;
}
var OE = $f && !dg("1.9a");
function PE(a, b) {
	if ($f) {
		a[hd]("role", b);
		a.DM = b;
	}
}
function QE(a, b, c) {
	if ($f) {
		OE ? a.setAttributeNS("http://www.w3.org/2005/07/aaa", b, c) : a[hd]("aria-" + b, c);
	}
}
function RE() {
	return SE();
}
var SE = null, TE = null, UE = null;
function VE(a, b) {
	SE = a;
	TE = b;
	UE = null;
}
function WE() {
	var a = XE();
	return a ? new ActiveXObject(a) : new XMLHttpRequest;
}
function YE() {
	var a = {};
	if (XE()) {
		a[0] = true;
		a[1] = true;
	}
	return a;
}
VE(WE, YE);
var ZE = null;
function XE() {
	if (!ZE && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
		var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
		for (var b = 0; b < a[t]; b++) {
			var c = a[b];
			try {
				new ActiveXObject(c);
				ZE = c;
				return c;
			}
			catch (d) {
			}
		}
		throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
	}
	return ZE;
}
var $E = null;
function aF(a) {
	$E || ($E = new bF);
	return $E.Eg(a);
}
function bF() {
}
bF[z].Eg = function (a) {
	if (a != null && typeof a.toJSONString == cf) {
		return a.toJSONString();
	}
	var b = [];
	this.Kq(a, b);
	return b[K](M);
};
bF[z].Kq = function (a, b) {
	switch (typeof a) {
	  case hf:
		this.wx(a, b);
		break;
	  case bf:
		this.ZI(a, b);
		break;
	  case "boolean":
		b[q](a);
		break;
	  case "undefined":
		b[q]("null");
		break;
	  case "object":
		if (a == null) {
			b[q]("null");
			break;
		}
		if (ff(a)) {
			this.YI(a, b);
			break;
		}
		this.$I(a, b);
		break;
	  default:
		throw Error("Unknown type: " + typeof a);
	}
};
var cF = {"\"":"\\\"", "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\v":"\\u000b"};
bF[z].wx = function (a, b) {
	b[q](Af, a[A](/[\\\"\x00-\x1f\x80-\uffff]/g, function (c) {
		if (c in cF) {
			return cF[c];
		}
		var d = c[ed](0), e = "\\u";
		if (d < 16) {
			e += "000";
		} else {
			if (d < 256) {
				e += "00";
			} else {
				if (d < 4096) {
					e += Je;
				}
			}
		}
		return cF[c] = e + d[r](16);
	}), Af);
};
bF[z].ZI = function (a, b) {
	b[q](na(a) && !ua(a) ? a : "null");
};
bF[z].YI = function (a, b) {
	var c = a[t];
	b[q]("[");
	var d = M;
	for (var e = 0; e < c; e++) {
		b[q](d);
		this.Kq(a[e], b);
		d = ",";
	}
	b[q]("]");
};
bF[z].$I = function (a, b) {
	b[q]("{");
	var c = M;
	for (var d in a) {
		b[q](c);
		this.wx(d, b);
		b[q](Ke);
		this.Kq(a[d], b);
		c = ",";
	}
	b[q]("}");
};
function dF(a, b) {
	pj[G](this);
	this.Bj = a || 1;
	this.xk = b || eF;
	this.Gn = rf(this.ii, this);
	this.Jj = tf();
}
N(dF, pj);
dF[z].enabled = false;
var eF = Te.window;
dF[z].ob = null;
dF[z].setInterval = function (a) {
	this.Bj = a;
	if (this.ob && this.enabled) {
		this[Ky]();
		this[H]();
	} else {
		this.ob && this[Ky]();
	}
};
dF[z].ii = function () {
	if (this.enabled) {
		var a = tf() - this.Jj;
		if (a > 0 && a < this.Bj * 0.8) {
			this.ob = this.xk[Lb](this.Gn, this.Bj - a);
			return;
		}
		this.gC();
		if (this.enabled) {
			this.ob = this.xk[Lb](this.Gn, this.Bj);
			this.Jj = tf();
		}
	}
};
dF[z].gC = function () {
	this[xc]("tick");
};
bb(dF[z], function () {
	this.enabled = true;
	if (!this.ob) {
		this.ob = this.xk[Lb](this.Gn, this.Bj);
		this.Jj = tf();
	}
});
dF[z].stop = function () {
	this.enabled = false;
	if (this.ob) {
		this.xk[Py](this.ob);
		this.ob = null;
	}
};
dF[z].S = function () {
	dF.ba.S[G](this);
	this[Ky]();
	delete this.xk;
};
function fF(a, b, c) {
	if (kf(a)) {
		if (c) {
			a = rf(a, c);
		}
	} else {
		if (a && typeof a[jd] == cf) {
			a = rf(a[jd], a);
		} else {
			throw Error("Invalid listener argument");
		}
	}
	return eF[Lb](a, b || 0);
}
function gF(a, b) {
	var c;
	if (a instanceof gF) {
		this.di(b == null ? a.Md : b);
		this.Yq(a.yf);
		this.br(a.Dk);
		this.Pq(a.Xi);
		this.Xq(a.Qh);
		this.Vq(a.Xj);
		this.mk(a.kc.ab());
		this.Uq(a.hj);
	} else {
		if (a && (c = ma(a)[Lc](hF()))) {
			this.di(!!b);
			this.Yq(c[1], true);
			this.br(c[2], true);
			this.Pq(c[3], true);
			this.Xq(c[4]);
			this.Vq(c[5], true);
			this.mk(c[6]);
			this.Uq(c[7], true);
		} else {
			this.di(!!b);
			this.kc = new iF(null, this, this.Md);
		}
	}
}
gF[z].yf = M;
gF[z].Dk = M;
gF[z].Xi = M;
gF[z].Qh = null;
gF[z].Xj = M;
gF[z].hj = M;
gF[z].QF = false;
gF[z].Md = false;
xa(gF[z], function () {
	if (this.Sb) {
		return this.Sb;
	}
	var a = [];
	this.yf && a[q](jF(this.yf, kF), Ke);
	if (this.Xi) {
		a[q]("//");
		this.Dk && a[q](jF(this.Dk, kF), Sm);
		a[q](lF(this.Xi));
		this.Qh != null && a[q](Ke, ma(this.Qh));
	}
	this.Xj && a[q](jF(this.Xj, mF));
	var b = ma(this.kc);
	b && a[q]("?", b);
	this.hj && a[q]("#", jF(this.hj, nF));
	return this.Sb = a[K](M);
});
gF[z].ab = function () {
	return oF(this.yf, this.Dk, this.Xi, this.Qh, this.Xj, this.kc.ab(), this.hj, this.Md);
};
gF[z].Yq = function (a, b) {
	this.Ze();
	delete this.Sb;
	this.yf = b ? a ? sa(a) : M : a;
	if (this.yf) {
		this.yf = this.yf[A](/:$/, M);
	}
	return this;
};
gF[z].br = function (a, b) {
	this.Ze();
	delete this.Sb;
	this.Dk = b ? a ? sa(a) : M : a;
	return this;
};
gF[z].Pq = function (a, b) {
	this.Ze();
	delete this.Sb;
	this.Xi = b ? a ? sa(a) : M : a;
	return this;
};
gF[z].Xq = function (a) {
	this.Ze();
	delete this.Sb;
	if (a) {
		a = oa(a);
		if (ua(a) || a < 0) {
			throw Error("Bad port number " + a);
		}
		this.Qh = a;
	} else {
		this.Qh = null;
	}
	return this;
};
gF[z].Vq = function (a, b) {
	this.Ze();
	delete this.Sb;
	this.Xj = b ? a ? sa(a) : M : a;
	return this;
};
gF[z].mk = function (a) {
	this.Ze();
	delete this.Sb;
	if (a instanceof iF) {
		this.kc = a;
		this.kc.cd = this;
		this.kc.di(this.Md);
	} else {
		this.kc = new iF(a, this, this.Md);
	}
	return this;
};
gF[z].oc = function (a, b) {
	this.Ze();
	delete this.Sb;
	this.kc.aa(a, b);
	return this;
};
gF[z].Uq = function (a, b) {
	this.Ze();
	delete this.Sb;
	this.hj = b ? a ? sa(a) : M : a;
	return this;
};
gF[z].Ze = function () {
	if (this.QF) {
		throw Error("Tried to modify a read-only Uri");
	}
};
gF[z].di = function (a) {
	this.Md = a;
	this.kc && this.kc.di(a);
};
function oF(a, b, c, d, e, f, g, i) {
	var j = new gF(null, i);
	a && j.Yq(a);
	b && j.br(b);
	c && j.Pq(c);
	d && j.Xq(d);
	e && j.Vq(e);
	f && j.mk(f);
	g && j.Uq(g);
	return j;
}
function lF(a) {
	if (jf(a)) {
		return ia(a);
	}
	return null;
}
var pF = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function jF(a, b) {
	var c = null;
	if (jf(a)) {
		c = a;
		pF[zb](c) || (c = encodeURI(a));
		if (c.search(b) >= 0) {
			c = c[A](b, qF);
		}
	}
	return c;
}
function qF(a) {
	var b = a[ed](0);
	return Au + (b >> 4 & 15)[r](16) + (b & 15)[r](16);
}
var rF = null;
function hF() {
	rF || (rF = /^(?:([^:\/?#]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/);
	return rF;
}
var kF = /[#\/\?@]/g, mF = /[\#\?]/g, nF = /#/g;
function iF(a, b, c) {
	this.db = new FC;
	this.cd = b || null;
	this.Md = !!c;
	if (a) {
		var d = a[Vb](xf);
		for (var e = 0; e < d[t]; e++) {
			var f = d[e][E]("="), g = null, i = null;
			if (f >= 0) {
				g = d[e][I](0, f);
				i = d[e][I](f + 1);
			} else {
				g = d[e];
			}
			g = RA(g);
			g = this.gg(g);
			this.add(g, i ? RA(i) : M);
		}
	}
}
iF[z].Ta = 0;
iF[z].Ab = function () {
	return this.Ta;
};
iF[z].add = function (a, b) {
	this.Cj();
	a = this.gg(a);
	if (this.Mc(a)) {
		var c = this.db.J(a);
		ff(c) ? c[q](b) : this.db.aa(a, [c, b]);
	} else {
		this.db.aa(a, b);
	}
	this.Ta++;
	return this;
};
ab(iF[z], function (a) {
	a = this.gg(a);
	if (this.db.Mc(a)) {
		this.Cj();
		var b = this.db.J(a);
		if (ff(b)) {
			this.Ta -= b[t];
		} else {
			this.Ta--;
		}
		return this.db[Uc](a);
	}
	return false;
});
kb(iF[z], function () {
	this.Cj();
	this.db[od]();
	this.Ta = 0;
});
iF[z].Mc = function (a) {
	a = this.gg(a);
	return this.db.Mc(a);
};
iF[z].Zn = function (a) {
	var b = this.kd();
	return xi(b, a);
};
iF[z].hg = function () {
	var a = this.db.kd(), b = this.db.hg(), c = [];
	for (var d = 0; d < b[t]; d++) {
		var e = a[d];
		if (ff(e)) {
			for (var f = 0; f < e[t]; f++) {
				c[q](b[d]);
			}
		} else {
			c[q](b[d]);
		}
	}
	return c;
};
iF[z].kd = function (a) {
	var b;
	if (a) {
		var c = this.gg(a);
		if (this.Mc(c)) {
			var d = this.db.J(c);
			if (ff(d)) {
				return d;
			} else {
				b = [];
				b[q](d);
			}
		} else {
			b = [];
		}
	} else {
		var e = this.db.kd();
		b = [];
		for (var f = 0; f < e[t]; f++) {
			var g = e[f];
			ff(g) ? GA(b, g) : b[q](g);
		}
	}
	return b;
};
iF[z].aa = function (a, b) {
	this.Cj();
	a = this.gg(a);
	if (this.Mc(a)) {
		var c = this.db.J(a);
		if (ff(c)) {
			this.Ta -= c[t];
		} else {
			this.Ta--;
		}
	}
	this.db.aa(a, b);
	this.Ta++;
	return this;
};
iF[z].J = function (a, b) {
	a = this.gg(a);
	if (this.Mc(a)) {
		var c = this.db.J(a);
		return ff(c) ? c[0] : c;
	} else {
		return b;
	}
};
xa(iF[z], function () {
	if (this.Sb) {
		return this.Sb;
	}
	var a = [], b = 0, c = this.db.hg();
	for (var d = 0; d < c[t]; d++) {
		var e = c[d], f = SA(e), g = this.db.J(e);
		if (ff(g)) {
			for (var i = 0; i < g[t]; i++) {
				b > 0 && a[q](xf);
				a[q](f, "=", SA(g[i]));
				b++;
			}
		} else {
			b > 0 && a[q](xf);
			a[q](f, "=", SA(g));
			b++;
		}
	}
	return this.Sb = a[K](M);
});
iF[z].Cj = function () {
	delete this.Sb;
	this.cd && delete this.cd.Sb;
};
iF[z].ab = function () {
	var a = new iF;
	a.db = this.db.ab();
	return a;
};
iF[z].gg = function (a) {
	var b = ma(a);
	if (this.Md) {
		b = b[Kd]();
	}
	return b;
};
iF[z].di = function (a) {
	if (a && !this.Md) {
		this.Cj();
		DC(this.db, function (b, c) {
			var d = c[Kd]();
			if (c != d) {
				this[Uc](c);
				this.add(d, b);
			}
		}, this);
	}
	this.Md = a;
};
var sF = "complete";
function tF() {
	if (!$f) {
		return;
	}
	this.Sf = {};
	this.an = {};
	this.Mm = [];
}
tF[z].kb = ME("goog.net.xhrMonitor");
tF[z].Pw = function (a) {
	if (!$f) {
		return;
	}
	var b = jf(a) ? a : lf(a) ? mf(a) : M;
	this.kb.Do("Pushing context: " + a + " (" + b + Xj);
	this.Mm[q](b);
};
tF[z].Fw = function () {
	if (!$f) {
		return;
	}
	var a = this.Mm.pop();
	this.kb.Do("Popping context: " + a);
	this.cL(a);
};
tF[z].uG = function (a) {
	if (!$f) {
		return;
	}
	var b = mf(a);
	this.kb.Qc("Opening XHR : " + b);
	for (var c = 0; c < this.Mm[t]; c++) {
		var d = this.Mm[c];
		this.Ok(this.Sf, d, b);
		this.Ok(this.an, b, d);
	}
};
tF[z].tG = function (a) {
	if (!$f) {
		return;
	}
	var b = mf(a);
	this.kb.Qc("Closing XHR : " + b);
	delete this.an[b];
	for (var c in this.Sf) {
		yi(this.Sf[c], b);
		this.Sf[c][t] == 0 && delete this.Sf[c];
	}
};
tF[z].cL = function (a) {
	var b = this.an[a], c = this.Sf[a];
	if (b && c) {
		this.kb.Do("Updating dependent contexts");
		vi(b, function (d) {
			vi(c, function (e) {
				this.Ok(this.Sf, d, e);
				this.Ok(this.an, e, d);
			}, this);
		}, this);
	}
};
tF[z].Ok = function (a, b, c) {
	a[b] || (a[b] = []);
	xi(a[b], c) || a[b][q](c);
};
var uF = new tF;
function vF() {
	pj[G](this);
	this.headers = new FC;
}
N(vF, pj);
vF[z].kb = ME("goog.net.XhrIo");
var wF = "Content-Type", xF = "application/x-www-form-urlencoded;charset=utf-8";
vF[z].Jf = false;
vF[z].sa = null;
vF[z].$m = null;
vF[z].Av = M;
vF[z].wv = M;
vF[z].Gj = 0;
vF[z].Hj = M;
vF[z].wo = false;
vF[z].Il = false;
vF[z].op = false;
vF[z].lg = false;
vF[z].wk = 0;
vF[z].Pg = null;
vF[z].OJ = function (a) {
	this.wk = h.max(0, a);
};
vF[z].send = function (a, b, c, d) {
	if (this.Jf) {
		throw Error("[goog.net.XhrIo] Object is active with another request");
	}
	var e = b || "GET";
	this.Av = a;
	this.Hj = M;
	this.Gj = 0;
	this.wv = e;
	this.wo = false;
	this.Jf = true;
	this.sa = new RE;
	this.$m = UE || (UE = TE());
	uF.uG(this.sa);
	ya(this.sa, rf(this.iw, this));
	try {
		this.kb.Qc(this.oe("Opening Xhr"));
		this.op = true;
		this.sa[yb](e, a, true);
		this.op = false;
	}
	catch (f) {
		this.kb.Qc(this.oe("Error opening Xhr: " + f[Zy]));
		this.Gt(5, f);
		return;
	}
	var g = c ? ma(c) : M, i = this.headers.ab();
	d && DC(d, function (j, m) {
		i.aa(m, j);
	});
	e == "POST" && !i.Mc(wF) && i.aa(wF, xF);
	DC(i, function (j, m) {
		this.sa.setRequestHeader(m, j);
	}, this);
	try {
		if (this.Pg) {
			eF[Py](this.Pg);
			this.Pg = null;
		}
		if (this.wk > 0) {
			this.kb.Qc(this.oe("Will abort after " + this.wk + "ms if incomplete"));
			this.Pg = eF[Lb](rf(this.xK, this), this.wk);
		}
		this.kb.Qc(this.oe("Sending request"));
		this.Il = true;
		this.sa[Pc](g);
		this.Il = false;
	}
	catch (f) {
		this.kb.Qc(this.oe("Send error: " + f[Zy]));
		this.Gt(5, f);
	}
};
vF[z].dispatchEvent = function (a) {
	if (this.sa) {
		uF.Pw(this.sa);
		try {
			vF.ba[xc][G](this, a);
		}
		finally {
			uF.Fw();
		}
	} else {
		vF.ba[xc][G](this, a);
	}
};
vF[z].xK = function () {
	if (!(typeof Se == "undefined")) {
		if (this.sa) {
			this.Hj = "Timed out after " + this.wk + "ms, aborting";
			this.Gj = 8;
			this.kb.Qc(this.oe(this.Hj));
			this[xc]("timeout");
			this[Ty](8);
		}
	}
};
vF[z].Gt = function (a, b) {
	this.Jf = false;
	if (this.sa) {
		this.lg = true;
		this.sa[Ty]();
		this.lg = false;
	}
	this.Hj = b;
	this.Gj = a;
	this.tt();
	this.Tk();
};
vF[z].tt = function () {
	if (!this.wo) {
		this.wo = true;
		this[xc](sF);
		this[xc]("error");
	}
};
vF[z].abort = function (a) {
	if (this.sa) {
		this.kb.Qc(this.oe("Aborting"));
		this.Jf = false;
		this.lg = true;
		this.sa[Ty]();
		this.lg = false;
		this.Gj = a || 7;
		this[xc](sF);
		this[xc]("abort");
		this.Tk();
	}
};
vF[z].S = function () {
	if (this.sa) {
		this.Jf = false;
		this.lg = true;
		this.sa[Ty]();
		this.lg = false;
		this.Tk(true);
	}
	vF.ba.S[G](this);
};
vF[z].iw = function () {
	!this.op && !this.Il && !this.lg ? this.lq() : this.hw();
};
vF[z].lq = function () {
	this.hw();
};
vF[z].hw = function () {
	if (!this.Jf) {
		return;
	}
	if (!(typeof Se == "undefined")) {
		if (this.$m[1] && this.oj() == 4 && this.zh() == 2) {
			this.kb.Qc(this.oe("Local request error detected and ignored"));
		} else {
			if (this.Il && this.oj() == 4) {
				fF(this.iw, 0, this);
				return;
			}
			this[xc]("readystatechange");
			if (this.Oa()) {
				this.kb.Qc(this.oe("Request complete"));
				this.Jf = false;
				if (this.sv()) {
					this[xc](sF);
					this[xc]("success");
				} else {
					this.Gj = 6;
					this.Hj = this.hE() + " [" + this.zh() + "]";
					this.tt();
				}
				this.Tk();
			}
		}
	}
};
vF[z].Tk = function (a) {
	if (this.sa) {
		ya(this.sa, this.$m[0] ? Ye : null);
		var b = this.sa;
		this.sa = null;
		this.$m = null;
		if (this.Pg) {
			eF[Py](this.Pg);
			this.Pg = null;
		}
		if (!a) {
			uF.Pw(b);
			this[xc]("ready");
			uF.Fw();
		}
		uF.tG(b);
	}
};
vF[z].Oa = function () {
	return this.oj() == 4;
};
vF[z].sv = function () {
	switch (this.zh()) {
	  case 0:
	  case 200:
	  case 204:
	  case 304:
		return true;
	  default:
		return false;
	}
};
vF[z].oj = function () {
	return this.sa ? this.sa[Rc] : 0;
};
vF[z].zh = function () {
	try {
		return this.oj() > 2 ? this.sa[Nc] : -1;
	}
	catch (a) {
		this.kb.Xm("Can not get status: " + a[Zy]);
		return -1;
	}
};
vF[z].hE = function () {
	try {
		return this.oj() > 2 ? this.sa.statusText : M;
	}
	catch (a) {
		this.kb.Qc("Can not get status: " + a[Zy]);
		return M;
	}
};
vF[z].su = function () {
	return this.sa ? this.sa[Xb] : M;
};
vF[z].getResponseHeader = function (a) {
	return this.sa && this.Oa() ? this.sa[Ec](a) : undefined;
};
vF[z].oe = function (a) {
	return a + " [" + this.wv + qg + this.Av + qg + this.zh() + "]";
};
function yF() {
	if (zF != undefined) {
		return zF;
	}
	var a = Xe("google.gears.factory");
	if (a) {
		return zF = a;
	}
	try {
		var b = Xe("GearsFactory");
		return zF = new b;
	}
	catch (c) {
	}
	try {
		var a = new ActiveXObject("Gears.Factory");
		a.getBuildInfo()[E]("ie_mobile") != -1 && a.privateSetGlobalObject(Te);
		return zF = a;
	}
	catch (c) {
	}
	var d = Xe("window");
	if (d && d.navigator.mimeTypes["application/x-googlegears"]) {
		try {
			var e = d[Ob], a = e[$b]("gears-factory");
			if (!a) {
				a = e[Xc]("object");
				l(a[F], U);
				Fa(a, Je);
				ob(a, Je);
				hb(a, "application/x-googlegears");
				a.id = "gears-factory";
				e[Pd][o](a);
			}
			return zF = a;
		}
		catch (c) {
		}
	}
	return zF = null;
}
var zF = undefined;
function AF(a, b, c, d) {
	this.pp(a, b, c, d);
}
AF[z].pp = function (a, b, c, d) {
	var e = null;
	try {
		e = a || yF();
	}
	catch (f) {
	}
	var g = e && e[cz] || null;
	this.dj = e;
	this.fd = b || g && e[Ny]("beta.database");
	this.lG = c || g && e[Ny]("beta.localserver");
	this.Lc = d || g && e[Ny]("beta.workerpool");
};
AF[z].Ih = function () {
	this.dj || this.pp();
	return !!this.dj;
};
AF[z].hasPermission = function () {
	return this.Ih() && this.dj[cz];
};
AF[z].up = function () {
	return this.canServeLocally("render");
};
AF[z].getPermission = function (a, b, c) {
	if (this.Ih()) {
		if (this.dj.getPermission(a, b, c)) {
			this.pp(this.dj);
			return true;
		}
	}
	return false;
};
AF[z].canServeLocally = function (a) {
	return this[cz]() && this.lG.canServeLocally(a);
};

