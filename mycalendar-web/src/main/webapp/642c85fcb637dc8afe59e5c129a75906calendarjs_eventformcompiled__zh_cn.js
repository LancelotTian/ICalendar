
var OQ = _allowInviteYourselfFeature;
function PQ(a, b) {
	return a.title = b;
}
var QQ = "specified", RQ = "parent", SQ = "cssText", TQ = "getAttribute", UQ = "implementation", VQ = "action", WQ = "attributes";
function XQ() {
}
function YQ(a, b) {
	if (1 != a[J]) {
		throw new Error("Not a reminder sub!");
	}
	return a[nd] + Ke + a.mc + (We(b) ? Ke + b : ":1");
}
function ZQ(a) {
	return ht(a, an(a)) + qg + cn(a);
}
function $Q(a) {
	var b = Zm() == "YMD" ? ft : Ze;
	return et(a.l ? b(a.l) : "??", a.z ? b(a.z) : "??", !ua(a.B) ? a.B : "????");
}
function aR(a) {
	if (ua(a)) {
		return "?";
	}
	return a[r]();
}
function bR(a, b) {
	return (Ym() || ua(a.F) ? Le : b ? 0 === a.D ? Pe : Oe : Me)(a.F, a.D);
}
function cR(a) {
	var b = a[t];
	return b > 2 ? a[Kb](0, b - 1)[K]("\u3001") + ("zh_TW" == He ? "\u8207" : "\u548c") + a[b - 1] : a[K]("\u3001");
}
function dR(a) {
	return Vh(a.B, a.z, a.l, a.F, a.D, a.L);
}
function eR(a, b) {
	return a.mc - b.mc || a[nd] - b[nd];
}
function fR(a, b) {
	var c = a[F];
	if ("opacity" in c) {
		c.opacity = b;
	} else {
		if ("MozOpacity" in c) {
			c.MozOpacity = b;
		} else {
			if ("filter" in c) {
				wa(c, "alpha(opacity=" + b * 100 + Xj);
			}
		}
	}
}
function gR(a, b, c) {
	var d;
	if (b instanceof $j) {
		d = b[Cd];
		b = b[Eb];
	} else {
		if (c == undefined) {
			throw Error("missing height argument");
		}
		d = c;
	}
	Fa(a[F], typeof b == bf ? h[Hb](b) + X : b);
	ob(a[F], typeof d == bf ? h[Hb](d) + X : d);
}
function hR(a, b, c) {
	if (!wf(a) || !b || !c) {
		return undefined;
	}
	var d = ji(b[r]()), e = ji(c[r]()), f, g, i;
	if (d.Oa()) {
		if (!e.Oa()) {
			if ((g = e.Fa()).Oa() && g.H().o() > d.o()) {
				c = d instanceof ei ? g.K() : g.H();
			} else {
				i = Fh(d);
				if (d instanceof ei) {
					i.D += Tr;
					c = i.K();
				} else {
					++i.l;
					c = i.H();
				}
			}
		}
	} else {
		if ((f = d.Fa()).Oa()) {
			b = f.H();
			g = e.Fa();
			if (g.Oa()) {
				c = g.H();
				i = Fh(c);
			} else {
				i = Fh(b);
			}
			++i.l;
			c = i.H();
		} else {
			return undefined;
		}
	}
	return {start:b[r](), A:c[r]()};
}
function iR() {
	fy = false;
}
function jR(a) {
	var b = vt(a), c = [];
	for (var d = 0; d < b[t]; ++d) {
		c[q](YQ(b[d]));
	}
	return c;
}
function kR(a, b, c, d, e, f, g, i, j) {
	var m = [];
	c && m[q](Rz, c);
	if (d && !/[^\?T]/[zb](d[r]())) {
		d = null;
	}
	if (e && !/[^\?T]/[zb](e[r]())) {
		e = null;
	}
	if (d) {
		if (hf == typeof d) {
			d = ji(d);
		}
		if (!e) {
			e = dR(d);
			if (d instanceof di) {
				e.l += 1;
				e = e.Fa();
			} else {
				e.kM += Tr;
				e = e.bc();
			}
		}
		m[q](Fg, d[r]() + "/" + e[r]());
	}
	a && m[q]("text", a);
	if (f && f[t] > 0) {
		for (var n = 0; n < f[t]; ++n) {
			var p = Um(f[n]);
			if (p) {
				f[n] = p;
				m[q]("add", p);
			}
		}
	}
	b && m[q](Tz, b);
	g && m[q](Gg, "quickAddQuery:" + g);
	m[q](Gg, lh + Ke + i);
	j && m[q](Sz, j);
	return m;
}
function lR() {
	var a = Uk().J(Wg, Je), b = ka(a, 10);
	return b >= 0 && b <= 6 ? b : null;
}
function mR(a) {
	R.W.Od("ef_delete");
	pn(function () {
		R.fn(a);
	});
}
function nR(a) {
	var b = a[H], c = a.A, d = c instanceof Jh || c instanceof ei;
	if (!d) {
		if (c.Oa()) {
			if (!b.Oa() || !c.T(b)) {
				c = new Fh(c);
				c.l -= 1;
				c = c.Fa();
			}
		} else {
			if (!ua(c.l)) {
				var e = c.B, f = c.z;
				if (c.l != 1) {
					c = new di(e, f, c.l - 1);
				} else {
					if (!ua(f) && f != 3) {
						if (--f == 0) {
							f = 12;
							ua(e) || --e;
						}
						c = new di(e, f, uh(e || 0, f));
					} else {
						c = new di(NaN, NaN, NaN);
					}
				}
			}
		}
	}
	if (b.Oa() && c.Oa()) {
		return d ? b.H().T(c.H()) ? ht(b, an(b)) + qg + Ge(cn(b), cn(c)) : te(ZQ(b), ZQ(c)) : it(b, c);
	}
	return d ? te($Q(b) + qg + bR(b), $Q(c) + qg + bR(c)) : te($Q(b), $Q(c));
}
function oR(a, b) {
	var c = a.l, d = a.F, e = a.D;
	if (b) {
		if (d && e && !(e % 15)) {
			d += e / 60;
			e = 0;
		}
		if (c && d && !e && !(d % 6)) {
			c += d / 24;
			d = 0;
		}
	}
	var f, g, i;
	if (0 !== c) {
		f = 1 !== c ? aR(c) + " \u5929" : "1 \u5929";
	}
	if (0 !== d) {
		g = 1 !== d ? aR(d) + " \u5c0f\u65f6" : "1 \u5c0f\u65f6";
	}
	if (0 !== e) {
		i = 1 !== e ? aR(e) + " \u5206\u949f" : "1 \u5206\u949f";
	}
	if (c && e && !d) {
		g = aR(d) + " \u5c0f\u65f6";
	}
	var j = [];
	f && j[q](f);
	g && j[q](g);
	i && j[q](i);
	return j[t] ? j[K](Wj) : "0 \u5206\u949f";
}
function pR(a, b) {
	if (b == a.src) {
		a.C &= -8;
		a.C |= b == a.Vb ? 5 : 4;
	}
	delete a.Ha()[b];
}
function qR(a, b, c, d, e) {
	var f = Mm(a, b);
	Nm(f, c, "text/xml", d, e);
}
function rR(a, b) {
	if (!ag) {
		return false;
	}
	if ("keyup" == a[J]) {
		b.Vl = 0;
		return true;
	} else {
		if ("keydown" == a[J]) {
			var c = Mz(a);
			if (b.Vl == c) {
				return true;
			}
			b.Vl = c;
		}
	}
	return false;
}
function sR(a) {
	var b = window[yb]();
	b[Ob][Dc]("<pre>" + P(a) + "</pre>");
	b[Ob][zc]();
}
function tR(a) {
	var b = [];
	for (var c = a[ad]; c; c = c[Ad]) {
		if (c[Nb] == 3 || c[Nb] == 4) {
			b[q](c[Jd]);
		}
	}
	return b[K](M);
}
function uR(a) {
	var b, c, d = a[Fc];
	if (d && d[Oc]) {
		var e = d[Oc](a);
		b = e.x;
		c = e.y;
		for (var f = a; f; f = f[dc]) {
			b -= f[dd];
			c -= f[vb];
		}
	} else {
		b = a[cc] - a[Sy];
		c = a[Fd] - a[cd];
		for (var f = a; f; f = f[dc]) {
			b += f[uc] - f[dd];
			c += f[Bd] - f[vb];
		}
	}
	return new nl(b, c, a[Sy], a[cd], window);
}
function vR(a) {
	var b = [];
	for (var c = 0; c < a[t]; ++c) {
		b[q](a[c] + "\u6708");
	}
	return cR(b);
}
function wR(a, b) {
	if (1 == a[t]) {
		return kl[a[0]];
	}
	switch (_MSG_DayOfWeekMask(a)) {
	  case 127:
		return b ? "\u6bcf\u5929" : "\u5929";
	  case 62:
		return b ? "\u5de5\u4f5c\u65e5" : "\u5de5\u4f5c\u65e5";
	}
	var c = [];
	for (var d = 0; d < a[t]; ++d) {
		c[q](kl[a[d]]);
	}
	return cR(c);
}
function xR(a) {
	var b = _MSG_DayOfWeekMask(a);
	return b === 127 || b === 62;
}
var yR = [, "\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"], zR = [, "\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"];
function AR() {
	return Uk().fc(Vg, Pk(Xk));
}
function BR(a) {
	var b = a || Te || window, c = b[Ob];
	if (ag && !dg("500") && !bg) {
		if (typeof b[Qc] == "undefined") {
			b = window;
		}
		var d = b[Qc], e = b[Ob][Pd][Zc];
		if (b == b.top) {
			if (e < d) {
				d -= 15;
			}
		}
		return new $j(b[My], d);
	}
	var f = Pz(c).rD() == "CSS1Compat" && (!Zf || Zf && dg("9.50")) ? c[Pd] : c[Bc];
	return new $j(f[Sy], f[cd]);
}
function CR(a) {
	var b = Jj();
	b && a[q]("droi", Ch(b[0]) + "T000000/" + Ch(b[1]) + "T000000");
}
function DR(a) {
	var b = Kj();
	if (b) {
		for (var c = 0; c < b[t]; ++c) {
			a[q]("lef", b[c]);
		}
	}
}
function ER(a, b, c) {
	var d = Gj.ta(a);
	if (d) {
		d[b] = c;
		Gj.ag();
	}
}
function FR(a, b, c) {
	if (typeof b == hf) {
		b = hi(b);
	}
	if (typeof c == hf) {
		c = hi(c);
	}
	var d = Gj.ta(a);
	if (d) {
		var e = d.td, f = d.Cd;
		bb(d, b.K());
		d.td = b.Lb();
		d.A = c.K();
		d.Cd = vj(b, c).Lb();
		$h(b, d);
		if (e !== d.td || f !== d.Cd) {
			Gj.Cr(d, e, f);
			Gj.In(d);
			Gj.ag();
		}
	}
}
function GR(a, b, c) {
	var d = Gj.ta(a);
	if (d) {
		Sj(d, b, c);
		Gj.fj();
		Gj.ag();
	}
}
function HR(a) {
	return Mj(a.N, a[Gb], a[H], a.A, a.lb, a.src, a.Vb, a.C & -65, a.Ee, a[nc], a.Eb, a.ae, a.$c, a.Sh, a.zM, a.pM);
}
var IR = 4, JR = 3, KR = 2, LR = 1, MR = 0, NR = "goo.allowInviteYourself", OR = "goo.allowInvitesOther", PR = "rgu-invite-yourself", QR = "rst-invite-yourself", RR = "rcomment-invite-yourself", SR = "can-add-google-doc", TR = "docs-attached", UR = "guesttext", VR = "rcomment", WR = "rstart";
function XR(a) {
	var b = df(a);
	if (b == "object" || b == "array") {
		if (a.ab) {
			return a.ab();
		}
		var c = b == "array" ? [] : {};
		for (var d in a) {
			c[d] = XR(a[d]);
		}
		return c;
	}
	return a;
}
function YR(a, b) {
	return "\u5728 " + b + " \u6708\u7684\u7b2c\u4e94\u4e2a\u661f\u671f " + a;
}
function ZR(a, b) {
	return "\u5728 " + b + " \u6708\u7684\u7b2c\u56db\u4e2a\u661f\u671f " + a;
}
function $R(a, b) {
	return "\u5728 " + b + " \u6708\u7684\u7b2c\u4e09\u4e2a\u661f\u671f " + a;
}
function aS(a, b) {
	return "\u5728 " + b + " \u6708\u7684\u7b2c\u4e8c\u4e2a\u661f\u671f " + a;
}
function bS(a, b) {
	return "\u5728 " + b + " \u6708\u7684\u7b2c\u4e00\u4e2a\u661f\u671f " + a;
}
function cS(a) {
	return "\u5728\u7b2c\u4e94\u4e2a\u661f\u671f " + a;
}
function dS(a) {
	return "\u5728\u7b2c\u56db\u4e2a\u661f\u671f " + a;
}
function eS(a) {
	return "\u5728\u7b2c\u4e09\u4e2a\u661f\u671f " + a;
}
function fS(a) {
	return "\u5728\u7b2c\u4e8c\u4e2a\u661f\u671f " + a;
}
function gS(a) {
	return "\u5728\u7b2c\u4e00\u4e2a\u661f\u671f " + a;
}
var hS = "\u975e\u5e38\u62b1\u6b49\uff0c\u65e0\u6cd5\u4fee\u6539\u8be5\u6d3b\u52a8\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", iS;
iS || (iS = (function () {
	function a(m) {
		return m < 10 ? Je + m : m;
	}
	Date[z].yk = function () {
		return this[Mc]() + to + a(this[Kc]() + 1) + to + a(this[Zb]()) + Qh + a(this.getUTCHours()) + Ke + a(this.getUTCMinutes()) + Ke + a(this.getUTCSeconds()) + "Z";
	};
	ma[z].yk = oa[z].yk = ca[z].yk = function () {
		return this.valueOf();
	};
	var b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, d, e, f = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", "\"":"\\\"", "\\":"\\\\"}, g;
	function i(m) {
		c.lastIndex = 0;
		return c[zb](m) ? Af + m[A](c, function (n) {
			var p = f[n];
			if (typeof p === hf) {
				return p;
			}
			return "\\u" + ("0000" + (+n[ed](0))[r](16))[Kb](-4);
		}) + Af : Af + m + Af;
	}
	function j(m, n) {
		var p, s, u, v, w = d, x, y = n[m];
		if (y && typeof y === "object" && typeof y.yk === cf) {
			y = y.yk(m);
		}
		if (typeof g === cf) {
			y = g[G](n, m, y);
		}
		switch (typeof y) {
		  case hf:
			return i(y);
		  case bf:
			return na(y) ? ma(y) : "null";
		  case "boolean":
		  case "null":
			return ma(y);
		  case "object":
			if (!y) {
				return "null";
			}
			d += e;
			x = [];
			if (typeof y[t] === bf && !y.propertyIsEnumerable("length")) {
				v = y[t];
				for (p = 0; p < v; p += 1) {
					x[p] = j(p, y) || "null";
				}
				u = x[t] === 0 ? "[]" : d ? "[\n" + d + x[K](",\n" + d) + "\n" + w + "]" : "[" + x[K](",") + "]";
				d = w;
				return u;
			}
			if (g && typeof g === "object") {
				v = g[t];
				for (p = 0; p < v; p += 1) {
					s = g[p];
					if (typeof s === hf) {
						u = j(s, y);
						if (u) {
							x[q](i(s) + (d ? ": " : Ke) + u);
						}
					}
				}
			} else {
				for (s in y) {
					if (ra[wc][G](y, s)) {
						u = j(s, y);
						if (u) {
							x[q](i(s) + (d ? ": " : Ke) + u);
						}
					}
				}
			}
			u = x[t] === 0 ? "{}" : d ? "{\n" + d + x[K](",\n" + d) + "\n" + w + "}" : "{" + x[K](",") + "}";
			d = w;
			return u;
		}
	}
	return {uK:function (m, n, p) {
		var s = n, u = p, v;
		d = M;
		e = M;
		if (typeof u === bf) {
			for (v = 0; v < u; v += 1) {
				e += qg;
			}
		} else {
			if (typeof u === hf) {
				e = u;
			}
		}
		g = s;
		if (s && typeof s !== cf && (typeof s !== "object" || typeof s[t] !== bf)) {
			throw new Error("JSON.stringify");
		}
		return j(M, {"":m});
	}, parse:function (m, n) {
		var p = n, s;
		function u(v, w) {
			var x, y, C = v[w];
			if (C && typeof C === "object") {
				for (x in C) {
					if (ra[wc][G](C, x)) {
						y = u(C, x);
						if (y !== undefined) {
							C[x] = y;
						} else {
							delete C[x];
						}
					}
				}
			}
			return p[G](v, w, C);
		}
		b.lastIndex = 0;
		if (b[zb](m)) {
			m = m[A](b, function (v) {
				return "\\u" + ("0000" + (+v[ed](0))[r](16))[Kb](-4);
			});
		}
		if (/^[\],:{}\s]*$/[zb](m[A](/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, Sm)[A](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")[A](/(?:^|:|,)(?:\s*\[)+/g, M))) {
			s = eval(Vj + m + Xj);
			return typeof p === cf ? u({"":s}, M) : s;
		}
		throw new Error("JSON.parse");
	}};
})());
iS.parse = (function () {
	var a = iS[pz];
	return function (b, c) {
		try {
			return a(b, c);
		}
		catch (d) {
			return false;
		}
	};
})();
function jS(a) {
	var b = document[Xc]("DIV");
	k(b, "<iframe onload='this.pool_locked=false'></iframe>");
	var c = b[Hd]("IFRAME")[0];
	ub(c[F], am);
	Fa(c[F], ob(c[F], "0px"));
	c[F].border = "0px";
	Ba(c[F], $l);
	c.Ew = a;
	this.Gc[this.Gc[t]] = c;
	b[Gc](c);
	b = null;
	return c;
}
function kS(a) {
	if (!a[Lc](/^http[s]?:\/\//)) {
		return;
	}
	var b = this;
	window[Lb](function () {
		var c = null;
		for (var d = b.Gc[t] - 1; d >= 0; d--) {
			var e = b.Gc[d];
			if (e && !e.Ew) {
				e[ud][Gc](e);
				if (window.Oy) {
					e = null;
					b.Gc[d] = null;
					b.Gc[Dd](d, 1);
				} else {
					e.Ew = true;
					c = e;
					break;
				}
			}
		}
		c = c ? c : b.MB(true);
		c.src = a;
		document[Bc][o](c);
	}, 0);
}
function lS() {
	for (var a = 0; a < this.Gc[t]; a++) {
		this.Gc[a].onload = null;
		this.Gc[a] = null;
	}
	za(this.Gc, 0);
	this.Gc = [];
}
function mS() {
	for (var a = 0; a < this.Gc[t]; a++) {
		var b = this.Gc[a];
		if (b) {
			b[ud][Gc](b);
			b = null;
		}
	}
}
function nS() {
	this.Gc = [];
	this.MB = jS;
	this.wF = kS;
	kb(this, lS);
	this.ia = mS;
}
function oS(a, b) {
	_IFPC.ik[a] = b;
}
function pS(a) {
	delete _IFPC.ik[a];
}
function qS(a, b, c, d, e, f, g) {
	if (_IFPC.Wf) {
		return;
	}
	c = c[Kb](0);
	c[Gd](_IFPC.gI(e));
	c[Gd](f);
	c[Gd](b);
	c[Gd](a);
	var i = 4095 - d[t];
	i = ka(i / 3, 10);
	if (typeof g == "undefined") {
		g = true;
	}
	var j = _IFPC.Bt(c), m = ka(j[t] / i, 10);
	if (j[t] % i > 0) {
		m += 1;
	}
	for (var n = 0; n < m; n++) {
		var p = j[Qd](n * i, i);
		_IFPC.mp.wF(d + "#" + _IFPC.Bt([a, _IFPC.Os, m, n, p, g]));
	}
	_IFPC.Os++;
}
function rS() {
	_IFPC.ik = {};
	_IFPC.Zg = {};
	_IFPC.mp[od]();
}
function sS() {
	if (!_IFPC.Wf) {
		_IFPC.Wf = true;
		_IFPC.mp.ia();
		_IFPC[od]();
	}
}
function tS(a) {
	var b = _IFPC.jo(a)[0], c = null;
	try {
		c = window[RQ][Ld][b];
	}
	catch (d) {
	}
	try {
		if (!c && window[RQ][RQ][Ld][b] != window[RQ]) {
			window[RQ][RQ][Ld][b][Lb](function () {
			}, 0);
			c = window[RQ][RQ][Ld][b];
		}
	}
	catch (d) {
	}
	if (!c) {
		c = window[RQ][RQ];
	}
	if (!c || c.$z == undefined) {
		c = null;
		return;
	}
	function e() {
		c.$z.Hu(a);
	}
	window.Oy ? e() : c[Lb](e, 0);
}
function uS(a) {
	var a = _IFPC.jo(a), b = a[Ab](), c = a[Ab](), d = a[Ab](), e = a[Ab](), f = a[Ab](), g = a[Ab](), i = b + Jl + c;
	_IFPC.tg[i] || (_IFPC.tg[i] = []);
	_IFPC.tg[i][q]([e, f]);
	if (_IFPC.tg[i][t] == d) {
		_IFPC.tg[i][gd](function (w, x) {
			return ka(w[0], 10) - ka(x[0], 10);
		});
		f = M;
		for (var j = 0; j < d; j++) {
			f += _IFPC.tg[i][j][1];
		}
		_IFPC.tg[i] = null;
		var m = _IFPC.jo(f), b = m[Ab](), n = m[Ab](), p = m[Ab](), s = m[Ab](), u = _IFPC.dE(n);
		if (u) {
			var v = u[md](null, m);
			if (_IFPC.JF(s)) {
				v[Gd](s);
				_IFPC[G](b, _IFPC.Sr, v, p, null, M);
			}
		} else {
			if (g) {
				throw new Error("Service " + n + " not registered.");
			}
		}
	}
}
function vS(a) {
	return _IFPC.ik[wc](a) ? _IFPC.ik[a] : null;
}
function wS(a) {
	var b = M;
	if (a && typeof a == cf) {
		b = _IFPC.TD();
		_IFPC.Zg[b] = a;
	}
	return b;
}
function xS(a) {
	if (_IFPC.Zg[wc](a)) {
		_IFPC.Zg[a] = null;
	}
}
function yS(a) {
	if (a && _IFPC.Zg[wc](a)) {
		return _IFPC.Zg[a];
	}
	return null;
}
function zS() {
	return _IFPC.Rr + _IFPC.YA++;
}
function AS(a) {
	return (a + M)[E](_IFPC.Rr) == 0;
}
function BS(a) {
	var b = a[Vb](xf);
	for (var c = 0; c < b[t]; c++) {
		var d = sa(b[c]);
		try {
			d = iS[pz](d);
		}
		catch (e) {
		}
		b[c] = d;
	}
	return b;
}
function CS(a) {
	var b = [];
	for (var c = 0; c < a[t]; c++) {
		var d = iS.uK(a[c]);
		b[q](ia(d));
	}
	return b[K](xf);
}
function DS(a) {
	var b = _IFPC.oD(a);
	if (b) {
		var c = [];
		for (var d = 1; d < arguments[t]; d++) {
			c[c[t]] = arguments[d];
		}
		b[md](null, c);
		_IFPC.$K(a);
	} else {
		throw new Error("Invalid callbackId");
	}
}
var _IFPC = {Uw:oS, TM:pS, call:qS, clear:rS, ia:sS, yM:tS, uM:tS, Hu:uS, Rr:"cbid", Sr:"ifpc_callback", mp:new nS, tg:{}, ik:{}, Zg:{}, YA:0, Os:0, Wf:false, dE:vS, gI:wS, $K:xS, oD:yS, TD:zS, JF:AS, jo:BS, Bt:CS, $A:DS};
_IFPC.Uw(_IFPC.Sr, _IFPC.$A);
function ES(a) {
	pj[G](this);
	this.I = a;
	var b = Q ? "focusout" : "blur";
	this.dG = $i(this.I, Q ? "focusin" : "focus", this, !Q);
	this.eG = $i(this.I, b, this, !Q);
}
N(ES, pj);
fb(ES[z], function (a) {
	var b = new Ii(a.yb);
	hb(b, a[J] == "focusin" || a[J] == "focus" ? "focusin" : "focusout");
	try {
		this[xc](b);
	}
	finally {
		b.ia();
	}
});
ES[z].S = function () {
	ES.ba.S[G](this);
	dj(this.dG);
	dj(this.eG);
	delete this.I;
};
function FS(a, b, c) {
	Ya(this, a);
	this.ig = b || a;
	this.Jp = c || new OD;
	this.va = a[Fc] || a[Ob];
	this.UM = Pz(this.va).xl();
	$i(this.ig, ij, this.Jc, false, this);
}
N(FS, pj);
Za(FS[z], 0);
$a(FS[z], 0);
FS[z].iy = 0;
FS[z].jy = 0;
FS[z].Ti = 0;
FS[z].Ui = 0;
FS[z].Yf = true;
FS[z].Xf = false;
FS[z].Xu = 0;
FS[z].MG = 0;
FS[z].S = function () {
	FS.ba.S[G](this);
	bj(this.ig, ij, this.Jc, false, this);
	bj(this.va, yA, this.$p, false, this);
	bj(this.va, zA, this.uo, false, this);
	delete this[Hc];
	delete this.ig;
};
FS[z].Jc = function (a) {
	if (this.Yf && !this.Xf) {
		if (this.Xu == 0) {
			this.ev(a);
			this.Xf && a[oc]();
		}
		$i(this.va, yA, this.$p, false, this);
		$i(this.va, zA, this.uo, false, this);
		Za(this, this.iy = a[Ic]);
		$a(this, this.jy = a[Jc]);
		this.Ti = this[Hc][uc];
		this.Ui = this[Hc][Bd];
		this.nq = Pz(this.va).ql();
		this.MG = tf();
	}
};
FS[z].ev = function (a) {
	if (this[xc](new GS("start", this, a[Nd], a[Od], a)) !== false) {
		this.Xf = true;
	}
};
FS[z].uo = function (a) {
	bj(this.va, yA, this.$p, false, this);
	bj(this.va, zA, this.uo, false, this);
	if (this.Xf) {
		this.Xf = false;
		var b = this.Cv(this.Ti), c = this.Dv(this.Ui);
		this[xc](new GS("end", this, a[Nd], a[Od], a, b, c));
	}
};
FS[z].$p = function (a) {
	if (this.Yf) {
		var b = a[Ic] - this[Ic], c = a[Jc] - this[Jc], d = Pz(this.va).ql();
		b += d.x - this.nq.x;
		c += d.y - this.nq.y;
		this.Ti += b;
		this.Ui += c;
		var e = this.Cv(this.Ti), f = this.Dv(this.Ui);
		Za(this, a[Ic]);
		$a(this, a[Jc]);
		this.nq = d;
		if (!this.Xf) {
			var g = this.iy - this[Ic], i = this.jy - this[Jc];
			g * g + i * i > this.Xu && this.ev(a);
		}
		if (this.Xf) {
			if (this[xc](new GS("beforedrag", this, a[Nd], a[Od], a, e, f)) !== false) {
				this.WB(e, f);
				this[xc](new GS("drag", this, a[Nd], a[Od], a, e, f));
				a[oc]();
			}
		}
	}
};
FS[z].Cv = function (a) {
	var b = this.Jp, c = typeof b[Cc] != "undefined" ? b[Cc] : null, d = typeof b[Eb] != "undefined" ? b[Eb] : 0;
	return h.min(c != null ? c + d : Infinity, h.max(c != null ? c : -Infinity, a));
};
FS[z].Dv = function (a) {
	var b = this.Jp, c = typeof b.top != "undefined" ? b.top : null, d = typeof b[Cd] != "undefined" ? b[Cd] : 0;
	return h.min(c != null ? c + d : Infinity, h.max(c != null ? c : -Infinity, a));
};
FS[z].WB = function (a, b) {
	Wa(this[Hc][F], a + X);
	this[Hc][F].top = b + X;
};
function GS(a, b, c, d, e, f, g) {
	si[G](this, a);
	hb(this, a);
	rb(this, c);
	sb(this, d);
	this.KL = e;
	Wa(this, We(f) ? f : b.Ti);
	this.top = We(g) ? g : b.Ui;
	this.WL = b;
}
N(GS, si);
function HS(a, b, c) {
	XD[G](this, c);
	this.cc = a || "modal-dialog";
	this.Jr = !!b;
	this.Qe = IS;
	this.oa = new al(this);
	this.gj = new ES(this.P.va);
}
N(HS, XD);
HS[z].cc = null;
HS[z].Jr = false;
HS[z].cm = true;
HS[z].yt = true;
HS[z].KA = 0.3;
HS[z].AK = M;
HS[z].$n = M;
HS[z].Qe = null;
HS[z].jh = null;
HS[z].Zd = false;
HS[z].iC = false;
HS[z].hb = null;
HS[z].ib = null;
HS[z].Qm = null;
HS[z].vr = null;
HS[z].sy = null;
HS[z].Pm = null;
HS[z].ah = null;
HS[z].Pf = null;
HS[z].oa = null;
HS[z].Oq = function (a) {
	this.$n = a;
	if (this.ah) {
		k(this.ah, a);
	}
};
HS[z].nl = function () {
	this.ah || this.ub();
	return this.ah;
};
HS[z].IB = function () {
	var a = new FS(this.ma(), this.Qm);
	bk(this.Qm, this.cc + "-title-draggable");
	return a;
};
HS[z].R = function () {
	this.qG();
	this.ci(this.P.R(xk, {className:this.cc, tabIndex:0}, this.Qm = this.P.R(xk, {className:this.cc + "-title", id:this.qe()}, this.vr = this.P.R("span", {className:this.cc + "-title-text"}, this.AK), this.Pm = this.P.R("span", {className:this.cc + "-title-close"})), this.ah = this.P.R(xk, {className:this.cc + "-content"}), this.Pf = this.P.R(xk, {className:this.cc + "-buttons"}), this.ly = this.P.R("span", {tabIndex:0})));
	this.sy = this.Qm.id;
	PE(this.ma(), "dialog");
	QE(this.ma(), "labelledby", this.sy);
	if (this.$n) {
		k(this.ah, this.$n);
	}
	TD(this.ma(), false);
	this.Qe && this.Qe.IA(this.Pf);
};
HS[z].qG = function () {
	if (this.Jr && this.cm && !this.ib) {
		this.ib = this.P.R("iframe", {frameborder:0, style:"border: 0", className:this.cc + "-bg"});
		TD(this.ib, false);
		fR(this.ib, 0);
	} else {
		if ((!this.Jr || !this.cm) && this.ib) {
			nk(this.ib);
			this.ib = null;
		}
	}
	if (this.cm && !this.hb) {
		this.hb = this.P.R(xk, {className:this.cc + "-bg"});
		fR(this.hb, this.KA);
		TD(this.hb, false);
	} else {
		if (!this.cm && this.hb) {
			nk(this.hb);
			this.hb = null;
		}
	}
};
HS[z].ub = function (a) {
	if (this.hc) {
		throw Error(ZD);
	}
	this.ma() || this.R();
	var b = a || this.P.va[Bc];
	this.qI(b);
	HS.ba.ub[G](this, b);
};
HS[z].qI = function (a) {
	this.ib && a[o](this.ib);
	this.hb && a[o](this.hb);
};
HS[z].yc = function () {
	HS.ba.yc[G](this);
	if (this.yt && !this.jh) {
		this.jh = this.IB();
	}
	this.oa.ra(this.Pm, hj, this.lw);
	this.oa.ra(this.gj, "focusin", this.Ph);
	PE(this.ma(), "dialog");
	this.vr.id !== M && QE(this.ma(), "labelledby", this.vr.id);
};
HS[z].ne = function () {
	this.oa.qc(this.Pm, hj, this.lw);
	this.oa.qc(this.gj, "focusin", this.Ph);
	this.Mb() && this.pc(false);
	if (this.jh) {
		this.jh.ia();
		this.jh = null;
	}
	HS.ba.ne[G](this);
};
HS[z].pc = function (a) {
	if (a == this.Zd) {
		return;
	}
	var b = this.P.va, c = Pz(b).xl() || window;
	this.hc || this.ub(b[Bc]);
	if (a) {
		this.hx();
		this.Xh();
		this.oa.ra(this.ma(), jj, this.fw, true);
		this.oa.ra(c, kj, this.jw, true);
	} else {
		this.oa.qc(this.ma(), jj, this.fw, true);
		this.oa.qc(c, kj, this.jw, true);
	}
	this.ib && TD(this.ib, a);
	this.hb && TD(this.hb, a);
	TD(this.ma(), a);
	if (a) {
		$f && this.ma()[Wc]();
		if (this.Qe) {
			var d = this.Qe.lo;
			if (d) {
				var e = this.Pf[Hd]("button");
				for (var f = 0, g; g = e[f]; f++) {
					if (g[td] == d) {
						try {
							g[Wc]();
						}
						catch (i) {
						}
						break;
					}
				}
			}
		}
	}
	this.Zd = a;
	if (a) {
		this.oa.ra(this.Pf, hj, this.bw);
	} else {
		this.oa.qc(this.Pf, hj, this.bw);
		this[xc]("afterhide");
		this.iC && this.ia();
	}
};
HS[z].Mb = function () {
	return this.Zd;
};
HS[z].hx = function () {
	this.ib && TD(this.ib, false);
	this.hb && TD(this.hb, false);
	var a = this.P.va, b = Pz(a).xl() || window, c = BR(b), d = a[Bc].scrollWidth, e = h.max(a[Bc][Zc], c[Cd]);
	if (this.ib) {
		TD(this.ib, true);
		gR(this.ib, d, e);
	}
	if (this.hb) {
		TD(this.hb, true);
		gR(this.hb, d, e);
	}
	if (this.yt) {
		var f = SD(this.ma());
		this.jh.Jp = new OD(0, 0, d - f[Eb], e - f[Cd]);
	}
};
HS[z].Xh = function () {
	var a = Pz(this.P.va).xl() || window, b = this.P.ql(), c = b.x, d = b.y, e = SD(this.ma()), f = BR(a), g = h.max(c + f[Eb] / 2 - e[Eb] / 2, 0), i = h.max(d + f[Cd] / 2 - e[Cd] / 2, 0);
	RD(this.ma(), g, i);
};
HS[z].lw = function () {
	var a = this.Qe, b = a && a.Ji;
	if (b) {
		var c = a.J(b);
		this[xc](new JS(b, c)) && this.pc(false);
	} else {
		this.pc(false);
	}
};
HS[z].S = function () {
	HS.ba.S[G](this);
	if (this.oa) {
		this.oa.ia();
		this.oa = null;
	}
	if (this.gj) {
		this.gj.ia();
		this.gj = null;
	}
	if (this.hb) {
		nk(this.hb);
		this.hb = null;
	}
	if (this.ib) {
		nk(this.ib);
		this.ib = null;
	}
	this.Pm = null;
	this.Pf = null;
	this.ly = null;
};
HS[z].bw = function (a) {
	var b = this.MC(a[Hc]);
	if (b) {
		var c = b[td], d = this.Qe.J(c);
		this[xc](new JS(c, d)) && this.pc(false);
	}
};
HS[z].MC = function (a) {
	var b = a;
	while (b != null && b != this.Pf) {
		if (b[kz] == "BUTTON") {
			return b;
		}
		b = b[ud];
	}
	return null;
};
HS[z].fw = function (a) {
	var b = this.Qe;
	if (a[$c] == 27) {
		if (b && b.Ji) {
			var c = b.J(b.Ji);
			this[xc](new JS(b.Ji, c)) && this.pc(false);
		} else {
			this.pc(false);
		}
		a[lc]();
	} else {
		if (a[$c] == 13) {
			var d = a[Hc] && a[Hc][kz] == "BUTTON" ? a[Hc][td] : b && b.lo;
			d && this[xc](new JS(d, b.J(d))) && this.pc(false);
			a[lc]();
		} else {
			if (a[$c] == 9 && a[qd] && a[Hc] == this.ma()) {
				a[oc]();
				a[lc]();
			}
		}
	}
};
HS[z].jw = function () {
	this.hx();
};
HS[z].Ph = function (a) {
	this.ly == a[Hc] && fF(this.XC, 0, this);
};
HS[z].XC = function () {
	Q && this.P.va[Bc][Wc]();
	this.ma()[Wc]();
};
function JS(a, b) {
	hb(this, "dialogselect");
	this.ic = a;
	this.caption = b;
}
N(JS, si);
var IS;
function KS(a) {
	this.P = a || Pz();
	FC[G](this);
}
N(KS, FC);
KS[z].lo = null;
KS[z].I = null;
KS[z].Ji = null;
KS[z].aa = function (a, b, c, d) {
	FC[z].aa[G](this, a, b);
	if (c) {
		this.lo = a;
	}
	if (d) {
		this.Ji = a;
	}
	return this;
};
KS[z].IA = function (a) {
	this.I = a;
	this.ub();
};
KS[z].ub = function () {
	if (this.I) {
		k(this.I, M);
		var a = Pz(this.I);
		DC(this, function (b, c) {
			this.I[o](a.R("button", {name:c}, b));
		}, this);
	}
};
(function () {
	var a = UA("OK"), b = UA("Cancel");
	UA("Yes");
	UA("No");
	UA("Save");
	UA("Continue");
	IS = (new KS).aa("ok", a, true).aa("cancel", b, false, true);
})();
function LS(a) {
	HS[G](this, undefined, true);
	this.HH = a.url || "http://doclist-dev.corp.google.com/picker";
	this.vF = a.ifpcRelayUrl;
	this.xH = a;
	this.Sk = a.callback;
	this.R();
	this.xF();
}
N(LS, HS);
vf("google.Picker", LS);
LS[z].xF = function () {
	var a = new gF(this.HH);
	a.oc("ifpcRelayUrl", this.vF);
	var b = aF(this.xH);
	a.oc("options", b);
	this.Oq("<iframe id=\"picker\" class=\"picker-frame\" src=\"" + a + wk);
};
function MS(a) {
	this.LA = a;
}
MS[z].jB = function () {
	if (typeof ActiveXObject != "undefined" && typeof XMLHttpRequest != "undefined") {
		return false;
	}
	return true;
};
function NS(a) {
	var b = 0, c = 0, d = 0;
	if (window[Ic]) {
		c = window[Ic];
	} else {
		if (window.screenLeft) {
			c = window.screenLeft;
		}
	}
	if (window.outerWidth) {
		d = window.outerWidth;
	} else {
		if (document[Pd][Sy]) {
			d = document[Pd][Sy];
		}
	}
	b = d > 0 ? c + d - a + (Q ? 15 : 0) : c;
	return b;
}
function OS(a) {
	var b = 0, c = 0, d = 0;
	if (window[Jc]) {
		c = window[Jc];
	} else {
		if (window.screenTop) {
			c = window.screenTop;
		}
	}
	if (window.outerHeight) {
		d = window.outerHeight;
	} else {
		if (document[Pd][cd]) {
			d = document[Pd][cd];
		}
	}
	b = d > 0 ? c + d - a - 52 : c;
	return b;
}
MS[z].uH = function (a) {
	var b = screen[Cd] <= 768 ? 372 : 446, c = this.LA + "/talkgadget/popout?nav=true#";
	if (a) {
		c += a;
	}
	var d = this.jB() ? mt : Je, e = NS(300), f = OS(b), g = window[yb](c, "googletalk", "width=300,height=" + b + ",toolbar=0,status=0,menubar=0,location=" + d + ",resizable=1,scrollbars=0,left=" + e + ",top=" + f);
	g && g[Wc]();
};
MS[z].fB = function (a, b) {
	var c = "a=chat&u=" + ia(a);
	if (b) {
		c += "&m=" + ia(b);
	}
	this.uH(ia(c));
};
function PS(a) {
	var b = window[nc].protocol + "//talkgadget.google.com";
	if (ql()) {
		b += "/a/" + ol;
	}
	(new MS(b)).fB(a);
}
function QS(a, b) {
	Gy(a, null);
	Ca(a[F], Qs);
	if (b == true) {
		Dy(a, null);
		a.onmouseout = null;
	}
}
function RS(a, b, c) {
	if (b == -2) {
		PQ(a, M);
		QS(a, c);
	} else {
		if (b == -3) {
			PQ(a, M);
			QS(a, true);
		}
	}
}
function SS(a, b, c, d, e) {
	for (var f = 0; f < a[t]; ++f) {
		var g = a[f], i = g[0], j = W(b + i);
		if (j) {
			var m = g[1], n;
			n = m == MR || m == JR ? "images/available_white1.gif" : m == LR ? "images/idle_white1.gif" : m == KR ? "images/busy_white1.gif" : m == IR || m == -1 ? "images/offline_white1.gif" : mh;
			l(j[F], "inline");
			j.src = n;
		}
		var p = W(c + i);
		p && RS(p, g[1], false);
		var s = W(d + i);
		s && RS(s, g[1], e);
	}
}
R.mw = PS;
function xB() {
	this.yp = false;
	this.om = false;
	this.tj = false;
	this.Gl = true;
	this.Kr = undefined;
	this.Hh = true;
	this.pk = true;
	this.Ku = undefined;
	this.oa = new al(this);
	this.Ka = [];
	this.Sj = 0;
	this.Rj = 0;
	this.Qj = 0;
	this.Pj = 0;
}
af(xB);
xB[z].Pa = function (a, b, c, d, e, f, g) {
	this.yp = false;
	this.om = false;
	this.tj = false;
	this.Gl = true;
	this.Kr = c;
	this.Ka = [];
	this.Sj = 0;
	this.Rj = 0;
	this.Qj = 0;
	this.Pj = 0;
	this.Hh = !!f;
	var i = typeof e == hf;
	this.Ku = i;
	this.Xd = i ? TS : US;
	this.Xd.b("overview", b);
	i && this.Xd.b("subject", e);
	this.Xd.b("message", d || M);
	this.Xd.b("buttons", "<td valign=center>" + Zn("\u53d1\u9001", "emailersend_ok", "_DI_CloseDialog(0,1)") + "<td valign=center>" + Zn("\u53d6\u6d88", "emailersend_cancel", "_DI_CloseDialog(1,1)"));
	if (this.Hh) {
		this.Lm = [];
		var j = [];
		for (var m = 0; m < f[t]; m++) {
			var n = Qm.f().sh(f[m]);
			if (!n || !g[n.Ra]) {
				j[q](f[m]);
				continue;
			}
			this.Ka[q]({Ra:n.Ra, na:n.na, oo:n.dd ? n.dd : n.na, status:g[n.Ra].Kc});
		}
		this.Ka[gd](function (s, u) {
			return s.oo < u.oo ? -1 : 1;
		});
		this.Lm[q]("<div id=\"emailerspgroup\">");
		for (var m = 0; m < this.Ka[t]; m++) {
			this.Lm[q]("<div><input type=checkbox checked=true id=", VS, this.Ka[m].Ra, zf, "<label for=", VS, this.Ka[m].Ra, zf, this.Ka[m].oo, "</label></div>");
			switch (this.Ka[m][Nc]) {
			  case 1:
				this.Sj++;
				break;
			  case 2:
				this.Rj++;
				break;
			  case 3:
				this.Qj++;
				break;
			  default:
				this.Pj++;
			}
		}
		this.Lm[q](so);
		this.Tc = [{Ki:this.Sj, type:"yes", Zb:this.kB, fm:"\u662f <strong class=count>(" + this.Sj + ")</strong>"}, {Ki:this.Qj, type:"maybe", Zb:this.hB, fm:"\u4e5f\u8bb8 <strong class=count>(" + this.Qj + ")</strong>"}, {Ki:this.Rj, type:"no", Zb:this.iB, fm:"\u5426 <strong class=count>(" + this.Rj + ")</strong>"}, {Ki:this.Pj, type:"awaiting", Zb:this.gB, fm:"\u7b49\u5f85\u56de\u590d <strong class=count>(" + this.Pj + ")</strong>"}];
		var p = WS;
		this.pk = this.Sj || this.Qj || this.Rj || this.Pj;
		if (this.pk) {
			for (var m = 0; m < this.Tc[t]; m++) {
				if (this.Tc[m].Ki > 0) {
					XS.b("type", this.Tc[m][J]);
					XS.b("msg", this.Tc[m].fm);
					this.Tc[m][J] != "awaiting" ? XS.b(Xv, "<img valign=\"center\" src=\"images/icon_r_" + this.Tc[m][J] + ".gif\">") : XS.b(Xv, M);
					p.b(this.Tc[m][J], XS[r]());
				} else {
					p.b(this.Tc[m][J], M);
				}
			}
			p.b("selector", YS[r]());
			this.Xd.b("guestModule", WS[r]());
			this.Xd.b("emailInputLabel", "\u6284\u9001\uff1a");
		} else {
			this.Xd.b("guestModule", M);
			this.Xd.b("emailInputLabel", "\u6536\u4ef6\u4eba\uff1a");
		}
		this.Xd.b("ccAddresses", P(j[K](",")));
	}
	$n(rf(this.mH, this), a, this.Xd[r](), [], rf(this.Yy, this), undefined, this.Hh);
};
xB[z].OI = function (a, b) {
	var c = b || [];
	this.ls(c);
	c[q]("invAction", a);
	Mk(Lg, c);
};
xB[z].NI = function (a) {
	var b = a || [];
	this.ls(b);
	Mk("email", b);
};
xB[z].ls = function (a) {
	var b = this.lD(), c = this.vl(), d = this.uD();
	a[q]("hl", Sk);
	c && a[q]("invMsg", c);
	d && a[q]("invCopySender", 1);
	this.Ku && a[q]("subj", this.iE());
	for (var e = 0, f = b[t]; e < f; ++e) {
		a[q]("invEmail", b[e]);
	}
};
xB[z].lD = function () {
	var a = [];
	for (var b = 0; b < this.Ka[t]; b++) {
		W(VS + this.Ka[b].Ra)[Jb] && a[q](this.Ka[b].na, ",");
	}
	return Vm(a[K](M) + W("emailer_inputaddress")[B]);
};
xB[z].yD = function () {
	return Vm(W("emailer_inputaddress")[B]);
};
xB[z].vl = function () {
	return W("emailersend_msg")[B];
};
xB[z].uD = function () {
	return W("emailersend_emailme")[Jb];
};
xB[z].iE = function () {
	return W("emailersubject")[B];
};
xB[z].Yy = function () {
	this.yp = true;
	if (this.Hh && this.pk) {
		this.Oe = new Kn(W("spForm"), 50, 200);
		k(this.Oe.fe, this.Lm[K](M));
		this.Oe.Du();
		l(W("spForm")[F], U);
		Fa(W("spForm")[F], "350px");
	}
	var a = OB();
	Ck().zd("emailer_inputaddress", true, false, rf(this.Mk, this));
	var b = W("emailer_inputaddress");
	mb(b[F], ka(a[F][wd], 10));
	Cy(b, rf(this.Zz, this));
	this.Mk();
	var c = W("emailersend_msg");
	Cy(c, rf(this.yz, this));
	b[t] ? rA(b) : rA(c);
	if (this.Hh && this.pk) {
		for (var d = 0; d < this.Tc[t]; d++) {
			this.Tc[d].Ki > 0 && this.oa.ra(W("emailercheck" + this.Tc[d][J]), hj, this.Tc[d].Zb);
		}
		this.oa.ra(W("emailer_spicon"), ij, this.dy);
		this.oa.ra(W("spText"), ij, this.dy);
		this.oa.ra(W("emailerspgroup"), hj, this.ui);
	}
	this.oa.ra(W("emailer_inputaddress"), "change", this.Mk);
};
xB[z].dy = function (a) {
	var b = W("spForm"), c = W("emailer_spicon");
	if (b[F][xd] == M) {
		l(b[F], U);
		k(c, "\u25ba");
	} else {
		l(b[F], M);
		k(c, "\u25bc");
	}
	a[oc]();
};
xB[z].kB = function (a) {
	for (var b = 0; b < this.Ka[t]; b++) {
		if (this.Ka[b][Nc] == 1) {
			Ka(W(VS + this.Ka[b].Ra), a[Hc][Jb]);
		}
	}
	this.ui();
};
xB[z].iB = function (a) {
	for (var b = 0; b < this.Ka[t]; b++) {
		if (this.Ka[b][Nc] == 2) {
			Ka(W(VS + this.Ka[b].Ra), a[Hc][Jb]);
		}
	}
	this.ui();
};
xB[z].hB = function (a) {
	for (var b = 0; b < this.Ka[t]; b++) {
		if (this.Ka[b][Nc] == 3) {
			Ka(W(VS + this.Ka[b].Ra), a[Hc][Jb]);
		}
	}
	this.ui();
};
xB[z].gB = function (a) {
	for (var b = 0; b < this.Ka[t]; b++) {
		if (this.Ka[b][Nc] == 0) {
			Ka(W(VS + this.Ka[b].Ra), a[Hc][Jb]);
		}
	}
	this.ui();
};
xB[z].ui = function () {
	this.Gl = false;
	for (var a = 0; a < this.Ka[t]; a++) {
		if (W(VS + this.Ka[a].Ra)[Jb]) {
			this.Gl = true;
			break;
		}
	}
	this.ln();
};
xB[z].Mk = function () {
	var a = this.yD(), b = W("emailersend_error");
	W("emailersend_ok");
	this.tj = false;
	for (var c = 0, d = a[t]; c < d; ++c) {
		var e = a[c];
		if (!Tm(e) || $z(Fz(e))) {
			k(b, "\u5f88\u62b1\u6b49\uff0c\u8fd9\u4e0d\u662f\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff1a<b>" + P(e) + "</b>");
			this.tj = true;
			break;
		}
	}
	if (!this.tj) {
		k(b, "&nbsp;");
	}
	this.ln();
};
xB[z].ln = function () {
	var a = false;
	if (this.tj || this.om) {
		a = true;
	} else {
		if (!wf(this.vl())[t]) {
			a = true;
		} else {
			if (!this.Gl || !this.Hh || !this.pk) {
				a = !wf(W("emailer_inputaddress")[B])[t];
			}
		}
	}
	Ra(W("emailersend_ok"), a);
};
xB[z].Zz = function (a) {
	a = a || window[Sd];
	var b = Mz(a);
	if (b == 188 || b == 13 || b == 32) {
		this.Mk();
	}
};
xB[z].yz = function (a) {
	var b = W("msg-length");
	W("emailersend_ok");
	var c = a ? a[Hc] : window[Sd][ec];
	this.om = c[B][t] >= 2400;
	k(b, !this.om ? "&nbsp;" : c[B][t] + " / 2400");
	this.ln();
};
var US = new T("${overview}<div><span id=\"emailersend_error\" style=\"color:red\">&nbsp;</span></div><table class=emailtable cellpadding=6 style=\"width:100%\"><tr><td valign=top class=nobr>\u6536\u4ef6\u4eba\uff1a</td><td style=\"width:100%\" valign=top><textarea id=\"emailer_inputaddress\" style=\"overflow:auto\" autocomplete=off rows=4 cols=60></textarea><div style=\"padding-top:.5ex\">\u8f93\u5165\u7528\u9017\u53f7\u5206\u9694\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002</div></td></tr><tr><td valign=top class=nobr>\u90ae\u4ef6\u6b63\u6587\uff1a</td><td style=\"width:100%\" valign=top><textarea id=\"emailersend_msg\" style=\"overflow:auto\" rows=4 cols=60>${message}</textarea></td></tr><tr><td></td><td><div style=\"float:left;\"><input type=checkbox id=\"emailersend_emailme\" checked>&nbsp;<label for=\"emailersend_emailme\">\u5411\u81ea\u5df1\u53d1\u9001\u526f\u672c</label></div><div id=\"msg-length\" style=\"float:right;color:red\">&nbsp;</div></td></tr></table><center><table class=buttontable cellspacing=0 cols=2>${buttons}</center></table>"), TS = new T("${overview}<div><span id=\"emailersend_error\" style=\"color:red\">&nbsp;</span></div><table class=emailtable cellpadding=6 style=\"width:100%\">${guestModule}<tr><td valign=top>${emailInputLabel}</td><td style=\"width:100%\" valign=top><input id=\"emailer_inputaddress\" autocomplete=off size=62 value=\"${ccAddresses}\"></td></tr><tr><td valign=top>\u4e3b\u9898\uff1a</td><td style=\"width:100%\" valign=top><input id=emailersubject autocomplete=off size=62 value=\"${subject}\" maxlength=\"100\"></td></tr><tr><td valign=top class=nobr>\u90ae\u4ef6\u6b63\u6587\uff1a</td><td style=\"width:100%\" valign=top><textarea id=\"emailersend_msg\" style=\"overflow:auto\" rows=4 cols=60>${message}</textarea></td></tr><tr><td></td><td><div style=\"float:left\">\u6ce8\uff1a\u6d3b\u52a8\u4fe1\u606f\u5c06\u5305\u542b\u5728\u90ae\u4ef6\u4e2d\u3002</div><div id=\"msg-length\" style=\"float:right;color:red\">&nbsp;</div></td></tr></table><table class=buttontable cellspacing=0>${buttons}<td valign=bottom><input type=\"checkbox\" id=\"emailersend_emailme\" checked=\"true\"><label for=\"emailersend_emailme\">\u5411\u81ea\u5df1\u53d1\u9001\u526f\u672c</label></td></table>"), WS = new T("<tr><td valign=top>\u6536\u4ef6\u4eba\uff1a</td><td>${yes}${maybe}${no}${awaiting}${selector}</td></tr>"), XS = new T("<div style=\"font-weight:bold\"><input type=\"checkbox\" id=\"emailercheck${type}\" checked=\"true\"><label for=\"emailercheck${type}\">${msg}&nbsp;</label>${icon}</div>"), YS = new T("<div style=\"padding-top:10px; padding-bottom:5px;\"><span id=emailer_spicon>\u25ba</span><span id=spText><a href=#>\u9009\u62e9\u7279\u5b9a\u4eba\u5458</a></span></div><div id=spForm style=\"width:350px\"></div>");
xB[z].mH = function (a) {
	var b = false;
	if (this.Kr) {
		b = this.Kr(a);
	}
	Ck().he("emailer_inputaddress");
	this.yp = !!b;
	this.oa.Bg();
	return b;
};
var VS = "gcale_";
function ZS(a, b) {
	if (/[0-9]/[zb](a)) {
		return oa(a);
	}
	var c = b || $S, d = aT(c), e = [];
	while (a) {
		var f = a[Lc](d);
		if (!f) {
			return NaN;
		}
		var g = f[0];
		e[q](g);
		a = a[I](g[t]);
	}
	return c.wi(e);
}
function aT(a) {
	if (a.hs) {
		return a.hs;
	}
	var b = [];
	for (var c in a) {
		if (bf !== typeof a[c]) {
			continue;
		}
		b[q](c);
	}
	b[gd](function (d, e) {
		return e[t] - d[t];
	});
	return a.hs = "^(?:" + b[K]("|") + Xj;
}
var bT = {"\u96f6":0, "\u3007":0, "\u96f6":0, "\u58f9":1, "\u4e00":1, "\u5f0c":1, "\u8cb3":2, "\u8d30":2, "\u4e8c":2, "\u5f0d":2, "\u5169":2, "\u4e24":2, "\u53c4":3, "\u53c1":3, "\u4e09":3, "\u5f0e":3, "\u53c3":3, "\u53c2":3, "\u8086":4, "\u56db":4, "\u4f0d":5, "\u4e94":5, "\u9678":6, "\u516d":6, "\u67d2":7, "\u4e03":7, "\u634c":8, "\u516b":8, "\u7396":9, "\u4e5d":9, "\u62fe":10, "\u5341":10, "\u4ec0":10, "\u5ff5":20, "\u8cb3\u62fe":20, "\u5eff":20, "\u5344":20, "\u4e8c\u5341":20, "\u53c4\u62fe":30, "\u5345":30, "\u4e09\u5341":30, "\u8086\u62fe":40, "\u534c":40, "\u56db\u5341":40, "\u4f70":100, "\u767e":100, "\u4edf":1000, "\u5343":1000, "\u842c":10000, "\u4e07":10000, "\u767e\u842c":1000000, "\u5104":100000000, "\u4eac":1000000000, "\u5409":1000000000, "\u5793":1000000000000, "\u592a":1000000000000, "\u5146":1000000000000, "\u62cd":1000000000000000, "\u827e":1000000000000000000, "\u6cfd":1e+21, "\u7686":1e+21, "\u5c27":1e+24, "\u4f51":1e+24, "\u5206":0.1, "\u5398":0.01, "\u91d0":0.01, "\u6beb":0.001, "\u6bdb":0.001, "\u5fae":0.000001, "\u5875":1e-9, "\u5948":1e-9, "\u7eb3":1e-9, "\u6f20":1e-12, "\u76ae":1e-12, wi:function (a) {
	var b = [];
	function c(j) {
		if (j <= 1000) {
			return false;
		}
		var m = h.log(j) / h.log(10000);
		return h.abs(m - h[Hb](m)) < 0.01;
	}
	var d = 0;
	for (var e = 0; e < a[t]; ++e) {
		var f = this[a[e]];
		if (c(f)) {
			var g = b[Kb](d, b[t]);
			b[Dd](d, b[t] - d, g);
			d = b[t] + 1;
		}
		b[q](f);
	}
	function i(j) {
		function m(y) {
			if (y < 10) {
				return y < 1 && y > 0;
			}
			y /= 10;
			return 1 === y || y > 4;
		}
		var n = 0, p = 0, s = 0, u;
		for (var v = 0; v < j[t]; ++v) {
			var w = j[v], x;
			if (bf === typeof w) {
				x = m(w) && (w !== 10 || p);
			} else {
				x = false;
				w = i(w);
			}
			if (x) {
				n += (p || 1) * w;
				s = w;
				p = 0;
				u = false;
			} else {
				if (u) {
					p *= 10;
					s /= 10;
				}
				p += w;
				u = w < 10 && (w === 0 || w >= 1);
				w || (s = 0);
			}
		}
		n += p * (s && p < 10 ? s / 10 : 1);
		return n;
	}
	return i(b);
}}, $S = {wi:function (a) {
	if (!a[t]) {
		return 0;
	}
	for (var b = 0; b < cT[t]; ++b) {
		if (cT[b][0][zb](a[0])) {
			return cT[b][1].wi(a);
		}
	}
	return NaN;
}}, cT = [], dT = [bT, {"\u96f6":0, "\u3007":0, "\uc601":0, "\u4e00":1, "\uc77c":1, "\u4e8c":2, "\uc774":2, "\u4e09":3, "\uc0bc":3, "\u56db":4, "\uc0ac":4, "\u4e94":5, "\uc624":5, "\u516d":6, "\uc721":6, "\u4e03":7, "\uce60":7, "\u516b":8, "\ud314":8, "\u4e5d":9, "\uad6c":9, "\u5341":10, "\uc2ed":10, "\u767e":100, "\ubc31":100, wi:function (a) {
	var b = 0, c = null;
	for (var d = 0; d < a[t]; ++d) {
		var e = this[a[d]];
		if (c !== null && e > c) {
			b = (b || 1) * e;
			c = Infinity;
		} else {
			b += e;
			c = e;
		}
	}
	return b;
}}, {"\ud558\ub098":1, "\ud55c":1, "\ub458":2, "\ub450":2, "\uc14b":3, "\uc138":3, "\ub137":4, "\ub124":4, "\ub2e4\uc12f":5, "\uc5ec\uc12f":6, "\uc77c\uacf1":7, "\uc5ec\ub35f":8, "\uc544\ud649":9, "\uc5f4":10, "\uc5f4 \ud558\ub098":11, "\uc5f4 \ub458":12, "\uc5f4 \uc14b":13, "\uc5f4 \ub137":14, "\uc5f4 \ub2e4\uc12f":15, "\uc5f4 \uc5ec\uc12f":16, "\uc5f4 \uc77c\uacf1":17, "\uc5f4 \uc5ec\ub35f":18, "\uc5f4 \uc544\ud649":19, "\uc2a4\ubb3c":20, "\uc11c\ub978":30, "\ub9c8\ud754":40, "\uc270":50, "\uc608\uc21c":60, "\uc77c\ud754":70, "\uc5ec\ub4e0":80, "\uc544\ud754":90, wi:function (a) {
	var b = 0;
	for (var c = 0; c < a[t]; ++c) {
		b += this[a[c]];
	}
	return b;
}}];
(function () {
	for (var a = 0; a < dT[t]; ++a) {
		var b = dT[a], c = [];
		for (var d in b) {
			var e = b[d];
			if (bf !== typeof e) {
				continue;
			}
			$S[d] = e;
			c[q](d);
		}
		cT[q]([new RegExp(c[K]("|")), b]);
	}
})();
var eT = {"\u5e74":1, "\u6708":2, "\u65e5":4, "\ub144":1, "\uc6d4":2, "\uc77c":4}, fT = new RegExp(ma("([:\u65f6\u5206\u79d2\u6642\uc2dc\ubd84\ucd08/,;_\\-\\.\t-\r \xa0\u1680\u180e\u2000-\u200b\u2028\u2029\u202f\u205f\u3000\u592a\u5e73\u6d0b\u6807\u51c6\u65f6\u95f4\u590f\u4ee4\u516c\u5143]+)"), "g"), gT = (function () {
	var a = [];
	for (var b in eT) {
		a[q](b);
	}
	a = a[K]("|");
	var c = [];
	c[q](bT);
	var d = ["\\d+"];
	for (var e = 0; e < c[t]; ++e) {
		var f = [];
		for (var b in c[e]) {
			f[q](b);
		}
		d[q]("(?:[" + f[K](M) + "]+)");
	}
	var g = Vj + (Vj + d[K]("|") + Xj + (a ? "(?:(?:[\t-\r \xa0\u1680\u180e\u2000-\u200b\u2028\u2029\u202f\u205f\u3000]*(" + a + "))?)" : M)) + Xj;
	return new RegExp(g, "g");
})(), hT = new RegExp(ma("([A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u0236\u0250-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ee\u037a\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03ce\u03d0-\u03f5\u03f7-\u03fb\u0400-\u0481\u048a-\u04ce\u04d0-\u04f5\u04f8\u04f9\u0500-\u050f\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u063a\u0640-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u074f\u0780-\u07a5\u07b1\u0904-\u0961\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb5\u0bb7-\u0bb9\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d60\u0d61\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e4e\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc\u0edd\u0f00\u0f40-\u0f47\u0f49-\u0f6a\u0f88-\u0f8b\u1000-\u1021\u1023-\u1027\u1029\u102a\u1050-\u1055\u10a0-\u10c5\u10d0-\u10f8\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1206\u1208-\u1246\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1286\u1288\u128a-\u128d\u1290-\u12ae\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12ce\u12d0-\u12d6\u12d8-\u12ee\u12f0-\u130e\u1310\u1312-\u1315\u1318-\u131e\u1320-\u1346\u1348-\u135a\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1d00-\u1d6b\u1e00-\u1e9b\u1ea0-\u1ef9\u1f00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2131\u2133-\u2139\u213d-\u213f\u2145-\u2149\u3005\u3006\u3031-\u3035\u303b\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312c\u3131-\u318e\u31a0-\u31b7\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fa5\ua000-\ua48c\uac00-\ud7a3\uf900-\ufa2d\ufa30-\ufa6a\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]+)"), "g");
function iT(a) {
	this.WG = a;
}
iT[z].tf = null;
iT[z].FD = function (a) {
	return this.tf ? this.tf + qg + a : a;
};
iT[z].Bq = function () {
	this.tf = null;
};
iT[z].ig = function (a, b, c) {
	var d = this.FD(a);
	switch (this.WG(d)) {
	  case 0:
		if (this.tf) {
			b(this.tf);
			this.Bq();
			this.ig(a, b, c);
		} else {
			c(a);
		}
		break;
	  case 1:
		this.tf = d;
		break;
	  case 2:
		b(d);
		this.Bq();
		break;
	}
};
iT[z].NC = function (a) {
	if (this.tf) {
		a(this.tf);
		this.Bq();
	}
};
function jT(a) {
	var b = kT(lT(a), [gT, fT, hT]), c = [], d = [], e = [], f = [];
	function g(Mb, Rb, Sb, yd) {
		d[q](Mb);
		f[q](typeof Rb != "undefined" ? Rb : Mb[r]()[t]);
		e[q](typeof Sb != "undefined" ? Sb : 0);
		c[q](typeof yd != "undefined" ? yd : -1);
	}
	var i = new iT(mT);
	for (var j = 0; j < b[t]; ++j) {
		var m = b[j].hv;
		switch (b[j].xw) {
		  case 0:
			i.ig(m, p, n);
			break;
		  case 1:
		  case 3:
			if (/^\s*-\s*$/[zb](m)) {
				m = to;
				g(m);
			}
			break;
		  case 2:
			i.ig(m, p, p);
			break;
		}
	}
	i.NC(p);
	function n(Mb) {
		gT[Db](M);
		var Rb = gT[Db](Mb), Sb = Rb[2], yd = Rb[3], ac = ZS(Sb);
		if (ua(ac)) {
			g(Mb);
		} else {
			var Rd = /\D/[zb](Sb) ? -1 : Sb[t], Cb = 0;
			if (yd) {
				Cb = eT[yd] || 0;
			}
			if (!Cb) {
				if (0 == ac && Rd == 2) {
					Cb |= 1;
				} else {
					if (ac > 12 && ac <= 31) {
						Cb |= 4;
					} else {
						if (ac <= 12) {
							Cb |= 6;
						} else {
							if (ac < 100 || ac >= 1900) {
								Cb |= 1;
							}
						}
					}
				}
			}
			g(ac, Mb[t], Cb, Rd);
		}
	}
	function p(Mb) {
		var Rb = nT(Mb);
		Rb ? g(Rb[0], Rb[1], 10) : g(Mb);
	}
	var s = 0, u = 0, v = 0, w = 0, x = 0;
	for (var j = 0; j < e[t]; ++j) {
		if (e[j]) {
			if (6 === (e[j] & 6)) {
				++v;
			} else {
				e[j] & 4 && ++s;
				e[j] & 2 && ++u;
			}
			e[j] & 1 && ++w;
		} else {
			hf === typeof d[j] && ++x;
		}
	}
	if (v) {
		var y = false, C = false;
		if (!s || !u) {
			var D = false, L = 0;
			while (L < e[t] + 4 && !e[L]) {
				++L;
			}
			if (L + 4 < e[t] && (c[L] === 2 || c[L] === 4) && to === d[L + 1] && to === d[L + 3] && c[L + 2] >= 0 && e[L + 2] & 2 && c[L + 4] >= 0 && e[L + 4] & 4) {
				D = true;
			}
			if (D) {
				e[L] = 1;
				e[L + 2] = 2;
				e[L + 4] = 4;
				v = 0;
				w = u = s = 1;
			} else {
				if (s) {
					y = true;
				} else {
					if (u) {
						C = true;
					} else {
						if (1 === v) {
							y = true;
						} else {
							for (var j = 0; j < e[t]; ++j) {
								if (6 == (e[j] & 6)) {
									if (typeof Wk != cf || "DMY" != Uk().J(Ug, "MDY")) {
										e[j] &= -5;
										++u;
										--v;
										C = true;
									} else {
										e[j] &= -3;
										++s;
										--v;
										y = true;
									}
									break;
								}
							}
						}
					}
				}
			}
		}
		if (y) {
			for (var j = 0; j < e[t]; ++j) {
				if (6 == (e[j] & 6)) {
					e[j] &= -5;
					++u;
					--v;
				}
			}
		} else {
			if (C) {
				for (var j = 0; j < e[t]; ++j) {
					if (6 == (e[j] & 6)) {
						e[j] &= -3;
						++s;
						--v;
					}
				}
			}
		}
	}
	var O, ba, ea, ta = 0, V = 7;
	if (s) {
		for (var j = 0; j < e[t]; ++j) {
			if (e[j] & 4) {
				O = d[j];
				e[j] = 0;
				--s;
				break;
			}
		}
	} else {
		O = null;
		V &= -5;
	}
	if (u) {
		var Aa = false, j;
		for (j = 0; j < e[t]; ++j) {
			if (e[j] & 2) {
				ba = d[j];
				e[j] &= -3;
				--u;
				Aa = 0 !== (e[j] & 8);
				break;
			}
		}
		if (Aa) {
			var Ma = f[j];
			for (var Pa = j + 1; Pa < e[t]; ++Pa) {
				if (e[Pa] & 8) {
					if (f[Pa] > Ma) {
						e[j] |= 2;
						e[Pa] &= -3;
						ba = d[Pa];
						Ma = f[Pa];
						j = Pa;
					}
				}
			}
		}
	} else {
		ba = null;
		V &= -3;
	}
	var Ea = !!w;
	if (Ea) {
		for (var j = 0; j < e[t]; ++j) {
			if (e[j] & 1) {
				ea = d[j];
				e[j] = 0;
				--w;
				break;
			}
		}
	} else {
		ea = null;
		if (s | u | v) {
			var Ga = -1, Fb = 0;
			for (var j = 0; j < e[t]; ++j) {
				if (e[j] && !(e[j] & 8)) {
					if (d[j] > Fb) {
						Ga = j;
						Fb = d[j];
					}
				}
			}
			if (Ga >= 0) {
				ea = Fb;
				switch (e[Ga]) {
				  case 4:
					--s;
					break;
				  case 2:
					--u;
					break;
				  case 6:
					--v;
					break;
				}
				e[Ga] = 0;
			}
		}
		if (null == ea) {
			ta -= 1;
			var Ib = R.U.xa();
			ea = Ib.B + (ba && ba < Ib.z ? 1 : 0);
			V &= -2;
		}
	}
	if (null === O) {
		O = 1;
		ta -= 0.5;
	}
	if (null === ba) {
		if (Ea) {
			ba = 1;
		} else {
			return null;
		}
	}
	if (ea < 100) {
		ea += ea < 50 ? 2000 : 1900;
	}
	ta -= s + u + w + v + (x >> 2);
	return new oT(Ih(ea, ba, O), ta, V);
}
function pT(a, b) {
	var c = [], d = b && /i/[zb](b);
	for (var e = a[t]; --e >= 0; ) {
		var f = a[e];
		if (!f) {
			continue;
		}
		if (d) {
			f = f[Kd]();
		}
		c[e] = f;
	}
	c[gd]();
	var g = 0;
	for (var e = 0; e < c[t]; ++e) {
		if (c[e] === c[e - 1]) {
			++g;
		} else {
			c[e - g] = c[e];
		}
	}
	if (g) {
		c = c[Kb](0, c[t] - g);
	}
	return new RegExp(c[K]("|"), b);
}
var qT = pT(["\u4e0a\u5348"[A](fT, M), "am", M], oC), rT = pT(["\u4e0a\u5348"], oC), sT = pT(["\u4e0b\u5348"[A](fT, M), "pm", M], oC), tT = pT(["\u4e0b\u5348"], oC), uT = new RegExp("(?::|\u65f6|\u5206|\u79d2|\uc2dc|\ubd84|\ucd08)", "g");
function vT(a, b) {
	var c = qg + lT(a) + qg;
	c = c[A](uT, Ke);
	c[A](/:(\s+)$/, "$1");
	c = c[A](/\b([0-9]):/g, "0$1:")[A](/:([0-9])(?:[^0-9]|\b)/g, ":$10");
	c = c[A](/(:[0-9][0-9]):[0-9\.]*/, "$1");
	c = c[A](/\.[0-9]+/g, M);
	c = c[A](fT, M);
	var d, e;
	if (qT[zb](c)) {
		d = 0;
		e = c[A](qT, M);
	} else {
		if (sT[zb](c)) {
			d = 12;
			e = c[A](sT, M);
		} else {
			if (rT[zb](c)) {
				d = 0;
				e = c[A](rT, M);
			} else {
				if (tT[zb](c)) {
					d = 12;
					e = c[A](tT, M);
				} else {
					if (/h|ho\w?r\w?s|hs/i[zb](c)) {
						d = 24;
						e = c[A](/h|ho\w?r\w?s|hs/i, M);
					} else {
						d = null;
						e = c;
					}
				}
			}
		}
	}
	e = e[A](/\D+/g, M);
	var f, g;
	switch (e[t]) {
	  case 1:
	  case 2:
		f = ka(e, 10);
		g = 0;
		break;
	  case 3:
	  case 5:
		f = ka(e[ic](0), 10);
		g = ka(e[I](1, 3), 10);
		break;
	  case 4:
	  case 6:
		f = ka(e[I](0, 2), 10);
		g = ka(e[I](2, 4), 10);
		break;
	  default:
		return null;
	}
	if (f > 24 || g > 60) {
		return null;
	}
	var i;
	if (d !== null) {
		i = d === 12;
		if (0 === d && f === 12) {
			f = 0;
		}
	} else {
		if (f === 0 || f > 12) {
			i = false;
		} else {
			if (!(AR && Uk().fc(Vg, Pk(Xk)))) {
				if (b && (b.F > f || b.F === f && b.D > g)) {
					i = true;
				} else {
					if (f <= 6) {
						i = true;
					}
				}
			}
		}
	}
	if (i) {
		f = f % 12 + 12;
	} else {
		if (24 === f) {
			f = 0;
		}
	}
	return new Ph(f, g, 0);
}
function oT(a, b, c) {
	this.l = a;
	this.Ni = b;
	this.specified = c;
}
xa(oT[z], function () {
	return this.l[r]();
});
function nT(a) {
	var b = -1, c = -1;
	for (var d = 0; d < yR[t]; ++d) {
		var e = yR[d];
		if (!e) {
			continue;
		}
		var f = zR[d], g = h.max(wT(e, a), wT(f, a));
		if (g && g > c) {
			b = d;
			c = g;
		}
	}
	return c >= a[t] + 1 >> 1 ? [b, c] : null;
}
function wT(a, b) {
	a = a[Kd]();
	b = b[Kd]();
	var c = h.min(a[t], b[t]), d;
	for (d = 0; d < c; ++d) {
		if (a[ic](d) !== b[ic](d)) {
			break;
		}
	}
	return d;
}
var yT = (function () {
	switch ("zh") {
	  case "th":
		return xT(zR);
	  case "vi":
		return xT(zR[fc](yR));
	  default:
		return null;
	}
})();
function xT(a) {
	var b = {};
	for (var c = 0; c < a[t]; ++c) {
		if (typeof a[c] != hf) {
			continue;
		}
		var d = a[c];
		for (var e = 0; e < d[t] - 1; ++e) {
			if (d[ic](e) == qg) {
				b[d[I](0, e)] = true;
			}
		}
	}
	return b;
}
function mT(a) {
	return yT ? a in yT ? 1 : zT(a) ? 2 : 0 : 0;
}
function zT(a) {
	var b = nT(a);
	return b ? b[1] == a[t] : false;
}
var AT = new RegExp(ma("[\ufeff\x00]"), "g");
function kT(a, b) {
	a = a[A](AT, qg);
	var c = [];
	BT(a, b, c, 0);
	return c;
}
function BT(a, b, c, d) {
	if (d >= b[t]) {
		a[t] && c[q]({hv:a, xw:-1});
		return;
	}
	a = a[A](b[d], "\ufeff$1\x00");
	while (a[t]) {
		var e = a[E]("\ufeff");
		if (e < 0) {
			BT(a, b, c, d + 1);
			break;
		}
		var f = a[E]("\x00", e);
		BT(a[I](0, e), b, c, d + 1);
		c[q]({hv:a[I](e + 1, f), xw:d});
		a = a[I](f + 1);
	}
}
var CT;
function lT(a) {
	CT || (CT = new RegExp("[\uff01-\uff5e]", "g"));
	return a[A](CT, function (b) {
		return ma[Sc](b[ed](0) - 65248);
	});
}
var DT = null;
function ET(a, b, c) {
	if (Q && DT == null) {
		DT = tA(window, "CB_Iframe", "javascript:false");
		Ba(DT[F], $l);
		l(DT[ud][F], U);
	}
	this.Fh = a;
	var d = this.rl();
	$i(d, jj, FT(this));
	ag && $i(d, "keyup", FT(this));
	this.AJ(b);
	this.Jw = null;
	this.ih = this.Fh + "_combobox";
	uA(window, this.Fh + "_combobox");
	var e = this.Jd();
	Da(e, "CB_menu");
	this.zG = 6;
	this.CK = We(c) ? c : 2;
	this.mi = null;
	this.Ga = null;
	this.mx = null;
	this.Zc = -1;
	this.Z = false;
	this.uk = false;
	if (ag) {
		this.Vl = 0;
		this.ng = false;
		$i(e, zA, GT(this));
		$i(e, ij, HT(this));
	}
	$i(e, yA, IT(this));
	$i(e, hj, JT(this));
	$i(d, "focus", KT(this));
	$i(d, "blur", LT(this));
	l(e[F], U);
	Ba(e[F], $l);
	nb(e[F], "auto");
}
ET[z].Mb = function () {
	return this.Z;
};
function FT(a) {
	return function (b) {
		if (!a.Mb()) {
			return;
		}
		var c = Mz(b);
		if (rR(b, a)) {
			return;
		}
		if (ag && (typeof c == "undefined" || c == 9)) {
			a.V();
		} else {
			if (c == 38 || c == 40) {
				a.uk = false;
				var d = a.Zc;
				d += c == 38 ? -1 : 1;
				if (d < 0 || d >= a.Ga[t]) {
					return;
				}
				a[fz](d, true);
			} else {
				if (c == 13 || c == 9) {
					if (!a.uk) {
						MT(a);
						var e = a.rl();
						e[Hy](e);
					}
					a.V();
				} else {
					a.uk = true;
				}
			}
		}
	};
}
ET[z].rl = function () {
	return W(this.Fh);
};
ET[z].Jd = function () {
	return W(this.ih);
};
ET[z].AJ = function (a) {
	this.fD = a;
};
function KT(a) {
	return function () {
		a.Pa();
	};
}
function LT(a) {
	return function (b) {
		var c = false;
		if (Q) {
			var d = Rl(a.Jd());
			c = d[ld](Zl(b));
		} else {
			if (ag) {
				c = a.ng;
			} else {
				var e = b.yb.explicitOriginalTarget;
				c = wA(a.Jd(), e);
			}
		}
		c || a.V();
	};
}
function IT(a) {
	return function (b) {
		var c = a.pD(b);
		c ? a[fz](a.GC(c)) : a.no(a.Zc);
	};
}
function GT(a) {
	return function () {
		a.ng = false;
	};
}
function HT(a) {
	return function () {
		a.ng = true;
	};
}
function NT(a, b) {
	var c = a[b];
	if (c) {
		if (typeof c == hf) {
			eval(c);
		} else {
			typeof c == cf && c();
		}
	}
}
function MT(a) {
	if (a.Zc < 0) {
		return;
	}
	var b = a.eg(a.Zc), c = W(b)[bc];
	c = Gf(c);
	var d = a.Jw;
	if (d) {
		c = d[G](null, c, a.Zc);
	}
	Oa(a.rl(), c);
}
function JT(a) {
	return function () {
		MT(a);
		NT(a.rl(), "onchange");
		a.V();
	};
}
ET[z].JJ = function (a) {
	this.Jw = a;
};
ET[z].eg = function (a) {
	return this.ih + Jl + a;
};
ET[z].GC = function (a) {
	return ka(a.id[Lc](/_(\d+)$/)[1], 10);
};
ET[z].pD = function (a) {
	var b = Zl(a), c = this.Jd();
	if (!Rl(c)[ld](b)) {
		return null;
	}
	b.y += c[vb];
	if (!this.Ga) {
		return null;
	}
	for (var d = 0; d < this.Ga[t]; ++d) {
		var e = W(this.eg(d));
		if (Rl(e)[ld](b)) {
			return e;
		}
	}
	return null;
};
ET[z].TJ = function (a) {
	this.no(this.Zc);
	this.Ga = new Array(a[t]);
	var b = ["<div>"];
	for (var c = 0; c < this.Ga[t]; ++c) {
		b[q]("<div id=\"", this.eg(c), "\" class=\"CB_option\">", P(a[c]), so);
		this.Ga[c] = a[c][r]();
	}
	b[q](so);
	k(this.Jd(), b[K](M));
};
ET[z].cr = function (a) {
	if (this.mi === a) {
		return;
	}
	if (a) {
		a |= 0;
	}
	this.mi = a;
	if (this.Z) {
		var b = W(this.Fh), c = Rl(b), d = this.Jd();
		Wa(d[F], c.x + X);
		Fa(d[F], h.max(this.mi, c.w + 16) + X);
	}
};
ET[z].Pa = function () {
	if (this.Z) {
		return;
	}
	var a = this.fD[G](null, this), b = a[1];
	this.TJ(a[0]);
	var c = W(this.Fh), d = Rl(c), e = this.Jd();
	if (ag) {
		d = uR(c);
	}
	var f = d.y + d.h;
	e[F].top = f + X;
	Wa(e[F], d.x + X);
	Fa(e[F], h.max(this.mi || 0, d.w + 16) + X);
	l(e[F], "block");
	var g = this.eg(0);
	this.mx = g ? Sl(W(g)) : 0;
	var i = h.min(this.Ga[t], this.zG);
	ob(e[F], i * this.mx + X);
	mb(e[F], c[F][wd] + 2);
	this.Z = true;
	this.uk = true;
	this.lm = new Array(this.Ga[t]);
	this.lm[0] = 0;
	var j = W(this.eg(0));
	for (var m = 1; m < this.lm[t]; ++m) {
		j = j[Ad];
		var n = Ul(j);
		this.lm[m] = n.y - f - (R[mc].Le ? 5 : 0);
	}
	if (DT) {
		var p = Rl(e);
		l(DT[ud][F], M);
		Wa(DT[F], p.x + X);
		DT[F].top = p.y + X;
		Fa(DT[F], p.w + X);
		ob(DT[F], p.h + X);
		mb(DT[F], c[F][wd] + 1);
		l(DT[F], "block");
	}
	this[fz](b, true);
	oA(this);
};
ET[z].V = function () {
	l(this.Jd()[F], U);
	this.Z = false;
	this.uk = false;
	if (DT) {
		l(DT[ud][F], U);
	}
};
ET[z].select = function (a, b) {
	if (a == this.Zc) {
		return;
	}
	if (b) {
		var c;
		c = this.lm[h.max(a - this.CK, 0)];
		var d = this.Jd();
		if (d[vb] != c) {
			va(d, c);
		}
	}
	this.Zc >= 0 && this.no(this.Zc);
	if (a >= 0) {
		this.Zc = a;
		var e = W(this.eg(a));
		xm(e, "CB_selected");
	} else {
		this.Zc = -1;
	}
};
ET[z].no = function (a) {
	if (a < 0) {
		return;
	}
	this.Zc = -1;
	var b = W(this.eg(a));
	ym(b, "CB_selected");
};
ET[z].Ue = function (a) {
	if (this.Z) {
		var b = Zl(a);
		if (Rl(this.Jd())[ld](b) || Rl(this.Fh)[ld](b)) {
			return false;
		} else {
			this.V();
			return true;
		}
	} else {
		return true;
	}
};
var OT = {};
function PT(a, b, c, d) {
	var e = new ET(a, QT(a));
	e.cr(80);
	var f = new ET(b, RT(a, b, c, d), 1);
	f.cr(160);
	f.JJ(ST);
	OT[a] = e;
	OT[b] = f;
}
var TT = new Sh(0, 0, 30, 0);
function QT(a) {
	return function () {
		var b = R.U.zb().zc(), c = UT(W(a)[B], b);
		c || (c = b);
		var d = h[Wb](c.F) * 2;
		c.D >= 30 && ++d;
		return [VT(c, false), d];
	};
}
function RT(a, b, c, d) {
	return function (e) {
		var f = R.U.zb().zc(), g = UT(W(a)[B], f), i = UT(W(b)[B], f), j = W(c)[B] == W(d)[B], m = g && j, n, p;
		if (m) {
			n = g;
			if (!i) {
				var s = Fh(g);
				s.D += Tr;
				i = s.K();
			}
			var u = i.Db(g).Rm();
			p = u / 30 | 0;
		} else {
			n = i || g || f;
			p = h[Wb](n.F) * 2;
			n.D >= 30 && ++p;
		}
		e.cr(m ? 160 : 80);
		if (p < 0) {
			p = 0;
		}
		return [VT(n, m), p];
	};
}
function ST(a) {
	var b = a[Lc](/(.*) \([^(]*\)$/);
	if (b) {
		a = b[1];
	}
	return a;
}
function VT(a, b) {
	var c;
	if (b) {
		c = Fh(a);
	} else {
		a = new Jh(a.B, a.z, a.l, 0, 0, 0);
		c = Fh(a);
	}
	var d = [];
	for (var e = 0; e < 48; ++e) {
		var f = cn(c.K());
		if (b) {
			f += " (" + oR(new Sh(0, 0, 30 * e, 0), true) + Xj;
		}
		d[q](f);
		c.Kf(TT);
	}
	return d;
}
function UT(a, b) {
	var c = vT(a, null);
	if (!c) {
		return null;
	}
	var d = Fh(b);
	d.F = c.F;
	d.D = c.D;
	d.L = c.L;
	return d.VF() ? d.K() : null;
}
var WT = null, XT = null;
function YT(a, b) {
	if (!WT) {
		return;
	}
	if (a) {
		l(WT[ud][F], M);
		XT = b;
	} else {
		if (XT == b) {
			l(WT[ud][F], U);
			XT = null;
		}
	}
}
var ZT = {};
function $T(a) {
	if (Q && WT == null) {
		WT = tA(window, "DP_Iframe");
		l(WT[ud][F], U);
		Ba(WT[F], $l);
	}
	var b, c;
	if (ZT[a]) {
		b = ZT[a];
		c = b.fa;
	} else {
		c = document[Xc](xk);
		c.id = a + "dp_div";
		Ba(c[F], $l);
		l(c[F], U);
		Fa(c[F], "12.5em");
		document[Bc][o](c);
		b = new yr(c, R.U.zb(), false, undefined, "DP_popup_");
		b.Zq(0);
		ZT[a] = b;
		b.qs(aU(b, a));
		b.Ue = function (f) {
			if (!b.Mb()) {
				return true;
			}
			var g = Rl(b.wl()), i = Zl(f);
			if (!g[ld](i)) {
				b.V();
				YT(false, b);
				return true;
			}
			return false;
		};
	}
	b.sr = false;
	var d = bU(c.id, a, b), e = W(a);
	$i(e, "focus", d, false);
	$i(e, hj, d, false);
	$i(e, "blur", cU(b), false);
	$i(e, jj, dU(b, a), false);
	if (ag) {
		$i(e, "keyup", dU(b, a), false);
		$i(c, ij, eU(b), false);
		$i(c, zA, fU(b), false);
		b.Vl = 0;
		b.ng = false;
	}
	return b;
}
function eU(a) {
	return function () {
		a.ng = true;
	};
}
function fU(a) {
	return function () {
		a.ng = false;
	};
}
function bU(a, b, c) {
	return function () {
		var d = W(b), e = Rl(d), f = W(a);
		if (ag) {
			e = uR(d);
		}
		Wa(f[F], e.x + X);
		f[F].top = e.y + e.h + X;
		Da(f, "DP_popup_div");
		l(f[F], M);
		mb(f[F], 300);
		c.Tq(Uk().gf(Wg, la(Je)));
		c.Pa();
		if (WT) {
			var g = Rl(c.wl());
			YT(true, c);
			Wa(WT[F], g.x + X);
			WT[F].top = g.y + X;
			Fa(WT[F], g.w + X);
			ob(WT[F], g.h + X);
			mb(WT[F], f[F][wd] - 1);
			l(WT[F], M);
		}
		var i = jT(d[B]);
		if (i) {
			i = i.Ni > -2 ? i.l : null;
		}
		i && c.Vd(i, i, false);
		oA(c);
		return true;
	};
}
function cU(a) {
	return function (b) {
		if (!a.Mb()) {
			return true;
		}
		var c;
		if (Q) {
			var d = Rl(a.wl());
			c = d[ld](Zl(b));
		} else {
			if (ag) {
				c = a.ng;
			} else {
				var e = b.yb.explicitOriginalTarget;
				c = wA(a.wl(), e);
			}
		}
		if (!c) {
			a.V();
			YT(false, a);
		}
		return true;
	};
}
function aU(a, b) {
	return function () {
		var c = a.getSelection();
		if (!c) {
			return;
		}
		var d = W(b);
		Oa(d, gt(c));
		a.V();
		YT(false, a);
		d[Hy](d);
	};
}
function dU(a, b) {
	return function (c) {
		if (!a.Mb()) {
			return;
		}
		var d = Mz(c);
		if (rR(c, a)) {
			return;
		}
		if (ag && (typeof d == "undefined" || d == 9)) {
			a.V();
		} else {
			if (d == 38 || d == 40) {
				a.sr = false;
				var e = a.getSelection();
				if (!e) {
					return;
				}
				a.Vd(e.rf(d == 38 ? -1 : 1), undefined, false);
			} else {
				if (d == 13 || d == 9) {
					if (a.sr) {
						YT(false, a);
						a.V();
					} else {
						pa(aU(a, b), 0);
					}
				} else {
					a.sr = true;
				}
			}
		}
	};
}
R.ks = $T;
function cI(a, b) {
	var c = "<span class=group>  <input class=text id=%FID-%_DR_SD size=10    onchange=\"_DR_Check(this,'%FID',_DR_SD)\">  <input class=text id=%FID-%_DR_ST size=8 onchange=\"_DR_Check(this,'%FID',_DR_ST)\"></span>  \u5230 <span class=group><input class=text id=%FID-%_DR_ED size=10 onchange=\"_DR_Check(this,'%FID',_DR_ED)\"><input class=text id=%FID-%_DR_ET size=8 onchange=\"_DR_Check(this,'%FID',_DR_ET)\"></span><span class=group>  <input type=checkbox id=%FID-%_DR_AD    onclick=\"_DR_Check(this, '%FID',_DR_AD)\">  <label for=%FID-%_DR_AD>\u5168\u5929</label></span><input type=hidden name=%INPUTNAME id=%FID-%_DR_REAL>"[A](/\'%([_A-Z]+)\'/g, function (d, e) {
		switch (e) {
		  case "FID":
			return vg(a);
		  case "INPUTNAME":
			return vg(b);
		  default:
			if (e in window) {
				return vg(window[e]);
			}
		}
	});
	c = c[A](/%([_A-Z]+)/g, function (d, e) {
		switch (e) {
		  case "FID":
			return a;
		  case "INPUTNAME":
			return b;
		  default:
			if (e in window) {
				return window[e];
			}
		}
	});
	return c;
}
function iI(a, b, c) {
	jH(a, b, c);
	gU(a);
	W("masterForm")[hz][PA][B] == LA && hU(a);
}
function gU(a) {
	if (!W(a + "-real")) {
		return;
	}
	$T(a + to + _DR_SD);
	$T(a + to + _DR_ED);
	PT(a + to + _DR_ST, a + to + _DR_ET, a + to + _DR_SD, a + to + _DR_ED);
}
function hU(a) {
	if (a != "when") {
		return;
	}
	var b = W(a + to + _DR_AD)[Jb], c = document.masterForm;
	if (c) {
		var d = c.trp;
		if (d) {
			Ka(d[b ? 0 : 1], true);
		}
	}
}
function jH(a, b, c) {
	var d = false, e = W(a + to + _DR_REAL);
	iU = true;
	try {
		var f = !(b instanceof ei || b instanceof Jh);
		Ka(W(a + to + _DR_AD), f);
		Oa(W(a + to + _DR_SD), b ? $Q(b) : M);
		var g = M;
		if (c) {
			var i = c;
			if (f && !b.T(c)) {
				i = jU(c);
			}
			g = $Q(i);
		}
		Oa(W(a + to + _DR_ED), g);
		if (f) {
			Oa(W(a + to + _DR_ST), "?:??");
			Oa(W(a + to + _DR_ET), "?:??");
		} else {
			Oa(W(a + to + _DR_ST), b ? bR(b) : M);
			Oa(W(a + to + _DR_ET), c ? bR(c) : M);
		}
		var j = b && c ? b + "/" + c : M;
		if (j !== e[B]) {
			Oa(e, j);
			d = true;
		}
		kU(a);
	}
	finally {
		iU = false;
	}
	d && cf == typeof e[Hy] && e[Hy][G](e, undefined);
}
function XG(a) {
	return W(a + to + _DR_REAL)[B];
}
function lU(a) {
	for (var b = 0; b < mU[t]; ++b) {
		var c = mU[b], d = W(a + to + c);
		U != d[F][xd] && d[jc]();
	}
	kU(a);
	for (var b = 0; b < mU[t]; ++b) {
		var c = mU[b], d = W(a + to + c);
		if (U == d[F][xd]) {
			continue;
		}
		if (vm(d, nU) || vm(d, oU) || vm(d, pU)) {
			return true;
		}
	}
	return false;
}
function jU(a) {
	if (!a.l) {
		return a;
	}
	var b = dR(a);
	b.l -= 1;
	return !(a instanceof di || a instanceof ei) ? b.H() : b.Fa();
}
function qU(a) {
	var b, c, d = XG(a)[Lc](/^([0-9\?]{8,}(?:T[0-9\?]{6})?)\/([0-9\?]{8,}(?:T[0-9\?]{6})?)$/);
	if (d) {
		b = ji(d[1]);
		c = ji(d[2]);
	} else {
		var e = W(a + to + _DR_AD)[Jb], f = new Uh;
		f.B = f.z = f.l = f.F = f.D = f.L = NaN;
		b = c = e ? f.Fa() : f.bc();
	}
	return [b, c];
}
var iU = false;
function rU(a) {
	if (a < 2050) {
		return a;
	}
	a = ka(ma(a)[I](0, 4), 10);
	if (a > 2050) {
		a = 2050;
	}
	return a;
}
function _DR_Check(a, b, c) {
	if (iU) {
		return;
	}
	var d = W(b + to + _DR_AD)[Jb], e = qU(b), f = e[0], g = e[1], i;
	i = f && g && f.o() <= g.o() ? g.Db(f) : null;
	var j;
	switch (c) {
	  case _DR_SD:
		var m = jT(a[B]);
		j = m && m.Ni > -2;
		if (j) {
			f = dR(f);
			f.B = rU(m.l.B);
			f.z = m.l.z;
			f.l = m.l.l;
			f = d ? f.Fa() : f.bc();
			sU(a, $Q(f));
		}
		break;
	  case _DR_ED:
		var n = jT(a[B]);
		j = n && n.Ni > -2;
		if (j) {
			if (!(n[QQ] & 1)) {
				n.B = n.z < f.z || n.z === f.z && n.l < f.l ? f.B + 1 : f.B;
			}
			g = dR(g);
			g.B = rU(n.l.B);
			g.z = n.l.z;
			g.l = n.l.l;
			if (d) {
				g.l += 1;
			}
			g = d ? g.Fa() : g.bc();
			sU(a, $Q(d ? jU(g) : g));
		}
		break;
	  case _DR_ST:
		var p = vT(W(b + to + _DR_ST)[B], null);
		j = !!p;
		if (j && !d) {
			f = dR(f);
			f.F = p.F;
			f.D = p.D;
			f.L = p.L;
			f = f.bc();
			sU(a, bR(f));
		}
		break;
	  case _DR_ET:
		var s = !d && f.Fa().T(g.Fa()) ? f : null, u = vT(W(b + to + _DR_ET)[B], s);
		j = !!u;
		if (j && !d) {
			g = dR(g);
			g.F = u.F;
			g.D = u.D;
			g.L = u.L;
			g = g.bc();
			sU(a, bR(g));
			if (f && g.o() < f.o() && f.Fa().T(g.Fa())) {
				g = dR(g);
				g.l += 1;
				g = g.bc();
				sU(W(b + to + _DR_ED), $Q(g));
			}
		}
		break;
	  case _DR_AD:
		j = true;
		hU(b);
		if (d) {
			if (f) {
				f = f.Fa();
			}
			if (g) {
				g = dR(g);
				ua(g.l) || (g.l += 1);
				g = g.Fa();
			}
		} else {
			if (f) {
				f = dR(f);
				var p = vT(W(b + to + _DR_ST)[B], null);
				p || (p = hi("T100000"));
				f.F = p.F;
				f.D = p.D;
				f.L = p.L;
				f = f.bc();
			}
			if (g) {
				g = dR(g);
				var s = !d && f.Fa().T(g.Fa()) ? f : null, u = vT(W(b + to + _DR_ET)[B], s);
				if (!u && f) {
					u = Vh(0, 0, 0, f.F, f.D + Tr, f.L).Sm();
				}
				ua(g.l) || (g.l -= 1);
				if (u) {
					g.F = u.F;
					g.D = u.D;
					g.L = u.L;
				}
				g = g.bc();
			}
			if (f) {
				Oa(W(b + to + _DR_ST), bR(f));
			}
			if (g) {
				Oa(W(b + to + _DR_ET), bR(g));
			}
		}
		if (g) {
			Oa(W(b + to + _DR_ED), $Q(d ? jU(g) : g));
		}
		break;
	}
	if (_DR_AD != c) {
		j ? ym(a, nU) : xm(a, nU);
	}
	var v = i && (c == _DR_SD || c == _DR_ST);
	if (f && f.Oa() && v) {
		var w = dR(f);
		w.Kf(i);
		g = d ? w.Fa() : w.bc();
		Oa(W(b + to + _DR_ED), $Q(d ? jU(g) : g));
		if (!d) {
			Oa(W(b + to + _DR_ET), bR(g));
		}
	}
	if (f && g) {
		var x = W(b + to + _DR_REAL);
		Oa(x, f + "/" + g);
		x[Hy] instanceof qa && x[Hy][G](x, undefined);
	}
	kU(b);
}
function kU(a) {
	var b = qU(a), c = b[0], d = b[1], e = W(a + to + _DR_AD)[Jb];
	if (e) {
		l(W(a + to + _DR_ST)[F], U);
		l(W(a + to + _DR_ET)[F], U);
	} else {
		l(W(a + to + _DR_ST)[F], M);
		l(W(a + to + _DR_ET)[F], M);
	}
	if (e ? c.o() < d.o() : c.o() <= d.o()) {
		ym(W(a + to + _DR_ED), oU);
		ym(W(a + to + _DR_ET), oU);
	} else {
		xm(W(a + to + _DR_ED), oU);
		xm(W(a + to + _DR_ET), oU);
	}
	tU(a, _DR_ST, uU(c));
	tU(a, _DR_ET, uU(d));
	tU(a, _DR_SD, vU(c));
	tU(a, _DR_ED, vU(d));
}
function uU(a) {
	return a instanceof ei && ua(a.F + a.D + a.L);
}
function vU(a) {
	return ua(a.B + a.z + a.l);
}
function tU(a, b, c) {
	var d = W(a + to + b);
	c ? xm(d, pU) : ym(d, pU);
}
function sU(a, b) {
	iU = true;
	try {
		Oa(a, b);
	}
	finally {
		iU = false;
	}
}
var _DR_SD = "sd", _DR_ST = "st", _DR_ED = "ed", _DR_ET = "et", _DR_AD = "ad", _DR_REAL = "real", nU = "dr-warning", oU = "dr-unordered", pU = "dr-partial", mU = [_DR_SD, _DR_ED, _DR_ST, _DR_ET];
function wU(a, b, c) {
	a = a[A](/(?:\r\n?|\n)[ \t]/g, M);
	if (!a) {
		return [];
	}
	var d = a[Vb](/[\r\n]+/), e = [], f = new RegExp("^(?:" + b + ")[;:]", oC);
	for (var g = 0; g < d[t]; ++g) {
		!d[g][Lc](f) != !c && e[q](d[g]);
	}
	return e;
}
function xU(a) {
	lb(this, null);
	this.Vj = {};
	this.content = M;
	var b = a[A](/(?:\r\n?|\n)[ \t]/g, M)[Lc](/^((?:[^:;\"]|\"[^\"]*\")+)(;(?:[^:\"]|\"[^\"]*\")+)?:([\s\S]*)$/);
	b || yU(a);
	lb(this, b[1][oz]());
	var c = b[2];
	this.content = b[3];
	if (c) {
		var d = c;
		do {
			var b = d[A](/^;([^=]+)=(?:([^\";]*)|\"([^\"]*)\")/, M);
			b || zU(d);
			d = d[I](b[0][t]);
			var e = b[1][oz](), f = b[2] && !b[3] ? b[3] : b[2];
			e in this.Vj && AU(b[0]);
			this.Vj[e] = f;
		} while (d);
	}
	this.G = BU(this[td], this.Vj, this.content, CU);
}
var _RRule = xU;
xU[z].Me = function () {
	var a = [];
	a[q](this[td]);
	for (var b in this.Vj) {
		a[q](";", b, "=");
		var c = this.Vj[b], d = M;
		if (c && c[gc] === Array) {
			for (var e = 0; e < c[t]; ++e) {
				if (e) {
					d += ",";
				}
				var f = c[e];
				d += (f.Me || f[r])[G](f);
			}
		} else {
			switch (b) {
			  default:
				d = (c.Me || c[r])[G](c);
				break;
			}
		}
		d[Lc](/[;:]/) ? a[q](Af, d, Af) : a[q](d);
	}
	a[q](Ke);
	var g = false;
	for (var b in this.G) {
		if (g) {
			a[q](";");
		} else {
			g = true;
		}
		a[q](b, "=");
		var c = this.G[b], d = M;
		if (c && c[gc] === Array) {
			for (var e = 0; e < c[t]; ++e) {
				if (e) {
					d += ",";
				}
				var f = c[e];
				d += (f.Me || f[r])[G](f);
			}
		} else {
			switch (b) {
			  case "FREQ":
				d = DU[c] || null;
				break;
			  case "WKST":
				d = EU[c] || null;
				break;
			  case FU:
				d = c[r]();
				break;
			  default:
				d = (c.Me || c[r])[G](c);
				break;
			}
		}
		a[q](d);
	}
	return a[K](M);
};
xU[z].fs = function (a) {
	if ("BYSETPOS" in this.G) {
		return null;
	}
	if (GU in this.G && HU in this.G) {
		return null;
	}
	var b = this.G.FREQ, c = this.G[IU] || 1, d;
	switch (b) {
	  case 0:
	  case 1:
	  case 2:
		return null;
	  case 3:
		d = 1 === c ? "\u6bcf\u5929" : "\u6bcf\u9694 " + c + " \u5929";
		break;
	  case 4:
		d = 1 === c ? "\u6bcf\u5468" : "\u6bcf\u9694 " + c + " \u5468";
		break;
	  case 5:
		d = 1 === c ? "\u6bcf\u6708" : "\u6bcf " + c + " \u4e2a\u6708";
		break;
	  case 6:
		d = 1 === c ? "\u6bcf\u5e74" : "\u6bcf\u9694 " + c + " \u5e74";
		break;
	  default:
		break;
	}
	var e;
	switch (b) {
	  case 3:
		e = M;
		break;
	  case 4:
		var f;
		if (HU in this.G) {
			var g = this.G[HU];
			f = new Array(g[t]);
			for (var i = 0; i < g[t]; ++i) {
				f[i] = g[i].Df;
			}
		} else {
			f = [a.ya()];
		}
		e = xR(f) ? oe(wR(f, true)) : "\u5728 " + wR(f, true);
		break;
	  case 5:
		if (HU in this.G) {
			var j = JU(this.G[HU], 5);
			if (!j) {
				return null;
			}
			if (j.Hb[0] < 0) {
				var m = j.Hb[0];
				e = m == -1 ? "\u4e0a" + wR(j.Wb) : "\u6708\u5e95\u524d\u7b2c " + -m + " \u5468\u7684\u661f\u671f " + wR(j.Wb);
			} else {
				if (j.yn) {
					e = "\u6bcf\u4e2a" + wR(j.Wb);
				} else {
					if (1 !== j.Hb[t]) {
						e = "\u5728\u672c\u6708\u7b2c " + cR(j.Hb) + " \u5468\u7684\u661f\u671f " + wR(j.Wb);
					} else {
						var n;
						switch (j.Hb[0]) {
						  case 1:
							n = gS;
							break;
						  case 2:
							n = fS;
							break;
						  case 3:
							n = eS;
							break;
						  case 4:
							n = dS;
							break;
						  case 5:
							n = cS;
							break;
						  default:
							return null;
						}
						e = n(wR(j.Wb));
					}
				}
			}
		} else {
			var p;
			p = GU in this.G ? this.G[GU] : [a.l];
			if (1 === p[t] && p[0] < 0) {
				e = -1 === p[0] ? "\u6700\u540e\u4e00\u5929" : "\u6708\u4f4e\u7684\u6700\u540e " + -p[0] + " \u5929";
			} else {
				if (KU(p)) {
					return null;
				} else {
					e = 1 !== p[t] ? "\u5728\u672c\u6708\u7684\u7b2c " + cR(p) + " \u5929" : "\u5728\u7b2c " + p[0] + " \u5929";
				}
			}
		}
		break;
	  case 6:
		var s = null, u = null, v = null, w = null;
		if (LU in this.G) {
			s = this.G[LU];
			if (HU in this.G) {
				u = this.G[HU];
			} else {
				v = GU in this.G ? this.G[GU] : [a.l];
			}
		} else {
			if (GU in this.G) {
				s = [a.z];
				v = this.G[GU];
			} else {
				if (MU in this.G) {
					w = this.G[MU];
				} else {
					if (NU in this.G) {
						var x = this.G[NU];
						if (HU in this.G) {
							var g = this.G[HU];
							u = [];
							for (var y = 0; y < g[t]; ++y) {
								if (0 === g[y].od) {
									for (var i = 0; i < x[t]; ++i) {
										u[q](new OU(x[i], g[y].Df));
									}
								} else {
									for (var i = 0; i < x[t]; ++i) {
										if (x[i] === g[y].od) {
											u[q](g[y]);
											break;
										}
									}
								}
							}
						} else {
							var C = a.ya();
							u = [];
							for (var i = 0; i < x[t]; ++i) {
								u[q](new OU(x[i], C));
							}
						}
					} else {
						if (HU in this.G) {
							s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
							u = this.G[HU];
						} else {
							s = [a.z];
							v = [a.l];
						}
					}
				}
			}
		}
		if (w) {
			if (KU(w)) {
				if (1 !== w[t]) {
					return null;
				}
				e = -1 == w[0] ? "\u5e74\u5ea6\u7684\u6700\u540e\u4e00\u5929" : "\u5e74\u5e95\u524d\u7684\u6700\u540e " + -w[0] + " \u5929";
			} else {
				e = 1 !== w[t] ? "\u5728\u672c\u5e74\u5ea6\u7684 " + cR(w) + " \u5929" : "\u5728\u672c\u5e74\u5ea6\u7684\u7b2c " + w[0] + " \u5929";
			}
		} else {
			if (v) {
				if (KU(v)) {
					if (1 !== v[t]) {
						return null;
					}
					e = -1 == v[0] ? vR(s) + " \u7684\u6700\u540e\u4e00\u5929" : vR(s) + " \u6708\u4f4e\u7684\u6700\u540e " + -v[0] + " \u5929";
				} else {
					e = 1 === v[t] ? 1 === s[t] ? "\u5728 " + (s[0] + "\u6708") + v[0] + "\u65e5" : qe(v[0], vR(s)) : "\u5728 " + vR(s) + " \u6708\u7684\u7b2c " + cR(v) + " \u5929";
				}
			} else {
				if (u) {
					var j = JU(u, s ? 5 : 53);
					if (!j) {
						return null;
					}
					if (s) {
						if (j.Hb[0] < 0) {
							e = -1 !== j.Hb[0] ? vR(s) + " \u6708\u5e95\u524d\u7b2c " + -j.Hb[0] + " \u5468\u7684\u661f\u671f " + wR(j.Wb) : "\u5728 " + vR(s) + " \u6708\u7684\u6700\u540e\u4e00\u4e2a\u661f\u671f " + wR(j.Wb);
						} else {
							if (j.yn) {
								e = vR(s) + " \u7684\u6bcf\u4e2a" + wR(j.Wb);
							} else {
								if (1 !== j.Hb[t]) {
									e = "\u5728 " + vR(s) + " \u6708\u7b2c " + cR(j.Hb) + " \u5468\u7684\u661f\u671f " + wR(j.Wb);
								} else {
									var n;
									switch (j.Hb[0]) {
									  case 1:
										n = bS;
										break;
									  case 2:
										n = aS;
										break;
									  case 3:
										n = $R;
										break;
									  case 4:
										n = ZR;
										break;
									  case 5:
										n = YR;
										break;
									  default:
										return null;
									}
									e = n(wR(j.Wb), vR(s));
								}
							}
						}
					} else {
						e = j.Hb[0] < 0 ? -1 !== j.Hb[0] ? "\u5e74\u5e95\u524d\u7b2c " + -j.Hb[0] + " \u5468\u7684\u661f\u671f " + wR(j.Wb) : "\u5e74\u5ea6\u6700\u540e\u4e00\u4e2a" + wR(j.Wb) : j.yn ? "\u5e74\u5ea6\u7684\u6bcf" + wR(j.Wb) : 1 !== j.Hb[t] ? "\u5728\u672c\u5e74\u5ea6\u7b2c " + cR(j.Hb) + " \u5468\u7684\u661f\u671f " + wR(j.Wb) : se(wR(j.Wb), j.Hb[0]);
					}
				} else {
					return null;
				}
			}
		}
		break;
	}
	var D;
	if (FU in this.G) {
		D = "\u76f4\u5230 " + ht(this.G[FU], false);
	} else {
		if (PU in this.G) {
			var L = this.G[PU];
			if (1 == L) {
				return "\u4e00\u6b21";
			}
			D = L + " \u6b21";
		} else {
			D = "&#32;";
		}
	}
	var O;
	O = a instanceof Jh ? D + " \u7684 " + d + qg + e + qg + cn(a) : d + qg + e + Wj + D;
	O = O[A](/(?:&nbsp;|&\#32;)+$/, M);
	O = O[A](/[,\s]+$/, M);
	O = O[A](/\s*,+/g, ",");
	O = O[A](/^[\s,]+/g, M);
	return O;
};
xU[z].Py = function () {
	var a, b = 0;
	switch (this.G.FREQ) {
	  case 3:
		a = 1;
		break;
	  case 4:
		a = 7;
		if (HU in this.G) {
			b = this.G[HU][t];
		}
		break;
	  case 5:
		a = 30;
		if (HU in this.G) {
			var c = this.G[HU];
			for (var d = 0; d < c[t]; ++d) {
				b += c[d].od ? 1 : 4;
			}
		} else {
			if (GU in this.G) {
				b = this.G[GU][t];
			}
		}
		break;
	  case 6:
		a = 365;
		var e = 12;
		if (LU in this.G) {
			e = this.G[LU][t];
		}
		if (HU in this.G) {
			var c = this.G[HU];
			for (var d = 0; d < c[t]; ++d) {
				b += (c[d].od ? 1 : 4) * e;
			}
		} else {
			if (GU in this.G) {
				b += e * this.G[GU][t];
			} else {
				if (MU in this.G) {
					b += this.G[MU][t];
				}
			}
		}
		break;
	  default:
		a = 0;
	}
	b = b || 1;
	return a / b * (this.G[IU] || 1) | 0;
};
var EU = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"], DU = ["SECONDLY", "MINUTELY", "HOURLY", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"], FU = "UNTIL", PU = "COUNT", IU = "INTERVAL", HU = "BYDAY", LU = "BYMONTH", GU = "BYMONTHDAY", NU = "BYWEEKNO", MU = "BYYEARDAY";
function QU(a, b) {
	var c = ui(a, b[oz]());
	return c < 0 ? null : c;
}
function OU(a, b) {
	this.od = a;
	this.Df = b;
}
xa(OU[z], function () {
	return "[weekday num=" + this.od + ", wday=" + (EU[this.Df] || null) + "]";
});
OU[z].Me = function () {
	return this.od ? M + this.od + (EU[this.Df] || null) : EU[this.Df] || null;
};
function RU(a, b) {
	return function (c) {
		var d = c[Vb](/,/);
		for (var e = 0; e < d[t]; ++e) {
			var f = ka(d[e], 10), g = f < 0 ? -f : f;
			a <= g && b >= g || zU(c);
			d[e] = f;
		}
		return d;
	};
}
function SU(a, b) {
	return function (c) {
		var d = c[Vb](/,/);
		for (var e = 0; e < d[t]; ++e) {
			var f = ka(d[e], 10);
			a <= f && b >= f || zU(c);
			d[e] = f;
		}
		return d;
	};
}
function KU(a) {
	for (var b = 0; b < a[t]; ++b) {
		if (a[b] < 0) {
			return true;
		}
	}
	return false;
}
function JU(a, b) {
	var c = new Array(b * 2 + 1);
	for (var d = c[t]; --d >= 0; ) {
		c[d] = 0;
	}
	for (var d = 0; d < a[t]; ++d) {
		var e = a[d];
		if (e.od < -b || e.od > b) {
			return null;
		}
		c[e.od + b] |= 1 << e.Df;
	}
	var f = 0, g = -1, i = 0;
	for (var d = 0; d < c[t]; d++) {
		var j = c[d];
		f |= j;
		if (d > b) {
			if (0 !== (c[d] |= c[b])) {
				++i;
			}
		} else {
			if (d < b && j) {
				if (g >= 0 && g !== d) {
					return null;
				}
				g = d;
			}
		}
	}
	if (g >= 0) {
		if (i) {
			return null;
		}
		for (var d = 0; d < c[t]; d++) {
			if (c[d]) {
				if (f != c[d]) {
					return null;
				}
			}
		}
	}
	var m = [];
	for (var d = 0; f; ++d, f >>= 1) {
		f & 1 && m[q](d);
	}
	var n, p = false;
	if (g >= 0) {
		n = [g - b];
	} else {
		n = [];
		p = true;
		for (var d = b + 1; d < c[t]; d++) {
			if (c[d]) {
				n[q](d - b);
			} else {
				p = false;
			}
		}
	}
	return {Wb:m, Hb:n, yn:p};
}
var TU = [];
function UU(a, b, c) {
	for (var d in b) {
		TU[q](a);
		try {
			b[d] = c[a][G](c, d, b[d]);
		}
		finally {
			TU.pop();
		}
	}
}
function VU(a, b, c, d) {
	if (b[Lc](/^X-[A-Z0-9\-]+$/i)) {
		return c;
	}
	TU[q](a);
	try {
		c = d[a][G](d, b, c);
	}
	finally {
		TU.pop();
	}
	return c;
}
function WU(a, b, c) {
	TU[q](a);
	try {
		b = c[a][G](c, b);
	}
	finally {
		TU.pop();
	}
	return b;
}
function BU(a, b, c, d) {
	TU[q](a);
	try {
		return d[a][G](d, b, c);
	}
	finally {
		TU.pop();
	}
}
function XU(a, b) {
	XQ("parameter " + a + " has bad value [[" + b + "]] in " + TU[K]("::"));
}
function zU(a, b) {
	b = b ? " : " + b : M;
	XQ("cannot parse [[" + a + "]] in " + TU[K]("::") + b);
}
function AU(a) {
	XQ("duplicate part [[" + a + "]] in " + TU[K]("::"));
}
function YU(a, b) {
	XQ("missing part " + a + " from [[" + b + "]] in " + TU[K]("::"));
}
function yU(a) {
	XQ("cannot parse content line [[" + a + "]] in " + TU[K]("::"));
}
var CU = {RRULE:function (a, b) {
	UU("rrulparam", a, this);
	return WU("recur", b, this);
}, rrulparam:function (a, b) {
	XU(a, b);
}, recur:function (a) {
	var b = a[Vb](/;/), c = {};
	for (var d = 0; d < b[t]; ++d) {
		var e = b[d], f = b[d][Lc](/^(FREQ|UNTIL|COUNT|INTERVAL|BYSECOND|BYMINUTE|BYHOUR|BYDAY|BYMONTHDAY|BYYEARDAY|BYWEEKDAY|BYWEEKNO|BYMONTH|BYSETPOS|WKST|X-[A-Z0-9\-]+)=([\s\S]*)/i);
		f || zU(e, undefined);
		var g = f[1][oz]();
		g in c && AU(e);
		c[g] = f[2];
	}
	"FREQ" in c || YU("FREQ", a);
	"UNTIL" in c && "COUNT" in c && zU(a, "UNTIL & COUNT are exclusive");
	for (var i in c) {
		c[i] = WU(i, c[i], ZU);
	}
	return c;
}, EXDATE:function (a, b) {
	UU("exdtparam", a, this);
	b || yU(b);
	var c = b[Vb](/,/);
	for (var d = 0; d < c[t]; ++d) {
		c[d] = WU("exdtval", c[d], undefined);
	}
	return c;
}, exdtparam:function (a, b) {
	if ("VALUE" == a) {
		b[Lc](/^DATE-TIME|DATE$/i) || XU(a, b);
		return b;
	} else {
		return VU("tzidparam", a, b, this);
	}
}, tzidparam:function (a, b) {
	"TZID" != a && XU(a, b);
	var c = b[Lc](/\/?(.*)$/);
	c || XU(a, b);
	return c[1];
}, VALUE:function (a, b) {
	switch (a) {
	  case "DATE-TIME":
		return Jh;
	  case "DATE":
		return Lh;
	  case "TIME":
		return Ph;
	  case "PERIOD":
		return Wh;
	  case "BINARY":
		return ma;
	  default:
		XU(a, b);
	}
}, ENDMARKER:null}, ZU = {FREQ:function (a) {
	return WU("freq", a, this);
}, UNTIL:function (a) {
	return WU("enddate", a, this);
}, COUNT:function (a) {
	a[Lc](/^[0-9]+$/) || yU(a);
	return ka(a, 10);
}, INTERVAL:function (a) {
	a[Lc](/^[0-9]+$/) || yU(a);
	return ka(a, 10);
}, BYSECOND:function (a) {
	return WU("byseclist", a, this);
}, BYMINUTE:function (a) {
	return WU("byminlist", a, this);
}, BYHOUR:function (a) {
	return WU("byhrlist", a, this);
}, BYDAY:function (a) {
	return WU("bywdaylist", a, this);
}, BYMONTHDAY:function (a) {
	return WU("bymodaylist", a, this);
}, BYYEARDAY:function (a) {
	return WU("byyrdaylist", a, this);
}, BYWEEKNO:function (a) {
	return WU("bywknolist", a, this);
}, BYMONTH:function (a) {
	return WU("bymolist", a, this);
}, BYSETPOS:function (a) {
	return WU("bysplist", a, this);
}, WKST:function (a) {
	return WU("weekday", a, this);
}, freq:function (a) {
	var b = QU(DU, a);
	b || yU(a);
	return b;
}, enddate:function (a) {
	var b = hi(a);
	b instanceof Lh || b instanceof Jh || yU(a);
	return b;
}, byseclist:SU(0, 59), byminlist:SU(0, 59), byhrlist:SU(0, 23), bywdaylist:function (a) {
	var b = a[Vb](/,/);
	for (var c = 0; c < b[t]; ++c) {
		var d = b[c], e = d[Lc](/^([+\-]?\d\d?)?(SU|MO|TU|WE|TH|FR|SA)$/i);
		e || zU(d);
		var f = QU(EU, e[2]), g;
		if (e[1]) {
			g = ka(e[1], 10);
			var i = g < 0 ? -g : g;
			1 <= i && 53 >= i || zU(d);
		} else {
			g = 0;
		}
		b[c] = new OU(g, f);
	}
	return b;
}, weekday:function (a) {
	var b = QU(EU, a);
	null === b && yU(a);
	return b;
}, bymodaylist:RU(1, 31), byyrdaylist:RU(1, 366), bywknolist:RU(1, 53), bymolist:RU(1, 12), bysplist:RU(1, 366), ENDMARKER:null};
function $U(a) {
	aV = true;
	try {
		bV(a);
		cV(a);
	}
	finally {
		aV = false;
	}
	dV(a);
}
function dV(a) {
	if (!W(a)) {
		return;
	}
	$T(a + to + eV);
	$T("hr-" + WR);
}
function fV(a, b, c) {
	var d, e = 1, f = 1 << b.ya(), g = false, i = false, j = null, m = null;
	if (null == c || 1 === c.G[PU]) {
		d = 0;
	} else {
		switch (c.G.FREQ) {
		  case 0:
		  case 1:
		  case 2:
			d = 0;
			break;
		  case 3:
			d = 1;
			break;
		  case 4:
			d = 5;
			if (HU in c.G) {
				var n = 0, p = c.G[HU];
				for (var s = 0; s < p[t]; ++s) {
					n |= 1 << p[s].Df;
				}
				if (n) {
					switch (n) {
					  case 62:
						d = 2;
						break;
					  case 42:
						d = 3;
						break;
					  case 20:
						d = 4;
						break;
					  default:
						break;
					}
					f = n;
				}
			}
			break;
		  case 5:
			d = 6;
			if (GU in c.G) {
				i = true;
			} else {
				if (HU in c.G) {
					g = true;
				} else {
					i = true;
				}
			}
			break;
		  case 6:
			d = 7;
			break;
		}
		if (d !== 0) {
			e = c.G[IU] || 1;
			if (FU in c.G) {
				j = c.G[FU];
			}
		}
	}
	m = EU[d !== 0 ? c.G.WKST : lR()] || null;
	Oa(W(a + "-orr"), c ? c.Me() : M);
	Oa(W(a + "-odt"), b ? b[r]() : M);
	Oa(W(a + "-oedt"), j ? j[r]() : M);
	var u = W(a + to + gV), v = false;
	if (u[Oy] != d) {
		By(u, d);
		v = true;
	}
	var w = W(a + to + hV), x = false;
	if (w[B] != e) {
		Oa(w, e[r]());
		x = true;
	}
	for (var s = 0; s < 7; ++s) {
		Ka(W(a + to + s), !!(f & 1 << s));
	}
	var y = false;
	function C(D) {
		if (!D[Jb]) {
			Ka(D, true);
			y = true;
		}
	}
	if (j) {
		C(W(a + "-until"));
		Oa(W(a + to + eV), gt(j));
	} else {
		C(W(a + "-noend"));
	}
	if (g) {
		C(W(a + to + iV));
	} else {
		i && C(W(a + "-byday-month"));
	}
	Oa(W(a + "-wkst"), m || M);
	aV = true;
	try {
		if (v) {
			bV(a);
		} else {
			x && jV(a);
		}
		y && cV(a);
	}
	finally {
		aV = false;
	}
}
function kV(a, b) {
	var c = null, d = ka(W(a + to + hV)[B], 10) || 1, e = null, f = W(a + to + gV)[Oy];
	switch (lV[f]) {
	  case 0:
		return null;
	  case 1:
		c = 3;
		break;
	  case 2:
		c = 4;
		e = [];
		for (var g = 0; g < 7; ++g) {
			W(a + to + g)[Jb] && e[q](new OU(0, g));
		}
		break;
	  case 3:
		c = 5;
		if (W(a + to + iV)[Jb]) {
			var i = b.ya(), j = ((b.l - 1) / 7 | 0) + 1;
			if (j > 4) {
				j = -1;
			}
			e = [new OU(j, i)];
		}
		break;
	  case 4:
		c = 6;
		break;
	  default:
		break;
	}
	var m = null, n = QU(EU, W(a + "-wkst")[B]);
	if (W(a + "-until")[Jb]) {
		m = mV(a, b);
	}
	switch (f) {
	  case 2:
		e = [new OU(0, 1), new OU(0, 2), new OU(0, 3), new OU(0, 4), new OU(0, 5)];
		break;
	  case 3:
		e = [new OU(0, 1), new OU(0, 3), new OU(0, 5)];
		break;
	  case 4:
		e = [new OU(0, 2), new OU(0, 4)];
		break;
	  default:
		break;
	}
	var p = new xU("RRULE:FREQ=DAILY");
	p.G.FREQ = c;
	if (d && 1 !== d) {
		p.G[IU] = d;
	}
	if (e && e[t]) {
		p.G[HU] = e;
	}
	if (m) {
		p.G[FU] = m;
	}
	if (null !== n) {
		p.G.WKST = n;
	}
	return p;
}
function mV(a, b) {
	var c = W(a + to + eV)[B];
	if (c) {
		var d = jT(c);
		if (d && d.Ni > -2) {
			var e = d.l;
			if (7 !== (d[QQ] & 7)) {
				var f = Fh(e);
				if (!(d[QQ] & 2)) {
					f.z = 12;
				}
				if (!(d[QQ] & 4)) {
					f.l = uh(e.B, e.z);
				}
				return f.H();
			}
			return e;
		}
	}
	var g = W(a + "-oedt")[B];
	if (g) {
		var i = hi(g);
		if (i.o() > b.o()) {
			return i;
		}
	}
	b = b || R.U.xa();
	var f = Fh(b), j = ka(W(a + to + hV)[B], 10) || 1, m = W(a + to + gV)[Oy];
	switch (lV[m]) {
	  case 2:
		f.l += j * 35;
		break;
	  case 3:
		f.z += j * 5;
		break;
	  case 4:
		f.B += j * 5;
		break;
	  default:
		f.l += j * 5;
		break;
	}
	return f.H();
}
function nV(a) {
	try {
		W(a + to + hV)[jc]();
	}
	catch (b) {
	}
	try {
		W(a + to + eV)[jc]();
	}
	catch (b) {
	}
}
var aV = false;
function cV(a) {
	var b = null;
	for (var c = 0; c < oV[t]; ++c) {
		var d = W(a + to + oV[c]), e = W("recur-lbl-" + d.id);
		if (e) {
			if (d[Jb]) {
				xm(e, "recur-checked");
				ym(e, "recur-unchecked");
				if (d[td] === "_endmode" && FU === d[B]) {
					var f = mV(a, R.bI());
					Oa(W(a + to + eV), gt(f));
				}
				b = d[B];
			} else {
				ym(e, "recur-checked");
				xm(e, "recur-unchecked");
			}
		}
		d[Jb] && !aV && pV(e);
	}
	qV(a);
	return true;
}
function pV(a) {
	if ("INPUT" == a[kz] && a[J][Lc](/^text$/i)) {
		rA(a);
		a[B] && a[fz]();
		return true;
	} else {
		for (var b = a[ad]; b; b = b[Ad]) {
			if (pV(b)) {
				return true;
			}
		}
		return false;
	}
}
var lV = [0, 1, 2, 2, 2, 2, 3, 4];
function bV(a) {
	var b = W(a + to + gV)[Oy];
	Da(W(a), "recurui-container " + ["recur-not", "recur-daily", "recur-weekdays", "recur-mwf", "recur-tuth", "recur-weekly", "recur-monthly", "recur-annually"][b]);
	switch (b) {
	  case 6:
		if (!W(a + to + iV)[Jb]) {
			Ka(W(a + "-byday-month"), true);
		}
		break;
	}
	switch (b) {
	  case 2:
	  case 3:
	  case 4:
		Oa(W(a + to + hV), mt);
		break;
	}
	if (0 == b && lR) {
		var c = EU[lR()] || null;
		Oa(W(a + "-wkst"), c || M);
	}
	jV(a);
	"_WHACK" in window && _WHACK();
}
function jV(a) {
	var b = oa(W(a + to + hV)[B]), c = W(a + to + gV)[Oy], d = lV[c], e = W(a + "-pdesc"), f;
	if ("ru" == He && d === 4) {
		var g = b % 10;
		f = (b % 100 / 10 | 0) !== 1 ? g === 1 ? "\u5e74" : g < 5 && g > 1 ? "\u0433\u043e\u0434\u0430" : "\u5e74" : "\u5e74";
	} else {
		f = b === 1 ? [M, "\u5929", "\u5468", "\u4e2a\u6708", "\u5e74"][d] : [M, "\u5929", "\u5468", "\u4e2a\u6708", "\u5e74"][d];
	}
	k(e, f);
	var i;
	switch (d) {
	  default:
		i = b === 1 ? fe : ge;
		break;
	  case 2:
		i = b === 1 ? he : ie;
		break;
	  case 3:
		i = b === 1 ? je : ke;
		break;
	  case 4:
		i = b === 1 ? le : me;
		break;
	}
	k(W(a + "-ptitle"), i);
	qV(a);
}
function rV(a, b) {
	var c = a[B][A](/[^0-9]+/g, M)[A](/^0+/, M);
	if (b && !c) {
		c = mt;
	}
	Oa(a, c);
}
var sV = {};
function qV(a) {
	var b = sV[a];
	if (b && !aV) {
		if (undefined === b.vg) {
			b.vg = pa(function () {
				b.vg = undefined;
				for (var c = 0; c < b[t]; ++c) {
					b[c][G](window, a);
				}
			}, 0);
		}
	}
}
function tV(a, b) {
	a in sV || (sV[a] = []);
	sV[a][q](b);
}
var eV = "enddate", hV = "interval", gV = "mperiod", iV = "byday-week", _recur_mc = bV, _recur_ci = jV, _recur_fce = qV, _recur_crb = cV, _recur_iiv = rV, oV = ["noend", "until"];
var _allowGuestModifyFeature;
function uV(a) {
	var b, c = {};
	for (var b in a) {
		c[b] = a[b];
	}
	var d = c.src || Yn, e = Tx(d), f = [];
	for (var g = 0; g < e[t]; ++g) {
		f[q](YQ(e[g]));
	}
	c.erem = f;
	c.creator = Yn;
	c.src = d;
	c.owner = c.src;
	return vV(LA, 70, 130999, c, 0);
}
function hG(a, b, c, d) {
	var e = a.Pb, f, g, i, j = {};
	Ha(j, a[Gb]);
	j.owner = a.lb;
	j.creator = a.Vb;
	j[Rz] = a[nc];
	j[Tz] = e ? e.Vi : M;
	j[Sz] = e ? e.ek || M : null;
	j.trp = e ? e.Ak : false;
	j.icc = e ? e.wj : "DEFAULT";
	j[WR] = e && e.ph;
	j[Fg] = a.C & 16 ? new Wh(a[H].H(), a.A.H()) : new Wh(a[H], a.A);
	if (b) {
		g = 70;
		f = LA;
		i = 130999;
		j[WR] && wV(j);
		j.src = b;
		var m = {};
		if (c) {
			for (var n in a.Ha()) {
				m[n] = {Kc:0, qf:0, Se:M};
			}
		}
		j.add = m;
		var p = {};
		p[lh] = "DUPLICATE";
		j[Gg] = p;
	} else {
		g = e ? e.Gf : a.C & 256 ? 60 : a.C & 512 ? 30 : 20;
		f = g >= 30 ? "EDIT" : "VIEW";
		if (e) {
			i = e.qm;
			i &= -4161;
		} else {
			i = 4;
			if (a.C & 512) {
				i |= 3080;
			}
		}
		j.eid = a.N;
		j.src = a.src;
		j.add = a.Ha();
		j.erem = jR(a);
		j.sprop = a.$c;
		j[Gg] = a.Sh;
		j.ec = e ? e.Mi : [];
	}
	return vV(f, g, i, j, a.C & 139776, d);
}
function wV(a) {
	var b = a[WR], c = b instanceof Jh, d = a[Fg], e = b.Db(d[H]), f = Fh(d.A);
	f.Kf(e);
	a[Fg] = c ? new Wh(b, f.K()) : new Wh(b, f.H());
}
function vV(a, b, c, d, e) {
	var f = typeof ActiveXObject != "undefined" ? new ActiveXObject("Microsoft.XMLDOM") : document[UQ].createDocument(M, M, null), g = f[Xc]("eventpage");
	f[o](g);
	var i = d.add || {}, j = NA;
	g[hd]("action", a);
	g[hd]("simplified", bi);
	g[hd]("url", j);
	g[hd]("access-level", M + b);
	g[hd]("specialized", M + ((e & 8192) != 0));
	g[hd]("has-overrides", M + ((e & 131072) != 0));
	g[hd]("static-file-prefix", mn || M);
	g[hd]("lang", Ie);
	g[hd]("can-respond", M + ((e & 512) != 0));
	var m = R.U.xa();
	xV(g, m);
	var n = d.eid;
	n && yV(g, n);
	zV(g, i, Yn, d.owner == Yn);
	var p = Ql("secid");
	p && AV(g, p);
	BV(g, c, a, d[Gb] || M);
	var s = d[Fg];
	if (!s && a == LA) {
		s = new Wh(m, m.Sc());
	}
	s && CV(g, c, a, s);
	var u = d[WR];
	u && DV(g, c, a, u.H());
	var v = d[Sz];
	if (a == LA && !v) {
		v = M;
	}
	v != null && EV(g, c, a, v, s, m);
	FV(g, Hn());
	GV(g, c, a, i);
	HV(g, c, a, d[Rz] || M);
	IV(g, c, a, !!d.trp);
	JV(g, c, a, d.icc || "DEFAULT");
	KV(g, c, a, d[Tz]);
	c & 1024 && LV(g, c, a, d.erem);
	var w = d.creator;
	w && MV(g, i, w);
	var x = d.owner;
	x && NV(g, i, x);
	var y = d.src;
	OV(g, c, a, i, y);
	var C = d.sprop || {};
	PV(C);
	QV(g, c, a, C);
	var D = d[Gg];
	D && RV(g, c, a, D);
	SV(g, i);
	TV(g, c, a, i, d.ec || []);
	var L = [Og[Qy], Qg[Qy]];
	c & 8 && L[q](Sg[Qy]);
	(i[y] && i[y].Kc) === 0 && L[q](Pg[Qy]);
	a === LA && L[q](Ng[Qy]);
	UV(g, L);
	VV(g);
	return f;
}
function xV(a, b) {
	var c = a[Fc][Xc]("ref-date");
	WV(c, M + b);
	a[o](c);
}
function yV(a, b) {
	var c = a[Fc][Xc](qz);
	WV(c, b);
	a[o](c);
}
function zV(a, b, c, d) {
	var e = a[Fc][Xc]("self");
	e[hd]("is-signed-in", bi);
	e[hd]("allow-presence-feature", Xk);
	e[hd]("allow-invite-yourself-feature", OQ ? bi : Xk);
	e[hd]("allow-guest-modify-feature", _allowGuestModifyFeature ? bi : Xk);
	e[hd]("allow-google-doc-feature", _allowGoogleDocFeature ? bi : Xk);
	XV(e, b, c, false, d);
	a[o](e);
}
function AV(a, b) {
	var c = a[Fc][Xc]("secid");
	WV(c, b);
	a[o](c);
}
function BV(a, b, c, d) {
	var e = a[Fc][Xc]("summary");
	YV(e, b, c, 32768);
	ZV(e, d);
	a[o](e);
}
function CV(a, b, c, d) {
	var e = d[H] instanceof Jh || d[H] instanceof ei, f = a[Fc][Xc]("dates");
	YV(f, b, c, 16);
	WV(f, d[H] + "/" + d.A);
	$V(f, nR(d));
	aW(f, "start-date", $Q(d[H]));
	e && aW(f, "start-time", bR(d[H]));
	if (e) {
		aW(f, "end-date", $Q(d.A));
		aW(f, "end-time", bR(d.A));
	} else {
		var g = d.A;
		if (!(g instanceof di) || g.Oa()) {
			var i = Fh(d.A);
			i.l -= 1;
			g = i.Fa();
		}
		aW(f, "end-date", $Q(g));
	}
	a[o](f);
}
function DV(a, b, c, d) {
	var e = a[Fc][Xc]("first-start");
	YV(e, b, c, 64);
	WV(e, M + d);
	$V(e, $Q(d));
	a[o](e);
}
function EV(a, b, c, d, e, f) {
	var g = a[Fc][Xc]("rrule");
	YV(g, b, c, 4096);
	var i = bW(d);
	i != null && HU in i.G ? g[hd]("byday", i.G[HU][K](",")) : g[hd]("byday", EU[f.ya()] || null);
	if (i) {
		"BYHOUR" in i.G && g[hd]("byhour", i.G.BYHOUR);
		"BYMINUTE" in i.G && g[hd]("byminute", i.G.BYMINUTE);
		LU in i.G && g[hd]("bymonth", i.G[LU]);
		"BYSECOND" in i.G && g[hd]("bysecond", i.G.BYSECOND);
		"BYSETPOS" in i.G && g[hd]("bysetpos", i.G.BYSETPOS);
		NU in i.G && g[hd]("byweekno", i.G[NU]);
		MU in i.G && g[hd]("byyearday", i.G[MU]);
		PU in i.G && g[hd]("count", i.G[PU]);
		"FREQ" in i.G && g[hd]("freq", DU[i.G.FREQ] || null);
		FU in i.G && g[hd]("until", M + i.G[FU]);
	}
	g[hd]("interval", i && i.G.FREQ || 1);
	var j = i != null ? i.G.WKST : undefined;
	if (j == undefined && c == LA) {
		j = oa(Uk().J(Wg, Je)) || 0;
	}
	j != undefined && g[hd]("wkst", EU[j] || null);
	WV(g, d || M);
	var m = "\u4e0d\u91cd\u590d";
	if (i) {
		var n = f;
		if (e && e[H].Oa()) {
			var p = e[H];
			if (p instanceof ei) {
				n = p.K();
			} else {
				if (p instanceof di) {
					n = p.H();
				}
			}
		}
		m = i.fs(n);
	}
	$V(g, m);
	a[o](g);
}
function FV(a, b) {
	var c = a[Fc][Xc]("timezone");
	WV(c, b);
	$V(c, b);
	cW(c, b[I](b[Vc]("/") + 1));
	a[o](c);
}
function GV(a, b, c, d) {
	var e = a[Fc][Xc]("attendees");
	YV(e, b, c, 2, 1);
	b & 4 || e[hd]("partial", bi);
	var f = [];
	for (var g in d) {
		f[q](g);
	}
	f[gd](function (j, m) {
		var n = Qm.f().Ba(j), p = Qm.f().Ba(m);
		return wg(n ? n.dd : j, p ? p.dd : m);
	});
	for (var i = 0; i < f[t]; ++i) {
		var g = f[i];
		dW(e, d, g);
	}
	a[o](e);
}
function dW(a, b, c) {
	var d = a[Fc][Xc]("attendee"), e = Qm.f().Ba(c), f, g;
	if (e) {
		f = b[e.Ra].qf;
		g = b[e.Ra].Se;
		XV(d, b, e.Ra);
	} else {
		if (c[E](Sm) >= 0) {
			var i = d[Fc][Xc]("principal");
			i[hd](Wt, c);
			i[hd](Hv, "4");
			i[hd]("type", "2");
			f = 0;
			g = null;
			WV(i, c);
			var j = c[I](c[E](Sm));
			$V(i, j);
			d[o](i);
		}
	}
	d[hd]("extra-guests", f);
	g && eW(d, g);
	a[o](d);
}
function eW(a, b) {
	var c = a[Fc][Xc]("response-comment");
	WV(c, b);
	a[o](c);
}
function HV(a, b, c, d) {
	var e = a[Fc][Xc]("location");
	YV(e, b, c, 256);
	WV(e, d);
	d && fW(e, nA(d));
	a[o](e);
}
function IV(a, b, c, d) {
	var e = a[Fc][Xc]("transparent");
	YV(e, b, c, 65536);
	WV(e, M + d);
	$V(e, d ? "\u6709\u7a7a" : "\u5fd9\u788c");
	a[o](e);
}
function JV(a, b, c, d) {
	var e = a[Fc][Xc](fk);
	YV(e, b, c, 65536);
	WV(e, d);
	var f = "\u9ed8\u8ba4";
	switch (d) {
	  case "PRIVATE":
		f = "\u79c1\u4eba";
		break;
	  case "PUBLIC":
		f = "\u516c\u5171";
		break;
	}
	$V(e, f);
	a[o](e);
}
function KV(a, b, c, d) {
	var e = a[Fc][Xc]("description");
	YV(e, b, c, 32);
	ZV(e, d);
	a[o](e);
}
function LV(a, b, c, d) {
	var e = a[Fc][Xc]("reminders");
	YV(e, b, c, 1024);
	var f = Uk().fc(dh, Pk(Xk));
	e[hd]("sms-verified", M + f);
	if (d) {
		for (var g = 0; g < d[t]; ++g) {
			var i = Ux(d[g], M);
			i && gW(e, i[nd], i.mc);
		}
	}
	a[o](e);
}
function gW(a, b, c) {
	var d = a[Fc][Xc]("reminder");
	d[hd]("method", b);
	d[hd]("secs-lead", c);
	a[o](d);
}
function MV(a, b, c) {
	var d = a[Fc][Xc]("creator");
	XV(d, b, c);
	a[o](d);
}
function NV(a, b, c) {
	var d = a[Fc][Xc]("organizer");
	XV(d, b, c);
	a[o](d);
}
function OV(a, b, c, d, e) {
	var f = a[Fc][Xc]("source-calendar");
	YV(f, b, c, 16384);
	XV(f, d, e, true);
	a[o](f);
}
function PV(a) {
	if (_allowGuestModifyFeature) {
		a[jh] = a[jh] || Xk;
	}
	a[OR] = a[OR] || bi;
	a["goo.showInvitees"] = a["goo.showInvitees"] || bi;
	a[NR] = a[NR] || NR;
}
function QV(a, b, c, d) {
	for (var e in d) {
		var f = a[Fc][Xc]("shared-property");
		YV(f, b, c, 8192);
		f[hd](Bg, e);
		WV(f, d[e]);
		a[o](f);
	}
}
function RV(a, b, c, d) {
	for (var e in d) {
		var f = a[Fc][Xc]("private-property");
		YV(f, b, c, 512);
		f[hd](Bg, e);
		WV(f, d[e]);
		a[o](f);
	}
}
function SV(a, b) {
	var c = a[Fc][Xc]("calendars");
	hW(c, b);
	a[o](c);
}
function hW(a, b) {
	var c = [];
	Dw(function (e) {
		var f = Un(e.id);
		f && f.tc >= 60 && c[q](e);
	});
	c[gd](Xn);
	for (var d = 0; d < c[t]; ++d) {
		XV(a, b, c[d].id, true);
	}
}
function TV(a, b, c, d, e) {
	var f = a[Fc][Xc]("comments");
	YV(f, b, c, 8);
	for (var g = e[t]; --g >= 0; ) {
		iW(f, d, e[g]);
	}
	a[o](f);
}
function iW(a, b, c) {
	var d = c.Qk, e = c.Yk, f = c.Zk, g, i = R.U.zb().zc().Db(f);
	g = i.l ? gt(f) : Vj + oR(i) + Xj;
	var j = a[Fc][Xc]("comment");
	ZV(j, e);
	var m = a[Fc][Xc]("author");
	XV(m, b, d);
	j[o](m);
	aW(j, "create-time", M + f);
	aW(j, "rel-time", g);
	a[o](j);
}
function UV(a, b) {
	var c = a[Fc][Xc]("modules");
	for (var d = 0; d < b[t]; ++d) {
		jW(c, b[d]);
	}
	a[o](c);
}
function jW(a, b) {
	var c = a[Fc][Xc]("module");
	c[hd]("module-id", M + b);
	a[o](c);
}
function VV(a) {
	var b = a[Fc][Xc]("messages-to-user");
	a[o](b);
}
function YV(a, b, c, d, e) {
	var f = "readonly";
	if (b & d) {
		f = Dv;
	} else {
		if (e && b & e) {
			f = "extensible";
		}
	}
	var g = c == LA && f === Dv;
	a[hd]("access", f);
	a[hd]("editing", M + g);
}
function aW(a, b, c) {
	var d = a[Fc], e = d[Xc](b);
	c && e[o](d[kc](c));
	a[o](e);
}
function WV(a, b) {
	aW(a, "value", b);
}
function cW(a, b) {
	aW(a, "abbr", b);
}
function $V(a, b) {
	aW(a, "display", b);
}
function ZV(a, b) {
	var c = a[Fc][Xc]("html");
	if (b) {
		var d = document[Xc]("span");
		k(d, b);
		for (var e = d[ad]; e; e = e[Ad]) {
			kW(e, c);
		}
	}
	a[o](c);
}
function kW(a, b) {
	var c;
	switch (a[Nb]) {
	  case 1:
		c = b[Fc][Xc](a[az]);
		for (var d = 0, e = a[WQ][t]; d < e; ++d) {
			var f = a[WQ][d];
			f[QQ] && c[hd](f[az], f[Jd]);
		}
		a[F][SQ] && c[hd]("style", a[F][SQ]);
		for (var g = a[ad]; g; g = g[Ad]) {
			kW(g, c);
		}
		break;
	  case 3:
	  case 4:
		c = b[Fc][kc](a[Jd]);
		break;
	  default:
		return;
	}
	b[o](c);
}
function fW(a, b) {
	aW(a, "link", b);
}
function XV(a, b, c, d, e) {
	var f = Qm.f().Ba(c), g = Un(c), i = b[c] && b[c].Kc, j;
	if (i == undefined) {
		i = e ? 5 : 4;
	}
	var m;
	if (d) {
		if (!(g || f)) {
			return;
		}
		m = g ? g.ua : f.dd;
		j = f ? f.Ce : g[J];
	} else {
		if (!f) {
			return;
		}
		m = f.dd;
		j = f.Ce;
	}
	m = m || f.na;
	var n;
	if (g) {
		n = g.dl;
	}
	var p = a[Fc][Xc]("principal");
	p[hd](Wt, c);
	p[hd](Hv, M + i);
	p[hd]("type", M + j);
	n && p[hd]("hosted-domain", n);
	WV(p, f.na);
	$V(p, m);
	j == 0 && cW(p, kw(m));
	a[o](p);
}
function lW(a) {
	var b = mW(), c = (Cg++)[r]();
	b[q](qz, c);
	dq.V();
	R.Xr(b, a);
}
function nW() {
	var a = R.W.Ma();
	a.sd("ef_new_from_bubble");
	var b = mW();
	dq.V();
	R.pi(b, a);
}
function mW() {
	var a = dq[Vy] || qD()[B], b = dq[H], c = dq.A, d = dq.zs;
	if (zy) {
		var e = W("newEventForm");
		if (e && e.yE) {
			var f = e.yE;
			for (var g = 0; g < f[t]; ++g) {
				if (f[g][Jb]) {
					var i = Un(f[g].id);
					if (i) {
						d[q](i.nh);
					} else {
						var j = Qm.f().Ba(f[g].id);
						j && d[q](j.na);
					}
				}
			}
		}
	}
	var m, n = W("dragEventCalendar");
	m = n ? n[B] : Yn;
	if (b) {
		if (!c) {
			if (hf == typeof b) {
				b = hi(b);
			}
			c = Fh(b);
			if (b instanceof Jh) {
				c.D += Tr;
				c = c.K();
			} else {
				c.l += 1;
				c = c.H();
			}
		}
	}
	var p = kR(a, dq.wc, dq[nc], b, c, d, dq.Qw, "DRAG", dq.Sw);
	p[q](Lx, m, "ctz", Hn());
	return p;
}
function _ES_CopyEvent(a, b, c) {
	$n(function (d) {
		switch (d) {
		  case 0:
			var e = ["transeid", a, "transtok", b, "ctz", Hn(), "hl", Sk];
			DR(e);
			Mk("transferevent", e, Lk(null, hS));
			break;
		  case -1:
		  case 1:
			break;
		}
		return false;
	}, "\u6dfb\u52a0\u6d3b\u52a8?", "\u8981\u5c06\u6d3b\u52a8 " + P(c) + " \u52a0\u5165\u60a8\u7684\u65e5\u5386\u5417?", [Zn("\u662f\uff0c\u6dfb\u52a0\u6b64\u6d3b\u52a8"), Zn("\u4e0d\uff0c\u4e0d\u8981\u6dfb\u52a0\u6b64\u6d3b\u52a8")]);
}
function oW(a, b, c, d, e, f, g, i) {
	var j = R.W.Ma();
	j.sd("ef_new_from_quickadd");
	var m = hR(a, d, e);
	if (m) {
		d = m[H];
		e = m.A;
	}
	var n = kR(a, b, c, d, e, f, g, "QUICKADD", i);
	if (m) {
		n[q](Lx, Yn);
		var p = (Cg++)[r]();
		n[q](qz, p);
		R.Xr(n);
	} else {
		R.pi(n, j);
	}
}
function pW(a, b, c) {
	R.W.Od("bubble_respond " + b);
	var d = Gj.ta(a);
	c || dq.V();
	var e = d.C & 7;
	if (e === b) {
		return;
	}
	var f = null;
	if (b == 6) {
		f = d.C & 2048 ? "ALL" : "ONE";
		qW(d, f, []);
	} else {
		if (!(d.C & 2048) || d.C & 8192) {
			f = "ONE";
		}
	}
	if (f != null) {
		GR(d.N, d.src, b);
		R.Zr(d, b, f, e);
	} else {
		cA(false, function (g) {
			if (undefined != g) {
				GR(d.N, d.src, b);
				R.Zr(d, b, g, e);
			}
			return false;
		});
	}
}
function rW(a) {
	var b = Gj.ta(a), c = "\u60a8\u786e\u5b9a\u8981\u5c06\u201c" + b[Gb] + "\u201d\u6807\u8bb0\u4e3a\u5783\u573e\u90ae\u4ef6\u5417\uff1f \u8fd9\u6837\u4f1a\u4ece\u65e5\u5386\u201c" + Y.f().th(b.src, false) + "\u201d\u4e2d\u5220\u9664\u6d3b\u52a8\u3002", d = [Zn("\u62a5\u544a\u5783\u573e\u90ae\u4ef6"), Zn("\u53d6\u6d88")];
	$n(function (e) {
		if (e == 0) {
			dq.V();
			R.dn(true);
			pW(a, 6);
		}
		return true;
	}, "\u62a5\u544a\u5783\u573e\u90ae\u4ef6", c, d);
}
function sW(a) {
	var b = Gj.ta(a);
	if (b.C & 2048 && !(b.C & 8192)) {
		var c = b.src == b.lb, d, e, f;
		if (Kk.f().$b) {
			if (c) {
				e = ["ONE", "ALL", "TAIL"];
				d = [Zn("\u4ec5\u6b64\u4e8b\u4f8b"), Zn("\u6b64\u7cfb\u5217\u4e2d\u7684\u6240\u6709\u6d3b\u52a8"), Zn("\u4ee5\u4e0b\u5168\u90e8"), Zn("\u53d6\u6d88")];
				f = "\u60a8\u60f3\u4ec5\u5220\u9664\u8fd9\u4e00\u7cfb\u5217\u4e2d\u7684\u6b64\u6d3b\u52a8\u3001\u6240\u6709\u6d3b\u52a8\uff0c\u8fd8\u662f\u7cfb\u5217\u4e2d\u7684\u8fd9\u4e00\u6d3b\u52a8\u53ca\u5c06\u6765\u6240\u6709\u6d3b\u52a8\uff1f";
			} else {
				e = ["ONE", "ALL"];
				d = [Zn("\u4ec5\u6b64\u4e8b\u4f8b"), Zn("\u6b64\u7cfb\u5217\u4e2d\u7684\u6240\u6709\u6d3b\u52a8"), Zn("\u53d6\u6d88")];
				f = "\u60a8\u662f\u4ec5\u4ec5\u5220\u9664\u6b64\u6d3b\u52a8\u7684\u8fd9\u4e00\u4e8b\u4f8b\uff0c\u8fd8\u662f\u5220\u9664\u6b64\u7cfb\u5217\u4e2d\u7684\u6240\u6709\u6d3b\u52a8\uff1f";
			}
		} else {
			e = ["ONE"];
			d = [Zn("\u4ec5\u6b64\u4e8b\u4f8b"), Zn("\u53d6\u6d88")];
			f = Xz;
		}
		$n(function (g) {
			var i = e[g];
			undefined != i && tW(a, i, true);
			return false;
		}, "\u5220\u9664\u91cd\u590d\u6d3b\u52a8", f, d);
	} else {
		tW(a, "ONE", false);
	}
}
function tW(a, b, c) {
	var d = Gj.ta(a), e, f, g, i;
	if (Ko(d) && d.src === d.lb) {
		e = "\u60a8\u5e0c\u671b\u901a\u77e5\u6765\u5bbe\u60a8\u5c06\u53d6\u6d88\u201c" + d[Gb] + "\u201d\u5417\uff1f";
		f = [Zn("\u5220\u9664\u5e76\u901a\u77e5\u6765\u5bbe"), Zn("\u5220\u9664\uff0c\u4e0d\u901a\u77e5\u6765\u5bbe"), Zn("\u53d6\u6d88")];
		i = [true, false, false];
		g = [true, true, false];
	} else {
		if (c) {
			uW(d, b, false);
			return;
		} else {
			e = "\u60a8\u786e\u5b9a\u8981\u5220\u9664\u201c" + d[Gb] + "\u201d\u5417\uff1f";
			f = [Zn("\u5220\u9664"), Zn("\u53d6\u6d88")];
			i = [false, false];
			g = [true, false];
		}
	}
	$n(function (j) {
		j >= 0 && g[j] && uW(d, b, i[j]);
		return false;
	}, "\u5220\u9664\u6d3b\u52a8\uff1f", e, f);
}
function qW(a, b, c) {
	R.dn(true);
	var d = Pj(a.N);
	Yo();
	Zo();
	c[q](Lx, a.src, qz, a.N);
	b && b !== "ONE" && c[q]("scp", b);
	DR(c);
	CR(c);
	return d;
}
function uW(a, b, c) {
	dq.V();
	var d = [], e = qW(a, b, d);
	c && d[q]("nopts", 4);
	function f() {
		HR(e);
		Yo();
		om("\u975e\u5e38\u62b1\u6b49\uff0c\u65e0\u6cd5\u5220\u9664\u8be5\u6d3b\u52a8\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");
	}
	Kk.f().Qb("deleteevent", d, null, f, 1);
}
R.cz = mW;
R.fz = nW;
R.bz = lW;
R.ez = pW;
R.fn = sW;
R.dz = rW;
R.Qz = oW;
var vW = ["Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument.6.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"], wW = ["MSXML2.FreeThreadedDOMDocument.3.0", "MSXML2.FreeThreadedDOMDocument.6.0"], xW = ["MSXML2.XSLTemplate.3.0", "Msxml2.XSLTemplate.6.0"];
function yW(a) {
	if (typeof ActiveXObject == "undefined") {
		return null;
	}
	for (var b = 0; b < a[t]; ++b) {
		try {
			var c = new ActiveXObject(a[b]), d = a[0];
			a[0] = a[b];
			a[b] = d;
			return c;
		}
		catch (e) {
		}
	}
	return null;
}
function zW(a) {
	a = a || M;
	if (document[UQ] && document[UQ].createDocument) {
		return document[UQ].createDocument(M, a, null);
	}
	var b = yW(vW);
	b && a && b[o](b.createNode(1, a, M));
	return b;
}
function AW(a) {
	if (typeof DOMParser != "undefined") {
		var b = (new DOMParser).parseFromString(a, "application/xml");
		if ("parsererror" == b[ad][kz]) {
			b = null;
		}
		return b;
	}
	var b = zW();
	if (b && !b.loadXML(a)) {
		b = null;
	}
	return b;
}
function BW() {
}
function CW(a, b) {
	var c = zW();
	if (c) {
		if (typeof ActiveXObject != "undefined") {
			var d = pa(function () {
				d = null;
				ya(c, BW);
				b(null);
			}, 10000);
			ya(c, function () {
				if (c[Rc] == 4) {
					ya(c, BW);
					if (d == null) {
						return;
					}
					xy(d);
					d = null;
					b(c);
				}
			});
			c.async = true;
			c[Ub](a);
			return;
		} else {
			if (c[Ub]) {
				c.async = false;
				c[Ub](a);
				b(c);
				return;
			}
		}
	}
	if (typeof XMLHttpRequest != "undefined") {
		var e = new XMLHttpRequest;
		e[yb]("GET", a, false);
		e[Pc](null);
		if (e[Nc] == 200) {
			b(e.responseXML);
			return;
		}
	}
	b(null);
}
function DW(a, b, c) {
	var d = null;
	if (b) {
		if (typeof XMLSerializer != "undefined") {
			d = (new XMLSerializer).serializeToString(a);
		} else {
			if (a.xml) {
				d = a.xml;
			}
		}
	}
	if (d == null) {
		d = EW(a[Pd], 0, false, [], true, !c)[K](M);
	}
	return wf(d);
}
function FW(a) {
	this.Or = a;
}
function GW(a, b) {
	CW(a, function (c) {
		b(new FW(c));
	});
}
var HW = null;
function IW() {
	if (null == HW) {
		HW = false;
		if (typeof XSLTProcessor != "undefined") {
			HW = true;
		} else {
			try {
				var a = yW(xW);
				HW = !!a;
			}
			catch (b) {
			}
		}
	}
	return HW;
}
function JW(a, b) {
	var c = b || window[Ob], d = c[Xc]("span");
	k(d, a);
	var e = c.createDocumentFragment();
	while (d[ad]) {
		e[o](d[ad]);
	}
	return e;
}
FW[z].Eg = function (a, b) {
	return DW(this.Or, a, b);
};
FW[z].transform = function (a, b) {
	var c = a || zW(), d = b || window[Ob];
	if (typeof XSLTProcessor != "undefined" && XSLTProcessor[z].importStylesheet) {
		var e = new XSLTProcessor;
		e.importStylesheet(this.Or);
		return e.transformToFragment(c, d);
	}
	var f, g = yW(xW);
	if (g) {
		if (!this.vk) {
			this.vk = yW(wW);
			try {
				this.vk.resolveExternals = true;
				this.vk.setProperty("AllowDocumentFunction", true);
			}
			catch (i) {
			}
			this.vk.loadXML(this.Or.xml);
		}
		g.stylesheet = this.vk;
		var e = g.createProcessor();
		e.input = c;
		e.transform();
		f = e.output;
	} else {
		return null;
	}
	return JW(f);
};
FW[z].RK = function (a, b, c) {
	k(b, M);
	var d = this.transform(a, c);
	b[o](d);
};
var EW = (function () {
	var a = "                                ";
	function b(j, m) {
		m[q]("\n");
		while (j > 32) {
			m[q](a);
			j -= 32;
		}
		j && m[q](a[I](0, j));
	}
	function c(j) {
		return j[A](/&/g, "&amp;")[A](/</g, "&lt;")[A](/>/g, "&gt;");
	}
	function d(j) {
		return c(j)[A](/\"/g, "&quot;");
	}
	function e(j) {
		return j[ad] && !(j[ad][Ad] && j[ad][Nb] === document.TEXT_NODE && j[ad][Jd][t] < 40);
	}
	function f(j) {
		return j[A](/; -moz[-\w]+: -moz-initial/g, M)[A](/;$/, M)[A](/\brgb\((\d+), (\d+), (\d+)\)/g, function (m, n, p, s) {
			return "#" + g(oa(n)) + g(oa(p)) + g(oa(s));
		});
	}
	function g(j) {
		return (j < 16 ? Je : M) + j[r](16);
	}
	function i(j, m, n, p, s, u) {
		if (null == j) {
			return p;
		}
		switch (j[Nb]) {
		  case 1:
			var v = j[az][Kd](), w = true;
			if (!s && v == "tbody") {
				w = j[WQ][t] > 0;
			}
			var x = !s && /^input|option/i[zb](v), y = w;
			if (w) {
				p[q](yf, v);
				for (var C = 0; C < j[WQ][t]; ++C) {
					var D = j[WQ][C], L = D[az];
					if (!s && (L == "style" || x && /^(value|selected|checked)$/i[zb](L))) {
						continue;
					}
					p[q](qg, L);
					/^(disabled)$/[zb](L) || p[q]("=\"", d(D[Jd]), Af);
				}
				if (x) {
					if (j[B]) {
						if (v !== "option" || j[TQ]("value") != null) {
							p[q](" value=\"", d(j[B]), Af);
						}
					}
					j[Jb] && p[q](" checked");
					j.selected && p[q](" selected");
				}
				!s && j[F][SQ] && p[q](" style=\"", d(f(j[F][SQ])), Af);
				if (s && !j[ad]) {
					p[q]("/>");
					y = false;
				} else {
					p[q](zf);
				}
			}
			if (!s && v === "textarea") {
				p[q](c(j[B]), "</textarea>");
			} else {
				if (y && j[ad] && !j[ad][Ad] && j[ad][Nb] === 3) {
					p[q](c(j[ad][Jd]), "</", v, zf);
				} else {
					if (s || j[ad] || !/^(img|meta|link|br|hr|input)$/i[zb](v)) {
						var n = !u && e(j);
						for (var O = j[ad]; O; O = O[Ad]) {
							n && b(m * 2 + 2, p);
							i(O, m + 1, true, p, s, u);
						}
						n && b(m * 2, p);
						y && p[q]("</", v, zf);
					}
				}
			}
			break;
		  case 3:
		  case 4:
			p[q](c(j[Jd]));
			break;
		  case 9:
			p[q]("#document\n");
			i(j[Pd], m + 1, true, p, s, u);
			break;
		  case 11:
			p[q]("#fragment\n");
			for (var O = j[ad]; O; O = O[Ad]) {
				n && b(m * 2 + 2, p);
				i(O, m + 1, true, p, s, u);
			}
			break;
		  default:
			throw "unrecognized node type " + j[Nb];
		}
		return p;
	}
	return i;
})();
function _showDomDump(a, b) {
	var c = [];
	try {
		EW(a, 0, false, c, b);
	}
	catch (d) {
		alert(d + (d[Wy] ? "\n\n" + d[Wy] : M));
		return;
	}
	sR(c[K](M));
}
function KW(a) {
	this.by = a[TQ]("sms-verified") == bi;
	var b = LW(a, this.by);
	b[gd](eR);
	this.jH = b;
	fE[G](this, b, new dE(R.da.Vr, R.da.Wr), 5);
}
N(KW, fE);
function LW(a, b) {
	var c = [], d = a[Hd]("reminder");
	for (var e = 0; e < d[t]; e++) {
		var f = d[e], g = new dE(oa(f[TQ]("method")), oa(f[TQ]("secs-lead")));
		if (b || g[nd] != 2) {
			c[q](g);
		}
	}
	return c;
}
KW[z].co = function (a) {
	return new eE(R.da.ru(this.by), R.da.Vo(), a[nd], new cE(a.mc));
};
KW[z].ij = function () {
	this.Yv = this.P.R("span", {"class":"no-reminders"}, this.P[kc]("\u672a\u8bbe\u7f6e\u63d0\u9192"));
	return this.P.R(xk, {}, this.Yv, KW.ba.ij[G](this));
};
KW[z].Qg = function () {
	KW.ba.Qg[G](this);
	l(this.Yv[F], this.Zo() ? U : M);
};
KW[z].FC = function (a) {
	return this.Bb() ? MW(this.Bb(), this.jH, a) : true;
};
function NW(a) {
	return a[nd] + Ke + a.mc;
}
function MW(a, b, c) {
	var d = "erem", e = {};
	for (var f = 0; f < b[t]; f++) {
		e[NW(b[f])] = true;
	}
	var g = false;
	for (var f = 0; f < a[t]; f++) {
		var i = NW(a[f]);
		if (e[i]) {
			e[i] = false;
			c[q](d, i + ":0");
		} else {
			c[q](d, i + ":1");
			g = true;
		}
	}
	for (var f = 0; f < b[t]; f++) {
		var i = NW(b[f]);
		if (e[i]) {
			c[q](d, i + ":-1");
			g = true;
		}
	}
	return g;
}
function OW(a, b, c, d) {
	this.Ob = a;
	hb(this, b);
	lb(this, c);
	this.gv = d;
}
xa(OW[z], function () {
	return "<WI_NodeInfo_ " + this.Ob.id + ", type=" + this[J] + ", extra=" + this.YL + ", name=" + this[td] + ", inputName=" + this.gv + zf;
});
var PW = /\b(text|textarea|date|daterange|rolist|rrule|radio|checkbox)\b/, QW = /^wi-([\w\-]+)$/, RW = /\bfield-(\S+)/, SW = "input";
function TW(a) {
	if (vm(a, SW) && vm(a, Dv)) {
		var b = a[Bb][Lc](PW);
		if (b) {
			var c = a.id[Lc](QW);
			if (!c) {
				return null;
			}
			var d = a[Bb][Lc](RW)[1];
			return new OW(a, b[1], c[1], d);
		}
	}
	return null;
}
function UW(a, b, c) {
	var d = TW(a);
	if (d) {
		if (c || d[J][Lc](/^(?:rrule|radio|checkbox)$/)) {
			b[q](d);
		}
	} else {
		for (var e = a[ad]; e; e = e[Ad]) {
			UW(e, b, c);
		}
	}
	return b;
}
var VW, WW = null;
function XW(a) {
	var b = "CREATE" == a[hz][PA][B];
	YW(a);
	W("ff-map") && rn.ox(ZW);
	W(SR) != null && $W.f().hG();
	var c = W("op-reminder");
	if (c) {
		VW = new KW(aX("reminders"));
		VW.ub(c);
	} else {
		VW = null;
	}
	if (!Kk.f().$b) {
		var d = W("contactpickerlink");
		if (d) {
			var e = d[Hd]("a")[0];
			xm(e, "link-disabled");
			e[hd](Pv, "javascript:void(0)");
		}
	}
	bX();
	b && pa(function () {
		cX(a);
	}, 0);
	pa(dX, 0);
	if (null == WW) {
		WW = eX(1000);
	} else {
		eX(0);
	}
}
function fX() {
	$W.f().sB();
	_wi_cleanRecur(Sz);
	Ck().he(UR);
	VW && VW.ia();
}
function cX(a) {
	try {
		var b = a[hz][Gb];
		rA(b);
		b[B] && b[fz]();
	}
	catch (c) {
	}
}
function dX() {
	var a = ["wi-title", "wi-where", "wi-when", "wi-descrip"];
	for (var b = 0; b < a[t]; ++b) {
		var c = W(a[b]);
		if (c && !c.Dq && vm(c, "highlight")) {
			Dy(c, gX);
			c.onmouseout = hX;
		}
	}
}
function eX(a) {
	return pa(function () {
		iX();
	}, a);
}
function jX(a) {
	if (W("longAttendeeName") && Q) {
		var b = W("addguests"), c;
		c = b ? function () {
			_expandAddGuests();
			_expandAddGuests();
		} : function () {
			_wi_tm(_MODULE_TYPE_INVITEES);
			_wi_tm(_MODULE_TYPE_INVITEES);
		};
		pa(c, a);
	}
}
function iX() {
	xy(WW);
	WW = null;
	jX(0);
	var a = [];
	a[q]("pl", "EVENT_PAGE");
	var b = 0, c = {};
	do {
		kX(c);
		var d = c.Cl;
		if (d) {
			a[q]("eatt", d);
			++b;
		}
	} while (d);
	b > 0 && Mk("presence", a);
}
function gX() {
	vm(this, "highlight") && !this.Dq && xm(this, "editablehover");
}
function hX() {
	ym(this, "editablehover");
}
function lX(a, b) {
	switch (a[J]) {
	  case "daterange":
		var c = undefined;
		if (b) {
			c = ji(b);
			if (c[H].Oa() && !c.A.Oa()) {
				if (!/[0-9]/[zb](c.A[r]())) {
					var d = dR(c[H]);
					if (c[H] instanceof ei) {
						d.D += Tr;
						d = d.bc();
					} else {
						++d.l;
						d = d.Fa();
					}
					c = new fi(c[H], d);
				}
			}
		}
		var e = W(a[td] + to + _DR_REAL);
		e && e[az] === "INPUT" && mX(e);
		iI(a[td], c && c[H], c && c.A);
		var f = W("ff-recur");
		if (f) {
			l(f[F], "block");
			W("recur") && nX("recur");
		}
		break;
	  case "rrule":
		nX("recur");
		break;
	  case Vt:
		var g = undefined;
		if (b) {
			g = ji(b);
		}
		mX(W(a[td]));
		$T(a[td]);
		break;
	  case "textarea":
		Fx(W(a[td]));
		break;
	  case "radio":
	  case "checkbox":
		var i = a.Ob[Hd]("INPUT");
		for (var j = i[t]; --j >= 0; ) {
			var m = i[j];
			m[J] === a[J] && mX(m);
		}
		break;
	}
	if (a[td] === "when" && oX()) {
		var n = W("checkR");
		if (n) {
			l(n[F], M);
		}
	}
}
function oX() {
	return ql() && W("checkR") != null;
}
function pX(a) {
	var b = a.id[Lc](/^hr-(.*)/)[1], c = jT(a[B]);
	if (c && c.Ni <= -2) {
		c = null;
	}
	if (c) {
		Oa(a, gt(c.l));
		var d = c.l, e = W("when-real"), f = null;
		if (e && e[B]) {
			f = ji(e[B])[H];
		} else {
			var g = W("old-" + b);
			if (g && g[B]) {
				f = ji(g[B]);
			}
		}
		if (f && f instanceof ei) {
			d = Fh(d);
			d.F = f.F;
			d.D = f.D;
			d.L = f.L;
			d = d.K();
		}
		Oa(W(b), d[r]());
		c.l.Oa() ? ym(a, "dr-warning") : xm(a, "dr-warning");
	} else {
		xm(a, "dr-warning");
	}
}
function YW(a) {
	var b = [];
	UW(a, b, true);
	for (var c = 0; c < b[t]; ++c) {
		var d = b[c];
		if (d[J] === "radio" || d[J] === "checkbox") {
			lX(d, M);
		} else {
			if (W(d[td]) || W(d[td] + to + _DR_REAL)) {
				var e = W(_DR_REAL + to + d[td]);
				lX(d, e ? qX(e[bc]) : M);
			}
		}
	}
}
function _wi_rewriteOnDemand(a, b, c) {
	if (!b) {
		b = window[Sd];
	}
	if (a.Dq) {
		return true;
	}
	for (var d = qA(b); d; d = d[ud]) {
		if (d.id == a.id) {
			break;
		}
		if (d[kz] && d[kz][oz]() == "A" && d[id]) {
			return true;
		}
	}
	var e = {};
	e.tq = b.tq;
	e.Rw = b.Rw;
	rb(e, b[Nd]);
	sb(e, b[Od]);
	iH(a.id, e, c);
}
function iH(a, b, c) {
	var d = TW(W(a)), e = [d[td]];
	d[td] == "when" && e[q]("recur");
	var f = null, g = null;
	function i() {
		switch (d[J]) {
		  case "text":
		  case "textarea":
			if (b && !vm(d.Ob, "blank")) {
				f = rX(b, d.Ob);
				if (f) {
					g = d[td] == Uu || d[td] == "descrip" ? d.Ob[bc] : tR(d.Ob);
				}
			}
			break;
		}
		var m = [f];
		d[td] == "when" && m[q](null);
		return m;
	}
	function j() {
		d.Ob = W(d.Ob.id);
		var m = d.Ob[ad];
		while (m && !(m[kz] && m[kz][Lc](/^(input|textarea)$/i) && m[J] != am)) {
			m = m[Ad];
		}
		if (m) {
			m[Wc]();
			if (g) {
				Oa(m, qX(g));
				sX(m, f);
			} else {
				m[fz]();
			}
		}
		var n = M, p = W("real-" + d[td]);
		if (p) {
			n = qX(p[bc]);
		}
		lX(d, n);
		if (W("submitButton")) {
			l(W("submitButton")[F], "inline");
		}
		c && c();
		Hx();
	}
	tX(e, i, j);
	return false;
}
var uX, vX = {title:"summary", when:"dates", where:"location", recur:"rrule", descrip:"description"};
function tX(a, b, c) {
	var d = [];
	for (var e = a[t]; --e >= 0; ) {
		var f = a[e];
		if (!W("wi-" + f)) {
			continue;
		}
		var g = aX(vX[f]);
		if (g[TQ]("access") == Dv && g[TQ]("editing") != bi) {
			g[hd]("editing", bi);
			d[q]("ff-" + f);
		}
	}
	wX(d, b, c);
}
function wX(a, b, c) {
	xX(uX, null, function (d) {
		var e = {};
		for (var f = a[t]; --f >= 0; ) {
			e[a[f]] = null;
		}
		for (var g = d[ad]; g; g = g[Ad]) {
			if (!g[Hd]) {
				continue;
			}
			var i = g[Hd]("*");
			for (var f = 0, j = i[t]; f < j; ++f) {
				var m = i[f];
				if (m.id in e) {
					e[m.id] = m;
				}
			}
		}
		b && b();
		for (var f = a[t]; --f >= 0; ) {
			var n = a[f], p = W(n);
			if (!p) {
				continue;
			}
			var s = e[n];
			if (s) {
				if (ag) {
					s = s.cloneNode(true);
				}
				p[ud].replaceChild(s, p);
			} else {
				p[ud][Gc](p);
			}
		}
		c && c();
	});
}
function xX(a, b, c) {
	if (IW()) {
		yX(function (e) {
			if (null != b) {
				e.RK(a, b);
				c();
			} else {
				var f = e.transform(a);
				c && c(f);
			}
		});
	} else {
		var d = function (e) {
			var f = e[Xb][A](/^\s*<!--|--\>\s*$/g, M), g = JW(f);
			if (null != b) {
				k(b, M);
				b[o](g);
				c();
			} else {
				c(g);
			}
		};
		qR("eventxml", ["hl", Sk], DW(a), Lk(d, "\u975e\u5e38\u62b1\u6b49\uff0c\u65e0\u6cd5\u52a0\u8f7d\u8be5\u6d3b\u52a8\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"));
	}
}
function zX(a) {
	uX = a;
}
function AX() {
	uX && _showDomDump(uX[Pd], true);
}
function BX() {
	CX && _wi_b(W(CX));
	var a = "r-" + Sz;
	W(a) && nV(a);
}
var CX = null;
function _wi_f(a) {
	xm(a, "focused");
	CX = a.id;
	return true;
}
function ZW() {
	if (GBrowserIsCompatible()) {
		var a = oa(W("latitude")[B]) / 1000000, b = oa(W("longitude")[B]) / 1000000, c = oa(W("zoomlevel")[B]), d = new GMap2(W("efmap"));
		d.addControl(new GLargeMapControl);
		d.addControl(new GMapTypeControl);
		d.setCenter(new GLatLng(a, b), 17 - c);
		var e = new GLatLng(a, b), f = DX(e);
		d.addOverlay(f);
	}
}
function DX(a) {
	var b = new GMarker(a), c = W("old-where"), d = W("wi-where"), e = M;
	if (c) {
		e = qX(c[B]);
	} else {
		if (d) {
			e = qX(d[bc]);
		}
	}
	e && GEvent.addListener(b, "click", function () {
		b.openInfoWindowHtml(e);
	});
	return b;
}
function _wi_b(a) {
	if (CX && CX == a.id) {
		CX = null;
	}
	ym(a, "focused");
	var b = TW(a[ud]);
	b && EX(b.Ob);
	return true;
}
function _wi_c(a) {
	EX(a);
}
function mX(a) {
	var b;
	b = a[J] == "checkbox" || a[J] == "radio" ? Pv : "onchange";
	a[b] = FX(a[b], GX);
}
function GX() {
	return _wi_c(this);
}
function FX(a, b) {
	if (a) {
		if (cf !== typeof a) {
			var c = a;
			a = function () {
				return eval(c);
			};
		}
		return function (d) {
			return a[G](this, d) || b[G](this, d);
		};
	} else {
		return b;
	}
}
function HX(a) {
	var b = a[hz], c = b[t], d = [];
	for (var e = 0; e < c; ++e) {
		var f = b[e];
		f[td] && d[q](f);
	}
	return d;
}
var IX = new RegExp("^(?:" + ["sf", "ctz", "rfdt", qz, PA, "secid", "tok", "hl", Lx, "erem"][K]("|") + ")$"), JX = new RegExp("^(?:" + [Fg, Lx, "sprop", Gg, "trp", "icc", "add", "erem"][K]("|") + ")$"), KX = new RegExp("^(?:" + ["text", Tz, Fg, WR, Sz, Rz, "add", "del"][K]("|") + ")$"), LX = new RegExp("^(?:" + ["targ", "text", Tz, Fg, WR, Sz, "trp", "icc", Rz][K]("|") + ")$");
function MX(a, b) {
	var c = Tm(a);
	return c && c in b || a in b;
}
function NX(a, b) {
	for (var c = 0; c < a[t]; ++c) {
		if (!MX(a[c], b)) {
			return true;
		}
	}
	return false;
}
function kX(a) {
	if (!a.Kp) {
		a.Kp = W("guestlists");
		a.Ob = a.Kp;
	}
	var b = a.Kp, c = a.Ob;
	while (c) {
		var d = c;
		c = d[ad];
		while (!c && d != b) {
			c = d[Ad];
			d = d[ud];
		}
		if (c && !vm(c, "deleted")) {
			var e = vm(c, "real"), f = vm(c, "old-real");
			if (e || f) {
				a.Ob = c;
				a.Cl = e ? c[bc] : c[B];
				return;
			}
		}
	}
	a.Ob = null;
	a.Cl = null;
}
function OX(a) {
	var b = {};
	kX(b);
	var c = b.Cl;
	while (c) {
		if (a(c)) {
			return c;
		}
		kX(b);
		c = b.Cl;
	}
	return null;
}
function PX(a) {
	var b = HX(a), c = {}, d = b[t];
	for (var e = 0; e < d; ++e) {
		var f = b[e], g = f[td];
		if (!/^[^_]/[zb](g)) {
			continue;
		}
		c[g] || (c[g] = []);
		c[g][q](f);
	}
	var i = false;
	if (PA in c && 1 === c[PA][t]) {
		i = LA == c[PA][0][B];
	}
	for (var g in c) {
		var j = c[g], m = [];
		for (var e = 0; e < j[t]; ++e) {
			var n = j[e];
			switch (n[J][Kd]()) {
			  case "checkbox":
				var p = n[B][Lc](/^((?:.*:)?)true$/);
				if (p) {
					m[q](p[1] + (n[Jb] ? bi : Xk));
				} else {
					n[Jb] && m[q](n[B]);
				}
				break;
			  case "radio":
			  case "option":
				n[Jb] && m[q](n[B]);
				break;
			  case am:
				m[q](n[B]);
				break;
			  default:
				m[q](n[B]);
				break;
			}
		}
		c[g] = m;
	}
	var s = [], u = {};
	for (var g in c) {
		var v = M, w = g, p = g[Lc](/^(?:(hr|old)-)(.*)/);
		if (p) {
			w = p[2];
			v = p[1];
		}
		switch (v) {
		  case M:
			var x = c[w], y = c["hr-" + w], C = c["old-" + w];
			for (var e = 0; e < x[t]; ++e) {
				if ((!y || x[e]) && !(C && C[e] == x[e])) {
					s[q](w, x[e]);
				}
			}
			if (C) {
				u[w] = C;
			}
			break;
		  case "hr":
			var x = c[w], D = "hr-" + w, y = c[D];
			for (var e = 0; e < x[t]; ++e) {
				y[e] && !(x && x[e]) && s[q](D, y[e]);
			}
			break;
		}
	}
	var L = VW ? VW.FC(s) : false, O = L, ba = L;
	for (var e = 0; e < s[t]; e += 2) {
		var ea = s[e];
		if (!IX[zb](ea)) {
			if (!i || !ea[Lc](JX) && M != s[e + 1] && ea != Fg && ("text" != ea || M != wf(s[e + 1]))) {
				O || (O = true);
				if ("ec" != ea && "dec" != ea) {
					ba = true;
					break;
				}
			}
		}
	}
	var ta = false;
	if (O) {
		for (var e = 0; e < s[t]; e += 2) {
			var ea = s[e];
			if (ea == "sprop") {
				var V = s[e + 1];
				if (V[E](jh) === 0 && V[E](bi) !== -1) {
					ta = true;
				}
			}
		}
	}
	var Aa = false;
	if (O) {
		for (var e = 0; e < s[t]; e += 2) {
			var ea = s[e];
			if (LX[zb](ea)) {
				Aa = true;
				break;
			}
		}
	}
	var Ma = false, Pa = false, Ea = false, Ga = false, Fb = null, Ib = null, Mb = false, Rb = QX(a), Sb = Rb, yd = !!W("marker-special"), ac = false, Rd = false, Cb = {};
	Cb[Yn] = true;
	var nf = Qm.f().Ba(Yn);
	if (nf) {
		Cb[nf.na] = true;
	}
	for (var e = 0; e < s[t]; e += 2) {
		var ea = s[e], pf = s[e + 1];
		switch (ea) {
		  case "del":
			if (pf) {
				var pi = Vm(pf);
				Ea |= NX(pi, Cb);
			}
			break;
		  case "add":
			if (pf) {
				var pi = Vm(pf);
				Pa |= NX(pi, Cb);
			}
			break;
		  case PA:
			Fb = pf;
			break;
		  case qz:
			Ib = pf;
			break;
		  case Sz:
			Rd = true;
			Mb = true;
			Sb = !yd && RX(pf);
			break;
		  case "targ":
			Mb |= Rb;
			break;
		  case WR:
			Mb |= !ji(s[e + 1]).Fa().T(ji(u[ea][0]).Fa());
			break;
		  case Fg:
			ac = true;
			break;
		}
		if (!Ga && "del" != ea && "add" != ea && ea[Lc](KX)) {
			Ga = true;
		}
	}
	if (i) {
		var qi = (Cg++)[r]();
		s[q](qz, qi);
	}
	var Ig = !!OX(function (GZ) {
		return !MX(GZ, Cb);
	}), zd = !!W("marker-org-cal"), ng = !!W("marker-hasoverrides"), Yj = !!W("marker-showntfdlg"), el = W("marker-calname"), Zj = el ? el[B] : null, fl = !!W("marker-guests-can-modify"), og = zd || fl;
	if (og && (Pa || Ig || Ea || Yj) || !og && (Pa || Ea)) {
		if (i) {
			Ma = true;
		} else {
			for (var e = 0; e < s[t]; e += 2) {
				var ea = s[e];
				if (ea[Lc](KX)) {
					Ma = true;
					break;
				}
			}
		}
	}
	var SJ = ng || !i && !og && Ga;
	if (Fb == "RESTORE_ORIGINAL") {
		O = true;
		Ga = true;
		Ma = !!W("marker-noteworthy");
		SJ = false;
	}
	return {vf:s, ov:i, lv:O, fH:Ma, Ju:Ig, hm:Pa, um:Ea || (Rb && !Sb || Rd) && Yj, lF:Ga, kF:ba, XG:Aa, action:Fb, N:Ib, nv:Mb, Iy:Rb, Ol:Sb, rv:yd, Qs:og, dB:ta, zE:ng, Fl:SJ, jF:ac, Ns:Zj, PF:Rd};
}
function SX(a) {
	var b = a[hz].ec, c = b[B];
	if (!/\S/[zb](c)) {
		b[Wc]();
		return;
	}
	var d = a[hz].eid[B], e = a[hz].src[B], f = a[hz].rfdt[B], g = a[hz].ctz[B], i = a[hz].hl[B], j = [qz, d, Lx, e, "rfdt", f, "ctz", g, "scp", "ONE", "ec", c, PA, "RESPOND", "hl", i, OA, "js"];
	TX(j, false);
	var m = M, n = !!a[hz].tok && !!a[hz].tok[B];
	if (n) {
		m = a[hz].tok[B];
		j[q]("tok", m);
	}
	Mk(NA, j, Lk(function () {
		var p = [qz, d, Lx, e, "rfdt", f, "ctz", g, "emid", Sg[td], PA, "VIEW", "hl", i, OA, "xml"];
		n && p[q]("tok", m);
		Nk(NA, p, undefined, Lk(function (s) {
			zX(AW(s[Xb]));
			wX(["wi-commentlist"]);
		}, null));
		if (b[B] == c) {
			Oa(b, M);
		}
		return true;
	}, "\u4fdd\u5b58\u66f4\u6539\u51fa\u9519\uff0c\u8bf7\u91cd\u8bd5"));
}
var UX = (function () {
	var a = {};
	a[Ng[td]] = [Og[td], "add-guests-open"];
	a[Rg[td]] = [Sg[td], "add-comments-open"];
	return a;
})();
function aX(a) {
	var b = !uX || uX[Hd](a);
	return b[t] ? b[0] : null;
}
function VX(a) {
	if (!uX) {
		return false;
	}
	var b = aX("modules");
	for (var c = b[ad]; c; c = c[Ad]) {
		if ("module" != c[az]) {
			continue;
		}
		if (a[Qy] == c[TQ]("module-id")) {
			return false;
		}
	}
	var d = b[Fc][Xc]("module");
	d[hd]("module-id", a[Qy]);
	b[o](d);
	return true;
}
function WX(a) {
	if (!uX) {
		return false;
	}
	var b = aX("modules");
	for (var c = b[ad]; c; c = c[Ad]) {
		if ("module" != c[az]) {
			continue;
		}
		if (a[Qy] == c[TQ]("module-id")) {
			b[Gc](c);
			return true;
		}
	}
	return false;
}
function _wi_om(a) {
	try {
		var b = W(a[td]);
		if (b[Bb] != Da(b, b[Bb][A](/\bcollapsed\b/, "expanded"))) {
			if (b.id in UX) {
				var c = UX[b.id];
				xm(W(c[0]), c[1]);
			}
			VX(a);
			return true;
		} else {
			return false;
		}
	}
	catch (d) {
		return false;
	}
}
function _wi_tm(a) {
	try {
		if (_wi_om(a)) {
			return true;
		}
		var b = W(a[td]);
		if (b[Bb] != Da(b, b[Bb][A](/\bexpanded\b/, "collapsed"))) {
			if (b.id in UX) {
				var c = UX[b.id];
				ym(W(c[0]), c[1]);
			}
			WX(a);
		}
	}
	catch (d) {
	}
	return false;
}
function _expandAddGuests() {
	try {
		if (_wi_tm(Ng)) {
			_wi_om(Og);
			W(UR)[Wc]();
		}
	}
	catch (a) {
	}
	return false;
}
function _popPicker(a, b) {
	try {
		XX(a, window, b);
	}
	catch (a) {
	}
	return false;
}
function YX(a) {
	var b = {x:a[Ic], y:a[Jc]};
	if (b.x + 313 > window[Xy][Eb]) {
		b.x = window[Xy][Eb] - 313;
	}
	if (b.y + 600 > window[Xy][Cd]) {
		b.y = window[Xy][Cd] - 600;
	}
	return b;
}
function XX(a, b, c) {
	var d = YX(a), e = ol;
	b[yb]((e ? "../c/" + e : "c") + "/ui/ContactPicker?inputId=" + c, "_picker", "toolbar=no,location=no,menubar=no,scrollbars=no,resizable=yes,status=no,width=307,height=554,top=" + d.y + ",left=" + d.x);
}
function _showCommentField() {
	try {
		if (_wi_tm(Rg)) {
			_wi_om(Sg);
			W("commenttext")[Wc]();
		}
	}
	catch (a) {
	}
	return false;
}
function _addPresenceInEventForm(a) {
	SS(a, "evtChatImg", "evtChatDot", "evtChatAttendee", true);
}
function _wi_chat(a, b) {
	R.mw(b);
}
var ZX = 0;
function _wi_ro_rm(a, b) {
	var c, d = a;
	while (!(c = TW(d))) {
		d = d[ud];
	}
	var e = c.Ob;
	while (!vm(e, "field")) {
		e = e[ud];
	}
	var f = e;
	while ("FORM" != f[kz]) {
		f = f[ud];
	}
	var g = a[ud];
	while (!vm(g, "roitem")) {
		g = g[ud];
	}
	xm(g, "deleted");
	k(a, "\u64a4\u53d6\u6d88");
	PQ(a, "\u6dfb\u52a0\u56de\u6765\u5bbe\u5217\u8868");
	var i = "roinput" + ++ZX, j = W("old-real-" + b);
	xm(j, "deleted");
	var m = document[Xc](SW);
	hb(m, am);
	lb(m, c.gv);
	m.id = i;
	Oa(m, j[B]);
	f[o](m);
	Gy(a, function () {
		_wi_ro_undo(this, i, b);
	});
}
function _wi_ro_undo(a, b, c) {
	var d = a[ud];
	while (!vm(d, "roitem")) {
		d = d[ud];
	}
	ym(d, "deleted");
	k(a, "\u79fb\u9664");
	PQ(a, "\u81ea\u6765\u5bbe\u5217\u8868\u79fb\u9664\u6b64\u4eba");
	var e = W(b);
	e[ud][Gc](e);
	Gy(a, function () {
		_wi_ro_rm(this, c);
	});
	var f = W("old-real-" + c);
	ym(f, "deleted");
}
function $X(a) {
	if (1 <= a[t] && 160 == a[ed](a[t] - 1)) {
		a = a[I](0, a[t] - 1);
	}
	return a;
}
function qX(a) {
	if (a === undefined || a === null) {
		a = M;
	}
	if (ag) {
		a = $X(a);
		var b = a[Lc](/^(.+)(-\/-clicked-\d*\/-)$/);
		if (b) {
			a = $X(b[1]) + b[2];
		}
	}
	return a[A](/&nbsp;(-\/-clicked-\d*\/-)?$/g, "$1")[A](/\"/g, "&quot;")[A](/<br[^>]*>/gi, "\n")[A](/&nbsp;/g, qg)[A](/<\/?\w[^>]*>/g, M);
}
function _wi_ns(a, b) {
	b = b || window[Sd];
	if (13 === Mz(b)) {
		a[jc]();
		return false;
	}
	return true;
}
function rX(a, b) {
	if (Zf) {
		return null;
	}
	var c = "-/-clicked-/-", d = b[bc], e = 0;
	while (d[E](c) >= 0) {
		c = "-/-clicked-" + ++e + "/-";
	}
	if (typeof a.tq != "undefined") {
		var f = document.createRange();
		f.setStart(a.tq, a.Rw);
		f[Ry](true);
		var g = document[kc](c);
		f.insertNode(g);
		f[iz]();
		return c;
	} else {
		if (document.selection) {
			var i = document[Bc][bz]();
			i.moveToPoint(a[Nd], a[Od]);
			if (i.parentElement() != b) {
				return null;
			}
			Vz(vm(b, SW));
			var j = document[Bc][bz]();
			j.moveToElementText(b);
			if (j.compareEndPoints("EndToEnd", i) != 1) {
				b.innerHTML += c;
				return c;
			}
			i.pasteHTML(c);
			return c;
		} else {
			if (ag && b && b[ad] && b[ad][Jd]) {
				var m = window.getSelection(), n = b[ad], p = n[Jd], s = p[I](0, m.extentOffset), u = p[I](m.extentOffset, p[t]);
				n.nodeValue = s + c + u;
				return c;
			}
		}
	}
	return null;
}
function sX(a, b) {
	var c = a[B][E](b);
	if (c < 0) {
		return;
	}
	if (document[Bc][bz]) {
		var d = a[bz]();
		d.findText(b);
		Ha(d, M);
		var e = a[bz]();
		e[Ry]();
		e.move("character", c);
		e[fz]();
	} else {
		Oa(a, a[B][I](0, c) + a[B][I](c + b[t]));
		if (ag) {
			a.setSelectionRange(c, c);
		} else {
			a.selectionStart = a.selectionEnd = c;
		}
	}
}
var aY = {};
function bY(a, b) {
	a in aY || (aY[a] = []);
	aY[a][q](b);
}
function EX(a) {
	var b = aY[a[td]];
	if (b) {
		for (var c = 0; c < b[t]; ++c) {
			b[c](a[td], a);
		}
	}
}
function cY(a) {
	var b = (a ? "old-" : M) + Fg, c = W("masterForm")[hz][b];
	if (c && c[B]) {
		return ji(c[B])[H];
	}
	var d = W("real-when");
	if (d) {
		return ji(qX(d[bc]))[H];
	}
	return null;
}
function dY() {
	var a = null, b = W("masterForm")[hz][WR];
	if (b && b[B]) {
		a = ji(b[B]);
	} else {
		var c = W("real-rstart");
		if (c) {
			a = ji(qX(c[bc]));
		}
	}
	a || (a = cY());
	if (a) {
		a = a.Oa() ? a instanceof ei ? a.K() : a.H() : null;
	}
	if (!a) {
		var d = W("rfdt");
		a = d ? hi(d[B]) : R.U.xa();
	}
	return a;
}
var eY = null;
function fY() {
	if (null == eY) {
		eY = cY(true);
	}
	var a = eY, b = cY(), c = null != b && (null == a || !b.T(a));
	if (c) {
		var d = Sz, e = "r-" + d, f = gY(d);
		if (f) {
			var g = a && hY == 4 ? a.ya() : null;
			if (_wi_syncRecurWeekday(f, b, g)) {
				iY(d, f);
				fV(e, b, f);
			}
			jY(d, f, b);
		}
		eY = b;
	}
	kY(c);
}
function kY(a) {
	var b = W("when-" + _DR_SD), c = W("hr-rstart");
	if (b && c && c[Yy]) {
		Oa(c, b[B]);
	} else {
		if (a) {
			var d = W("rstart"), e = W("when-real");
			try {
				if (d && e && d[B]) {
					var f = ji(d[B]), g = ji(e[B]);
					f = Fh(f);
					if (g[H] instanceof ei) {
						f.F = g[H].F;
						f.D = g[H].D;
						f.L = g[H].L;
						f = f.bc()[r]();
					} else {
						f = f.Fa()[r]();
					}
					Oa(d, f[r]());
				}
			}
			catch (i) {
			}
		}
	}
}
function iY(a, b) {
	var c = W(a), d = W("old-" + a)[B], e;
	e = b ? d && d[Lc](/^RRULE:/m) ? d[A](/^RRULE:(.|((\r\n?|\n)[ \t]))*/m, b.Me()) : b.Me() : M;
	Oa(c, e);
	EX(c);
}
function RX(a) {
	if (!a) {
		return false;
	}
	var b = wU(a, "RDATE", false);
	if (b && b[t]) {
		return true;
	}
	var c = wU(a, "RRULE", false);
	if (c[t]) {
		if (1 !== c[t]) {
			return true;
		}
		try {
			return 1 != (new xU(c[0])).G[PU];
		}
		catch (d) {
			return true;
		}
	}
	return false;
}
function QX(a) {
	var b = M, c = a[hz]["old-" + Sz];
	if (c) {
		b = c[B];
	} else {
		var d = W("real-" + Sz);
		if (d) {
			b = d[bc];
		}
	}
	return RX(b);
}
function nX(a) {
	var b = "r-" + a, c = dY(), d = gY(a);
	hY = d ? d.G.FREQ : null;
	$U(b);
	fV(b, c, d);
	tV(b, lY(a));
	jY(a, d, c);
	kY(false);
}
function _wi_syncRecurWeekday(a, b, c) {
	if (!b) {
		return false;
	}
	if (!(HU in a.G)) {
		return false;
	}
	var d = a.G[HU];
	if (d[t] > 1 || c && c != d[0].Df) {
		return false;
	}
	var e = b.ya(), f = 0;
	if (d[0].od) {
		f = ((b.l - 1) / 7 | 0) + 1;
	}
	if (f > 4) {
		f = -1;
	}
	a.G[HU] = [new OU(f, e)];
	return true;
}
var hY = undefined;
function _wi_checkRecur(a) {
	var b = "r-" + a, c = cY();
	if (!c) {
		return;
	}
	var d = kV(b, c), e = d ? d.G.FREQ : null;
	4 == e && e !== hY && _wi_syncRecurWeekday(d, c) && fV(b, c, d);
	hY = e;
	pa(function () {
		try {
			iY(a, d);
			jY(a, d, c);
		}
		catch (f) {
		}
	}, 0);
}
function jY(a, b, c) {
	var d = "hr-" + ("r-" + a), e = null;
	if (b && b.G[PU] !== 1) {
		e = b.fs(c.H());
	}
	var f = W(d);
	if (f && e) {
		k(f, "&nbsp;&nbsp;\uff08" + e + "\u91cd\u590d\uff09");
	}
	d = "rrhr-" + ("r-" + a);
	f = W(d);
	if (f) {
		k(f, e && 1 !== b.G[PU] ? e : "\u6b64\u6d3b\u52a8\u4e0d\u4f1a\u91cd\u590d");
	}
}
function lY(a) {
	return function () {
		_wi_checkRecur(a);
	};
}
function _wi_cleanRecur() {
	eY = null;
}
function bX() {
	var a = W("guests-modify");
	if (a === undefined || a === null) {
		return;
	}
	var b = W("guests-invite"), c = W("guests-invite-label"), d = W("guests-seelist"), e = W("guests-seelist-label"), f = W("guests-modify-label");
	if (a[Jb] === true) {
		Ra(d, Ra(b, true));
		Ka(d, Ka(b, true));
		Sa(e[F], Sa(c[F], "gray"));
	} else {
		Ra(d, Ra(b, false));
		Sa(e[F], Sa(c[F], "black"));
	}
	if (d[Jb] === false || b[Jb] === false) {
		Ra(a, true);
		Ka(a, false);
		Sa(f[F], "gray");
	} else {
		Ra(a, false);
		Sa(f[F], "black");
	}
}
bY("sprop", bX);
bY(Fg, fY);
bY(WR, fY);
bY("rst", function (a, b) {
	if (b[Jb]) {
		var c = null;
		switch (ka(b[B], 10)) {
		  case 2:
			c = "response-no";
			break;
		  case 1:
			c = "response-yes";
			break;
		  case 3:
			c = "response-maybe";
			break;
		  case 0:
			c = "response-none";
			break;
		}
		if (c) {
			var d = W(Pg[td]);
			Da(d, d[Bb][A](/\bresponse-(\w+)\b/, c));
		}
	}
});
bY("rst-invite-yourself", function (a, b) {
	if (b[Jb]) {
		var c = null;
		switch (ka(b[B], 10)) {
		  case 2:
			c = "response-no";
			break;
		  case 1:
			c = "response-yes";
			break;
		  case 3:
			c = "response-maybe";
			break;
		  case 0:
			c = "response-none";
			break;
		}
		if (c) {
			var d = W(Tg[td]);
			Da(d, d[Bb][A](/\bresponse-(\w+)\b/, c));
		}
	}
});
function _gotoMap(a) {
	var b = W(a);
	if (b && b[B]) {
		window[yb](nA(b[B]), "_blank");
		return false;
	} else {
		return true;
	}
}
function _wi_vi(a) {
	var b = a[B], c = b[A](/\D+/g, M) || Je;
	if (b !== c) {
		Oa(a, c);
	}
}
function _wi_updateRadio(a, b, c) {
	var d = null, e = a[hz][b];
	if (e) {
		if (e[B] == c) {
			Ka(e, true);
			d = e;
		} else {
			Ka(e, false);
		}
	}
	d !== null && _wi_c(d);
}
function mY(a) {
	var b = [Zn("\u786e\u5b9a"), Zn("\u53d6\u6d88")];
	$n(a, "\u60a8\u786e\u5b9a\u5417\uff1f", "\u60a8\u5373\u5c06\u5141\u8bb8\u8bbf\u5ba2\u4fee\u6539\u6d3b\u52a8\u3002 \u8fd9\u4f1a\u5bfc\u81f4\u8bbf\u5ba2\u4e22\u5931\u6240\u6709\u5df2\u521b\u5efa\u7684\u8986\u76d6\u5185\u5bb9\u3002\u662f\u5426\u7ee7\u7eed\uff1f", b);
}
function yX(a) {
	if (nY) {
		a(nY);
		return;
	}
	var b = mn + "eventpage__" + He[Kd]() + ".xsl";
	GW(b, function (c) {
		nY = c;
		a(nY);
	});
}
var nY;
function gY(a) {
	var b = W(a);
	if (!b) {
		return null;
	}
	var c = b[B];
	if (!c) {
		return null;
	}
	return bW(c);
}
function bW(a) {
	var b = wU(a, "RRULE", false);
	if (1 == b[t]) {
		return new xU(b[0]);
	}
	return null;
}
R.bI = dY;
R.mL = SX;
R.nL = pX;
R.oL = AX;
var _wi_preSubmit = null, _wi_handleDismiss = null;
function _wi_s(a, b, c) {
	var d = R.W.Ma();
	try {
		BX();
		var e = PX(a);
		if (!(e.lv || e.ov)) {
			_wi_handleDismiss && _wi_handleDismiss(b);
			return false;
		}
		var f = W("masterForm")[hz];
		f.sf && f.sf[B] == bi && e.vf[q](OA, "js");
		oY(pY, {form:a, De:e, YC:c, ie:b, yK:d});
	}
	catch (g) {
	}
	finally {
		return false;
	}
}
function oY(a, b) {
	for (var c = 0, d = a[t]; c < d; ++c) {
		if (!a[c](b, a[Kb](c + 1))) {
			return;
		}
	}
}
function qY(a, b) {
	var c = HX(a), d = null, e = b ? QR : "rst";
	for (var f = 0; f < c[t]; ++f) {
		var g = c[f];
		if (g[td] === e && g[Jb]) {
			d = g[B];
			break;
		}
	}
	if (null === d) {
		Pp("\u60a8\u662f\u5426\u4f1a\u53c2\u52a0\uff1f", !b ? "\u8bf7\u9009\u62e9\u201c\u662f\u201d\u6216\u201c\u5426\u201d\u6216\u201c\u4e5f\u8bb8\u201d\u3002" : "\u8bf7\u9009\u62e9\u201c\u662f\u201d\u6216\u201c\u4e5f\u8bb8\u201d\u3002");
		return;
	}
	var i = b ? a[hz][PR][B] : a[hz].rgu[B], j = b ? a[hz][RR][B] : a[hz][VR][B];
	if (QX(a) && !W("marker-special")) {
		var m = a[hz].sf;
		m && m[B] == bi ? cA(false, function (n) {
			undefined != n && rY(a, d, i, j, n, b);
			return false;
		}) : rY(a, d, i, j, "ALL", b);
	} else {
		rY(a, d, i, j, "ONE", b);
	}
}
function sY(a) {
	var b = a.form, c = a.De.vf, d = a.YC, e = UW(b, [], true);
	for (var f = 0; f < e[t]; ++f) {
		var g = e[f];
		switch (g[J]) {
		  case "daterange":
			if (g.Ob.Dq && lU(g[td])) {
				var i, j, m = W(g[td] + to + _DR_REAL);
				if (!m[B] || /^[^T\/\?]*\?/[zb](m[B])) {
					i = _DR_SD;
					j = "\u8bf7\u6307\u5b9a\u5f00\u59cb\u65e5\u671f";
				} else {
					if (/^[^\/T\?]*T[^T\?\/]*\?/[zb](m[B])) {
						i = _DR_ST;
						j = "\u8bf7\u6307\u5b9a\u5f00\u59cb\u65f6\u95f4";
					} else {
						if (/\/[^T\?]*\?/[zb](m[B])) {
							i = _DR_ED;
							j = "\u8bf7\u6307\u5b9a\u7ed3\u675f\u65e5\u671f";
						} else {
							if (/\/[^T\?]*T[^\?]*\?/[zb](m[B])) {
								i = _DR_ET;
								j = "\u8bf7\u6307\u5b9a\u7ed3\u675f\u65f6\u95f4";
							} else {
								i = _DR_ED;
								j = "\u6307\u5b9a\u7684\u7ed3\u675f\u65f6\u95f4\u8981\u5728\u5f00\u59cb\u65f6\u95f4\u4e4b\u540e";
							}
						}
					}
				}
				$n(tY(g[td] + to + i), "\u65e5\u671f\u4e0d\u5168", j, [Zn(Zd)]);
				return false;
			}
			break;
		  case Vt:
			break;
		  case "rrule":
			if (a.De.PF) {
				nV(g[td]);
				var n = dY(), p = kV("r-" + g[td], n);
				iY(g[td], p);
			}
			break;
		}
	}
	var s = b[hz][PA][B], u = [], v = [], w = true, x = LA == s, y = c[t], C = null, p = null;
	for (var f = 0; f < y; f += 2) {
		switch (c[f]) {
		  case "add":
			var D = null, L = W("domain-marker");
			if (L) {
				D = L[B];
			}
			var O = M, ba = Vm(c[f + 1]), ea = [], ta = [];
			for (var V = 0; V < ba[t]; ++V) {
				var Aa = Tm(ba[V]);
				if (!Aa || $z(Aa)) {
				//tianliang edit,delete guest id validation.
					ea[q](ba[V]);
					//old => ta[q](ba[V]);
				} else {
					ea[q](ba[V]);
					if (D) {
						var Ma = Aa[Lc](/@(.*)$/)[1];
						if (Ma == "resource.calendar.google.com") {
							var Pa = Aa[Lc](/^(.*)_/);
							if (Pa) {
								Ma = Pa[1];
							}
						}
						if (D != Ma) {
							O += Aa + "\n";
						}
					}
				}
			}
			if (O) {
				if (!yy(("\u4ee5\u4e0b\u53c2\u52a0\u8005\u4e0d\u5728\u60a8\u7684\u57df (" + D + ") \u4e2d <br>\u60a8\u786e\u5b9a\u8981\u9080\u8bf7\u4ed6\u4eec\u5417\uff1f<br><br>" + O)[A](/<br>/g, "\n"))) {
					return false;
				}
			}
			if (ta[t]) {
				u[q](c[f]);
				v[q]("\u4ee5\u4e0b\u6765\u5bbe\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u65e0\u6548\uff1a<blockquote><strong> " + P(ta[K](Wj)) + " </strong></blockquote> <p>");
			}
			c[Dd](f, 2);
			y -= 2;
			f -= 2;
			for (var V = 0; V < ea[t]; ++V) {
				c[q]("add", ea[V]);
			}
			break;
		  case Fg:
			x = false;
			C = c[f + 1];
			if (!C || !C[Lc](/^(?:(?:[0-9]{8,}\/[0-9]{8,})|(?:[0-9]{8,}T[0-9]{6}\/[0-9]{8,}T[0-9]{6}))$/)) {
				u[q](c[f]);
				v[q]("\u8bf7\u6307\u5b9a\u5f00\u59cb\u65e5\u671f\u548c\u7ed3\u675f\u65e5\u671f");
				w = false;
			} else {
				var Ea = C[E]("/"), Ga = hi(C[I](0, Ea)), Fb = hi(C[I](Ea + 1)), Ib = Ga.o(), Mb = Fb.o();
				if (Ib > Mb || !(Ga instanceof Jh) && Ib == Mb) {
					u[q](c[f]);
					v[q]("\u5f88\u62b1\u6b49\uff0c\u60a8\u4e0d\u80fd\u521b\u5efa\u7ed3\u675f\u65f6\u95f4\u65e9\u4e8e\u5f00\u59cb\u65f6\u95f4\u7684\u6d3b\u52a8\u3002");
					w = false;
				}
			}
			break;
		  case "text":
			if (s == LA && wf(c[f + 1]) === M) {
				u[q](c[f]);
				v[q]("\u60a8\u7684\u6d3b\u52a8\u6ca1\u6709\u5408\u9002\u7684\u540d\u79f0\u3002\u60a8\u662f\u4ecd\u7136\u8981\u521b\u5efa\u5b83\u8fd8\u662f\u8fd4\u56de\u8fdb\u884c\u4fee\u6539\uff1f");
			}
			break;
		  case Sz:
			p = bW(c[f + 1]);
			break;
		}
	}
	var Rb = null;
	if (x) {
		u[q](c[f]);
		v[q]("\u8bf7\u6307\u5b9a\u5f00\u59cb\u65e5\u671f\u548c\u7ed3\u675f\u65e5\u671f");
		w = false;
	} else {
		if (p) {
			try {
				if (!C) {
					var Sb = W("masterForm")[hz][Fg];
					C = Sb[B];
				}
				if (C) {
					var yd = p.Py(), ac = hi(C);
					Rb = ac.el.l;
					if (Rb > yd) {
						u[q](Sz);
						v[q]("\u6b64\u6d3b\u52a8\u6301\u7eed " + Rb + qg + (Rb > 1 ? "\u5929" : "\u5929") + "\uff0c\u4f46\u662f\u91cd\u590d\u5468\u671f\u77ed\u4e8e\u6301\u7eed\u65f6\u95f4\u3002");
					}
				}
			}
			catch (Rd) {
			}
		}
	}
	if (VW.Bb() == null) {
		u[q]("erem");
		v[q](VA);
		w = false;
	}
	if (!d) {
		if (v[t]) {
			var Cb;
			Cb = 1 === v[t] ? v[0] : "\u6b64\u6d3b\u52a8\u5b58\u5728\u67d0\u4e9b\u95ee\u9898\u3002<ul><li>" + v[K]("<li>") + "</ul>";
			if (w) {
				if (1 === v[t]) {
					switch (u[0]) {
					  case Sz:
						Cb += qg + ("\u60a8\u786e\u5b9a\u5e0c\u671b\u591a\u6b21\u5b9e\u65bd " + Rb + " \u5929\u957f\u7684\u6d3b\u52a8\u5417\uff1f");
						$n(uY(b), "\u60a8\u7684\u6d3b\u52a8", Cb, [Zn("\u662f\uff0c\u521b\u5efa\u91cd\u53e0\u590d\u6d3b\u52a8"), Zn("\u4e0d\uff0c\u4e00\u4e2a\u5c31\u591f\u4e86"), Zn("&laquo; \u4fee\u6539")]);
						return false;
					}
				}
				$n(vY(b), "\u60a8\u7684\u6d3b\u52a8", Cb, [Zn("\u4fdd\u5b58"), Zn("&laquo; \u4fee\u6539")]);
			} else {
				Pp("\u60a8\u7684\u6d3b\u52a8", Cb);
			}
			return false;
		}
	}
	return true;
}
function rY(a, b, c, d, e, f) {
	var g = a[hz].eid[B], i = a[hz].src[B], j = a[hz].hl[B], m = a[hz].ctz[B], n = [qz, g, Lx, i, f ? "rst-self" : "rst", b, f ? "rgu-self" : "rgu", c, f ? "rcomment-self" : VR, d, PA, f ? "INVITE_YOURSELF" : "RESPOND", OA, "js", "hl", j, "ctz", m, "scp", e, "hl", j], p = M;
	if (!!a[hz].tok && !!a[hz].tok[B]) {
		p = a[hz].tok[B];
		n[q]("tok", p);
	}
	var s = a[hz].sf;
	s && bi == s[B] && n[q]("sf", bi);
	DR(n);
	CR(n);
	TX(n, false);
	Mk(NA, n, Lk(wY(g, i, m, j, p, f), "\u65e0\u6cd5\u56de\u590d\u6d3b\u52a8", 3));
	var u = f ? W(Tg[td]) : W(Pg[td]);
	xm(u, "collapsed");
	ym(u, "expanded");
	if (f) {
		Oa(a[hz]["old-" + QR], b);
		Oa(a[hz]["old-" + PR], c);
		Oa(a[hz]["old-" + RR], d);
	} else {
		Oa(a[hz]["old-rst"], b);
		Oa(a[hz]["old-rgu"], c);
		Oa(a[hz]["old-" + VR], d);
	}
}
function xY(a, b) {
	var c = a.De;
	if (!c.fH) {
		return true;
	}
	var d = "\u53d1\u9001\u9080\u8bf7\uff1f", e = "\u60a8\u5e0c\u671b\u5411\u6765\u5bbe\u53d1\u9001\u9080\u8bf7\u5417\uff1f";
	if (!c.ov) {
		d = "\u53d1\u9001\u66f4\u65b0\uff1f";
		if (c.lF && c.Ju) {
			e = c.hm && c.um ? "\u60a8\u662f\u5426\u8981\u5411\u65b0\u6765\u5bbe\u53d1\u9001\u9080\u8bf7\uff0c\u5411\u73b0\u6709\u6765\u5bbe\u53d1\u9001\u66f4\u65b0\uff0c\u5e76\u5411\u5df2\u53d6\u6d88\u7684\u6765\u5bbe\u53d1\u9001\u53d6\u6d88\u901a\u77e5\uff1f" : c.hm ? "\u60a8\u662f\u5426\u8981\u5411\u65b0\u6765\u5bbe\u53d1\u9001\u9080\u8bf7\uff0c\u5e76\u5411\u73b0\u6709\u6765\u5bbe\u53d1\u9001\u66f4\u65b0\uff1f" : c.um ? "\u60a8\u662f\u5426\u8981\u5411\u73b0\u6709\u6765\u5bbe\u53d1\u9001\u66f4\u65b0\uff0c\u5e76\u5411\u5df2\u53d6\u6d88\u7684\u6765\u5bbe\u53d1\u9001\u53d6\u6d88\u901a\u77e5\uff1f" : "\u60a8\u5e0c\u671b\u5411\u73b0\u6709\u6765\u5bbe\u53d1\u9001\u66f4\u65b0\u5417\uff1f";
		} else {
			if (c.hm && c.um) {
				e = "\u60a8\u662f\u5426\u8981\u5411\u65b0\u6765\u5bbe\u53d1\u9001\u9080\u8bf7\u4ee5\u53ca\u5411\u5df2\u53d6\u6d88\u7684\u6765\u5bbe\u53d1\u9001\u53d6\u6d88\u901a\u77e5\uff1f";
			} else {
				if (c.hm) {
					e = "\u60a8\u662f\u5426\u8981\u5411\u65b0\u6765\u5bbe\u53d1\u9001\u9080\u8bf7\uff1f";
				} else {
					if (c.um) {
						e = "\u60a8\u5e0c\u671b\u5411\u5df2\u53d6\u6d88\u7684\u6765\u5bbe\u53d1\u9001\u53d6\u6d88\u901a\u77e5\u5417\uff1f";
					} else {
						return true;
					}
				}
			}
		}
	}
	$n(function (f) {
		switch (f) {
		  case -1:
		  case 2:
			return;
		  case 0:
			dA(c.vf);
			break;
		  case 1:
			break;
		}
		oY(b, a);
		return false;
	}, d, e, [Zn("\u53d1\u9001", "di_sendbtn"), Zn("\u4e0d\u53d1\u9001", "di_nosendbtn"), Zn("\u53d6\u6d88", "di_cancel")]);
	return false;
}
function yY(a) {
	var b = a.De, c = a.form;
	if (b[VQ] != "EDIT") {
		return true;
	}
	if (!b.nv || b.rv) {
		return true;
	}
	if (!b.Iy || b.Ol) {
		return true;
	}
	var d = c[hz][Fg];
	d || (d = c[hz]["old-" + Fg]);
	if (d) {
		var e = d[B][Lc](/^[^\/]*/)[0];
		b.vf[q](WR, e);
	}
	return true;
}
function zY(a, b) {
	var c = a.De, d;
	if (c.nv && !c.jF || !c.Iy && c.Ol) {
		d = "ALL";
	} else {
		if (!c.Ol || "EDIT" != c[VQ]) {
			d = "ONE";
		} else {
			if (!c.Qs && c.XG) {
				d = "ONE";
			} else {
				c.kF || (d = "ONE");
			}
		}
	}
	if (!We(d)) {
		cA(c.Qs, function (e) {
			d = e;
			if (undefined != d) {
				c.vf[q]("scp", d);
				if ("ONE" == d && c.Ol) {
					var f = c.vf;
					for (var g = 0; g < f[t]; g += 2) {
						if (Sz == f[g]) {
							f[Dd](g, 2);
							break;
						}
					}
				}
				oY(b, a);
			}
			return false;
		});
		return false;
	}
	c.vf[q]("scp", d);
	return true;
}
function AY(a, b) {
	var c = a.De;
	if (c.zE || !c.Fl) {
		return true;
	}
	bA(c.Ns ? c.Ns : M, function (d) {
		d == 0 && oY(b, a);
		return false;
	});
	return false;
}
function BY(a, b) {
	var c = a.De;
	if (!(c[VQ] == "EDIT" && c.dB && c.Ju)) {
		return true;
	}
	mY(function (d) {
		d == 0 && oY(b, a);
		return false;
	});
	return false;
}
function CY(a) {
	var b = null, c = null, d = null, e = "ONE", f = null;
	for (var g = 0; g < a[t]; ) {
		var i = false;
		switch (a[g]) {
		  case PA:
			f = a[g + 1];
			break;
		  case "scp":
			e = a[g + 1];
			break;
		  case Fg:
			b = a[g + 1];
			i = true;
			break;
		  case WR:
			d = a[g + 1];
			i = true;
			break;
		  case "rdur":
			c = a[g + 1];
			i = true;
			break;
		}
		if (i) {
			a[Dd](g, 2);
		} else {
			g += 2;
		}
	}
	if ("ONE" === e || LA === f) {
		b && a[q](Fg, b);
	} else {
		try {
			if (b) {
				var j = hi(b);
				c || (c = j.A.Db(j[H])[r]());
				if ("TAIL" === e || !d) {
					d = j[H][r]();
				}
			}
		}
		catch (m) {
		}
		d && a[q](WR, d);
		c && a[q]("rdur", c);
	}
}
var DY = {};
DY[LA] = "\u975e\u5e38\u62b1\u6b49\uff0c\u65e0\u6cd5\u521b\u5efa\u8be5\u6d3b\u52a8\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5";
DY.RESPOND = "\u65e0\u6cd5\u56de\u590d\u6d3b\u52a8";
DY.EDIT = hS;
function EY(a) {
	var b = a.De.vf, c = a.ie;
	CY(b);
	var d = undefined;
	if (_wi_preSubmit) {
		var e = _wi_preSubmit(b, c);
		d = function (p, s) {
			var u = e(p);
			s.ac("EventFormSubmitted");
			return u;
		};
	}
	var f = null, g = false, i = undefined;
	for (var j = 0; j < b[t]; ++j) {
		if (b[j] == qz) {
			f = b[j + 1];
		} else {
			if (b[j] == "nopts") {
				g = true;
			} else {
				if (b[j] == "scp") {
					i = b[j + 1];
				}
			}
		}
	}
	if (d) {
		Mk(NA, b, Lk(function (p) {
			d(p, a.yK);
		}, DY[a.De[VQ]]));
	} else {
		var m = document[Xc]("FORM");
		jb(m, "POST");
		l(m[F], U);
		m.action = window[nc][r]()[A](/\?.*$/, M);
		for (var j = 0; j < b[t]; j += 2) {
			var n = document[Xc]("INPUT");
			hb(n, am);
			lb(n, b[j]);
			Oa(n, b[j + 1]);
			m[o](n);
		}
		document[Bc][o](m);
		m.submit();
	}
	return false;
}
function tY(a) {
	return function () {
		rA(a);
	};
}
function wY(a, b, c, d, e, f) {
	return function () {
		var g = [qz, a, Lx, b, "emid", Og[td], PA, "VIEW", "hl", d, "ctz", c, OA, "xml"];
		if (f && OQ) {
			var i = new T("You have been added to <span onmousedown=_EF_ShowEventDetails(\"${id}\",true,false,\"${src}\");_HideMessage(); class=\"lk\">this event</span>");
			i.b(Wt, a);
			i.b(Lx, W("self-principal-id")[B]);
			om(i[r]());
		}
		e && g[q]("tok", e);
		Mk(NA, g, FY);
		return true;
	};
}
function FY(a) {
	if (200 == a[Nc]) {
		zX(AW(a[Xb]));
		wX(["guestlistscont", "myresponse"]);
		eX(0);
	}
	return false;
}
function vY(a) {
	return function (b) {
		switch (b) {
		  case 0:
			_wi_s(a, true, true);
			break;
		  case -1:
		  case 1:
			break;
		}
		return false;
	};
}
function uY(a) {
	return function (b) {
		switch (b) {
		  case -1:
		  case 2:
			break;
		  case 1:
			var c = a[hz]["old-" + Sz];
			Oa(a[hz][Sz], !(LA === a[hz][PA]) && c ? c[B] : M);
			_wi_s(a, true, true);
			break;
		  case 0:
			_wi_s(a, true, true);
			break;
		}
		return false;
	};
}
var pY = [sY, yY, zY, AY, BY, xY, EY];
R.pL = qY;
function GY() {
}
af(GY);
GY[z].nH = function (a) {
	if (a == 0) {
		_wi_s(W("masterForm"), true, true);
		this.VI();
	}
	return false;
};
GY[z].VI = function () {
	var a = W("masterForm")[hz].eid[B], b = this.UD(), c = this.vl();
	Mk("reqevxfer", [qz, a, "hl", Sk, "invMsg", c, "invEmail", b]);
};
GY[z].vl = function () {
	return W("tr-message")[B];
};
GY[z].UD = function () {
	return W("tr-owner")[B];
};
GY[z].DD = function () {
	var a = W(Uu);
	if (a) {
		return a[B];
	}
	var b = W("wi-title");
	return "textContent" in b ? b.textContent : b.innerText;
};
GY[z].CD = function () {
	var a, b = W("when-" + _DR_REAL);
	a = b ? b[B] : W(_DR_REAL + "-when")[bc];
	return hi(a);
};
GY[z].Pa = function () {
	var a = this.DD(), b = this.CD(), c = HY;
	c.b("event_title", P(a));
	c.b("event_date", nR(b));
	var d = [Zn("\u66f4\u6539\u6240\u6709\u8005"), Zn("\u53d6\u6d88")];
	$n(rf(this.nH, this), "\u9009\u62e9\u65b0\u7684\u6240\u6709\u8005", c[r](), d, null, true, true);
};
var HY = new T("<div><p>\u60a8\u6b63\u5728\u8f6c\u8ba9\u6b64\u6d3b\u52a8\u7684\u6240\u6709\u6743\uff1a<blockquote><b>${event_title}</b><br>${event_date}</blockquote><p><label for=tr-owner><b>\u65b0\u7684\u6240\u6709\u8005\uff1a</b></label><br><input id=tr-owner type=text></input>&nbsp;<a onclick=\"return _popPicker(event, 'tr-owner');\" href=\"#\">\u9009\u62e9\u8054\u7cfb\u4eba</a><p><label for=tr-message><b>\u53d1\u9001\u6d88\u606f\u7ed9\u65b0\u7684\u6240\u6709\u8005\uff1a</b></label><br><textarea id=tr-message rows=3>\u6211\u5e0c\u671b\u4f7f\u7528 Google \u65e5\u5386\u8f6c\u8ba9\u6b64\u6d3b\u52a8\u7684\u6240\u6709\u6743\u3002</textarea></div>");
function IY(a, b, c, d, e) {
	if (Gj.ta(a).vp()) {
		return;
	}
	Mp(function () {
		IY(a);
	}, "\u65e5\u5386\u89c6\u56fe\u6d3b\u52a8", "_EF_ShowEventDetails_" + a);
	var f = d ? d : Gj.ta(a).src, g = [qz, a, Lx, f, "sf", bi, "hl", Sk, OA, "xml"];
	b && g[q]("emid", Og[Qy], "emid", Qg[Qy], "emid", Sg[Qy]);
	c && g[q](PA, "VIEW_ORIGINAL");
	DR(g);
	CR(g);
	var i = Gj.ta(a);
	hG(i, undefined, undefined, b);
	Sn(true, "loadEvent");
	var j = R.W.Ma();
	Kk.f().Qb(NA, g, sf(JY, false, b, j), 18, null, sf(KY, e));
}
function LY(a, b) {
	MY(true);
	Mp(function () {
		LY(a);
	}, "\u65e5\u5386\u89c6\u56fe\u6d3b\u52a8", "_EF_ShowEventTemplate_" + a);
	var c = new Array(a[t]), d;
	for (var e = 0; e < a[t]; ++e) {
		if (e % 2 == 0 && a[e] == Lx) {
			d = a[e + 1];
		}
		c[e] = a[e];
	}
	if (!d) {
		var d = wz();
		d || (d = Yn);
		c[q](Lx, d);
	}
	if (NY(c)) {
		b && b.ac();
	} else {
		c[q](PA, MA, "sf", bi, "hl", Sk, OA, "xml");
		Sn(true, "loadEvent");
		Kk.f()[Pc](NA, c, undefined, sf(JY, true, false, b), null, null, sf(KY, b));
	}
}
function NY(a) {
	try {
		var b = {};
		b.src = Yn;
		var c = "????????/????????", d = [], e = {};
		for (var f = 0; f < a[t]; f += 2) {
			var g = a[f], i = a[f + 1];
			if (!i) {
				continue;
			}
			switch (g) {
			  case "text":
			  case Rz:
			  case Lx:
				b[g] = i;
				break;
			  case Fg:
				c = i;
				break;
			  case "add":
				d[q](i);
				break;
			  case Gg:
				var j = i[Lc](/^([^:]+):(.*)/);
				if (!j) {
					break;
				}
				var m = j[1], n = j[2];
				if (m === lh) {
					e[m] = n;
				} else {
					return false;
				}
				break;
			  case "ctz":
				break;
			  default:
				return false;
			}
		}
		if (c) {
			var p = ji(c);
			b[Fg] = p;
			b.trp = !(p[H] instanceof ei);
		} else {
			b.trp = true;
		}
		if (d[t]) {
			var s = {};
			for (var f = 0; f < d[t]; ++f) {
				var u = Um(d[f]), v = Qm.f().sh(u);
				s[v ? v.Ra : u] = 0;
			}
			s[Yn] = 1;
			b.add = s;
		}
		if (e) {
			b[Gg] = e;
		}
		var w = uV(b);
		OY(w, true);
		return true;
	}
	catch (x) {
		return false;
	}
}
function PY(a, b) {
	QY(a) ? $n(function (c) {
		switch (c) {
		  case 0:
			dA(a);
			RY(a, LA, b);
			break;
		  case 1:
			RY(a, LA, b);
			break;
		  case 2:
			break;
		}
	}, "\u53d1\u9001\u9080\u8bf7\uff1f", "\u60a8\u5e0c\u671b\u5411\u6765\u5bbe\u53d1\u9001\u9080\u8bf7\u5417\uff1f", [Zn("\u53d1\u9001"), Zn("\u4e0d\u53d1\u9001"), Zn("\u53d6\u6d88")]) : RY(a, LA, b);
}
function QY(a) {
	for (var b = 0; b < a[t]; b += 2) {
		if (a[b] == "add") {
			return true;
		}
	}
	return false;
}
function SY(a, b) {
	var c = Array[md](window, b);
	c[q](qz, a.N, Lx, a.src);
	a.C |= 64;
	RY(c, "EDIT");
}
function RY(a, b, c) {
	var d = new Array(a[t]), e = null, f = false, g = undefined;
	for (var i = 0; i < a[t]; ++i) {
		d[i] = a[i];
		switch (a[i]) {
		  case qz:
			e = a[i + 1];
			break;
		  case "nopts":
			f = true;
			break;
		  case "scp":
			g = a[i + 1];
			break;
		}
	}
	d[q](PA, b, OA, "js");
	DR(d);
	CR(d);
	var j = TX(d, false), m = TY(j, DY[b]);
	Mk(NA, d, Lk(UY(b, e, c), m, 17));
	Yo();
	Zo();
}
function TY(a, b) {
	return function () {
		for (var c = a[t] - 1; c >= 0; --c) {
			var d = a[c];
			Nj.f().J(d.N) || HR(d);
			Nj.f()[Uc](d.N);
		}
		om(b);
		Yo();
	};
}
function UY(a, b, c) {
	return function (d) {
		c && c.ac();
		if (lm(d) == 200 && Hm(d)) {
			eval(Jm(d[Xb]));
		} else {
			return;
		}
		if (a == "EDIT" || a == LA) {
			Nj.f()[od](b);
		}
	};
}
function VY(a, b, c, d) {
	var e = [qz, a.N, Lx, a.src, "rst", b, PA, "RESPOND", "sf", bi, OA, "js", "hl", Sk];
	c === "ALL" && e[q]("scp", "ALL");
	DR(e);
	CR(e);
	Kk.f().Qb(NA, e, null, WY(a, d, b), 3);
	Yo();
}
function WY(a, b, c) {
	return function () {
		c == 6 && HR(a);
		GR(a.N, a.src, b);
		Yo();
		om("\u65e0\u6cd5\u56de\u590d\u6d3b\u52a8");
	};
}
function KY(a) {
	Sn(false, "loadEvent");
	a && a.ac();
}
function JY(a, b, c, d) {
	if (c) {
		c.ac(a ? "CreateEventReceived" : "EditEventReceived");
	}
	OY(d, a, b);
}
function XY(a) {
	var b = a[A](/<script\b[^>]*>(?:<!--)?\s*\/\/ GOO([\s\S]*?)<\/script[^>]*>/i, M);
	return {Vu:b, CI:b != a ? RegExp.$1 : null};
}
function YY(a) {
	if (200 === lm(a)) {
		var b = XY(a[Xb]).CI;
		iR();
		b && eval(b);
		fy && om(hS);
	} else {
		om(hS);
	}
}
function ZY(a, b) {
	var c = W("oncalendar");
	if (c && c[J][Kd]() == am) {
		c = W("tocalendar");
	}
	if (c && c[ez]) {
		var d = c[ez], e = d[t], f = Y.f();
		for (var g = 0; g < e; ++g) {
			var i = d[g], j = f.$(i[B]);
			if (!j) {
				continue;
			}
			var m = f.Ah(j);
			if (m) {
				Ha(i, m);
			}
		}
	}
	var n = W("checkR");
	if (n) {
		if (oX()) {
			if (a) {
				l(n[F], M);
			} else {
				var p = W("masterForm"), s = false, u = p[hz].eid && p[hz].eid[B];
				if (u) {
					var v = Gj.ta(u);
					s = v && v.C & 256;
				}
				s || n[ud][Gc](n);
			}
		} else {
			n[ud][Gc](n);
		}
	}
	kq = $Y;
	b.ac(a ? "CreateEventDisplayed" : "EditEventDisplayed");
}
function aZ(a, b, c) {
	var d = hf == typeof a ? AW(a) : a;
	if (c) {
		var e = {summary:null, dates:null, rrule:null, "first-start":null, location:null, description:null}, f = d[Pd];
		for (var g = f[ad]; g; g = g[Ad]) {
			g[az] in e && Dv === g[TQ]("access") && g[hd]("editing", bi);
		}
	}
	var i = d[Hd]("calendars")[0];
	if (i && !i[ad]) {
		var j = {}, m = d[Hd]("principal");
		for (var n = m[t]; --n >= 0; ) {
			var p = m[n];
			j[p[TQ](Wt)] = oa(p[TQ](Hv));
		}
		hW(i, j);
	}
	xX(d, yz(), function () {
		zX(d);
		b[md](this, arguments);
		var s = d[Hd]("messages-to-user");
		if (s[t]) {
			var u = s[0][Hd]("display");
			for (var v = 0, w = u[t]; v < w; ++v) {
				om(P(tR(u[v])));
			}
		}
		XW(document[Iy].masterForm);
		W(UR) && Ck().zd(UR, true, false);
	});
}
function OY(a, b, c) {
	var d = R.W.Ma();
	bp(false);
	var e = sf(ZY, b, d);
	Kz(M, Qo, sf(aZ, a, e, c));
}
function $Y(a) {
	MY(false, a);
	return true;
}
_wi_preSubmit = function (a, b) {
	DR(a);
	CR(a);
	TX(a, true);
	b && pa(function () {
		MY(true);
	}, 0);
	return YY;
};
_wi_handleDismiss = function (a) {
	a && pa(function () {
		MY(true);
	}, 0);
};
function bZ(a, b) {
	var c = XR(a), d = [], e = [], f = [], g = false, i = false, j = !a.Eb;
	for (var m in b) {
		var n = b[m];
		switch (m) {
		  case "add":
			for (var p = n[t]; --p >= 0; ) {
				var s = n[p], u = cZ(s);
				if (!u) {
					u = "FAKEUID" + (Cg++)[r]();
					var v = Uz(s);
					Xm([u, 0, v[0], v[1]]);
				} else {
					if (u == Yn) {
						a.C |= 512;
					}
				}
				if (!(u in a.Ha())) {
					Sj(a, u, 0, 0, null);
					++a.Eb;
				}
			}
			break;
		  case "del":
			for (var p = n[t]; --p >= 0; ) {
				var s = n[p], u = cZ(s);
				if (u && u in a.Ha()) {
					pR(a, u);
					--a.Eb;
					if (u == Yn) {
						a.C &= -513;
					}
				}
			}
			break;
		  case Fg:
			g = i = true;
			var w = n[0], x, y, C = w[E]("/");
			x = hi(w[I](0, C));
			y = hi(w[I](C + 1));
			FR(a.N, x, y);
			break;
		  case Rz:
			g = i = true;
			ER(a.N, "location", n[0]);
			break;
		  case "text":
			g = i = true;
			ER(a.N, "text", n[0]);
			break;
		  case "rst":
			var D = ka(n[0], 10);
			D in hl && GR(a.N, a.src, D);
			break;
		  case "rgu":
			var L = ka(n[0], 10);
			if (a.Ha()[a.src]) {
				a.Ha()[a.src].qf = L;
			} else {
				a.Ha()[a.src] = {Kc:0, qf:L, Se:null};
			}
			break;
		  case VR:
			if (a.Ha()[a.src]) {
				a.Ha()[a.src].Se = n[0];
			} else {
				a.Ha()[a.src] = {Kc:0, qf:0, Se:n[0]};
			}
			break;
		  case "sprop":
			i = true;
			for (var p = n[t]; --p >= 0; ) {
				var O = n[p][Vb](Ke);
				a.$c[O[0]] = O[1];
			}
			break;
		  case Gg:
			for (var p = n[t]; --p >= 0; ) {
				var O = n[p][Vb](Ke);
				a.Sh[O[0]] = O[1];
			}
			break;
		  case "erem":
			for (var p = n[t]; --p >= 0; ) {
				var ba = n[p], ea = ba[Vc](Ke) + 1, ta = ba[I](ea), V = ba[I](0, ea) + 1;
				if (ta == 0) {
					d[q](V);
				} else {
					ta == 1 ? e[q](V) : f[q](V);
				}
			}
			break;
		  case "targ":
			a.src = n[0];
			a.rM = Yn;
			Y.f().Ud(a.src, true);
			break;
		  case Tz:
			g = i = true;
			if (a.Pb) {
				a.Pb.Vi = n[0];
			}
			break;
		  case "icc":
			i = true;
			if (n[0] == "PRIVATE" || n[0] == "CONFIDENTIAL") {
				a.C |= 4096;
			} else {
				a.C &= -4097;
			}
			if (a.Pb) {
				a.Pb.wj = n[0];
			}
			break;
		  case "trp":
			i = true;
			if (a.Pb) {
				a.Pb.Ak = n[0] == bi;
			}
			break;
		  case Sz:
			if (a.Pb) {
				a.Pb.ek = n[0];
			}
			break;
		  case WR:
			if (a.Pb) {
				a.Pb.ph = hi(n[0]);
			}
			break;
		  case "ec":
			a.Pb && a.Pb.Mi[q]({Yk:"<p>" + n[0] + "</p>", Qk:Qm.f().Ba(Yn).na, Zk:R.U.zb().zc()});
		}
	}
	if (j && a.Eb > 0 && !(Yn in a.Ha())) {
		Sj(a, Yn, 1, 0, null);
		++a.Eb;
	}
	d = Bl(zl(d, f), e);
	var Aa = jR(a);
	if (d[t] != Aa[t] || zl(Aa, d)[t] > 0) {
		var Ma = wi(Tx(a.src), YQ);
		if (d[t] == Ma[t] && zl(d, Ma)[t] == 0) {
			a.Ag = null;
			a.C &= -262145;
		} else {
			a.Ag = Jn(d, a.src);
			a.C |= 262144;
		}
	}
	if (a.lb != a.src && g) {
		a.C |= 131072;
	}
	if (a.Ee && i && b.scp[0] == "ONE") {
		a.C |= 8192;
	}
	return c;
}
function TX(a) {
	var b = {};
	for (var c = 0; c < a[t]; ) {
		var d = a[c++], e = a[c++];
		d in b || (b[d] = []);
		b[d][q](e);
	}
	var f = b.eid[0], g = [];
	if (b[PA][0] == LA) {
		var i = b.src[0], j, m, n = b[Fg] && b[Fg][0];
		if (n) {
			var p = n[E]("/");
			j = hi(n[I](0, p));
			m = hi(n[I](p + 1));
		} else {
			throw new Error("missing dates for new event.");
		}
		var s = {qm:130999, Gf:70, ek:null, ph:null, Vi:M, Mi:[], Ak:!(j instanceof Jh), wj:"DEFAULT"};
		Y.f().Ud(i, true);
		g = [Mj(f, M, j, m, i, i, i, 69, null, null, 0, {}, {}, {}, null, s)];
	} else {
		var u = Gj.ta(f);
		if (!u) {
			return;
		}
		if (!u.Ee || b[Fg] || b[WR] || b[Sz] || b.rtz) {
			g = [u];
		} else {
			switch (b.scp[0]) {
			  case "ONE":
				g = [u];
				break;
			  case "ALL":
				g = JA(Gj.lu(u.Ee), function (w) {
					return !(w.C & 8192);
				});
				break;
			  case "TAIL":
				g = JA(Gj.lu(u.Ee), function (w) {
					return w[H].o() >= u[H].o() && !(w.C & 8192);
				});
			}
		}
	}
	var v = [];
	for (var c = g[t]; --c >= 0; ) {
		v[q](bZ(g[c], b));
	}
	return v;
}
function cZ(a) {
	var b = Um(a), c = Qm.f().sh(b);
	return c && c.Ml() ? c.Ra : null;
}
function MY(a, b) {
	if (!W("content")) {
		return;
	}
	if (!a && PX(W("masterForm")).lv) {
		$n(function (c) {
			0 === c && MY(true, b);
			return false;
		}, "\u60a8\u7684\u6d3b\u52a8", "\u60a8\u7684\u6d3b\u52a8\u5c1a\u672a\u4fdd\u5b58\u3002", [Zn("\u653e\u5f03\u4fee\u6539"), Zn("\u7ee7\u7eed\u4fee\u6539")]);
	} else {
		R.W.Od("ef_dismiss");
		fX();
		kq = null;
		b ? b() : uo();
	}
}
function VG() {
	return W("masterForm")[hz].eid[B];
}
function _EF_Delete() {
	mR(VG());
}
function _EF_ReportSpamEvent() {
	Dx(VG());
}
function _EF_moreActionsChange(a) {
	var b = R.W.Ma(), c = a[ez][a[Oy]][B];
	switch (c[ic](0)) {
	  case "c":
		var d = c[I](1, c[t]);
		b.sd("ef_dup_from_menu");
		dZ(false, d, null, null, b);
		break;
	  case "d":
		var e = W("masterForm")[hz].src[B];
		b.sd("ef_copy_from_menu");
		dZ(true, e, null, null, b);
		break;
	  case "n":
		break;
	  default:
	}
}
function eZ() {
	var a = W("masterForm")[hz].eid[B], b = Gj.ta(a), c = Qm.f().Ba(b.Vb), d = [], e = c.na;
	c.na && d[q](e);
	fZ(b, d);
}
function gZ(a) {
	var b = 0;
	for (var c in a.Ha()) {
		Qm.f().Ba(c) && ++b;
	}
	return b;
}
function hZ() {
	var a = W("masterForm")[hz].eid[B], b = Gj.ta(a);
	gZ(b) == b.Eb ? iZ(a) : Mk("details", [qz, a, Lx, b.src], jZ(a));
}
function jZ(a) {
	return function (b) {
		if (lm(b) === 200 && b[Xb][t] && Hm(b)) {
			var c = eval(Jm(b[Xb]));
			if (c instanceof Array && c[t]) {
				Km(c);
				iZ(a);
			}
		}
	};
}
function iZ(a) {
	var b = Gj.ta(a), c = [], d = [];
	for (var e in b.Ha()) {
		e != Yn && c[q](e);
	}
	var f = Qm.f().Ba(Yn), g = W("masterForm")[hz].add;
	if (g) {
		var i = Vm(g[B]);
		for (var j = 0; j < i[t]; ++j) {
			var m = Tm(i[j]);
			if (m && !$z(m)) {
				if (!f || m != f.na) {
					d[q](m);
				}
			}
		}
	}
	c[t] + d[t] == 0 && c[q](b.Vb);
	var n = c[t], p = Qm.f();
	for (var s = 0; s < n; ++s) {
		var u = p.Ba(c[s]);
		if (u && u.Ce == 0) {
			var v = u.na;
			v && d[q](v);
		}
	}
	fZ(b, d);
}
function fZ(a, b) {
	var c = "[\u66f4\u65b0] " + a[Gb] + " @ " + At(a), d = "\u8f93\u5165\u8981\u53d1\u9001\u7ed9\u53c2\u52a0\u6b64\u6d3b\u52a8\u7684\u6765\u5bbe\u7684\u6d88\u606f\u3002", e = "\u5411\u6765\u5bbe\u53d1\u9001\u7535\u5b50\u90ae\u4ef6";
	if (W("marker-hiddenguests")) {
		e = "\u5411\u7ec4\u7ec7\u8005\u53d1\u9001\u7535\u5b50\u90ae\u4ef6";
		d = "\u8f93\u5165\u8981\u53d1\u9001\u7ed9\u6b64\u6d3b\u52a8\u7ec4\u7ec7\u8005\u7684\u6d88\u606f\u3002";
	}
	xB.f().Pa(e, d, kZ, M, c, b, a.Ha());
}
function kZ(a) {
	if (a != 0) {
		return;
	}
	var b = W("masterForm"), c = [qz, b[hz].eid[B], Lx, b[hz].src[B]];
	xB.f().NI(c);
	return false;
}
function dZ(a, b, c, d, e) {
	var f = W("masterForm"), g = d || f[hz].eid[B], i = c || f[hz].src[B], j = f && QX(f) ? "ALL" : "ONE";
	Mp(function () {
		dZ(a, b, c, d);
	}, "\u65e5\u5386\u89c6\u56fe\u6d3b\u52a8", "EF_DuplicateEvent_" + d);
	var m = [PA, MA, "tmeid", g, "tmsrc", i, "catt", a ? bi : Xk, Gg, lh + ":DUPLICATE", "sf", bi, "hl", Sk, "scp", j, OA, "xml"];
	b && m[q](Lx, b);
	kq = null;
	Sn(true, "loadEvent");
	var n = R.W.Ma();
	Kk.f().Qb(NA, m, sf(JY, true, false, n), null, null, sf(KY, e));
}
function _EF_PublishButtonPopup() {
	var a = W("masterForm"), b = "http://www.google.com/calendar" + (ql() ? "/hosted/" + ol : M) + "/event?" + PA + "=" + MA + "&tmeid=" + ia(a[hz].eid[B]) + "&tmsrc=" + ia(a[hz].src[B]), c = "<a target=\"_blank\" href=\"" + P(b) + "\"><img border=0 src=\"http://www.google.com/calendar/images/ext/gc_button1_" + Ie + ".gif\"></a>", d = P(c);
	Pp("\u53d1\u5e03\u6d3b\u52a8\u6309\u94ae", "<table style=\"width:600px\"><tr><td align=center>" + c + "<br><br><b>\u5c06\u6b64\u4ee3\u7801\u653e\u5165\u60a8\u7684\u7f51\u7ad9\uff0c\u4ee5\u4fbf\u8bbf\u95ee\u8005\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06\u6b64\u6d3b\u52a8\u6dfb\u52a0\u81f3\u5176 Google \u65e5\u5386\u3002</b><br><br><textarea id=publishCode rows=3 style=\"width:600px\">" + d + "</textarea></td></tr></table>");
	pa(function () {
		W("publishCode")[fz]();
	}, 0);
}
function _EF_CalendarChange(a, b) {
	if (a[B] == "tranfer_event") {
		Oa(a, b);
		GY.f().Pa();
	}
}
R.en = IY;
R.pi = LY;
R.dn = MY;
R.Zr = VY;
R.Zy = dZ;
R.Xr = PY;
R.pi = LY;
R.$y = hZ;
R.az = eZ;
R.Yr = SY;
function $W() {
	this.jb = [];
	this.cl = false;
	this.OE = rf(this.aF, this);
}
function lZ(a, b, c) {
	lb(this, b);
	this.li = a;
	this.Yu = c;
}
xa(lZ[z], function () {
	return [this.li, this[td], this.Yu][K](qg);
});
var mZ = new T("//docs.google.com/a/${domain}/picker?multiselectEnabled=true&display=docs&title=");
af($W);
$W[z].cG = function () {
	_IFPC.Uw("picker", this.OE);
	var a = window[nc][id][Vb]("render");
	a = a[0] + "ifpc_relay.html";
	var b = [], c = escape("\u9009\u62e9 Google \u6587\u6863");
	if (ql()) {
		var d = mZ;
		d.b("domain", ia(ol));
		b[q](d[r]());
	} else {
		b[q]("//docs.google.com/picker?multiselectEnabled=true&display=docs&title=");
	}
	b[q](c);
	b = b[K](M);
	if (!this.wg) {
		this.wg = new google.Picker({url:b, ifpcRelayUrl:a});
		this.wg.ub();
	}
	this.wg.pc(true);
};
$W[z].aF = function (a) {
	var b = false;
	if (a && a[VQ] == "picked") {
		var c = a.docs[t];
		for (var d = 0; d < c; ++d) {
			var e = a.docs[d];
			this.Bi(new lZ(e.url, escape(e[td]), e.iconUrl || "images/icon_3_doc.gif")) || (b = true);
		}
		b && om("\u60a8\u9009\u5b9a\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u6863\u5df2\u6dfb\u52a0\u5230\u8be5\u6d3b\u52a8\u4e2d");
		this.wg.pc(false);
	} else {
		a[VQ] == "cancel" && this.wg.pc(false);
	}
};
$W[z].sB = function () {
	this.wg && this.wg.pc(false);
};
$W[z].gG = function () {
	if (this.jb != null) {
		this.jb = [];
	}
	var a = W(TR);
	if (a[pd] != null) {
		for (var b = 0; b < a[pd][t]; b += 2) {
			var c = a[pd][b][B][Vb](qg);
			this.jb[b / 2] = new lZ(c[0], c[1], c[2]);
		}
	}
	W("display-docs") != null && this.ro();
	this.cl = false;
};
$W[z].hG = function () {
	if (W(SR)[B] == bi || W(TR)[pd] != null) {
		this.gG();
	}
};
$W[z].ro = function () {
	var a = W("display-docs"), b = nZ, c = oZ, d = pZ;
	if (this.jb[t] == 0) {
		b.b("display_table", M);
		d.b("add_files", "\u6dfb\u52a0 Google \u6587\u6863");
	} else {
		b.b("display_table", c[r]());
		d.b("add_files", "\u6dfb\u52a0\u5176\u4ed6 Google \u6587\u6863");
	}
	W(SR)[B] == bi ? b.b("display_add_file_link", d) : b.b("display_add_file_link", M);
	k(a, b[r]());
	if (this.jb[t] != 0) {
		var e = W("google-docs-table"), f = document[Xc]("TBODY");
		for (var g = 0; g < this.jb[t]; g++) {
			var i = qZ;
			i.b("name_to_add", unescape(this.jb[g][td]));
			i.b("img", this.jb[g].Yu);
			i.b("id_to_add", this.jb[g].li);
			var j = document[Xc]("TR"), m = document[Xc]("TD");
			k(m, i[r]());
			j[o](m);
			if (W(SR)[B] == bi) {
				var n = rZ;
				n.b("id_to_add", this.jb[g].li);
				var p = document[Xc]("TD");
				k(p, n[r]());
				j[o](p);
			}
			f[o](j);
		}
		e[o](f);
	}
};
$W[z].ky = function () {
	var a = [];
	if (this.jb[t] == 0 && this.cl) {
		var b = sZ;
		b.b("currentVal", U);
		b.b("oldVal", M);
		a[q](b[r]());
	} else {
		for (var c = 0; c < this.jb[t]; c++) {
			var b = sZ;
			b.b("currentVal", this.jb[c][r](qg));
			b.b("oldVal", M);
			a[q](b[r]());
		}
	}
	k(W(TR), a[K](M));
};
$W[z].Bi = function (a) {
	var b;
	for (b = 0; b < this.jb[t]; b++) {
		if (this.jb[b].li == a.li) {
			return false;
		}
	}
	this.jb[b] = a;
	this.cl = true;
	W("no-of-gdocs").value++;
	this.ky();
	this.ro();
	return true;
};
$W[z].mI = function (a) {
	for (var b = 0; b < this.jb[t]; b++) {
		if (this.jb[b].li == a) {
			this.jb[Dd](b, 1);
			break;
		}
	}
	this.cl = true;
	W("no-of-gdocs").value--;
	this.ky();
	this.ro();
};
var qZ = new T("<span class=\"gb1\"><a href=\"${id_to_add}\" target=\"_blank\"><img src=\"${img}\"/></a><a href=\"${id_to_add}\" target=\"_blank\"> ${name_to_add}</a></span>"), rZ = new T("<span class=\"gb1\"><a class=\"docsRemoveLink\" href=\"#\" onclick=_at_removeElement(\"${id_to_add}\")>remove</a></span>"), nZ = new T("<div id=\"google-docs-outer-div\">${display_table}${display_add_file_link}</div>"), pZ = new T("<div class=\"data input editable\"><a id=\"attach-gdoc\" class=\"lk\" onclick=\"_at_launchPicker()\">${add_files}</a></div>"), oZ = new T("<table id=\"google-docs-table\"></table>"), sZ = new T("<input type=\"hidden\" name=\"gdoc-attachment\" value=\"${currentVal}\"/><input type=\"hidden\" name=\"old-gdoc-attachment\" value=\"${oldVal}\"/>"), _at_launchPicker = rf($W.f().cG, $W.f()), _at_removeElement = rf($W.f().mI, $W.f());
vf("_IFPC", _IFPC);
vf("_IFPC.handleRequest", _IFPC.Hu);

