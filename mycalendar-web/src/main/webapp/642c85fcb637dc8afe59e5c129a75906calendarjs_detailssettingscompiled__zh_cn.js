
var iJ = _experimentalLangs, jJ = "runtimeStyle", kJ = [];
function lJ(a) {
	if (!a) {
		return null;
	}
	if (Y.f()[ld](a)) {
		return a;
	}
	var b = null;
	ww.f()[bd](function (c, d) {
		if (d.nh == a) {
			b = c;
			return false;
		}
	});
	return b;
}
function mJ(a) {
	var b = a[Lc](/^https?:\/\/([^\/@:])+\.google\.com(:\d+)?(\/(?:cl2|calendar))?\/(feeds|ical)\/([^\/]+)\//);
	if (b != null) {
		return sa(b[5]);
	}
	return null;
}
var nJ = "addcalendarfromurl";
function oJ(a) {
	a.ia();
	yi(kJ, a);
}
function pJ(a) {
	Sx(a.Ii, a[J], a[nd], 1 == a[J] ? a.mc : undefined);
}
function qJ(a) {
	var b = a[Vb](Ke, 4);
	if (b[t] != 4) {
		throw new Error("Bad index: " + a);
	}
	var c = b[1] == 1 ? ka(b[3], 10) : undefined;
	return new Px(b[0], ka(b[1], 10), ka(b[2], 10), c);
}
function rJ(a) {
	Mk(nJ, ["curl", a, "cimp", Xk, "cpub", bi], undefined);
}
function sJ(a, b, c, d, e, f) {
	c[q]("<select name=\"", a.Xa, "\" id=\"", a.Xa, Af);
	d && c[q](" class=\"", d, Af);
	e !== undefined && c[q](qg, e);
	a.gh && c[q](" disabled");
	c[q](zf);
	if (b) {
		if (ff(b[0])) {
			for (var g = 0; g < b[t]; g++) {
				c[q]("<option value=\"", b[g][0], Af);
				f && f == b[g][0] && c[q](" selected");
				c[q](zf, b[g][1], "</option>");
			}
		} else {
			for (var g = 0; g < b[t]; g += 2) {
				c[q]("<option value=\"", b[g], Af);
				f && f == b[g] && c[q](" selected");
				c[q](zf, b[g + 1], "</option>");
			}
		}
	}
	c[q]("</select>");
}
function tJ(a, b, c, d, e) {
	this.Xa = a;
	hb(this, b);
	this.Iw = c;
	this.nt = d;
	this.gh = e;
	this.He = undefined;
}
function uJ() {
	return Uk().J("translatedtz");
}
function vJ(a) {
	var b = null;
	ww.f()[bd](function (c, d) {
		if (a == d.vj) {
			b = c;
			return false;
		}
	});
	return b;
}
function wJ(a) {
	var b = mJ(a);
	if (Y.f()[ld](b)) {
		return b;
	}
	var c = lJ(b);
	if (Y.f()[ld](c)) {
		return c;
	}
	return b;
}
function xJ(a, b) {
	switch (typeof a) {
	  case "object":
		if (a === null) {
			b[q]("null");
		} else {
			if ("toSource" in a) {
				b[q](a.toSource());
			} else {
				if (a instanceof Array) {
					var c = a[t];
					b[q]("[");
					if (c) {
						xJ(a[0], b);
						for (var d = 1; d < c; ++d) {
							b[q](",");
							xJ(a[d], b);
						}
					}
					b[q]("]");
				} else {
					b[q]("{");
					var e = false;
					for (var f in a) {
						e && b[q](",");
						e = true;
						b[q](vg(f), Ke);
						xJ(a[f], b);
					}
					b[q]("}");
				}
			}
		}
		break;
	  case hf:
		b[q](vg(a));
		break;
	  case "undefined":
		b[q]("undefined");
		break;
	  case bf:
	  case "boolean":
		b[q](a);
		break;
	  case cf:
	  default:
		b[q]("/*UNKNOWN*/undefined");
		break;
	}
}
function yJ(a, b, c) {
	a[Gc](c);
	b[o](c);
}
function zJ(a, b, c, d) {
	var e = a[Ob][Xc](d);
	c[qc](e, b);
	return e;
}
function AJ(a, b) {
	vF[z].lq = a.vM(vF[z].lq, b);
}
function BJ() {
	var a = kJ;
	while (a[t]) {
		a.pop().ia();
	}
}
function CJ(a, b, c, d, e, f) {
	var g = new vF;
	kJ[q](g);
	b && $i(g, sF, b);
	$i(g, "ready", sf(oJ, g));
	f && g.OJ(f);
	g[Pc](a, c, d, e);
}
function DJ() {
	Ox = {};
	for (var a in Nx) {
		var b = Nx[a];
		delete Nx[a];
		var c = qJ(a);
		if (b == 1) {
			pJ(c);
		} else {
			if (b == -1) {
				var d = Mx[c.Ii];
				d && delete d[a];
			}
		}
	}
}
function EJ(a) {
	for (var b in Nx) {
		var c = Nx[b];
		if (c && (c == 1 || c == -1)) {
			a[q]("sub", b + Ke + c);
		}
	}
}
function FJ(a, b) {
	var c = Qx(a);
	Nx[c] = b ? 1 : -1;
}
function GJ(a) {
	var b = [], c = Mx[a];
	if (!c) {
		return [];
	}
	for (var d in c) {
		var e = c[d];
		if (e && e.Ii == a && (Qw() || e[nd] != 2)) {
			b[q](e);
		}
	}
	return b;
}
function HJ(a, b, c, d) {
	var e = new Px(a, b, c, d), f = Mx[a];
	if (!f) {
		return false;
	}
	return Qx(e) in f;
}
function IJ(a, b) {
	var c = Qx(a), d = Qx(b);
	return c == d ? 0 : c < d ? -1 : 1;
}
function JJ(a) {
	return "/news?hl=" + ia(Ie) + "&q=" + ia(a);
}
function KJ(a, b) {
	if (!a || !wf(a)) {
		om("\u8bf7\u8f93\u5165\u516c\u5171\u65e5\u5386\u7f51\u5740");
		return false;
	}
	var c = mJ(a) != null ? wJ(a) : vJ(a);
	if (c) {
		var d;
		if (Y.f()[ld](c)) {
			Y.f().vo(c);
			Pw();
			b && rJ(a);
			d = false;
		} else {
			no(c, b);
			d = true;
		}
		return d;
	}
	Mk(nJ, ["curl", a, "cimp", bi, "cpub", b ? bi : Xk], undefined);
	eo();
	return true;
}
function LJ(a, b, c) {
	var d = [];
	Dw(function (m) {
		var n = Un(m.id);
		n && n.tc >= 60 && d[q](m);
	});
	d[gd](Xn);
	var e = ["<select name=\"" + a + "\" "];
	c && e[q](c);
	e[q](zf);
	for (var f = 0; f < d[t]; ++f) {
		var g = d[f], i = Un(g.id), j = i && i.ua ? i.ua : g[td];
		e[q]("<option value=\"", P(g.id), Af);
		b === g.id && e[q](" selected");
		e[q](zf, P(j), "</option>");
	}
	e[q]("</select>");
	return e[K](M);
}
function MJ(a, b, c, d, e) {
	d[q]("<tr><th><h3 class=\"normalSize\">", a, "</h3></th><td colspan=\"2\">");
	sJ(b, c, d, e);
	d[q]("</td></tr>");
}
function NJ() {
	if (Eu() == Du()) {
		return uJ();
	}
	return Uk().J("secondarytranstz");
}
function OJ() {
	return Fw;
}
function PJ(a) {
	for (var b = 0; b + 1 < a[t]; b += 2) {
		if (a[b] != Yn && a[b] != Aw && a[b + 1] > 0) {
			return true;
		}
	}
	return false;
}
function QJ(a) {
	om(P(a));
}
function RJ(a, b) {
	var c = false;
	Kz(a, b, function () {
		c = true;
	});
	return c;
}
function TJ(a) {
	if ("uneval" in Te) {
		return Te.uneval(a);
	} else {
		var b = [Vj];
		xJ(a, b);
		b[q](Xj);
		return b[K](M);
	}
}
function UJ(a, b) {
	var c = b[ud], d = zJ(a, b, c, "SPAN");
	yJ(c, d, b);
	return d;
}
function VJ(a) {
	var b;
	b = ag ? a[Ob] || a[nz][Ob] : a.contentDocument || a[nz][Ob];
	return b;
}
function WJ(a) {
	return Ch(a[0]) + "T000000/" + Ch(a[1]) + "T000000";
}
var XJ = "images/question_mark.gif", YJ = "smsVerificationCode", ZJ = "smsCarrier", $J = "smsPhoneNumber", aK = "smsCountry", bK = "hideInvitations", cK = "REQUEST";
function dK(a, b) {
	var c = a[ez], d = c[t];
	for (var e = 0; e < d; ++e) {
		if (c[e][B] == b) {
			c[e].selected = true;
			return;
		}
	}
	By(a, -1);
}
function eK(a) {
	var b = Uz(a)[1];
	if (b == M) {
		b = a;
	}
	var c = b[Vc](Sm);
	return c == -1 ? b : b[Qd](0, c);
}
var fK = ["AL", "\u963f\u5c14\u5df4\u5c3c\u4e9a (Shqip\xebria)", "DZ", "\u963f\u5c14\u53ca\u5229\u4e9a (\u0627\u0644\u062c\u0632\u0627\u0626\u0631)", "AF", "\u963f\u5bcc\u6c57 (\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646)", "AR", "\u963f\u6839\u5ef7 (Argentina)", "AE", "\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd (\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0651\u0629 \u0627\u0644\u0645\u062a\u0651\u062d\u062f\u0629)", "AW", "\u963f\u9c81\u5df4 (Aruba)", "OM", "\u963f\u66fc (\u0639\u0645\u0627\u0646)", "AZ", "\u963f\u585e\u62dc\u7586 (Az\u0259rbaycan)", "EG", "\u57c3\u53ca (\u0645\u0635\u0631)", "ET", "\u57c3\u585e\u4fc4\u6bd4\u4e9a (Ityop'iya)", "IE", "\u7231\u5c14\u5170 (Ireland)", "EE", "\u7231\u6c99\u5c3c\u4e9a (Eesti)", "AD", "\u5b89\u9053\u5c14 (Andorra)", "AO", "\u5b89\u54e5\u62c9 (Angola)", "AI", "\u5b89\u572d\u62c9 (Anguilla)", "AG", "\u5b89\u63d0\u74dc\u548c\u5df4\u5e03\u8fbe (Antigua and Barbuda)", "AT", "\u5965\u5730\u5229 (\xd6sterreich)", "AX", "\u5965\u5170\u7fa4\u5c9b (Aland Islands)", "AU", "\u6fb3\u5927\u5229\u4e9a (Australia)", "MO", "\u6fb3\u95e8 (Macao)", "BB", "\u5df4\u5df4\u591a\u65af (Barbados)", "PG", "\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a (Papua New Guinea)", "BS", "\u5df4\u54c8\u9a6c (Bahamas)", "PK", "\u5df4\u57fa\u65af\u5766 (\u067e\u0627\u06a9\u0633\u062a\u0627\u0646)", "PY", "\u5df4\u62c9\u572d (Paraguay)", "PS", "\u5df4\u52d2\u65af\u5766\u5730\u533a (Palestinian Territory)", "BH", "\u5df4\u6797 (\u0627\u0644\u0628\u062d\u0631\u064a\u0646)", "PA", "\u5df4\u62ff\u9a6c (Panam\xe1)", "BR", "\u5df4\u897f (Brasil)", "BY", "\u767d\u4fc4\u7f57\u65af (\u0411\u0435\u043b\u0430\u0440\u0443\u0301\u0441\u044c)", "BM", "\u767e\u6155\u5927 (Bermuda)", "BG", "\u4fdd\u52a0\u5229\u4e9a (\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f)", "MP", "\u5317\u9a6c\u91cc\u4e9a\u7eb3\u7fa4\u5c9b (Northern Mariana Islands)", "BJ", "\u8d1d\u5b81 (B\xe9nin)", "BE", "\u6bd4\u5229\u65f6 (Belgi\xeb)", "IS", "\u51b0\u5c9b (\xcdsland)", "BO", "\u73bb\u5229\u7ef4\u4e9a (Bolivia)", "PR", "\u6ce2\u591a\u9ece\u5404 (Puerto Rico)", "PL", "\u6ce2\u5170 (Polska)", "BA", "\u6ce2\u65af\u5c3c\u4e9a\u548c\u9ed1\u585e\u54e5\u7ef4\u90a3 (Bosna i Hercegovina)", "BW", "\u535a\u8328\u74e6\u7eb3 (Botswana)", "BZ", "\u4f2f\u5229\u5179 (Belize)", "BT", "\u4e0d\u4e39 (\u0f60\u0f56\u0fb2\u0f74\u0f42\u0f0b\u0f61\u0f74\u0f63)", "BF", "\u5e03\u57fa\u7eb3\u6cd5\u7d22 (Burkina Faso)", "BI", "\u5e03\u9686\u8fea (Uburundi)", "BV", "\u5e03\u97e6\u5c9b (Bouvet Island)", "KP", "\u671d\u9c9c (\uc870\uc120)", "GQ", "\u8d64\u9053\u51e0\u5185\u4e9a (Guinea Ecuatorial)", "DK", "\u4e39\u9ea6 (Danmark)", "DE", "\u5fb7\u56fd (Deutschland)", "TL", "\u4e1c\u5e1d\u6c76 (Timor-Leste)", "TG", "\u591a\u54e5 (Togo)", "DM", "\u591a\u7c73\u5c3c\u52a0 (Dominica)", "DO", "\u591a\u7c73\u5c3c\u52a0\u5171\u548c\u56fd (Dominican Republic)", "RU", "\u4fc4\u7f57\u65af (\u0420\u043e\u0441\u0441\u0438\u044f)", "EC", "\u5384\u74dc\u591a\u5c14 (Ecuador)", "ER", "\u5384\u7acb\u7279\u91cc\u4e9a (Ertra)", "FR", "\u6cd5\u56fd (France)", "FO", "\u6cd5\u7f57\u7fa4\u5c9b (Faroe Islands)", "PF", "\u6cd5\u5c5e\u6ce2\u5229\u5c3c\u897f\u4e9a (French Polynesia)", "GF", "\u6cd5\u5c5e\u572d\u4e9a\u90a3 (French Guiana)", "TF", "\u6cd5\u5c5e\u5357\u90e8\u9886\u5730 (French Southern Territories)", "PH", "\u83f2\u5f8b\u5bbe (Pilipinas)", "FI", "\u82ac\u5170 (Suomi)", "CV", "\u4f5b\u5f97\u89d2 (Cabo Verde)", "FK", "\u798f\u514b\u5170\u7fa4\u5c9b (Falkland Islands)", "GM", "\u5188\u6bd4\u4e9a (Gambia)", "CG", "\u521a\u679c (Congo)", "CD", "\u521a\u679c\u6c11\u4e3b\u5171\u548c\u56fd (Congo, Democratic Republic of the)", "CO", "\u54e5\u4f26\u6bd4\u4e9a (Colombia)", "CR", "\u54e5\u65af\u8fbe\u9ece\u52a0 (Costa Rica)", "GG", "\u683c\u6069\u897f\u5c9b (Guernsey)", "GD", "\u683c\u6797\u7eb3\u8fbe (Grenada)", "GL", "\u683c\u9675\u5170 (Greenland)", "GE", "\u683c\u9c81\u5409\u4e9a (\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd)", "CU", "\u53e4\u5df4 (Cuba)", "GP", "\u74dc\u5fb7\u7f57\u666e (Guadeloupe)", "GU", "\u5173\u5c9b (Guam)", "GY", "\u572d\u4e9a\u90a3 (Guyana)", "KZ", "\u54c8\u8428\u514b\u65af\u5766 (\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d)", "HT", "\u6d77\u5730 (Ha\xefti)", "KR", "\u97e9\u56fd (\ud55c\uad6d)", "NL", "\u8377\u5170 (Nederland)", "AN", "\u8377\u5c5e\u5b89\u7684\u5217\u65af (Netherlands Antilles)", "HM", "\u8d6b\u5fb7\u548c\u9ea6\u514b\u5510\u7eb3\u7fa4\u5c9b (Heard Island and McDonald Islands)", "ME", "\u9ed1\u5c71 (\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430)", "HN", "\u6d2a\u90fd\u62c9\u65af (Honduras)", "KI", "\u57fa\u91cc\u5df4\u65af (Kiribati)", "DJ", "\u5409\u5e03\u63d0 (Djibouti)", "KG", "\u5409\u5c14\u5409\u65af\u65af\u5766 (\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d)", "GN", "\u51e0\u5185\u4e9a (Guin\xe9e)", "GW", "\u51e0\u5185\u4e9a\u6bd4\u7ecd (Guin\xe9-Bissau)", "CA", "\u52a0\u62ff\u5927 (Canada)", "GH", "\u52a0\u7eb3 (Ghana)", "GA", "\u52a0\u84ec (Gabon)", "KH", "\u67ec\u57d4\u5be8 (Kampuchea)", "CZ", "\u6377\u514b\u5171\u548c\u56fd (\u010cesko)", "ZW", "\u6d25\u5df4\u5e03\u97e6 (Zimbabwe)", "CM", "\u5580\u9ea6\u9686 (Cameroun)", "QA", "\u5361\u5854\u5c14 (\u0642\u0637\u0631)", "KY", "\u5f00\u66fc\u7fa4\u5c9b (Cayman Islands)", "CC", "\u79d1\u79d1\u65af\u7fa4\u5c9b (Cocos Islands)", "KM", "\u79d1\u6469\u7f57 (Comores)", "CI", "\u79d1\u7279\u8fea\u74e6 (C\xf4te d'Ivoire)", "KW", "\u79d1\u5a01\u7279 (\u0627\u0644\u0643\u0648\u064a\u062a)", "HR", "\u514b\u7f57\u5730\u4e9a (Hrvatska)", "KE", "\u80af\u5c3c\u4e9a (Kenya)", "CK", "\u5e93\u514b\u7fa4\u5c9b (Cook Islands)", "LV", "\u62c9\u8131\u7ef4\u4e9a (Latvija)", "LS", "\u83b1\u7d22\u6258 (Lesotho)", "LA", "\u8001\u631d (\u0e99\u0ea5\u0eb2\u0ea7)", "LB", "\u9ece\u5df4\u5ae9 (\u0644\u0628\u0646\u0627\u0646)", "LR", "\u5229\u6bd4\u91cc\u4e9a (Liberia)", "LY", "\u5229\u6bd4\u4e9a (\u0644\u064a\u0628\u064a\u0627)", "LT", "\u7acb\u9676\u5b9b (Lietuva)", "LI", "\u5217\u652f\u6566\u58eb\u767b (Liechtenstein)", "RE", "\u7559\u5c3c\u6c6a\u5c9b (Reunion)", "LU", "\u5362\u68ee\u5821 (L\xebtzebuerg)", "RW", "\u5362\u65fa\u8fbe (Rwanda)", "RO", "\u7f57\u9a6c\u5c3c\u4e9a (Rom\xe2nia)", "MG", "\u9a6c\u8fbe\u52a0\u65af\u52a0 (Madagasikara)", "MT", "\u9a6c\u8033\u4ed6 (Malta)", "MV", "\u9a6c\u5c14\u4ee3\u592b (\u078e\u07aa\u0796\u07ad\u0787\u07b0\u0783\u07a7 \u0794\u07a7\u0787\u07b0\u0783\u07a8\u0780\u07ab\u0789\u07b0\u0796)", "MW", "\u9a6c\u62c9\u7ef4 (Malawi)", "MY", "\u9a6c\u6765\u897f\u4e9a (Malaysia)", "ML", "\u9a6c\u91cc (Mali)", "MK", "\u9a6c\u5176\u987f (\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430)", "MH", "\u9a6c\u7ecd\u5c14\u7fa4\u5c9b (Marshall Islands)", "MQ", "\u9a6c\u63d0\u5c3c\u514b (Martinique)", "YT", "\u9a6c\u7ea6\u7279\u5c9b (Mayotte)", "IM", "\u66fc\u5c9b (Isle of Man)", "MU", "\u6bdb\u91cc\u6c42\u65af (Mauritius)", "MR", "\u6bdb\u91cc\u5854\u5c3c\u4e9a (\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627)", "US", "\u7f8e\u56fd (United States)", "AS", "\u7f8e\u5c5e\u8428\u6469\u4e9a (American Samoa)", "UM", "\u7f8e\u5c5e\u5916\u5c9b (United States minor outlying islands)", "MN", "\u8499\u53e4 (\u041c\u043e\u043d\u0433\u043e\u043b \u0423\u043b\u0441)", "MS", "\u8499\u7279\u585e\u62c9\u7279 (Montserrat)", "BD", "\u5b5f\u52a0\u62c9 (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6)", "PE", "\u79d8\u9c81 (Per\xfa)", "FM", "\u5bc6\u514b\u7f57\u5c3c\u897f\u4e9a (Micronesia)", "MM", "\u7f05\u7538 (Myanmar (Burma))", "MD", "\u6469\u5c14\u591a\u74e6 (Moldova)", "MA", "\u6469\u6d1b\u54e5 (\u0627\u0644\u0645\u063a\u0631\u0628)", "MC", "\u6469\u7eb3\u54e5 (Monaco)", "MZ", "\u83ab\u6851\u6bd4\u514b (Mo\xe7ambique)", "MX", "\u58a8\u897f\u54e5 (M\xe9xico)", "NA", "\u7eb3\u7c73\u6bd4\u4e9a (Namibia)", "ZA", "\u5357\u975e (South Africa)", "AQ", "\u5357\u6781\u6d32 (Antarctica)", "GS", "\u5357\u4e54\u6cbb\u4e9a\u548c\u5357\u6851\u5fb7\u5a01\u5947\u7fa4\u5c9b (South Georgia and the South Sandwich Islands)", "NP", "\u5c3c\u6cca\u5c14 (\u0928\u0947\u092a\u093e\u0932)", "NI", "\u5c3c\u52a0\u62c9\u74dc (Nicaragua)", "NE", "\u5c3c\u65e5\u5c14 (Niger)", "NG", "\u5c3c\u65e5\u5229\u4e9a (Nigeria)", "NU", "\u7ebd\u57c3 (Niue)", "NO", "\u632a\u5a01 (Norge)", "NF", "\u8bfa\u798f\u514b\u5c9b (Norfolk Island)", "PW", "\u5e15\u52b3 (Belau)", "PN", "\u76ae\u7279\u51ef\u6069 (Pitcairn)", "PT", "\u8461\u8404\u7259 (Portugal)", "JP", "\u65e5\u672c", "SE", "\u745e\u5178 (Sverige)", "CH", "\u745e\u58eb (Schweiz)", "SV", "\u8428\u5c14\u74e6\u591a (El Salvador)", "WS", "\u8428\u6469\u4e9a (Samoa)", "RS", "\u585e\u5c14\u7ef4\u4e9a (\u0421\u0440\u0431\u0438\u0458\u0430)", "CS", "\u585e\u5c14\u7ef4\u4e9a\u53ca\u8499\u8482\u7eb3\u54e5 (\u0421\u0440\u0431\u0438\u0458\u0430 \u0438 \u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430)", "SL", "\u585e\u62c9\u5229\u6602 (Sierra Leone)", "SN", "\u585e\u5185\u52a0\u5c14 (S\xe9n\xe9gal)", "CY", "\u585e\u6d66\u8def\u65af (\u039a\u03c5\u03c0\u03c1\u03bf\u03c2)", "SC", "\u585e\u820c\u5c14 (Seychelles)", "SA", "\u6c99\u7279\u963f\u62c9\u4f2f (\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629)", "CX", "\u5723\u8bde\u5c9b (Christmas Island)", "ST", "\u5723\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4 (S\xe3o Tom\xe9 and Pr\xedncipe)", "SH", "\u5723\u8d6b\u52d2\u62ff (Saint Helena)", "KN", "\u5723\u57fa\u8328\u548c\u5c3c\u7ef4\u65af (Saint Kitts and Nevis)", "LC", "\u5723\u5362\u897f\u4e9a (Saint Lucia)", "SM", "\u5723\u9a6c\u529b\u8bfa (San Marino)", "PM", "\u5723\u76ae\u57c3\u5c14\u548c\u5bc6\u514b\u9686\u7fa4\u5c9b (Saint Pierre and Miquelon)", "VC", "\u5723\u6587\u68ee\u7279\u548c\u683c\u6797\u7eb3\u4e01\u65af (Saint Vincent and the Grenadines)", "LK", "\u65af\u91cc\u5170\u5361 (Sri Lanka)", "SK", "\u65af\u6d1b\u4f10\u514b (Slovensko)", "SI", "\u65af\u6d1b\u6587\u5c3c\u4e9a (Slovenija)", "SJ", "\u65af\u74e6\u5c14\u5df4\u548c\u626c\u9a6c\u5ef6 (Svalbard and Jan Mayen)", "SZ", "\u65af\u5a01\u58eb\u5170 (Swaziland)", "SD", "\u82cf\u4e39 (\u0627\u0644\u0633\u0648\u062f\u0627\u0646)", "SR", "\u82cf\u91cc\u5357 (Suriname)", "SO", "\u7d22\u9a6c\u91cc (Soomaaliya)", "SB", "\u6240\u7f57\u95e8\u7fa4\u5c9b (Solomon Islands)", "TJ", "\u5854\u5409\u514b\u65af\u5766 (\u0422\u043e\u04b7\u0438\u043a\u0438\u0441\u0442\u043e\u043d)", "TW", "\u53f0\u6e7e (\u53f0\u7063)", "TH", "\u6cf0\u56fd (\u0e23\u0e32\u0e0a\u0e2d\u0e32\u0e13\u0e32\u0e08\u0e31\u0e01\u0e23\u0e44\u0e17\u0e22)", "TZ", "\u5766\u6851\u5c3c\u4e9a (Tanzania)", "TO", "\u6c64\u52a0 (Tonga)", "TC", "\u7279\u514b\u65af\u548c\u51ef\u79d1\u65af\u7fa4\u5c9b (Turks and Caicos Islands)", "TT", "\u7279\u7acb\u5c3c\u8fbe\u548c\u591a\u5df4\u54e5 (Trinidad and Tobago)", "TN", "\u7a81\u5c3c\u65af (\u062a\u0648\u0646\u0633)", "TV", "\u56fe\u74e6\u5362 (Tuvalu)", "TR", "\u571f\u8033\u5176 (T\xfcrkiye)", "TM", "\u571f\u5e93\u66fc\u65af\u5766 (T\xfcrkmenistan)", "TK", "\u6258\u514b\u52b3 (Tokelau)", "WF", "\u74e6\u5229\u65af\u548c\u798f\u56fe\u7eb3 (Wallis and Futuna)", "VU", "\u74e6\u52aa\u963f\u56fe (Vanuatu)", "GT", "\u5371\u5730\u9a6c\u62c9 (Guatemala)", "VI", "\u7ef4\u5c14\u4eac\u7fa4\u5c9b\uff0c\u7f8e\u5c5e (Virgin Islands, U.S.)", "VE", "\u59d4\u5185\u745e\u62c9 (Venezuela)", "BN", "\u6587\u83b1 (Brunei Darussalam)", "UG", "\u4e4c\u5e72\u8fbe (Uganda)", "UA", "\u4e4c\u514b\u5170 (\u0423\u043a\u0440\u0430\u0457\u043d\u0430)", "UY", "\u4e4c\u62c9\u572d (Uruguay)", "UZ", "\u4e4c\u5179\u522b\u514b\u65af\u5766 (O'zbekiston)", "ES", "\u897f\u73ed\u7259 (Espa\xf1a)", "EH", "\u897f\u6492\u54c8\u62c9 (\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629)", "GR", "\u5e0c\u814a ('E\u03bb\u03bb\u03b1\u03c2)", "HK", "\u9999\u6e2f (Hong Kong)", "SG", "\u65b0\u52a0\u5761 (Singapura)", "NC", "\u65b0\u5580\u91cc\u591a\u5c3c\u4e9a (New Caledonia)", "NZ", "\u65b0\u897f\u5170 (New Zealand)", "HU", "\u5308\u7259\u5229 (Magyarorsz\xe1g)", "SY", "\u53d9\u5229\u4e9a (\u0633\u0648\u0631\u064a\u0627)", "JM", "\u7259\u4e70\u52a0 (Jamaica)", "AM", "\u4e9a\u7f8e\u5c3c\u4e9a (\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576)", "YE", "\u4e5f\u95e8 (\u0627\u0644\u064a\u0645\u0646)", "IQ", "\u4f0a\u62c9\u514b (\u0627\u0644\u0639\u0631\u0627\u0642)", "IR", "\u4f0a\u6717 (\u0627\u06cc\u0631\u0627\u0646)", "IL", "\u4ee5\u8272\u5217 (\u05d9\u05e9\u05e8\u05d0\u05dc)", "IT", "\u610f\u5927\u5229 (Italia)", "IN", "\u5370\u5ea6 (India)", "ID", "\u5370\u5ea6\u5c3c\u897f\u4e9a (Indonesia)", "GB", "\u82f1\u56fd (United Kingdom)", "VG", "\u82f1\u5c5e\u7ef4\u5c14\u4eac\u7fa4\u5c9b (Virgin Islands, British)", "IO", "\u82f1\u5c5e\u5370\u5ea6\u6d0b\u9886\u5730 (British Indian Ocean Territory)", "JO", "\u7ea6\u65e6 (\u0627\u0644\u0627\u0631\u062f\u0646)", "VN", "\u8d8a\u5357 (Vi\u1ec7t Nam)", "ZM", "\u8d5e\u6bd4\u4e9a (Zambia)", "JE", "\u6cfd\u897f\u5c9b (Jersey)", "TD", "\u4e4d\u5f97 (Tchad)", "GI", "\u76f4\u5e03\u7f57\u9640 (Gibraltar)", "CL", "\u667a\u5229 (Chile)", "CF", "\u4e2d\u975e\u5171\u548c\u56fd (R\xe9publique Centrafricaine)", "CN", "\u4e2d\u56fd", "NR", "\u7459\u9c81 (Naoero)", "VA", "\u68b5\u8482\u5188 (Citt\xe0 del Vaticano)", "FJ", "\u6590\u6d4e (Fiji)"];
var gK = "\uff08\u8981\u67e5\u770b\u5176\u4ed6\u65f6\u533a\uff0c\u8bf7\u9009\u62e9\u4e0d\u540c\u7684\u56fd\u5bb6/\u5730\u533a\uff09", $ = "\u8bf7\u8bbf\u95ee\u652f\u6301\u4e2d\u5fc3\u4e86\u89e3\u652f\u6301\u7684\u63d0\u4f9b\u5546\u3002", hK = "\u975e\u5e38\u62b1\u6b49\uff0c\u65e0\u6cd5\u4fdd\u5b58\u60a8\u7684\u66f4\u6539\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", iK = "\u8f93\u5165\u7528\u6237\u7684portal\u8d26\u6237";
function jK(a) {
	return a + " \u8be6\u7ec6\u4fe1\u606f";
}
var kK = "\u60a8\u6240\u505a\u7684\u66f4\u6539\u5c1a\u672a\u4fdd\u5b58\u3002", lK = vF;
lK.send = CJ;
lK.ML = BJ;
lK.wM = AJ;
lK.OL = oJ;
lK.vL = wF;
lK.yL = xF;
lK.FM = kJ;
function mK(a, b) {
	this.direction = a || "ltr";
	this.bm = b || 20;
}
mK[z].rJ = function (a) {
	this.direction = a || "ltr";
};
mK[z].yu = function (a, b, c, d, e) {
	var f = a + b, g = d + e - c - this.bm;
	if (f > g) {
		f = g;
	}
	var i = d + this.bm;
	if (f < i) {
		f = i;
	}
	return f;
};
mK[z].oE = function (a, b, c, d, e) {
	var f = this.yu(2 * d + e - a - b, b, c, d, e) + c;
	return 2 * d + e - f;
};
mK[z].nE = function (a, b, c, d, e) {
	return this[Jy] == "rtl" ? this.oE(a, b, c, d, e) : this.yu(a, b, c, d, e);
};
mK[z].qE = function (a, b, c, d, e) {
	var f = a + b;
	if (f > d + e - c - this.bm) {
		f = a - c;
	}
	var g = d + this.bm;
	if (f < g) {
		f = g;
	}
	return f;
};
function nK(a, b) {
	this.NA = a;
	this.direction = b && b != "ltr" && b != "rtl" ? null : b;
	this.Gk = {};
	this.bh = {};
	this.Qi = {};
	this.ut = {};
	this.kG = 1000;
	this.Qu = 300;
	this.qo = 100;
	this.Jx("loadingDiv");
	this.Qx("tooltipIframe");
	this.zr = new mK;
}
nK[z].wI = function () {
	this.bh = {};
	this.Gk = {};
	this.Qi = {};
};
nK[z].Jx = function (a) {
	this.Hv = a;
};
nK[z].Qx = function (a) {
	this.xr = a;
};
nK[z].WJ = function (a) {
	this.qo = a;
};
nK[z].cx = function (a, b, c) {
	var d = self[Qc] || document[Pd][cd] || document[Bc][cd], e = self[My] || document[Pd][Sy] || document[Bc][Sy], f = document[Pd][vb] || document[Bc][vb], g = document[Pd][dd] || document[Bc][dd], i = a[cc] || a[Sy], j = a[Fd] || a[cd];
	this.zr.rJ(this[Jy] ? this[Jy] : document[Pd].dir || document[Bc].dir);
	var m = this.zr.nE(b[0], c[cc], i, g, e), n = this.zr.qE(b[1], c[Fd], j, f, d);
	Wa(a[F], m + X);
	a[F].top = n + X;
	var p = b[1];
	if (n < p && n + j > p && (a[F].overflow == "auto" || a[F].overflow == "scroll")) {
		var s = p - n;
		ob(a[F], (s < 50 ? 50 : s) + X);
	}
};
nK[z].Aw = function (a) {
	var b = document[$b](this.xr);
	if (!b) {
		return;
	}
	Wa(b[F], a[F][Cc]);
	b[F].top = a[F].top;
	Fa(b[F], a[cc] || a[Sy]);
	ob(b[F], a[Fd] || a[cd]);
	mb(b[F], this.qo - 5);
	l(b[F], this.pl(b.id));
	ub(b[F], "visible");
};
nK[z].ND = function (a) {
	var b = 0, c = 0;
	do {
		b += a[uc];
		c += a[Bd];
	} while (a = a[dc]);
	return [b, c];
};
nK[z].pl = function (a) {
	return this.ut[a] || "block";
};
nK[z].sJ = function (a, b) {
	this.ut[a] = b;
};
nK[z].DJ = function (a) {
	this.Qu = a;
};
nK[z].Gv = function (a, b, c) {
	this.Qi[b] = true;
	var d = this;
	window[Lb](function () {
		d.Np(a, b, c);
	}, this.kG);
};
nK[z].Np = function (a, b, c) {
	if (!this.Qi[b]) {
		return;
	}
	var d = document[$b](this.Hv);
	this.Cn(d, document[Bc]);
	this.Cn(document[$b](this.xr), document[Bc]);
	var e = document[$b](c), f = this.ND(e), g = d;
	if (this.bh[b]) {
		g = document[$b](b);
	} else {
		if (g && g[F][xd] == U) {
			l(g[F], this.pl(g.id));
		}
	}
	if (g) {
		this.cx(g, f, e);
		ub(g[F], "visible");
		this.Aw(g);
	}
	if (this.bh[b] || this.Gk[b]) {
		return;
	}
	this.bh[b] = false;
	this.Gk[b] = true;
	var i = this, j = this.NA + a;
	try {
		lK[Pc](j, function (n) {
			var p = n[Hc].su(), s = document[$b](b);
			if (s) {
				i.Cn(s, i.pE());
				k(s, p);
				i.bh[b] = true;
				if (s[F][xd] == U) {
					l(s[F], i.pl(b));
				}
				mb(s, i.qo);
				i.cx(s, f, e);
				ub(d[F], am);
				ub(s[F], "visible");
				i.Aw(s);
			}
			i.Gk[b] = false;
		}, "GET");
	}
	catch (m) {
		if (document[$b](b)) {
			this.bh[b] = true;
		}
		this.Gk[b] = false;
	}
};
nK[z].Cn = function (a, b) {
	if (a && b && a[ud] != b) {
		var c = b[Hd]("*");
		for (var d = 0, e; e = c[d]; d++) {
			e.id == a.id && e != a && e[ud][Gc](e);
		}
		b[o](a);
	}
};
nK[z].pE = function () {
	if (!this.xy) {
		var a = document[Xc]("table"), b = document[Xc]("tbody"), c = document[Xc]("tr"), d = document[Xc]("td");
		a[o](b);
		b[o](c);
		c[o](d);
		d[F].whiteSpace = "normal";
		document[Bc][o](a);
		this.xy = d;
	}
	return this.xy;
};
nK[z].Mu = function (a) {
	this.Qi[a] = false;
	var b = this;
	window[Lb](function () {
		b.Nu(a);
	}, this.Qu);
};
nK[z].Nu = function (a) {
	if (this.Qi[a]) {
		return;
	}
	var b = document[$b](this.xr);
	if (b) {
		l(b[F], U);
		ub(b[F], am);
	}
	var c = document[$b](a);
	if (c) {
		ub(c[F], am);
	}
	var d = document[$b](this.Hv);
	if (d) {
		ub(d[F], am);
	}
};
vf("TooltipLoader", nK);
TA(nK[z], "setLoadingDiv", nK[z].Jx);
TA(nK[z], "setTooltipIframe", nK[z].Qx);
TA(nK[z], "setZIndex", nK[z].WJ);
TA(nK[z], "getDisplayStyle", nK[z].pl);
TA(nK[z], "setDisplayStyle", nK[z].sJ);
TA(nK[z], "setHideTimeout", nK[z].DJ);
TA(nK[z], "loadContent", nK[z].Gv);
TA(nK[z], "loadContentDelayed", nK[z].Np);
TA(nK[z], "hideContent", nK[z].Mu);
TA(nK[z], "hideContentDelayed", nK[z].Nu);
TA(nK[z], "resetContentCache", nK[z].wI);
R.M = {};
R.M.yr = new nK("/support/calendar/bin/shortanswer.py?ctx=tltp&answer=", "ltr");
R.M.ku = function (a, b) {
	return a + (b ? Jl + b : M);
};
R.M.ar = function (a, b) {
	document[$b]("tooltipImg_" + b).src = a ? "images/question_mark_over.gif" : XJ;
};
R.M.Pv = function (a, b, c, d) {
	a == 0 && R.M.ar(b, c);
	R.M.yr.Np(d + "&hl=" + Ie, "tooltipDiv_" + c, "tooltipSpan_" + c);
};
R.M.em = function (a, b, c, d) {
	a == 0 && R.M.ar(b, c);
	R.M.yr.Gv(d + "&hl=" + Ie, "tooltipDiv_" + c, "tooltipSpan_" + c);
};
R.M.dm = function (a, b, c) {
	a == 0 && R.M.ar(b, c);
	R.M.yr.Mu("tooltipDiv_" + c);
};
R.M.Tg = new T("<span id=\"tooltipSpan_${idString}\" class=\"${class}\" style=\"${style}\" onclick=\"" + Dg(R.M.Pv) + "(0,true,'${idString}',${faqId})\" onmouseout=\"" + Dg(R.M.dm) + "(0,false,'${idString}')\"> onmouseover=\"" + Dg(R.M.em) + "(0,true,'${idString}',${faqId})\"><img src=\"" + XJ + "\" style=\"vertical-align:middle;border:0px none;margin-top:2px;margin-right:4px;\" height=\"14\" width=\"13\" alt=\"${altText}\" id=\"tooltipImg_${idString}\"></span>");
R.M.gn = new T("<div id=\"tooltipDiv_${idString}\" class=\"tooltipPopup\" style=\"display:none;visibility:hidden;\" onmouseout=\"" + Dg(R.M.dm) + "(0,false,'${idString}')\"> onmouseover=\"" + Dg(R.M.em) + "(0,true,'${idString}',${faqId})\"></div>");
R.M.$L = function (a, b, c, d, e, f, g) {
	var i = R.M.ku(a, g);
	R.M.Tg.b("idString", i);
	R.M.Tg.b("faqId", a);
	R.M.Tg.b("altText", b);
	R.M.Tg.b(fk, c ? c : M);
	R.M.Tg.b("style", d ? d : M);
	var j = R.M.Tg[r](), m = M;
	if (!document[$b]("tooltipDiv_" + i)) {
		R.M.gn.b("idString", i);
		R.M.gn.b("faqId", a);
		m = R.M.gn[r]();
	}
	return [e || M, j, f || M, m][K](M);
};
R.M.Vg = new T("<span id=\"tooltipSpan_${idString}\" class=\"${class}\" style=\"${style}\" onclick=\"" + Dg(R.M.Pv) + "(1,true,'${idString}',${faqId})\" onmouseout=\"" + Dg(R.M.dm) + "(1,false,'${idString}')\" onmouseover=\"" + Dg(R.M.em) + "(1,true,'${idString}',${faqId})\">${text}</span>");
R.M.kn = new T("<div id=\"tooltipDiv_${idString}\" class=\"tooltipPopup\" style=\"display:none;visibility:hidden;\" onmouseout=\"" + Dg(R.M.dm) + "(1,false,'${idString}')\" onmouseover=\"" + Dg(R.M.em) + "(1,true,'${idString}',${faqId})\"></div>");
R.M.aM = function (a, b, c, d, e, f, g) {
	var i = R.M.ku(a, g);
	R.M.Vg.b("idString", i);
	R.M.Vg.b(fk, c ? c : M);
	R.M.Vg.b("style", d ? d : M);
	R.M.Vg.b("faqId", a);
	R.M.Vg.b("text", b);
	var j = R.M.Vg[r](), m = M;
	if (!document[$b]("tooltipDiv_" + i)) {
		R.M.kn.b("idString", i);
		R.M.kn.b("faqId", a);
		m = R.M.kn[r]();
	}
	return [e || M, j, f || M, m][K](M);
};
R.M.Tr = new T("http://www.google.com/support/calendar/bin/answer.py?answer=${num}&hl=" + Ie);
R.M.eu = function (a, b, c, d, e, f) {
	var g = c ? "class=\"" + c + "\" " : M, i = d ? "style=\"" + d + "\" " : M, j = e || M, m = f || M;
	R.M.Tr.b("num", ia(a));
	var n = R.M.Tr[r]();
	return [j, "<a href=\"", n, "\" target=\"_blank\" ", g, i, zf, b, "</a>", m][K](M);
};
R.M.jg = function (a, b, c, d, e, f, g) {
	return R.M.eu(a, b, c, d, e, f, g);
};
R.M.Vy = "http://www.google.com/a/help/intl/{hl}/admins/terms.html";
R.M.Qy = "http://www.google.com/accounts/TOS?hl={hl}";
R.M.EK = function (a, b, c, d, e, f) {
	var g = c ? "class=\"" + c + "\" " : M, i = d ? "style=\"" + d + "\" " : M, j = e || M, m = f || M, n = P((a ? R.M.Vy : R.M.Qy)[A]("{hl}", ia(Ie)));
	return [j, "<a href=\"", n, "\" target=\"_blank\" ", g, i, zf, b, "</a>", m][K](M);
};
var oK = "http://www.google.com/support/calendar/bin/topic.py?topic=11678&hl=" + Ie;
function _olp_shouldShowPromo() {
	if (!Ay) {
		return false;
	}
	if (!pK()) {
		return false;
	}
	var a = new AF;
	return !(a.dM() && a.up());
}
function pK() {
	if ((new AF).Ih()) {
		return true;
	}
	if (Xf) {
		return $f && dg("1.8");
	} else {
		if (Vf) {
			return $f && dg("1.8") || ag && dg("525.17");
		} else {
			if (Wf) {
				return $f && dg("1.8") || Q && dg("6.0");
			}
		}
	}
	return false;
}
function _olp_showPromo() {
	if (!_olp_shouldShowPromo()) {
		return;
	}
	var a = new AF, b, c, d = "<img src=\"images/online.gif\" height=11 width=11 title=\"" + P("\u5728\u7ebf") + wk, e = "<a href=\"" + P(oK) + "\" target=_blank>\u4e86\u89e3\u8be6\u60c5</a>";
	if (a.Ih()) {
		c = [Zn(Zd), Zn("\u53d6\u6d88")];
		b = "\u8981\u5728\u672a\u8fde\u63a5\u5230 Internet \u7684\u60c5\u51b5\u4e0b\u67e5\u770b\u548c\u7f16\u8f91 Google \u65e5\u5386\u672a\u6765\u7684 1 \u4e2a\u6708\uff0c\u8bf7\u70b9\u51fb\u201c" + Zd[A](/&nbsp;/g, M) + "\u201d\u3002\u5728\u60a8\u7684\u6570\u636e\u53ef\u4ee5\u8131\u673a\u67e5\u770b\u65f6\uff0c\u5c4f\u5e55\u53f3\u4e0a\u89d2\u5c06\u4f1a\u663e\u793a " + d + "\u3002 <br> " + e + " <p>\u6b64\u529f\u80fd\u4f7f\u7528\u4e86 Google Gears \u6d4f\u89c8\u5668\u63d2\u4ef6\uff08\u8be5\u63d2\u4ef6\u5df2\u5b89\u88c5\u5728\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\uff09\u3002";
	} else {
		var f = document[nc].hostname + (ol ? "/a/" + ol : M) + "/calendar/", g = "http://gears.google.com/?action=install&hl=" + Ie + "&name=" + ia("Google \u65e5\u5386") + "&message=" + ia("\u8981\u5728\u6ca1\u6709\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684\u60c5\u51b5\u4e0b\u67e5\u770b\u5e76\u7f16\u8f91 Google \u65e5\u5386\uff0c\u8bf7\u5b89\u88c5 Google Gears \u6d4f\u89c8\u5668\u63d2\u4ef6\u3002") + "&icon_src=images/cal_48x48.gif&return=" + ia(document[nc][id][A](/\?.*$/, "?settings=3"));
		c = [Zn("\u5b89\u88c5", null, "window.open(" + vg(g) + Xj), Zn("\u53d6\u6d88")];
		b = "\u8981\u5728\u672a\u8fde\u63a5\u5230 Internet \u7684\u60c5\u51b5\u4e0b\u67e5\u770b\u548c\u7f16\u8f91 Google \u65e5\u5386\u672a\u6765\u7684 1 \u4e2a\u6708\uff0c\u8bf7\u70b9\u51fb\u201c\u5b89\u88c5\u201d\u3002\u5728\u60a8\u7684\u6570\u636e\u53ef\u4ee5\u8131\u673a\u67e5\u770b\u65f6\uff0c\u5c4f\u5e55\u53f3\u4e0a\u89d2\u5c06\u4f1a\u663e\u793a " + d + "\u3002 <br> " + e + " <p> \u6b64\u529f\u80fd\u4f7f\u7528\u4e86 Google Gears \u6d4f\u89c8\u5668\u63d2\u4ef6\u3002" + ("<p><b>" + ("\u5b89\u88c5\u5b8c Google Gears \u4ee5\u540e\uff0c\u9700\u8981\u91cd\u542f\u6d4f\u89c8\u5668\uff0c\u7136\u540e\u8fd4\u56de\u5230 " + f + "\u3002") + "</b>");
	}
	b = "<div style=\"width: 40em\">" + b + so;
	$n(function (i) {
		i === 0 && Vs(3, false);
		return false;
	}, "\u8131\u673a\u4f7f\u7528 Google \u65e5\u5386", b, c);
	return true;
}
function qK(a, b) {
	this.Ya = new al(this);
	this.uJ(a);
	b && this.RJ(b);
}
N(qK, pj);
var rK = "toggle_display";
qK[z].I = null;
qK[z].Fs = true;
qK[z].Es = null;
qK[z].Z = false;
qK[z].bK = false;
qK[z].yv = -1;
qK[z].Fp = -1;
qK[z].xd = rK;
qK[z].Yb = function () {
	return this.xd;
};
qK[z].RJ = function (a) {
	this.xd = a;
};
qK[z].ma = function () {
	return this.I;
};
qK[z].uJ = function (a) {
	this.Et();
	this.I = a;
};
qK[z].dJ = function (a) {
	this.Et();
	this.Fs = a;
};
qK[z].Et = function () {
	if (this.Z) {
		throw Error("Can not change this state of the popup while showing.");
	}
};
qK[z].Mb = function () {
	return this.Z;
};
qK[z].pv = function () {
	return this.Z || tf() - this.Fp < 150;
};
qK[z].pc = function (a) {
	if (a) {
		if (!this.I) {
			throw Error("Caller must call setElement before trying to show thepopup");
		}
		this.iK();
	} else {
		this.hp();
	}
};
qK[z].Xh = function () {
};
qK[z].iK = function () {
	if (this.Z) {
		return;
	}
	if (!this.lH()) {
		return;
	}
	this.Xh();
	if (this.Fs) {
		var a = qk(this.I);
		this.Ya.ra(a, ij, this.mm, true);
		if (Q) {
			var b = a.activeElement;
			while (b && b[az] == "IFRAME") {
				try {
					var c = VJ(b);
				}
				catch (d) {
					break;
				}
				a = c;
				b = a.activeElement;
			}
			this.Ya.ra(a, ij, this.mm, true);
			this.Ya.ra(a, "deactivate", this.cw);
		} else {
			this.Ya.ra(a, "blur", this.cw);
		}
	}
	if (this.xd == rK) {
		this.fK();
	} else {
		this.xd == "move_offscreen" && this.Xh();
	}
	this.Z = true;
	this.sH();
};
qK[z].hp = function (a) {
	if (this.Z) {
		if (!this.kH(a)) {
			return;
		}
		this.Ya && this.Ya.Bg();
		if (this.xd == rK) {
			this.bK ? fF(this.Pu, 0, this) : this.Pu();
		} else {
			this.xd == "move_offscreen" && this.QG();
		}
		this.Z = false;
		this.qH(a);
	}
};
qK[z].fK = function () {
	ub(this.I[F], "visible");
	TD(this.I, true);
};
qK[z].Pu = function () {
	ub(this.I[F], am);
	TD(this.I, false);
};
qK[z].QG = function () {
	Wa(this.I[F], "-200px");
	this.I[F].top = "-200px";
};
qK[z].lH = function () {
	return this[xc]("beforeshow");
};
qK[z].sH = function () {
	this.yv = tf();
	this.Fp = -1;
	this[xc]("show");
};
qK[z].kH = function (a) {
	return this[xc]({type:"beforehide", target:a});
};
qK[z].qH = function (a) {
	this.Fp = tf();
	this[xc]({type:"hide", target:a});
};
qK[z].mm = function (a) {
	var b = a[Hc];
	if (!pk(this.I, b) && (!this.Es || pk(this.Es, b)) && !this.Xx()) {
		this.hp(b);
	}
};
qK[z].cw = function (a) {
	var b = qk(this.I);
	if (Q || Zf) {
		var c = b.activeElement;
		if (c && pk(this.I, c)) {
			return;
		}
	} else {
		if (a[Hc] != b) {
			return;
		}
	}
	if (this.Xx()) {
		return;
	}
	this.hp();
};
qK[z].Xx = function () {
	return tf() - this.yv < 150;
};
qK[z].S = function () {
	qK.ba.S[G](this);
	this.Ya.ia();
	delete this.I;
	delete this.Ya;
};
function sK(a, b) {
	this.NH = 5;
	this.Hw = b || undefined;
	qK[G](this, a);
}
N(sK, qK);
sK[z].Xh = function () {
	if (!this.Hw) {
		return;
	}
	var a = this.I;
	if (!this.Z) {
		ub(this.I[F], am);
		TD(a, true);
	}
	this.Hw.Xh(a, this.NH, this.iM);
	this.Z || TD(a, false);
};
function tK(a) {
	this.Ya = new al(this);
	this.xg = new sK(a);
	this.xg.dJ(false);
}
N(tK, ri);
tK[z].S = function () {
	tK.ba.ia[G](this);
	this.Ya.ia();
	this.Ya = null;
	this.xg.ia();
	this.xg = null;
};
var uK = {"num-plus":"+", "Shift+/":"?"}, vK = new T("<div class=scpopupinner><table class=scpopuphead><tbody><tr><td class=scpopupheadleft>\u952e\u76d8\u5feb\u6377\u952e</td><td class=scpopupheadright><span id=keyhelpclose class=scpopupheadlink>\u5173\u95ed</span></td></tr></tbody></table><table class=scpopupbody><tbody><tr>${columns}</td></tbody></table></div>"), wy = null;
function vy() {
	if (null == wy) {
		var a = document[Xc](xk);
		Da(a, "scpopup");
		ub(a[F], am);
		document[Bc][o](a);
		wy = new tK(a);
	}
}
tK[z].Pa = function () {
	var a = vK;
	a.b("columns", this.$C(this.tD()));
	k(this.xg.ma(), a[r]());
	this.Ya.ra(document, jj, this.rH, true);
	this.Ya.ra(document, ij, this.mm);
	this.Ya.ra(W("keyhelpclose"), hj, this.V);
	this.xg.pc(true);
};
tK[z].V = function () {
	this.Ya.Bg();
	this.xg.pc(false);
};
tK[z].rH = function () {
	this.V();
};
tK[z].mm = function (a) {
	pk(this.xg.ma(), a[Hc]) || this.V();
};
tK[z].Jt = function (a) {
	var b = [];
	a[t] > 1 ? GA(b, uK[a] || a) : GA(b, a);
	return b;
};
tK[z].nu = function (a) {
	var b = HC, c = {};
	c[b.Rz] = "\u4eca\u5929";
	c[b.Uz] = "\u65e5\u7a0b\u89c6\u56fe";
	c[b.Wz] = "\u5929\u89c6\u56fe";
	c[b.Yz] = "\u5468\u89c6\u56fe";
	c[b.Xz] = "\u6708\u89c6\u56fe";
	c[b.Vz] = "\u56db\u5929\u89c6\u56fe";
	c[b.Fz] = "\u641c\u7d22";
	c[b.lz] = "\u805a\u7126\u201c\u6dfb\u52a0\u597d\u53cb\u7684\u65e5\u5386\u201d";
	c[b.Dz] = "\u5feb\u901f\u6dfb\u52a0";
	c[b.Cz] = "\u6253\u5370";
	c[b.Hz] = "\u8bbe\u7f6e";
	c[b.Lz] = "\u6253\u5f00\u5feb\u6377\u952e\u5e2e\u52a9";
	c[b.Sy] = "\u521b\u5efa\u4e8b\u4ef6";
	c[b.gz] = "\u4e8b\u4ef6\u8be6\u60c5";
	c[b.Wy] = "\u5220\u9664\u4e8b\u4ef6";
	return c[a];
};
tK[z].eA = function (a, b) {
	var c = [];
	if (a.Mc(b)) {
		c = this.Jt(a.J(b));
	} else {
		var d = b[Vb](/\b/);
		for (var e = 0; e < d[t]; e++) {
			var f = d[e];
			if (f == "/") {
				c[q]("/");
			} else {
				a.Mc(f) ? GA(c, this.Jt(a.J(f))) : c[q](f);
			}
		}
	}
	return c;
};
tK[z].aD = function (a) {
	var b = [];
	for (var c = 0; c < a[t]; ++c) {
		c % 2 ? b[q](" <span class=auxiliaryword>") : b[q]("<span class=keymnemonic>");
		b[q](a[c]);
		b[q]("</span> ");
	}
	b[q](Ke);
	return b[K](M);
};
tK[z].tD = function () {
	var a = (new FC(R.Ul.bn)).UK(), b = [];
	for (var c = 0; c < wK[t]; c++) {
		var d = [], e = wK[c];
		for (var f = 0; f < e[t]; f++) {
			var g = e[f], i = g.Ig, j = [];
			for (var m = 0; m < i[t]; m++) {
				var n = i[m], p, s;
				if (ff(n)) {
					p = n[0];
					s = n[1];
				} else {
					p = n;
					s = this.nu(n);
				}
				var u = {ic:this.aD(this.eA(a, p)), description:s};
				j[q](u);
			}
			d[q]({title:g.title, Ig:j});
		}
		b[q](d);
	}
	return b;
};
tK[z].$C = function (a) {
	var b = [];
	for (var c in a) {
		var d = a[c];
		b[q]("<td><table><tbody>");
		for (var e in d) {
			var f = d[e];
			b[q]("<tr><th/><th>");
			b[q](f.title);
			b[q]("</th></tr>");
			for (var g in f.Ig) {
				var i = f.Ig[g];
				b[q]("<tr><td class=key>");
				b[q](i.ic);
				b[q]("</td><td class=desc>");
				b[q](i.description);
				b[q]("</td></tr>");
			}
		}
		b[q]("</tbody></table></td>");
	}
	return b[K](M);
};
var wK = [[{title:"\u5bfc\u822a", Ig:[["ks0/ks1", "\u4e0a\u4e00\u4e2a\u65f6\u6bb5/\u4e0b\u4e00\u4e2a\u65f6\u6bb5"], "ks2"]}], [{title:"\u89c6\u56fe", Ig:["ks10", "ks11", "ks12", "ks13", "ks14"]}], [{title:"\u64cd\u4f5c", Ig:["ks30", "ks31", "ks32"]}], [{title:"\u5e94\u7528\u7a0b\u5e8f", Ig:["ks20", "ks21", "ks22", "ks23", "ks24", "ks25"]}]];
R.al = {};
R.al.uE = function (a) {
	ph[gd](function (g, i) {
		g = g[0];
		i = i[0];
		return g < i ? -1 : g == i ? 0 : 1;
	});
	var b = ["<table style=\"width: 400px\">"];
	for (var c = 0; c < ph[t]; ++c) {
		var d = ph[c];
		if (a && !d[0][Lc](a)) {
			continue;
		}
		var e;
		try {
			e = P(M + d[1]());
		}
		catch (f) {
			e = "<font color=red>" + P(f[r]()) + "</font>";
		}
		b[q]("<tr><td style=white-space:pre>", P(d[0]), "</td><td>", e, "</td></tr>");
	}
	b[q]("</table>");
	return b[K](M);
};
R.al.hK = function () {
	vf("gcal.debug.getVarZHtml", R.al.uE);
	var a = window[yb]();
	a[Ob][Dc]("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\n<html>\n<head>\n<title>VarZ</title>\n<script type=text/javascript><!--\nfunction fetch() {\n  try {\n\n    document.getElementById(\"varZ\").innerHTML =\n      window.opener.gcal.debug.getVarZHtml();\n    setTimeout(fetch, 2000);\n  } catch (e) {\n    document.getElementById(\"varZ\").innerHTML = \"closing\";\n    setTimeout(function () { window.close(); }, 2000);\n  }\n}\n--></script>\n</head>\n\n<body bgcolor=white onload=\"fetch()\">\n<div id=varZ></div>\n</body>\n</html>");
	a[Ob][zc]();
};
function xK() {
	var a = R.W.uu(), b = [];
	b[q]("<div style=\"overflow:auto;max-height:600px;max-width:800px\">");
	b[q]("Each list item shows the samples taken in order.");
	b[q]("<ul><font size=\"-1\">");
	for (var c = 0; c < a[t]; ++c) {
		var d = a[c];
		b[q]("<li>");
		b[q](d[td], ": ", d[Uy][K](","));
		if (d.sz > 1) {
			b[q]("<b> sum: ", d.sum, "</b>");
			b[q]("<font color=red> avg: ", d.avg, "</font>");
			b[q]("<font color=blue> median: ", d.median, "</font>");
			b[q]("<font color=green> stddev: ", d.stddev, "</font>");
			b[q]("</li>");
		}
	}
	b[q]("</ul></font>");
	b[q](so);
	$n(function (e) {
		e == 1 && R.W[rd]();
	}, "<h3>Performance Data</h3>", b[K](M), [Zn("Continue"), Zn("Delete Performance Data")]);
}
R.eK = xK;
var yK = {LV:[M, $], LU:[M, $], LT:[M, $], LR:[M, $], VG:[M, $], VE:[M, $], ME:[M, $], DO:[M, $], MK:[M, $], DE:[M, $], UZ:[M, $], MA:[M, $], DK:[M, $], MV:[M, $], MU:[M, $], US:["NONE", "\u9009\u62e9\u8fd0\u8425\u5546...", "AIRPEAK_US", "Airpeak", "ACS", "Alaska Communications Systems", "ALASKA_WIRELESS_US", "Alaska Wireless", "ALLTEL", "Alltel", "APPALACHIAN_WIRELESS", "Appalachian Wireless", "ATT", "AT&T", "BLUECELL_US", "Bluegrass Cellular", "BOOST_MOBILE_US", "Boost Mobile", "CAROLINA_WEST", "Carolina West", "CELLCOM_US", "Cellcom", "CELLULAR_ONE_NEPA_US", "Cellular One NEPA", "SLO_CELLULAR_US", "Cellular One of San Luis Obispo", "CELL_SOUTH", "Cellular South", "CELLULARONE", "CellularOne", "CENTENNIAL", "Centennial Wireless", "CINCINNATI_BELL", "Cincinnati Bell", "COPPER_VALLEY_US", "Copper Valley", "CORR_WIRELESS_US", "Corr Wireless", "EDGE", "Edge Wireless", "EINSTEIN_WIRELESS_US", "einstein wireless", "FARMERS", "Farmers Wireless", "GOLDEN_STATE_CELLULAR_US", "Golden State Cellular", "HELIO", "Helio", "IVCELLULAR_US", "Illinois Valley Cellular", "IMMIX", "Immix Wireless", "INLAND_CELLULAR_US", "Inland Cellular", "METROPCS", "MetroPCS", "MID_TEX_CELLULAR_US", "Mid-Tex Cellular", "MIDWEST_WIRELESS", "Midwest Wireless", "MTA_WIRELESS_US", "MTA Wireless", "NEXTEL", "Nextel", "NTELOS_US", "nTelos", "PIONEER_CELLULAR_US", "Pioneer Cellular", "PLATEAU_US", "Plateau Wireless", "QWEST", "Qwest", "SOUTHERNLINC_US", "SouthernLINC Wireless", "SPRINT", "Sprint", "SRT_US", "SRT WIRELESS", "SUNCOM", "SunCom Wireless", "SUREWEST_US", "SureWest", "TMOBILE", "T-Mobile", "THUMB_CELLULAR_US", "Thumb Cellular", "TRACFONE_US", "Tracfone", "RCC", "Unicel", "USCELLULAR", "US Cellular", "USAMOBILITY", "USAMobility", "VERIZON", "Verizon", "VIRGIN", "Virgin Mobile", "WEST_CENTRAL_US", "West Central Wireless"], MX:[M, $], MZ:[M, $], MY:[M, $], MO:[M, $], UG:[M, $], MT:[M, $], UA:[M, $], NG:[M, $], ES:[M, $], NL:[M, $], EG:[M, $], EE:[M, $], TZ:[M, $], NZ:[M, $], GA:[M, $], GB:[M, $], NO:[M, $], OM:[M, $], FR:[M, $], FO:[M, $], FI:[M, $], PL:[M, $], GR:[M, $], PH:[M, $], PK:[M, $], PE:[M, $], GM:[M, $], GL:[M, $], GI:[M, $], GH:[M, $], GG:[M, $], HK:[M, $], ZA:[M, $], HR:[M, $], RO:[M, $], HU:[M, $], ID:[M, $], IE:[M, $], AT:[M, $], IL:[M, $], IM:[M, $], IN:[M, $], AU:[M, $], IQ:[M, $], YE:[M, $], AZ:[M, $], IS:[M, $], IT:[M, $], BA:[M, $], PT:[M, $], AD:[M, $], AG:[M, $], AE:[M, $], PR:[M, $], AF:[M, $], AL:[M, $], JE:[M, $], AM:[M, $], JP:["NONE", "\u9009\u62e9\u8fd0\u8425\u5546...", "DISNEY_JP", "disney.ne.jp", "DOCOMO", "docomo.ne.jp", "E_MOBILE_JP", "emnet.ne.jp", "KDDI", "ezweb.ne.jp", "VODAFONE-SOFTBANK", "softbank.ne.jp", "VODAFONE-SOFTBANK_IPHONE", "i.softbank.jp", "VODAFONE-T", "t.vodafone.ne.jp", "VODAFONE-D", "d.vodafone.ne.jp", "VODAFONE-H", "h.vodafone.ne.jp", "VODAFONE-C", "c.vodafone.ne.jp", "VODAFONE-K", "k.vodafone.ne.jp", "VODAFONE-R", "r.vodafone.ne.jp", "VODAFONE-N", "n.vodafone.ne.jp", "VODAFONE-S", "s.vodafone.ne.jp", "VODAFONE-Q", "q.vodafone.ne.jp", "WILLCOM-OLD", "pdx.ne.jp", "WILLCOM-WM", "wm.pdx.ne.jp", "WILLCOM-DK", "dk.pdx.ne.jp", "WILLCOM-DI", "di.pdx.ne.jp", "WILLCOM-DJ", "dj.pdx.ne.jp"], JO:[M, $], JM:[M, $], BR:[M, $], BT:[M, $], TH:[M, $], TN:[M, $], CA:["NONE", "\u9009\u62e9\u8fd0\u8425\u5546...", "ALIANT", "Aliant", "BELL_MOBILITY", "Bell Mobility", "FIDO", "Fido", "MTS_MOBILITY", "MTS Mobility", "NORTHERN_TEL", "NorthernTel", "ROGERS", "Rogers", "SASKTEL", "SaskTel Mobility", "TBAYTEL_CA", "TBAY Mobility", "TELEBEC", "Telebec", "TELUS", "Telus Mobility", "VIRGIN_CA", "Virgin Mobile"], TR:[M, $], BG:[M, $], BH:[M, $], SY:[M, $], BD:[M, $], BE:[M, $], BN:[M, $], BO:[M, $], KH:[M, $], BJ:[M, $], KE:[M, $], BM:[M, $], SD:[M, $], CZ:[M, $], CY:[M, $], SC:[M, $], KR:[M, $], SE:[M, $], CV:[M, $], SG:[M, $], CU:[M, $], SI:[M, $], KW:[M, $], SK:[M, $], RS:[M, $], LB:[M, $], RU:[M, $], CH:[M, $], LI:[M, $], LK:[M, $], CN:[M, $], SA:[M, $]};
function zK() {
	var a = iJ ? iJ[Vb](",") : [], b = {}, c = a[t];
	for (var d = 0; d < c; ++d) {
		b[a[d]] = true;
	}
	return b;
}
var AK = [["in", "Bahasa Indonesia"], ["ca", "Catal&agrave;"], ["da", "Dansk"], ["de", "Deutsch"], ["en_GB", "English (UK)&lrm;"], ["en", "English (US)&lrm;"], ["es", "Espa&ntilde;ol"], ["tl", "Filipino"], ["fr", "Fran&ccedil;ais"], ["hr", "Hrvatski"], ["it", "Italiano"], ["lv", "Latvie\u0161u"], ["lt", "Lietuvi\u0173;"], ["hu", "Magyar"], ["nl", "Nederlands"], ["no", "Norsk (bokm\xe5l)&lrm;"], ["pl", "Polski"], ["pt_BR", "Portugu\xeas (Brasil)&lrm;"], ["pt_PT", "Portugu\xeas (Portugal)&lrm;"], ["ro", "Rom&acirc;n\u0103"], ["sk", "Slovensk&yacute;"], ["sl", "sloven\u0161\u010dina"], ["fi", "Suomi"], ["sv", "Svenska"], ["tr", "T&uuml;rk&ccedil;e"], ["vi", "Ti\u1ebfng Vi\u1ec7t"], ["cs", "\u010cesk&yacute;"], ["el", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"], ["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"], ["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"], ["uk", "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"], ["bg", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"], ["iw", "\u05e2\u05d1\u05e8\u05d9\u05ea (new - Hebrew)"], ["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (new - Arabic)"], ["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"], ["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"], ["zh_TW", "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09&lrm;"], ["zh_CN", "\u4e2d\u6587\uff08\u7b80\u4f53\uff09&lrm;"], ["ja", "\u65e5\u672c\u8a9e"], ["ko", "\ud55c\uad6d\uc5b4"]];
function BK() {
	var a = [], b = zK(), c = AK[t];
	for (var d = 0; d < c; d++) {
		AK[d][0] in b || a[q](AK[d]);
	}
	if (_sip) {
		a[q](["en_US_pseudo", "\xde\u0161\xe9\xfb\xf0\xf6-\xc9\xf1\u011d\u013c\xee\u0161\u0125"]);
		a[q](["ar_IL_pseudo", "\u202eFake BiDi\u202c"]);
	}
	return a;
}
var CK = {};
function DK(a, b) {
	var c;
	c = b ? b : "GETALLTZS";
	var d = CK[c];
	if (d != null) {
		var e = d[a];
		if (e != null) {
			return e;
		}
	}
	return null;
}
function EK(a, b, c) {
	var d;
	d = c ? c : "GETALLTZS";
	var e = CK[d];
	if (e == null) {
		e = {};
		CK[d] = e;
	}
	e[b] = a;
}
function FK(a, b) {
	function c() {
		Sn(false, "rdwTz");
	}
	Sn(true, "rdwTz");
	var d = ["hl", a];
	b && d[q]("gl", b);
	Mk("updateTzs", d, c);
}
function GK(a, b) {
	var c = DK(a, b), d = HK(c, true), e = HK(c, false);
	IK(d);
	JK(e);
}
function IK(a) {
	var b = W("preftz");
	KK(a, b);
}
function JK(a) {
	var b = W("secondtz");
	KK(a, b);
}
function KK(a, b) {
	if (!b) {
		return;
	}
	var c = b[Oy];
	if (!c || c < 0 || c >= b[ez][t]) {
		c = 0;
	}
	var d = b[ez][c][B];
	za(b[ez], 0);
	var e = false;
	for (var f = 0; f < a[t]; f += 2) {
		b[ez][f / 2] = new Option(a[f + 1], a[f]);
		if (d == a[f]) {
			b[ez][f / 2].selected = true;
			e = true;
		}
	}
	if (!e && b[ez][t] > 0) {
		b[ez][0].selected = true;
	}
}
function HK(a, b) {
	var c, d, e = W(b ? "preftz" : "secondtz");
	if (e != null && e[Oy] >= 0) {
		var f = e[ez][e[Oy]], c = f[B], d = f[Gb];
		return LK(c, d, a);
	} else {
		return a;
	}
}
function LK(a, b, c) {
	for (var d = 0; d < c[t]; d += 2) {
		if (c[d] == a) {
			return c;
		}
	}
	return [a, b][fc](c);
}
function MK(a, b, c, d) {
	var e = DK(c, d);
	if (e == null) {
		FK(c, d);
		return [a, b];
	} else {
		return LK(a, b, e);
	}
}
R.Tz = EK;
R.Sz = GK;
function NK() {
	this.$f = {};
}
xa(tJ[z], function () {
	return this.Xa;
});
NK[z].qa = function (a, b, c, d) {
	return this.$f[b] = new tJ(b, a, c, d);
};
NK[z].oI = function (a) {
	delete this.$f[a];
};
NK[z].am = function (a, b) {
	var c = this.$f[a];
	if (c == null) {
		return;
	}
	c.He = M + b;
};
NK[z].ys = function (a, b) {
	for (var c in this.$f) {
		var d = this.$f[c], e = b && b.J(d.Iw, d.nt) || d.nt;
		e === null || e === undefined || (e = e[r]());
		if (d[J] == 1 || d[J] == 5) {
			var f = a[hz][d.Xa];
			if (f == null) {
				continue;
			}
			Oa(f, e);
			d.He = e;
		} else {
			if (d[J] == 2) {
				var f = a[hz][d.Xa];
				if (f == null) {
					continue;
				}
				if (f[kz]) {
					dK(f, e);
				} else {
					for (var g = 0; g < f[t]; ++g) {
						dK(f[g], e);
					}
				}
				d.He = e;
			} else {
				if (d[J] == 3) {
					for (var c = 0; c < a[hz][t]; c++) {
						var i = a[hz][c];
						if (i[td] == d.Xa) {
							Ka(i, i[B] == e);
							d.He = e;
						}
					}
				} else {
					if (d[J] == 4) {
						var i = a[d.Xa];
						if (i) {
							Ka(i, bi == e);
							d.He = e;
						}
					}
				}
			}
		}
	}
};
NK[z].uh = function (a, b) {
	var c = null;
	for (var d in this.$f) {
		var e = this.$f[d];
		if (!b && e.He === undefined) {
			continue;
		}
		var f = a[e.Xa];
		if ($f && f && f instanceof Node && !f.form) {
			continue;
		}
		var g = null;
		if (e[J] == 1 || e[J] == 5) {
			var i = a[e.Xa];
			if (i == null) {
				continue;
			}
			g = i[B];
		} else {
			if (e[J] == 2) {
				var i = a[e.Xa];
				if (i && i[Oy] >= 0) {
					g = i[ez][i[Oy]][B];
				}
			} else {
				if (e[J] == 3) {
					for (var d = 0; d < a[hz][t]; d++) {
						var j = a[hz][d];
						if (j[td] == e.Xa && j[Jb]) {
							g = j[B];
							break;
						}
					}
				} else {
					if (e[J] == 4) {
						var j = a[e.Xa];
						if (j) {
							g = j[Jb] ? bi : Xk;
						}
					}
				}
			}
		}
		if (!b && e[J] == 1 && typeof g == hf && typeof e.He == hf && wf(g) === wf(e.He)) {
			continue;
		}
		if (g !== (b ? null : e.He)) {
			c || (c = {});
			c[e.Iw] = g;
		}
	}
	return c;
};
NK[z].Mo = function () {
	return {El:false, Rn:null, LL:null};
};
function OK() {
	pj[G](this);
	this.ny = [];
	this.oq = {};
}
N(OK, pj);
af(OK);
function PK(a, b, c) {
	lb(this, a);
	this.DH = b;
	this.VA = c;
}
function QK(a) {
	si[G](this, "settingschange");
	this.Rn = a;
}
N(QK, si);
OK[z].tm = function (a, b, c, d) {
	this.ny[q](a);
	this.oq[a] = new PK(b, c, d);
};
OK[z].qu = function (a) {
	return this.oq[a];
};
OK[z].lE = function () {
	return wi(this.ny, function (a) {
		return this.oq[a][td];
	}, this);
};
OK[z].eF = function (a) {
	if (!a) {
		return;
	}
	var b = ch in a || gh in a || hh in a, c = "locale" in a, d = eh in a || bh in a || "userLoc" in a;
	if (ch in a || bK in a || c || b) {
		om("\u4fdd\u5b58\u8bbe\u7f6e...");
		tm(0);
	} else {
		this[xc](new QK(a));
		d && sy() && uy(true);
	}
};
function RK() {
	return ag ? "\"safari-button\"" : "\"button\"";
}
var SK = new T("<h2 class=\"largeSize\">${title}</h2><table id=stabs><tr>${tabs}</tr></table><div id=sbody><table id=svalues>${body}</table></div>");
var TK = new T("<td ${class}><a ${tab_id} href=\"javascript:void((function(){if (${tabname}!=${activetab}){${command}(${tabname});}})())\">${title}</a></td>"), UK = "<tr class=last><th>\u8054\u7cfb\u4eba\u7535\u5b50\u90ae\u4ef6:</th><td class=halfwidth><form onsubmit=\"" + S(Op) + "(addcalbox.value); return false;\"><input " + (Q ? "autocomplete=off " : M) + "name=addcalbox id=addcalbox size=50 value=\"\" class=text><input id=addcalurlbutton type=submit value=\"\u6dfb\u52a0\" class=" + RK() + "><div style=\"height:90px\" class=desc>\u8f93\u5165\u5176\u4ed6\u4eba\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u4ee5\u67e5\u770b\u4ed6\u4eec\u7684\u65e5\u5386\u3002\u5e76\u4e0d\u662f\u6240\u6709\u8054\u7cfb\u4eba\u90fd\u6709\u65e5\u5386\u4fe1\u606f\u4e0e\u60a8\u5171\u4eab\uff0c\u4f46\u662f\u60a8\u53ef\u4ee5\u9080\u8bf7\u4ed6\u4eec\u521b\u5efa Google \u65e5\u5386\u5e10\u6237\uff0c\u6216\u8005\u4e0e\u60a8\u5171\u4eab\u4ed6\u4eec\u7684\u65e5\u5386\u3002</div></form></td></tr>", VK = new T("<tr class=last><th>\u516c\u5171\u65e5\u5386\u7f51\u5740:</th><td class=halfwidth><form onsubmit=\"${handler};return false;\"><input name=addurlbox id=addurlbox type=text size=50 value=\"\" class=text><input id=addcalurlbutton type=submit value=\"\u6dfb\u52a0\" class=" + RK() + "><div style=\"height:90px\"><div class=desc>\u5982\u679c\u60a8\u77e5\u9053\uff08iCal \u683c\u5f0f\uff09\u65e5\u5386\u7684\u7f51\u5740\uff0c\u53ef\u5728\u6b64\u5904\u8f93\u5165\u6b64\u7f51\u5740\u3002</div><input style=\"margin-left:0px\" id=addcalsearchindex  name=addcalsearchindex type=checkbox><label for=addcalsearchindex style=\"font-size:95%\">\u5141\u8bb8\u5176\u4ed6\u4eba\u901a\u8fc7 Google \u65e5\u5386\u641c\u7d22\u67e5\u627e\u8fd9\u4e00\u516c\u5171\u65e5\u5386\u3002</label></div></form></td></tr>"), WK = "<IFRAME id=uploadframe name=uploadframe align=left marginWidth=0 marginHeight=0 src=\"" + P(um) + "\" frameBorder=0 width=\"100%\" scrolling=auto style=\"height:40ex\"></IFRAME>", XK = "<tr class=last><th colspan=2>" + WK + "</th></tr>", YK;
function ZK() {
	if (!YK) {
		var a = tx();
		YK = [a ? null : "\u641c\u7d22\u516c\u5171\u65e5\u5386", a ? null : window._aF ? "\u6d4f\u89c8\u65e5\u5386" : "\u8282\u5047\u671f\u65e5\u65e5\u5386", "\u670b\u53cb\u7684\u65e5\u5386", "\u901a\u8fc7 URL \u6dfb\u52a0", "\u5bfc\u5165\u65e5\u5386"];
	}
	return YK;
}
function $K(a) {
	if (!$o()) {
		return false;
	}
	if (a == 0 && tx()) {
		$s();
		return;
	}
	ro();
	Mp(function () {
		$K(a);
	}, "\u65e5\u5386\u6dfb\u52a0\u6807\u7b7e " + a, "AddCalendar" + a);
	var b = TK;
	b.b("command", S(R.$d));
	var c = aL(ZK(), a, b), d = null, e = [];
	if (a == 2) {
		e[q](UK);
	} else {
		if (a == 1) {
			window._aF && bL([["aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ", "\u6708\u76f8"], ["YzRvNGk3bTJsYmFtYzRrMjZzYzJ2b2toNWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ", "Google Doodles"]], "\u5a31\u4e50\u65e5\u5386", e, a, true);
			bL(Hw, "\u8282\u5047\u65e5\u65e5\u5386", e, a);
		} else {
			if (a == 0) {
				cL(e);
			} else {
				if (a == 3) {
					var f = VK;
					f.b("handler", Gw.Uf(dL, sf(QJ, "\u8bf7\u68c0\u67e5\u60a8\u7684\u4e92\u8054\u7f51\u8fde\u63a5\u5e76\u91cd\u8bd5\u64cd\u4f5c\u3002")));
					e[q](f[r]());
				} else {
					if (a == 4) {
						e[q](ag ? "<tr class=last><th colspan=2><div id=uploaddiv>&nbsp;</div></th></tr>" : XK);
						d = eL();
					}
				}
			}
		}
	}
	var g = SK;
	g.b(Uu, "\u6dfb\u52a0\u5176\u4ed6\u65e5\u5386");
	g.b("tabs", c);
	g.b("body", e[K](M));
	var i = fL, j = RJ(["<div id=set class=eventborder>"][K](M) + g[r]() + i[r](), "#fad163");
	if (j) {
		if (a == 2) {
			rA("addcalbox");
			Ck().zd("addcalbox", false, false, function (n) {
				Op(n[B]);
			});
		} else {
			if (a == 3) {
				rA("addurlbox");
			} else {
				a == 0 && rA("esfebox");
			}
		}
		Ow = a;
		kq = function () {
			Ck().he("addcalbox");
			Ow = -1;
			return false;
		};
		if (d != null) {
			if (ag) {
				k(W("uploaddiv"), WK);
			}
			var m;
			m = Q ? window[Ld].uploadframe[Ob] : W("uploadframe").contentDocument;
			m[yb]();
			m[Dc](d);
			m[zc]();
		}
	}
	return j;
}
function dL() {
	var a = W("addurlbox"), b = W("addcalsearchindex");
	if (a && b) {
		var c = W("addcalurlbutton");
		if (KJ(a[B], b[Jb]) && c) {
			Ra(a, true);
			Ra(b, true);
			Ra(c, true);
			Oa(c, "\u6b63\u5728\u52a0\u8f7d...");
		}
	}
}
var gL = null;
function hL(a, b, c, d) {
	d[q]("<tr><th valign=top><h3 class=\"normalSize\">", a, "</h3></th><td>");
	iL(b, c, d);
	d[q]("</td></tr>");
}
function iL(a, b, c) {
	for (var d = 0; d < b[t]; d += 2) {
		d > 0 && c[q]("<br>");
		c[q]("<input id=\"", a.Xa, b[d], "\" name=\"", a.Xa, Af);
		a.gh && c[q](" disabled");
		c[q](" type=radio value=\"", b[d], "\"><label for=\"", a.Xa, b[d], wk, b[d + 1], "</label>");
	}
}
function jL(a, b, c, d, e) {
	e[q]("<input id=\"", b.Xa, "\" name=\"", b.Xa, "\" ");
	if (c || b.gh) {
		e[q]("disabled ");
	}
	e[q]("type=checkbox value=false ", d, "><label for=\"", b.Xa, "\"><span>", a, "</span></label>");
}
function kL(a, b) {
	b[q]("<input id=\"", a.Xa, "\" name=\"", a.Xa, "\" type=hidden value=\"\">");
}
function aL(a, b, c) {
	var d = [];
	c.b("activetab", b);
	for (var e = 0; e < a[t]; ++e) {
		if (!a[e]) {
			continue;
		}
		c.b(fk, e == b ? "class=selected" : M);
		c.b("tabname", e);
		c.b(Uu, a[e]);
		c.b("tab_id", "id=\"tab_" + e + Af);
		d[q](c[r]());
	}
	return d[K](M);
}
function lL(a, b) {
	var c = W("prefDispAllTzs")[Jb];
	if (a == 1 && c) {
		return;
	}
	var d = W("prefcountry");
	if (d == null) {
		return;
	}
	var e = d[B], f, g;
	if (b) {
		var i = Un(b);
		f = i.Bk;
		g = i.zk;
	} else {
		f = Eu();
		g = uJ();
	}
	if (c) {
		e = undefined;
	}
	var j = MK(f, g, Sk, e);
	j != null && IK(j);
	j = MK(Du(), NJ(), Sk, e);
	j != null && JK(j);
}
function mL(a, b) {
	var c = TK;
	c.b("command", "_GenSettings");
	var d = OK.f().lE(), e = aL(d, a, c), f = new NK, g = OK.f(), i = g.qu(a);
	i || (i = g.qu(0));
	var j = i.DH(f), m = SK;
	m.b(Uu, "\u65e5\u5386\u8bbe\u7f6e");
	m.b("tabs", e);
	m.b("body", j);
	var n = i.VA() + "</div></form>";
	if (b) {
		kq = null;
	}
	if (RJ("<form name=settingsForm id=settingsForm onsubmit=\"return false;\"><div id=set class=eventborder>" + m[r]() + n, "#fad163")) {
		gL = f;
		kq = function () {
			return nL(false);
		};
		if (a == 0) {
			document[Iy].settingsForm.customModeSelect.onchange = oL;
		}
		var p = W("settingsForm");
		f.ys(p, Uk());
		a == 2 && pL();
	}
}
function oL() {
	var a = W("customModeSelect"), b = a[ez][a[Oy]][B];
	Ha(W("defaultModeSelect")[ez][3], "\u81ea\u5b9a\u4e49\u89c6\u56fe (" + vp(b) + Xj);
}
var qL = "<span onmousedown=\"" + S(uo) + "()\" class=lk><b>" + $d + "</b></span>&nbsp;", fL = new T("<div class=\"buttons eventborder\">" + qL + so), rL = new T("<div class=\"buttons eventborder\">" + qL + "<button id=\"settings_save_btn\" onclick=\"_EV_Blur(this);${click1};\" class=\"button-main\">${b1}</button>&nbsp;<button id=\"settings_cancel_btn\" onclick=\"_EV_Blur(this);${click2};\">\u53d6\u6d88</button></div>");
function nL(a) {
	if (!gL) {
		return false;
	}
	var b = W("settingsForm");
	if (gL.uh(b, false)) {
		if (!yy(kK)) {
			return true;
		}
	}
	gL = null;
	a && uo();
	return false;
}
function Rw(a) {
	var b = W("settingsForm"), c = a || gL.uh(b, false);
	if (!c) {
		uo();
		return;
	}
	sL(c);
	uo();
}
function sL(a) {
	var b = Uk(), c;
	if (Wg in a) {
		c = b.gf(Wg);
	}
	for (var d in a) {
		b.aa(d, a[d]);
	}
	if (Zg in a) {
		wp(a[Zg]);
		eo("custom");
	}
	var e = OK.f();
	b.vc(rf(e.eF, e, a));
	gL = null;
	if (typeof a[Xg] == hf) {
		if (Rs() || cp[J] === 1) {
			ip.Oj = bi == a[Xg];
			ip.Kk(ip.Ef());
			zp = ip.Hk(Ap, false);
		}
	}
	if (typeof a[Wg] == hf) {
		var f = ka(a[Wg], 10);
		xq.Tq(f);
		if (Rs() || cp[J] === 1) {
			ip.dq = f;
			zp = ip.Hk(Ap, false);
		}
	}
	typeof a[ah] == hf && To(Pk(a[ah]));
	typeof a[Yg] == hf && eo(a[Yg]);
	var g = [Wg, Xg, Vg, Ug, ah, bK, $g];
	if (typeof a[Xg] == hf || typeof a[Wg] == hf) {
		Wo = true;
	}
	for (var i = 0; i < g[t]; ++i) {
		if (typeof a[g[i]] == hf) {
			eo();
			break;
		}
	}
}
R.Az = mL;
R.$d = $K;
function tL(a) {
	var b = [], c = a.qa(2, "displayLangSelect", "locale", "xx"), d = [["xx", "\u9009\u62e9\u8bed\u8a00..."]][fc](BK());
	//***********************************tianliang edit
	//***********************************tianliang edit
	//MJ("\u8bed\u8a00:", c, d, b, undefined);
	var e = Uk(), f = e.J(bh, "US"), g = a.qa(2, "prefcountry", bh, "US");
	//***********************************tianliang edit
	//***********************************tianliang edit
	//b[q]("<tr class=last><th><h3 class=\"normalSize\">\u56fd\u5bb6/\u5730\u533a\uff1a</h3></th><td colspan=2>");
	//sJ(g, fK, b, "prefselectlarge", "onchange=\"" + S(lL) + "(1);\"");
	//b[q](" <nobr>" + gK + "</nobr></td></tr>");
	//***********************************tianliang edit
	//***********************************tianliang edit
	//b[q]("<tr class=last><th><h3 class=\"normalSize\">", "\u60a8\u5f53\u524d\u7684\u65f6\u533a\uff1a", "</h3></th><td colspan=2>");
	//var i;
	//if (e.J("dispAllTzs", Xk) != bi) {
	//	i = f;
	//}
	//var j = Eu(), m = a.qa(2, "preftz", ch, "Etc/GMT");
	//***********************************tianliang edit
	//***********************************tianliang edit
	//sJ(m, MK(j, uJ(), Sk, i), b, "prefselectlarge");
	//b[q](" <nobr>");
	//var n = a.qa(4, "prefDispAllTzs", "dispAllTzs", Xk);
	//jL("\u663e\u793a\u6240\u6709\u65f6\u533a", n, m.gh, "onclick=\"" + S(lL) + "(0);\"", b);
	//b[q]("</nobr></td></tr>");
	if (aa) {
		var p = a.qa(5, "hasSecondaryTz", hh, Xk);
		kL(p, b);
		b[q]("<tr><th></th><td colspan=2 id=\"secondaryTzInput\" ", "name=\"secondaryTzInput\">");
		b[q](uL(Fu(), a, i));
		b[q]("</td></tr>");
	}
	var s = R.U.xa().B, u = ["MDY", xe("12", "31", s), "DMY", ve("31", "12", s), "YMD", s + "-12-31"], v = a.qa(2, Ug, Ug, "MDY");
	MJ("\u65e5\u671f\u683c\u5f0f\uff1a", v, u, b, undefined);
	var w = [Xk, Me(13, 0), bi, Le(13, 0)], x = a.qa(2, Vg, Vg, Pk(Xk));
	MJ("\u65f6\u95f4\u683c\u5f0f\uff1a", x, w, b, undefined);
	var y = [Je, kl[0], mt, kl[1], "6", kl[6]], C = a.qa(2, Wg, Wg, oa(Je));
	MJ("\u5468\u5f00\u59cb\u4e8e\uff1a", C, y, b, undefined);
	var D = a.qa(3, Xg, Xg, Pk(Xk));
	hL("\u663e\u793a\u5468\u672b\uff1a", D, [Xk, Xd, bi, Yd], b);
	var L = [gl[0], "\u65e5", gl[1], "\u5468", gl[2], "\u6708\u4efd", gl[5], "\u81ea\u5b9a\u4e49\u89c6\u56fe (" + vp() + Xj, gl[3], "\u65e5\u7a0b"], O = a.qa(2, "defaultModeSelect", Yg, "week");
	MJ("\u9ed8\u8ba4\u89c6\u56fe\uff1a", O, L, b, undefined);
	var ba = a.qa(2, "customModeSelect", Zg, ih);
	MJ("\u81ea\u5b9a\u4e49\u89c6\u56fe\uff1a", ba, qp, b, undefined);
	var ea = a.qa(3, $g, $g, Pk(bi));
	hL("\u663e\u793a\u5f53\u524d\u65f6\u95f4\uff1a", ea, [bi, Xd, Xk, Yd], b);
			//***********************************tianliang edit
		//***********************************tianliang edit
	//if (window._aF && _SE_weatherOn) {
		//***********************************tianliang edit
		//***********************************tianliang edit
		//b[q]("<tr><th valign=top><h3 class=\"normalSize\">\u5730\u533a:</h3></th><td colspan=2><input name=location size=25>&nbsp;<nobr style=\"color:#663\">&nbsp;\u4f8b\u5982\uff0c<b>\u65b0\u6cfd\u897f\u5dde\u4e1c\u5e03\u6717\u65af\u7ef4\u514b</b>\u6216 <b>08816</b></nobr></td></tr>");
		//a.qa(1, "location", "userLoc", M);
		//b[q]("<tr><th valign=top><h3 class=\"normalSize\">\u6839\u636e\u73b0\u5728\u4f4d\u7f6e\u663e\u793a\u5929\u6c14:</h3></th><td>");
		//var ta = a.qa(3, eh, eh, M);
		//iL(ta, [M, "&nbsp;&nbsp;\u4e0d\u663e\u793a\u5929\u6c14", "C", "&nbsp;&nbsp;" + R.ea.Dt("&deg;C"), "F", "&nbsp;&nbsp;" + R.ea.Dt("&deg;F")], b);
		//b[q]("</td></tr>");
	//}
	var V = a.qa(3, ah, ah, bi);
	b[q]("<tr><th valign=top><h3 class=\"normalSize\">\u663e\u793a\u5df2\u62d2\u7edd\u6d3b\u52a8\uff1a</h3></th><td>");
	iL(V, [bi, Xd, Xk, Yd], b);
	b[q]("</td></tr>");
	var Aa = a.qa(3, bK, bK, Xk);
			//***********************************tianliang edit
		//***********************************tianliang edit
	//b[q]("<tr><th valign=top>\u81ea\u52a8\u5728\u5411\u6211\u7684\u65e5\u5386\u6dfb\u52a0\u9080\u8bf7\uff1a</th><td>");
	//iL(Aa, [Xk, Xd, bi, "&nbsp;&nbsp;&nbsp;\u4e0d\uff0c\u4ec5\u663e\u793a\u6211\u5df2\u56de\u590d\u7684\u9080\u8bf7"], b);
	//b[q]("</td></tr>");
	//ql() ? b[q]("<tr><th valign=top><h3 class=\"normalSize\">\u66f4\u6539\u5bc6\u7801\uff1a</h3></th><td>", "\u7528\u6b64\u94fe\u63a5" + ("<a href=\"" + _ASP_getChangePasswordUrl() + wk) + "\u66f4\u6539\u5bc6\u7801</a>\u91cd\u65b0\u8bbe\u7f6e\u60a8\u7684\u5bc6\u7801\u3002", "</td></tr>") : b[q]("<tr><th valign=top><h3 class=\"normalSize\">Google \u5e10\u6237\u8bbe\u7f6e\uff1a</h3></th><td>", "\u8bf7\u8bbf\u95ee\u60a8\u7684 " + ("<a href=\"" + _getChangePasswordUrl() + "\" target=_blank>") + "Google \u5e10\u6237\u8bbe\u7f6e</a>\u91cd\u7f6e\u5bc6\u7801\uff0c\u66f4\u6539\u5b89\u5168\u63d0\u793a\u95ee\u9898\uff0c\u6216\u4e86\u89e3\u5982\u4f55\u8bbf\u95ee\u5176\u4ed6 Google \u670d\u52a1", "</td></tr>");
	//b[q]("<tr class=last><td colspan=2 style=\"text-align:center;padding-top:3em\">&copy;2008 Google - <a href=\"http://www.google.com/intl/zh_CN/googlecalendar/privacy_policy.html \">\u9690\u79c1\u653f\u7b56</a></td></tr>");
	return b[K](M);
}
function uL(a, b, c) {
	var d = [];
	if (a) {
		d[q]("<b>", "\u5176\u4ed6\u65f6\u533a", "</b><br/>");
		var e = Du(), f = b.qa(2, "secondtz", gh, M);
		sJ(f, MK(e, NJ(), Sk, c), d, "prefselectlarge", undefined, e);
		b.am("secondtz", e);
		d[q]("<span class=lk-online onmousedown=\"", Gw.Uf(sf(vL, false)), "\">\u79fb\u9664</span>");
	} else {
		d[q]("<span class=lk-online onmousedown=\"", Gw.Uf(sf(vL, true)), "\">\u663e\u793a\u5176\u4ed6\u65f6\u533a</span></b>");
		b.oI("secondtz");
	}
	return d[K](M);
}
function vL(a) {
	var b = W("prefcountry");
	if (b == null) {
		return;
	}
	var c = b[B];
	if (W("prefDispAllTzs")[Jb]) {
		c = undefined;
	}
	var d = W("secondaryTzInput");
	if (d == null) {
		return;
	}
	var e = W("hasSecondaryTz");
	if (e == null) {
		return;
	}
	k(d, uL(a, gL, c));
	Oa(e, a ? bi : Xk);
}
function wL() {
	Kk.f().$b && xL();
	var a = [];
	Y.f()[bd](function (d) {
		a[q](d);
	});
	a[gd](Xn);
	var b = [];
	b[q]("<tr><th><h3 class=\"normalSize\">\u6211\u7684\u65e5\u5386</h3><table class=rows><thead><tr><th>\u65e5\u5386</th><th>\u5171\u4eab</th><th></th><th>&nbsp;</th><th>&nbsp;</th></tr></thead>");
	for (var c = 0; c < a[t]; ++c) {
		2 == a[c][J] && yL(a[c], b);
	}
	//in calendar config page ,no show "export my calendar" item
	//b[q]("<tr class=last><td colspan=4 style=\"padding: 0\">", "<table style=\"margin: 0\"><tr><td>", "<input onclick=\"", S(Cw), "();", "\" class=", RK(), " type=button value=\"\u521b\u5efa\u65b0\u65e5\u5386\" id=\"create_cal_btn\"></td>", "<td><a href=\"exporticalzip\"></a><br/></tr></table></td></tr>", "</table></th></tr>");
	//show the item
	b[q]("<tr class=last><td colspan=4 style=\"padding: 0\">", "<table style=\"margin: 0\"><tr><td>", "<input onclick=\"", S(Cw), "();", "\" class=", RK(), " type=button value=\"\u521b\u5efa\u65b0\u65e5\u5386\" id=\"create_cal_btn\"></td>", "<td><a href=\"exporticalzip\">\u5bfc\u51fa\u6211\u7684\u65e5\u5386</a><br/>\u4e0b\u8f7d\u5305\u542b .ics \u683c\u5f0f\u7684\u6bcf\u4e2a\u65e5\u5386\u7684\u538b\u7f29\u6587\u4ef6\u3002</tr></table></td></tr>", "</table></th></tr>");
	b[q]("<tr class=last><th><h3 class=\"normalSize\">\u5176\u4ed6\u65e5\u5386</h3><table class=rows><thead><tr><th>\u65e5\u5386</th><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead>");
	for (var c = 0; c < a[t]; ++c) {
		if (1 == a[c][J] || 0 == a[c][J]) {
			yL(a[c], b);
		}
	}
	b[q]("<tr class=last><td colspan=3><input onclick=\"", S(R.$d), Vj, 0, ");", "\" class=" + RK() + " type=button value=\"\u6dfb\u52a0\u65e5\u5386\" id=\"add_cal_btn\"></td></tr></table></th></tr>");
	return b[K](M);
}
function zL(a, b, c, d) {
	var e = [];
	e[q]("<a href=# ", AL(BL, [a, 0], false, d), zf, P(b), "</a>");
	c && c.wc && e[q]("<div class=caldesc>", P(c.wc), so);
	return e[K](M);
}
function AL(a, b, c, d) {
	if (d) {
		return M;
	}
	if (c) {
		b[Gd](a, null);
		a = rf[md](null, b);
		return ["onclick=\"", Gw.Uf(a), Af][K](M);
	} else {
		return ["onclick=\"", S(a), Vj, P(wi(b, TJ)[K]()), ");\""][K](M);
	}
}
function yL(a, b) {
	var c = a.id, d = Un(c), e = d && d.ua ? d.ua : a[td], f = a[J], g = null, i = !d && !Kk.f().$b, j = Y.f().$(c).Ja, m;
	if (j) {
		m = "\u663e\u793a";
		g = "listhidden";
	} else {
		m = "\u9690\u85cf";
	}
	if (i) {
		g = "listdisable";
	}
	b[q]("<tr" + (g ? " class=\"" + g + Af : M) + zf, "<td class=calname>", zL(c, e, d, i), Cr);
	if (f == 2) {
		var n, p;
		if (d && (d.Th > 0 || PJ(d.Hf))) {
			n = "shared";
			p = "\u5171\u4eab\uff1a\u4fee\u6539\u8bbe\u7f6e";
		} else {
			n = "notshared";
			p = "\u5171\u4eab\u6b64\u65e5\u5386";
		}
		b[q]("<td><a class=\"", n, "\" href=# ", AL(BL, [c, 1], j, i), zf, p, "</a></td>");
	}
	b[q]("<td class=link>");
	if (_SE_vcalNotificationsOn || !(d && d.Fk)) {
		//in calendar config page , no show "inform" Link
		b[q]("<a href=\"#\" ", AL(BL, [c, 2], false, i), "><nobr></nobr></a>");
		//show the link
		//b[q]("<a href=\"#\" ", AL(BL, [c, 2], false, i), "><nobr>\u901a\u77e5</nobr></a>");
	}
	b[q](Cr);
	b[q]("<td class=link>");
	if (c != Yn || j) {
		b[q]("<span class=\"" + (i ? "listdisable" : "lk") + "\" ", AL(CL, [c], false, i), "><nobr>", m, "</nobr></span>");
	}
	b[q]("</td><td class=link>");
	b[q]("<a href=\"#\" ", AL(DL, [c], true, false), "><img height=10 src=\"images/icon_delete.gif\" width=9></a>");
	b[q]("</td></tr>");
}
function CL(a) {
	Y.f().Tm(a);
	fo(1);
	eo();
}
function DL(a) {
	Y.f().vq(a);
	eo();
}
function xL() {
	var a = EL();
	Vn(a, function () {
		pa(function () {
			FL(a);
		}, 0);
	});
}
function EL() {
	var a = [];
	Y.f()[bd](function (b) {
		var c = Un(b.id);
		c && c.ua || a[q](b.id);
	});
	return a;
}
function FL(a) {
	for (var b = 0; b < a[t]; b++) {
		var c = a[b], d = Un(c);
		if (d && d.ua) {
			var e = document[$b](c);
			if (e) {
				k(e, zL(c, d.ua, d, false));
			}
		}
	}
}
var GL = "se-prompt-add-cal-", IL = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"><html><head><style>.lk, a.lk, a.lk:visited, a.lk:hover, a.lk:active {color: #112ABB;text-decoration: underline;cursor: pointer;cursor: hand;white-space: nowrap}th{" + R.ea.$k("padding", "8px", "8px", "20px", Je) + ";vertical-align:top;text-align:left;width:25%}.desc {display:block;font-size:95%;line-height:1.3em;color:#663}body {margin:0;padding:0;font:small/1.2em Arial,Sans-serif}* html body {font-size:x-small;f\\ont-size:small}table {font-size:95%;border-collapse:collapse;line-height:1.3em}* html table {font-size:80%}</style></head><body bgcolor=fff7d7 class=\"" + HL(He) + "\"><form enctype=\"multipart/form-data\" action=\"upload_event\" method=post onsubmit=\"window.parent." + S(eo) + "();\"><input type=hidden name=\"hl\" value=\"" + He + "\"><table><th>\u7b2c 1 \u6b65\uff1a\u9009\u62e9\u6587\u4ef6" + R.M.eu(34573, "\u4e86\u89e3\u8be6\u60c5", "lk", "font-weight:normal", "<br/>") + "</th><td width=75%><input type=file value=IcalFile name=\"filename\" size=30><div class=desc>" + R.ea.xE("\u9009\u62e9\u5305\u542b\u60a8\u7684\u6d3b\u52a8\u7684\u6587\u4ef6\u3002Google \u65e5\u5386\u53ef\u4ee5\u5bfc\u5165 iCal \u6216 CSV (MS Outlook) \u683c\u5f0f\u7684\u6d3b\u52a8\u4fe1\u606f\u3002") + "</div></td></tr><tr><td>&nbsp;</td></tr>", JL = null;
function KL(a) {
	var b = [];
	b[q]("<tr class=last><th><span id=smsTitleMessage>", LL(ML()), "</span><div class=desc><span id=smsTitleMessageDesc>", NL(ML()), "</span></div></th><td class=hastable>");
	var c;
	c = Qw() ? "<strong class=success><span id=smsCodeVerified>" + OL() + "</span></strong><em class=desc><span id=smsCodeVerifiedDesc>" + PL() + "</span></em></td>" : "<strong class=error>\u7981\u7528\u7535\u8bdd\u901a\u77e5\u3002</strong><em class=desc>\u8981\u542f\u7528\u79fb\u52a8\u901a\u77e5\uff0c\u8bf7\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f\u3002</em>";
	b[q]("<table class=rows><tr><th class=nobr><h3 class=\"normalSize\">\u72b6\u6001\uff1a</h3>" + R.M.jg(37172, "\u4e3a\u4ec0\u4e48\u6211\u4ecd\u672a\u6536\u5230\u9a8c\u8bc1\u4ee3\u7801\uff1f", "lk", "font-weight:normal"), "</th><td>", c, "</td></tr>");
	b[q]("<tr><th class=nobr><h3 class=\"normalSize\">\u56fd\u5bb6/\u5730\u533a\uff1a</h3></th><td>");
	Uk();
	var d = QL(), e = RL(fK), f = a.qa(2, aK, aK, d);
	sJ(f, e, b, "prefselect", "onchange=\"" + S(SL) + "();\"", d);
	b[q]("</td></tr>");
	a.am(aK, M);
	b[q]("<tr><th><span id=deviceAddressMessage class=nobr><h3 class=\"normalSize\">" + TL(ML()) + "</h3></span></th>");
	b[q]("<td><input size=20 class=text id=\"" + $J + "\" name=\"" + $J + "\" onclick=\"" + S(UL) + "();\"></td></tr>");
	a.qa(1, $J, $J, M);
	a.qa(2, ZJ, ZJ, "NONE");
	b[q]("<tr><th><span id=smsCarrierMessage class=nobr><h3 class=\"normalSize\">" + VL(ML()) + "</h3></span>", R.M.jg(37226, "\u652f\u6301\u54ea\u4e9b\u8fd0\u8425\u5546\uff1f", "lk", "font-weight:normal", null, null, 2), "</th><td><span id=\"" + ZJ + "-parent\">", WL(d), mg);
	b[q]("&nbsp;&nbsp;<button id=send_sms_button disabled onclick=\"" + S(XL) + "();" + S(YL) + "(); return false;\">\u53d1\u9001\u9a8c\u8bc1\u4ee3\u7801</button></td></tr><tr class=last><th class=nobr><h3 class=\"normalSize\">\u9a8c\u8bc1\u4ee3\u7801\uff1a</br><span class=\"desc\">\u8bf7\u8f93\u5165\u8981\u53d1\u9001\u5230\u60a8\u7684\u7535\u8bdd\u7684\u9a8c\u8bc1\u4ee3\u7801</span></h3></th><td><input size=20 class=text id=\"" + YJ + "\" name=\"", YJ + "\" onclick=\"" + S(ZL) + "();\" >");
	a.qa(1, YJ, YJ, M);
	b[q]("&nbsp;&nbsp;<button id=\"check_sms_button\" onclick=\"" + S($L) + "();return false;\" disabled>\u5b8c\u6210\u8bbe\u7f6e</button></td></tr></table></td></tr>");
	b[q]("<tr class=\"last\"><th>", R.M.EK(ql(), "\u670d\u52a1\u6761\u6b3e", "lk", "font-weight:normal", "<br>"), "</th></tr>");
	return b[K](M);
}
function eL() {
	var a = [IL];
	a[q]("<tr><th>\u7b2c 2 \u6b65\uff1a\u9009\u62e9\u65e5\u5386</th><td>", LJ(Lx, Yn), "<br><div class=desc>\u9009\u62e9\u4fdd\u5b58\u8fd9\u4e9b\u6d3b\u52a8\u7684\u65e5\u5386\u3002</div></td></tr><tr><td>&nbsp;", "<input type=hidden name=ctz value=\"", P(Hn()), wk);
	var b = Kj();
	for (var c = 0; c < b[t]; ++c) {
		a[q]("<input type=hidden name=lef value=\"", P(b[c]), wk);
	}
	a[q]("<input type=hidden name=", "droi", " value=\"", P(WJ(Jj())), wk);
	a[q]("<input type=hidden name=\"", "secid", "\" value=\"", P(Ql("secid")), wk);
	a[q]("</td></tr><tr><th>", "\u7b2c 3 \u6b65\uff1a\u5b8c\u6210\u5bfc\u5165", "</th><td><input type=submit value=\"", "\u5bfc\u5165", Af);
	a[q]("></td></tr></table></form></body></html>");
	return a[K](M);
}
function aM(a, b, c) {
	b = b || M;
	Kk.f().Qb(Lg, ["invEmail", a, "invMsg", b, "invAction", c, "hl", Sk]);
}
function bM(a) {
	no(Hw[a][0], false);
	eo();
}
var cM = new T("<div>\u7b2c<strong>${start}</strong>-<strong>${end}</strong> \u4e2a\uff0c\u5171\u6709 <strong>${total}</strong> \u4e2a\u65e5\u5386\u4e0e\"<strong>${query}</strong>\"\u76f8\u5339\u914d</div>", true), dM = new T("<div class=resultsnav>${prevTag}&laquo; \u4e0a\u4e00\u4e2a${prevTagEnd} | ${nextTag}\u4e0b\u4e00\u9875 &raquo;${nextTagEnd}</div>"), eM = new T("<a onclick=\"_SE_esfeSearch(${query}, ${start})\" class=\"${class}\">"), fM = new T("<div class=calsnippet>${snippet}</div>"), gM = new T("<a class=lk-online onclick=\"${onclick}" + S(R.$d) + "(${tabname});\">\u79fb\u9664</a>"), hM = new T("<table class=rows><thead><tr><th>\u65e5\u5386</th><th>&nbsp;</th></tr></thead><tbody>${rows}</tbody></table>"), iM = new T("<tr${row_class}><th>${header}:</th><td${data_class}>${body}</td></tr>"), jM = new T("<form onsubmit=\"_SE_esfeSearch(this.elements.esfebox.value, 0);return false;\"><input name=esfebox id=esfebox size=50 value=\"${query}\" class=text><input type=submit value=\"\u641c\u7d22\" class=" + RK() + "><div class=desc>\u641c\u7d22\u516c\u5171\u65e5\u5386\u4fe1\u606f\uff0c\u60a8\u80fd\u968f\u65f6\u83b7\u5f97\u6700\u559c\u7231\u7684\u7403\u961f\u3001\u4e50\u961f\u6216\u4ff1\u4e50\u90e8\u7684\u6700\u65b0\u4fe1\u606f\u3002</div></form>");
function kM() {
	var a = Ew;
	if (!Ew) {
		return "<tr class=last><th style=\"height:55px\">&nbsp;</th></tr>";
	}
	var b = [];
	if (a[t] == 0) {
		b[q]("<tr class=last><th colspan=2><blockquote><br>" + ("\u672a\u53d1\u73b0\u4e0e\"" + ("<b>" + P(Fw) + "</b>") + "\"\u76f8\u5339\u914d\u7684\u65e5\u5386") + (qg + ("\u5982\u679c\u60a8\u95f2\u7740\u6ca1\u4e8b\uff0c\u53ef\u4ee5\u8bd5\u7740\u8bbf\u95ee " + ("<span class=lk onclick=\"window.open(" + S(JJ) + Vj + S(OJ) + "()));return false;\">Google \u8d44\u8baf</span>") + " \u6765\u6d88\u9063\u4e00\u4e0b\u3002")) + "</blockquote></th>");
		return b[K](M);
	}
	var c = [], d = [], e = cM;
	e.b("start", Kw + 1);
	e.b("end", Kw + a[t]);
	e.b("total", Lw);
	e.b("query", Fw);
	c[q](e[r]());
	for (var f = 0; f < a[t]; ++f) {
		var g = a[f], i = g[0], j = g[1], m = g[2], n = g[3], p = j;
		if (!p && !!m && !/\/calendar(?:\/(?:hosted|a)\/[^\/]+)?\/embed/[zb](m) && m[I](0, 7) != "mailto:") {
			p = m;
		}
		if (!p) {
			continue;
		}
		var s = lM(p), u = mM;
		u.b("added", s == 2 ? " added" : M);
		u.b(Bg, i);
		var v = [];
		for (var w = 0; w < n[t]; ++w) {
			var x = fM;
			x.b("snippet", R.ea.fl(n[w]));
			v[q](x[r]());
		}
		if (g[t] > 4) {
			v[q]("<div class=matchingeventsheader>", "\u6b64\u65e5\u5386\u4e0a\u5339\u914d\u7684\u6d3b\u52a8\uff1a", so);
			for (var y = 0; y < g[4][t]; ++y) {
				var C = g[4][y], D = C[2];
				v[q]("<div class=eventheader>", C[0], " : ", R.ea.fl(C[1]), so);
				if (D != null) {
					var n = D[K](M);
					v[q]("<div class=eventsnippet>", R.ea.fl(n), so);
				}
			}
		}
		var L = p;
		if (L[t] > 40) {
			L = L[I](0, 40) + "...";
		}
		v[q]("<div><a href=\"embed?src=", ia(mJ(j)), "&ctz=", ia(Hn()), "\" target=\"_blank\">\u9884\u89c8</a></div>");
		u.b("descs", v[K](M));
		var O;
		if (s == 2) {
			var ba = gM;
			ba.b(Pv, S(nM) + Vj + vg(p) + ");");
			ba.b("tabname", 0);
			O = ba[r]();
		} else {
			var ea = oM;
			if (s == 0) {
				ea.b("text", "\u6dfb\u52a0\u65e5\u5386");
				ea.b("disabled", M);
			} else {
				ea.b("text", "\u6b63\u5728\u52a0\u8f7d...");
				ea.b("disabled", "disabled='true'");
			}
			ea.b(Pv, S(KJ) + Vj + vg(p) + ", false);");
			O = ea[r]();
		}
		u.b("action", O);
		d[q](u[r]());
	}
	var ta = hM;
	ta.b("rows", d[K](M));
	var V = iM;
	V.b("row_class", " class=\"last\"");
	V.b("header", "\u7ed3\u679c");
	V.b("data_class", M);
	c[q](ta[r]());
	var Aa = Kw, Ma = Aa > 0, Pa = Aa + 10 < Lw && Aa + 10 < 500;
	if (Ma || Pa) {
		var Ea = dM;
		if (Ma) {
			var Ga = eM;
			Ga.b("query", vg(Fw));
			Ga.b("start", Aa - 10);
			Ga.b(fk, "prev");
			Ea.b("prevTag", Ga[r]());
			Ea.b("prevTagEnd", "</a>");
		} else {
			Ea.b("prevTag", "<span class=prev>");
			Ea.b("prevTagEnd", mg);
		}
		if (Pa) {
			var Fb = eM;
			Fb.b("query", vg(Fw));
			Fb.b("start", Aa + 10);
			Fb.b(fk, "next");
			Ea.b("nextTag", Fb[r]());
			Ea.b("nextTagEnd", "</a>");
		} else {
			Ea.b("nextTag", "<span class=next>");
			Ea.b("nextTagEnd", mg);
		}
		c[q](Ea[r]());
	}
	V.b("body", c[K](M));
	return V[r]();
}
function nM(a) {
	var b = null;
	b = mJ(a) != null ? wJ(a) : vJ(a);
	b && Y.f().vq(b);
}
function pM(a) {
	Y.f().vq(a);
}
var oM = new T("<input type=button value=\"${text}\" class=" + RK() + "${disabled} onclick=\"this.value=" + vg("\u6b63\u5728\u52a0\u8f7d...") + "; this.disabled='true'; ${onclick}\">"), qM = new T("<div class=caldesc>${desc}</div>"), mM = new T("<tr class=\"other${added}\"><td><div class=calname><span>${name}</span></div>${descs}</td><td class=\"icon nobr\">${action}</td></tr>");
function bL(a, b, c, d, e) {
	var f = [], g = mM;
	for (var i = 0; i < a[t]; i++) {
		var j = a[i], m = j[0], n = j[1], p = Y.f()[ld](m) && !Y.f().$(m).Ja, s;
		if (p) {
			var u = gM;
			u.b(Pv, S(pM) + Vj + vg(m) + ");");
			u.b("tabname", d);
			s = u[r]();
		} else {
			var v = oM;
			v.b("text", "\u6dfb\u52a0\u65e5\u5386");
			v.b("disabled", M);
			var w = e ? S(no) + Vj + vg(m) + ",false);" + S(eo) + "()" : S(bM) + Vj + i + Xj;
			v.b(Pv, w + ";");
			s = v[r]();
		}
		g.b("added", p ? " added" : M);
		g.b(Bg, n);
		var x = qM;
		x.b("desc", n);
		g.b("descs", x[r]());
		g.b("action", s);
		f[q](g[r]());
	}
	var y = hM;
	y.b("rows", f[K](M));
	var C = iM;
	C.b("row_class", " class=\"last\"");
	C.b("header", b);
	C.b("data_class", " class=\"hastable\"");
	C.b("body", y[r]());
	c[q](C[r]());
}
function rM(a, b) {
	if (!R.$d(2)) {
		return;
	}
	var c = W("sbody");
	if (Mg != b && cK != b) {
		b = Mg;
	}
	var d = {};
	d[Mg] = "\u9080\u8bf7\u4ed6\u4eba";
	d[cK] = "\u8bf7\u6c42\u8bbf\u95ee";
	var e = {};
	e[Mg] = P(a) + " \u6ca1\u6709 Google \u65e5\u5386\u5e10\u6237";
	e[cK] = "\u60a8\u65e0\u6743\u8bbf\u95ee " + P(a) + " \u7684\u65e5\u5386";
	var f = {};
	f[Mg] = "\u952e\u5165\u7b80\u77ed\u8baf\u606f\uff0c\u9080\u8bf7\u6b64\u7528\u6237\u4f7f\u7528 Google \u65e5\u5386\u3002";
	f[cK] = "\u952e\u5165\u7b80\u77ed\u8baf\u606f\u6765\u8bf7\u6c42\u5bf9\u6b64\u65e5\u5386\u7684\u8bbf\u95ee\u6743\u3002";
	var g = {};
	g[Mg] = "\u4e3a\u9080\u8bf7\u52a0\u6ce8\uff08\u53ef\u9009\uff09\uff1a";
	g[cK] = "\u4e3a\u8bf7\u6c42\u52a0\u6ce8\uff08\u53ef\u9009\uff09\uff1a";
	var i = {};
	i[Mg] = "\u6211\u5df2\u7ecf\u5728\u4f7f\u7528 Google \u65e5\u5386\u7ec4\u7ec7\u6211\u7684\u65e5\u5386\uff0c\u67e5\u627e\u6709\u8da3\u7684\u6d3b\u52a8\uff0c\u5e76\u4e0e\u670b\u53cb\u548c\u5bb6\u4eba\u5171\u4eab\u6211\u7684\u65e5\u7a0b\u3002\u6211\u60f3\u60a8\u53ef\u80fd\u4e5f\u4f1a\u60f3\u5c1d\u8bd5 Google \u65e5\u5386\u3002";
	i[cK] = "\u6211\u5728\u4f7f\u7528 Google \u65e5\u5386\u6765\u5b89\u6392\u6211\u7684\u65f6\u95f4\uff0c\u67e5\u627e\u6709\u8da3\u7684\u6d3b\u52a8\uff0c\u5e76\u4e0e\u670b\u53cb\u548c\u5bb6\u4eba\u5171\u4eab\u6211\u7684\u65e5\u7a0b\u3002\u6211\u5e0c\u671b\u80fd\u591f\u67e5\u770b\u60a8\u7684\u65e5\u5386\uff0c\u4ee5\u4fbf\u6211\u4eec\u4e00\u8d77\u8f7b\u677e\u6709\u6548\u5730\u5b89\u6392\u65f6\u95f4\u3002";
	var j = {};
	j[Mg] = "\u53d1\u9001\u9080\u8bf7";
	j[cK] = "\u53d1\u9001\u7533\u8bf7";
	var m = "<tr><td height=4></td></tr><tr><td style=\"background:#fad163; padding:0\" height=2></td></tr><tr><td height=4></td></tr>", n = ["<table cellpadding=0 cellspacing=0 width=\"100%\">", m];
	n[q]("</table><b style=\"padding-left:8px\">", d[b], "</b><br>", "<form onsubmit=\"", S(aM), Vj, vg(a), ", calinvitemsg.value, ", vg(b), "); return false;\">", "<table cellpadding=0 cellspacing=2 width=\"100%\">", "<tr><td width=\"4%\"></td><td colspan=2><br></td></tr>", "<tr><td width=\"4%\"></td><td colspan=2>", "<b>", e[b], "</b><br>", f[b], "<br><br></td></tr>", "<tr><td width=\"4%\"></td><td colspan=2>", "<table cellpadding=0 cellspacing=0 width=\"100%\">");
	n[q](m, "</table></td></tr>", "<tr><td width=\"4%\"></td><td colspan=2><br></td></tr><tr><td width=\"4%\"></td><td colspan=2>", g[b], "<br><textarea name=calinvitemsg id=calinvitemsg rows=5 cols=50>", i[b], "</textarea></td></tr><tr><td width=\"4%\"></td><td colspan=2><input value=\"", j[b], "\" type=\"submit\" style=\"font-family:Arial\"></td></tr>", "</table><br></form>");
	var p = W("invitebody");
	if (p) {
		k(p, n[K](M));
	} else {
		c.innerHTML += "<span id=invitebody>" + n[K](M) + mg;
	}
	Oa(W("addcalbox"), a);
	var s = W("calinvitemsg");
	if (s) {
		s[B] && s[B][t] && Nz(window, s, s[B][t]);
		s[Wc]();
	}
}
function cL(a) {
	var b = iM, c = [];
	b.b("row_class", !!Ew ? M : " class=\"last\"");
	b.b("header", "\u641c\u7d22\u6761\u4ef6");
	b.b("data_class", " class=\"halfwidth\"");
	var d = jM;
	d.b("query", P(Fw));
	c[q](d[r]());
	b.b("body", c[K](M));
	a[q](b[r]());
	a[q](kM());
}
function sM(a, b) {
	switch (b[oz]()) {
	  case "JP":
		return eK(Dz(a));
	  default:
		var c = a[A](/[^-\(\)\+\d\s]+/g, M);
		return c === M ? undefined : c;
	}
}
function tM() {
	var a = Uk().J("smsSentFlag", Xk);
	return Pk(a);
}
function XL() {
	var a = W($J)[B], b = W(aK)[B], c = sM(a, b);
	if (c == undefined || c == null) {
		return;
	}
	c != a && uM();
	Oa(W($J), c);
}
function uM() {
	var a = Uk();
	a.aa(dh, Xk, false);
	a.vc();
}
function YL() {
	var a = vM();
	a[q]("smss", bi);
	Kk.f().Qb(Hg, a);
}
function $L() {
	var a = vM();
	a[q]("smsv", bi);
	Kk.f().Qb(Hg, a);
}
function pL() {
	var a = W("send_sms_button");
	if (a !== null) {
		Ra(a, Qw());
	}
	var b = W("check_sms_button");
	if (b !== null) {
		Ra(b, !tM());
	}
	var c = W(ZJ);
	if (c !== null) {
		var d = c[Oy];
		if (!d || d < 0 || d >= c[ez][t]) {
			By(c, 0);
		}
	}
}
function UL() {
	var a = W("send_sms_button");
	if (a) {
		Ra(a, M);
	}
}
function ZL() {
	var a = W("check_sms_button");
	if (a) {
		Ra(a, M);
	}
}
var wM = new T("<table width=100% cellpadding=2 cellspacing=0 border=0>${addRows}</table>"), xM = new T("<tr><td align=left><b>${name}</b></td><td align=right><div id=${id} style=\"width:16em\"><button onclick=\"${onclick}\">${add}</button></div></td></tr>"), yM = new T("<tr><td align=left><b>${name}</b><br/>${message}</td><td align=right><div id=${id} style=\"width:16em\"><button onclick=\"${onclick}\">${add}</button></div></td></tr>");
function zM(a) {
	var b = W(a);
	if (b) {
		k(b, "<button disabled=true>" + Yz() + "</button>");
	}
}
function AM(a, b, c) {
	KJ(b, c);
	zM(a);
}
function BM(a, b, c) {
	no(b, false, c);
	zM(a);
}
function CM() {
	if (!JL || JL[t] <= 0) {
		return;
	}
	var a = JL[t];
	for (var b = 0; b < a; ++b) {
		var c = JL[b], d = GL + b;
		c.Ap ? AM(d, c.id, c.Rp) : BM(d, c.id, c.Nd);
	}
	zM(GL + a);
	JL = null;
}
function DM() {
	return function () {
		JL = null;
	};
}
function EM(a) {
	if (!a || a[t] <= 0) {
		return;
	}
	var b = a[t];
	if (1 == b) {
		var c = a[0], d;
		if (c.Nd) {
			var e = c.Nd[E](Ke);
			d = "\u60a8\u8981\u8f6c\u8ba9" + P(c.Nd[I](0, e)) + "\u7684\u8bbf\u95ee\u6743\u5e76\u6dfb\u52a0\u65e5\u5386\u5417\uff1a" + P(c.ua);
		} else {
			d = "\u60a8\u8981\u6dfb\u52a0\u65e5\u5386\uff1a" + P(c.ua) + "\uff1f";
		}
		$n(function (n) {
			switch (n) {
			  case 0:
				c.Ap === 1 ? KJ(c.id, c.Rp !== 0) : no(c.id, false, c.Nd);
				break;
			  case -1:
			  case 1:
				break;
			}
			return false;
		}, "\u60a8\u8981\u6dfb\u52a0\u6b64\u65e5\u5386\u5417\uff1f", d, [Zn("\u662f\uff0c\u6dfb\u52a0\u6b64\u65e5\u5386"), Zn("\u4e0d\uff0c\u4e0d\u6dfb\u52a0\u6b64\u65e5\u5386")]);
		return;
	}
	var f = [];
	for (var e = 0; e < b; ++e) {
		var c = a[e], g = null;
		if (c.Nd) {
			var e = c.Nd[E](Ke);
			g = yM;
			g.b("message", "\u5c06\u4ece " + P(c.Nd[I](0, e)) + " \u8f6c\u8ba9\u8bbf\u95ee\u6743\u4ee5\u6dfb\u52a0\u65e5\u5386\uff1a " + P(c.ua));
		} else {
			g = xM;
		}
		g.b(Bg, P(c.ua));
		g.b("add", P("\u6dfb\u52a0"));
		var i = GL + e;
		g.b(Wt, i);
		if (c.Ap === 1) {
			g.b(Pv, S(AM) + Vj + vg(i) + "," + vg(c.id) + "," + c.Rp !== 0 ? bi : "false);");
		} else {
			var j = c.Nd ? vg(c.Nd) : "null";
			g.b(Pv, S(BM) + Vj + vg(i) + "," + vg(c.id) + "," + j + ");");
		}
		f[q](g[r]());
	}
	var m = wM;
	m.b("addRows", f[K](M));
	JL = a;
	uw(DM(), P("\u60a8\u8981\u6dfb\u52a0\u8fd9\u4e9b\u65e5\u5386\u5417\uff1f"), m[r](), [Zn(Zd), Zn("\u6dfb\u52a0\u5168\u90e8", null, S(CM) + "();")]);
}
function FM() {
	var a = W($J)[B], b = W(YJ)[B];
	if (!wf(a) || !wf(b)) {
		uM();
	}
	Rw();
}
function GM(a) {
	var b = [];
	EJ(b);
	if (b[t] > 0) {
		if (!yy(kK)) {
			return true;
		}
	}
	nL(a);
}
function RL(a) {
	var b = [];
	for (var c = 0; c < a[t]; ++c) {
		var d = a[c];
		HM(d) !== null && b[q](d, a[c + 1]);
	}
	return b;
}
function HM(a) {
	var b = yK[a];
	return !b || !b[t] ? null : b;
}
function IM() {
	var a = Uk(), b = a.J(aK, null);
	if (b == null) {
		b = a.J(bh, "US");
	}
	return b[oz]();
}
function TL(a) {
	return a ? "\u7528\u6237\u540d\uff1a" : "\u7535\u8bdd\u53f7\u7801\uff1a";
}
function JM(a) {
	var b = W("deviceAddressMessage");
	if (b) {
		k(b, TL(a));
	}
}
function LL(a) {
	return a ? "\u901a\u8fc7\u6211\u7684\u624b\u673a\u901a\u77e5\u6211\uff1a" : "\u901a\u8fc7\u6211\u7684\u624b\u673a\u901a\u77e5\u6211\uff1a";
}
function KM(a) {
	var b = W("smsTitleMessage");
	if (b) {
		k(b, LL(a));
	}
}
function NL(a) {
	return a ? "\u5148\u9009\u62e9\u60a8\u7684\u56fd\u5bb6/\u5730\u533a\uff0c\u7136\u540e\u8f93\u5165\u60a8\u7684\u7528\u6237\u540d\u548c\u8fd0\u8425\u5546\u57df\u540d\u3002 \u6700\u540e\uff0c\u8f93\u5165\u53d1\u9001\u5230\u60a8\u624b\u673a\u7684\u9a8c\u8bc1\u4ee3\u7801\u3002 \u53ef\u80fd\u4f1a\u6536\u53d6\u5176\u4ed6\u8d39\u7387\u3002" : "\u5148\u9009\u62e9\u60a8\u7684\u56fd\u5bb6/\u5730\u533a\uff0c\u7136\u540e\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7\u7801\u548c\u8fd0\u8425\u5546\u3002 \u6700\u540e\uff0c\u8f93\u5165\u53d1\u9001\u5230\u60a8\u624b\u673a\u7684\u9a8c\u8bc1\u4ee3\u7801\u3002 \u53ef\u80fd\u4f1a\u6536\u53d6\u5176\u4ed6\u8d39\u7387\u3002";
}
function LM(a) {
	var b = W("smsTitleMessageDesc");
	if (b) {
		k(b, NL(a));
	}
}
function VL(a) {
	return a ? "\u7535\u5b50\u90ae\u4ef6\u57df\u540d\uff1a" : "\u8fd0\u8425\u5546:";
}
function MM(a) {
	var b = W("smsCarrierMessage");
	if (b) {
		k(b, VL(a));
	}
}
function OL(a) {
	return (a === undefined ? ML() : a) ? "SMS\u7535\u5b50\u90ae\u4ef6\u9a8c\u8bc1\u6210\u529f" : "\u7535\u8bdd\u53f7\u7801\u5df2\u901a\u8fc7\u9a8c\u8bc1\u3002";
}
function NM(a) {
	var b = W("smsCodeVerified");
	if (b) {
		k(b, (a === undefined ? ML() : a) ? "SMS\u7535\u5b50\u90ae\u4ef6\u9a8c\u8bc1\u6210\u529f" : "\u7535\u8bdd\u53f7\u7801\u5df2\u901a\u8fc7\u9a8c\u8bc1\u3002");
	}
}
function PL(a) {
	return (a === undefined ? ML() : a) ? "\u8f93\u5165\u65b0\u7684\u7528\u6237\u540d\u548c\u57df\u540d\uff0c\u7528\u4ee5\u66f4\u6539\u60a8\u7684SMS\u901a\u77e5\u53d1\u9001\u5730\u5740" : "\u8f93\u5165\u65b0\u7684\u7535\u8bdd\u53f7\u7801\u548c\u8fd0\u8425\u5546\uff0c\u7528\u4ee5\u66f4\u6539\u60a8\u7684SMS\u901a\u77e5\u53d1\u9001\u5730\u5740";
}
function OM(a) {
	var b = W("smsCodeVerifiedDesc");
	if (b) {
		k(b, (a === undefined ? ML() : a) ? "\u8f93\u5165\u65b0\u7684\u7528\u6237\u540d\u548c\u57df\u540d\uff0c\u7528\u4ee5\u66f4\u6539\u60a8\u7684SMS\u901a\u77e5\u53d1\u9001\u5730\u5740" : "\u8f93\u5165\u65b0\u7684\u7535\u8bdd\u53f7\u7801\u548c\u8fd0\u8425\u5546\uff0c\u7528\u4ee5\u66f4\u6539\u60a8\u7684SMS\u901a\u77e5\u53d1\u9001\u5730\u5740");
	}
}
function ML(a) {
	return (a === undefined ? IM() : a)[oz]() == "JP";
}
function SL() {
	var a = W(aK), b = a[ez][a[Oy]][B], c = Uk().J(aK, "US"), d = ML(b);
	if (d !== ML(c)) {
		JM(d);
		KM(d);
		LM(d);
		MM(d);
		NM(d);
		OM(d);
	}
	PM(b);
}
function PM(a) {
	k(W(ZJ + "-parent"), WL(a));
}
function WL(a) {
	var b = HM(a);
	if (b && b[0] != M) {
		var c = [];
		sJ(new tJ(ZJ), b, c, "prefselect", "onchange=\"" + S(UL) + "();\"");
		return c[K](M);
	} else {
		return R.M.jg(37226, $, "lk", "font-weight:normal", null, null, 1);
	}
}
function QL() {
	var a = Uk(), b = a.J(aK, null);
	if (b == null || !(HM(b) !== null)) {
		b = a.J(bh, "US");
	}
	HM(b) !== null || (b = "US");
	return b;
}
function vM() {
	var a = W("settingsForm"), b = gL.uh(a);
	if (!b) {
		return [];
	}
	var c = Uk();
	for (var d in b) {
		c.aa(d, b[d]);
	}
	return c.et();
}
function HL(a) {
	var b = [], c = a[Vb](Jl);
	for (var d = 0; d < c[t]; ++d) {
		b[q](c[Kb](0, d + 1)[K](Jl));
	}
	return b[K](qg);
}
R.FL = XL;
R.EL = YL;
R.HL = $L;
R.xL = ZL;
R.Jz = rM;
R.Iz = EM;
OK.f().tm(0, "\u57fa\u672c", tL, function () {
	var a = rL;
	a.b("b1", "\u4fdd\u5b58");
	a.b("click1", S(Rw) + "()");
	a.b("click2", S(nL) + "(true)");
	return a[r]();
});
//*******tianliang edit,TAB named "Calendar" in calendar configuration page.
//show this TAB
OK.f().tm(1, "\u65e5\u5386", wL, function () {
//not show this TAB using below expression
//OK.f().tm(1, "", wL, function () {
	return fL[r]();
});
//*******tianliang edit,TAB named "Mobile setting" in calendar configuration page.
//show this TAB
//OK.f().tm(2, "\u79fb\u52a8\u8bbe\u7f6e", KL, function () {
//not show this TAB
OK.f().tm(2, "", KL, function () {
	var a = rL;
	a.b("b1", "\u4fdd\u5b58");
	a.b("click1", S(FM) + "()");
	a.b("click2", S(GM) + "(true)");
	return a[r]();
});
var QM = "offline_enabled";
function RM(a) {
	var b = new AF;
	if (!b.Ih()) {
		return "<tr><td colspan=2><center>" + ("\u8981\u5728\u6ca1\u6709\u8fde\u63a5\u5230 Internet \u65f6\u67e5\u770b\u548c\u7f16\u8f91 Google \u65e5\u5386\uff0c\u8bf7" + ("<a href=\"javascript:void(" + S(_olp_showPromo) + "())\">") + "\u5b89\u88c5</a> Google Gears \u6d4f\u89c8\u5668\u63d2\u4ef6\u3002") + "</center></td></tr>";
	} else {
		if (b.Ih() && !b[cz]()) {
			var c = "Google Gears Settings", d = "Denied Sites", e;
			e = Q || $f ? "\u8981\u8131\u673a\u4f7f\u7528 Google \u65e5\u5386\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a <br/> (1) \u5728 Web \u6d4f\u89c8\u5668\u4e2d\u70b9\u51fb\"\u5de5\u5177\" > " + c + " <br/> (2) \u4ece\"" + d + "\"\u5217\u8868\u4e2d\u5220\u9664 " + ("<tt>" + document[nc][Md] + "</tt>") + "\u3002 <br/> (3) \u70b9\u51fb \u68c0\u67e5\u8bbf\u95ee\u6743\u9650 \u6309\u94ae\u4ee5\u6388\u4e88\u5bf9 " + ("<tt>" + document[nc][Md] + "</tt>") + " \u7684\u8bbf\u95ee\u6743\u9650\u3002" : "\u8981\u8131\u673a\u4f7f\u7528 Google \u65e5\u5386\uff0c\u5fc5\u987b\u4ece Google Gears " + d + " \u5217\u8868\u4e2d\u5220\u9664 " + ("<tt>" + document[nc][Md] + "</tt>") + "\uff0c\u7136\u540e\u70b9\u51fb \u68c0\u67e5\u8bbf\u95ee\u6743\u9650 \u6309\u94ae\u5c06\u8bbf\u95ee\u6743\u6388\u4e88 " + ("<tt>" + document[nc][Md] + "</tt>") + "\u3002";
			return "<tr><td colspan=2><center>" + e + "<br><br><input type=button id=\"check_access_btn\" value=\"\u68c0\u67e5\u8bbf\u95ee\u6743\u9650\"onclick=\"" + S(SM) + "()\"/><br><br><a href=\"" + P(oK) + "\" target=_blank>\u4e86\u89e3\u8be6\u60c5</a></center></td></tr>";
		}
	}
	var f = b.up(), g = a.qa(4, QM, undefined, f), i = [];
	i[q]("<tr><td class=\"offline\">");
	jL(M, g, false, M, i);
	i[q]("</td><th class=\"offline\">", "\u5728\u672c\u8ba1\u7b97\u673a\u4e0a\u542f\u7528\u8131\u673a\u4f7f\u7528 " + Qm.f().Ba(Yn).na + "\u3002", "&nbsp;<a href=\"", P(oK), "\" target=\"_blank\">\u4e86\u89e3\u8be6\u60c5</a>.</th></tr>");
	i[q]("<tr><td class=\"offline\">&nbsp;</td><th class=\"offline\"><a href=\"javascript:", S(TM), "()\">\u521b\u5efa\u684c\u9762\u5feb\u6377\u65b9\u5f0f</a> <span style=\"font-weight: lighter\">\u53ef\u4ee5\u5728\u8131\u673a\u65f6\u8f7b\u677e\u8bbf\u95ee Google \u65e5\u5386\u3002</span></th>", "</tr>");
	return i[K](M);
}
function TM() {
}
function SM() {
	(new AF).getPermission("Google \u65e5\u5386", "images/calendar-48.png", "\u542f\u7528 Google \u65e5\u5386\u4ee5\u4f9b\u8131\u673a\u4f7f\u7528\u3002");
	Vs(3, false);
}
function UM() {
	var a = W(QM);
	gL.am(QM, a[Jb]);
	a && pa(function () {
		Gz(a[Jb]);
	}, 0);
	uo();
}
Ay && pK() && OK.f().tm(3, "\u79bb\u7ebf", RM, function () {
	var a = rL;
	a.b("b1", "\u4fdd\u5b58");
	a.b("click1", S(UM) + "()");
	a.b("click2", S(nL) + "(true)");
	return a[r]();
});
var VM = {};
function WM(a, b, c, d) {
	if (a) {
		for (var e = 0; e + 1 < a[t]; e += 2) {
			if (a[e] == b) {
				return d ? h.min(a[e + 1], d) : a[e + 1];
			}
		}
	}
	return c;
}
var XM = {cn:"cn", tz:"ctz", location:Rz, details:Tz, newCalendar:"ncal", autoAccept:"autoaccept", country:"gl"};
function lM(a) {
	var b = wJ(a);
	if (b) {
		if (!Y.f()[ld](b)) {
			return 0;
		}
		if (Y.f().$(b).Ja) {
			return 0;
		}
		return 2;
	}
	b = vJ(a);
	if (b) {
		return Un(b).origin == "UNKNOWN" ? 1 : 2;
	}
	return 0;
}
function YM(a) {
	var b = a[Lc](/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/), c = b[4] + b[5];
	return c[I](0, c[Vc]("/") + 1 || c[t]);
}
var ZM = YM(window[nc][id]);
function $M(a, b, c, d) {
	var e = Un(b), f = a, g = e.nh, i = c;
	if (i == "private-magic") {
		i = "private-";
		var j = e.Bm;
		if (j == null) {
			return "\u5df2\u505c\u7528";
		}
		i += j;
	}
	var m = "http://", n = e.Ei ? e.Ei : m + ZM;
	if ("public" != c && e.wb) {
		n = n[A](/^http:/, "https:");
	}
	return n + f + "/" + ia(g) + "/" + i + "/" + d + (f == "ical" ? ".ics" : M);
}
function aN(a, b) {
	var c = Un(a), d = c.nh, e = c.qr, f = c.Ei ? c.Ei : "http://" + ZM;
	if (ql()) {
		f += "hosted/" + ol + "/";
	}
	if ("public" != b && c.wb) {
		f = f[A](/^http:/, "https:");
	}
	var g = [f, e ? "embed" : "htmlembed"];
	g[q]("?src=" + ia(d));
	var i = Uk().J(ch, null);
	i && g[q](xf, "ctz", "=", i);
	if (b == "private-magic") {
		var j = c.Bm;
		if (j == null) {
			return "\u5df2\u505c\u7528";
		}
		g[q]("&pvttk=" + j);
	}
	return g[K](M);
}
var bN = 0;
function cN() {
	var a = Un(Yn);
	if (!a) {
		a = {};
		var b = Uk();
		a.Bk = b.J(ch, "Etc/GMT");
		Qa(a, M);
	}
	var c = [Yn, 70, Aw, 0], d = "_new_calendar_id_" + bN;
	++bN;
	var e = dN(a);
	ww.f().b(d, new xw(70, 0, 2, M, a.Bk, a[nc], null, M, undefined, c, true, M, d, M, M, e, false, a.wb, a.dl, a.zk, a.ze, a.vm, null, a.Wi, false, true));
	return d;
}
function eN(a, b, c) {
	this.wn = a;
	this.Fc = b;
	this.OF = c;
}
//In share calendar config page,calendar access level has four level.
//show top level
//var fN = [new eN(70, "\u8fdb\u884c\u66f4\u6539\u5e76\u7ba1\u7406\u5171\u4eab", true), new eN(60, "\u66f4\u6539\u6d3b\u52a8", true), new eN(50, "\u7f16\u5199\u5185\u5bb9", false), new eN(30, "\u56de\u590d", false), new eN(20, "\u67e5\u770b\u6240\u6709\u8be6\u7ec6\u6d3b\u52a8", true), new eN(10, "\u53ea\u80fd\u770b\u5230\u7a7a\u95f2/\u5fd9\u788c\u4fe1\u606f\uff08\u9690\u85cf\u8be6\u7ec6\u4fe1\u606f\uff09", true), new eN(0, "\u770b\u4e0d\u5230\u4efb\u4f55\u5185\u5bb9", false)];
//not show top level
var fN = [new eN(60, "\u66f4\u6539\u6d3b\u52a8", true), new eN(50, "\u7f16\u5199\u5185\u5bb9", false), new eN(30, "\u56de\u590d", false), new eN(20, "\u67e5\u770b\u6240\u6709\u8be6\u7ec6\u6d3b\u52a8", true), new eN(10, "\u53ea\u80fd\u770b\u5230\u7a7a\u95f2/\u5fd9\u788c\u4fe1\u606f\uff08\u9690\u85cf\u8be6\u7ec6\u4fe1\u606f\uff09", true), new eN(0, "\u770b\u4e0d\u5230\u4efb\u4f55\u5185\u5bb9", false)];
function gN(a) {
	for (var b = 0; b < fN[t]; ++b) {
		if (fN[b].wn == a) {
			return fN[b].Fc;
		}
	}
	return null;
}
function hN(a) {
	var b = [];
	for (var c = 0; c < fN[t]; ++c) {
		if (fN[c].OF && (a == null || a >= fN[c].wn)) {
			b[q](fN[c].wn, fN[c].Fc);
		}
	}
	return b;
}
var iN = "accessPerson", jN = null;
function kN(a, b, c) {
	a != b && BL(c, a, false);
}
function lN(a, b) {
	var c = Vm(a), d = false, e = Qm.f();
	for (var f = 0; f < c[t]; f++) {
		if (!c[f] || c[f] == iK) {
			continue;
		}
		var g = Um(c[f]);
		//********tianliang add ,Delete email address validate function
		//if a is a valid email g=d[f],else g=null
			g=c[f];
		//********tianliang 
		if (!g) {
			R.ea[xb](c[f] + " \u4e0d\u662f\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740");
			d = true;
			continue;
		}
		var i = e.sh(g);
		if (i && i.Ra == Aw) {
			R.ea[xb]("\u65e0\u6cd5\u4e3a\u516c\u5171\u7528\u6237\u6dfb\u52a0\u6743\u9650");
			d = true;
			continue;
		}
		if (i && i.Ra == Yn) {
			R.ea[xb]("\u60a8\u65e0\u6cd5\u4e0e\u81ea\u5df1\u5171\u4eab\u65e5\u5386");
			d = true;
			continue;
		}
		var j = i ? i.Ra : g, m = null, n = null, p = Un(jN);
		if (p && p.wb) {
			m = WM(p.ze, Aw, null);
			if (m !== null && !mN(p, g)) {
				b = h.min(b, m);
				n = m;
			}
		}
		var s = W(iN + j);
		if (s) {
			dK(s, b);
		} else {
			var u = W("detailsAddAccessLastRow"), v = W("accessTable").insertRow(u.rowIndex), w = v.insertCell(-1), x = v.insertCell(-1), y = v.insertCell(-1), C = i ? i.pe() : c[f];
			k(w, P(C));
			var D = iN + j, L = [], O = hN(n), ba = gL.qa(2, D, D, null);
			nN(ba, O, L);
			gL.am(D, null);
			k(x, L[K](M));
			s = W(D);
			dK(s, b);
			oN(s);
			Da(y, Xv);
			k(y, pN(D));
		}
	}
	if (!d) {
		var ea = "newAccessPerson";
		Oa(W(ea), M);
		rA(ea);
	}
	return !d;
}
function mN(a, b) {
	if (!a.wb) {
		return false;
	}
	var c = a.dl, d = Zz(b);
	if (d == "resource.calendar.google.com") {
		var e = b[Lc](/^(.*)_/);
		if (e) {
			d = e[1];
		}
	}
	return c == d;
}
function qN(a, b) {
	var c = a;
	while (c && c[kz] != b) {
		c = c[ud];
	}
	return c;
}
function rN(a) {
	var b = W(a), c = qN(b, "TR");
	W("accessTable").deleteRow(c.rowIndex);
}
var sN, tN = new T("<td ${class}>  <a ${tab_id} href=\"javascript:void(${command}(${tabname},${activetab},    ${id}))\">${title}</a></td>");
function BL(a, b, c) {
	b = b ? ka(b, 10) : 0;
	if (c) {
		kq = false;
	}
	if (!$o(function () {
		BL(a, b, false);
	})) {
		return true;
	}
	jN = a;
	var d = new NK, e = Un(a), f;
	if (e) {
		f = e.rb ? M : e.ua;
	} else {
		var g = Qm.f().Ba(a);
		f = g ? g.dd : "\u6b63\u5728\u52a0\u8f7d...";
	}
	ro();
	c || Mp(function () {
		BL(a, b, false);
	}, jK(P(f)), "ShowDetails" + a);
	if (!e) {
		Kk.f()[Pc](Kg, ["dispid", a, "dttab", b], undefined, null, ee, 4);
		return true;
	}
	if (!_SE_vcalNotificationsOn && e.Fk) {
		b = 0;
	}
	var i = e.rb ? "\u521b\u5efa\u65b0\u65e5\u5386" : jK(P(f)), j = e.tc >= 70, m = e.tc >= 20, n = e.Th, p = [];
	if (b == 2) {
		if (m) {
			d.Mo = uN;
			vN(p, d, a);
			wN(p, d, a, f, e);
			p[q]("<tr class=last><th>&nbsp;</th><td valign=middle><img src=\"images/mobile.gif\" style=\"padding-right:1.8em\" align=absmiddle><span class=lk onmousedown=\"_GenSettings(2)\">\u5c06\u624b\u673a\u8bbe\u7f6e\u6210\u53ef\u63a5\u6536\u901a\u77e5</span></td></tr>");
		}
	} else {
		if (j) {
			if (b == 0 || e.rb) {
				xN(p, d, a, f, e);
			}
			if (b == 1 || e.rb) {
				yN(p, d, a, n, e);
			}
		} else {
			zN(p, d, a, f, e);
		}
	}
	var s = p[K](M), u = tN;
	u.b(Wt, vg(a));
	u.b("command", S(kN));
	var v = ["\u8be6\u7ec6\u65e5\u5386"];
	j && !e.rb ? v[q]("\u5171\u4eab\u6b64\u65e5\u5386") : v[q](null);
	if ((_SE_vcalNotificationsOn || !e.Fk) && !e.rb && e.tc >= 20) {
	//***tianliang edit,when you click "share the calendar" in menu that will been shown when you click calendar right-button in calendr list,
	//***One settin page will show. It have three TAB link:"calendar details","share the calendar","inform".Using below expression
	//***not show "inform" TAB.
		v[q]("");
	//***show the TAB
	//v[q]("\u901a\u77e5");
	}
	var w = "<form name=settingsForm id=settingsForm onsubmit=\"";
	if (b == 1 || e.rb) {
		w += S(lN) + "(_$('newAccessPerson').value,_$('newAccessLevel').value);";
	}
	w += "return false\"><div id=set class=eventborder>";
	var x = aL(v, b, u), y = SK;
	y.b(Uu, i);
	y.b("tabs", x);
	y.b("body", s);
	var C, D = rL, L = vg(P(a));
	D.b("b1", e.rb ? "\u521b\u5efa\u65e5\u5386" : "\u4fdd\u5b58");
	var O = e.rb || j;
	D.b("click1", S(b == 2 || O ? AN : BN) + Vj + L + Xj);
	D.b("click2", S(CN) + Vj + L + ",true)");
	C = D[r]();
	var ba = C + "</form></div>";
	RJ(w + y[r]() + ba, "#fad163");
	gL = d;
	kq = c ? null : function () {
		return CN(a, false);
	};
	if (b == 1 || e.rb) {
		Ck().zd("newAccessPerson", false, false, function (Ma) {
			lN(Ma[B], W("newAccessLevel")[B]);
		});
	}
	var ea = W("cnInput");
	ea || (ea = W("overrideNameInput"));
	ea && rA(ea);
	if (b == 2) {
		sN = new DN(Tx(a));
		sN.ub(W("dtReminderParent"));
	}
	if (j) {
		var ta = W("newAccessLevel");
		ta && dK(ta, 20);
	}
	var V = W("settingsForm");
	d.ys(V);
	var Aa = W("accessTable");
	EN(Aa);
	Q && $i(document, ij, FN);
	return true;
}
function GN(a, b, c) {
	c[q]("<tr><th>", a, "</th><td class=fullwidth>", b, "</td></tr>");
}
function HN(a, b) {
	var c = Un(a);
	if (b && c) {
		return WM(c.Hf, b, null) !== null;
	}
	return false;
}
function IN(a) {
	var b = Qm.f().Ba(a), c = [b ? P(b.pe()) : M];
	//shared in calendar confg page,Link "share with the person".
	//not show  the link 
	//a != Yn && !HN(Yn, a) && c[q]("<br><a href=\"javascript:", Gw.Uf(sf(JN, a)), "\" class=lk-online>\u4e0e\u6b64\u4eba\u5171\u4eab\u6211\u7684\u65e5\u5386</a>");
	return c[K](M);
}
function xN(a, b, c, d, e) {
	GN("\u65e5\u5386\u540d\uff1a", "<input class=text size=50 maxlength=254 id=cnInput name=cnInput />", a);
	if (e[J] == 0) {
		var f = IN(c);
		GN("\u65e5\u5386\u6240\u6709\u8005\uff1a", f, a);
	}
	b.qa(1, "cnInput", "cn", d);
	e.wb && a[q]("<tr><th>\u57df\u540d\uff1a</th><td>", P(e.Wi), "</td></tr>");
	GN("\u8bf4\u660e\uff1a", "<textarea rows=4 cols=50 id=descriptionInput name=descriptionInput></textarea>", a);
	b.qa(1, "descriptionInput", "details", e.wc || M);
	//in calendar config page ,not show below infomation
	//no show "location" item
	//GN("\u5730\u70b9:", "<input class=text size=50 id=locationInput name=locationInput /><div class=desc>\u4f8b\u5982\u201c\u4e0a\u6d77\u201d\u6216\u201c\u5317\u4eac\u201d\u6216\u201c\u4e2d\u56fd\u201d\u3002 \u6307\u5b9a\u5927\u4f53\u5730\u70b9\u5c06\u6709\u52a9\u4e8e\u4eba\u4eec\u67e5\u627e\u60a8\u7684\u65e5\u5386\uff08\u5982\u679c\u516c\u5f00\uff09\u4e0a\u7684\u6d3b\u52a8</div>", a);
	b.qa(1, "locationInput", "location", e[nc] || M);
	//no show "calendar time zone"
	//a[q]("<tr><th>", "\u65e5\u5386\u65f6\u533a\uff1a", "<div class=desc>", "\u8981\u9009\u62e9\u6b63\u786e\u7684\u65f6\u533a\u7ec4\uff0c\u8bf7\u5148\u9009\u62e9\u4e00\u4e2a\u56fd\u5bb6/\u5730\u533a\u3002\u8981\u67e5\u770b\u6240\u6709\u65f6\u533a\uff0c\u8bf7\u70b9\u51fb\u201c\u663e\u793a\u6240\u6709\u65f6\u533a\u201d\n\u3002", so, "</th><td>");
	a[q]("<tr style=\"display:none\"><th>", "\u65e5\u5386\u65f6\u533a\uff1a", "<div class=desc>", "\u8981\u9009\u62e9\u6b63\u786e\u7684\u65f6\u533a\u7ec4\uff0c\u8bf7\u5148\u9009\u62e9\u4e00\u4e2a\u56fd\u5bb6/\u5730\u533a\u3002\u8981\u67e5\u770b\u6240\u6709\u65f6\u533a\uff0c\u8bf7\u70b9\u51fb\u201c\u663e\u793a\u6240\u6709\u65f6\u533a\u201d\n\u3002", so, "</th><td>");
	var g = dN(e), i = b.qa(2, "prefcountry", "country", g);
	a[q]("<p>", "\u56fd\u5bb6/\u5730\u533a\uff1a", "&nbsp;&nbsp;&nbsp;");
	sJ(i, fK, a, "prefselectlarge", "onchange=\"" + S(lL) + "(1," + vg(c) + ");\"");
	var j = e.Bk, m = e.zk;
	a[q](" <nobr>" + gK + "</p><p>\u73b0\u5728\u9009\u62e9\u4e00\u4e2a\u65f6\u533a:&nbsp;&nbsp;&nbsp;");
	var n = b.qa(2, "preftz", "tz", j);
	sJ(n, MK(j, m, Sk, g), a, "prefselect");
	a[q](" <nobr>");
	var p = b.qa(4, "prefDispAllTzs", "dispAllTzs", false);
	jL("\u663e\u793a\u6240\u6709\u65f6\u533a", p, false, "onclick=\"" + S(lL) + "(0," + vg(c) + ");\"", a);
	a[q]("</nobr></p></td></tr>");
	if (e.rb === false) {
		if (e[J] != 0) {
			var s = e.Ds;
			//in calendar detail config , no show "auto accept invite"
			a[q]("<tr style=\"display:none\"><th>\u81ea\u52a8\u63a5\u53d7\u9080\u8bf7<div class=desc>\u5728\u6ca1\u6709\u51b2\u7a81\u7684\u6d3b\u52a8\u65f6\uff0c\u50cf\u4f1a\u8bae\u5ba4\u8fd9\u7c7b\u8d44\u6e90\u7684\u65e5\u5386\u53ef\u4ee5\u81ea\u52a8\u63a5\u53d7\u5171\u4eab\u8be5\u65e5\u5386\u7684\u7528\u6237\u53d1\u6765\u7684\u9080\u8bf7\u3002", R.M.jg(34584, "\u4e86\u89e3\u8be6\u60c5", "lk", null, "<br>"), "</div></th><td><input type=radio name=autoAccept id=autoAccept value=yes", s == "yes" ? " checked" : M, "> \u81ea\u52a8\u63a5\u53d7\u4e0d\u4e0e\u5176\u4ed6\u6d3b\u52a8\u51b2\u7a81\u7684\u9080\u8bf7\u3002<br><input type=radio name=autoAccept id=autoAccept value=add", s == "add" ? " checked" : M, "> \u81ea\u52a8\u5c06\u6240\u6709\u9080\u8bf7\u6dfb\u52a0\u5230\u6b64\u65e5\u5386\u4e2d\u3002<br><input type=radio name=autoAccept id=autoAccept value=no", s == "no" ? " checked" : M, "> \u4e0d\u663e\u793a\u9080\u8bf7\u3002");
			//show the item
			//a[q]("<tr><th>\u81ea\u52a8\u63a5\u53d7\u9080\u8bf7<div class=desc>\u5728\u6ca1\u6709\u51b2\u7a81\u7684\u6d3b\u52a8\u65f6\uff0c\u50cf\u4f1a\u8bae\u5ba4\u8fd9\u7c7b\u8d44\u6e90\u7684\u65e5\u5386\u53ef\u4ee5\u81ea\u52a8\u63a5\u53d7\u5171\u4eab\u8be5\u65e5\u5386\u7684\u7528\u6237\u53d1\u6765\u7684\u9080\u8bf7\u3002", R.M.jg(34584, "\u4e86\u89e3\u8be6\u60c5", "lk", null, "<br>"), "</div></th><td><input type=radio name=autoAccept id=autoAccept value=yes", s == "yes" ? " checked" : M, "> \u81ea\u52a8\u63a5\u53d7\u4e0d\u4e0e\u5176\u4ed6\u6d3b\u52a8\u51b2\u7a81\u7684\u9080\u8bf7\u3002<br><input type=radio name=autoAccept id=autoAccept value=add", s == "add" ? " checked" : M, "> \u81ea\u52a8\u5c06\u6240\u6709\u9080\u8bf7\u6dfb\u52a0\u5230\u6b64\u65e5\u5386\u4e2d\u3002<br><input type=radio name=autoAccept id=autoAccept value=no", s == "no" ? " checked" : M, "> \u4e0d\u663e\u793a\u9080\u8bf7\u3002");
			b.qa(3, "autoAccept", "autoAccept", s);
		}
		var u = true;
		if (e.wb) {
			var v = WM(e.ze, Aw, 20, 20);
			u = v >= 20;
		}
		KN(c, a, true, !u);
		//in calendar detail config , no show "private net address"
		u && a[q]("<tr style=\"display:none\" class=last><th>\u79c1\u4eba\u7f51\u5740\uff1a", R.M.jg(34576, "\u4e86\u89e3\u8be6\u60c5", "lk", null, "<div class=desc>", so), "</th><td><div id=\"DT_private_urls\">", LN(c), "</div><div class=desc>\u8fd9\u662f\u6b64\u65e5\u5386\u7684\u79c1\u4eba\u7f51\u5740\u3002\u5982\u679c\u60a8\u4e0d\u5e0c\u671b\u5176\u4ed6\u4eba\u67e5\u770b\u6b64\u65e5\u5386\u4e0a\u7684\u4efb\u4f55\u6d3b\u52a8\uff0c\u8bf7\u4e0d\u8981\u4e0e\u4ed6\u4eec\u5171\u4eab\u6b64\u7f51\u5740\u3002</div></td></tr>");
		//show
		//u && a[q]("<tr class=last><th>\u79c1\u4eba\u7f51\u5740\uff1a", R.M.jg(34576, "\u4e86\u89e3\u8be6\u60c5", "lk", null, "<div class=desc>", so), "</th><td><div id=\"DT_private_urls\">", LN(c), "</div><div class=desc>\u8fd9\u662f\u6b64\u65e5\u5386\u7684\u79c1\u4eba\u7f51\u5740\u3002\u5982\u679c\u60a8\u4e0d\u5e0c\u671b\u5176\u4ed6\u4eba\u67e5\u770b\u6b64\u65e5\u5386\u4e0a\u7684\u4efb\u4f55\u6d3b\u52a8\uff0c\u8bf7\u4e0d\u8981\u4e0e\u4ed6\u4eec\u5171\u4eab\u6b64\u7f51\u5740\u3002</div></td></tr>");
	}
}
function _DS_UpdateSecret(a, b) {
	Un(a).Bm = b;
	var c = W("DT_private_urls");
	if (c) {
		k(c, LN(a));
	}
}
function dN(a) {
	var b = a.bt;
	b || (b = Uk().J(bh, "US"));
	return b;
}
function MN(a) {
	var b = W(a + NN);
	if (b[Yy]) {
		return;
	}
	var c;
	c = b[Jb] ? W(a + 10) : W(a + 20);
	Ka(c, true);
}
function ON(a, b, c) {
	a[Jb] ? PN(b, c) : QN(b, c);
}
function QN(a, b) {
	if (b) {
		var c = W(b + "worldShareCheck"), d = W(b + "domainShareCheck");
		Ra(c, true);
		Ka(c, false);
		Ra(d, true);
		Ka(d, false);
		Ra(W(b + "worldShareOption"), true);
		Ra(W(b + "domainShareOption"), true);
		Ka(W(b + 0), true);
	} else {
		Ra(W(a + NN), true);
	}
	Ka(W(a + 0), true);
}
function RN(a, b, c) {
	var d = W(b + "worldShareCheck");
	if (c && d[Yy]) {
		return;
	}
	var e = 0, f = W(b + "domainShareCheck"), g = W(b + "worldShareOption");
	if (d[Jb]) {
		e = g[B];
		var i = W(b + "domainShareOption");
		i[B] < e && dK(i, e);
		Ka(f, true);
		Ra(f, true);
		SN(a, b);
	} else {
		Ra(f, false);
	}
	Ra(g, !d[Jb]);
	Ka(W(a + e), true);
}
function SN(a, b, c) {
	var d = W(b + "domainShareCheck");
	if (c && d[Yy]) {
		return;
	}
	W(b + "worldShareCheck");
	if (d[Jb]) {
		var e = W(b + "domainShareOption")[B];
		Ka(W(b + e), true);
	} else {
		Ka(W(a + "unshare"), true);
		QN(a, b);
	}
}
function PN(a, b) {
	if (b) {
		var c = W(b + "worldShareCheck"), d = W(b + "domainShareCheck");
		Ra(c, false);
		Ra(d, false);
		Ra(W(b + "worldShareOption"), false);
		Ra(W(b + "domainShareOption"), false);
		if (!c[Jb] && !d[Jb]) {
			Ka(c, true);
			Ka(d, true);
		}
		c[Jb] && RN(a, b);
		d[Jb] && SN(a, b);
	} else {
		var e = W(a + NN);
		Ra(e, false);
		if (e[Jb]) {
			MN(a);
		} else {
			Ka(W(a + 20), true);
		}
	}
}
var TN = new T("<table><tr><td valign=top><input id=\"${id}\" type=checkbox onclick=\"${onselectHandler}\" name=\"${id}SharingOption\"${checked}/></td><td valign=top><label style=\"font-size:10.5pt; font-weight:bold;\"for=\"${id}\">${title}</label> ${helplink}<br/><span style=\"font-size:9pt;\" class=desc>${desc}</span>${miscOptions}</td></tr></table>"), UN = new T("<tr style=\"padding-top:5px;\"><td style=\"padding:2px;\"><input type=checkbox name=\"${id}Sharecheck\" ${checked} ${disabled} id=\"${id}ShareCheck\" onclick=\"${clickHandler}\"><label style=\"padding:2px\" id=\"label${id}\" for=\"${id}ShareCheck\" onclick=\"${clickHandler}\">${title}</label></td><td style=\"padding:2px;\">");
function VN(a, b) {
	return ["<input type=radio value=\"", b, "\" id=\"", a, b, "\" style=\"display:none\" name=\"", a, wk][K](M);
}
var NN = "showFreeBusy";
function WN(a, b, c) {
	var d = a + NN, e = S(MN) + Vj + vg(a) + Xj;
	return ["<div style=\"margin-left:10px; margin-top:5px\"><input id=\"", d, "\" name=\"", d, "\" onclick=\"", e, "\" ", c == 10 ? "checked=true" : M, qg, c == 0 ? "disabled=true" : M, " type=checkbox><label for=\"", d, "\"  onclick=\"", e, wk, "\u53ea\u5171\u4eab\u6211\u7684\u7a7a\u95f2/\u5fd9\u788c\u4fe1\u606f\uff08\u9690\u85cf\u8be6\u7ec6\u4fe1\u606f\uff09", "</label></div>"][K](M);
}
function XN(a, b, c, d, e, f) {
	var g = [], i = WM(c.ze, Aw, 20, 20), j = hN(i), m = WM(c.ze, d.wb, 20), n = hN(m), p = vg(a), s = vg(b), u = Vj + p + "," + s + Xj, v = Vj + p + "," + s + ", true)";
	g[q]("<table>");
	var w = UN, x = S(RN), y = e > 0 ? "checked=true" : M, C = f == 0 && e == 0 ? "disabled=true" : M;
	w.b(Wt, b + "world");
	w.b(Uu, "\u516c\u5f00\u6b64\u65e5\u5386");
	w.b("clickHandler", x + v);
	w.b("checked", y);
	w.b("disabled", C);
	g[q](w[r]());
	var D = new tJ(b + "worldShareOption");
	D.gh = !y;
	sJ(D, j, g, undefined, "onchange=" + x + u, e);
	g[q]("</td></tr>");
	var L = "\u4e0e " + (" <b>" + P(d.Wi) + "</b>") + " \u57df\u4e2d\u7684\u6240\u6709\u4eba\u5171\u4eab\u6b64\u65e5\u5386";
	y = f > 0 ? "checked=true" : M;
	C = C || e > 0 ? "disabled=true" : M;
	x = S(SN);
	w.b(Wt, b + "domain");
	w.b(Uu, L);
	w.b("clickHandler", x + v);
	w.b("checked", y);
	w.b("disabled", C);
	g[q](w[r]());
	var O = new tJ(b + "domainShareOption");
	O.gh = !y;
	sJ(O, n, g, undefined, "onchange=" + x + u, f);
	g[q]("</td></tr>");
	g[q]("</table>");
	return g[K](M);
}
function YN(a) {
	if (a[B] === iK) {
		Oa(a, M);
	}
	Da(a, "text");
}
function ZN(a) {
	if (!a[B]) {
		Oa(a, iK);
		Da(a, "text faded");
	}
}
function yN(a, b, c, d, e) {
	var f = WM(e.ze, Aw, 20, 20), g = WM(e.vm, Aw, 0), i = iN + Aw, j = [0, 20, 10];
	for (var m = 0; m < j[t]; ++m) {
		j[m] <= f && j[m] >= g && a[q](VN(i, j[m]));
	}
	d = h.max(h.min(d, f), g);
	f >= g && b.qa(3, i, i, d);
	var n = Un(Yn), p = n ? n.wb : null, s, u, v, w = 0;
	if (p) {
		s = iN + p;
		u = WM(e.ze, p, 20);
		v = WM(e.vm, p, 0);
		if (n.wb != e.wb) {
			u = 20;
			v = 0;
		}
		var x = [0, 20, 10];
		for (var m = 0; m < x[t]; ++m) {
			x[m] <= u && x[m] >= v && a[q](VN(s, x[m]));
		}
		w = WM(e.Hf, p, 0);
		w = h.max(h.min(w, u), v);
		u >= v && b.qa(3, s, s, w);
	}
	var y = d > 0 || w > 0, C = iN + p;
	//In calendar config page,not show "public the calendar"
	/*
	a[q]("<tr><td class=hastable colspan=2>");
	var D = TN;
	D.b(Wt, i);
	if (p) {
		D.b(Uu, "\u4e0e\u5176\u4ed6\u4eba\u5171\u4eab\u6b64\u65e5\u5386");
		D.b("desc", M);
		D.b("miscOptions", XN(i, s, e, n, d, w));
	} else {
		D.b(Uu, "\u516c\u5f00\u6b64\u65e5\u5386");
		D.b("desc", "\u6b64\u65e5\u5386\u5c06\u4f1a\u663e\u793a\u5728\u516c\u5171 Google \u641c\u7d22\u7ed3\u679c\u4e2d\u3002");
		D.b("miscOptions", WN(i, e, d));
	}
	var L = R.M.jg(34577, "\u4e86\u89e3\u8be6\u60c5", "lk", null, Vj, Xj);
	D.b("helplink", L);
	D.b("checked", y ? "checked=true" : M);
	var O = "(this," + vg(i) + (p ? "," + vg(C) : M) + Xj;
	D.b("onselectHandler", S(ON) + O);
	a[q](D[r]());
	a[q]("</td></tr>");*/
	var ba = hN(null), ea = null;
	if (e.wb) {
		var f = WM(e.ze, Aw, null);
		if (f !== null) {
			ea = hN(f);
		}
	}
	a[q]("<tr class=last><th colSpan=2 style=\"padding-bottom:0\"><div style=\"font-weight:bold;font-size:11pt\">\u4e0e\u7279\u5b9a\u7684\u4eba\u5171\u4eab</div></th></tr>");
	a[q]("<tr class=last><td class=hastable colspan=2><table class=rows id=accessTable>");
	a[q]("<tr style=\"color:#663; text-transform:uppercase;\" id=detailsSharedUsersTitles><th>\u7528\u6237</th><th>\u6743\u9650\u8bbe\u7f6e</th><th><nobr>\u5220\u9664</nobr></th></tr>");
	a[q]("<tr id=detailsAddAccessRow class=\"last highlight\"><td><input class=\"text faded\" size=30 name=newAccessPerson style=\"padding-left:5px\"onblur=\"" + S(ZN) + "(this)\"onfocus=\"" + S(YN) + "(this)\"id=newAccessPerson ", Q ? "autocomplete=off " : M, "value=\"" + iK + "\"></td><td colspan=2>");
	nN(new tJ("newAccessLevel"), ba, a);
	a[q]("&nbsp; <input class=" + RK() + " type=submit value=\"\u6dfb\u52a0\u7528\u6237\"> </td></tr>");
	var ta = Qm.f();
	for (var m = 0; m + 1 < e.Hf[t]; m += 2) {
		var V = e.Hf[m], Aa = e.Hf[m + 1];
		if (V == Aw || V == p) {
			continue;
		}
		var Ma = V, Pa = ta.Ba(V);
		if (Pa) {
			Ma = Pa.pe();
		}
		a[q]("<tr><th>", P(Ma), "</th><td>");
		if (V == Yn || V == c) {
			for (var Ea = 0; Ea < ba[t]; Ea += 2) {
				if (ba[Ea] == Aa) {
					a[q](ba[Ea + 1], "</td><td>");
					break;
				}
			}
		} else {
			var i = iN + V, j = ba;
			if (ea) {
				mN(e, Pa ? Pa.na : null) || (j = ea);
			}
			var Ga = b.qa(2, i, i, Aa);
			nN(Ga, j, a);
			a[q]("</td><td class=icon>", pN(i));
		}
		a[q]("</td></tr>");
	}
	a[q]("<tr id=detailsAddAccessLastRow><td colspan=3 style=\"border-bottom:0\"></td></tr></table></td></tr>");
}
function pN(a) {
	return "<a href=\"#\" onclick=\"" + S(rN) + Vj + vg(P(a)) + ");\"><img height=10 src=\"images/icon_delete.gif\" width=9></a>";
}
function $N(a, b, c) {
	c[q]("<tr><th>", P(a), "</th><td>", P(b), "</td></tr>");
}
function JN(a) {
	BL(Yn, 1, false);
	var b = Qm.f().Ba(a);
	Oa(W("newAccessPerson"), b.pe());
	Pp("\u6388\u4e88 " + P(b.pe()) + " \u8bbf\u95ee\u6743", P("\u8bf7\u6309\u201c\u4fdd\u5b58\u201d\uff0c\u6388\u4e88 " + b.pe() + " \u5bf9\u60a8\u7684\u65e5\u5386\u7684\u8bbf\u95ee\u6743\u3002"));
	return false;
}
function zN(a, b, c, d, e) {
	var f = "<input class=text size=50 name=overrideNameInput id=overrideNameInput value=\"" + P(d) + "\" />";
	if (d != e.nm) {
		f += "<div style=\"padding-top:3px; margin-bottom:-3px;position:relative;font-style:italic\">\u539f\u540d\u79f0: " + P(e.nm) + so;
	}
	e.wb && a[q]("<tr><th>\u57df\u540d\uff1a</th><td>", P(e.Wi), "</td></tr>");
	GN("\u65e5\u5386\u540d\uff1a", f, a);
	if (e[J] == 0) {
		var g = IN(c);
		GN("\u65e5\u5386\u6240\u6709\u8005\uff1a", g, a);
	}
	b.qa(1, "overrideNameInput", "overrideNameInput", d);
	$N("\u8bf4\u660e\uff1a", e.wc, a);
	//shared in calendar config page ,not show "location" below item,except "you can.."
	/*
	$N("\u5730\u70b9:", e[nc], a);
	a[q]("<tr><th>\u65e5\u5386\u65f6\u533a\uff1a</th><td>", e.zk, "</td></tr>");
	if (e.vj != null) {
		var i = P(e.vj);
		a[q]("<tr><th>\u7f51\u5740:</th><td><a href=\"", i, "\" target=\"_blank\">", i, "</a></td></tr>");
	}
	KN(c, a, false, false);
	a[q]("<tr><th>\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5:</th><td>", gN(e.Th), "</td></tr>");
	*/
	a[q]("<tr class=last><th>\u60a8\u53ef\u4ee5:</th><td>", gN(e.tc), "</td></tr>");
}
function vN(a) {
	a[q]("<tr><th>", "\u6d3b\u52a8\u63d0\u9192\uff1a", "<div class=desc>", "\u9664\u975e\u53e6\u5916\u7531\u5355\u72ec\u7684\u6d3b\u52a8\u6307\u5b9a\u3002", "</div></th>");
	a[q]("<td id=\"dtReminderParent\"></td></tr>");
}
function DN(a) {
	var b = [];
	for (var c = 0; c < a[t]; c++) {
		var d = a[c];
		b[q](new dE(d[nd], d.mc));
	}
	fE[G](this, b, new dE(R.da.Vr, R.da.Wr), 5);
}
N(DN, fE);
DN[z].ij = function () {
	var a = this.P.R.Xg(this.P);
	this.Rs = a("td");
	var b = DN.ba.ij[G](this);
	return a("table", undefined, a("tbody", undefined, a("tr", undefined, this.Rs, a("td", undefined, b))));
};
DN[z].co = function (a) {
	return new eE(R.da.ru(Qw()), R.da.Vo(), a[nd], new cE(a.mc), "\u9884\u5b9a\u63d0\u524d\u63d0\u9192\u65f6\u95f4");
};
DN[z].Qg = function () {
	fE[z].Qg[G](this);
	k(this.Rs, this.Zo() ? "\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bf7\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e8e\u6d3b\u52a8\u524d\u63d0\u9192\u6211" : "\u672a\u8bbe\u7f6e\u63d0\u9192");
};
function uN() {
	var a = jN, b = [], c, d = null, e = sN.Bb();
	if (e == null) {
		d = VA;
	} else {
		for (var f = 0; f < e[t]; f++) {
			var g = e[f];
			c = new Rx(a, 1, g[nd], g.mc);
			b[q](c);
		}
	}
	var i = R.da.Ax, j = R.da.yx;
	for (var f = 0; f < i[t]; ++f) {
		var m = i[f];
		for (var n = 0; n < j[t]; ++n) {
			var p = j[n], s = W("not" + m + "." + p);
			if (s && !s[Yy] && s[Jb]) {
				c = new Rx(a, m, p);
				b[q](c);
			}
		}
	}
	var u = GJ(a);
	b[gd](IJ);
	u[gd](IJ);
	var v = false, w = {un:[], Sd:[]}, x = 0, y = 0;
	while (x < b[t] && y < u[t]) {
		var C = b[x], D = u[y], L = IJ(C, D);
		if (L == 0) {
			x++;
			y++;
		} else {
			if (L < 0) {
				w.un[q](C);
				x++;
				v = true;
			} else {
				w.Sd[q](D);
				y++;
				v = true;
			}
		}
	}
	var O, e, ba;
	if (x < b[t]) {
		O = x;
		e = b;
		ba = w.un;
		v = true;
	} else {
		if (y < u[t]) {
			O = y;
			e = u;
			ba = w.Sd;
			v = true;
		} else {
			O = 1;
			e = [];
		}
	}
	for (var f = O, ea = e[t]; f < ea; ++f) {
		ba[q](e[f]);
	}
	v = v || !!d;
	return {El:v, Rn:w, LE:aO, Ft:d};
}
function aO(a) {
	var b, c = a.un;
	for (var d = 0, e = c[t]; d < e; ++d) {
		b = c[d];
		FJ(b, true);
	}
	var f = a.Sd;
	for (var d = 0, g = f[t]; d < g; ++d) {
		b = f[d];
		FJ(b, false);
	}
	var i = [];
	EJ(i);
	Mk("subscribe", i, Lk(null, hK, 7));
	DJ();
}
function wN(a, b, c) {
	a[q]("<tr class=last><th>\u9009\u62e9\u60a8\u5e0c\u671b\u83b7\u5f97\u901a\u77e5\u7684\u65b9\u5f0f\uff1a</th><td class=hastable><table class=rows><thead><tr><td></td>");
	var d = R.da.yx, e = R.da.Vo(), f = R.da.Ax, g = R.da.cE();
	for (var i = 0; i < d[t]; ++i) {
		a[q]("<th class=check>", e[d[i]] + "</th>");
	}
	a[q]("</tr></thead><tbody>");
	for (var i = 0; i < f[t]; ++i) {
		a[q]("<tr><th class=nobr>", g[f[i]], "</th>");
		var j = f[i];
		for (var m = 0; m < d[t]; ++m) {
			a[q]("<td class=check>");
			var n = d[m], p = "not" + j + "." + n, s = true, u = false;
			if (n == 2) {
				if (j == 6) {
					s = false;
				} else {
					u = !Qw();
				}
			}
			var v = HJ(c, j, n);
			s && bO(p, v, c, j, n, u, a);
			a[q](Cr);
		}
		a[q](Cr);
	}
	a[q]("</tbody></table></td></tr>");
	a[q](so);
}
function bO(a, b, c, d, e, f, g) {
	g[q]("<input id=\"", a, "\" name=\"", a, "\" type=checkbox");
	f && g[q](" disabled");
	b && g[q](" checked");
	g[q](" value=", b, zf);
}
function cO() {
	Gw.Dy(W("settingsForm"));
	if (sN) {
		sN.ia();
		sN = undefined;
	}
	Ck().he("newAccessPerson");
	uo();
}
function CN(a, b) {
	if (!gL) {
		return false;
	}
	var c = W("settingsForm"), d = gL.uh(c, false), e = W("newAccessPerson");
	if (e && e[B] != iK) {
		d = {};
	}
	var f = Un(a);
	if (d || gL.Mo().El) {
		if (!yy(f.rb ? "\u60a8\u786e\u5b9a\u8981\u653e\u5f03\u8fd9\u4e00\u65b0\u65e5\u5386\u5417\uff1f" : kK)) {
			return true;
		}
	}
	f.rb && ao(a);
	gL = null;
	if (b) {
		cO();
	} else {
		Gw.Dy(W("settingsForm"));
		Ck().he("newAccessPerson");
	}
	return false;
}
function AN(a) {
	var b = W("settingsForm"), c = Un(a), d = W("newAccessPerson");
	if (d && d[B] != iK) {
		if (!lN(d[B], W("newAccessLevel")[B])) {
			return;
		}
	}
	var e = gL.uh(b, c.rb), f = gL.Mo();
	if (!e && !f.El) {
		cO();
		return;
	}
	if (f.Ft) {
		Pp("\u8bbe\u7f6e\u9519\u8bef", f.Ft);
		return;
	}
	if (e) {
		if (c.rb || e.cn) {
			e.cn = wf(e.cn);
			if (e.cn == M) {
				Pp("\u8bbe\u7f6e\u9519\u8bef", "\u5f88\u62b1\u6b49\uff0c\u60a8\u65e0\u6cd5\u521b\u5efa\u6ca1\u6709\u540d\u79f0\u7684\u65e5\u5386");
				return;
			}
		}
		if (c.rb || e.tz) {
			e.tz = wf(e.tz);
			if (e.tz == M) {
				Pp("\u8bbe\u7f6e\u9519\u8bef", "\u5f88\u62b1\u6b49\uff0c\u4e0d\u9009\u62e9\u65f6\u533a\u5c06\u65e0\u6cd5\u4fdd\u5b58\u65e5\u5386");
				return;
			}
		}
		if (e[iN + Aw] == 20) {
			$n(function (g) {
				switch (g) {
				  case 0:
					dO(a, c, e, f);
					break;
				  case -1:
				  case 1:
					break;
				}
				return false;
			}, "\u8b66\u544a", "\u516c\u5f00\u60a8\u7684\u65e5\u5386\u5c06\u4f7f\u5916\u754c\u53ef\u4ee5\u901a\u8fc7 Google \u641c\u7d22\u7b49\u65b9\u5f0f\u67e5\u770b\u60a8\u7684\u6240\u6709\u6d3b\u52a8\u3002\u60a8\u786e\u5b9a\u5417\uff1f", [Zn("\u662f"), Zn("\u5426")]);
			return;
		}
	}
	dO(a, c, e, f);
}
function dO(a, b, c, d) {
	eO(a, b, c);
	d.El && d.LE(d.Rn);
	gL = null;
	cO();
}
function eO(a, b, c) {
	var d = [];
	if (b.rb) {
		d[q]("ncal", bi);
		cp[J] == 6 && eo(ys);
	}
	d[q]("dtid", a);
	var e = iN, f = new RegExp("^" + iN), g = [], i = Qm.f();
	for (var j in c) {
		if (j[Lc](f)) {
			var m = j[I](e[t], j[t]);
			if (c[j] == null || c[j] == 0) {
				d[q]("rp", m);
			} else {
				d[q]("ap", m);
				d[q]("ap", c[j]);
				if (m != Aw && m != b.wb && b.wb && c[j] >= 20) {
					var n = i.Ba(m), p = n ? n.na : m;
					mN(b, p) || g[q](p);
				}
			}
			continue;
		}
		d[q](XM[j], c[j]);
	}
	if (g[t] > 0) {
		if (!yy("\u60a8\u786e\u5b9a\u8981\u5411\u4ee5\u4e0b\u5e76\u4e0d\u5c5e\u4e8e\u6b64\u65e5\u5386\u57df\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u6388\u4e88\u8bbf\u95ee\u6743\u5417\uff1f\n\n" + g[K]("\n"))) {
			return;
		}
	}
	d[t] > 2 && Mk("editcaldetails", d, Lk(null, hK, 7));
}
function BN(a) {
	var b = W("settingsForm"), c = Un(a), d = gL.uh(b, false);
	if (!d || !d.overrideNameInput) {
		cO();
		return;
	}
	var e = Uk();
	e.aa(a + "/name", d.overrideNameInput == c.ua ? M : d.overrideNameInput);
	e.vc();
	c.ua = d.overrideNameInput;
	Y.f().Ed();
	gL = null;
	cO();
}
function fO(a) {
	om("\u6b63\u5728\u8bf7\u6c42\u65b0\u7f51\u5740...");
	Mk("editcaldetails", ["dtid", a, "rpvt", bi, OA, "jsquiet"], Lk(null, hK, 7));
}
function gO(a) {
	var a = a[A]("embed", "embedhelper");
	if (window[nc][id][Lc](/^https:/)) {
		a = a[A](/^http:/, "https:");
	}
	return a;
}
var hO = new T("<b>${desc}</b><br><br><div><a href=\"${href}\" target=\"_blank\">${href}</a></div>");
function iO(a, b, c, d, e) {
	var f;
	switch (b) {
	  case 0:
		hO.b("desc", "\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u7f51\u5740\u901a\u8fc7\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee\u4f7f\u7528\u60a8\u7684\u65e5\u5386\u3002\u53ef\u5c06\u5176\u590d\u5236\u548c\u7c98\u8d34\u5230\u4efb\u4f55\u4f9b\u7a3f\u9605\u8bfb\u5668\u4e2d\u3002");
		hO.b("href", a[id]);
		f = hO[r]();
		break;
	  case 1:
		hO.b("desc", "\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u7f51\u5740\u901a\u8fc7\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee\u4f7f\u7528\u60a8\u7684\u65e5\u5386\u3002\u53ef\u5c06\u5176\u590d\u5236\u548c\u7c98\u8d34\u5230\u4efb\u4f55\u652f\u6301 iCal \u683c\u5f0f\u7684\u65e5\u5386\u4ea7\u54c1\u4e2d\u3002");
		hO.b("href", a[id]);
		f = hO[r]();
		break;
	  case 2:
		var g = a[id], i = gO(g);
		f = "<b>" + ("\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u7f51\u5740\u5728\u4efb\u610f\u7f51\u7edc\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee\u60a8\u7684\u65e5\u5386\u3002<br><br> " + ("<a href=\"" + g + "\" target=\"_blank\" style=\"font-weight:normal;\">" + g + "</a>") + " <br><br>\u60a8\u53ef\u4ee5\u5c06 Google \u65e5\u5386\u5d4c\u5165\u60a8\u7684\u7f51\u7ad9\u6216\u535a\u5ba2\u4e2d\u3002\u4f7f\u7528\u6211\u4eec\u7684<a target=\"_blank\" href=\"" + i + "\">\u914d\u7f6e\u5de5\u5177</a>\u751f\u6210\u6240\u9700\u7684 HTML\u3002") + "</b>";
		break;
	  default:
		return;
	}
	if (e == true) {
		f += "<br><br>\u8b66\u544a\uff1a\u6ca1\u6709\u542f\u7528\u5bf9\u6b64\u65e5\u5386\u7684\u516c\u5171\u8bbf\u95ee\u6743\u3002\u5728\u66f4\u6539\u60a8\u7684\u5171\u4eab\u8bbe\u7f6e\u4e4b\u540e\u624d\u80fd\u4e0e\u5176\u4ed6\u4eba\u5171\u4eab\u6b64\u7f51\u5740\u3002";
	}
	if (d) {
		f += "<br><br>\u8b66\u544a\uff1a\u4efb\u4f55\u80fd\u770b\u5230\u6b64\u94fe\u63a5\u7684\u4efb\u4f55\u4eba\u90fd\u80fd\u591f\u6d4f\u89c8\u6b64\u65e5\u5386\u7684\u6240\u6709\u6d3b\u52a8\u8be6\u60c5\u3002";
	}
	Pp(c ? "\u65e5\u5386\u7f51\u5740" : "\u79c1\u4eba\u7f51\u5740", f);
}
function jO(a, b, c, d) {
	var e = Un(a), f = b == "public", g = !!(e.wb && !f), i = S(iO), j = Un(a).Th, m = f && 0 == j;
	e.qr && d[q]("<a onclick=\"" + i + "(this,0,", f, ",", g, ",", m, "); return false;\" target=\"_blank\" href=\"", P($M("feeds", a, b, c)), "\"><img src=\"images/xml.gif\"></a>&nbsp;", "<a onclick=\"" + i + "(this,1,", f, ",", g, ",", m, "); return false;\" target=\"_blank\" href=\"", P($M("ical", a, b, c)), "\"><img src=\"images/ical.gif\"></a>&nbsp;");
	d[q]("<a onclick=\"", i, "(this,2,", f, ",", g, "); return false;\" target=\"_blank\" href=\"", P(aN(a, b)), "\"><img src=\"images/html.gif\"></a>");
}
function LN(a) {
	var b = [], c;
	jO(a, "private-magic", "basic", b);
	var c = Gw.Uf(sf(kO, a));
	b[q]("&nbsp;&nbsp;&nbsp;<b class=lk-online onclick=\"", c, wk, "\u91cd\u7f6e\u79c1\u4eba\u7f51\u5740</b>");
	return b[K](M);
}
function kO(a) {
	if (!yy("\u8fd9\u5c06\u4f7f\u6240\u6709\u73b0\u6709\u79c1\u4eba\u4f9b\u7a3f\u5931\u6548\u3002\u60a8\u786e\u5b9a\u8981\u91cd\u7f6e\u79c1\u4eba\u4f9b\u7a3f\u7f51\u5740\u5417\uff1f")) {
		return true;
	}
	fO(a);
}
function KN(a, b, c, d) {
	lO(a, "public", b);
	//in calendar detail config page,no show "calendar net address"
	b[q]("<tr style=\"display:none\"");
	//show 
	//b[q]("<tr");
	d && b[q](" class=last");
	b[q]("><th>\u65e5\u5386\u7f51\u5740\uff1a");
	c && b[q]("<div class=desc>", R.M.jg(34578, "\u4e86\u89e3\u8be6\u60c5", "lk", null, null, "<br>"), "<a href=\"javascript:void(", S(kN), Vj, 1, ",", 0, ",'", a, "'))\">\u66f4\u6539\u5171\u4eab\u8bbe\u7f6e</a></div>");
	b[q]("</th><td>");
	jO(a, "public", "basic", b);
	var e = Un(a), f = P(e.nh);
	b[q]("&nbsp;&nbsp;&nbsp;", "\uff08\u65e5\u5386 ID\uff1a " + f + "\uff09");
	c && b[q]("<div class=desc>\u8fd9\u662f\u60a8\u7684\u65e5\u5386\u7684\u7f51\u5740\u3002\u5728\u60a8\u516c\u5f00\u65e5\u5386\u4e4b\u524d\uff0c\u6ca1\u6709\u4eba\u53ef\u4ee5\u4f7f\u7528\u6b64\u94fe\u63a5\u3002</div>");
	b[q]("</td></tr>");
}
//in calendar detail config page,no show "qianru the calendar"
var mO = new T("<tr style=\"display:none\"><th>\u5d4c\u5165\u6b64\u65e5\u5386<div class=desc>\u5c06\u6b64\u4ee3\u7801\u7c98\u8d34\u5230\u60a8\u7684\u7f51\u9875\uff0c\u5373\u53ef\u5c06\u6b64\u65e5\u5386\u5d4c\u5165\u60a8\u7684\u7f51\u7ad9\u4e2d\u3002 \u8981\u5d4c\u5165\u591a\u4e2a\u65e5\u5386\uff0c\u8bf7\u5355\u51fb\u201c\u81ea\u5b9a\u4e49\u94fe\u63a5\u201d</th><td class=hastable><table><tr><td><img src=\"images/embed_promo.gif\" style=\"margin-right:10px\"></td><td width=\"100%\"><div class=desc>\u5c06\u6b64\u4ee3\u7801\u7c98\u8d34\u5230\u60a8\u7684\u7f51\u7ad9\u4e2d\u3002</div><span class=lk-online onclick=\"${handler}\">\u81ea\u5b9a\u4e49\u989c\u8272\u3001\u5927\u5c0f\u548c\u5176\u4ed6\u9009\u9879</span><textarea rows=5 style=\"direction:ltr;margin-top:10px;width:90%\">&lt;iframe src=\"${embedUrlEscaped}\" style=\"border: 0\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"&gt;&lt;/iframe&gt;</textarea></td></tr></table></td></tr>");
//show the item
//var mO = new T("<tr><th>\u5d4c\u5165\u6b64\u65e5\u5386<div class=desc>\u5c06\u6b64\u4ee3\u7801\u7c98\u8d34\u5230\u60a8\u7684\u7f51\u9875\uff0c\u5373\u53ef\u5c06\u6b64\u65e5\u5386\u5d4c\u5165\u60a8\u7684\u7f51\u7ad9\u4e2d\u3002 \u8981\u5d4c\u5165\u591a\u4e2a\u65e5\u5386\uff0c\u8bf7\u5355\u51fb\u201c\u81ea\u5b9a\u4e49\u94fe\u63a5\u201d</th><td class=hastable><table><tr><td><img src=\"images/embed_promo.gif\" style=\"margin-right:10px\"></td><td width=\"100%\"><div class=desc>\u5c06\u6b64\u4ee3\u7801\u7c98\u8d34\u5230\u60a8\u7684\u7f51\u7ad9\u4e2d\u3002</div><span class=lk-online onclick=\"${handler}\">\u81ea\u5b9a\u4e49\u989c\u8272\u3001\u5927\u5c0f\u548c\u5176\u4ed6\u9009\u9879</span><textarea rows=5 style=\"direction:ltr;margin-top:10px;width:90%\">&lt;iframe src=\"${embedUrlEscaped}\" style=\"border: 0\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"&gt;&lt;/iframe&gt;</textarea></td></tr></table></td></tr>");
function lO(a, b, c) {
	Un(a);
	var d = aN(a, b), e = gO(d);
	function f() {
		window[yb](e, "_blank");
	}
	mO.b("handler", Gw.Uf(f));
	mO.b("embedUrlEscaped", P(d));
	c[q](mO[r]());
}
function _DS_StartPingForDetails(a) {
	if (a in VM) {
		return;
	}
	VM[a] = 0;
	function b() {
		function c() {
			window[Lb](d, 0);
		}
		function d() {
			var e = Un(a), f = e ? e.origin : null;
			if (f == "ICAL" || f == "ATOM") {
				delete VM[a];
				Mk(Jg, ["cid", a, "ltyp", 0, "lact", "ADD"]);
				zq();
				Aq();
				window[Lb](Aq, 15000);
				window[Lb](Aq, 45000);
			} else {
				if (f == "UNKNOWN" && VM[a] < 60) {
					++VM[a];
					window[Lb](b, 5000);
				} else {
					var g = e.$u;
					g || (g = "\u65e0\u6cd5\u4ece\u201c" + e.vj + "\u201d\u5bfc\u5165\u65e5\u5386\u3002");
					delete VM[a];
					Pp("\u8bbe\u7f6e\u9519\u8bef", g);
					Y.f().Xw(a);
					Pw();
				}
			}
		}
		Mk(Kg, ["dtid", a], c);
	}
	pa(b, 5000);
}
function oN(a) {
	if (a[cc] > 270) {
		Fa(a[F], "270px");
		Q && nO(a);
	}
}
function EN(a) {
	if (a) {
		var b = a[Hd]("select");
		for (var c = 0; c < b[t]; ++c) {
			oN(b[c]);
		}
	}
}
function nN(a, b, c) {
	var d = [];
	if (Q) {
		d[q]("onmouseover=\"", S(oO), "('", a.Xa, "')\" ");
		d[q]("onfocusin=\"", S(oO), "('", a.Xa, "')\" ");
		d[q]("onfocusout=\"", S(pO), "('", a.Xa, "')\" ");
	}
	sJ(a, b, c, M, d[K](M));
}
var qO = null;
function FN(a) {
	qO && a[Hc] != qO && rO(qO);
}
function oO(a) {
	sO(W(a));
}
function pO(a) {
	rO(W(a));
}
function sO(a) {
	tO(qO);
	qO = a;
	uO(a);
}
function rO(a) {
	tO(a);
	if (qO == a) {
		qO = null;
	}
}
function tO(a) {
	if (a) {
		Fa(a[jJ], M);
	}
}
function uO(a) {
	if (a) {
		Fa(a[jJ], "auto");
	}
}
function nO(a) {
	var b = UJ(window, a)[jJ];
	l(b, "inline-block");
	Fa(b, a[cc]);
	ob(b, a[Fd]);
	Ba(b, "relative");
	b.verticalAlign = "middle";
	var c = a[jJ];
	Ba(c, $l);
	c.top = 0;
	Wa(c, 0);
}
R.cs = BL;
R.Xy = cN;
R.wL = _DS_UpdateSecret;

