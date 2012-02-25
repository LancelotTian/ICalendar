
function tZ(a) {
	var b;
	b = a ? a[Nb] == 9 ? a : qk(a) : Az().va;
	if (Q && b[fd] != "CSS1Compat") {
		return b[Bc];
	}
	return b[Pd];
}
var uZ;
function vZ(a) {
	var b = qk(a), c = $f && b[Oc] && QD(a, "position") == $l && (a[F].top == M || a[F][Cc] == M);
	if (typeof uZ == "undefined") {
		uZ = Qf && !dg("1.8.0.11");
	}
	var d = new Uj(0, 0), e = tZ(b);
	if (a == e) {
		return d;
	}
	var f = null, g;
	if (a.getBoundingClientRect && !c) {
		g = a.getBoundingClientRect();
		var i = Pz(b).ql();
		d.x = g[Cc] + i.x;
		d.y = g.top + i.y;
	} else {
		if (b[Oc] && !c && !uZ) {
			g = b[Oc](a);
			var j = b[Oc](e);
			d.x = g[Ic] - j[Ic];
			d.y = g[Jc] - j[Jc];
		} else {
			f = a;
			do {
				d.x += f[uc];
				d.y += f[Bd];
				if (ag && QD(f, "position") == "fixed") {
					d.x += b[Bc][dd];
					d.y += b[Bc][vb];
					break;
				}
				f = f[dc];
			} while (f && f != a);
			if (Zf || ag && QD(a, "position") == $l) {
				d.y -= b[Bc][Bd];
			}
			f = a[dc];
			while (f && f != b[Bc]) {
				d.x -= f[dd];
				if (!Zf || f[kz] != "TR") {
					d.y -= f[vb];
				}
				f = f[dc];
			}
		}
	}
	if ($f && a.getBoundingClientRect) {
		var m = QD(a, "position");
		if (m == "static" || m == "relative") {
			d.x = h[Wb](d.x);
			d.y = h[Wb](d.y);
		}
	}
	return d;
}
function wZ(a) {
	if (a instanceof yC) {
		return a;
	}
	if (typeof a.vi == cf) {
		return a.vi(false);
	}
	if (gf(a)) {
		var b = 0, c = new yC;
		La(c, function () {
			while (true) {
				if (b >= a[t]) {
					throw xC;
				}
				if (!(b in a)) {
					b++;
					continue;
				}
				return a[b++];
			}
		});
		return c;
	}
	throw Error("Not implemented");
}
function xZ(a, b, c) {
	if (!(a[az] in sk)) {
		if (a[Nb] == 3) {
			c ? b[q](ma(a[Jd])[A](/(\r\n|\r|\n)/g, M)) : b[q](a[Jd]);
		} else {
			if (a[az] in tk) {
				b[q](tk[a[az]]);
			} else {
				var d = a[ad];
				while (d) {
					xZ(d, b, c);
					d = d[Ad];
				}
			}
		}
	}
}
function yZ(a) {
	return a[A](/(\r\n|\r|\n)/g, "\n");
}
function zZ(a, b, c) {
	var d = !c ? a[Hd]("*") : null, e = UD;
	if (e) {
		var f = b ? U : M;
		a[F][e] = f;
		if (d) {
			for (var g = 0, i; i = d[g]; g++) {
				i[F][e] = f;
			}
		}
	} else {
		if (Q || Zf) {
			var f = b ? "on" : M;
			a[hd]("unselectable", f);
			if (d) {
				for (var g = 0, i; i = d[g]; g++) {
					i[hd]("unselectable", f);
				}
			}
		}
	}
}
function AZ(a, b, c) {
	var d = vZ(a);
	if (b instanceof Uj) {
		c = b.y;
		b = b.x;
	}
	RD(a, a[uc] + (b - d.x), a[Bd] + (c - d.y));
}
function BZ(a, b, c) {
	if (gf(a)) {
		try {
			vi(a, b, c);
		}
		catch (d) {
			if (d !== xC) {
				throw d;
			}
		}
	} else {
		a = wZ(a);
		try {
			while (true) {
				b[G](c, a[Pb](), undefined, a);
			}
		}
		catch (d) {
			if (d !== xC) {
				throw d;
			}
		}
	}
}
function CZ(a) {
	if (a >= 48 && a <= 57) {
		return true;
	}
	if (a >= 96 && a <= 106) {
		return true;
	}
	if (a >= 65 && a <= 90) {
		return true;
	}
	switch (a) {
	  case 32:
	  case 63:
	  case 107:
	  case 109:
	  case 110:
	  case 111:
	  case 186:
	  case 189:
	  case 187:
	  case 188:
	  case 190:
	  case 191:
	  case 192:
	  case 222:
	  case 219:
	  case 220:
	  case 221:
		return true;
	  default:
		return false;
	}
}
function DZ(a, b, c) {
	if (!Q && !(ag && dg("525"))) {
		return true;
	}
	if (Q && !c && (b == 17 || b == 18)) {
		return false;
	}
	if (a >= 48 && a <= 57) {
		return true;
	}
	if (a >= 96 && a <= 106) {
		return true;
	}
	if (a >= 65 && a <= 90) {
		return true;
	}
	if (a == 27 && ag) {
		return false;
	}
	switch (a) {
	  case 13:
	  case 27:
	  case 32:
	  case 63:
	  case 107:
	  case 109:
	  case 110:
	  case 111:
	  case 186:
	  case 189:
	  case 187:
	  case 188:
	  case 190:
	  case 191:
	  case 192:
	  case 222:
	  case 219:
	  case 220:
	  case 221:
		return true;
	  default:
		return false;
	}
}
function EZ(a) {
	var b;
	if (Q && "innerText" in a) {
		b = yZ(a.innerText);
	} else {
		var c = [];
		xZ(a, c, true);
		b = c[K](M);
	}
	b = b[A](/\xAD/g, M);
	b = b[A](/ +/g, qg);
	if (b != qg) {
		b = b[A](/^\s*/, M);
	}
	return b;
}
function FZ() {
	var a = Az();
	return a.R[md](a, arguments);
}
function HZ(a) {
	return ma(a)[A](/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")[A](/\x08/g, "\\x08");
}
function IZ(a, b) {
	var c = a[t] - b[t];
	return c >= 0 && a[Vc](b, c) == c;
}
function JZ(a) {
	this.sg = {};
	this.mA(a);
}
JZ[z].mA = function (a) {
	for (var b = 0; b < a[t]; b++) {
		this.lA(a[b]);
	}
};
JZ[z].lA = function (a) {
	var b = this.hu(a);
	this.av(b[0]);
	b[1] && this.av(this.gu(b[0], b[1]));
};
JZ[z].av = function (a) {
	this.sg[a] = this.sg[a] ? this.sg[a] + 1 : 1;
};
JZ[z].hu = function (a) {
	return wf(a)[Vb](/[\s,]+/);
};
JZ[z].eE = function (a) {
	var b = this.hu(a), c = b[0];
	if (!this.sg[c] || this.sg[c] <= 1) {
		return c;
	}
	if (b[1]) {
		c = this.gu(b[0], b[1]);
		if (!this.sg[c] || this.sg[c] <= 1) {
			return c;
		}
	}
	return a;
};
JZ[z].gu = function (a, b) {
	return a + qg + b[ic](0).toLocaleUpperCase() + ".";
};
JZ[z].ZC = function (a, b, c, d, e) {
	var f = HZ(d), g = new RegExp("(^|<| |\"|\\()" + f, oC);
	if (a && g[zb](a)) {
		return a;
	}
	if (c && a) {
		for (var i = 0; i < c[t]; ++i) {
			if (g[zb](c[i])) {
				return a;
			}
		}
	}
	if (g[zb](b)) {
		return this.At(b, e);
	}
	if (a) {
		return this.eE(a);
	}
	return this.At(b, e);
};
JZ[z].At = function (a, b) {
	if (b) {
		return a[Vb](Sm)[0];
	}
	return a;
};
function KZ() {
}
KZ[z].J = function () {
};
KZ[z].aa = function () {
};
KZ[z].Gd = function () {
};
KZ[z].Ia = function () {
};
KZ[z].Rc = function () {
};
KZ[z].jk = function () {
};
KZ[z].Kb = function () {
};
KZ[z].Ex = function () {
};
KZ[z].Hd = function () {
};
Na(KZ[z], function () {
});
KZ[z].Ej = Ye;
function LZ(a) {
	this.O = {};
	this.Kj = [];
	this.mg = {};
	if (a) {
		for (var b = 0, c; c = a[b]; b++) {
			this.add(c);
		}
	}
}
LZ[z].add = function (a) {
	this.Kj[q](a);
	var b = a.Kb();
	if (b) {
		this.O[b] = a;
		this.mg[b] = this.Kj[t] - 1;
	}
};
LZ[z].J = function (a) {
	return this.O[a] || null;
};
LZ[z].ff = function (a) {
	return this.Kj[a] || null;
};
LZ[z].Ab = function () {
	return this.Kj[t];
};
gb(LZ[z], function (a) {
	var b = this.mg[a];
	if (b != null) {
		this.Kj[Dd](b, 1);
		delete this.O[a];
		delete this.mg[a];
		for (var c in this.mg) {
			this.mg[c] > b && this.mg[c]--;
		}
	}
	return b != null;
});
LZ[z].indexOf = function (a) {
	return this.mg[a];
};
function MZ() {
	LZ[G](this);
}
N(MZ, LZ);
MZ[z].add = function () {
	throw Error("Can't add to EmptyNodeList");
};
var NZ = ME("goog.ds");
function OZ(a) {
	a && this.Px(a);
}
OZ[z].Px = function (a, b, c, d) {
	this.jr = a;
	if (!c && !d) {
		if (IZ(a, "?")) {
			this.aB = true;
			a = a[I](0, a[t] - 1);
		}
		if (IZ(a, "()")) {
			if (IZ(a, "name()") || IZ(a, "count()") || IZ(a, "position()")) {
				var e = a[Vc]("/");
				if (e != -1) {
					this.Bo = a[I](e + 1);
					a = a[I](0, e);
				} else {
					this.Bo = a;
					a = ".";
				}
				if (this.Bo == "count()") {
					this.LF = true;
				}
			}
		}
	}
	this.ug = b || a[Vb]("/");
	this.Rb = this.ug[t];
	this.Jj = this.ug[this.Rb - 1];
	this.Fe = this.ug[0];
	if (this.Rb == 1) {
		this.Eq = this;
		this.Dj = a[E]("$") == 0;
	} else {
		this.Eq = PZ(this.Fe, null, this, null);
		this.Dj = this.Eq.Dj;
		this.Fe = this.Eq.Fe;
	}
	if (this.Rb == 1 && !this.Dj) {
		this.MF = a == "." || a == M;
		this.NF = a[E](Sm) == 0;
		this.HF = a == "*|text()";
		this.GF = a == "@*";
		this.IF = a == "*";
	}
};
OZ[z].nj = function () {
	if (!this.EH) {
		if (this.Rb > 1) {
			this.uw = PZ(null, this.ug[Kb](0, this.ug[t] - 1), this, null);
		}
		this.EH = true;
	}
	return this.uw;
};
OZ[z].pu = function () {
	if (!this.aH) {
		if (this.Rb > 1) {
			this.Vv = PZ(null, this.ug[Kb](1), null, this);
		}
		this.aH = true;
	}
	return this.Vv;
};
OZ[z].Bb = function (a) {
	if (a == null) {
		a = QZ();
	} else {
		if (this.Dj) {
			a = a.Qo ? a.Qo() : QZ();
		}
	}
	if (this.LF) {
		return this.YD(a).Ab();
	}
	if (this.Rb == 1) {
		return a.Rc(this.Fe);
	} else {
		if (this.Rb == 0) {
			return a.J();
		}
	}
	var b = a.Ia(this.Fe);
	return b == null ? null : this.pu().Bb(b);
};
OZ[z].YD = function (a, b) {
	return this.Wo(a, false, b);
};
OZ[z].XD = function (a, b) {
	return this.Wo(a, true, b);
};
OZ[z].Wo = function (a, b, c) {
	if (a == null) {
		a = QZ();
	} else {
		if (this.Dj) {
			a = a.Qo ? a.Qo() : QZ();
		}
	}
	if (this.Rb == 0 && b) {
		return a;
	} else {
		if (this.Rb == 0 && !b) {
			return new LZ([a]);
		} else {
			if (this.Rb == 1) {
				if (b) {
					return a.Ia(this.Fe, c);
				} else {
					var d = a.Ia(this.Fe);
					return d && d.Ej() ? d.Gd() : a.Gd(this.Fe);
				}
			} else {
				var e = a.Ia(this.Fe, c);
				if (e == null && b) {
					return null;
				} else {
					if (e == null && !b) {
						return new MZ;
					}
				}
				return this.pu().Wo(e, b, c);
			}
		}
	}
};
OZ[z].aB = false;
OZ[z].ug = [];
OZ[z].Rb = null;
OZ[z].Jj = null;
OZ[z].MF = false;
OZ[z].NF = false;
OZ[z].HF = false;
OZ[z].GF = false;
OZ[z].IF = false;
OZ[z].Bo = null;
OZ[z].uw = null;
OZ[z].Vv = null;
function RZ(a) {
	var b = SZ[a];
	if (b == null) {
		b = new OZ(a);
		SZ[a] = b;
	}
	return b;
}
function PZ(a, b, c, d) {
	var e = a || b[K]("/"), f = SZ[e];
	if (f == null) {
		f = new OZ;
		f.Px(e, b, c, d);
		SZ[e] = f;
	}
	return f;
}
var SZ = {};
function TZ() {
	this.eh = new LZ;
	this.Gs = new FC;
	this.Mp = {};
	this.Yl = {};
	this.vs = {};
	this.kh = 0;
	this.cM = {};
}
var UZ = null;
N(TZ, KZ);
function QZ() {
	UZ || (UZ = new TZ);
	return UZ;
}
TZ[z].pn = function (a, b, c) {
	var d = !!b, e = c || a.Kb();
	e[E]("$") == 0 || (e = "$" + e);
	a.Ex(e);
	this.eh.add(a);
	this.Gs.aa(e, d);
};
TZ[z].fg = function (a) {
	return this.vs[a] ? this.vs[a].XD() : this.eh.J(a);
};
TZ[z].J = function () {
	return this.eh;
};
TZ[z].aa = function () {
	throw Error("Can't set on DataManager");
};
TZ[z].Gd = function (a) {
	return a ? new LZ([this.Ia(a)]) : this.eh;
};
TZ[z].Ia = function (a) {
	return this.fg(a);
};
TZ[z].Rc = function (a) {
	var b = this.fg(a);
	return b ? b.J() : null;
};
TZ[z].Kb = function () {
	return M;
};
TZ[z].Hd = function () {
	return M;
};
Na(TZ[z], function () {
	var a = this.eh.Ab();
	for (var b = 0; b < a; b++) {
		var c = this.eh.ff(b);
		this.Gs.J(c.Kb()) && c[Ub]();
	}
});
TZ[z].Ej = function () {
	return false;
};
TZ[z].addListener = function (a, b, c) {
	var d = 0;
	if (IZ(b, "/...")) {
		d = 1000;
		b = b[I](0, b[t] - 4);
	} else {
		if (IZ(b, "/*")) {
			d = 1;
			b = b[I](0, b[t] - 2);
		}
	}
	c = c || M;
	var e = b + Ke + c + Ke + mf(a), f = {TL:b, id:c, WC:a}, g = RZ(b), i = mf(a);
	this.Yl[i] || (this.Yl[i] = {});
	this.Yl[i][e] = {Zb:f, ZF:[]};
	while (g) {
		var j = {Zb:f, wG:d}, m = this.Mp[g.jr];
		if (m == null) {
			m = {};
			this.Mp[g.jr] = m;
		}
		m[e] = j;
		d = 0;
		g = g.nj();
		this.Yl[i][e].ZF[q]({ic:e, oM:m});
	}
};
TZ[z].bf = function (a) {
	if (this.VL) {
		return;
	}
	var b = RZ(a), c = 0;
	while (b) {
		var d = this.Mp[b.jr];
		if (d) {
			for (var e in d) {
				var f = d[e], g = f.Zb;
				c <= f.wG && g.WC(a, g.id);
			}
		}
		c++;
		b = b.nj();
	}
	this.kh++;
};
function VZ(a, b) {
	if (!a) {
		throw Error("Cannot create a fast data node without a data name");
	}
	this.__dataName = a;
	this.__parent = b;
}
VZ[z].Kb = function () {
	return this.__dataName;
};
VZ[z].Ex = function (a) {
	this.__dataName = a;
};
VZ[z].Hd = function () {
	var a;
	a = this.__parent ? this.__parent.Hd() + "/" : M;
	return a + this.Kb();
};
function WZ(a, b, c) {
	VZ[G](this, b, c);
	this.Lt(a);
}
N(WZ, VZ);
WZ[z].Lt = function (a) {
	for (var b in a) {
		this[b] = a[b];
	}
};
function XZ(a, b, c) {
	return ff(a) ? new YZ(a, b, c) : lf(a) ? new WZ(a, b, c) : new ZZ(a, b, c);
}
var $Z = new MZ;
WZ[z].aa = function () {
	throw "Not implemented yet";
};
WZ[z].Gd = function (a) {
	if (!a || a == "*") {
		return this;
	} else {
		if (a[E]("*") == -1) {
			var b = this.Ia(a);
			return b ? new YZ([b], null) : new MZ;
		} else {
			throw Error("Unsupported selector: " + a);
		}
	}
};
WZ[z].Ly = function (a) {
	var b = this[a];
	if (b != null && !b.Kb) {
		this[a] = XZ(this[a], a, this);
	}
};
WZ[z].Ia = function (a, b) {
	this.Ly(a);
	var c = this[a] || null;
	if (c == null && b) {
		c = new WZ({}, a, this);
		this[a] = c;
	}
	return c;
};
WZ[z].jk = function (a, b) {
	if (b != null) {
		this[a] = b;
	} else {
		delete this[a];
	}
	QZ().bf(this.Hd() + "/" + a);
};
WZ[z].Rc = function (a) {
	var b = this[a];
	return b != null ? b.Kb ? b.J() : b : null;
};
WZ[z].Ej = function () {
	return false;
};
WZ[z].lj = function () {
	var a = {};
	for (var b in this) {
		if (!(b[E]("__") == 0) && !kf(this[b])) {
			a[b] = this[b].__dataName ? this[b].lj() : this[b];
		}
	}
	return a;
};
WZ[z].ab = function () {
	return XZ(this.lj(), this.Kb());
};
WZ[z].add = function (a) {
	this.jk(a.Kb(), a);
};
WZ[z].J = function (a) {
	return We(a) ? this.Ia(a) : this;
};
WZ[z].ff = function (a) {
	var b = 0;
	for (var c in this) {
		if (!(c[E]("__") == 0) && !kf(this[c])) {
			if (b == a) {
				this.Ly(c);
				return this[c];
			}
			++b;
		}
	}
	return null;
};
WZ[z].Ab = function () {
	var a = 0;
	for (var b in this) {
		!(b[E]("__") == 0) && !kf(this[b]) && ++a;
	}
	return a;
};
gb(WZ[z], function (a) {
	delete this[a];
});
function ZZ(a, b, c) {
	this.yd = a;
	VZ[G](this, b, c);
}
N(ZZ, VZ);
ZZ[z].J = function () {
	return this.yd;
};
ZZ[z].aa = function (a) {
	if (ff(a) || lf(a)) {
		throw "can only set PrimitiveFastDataNode to primitive values";
	}
	this.yd = a;
	QZ().bf(this.Hd());
};
ZZ[z].Gd = function () {
	return $Z;
};
ZZ[z].Ia = function () {
	return null;
};
ZZ[z].Rc = function () {
	return null;
};
ZZ[z].jk = function () {
	throw Error("Cannot set a child node for a PrimitiveFastDataNode");
};
ZZ[z].Ej = function () {
	return false;
};
ZZ[z].lj = function () {
	return this.yd;
};
function YZ(a, b, c) {
	this.Ga = [];
	for (var d = 0; d < a[t]; ++d) {
		this.Ga[q](XZ(a[d], a[d].id || "[" + d + "]", this));
		if (a[d].id) {
			if (!this.O) {
				this.O = {};
			}
			this.O[a[d].id] = d;
		}
	}
	VZ[G](this, b, c);
}
N(YZ, VZ);
YZ[z].aa = function () {
	throw Error("Cannot set a FastListNode to a new value");
};
YZ[z].Gd = function () {
	return this;
};
YZ[z].Ia = function (a, b) {
	var c = this.sl(a);
	if (c == null && this.O) {
		c = this.O[a];
	}
	if (c != null && this.Ga[c]) {
		return this.Ga[c];
	} else {
		if (b) {
			this.jk(a, {});
			return this.Ia(a);
		} else {
			return null;
		}
	}
};
YZ[z].Rc = function (a) {
	var b = this.Ia(a);
	return b ? b.J() : null;
};
YZ[z].sl = function (a) {
	return a[ic](0) == "[" && a[ic](a[t] - 1) == "]" ? oa(a[I](1, a[t] - 1)) : null;
};
YZ[z].jk = function (a, b) {
	var c = this.Ga[t];
	if (b != null) {
		b.Kb || (b = XZ(b, a, this));
		var d = this.sl(a);
		if (d != null) {
			if (d < 0 || d >= this.Ga[t]) {
				throw Error("List index out of bounds: " + d);
			}
			this.Ga[a] = b;
		} else {
			if (!this.O) {
				this.O = {};
			}
			this.Ga[q](b);
			this.O[a] = this.Ga[t] - 1;
		}
	} else {
		this.removeNode(a);
	}
	QZ().bf(this.Hd() + "/" + a);
	this.Ga[t] != c && this.Lp();
};
YZ[z].Lp = function () {
	var a = QZ();
	a.bf(this.Hd());
	a.bf(this.Hd() + "/count()");
};
YZ[z].Ej = function () {
	return true;
};
YZ[z].lj = function () {
	var a = [];
	for (var b = 0; b < this.Ga[t]; ++b) {
		a[q](this.Ga[b].lj());
	}
	return a;
};
YZ[z].add = function (a) {
	a.Kb || (a = XZ(a, ma(this.Ga[t]), this));
	this.Ga[q](a);
	QZ().bf(this.Hd() + "/[" + (this.Ga[t] - 1) + "]");
	this.Lp();
};
YZ[z].J = function (a) {
	return We(a) ? this.Ia(a) : this.Ga;
};
YZ[z].ff = function (a) {
	var b = this.Ga[a];
	return b != null ? b : null;
};
YZ[z].Ab = function () {
	return this.Ga[t];
};
gb(YZ[z], function (a) {
	var b = this.sl(a);
	if (b == null && this.O) {
		b = this.O[a];
	}
	if (b != null) {
		this.Ga[Dd](b, 1);
		if (this.O) {
			var c = null;
			for (var d in this.O) {
				if (this.O[d] == b) {
					c = d;
				} else {
					this.O[d] > b && --this.O[d];
				}
			}
			c && delete this.O[c];
		}
		QZ().bf(this.Hd() + "/[" + b + "]");
		this.Lp();
	}
});
YZ[z].indexOf = function (a) {
	var b = this.sl(a);
	if (b == null && this.O) {
		b = this.O[a];
	}
	if (b == null) {
		throw Error("Cannot determine index for: " + a);
	}
	return b;
};
function a_(a, b, c, d, e) {
	WZ[G](this, {}, b, null);
	if (a) {
		this.cd = new gF(a);
		this.sa = new vF;
		this.hL = !!e;
		$i(this.sa, sF, this.vB, false, this);
	} else {
		this.cd = null;
	}
	this.lr = c;
	this.Ct = d;
}
N(a_, WZ);
a_[z].mk = function (a) {
	this.kc = a;
};
Na(a_[z], function () {
	NZ.we("Sending JS request for DataSource " + this.Kb() + " to " + this.cd);
	if (this.cd) {
		if (this.hL) {
			var a;
			a = this.kc ? this.kc : this.cd.kc;
			var b = this.cd.ab();
			b.mk(null);
			this.sa[Pc](ma(b), "POST", a);
		} else {
			this.sa[Pc](ma(this.cd));
		}
	} else {
		this.Op = "NOT_LOADED";
	}
});
a_[z].vK = function () {
	QZ().bf(this.Kb());
};
a_[z].vB = function () {
	if (this.sa.sv()) {
		NZ.we("Got data for DataSource " + this.Kb());
		var a = this.sa.su();
		if (this.lr) {
			var b = a[E](this.lr);
			a = a[I](b + this.lr[t]);
		}
		if (this.Ct) {
			var c = a[Vc](this.Ct);
			a = a[I](0, c);
		}
		try {
			this.Lt(eval("[" + a + "][0]"));
			this.Op = "LOADED";
		}
		catch (d) {
			this.Op = "FAILED";
			NZ.$J("Failed to parse data: " + d[Zy]);
		}
		Te[Lb](rf(this.vK, this), 0);
	} else {
		NZ.we("Data retrieve failed for DataSource " + this.Kb());
		this.Op = "FAILED";
	}
};
function b_(a, b, c) {
	pj[G](this);
	this.pf = a;
	this.sx = c;
	this.Fb = b;
	$i(b, ["hilite", "select", c_, "dismiss"], this);
	this.Yd = null;
	this.za = [];
	this.Uc = -1;
	this.Fd = 0;
	this.bd = null;
	this.Vf = null;
}
N(b_, pj);
b_[z].xG = 10;
b_[z].JA = true;
b_[z].uA = false;
var c_ = "canceldismiss";
fb(b_[z], function (a) {
	if (a[Hc] == this.Fb) {
		switch (a[J]) {
		  case "hilite":
			this.hf(a.Y);
			break;
		  case "select":
			this.hk();
			break;
		  case c_:
			this.Pn();
			break;
		  case "dismiss":
			this.st();
			break;
		}
	}
});
b_[z].QJ = function (a, b) {
	if (this.Yd == a) {
		return;
	}
	this.Yd = a;
	this.pf.zq(this.Yd, this.xG, rf(this.vG, this), b);
	this.Pn();
};
b_[z].Hm = function (a) {
	this.bd = a;
};
b_[z].isOpen = function () {
	return this.Fb.Mb();
};
b_[z].Ru = function () {
	if (this.Uc >= this.Fd && this.Uc < this.Fd + this.za[t] - 1) {
		this.hf(this.Uc + 1);
		return true;
	} else {
		if (this.Uc == -1) {
			this.hf(this.Fd);
			return true;
		}
	}
	return false;
};
b_[z].Su = function () {
	if (this.Uc > this.Fd) {
		this.hf(this.Uc - 1);
		return true;
	} else {
		this.uA && this.Uc == this.Fd && this.hf(-1);
	}
	return false;
};
b_[z].hf = function (a) {
	this.Uc = a;
	this.Fb.hf(a);
	return this.To(a) != -1;
};
b_[z].hk = function () {
	var a = this.To(this.Uc);
	if (a != -1) {
		var b = this.za[a];
		this.sx.Jq(b);
		this.ie();
		this[xc]({type:"update", Y:b});
		return true;
	} else {
		this.ie();
		this[xc]({type:"update", Y:null});
		return false;
	}
};
b_[z].ie = function () {
	this.Uc = -1;
	this.Yd = null;
	this.Fd += this.za[t];
	this.za = [];
	window[Py](this.Vf);
	this.Vf = null;
	this.Fb.ie();
};
b_[z].st = function () {
	if (!this.Vf) {
		this.Vf = window[Lb](rf(this.ie, this), 100);
	}
};
b_[z].Pn = function () {
	window[Lb](rf(function () {
		if (this.Vf) {
			window[Py](this.Vf);
			this.Vf = null;
		}
	}, this), 10);
};
b_[z].S = function () {
	b_.ba.S[G](this);
	this.Fb.ia();
	this.sx.ia();
	this.pf = null;
};
b_[z].vG = function (a, b, c) {
	if (this.Yd != a) {
		return;
	}
	var d = c ? this.To(this.Uc) : null;
	this.Fd += this.za[t];
	this.za = b;
	var e = [];
	for (var f = 0; f < b[t]; ++f) {
		e[q]({id:this.ju(f), data:b[f]});
	}
	this.Fb.tI(e, this.Yd, this.bd);
	if (this.JA && e[t] != 0) {
		this.hf(d != null ? this.ju(d) : this.Fd);
	} else {
		this.Uc = -1;
	}
};
b_[z].To = function (a) {
	var b = a - this.Fd;
	if (b < 0 || b >= this.za[t]) {
		return -1;
	}
	return b;
};
b_[z].ju = function (a) {
	return this.Fd + a;
};
function d_(a, b) {
	if (e_(a)) {
		a.selectionStart = b;
	} else {
		if (Q) {
			var c = f_(a), d = c[0];
			if (d.inRange(c[1])) {
				if (a[J] == "textarea") {
					var e = a[B][I](0, b);
					b = yZ(e)[t];
				}
				d[Ry](true);
				d.move("character", b);
				d[fz]();
			}
		}
	}
}
function g_(a, b, c) {
	var d = b.duplicate(), e = a[Gb], f = e, g = d[Gb], i = g, j = false;
	while (!j) {
		if (a.compareEndPoints("StartToEnd", a) == 0) {
			j = true;
		} else {
			a.moveEnd("character", -1);
			if (a[Gb] == e) {
				f += "\r\n";
			} else {
				j = true;
			}
		}
	}
	if (c) {
		return [f[t], -1];
	}
	var m = false;
	while (!m) {
		if (d.compareEndPoints("StartToEnd", d) == 0) {
			m = true;
		} else {
			d.moveEnd("character", -1);
			if (d[Gb] == g) {
				i += "\r\n";
			} else {
				m = true;
			}
		}
	}
	return [f[t], f[t] + i[t]];
}
function h_(a, b) {
	var c = 0, d = 0;
	if (e_(a)) {
		c = a.selectionStart;
		d = b ? -1 : a.selectionEnd;
	} else {
		if (Q) {
			var e = f_(a), f = e[0], g = e[1];
			if (f.inRange(g)) {
				f.setEndPoint("EndToStart", g);
				if (a[J] == "textarea") {
					return g_(f, g, b);
				}
				c = f[Gb][t];
				d = b ? -1 : f[Gb][t] + g[Gb][t];
			}
		}
	}
	return [c, d];
}
function i_(a, b) {
	if (e_(a)) {
		a.selectionEnd = b;
	} else {
		if (Q) {
			var c = f_(a), d = c[1];
			if (c[0].inRange(d)) {
				var e = h_(a, true)[0];
				if (a[J] == "textarea") {
					var f = a[B][I](0, b);
					b = yZ(f)[t];
					var g = a[B][I](0, e);
					e = yZ(g)[t];
				}
				d[Ry](true);
				d.moveEnd("character", b - e);
				d[fz]();
			}
		}
	}
}
function f_(a) {
	var b = a[Fc] || a[Ob], c = b.selection.createRange(), d;
	if (a[J] == "textarea") {
		d = b[Bc][bz]();
		d.moveToElementText(a);
	} else {
		d = a[bz]();
	}
	return [d, c];
}
function e_(a) {
	try {
		return typeof a.selectionStart == bf;
	}
	catch (b) {
		return false;
	}
}
function j_(a) {
	pj[G](this);
	a && this.As(a);
}
N(j_, pj);
j_[z].I = null;
j_[z].Rl = null;
j_[z].Dp = null;
j_[z].Tl = null;
j_[z].Ij = -1;
j_[z].Fj = -1;
j_[z].zv = 0;
var k_ = {"3":13, "12":144, "63232":38, "63233":40, "63234":37, "63235":39, "63236":112, "63237":113, "63238":114, "63239":115, "63240":116, "63241":117, "63242":118, "63243":119, "63244":120, "63245":121, "63246":122, "63247":123, "63248":44, "63272":46, "63273":36, "63275":35, "63276":33, "63277":34, "63289":144, "63302":45}, l_ = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, m_ = {61:187, 59:186}, n_ = Q || ag && dg("525");
j_[z].Dl = function (a) {
	if (n_ && !DZ(a[$c], this.Ij, a[qd])) {
		this[jd](a);
	} else {
		this.Fj = $f && a[$c] in m_ ? m_[a[$c]] : a[$c];
	}
};
j_[z].UE = function () {
	this.Ij = -1;
};
fb(j_[z], function (a) {
	var b = a.yb, c, d;
	if (Q && a[J] == Ji) {
		c = this.Fj;
		d = c != 13 && c != 27 ? b[$c] : 0;
	} else {
		if (ag && a[J] == Ji) {
			c = this.Fj;
			d = b[Tc] >= 0 && b[Tc] < 63232 && CZ(c) ? b[Tc] : 0;
		} else {
			if (Zf) {
				c = this.Fj;
				d = CZ(c) ? b[$c] : 0;
			} else {
				c = b[$c] || this.Fj;
				d = b[Tc] || 0;
				if (Vf && d == 63 && !c) {
					c = 191;
				}
			}
		}
	}
	var e = c, f = b.keyIdentifier;
	if (c) {
		if (c >= 63232 && c in k_) {
			e = k_[c];
		} else {
			if (c == 25 && a[qd]) {
				e = 9;
			}
		}
	} else {
		if (f && f in l_) {
			e = l_[f];
		}
	}
	var g = e == this.Ij;
	this.Ij = e;
	if (ag) {
		if (g && b.timeStamp - this.zv < 50) {
			return;
		}
		this.zv = b.timeStamp;
	}
	var i = new o_(e, d, g, b);
	try {
		this[xc](i);
	}
	finally {
		i.ia();
	}
});
j_[z].As = function (a) {
	this.Tl && this[iz]();
	this.I = a;
	this.Rl = $i(this.I, Ji, this);
	this.Dp = $i(this.I, jj, this.Dl, false, this);
	this.Tl = $i(this.I, "keyup", this.UE, false, this);
};
j_[z].detach = function () {
	if (this.Rl) {
		dj(this.Rl);
		dj(this.Dp);
		dj(this.Tl);
		this.Rl = null;
		this.Dp = null;
		this.Tl = null;
	}
	this.I = null;
	this.Ij = -1;
};
j_[z].S = function () {
	j_.ba.S[G](this);
	this[iz]();
};
function o_(a, b, c, d) {
	Ii[G](this, d);
	hb(this, "key");
	db(this, a);
	this.charCode = b;
	this.repeat = c;
}
N(o_, Ii);
function p_(a, b, c, d) {
	ri[G](this);
	this.bi = We(a) && !(a === null) ? a : ",;";
	this.Ev = b || M;
	this.pg = c != null ? c : true;
	this.SH = this.pg;
	this.ob = new dF(d || 150);
	this.ZB = this.bi[I](0, 1);
	var e = this.pg ? "[\\s" + this.bi + "]+" : "[\\s]+";
	this.yy = new RegExp("^" + e + "|" + e + "$", "g");
	this.WI = new RegExp("\\s*[" + this.bi + "]$");
	this.Xb = new al(this);
	this.Ai = new al(this);
	this.Ql = new j_;
}
N(p_, ri);
p_[z].lL = true;
p_[z].gD = true;
p_[z].Hr = false;
p_[z].XI = true;
p_[z].$a = null;
p_[z].Xl = M;
p_[z].Rg = false;
p_[z].Gq = false;
p_[z].dL = true;
p_[z].EA = function (a) {
	this.Ca = a;
};
p_[z].HA = function (a) {
	QE(a, "haspopup", true);
	this.Xb.ra(a, "focus", this.Ph);
	this.Xb.ra(a, "blur", this.jq);
	this.$a || this.Ai.ra(a, jj, this.ew);
};
p_[z].aC = function (a) {
	a == this.$a && this.jq();
	this.Xb.qc(a, "focus", this.Ph);
	this.Xb.qc(a, "blur", this.jq);
	this.$a || this.Ai.qc(a, jj, this.ew);
};
p_[z].Bs = function () {
	for (var a = 0; a < arguments[t]; a++) {
		this.HA(arguments[a]);
	}
};
p_[z].bC = function () {
	for (var a = 0; a < arguments[t]; a++) {
		this.aC(arguments[a]);
	}
};
p_[z].Jq = function (a, b) {
	var c = this.Ca.bd;
	if (We(b) ? b : this.pg) {
		var d = h_(c, true)[0], e = this.xu(c[B], d), f = this.ir(c[B]), g = a[r]();
		this.WI[zb](g) || (g = g[A](/[\s\xa0]+$/, M) + this.ZB);
		if (this.lL) {
			if (e != 0 && !/^[\s\xa0]*$/[zb](f[e - 1])) {
				g = qg + g;
			}
			if (e < f[t] && !/^[\s\xa0]*$/[zb](f[e + 1])) {
				g = g + qg;
			}
		}
		if (g != f[e]) {
			f[e] = g;
			Oa(c, f[K](M));
			var i = 0;
			for (var j = 0; j <= e; j++) {
				i += f[j][t];
			}
			c[Wc]();
			d_(c, i);
			i_(c, i);
		}
	} else {
		Oa(c, a[r]());
	}
	this.Gq = true;
};
p_[z].S = function () {
	p_.ba.S[G](this);
	this.Xb.ia();
	delete this.Xb;
	this.Ai.ia();
	this.Ai = null;
};
p_[z].Tx = function (a) {
	this.Hr = a;
};
p_[z].ep = function (a) {
	switch (a[$c]) {
	  case 40:
		if (this.Ca[dz]()) {
			this.PG();
			a[oc]();
			return true;
		} else {
			if (!this.pg) {
				this.Cf(true);
				a[oc]();
				return true;
			}
		}
		break;
	  case 38:
		if (this.Ca[dz]()) {
			this.RG();
			a[oc]();
			return true;
		}
		break;
	  case 9:
		this.Cf();
		if (this.Ca.hk() && this.SH) {
			a[oc]();
			return true;
		}
		break;
	  case 13:
		this.Cf();
		if (this.Ca.hk()) {
			a[oc]();
			return true;
		}
		break;
	  case 27:
		if (this.Ca[dz]()) {
			this.Ca.ie();
			return true;
		}
		break;
	  case 229:
		if (!this.Rg) {
			this.Xb.ra(this.$a, "keyup", this.kq);
			this.Rg = true;
			return true;
		}
		break;
	  default:
		if (!this.dL) {
			this.ob[Ky]();
			this.ob[H]();
		}
	}
	if (this.XI && this.pg && a[Tc] && this.bi[E](ma[Sc](a[Tc])) != -1) {
		this.Cf();
		if (this.Ca.hk()) {
			a[oc]();
			return true;
		}
	}
	return false;
};
p_[z].pA = function () {
	this.Ql.As(this.$a);
	this.Xb.ra(this.Ql, "key", this.gw);
	Q && this.Xb.ra(this.$a, Ji, this.dw);
};
p_[z].pI = function () {
	this.Xb.qc(this.Ql, "key", this.gw);
	this.Ql[iz]();
	Q && this.Xb.qc(this.$a, Ji, this.dw);
	this.Rg && this.Xb.qc(this.$a, "keyup", this.kq);
};
p_[z].Ph = function (a) {
	this.Ai.Bg();
	this.Ca && this.Ca.Pn();
	if (a[Hc] != this.$a) {
		this.$a = a[Hc] || null;
		this.ob[H]();
		this.Xb.ra(this.ob, "tick", this.kw);
		this.Xl = this.$a[B];
		this.pA();
	}
};
p_[z].jq = function () {
	if (this.$a) {
		this.pI();
		this.$a = null;
		this.Rg = false;
		this.ob[Ky]();
		this.Xb.qc(this.ob, "tick", this.kw);
		this.Ca && this.Ca.st();
	}
};
p_[z].kw = function () {
	this.Rg || this.Cf();
};
p_[z].ew = function (a) {
	this.Ph(a);
};
p_[z].gw = function (a) {
	this.Ca && !this.Rg && this.ep(a);
};
p_[z].kq = function (a) {
	if (a[$c] == 13) {
		this.Rg = false;
		this.Xb.qc(this.$a, "keyup", this.kq);
	}
};
p_[z].dw = function (a) {
	if (this.pg && this.bi[E](ma[Sc](a[Tc])) != -1) {
		this.Cf();
		this.Ca.hk() && a[oc]();
	}
};
p_[z].Cf = function (a) {
	if (a || this.$a && this.$a[B] != this.Xl) {
		if (!this.Gq) {
			var b = this.ww();
			if (this.Ca) {
				this.Ca.Hm(this.$a);
				this.Ca.QJ(b, this.$a[B]);
			}
		}
		this.Xl = this.$a[B];
	}
	this.Gq = false;
};
p_[z].RG = function () {
	return this.Hr ? this.Ca.Ru() : this.Ca.Su();
};
p_[z].PG = function () {
	return this.Hr ? this.Ca.Su() : this.Ca.Ru();
};
p_[z].ww = function () {
	var a = h_(this.$a, true)[0], b = this.$a[B];
	return this.VK(this.ir(b)[this.xu(b, a)]);
};
p_[z].VK = function (a) {
	return this.yy ? ma(a)[A](this.yy, M) : a;
};
p_[z].xu = function (a, b) {
	var c = this.ir(a);
	if (b == a[t]) {
		return c[t] - 1;
	}
	var d = 0;
	for (var e = 0, f = 0; e < c[t] && f < b; e++) {
		f += c[e][t];
		d = e;
	}
	return d;
};
p_[z].ir = function (a) {
	if (!this.pg) {
		return [a];
	}
	var b = ma(a)[Vb](M), c = [], d = [];
	for (var e = 0, f = false; e < b[t]; e++) {
		if (this.Ev && this.Ev[E](b[e]) != -1) {
			if (this.gD && !f) {
				c[q](d[K](M));
				za(d, 0);
			}
			d[q](b[e]);
			f = !f;
		} else {
			if (!f && this.bi[E](b[e]) != -1) {
				d[q](b[e]);
				c[q](d[K](M));
				za(d, 0);
			} else {
				d[q](b[e]);
			}
		}
	}
	c[q](d[K](M));
	return c;
};
function q_(a, b, c, d) {
	this.mb = a || Az().va[Bc];
	this.P = Pz(this.mb);
	this.dx = !a;
	this.I = null;
	this.Yd = M;
	this.za = [];
	this.uj = -1;
	this.hy = -1;
	this.Zd = false;
	Da(this, "ac-renderer");
	this.Fq = "ac-row";
	this.is = "active";
	this.ge = b;
	this.iL = d != null ? d : true;
	this.zI = c != null ? c : false;
	this.Cp = null;
	this.ji = false;
}
N(q_, pj);
var r_ = 0;
q_[z].Di = null;
q_[z].Rx = function (a) {
	this.ji = a;
};
q_[z].tI = function (a, b, c) {
	this.Yd = b;
	this.za = a;
	this.uj = 0;
	this.hy = tf();
	this.bd = c;
	this.dk = [];
	this.uq();
};
q_[z].ie = function () {
	if (this.Zd) {
		this.Zd = false;
		TD(this.I, false);
	}
};
q_[z].Pa = function () {
	if (!this.Zd) {
		this.Zd = true;
		TD(this.I, true);
	}
};
q_[z].Mb = function () {
	return this.Zd;
};
q_[z].Tu = function (a) {
	this.pF();
	this.uj = a;
	if (a >= 0 && a < this.I[pd][t]) {
		var b = this.dk[a];
		bk(b, this.is);
		QE(this.I, "activedescendant", b.id);
		rk(this.Di, EZ(b));
	}
};
q_[z].pF = function () {
	this.uj >= 0 && ck(this.dk[this.uj], this.is);
};
q_[z].hf = function (a) {
	if (a == -1) {
		this.Tu(-1);
	} else {
		for (var b = 0; b < this.za[t]; b++) {
			if (this.za[b].id == a) {
				this.Tu(b);
				return;
			}
		}
	}
};
q_[z].FJ = function (a) {
	bk(a, this[Bb]);
};
q_[z].CG = function () {
	if (!this.I) {
		this.Di = this.P.R(xk, {style:"display:none"});
		PE(this.Di, "region");
		QE(this.Di, "live", "rude");
		this.P[o](this.mb, this.Di);
		var a = this.P.R(xk, {style:"display:none"});
		this.I = a;
		this.FJ(a);
		PE(a, "menu");
		var b = a.id = "goog-acr-" + r_++;
		QE(this.bd, "controls", b);
		this.P[o](this.mb, a);
		$i(a, hj, this.Cu, false, this);
		$i(a, ij, this.Fu, false, this);
		$i(this.P.va, hj, this.Eu, false, this);
		$i(a, "mouseover", this.Gu, false, this);
	}
};
q_[z].uq = function () {
	this.CG();
	if (this.ji) {
		ub(this.I[F], am);
	}
	za(this.dk, 0);
	this.P.Yw(this.I);
	if (this.ge && this.ge.ub) {
		this.ge.ub(this, this.I, this.za, this.Yd);
	} else {
		var a = null;
		BZ(this.za, function (f) {
			f = this.yq(f, this.Yd);
			this.ji ? this.I[qc](f, a) : this.P[o](this.I, f);
			a = f;
		}, this);
	}
	if (this.za[t] == 0) {
		this.ie();
		return;
	} else {
		this.Pa();
	}
	this.UH(this.I);
	if (this.bd && this.dx) {
		var b = vZ(this.bd), c = SD(this.bd), d = SD(tZ(this.bd)), e = SD(this.I);
		b.y = this.ji ? b.y - e[Cd] : b.y + c[Cd];
		if ((this.zI || b.x + e[Eb] > d[Eb]) && this.Cp != "LEFT") {
			b.x = b.x + c[Eb] - e[Eb];
			this.Cp = "RIGHT";
		} else {
			this.Cp = "LEFT";
		}
		AZ(this.I, b);
		if (this.ji) {
			ub(this.I[F], "visible");
		}
	}
	zZ(this.I, true);
};
q_[z].eJ = function (a) {
	this.dx = a;
};
q_[z].S = function () {
	q_.ba.S[G](this);
	if (this.I) {
		bj(this.I, hj, this.Cu, false, this);
		bj(this.I, ij, this.Fu, false, this);
		bj(this.P.va, hj, this.Eu, false, this);
		bj(this.I, "mouseover", this.Gu, false, this);
		this.P.removeNode(this.I);
		this.I = null;
		this.Zd = false;
	}
	delete this.mb;
};
q_[z].UH = function (a) {
	if ($f && Vf) {
		Fa(a[F], M);
		nb(a[F], "visible");
		Fa(a[F], a[cc]);
		nb(a[F], "auto");
	}
};
q_[z].sI = function (a, b, c) {
	k(c, P(a[Uy][r]()));
};
q_[z].ip = function (a, b) {
	if (a[Nb] == 3) {
		var c, d = null;
		if (ff(b)) {
			c = b[t] > 0 ? b[0] : M;
			if (b[t] > 1) {
				d = Bi(b, 1);
			}
		} else {
			c = b;
		}
		if (c[t] == 0) {
			return;
		}
		var e = a[Jd];
		c = HZ(c);
		var f = new RegExp("(.*?)(^|\\W+)(" + c + Xj, "gi"), g = [], i = 0, j = f[Db](e);
		while (j) {
			g[q](j[1]);
			g[q](j[2]);
			g[q](j[3]);
			i = f.lastIndex;
			j = f[Db](e);
		}
		g[q](e[I](i));
		if (g[t] > 1) {
			a.nodeValue = g[0] + g[1];
			var m = this.P[Xc]("b");
			this.P[o](m, this.P[kc](g[2]));
			m = a[ud][qc](m, a[Ad]);
			for (var n = g[t] - 1; n >= 3; n--) {
				a[ud][qc](this.P[kc](g[n]), m[Ad]);
			}
		} else {
			d && this.ip(a, d);
		}
	} else {
		var p = a[ad];
		while (p) {
			var s = p[Ad];
			this.ip(p, b);
			p = s;
		}
	}
};
q_[z].yq = function (a, b) {
	var c = this.P.R(xk, {className:this.Fq});
	this.ge && this.ge.ax ? this.ge.ax(a, b, c) : this.sI(a, b, c);
	b && this.iL && this.ip(c, b);
	c.id = "goog-acri-" + r_++;
	bk(c, this.Fq);
	PE(c, "menuitem");
	this.dk[q](c);
	return c;
};
q_[z].tu = function (a) {
	while (a && a != this.I && !xi(ak(a), this.Fq)) {
		a = a[ud];
	}
	return a ? ui(this.dk, a) : -1;
};
q_[z].Cu = function (a) {
	var b = this.tu(a[Hc]);
	b >= 0 && this[xc]({type:"select", Y:this.za[b].id});
	a[lc]();
};
q_[z].Fu = function (a) {
	this[xc](c_);
	a[lc]();
	a[oc]();
};
q_[z].Eu = function () {
	this[xc]("dismiss");
};
q_[z].Gu = function (a) {
	var b = this.tu(a[Hc]);
	if (b >= 0) {
		if (tf() - this.hy < 300) {
			return;
		}
		this[xc]({type:"hilite", Y:this.za[b].id});
	}
};
function s_(a, b, c, d) {
	this.qx = function () {
	};
	this.qy = function () {
	};
	p_[G](this, a, b, c);
	this.Wl = null;
	this.Ck = !!d;
}
N(s_, p_);
s_[z].Jq = function (a) {
	if (a instanceof t_) {
		return;
	}
	if (this.Ck && a instanceof u_ && a.Cb[td]) {
		var b = a.Cb.id;
		if (b == "^Mine") {
			b = "s0";
		}
		a = [Af, a.Cb[td], "\" <.", b, ".>"][K](M);
	} else {
		if (a.kj) {
			a = a.kj()[K](Wj);
		}
	}
	this.qx();
	s_.ba.Jq[G](this, a);
};
s_[z].ep = function (a) {
	this.qy();
	p_[z].ep[G](this, a);
};
s_[z].Cf = function (a) {
	this.Wl = this.ww();
	p_[z].Cf[G](this, a);
};
s_[z].vJ = function (a, b) {
	this.qx = a;
	this.qy = b;
};
function v_(a, b) {
	this.IC = a;
	this.nw = b;
	this.ee = [];
	this.Bh = new w_([]);
}
v_[z].HJ = function (a) {
	this.nw = a;
};
v_[z].oJ = function (a, b) {
	this.ee = a;
	this.Bh = new w_(b);
};
function x_(a, b, c, d) {
	var e = a.members, f = [], g = [], i = [];
	for (var j = 0; j < e[t]; ++j) {
		var m = e[j].email;
		c.gp && c.sA[m] ? g[q](e[j]) : f[q](e[j]);
		d[m] && i[q](e[j]);
	}
	return new u_(a, b, e, f, g, i);
}
v_[z].zq = function (a, b, c) {
	var d = [];
	if (a == M) {
		return [];
	}
	if (c) {
		var e = M;
		for (var f = 0; f < c[t]; ++f) {
			var g = c[ic](f);
			if (g == ";" || g == ",") {
				e = wf(e);
				e[t] > 0 && d[q](e);
				e = M;
			} else {
				e += g;
			}
		}
		e = wf(e);
		e[t] > 0 && d[q](e);
	}
	return this.LC(a, d, b);
};
v_[z].cC = function (a) {
	var b = {};
	for (var c = 0; c < a[t]; ++c) {
		var d = y_(a[c]);
		if (d.na) {
			b[d.na] = true;
		}
	}
	var e = {}, f = [], g = {}, i = false, j = 0, m = {}, n = true;
	for (var c = 0; c < this.ee[t]; ++c) {
		var p = this.ee[c], s = p.email;
		if (b[s]) {
			g[s] = true;
			i = true;
			j++;
			var u = p.groups;
			if (n) {
				for (var v = 0; v < u[t]; ++v) {
					var w = u[v];
					e[w.id] = 1;
					f[q](w.id);
				}
				n = false;
			} else {
				for (var v = 0; v < u[t]; ++v) {
					var w = u[v];
					e[w.id] && e[w.id]++;
				}
			}
		}
	}
	for (var c = 0; c < f[t]; ++c) {
		var x = f[c];
		if (e[x] == j) {
			m[x] = true;
		}
	}
	return {gp:i, wE:m, sA:g};
};
v_[z].WH = function (a, b) {
	var c = {}, d = [];
	for (var e = 0; e < a[t]; ++e) {
		var f = a[e].groups;
		if (f) {
			for (var g = 0; g < f[t]; ++g) {
				var i = f[g].id;
				if (!f[g].implicit) {
					continue;
				}
				if (b.gp && !b.wE[i]) {
					continue;
				}
				if (i[ic](0) != "^") {
					if (!c[i]) {
						var j = this.Bh.J(i);
						if (j) {
							c[i] = true;
							d[q](j);
						}
					}
				}
			}
		}
	}
	d[gd](function (m, n) {
		return m.affinity > n.affinity ? -1 : n.affinity > m.affinity ? 1 : 0;
	});
	return d;
};
function z_() {
}
z_[z].Ys = function () {
	var a = arguments;
	function b(c, d) {
		var e, f;
		for (e = 0; e < a[t]; e++) {
			f = a[e](c, d);
			if (f != 0) {
				return f;
			}
		}
		return 0;
	}
	return b;
};
z_[z].Ks = function (a, b) {
	return a.Wg > b.Wg ? -1 : b.Wg > a.Wg ? 1 : 0;
};
z_[z].Ls = function (a, b) {
	var c = a.Cb[td] || M, d = b.Cb[td] || M;
	if (c > d) {
		return 1;
	} else {
		if (d > c) {
			return -1;
		}
	}
	return 0;
};
z_[z].WA = function (a, b) {
	function c(e) {
		if (e.Yb() != 0) {
			return false;
		}
		return !e.Uo();
	}
	function d(e) {
		return e.Yb() == 1;
	}
	if (c(a) && !c(b)) {
		return -1;
	}
	if (!c(a) && c(b)) {
		return 1;
	}
	if (d(a) && !d(b)) {
		return -1;
	}
	if (!d(a) && d(b)) {
		return 1;
	}
	return 0;
};
v_[z].JB = function (a) {
	var b = {};
	for (var c = 0; c < a[t]; ++c) {
		if (a[c].email) {
			b[a[c].email] = true;
		}
	}
	return b;
};
v_[z].LC = function (a, b, c) {
	var d = this.JC(a), e = [], f = [];
	if (this.IC) {
		f = this.KC(a, c);
		var g = {gp:false};
		if (b[t] > 0) {
			g = this.cC(b);
		}
		var i = this.WH(d, g, c), j = this.JB(d);
		for (var m = 0; m < c && m < i[t]; ++m) {
			var n = i[m];
			e[q](x_(n, n.affinity, g, j));
		}
	}
	for (var m = 0; m < c && m < f[t]; ++m) {
		var n = f[m];
		e[q](x_(n, 20000000, g, j));
	}
	for (var m = 0; m < c && m < d[t]; ++m) {
		var p = d[m], s = p.affinity;
		if (m == 0) {
			s = 10000000;
		}
		e[q](new A_(p, s));
	}
	var u = new z_, v = u.Ys(u.Ks, u.Ls);
	e[gd](v);
	e[t] > c && e[Dd](c, e[t] - c);
	if (this.nw) {
		var w = u.Ys(u.WA, u.Ks, u.Ls);
		e[gd](w);
	}
	return this.yI(e);
};
v_[z].yI = function (a) {
	var b = 0, c = 0;
	for (var d = 0; d < a[t]; d++) {
		var e = a[d];
		if (e.Yb() == 0) {
			b++;
		} else {
			e.Yb() == 1 && c++;
		}
	}
	var f = b * 2, g = f > 5 ? f : 5;
	if (c > g) {
		var i = b + g;
		a[Dd](i, a[t] - i);
	}
	return a;
};
v_[z].KC = function (a, b) {
	var c = HZ(a), d = new RegExp("(^|<| |\"|\\()" + c, oC), e = [], f = this.Bh.mq;
	for (var g = 0; g < f[t] && e[t] < b; ++g) {
		var i = f[g];
		i.members[t] > 0 && i[td] && i[td][Lc](d) && e[q](i);
	}
	return e;
};
v_[z].JC = function (a) {
	var b = HZ(a), c = new RegExp("(^|<| |\"|\\()" + b, oC), d = [], e = this.ee;
	for (var f = 0; f < e[t]; ++f) {
		var g = e[f], i = g[r]();
		if (c[zb](i)) {
			d[q](g);
		} else {
			if (g.aliases) {
				var j = g.aliases;
				for (var m = 0; m < j[t]; ++m) {
					if (c[zb](j[m])) {
						d[q](g);
						break;
					}
				}
			}
		}
	}
	return d;
};
function B_() {
}
B_[z].mj = function () {
	return 0;
};
B_[z].kj = function () {
	return [];
};
B_[z].ll = function () {
	return [];
};
B_[z].Yb = function () {
	return this.xd;
};
function A_(a, b) {
	this.xd = 0;
	this.Cb = a;
	this.Wg = b;
}
N(A_, B_);
A_[z].mj = function () {
	return 1;
};
A_[z].kj = function () {
	return [this.Cb[r]()];
};
A_[z].ll = function () {
	return this.Cb[td] ? [this.Cb[td]] : [];
};
A_[z].Uo = function () {
	return !!this.Cb.isDomainContact;
};
function u_(a, b, c, d, e, f) {
	this.xd = 1;
	this.Cb = a;
	this.Wg = b;
	this.qj = c;
	this.$G = d;
	this.SL = e;
	this.Sp = f;
	this.CB = {};
	for (var g = 0; g < e[t]; ++g) {
		this.CB[e[g].email] = true;
	}
}
N(u_, B_);
u_[z].mj = function () {
	return this.qj[t];
};
u_[z].kj = function () {
	return this.$G;
};
u_[z].ll = function () {
	var a = [];
	for (var b = 0; b < this.qj[t]; ++b) {
		this.qj[b][td] && a[q](this.qj[b][td]);
	}
	return a;
};
function t_(a) {
	this.xd = a;
}
xa(t_[z], function () {
	return M;
});
t_[z].Yb = function () {
	return this.xd;
};
function w_(a) {
	this.mq = [];
	this.Lu = new FC;
	for (var b = 0; b < a[t]; ++b) {
		var c = a[b];
		this.mq[q](c);
		this.Lu.aa(c.id, c);
	}
	this.mq[gd](function (d, e) {
		if (d.affinity > e.affinity) {
			return -1;
		} else {
			if (e.affinity > d.affinity) {
				return 1;
			} else {
				var f = d.affinity || M, g = e.affinity || M;
				if (f > g) {
					return 1;
				} else {
					if (g > f) {
						return -1;
					}
				}
				return 0;
			}
		}
	});
}
w_[z].J = function (a) {
	return this.Lu.J(a, null);
};
function C_(a, b) {
	var c = window._Messages || [], d = a;
	for (var e = 0; e < c[t]; e++) {
		if (c[e][a]) {
			d = c[e][a];
			break;
		}
	}
	var f = b || {};
	function g(i, j) {
		return j in f ? f[j] : i;
	}
	d = d[A](new RegExp("\\{\\$(\\w+)\\}", "g"), g);
	return d;
}
function D_(a, b) {
	document[Dc](C_(a, b));
}
vf("_cp_getMsg", C_);
vf("_cp_writeMsg", D_);
function E_() {
	q_[md](this, arguments);
	this.$x = function () {
	};
}
N(E_, q_);
E_[z].Fm = function (a) {
	this.mb = a;
};
E_[z].LJ = function (a) {
	this.$x = a;
};
E_[z].qv = function (a) {
	if (a.mj) {
		if (a.mj() > 0) {
			return true;
		}
	}
	return false;
};
E_[z].kE = function () {
	var a = [];
	for (var b = 0; b < this.za[t]; b++) {
		var c = this.za[b][Uy];
		this.qv(c) && a[q](c);
	}
	return a;
};
E_[z].MD = function () {
	var a = this.uj, b = 0;
	for (var c = 0; c < a; c++) {
		this.qv(this.za[c][Uy]) || b++;
	}
	return a - b;
};
E_[z].tn = function (a, b, c) {
	var d = new F_(a, b);
	c[q]({data:d, id:-1});
};
E_[z].RH = function () {
	if (this.za[t] == 0) {
		return;
	}
	if (this.ge && this.ge.Nq) {
		var a = new rE;
		for (var b = 0; b < this.za[t]; b++) {
			this.za[b][Uy].ll && a.Nk(this.za[b][Uy].ll());
		}
		this.ge.Nq(new JZ(a.kd()));
	}
	var b, c = [], d = false, e = false, f = false;
	for (b = 0; b < this.za[t]; b++) {
		var g = this.za[b][Uy];
		if (g.Yb() == 0) {
			if (!d && g.Uo() == false) {
				this.tn("ContactIcon", UA("People"), c);
				d = true;
			}
			if (!f && g.Uo() == true) {
				var i = G_(g.Cb.email);
				if (!i || i == M) {
					i = "Domain";
				}
				var j = i[ic](0)[oz]() + i[I](1, i[t]);
				this.tn("ContactIcon", UA("{$domainName} Contacts", {domainName:j}), c);
				f = true;
			}
		}
		if (!e && g.Yb() == 1) {
			this.tn("GroupIcon", UA("Groups"), c);
			e = true;
		}
		c[q](this.za[b]);
	}
	this.za = c;
};
E_[z].yq = function (a, b) {
	var c = a[Uy].Yb() == "TITLE" ? null : b;
	return E_.ba.yq[G](this, a, c);
};
E_[z].uq = function () {
	var a = false;
	this.RH();
	var b = this.za[t];
	if (b > 0 && this.za[b - 1][Uy].Yb && this.za[b - 1][Uy].Yb() == "MORE") {
		a = true;
	}
	E_.ba.uq[G](this);
	if (a) {
		UA("Searching for matches {$bold}...{$boldClose}", {bold:"<b>", boldClose:"</b>"});
		var c = C_("SEARCHING_FOR_MATCHES");
		if (b > 1) {
			var d = this.P[Xc](xk), e = this.P.R(xk, {style:"background-color: #A0B0FF; margin: 8px 0px"});
			if (Q) {
				var f = this.P.R("img", {width:mt, height:mt});
				e[o](f);
			} else {
				ob(e[F], "1px");
			}
			d[o](e);
			this.I[o](d);
			UA("Searching for more matches {$bold}...{$boldClose}", {bold:"<b>", boldClose:"</b>"});
			c = C_("SEARCHING_FOR_MORE_MATCHES");
		}
		var g = this.P.R(xk);
		k(g, c);
		this.I[o](g);
		if (this.ji) {
			var i = vZ(this.bd), j = SD(this.I);
			i.y -= j[Cd];
			AZ(this.I, i);
		}
	}
	this.$x();
};
function H_(a, b) {
	this.Ic = a;
	this.Um = b;
	this.hr = FZ(xk, {style:"position:absolute; top:-100px; left:-1000px;"}, M);
	kk(Az().va[Bc], this.hr);
}
H_[z].MJ = function (a) {
	this.Ic = !!a;
};
H_[z].Tp = function (a) {
	rk(this.hr, a);
	return this.hr[cc];
};
function G_(a) {
	if (!a) {
		return null;
	}
	var b = a[E](Sm);
	if (b < 1) {
		return null;
	}
	return a[Qd](b + 1, a[t] - b - 1);
}
H_[z].Nq = function (a) {
	this.at = a;
};
H_[z].$w = function (a, b, c, d, e) {
	var f = M, g = 0;
	this.at || this.Nq(new JZ([]));
	for (var i = 0; i < a[t]; ++i) {
		var j = a[i], m = this.at.ZC(j[td], j.email, j.aliases, e, b), n = this.Tp(m + Wj);
		if (g + n < c || i < d) {
			if (i > 0) {
				f += Wj;
			}
			f += P(m);
			g += n;
		} else {
			break;
		}
	}
	return {result:f, Tf:i, width:g};
};
H_[z].rI = function (a, b) {
	var c = b.Cb[td], d = b.qj, e = true, f = M;
	if (d[t] > 0) {
		f = G_(d[0].email);
		for (var g = 1; g < d[t] && e; ++g) {
			e = e && G_(d[g].email) == f;
		}
	}
	var i = 0;
	if (!this.Um && c) {
		i = this.Tp("&lt;" + c + "&gt; ");
	}
	if (e) {
		i += this.Tp(Sm + f);
	}
	var j = this.$w(b.Sp, e, 400 - i, 2, a), m = j.Tf;
	i += j[Eb];
	function n(D) {
		return !xi(b.Sp, D);
	}
	var p = JA(b.kj(), n), s = this.$w(p, e, 400 - i, 2 - m, a);
	m += s.Tf;
	i += s[Eb];
	var u = j.result;
	if (j.Tf > 0 && s.Tf > 0) {
		u += Wj;
	}
	u += s.result;
	var v = b.Sp[t] + p[t];
	if (m < v) {
		var w = v - m, x;
		if (w > 1) {
			var y = UA("and {$othersCount} others{$bold}...{$boldClose}", {othersCount:w, bold:"<b>", boldClose:"</b>"});
			x = y;
		} else {
			var C = UA("and 1 other{$bold}...{$boldClose}", {bold:"<b>", boldClose:"</b>"});
			x = C;
		}
		x = C_("AND_OTHERS", {Tf:v - m});
		u += qg + x;
	}
	if (e) {
		u += Sm + f;
	}
	return u;
};
H_[z].uI = function (a, b) {
	if (!this.Ic) {
		return;
	}
	var c = [], d = a[Uy], e = d.sF;
	if (window.manifest && window.manifest.image && window.manifest.image[e]) {
		e = window.manifest.image[e];
	} else {
		e += ".png";
	}
	c[q]("<table style=\"font-size: 100%;\"><tr>");
	c[q]("<td style=\"padding: 1px;\" width=\"15\">");
	c[q]("<img src = \"" + e + "\"></td>");
	c[q]("<td style=\"padding: 1px; color: #666666\">");
	c[q](P(d.zK));
	c[q]("</td></tr></table>");
	k(b, c[K](M));
};
H_[z].ax = function (a, b, c) {
	var d = a[Uy];
	if (d instanceof t_) {
		return;
	}
	if (d.Yb() == "TITLE") {
		this.uI(a, c);
		return;
	}
	var e = [], f = d.Yb() == 1;
	if (this.Ic) {
		e[q]("<table style=\"font-size: 100%;\"><tr>");
		e[q]("<td style=\"padding: 1px;\" width=\"15\">");
		e[q](Cr);
		e[q]("<td style=\"padding: 1px;\">");
	}
	var g = d.Cb[td];
	g && e[q](Af + P(g) + Af);
	this.Um && g && e[q]("<br>");
	if (f) {
		if (!g || this.Ic) {
			g && e[q](" (");
			e[q](this.rI(b, d));
			g && e[q](Xj);
		} else {
			var i = d.Cb.members[t];
			if (i) {
				this.Um || e[q](qg);
				var j;
				if (i == 1) {
					var m = UA("(1 contact)");
					j = m;
				} else {
					var n = UA("({$count} contacts)", {count:i});
					j = n;
				}
				e[q](j);
			}
		}
	} else {
		!this.Um && g && e[q](qg);
		g && e[q]("&lt;");
		e[q](P(d.Cb.email));
		g && e[q]("&gt;");
	}
	this.Ic && e[q]("</td></tr></table>");
	k(c, e[K](M));
};
function F_(a, b) {
	this.sF = a;
	this.zK = b;
}
F_[z].Yb = function () {
	return "TITLE";
};
function I_(a, b) {
	this.UI = this.QI.Xg(this);
	this.sc = {uz:"ls", Ez:"nk", $r:"nc", bs:"si", Ry:"cc", Bz:"pl", hz:"et", jz:"SH", iz:"SE", rz:"gm", Gz:"sr"};
	this.Lh = [];
	this.bG = 0;
	this.Ip = 0;
	this.xv = 0;
	this.Nt = 0;
	this.Cs = M;
	this.sp = false;
	this.rp = true;
	this.me = a;
	var c = rf(this.oG, this), d = rf(this.nG, this), e = rf(this.wK, this);
	this.me.Fb.LJ(c);
	this.me.pb.vJ(d, e);
	this.Zl = b;
	this.ob = new dF(10000);
	this.ob.addEventListener("tick", this.VC.Xg(this));
	this.ob[H]();
	var f = this.Go.Xg(this);
	$i(window, "unload", f);
}
I_[z].Bx = function (a) {
	this.Cs = a;
};
I_[z].eC = function () {
	this.rp = false;
	this.Lh = [];
};
I_[z].VD = function () {
	this.xv++;
	return this.xv;
};
I_[z].jE = function () {
	var a = this.me.Fb.kE(), b = [], c = [];
	for (var d = 0; d < a[t]; ++d) {
		b[d] = a[d].mj();
		c[d] = a[d].Wg;
	}
	var e = {};
	e[this.sc.$r] = b;
	e[this.sc.Ez] = c;
	return e;
};
I_[z].ZD = function () {
	var a = this.me.pb.Xl, b = this.me.pb.Wl, c = 0, d = a[E](yf);
	while (d != -1) {
		c++;
		d = a[E](yf, d + 1);
	}
	b[E](yf) != -1 && c--;
	return c;
};
I_[z].ct = function (a) {
	var b = {};
	b[this.sc.hz] = a;
	b[this.sc.bs] = this.jE();
	b[this.sc.Ry] = this.ZD();
	b[this.sc.Bz] = this.me.pb.Wl[t];
	return b;
};
I_[z].jL = function (a) {
	var b = a[this.sc.bs];
	if (!b) {
		return false;
	}
	return b[this.sc.$r][t] > 0;
};
I_[z].Iv = function (a) {
	if (!this.jL(a)) {
		return;
	}
	var b = this.Lh[t];
	this.Lh[b] = a;
	b + 1 >= 10 && this.Go();
};
I_[z].oG = function () {
	if (this.rp == false) {
		return;
	}
	if (this.me.pb.Wl[t] > 1) {
		return;
	}
	var a = this.ct(this.sc.jz);
	a[this.sc.rz] = this.me.vv;
	this.Iv(a);
};
I_[z].nG = function () {
	if (this.rp == false) {
		return;
	}
	var a = this.ct(this.sc.iz);
	a[this.sc.Gz] = this.me.Fb.MD() + 1;
	this.Iv(a);
};
I_[z].wK = function () {
	this.Ip = (new Date)[Ed]();
};
I_[z].VC = function () {
	if (this.Ip == 0) {
		return;
	}
	(new Date)[Ed]() - this.Ip > 60000 && this.Go();
};
I_[z].Go = function () {
	if (this.sp) {
		return;
	}
	if (this.Lh[t] == 0) {
		return;
	}
	this.sp = true;
	var a = this.Lh;
	this.Lh = [];
	this.RI(a);
};
I_[z].RI = function (a) {
	var b = {};
	b[this.sc.uz] = a;
	this.UI((new bF).Eg(b));
};
I_[z].QI = function (a) {
	var b = new gF(this.Zl);
	b.oc("out", "js");
	b.oc("jsx", bi);
	b.oc("tok", this.Cs);
	b.oc("eventsToLog", a);
	var c = this.VD();
	this.ex = "ACLoggingReq" + c;
	this.fx = "$ACLoggingReq" + c;
	this.Jv = new a_(b, this.ex, "&&&START&&&", "&&&END&&&", true);
	var d = QZ(), e = this.tA.Xg(this);
	d.pn(this.Jv, true, this.ex);
	d.addListener(e, this.fx);
	this.Jv[Ub]();
};
I_[z].tA = function () {
	var a = QZ().fg(this.fx), b = a.Ia("Success", false).J();
	b && this.Bx(a.Ia("Body", false).AuthToken.Value);
	this.UC(b);
};
I_[z].UC = function (a) {
	this.bG = (new Date)[Ed]();
	this.sp = false;
	if (!a) {
		this.Nt++;
		this.Nt > 2 && this.eC();
	}
};
function J_() {
	this.Ll = false;
	this.ee = [];
	this.RL = [];
	this.pb = null;
	this.Gh = [];
	this.Bh = [];
	this.Ca = null;
	this.Fb = null;
	this.Fi = null;
	this.pf = null;
	this.Pk = true;
	this.Zl = null;
	this.vv = 0;
	this.ok = false;
	this.zj = false;
	this.Ic = false;
	this.Ck = false;
	this.bl = null;
	this.wy = {};
	this.Lv = 250;
	this.Zx = false;
	TA(J_[z], "addInput", J_[z].sn);
	TA(J_[z], "removeInput", J_[z].wq);
	TA(J_[z], "setTarget", J_[z].Hm);
}
var K_ = "[A-Za-z0-9!#\\$%\\*\\/\\?\\|\\^\\{\\}`~&'\\+\\-=_]", L_ = "(?:" + K_ + "(?:[A-Za-z0-9!#\\$%\\*\\/\\?\\|\\^\\{\\}`~&'\\+\\-=_\\.]*" + K_ + ")?@[\\.A-Za-z0-9\\-]+)", M_ = new RegExp("^" + L_ + "$"), N_ = new RegExp("^(.+?)??(?:<(" + L_ + ")>)?,?$");
J_[z].Ir = null;
function O_(a) {
	var b = [], c = a.Ia("Emails");
	if (c) {
		var d = c.Gd();
		for (var e = 0, f = d.Ab(); e < f; ++e) {
			b[q](d.ff(e).Rc("Address"));
		}
	}
	var g = RZ("Email").Bb(a);
	b[t] == 0 && g != null && b[q](g);
	return b;
}
function P_(a, b) {
	var c = new J_;
	if (!b.uri && b.serverBase) {
		b.uri = b.serverBase + "data/contacts";
	}
	if (!b.loggingUri && b.serverBase) {
		b.loggingUri = b.serverBase + "log/emailautocomplete";
	}
	c[Ny](a, b);
	return c;
}
Te._EmailAc_create = P_;
J_[z].create = function (a, b) {
	var c = dk(a);
	if (b.groups) {
		this.ok = true;
		this.zj = !!b.implicitGroups;
	}
	if (b.extendedInterface) {
		this.Ic = true;
	}
	if (b.unexpandedGroups) {
		this.Ck = true;
	}
	if (b.debugData) {
		this.bl = b.debugData;
	}
	if (b.inputHandler) {
		this.pb = b.inputHandler;
	}
	b.max && this.EJ(b.max);
	var d = new gF(b.uri);
	if (!!b.disableLogging) {
		this.Pk = false;
	}
	if (this.Pk) {
		this.Zl = (new gF(b.loggingUri))[r]();
	}
	this.Bc(c, d[r](), b.rightAlign, b.twoLine, b.multi, b.topAlign, b.onComplete);
};
J_[z].ia = function () {
	this.pb.ia();
	this.Fb.ia();
};
J_[z].EB = function () {
	return new b_(this, this.Fb, this.pb);
};
J_[z].EJ = function (a) {
	this.Lv = a < 0 ? 10100 : a;
};
J_[z].Hm = function (a) {
	this.Ca.Hm(a);
};
J_[z].bu = function (a) {
	var b = null;
	if (a) {
		if (ff(a)) {
			if (a[t] > 0) {
				b = a[0][Fc][Bc];
			}
		} else {
			b = a[Fc][Bc];
		}
	}
	return b;
};
J_[z].Bc = function (a, b, c, d, e, f, g) {
	if (this.Ll) {
		NZ.Xm("Init already called");
		return;
	}
	this.Ll = true;
	this.cd = b;
	this.pf = new v_(this.ok, this.Ic);
	this.bl || this.Fv("$Contacts", rf(this.zl, this), null, false);
	this.Fi = this.bu(a);
	this.nx = new H_(this.Ic, d);
	this.Fb = new E_(this.Fi, this.nx, c);
	this.Fb.eJ(true);
	if (!this.pb) {
		this.pb = new s_(",;", Af, e, this.Ck);
	}
	this.Ca = this.EB();
	this.pb.EA(this.Ca);
	if (f) {
		this.Fb.Rx(true);
		this.pb.Tx(true);
	}
	g && $i(this.Ca, "update", function (i) {
		i.Y && g(i[Hc].bd);
	});
	if (this.bl) {
		QZ().pn(this.bl.contacts);
		this.zl("$Contacts", M);
	}
	a && this.sn(a);
};
J_[z].WK = function () {
	if (this.Pk && this.Ir == null) {
		this.Ir = new I_(this, this.Zl);
	}
};
J_[z].Fv = function (a, b, c, d) {
	var e = new gF(this.cd);
	e.oc("out", "js");
	if (c) {
		e.oc("tok", c);
		e.oc("cl", Xk);
		e.oc("psort", "Name");
	}
	d && e.oc("cd", bi);
	this.ok && e.oc("groups", bi);
	this.zj && e.oc("igroups", bi);
	e.oc("max", ma(c ? 10 : this.Lv));
	var f = new a_(e, a, "&&&START&&&", "&&&END&&&"), g = QZ();
	g.pn(f, true);
	g.addListener(b, a);
	f[Ub]();
};
J_[z].sn = function (a) {
	if (!this.Ll) {
		NZ.Xm("Init should be called first");
		return;
	}
	if (ff(a)) {
		if (a[t] == 0) {
			return;
		}
		this.Gh = this.Gh[fc](a);
		for (var b = 0; b < a[t]; b++) {
			this.pb.Bs[G](this.pb, a[b]);
		}
	} else {
		this.Gh[q](a);
		this.pb.Bs[G](this.pb, a);
	}
	if (!this.Fi) {
		this.Fi = this.bu(a);
		this.Fb.Fm(this.Fi);
	}
};
J_[z].wq = function (a) {
	if (!this.Ll) {
		NZ.Xm("Init should be called first");
		return;
	}
	if (ff(a)) {
		vi(a, function (b) {
			this.wq(b);
		}, this);
	} else {
		yi(this.Gh, a);
		this.pb.bC(a);
	}
};
J_[z].zq = function (a, b, c, d) {
	this.ht = a;
	var e = [], f = new Date;
	if (a != M) {
		if (!this.pf) {
			return;
		}
		e = this.pf.zq(a, b, d);
	}
	if (this.Zx && a) {
		if (!this.Iu(a, b, true)) {
			if (e[t] < b) {
				var g = e[fc]([]);
				Te[Lb](rf(this.kD, this, g, b, a, c), 500);
				e[q](new t_("MORE"));
			}
		}
	}
	this.vv = (new Date)[Ed]() - f[Ed]();
	c(a, e);
};
J_[z].Iu = function (a, b, c) {
	var d = this.wy[a];
	return d && (c || d.Tf < b) ? true : a[t] > 1 ? this.Iu(a[I](0, a[t] - 1), b, false) : false;
};
var Q_ = 0;
J_[z].kD = function (a, b, c, d) {
	if (c == this.ht && c != M) {
		var e = "$AdditionalContacts" + Q_++, f = rf(this.vE, this, a, b, c, d);
		this.Fv(e, f, c, true);
	}
};
J_[z].KF = function (a, b, c) {
	var d = a[b];
	return d && xi(d, c);
};
J_[z].vE = function (a, b, c, d, e) {
	var f = [][fc](a);
	if (c == this.ht) {
		var g = this.fu(e), i = {};
		for (var j = 0; j < a[t]; j++) {
			if (a[j].Yb() == 0) {
				var m = a[j].Cb.email, n = a[j].Cb[td];
				if (i[m]) {
					i[m][q](n);
				} else {
					i[m] = [n];
				}
			}
		}
		j = 0;
		while (f[t] < b && j < g.Ab()) {
			var p = g.ff(j), s = O_(p), n = p.Name;
			for (var u = 0; u < s[t]; u++) {
				var m = s[u];
				if (!this.KF(i, m, n)) {
					var v = this.ao(p, m);
					f[q](new A_(v, v.affinity, true));
					this.ee[q](v);
				}
			}
			j++;
		}
		d(c, f, true);
		this.wy[c] = {Tf:f[t]};
	}
};
J_[z].fu = function (a) {
	return QZ().fg(a).Ia("Body", true).Ia("Contacts", true).Gd();
};
J_[z].Is = function (a, b, c, d, e) {
	if (d != null) {
		var f = d[t];
		for (var g = 0; g < f; g++) {
			var i = d[g].id, j = a.J(i);
			if (j) {
				if (e) {
					j.implicit = true;
				}
				j.members[q](c);
				i[ic](0) != "^" && b[q](j);
			}
		}
	}
};
J_[z].mD = function (a) {
	return QZ().fg(a).Ia("Body", true).AuthToken.Value;
};
J_[z].tE = function (a) {
	return !!QZ().fg(a).Ia("Body", true).UsageLoggingEnabled;
};
J_[z].zl = function (a) {
	if (this.tE(a) && this.Pk) {
		this.WK();
		this.Ir.Bx(this.mD(a));
	}
	var b = [], c = [], d = new FC, e = QZ().fg(a), f = e.Ia("Body").Ia("UserData");
	if (f) {
		this.Zx = f.Rc("ShowDomainContacts");
		this.zj = this.zj && f.Rc("ShowImplicitGroups");
		this.Ic = this.Ic && f.Rc("EmailAcExtendedInterface");
		this.nx.MJ(this.Ic);
		this.pf.HJ(this.Ic);
	}
	if (this.ok) {
		var g = e.Ia("Body").Ia("Groups");
		if (g) {
			var i = g.Gd(), j = i.Ab();
			NZ.we("Got " + j + " groups");
			for (var m = 0; m < j; m++) {
				var n = i.ff(m), p = n.Rc(Wt);
				if (n.IsLocked && !(this.Ck && p == "^Mine")) {
					continue;
				}
				var s = this.KB(n);
				c[q](s);
				d.aa(p, s);
			}
		}
		NZ.we("Created groups array");
	}
	var u = this.fu(a), j = u.Ab();
	NZ.we("Got " + j + " contacts");
	if (j > 0) {
		for (var m = 0; m < this.Gh[t]; m++) {
			this.Gh[m][hd]("autocomplete", "off");
		}
	}
	for (var m = 0; m < j; m++) {
		var v = u.ff(m), w = O_(v);
		for (var x = 0; x < w[t]; x++) {
			var y = this.ao(v, w[x]);
			if (this.ok && x == 0) {
				var C = [], i = v.Rc("Groups");
				this.Is(d, C, y, i, false);
				if (this.zj) {
					var D = v.Rc("ImplicitGroups");
					this.Is(d, C, y, D, true);
				}
				if (C[t] > 0) {
					y.bM = C;
				}
			}
			b[q](y);
		}
	}
	NZ.we("Created contacts array");
	this.ee = b;
	this.Bh = c;
	this.pf.oJ(this.ee, this.Bh);
	NZ.we("Set data source for matcher");
};
J_[z].ao = function (a, b) {
	var c = a.Id, d = a.Name, e = a.Affinity, f = !!a.DomainContact;
	e || (e = 0);
	var g = {};
	g.data = a;
	g.id = c;
	lb(g, d);
	g.email = b;
	g.isDomainContact = f;
	var i = a.Ia("NameAliases", true);
	if (i) {
		i = i.Gd();
		var j = i.Ab(), m = [];
		for (var n = 0; n < j; ++n) {
			m[q](i.ff(n).J());
		}
		g.aliases = m;
	}
	g.affinity = e;
	g.bD = (d ? Af + d + Af : M) + (b ? " <" + b + zf : M);
	g.groups = [];
	xa(g, function () {
		return this.bD;
	});
	return g;
};
J_[z].KB = function (a) {
	return {members:[], data:a, id:a.id, affinity:a.Affinity || 0, name:a.Name, toString:function () {
		return this[td];
	}};
};
var _emailAutocomplete = Te._emailAutocomplete = new J_;
Te._initEmailAutocomplete = rf(Te._emailAutocomplete.Bc, Te._emailAutocomplete);
var _initEmailAutocomplete = Te._initEmailAutocomplete;
function y_(a) {
	var b = null, c = null;
	a = wf(a);
	var d = a[Lc](N_);
	if (d) {
		b = d[1] || null;
		c = d[2] || null;
	}
	if (b && !c) {
		var e = b[Lc](M_);
		if (e) {
			b = M;
			c = e[0];
		}
	}
	if (b) {
		b = wf(b);
		if (b[E](Af) == 0 && IZ(b, Af)) {
			b = b[Qd](1, b[t] - 2);
		}
	}
	if (c) {
		c = wf(c);
	}
	return {name:b, email:c};
}
function R_(a) {
	J_[G](this);
	this.rG = a;
}
N(R_, J_);
function S_(a, b, c) {
	var d = new R_(a);
	if (!c.uri && c.serverBase) {
		c.uri = c.serverBase + "data/contacts";
	}
	if (!c.loggingUri && c.serverBase) {
		c.loggingUri = c.serverBase + "log/emailautocomplete";
	}
	d[Ny](b, c);
	return d;
}
R_[z].zl = function (a, b) {
	J_[z].zl[G](this, a, b);
	var c = this.rG.Cg;
	for (var d in c) {
		this.ps(c[d], d);
	}
};
R_[z].ps = function (a, b) {
	var c = {id:M};
	if (a) {
		c.Name = a;
	}
	var d = this.ao(XZ(c, "$SomeContact"), b);
	if (a) {
		d.email = null;
	}
	this.ee[q](d);
};
function T_() {
	zk[G](this);
	this.xi = {};
	this.Cg = {};
	Ck().UJ(this);
}
N(T_, zk);
function U_(a) {
	return a.aq + Ke + a.Ar;
}
zk[z].zd = function (a) {
	if (!Kk.f().$b) {
		return;
	}
	var b = U_(a), c = this.xi[b];
	if (c) {
		c.sn(a.Zi);
	} else {
		var d = {serverBase:Ck().xx, multi:a.aq, groups:a.aq};
		c = S_(this, a.Zi, d);
		$i(c.Ca, "update", this.QC, false, this);
		c.Fb.Rx(a.Ar);
		c.pb.Tx(a.Ar);
		this.xi[b] = c;
	}
};
zk[z].QC = function (a) {
	if (!a.Y) {
		return;
	}
	var b = a[Hc].bd, c = Ck().zD(b.id).uB;
	c && c(b);
};
zk[z].he = function (a) {
	var b = this.xi[U_(a)];
	b && b.wq(a.Zi);
};
zk[z].Wj = function (a, b) {
	if (!this.Cg[a]) {
		for (var c in this.xi) {
			this.xi[c].ps(b, a);
		}
		this.Cg[a] = b;
	}
};
new T_;

