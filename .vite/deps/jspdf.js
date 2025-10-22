import { __toDynamicImportESM } from "./chunk-DL887vQu.js";
import { _typeof } from "./typeof-BZDReiG_.js";

//#region node_modules/fflate/esm/browser.js
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]);
var fdeb = new u8([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]);
var clim = new u8([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var freb = function(eb, start) {
	var b$1 = new u16(31);
	for (var i$2 = 0; i$2 < 31; ++i$2) b$1[i$2] = start += 1 << eb[i$2 - 1];
	var r = new i32(b$1[30]);
	for (var i$2 = 1; i$2 < 30; ++i$2) for (var j$1 = b$1[i$2]; j$1 < b$1[i$2 + 1]; ++j$1) r[j$1] = j$1 - b$1[i$2] << 5 | i$2;
	return {
		b: b$1,
		r
	};
};
var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b, revfd = _b.r;
var rev = new u16(32768);
for (var i$1 = 0; i$1 < 32768; ++i$1) {
	var x$1 = (i$1 & 43690) >> 1 | (i$1 & 21845) << 1;
	x$1 = (x$1 & 52428) >> 2 | (x$1 & 13107) << 2;
	x$1 = (x$1 & 61680) >> 4 | (x$1 & 3855) << 4;
	rev[i$1] = ((x$1 & 65280) >> 8 | (x$1 & 255) << 8) >> 1;
}
var hMap = (function(cd, mb, r) {
	var s$1 = cd.length;
	var i$2 = 0;
	var l$1 = new u16(mb);
	for (; i$2 < s$1; ++i$2) if (cd[i$2]) ++l$1[cd[i$2] - 1];
	var le$1 = new u16(mb);
	for (i$2 = 1; i$2 < mb; ++i$2) le$1[i$2] = le$1[i$2 - 1] + l$1[i$2 - 1] << 1;
	var co;
	if (r) {
		co = new u16(1 << mb);
		var rvb = 15 - mb;
		for (i$2 = 0; i$2 < s$1; ++i$2) if (cd[i$2]) {
			var sv = i$2 << 4 | cd[i$2];
			var r_1 = mb - cd[i$2];
			var v$1 = le$1[cd[i$2] - 1]++ << r_1;
			for (var m$1 = v$1 | (1 << r_1) - 1; v$1 <= m$1; ++v$1) co[rev[v$1] >> rvb] = sv;
		}
	} else {
		co = new u16(s$1);
		for (i$2 = 0; i$2 < s$1; ++i$2) if (cd[i$2]) co[i$2] = rev[le$1[cd[i$2] - 1]++] >> 15 - cd[i$2];
	}
	return co;
});
var flt = new u8(288);
for (var i$1 = 0; i$1 < 144; ++i$1) flt[i$1] = 8;
for (var i$1 = 144; i$1 < 256; ++i$1) flt[i$1] = 9;
for (var i$1 = 256; i$1 < 280; ++i$1) flt[i$1] = 7;
for (var i$1 = 280; i$1 < 288; ++i$1) flt[i$1] = 8;
var fdt = new u8(32);
for (var i$1 = 0; i$1 < 32; ++i$1) fdt[i$1] = 5;
var flm = /* @__PURE__ */ hMap(flt, 9, 0), flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0), fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var shft = function(p$1) {
	return (p$1 + 7) / 8 | 0;
};
var slc = function(v$1, s$1, e) {
	if (s$1 == null || s$1 < 0) s$1 = 0;
	if (e == null || e > v$1.length) e = v$1.length;
	return new u8(v$1.subarray(s$1, e));
};
var wbits = function(d$1, p$1, v$1) {
	v$1 <<= p$1 & 7;
	var o$1 = p$1 / 8 | 0;
	d$1[o$1] |= v$1;
	d$1[o$1 + 1] |= v$1 >> 8;
};
var wbits16 = function(d$1, p$1, v$1) {
	v$1 <<= p$1 & 7;
	var o$1 = p$1 / 8 | 0;
	d$1[o$1] |= v$1;
	d$1[o$1 + 1] |= v$1 >> 8;
	d$1[o$1 + 2] |= v$1 >> 16;
};
var hTree = function(d$1, mb) {
	var t = [];
	for (var i$2 = 0; i$2 < d$1.length; ++i$2) if (d$1[i$2]) t.push({
		s: i$2,
		f: d$1[i$2]
	});
	var s$1 = t.length;
	var t2 = t.slice();
	if (!s$1) return {
		t: et$1,
		l: 0
	};
	if (s$1 == 1) {
		var v$1 = new u8(t[0].s + 1);
		v$1[t[0].s] = 1;
		return {
			t: v$1,
			l: 1
		};
	}
	t.sort(function(a$1, b$1) {
		return a$1.f - b$1.f;
	});
	t.push({
		s: -1,
		f: 25001
	});
	var l$1 = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
	t[0] = {
		s: -1,
		f: l$1.f + r.f,
		l: l$1,
		r
	};
	while (i1 != s$1 - 1) {
		l$1 = t[t[i0].f < t[i2].f ? i0++ : i2++];
		r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
		t[i1++] = {
			s: -1,
			f: l$1.f + r.f,
			l: l$1,
			r
		};
	}
	var maxSym = t2[0].s;
	for (var i$2 = 1; i$2 < s$1; ++i$2) if (t2[i$2].s > maxSym) maxSym = t2[i$2].s;
	var tr = new u16(maxSym + 1);
	var mbt = ln(t[i1 - 1], tr, 0);
	if (mbt > mb) {
		var i$2 = 0, dt$1 = 0;
		var lft = mbt - mb, cst = 1 << lft;
		t2.sort(function(a$1, b$1) {
			return tr[b$1.s] - tr[a$1.s] || a$1.f - b$1.f;
		});
		for (; i$2 < s$1; ++i$2) {
			var i2_1 = t2[i$2].s;
			if (tr[i2_1] > mb) {
				dt$1 += cst - (1 << mbt - tr[i2_1]);
				tr[i2_1] = mb;
			} else break;
		}
		dt$1 >>= lft;
		while (dt$1 > 0) {
			var i2_2 = t2[i$2].s;
			if (tr[i2_2] < mb) dt$1 -= 1 << mb - tr[i2_2]++ - 1;
			else ++i$2;
		}
		for (; i$2 >= 0 && dt$1; --i$2) {
			var i2_3 = t2[i$2].s;
			if (tr[i2_3] == mb) {
				--tr[i2_3];
				++dt$1;
			}
		}
		mbt = mb;
	}
	return {
		t: new u8(tr),
		l: mbt
	};
};
var ln = function(n, l$1, d$1) {
	return n.s == -1 ? Math.max(ln(n.l, l$1, d$1 + 1), ln(n.r, l$1, d$1 + 1)) : l$1[n.s] = d$1;
};
var lc = function(c$1) {
	var s$1 = c$1.length;
	while (s$1 && !c$1[--s$1]);
	var cl = new u16(++s$1);
	var cli = 0, cln = c$1[0], cls = 1;
	var w$1 = function(v$1) {
		cl[cli++] = v$1;
	};
	for (var i$2 = 1; i$2 <= s$1; ++i$2) if (c$1[i$2] == cln && i$2 != s$1) ++cls;
	else {
		if (!cln && cls > 2) {
			for (; cls > 138; cls -= 138) w$1(32754);
			if (cls > 2) {
				w$1(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
				cls = 0;
			}
		} else if (cls > 3) {
			w$1(cln), --cls;
			for (; cls > 6; cls -= 6) w$1(8304);
			if (cls > 2) w$1(cls - 3 << 5 | 8208), cls = 0;
		}
		while (cls--) w$1(cln);
		cls = 1;
		cln = c$1[i$2];
	}
	return {
		c: cl.subarray(0, cli),
		n: s$1
	};
};
var clen = function(cf, cl) {
	var l$1 = 0;
	for (var i$2 = 0; i$2 < cl.length; ++i$2) l$1 += cf[i$2] * cl[i$2];
	return l$1;
};
var wfblk = function(out, pos, dat) {
	var s$1 = dat.length;
	var o$1 = shft(pos + 2);
	out[o$1] = s$1 & 255;
	out[o$1 + 1] = s$1 >> 8;
	out[o$1 + 2] = out[o$1] ^ 255;
	out[o$1 + 3] = out[o$1 + 1] ^ 255;
	for (var i$2 = 0; i$2 < s$1; ++i$2) out[o$1 + i$2 + 4] = dat[i$2];
	return (o$1 + 4 + s$1) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p$1) {
	wbits(out, p$1++, final);
	++lf[256];
	var _a$1 = hTree(lf, 15), dlt = _a$1.t, mlb = _a$1.l;
	var _b$1 = hTree(df, 15), ddt = _b$1.t, mdb = _b$1.l;
	var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
	var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
	var lcfreq = new u16(19);
	for (var i$2 = 0; i$2 < lclt.length; ++i$2) ++lcfreq[lclt[i$2] & 31];
	for (var i$2 = 0; i$2 < lcdt.length; ++i$2) ++lcfreq[lcdt[i$2] & 31];
	var _e$1 = hTree(lcfreq, 7), lct = _e$1.t, mlcb = _e$1.l;
	var nlcc = 19;
	for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
	var flen = bl + 5 << 3;
	var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
	var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
	if (bs >= 0 && flen <= ftlen && flen <= dtlen) return wfblk(out, p$1, dat.subarray(bs, bs + bl));
	var lm, ll, dm, dl;
	wbits(out, p$1, 1 + (dtlen < ftlen)), p$1 += 2;
	if (dtlen < ftlen) {
		lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
		var llm = hMap(lct, mlcb, 0);
		wbits(out, p$1, nlc - 257);
		wbits(out, p$1 + 5, ndc - 1);
		wbits(out, p$1 + 10, nlcc - 4);
		p$1 += 14;
		for (var i$2 = 0; i$2 < nlcc; ++i$2) wbits(out, p$1 + 3 * i$2, lct[clim[i$2]]);
		p$1 += 3 * nlcc;
		var lcts = [lclt, lcdt];
		for (var it$1 = 0; it$1 < 2; ++it$1) {
			var clct = lcts[it$1];
			for (var i$2 = 0; i$2 < clct.length; ++i$2) {
				var len = clct[i$2] & 31;
				wbits(out, p$1, llm[len]), p$1 += lct[len];
				if (len > 15) wbits(out, p$1, clct[i$2] >> 5 & 127), p$1 += clct[i$2] >> 12;
			}
		}
	} else lm = flm, ll = flt, dm = fdm, dl = fdt;
	for (var i$2 = 0; i$2 < li; ++i$2) {
		var sym = syms[i$2];
		if (sym > 255) {
			var len = sym >> 18 & 31;
			wbits16(out, p$1, lm[len + 257]), p$1 += ll[len + 257];
			if (len > 7) wbits(out, p$1, sym >> 23 & 31), p$1 += fleb[len];
			var dst = sym & 31;
			wbits16(out, p$1, dm[dst]), p$1 += dl[dst];
			if (dst > 3) wbits16(out, p$1, sym >> 5 & 8191), p$1 += fdeb[dst];
		} else wbits16(out, p$1, lm[sym]), p$1 += ll[sym];
	}
	wbits16(out, p$1, lm[256]);
	return p$1 + ll[256];
};
var deo = /* @__PURE__ */ new i32([
	65540,
	131080,
	131088,
	131104,
	262176,
	1048704,
	1048832,
	2114560,
	2117632
]);
var et$1 = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st$1) {
	var s$1 = st$1.z || dat.length;
	var o$1 = new u8(pre + s$1 + 5 * (1 + Math.ceil(s$1 / 7e3)) + post);
	var w$1 = o$1.subarray(pre, o$1.length - post);
	var lst = st$1.l;
	var pos = (st$1.r || 0) & 7;
	if (lvl) {
		if (pos) w$1[0] = st$1.r >> 3;
		var opt = deo[lvl - 1];
		var n = opt >> 13, c$1 = opt & 8191;
		var msk_1 = (1 << plvl) - 1;
		var prev = st$1.p || new u16(32768), head = st$1.h || new u16(msk_1 + 1);
		var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
		var hsh = function(i$3) {
			return (dat[i$3] ^ dat[i$3 + 1] << bs1_1 ^ dat[i$3 + 2] << bs2_1) & msk_1;
		};
		var syms = new i32(25e3);
		var lf = new u16(288), df = new u16(32);
		var lc_1 = 0, eb = 0, i$2 = st$1.i || 0, li = 0, wi = st$1.w || 0, bs = 0;
		for (; i$2 + 2 < s$1; ++i$2) {
			var hv = hsh(i$2);
			var imod = i$2 & 32767, pimod = head[hv];
			prev[imod] = pimod;
			head[hv] = imod;
			if (wi <= i$2) {
				var rem = s$1 - i$2;
				if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
					pos = wblk(dat, w$1, 0, syms, lf, df, eb, li, bs, i$2 - bs, pos);
					li = lc_1 = eb = 0, bs = i$2;
					for (var j$1 = 0; j$1 < 286; ++j$1) lf[j$1] = 0;
					for (var j$1 = 0; j$1 < 30; ++j$1) df[j$1] = 0;
				}
				var l$1 = 2, d$1 = 0, ch_1 = c$1, dif = imod - pimod & 32767;
				if (rem > 2 && hv == hsh(i$2 - dif)) {
					var maxn = Math.min(n, rem) - 1;
					var maxd = Math.min(32767, i$2);
					var ml = Math.min(258, rem);
					while (dif <= maxd && --ch_1 && imod != pimod) {
						if (dat[i$2 + l$1] == dat[i$2 + l$1 - dif]) {
							var nl = 0;
							for (; nl < ml && dat[i$2 + nl] == dat[i$2 + nl - dif]; ++nl);
							if (nl > l$1) {
								l$1 = nl, d$1 = dif;
								if (nl > maxn) break;
								var mmd = Math.min(dif, nl - 2);
								var md = 0;
								for (var j$1 = 0; j$1 < mmd; ++j$1) {
									var ti = i$2 - dif + j$1 & 32767;
									var pti = prev[ti];
									var cd = ti - pti & 32767;
									if (cd > md) md = cd, pimod = ti;
								}
							}
						}
						imod = pimod, pimod = prev[imod];
						dif += imod - pimod & 32767;
					}
				}
				if (d$1) {
					syms[li++] = 268435456 | revfl[l$1] << 18 | revfd[d$1];
					var lin = revfl[l$1] & 31, din = revfd[d$1] & 31;
					eb += fleb[lin] + fdeb[din];
					++lf[257 + lin];
					++df[din];
					wi = i$2 + l$1;
					++lc_1;
				} else {
					syms[li++] = dat[i$2];
					++lf[dat[i$2]];
				}
			}
		}
		for (i$2 = Math.max(i$2, wi); i$2 < s$1; ++i$2) {
			syms[li++] = dat[i$2];
			++lf[dat[i$2]];
		}
		pos = wblk(dat, w$1, lst, syms, lf, df, eb, li, bs, i$2 - bs, pos);
		if (!lst) {
			st$1.r = pos & 7 | w$1[pos / 8 | 0] << 3;
			pos -= 7;
			st$1.h = head, st$1.p = prev, st$1.i = i$2, st$1.w = wi;
		}
	} else {
		for (var i$2 = st$1.w || 0; i$2 < s$1 + lst; i$2 += 65535) {
			var e = i$2 + 65535;
			if (e >= s$1) {
				w$1[pos / 8 | 0] = lst;
				e = s$1;
			}
			pos = wfblk(w$1, pos + 1, dat.subarray(i$2, e));
		}
		st$1.i = s$1;
	}
	return slc(o$1, 0, pre + shft(pos) + post);
};
var adler = function() {
	var a$1 = 1, b$1 = 0;
	return {
		p: function(d$1) {
			var n = a$1, m$1 = b$1;
			var l$1 = d$1.length | 0;
			for (var i$2 = 0; i$2 != l$1;) {
				var e = Math.min(i$2 + 2655, l$1);
				for (; i$2 < e; ++i$2) m$1 += n += d$1[i$2];
				n = (n & 65535) + 15 * (n >> 16), m$1 = (m$1 & 65535) + 15 * (m$1 >> 16);
			}
			a$1 = n, b$1 = m$1;
		},
		d: function() {
			a$1 %= 65521, b$1 %= 65521;
			return (a$1 & 255) << 24 | (a$1 & 65280) << 8 | (b$1 & 255) << 8 | b$1 >> 8;
		}
	};
};
var dopt = function(dat, opt, pre, post, st$1) {
	if (!st$1) {
		st$1 = { l: 1 };
		if (opt.dictionary) {
			var dict = opt.dictionary.subarray(-32768);
			var newDat = new u8(dict.length + dat.length);
			newDat.set(dict);
			newDat.set(dat, dict.length);
			dat = newDat;
			st$1.w = dict.length;
		}
	}
	return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st$1.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st$1);
};
var wbytes = function(d$1, b$1, v$1) {
	for (; v$1; ++b$1) d$1[b$1] = v$1, v$1 >>>= 8;
};
var zlh = function(c$1, o$1) {
	var lv = o$1.level, fl$1 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
	c$1[0] = 120, c$1[1] = fl$1 << 6 | (o$1.dictionary && 32);
	c$1[1] |= 31 - (c$1[0] << 8 | c$1[1]) % 31;
	if (o$1.dictionary) {
		var h$1 = adler();
		h$1.p(o$1.dictionary);
		wbytes(c$1, 2, h$1.d());
	}
};
/**
* Compress data with Zlib
* @param data The data to compress
* @param opts The compression options
* @returns The zlib-compressed version of the data
*/
function zlibSync(data, opts) {
	if (!opts) opts = {};
	var a$1 = adler();
	a$1.p(data);
	var d$1 = dopt(data, opts, opts.dictionary ? 6 : 2, 4);
	return zlh(d$1, opts), wbytes(d$1, d$1.length - 4, a$1.d()), d$1;
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
	td.decode(et$1, { stream: true });
	tds = 1;
} catch (e) {}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
	if (Array.isArray(r)) return r;
}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l$1) {
	var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (null != t) {
		var e, n, i$2, u$1, a$1 = [], f$1 = !0, o$1 = !1;
		try {
			if (i$2 = (t = t.call(r)).next, 0 === l$1) {
				if (Object(t) !== t) return;
				f$1 = !1;
			} else for (; !(f$1 = (e = i$2.call(t)).done) && (a$1.push(e.value), a$1.length !== l$1); f$1 = !0);
		} catch (r$1) {
			o$1 = !0, n = r$1;
		} finally {
			try {
				if (!f$1 && null != t["return"] && (u$1 = t["return"](), Object(u$1) !== u$1)) return;
			} finally {
				if (o$1) throw n;
			}
		}
		return a$1;
	}
}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a$1) {
	(null == a$1 || a$1 > r.length) && (a$1 = r.length);
	for (var e = 0, n = Array(a$1); e < a$1; e++) n[e] = r[e];
	return n;
}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a$1) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a$1);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a$1) : void 0;
	}
}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r, e) {
	return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

//#endregion
//#region node_modules/iobuffer/lib-esm/text.js
function decode(bytes, encoding = "utf8") {
	return new TextDecoder(encoding).decode(bytes);
}
var encoder = new TextEncoder();
function encode(str) {
	return encoder.encode(str);
}

//#endregion
//#region node_modules/iobuffer/lib-esm/IOBuffer.js
var defaultByteLength = 1024 * 8;
var hostBigEndian = (() => {
	const array = new Uint8Array(4);
	const view = new Uint32Array(array.buffer);
	return !((view[0] = 1) & array[0]);
})();
var typedArrays = {
	int8: globalThis.Int8Array,
	uint8: globalThis.Uint8Array,
	int16: globalThis.Int16Array,
	uint16: globalThis.Uint16Array,
	int32: globalThis.Int32Array,
	uint32: globalThis.Uint32Array,
	uint64: globalThis.BigUint64Array,
	int64: globalThis.BigInt64Array,
	float32: globalThis.Float32Array,
	float64: globalThis.Float64Array
};
var IOBuffer = class IOBuffer {
	/**
	* Reference to the internal ArrayBuffer object.
	*/
	buffer;
	/**
	* Byte length of the internal ArrayBuffer.
	*/
	byteLength;
	/**
	* Byte offset of the internal ArrayBuffer.
	*/
	byteOffset;
	/**
	* Byte length of the internal ArrayBuffer.
	*/
	length;
	/**
	* The current offset of the buffer's pointer.
	*/
	offset;
	lastWrittenByte;
	littleEndian;
	_data;
	_mark;
	_marks;
	/**
	* Create a new IOBuffer.
	* @param data - The data to construct the IOBuffer with.
	* If data is a number, it will be the new buffer's length<br>
	* If data is `undefined`, the buffer will be initialized with a default length of 8Kb<br>
	* If data is an ArrayBuffer, SharedArrayBuffer, an ArrayBufferView (Typed Array), an IOBuffer instance,
	* or a Node.js Buffer, a view will be created over the underlying ArrayBuffer.
	* @param options - An object for the options.
	* @returns A new IOBuffer instance.
	*/
	constructor(data = defaultByteLength, options = {}) {
		let dataIsGiven = false;
		if (typeof data === "number") data = new ArrayBuffer(data);
		else {
			dataIsGiven = true;
			this.lastWrittenByte = data.byteLength;
		}
		const offset = options.offset ? options.offset >>> 0 : 0;
		const byteLength = data.byteLength - offset;
		let dvOffset = offset;
		if (ArrayBuffer.isView(data) || data instanceof IOBuffer) {
			if (data.byteLength !== data.buffer.byteLength) dvOffset = data.byteOffset + offset;
			data = data.buffer;
		}
		if (dataIsGiven) this.lastWrittenByte = byteLength;
		else this.lastWrittenByte = 0;
		this.buffer = data;
		this.length = byteLength;
		this.byteLength = byteLength;
		this.byteOffset = dvOffset;
		this.offset = 0;
		this.littleEndian = true;
		this._data = new DataView(this.buffer, dvOffset, byteLength);
		this._mark = 0;
		this._marks = [];
	}
	/**
	* Checks if the memory allocated to the buffer is sufficient to store more
	* bytes after the offset.
	* @param byteLength - The needed memory in bytes.
	* @returns `true` if there is sufficient space and `false` otherwise.
	*/
	available(byteLength = 1) {
		return this.offset + byteLength <= this.length;
	}
	/**
	* Check if little-endian mode is used for reading and writing multi-byte
	* values.
	* @returns `true` if little-endian mode is used, `false` otherwise.
	*/
	isLittleEndian() {
		return this.littleEndian;
	}
	/**
	* Set little-endian mode for reading and writing multi-byte values.
	* @returns This.
	*/
	setLittleEndian() {
		this.littleEndian = true;
		return this;
	}
	/**
	* Check if big-endian mode is used for reading and writing multi-byte values.
	* @returns `true` if big-endian mode is used, `false` otherwise.
	*/
	isBigEndian() {
		return !this.littleEndian;
	}
	/**
	* Switches to big-endian mode for reading and writing multi-byte values.
	* @returns This.
	*/
	setBigEndian() {
		this.littleEndian = false;
		return this;
	}
	/**
	* Move the pointer n bytes forward.
	* @param n - Number of bytes to skip.
	* @returns This.
	*/
	skip(n = 1) {
		this.offset += n;
		return this;
	}
	/**
	* Move the pointer n bytes backward.
	* @param n - Number of bytes to move back.
	* @returns This.
	*/
	back(n = 1) {
		this.offset -= n;
		return this;
	}
	/**
	* Move the pointer to the given offset.
	* @param offset - The offset to move to.
	* @returns This.
	*/
	seek(offset) {
		this.offset = offset;
		return this;
	}
	/**
	* Store the current pointer offset.
	* @see {@link IOBuffer#reset}
	* @returns This.
	*/
	mark() {
		this._mark = this.offset;
		return this;
	}
	/**
	* Move the pointer back to the last pointer offset set by mark.
	* @see {@link IOBuffer#mark}
	* @returns This.
	*/
	reset() {
		this.offset = this._mark;
		return this;
	}
	/**
	* Push the current pointer offset to the mark stack.
	* @see {@link IOBuffer#popMark}
	* @returns This.
	*/
	pushMark() {
		this._marks.push(this.offset);
		return this;
	}
	/**
	* Pop the last pointer offset from the mark stack, and set the current
	* pointer offset to the popped value.
	* @see {@link IOBuffer#pushMark}
	* @returns This.
	*/
	popMark() {
		const offset = this._marks.pop();
		if (offset === void 0) throw new Error("Mark stack empty");
		this.seek(offset);
		return this;
	}
	/**
	* Move the pointer offset back to 0.
	* @returns This.
	*/
	rewind() {
		this.offset = 0;
		return this;
	}
	/**
	* Make sure the buffer has sufficient memory to write a given byteLength at
	* the current pointer offset.
	* If the buffer's memory is insufficient, this method will create a new
	* buffer (a copy) with a length that is twice (byteLength + current offset).
	* @param byteLength - The needed memory in bytes.
	* @returns This.
	*/
	ensureAvailable(byteLength = 1) {
		if (!this.available(byteLength)) {
			const newLength = (this.offset + byteLength) * 2;
			const newArray = new Uint8Array(newLength);
			newArray.set(new Uint8Array(this.buffer));
			this.buffer = newArray.buffer;
			this.length = newLength;
			this.byteLength = newLength;
			this._data = new DataView(this.buffer);
		}
		return this;
	}
	/**
	* Read a byte and return false if the byte's value is 0, or true otherwise.
	* Moves pointer forward by one byte.
	* @returns The read boolean.
	*/
	readBoolean() {
		return this.readUint8() !== 0;
	}
	/**
	* Read a signed 8-bit integer and move pointer forward by 1 byte.
	* @returns The read byte.
	*/
	readInt8() {
		return this._data.getInt8(this.offset++);
	}
	/**
	* Read an unsigned 8-bit integer and move pointer forward by 1 byte.
	* @returns The read byte.
	*/
	readUint8() {
		return this._data.getUint8(this.offset++);
	}
	/**
	* Alias for {@link IOBuffer#readUint8}.
	* @returns The read byte.
	*/
	readByte() {
		return this.readUint8();
	}
	/**
	* Read `n` bytes and move pointer forward by `n` bytes.
	* @param n - Number of bytes to read.
	* @returns The read bytes.
	*/
	readBytes(n = 1) {
		return this.readArray(n, "uint8");
	}
	/**
	* Creates an array of corresponding to the type `type` and size `size`.
	* For example type `uint8` will create a `Uint8Array`.
	* @param size - size of the resulting array
	* @param type - number type of elements to read
	* @returns The read array.
	*/
	readArray(size, type) {
		const bytes = typedArrays[type].BYTES_PER_ELEMENT * size;
		const offset = this.byteOffset + this.offset;
		const slice = this.buffer.slice(offset, offset + bytes);
		if (this.littleEndian === hostBigEndian && type !== "uint8" && type !== "int8") {
			const slice$1 = new Uint8Array(this.buffer.slice(offset, offset + bytes));
			slice$1.reverse();
			const returnArray$1 = new typedArrays[type](slice$1.buffer);
			this.offset += bytes;
			returnArray$1.reverse();
			return returnArray$1;
		}
		const returnArray = new typedArrays[type](slice);
		this.offset += bytes;
		return returnArray;
	}
	/**
	* Read a 16-bit signed integer and move pointer forward by 2 bytes.
	* @returns The read value.
	*/
	readInt16() {
		const value = this._data.getInt16(this.offset, this.littleEndian);
		this.offset += 2;
		return value;
	}
	/**
	* Read a 16-bit unsigned integer and move pointer forward by 2 bytes.
	* @returns The read value.
	*/
	readUint16() {
		const value = this._data.getUint16(this.offset, this.littleEndian);
		this.offset += 2;
		return value;
	}
	/**
	* Read a 32-bit signed integer and move pointer forward by 4 bytes.
	* @returns The read value.
	*/
	readInt32() {
		const value = this._data.getInt32(this.offset, this.littleEndian);
		this.offset += 4;
		return value;
	}
	/**
	* Read a 32-bit unsigned integer and move pointer forward by 4 bytes.
	* @returns The read value.
	*/
	readUint32() {
		const value = this._data.getUint32(this.offset, this.littleEndian);
		this.offset += 4;
		return value;
	}
	/**
	* Read a 32-bit floating number and move pointer forward by 4 bytes.
	* @returns The read value.
	*/
	readFloat32() {
		const value = this._data.getFloat32(this.offset, this.littleEndian);
		this.offset += 4;
		return value;
	}
	/**
	* Read a 64-bit floating number and move pointer forward by 8 bytes.
	* @returns The read value.
	*/
	readFloat64() {
		const value = this._data.getFloat64(this.offset, this.littleEndian);
		this.offset += 8;
		return value;
	}
	/**
	* Read a 64-bit signed integer number and move pointer forward by 8 bytes.
	* @returns The read value.
	*/
	readBigInt64() {
		const value = this._data.getBigInt64(this.offset, this.littleEndian);
		this.offset += 8;
		return value;
	}
	/**
	* Read a 64-bit unsigned integer number and move pointer forward by 8 bytes.
	* @returns The read value.
	*/
	readBigUint64() {
		const value = this._data.getBigUint64(this.offset, this.littleEndian);
		this.offset += 8;
		return value;
	}
	/**
	* Read a 1-byte ASCII character and move pointer forward by 1 byte.
	* @returns The read character.
	*/
	readChar() {
		return String.fromCharCode(this.readInt8());
	}
	/**
	* Read `n` 1-byte ASCII characters and move pointer forward by `n` bytes.
	* @param n - Number of characters to read.
	* @returns The read characters.
	*/
	readChars(n = 1) {
		let result = "";
		for (let i$2 = 0; i$2 < n; i$2++) result += this.readChar();
		return result;
	}
	/**
	* Read the next `n` bytes, return a UTF-8 decoded string and move pointer
	* forward by `n` bytes.
	* @param n - Number of bytes to read.
	* @returns The decoded string.
	*/
	readUtf8(n = 1) {
		return decode(this.readBytes(n));
	}
	/**
	* Read the next `n` bytes, return a string decoded with `encoding` and move pointer
	* forward by `n` bytes.
	* If no encoding is passed, the function is equivalent to @see {@link IOBuffer#readUtf8}
	* @param n - Number of bytes to read.
	* @param encoding - The encoding to use. Default is 'utf8'.
	* @returns The decoded string.
	*/
	decodeText(n = 1, encoding = "utf8") {
		return decode(this.readBytes(n), encoding);
	}
	/**
	* Write 0xff if the passed value is truthy, 0x00 otherwise and move pointer
	* forward by 1 byte.
	* @param value - The value to write.
	* @returns This.
	*/
	writeBoolean(value) {
		this.writeUint8(value ? 255 : 0);
		return this;
	}
	/**
	* Write `value` as an 8-bit signed integer and move pointer forward by 1 byte.
	* @param value - The value to write.
	* @returns This.
	*/
	writeInt8(value) {
		this.ensureAvailable(1);
		this._data.setInt8(this.offset++, value);
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* Write `value` as an 8-bit unsigned integer and move pointer forward by 1
	* byte.
	* @param value - The value to write.
	* @returns This.
	*/
	writeUint8(value) {
		this.ensureAvailable(1);
		this._data.setUint8(this.offset++, value);
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* An alias for {@link IOBuffer#writeUint8}.
	* @param value - The value to write.
	* @returns This.
	*/
	writeByte(value) {
		return this.writeUint8(value);
	}
	/**
	* Write all elements of `bytes` as uint8 values and move pointer forward by
	* `bytes.length` bytes.
	* @param bytes - The array of bytes to write.
	* @returns This.
	*/
	writeBytes(bytes) {
		this.ensureAvailable(bytes.length);
		for (let i$2 = 0; i$2 < bytes.length; i$2++) this._data.setUint8(this.offset++, bytes[i$2]);
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* Write `value` as a 16-bit signed integer and move pointer forward by 2
	* bytes.
	* @param value - The value to write.
	* @returns This.
	*/
	writeInt16(value) {
		this.ensureAvailable(2);
		this._data.setInt16(this.offset, value, this.littleEndian);
		this.offset += 2;
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* Write `value` as a 16-bit unsigned integer and move pointer forward by 2
	* bytes.
	* @param value - The value to write.
	* @returns This.
	*/
	writeUint16(value) {
		this.ensureAvailable(2);
		this._data.setUint16(this.offset, value, this.littleEndian);
		this.offset += 2;
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* Write `value` as a 32-bit signed integer and move pointer forward by 4
	* bytes.
	* @param value - The value to write.
	* @returns This.
	*/
	writeInt32(value) {
		this.ensureAvailable(4);
		this._data.setInt32(this.offset, value, this.littleEndian);
		this.offset += 4;
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* Write `value` as a 32-bit unsigned integer and move pointer forward by 4
	* bytes.
	* @param value - The value to write.
	* @returns This.
	*/
	writeUint32(value) {
		this.ensureAvailable(4);
		this._data.setUint32(this.offset, value, this.littleEndian);
		this.offset += 4;
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* Write `value` as a 32-bit floating number and move pointer forward by 4
	* bytes.
	* @param value - The value to write.
	* @returns This.
	*/
	writeFloat32(value) {
		this.ensureAvailable(4);
		this._data.setFloat32(this.offset, value, this.littleEndian);
		this.offset += 4;
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* Write `value` as a 64-bit floating number and move pointer forward by 8
	* bytes.
	* @param value - The value to write.
	* @returns This.
	*/
	writeFloat64(value) {
		this.ensureAvailable(8);
		this._data.setFloat64(this.offset, value, this.littleEndian);
		this.offset += 8;
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* Write `value` as a 64-bit signed bigint and move pointer forward by 8
	* bytes.
	* @param value - The value to write.
	* @returns This.
	*/
	writeBigInt64(value) {
		this.ensureAvailable(8);
		this._data.setBigInt64(this.offset, value, this.littleEndian);
		this.offset += 8;
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* Write `value` as a 64-bit unsigned bigint and move pointer forward by 8
	* bytes.
	* @param value - The value to write.
	* @returns This.
	*/
	writeBigUint64(value) {
		this.ensureAvailable(8);
		this._data.setBigUint64(this.offset, value, this.littleEndian);
		this.offset += 8;
		this._updateLastWrittenByte();
		return this;
	}
	/**
	* Write the charCode of `str`'s first character as an 8-bit unsigned integer
	* and move pointer forward by 1 byte.
	* @param str - The character to write.
	* @returns This.
	*/
	writeChar(str) {
		return this.writeUint8(str.charCodeAt(0));
	}
	/**
	* Write the charCodes of all `str`'s characters as 8-bit unsigned integers
	* and move pointer forward by `str.length` bytes.
	* @param str - The characters to write.
	* @returns This.
	*/
	writeChars(str) {
		for (let i$2 = 0; i$2 < str.length; i$2++) this.writeUint8(str.charCodeAt(i$2));
		return this;
	}
	/**
	* UTF-8 encode and write `str` to the current pointer offset and move pointer
	* forward according to the encoded length.
	* @param str - The string to write.
	* @returns This.
	*/
	writeUtf8(str) {
		return this.writeBytes(encode(str));
	}
	/**
	* Export a Uint8Array view of the internal buffer.
	* The view starts at the byte offset and its length
	* is calculated to stop at the last written byte or the original length.
	* @returns A new Uint8Array view.
	*/
	toArray() {
		return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
	}
	/**
	*  Get the total number of bytes written so far, regardless of the current offset.
	* @returns - Total number of bytes.
	*/
	getWrittenByteLength() {
		return this.lastWrittenByte - this.byteOffset;
	}
	/**
	* Update the last written byte offset
	* @private
	*/
	_updateLastWrittenByte() {
		if (this.offset > this.lastWrittenByte) this.lastWrittenByte = this.offset;
	}
};

//#endregion
//#region node_modules/pako/dist/pako.esm.mjs
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
var Z_FIXED$1 = 4;
var Z_BINARY = 0;
var Z_TEXT = 1;
var Z_UNKNOWN$1 = 2;
function zero$1(buf) {
	let len = buf.length;
	while (--len >= 0) buf[len] = 0;
}
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
var MIN_MATCH$1 = 3;
var MAX_MATCH$1 = 258;
var LENGTH_CODES$1 = 29;
var LITERALS$1 = 256;
var L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
var D_CODES$1 = 30;
var BL_CODES$1 = 19;
var HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
var MAX_BITS$1 = 15;
var Buf_size = 16;
var MAX_BL_BITS = 7;
var END_BLOCK = 256;
var REP_3_6 = 16;
var REPZ_3_10 = 17;
var REPZ_11_138 = 18;
var extra_lbits = new Uint8Array([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0
]);
var extra_dbits = new Uint8Array([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13
]);
var extra_blbits = new Uint8Array([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	2,
	3,
	7
]);
var bl_order = new Uint8Array([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var DIST_CODE_LEN = 512;
var static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
var static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
var _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
var _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
var base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
var base_dist = new Array(D_CODES$1);
zero$1(base_dist);
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
	this.static_tree = static_tree;
	this.extra_bits = extra_bits;
	this.extra_base = extra_base;
	this.elems = elems;
	this.max_length = max_length;
	this.has_stree = static_tree && static_tree.length;
}
var static_l_desc;
var static_d_desc;
var static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
	this.dyn_tree = dyn_tree;
	this.max_code = 0;
	this.stat_desc = stat_desc;
}
var d_code = (dist) => {
	return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
var put_short = (s$1, w$1) => {
	s$1.pending_buf[s$1.pending++] = w$1 & 255;
	s$1.pending_buf[s$1.pending++] = w$1 >>> 8 & 255;
};
var send_bits = (s$1, value, length) => {
	if (s$1.bi_valid > Buf_size - length) {
		s$1.bi_buf |= value << s$1.bi_valid & 65535;
		put_short(s$1, s$1.bi_buf);
		s$1.bi_buf = value >> Buf_size - s$1.bi_valid;
		s$1.bi_valid += length - Buf_size;
	} else {
		s$1.bi_buf |= value << s$1.bi_valid & 65535;
		s$1.bi_valid += length;
	}
};
var send_code = (s$1, c$1, tree) => {
	send_bits(s$1, tree[c$1 * 2], tree[c$1 * 2 + 1]);
};
var bi_reverse = (code, len) => {
	let res = 0;
	do {
		res |= code & 1;
		code >>>= 1;
		res <<= 1;
	} while (--len > 0);
	return res >>> 1;
};
var bi_flush = (s$1) => {
	if (s$1.bi_valid === 16) {
		put_short(s$1, s$1.bi_buf);
		s$1.bi_buf = 0;
		s$1.bi_valid = 0;
	} else if (s$1.bi_valid >= 8) {
		s$1.pending_buf[s$1.pending++] = s$1.bi_buf & 255;
		s$1.bi_buf >>= 8;
		s$1.bi_valid -= 8;
	}
};
var gen_bitlen = (s$1, desc) => {
	const tree = desc.dyn_tree;
	const max_code = desc.max_code;
	const stree = desc.stat_desc.static_tree;
	const has_stree = desc.stat_desc.has_stree;
	const extra = desc.stat_desc.extra_bits;
	const base = desc.stat_desc.extra_base;
	const max_length = desc.stat_desc.max_length;
	let h$1;
	let n, m$1;
	let bits;
	let xbits;
	let f$1;
	let overflow = 0;
	for (bits = 0; bits <= MAX_BITS$1; bits++) s$1.bl_count[bits] = 0;
	tree[s$1.heap[s$1.heap_max] * 2 + 1] = 0;
	for (h$1 = s$1.heap_max + 1; h$1 < HEAP_SIZE$1; h$1++) {
		n = s$1.heap[h$1];
		bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
		if (bits > max_length) {
			bits = max_length;
			overflow++;
		}
		tree[n * 2 + 1] = bits;
		if (n > max_code) continue;
		s$1.bl_count[bits]++;
		xbits = 0;
		if (n >= base) xbits = extra[n - base];
		f$1 = tree[n * 2];
		s$1.opt_len += f$1 * (bits + xbits);
		if (has_stree) s$1.static_len += f$1 * (stree[n * 2 + 1] + xbits);
	}
	if (overflow === 0) return;
	do {
		bits = max_length - 1;
		while (s$1.bl_count[bits] === 0) bits--;
		s$1.bl_count[bits]--;
		s$1.bl_count[bits + 1] += 2;
		s$1.bl_count[max_length]--;
		overflow -= 2;
	} while (overflow > 0);
	for (bits = max_length; bits !== 0; bits--) {
		n = s$1.bl_count[bits];
		while (n !== 0) {
			m$1 = s$1.heap[--h$1];
			if (m$1 > max_code) continue;
			if (tree[m$1 * 2 + 1] !== bits) {
				s$1.opt_len += (bits - tree[m$1 * 2 + 1]) * tree[m$1 * 2];
				tree[m$1 * 2 + 1] = bits;
			}
			n--;
		}
	}
};
var gen_codes = (tree, max_code, bl_count) => {
	const next_code = new Array(MAX_BITS$1 + 1);
	let code = 0;
	let bits;
	let n;
	for (bits = 1; bits <= MAX_BITS$1; bits++) {
		code = code + bl_count[bits - 1] << 1;
		next_code[bits] = code;
	}
	for (n = 0; n <= max_code; n++) {
		let len = tree[n * 2 + 1];
		if (len === 0) continue;
		tree[n * 2] = bi_reverse(next_code[len]++, len);
	}
};
var tr_static_init = () => {
	let n;
	let bits;
	let length;
	let code;
	let dist;
	const bl_count = new Array(MAX_BITS$1 + 1);
	length = 0;
	for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
		base_length[code] = length;
		for (n = 0; n < 1 << extra_lbits[code]; n++) _length_code[length++] = code;
	}
	_length_code[length - 1] = code;
	dist = 0;
	for (code = 0; code < 16; code++) {
		base_dist[code] = dist;
		for (n = 0; n < 1 << extra_dbits[code]; n++) _dist_code[dist++] = code;
	}
	dist >>= 7;
	for (; code < D_CODES$1; code++) {
		base_dist[code] = dist << 7;
		for (n = 0; n < 1 << extra_dbits[code] - 7; n++) _dist_code[256 + dist++] = code;
	}
	for (bits = 0; bits <= MAX_BITS$1; bits++) bl_count[bits] = 0;
	n = 0;
	while (n <= 143) {
		static_ltree[n * 2 + 1] = 8;
		n++;
		bl_count[8]++;
	}
	while (n <= 255) {
		static_ltree[n * 2 + 1] = 9;
		n++;
		bl_count[9]++;
	}
	while (n <= 279) {
		static_ltree[n * 2 + 1] = 7;
		n++;
		bl_count[7]++;
	}
	while (n <= 287) {
		static_ltree[n * 2 + 1] = 8;
		n++;
		bl_count[8]++;
	}
	gen_codes(static_ltree, L_CODES$1 + 1, bl_count);
	for (n = 0; n < D_CODES$1; n++) {
		static_dtree[n * 2 + 1] = 5;
		static_dtree[n * 2] = bi_reverse(n, 5);
	}
	static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
	static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
	static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
};
var init_block = (s$1) => {
	let n;
	for (n = 0; n < L_CODES$1; n++) s$1.dyn_ltree[n * 2] = 0;
	for (n = 0; n < D_CODES$1; n++) s$1.dyn_dtree[n * 2] = 0;
	for (n = 0; n < BL_CODES$1; n++) s$1.bl_tree[n * 2] = 0;
	s$1.dyn_ltree[END_BLOCK * 2] = 1;
	s$1.opt_len = s$1.static_len = 0;
	s$1.sym_next = s$1.matches = 0;
};
var bi_windup = (s$1) => {
	if (s$1.bi_valid > 8) put_short(s$1, s$1.bi_buf);
	else if (s$1.bi_valid > 0) s$1.pending_buf[s$1.pending++] = s$1.bi_buf;
	s$1.bi_buf = 0;
	s$1.bi_valid = 0;
};
var smaller = (tree, n, m$1, depth) => {
	const _n2 = n * 2;
	const _m2 = m$1 * 2;
	return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m$1];
};
var pqdownheap = (s$1, tree, k$1) => {
	const v$1 = s$1.heap[k$1];
	let j$1 = k$1 << 1;
	while (j$1 <= s$1.heap_len) {
		if (j$1 < s$1.heap_len && smaller(tree, s$1.heap[j$1 + 1], s$1.heap[j$1], s$1.depth)) j$1++;
		if (smaller(tree, v$1, s$1.heap[j$1], s$1.depth)) break;
		s$1.heap[k$1] = s$1.heap[j$1];
		k$1 = j$1;
		j$1 <<= 1;
	}
	s$1.heap[k$1] = v$1;
};
var compress_block = (s$1, ltree, dtree) => {
	let dist;
	let lc$1;
	let sx = 0;
	let code;
	let extra;
	if (s$1.sym_next !== 0) do {
		dist = s$1.pending_buf[s$1.sym_buf + sx++] & 255;
		dist += (s$1.pending_buf[s$1.sym_buf + sx++] & 255) << 8;
		lc$1 = s$1.pending_buf[s$1.sym_buf + sx++];
		if (dist === 0) send_code(s$1, lc$1, ltree);
		else {
			code = _length_code[lc$1];
			send_code(s$1, code + LITERALS$1 + 1, ltree);
			extra = extra_lbits[code];
			if (extra !== 0) {
				lc$1 -= base_length[code];
				send_bits(s$1, lc$1, extra);
			}
			dist--;
			code = d_code(dist);
			send_code(s$1, code, dtree);
			extra = extra_dbits[code];
			if (extra !== 0) {
				dist -= base_dist[code];
				send_bits(s$1, dist, extra);
			}
		}
	} while (sx < s$1.sym_next);
	send_code(s$1, END_BLOCK, ltree);
};
var build_tree = (s$1, desc) => {
	const tree = desc.dyn_tree;
	const stree = desc.stat_desc.static_tree;
	const has_stree = desc.stat_desc.has_stree;
	const elems = desc.stat_desc.elems;
	let n, m$1;
	let max_code = -1;
	let node;
	s$1.heap_len = 0;
	s$1.heap_max = HEAP_SIZE$1;
	for (n = 0; n < elems; n++) if (tree[n * 2] !== 0) {
		s$1.heap[++s$1.heap_len] = max_code = n;
		s$1.depth[n] = 0;
	} else tree[n * 2 + 1] = 0;
	while (s$1.heap_len < 2) {
		node = s$1.heap[++s$1.heap_len] = max_code < 2 ? ++max_code : 0;
		tree[node * 2] = 1;
		s$1.depth[node] = 0;
		s$1.opt_len--;
		if (has_stree) s$1.static_len -= stree[node * 2 + 1];
	}
	desc.max_code = max_code;
	for (n = s$1.heap_len >> 1; n >= 1; n--) pqdownheap(s$1, tree, n);
	node = elems;
	do {
		/*** pqremove ***/
		n = s$1.heap[1];
		s$1.heap[1] = s$1.heap[s$1.heap_len--];
		pqdownheap(s$1, tree, 1);
		m$1 = s$1.heap[1];
		s$1.heap[--s$1.heap_max] = n;
		s$1.heap[--s$1.heap_max] = m$1;
		tree[node * 2] = tree[n * 2] + tree[m$1 * 2];
		s$1.depth[node] = (s$1.depth[n] >= s$1.depth[m$1] ? s$1.depth[n] : s$1.depth[m$1]) + 1;
		tree[n * 2 + 1] = tree[m$1 * 2 + 1] = node;
		s$1.heap[1] = node++;
		pqdownheap(s$1, tree, 1);
	} while (s$1.heap_len >= 2);
	s$1.heap[--s$1.heap_max] = s$1.heap[1];
	gen_bitlen(s$1, desc);
	gen_codes(tree, max_code, s$1.bl_count);
};
var scan_tree = (s$1, tree, max_code) => {
	let n;
	let prevlen = -1;
	let curlen;
	let nextlen = tree[1];
	let count = 0;
	let max_count = 7;
	let min_count = 4;
	if (nextlen === 0) {
		max_count = 138;
		min_count = 3;
	}
	tree[(max_code + 1) * 2 + 1] = 65535;
	for (n = 0; n <= max_code; n++) {
		curlen = nextlen;
		nextlen = tree[(n + 1) * 2 + 1];
		if (++count < max_count && curlen === nextlen) continue;
		else if (count < min_count) s$1.bl_tree[curlen * 2] += count;
		else if (curlen !== 0) {
			if (curlen !== prevlen) s$1.bl_tree[curlen * 2]++;
			s$1.bl_tree[REP_3_6 * 2]++;
		} else if (count <= 10) s$1.bl_tree[REPZ_3_10 * 2]++;
		else s$1.bl_tree[REPZ_11_138 * 2]++;
		count = 0;
		prevlen = curlen;
		if (nextlen === 0) {
			max_count = 138;
			min_count = 3;
		} else if (curlen === nextlen) {
			max_count = 6;
			min_count = 3;
		} else {
			max_count = 7;
			min_count = 4;
		}
	}
};
var send_tree = (s$1, tree, max_code) => {
	let n;
	let prevlen = -1;
	let curlen;
	let nextlen = tree[1];
	let count = 0;
	let max_count = 7;
	let min_count = 4;
	if (nextlen === 0) {
		max_count = 138;
		min_count = 3;
	}
	for (n = 0; n <= max_code; n++) {
		curlen = nextlen;
		nextlen = tree[(n + 1) * 2 + 1];
		if (++count < max_count && curlen === nextlen) continue;
		else if (count < min_count) do
			send_code(s$1, curlen, s$1.bl_tree);
		while (--count !== 0);
		else if (curlen !== 0) {
			if (curlen !== prevlen) {
				send_code(s$1, curlen, s$1.bl_tree);
				count--;
			}
			send_code(s$1, REP_3_6, s$1.bl_tree);
			send_bits(s$1, count - 3, 2);
		} else if (count <= 10) {
			send_code(s$1, REPZ_3_10, s$1.bl_tree);
			send_bits(s$1, count - 3, 3);
		} else {
			send_code(s$1, REPZ_11_138, s$1.bl_tree);
			send_bits(s$1, count - 11, 7);
		}
		count = 0;
		prevlen = curlen;
		if (nextlen === 0) {
			max_count = 138;
			min_count = 3;
		} else if (curlen === nextlen) {
			max_count = 6;
			min_count = 3;
		} else {
			max_count = 7;
			min_count = 4;
		}
	}
};
var build_bl_tree = (s$1) => {
	let max_blindex;
	scan_tree(s$1, s$1.dyn_ltree, s$1.l_desc.max_code);
	scan_tree(s$1, s$1.dyn_dtree, s$1.d_desc.max_code);
	build_tree(s$1, s$1.bl_desc);
	for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) if (s$1.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) break;
	s$1.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
	return max_blindex;
};
var send_all_trees = (s$1, lcodes, dcodes, blcodes) => {
	let rank$1;
	send_bits(s$1, lcodes - 257, 5);
	send_bits(s$1, dcodes - 1, 5);
	send_bits(s$1, blcodes - 4, 4);
	for (rank$1 = 0; rank$1 < blcodes; rank$1++) send_bits(s$1, s$1.bl_tree[bl_order[rank$1] * 2 + 1], 3);
	send_tree(s$1, s$1.dyn_ltree, lcodes - 1);
	send_tree(s$1, s$1.dyn_dtree, dcodes - 1);
};
var detect_data_type = (s$1) => {
	let block_mask = 4093624447;
	let n;
	for (n = 0; n <= 31; n++, block_mask >>>= 1) if (block_mask & 1 && s$1.dyn_ltree[n * 2] !== 0) return Z_BINARY;
	if (s$1.dyn_ltree[18] !== 0 || s$1.dyn_ltree[20] !== 0 || s$1.dyn_ltree[26] !== 0) return Z_TEXT;
	for (n = 32; n < LITERALS$1; n++) if (s$1.dyn_ltree[n * 2] !== 0) return Z_TEXT;
	return Z_BINARY;
};
var static_init_done = false;
var _tr_init$1 = (s$1) => {
	if (!static_init_done) {
		tr_static_init();
		static_init_done = true;
	}
	s$1.l_desc = new TreeDesc(s$1.dyn_ltree, static_l_desc);
	s$1.d_desc = new TreeDesc(s$1.dyn_dtree, static_d_desc);
	s$1.bl_desc = new TreeDesc(s$1.bl_tree, static_bl_desc);
	s$1.bi_buf = 0;
	s$1.bi_valid = 0;
	init_block(s$1);
};
var _tr_stored_block$1 = (s$1, buf, stored_len, last) => {
	send_bits(s$1, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
	bi_windup(s$1);
	put_short(s$1, stored_len);
	put_short(s$1, ~stored_len);
	if (stored_len) s$1.pending_buf.set(s$1.window.subarray(buf, buf + stored_len), s$1.pending);
	s$1.pending += stored_len;
};
var _tr_align$1 = (s$1) => {
	send_bits(s$1, STATIC_TREES << 1, 3);
	send_code(s$1, END_BLOCK, static_ltree);
	bi_flush(s$1);
};
var _tr_flush_block$1 = (s$1, buf, stored_len, last) => {
	let opt_lenb, static_lenb;
	let max_blindex = 0;
	if (s$1.level > 0) {
		if (s$1.strm.data_type === Z_UNKNOWN$1) s$1.strm.data_type = detect_data_type(s$1);
		build_tree(s$1, s$1.l_desc);
		build_tree(s$1, s$1.d_desc);
		max_blindex = build_bl_tree(s$1);
		opt_lenb = s$1.opt_len + 3 + 7 >>> 3;
		static_lenb = s$1.static_len + 3 + 7 >>> 3;
		if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
	} else opt_lenb = static_lenb = stored_len + 5;
	if (stored_len + 4 <= opt_lenb && buf !== -1) _tr_stored_block$1(s$1, buf, stored_len, last);
	else if (s$1.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
		send_bits(s$1, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
		compress_block(s$1, static_ltree, static_dtree);
	} else {
		send_bits(s$1, (DYN_TREES << 1) + (last ? 1 : 0), 3);
		send_all_trees(s$1, s$1.l_desc.max_code + 1, s$1.d_desc.max_code + 1, max_blindex + 1);
		compress_block(s$1, s$1.dyn_ltree, s$1.dyn_dtree);
	}
	init_block(s$1);
	if (last) bi_windup(s$1);
};
var _tr_tally$1 = (s$1, dist, lc$1) => {
	s$1.pending_buf[s$1.sym_buf + s$1.sym_next++] = dist;
	s$1.pending_buf[s$1.sym_buf + s$1.sym_next++] = dist >> 8;
	s$1.pending_buf[s$1.sym_buf + s$1.sym_next++] = lc$1;
	if (dist === 0) s$1.dyn_ltree[lc$1 * 2]++;
	else {
		s$1.matches++;
		dist--;
		s$1.dyn_ltree[(_length_code[lc$1] + LITERALS$1 + 1) * 2]++;
		s$1.dyn_dtree[d_code(dist) * 2]++;
	}
	return s$1.sym_next === s$1.sym_end;
};
var trees = {
	_tr_init: _tr_init$1,
	_tr_stored_block: _tr_stored_block$1,
	_tr_flush_block: _tr_flush_block$1,
	_tr_tally: _tr_tally$1,
	_tr_align: _tr_align$1
};
var adler32 = (adler$1, buf, len, pos) => {
	let s1 = adler$1 & 65535 | 0, s2 = adler$1 >>> 16 & 65535 | 0, n = 0;
	while (len !== 0) {
		n = len > 2e3 ? 2e3 : len;
		len -= n;
		do {
			s1 = s1 + buf[pos++] | 0;
			s2 = s2 + s1 | 0;
		} while (--n);
		s1 %= 65521;
		s2 %= 65521;
	}
	return s1 | s2 << 16 | 0;
};
var adler32_1 = adler32;
var makeTable = () => {
	let c$1, table = [];
	for (var n = 0; n < 256; n++) {
		c$1 = n;
		for (var k$1 = 0; k$1 < 8; k$1++) c$1 = c$1 & 1 ? 3988292384 ^ c$1 >>> 1 : c$1 >>> 1;
		table[n] = c$1;
	}
	return table;
};
var crcTable$1 = new Uint32Array(makeTable());
var crc32 = (crc$1, buf, len, pos) => {
	const t = crcTable$1;
	const end = pos + len;
	crc$1 ^= -1;
	for (let i$2 = pos; i$2 < end; i$2++) crc$1 = crc$1 >>> 8 ^ t[(crc$1 ^ buf[i$2]) & 255];
	return crc$1 ^ -1;
};
var crc32_1 = crc32;
var messages = {
	2: "need dictionary",
	1: "stream end",
	0: "",
	"-1": "file error",
	"-2": "stream error",
	"-3": "data error",
	"-4": "insufficient memory",
	"-5": "buffer error",
	"-6": "incompatible version"
};
var constants$2 = {
	Z_NO_FLUSH: 0,
	Z_PARTIAL_FLUSH: 1,
	Z_SYNC_FLUSH: 2,
	Z_FULL_FLUSH: 3,
	Z_FINISH: 4,
	Z_BLOCK: 5,
	Z_TREES: 6,
	Z_OK: 0,
	Z_STREAM_END: 1,
	Z_NEED_DICT: 2,
	Z_ERRNO: -1,
	Z_STREAM_ERROR: -2,
	Z_DATA_ERROR: -3,
	Z_MEM_ERROR: -4,
	Z_BUF_ERROR: -5,
	Z_NO_COMPRESSION: 0,
	Z_BEST_SPEED: 1,
	Z_BEST_COMPRESSION: 9,
	Z_DEFAULT_COMPRESSION: -1,
	Z_FILTERED: 1,
	Z_HUFFMAN_ONLY: 2,
	Z_RLE: 3,
	Z_FIXED: 4,
	Z_DEFAULT_STRATEGY: 0,
	Z_BINARY: 0,
	Z_TEXT: 1,
	Z_UNKNOWN: 2,
	Z_DEFLATED: 8
};
var { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;
var { Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1, Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1, Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1, Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1, Z_UNKNOWN, Z_DEFLATED: Z_DEFLATED$2 } = constants$2;
var MAX_MEM_LEVEL = 9;
var MAX_WBITS$1 = 15;
var DEF_MEM_LEVEL = 8;
var L_CODES = 286;
var D_CODES = 30;
var BL_CODES = 19;
var HEAP_SIZE = 2 * L_CODES + 1;
var MAX_BITS = 15;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var GZIP_STATE = 57;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var BS_NEED_MORE = 1;
var BS_BLOCK_DONE = 2;
var BS_FINISH_STARTED = 3;
var BS_FINISH_DONE = 4;
var OS_CODE = 3;
var err = (strm, errorCode) => {
	strm.msg = messages[errorCode];
	return errorCode;
};
var rank = (f$1) => {
	return f$1 * 2 - (f$1 > 4 ? 9 : 0);
};
var zero = (buf) => {
	let len = buf.length;
	while (--len >= 0) buf[len] = 0;
};
var slide_hash = (s$1) => {
	let n, m$1;
	let p$1;
	let wsize = s$1.w_size;
	n = s$1.hash_size;
	p$1 = n;
	do {
		m$1 = s$1.head[--p$1];
		s$1.head[p$1] = m$1 >= wsize ? m$1 - wsize : 0;
	} while (--n);
	n = wsize;
	p$1 = n;
	do {
		m$1 = s$1.prev[--p$1];
		s$1.prev[p$1] = m$1 >= wsize ? m$1 - wsize : 0;
	} while (--n);
};
var HASH_ZLIB = (s$1, prev, data) => (prev << s$1.hash_shift ^ data) & s$1.hash_mask;
var HASH = HASH_ZLIB;
var flush_pending = (strm) => {
	const s$1 = strm.state;
	let len = s$1.pending;
	if (len > strm.avail_out) len = strm.avail_out;
	if (len === 0) return;
	strm.output.set(s$1.pending_buf.subarray(s$1.pending_out, s$1.pending_out + len), strm.next_out);
	strm.next_out += len;
	s$1.pending_out += len;
	strm.total_out += len;
	strm.avail_out -= len;
	s$1.pending -= len;
	if (s$1.pending === 0) s$1.pending_out = 0;
};
var flush_block_only = (s$1, last) => {
	_tr_flush_block(s$1, s$1.block_start >= 0 ? s$1.block_start : -1, s$1.strstart - s$1.block_start, last);
	s$1.block_start = s$1.strstart;
	flush_pending(s$1.strm);
};
var put_byte = (s$1, b$1) => {
	s$1.pending_buf[s$1.pending++] = b$1;
};
var putShortMSB = (s$1, b$1) => {
	s$1.pending_buf[s$1.pending++] = b$1 >>> 8 & 255;
	s$1.pending_buf[s$1.pending++] = b$1 & 255;
};
var read_buf = (strm, buf, start, size) => {
	let len = strm.avail_in;
	if (len > size) len = size;
	if (len === 0) return 0;
	strm.avail_in -= len;
	buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
	if (strm.state.wrap === 1) strm.adler = adler32_1(strm.adler, buf, len, start);
	else if (strm.state.wrap === 2) strm.adler = crc32_1(strm.adler, buf, len, start);
	strm.next_in += len;
	strm.total_in += len;
	return len;
};
var longest_match = (s$1, cur_match) => {
	let chain_length = s$1.max_chain_length;
	let scan = s$1.strstart;
	let match;
	let len;
	let best_len = s$1.prev_length;
	let nice_match = s$1.nice_match;
	const limit = s$1.strstart > s$1.w_size - MIN_LOOKAHEAD ? s$1.strstart - (s$1.w_size - MIN_LOOKAHEAD) : 0;
	const _win = s$1.window;
	const wmask = s$1.w_mask;
	const prev = s$1.prev;
	const strend = s$1.strstart + MAX_MATCH;
	let scan_end1 = _win[scan + best_len - 1];
	let scan_end = _win[scan + best_len];
	if (s$1.prev_length >= s$1.good_match) chain_length >>= 2;
	if (nice_match > s$1.lookahead) nice_match = s$1.lookahead;
	do {
		match = cur_match;
		if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) continue;
		scan += 2;
		match++;
		do		;
while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
		len = MAX_MATCH - (strend - scan);
		scan = strend - MAX_MATCH;
		if (len > best_len) {
			s$1.match_start = cur_match;
			best_len = len;
			if (len >= nice_match) break;
			scan_end1 = _win[scan + best_len - 1];
			scan_end = _win[scan + best_len];
		}
	} while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
	if (best_len <= s$1.lookahead) return best_len;
	return s$1.lookahead;
};
var fill_window = (s$1) => {
	const _w_size = s$1.w_size;
	let n, more, str;
	do {
		more = s$1.window_size - s$1.lookahead - s$1.strstart;
		if (s$1.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
			s$1.window.set(s$1.window.subarray(_w_size, _w_size + _w_size - more), 0);
			s$1.match_start -= _w_size;
			s$1.strstart -= _w_size;
			s$1.block_start -= _w_size;
			if (s$1.insert > s$1.strstart) s$1.insert = s$1.strstart;
			slide_hash(s$1);
			more += _w_size;
		}
		if (s$1.strm.avail_in === 0) break;
		n = read_buf(s$1.strm, s$1.window, s$1.strstart + s$1.lookahead, more);
		s$1.lookahead += n;
		if (s$1.lookahead + s$1.insert >= MIN_MATCH) {
			str = s$1.strstart - s$1.insert;
			s$1.ins_h = s$1.window[str];
			s$1.ins_h = HASH(s$1, s$1.ins_h, s$1.window[str + 1]);
			while (s$1.insert) {
				s$1.ins_h = HASH(s$1, s$1.ins_h, s$1.window[str + MIN_MATCH - 1]);
				s$1.prev[str & s$1.w_mask] = s$1.head[s$1.ins_h];
				s$1.head[s$1.ins_h] = str;
				str++;
				s$1.insert--;
				if (s$1.lookahead + s$1.insert < MIN_MATCH) break;
			}
		}
	} while (s$1.lookahead < MIN_LOOKAHEAD && s$1.strm.avail_in !== 0);
};
var deflate_stored = (s$1, flush) => {
	let min_block = s$1.pending_buf_size - 5 > s$1.w_size ? s$1.w_size : s$1.pending_buf_size - 5;
	let len, left, have, last = 0;
	let used = s$1.strm.avail_in;
	do {
		len = 65535;
		have = s$1.bi_valid + 42 >> 3;
		if (s$1.strm.avail_out < have) break;
		have = s$1.strm.avail_out - have;
		left = s$1.strstart - s$1.block_start;
		if (len > left + s$1.strm.avail_in) len = left + s$1.strm.avail_in;
		if (len > have) len = have;
		if (len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s$1.strm.avail_in)) break;
		last = flush === Z_FINISH$3 && len === left + s$1.strm.avail_in ? 1 : 0;
		_tr_stored_block(s$1, 0, 0, last);
		s$1.pending_buf[s$1.pending - 4] = len;
		s$1.pending_buf[s$1.pending - 3] = len >> 8;
		s$1.pending_buf[s$1.pending - 2] = ~len;
		s$1.pending_buf[s$1.pending - 1] = ~len >> 8;
		flush_pending(s$1.strm);
		if (left) {
			if (left > len) left = len;
			s$1.strm.output.set(s$1.window.subarray(s$1.block_start, s$1.block_start + left), s$1.strm.next_out);
			s$1.strm.next_out += left;
			s$1.strm.avail_out -= left;
			s$1.strm.total_out += left;
			s$1.block_start += left;
			len -= left;
		}
		if (len) {
			read_buf(s$1.strm, s$1.strm.output, s$1.strm.next_out, len);
			s$1.strm.next_out += len;
			s$1.strm.avail_out -= len;
			s$1.strm.total_out += len;
		}
	} while (last === 0);
	used -= s$1.strm.avail_in;
	if (used) {
		if (used >= s$1.w_size) {
			s$1.matches = 2;
			s$1.window.set(s$1.strm.input.subarray(s$1.strm.next_in - s$1.w_size, s$1.strm.next_in), 0);
			s$1.strstart = s$1.w_size;
			s$1.insert = s$1.strstart;
		} else {
			if (s$1.window_size - s$1.strstart <= used) {
				s$1.strstart -= s$1.w_size;
				s$1.window.set(s$1.window.subarray(s$1.w_size, s$1.w_size + s$1.strstart), 0);
				if (s$1.matches < 2) s$1.matches++;
				if (s$1.insert > s$1.strstart) s$1.insert = s$1.strstart;
			}
			s$1.window.set(s$1.strm.input.subarray(s$1.strm.next_in - used, s$1.strm.next_in), s$1.strstart);
			s$1.strstart += used;
			s$1.insert += used > s$1.w_size - s$1.insert ? s$1.w_size - s$1.insert : used;
		}
		s$1.block_start = s$1.strstart;
	}
	if (s$1.high_water < s$1.strstart) s$1.high_water = s$1.strstart;
	if (last) return BS_FINISH_DONE;
	if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s$1.strm.avail_in === 0 && s$1.strstart === s$1.block_start) return BS_BLOCK_DONE;
	have = s$1.window_size - s$1.strstart;
	if (s$1.strm.avail_in > have && s$1.block_start >= s$1.w_size) {
		s$1.block_start -= s$1.w_size;
		s$1.strstart -= s$1.w_size;
		s$1.window.set(s$1.window.subarray(s$1.w_size, s$1.w_size + s$1.strstart), 0);
		if (s$1.matches < 2) s$1.matches++;
		have += s$1.w_size;
		if (s$1.insert > s$1.strstart) s$1.insert = s$1.strstart;
	}
	if (have > s$1.strm.avail_in) have = s$1.strm.avail_in;
	if (have) {
		read_buf(s$1.strm, s$1.window, s$1.strstart, have);
		s$1.strstart += have;
		s$1.insert += have > s$1.w_size - s$1.insert ? s$1.w_size - s$1.insert : have;
	}
	if (s$1.high_water < s$1.strstart) s$1.high_water = s$1.strstart;
	have = s$1.bi_valid + 42 >> 3;
	have = s$1.pending_buf_size - have > 65535 ? 65535 : s$1.pending_buf_size - have;
	min_block = have > s$1.w_size ? s$1.w_size : have;
	left = s$1.strstart - s$1.block_start;
	if (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s$1.strm.avail_in === 0 && left <= have) {
		len = left > have ? have : left;
		last = flush === Z_FINISH$3 && s$1.strm.avail_in === 0 && len === left ? 1 : 0;
		_tr_stored_block(s$1, s$1.block_start, len, last);
		s$1.block_start += len;
		flush_pending(s$1.strm);
	}
	return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};
var deflate_fast = (s$1, flush) => {
	let hash_head;
	let bflush;
	for (;;) {
		if (s$1.lookahead < MIN_LOOKAHEAD) {
			fill_window(s$1);
			if (s$1.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
			if (s$1.lookahead === 0) break;
		}
		hash_head = 0;
		if (s$1.lookahead >= MIN_MATCH) {
			/*** INSERT_STRING(s, s.strstart, hash_head); ***/
			s$1.ins_h = HASH(s$1, s$1.ins_h, s$1.window[s$1.strstart + MIN_MATCH - 1]);
			hash_head = s$1.prev[s$1.strstart & s$1.w_mask] = s$1.head[s$1.ins_h];
			s$1.head[s$1.ins_h] = s$1.strstart;
		}
		if (hash_head !== 0 && s$1.strstart - hash_head <= s$1.w_size - MIN_LOOKAHEAD) s$1.match_length = longest_match(s$1, hash_head);
		if (s$1.match_length >= MIN_MATCH) {
			/*** _tr_tally_dist(s, s.strstart - s.match_start,
			s.match_length - MIN_MATCH, bflush); ***/
			bflush = _tr_tally(s$1, s$1.strstart - s$1.match_start, s$1.match_length - MIN_MATCH);
			s$1.lookahead -= s$1.match_length;
			if (s$1.match_length <= s$1.max_lazy_match && s$1.lookahead >= MIN_MATCH) {
				s$1.match_length--;
				do {
					s$1.strstart++;
					/*** INSERT_STRING(s, s.strstart, hash_head); ***/
					s$1.ins_h = HASH(s$1, s$1.ins_h, s$1.window[s$1.strstart + MIN_MATCH - 1]);
					hash_head = s$1.prev[s$1.strstart & s$1.w_mask] = s$1.head[s$1.ins_h];
					s$1.head[s$1.ins_h] = s$1.strstart;
				} while (--s$1.match_length !== 0);
				s$1.strstart++;
			} else {
				s$1.strstart += s$1.match_length;
				s$1.match_length = 0;
				s$1.ins_h = s$1.window[s$1.strstart];
				s$1.ins_h = HASH(s$1, s$1.ins_h, s$1.window[s$1.strstart + 1]);
			}
		} else {
			/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
			bflush = _tr_tally(s$1, 0, s$1.window[s$1.strstart]);
			s$1.lookahead--;
			s$1.strstart++;
		}
		if (bflush) {
			/*** FLUSH_BLOCK(s, 0); ***/
			flush_block_only(s$1, false);
			if (s$1.strm.avail_out === 0) return BS_NEED_MORE;
		}
	}
	s$1.insert = s$1.strstart < MIN_MATCH - 1 ? s$1.strstart : MIN_MATCH - 1;
	if (flush === Z_FINISH$3) {
		/*** FLUSH_BLOCK(s, 1); ***/
		flush_block_only(s$1, true);
		if (s$1.strm.avail_out === 0) return BS_FINISH_STARTED;
		return BS_FINISH_DONE;
	}
	if (s$1.sym_next) {
		/*** FLUSH_BLOCK(s, 0); ***/
		flush_block_only(s$1, false);
		if (s$1.strm.avail_out === 0) return BS_NEED_MORE;
	}
	return BS_BLOCK_DONE;
};
var deflate_slow = (s$1, flush) => {
	let hash_head;
	let bflush;
	let max_insert;
	for (;;) {
		if (s$1.lookahead < MIN_LOOKAHEAD) {
			fill_window(s$1);
			if (s$1.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
			if (s$1.lookahead === 0) break;
		}
		hash_head = 0;
		if (s$1.lookahead >= MIN_MATCH) {
			/*** INSERT_STRING(s, s.strstart, hash_head); ***/
			s$1.ins_h = HASH(s$1, s$1.ins_h, s$1.window[s$1.strstart + MIN_MATCH - 1]);
			hash_head = s$1.prev[s$1.strstart & s$1.w_mask] = s$1.head[s$1.ins_h];
			s$1.head[s$1.ins_h] = s$1.strstart;
		}
		s$1.prev_length = s$1.match_length;
		s$1.prev_match = s$1.match_start;
		s$1.match_length = MIN_MATCH - 1;
		if (hash_head !== 0 && s$1.prev_length < s$1.max_lazy_match && s$1.strstart - hash_head <= s$1.w_size - MIN_LOOKAHEAD) {
			s$1.match_length = longest_match(s$1, hash_head);
			if (s$1.match_length <= 5 && (s$1.strategy === Z_FILTERED || s$1.match_length === MIN_MATCH && s$1.strstart - s$1.match_start > 4096)) s$1.match_length = MIN_MATCH - 1;
		}
		if (s$1.prev_length >= MIN_MATCH && s$1.match_length <= s$1.prev_length) {
			max_insert = s$1.strstart + s$1.lookahead - MIN_MATCH;
			/***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
			s.prev_length - MIN_MATCH, bflush);***/
			bflush = _tr_tally(s$1, s$1.strstart - 1 - s$1.prev_match, s$1.prev_length - MIN_MATCH);
			s$1.lookahead -= s$1.prev_length - 1;
			s$1.prev_length -= 2;
			do
				if (++s$1.strstart <= max_insert) {
					/*** INSERT_STRING(s, s.strstart, hash_head); ***/
					s$1.ins_h = HASH(s$1, s$1.ins_h, s$1.window[s$1.strstart + MIN_MATCH - 1]);
					hash_head = s$1.prev[s$1.strstart & s$1.w_mask] = s$1.head[s$1.ins_h];
					s$1.head[s$1.ins_h] = s$1.strstart;
				}
			while (--s$1.prev_length !== 0);
			s$1.match_available = 0;
			s$1.match_length = MIN_MATCH - 1;
			s$1.strstart++;
			if (bflush) {
				/*** FLUSH_BLOCK(s, 0); ***/
				flush_block_only(s$1, false);
				if (s$1.strm.avail_out === 0) return BS_NEED_MORE;
			}
		} else if (s$1.match_available) {
			/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
			bflush = _tr_tally(s$1, 0, s$1.window[s$1.strstart - 1]);
			if (bflush)
 /*** FLUSH_BLOCK_ONLY(s, 0) ***/
			flush_block_only(s$1, false);
			s$1.strstart++;
			s$1.lookahead--;
			if (s$1.strm.avail_out === 0) return BS_NEED_MORE;
		} else {
			s$1.match_available = 1;
			s$1.strstart++;
			s$1.lookahead--;
		}
	}
	if (s$1.match_available) {
		/*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
		bflush = _tr_tally(s$1, 0, s$1.window[s$1.strstart - 1]);
		s$1.match_available = 0;
	}
	s$1.insert = s$1.strstart < MIN_MATCH - 1 ? s$1.strstart : MIN_MATCH - 1;
	if (flush === Z_FINISH$3) {
		/*** FLUSH_BLOCK(s, 1); ***/
		flush_block_only(s$1, true);
		if (s$1.strm.avail_out === 0) return BS_FINISH_STARTED;
		return BS_FINISH_DONE;
	}
	if (s$1.sym_next) {
		/*** FLUSH_BLOCK(s, 0); ***/
		flush_block_only(s$1, false);
		if (s$1.strm.avail_out === 0) return BS_NEED_MORE;
	}
	return BS_BLOCK_DONE;
};
var deflate_rle = (s$1, flush) => {
	let bflush;
	let prev;
	let scan, strend;
	const _win = s$1.window;
	for (;;) {
		if (s$1.lookahead <= MAX_MATCH) {
			fill_window(s$1);
			if (s$1.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
			if (s$1.lookahead === 0) break;
		}
		s$1.match_length = 0;
		if (s$1.lookahead >= MIN_MATCH && s$1.strstart > 0) {
			scan = s$1.strstart - 1;
			prev = _win[scan];
			if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
				strend = s$1.strstart + MAX_MATCH;
				do				;
while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
				s$1.match_length = MAX_MATCH - (strend - scan);
				if (s$1.match_length > s$1.lookahead) s$1.match_length = s$1.lookahead;
			}
		}
		if (s$1.match_length >= MIN_MATCH) {
			/*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
			bflush = _tr_tally(s$1, 1, s$1.match_length - MIN_MATCH);
			s$1.lookahead -= s$1.match_length;
			s$1.strstart += s$1.match_length;
			s$1.match_length = 0;
		} else {
			/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
			bflush = _tr_tally(s$1, 0, s$1.window[s$1.strstart]);
			s$1.lookahead--;
			s$1.strstart++;
		}
		if (bflush) {
			/*** FLUSH_BLOCK(s, 0); ***/
			flush_block_only(s$1, false);
			if (s$1.strm.avail_out === 0) return BS_NEED_MORE;
		}
	}
	s$1.insert = 0;
	if (flush === Z_FINISH$3) {
		/*** FLUSH_BLOCK(s, 1); ***/
		flush_block_only(s$1, true);
		if (s$1.strm.avail_out === 0) return BS_FINISH_STARTED;
		return BS_FINISH_DONE;
	}
	if (s$1.sym_next) {
		/*** FLUSH_BLOCK(s, 0); ***/
		flush_block_only(s$1, false);
		if (s$1.strm.avail_out === 0) return BS_NEED_MORE;
	}
	return BS_BLOCK_DONE;
};
var deflate_huff = (s$1, flush) => {
	let bflush;
	for (;;) {
		if (s$1.lookahead === 0) {
			fill_window(s$1);
			if (s$1.lookahead === 0) {
				if (flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
				break;
			}
		}
		s$1.match_length = 0;
		/*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
		bflush = _tr_tally(s$1, 0, s$1.window[s$1.strstart]);
		s$1.lookahead--;
		s$1.strstart++;
		if (bflush) {
			/*** FLUSH_BLOCK(s, 0); ***/
			flush_block_only(s$1, false);
			if (s$1.strm.avail_out === 0) return BS_NEED_MORE;
		}
	}
	s$1.insert = 0;
	if (flush === Z_FINISH$3) {
		/*** FLUSH_BLOCK(s, 1); ***/
		flush_block_only(s$1, true);
		if (s$1.strm.avail_out === 0) return BS_FINISH_STARTED;
		return BS_FINISH_DONE;
	}
	if (s$1.sym_next) {
		/*** FLUSH_BLOCK(s, 0); ***/
		flush_block_only(s$1, false);
		if (s$1.strm.avail_out === 0) return BS_NEED_MORE;
	}
	return BS_BLOCK_DONE;
};
function Config(good_length, max_lazy, nice_length, max_chain, func) {
	this.good_length = good_length;
	this.max_lazy = max_lazy;
	this.nice_length = nice_length;
	this.max_chain = max_chain;
	this.func = func;
}
var configuration_table = [
	new Config(0, 0, 0, 0, deflate_stored),
	new Config(4, 4, 8, 4, deflate_fast),
	new Config(4, 5, 16, 8, deflate_fast),
	new Config(4, 6, 32, 32, deflate_fast),
	new Config(4, 4, 16, 16, deflate_slow),
	new Config(8, 16, 32, 32, deflate_slow),
	new Config(8, 16, 128, 128, deflate_slow),
	new Config(8, 32, 128, 256, deflate_slow),
	new Config(32, 128, 258, 1024, deflate_slow),
	new Config(32, 258, 258, 4096, deflate_slow)
];
var lm_init = (s$1) => {
	s$1.window_size = 2 * s$1.w_size;
	/*** CLEAR_HASH(s); ***/
	zero(s$1.head);
	s$1.max_lazy_match = configuration_table[s$1.level].max_lazy;
	s$1.good_match = configuration_table[s$1.level].good_length;
	s$1.nice_match = configuration_table[s$1.level].nice_length;
	s$1.max_chain_length = configuration_table[s$1.level].max_chain;
	s$1.strstart = 0;
	s$1.block_start = 0;
	s$1.lookahead = 0;
	s$1.insert = 0;
	s$1.match_length = s$1.prev_length = MIN_MATCH - 1;
	s$1.match_available = 0;
	s$1.ins_h = 0;
};
function DeflateState() {
	this.strm = null;
	this.status = 0;
	this.pending_buf = null;
	this.pending_buf_size = 0;
	this.pending_out = 0;
	this.pending = 0;
	this.wrap = 0;
	this.gzhead = null;
	this.gzindex = 0;
	this.method = Z_DEFLATED$2;
	this.last_flush = -1;
	this.w_size = 0;
	this.w_bits = 0;
	this.w_mask = 0;
	this.window = null;
	this.window_size = 0;
	this.prev = null;
	this.head = null;
	this.ins_h = 0;
	this.hash_size = 0;
	this.hash_bits = 0;
	this.hash_mask = 0;
	this.hash_shift = 0;
	this.block_start = 0;
	this.match_length = 0;
	this.prev_match = 0;
	this.match_available = 0;
	this.strstart = 0;
	this.match_start = 0;
	this.lookahead = 0;
	this.prev_length = 0;
	this.max_chain_length = 0;
	this.max_lazy_match = 0;
	this.level = 0;
	this.strategy = 0;
	this.good_match = 0;
	this.nice_match = 0;
	this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
	this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
	this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
	zero(this.dyn_ltree);
	zero(this.dyn_dtree);
	zero(this.bl_tree);
	this.l_desc = null;
	this.d_desc = null;
	this.bl_desc = null;
	this.bl_count = new Uint16Array(MAX_BITS + 1);
	this.heap = new Uint16Array(2 * L_CODES + 1);
	zero(this.heap);
	this.heap_len = 0;
	this.heap_max = 0;
	this.depth = new Uint16Array(2 * L_CODES + 1);
	zero(this.depth);
	this.sym_buf = 0;
	this.lit_bufsize = 0;
	this.sym_next = 0;
	this.sym_end = 0;
	this.opt_len = 0;
	this.static_len = 0;
	this.matches = 0;
	this.insert = 0;
	this.bi_buf = 0;
	this.bi_valid = 0;
}
var deflateStateCheck = (strm) => {
	if (!strm) return 1;
	const s$1 = strm.state;
	if (!s$1 || s$1.strm !== strm || s$1.status !== INIT_STATE && s$1.status !== GZIP_STATE && s$1.status !== EXTRA_STATE && s$1.status !== NAME_STATE && s$1.status !== COMMENT_STATE && s$1.status !== HCRC_STATE && s$1.status !== BUSY_STATE && s$1.status !== FINISH_STATE) return 1;
	return 0;
};
var deflateResetKeep = (strm) => {
	if (deflateStateCheck(strm)) return err(strm, Z_STREAM_ERROR$2);
	strm.total_in = strm.total_out = 0;
	strm.data_type = Z_UNKNOWN;
	const s$1 = strm.state;
	s$1.pending = 0;
	s$1.pending_out = 0;
	if (s$1.wrap < 0) s$1.wrap = -s$1.wrap;
	s$1.status = s$1.wrap === 2 ? GZIP_STATE : s$1.wrap ? INIT_STATE : BUSY_STATE;
	strm.adler = s$1.wrap === 2 ? 0 : 1;
	s$1.last_flush = -2;
	_tr_init(s$1);
	return Z_OK$3;
};
var deflateReset = (strm) => {
	const ret = deflateResetKeep(strm);
	if (ret === Z_OK$3) lm_init(strm.state);
	return ret;
};
var deflateSetHeader = (strm, head) => {
	if (deflateStateCheck(strm) || strm.state.wrap !== 2) return Z_STREAM_ERROR$2;
	strm.state.gzhead = head;
	return Z_OK$3;
};
var deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {
	if (!strm) return Z_STREAM_ERROR$2;
	let wrap = 1;
	if (level === Z_DEFAULT_COMPRESSION$1) level = 6;
	if (windowBits < 0) {
		wrap = 0;
		windowBits = -windowBits;
	} else if (windowBits > 15) {
		wrap = 2;
		windowBits -= 16;
	}
	if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) return err(strm, Z_STREAM_ERROR$2);
	if (windowBits === 8) windowBits = 9;
	const s$1 = new DeflateState();
	strm.state = s$1;
	s$1.strm = strm;
	s$1.status = INIT_STATE;
	s$1.wrap = wrap;
	s$1.gzhead = null;
	s$1.w_bits = windowBits;
	s$1.w_size = 1 << s$1.w_bits;
	s$1.w_mask = s$1.w_size - 1;
	s$1.hash_bits = memLevel + 7;
	s$1.hash_size = 1 << s$1.hash_bits;
	s$1.hash_mask = s$1.hash_size - 1;
	s$1.hash_shift = ~~((s$1.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
	s$1.window = new Uint8Array(s$1.w_size * 2);
	s$1.head = new Uint16Array(s$1.hash_size);
	s$1.prev = new Uint16Array(s$1.w_size);
	s$1.lit_bufsize = 1 << memLevel + 6;
	s$1.pending_buf_size = s$1.lit_bufsize * 4;
	s$1.pending_buf = new Uint8Array(s$1.pending_buf_size);
	s$1.sym_buf = s$1.lit_bufsize;
	s$1.sym_end = (s$1.lit_bufsize - 1) * 3;
	s$1.level = level;
	s$1.strategy = strategy;
	s$1.method = method;
	return deflateReset(strm);
};
var deflateInit = (strm, level) => {
	return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};
var deflate$2 = (strm, flush) => {
	if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
	const s$1 = strm.state;
	if (!strm.output || strm.avail_in !== 0 && !strm.input || s$1.status === FINISH_STATE && flush !== Z_FINISH$3) return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
	const old_flush = s$1.last_flush;
	s$1.last_flush = flush;
	if (s$1.pending !== 0) {
		flush_pending(strm);
		if (strm.avail_out === 0) {
			s$1.last_flush = -1;
			return Z_OK$3;
		}
	} else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3) return err(strm, Z_BUF_ERROR$1);
	if (s$1.status === FINISH_STATE && strm.avail_in !== 0) return err(strm, Z_BUF_ERROR$1);
	if (s$1.status === INIT_STATE && s$1.wrap === 0) s$1.status = BUSY_STATE;
	if (s$1.status === INIT_STATE) {
		let header = Z_DEFLATED$2 + (s$1.w_bits - 8 << 4) << 8;
		let level_flags = -1;
		if (s$1.strategy >= Z_HUFFMAN_ONLY || s$1.level < 2) level_flags = 0;
		else if (s$1.level < 6) level_flags = 1;
		else if (s$1.level === 6) level_flags = 2;
		else level_flags = 3;
		header |= level_flags << 6;
		if (s$1.strstart !== 0) header |= PRESET_DICT;
		header += 31 - header % 31;
		putShortMSB(s$1, header);
		if (s$1.strstart !== 0) {
			putShortMSB(s$1, strm.adler >>> 16);
			putShortMSB(s$1, strm.adler & 65535);
		}
		strm.adler = 1;
		s$1.status = BUSY_STATE;
		flush_pending(strm);
		if (s$1.pending !== 0) {
			s$1.last_flush = -1;
			return Z_OK$3;
		}
	}
	if (s$1.status === GZIP_STATE) {
		strm.adler = 0;
		put_byte(s$1, 31);
		put_byte(s$1, 139);
		put_byte(s$1, 8);
		if (!s$1.gzhead) {
			put_byte(s$1, 0);
			put_byte(s$1, 0);
			put_byte(s$1, 0);
			put_byte(s$1, 0);
			put_byte(s$1, 0);
			put_byte(s$1, s$1.level === 9 ? 2 : s$1.strategy >= Z_HUFFMAN_ONLY || s$1.level < 2 ? 4 : 0);
			put_byte(s$1, OS_CODE);
			s$1.status = BUSY_STATE;
			flush_pending(strm);
			if (s$1.pending !== 0) {
				s$1.last_flush = -1;
				return Z_OK$3;
			}
		} else {
			put_byte(s$1, (s$1.gzhead.text ? 1 : 0) + (s$1.gzhead.hcrc ? 2 : 0) + (!s$1.gzhead.extra ? 0 : 4) + (!s$1.gzhead.name ? 0 : 8) + (!s$1.gzhead.comment ? 0 : 16));
			put_byte(s$1, s$1.gzhead.time & 255);
			put_byte(s$1, s$1.gzhead.time >> 8 & 255);
			put_byte(s$1, s$1.gzhead.time >> 16 & 255);
			put_byte(s$1, s$1.gzhead.time >> 24 & 255);
			put_byte(s$1, s$1.level === 9 ? 2 : s$1.strategy >= Z_HUFFMAN_ONLY || s$1.level < 2 ? 4 : 0);
			put_byte(s$1, s$1.gzhead.os & 255);
			if (s$1.gzhead.extra && s$1.gzhead.extra.length) {
				put_byte(s$1, s$1.gzhead.extra.length & 255);
				put_byte(s$1, s$1.gzhead.extra.length >> 8 & 255);
			}
			if (s$1.gzhead.hcrc) strm.adler = crc32_1(strm.adler, s$1.pending_buf, s$1.pending, 0);
			s$1.gzindex = 0;
			s$1.status = EXTRA_STATE;
		}
	}
	if (s$1.status === EXTRA_STATE) {
		if (s$1.gzhead.extra) {
			let beg = s$1.pending;
			let left = (s$1.gzhead.extra.length & 65535) - s$1.gzindex;
			while (s$1.pending + left > s$1.pending_buf_size) {
				let copy = s$1.pending_buf_size - s$1.pending;
				s$1.pending_buf.set(s$1.gzhead.extra.subarray(s$1.gzindex, s$1.gzindex + copy), s$1.pending);
				s$1.pending = s$1.pending_buf_size;
				if (s$1.gzhead.hcrc && s$1.pending > beg) strm.adler = crc32_1(strm.adler, s$1.pending_buf, s$1.pending - beg, beg);
				s$1.gzindex += copy;
				flush_pending(strm);
				if (s$1.pending !== 0) {
					s$1.last_flush = -1;
					return Z_OK$3;
				}
				beg = 0;
				left -= copy;
			}
			let gzhead_extra = new Uint8Array(s$1.gzhead.extra);
			s$1.pending_buf.set(gzhead_extra.subarray(s$1.gzindex, s$1.gzindex + left), s$1.pending);
			s$1.pending += left;
			if (s$1.gzhead.hcrc && s$1.pending > beg) strm.adler = crc32_1(strm.adler, s$1.pending_buf, s$1.pending - beg, beg);
			s$1.gzindex = 0;
		}
		s$1.status = NAME_STATE;
	}
	if (s$1.status === NAME_STATE) {
		if (s$1.gzhead.name) {
			let beg = s$1.pending;
			let val;
			do {
				if (s$1.pending === s$1.pending_buf_size) {
					if (s$1.gzhead.hcrc && s$1.pending > beg) strm.adler = crc32_1(strm.adler, s$1.pending_buf, s$1.pending - beg, beg);
					flush_pending(strm);
					if (s$1.pending !== 0) {
						s$1.last_flush = -1;
						return Z_OK$3;
					}
					beg = 0;
				}
				if (s$1.gzindex < s$1.gzhead.name.length) val = s$1.gzhead.name.charCodeAt(s$1.gzindex++) & 255;
				else val = 0;
				put_byte(s$1, val);
			} while (val !== 0);
			if (s$1.gzhead.hcrc && s$1.pending > beg) strm.adler = crc32_1(strm.adler, s$1.pending_buf, s$1.pending - beg, beg);
			s$1.gzindex = 0;
		}
		s$1.status = COMMENT_STATE;
	}
	if (s$1.status === COMMENT_STATE) {
		if (s$1.gzhead.comment) {
			let beg = s$1.pending;
			let val;
			do {
				if (s$1.pending === s$1.pending_buf_size) {
					if (s$1.gzhead.hcrc && s$1.pending > beg) strm.adler = crc32_1(strm.adler, s$1.pending_buf, s$1.pending - beg, beg);
					flush_pending(strm);
					if (s$1.pending !== 0) {
						s$1.last_flush = -1;
						return Z_OK$3;
					}
					beg = 0;
				}
				if (s$1.gzindex < s$1.gzhead.comment.length) val = s$1.gzhead.comment.charCodeAt(s$1.gzindex++) & 255;
				else val = 0;
				put_byte(s$1, val);
			} while (val !== 0);
			if (s$1.gzhead.hcrc && s$1.pending > beg) strm.adler = crc32_1(strm.adler, s$1.pending_buf, s$1.pending - beg, beg);
		}
		s$1.status = HCRC_STATE;
	}
	if (s$1.status === HCRC_STATE) {
		if (s$1.gzhead.hcrc) {
			if (s$1.pending + 2 > s$1.pending_buf_size) {
				flush_pending(strm);
				if (s$1.pending !== 0) {
					s$1.last_flush = -1;
					return Z_OK$3;
				}
			}
			put_byte(s$1, strm.adler & 255);
			put_byte(s$1, strm.adler >> 8 & 255);
			strm.adler = 0;
		}
		s$1.status = BUSY_STATE;
		flush_pending(strm);
		if (s$1.pending !== 0) {
			s$1.last_flush = -1;
			return Z_OK$3;
		}
	}
	if (strm.avail_in !== 0 || s$1.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s$1.status !== FINISH_STATE) {
		let bstate = s$1.level === 0 ? deflate_stored(s$1, flush) : s$1.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s$1, flush) : s$1.strategy === Z_RLE ? deflate_rle(s$1, flush) : configuration_table[s$1.level].func(s$1, flush);
		if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) s$1.status = FINISH_STATE;
		if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
			if (strm.avail_out === 0) s$1.last_flush = -1;
			return Z_OK$3;
		}
		if (bstate === BS_BLOCK_DONE) {
			if (flush === Z_PARTIAL_FLUSH) _tr_align(s$1);
			else if (flush !== Z_BLOCK$1) {
				_tr_stored_block(s$1, 0, 0, false);
				if (flush === Z_FULL_FLUSH$1) {
					/*** CLEAR_HASH(s); ***/ zero(s$1.head);
					if (s$1.lookahead === 0) {
						s$1.strstart = 0;
						s$1.block_start = 0;
						s$1.insert = 0;
					}
				}
			}
			flush_pending(strm);
			if (strm.avail_out === 0) {
				s$1.last_flush = -1;
				return Z_OK$3;
			}
		}
	}
	if (flush !== Z_FINISH$3) return Z_OK$3;
	if (s$1.wrap <= 0) return Z_STREAM_END$3;
	if (s$1.wrap === 2) {
		put_byte(s$1, strm.adler & 255);
		put_byte(s$1, strm.adler >> 8 & 255);
		put_byte(s$1, strm.adler >> 16 & 255);
		put_byte(s$1, strm.adler >> 24 & 255);
		put_byte(s$1, strm.total_in & 255);
		put_byte(s$1, strm.total_in >> 8 & 255);
		put_byte(s$1, strm.total_in >> 16 & 255);
		put_byte(s$1, strm.total_in >> 24 & 255);
	} else {
		putShortMSB(s$1, strm.adler >>> 16);
		putShortMSB(s$1, strm.adler & 65535);
	}
	flush_pending(strm);
	if (s$1.wrap > 0) s$1.wrap = -s$1.wrap;
	return s$1.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};
var deflateEnd = (strm) => {
	if (deflateStateCheck(strm)) return Z_STREAM_ERROR$2;
	const status = strm.state.status;
	strm.state = null;
	return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};
var deflateSetDictionary = (strm, dictionary) => {
	let dictLength = dictionary.length;
	if (deflateStateCheck(strm)) return Z_STREAM_ERROR$2;
	const s$1 = strm.state;
	const wrap = s$1.wrap;
	if (wrap === 2 || wrap === 1 && s$1.status !== INIT_STATE || s$1.lookahead) return Z_STREAM_ERROR$2;
	if (wrap === 1) strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
	s$1.wrap = 0;
	if (dictLength >= s$1.w_size) {
		if (wrap === 0) {
			/*** CLEAR_HASH(s); ***/
			zero(s$1.head);
			s$1.strstart = 0;
			s$1.block_start = 0;
			s$1.insert = 0;
		}
		let tmpDict = new Uint8Array(s$1.w_size);
		tmpDict.set(dictionary.subarray(dictLength - s$1.w_size, dictLength), 0);
		dictionary = tmpDict;
		dictLength = s$1.w_size;
	}
	const avail = strm.avail_in;
	const next = strm.next_in;
	const input = strm.input;
	strm.avail_in = dictLength;
	strm.next_in = 0;
	strm.input = dictionary;
	fill_window(s$1);
	while (s$1.lookahead >= MIN_MATCH) {
		let str = s$1.strstart;
		let n = s$1.lookahead - (MIN_MATCH - 1);
		do {
			s$1.ins_h = HASH(s$1, s$1.ins_h, s$1.window[str + MIN_MATCH - 1]);
			s$1.prev[str & s$1.w_mask] = s$1.head[s$1.ins_h];
			s$1.head[s$1.ins_h] = str;
			str++;
		} while (--n);
		s$1.strstart = str;
		s$1.lookahead = MIN_MATCH - 1;
		fill_window(s$1);
	}
	s$1.strstart += s$1.lookahead;
	s$1.block_start = s$1.strstart;
	s$1.insert = s$1.lookahead;
	s$1.lookahead = 0;
	s$1.match_length = s$1.prev_length = MIN_MATCH - 1;
	s$1.match_available = 0;
	strm.next_in = next;
	strm.input = input;
	strm.avail_in = avail;
	s$1.wrap = wrap;
	return Z_OK$3;
};
var deflate_1$2 = {
	deflateInit,
	deflateInit2,
	deflateReset,
	deflateResetKeep,
	deflateSetHeader,
	deflate: deflate$2,
	deflateEnd,
	deflateSetDictionary,
	deflateInfo: "pako deflate (from Nodeca project)"
};
var _has = (obj, key) => {
	return Object.prototype.hasOwnProperty.call(obj, key);
};
var assign = function(obj) {
	const sources = Array.prototype.slice.call(arguments, 1);
	while (sources.length) {
		const source = sources.shift();
		if (!source) continue;
		if (typeof source !== "object") throw new TypeError(source + "must be non-object");
		for (const p$1 in source) if (_has(source, p$1)) obj[p$1] = source[p$1];
	}
	return obj;
};
var flattenChunks = (chunks) => {
	let len = 0;
	for (let i$2 = 0, l$1 = chunks.length; i$2 < l$1; i$2++) len += chunks[i$2].length;
	const result = new Uint8Array(len);
	for (let i$2 = 0, pos = 0, l$1 = chunks.length; i$2 < l$1; i$2++) {
		let chunk = chunks[i$2];
		result.set(chunk, pos);
		pos += chunk.length;
	}
	return result;
};
var common = {
	assign,
	flattenChunks
};
var STR_APPLY_UIA_OK = true;
try {
	String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
	STR_APPLY_UIA_OK = false;
}
var _utf8len = new Uint8Array(256);
for (let q$1 = 0; q$1 < 256; q$1++) _utf8len[q$1] = q$1 >= 252 ? 6 : q$1 >= 248 ? 5 : q$1 >= 240 ? 4 : q$1 >= 224 ? 3 : q$1 >= 192 ? 2 : 1;
_utf8len[254] = _utf8len[254] = 1;
var string2buf = (str) => {
	if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(str);
	let buf, c$1, c2, m_pos, i$2, str_len = str.length, buf_len = 0;
	for (m_pos = 0; m_pos < str_len; m_pos++) {
		c$1 = str.charCodeAt(m_pos);
		if ((c$1 & 64512) === 55296 && m_pos + 1 < str_len) {
			c2 = str.charCodeAt(m_pos + 1);
			if ((c2 & 64512) === 56320) {
				c$1 = 65536 + (c$1 - 55296 << 10) + (c2 - 56320);
				m_pos++;
			}
		}
		buf_len += c$1 < 128 ? 1 : c$1 < 2048 ? 2 : c$1 < 65536 ? 3 : 4;
	}
	buf = new Uint8Array(buf_len);
	for (i$2 = 0, m_pos = 0; i$2 < buf_len; m_pos++) {
		c$1 = str.charCodeAt(m_pos);
		if ((c$1 & 64512) === 55296 && m_pos + 1 < str_len) {
			c2 = str.charCodeAt(m_pos + 1);
			if ((c2 & 64512) === 56320) {
				c$1 = 65536 + (c$1 - 55296 << 10) + (c2 - 56320);
				m_pos++;
			}
		}
		if (c$1 < 128) buf[i$2++] = c$1;
		else if (c$1 < 2048) {
			buf[i$2++] = 192 | c$1 >>> 6;
			buf[i$2++] = 128 | c$1 & 63;
		} else if (c$1 < 65536) {
			buf[i$2++] = 224 | c$1 >>> 12;
			buf[i$2++] = 128 | c$1 >>> 6 & 63;
			buf[i$2++] = 128 | c$1 & 63;
		} else {
			buf[i$2++] = 240 | c$1 >>> 18;
			buf[i$2++] = 128 | c$1 >>> 12 & 63;
			buf[i$2++] = 128 | c$1 >>> 6 & 63;
			buf[i$2++] = 128 | c$1 & 63;
		}
	}
	return buf;
};
var buf2binstring = (buf, len) => {
	if (len < 65534) {
		if (buf.subarray && STR_APPLY_UIA_OK) return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
	}
	let result = "";
	for (let i$2 = 0; i$2 < len; i$2++) result += String.fromCharCode(buf[i$2]);
	return result;
};
var buf2string = (buf, max) => {
	const len = max || buf.length;
	if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(buf.subarray(0, max));
	let i$2, out;
	const utf16buf = new Array(len * 2);
	for (out = 0, i$2 = 0; i$2 < len;) {
		let c$1 = buf[i$2++];
		if (c$1 < 128) {
			utf16buf[out++] = c$1;
			continue;
		}
		let c_len = _utf8len[c$1];
		if (c_len > 4) {
			utf16buf[out++] = 65533;
			i$2 += c_len - 1;
			continue;
		}
		c$1 &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
		while (c_len > 1 && i$2 < len) {
			c$1 = c$1 << 6 | buf[i$2++] & 63;
			c_len--;
		}
		if (c_len > 1) {
			utf16buf[out++] = 65533;
			continue;
		}
		if (c$1 < 65536) utf16buf[out++] = c$1;
		else {
			c$1 -= 65536;
			utf16buf[out++] = 55296 | c$1 >> 10 & 1023;
			utf16buf[out++] = 56320 | c$1 & 1023;
		}
	}
	return buf2binstring(utf16buf, out);
};
var utf8border = (buf, max) => {
	max = max || buf.length;
	if (max > buf.length) max = buf.length;
	let pos = max - 1;
	while (pos >= 0 && (buf[pos] & 192) === 128) pos--;
	if (pos < 0) return max;
	if (pos === 0) return max;
	return pos + _utf8len[buf[pos]] > max ? pos : max;
};
var strings = {
	string2buf,
	buf2string,
	utf8border
};
function ZStream() {
	this.input = null;
	this.next_in = 0;
	this.avail_in = 0;
	this.total_in = 0;
	this.output = null;
	this.next_out = 0;
	this.avail_out = 0;
	this.total_out = 0;
	this.msg = "";
	this.state = null;
	this.data_type = 2;
	this.adler = 0;
}
var zstream = ZStream;
var toString$1 = Object.prototype.toString;
var { Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2, Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2, Z_DEFAULT_COMPRESSION, Z_DEFAULT_STRATEGY, Z_DEFLATED: Z_DEFLATED$1 } = constants$2;
/**
* class Deflate
*
* Generic JS-style wrapper for zlib calls. If you don't need
* streaming behaviour - use more simple functions: [[deflate]],
* [[deflateRaw]] and [[gzip]].
**/
/**
* Deflate.result -> Uint8Array
*
* Compressed result, generated by default [[Deflate#onData]]
* and [[Deflate#onEnd]] handlers. Filled after you push last chunk
* (call [[Deflate#push]] with `Z_FINISH` / `true` param).
**/
/**
* Deflate.err -> Number
*
* Error code after deflate finished. 0 (Z_OK) on success.
* You will not need it in real life, because deflate errors
* are possible only on wrong options or bad `onData` / `onEnd`
* custom handlers.
**/
/**
* Deflate.msg -> String
*
* Error message, if [[Deflate.err]] != 0
**/
/**
* new Deflate(options)
* - options (Object): zlib deflate options.
*
* Creates new deflator instance with specified params. Throws exception
* on bad params. Supported options:
*
* - `level`
* - `windowBits`
* - `memLevel`
* - `strategy`
* - `dictionary`
*
* [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
* for more information on these.
*
* Additional options, for internal needs:
*
* - `chunkSize` - size of generated data chunks (16K by default)
* - `raw` (Boolean) - do raw deflate
* - `gzip` (Boolean) - create gzip wrapper
* - `header` (Object) - custom header for gzip
*   - `text` (Boolean) - true if compressed data believed to be text
*   - `time` (Number) - modification time, unix timestamp
*   - `os` (Number) - operation system code
*   - `extra` (Array) - array of bytes with extra data (max 65536)
*   - `name` (String) - file name (binary string)
*   - `comment` (String) - comment (binary string)
*   - `hcrc` (Boolean) - true if header crc should be added
*
* ##### Example:
*
* ```javascript
* const pako = require('pako')
*   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
*   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
*
* const deflate = new pako.Deflate({ level: 3});
*
* deflate.push(chunk1, false);
* deflate.push(chunk2, true);  // true -> last chunk
*
* if (deflate.err) { throw new Error(deflate.err); }
*
* console.log(deflate.result);
* ```
**/
function Deflate$1(options) {
	this.options = common.assign({
		level: Z_DEFAULT_COMPRESSION,
		method: Z_DEFLATED$1,
		chunkSize: 16384,
		windowBits: 15,
		memLevel: 8,
		strategy: Z_DEFAULT_STRATEGY
	}, options || {});
	let opt = this.options;
	if (opt.raw && opt.windowBits > 0) opt.windowBits = -opt.windowBits;
	else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) opt.windowBits += 16;
	this.err = 0;
	this.msg = "";
	this.ended = false;
	this.chunks = [];
	this.strm = new zstream();
	this.strm.avail_out = 0;
	let status = deflate_1$2.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
	if (status !== Z_OK$2) throw new Error(messages[status]);
	if (opt.header) deflate_1$2.deflateSetHeader(this.strm, opt.header);
	if (opt.dictionary) {
		let dict;
		if (typeof opt.dictionary === "string") dict = strings.string2buf(opt.dictionary);
		else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") dict = new Uint8Array(opt.dictionary);
		else dict = opt.dictionary;
		status = deflate_1$2.deflateSetDictionary(this.strm, dict);
		if (status !== Z_OK$2) throw new Error(messages[status]);
		this._dict_set = true;
	}
}
/**
* Deflate#push(data[, flush_mode]) -> Boolean
* - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
*   converted to utf8 byte sequence.
* - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
*   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
*
* Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
* new compressed chunks. Returns `true` on success. The last data block must
* have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
* buffers and call [[Deflate#onEnd]].
*
* On fail call [[Deflate#onEnd]] with error code and return false.
*
* ##### Example
*
* ```javascript
* push(chunk, false); // push one of data chunks
* ...
* push(chunk, true);  // push last chunk
* ```
**/
Deflate$1.prototype.push = function(data, flush_mode) {
	const strm = this.strm;
	const chunkSize = this.options.chunkSize;
	let status, _flush_mode;
	if (this.ended) return false;
	if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
	else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;
	if (typeof data === "string") strm.input = strings.string2buf(data);
	else if (toString$1.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
	else strm.input = data;
	strm.next_in = 0;
	strm.avail_in = strm.input.length;
	for (;;) {
		if (strm.avail_out === 0) {
			strm.output = new Uint8Array(chunkSize);
			strm.next_out = 0;
			strm.avail_out = chunkSize;
		}
		if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
			this.onData(strm.output.subarray(0, strm.next_out));
			strm.avail_out = 0;
			continue;
		}
		status = deflate_1$2.deflate(strm, _flush_mode);
		if (status === Z_STREAM_END$2) {
			if (strm.next_out > 0) this.onData(strm.output.subarray(0, strm.next_out));
			status = deflate_1$2.deflateEnd(this.strm);
			this.onEnd(status);
			this.ended = true;
			return status === Z_OK$2;
		}
		if (strm.avail_out === 0) {
			this.onData(strm.output);
			continue;
		}
		if (_flush_mode > 0 && strm.next_out > 0) {
			this.onData(strm.output.subarray(0, strm.next_out));
			strm.avail_out = 0;
			continue;
		}
		if (strm.avail_in === 0) break;
	}
	return true;
};
/**
* Deflate#onData(chunk) -> Void
* - chunk (Uint8Array): output data.
*
* By default, stores data blocks in `chunks[]` property and glue
* those in `onEnd`. Override this handler, if you need another behaviour.
**/
Deflate$1.prototype.onData = function(chunk) {
	this.chunks.push(chunk);
};
/**
* Deflate#onEnd(status) -> Void
* - status (Number): deflate status. 0 (Z_OK) on success,
*   other if not.
*
* Called once after you tell deflate that the input stream is
* complete (Z_FINISH). By default - join collected chunks,
* free memory and fill `results` / `err` properties.
**/
Deflate$1.prototype.onEnd = function(status) {
	if (status === Z_OK$2) this.result = common.flattenChunks(this.chunks);
	this.chunks = [];
	this.err = status;
	this.msg = this.strm.msg;
};
/**
* deflate(data[, options]) -> Uint8Array
* - data (Uint8Array|ArrayBuffer|String): input data to compress.
* - options (Object): zlib deflate options.
*
* Compress `data` with deflate algorithm and `options`.
*
* Supported options are:
*
* - level
* - windowBits
* - memLevel
* - strategy
* - dictionary
*
* [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
* for more information on these.
*
* Sugar (options):
*
* - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
*   negative windowBits implicitly.
*
* ##### Example:
*
* ```javascript
* const pako = require('pako')
* const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
*
* console.log(pako.deflate(data));
* ```
**/
function deflate$1(input, options) {
	const deflator = new Deflate$1(options);
	deflator.push(input, true);
	if (deflator.err) throw deflator.msg || messages[deflator.err];
	return deflator.result;
}
/**
* deflateRaw(data[, options]) -> Uint8Array
* - data (Uint8Array|ArrayBuffer|String): input data to compress.
* - options (Object): zlib deflate options.
*
* The same as [[deflate]], but creates raw data, without wrapper
* (header and adler32 crc).
**/
function deflateRaw$1(input, options) {
	options = options || {};
	options.raw = true;
	return deflate$1(input, options);
}
/**
* gzip(data[, options]) -> Uint8Array
* - data (Uint8Array|ArrayBuffer|String): input data to compress.
* - options (Object): zlib deflate options.
*
* The same as [[deflate]], but create gzip wrapper instead of
* deflate one.
**/
function gzip$1(input, options) {
	options = options || {};
	options.gzip = true;
	return deflate$1(input, options);
}
var deflate_1$1 = {
	Deflate: Deflate$1,
	deflate: deflate$1,
	deflateRaw: deflateRaw$1,
	gzip: gzip$1,
	constants: constants$2
};
var BAD$1 = 16209;
var TYPE$1 = 16191;
var inffast = function inflate_fast(strm, start) {
	let _in;
	let last;
	let _out;
	let beg;
	let end;
	let dmax;
	let wsize;
	let whave;
	let wnext;
	let s_window;
	let hold;
	let bits;
	let lcode;
	let dcode;
	let lmask;
	let dmask;
	let here;
	let op;
	let len;
	let dist;
	let from;
	let from_source;
	let input, output;
	const state = strm.state;
	_in = strm.next_in;
	input = strm.input;
	last = _in + (strm.avail_in - 5);
	_out = strm.next_out;
	output = strm.output;
	beg = _out - (start - strm.avail_out);
	end = _out + (strm.avail_out - 257);
	dmax = state.dmax;
	wsize = state.wsize;
	whave = state.whave;
	wnext = state.wnext;
	s_window = state.window;
	hold = state.hold;
	bits = state.bits;
	lcode = state.lencode;
	dcode = state.distcode;
	lmask = (1 << state.lenbits) - 1;
	dmask = (1 << state.distbits) - 1;
	top: do {
		if (bits < 15) {
			hold += input[_in++] << bits;
			bits += 8;
			hold += input[_in++] << bits;
			bits += 8;
		}
		here = lcode[hold & lmask];
		dolen: for (;;) {
			op = here >>> 24;
			hold >>>= op;
			bits -= op;
			op = here >>> 16 & 255;
			if (op === 0) output[_out++] = here & 65535;
			else if (op & 16) {
				len = here & 65535;
				op &= 15;
				if (op) {
					if (bits < op) {
						hold += input[_in++] << bits;
						bits += 8;
					}
					len += hold & (1 << op) - 1;
					hold >>>= op;
					bits -= op;
				}
				if (bits < 15) {
					hold += input[_in++] << bits;
					bits += 8;
					hold += input[_in++] << bits;
					bits += 8;
				}
				here = dcode[hold & dmask];
				dodist: for (;;) {
					op = here >>> 24;
					hold >>>= op;
					bits -= op;
					op = here >>> 16 & 255;
					if (op & 16) {
						dist = here & 65535;
						op &= 15;
						if (bits < op) {
							hold += input[_in++] << bits;
							bits += 8;
							if (bits < op) {
								hold += input[_in++] << bits;
								bits += 8;
							}
						}
						dist += hold & (1 << op) - 1;
						if (dist > dmax) {
							strm.msg = "invalid distance too far back";
							state.mode = BAD$1;
							break top;
						}
						hold >>>= op;
						bits -= op;
						op = _out - beg;
						if (dist > op) {
							op = dist - op;
							if (op > whave) {
								if (state.sane) {
									strm.msg = "invalid distance too far back";
									state.mode = BAD$1;
									break top;
								}
							}
							from = 0;
							from_source = s_window;
							if (wnext === 0) {
								from += wsize - op;
								if (op < len) {
									len -= op;
									do
										output[_out++] = s_window[from++];
									while (--op);
									from = _out - dist;
									from_source = output;
								}
							} else if (wnext < op) {
								from += wsize + wnext - op;
								op -= wnext;
								if (op < len) {
									len -= op;
									do
										output[_out++] = s_window[from++];
									while (--op);
									from = 0;
									if (wnext < len) {
										op = wnext;
										len -= op;
										do
											output[_out++] = s_window[from++];
										while (--op);
										from = _out - dist;
										from_source = output;
									}
								}
							} else {
								from += wnext - op;
								if (op < len) {
									len -= op;
									do
										output[_out++] = s_window[from++];
									while (--op);
									from = _out - dist;
									from_source = output;
								}
							}
							while (len > 2) {
								output[_out++] = from_source[from++];
								output[_out++] = from_source[from++];
								output[_out++] = from_source[from++];
								len -= 3;
							}
							if (len) {
								output[_out++] = from_source[from++];
								if (len > 1) output[_out++] = from_source[from++];
							}
						} else {
							from = _out - dist;
							do {
								output[_out++] = output[from++];
								output[_out++] = output[from++];
								output[_out++] = output[from++];
								len -= 3;
							} while (len > 2);
							if (len) {
								output[_out++] = output[from++];
								if (len > 1) output[_out++] = output[from++];
							}
						}
					} else if ((op & 64) === 0) {
						here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
						continue dodist;
					} else {
						strm.msg = "invalid distance code";
						state.mode = BAD$1;
						break top;
					}
					break;
				}
			} else if ((op & 64) === 0) {
				here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
				continue dolen;
			} else if (op & 32) {
				state.mode = TYPE$1;
				break top;
			} else {
				strm.msg = "invalid literal/length code";
				state.mode = BAD$1;
				break top;
			}
			break;
		}
	} while (_in < last && _out < end);
	len = bits >> 3;
	_in -= len;
	bits -= len << 3;
	hold &= (1 << bits) - 1;
	strm.next_in = _in;
	strm.next_out = _out;
	strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
	strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
	state.hold = hold;
	state.bits = bits;
};
var MAXBITS = 15;
var ENOUGH_LENS$1 = 852;
var ENOUGH_DISTS$1 = 592;
var CODES$1 = 0;
var LENS$1 = 1;
var DISTS$1 = 2;
var lbase = new Uint16Array([
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	13,
	15,
	17,
	19,
	23,
	27,
	31,
	35,
	43,
	51,
	59,
	67,
	83,
	99,
	115,
	131,
	163,
	195,
	227,
	258,
	0,
	0
]);
var lext = new Uint8Array([
	16,
	16,
	16,
	16,
	16,
	16,
	16,
	16,
	17,
	17,
	17,
	17,
	18,
	18,
	18,
	18,
	19,
	19,
	19,
	19,
	20,
	20,
	20,
	20,
	21,
	21,
	21,
	21,
	16,
	72,
	78
]);
var dbase = new Uint16Array([
	1,
	2,
	3,
	4,
	5,
	7,
	9,
	13,
	17,
	25,
	33,
	49,
	65,
	97,
	129,
	193,
	257,
	385,
	513,
	769,
	1025,
	1537,
	2049,
	3073,
	4097,
	6145,
	8193,
	12289,
	16385,
	24577,
	0,
	0
]);
var dext = new Uint8Array([
	16,
	16,
	16,
	16,
	17,
	17,
	18,
	18,
	19,
	19,
	20,
	20,
	21,
	21,
	22,
	22,
	23,
	23,
	24,
	24,
	25,
	25,
	26,
	26,
	27,
	27,
	28,
	28,
	29,
	29,
	64,
	64
]);
var inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) => {
	const bits = opts.bits;
	let len = 0;
	let sym = 0;
	let min = 0, max = 0;
	let root = 0;
	let curr = 0;
	let drop = 0;
	let left = 0;
	let used = 0;
	let huff = 0;
	let incr;
	let fill;
	let low;
	let mask;
	let next;
	let base = null;
	let match;
	const count = new Uint16Array(MAXBITS + 1);
	const offs = new Uint16Array(MAXBITS + 1);
	let extra = null;
	let here_bits, here_op, here_val;
	for (len = 0; len <= MAXBITS; len++) count[len] = 0;
	for (sym = 0; sym < codes; sym++) count[lens[lens_index + sym]]++;
	root = bits;
	for (max = MAXBITS; max >= 1; max--) if (count[max] !== 0) break;
	if (root > max) root = max;
	if (max === 0) {
		table[table_index++] = 20971520;
		table[table_index++] = 20971520;
		opts.bits = 1;
		return 0;
	}
	for (min = 1; min < max; min++) if (count[min] !== 0) break;
	if (root < min) root = min;
	left = 1;
	for (len = 1; len <= MAXBITS; len++) {
		left <<= 1;
		left -= count[len];
		if (left < 0) return -1;
	}
	if (left > 0 && (type === CODES$1 || max !== 1)) return -1;
	offs[1] = 0;
	for (len = 1; len < MAXBITS; len++) offs[len + 1] = offs[len] + count[len];
	for (sym = 0; sym < codes; sym++) if (lens[lens_index + sym] !== 0) work[offs[lens[lens_index + sym]]++] = sym;
	if (type === CODES$1) {
		base = extra = work;
		match = 20;
	} else if (type === LENS$1) {
		base = lbase;
		extra = lext;
		match = 257;
	} else {
		base = dbase;
		extra = dext;
		match = 0;
	}
	huff = 0;
	sym = 0;
	len = min;
	next = table_index;
	curr = root;
	drop = 0;
	low = -1;
	used = 1 << root;
	mask = used - 1;
	if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) return 1;
	for (;;) {
		here_bits = len - drop;
		if (work[sym] + 1 < match) {
			here_op = 0;
			here_val = work[sym];
		} else if (work[sym] >= match) {
			here_op = extra[work[sym] - match];
			here_val = base[work[sym] - match];
		} else {
			here_op = 96;
			here_val = 0;
		}
		incr = 1 << len - drop;
		fill = 1 << curr;
		min = fill;
		do {
			fill -= incr;
			table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
		} while (fill !== 0);
		incr = 1 << len - 1;
		while (huff & incr) incr >>= 1;
		if (incr !== 0) {
			huff &= incr - 1;
			huff += incr;
		} else huff = 0;
		sym++;
		if (--count[len] === 0) {
			if (len === max) break;
			len = lens[lens_index + work[sym]];
		}
		if (len > root && (huff & mask) !== low) {
			if (drop === 0) drop = root;
			next += min;
			curr = len - drop;
			left = 1 << curr;
			while (curr + drop < max) {
				left -= count[curr + drop];
				if (left <= 0) break;
				curr++;
				left <<= 1;
			}
			used += 1 << curr;
			if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) return 1;
			low = huff & mask;
			table[low] = root << 24 | curr << 16 | next - table_index | 0;
		}
	}
	if (huff !== 0) table[next + huff] = len - drop << 24 | 4194304;
	opts.bits = root;
	return 0;
};
var inftrees = inflate_table;
var CODES = 0;
var LENS = 1;
var DISTS = 2;
var { Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES, Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR, Z_DEFLATED } = constants$2;
var HEAD = 16180;
var FLAGS = 16181;
var TIME = 16182;
var OS = 16183;
var EXLEN = 16184;
var EXTRA = 16185;
var NAME = 16186;
var COMMENT = 16187;
var HCRC = 16188;
var DICTID = 16189;
var DICT = 16190;
var TYPE = 16191;
var TYPEDO = 16192;
var STORED = 16193;
var COPY_ = 16194;
var COPY = 16195;
var TABLE = 16196;
var LENLENS = 16197;
var CODELENS = 16198;
var LEN_ = 16199;
var LEN = 16200;
var LENEXT = 16201;
var DIST = 16202;
var DISTEXT = 16203;
var MATCH = 16204;
var LIT = 16205;
var CHECK = 16206;
var LENGTH = 16207;
var DONE = 16208;
var BAD = 16209;
var MEM = 16210;
var SYNC = 16211;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
var DEF_WBITS = 15;
var zswap32 = (q$1) => {
	return (q$1 >>> 24 & 255) + (q$1 >>> 8 & 65280) + ((q$1 & 65280) << 8) + ((q$1 & 255) << 24);
};
function InflateState() {
	this.strm = null;
	this.mode = 0;
	this.last = false;
	this.wrap = 0;
	this.havedict = false;
	this.flags = 0;
	this.dmax = 0;
	this.check = 0;
	this.total = 0;
	this.head = null;
	this.wbits = 0;
	this.wsize = 0;
	this.whave = 0;
	this.wnext = 0;
	this.window = null;
	this.hold = 0;
	this.bits = 0;
	this.length = 0;
	this.offset = 0;
	this.extra = 0;
	this.lencode = null;
	this.distcode = null;
	this.lenbits = 0;
	this.distbits = 0;
	this.ncode = 0;
	this.nlen = 0;
	this.ndist = 0;
	this.have = 0;
	this.next = null;
	this.lens = new Uint16Array(320);
	this.work = new Uint16Array(288);
	this.lendyn = null;
	this.distdyn = null;
	this.sane = 0;
	this.back = 0;
	this.was = 0;
}
var inflateStateCheck = (strm) => {
	if (!strm) return 1;
	const state = strm.state;
	if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) return 1;
	return 0;
};
var inflateResetKeep = (strm) => {
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	const state = strm.state;
	strm.total_in = strm.total_out = state.total = 0;
	strm.msg = "";
	if (state.wrap) strm.adler = state.wrap & 1;
	state.mode = HEAD;
	state.last = 0;
	state.havedict = 0;
	state.flags = -1;
	state.dmax = 32768;
	state.head = null;
	state.hold = 0;
	state.bits = 0;
	state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
	state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
	state.sane = 1;
	state.back = -1;
	return Z_OK$1;
};
var inflateReset = (strm) => {
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	const state = strm.state;
	state.wsize = 0;
	state.whave = 0;
	state.wnext = 0;
	return inflateResetKeep(strm);
};
var inflateReset2 = (strm, windowBits) => {
	let wrap;
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	const state = strm.state;
	if (windowBits < 0) {
		wrap = 0;
		windowBits = -windowBits;
	} else {
		wrap = (windowBits >> 4) + 5;
		if (windowBits < 48) windowBits &= 15;
	}
	if (windowBits && (windowBits < 8 || windowBits > 15)) return Z_STREAM_ERROR$1;
	if (state.window !== null && state.wbits !== windowBits) state.window = null;
	state.wrap = wrap;
	state.wbits = windowBits;
	return inflateReset(strm);
};
var inflateInit2 = (strm, windowBits) => {
	if (!strm) return Z_STREAM_ERROR$1;
	const state = new InflateState();
	strm.state = state;
	state.strm = strm;
	state.window = null;
	state.mode = HEAD;
	const ret = inflateReset2(strm, windowBits);
	if (ret !== Z_OK$1) strm.state = null;
	return ret;
};
var inflateInit = (strm) => {
	return inflateInit2(strm, DEF_WBITS);
};
var virgin = true;
var lenfix, distfix;
var fixedtables = (state) => {
	if (virgin) {
		lenfix = new Int32Array(512);
		distfix = new Int32Array(32);
		let sym = 0;
		while (sym < 144) state.lens[sym++] = 8;
		while (sym < 256) state.lens[sym++] = 9;
		while (sym < 280) state.lens[sym++] = 7;
		while (sym < 288) state.lens[sym++] = 8;
		inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
		sym = 0;
		while (sym < 32) state.lens[sym++] = 5;
		inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
		virgin = false;
	}
	state.lencode = lenfix;
	state.lenbits = 9;
	state.distcode = distfix;
	state.distbits = 5;
};
var updatewindow = (strm, src, end, copy) => {
	let dist;
	const state = strm.state;
	if (state.window === null) {
		state.wsize = 1 << state.wbits;
		state.wnext = 0;
		state.whave = 0;
		state.window = new Uint8Array(state.wsize);
	}
	if (copy >= state.wsize) {
		state.window.set(src.subarray(end - state.wsize, end), 0);
		state.wnext = 0;
		state.whave = state.wsize;
	} else {
		dist = state.wsize - state.wnext;
		if (dist > copy) dist = copy;
		state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
		copy -= dist;
		if (copy) {
			state.window.set(src.subarray(end - copy, end), 0);
			state.wnext = copy;
			state.whave = state.wsize;
		} else {
			state.wnext += dist;
			if (state.wnext === state.wsize) state.wnext = 0;
			if (state.whave < state.wsize) state.whave += dist;
		}
	}
	return 0;
};
var inflate$2 = (strm, flush) => {
	let state;
	let input, output;
	let next;
	let put;
	let have, left;
	let hold;
	let bits;
	let _in, _out;
	let copy;
	let from;
	let from_source;
	let here = 0;
	let here_bits, here_op, here_val;
	let last_bits, last_op, last_val;
	let len;
	let ret;
	const hbuf = new Uint8Array(4);
	let opts;
	let n;
	const order = new Uint8Array([
		16,
		17,
		18,
		0,
		8,
		7,
		9,
		6,
		10,
		5,
		11,
		4,
		12,
		3,
		13,
		2,
		14,
		1,
		15
	]);
	if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) return Z_STREAM_ERROR$1;
	state = strm.state;
	if (state.mode === TYPE) state.mode = TYPEDO;
	put = strm.next_out;
	output = strm.output;
	left = strm.avail_out;
	next = strm.next_in;
	input = strm.input;
	have = strm.avail_in;
	hold = state.hold;
	bits = state.bits;
	_in = have;
	_out = left;
	ret = Z_OK$1;
	inf_leave: for (;;) switch (state.mode) {
		case HEAD:
			if (state.wrap === 0) {
				state.mode = TYPEDO;
				break;
			}
			while (bits < 16) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if (state.wrap & 2 && hold === 35615) {
				if (state.wbits === 0) state.wbits = 15;
				state.check = 0;
				hbuf[0] = hold & 255;
				hbuf[1] = hold >>> 8 & 255;
				state.check = crc32_1(state.check, hbuf, 2, 0);
				hold = 0;
				bits = 0;
				state.mode = FLAGS;
				break;
			}
			if (state.head) state.head.done = false;
			if (!(state.wrap & 1) || (((hold & 255) << 8) + (hold >> 8)) % 31) {
				strm.msg = "incorrect header check";
				state.mode = BAD;
				break;
			}
			if ((hold & 15) !== Z_DEFLATED) {
				strm.msg = "unknown compression method";
				state.mode = BAD;
				break;
			}
			hold >>>= 4;
			bits -= 4;
			len = (hold & 15) + 8;
			if (state.wbits === 0) state.wbits = len;
			if (len > 15 || len > state.wbits) {
				strm.msg = "invalid window size";
				state.mode = BAD;
				break;
			}
			state.dmax = 1 << state.wbits;
			state.flags = 0;
			strm.adler = state.check = 1;
			state.mode = hold & 512 ? DICTID : TYPE;
			hold = 0;
			bits = 0;
			break;
		case FLAGS:
			while (bits < 16) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			state.flags = hold;
			if ((state.flags & 255) !== Z_DEFLATED) {
				strm.msg = "unknown compression method";
				state.mode = BAD;
				break;
			}
			if (state.flags & 57344) {
				strm.msg = "unknown header flags set";
				state.mode = BAD;
				break;
			}
			if (state.head) state.head.text = hold >> 8 & 1;
			if (state.flags & 512 && state.wrap & 4) {
				hbuf[0] = hold & 255;
				hbuf[1] = hold >>> 8 & 255;
				state.check = crc32_1(state.check, hbuf, 2, 0);
			}
			hold = 0;
			bits = 0;
			state.mode = TIME;
		case TIME:
			while (bits < 32) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if (state.head) state.head.time = hold;
			if (state.flags & 512 && state.wrap & 4) {
				hbuf[0] = hold & 255;
				hbuf[1] = hold >>> 8 & 255;
				hbuf[2] = hold >>> 16 & 255;
				hbuf[3] = hold >>> 24 & 255;
				state.check = crc32_1(state.check, hbuf, 4, 0);
			}
			hold = 0;
			bits = 0;
			state.mode = OS;
		case OS:
			while (bits < 16) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if (state.head) {
				state.head.xflags = hold & 255;
				state.head.os = hold >> 8;
			}
			if (state.flags & 512 && state.wrap & 4) {
				hbuf[0] = hold & 255;
				hbuf[1] = hold >>> 8 & 255;
				state.check = crc32_1(state.check, hbuf, 2, 0);
			}
			hold = 0;
			bits = 0;
			state.mode = EXLEN;
		case EXLEN:
			if (state.flags & 1024) {
				while (bits < 16) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				state.length = hold;
				if (state.head) state.head.extra_len = hold;
				if (state.flags & 512 && state.wrap & 4) {
					hbuf[0] = hold & 255;
					hbuf[1] = hold >>> 8 & 255;
					state.check = crc32_1(state.check, hbuf, 2, 0);
				}
				hold = 0;
				bits = 0;
			} else if (state.head) state.head.extra = null;
			state.mode = EXTRA;
		case EXTRA:
			if (state.flags & 1024) {
				copy = state.length;
				if (copy > have) copy = have;
				if (copy) {
					if (state.head) {
						len = state.head.extra_len - state.length;
						if (!state.head.extra) state.head.extra = new Uint8Array(state.head.extra_len);
						state.head.extra.set(input.subarray(next, next + copy), len);
					}
					if (state.flags & 512 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
					have -= copy;
					next += copy;
					state.length -= copy;
				}
				if (state.length) break inf_leave;
			}
			state.length = 0;
			state.mode = NAME;
		case NAME:
			if (state.flags & 2048) {
				if (have === 0) break inf_leave;
				copy = 0;
				do {
					len = input[next + copy++];
					if (state.head && len && state.length < 65536) state.head.name += String.fromCharCode(len);
				} while (len && copy < have);
				if (state.flags & 512 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
				have -= copy;
				next += copy;
				if (len) break inf_leave;
			} else if (state.head) state.head.name = null;
			state.length = 0;
			state.mode = COMMENT;
		case COMMENT:
			if (state.flags & 4096) {
				if (have === 0) break inf_leave;
				copy = 0;
				do {
					len = input[next + copy++];
					if (state.head && len && state.length < 65536) state.head.comment += String.fromCharCode(len);
				} while (len && copy < have);
				if (state.flags & 512 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
				have -= copy;
				next += copy;
				if (len) break inf_leave;
			} else if (state.head) state.head.comment = null;
			state.mode = HCRC;
		case HCRC:
			if (state.flags & 512) {
				while (bits < 16) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				if (state.wrap & 4 && hold !== (state.check & 65535)) {
					strm.msg = "header crc mismatch";
					state.mode = BAD;
					break;
				}
				hold = 0;
				bits = 0;
			}
			if (state.head) {
				state.head.hcrc = state.flags >> 9 & 1;
				state.head.done = true;
			}
			strm.adler = state.check = 0;
			state.mode = TYPE;
			break;
		case DICTID:
			while (bits < 32) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			strm.adler = state.check = zswap32(hold);
			hold = 0;
			bits = 0;
			state.mode = DICT;
		case DICT:
			if (state.havedict === 0) {
				strm.next_out = put;
				strm.avail_out = left;
				strm.next_in = next;
				strm.avail_in = have;
				state.hold = hold;
				state.bits = bits;
				return Z_NEED_DICT$1;
			}
			strm.adler = state.check = 1;
			state.mode = TYPE;
		case TYPE: if (flush === Z_BLOCK || flush === Z_TREES) break inf_leave;
		case TYPEDO:
			if (state.last) {
				hold >>>= bits & 7;
				bits -= bits & 7;
				state.mode = CHECK;
				break;
			}
			while (bits < 3) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			state.last = hold & 1;
			hold >>>= 1;
			bits -= 1;
			switch (hold & 3) {
				case 0:
					state.mode = STORED;
					break;
				case 1:
					fixedtables(state);
					state.mode = LEN_;
					if (flush === Z_TREES) {
						hold >>>= 2;
						bits -= 2;
						break inf_leave;
					}
					break;
				case 2:
					state.mode = TABLE;
					break;
				case 3:
					strm.msg = "invalid block type";
					state.mode = BAD;
			}
			hold >>>= 2;
			bits -= 2;
			break;
		case STORED:
			hold >>>= bits & 7;
			bits -= bits & 7;
			while (bits < 32) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
				strm.msg = "invalid stored block lengths";
				state.mode = BAD;
				break;
			}
			state.length = hold & 65535;
			hold = 0;
			bits = 0;
			state.mode = COPY_;
			if (flush === Z_TREES) break inf_leave;
		case COPY_: state.mode = COPY;
		case COPY:
			copy = state.length;
			if (copy) {
				if (copy > have) copy = have;
				if (copy > left) copy = left;
				if (copy === 0) break inf_leave;
				output.set(input.subarray(next, next + copy), put);
				have -= copy;
				next += copy;
				left -= copy;
				put += copy;
				state.length -= copy;
				break;
			}
			state.mode = TYPE;
			break;
		case TABLE:
			while (bits < 14) {
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			state.nlen = (hold & 31) + 257;
			hold >>>= 5;
			bits -= 5;
			state.ndist = (hold & 31) + 1;
			hold >>>= 5;
			bits -= 5;
			state.ncode = (hold & 15) + 4;
			hold >>>= 4;
			bits -= 4;
			if (state.nlen > 286 || state.ndist > 30) {
				strm.msg = "too many length or distance symbols";
				state.mode = BAD;
				break;
			}
			state.have = 0;
			state.mode = LENLENS;
		case LENLENS:
			while (state.have < state.ncode) {
				while (bits < 3) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				state.lens[order[state.have++]] = hold & 7;
				hold >>>= 3;
				bits -= 3;
			}
			while (state.have < 19) state.lens[order[state.have++]] = 0;
			state.lencode = state.lendyn;
			state.lenbits = 7;
			opts = { bits: state.lenbits };
			ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
			state.lenbits = opts.bits;
			if (ret) {
				strm.msg = "invalid code lengths set";
				state.mode = BAD;
				break;
			}
			state.have = 0;
			state.mode = CODELENS;
		case CODELENS:
			while (state.have < state.nlen + state.ndist) {
				for (;;) {
					here = state.lencode[hold & (1 << state.lenbits) - 1];
					here_bits = here >>> 24;
					here_op = here >>> 16 & 255;
					here_val = here & 65535;
					if (here_bits <= bits) break;
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				if (here_val < 16) {
					hold >>>= here_bits;
					bits -= here_bits;
					state.lens[state.have++] = here_val;
				} else {
					if (here_val === 16) {
						n = here_bits + 2;
						while (bits < n) {
							if (have === 0) break inf_leave;
							have--;
							hold += input[next++] << bits;
							bits += 8;
						}
						hold >>>= here_bits;
						bits -= here_bits;
						if (state.have === 0) {
							strm.msg = "invalid bit length repeat";
							state.mode = BAD;
							break;
						}
						len = state.lens[state.have - 1];
						copy = 3 + (hold & 3);
						hold >>>= 2;
						bits -= 2;
					} else if (here_val === 17) {
						n = here_bits + 3;
						while (bits < n) {
							if (have === 0) break inf_leave;
							have--;
							hold += input[next++] << bits;
							bits += 8;
						}
						hold >>>= here_bits;
						bits -= here_bits;
						len = 0;
						copy = 3 + (hold & 7);
						hold >>>= 3;
						bits -= 3;
					} else {
						n = here_bits + 7;
						while (bits < n) {
							if (have === 0) break inf_leave;
							have--;
							hold += input[next++] << bits;
							bits += 8;
						}
						hold >>>= here_bits;
						bits -= here_bits;
						len = 0;
						copy = 11 + (hold & 127);
						hold >>>= 7;
						bits -= 7;
					}
					if (state.have + copy > state.nlen + state.ndist) {
						strm.msg = "invalid bit length repeat";
						state.mode = BAD;
						break;
					}
					while (copy--) state.lens[state.have++] = len;
				}
			}
			if (state.mode === BAD) break;
			if (state.lens[256] === 0) {
				strm.msg = "invalid code -- missing end-of-block";
				state.mode = BAD;
				break;
			}
			state.lenbits = 9;
			opts = { bits: state.lenbits };
			ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
			state.lenbits = opts.bits;
			if (ret) {
				strm.msg = "invalid literal/lengths set";
				state.mode = BAD;
				break;
			}
			state.distbits = 6;
			state.distcode = state.distdyn;
			opts = { bits: state.distbits };
			ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
			state.distbits = opts.bits;
			if (ret) {
				strm.msg = "invalid distances set";
				state.mode = BAD;
				break;
			}
			state.mode = LEN_;
			if (flush === Z_TREES) break inf_leave;
		case LEN_: state.mode = LEN;
		case LEN:
			if (have >= 6 && left >= 258) {
				strm.next_out = put;
				strm.avail_out = left;
				strm.next_in = next;
				strm.avail_in = have;
				state.hold = hold;
				state.bits = bits;
				inffast(strm, _out);
				put = strm.next_out;
				output = strm.output;
				left = strm.avail_out;
				next = strm.next_in;
				input = strm.input;
				have = strm.avail_in;
				hold = state.hold;
				bits = state.bits;
				if (state.mode === TYPE) state.back = -1;
				break;
			}
			state.back = 0;
			for (;;) {
				here = state.lencode[hold & (1 << state.lenbits) - 1];
				here_bits = here >>> 24;
				here_op = here >>> 16 & 255;
				here_val = here & 65535;
				if (here_bits <= bits) break;
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if (here_op && (here_op & 240) === 0) {
				last_bits = here_bits;
				last_op = here_op;
				last_val = here_val;
				for (;;) {
					here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
					here_bits = here >>> 24;
					here_op = here >>> 16 & 255;
					here_val = here & 65535;
					if (last_bits + here_bits <= bits) break;
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				hold >>>= last_bits;
				bits -= last_bits;
				state.back += last_bits;
			}
			hold >>>= here_bits;
			bits -= here_bits;
			state.back += here_bits;
			state.length = here_val;
			if (here_op === 0) {
				state.mode = LIT;
				break;
			}
			if (here_op & 32) {
				state.back = -1;
				state.mode = TYPE;
				break;
			}
			if (here_op & 64) {
				strm.msg = "invalid literal/length code";
				state.mode = BAD;
				break;
			}
			state.extra = here_op & 15;
			state.mode = LENEXT;
		case LENEXT:
			if (state.extra) {
				n = state.extra;
				while (bits < n) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				state.length += hold & (1 << state.extra) - 1;
				hold >>>= state.extra;
				bits -= state.extra;
				state.back += state.extra;
			}
			state.was = state.length;
			state.mode = DIST;
		case DIST:
			for (;;) {
				here = state.distcode[hold & (1 << state.distbits) - 1];
				here_bits = here >>> 24;
				here_op = here >>> 16 & 255;
				here_val = here & 65535;
				if (here_bits <= bits) break;
				if (have === 0) break inf_leave;
				have--;
				hold += input[next++] << bits;
				bits += 8;
			}
			if ((here_op & 240) === 0) {
				last_bits = here_bits;
				last_op = here_op;
				last_val = here_val;
				for (;;) {
					here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
					here_bits = here >>> 24;
					here_op = here >>> 16 & 255;
					here_val = here & 65535;
					if (last_bits + here_bits <= bits) break;
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				hold >>>= last_bits;
				bits -= last_bits;
				state.back += last_bits;
			}
			hold >>>= here_bits;
			bits -= here_bits;
			state.back += here_bits;
			if (here_op & 64) {
				strm.msg = "invalid distance code";
				state.mode = BAD;
				break;
			}
			state.offset = here_val;
			state.extra = here_op & 15;
			state.mode = DISTEXT;
		case DISTEXT:
			if (state.extra) {
				n = state.extra;
				while (bits < n) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				state.offset += hold & (1 << state.extra) - 1;
				hold >>>= state.extra;
				bits -= state.extra;
				state.back += state.extra;
			}
			if (state.offset > state.dmax) {
				strm.msg = "invalid distance too far back";
				state.mode = BAD;
				break;
			}
			state.mode = MATCH;
		case MATCH:
			if (left === 0) break inf_leave;
			copy = _out - left;
			if (state.offset > copy) {
				copy = state.offset - copy;
				if (copy > state.whave) {
					if (state.sane) {
						strm.msg = "invalid distance too far back";
						state.mode = BAD;
						break;
					}
				}
				if (copy > state.wnext) {
					copy -= state.wnext;
					from = state.wsize - copy;
				} else from = state.wnext - copy;
				if (copy > state.length) copy = state.length;
				from_source = state.window;
			} else {
				from_source = output;
				from = put - state.offset;
				copy = state.length;
			}
			if (copy > left) copy = left;
			left -= copy;
			state.length -= copy;
			do
				output[put++] = from_source[from++];
			while (--copy);
			if (state.length === 0) state.mode = LEN;
			break;
		case LIT:
			if (left === 0) break inf_leave;
			output[put++] = state.length;
			left--;
			state.mode = LEN;
			break;
		case CHECK:
			if (state.wrap) {
				while (bits < 32) {
					if (have === 0) break inf_leave;
					have--;
					hold |= input[next++] << bits;
					bits += 8;
				}
				_out -= left;
				strm.total_out += _out;
				state.total += _out;
				if (state.wrap & 4 && _out) strm.adler = state.check = state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
				_out = left;
				if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
					strm.msg = "incorrect data check";
					state.mode = BAD;
					break;
				}
				hold = 0;
				bits = 0;
			}
			state.mode = LENGTH;
		case LENGTH:
			if (state.wrap && state.flags) {
				while (bits < 32) {
					if (have === 0) break inf_leave;
					have--;
					hold += input[next++] << bits;
					bits += 8;
				}
				if (state.wrap & 4 && hold !== (state.total & 4294967295)) {
					strm.msg = "incorrect length check";
					state.mode = BAD;
					break;
				}
				hold = 0;
				bits = 0;
			}
			state.mode = DONE;
		case DONE:
			ret = Z_STREAM_END$1;
			break inf_leave;
		case BAD:
			ret = Z_DATA_ERROR$1;
			break inf_leave;
		case MEM: return Z_MEM_ERROR$1;
		case SYNC:
		default: return Z_STREAM_ERROR$1;
	}
	strm.next_out = put;
	strm.avail_out = left;
	strm.next_in = next;
	strm.avail_in = have;
	state.hold = hold;
	state.bits = bits;
	if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) {
		if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out));
	}
	_in -= strm.avail_in;
	_out -= strm.avail_out;
	strm.total_in += _in;
	strm.total_out += _out;
	state.total += _out;
	if (state.wrap & 4 && _out) strm.adler = state.check = state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
	strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
	if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) ret = Z_BUF_ERROR;
	return ret;
};
var inflateEnd = (strm) => {
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	let state = strm.state;
	if (state.window) state.window = null;
	strm.state = null;
	return Z_OK$1;
};
var inflateGetHeader = (strm, head) => {
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	const state = strm.state;
	if ((state.wrap & 2) === 0) return Z_STREAM_ERROR$1;
	state.head = head;
	head.done = false;
	return Z_OK$1;
};
var inflateSetDictionary = (strm, dictionary) => {
	const dictLength = dictionary.length;
	let state;
	let dictid;
	let ret;
	if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
	state = strm.state;
	if (state.wrap !== 0 && state.mode !== DICT) return Z_STREAM_ERROR$1;
	if (state.mode === DICT) {
		dictid = 1;
		dictid = adler32_1(dictid, dictionary, dictLength, 0);
		if (dictid !== state.check) return Z_DATA_ERROR$1;
	}
	ret = updatewindow(strm, dictionary, dictLength, dictLength);
	if (ret) {
		state.mode = MEM;
		return Z_MEM_ERROR$1;
	}
	state.havedict = 1;
	return Z_OK$1;
};
var inflate_1$2 = {
	inflateReset,
	inflateReset2,
	inflateResetKeep,
	inflateInit,
	inflateInit2,
	inflate: inflate$2,
	inflateEnd,
	inflateGetHeader,
	inflateSetDictionary,
	inflateInfo: "pako inflate (from Nodeca project)"
};
function GZheader() {
	this.text = 0;
	this.time = 0;
	this.xflags = 0;
	this.os = 0;
	this.extra = null;
	this.extra_len = 0;
	this.name = "";
	this.comment = "";
	this.hcrc = 0;
	this.done = false;
}
var gzheader = GZheader;
var toString = Object.prototype.toString;
var { Z_NO_FLUSH, Z_FINISH, Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR } = constants$2;
/**
* class Inflate
*
* Generic JS-style wrapper for zlib calls. If you don't need
* streaming behaviour - use more simple functions: [[inflate]]
* and [[inflateRaw]].
**/
/**
* Inflate.result -> Uint8Array|String
*
* Uncompressed result, generated by default [[Inflate#onData]]
* and [[Inflate#onEnd]] handlers. Filled after you push last chunk
* (call [[Inflate#push]] with `Z_FINISH` / `true` param).
**/
/**
* Inflate.err -> Number
*
* Error code after inflate finished. 0 (Z_OK) on success.
* Should be checked if broken data possible.
**/
/**
* Inflate.msg -> String
*
* Error message, if [[Inflate.err]] != 0
**/
/**
* new Inflate(options)
* - options (Object): zlib inflate options.
*
* Creates new inflator instance with specified params. Throws exception
* on bad params. Supported options:
*
* - `windowBits`
* - `dictionary`
*
* [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
* for more information on these.
*
* Additional options, for internal needs:
*
* - `chunkSize` - size of generated data chunks (16K by default)
* - `raw` (Boolean) - do raw inflate
* - `to` (String) - if equal to 'string', then result will be converted
*   from utf8 to utf16 (javascript) string. When string output requested,
*   chunk length can differ from `chunkSize`, depending on content.
*
* By default, when no options set, autodetect deflate/gzip data format via
* wrapper header.
*
* ##### Example:
*
* ```javascript
* const pako = require('pako')
* const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
* const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
*
* const inflate = new pako.Inflate({ level: 3});
*
* inflate.push(chunk1, false);
* inflate.push(chunk2, true);  // true -> last chunk
*
* if (inflate.err) { throw new Error(inflate.err); }
*
* console.log(inflate.result);
* ```
**/
function Inflate$1(options) {
	this.options = common.assign({
		chunkSize: 1024 * 64,
		windowBits: 15,
		to: ""
	}, options || {});
	const opt = this.options;
	if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
		opt.windowBits = -opt.windowBits;
		if (opt.windowBits === 0) opt.windowBits = -15;
	}
	if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) opt.windowBits += 32;
	if (opt.windowBits > 15 && opt.windowBits < 48) {
		if ((opt.windowBits & 15) === 0) opt.windowBits |= 15;
	}
	this.err = 0;
	this.msg = "";
	this.ended = false;
	this.chunks = [];
	this.strm = new zstream();
	this.strm.avail_out = 0;
	let status = inflate_1$2.inflateInit2(this.strm, opt.windowBits);
	if (status !== Z_OK) throw new Error(messages[status]);
	this.header = new gzheader();
	inflate_1$2.inflateGetHeader(this.strm, this.header);
	if (opt.dictionary) {
		if (typeof opt.dictionary === "string") opt.dictionary = strings.string2buf(opt.dictionary);
		else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") opt.dictionary = new Uint8Array(opt.dictionary);
		if (opt.raw) {
			status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
			if (status !== Z_OK) throw new Error(messages[status]);
		}
	}
}
/**
* Inflate#push(data[, flush_mode]) -> Boolean
* - data (Uint8Array|ArrayBuffer): input data
* - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
*   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
*   `true` means Z_FINISH.
*
* Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
* new output chunks. Returns `true` on success. If end of stream detected,
* [[Inflate#onEnd]] will be called.
*
* `flush_mode` is not needed for normal operation, because end of stream
* detected automatically. You may try to use it for advanced things, but
* this functionality was not tested.
*
* On fail call [[Inflate#onEnd]] with error code and return false.
*
* ##### Example
*
* ```javascript
* push(chunk, false); // push one of data chunks
* ...
* push(chunk, true);  // push last chunk
* ```
**/
Inflate$1.prototype.push = function(data, flush_mode) {
	const strm = this.strm;
	const chunkSize = this.options.chunkSize;
	const dictionary = this.options.dictionary;
	let status, _flush_mode, last_avail_out;
	if (this.ended) return false;
	if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
	else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
	if (toString.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
	else strm.input = data;
	strm.next_in = 0;
	strm.avail_in = strm.input.length;
	for (;;) {
		if (strm.avail_out === 0) {
			strm.output = new Uint8Array(chunkSize);
			strm.next_out = 0;
			strm.avail_out = chunkSize;
		}
		status = inflate_1$2.inflate(strm, _flush_mode);
		if (status === Z_NEED_DICT && dictionary) {
			status = inflate_1$2.inflateSetDictionary(strm, dictionary);
			if (status === Z_OK) status = inflate_1$2.inflate(strm, _flush_mode);
			else if (status === Z_DATA_ERROR) status = Z_NEED_DICT;
		}
		while (strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0) {
			inflate_1$2.inflateReset(strm);
			status = inflate_1$2.inflate(strm, _flush_mode);
		}
		switch (status) {
			case Z_STREAM_ERROR:
			case Z_DATA_ERROR:
			case Z_NEED_DICT:
			case Z_MEM_ERROR:
				this.onEnd(status);
				this.ended = true;
				return false;
		}
		last_avail_out = strm.avail_out;
		if (strm.next_out) {
			if (strm.avail_out === 0 || status === Z_STREAM_END) if (this.options.to === "string") {
				let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
				let tail = strm.next_out - next_out_utf8;
				let utf8str = strings.buf2string(strm.output, next_out_utf8);
				strm.next_out = tail;
				strm.avail_out = chunkSize - tail;
				if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
				this.onData(utf8str);
			} else this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
		}
		if (status === Z_OK && last_avail_out === 0) continue;
		if (status === Z_STREAM_END) {
			status = inflate_1$2.inflateEnd(this.strm);
			this.onEnd(status);
			this.ended = true;
			return true;
		}
		if (strm.avail_in === 0) break;
	}
	return true;
};
/**
* Inflate#onData(chunk) -> Void
* - chunk (Uint8Array|String): output data. When string output requested,
*   each chunk will be string.
*
* By default, stores data blocks in `chunks[]` property and glue
* those in `onEnd`. Override this handler, if you need another behaviour.
**/
Inflate$1.prototype.onData = function(chunk) {
	this.chunks.push(chunk);
};
/**
* Inflate#onEnd(status) -> Void
* - status (Number): inflate status. 0 (Z_OK) on success,
*   other if not.
*
* Called either after you tell inflate that the input stream is
* complete (Z_FINISH). By default - join collected chunks,
* free memory and fill `results` / `err` properties.
**/
Inflate$1.prototype.onEnd = function(status) {
	if (status === Z_OK) if (this.options.to === "string") this.result = this.chunks.join("");
	else this.result = common.flattenChunks(this.chunks);
	this.chunks = [];
	this.err = status;
	this.msg = this.strm.msg;
};
/**
* inflate(data[, options]) -> Uint8Array|String
* - data (Uint8Array|ArrayBuffer): input data to decompress.
* - options (Object): zlib inflate options.
*
* Decompress `data` with inflate/ungzip and `options`. Autodetect
* format via wrapper header by default. That's why we don't provide
* separate `ungzip` method.
*
* Supported options are:
*
* - windowBits
*
* [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
* for more information.
*
* Sugar (options):
*
* - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
*   negative windowBits implicitly.
* - `to` (String) - if equal to 'string', then result will be converted
*   from utf8 to utf16 (javascript) string. When string output requested,
*   chunk length can differ from `chunkSize`, depending on content.
*
*
* ##### Example:
*
* ```javascript
* const pako = require('pako');
* const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
* let output;
*
* try {
*   output = pako.inflate(input);
* } catch (err) {
*   console.log(err);
* }
* ```
**/
function inflate$1(input, options) {
	const inflator = new Inflate$1(options);
	inflator.push(input);
	if (inflator.err) throw inflator.msg || messages[inflator.err];
	return inflator.result;
}
/**
* inflateRaw(data[, options]) -> Uint8Array|String
* - data (Uint8Array|ArrayBuffer): input data to decompress.
* - options (Object): zlib inflate options.
*
* The same as [[inflate]], but creates raw data, without wrapper
* (header and adler32 crc).
**/
function inflateRaw$1(input, options) {
	options = options || {};
	options.raw = true;
	return inflate$1(input, options);
}
var inflate_1$1 = {
	Inflate: Inflate$1,
	inflate: inflate$1,
	inflateRaw: inflateRaw$1,
	ungzip: inflate$1,
	constants: constants$2
};
var { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;
var { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
var Inflate_1 = Inflate;
var inflate_1 = inflate;

//#endregion
//#region node_modules/fast-png/lib-esm/helpers/crc.js
var crcTable = [];
for (let n = 0; n < 256; n++) {
	let c$1 = n;
	for (let k$1 = 0; k$1 < 8; k$1++) if (c$1 & 1) c$1 = 3988292384 ^ c$1 >>> 1;
	else c$1 = c$1 >>> 1;
	crcTable[n] = c$1;
}
var initialCrc = 4294967295;
function updateCrc(currentCrc, data, length) {
	let c$1 = currentCrc;
	for (let n = 0; n < length; n++) c$1 = crcTable[(c$1 ^ data[n]) & 255] ^ c$1 >>> 8;
	return c$1;
}
function crc(data, length) {
	return (updateCrc(initialCrc, data, length) ^ initialCrc) >>> 0;
}
function checkCrc(buffer, crcLength, chunkName) {
	const expectedCrc = buffer.readUint32();
	const actualCrc = crc(new Uint8Array(buffer.buffer, buffer.byteOffset + buffer.offset - crcLength - 4, crcLength), crcLength);
	if (actualCrc !== expectedCrc) throw new Error(`CRC mismatch for chunk ${chunkName}. Expected ${expectedCrc}, found ${actualCrc}`);
}

//#endregion
//#region node_modules/fast-png/lib-esm/helpers/unfilter.js
function unfilterNone(currentLine, newLine, bytesPerLine) {
	for (let i$2 = 0; i$2 < bytesPerLine; i$2++) newLine[i$2] = currentLine[i$2];
}
function unfilterSub(currentLine, newLine, bytesPerLine, bytesPerPixel) {
	let i$2 = 0;
	for (; i$2 < bytesPerPixel; i$2++) newLine[i$2] = currentLine[i$2];
	for (; i$2 < bytesPerLine; i$2++) newLine[i$2] = currentLine[i$2] + newLine[i$2 - bytesPerPixel] & 255;
}
function unfilterUp(currentLine, newLine, prevLine, bytesPerLine) {
	let i$2 = 0;
	if (prevLine.length === 0) for (; i$2 < bytesPerLine; i$2++) newLine[i$2] = currentLine[i$2];
	else for (; i$2 < bytesPerLine; i$2++) newLine[i$2] = currentLine[i$2] + prevLine[i$2] & 255;
}
function unfilterAverage(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel) {
	let i$2 = 0;
	if (prevLine.length === 0) {
		for (; i$2 < bytesPerPixel; i$2++) newLine[i$2] = currentLine[i$2];
		for (; i$2 < bytesPerLine; i$2++) newLine[i$2] = currentLine[i$2] + (newLine[i$2 - bytesPerPixel] >> 1) & 255;
	} else {
		for (; i$2 < bytesPerPixel; i$2++) newLine[i$2] = currentLine[i$2] + (prevLine[i$2] >> 1) & 255;
		for (; i$2 < bytesPerLine; i$2++) newLine[i$2] = currentLine[i$2] + (newLine[i$2 - bytesPerPixel] + prevLine[i$2] >> 1) & 255;
	}
}
function unfilterPaeth(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel) {
	let i$2 = 0;
	if (prevLine.length === 0) {
		for (; i$2 < bytesPerPixel; i$2++) newLine[i$2] = currentLine[i$2];
		for (; i$2 < bytesPerLine; i$2++) newLine[i$2] = currentLine[i$2] + newLine[i$2 - bytesPerPixel] & 255;
	} else {
		for (; i$2 < bytesPerPixel; i$2++) newLine[i$2] = currentLine[i$2] + prevLine[i$2] & 255;
		for (; i$2 < bytesPerLine; i$2++) newLine[i$2] = currentLine[i$2] + paethPredictor(newLine[i$2 - bytesPerPixel], prevLine[i$2], prevLine[i$2 - bytesPerPixel]) & 255;
	}
}
function paethPredictor(a$1, b$1, c$1) {
	const p$1 = a$1 + b$1 - c$1;
	const pa = Math.abs(p$1 - a$1);
	const pb = Math.abs(p$1 - b$1);
	const pc = Math.abs(p$1 - c$1);
	if (pa <= pb && pa <= pc) return a$1;
	else if (pb <= pc) return b$1;
	else return c$1;
}

//#endregion
//#region node_modules/fast-png/lib-esm/helpers/applyUnfilter.js
/**
* Apllies filter on scanline based on the filter type.
* @param filterType - The filter type to apply.
* @param currentLine - The current line of pixel data.
* @param newLine - The new line of pixel data.
* @param prevLine - The previous line of pixel data.
* @param passLineBytes - The number of bytes in the pass line.
* @param bytesPerPixel - The number of bytes per pixel.
*/
function applyUnfilter(filterType, currentLine, newLine, prevLine, passLineBytes, bytesPerPixel) {
	switch (filterType) {
		case 0:
			unfilterNone(currentLine, newLine, passLineBytes);
			break;
		case 1:
			unfilterSub(currentLine, newLine, passLineBytes, bytesPerPixel);
			break;
		case 2:
			unfilterUp(currentLine, newLine, prevLine, passLineBytes);
			break;
		case 3:
			unfilterAverage(currentLine, newLine, prevLine, passLineBytes, bytesPerPixel);
			break;
		case 4:
			unfilterPaeth(currentLine, newLine, prevLine, passLineBytes, bytesPerPixel);
			break;
		default: throw new Error(`Unsupported filter: ${filterType}`);
	}
}

//#endregion
//#region node_modules/fast-png/lib-esm/helpers/decodeInterlaceAdam7.js
var uint16$1 = new Uint16Array([255]);
var osIsLittleEndian$1 = new Uint8Array(uint16$1.buffer)[0] === 255;
/**
* Decodes the Adam7 interlaced PNG data.
*
* @param params - DecodeInterlaceNullParams
* @returns - array of pixel data.
*/
function decodeInterlaceAdam7(params) {
	const { data, width, height, channels, depth } = params;
	const passes = [
		{
			x: 0,
			y: 0,
			xStep: 8,
			yStep: 8
		},
		{
			x: 4,
			y: 0,
			xStep: 8,
			yStep: 8
		},
		{
			x: 0,
			y: 4,
			xStep: 4,
			yStep: 8
		},
		{
			x: 2,
			y: 0,
			xStep: 4,
			yStep: 4
		},
		{
			x: 0,
			y: 2,
			xStep: 2,
			yStep: 4
		},
		{
			x: 1,
			y: 0,
			xStep: 2,
			yStep: 2
		},
		{
			x: 0,
			y: 1,
			xStep: 1,
			yStep: 2
		}
	];
	const bytesPerPixel = Math.ceil(depth / 8) * channels;
	const resultData = new Uint8Array(height * width * bytesPerPixel);
	let offset = 0;
	for (let passIndex = 0; passIndex < 7; passIndex++) {
		const pass = passes[passIndex];
		const passWidth = Math.ceil((width - pass.x) / pass.xStep);
		const passHeight = Math.ceil((height - pass.y) / pass.yStep);
		if (passWidth <= 0 || passHeight <= 0) continue;
		const passLineBytes = passWidth * bytesPerPixel;
		const prevLine = new Uint8Array(passLineBytes);
		for (let y$1 = 0; y$1 < passHeight; y$1++) {
			const filterType = data[offset++];
			const currentLine = data.subarray(offset, offset + passLineBytes);
			offset += passLineBytes;
			const newLine = new Uint8Array(passLineBytes);
			applyUnfilter(filterType, currentLine, newLine, prevLine, passLineBytes, bytesPerPixel);
			prevLine.set(newLine);
			for (let x$2 = 0; x$2 < passWidth; x$2++) {
				const outputX = pass.x + x$2 * pass.xStep;
				const outputY = pass.y + y$1 * pass.yStep;
				if (outputX >= width || outputY >= height) continue;
				for (let i$2 = 0; i$2 < bytesPerPixel; i$2++) resultData[(outputY * width + outputX) * bytesPerPixel + i$2] = newLine[x$2 * bytesPerPixel + i$2];
			}
		}
	}
	if (depth === 16) {
		const uint16Data = new Uint16Array(resultData.buffer);
		if (osIsLittleEndian$1) for (let k$1 = 0; k$1 < uint16Data.length; k$1++) uint16Data[k$1] = swap16$1(uint16Data[k$1]);
		return uint16Data;
	} else return resultData;
}
function swap16$1(val) {
	return (val & 255) << 8 | val >> 8 & 255;
}

//#endregion
//#region node_modules/fast-png/lib-esm/helpers/decodeInterlaceNull.js
var uint16 = new Uint16Array([255]);
var osIsLittleEndian = new Uint8Array(uint16.buffer)[0] === 255;
var empty = new Uint8Array(0);
function decodeInterlaceNull(params) {
	const { data, width, height, channels, depth } = params;
	const bytesPerPixel = Math.ceil(depth / 8) * channels;
	const bytesPerLine = Math.ceil(depth / 8 * channels * width);
	const newData = new Uint8Array(height * bytesPerLine);
	let prevLine = empty;
	let offset = 0;
	let currentLine;
	let newLine;
	for (let i$2 = 0; i$2 < height; i$2++) {
		currentLine = data.subarray(offset + 1, offset + 1 + bytesPerLine);
		newLine = newData.subarray(i$2 * bytesPerLine, (i$2 + 1) * bytesPerLine);
		switch (data[offset]) {
			case 0:
				unfilterNone(currentLine, newLine, bytesPerLine);
				break;
			case 1:
				unfilterSub(currentLine, newLine, bytesPerLine, bytesPerPixel);
				break;
			case 2:
				unfilterUp(currentLine, newLine, prevLine, bytesPerLine);
				break;
			case 3:
				unfilterAverage(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel);
				break;
			case 4:
				unfilterPaeth(currentLine, newLine, prevLine, bytesPerLine, bytesPerPixel);
				break;
			default: throw new Error(`Unsupported filter: ${data[offset]}`);
		}
		prevLine = newLine;
		offset += bytesPerLine + 1;
	}
	if (depth === 16) {
		const uint16Data = new Uint16Array(newData.buffer);
		if (osIsLittleEndian) for (let k$1 = 0; k$1 < uint16Data.length; k$1++) uint16Data[k$1] = swap16(uint16Data[k$1]);
		return uint16Data;
	} else return newData;
}
function swap16(val) {
	return (val & 255) << 8 | val >> 8 & 255;
}

//#endregion
//#region node_modules/fast-png/lib-esm/helpers/signature.js
var pngSignature = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function checkSignature(buffer) {
	if (!hasPngSignature(buffer.readBytes(pngSignature.length))) throw new Error("wrong PNG signature");
}
function hasPngSignature(array) {
	if (array.length < pngSignature.length) return false;
	for (let i$2 = 0; i$2 < pngSignature.length; i$2++) if (array[i$2] !== pngSignature[i$2]) return false;
	return true;
}

//#endregion
//#region node_modules/fast-png/lib-esm/helpers/text.js
const textChunkName = "tEXt";
var NULL = 0;
var latin1Decoder = new TextDecoder("latin1");
function validateKeyword(keyword) {
	validateLatin1(keyword);
	if (keyword.length === 0 || keyword.length > 79) throw new Error("keyword length must be between 1 and 79");
}
var latin1Regex = /^[\u0000-\u00FF]*$/;
function validateLatin1(text) {
	if (!latin1Regex.test(text)) throw new Error("invalid latin1 text");
}
function decodetEXt(text, buffer, length) {
	const keyword = readKeyword(buffer);
	text[keyword] = readLatin1(buffer, length - keyword.length - 1);
}
function readKeyword(buffer) {
	buffer.mark();
	while (buffer.readByte() !== NULL);
	const end = buffer.offset;
	buffer.reset();
	const keyword = latin1Decoder.decode(buffer.readBytes(end - buffer.offset - 1));
	buffer.skip(1);
	validateKeyword(keyword);
	return keyword;
}
function readLatin1(buffer, length) {
	return latin1Decoder.decode(buffer.readBytes(length));
}

//#endregion
//#region node_modules/fast-png/lib-esm/internalTypes.js
const ColorType = {
	UNKNOWN: -1,
	GREYSCALE: 0,
	TRUECOLOUR: 2,
	INDEXED_COLOUR: 3,
	GREYSCALE_ALPHA: 4,
	TRUECOLOUR_ALPHA: 6
};
const CompressionMethod = {
	UNKNOWN: -1,
	DEFLATE: 0
};
const FilterMethod = {
	UNKNOWN: -1,
	ADAPTIVE: 0
};
const InterlaceMethod = {
	UNKNOWN: -1,
	NO_INTERLACE: 0,
	ADAM7: 1
};
const DisposeOpType = {
	NONE: 0,
	BACKGROUND: 1,
	PREVIOUS: 2
};
const BlendOpType = {
	SOURCE: 0,
	OVER: 1
};

//#endregion
//#region node_modules/fast-png/lib-esm/PngDecoder.js
var PngDecoder = class extends IOBuffer {
	_checkCrc;
	_inflator;
	_png;
	_apng;
	_end;
	_hasPalette;
	_palette;
	_hasTransparency;
	_transparency;
	_compressionMethod;
	_filterMethod;
	_interlaceMethod;
	_colorType;
	_isAnimated;
	_numberOfFrames;
	_numberOfPlays;
	_frames;
	_writingDataChunks;
	constructor(data, options = {}) {
		super(data);
		const { checkCrc: checkCrc$1 = false } = options;
		this._checkCrc = checkCrc$1;
		this._inflator = new Inflate_1();
		this._png = {
			width: -1,
			height: -1,
			channels: -1,
			data: new Uint8Array(0),
			depth: 1,
			text: {}
		};
		this._apng = {
			width: -1,
			height: -1,
			channels: -1,
			depth: 1,
			numberOfFrames: 1,
			numberOfPlays: 0,
			text: {},
			frames: []
		};
		this._end = false;
		this._hasPalette = false;
		this._palette = [];
		this._hasTransparency = false;
		this._transparency = new Uint16Array(0);
		this._compressionMethod = CompressionMethod.UNKNOWN;
		this._filterMethod = FilterMethod.UNKNOWN;
		this._interlaceMethod = InterlaceMethod.UNKNOWN;
		this._colorType = ColorType.UNKNOWN;
		this._isAnimated = false;
		this._numberOfFrames = 1;
		this._numberOfPlays = 0;
		this._frames = [];
		this._writingDataChunks = false;
		this.setBigEndian();
	}
	decode() {
		checkSignature(this);
		while (!this._end) {
			const length = this.readUint32();
			const type = this.readChars(4);
			this.decodeChunk(length, type);
		}
		this.decodeImage();
		return this._png;
	}
	decodeApng() {
		checkSignature(this);
		while (!this._end) {
			const length = this.readUint32();
			const type = this.readChars(4);
			this.decodeApngChunk(length, type);
		}
		this.decodeApngImage();
		return this._apng;
	}
	decodeChunk(length, type) {
		const offset = this.offset;
		switch (type) {
			case "IHDR":
				this.decodeIHDR();
				break;
			case "PLTE":
				this.decodePLTE(length);
				break;
			case "IDAT":
				this.decodeIDAT(length);
				break;
			case "IEND":
				this._end = true;
				break;
			case "tRNS":
				this.decodetRNS(length);
				break;
			case "iCCP":
				this.decodeiCCP(length);
				break;
			case textChunkName:
				decodetEXt(this._png.text, this, length);
				break;
			case "pHYs":
				this.decodepHYs();
				break;
			default:
				this.skip(length);
				break;
		}
		if (this.offset - offset !== length) throw new Error(`Length mismatch while decoding chunk ${type}`);
		if (this._checkCrc) checkCrc(this, length + 4, type);
		else this.skip(4);
	}
	decodeApngChunk(length, type) {
		const offset = this.offset;
		if (type !== "fdAT" && type !== "IDAT" && this._writingDataChunks) this.pushDataToFrame();
		switch (type) {
			case "acTL":
				this.decodeACTL();
				break;
			case "fcTL":
				this.decodeFCTL();
				break;
			case "fdAT":
				this.decodeFDAT(length);
				break;
			default:
				this.decodeChunk(length, type);
				this.offset = offset + length;
				break;
		}
		if (this.offset - offset !== length) throw new Error(`Length mismatch while decoding chunk ${type}`);
		if (this._checkCrc) checkCrc(this, length + 4, type);
		else this.skip(4);
	}
	decodeIHDR() {
		const image = this._png;
		image.width = this.readUint32();
		image.height = this.readUint32();
		image.depth = checkBitDepth(this.readUint8());
		const colorType = this.readUint8();
		this._colorType = colorType;
		let channels;
		switch (colorType) {
			case ColorType.GREYSCALE:
				channels = 1;
				break;
			case ColorType.TRUECOLOUR:
				channels = 3;
				break;
			case ColorType.INDEXED_COLOUR:
				channels = 1;
				break;
			case ColorType.GREYSCALE_ALPHA:
				channels = 2;
				break;
			case ColorType.TRUECOLOUR_ALPHA:
				channels = 4;
				break;
			case ColorType.UNKNOWN:
			default: throw new Error(`Unknown color type: ${colorType}`);
		}
		this._png.channels = channels;
		this._compressionMethod = this.readUint8();
		if (this._compressionMethod !== CompressionMethod.DEFLATE) throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
		this._filterMethod = this.readUint8();
		this._interlaceMethod = this.readUint8();
	}
	decodeACTL() {
		this._numberOfFrames = this.readUint32();
		this._numberOfPlays = this.readUint32();
		this._isAnimated = true;
	}
	decodeFCTL() {
		const image = {
			sequenceNumber: this.readUint32(),
			width: this.readUint32(),
			height: this.readUint32(),
			xOffset: this.readUint32(),
			yOffset: this.readUint32(),
			delayNumber: this.readUint16(),
			delayDenominator: this.readUint16(),
			disposeOp: this.readUint8(),
			blendOp: this.readUint8(),
			data: new Uint8Array(0)
		};
		this._frames.push(image);
	}
	decodePLTE(length) {
		if (length % 3 !== 0) throw new RangeError(`PLTE field length must be a multiple of 3. Got ${length}`);
		const l$1 = length / 3;
		this._hasPalette = true;
		const palette = [];
		this._palette = palette;
		for (let i$2 = 0; i$2 < l$1; i$2++) palette.push([
			this.readUint8(),
			this.readUint8(),
			this.readUint8()
		]);
	}
	decodeIDAT(length) {
		this._writingDataChunks = true;
		const dataLength = length;
		const dataOffset = this.offset + this.byteOffset;
		this._inflator.push(new Uint8Array(this.buffer, dataOffset, dataLength));
		if (this._inflator.err) throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
		this.skip(length);
	}
	decodeFDAT(length) {
		this._writingDataChunks = true;
		let dataLength = length;
		let dataOffset = this.offset + this.byteOffset;
		dataOffset += 4;
		dataLength -= 4;
		this._inflator.push(new Uint8Array(this.buffer, dataOffset, dataLength));
		if (this._inflator.err) throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
		this.skip(length);
	}
	decodetRNS(length) {
		switch (this._colorType) {
			case ColorType.GREYSCALE:
			case ColorType.TRUECOLOUR:
				if (length % 2 !== 0) throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${length}`);
				if (length / 2 > this._png.width * this._png.height) throw new Error(`tRNS chunk contains more alpha values than there are pixels (${length / 2} vs ${this._png.width * this._png.height})`);
				this._hasTransparency = true;
				this._transparency = new Uint16Array(length / 2);
				for (let i$2 = 0; i$2 < length / 2; i$2++) this._transparency[i$2] = this.readUint16();
				break;
			case ColorType.INDEXED_COLOUR: {
				if (length > this._palette.length) throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${length} vs ${this._palette.length})`);
				let i$2 = 0;
				for (; i$2 < length; i$2++) {
					const alpha = this.readByte();
					this._palette[i$2].push(alpha);
				}
				for (; i$2 < this._palette.length; i$2++) this._palette[i$2].push(255);
				break;
			}
			case ColorType.UNKNOWN:
			case ColorType.GREYSCALE_ALPHA:
			case ColorType.TRUECOLOUR_ALPHA:
			default: throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
		}
	}
	decodeiCCP(length) {
		const name = readKeyword(this);
		const compressionMethod = this.readUint8();
		if (compressionMethod !== CompressionMethod.DEFLATE) throw new Error(`Unsupported iCCP compression method: ${compressionMethod}`);
		const compressedProfile = this.readBytes(length - name.length - 2);
		this._png.iccEmbeddedProfile = {
			name,
			profile: inflate_1(compressedProfile)
		};
	}
	decodepHYs() {
		const ppuX = this.readUint32();
		const ppuY = this.readUint32();
		const unitSpecifier = this.readByte();
		this._png.resolution = {
			x: ppuX,
			y: ppuY,
			unit: unitSpecifier
		};
	}
	decodeApngImage() {
		this._apng.width = this._png.width;
		this._apng.height = this._png.height;
		this._apng.channels = this._png.channels;
		this._apng.depth = this._png.depth;
		this._apng.numberOfFrames = this._numberOfFrames;
		this._apng.numberOfPlays = this._numberOfPlays;
		this._apng.text = this._png.text;
		this._apng.resolution = this._png.resolution;
		for (let i$2 = 0; i$2 < this._numberOfFrames; i$2++) {
			const newFrame = {
				sequenceNumber: this._frames[i$2].sequenceNumber,
				delayNumber: this._frames[i$2].delayNumber,
				delayDenominator: this._frames[i$2].delayDenominator,
				data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
			};
			const frame = this._frames.at(i$2);
			if (frame) {
				frame.data = decodeInterlaceNull({
					data: frame.data,
					width: frame.width,
					height: frame.height,
					channels: this._apng.channels,
					depth: this._apng.depth
				});
				if (this._hasPalette) this._apng.palette = this._palette;
				if (this._hasTransparency) this._apng.transparency = this._transparency;
				if (i$2 === 0 || frame.xOffset === 0 && frame.yOffset === 0 && frame.width === this._png.width && frame.height === this._png.height) newFrame.data = frame.data;
				else {
					const prevFrame = this._apng.frames.at(i$2 - 1);
					this.disposeFrame(frame, prevFrame, newFrame);
					this.addFrameDataToCanvas(newFrame, frame);
				}
				this._apng.frames.push(newFrame);
			}
		}
		return this._apng;
	}
	disposeFrame(frame, prevFrame, imageFrame) {
		switch (frame.disposeOp) {
			case DisposeOpType.NONE: break;
			case DisposeOpType.BACKGROUND:
				for (let row = 0; row < this._png.height; row++) for (let col = 0; col < this._png.width; col++) {
					const index = (row * frame.width + col) * this._png.channels;
					for (let channel = 0; channel < this._png.channels; channel++) imageFrame.data[index + channel] = 0;
				}
				break;
			case DisposeOpType.PREVIOUS:
				imageFrame.data.set(prevFrame.data);
				break;
			default: throw new Error("Unknown disposeOp");
		}
	}
	addFrameDataToCanvas(imageFrame, frame) {
		const maxValue = 1 << this._png.depth;
		const calculatePixelIndices = (row, col) => {
			const index = ((row + frame.yOffset) * this._png.width + frame.xOffset + col) * this._png.channels;
			const frameIndex = (row * frame.width + col) * this._png.channels;
			return {
				index,
				frameIndex
			};
		};
		switch (frame.blendOp) {
			case BlendOpType.SOURCE:
				for (let row = 0; row < frame.height; row++) for (let col = 0; col < frame.width; col++) {
					const { index, frameIndex } = calculatePixelIndices(row, col);
					for (let channel = 0; channel < this._png.channels; channel++) imageFrame.data[index + channel] = frame.data[frameIndex + channel];
				}
				break;
			case BlendOpType.OVER:
				for (let row = 0; row < frame.height; row++) for (let col = 0; col < frame.width; col++) {
					const { index, frameIndex } = calculatePixelIndices(row, col);
					for (let channel = 0; channel < this._png.channels; channel++) {
						const sourceAlpha = frame.data[frameIndex + this._png.channels - 1] / maxValue;
						const foregroundValue = channel % (this._png.channels - 1) === 0 ? 1 : frame.data[frameIndex + channel];
						const value = Math.floor(sourceAlpha * foregroundValue + (1 - sourceAlpha) * imageFrame.data[index + channel]);
						imageFrame.data[index + channel] += value;
					}
				}
				break;
			default: throw new Error("Unknown blendOp");
		}
	}
	decodeImage() {
		if (this._inflator.err) throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
		const data = this._isAnimated ? (this._frames?.at(0)).data : this._inflator.result;
		if (this._filterMethod !== FilterMethod.ADAPTIVE) throw new Error(`Filter method ${this._filterMethod} not supported`);
		if (this._interlaceMethod === InterlaceMethod.NO_INTERLACE) this._png.data = decodeInterlaceNull({
			data,
			width: this._png.width,
			height: this._png.height,
			channels: this._png.channels,
			depth: this._png.depth
		});
		else if (this._interlaceMethod === InterlaceMethod.ADAM7) this._png.data = decodeInterlaceAdam7({
			data,
			width: this._png.width,
			height: this._png.height,
			channels: this._png.channels,
			depth: this._png.depth
		});
		else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
		if (this._hasPalette) this._png.palette = this._palette;
		if (this._hasTransparency) this._png.transparency = this._transparency;
	}
	pushDataToFrame() {
		const result = this._inflator.result;
		const lastFrame = this._frames.at(-1);
		if (lastFrame) lastFrame.data = result;
		else this._frames.push({
			sequenceNumber: 0,
			width: this._png.width,
			height: this._png.height,
			xOffset: 0,
			yOffset: 0,
			delayNumber: 0,
			delayDenominator: 0,
			disposeOp: DisposeOpType.NONE,
			blendOp: BlendOpType.SOURCE,
			data: result
		});
		this._inflator = new Inflate_1();
		this._writingDataChunks = false;
	}
};
function checkBitDepth(value) {
	if (value !== 1 && value !== 2 && value !== 4 && value !== 8 && value !== 16) throw new Error(`invalid bit depth: ${value}`);
	return value;
}

//#endregion
//#region node_modules/fast-png/lib-esm/types.js
var ResolutionUnitSpecifier;
(function(ResolutionUnitSpecifier$1) {
	/**
	* Unit is unknown
	*/
	ResolutionUnitSpecifier$1[ResolutionUnitSpecifier$1["UNKNOWN"] = 0] = "UNKNOWN";
	/**
	* Unit is the metre
	*/
	ResolutionUnitSpecifier$1[ResolutionUnitSpecifier$1["METRE"] = 1] = "METRE";
})(ResolutionUnitSpecifier || (ResolutionUnitSpecifier = {}));

//#endregion
//#region node_modules/fast-png/lib-esm/index.js
function decodePng(data, options) {
	return new PngDecoder(data, options).decode();
}

//#endregion
//#region node_modules/jspdf/dist/jspdf.es.min.js
var i = function() {
	return "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this;
}();
function a() {
	i.console && "function" == typeof i.console.log && i.console.log.apply(i.console, arguments);
}
var o = {
	log: a,
	warn: function(t) {
		i.console && ("function" == typeof i.console.warn ? i.console.warn.apply(i.console, arguments) : a.call(null, arguments));
	},
	error: function(t) {
		i.console && ("function" == typeof i.console.error ? i.console.error.apply(i.console, arguments) : a(t));
	}
};
function s(t, e, n) {
	var r = new XMLHttpRequest();
	r.open("GET", t), r.responseType = "blob", r.onload = function() {
		l(r.response, e, n);
	}, r.onerror = function() {
		o.error("could not download file");
	}, r.send();
}
function u(t) {
	var e = new XMLHttpRequest();
	e.open("HEAD", t, !1);
	try {
		e.send();
	} catch (n) {}
	return e.status >= 200 && e.status <= 299;
}
function c(t) {
	try {
		t.dispatchEvent(new MouseEvent("click"));
	} catch (n) {
		var e = document.createEvent("MouseEvents");
		e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e);
	}
}
var l = i.saveAs || ("object" !== ("undefined" == typeof window ? "undefined" : _typeof(window)) || window !== i ? function() {} : "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype ? function(t, e, n) {
	var r = i.URL || i.webkitURL, a$1 = document.createElement("a");
	e = e || t.name || "download", a$1.download = e, a$1.rel = "noopener", "string" == typeof t ? (a$1.href = t, a$1.origin !== location.origin ? u(a$1.href) ? s(t, e, n) : c(a$1, a$1.target = "_blank") : c(a$1)) : (a$1.href = r.createObjectURL(t), setTimeout(function() {
		r.revokeObjectURL(a$1.href);
	}, 4e4), setTimeout(function() {
		c(a$1);
	}, 0));
} : "msSaveOrOpenBlob" in navigator ? function(e, n, r) {
	if (n = n || e.name || "download", "string" == typeof e) if (u(e)) s(e, n, r);
	else {
		var i$2 = document.createElement("a");
		i$2.href = e, i$2.target = "_blank", setTimeout(function() {
			c(i$2);
		});
	}
	else navigator.msSaveOrOpenBlob(function(e$1, n$1) {
		return void 0 === n$1 ? n$1 = { autoBom: !1 } : "object" !== _typeof(n$1) && (o.warn("Deprecated: Expected third argument to be a object"), n$1 = { autoBom: !n$1 }), n$1.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e$1.type) ? new Blob([String.fromCharCode(65279), e$1], { type: e$1.type }) : e$1;
	}(e, r), n);
} : function(e, n, r, a$1) {
	if ((a$1 = a$1 || open("", "_blank")) && (a$1.document.title = a$1.document.body.innerText = "downloading..."), "string" == typeof e) return s(e, n, r);
	var o$1 = "application/octet-stream" === e.type, u$1 = /constructor/i.test(i.HTMLElement) || i.safari, c$1 = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((c$1 || o$1 && u$1) && "object" === ("undefined" == typeof FileReader ? "undefined" : _typeof(FileReader))) {
		var l$1 = new FileReader();
		l$1.onloadend = function() {
			var t = l$1.result;
			t = c$1 ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;"), a$1 ? a$1.location.href = t : location = t, a$1 = null;
		}, l$1.readAsDataURL(e);
	} else {
		var h$1 = i.URL || i.webkitURL, f$1 = h$1.createObjectURL(e);
		a$1 ? a$1.location = f$1 : location.href = f$1, a$1 = null, setTimeout(function() {
			h$1.revokeObjectURL(f$1);
		}, 4e4);
	}
});
/**
* A class to parse color values
* @author Stoyan Stefanov <sstoo@gmail.com>
* {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
* @license Use it if you like it
*/ function h(t) {
	var e;
	t = t || "", this.ok = !1, "#" == t.charAt(0) && (t = t.substr(1, 6)), t = {
		aliceblue: "f0f8ff",
		antiquewhite: "faebd7",
		aqua: "00ffff",
		aquamarine: "7fffd4",
		azure: "f0ffff",
		beige: "f5f5dc",
		bisque: "ffe4c4",
		black: "000000",
		blanchedalmond: "ffebcd",
		blue: "0000ff",
		blueviolet: "8a2be2",
		brown: "a52a2a",
		burlywood: "deb887",
		cadetblue: "5f9ea0",
		chartreuse: "7fff00",
		chocolate: "d2691e",
		coral: "ff7f50",
		cornflowerblue: "6495ed",
		cornsilk: "fff8dc",
		crimson: "dc143c",
		cyan: "00ffff",
		darkblue: "00008b",
		darkcyan: "008b8b",
		darkgoldenrod: "b8860b",
		darkgray: "a9a9a9",
		darkgreen: "006400",
		darkkhaki: "bdb76b",
		darkmagenta: "8b008b",
		darkolivegreen: "556b2f",
		darkorange: "ff8c00",
		darkorchid: "9932cc",
		darkred: "8b0000",
		darksalmon: "e9967a",
		darkseagreen: "8fbc8f",
		darkslateblue: "483d8b",
		darkslategray: "2f4f4f",
		darkturquoise: "00ced1",
		darkviolet: "9400d3",
		deeppink: "ff1493",
		deepskyblue: "00bfff",
		dimgray: "696969",
		dodgerblue: "1e90ff",
		feldspar: "d19275",
		firebrick: "b22222",
		floralwhite: "fffaf0",
		forestgreen: "228b22",
		fuchsia: "ff00ff",
		gainsboro: "dcdcdc",
		ghostwhite: "f8f8ff",
		gold: "ffd700",
		goldenrod: "daa520",
		gray: "808080",
		green: "008000",
		greenyellow: "adff2f",
		honeydew: "f0fff0",
		hotpink: "ff69b4",
		indianred: "cd5c5c",
		indigo: "4b0082",
		ivory: "fffff0",
		khaki: "f0e68c",
		lavender: "e6e6fa",
		lavenderblush: "fff0f5",
		lawngreen: "7cfc00",
		lemonchiffon: "fffacd",
		lightblue: "add8e6",
		lightcoral: "f08080",
		lightcyan: "e0ffff",
		lightgoldenrodyellow: "fafad2",
		lightgrey: "d3d3d3",
		lightgreen: "90ee90",
		lightpink: "ffb6c1",
		lightsalmon: "ffa07a",
		lightseagreen: "20b2aa",
		lightskyblue: "87cefa",
		lightslateblue: "8470ff",
		lightslategray: "778899",
		lightsteelblue: "b0c4de",
		lightyellow: "ffffe0",
		lime: "00ff00",
		limegreen: "32cd32",
		linen: "faf0e6",
		magenta: "ff00ff",
		maroon: "800000",
		mediumaquamarine: "66cdaa",
		mediumblue: "0000cd",
		mediumorchid: "ba55d3",
		mediumpurple: "9370d8",
		mediumseagreen: "3cb371",
		mediumslateblue: "7b68ee",
		mediumspringgreen: "00fa9a",
		mediumturquoise: "48d1cc",
		mediumvioletred: "c71585",
		midnightblue: "191970",
		mintcream: "f5fffa",
		mistyrose: "ffe4e1",
		moccasin: "ffe4b5",
		navajowhite: "ffdead",
		navy: "000080",
		oldlace: "fdf5e6",
		olive: "808000",
		olivedrab: "6b8e23",
		orange: "ffa500",
		orangered: "ff4500",
		orchid: "da70d6",
		palegoldenrod: "eee8aa",
		palegreen: "98fb98",
		paleturquoise: "afeeee",
		palevioletred: "d87093",
		papayawhip: "ffefd5",
		peachpuff: "ffdab9",
		peru: "cd853f",
		pink: "ffc0cb",
		plum: "dda0dd",
		powderblue: "b0e0e6",
		purple: "800080",
		red: "ff0000",
		rosybrown: "bc8f8f",
		royalblue: "4169e1",
		saddlebrown: "8b4513",
		salmon: "fa8072",
		sandybrown: "f4a460",
		seagreen: "2e8b57",
		seashell: "fff5ee",
		sienna: "a0522d",
		silver: "c0c0c0",
		skyblue: "87ceeb",
		slateblue: "6a5acd",
		slategray: "708090",
		snow: "fffafa",
		springgreen: "00ff7f",
		steelblue: "4682b4",
		tan: "d2b48c",
		teal: "008080",
		thistle: "d8bfd8",
		tomato: "ff6347",
		turquoise: "40e0d0",
		violet: "ee82ee",
		violetred: "d02090",
		wheat: "f5deb3",
		white: "ffffff",
		whitesmoke: "f5f5f5",
		yellow: "ffff00",
		yellowgreen: "9acd32"
	}[t = (t = t.replace(/ /g, "")).toLowerCase()] || t;
	for (var n = [
		{
			re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
			example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
			process: function(t$1) {
				return [
					parseInt(t$1[1]),
					parseInt(t$1[2]),
					parseInt(t$1[3])
				];
			}
		},
		{
			re: /^(\w{2})(\w{2})(\w{2})$/,
			example: ["#00ff00", "336699"],
			process: function(t$1) {
				return [
					parseInt(t$1[1], 16),
					parseInt(t$1[2], 16),
					parseInt(t$1[3], 16)
				];
			}
		},
		{
			re: /^(\w{1})(\w{1})(\w{1})$/,
			example: ["#fb0", "f0f"],
			process: function(t$1) {
				return [
					parseInt(t$1[1] + t$1[1], 16),
					parseInt(t$1[2] + t$1[2], 16),
					parseInt(t$1[3] + t$1[3], 16)
				];
			}
		}
	], r = 0; r < n.length; r++) {
		var i$2 = n[r].re, a$1 = n[r].process, o$1 = i$2.exec(t);
		o$1 && (e = a$1(o$1), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0);
	}
	this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
		return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
	}, this.toHex = function() {
		var t$1 = this.r.toString(16), e$1 = this.g.toString(16), n$1 = this.b.toString(16);
		return 1 == t$1.length && (t$1 = "0" + t$1), 1 == e$1.length && (e$1 = "0" + e$1), 1 == n$1.length && (n$1 = "0" + n$1), "#" + t$1 + e$1 + n$1;
	};
}
var f = i.atob.bind(i), d = i.btoa.bind(i);
/**
* @license
* Joseph Myers does not specify a particular license for his work.
*
* Author: Joseph Myers
* Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
*
* Modified by: Owen Leong
*/
function p(t, e) {
	var n = t[0], r = t[1], i$2 = t[2], a$1 = t[3];
	n = m(n, r, i$2, a$1, e[0], 7, -680876936), a$1 = m(a$1, n, r, i$2, e[1], 12, -389564586), i$2 = m(i$2, a$1, n, r, e[2], 17, 606105819), r = m(r, i$2, a$1, n, e[3], 22, -1044525330), n = m(n, r, i$2, a$1, e[4], 7, -176418897), a$1 = m(a$1, n, r, i$2, e[5], 12, 1200080426), i$2 = m(i$2, a$1, n, r, e[6], 17, -1473231341), r = m(r, i$2, a$1, n, e[7], 22, -45705983), n = m(n, r, i$2, a$1, e[8], 7, 1770035416), a$1 = m(a$1, n, r, i$2, e[9], 12, -1958414417), i$2 = m(i$2, a$1, n, r, e[10], 17, -42063), r = m(r, i$2, a$1, n, e[11], 22, -1990404162), n = m(n, r, i$2, a$1, e[12], 7, 1804603682), a$1 = m(a$1, n, r, i$2, e[13], 12, -40341101), i$2 = m(i$2, a$1, n, r, e[14], 17, -1502002290), n = v(n, r = m(r, i$2, a$1, n, e[15], 22, 1236535329), i$2, a$1, e[1], 5, -165796510), a$1 = v(a$1, n, r, i$2, e[6], 9, -1069501632), i$2 = v(i$2, a$1, n, r, e[11], 14, 643717713), r = v(r, i$2, a$1, n, e[0], 20, -373897302), n = v(n, r, i$2, a$1, e[5], 5, -701558691), a$1 = v(a$1, n, r, i$2, e[10], 9, 38016083), i$2 = v(i$2, a$1, n, r, e[15], 14, -660478335), r = v(r, i$2, a$1, n, e[4], 20, -405537848), n = v(n, r, i$2, a$1, e[9], 5, 568446438), a$1 = v(a$1, n, r, i$2, e[14], 9, -1019803690), i$2 = v(i$2, a$1, n, r, e[3], 14, -187363961), r = v(r, i$2, a$1, n, e[8], 20, 1163531501), n = v(n, r, i$2, a$1, e[13], 5, -1444681467), a$1 = v(a$1, n, r, i$2, e[2], 9, -51403784), i$2 = v(i$2, a$1, n, r, e[7], 14, 1735328473), n = b(n, r = v(r, i$2, a$1, n, e[12], 20, -1926607734), i$2, a$1, e[5], 4, -378558), a$1 = b(a$1, n, r, i$2, e[8], 11, -2022574463), i$2 = b(i$2, a$1, n, r, e[11], 16, 1839030562), r = b(r, i$2, a$1, n, e[14], 23, -35309556), n = b(n, r, i$2, a$1, e[1], 4, -1530992060), a$1 = b(a$1, n, r, i$2, e[4], 11, 1272893353), i$2 = b(i$2, a$1, n, r, e[7], 16, -155497632), r = b(r, i$2, a$1, n, e[10], 23, -1094730640), n = b(n, r, i$2, a$1, e[13], 4, 681279174), a$1 = b(a$1, n, r, i$2, e[0], 11, -358537222), i$2 = b(i$2, a$1, n, r, e[3], 16, -722521979), r = b(r, i$2, a$1, n, e[6], 23, 76029189), n = b(n, r, i$2, a$1, e[9], 4, -640364487), a$1 = b(a$1, n, r, i$2, e[12], 11, -421815835), i$2 = b(i$2, a$1, n, r, e[15], 16, 530742520), n = y(n, r = b(r, i$2, a$1, n, e[2], 23, -995338651), i$2, a$1, e[0], 6, -198630844), a$1 = y(a$1, n, r, i$2, e[7], 10, 1126891415), i$2 = y(i$2, a$1, n, r, e[14], 15, -1416354905), r = y(r, i$2, a$1, n, e[5], 21, -57434055), n = y(n, r, i$2, a$1, e[12], 6, 1700485571), a$1 = y(a$1, n, r, i$2, e[3], 10, -1894986606), i$2 = y(i$2, a$1, n, r, e[10], 15, -1051523), r = y(r, i$2, a$1, n, e[1], 21, -2054922799), n = y(n, r, i$2, a$1, e[8], 6, 1873313359), a$1 = y(a$1, n, r, i$2, e[15], 10, -30611744), i$2 = y(i$2, a$1, n, r, e[6], 15, -1560198380), r = y(r, i$2, a$1, n, e[13], 21, 1309151649), n = y(n, r, i$2, a$1, e[4], 6, -145523070), a$1 = y(a$1, n, r, i$2, e[11], 10, -1120210379), i$2 = y(i$2, a$1, n, r, e[2], 15, 718787259), r = y(r, i$2, a$1, n, e[9], 21, -343485551), t[0] = P(n, t[0]), t[1] = P(r, t[1]), t[2] = P(i$2, t[2]), t[3] = P(a$1, t[3]);
}
function g(t, e, n, r, i$2, a$1) {
	return e = P(P(e, t), P(r, a$1)), P(e << i$2 | e >>> 32 - i$2, n);
}
function m(t, e, n, r, i$2, a$1, o$1) {
	return g(e & n | ~e & r, t, e, i$2, a$1, o$1);
}
function v(t, e, n, r, i$2, a$1, o$1) {
	return g(e & r | n & ~r, t, e, i$2, a$1, o$1);
}
function b(t, e, n, r, i$2, a$1, o$1) {
	return g(e ^ n ^ r, t, e, i$2, a$1, o$1);
}
function y(t, e, n, r, i$2, a$1, o$1) {
	return g(n ^ (e | ~r), t, e, i$2, a$1, o$1);
}
function w(t) {
	var e, n = t.length, r = [
		1732584193,
		-271733879,
		-1732584194,
		271733878
	];
	for (e = 64; e <= t.length; e += 64) p(r, N(t.substring(e - 64, e)));
	t = t.substring(e - 64);
	var i$2 = [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	];
	for (e = 0; e < t.length; e++) i$2[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
	if (i$2[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (p(r, i$2), e = 0; e < 16; e++) i$2[e] = 0;
	return i$2[14] = 8 * n, p(r, i$2), r;
}
function N(t) {
	var e, n = [];
	for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
	return n;
}
var L = "0123456789abcdef".split("");
function x(t) {
	for (var e = "", n = 0; n < 4; n++) e += L[t >> 8 * n + 4 & 15] + L[t >> 8 * n & 15];
	return e;
}
function A(t) {
	return String.fromCharCode(255 & t, (65280 & t) >> 8, (16711680 & t) >> 16, (4278190080 & t) >> 24);
}
function S(t) {
	return w(t).map(A).join("");
}
var _ = "5d41402abc4b2a76b9719d911017c592" != function(t) {
	for (var e = 0; e < t.length; e++) t[e] = x(t[e]);
	return t.join("");
}(w("hello"));
function P(t, e) {
	if (_) {
		var n = (65535 & t) + (65535 & e);
		return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n;
	}
	return t + e & 4294967295;
}
/**
* @license
* FPDF is released under a permissive license: there is no usage restriction.
* You may embed it freely in your application (commercial or not), with or
* without modifications.
*
* Reference: http://www.fpdf.org/en/script/script37.php
*/ function k(t, e) {
	var n, r, i$2, a$1;
	if (t !== n) {
		for (var o$1 = (i$2 = t, a$1 = 1 + (256 / t.length | 0), new Array(a$1 + 1).join(i$2)), s$1 = [], u$1 = 0; u$1 < 256; u$1++) s$1[u$1] = u$1;
		var c$1 = 0;
		for (u$1 = 0; u$1 < 256; u$1++) {
			var l$1 = s$1[u$1];
			c$1 = (c$1 + l$1 + o$1.charCodeAt(u$1)) % 256, s$1[u$1] = s$1[c$1], s$1[c$1] = l$1;
		}
		n = t, r = s$1;
	} else s$1 = r;
	var h$1 = e.length, f$1 = 0, d$1 = 0, p$1 = "";
	for (u$1 = 0; u$1 < h$1; u$1++) d$1 = (d$1 + (l$1 = s$1[f$1 = (f$1 + 1) % 256])) % 256, s$1[f$1] = s$1[d$1], s$1[d$1] = l$1, o$1 = s$1[(s$1[f$1] + s$1[d$1]) % 256], p$1 += String.fromCharCode(e.charCodeAt(u$1) ^ o$1);
	return p$1;
}
/**
* @license
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
* Author: Owen Leong (@owenl131)
* Date: 15 Oct 2020
* References:
* https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
* https://github.com/foliojs/pdfkit/blob/master/lib/security.js
* http://www.fpdf.org/en/script/script37.php
*/ var F = {
	print: 4,
	modify: 8,
	copy: 16,
	"annot-forms": 32
};
function I(t, e, n, r) {
	this.v = 1, this.r = 2;
	var i$2 = 192;
	t.forEach(function(t$1) {
		if (void 0 !== F.perm) throw new Error("Invalid permission: " + t$1);
		i$2 += F[t$1];
	}), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
	var a$1 = (e + this.padding).substr(0, 32), o$1 = (n + this.padding).substr(0, 32);
	this.O = this.processOwnerPassword(a$1, o$1), this.P = -(1 + (255 ^ i$2)), this.encryptionKey = S(a$1 + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5), this.U = k(this.encryptionKey, this.padding);
}
function j(t) {
	if (/[^\u0000-\u00ff]/.test(t)) throw new Error("Invalid PDF Name Object: " + t + ", Only accept ASCII characters.");
	for (var e = "", n = t.length, r = 0; r < n; r++) {
		var i$2 = t.charCodeAt(r);
		e += i$2 < 33 || 35 === i$2 || 37 === i$2 || 40 === i$2 || 41 === i$2 || 47 === i$2 || 60 === i$2 || 62 === i$2 || 91 === i$2 || 93 === i$2 || 123 === i$2 || 125 === i$2 || i$2 > 126 ? "#" + ("0" + i$2.toString(16)).slice(-2) : t[r];
	}
	return e;
}
function C(e) {
	if ("object" !== _typeof(e)) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
	var n = {};
	this.subscribe = function(t, e$1, r) {
		if (r = r || !1, "string" != typeof t || "function" != typeof e$1 || "boolean" != typeof r) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
		n.hasOwnProperty(t) || (n[t] = {});
		var i$2 = Math.random().toString(35);
		return n[t][i$2] = [e$1, !!r], i$2;
	}, this.unsubscribe = function(t) {
		for (var e$1 in n) if (n[e$1][t]) return delete n[e$1][t], 0 === Object.keys(n[e$1]).length && delete n[e$1], !0;
		return !1;
	}, this.publish = function(t) {
		if (n.hasOwnProperty(t)) {
			var r = Array.prototype.slice.call(arguments, 1), a$1 = [];
			for (var s$1 in n[t]) {
				var u$1 = n[t][s$1];
				try {
					u$1[0].apply(e, r);
				} catch (c$1) {
					i.console && o.error("jsPDF PubSub Error", c$1.message, c$1);
				}
				u$1[1] && a$1.push(s$1);
			}
			a$1.length && a$1.forEach(this.unsubscribe);
		}
	}, this.getTopics = function() {
		return n;
	};
}
function O(t) {
	if (!(this instanceof O)) return new O(t);
	var e = "opacity,stroke-opacity".split(",");
	for (var n in t) t.hasOwnProperty(n) && e.indexOf(n) >= 0 && (this[n] = t[n]);
	this.id = "", this.objectNumber = -1;
}
function B(t, e) {
	this.gState = t, this.matrix = e, this.id = "", this.objectNumber = -1;
}
function M(t, e, n, r, i$2) {
	if (!(this instanceof M)) return new M(t, e, n, r, i$2);
	this.type = "axial" === t ? 2 : 3, this.coords = e, this.colors = n, B.call(this, r, i$2);
}
function q(t, e, n, r, i$2) {
	if (!(this instanceof q)) return new q(t, e, n, r, i$2);
	this.boundingBox = t, this.xStep = e, this.yStep = n, this.stream = "", this.cloneIndex = 0, B.call(this, r, i$2);
}
function E(e) {
	var n, r = "string" == typeof arguments[0] ? arguments[0] : "p", a$1 = arguments[1], s$1 = arguments[2], u$1 = arguments[3], c$1 = [], f$1 = 1, p$1 = 16, g$1 = "S", m$1 = null;
	"object" === _typeof(e = e || {}) && (r = e.orientation, a$1 = e.unit || a$1, s$1 = e.format || s$1, u$1 = e.compress || e.compressPdf || u$1, null !== (m$1 = e.encryption || null) && (m$1.userPassword = m$1.userPassword || "", m$1.ownerPassword = m$1.ownerPassword || "", m$1.userPermissions = m$1.userPermissions || []), f$1 = "number" == typeof e.userUnit ? Math.abs(e.userUnit) : 1, void 0 !== e.precision && (n = e.precision), void 0 !== e.floatPrecision && (p$1 = e.floatPrecision), g$1 = e.defaultPathOperation || "S"), c$1 = e.filters || (!0 === u$1 ? ["FlateEncode"] : c$1), a$1 = a$1 || "mm", r = ("" + (r || "P")).toLowerCase();
	var v$1 = e.putOnlyUsedFonts || !1, b$1 = {}, y$1 = {
		internal: {},
		__private__: {}
	};
	y$1.__private__.PubSub = C;
	var w$1 = "1.3", N$1 = y$1.__private__.getPdfVersion = function() {
		return w$1;
	};
	y$1.__private__.setPdfVersion = function(t) {
		w$1 = t;
	};
	var L$1 = {
		a0: [2383.94, 3370.39],
		a1: [1683.78, 2383.94],
		a2: [1190.55, 1683.78],
		a3: [841.89, 1190.55],
		a4: [595.28, 841.89],
		a5: [419.53, 595.28],
		a6: [297.64, 419.53],
		a7: [209.76, 297.64],
		a8: [147.4, 209.76],
		a9: [104.88, 147.4],
		a10: [73.7, 104.88],
		b0: [2834.65, 4008.19],
		b1: [2004.09, 2834.65],
		b2: [1417.32, 2004.09],
		b3: [1000.63, 1417.32],
		b4: [708.66, 1000.63],
		b5: [498.9, 708.66],
		b6: [354.33, 498.9],
		b7: [249.45, 354.33],
		b8: [175.75, 249.45],
		b9: [124.72, 175.75],
		b10: [87.87, 124.72],
		c0: [2599.37, 3676.54],
		c1: [1836.85, 2599.37],
		c2: [1298.27, 1836.85],
		c3: [918.43, 1298.27],
		c4: [649.13, 918.43],
		c5: [459.21, 649.13],
		c6: [323.15, 459.21],
		c7: [229.61, 323.15],
		c8: [161.57, 229.61],
		c9: [113.39, 161.57],
		c10: [79.37, 113.39],
		dl: [311.81, 623.62],
		letter: [612, 792],
		"government-letter": [576, 756],
		legal: [612, 1008],
		"junior-legal": [576, 360],
		ledger: [1224, 792],
		tabloid: [792, 1224],
		"credit-card": [153, 243]
	};
	y$1.__private__.getPageFormats = function() {
		return L$1;
	};
	var x$2 = y$1.__private__.getPageFormat = function(t) {
		return L$1[t];
	};
	s$1 = s$1 || "a4";
	var A$1 = "compat", S$1 = "advanced", _$1 = A$1;
	function P$1() {
		this.saveGraphicsState(), lt$1(new Wt$1(St$1, 0, 0, -St$1, 0, _n() * St$1).toString() + " cm"), this.setFontSize(this.getFontSize() / St$1), g$1 = "n", _$1 = S$1;
	}
	function k$1() {
		this.restoreGraphicsState(), g$1 = "S", _$1 = A$1;
	}
	var F$1 = y$1.__private__.combineFontStyleAndFontWeight = function(t, e$1) {
		if ("bold" == t && "normal" == e$1 || "bold" == t && 400 == e$1 || "normal" == t && "italic" == e$1 || "bold" == t && "italic" == e$1) throw new Error("Invalid Combination of fontweight and fontstyle");
		return e$1 && (t = 400 == e$1 || "normal" === e$1 ? "italic" === t ? "italic" : "normal" : 700 != e$1 && "bold" !== e$1 || "normal" !== t ? (700 == e$1 ? "bold" : e$1) + "" + t : "bold"), t;
	};
	y$1.advancedAPI = function(t) {
		var e$1 = _$1 === A$1;
		return e$1 && P$1.call(this), "function" != typeof t || (t(this), e$1 && k$1.call(this)), this;
	}, y$1.compatAPI = function(t) {
		var e$1 = _$1 === S$1;
		return e$1 && k$1.call(this), "function" != typeof t || (t(this), e$1 && P$1.call(this)), this;
	}, y$1.isAdvancedAPI = function() {
		return _$1 === S$1;
	};
	var B$1, R$1 = function(t) {
		if (_$1 !== S$1) throw new Error(t + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
	}, D$1 = y$1.roundToPrecision = y$1.__private__.roundToPrecision = function(t, e$1) {
		var r$1 = n || e$1;
		if (isNaN(t) || isNaN(r$1)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
		return t.toFixed(r$1).replace(/0+$/, "");
	};
	B$1 = y$1.hpf = y$1.__private__.hpf = "number" == typeof p$1 ? function(t) {
		if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
		return D$1(t, p$1);
	} : "smart" === p$1 ? function(t) {
		if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
		return D$1(t, t > -1 && t < 1 ? 16 : 5);
	} : function(t) {
		if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
		return D$1(t, 16);
	};
	var T$1 = y$1.f2 = y$1.__private__.f2 = function(t) {
		if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2");
		return D$1(t, 2);
	}, z$1 = y$1.__private__.f3 = function(t) {
		if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f3");
		return D$1(t, 3);
	}, U$1 = y$1.scale = y$1.__private__.scale = function(t) {
		if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.scale");
		return _$1 === A$1 ? t * St$1 : _$1 === S$1 ? t : void 0;
	}, H$1 = function(t) {
		return U$1(function(t$1) {
			return _$1 === A$1 ? _n() - t$1 : _$1 === S$1 ? t$1 : void 0;
		}(t));
	};
	y$1.__private__.setPrecision = y$1.setPrecision = function(t) {
		"number" == typeof parseInt(t, 10) && (n = parseInt(t, 10));
	};
	var W$1, V$1 = "00000000000000000000000000000000", G$1 = y$1.__private__.getFileId = function() {
		return V$1;
	}, Y$1 = y$1.__private__.setFileId = function(t) {
		return V$1 = void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t) ? t.toUpperCase() : V$1.split("").map(function() {
			return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
		}).join(""), null !== m$1 && (je$1 = new I(m$1.userPermissions, m$1.userPassword, m$1.ownerPassword, V$1)), V$1;
	};
	y$1.setFileId = function(t) {
		return Y$1(t), this;
	}, y$1.getFileId = function() {
		return G$1();
	};
	var J$1 = y$1.__private__.convertDateToPDFDate = function(t) {
		var e$1 = t.getTimezoneOffset(), n$1 = e$1 < 0 ? "+" : "-", r$1 = Math.floor(Math.abs(e$1 / 60)), i$2 = Math.abs(e$1 % 60), a$2 = [
			n$1,
			Q$1(r$1),
			"'",
			Q$1(i$2),
			"'"
		].join("");
		return [
			"D:",
			t.getFullYear(),
			Q$1(t.getMonth() + 1),
			Q$1(t.getDate()),
			Q$1(t.getHours()),
			Q$1(t.getMinutes()),
			Q$1(t.getSeconds()),
			a$2
		].join("");
	}, X$1 = y$1.__private__.convertPDFDateToDate = function(t) {
		var e$1 = parseInt(t.substr(2, 4), 10), n$1 = parseInt(t.substr(6, 2), 10) - 1, r$1 = parseInt(t.substr(8, 2), 10), i$2 = parseInt(t.substr(10, 2), 10), a$2 = parseInt(t.substr(12, 2), 10), o$1 = parseInt(t.substr(14, 2), 10);
		return new Date(e$1, n$1, r$1, i$2, a$2, o$1, 0);
	}, K$1 = y$1.__private__.setCreationDate = function(t) {
		var e$1;
		if (void 0 === t && (t = /* @__PURE__ */ new Date()), t instanceof Date) e$1 = J$1(t);
		else {
			if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
			e$1 = t;
		}
		return W$1 = e$1;
	}, Z$1 = y$1.__private__.getCreationDate = function(t) {
		var e$1 = W$1;
		return "jsDate" === t && (e$1 = X$1(W$1)), e$1;
	};
	y$1.setCreationDate = function(t) {
		return K$1(t), this;
	}, y$1.getCreationDate = function(t) {
		return Z$1(t);
	};
	var $$1, Q$1 = y$1.__private__.padd2 = function(t) {
		return ("0" + parseInt(t)).slice(-2);
	}, tt$1 = y$1.__private__.padd2Hex = function(t) {
		return ("00" + (t = t.toString())).substr(t.length);
	}, et$2 = 0, nt$1 = [], rt$1 = [], it$1 = 0, at$1 = [], ot$1 = [], st$1 = !1, ut$1 = rt$1;
	y$1.__private__.setCustomOutputDestination = function(t) {
		st$1 = !0, ut$1 = t;
	};
	var ct$1 = function(t) {
		st$1 || (ut$1 = t);
	};
	y$1.__private__.resetCustomOutputDestination = function() {
		st$1 = !1, ut$1 = rt$1;
	};
	var lt$1 = y$1.__private__.out = function(t) {
		return t = t.toString(), it$1 += t.length + 1, ut$1.push(t), ut$1;
	}, ht$1 = y$1.__private__.write = function(t) {
		return lt$1(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " "));
	}, ft$1 = y$1.__private__.getArrayBuffer = function(t) {
		for (var e$1 = t.length, n$1 = new ArrayBuffer(e$1), r$1 = new Uint8Array(n$1); e$1--;) r$1[e$1] = t.charCodeAt(e$1);
		return n$1;
	}, dt$1 = [
		[
			"Helvetica",
			"helvetica",
			"normal",
			"WinAnsiEncoding"
		],
		[
			"Helvetica-Bold",
			"helvetica",
			"bold",
			"WinAnsiEncoding"
		],
		[
			"Helvetica-Oblique",
			"helvetica",
			"italic",
			"WinAnsiEncoding"
		],
		[
			"Helvetica-BoldOblique",
			"helvetica",
			"bolditalic",
			"WinAnsiEncoding"
		],
		[
			"Courier",
			"courier",
			"normal",
			"WinAnsiEncoding"
		],
		[
			"Courier-Bold",
			"courier",
			"bold",
			"WinAnsiEncoding"
		],
		[
			"Courier-Oblique",
			"courier",
			"italic",
			"WinAnsiEncoding"
		],
		[
			"Courier-BoldOblique",
			"courier",
			"bolditalic",
			"WinAnsiEncoding"
		],
		[
			"Times-Roman",
			"times",
			"normal",
			"WinAnsiEncoding"
		],
		[
			"Times-Bold",
			"times",
			"bold",
			"WinAnsiEncoding"
		],
		[
			"Times-Italic",
			"times",
			"italic",
			"WinAnsiEncoding"
		],
		[
			"Times-BoldItalic",
			"times",
			"bolditalic",
			"WinAnsiEncoding"
		],
		[
			"ZapfDingbats",
			"zapfdingbats",
			"normal",
			null
		],
		[
			"Symbol",
			"symbol",
			"normal",
			null
		]
	];
	y$1.__private__.getStandardFonts = function() {
		return dt$1;
	};
	var pt$1 = e.fontSize || 16;
	y$1.__private__.setFontSize = y$1.setFontSize = function(t) {
		return pt$1 = _$1 === S$1 ? t / St$1 : t, this;
	};
	var gt$1, mt$1 = y$1.__private__.getFontSize = y$1.getFontSize = function() {
		return _$1 === A$1 ? pt$1 : pt$1 * St$1;
	}, vt$1 = e.R2L || !1;
	y$1.__private__.setR2L = y$1.setR2L = function(t) {
		return vt$1 = t, this;
	}, y$1.__private__.getR2L = y$1.getR2L = function() {
		return vt$1;
	};
	var bt$1, yt$1 = y$1.__private__.setZoomMode = function(t) {
		if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(t)) gt$1 = t;
		else if (isNaN(t)) {
			if (-1 === [
				void 0,
				null,
				"fullwidth",
				"fullheight",
				"fullpage",
				"original"
			].indexOf(t)) throw new Error("zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. \"" + t + "\" is not recognized.");
			gt$1 = t;
		} else gt$1 = parseInt(t, 10);
	};
	y$1.__private__.getZoomMode = function() {
		return gt$1;
	};
	var wt$1, Nt$1 = y$1.__private__.setPageMode = function(t) {
		if (-1 == [
			void 0,
			null,
			"UseNone",
			"UseOutlines",
			"UseThumbs",
			"FullScreen"
		].indexOf(t)) throw new Error("Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. \"" + t + "\" is not recognized.");
		bt$1 = t;
	};
	y$1.__private__.getPageMode = function() {
		return bt$1;
	};
	var Lt$1 = y$1.__private__.setLayoutMode = function(t) {
		if (-1 == [
			void 0,
			null,
			"continuous",
			"single",
			"twoleft",
			"tworight",
			"two"
		].indexOf(t)) throw new Error("Layout mode must be one of continuous, single, twoleft, tworight. \"" + t + "\" is not recognized.");
		wt$1 = t;
	};
	y$1.__private__.getLayoutMode = function() {
		return wt$1;
	}, y$1.__private__.setDisplayMode = y$1.setDisplayMode = function(t, e$1, n$1) {
		return yt$1(t), Lt$1(e$1), Nt$1(n$1), this;
	};
	var xt$1 = {
		title: "",
		subject: "",
		author: "",
		keywords: "",
		creator: ""
	};
	y$1.__private__.getDocumentProperty = function(t) {
		if (-1 === Object.keys(xt$1).indexOf(t)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
		return xt$1[t];
	}, y$1.__private__.getDocumentProperties = function() {
		return xt$1;
	}, y$1.__private__.setDocumentProperties = y$1.setProperties = y$1.setDocumentProperties = function(t) {
		for (var e$1 in xt$1) xt$1.hasOwnProperty(e$1) && t[e$1] && (xt$1[e$1] = t[e$1]);
		return this;
	}, y$1.__private__.setDocumentProperty = function(t, e$1) {
		if (-1 === Object.keys(xt$1).indexOf(t)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
		return xt$1[t] = e$1;
	};
	var At$1, St$1, _t$1, Pt$1, kt$1, Ft$1 = {}, It$1 = {}, jt$1 = [], Ct$1 = {}, Ot$1 = {}, Bt$1 = {}, Mt$1 = {}, qt$1 = null, Et$1 = 0, Rt$1 = [], Dt$1 = new C(y$1), Tt$1 = e.hotfixes || [], zt$1 = {}, Ut$1 = {}, Ht$1 = [], Wt$1 = function t(e$1, n$1, r$1, i$2, a$2, o$1) {
		if (!(this instanceof t)) return new t(e$1, n$1, r$1, i$2, a$2, o$1);
		isNaN(e$1) && (e$1 = 1), isNaN(n$1) && (n$1 = 0), isNaN(r$1) && (r$1 = 0), isNaN(i$2) && (i$2 = 1), isNaN(a$2) && (a$2 = 0), isNaN(o$1) && (o$1 = 0), this._matrix = [
			e$1,
			n$1,
			r$1,
			i$2,
			a$2,
			o$1
		];
	};
	Object.defineProperty(Wt$1.prototype, "sx", {
		get: function() {
			return this._matrix[0];
		},
		set: function(t) {
			this._matrix[0] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "shy", {
		get: function() {
			return this._matrix[1];
		},
		set: function(t) {
			this._matrix[1] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "shx", {
		get: function() {
			return this._matrix[2];
		},
		set: function(t) {
			this._matrix[2] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "sy", {
		get: function() {
			return this._matrix[3];
		},
		set: function(t) {
			this._matrix[3] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "tx", {
		get: function() {
			return this._matrix[4];
		},
		set: function(t) {
			this._matrix[4] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "ty", {
		get: function() {
			return this._matrix[5];
		},
		set: function(t) {
			this._matrix[5] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "a", {
		get: function() {
			return this._matrix[0];
		},
		set: function(t) {
			this._matrix[0] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "b", {
		get: function() {
			return this._matrix[1];
		},
		set: function(t) {
			this._matrix[1] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "c", {
		get: function() {
			return this._matrix[2];
		},
		set: function(t) {
			this._matrix[2] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "d", {
		get: function() {
			return this._matrix[3];
		},
		set: function(t) {
			this._matrix[3] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "e", {
		get: function() {
			return this._matrix[4];
		},
		set: function(t) {
			this._matrix[4] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "f", {
		get: function() {
			return this._matrix[5];
		},
		set: function(t) {
			this._matrix[5] = t;
		}
	}), Object.defineProperty(Wt$1.prototype, "rotation", { get: function() {
		return Math.atan2(this.shx, this.sx);
	} }), Object.defineProperty(Wt$1.prototype, "scaleX", { get: function() {
		return this.decompose().scale.sx;
	} }), Object.defineProperty(Wt$1.prototype, "scaleY", { get: function() {
		return this.decompose().scale.sy;
	} }), Object.defineProperty(Wt$1.prototype, "isIdentity", { get: function() {
		return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty;
	} }), Wt$1.prototype.join = function(t) {
		return [
			this.sx,
			this.shy,
			this.shx,
			this.sy,
			this.tx,
			this.ty
		].map(B$1).join(t);
	}, Wt$1.prototype.multiply = function(t) {
		var e$1 = t.sx * this.sx + t.shy * this.shx, n$1 = t.sx * this.shy + t.shy * this.sy, r$1 = t.shx * this.sx + t.sy * this.shx, i$2 = t.shx * this.shy + t.sy * this.sy, a$2 = t.tx * this.sx + t.ty * this.shx + this.tx, o$1 = t.tx * this.shy + t.ty * this.sy + this.ty;
		return new Wt$1(e$1, n$1, r$1, i$2, a$2, o$1);
	}, Wt$1.prototype.decompose = function() {
		var t = this.sx, e$1 = this.shy, n$1 = this.shx, r$1 = this.sy, i$2 = this.tx, a$2 = this.ty, o$1 = Math.sqrt(t * t + e$1 * e$1), s$2 = (t /= o$1) * n$1 + (e$1 /= o$1) * r$1;
		n$1 -= t * s$2, r$1 -= e$1 * s$2;
		var u$2 = Math.sqrt(n$1 * n$1 + r$1 * r$1);
		return s$2 /= u$2, t * (r$1 /= u$2) < e$1 * (n$1 /= u$2) && (t = -t, e$1 = -e$1, s$2 = -s$2, o$1 = -o$1), {
			scale: new Wt$1(o$1, 0, 0, u$2, 0, 0),
			translate: new Wt$1(1, 0, 0, 1, i$2, a$2),
			rotate: new Wt$1(t, e$1, -e$1, t, 0, 0),
			skew: new Wt$1(1, 0, s$2, 1, 0, 0)
		};
	}, Wt$1.prototype.toString = function(t) {
		return this.join(" ");
	}, Wt$1.prototype.inversed = function() {
		var t = this.sx, e$1 = this.shy, n$1 = this.shx, r$1 = this.sy, i$2 = this.tx, a$2 = this.ty, o$1 = 1 / (t * r$1 - e$1 * n$1), s$2 = r$1 * o$1, u$2 = -e$1 * o$1, c$2 = -n$1 * o$1, l$1 = t * o$1;
		return new Wt$1(s$2, u$2, c$2, l$1, -s$2 * i$2 - c$2 * a$2, -u$2 * i$2 - l$1 * a$2);
	}, Wt$1.prototype.applyToPoint = function(t) {
		var e$1 = t.x * this.sx + t.y * this.shx + this.tx, n$1 = t.x * this.shy + t.y * this.sy + this.ty;
		return new gn(e$1, n$1);
	}, Wt$1.prototype.applyToRectangle = function(t) {
		var e$1 = this.applyToPoint(t), n$1 = this.applyToPoint(new gn(t.x + t.w, t.y + t.h));
		return new mn(e$1.x, e$1.y, n$1.x - e$1.x, n$1.y - e$1.y);
	}, Wt$1.prototype.clone = function() {
		var t = this.sx, e$1 = this.shy, n$1 = this.shx, r$1 = this.sy, i$2 = this.tx, a$2 = this.ty;
		return new Wt$1(t, e$1, n$1, r$1, i$2, a$2);
	}, y$1.Matrix = Wt$1;
	var Vt$1 = y$1.matrixMult = function(t, e$1) {
		return e$1.multiply(t);
	}, Gt$1 = new Wt$1(1, 0, 0, 1, 0, 0);
	y$1.unitMatrix = y$1.identityMatrix = Gt$1;
	var Yt$1 = function(t, e$1) {
		if (!Ot$1[t]) {
			var n$1 = (e$1 instanceof M ? "Sh" : "P") + (Object.keys(Ct$1).length + 1).toString(10);
			e$1.id = n$1, Ot$1[t] = n$1, Ct$1[n$1] = e$1, Dt$1.publish("addPattern", e$1);
		}
	};
	y$1.ShadingPattern = M, y$1.TilingPattern = q, y$1.addShadingPattern = function(t, e$1) {
		return R$1("addShadingPattern()"), Yt$1(t, e$1), this;
	}, y$1.beginTilingPattern = function(t) {
		R$1("beginTilingPattern()"), bn(t.boundingBox[0], t.boundingBox[1], t.boundingBox[2] - t.boundingBox[0], t.boundingBox[3] - t.boundingBox[1], t.matrix);
	}, y$1.endTilingPattern = function(t, e$1) {
		R$1("endTilingPattern()"), e$1.stream = ot$1[$$1].join("\n"), Yt$1(t, e$1), Dt$1.publish("endTilingPattern", e$1), Ht$1.pop().restore();
	};
	var Jt$1, Xt$1 = y$1.__private__.newObject = function() {
		var t = Kt$1();
		return Zt$1(t, !0), t;
	}, Kt$1 = y$1.__private__.newObjectDeferred = function() {
		return et$2++, nt$1[et$2] = function() {
			return it$1;
		}, et$2;
	}, Zt$1 = function(t, e$1) {
		return e$1 = "boolean" == typeof e$1 && e$1, nt$1[t] = it$1, e$1 && lt$1(t + " 0 obj"), t;
	}, $t$1 = y$1.__private__.newAdditionalObject = function() {
		var t = {
			objId: Kt$1(),
			content: ""
		};
		return at$1.push(t), t;
	}, Qt$1 = Kt$1(), te$1 = Kt$1(), ee$1 = y$1.__private__.decodeColorString = function(t) {
		var e$1 = t.split(" ");
		if (2 !== e$1.length || "g" !== e$1[1] && "G" !== e$1[1]) 5 !== e$1.length || "k" !== e$1[4] && "K" !== e$1[4] || (e$1 = [
			(1 - e$1[0]) * (1 - e$1[3]),
			(1 - e$1[1]) * (1 - e$1[3]),
			(1 - e$1[2]) * (1 - e$1[3]),
			"r"
		]);
		else {
			var n$1 = parseFloat(e$1[0]);
			e$1 = [
				n$1,
				n$1,
				n$1,
				"r"
			];
		}
		for (var r$1 = "#", i$2 = 0; i$2 < 3; i$2++) r$1 += ("0" + Math.floor(255 * parseFloat(e$1[i$2])).toString(16)).slice(-2);
		return r$1;
	}, ne$1 = y$1.__private__.encodeColorString = function(e$1) {
		var n$1;
		"string" == typeof e$1 && (e$1 = { ch1: e$1 });
		var r$1 = e$1.ch1, i$2 = e$1.ch2, a$2 = e$1.ch3, o$1 = e$1.ch4, s$2 = "draw" === e$1.pdfColorType ? [
			"G",
			"RG",
			"K"
		] : [
			"g",
			"rg",
			"k"
		];
		if ("string" == typeof r$1 && "#" !== r$1.charAt(0)) {
			var u$2 = new h(r$1);
			if (u$2.ok) r$1 = u$2.toHex();
			else if (!/^\d*\.?\d*$/.test(r$1)) throw new Error("Invalid color \"" + r$1 + "\" passed to jsPDF.encodeColorString.");
		}
		if ("string" == typeof r$1 && /^#[0-9A-Fa-f]{3}$/.test(r$1) && (r$1 = "#" + r$1[1] + r$1[1] + r$1[2] + r$1[2] + r$1[3] + r$1[3]), "string" == typeof r$1 && /^#[0-9A-Fa-f]{6}$/.test(r$1)) {
			var c$2 = parseInt(r$1.substr(1), 16);
			r$1 = c$2 >> 16 & 255, i$2 = c$2 >> 8 & 255, a$2 = 255 & c$2;
		}
		if (void 0 === i$2 || void 0 === o$1 && r$1 === i$2 && i$2 === a$2) n$1 = "string" == typeof r$1 ? r$1 + " " + s$2[0] : 2 === e$1.precision ? T$1(r$1 / 255) + " " + s$2[0] : z$1(r$1 / 255) + " " + s$2[0];
		else if (void 0 === o$1 || "object" === _typeof(o$1)) {
			if (o$1 && !isNaN(o$1.a) && 0 === o$1.a) return [
				"1.",
				"1.",
				"1.",
				s$2[1]
			].join(" ");
			n$1 = "string" == typeof r$1 ? [
				r$1,
				i$2,
				a$2,
				s$2[1]
			].join(" ") : 2 === e$1.precision ? [
				T$1(r$1 / 255),
				T$1(i$2 / 255),
				T$1(a$2 / 255),
				s$2[1]
			].join(" ") : [
				z$1(r$1 / 255),
				z$1(i$2 / 255),
				z$1(a$2 / 255),
				s$2[1]
			].join(" ");
		} else n$1 = "string" == typeof r$1 ? [
			r$1,
			i$2,
			a$2,
			o$1,
			s$2[2]
		].join(" ") : 2 === e$1.precision ? [
			T$1(r$1),
			T$1(i$2),
			T$1(a$2),
			T$1(o$1),
			s$2[2]
		].join(" ") : [
			z$1(r$1),
			z$1(i$2),
			z$1(a$2),
			z$1(o$1),
			s$2[2]
		].join(" ");
		return n$1;
	}, re$1 = y$1.__private__.getFilters = function() {
		return c$1;
	}, ie$1 = y$1.__private__.putStream = function(t) {
		var e$1 = (t = t || {}).data || "", n$1 = t.filters || re$1(), r$1 = t.alreadyAppliedFilters || [], i$2 = t.addLength1 || !1, a$2 = e$1.length, o$1 = t.objectId, s$2 = function(t$1) {
			return t$1;
		};
		if (null !== m$1 && void 0 === o$1) throw new Error("ObjectId must be passed to putStream for file encryption");
		null !== m$1 && (s$2 = je$1.encryptor(o$1, 0));
		var u$2 = {};
		!0 === n$1 && (n$1 = ["FlateEncode"]);
		var c$2 = t.additionalKeyValues || [], l$1 = (u$2 = void 0 !== E.API.processDataByFilters ? E.API.processDataByFilters(e$1, n$1) : {
			data: e$1,
			reverseChain: []
		}).reverseChain + (Array.isArray(r$1) ? r$1.join(" ") : r$1.toString());
		if (0 !== u$2.data.length && (c$2.push({
			key: "Length",
			value: u$2.data.length
		}), !0 === i$2 && c$2.push({
			key: "Length1",
			value: a$2
		})), 0 != l$1.length) if (l$1.split("/").length - 1 == 1) c$2.push({
			key: "Filter",
			value: l$1
		});
		else {
			c$2.push({
				key: "Filter",
				value: "[" + l$1 + "]"
			});
			for (var h$1 = 0; h$1 < c$2.length; h$1 += 1) if ("DecodeParms" === c$2[h$1].key) {
				for (var f$2 = [], d$1 = 0; d$1 < u$2.reverseChain.split("/").length - 1; d$1 += 1) f$2.push("null");
				f$2.push(c$2[h$1].value), c$2[h$1].value = "[" + f$2.join(" ") + "]";
			}
		}
		lt$1("<<");
		for (var p$2 = 0; p$2 < c$2.length; p$2++) lt$1("/" + c$2[p$2].key + " " + c$2[p$2].value);
		lt$1(">>"), 0 !== u$2.data.length && (lt$1("stream"), lt$1(s$2(u$2.data)), lt$1("endstream"));
	}, ae$1 = y$1.__private__.putPage = function(t) {
		var e$1 = t.number, n$1 = t.data, r$1 = t.objId, i$2 = t.contentsObjId;
		Zt$1(r$1, !0), lt$1("<</Type /Page"), lt$1("/Parent " + t.rootDictionaryObjId + " 0 R"), lt$1("/Resources " + t.resourceDictionaryObjId + " 0 R"), lt$1("/MediaBox [" + parseFloat(B$1(t.mediaBox.bottomLeftX)) + " " + parseFloat(B$1(t.mediaBox.bottomLeftY)) + " " + B$1(t.mediaBox.topRightX) + " " + B$1(t.mediaBox.topRightY) + "]"), null !== t.cropBox && lt$1("/CropBox [" + B$1(t.cropBox.bottomLeftX) + " " + B$1(t.cropBox.bottomLeftY) + " " + B$1(t.cropBox.topRightX) + " " + B$1(t.cropBox.topRightY) + "]"), null !== t.bleedBox && lt$1("/BleedBox [" + B$1(t.bleedBox.bottomLeftX) + " " + B$1(t.bleedBox.bottomLeftY) + " " + B$1(t.bleedBox.topRightX) + " " + B$1(t.bleedBox.topRightY) + "]"), null !== t.trimBox && lt$1("/TrimBox [" + B$1(t.trimBox.bottomLeftX) + " " + B$1(t.trimBox.bottomLeftY) + " " + B$1(t.trimBox.topRightX) + " " + B$1(t.trimBox.topRightY) + "]"), null !== t.artBox && lt$1("/ArtBox [" + B$1(t.artBox.bottomLeftX) + " " + B$1(t.artBox.bottomLeftY) + " " + B$1(t.artBox.topRightX) + " " + B$1(t.artBox.topRightY) + "]"), "number" == typeof t.userUnit && 1 !== t.userUnit && lt$1("/UserUnit " + t.userUnit), Dt$1.publish("putPage", {
			objId: r$1,
			pageContext: Rt$1[e$1],
			pageNumber: e$1,
			page: n$1
		}), lt$1("/Contents " + i$2 + " 0 R"), lt$1(">>"), lt$1("endobj");
		var a$2 = n$1.join("\n");
		return _$1 === S$1 && (a$2 += "\nQ"), Zt$1(i$2, !0), ie$1({
			data: a$2,
			filters: re$1(),
			objectId: i$2
		}), lt$1("endobj"), r$1;
	}, oe$1 = y$1.__private__.putPages = function() {
		var t, e$1, n$1 = [];
		for (t = 1; t <= Et$1; t++) Rt$1[t].objId = Kt$1(), Rt$1[t].contentsObjId = Kt$1();
		for (t = 1; t <= Et$1; t++) n$1.push(ae$1({
			number: t,
			data: ot$1[t],
			objId: Rt$1[t].objId,
			contentsObjId: Rt$1[t].contentsObjId,
			mediaBox: Rt$1[t].mediaBox,
			cropBox: Rt$1[t].cropBox,
			bleedBox: Rt$1[t].bleedBox,
			trimBox: Rt$1[t].trimBox,
			artBox: Rt$1[t].artBox,
			userUnit: Rt$1[t].userUnit,
			rootDictionaryObjId: Qt$1,
			resourceDictionaryObjId: te$1
		}));
		Zt$1(Qt$1, !0), lt$1("<</Type /Pages");
		var r$1 = "/Kids [";
		for (e$1 = 0; e$1 < Et$1; e$1++) r$1 += n$1[e$1] + " 0 R ";
		lt$1(r$1 + "]"), lt$1("/Count " + Et$1), lt$1(">>"), lt$1("endobj"), Dt$1.publish("postPutPages");
	}, se$1 = function(t) {
		Dt$1.publish("putFont", {
			font: t,
			out: lt$1,
			newObject: Xt$1,
			putStream: ie$1
		}), !0 !== t.isAlreadyPutted && (t.objectNumber = Xt$1(), lt$1("<<"), lt$1("/Type /Font"), lt$1("/BaseFont /" + j(t.postScriptName)), lt$1("/Subtype /Type1"), "string" == typeof t.encoding && lt$1("/Encoding /" + t.encoding), lt$1("/FirstChar 32"), lt$1("/LastChar 255"), lt$1(">>"), lt$1("endobj"));
	}, ue$1 = function(t) {
		t.objectNumber = Xt$1();
		var e$1 = [];
		e$1.push({
			key: "Type",
			value: "/XObject"
		}), e$1.push({
			key: "Subtype",
			value: "/Form"
		}), e$1.push({
			key: "BBox",
			value: "[" + [
				B$1(t.x),
				B$1(t.y),
				B$1(t.x + t.width),
				B$1(t.y + t.height)
			].join(" ") + "]"
		}), e$1.push({
			key: "Matrix",
			value: "[" + t.matrix.toString() + "]"
		});
		var n$1 = t.pages[1].join("\n");
		ie$1({
			data: n$1,
			additionalKeyValues: e$1,
			objectId: t.objectNumber
		}), lt$1("endobj");
	}, ce$1 = function(t, e$1) {
		e$1 || (e$1 = 21);
		var n$1 = Xt$1(), r$1 = function(t$1, e$2) {
			var n$2, r$2 = [], i$3 = 1 / (e$2 - 1);
			for (n$2 = 0; n$2 < 1; n$2 += i$3) r$2.push(n$2);
			if (r$2.push(1), 0 != t$1[0].offset) {
				var a$3 = {
					offset: 0,
					color: t$1[0].color
				};
				t$1.unshift(a$3);
			}
			if (1 != t$1[t$1.length - 1].offset) {
				var o$1 = {
					offset: 1,
					color: t$1[t$1.length - 1].color
				};
				t$1.push(o$1);
			}
			for (var s$2 = "", u$2 = 0, c$2 = 0; c$2 < r$2.length; c$2++) {
				for (n$2 = r$2[c$2]; n$2 > t$1[u$2 + 1].offset;) u$2++;
				var l$1 = t$1[u$2].offset, h$1 = (n$2 - l$1) / (t$1[u$2 + 1].offset - l$1), f$2 = t$1[u$2].color, d$1 = t$1[u$2 + 1].color;
				s$2 += tt$1(Math.round((1 - h$1) * f$2[0] + h$1 * d$1[0]).toString(16)) + tt$1(Math.round((1 - h$1) * f$2[1] + h$1 * d$1[1]).toString(16)) + tt$1(Math.round((1 - h$1) * f$2[2] + h$1 * d$1[2]).toString(16));
			}
			return s$2.trim();
		}(t.colors, e$1), i$2 = [];
		i$2.push({
			key: "FunctionType",
			value: "0"
		}), i$2.push({
			key: "Domain",
			value: "[0.0 1.0]"
		}), i$2.push({
			key: "Size",
			value: "[" + e$1 + "]"
		}), i$2.push({
			key: "BitsPerSample",
			value: "8"
		}), i$2.push({
			key: "Range",
			value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
		}), i$2.push({
			key: "Decode",
			value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
		}), ie$1({
			data: r$1,
			additionalKeyValues: i$2,
			alreadyAppliedFilters: ["/ASCIIHexDecode"],
			objectId: n$1
		}), lt$1("endobj"), t.objectNumber = Xt$1(), lt$1("<< /ShadingType " + t.type), lt$1("/ColorSpace /DeviceRGB");
		var a$2 = "/Coords [" + B$1(parseFloat(t.coords[0])) + " " + B$1(parseFloat(t.coords[1])) + " ";
		2 === t.type ? a$2 += B$1(parseFloat(t.coords[2])) + " " + B$1(parseFloat(t.coords[3])) : a$2 += B$1(parseFloat(t.coords[2])) + " " + B$1(parseFloat(t.coords[3])) + " " + B$1(parseFloat(t.coords[4])) + " " + B$1(parseFloat(t.coords[5])), lt$1(a$2 += "]"), t.matrix && lt$1("/Matrix [" + t.matrix.toString() + "]"), lt$1("/Function " + n$1 + " 0 R"), lt$1("/Extend [true true]"), lt$1(">>"), lt$1("endobj");
	}, le$1 = function(t, e$1) {
		var n$1 = Kt$1(), r$1 = Xt$1();
		e$1.push({
			resourcesOid: n$1,
			objectOid: r$1
		}), t.objectNumber = r$1;
		var i$2 = [];
		i$2.push({
			key: "Type",
			value: "/Pattern"
		}), i$2.push({
			key: "PatternType",
			value: "1"
		}), i$2.push({
			key: "PaintType",
			value: "1"
		}), i$2.push({
			key: "TilingType",
			value: "1"
		}), i$2.push({
			key: "BBox",
			value: "[" + t.boundingBox.map(B$1).join(" ") + "]"
		}), i$2.push({
			key: "XStep",
			value: B$1(t.xStep)
		}), i$2.push({
			key: "YStep",
			value: B$1(t.yStep)
		}), i$2.push({
			key: "Resources",
			value: n$1 + " 0 R"
		}), t.matrix && i$2.push({
			key: "Matrix",
			value: "[" + t.matrix.toString() + "]"
		}), ie$1({
			data: t.stream,
			additionalKeyValues: i$2,
			objectId: t.objectNumber
		}), lt$1("endobj");
	}, he$1 = function(t) {
		for (var e$1 in t.objectNumber = Xt$1(), lt$1("<<"), t) switch (e$1) {
			case "opacity":
				lt$1("/ca " + T$1(t[e$1]));
				break;
			case "stroke-opacity": lt$1("/CA " + T$1(t[e$1]));
		}
		lt$1(">>"), lt$1("endobj");
	}, fe$1 = function(t) {
		Zt$1(t.resourcesOid, !0), lt$1("<<"), lt$1("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), function() {
			for (var t$1 in lt$1("/Font <<"), Ft$1) Ft$1.hasOwnProperty(t$1) && (!1 === v$1 || !0 === v$1 && b$1.hasOwnProperty(t$1)) && lt$1("/" + t$1 + " " + Ft$1[t$1].objectNumber + " 0 R");
			lt$1(">>");
		}(), function() {
			if (Object.keys(Ct$1).length > 0) {
				for (var t$1 in lt$1("/Shading <<"), Ct$1) Ct$1.hasOwnProperty(t$1) && Ct$1[t$1] instanceof M && Ct$1[t$1].objectNumber >= 0 && lt$1("/" + t$1 + " " + Ct$1[t$1].objectNumber + " 0 R");
				Dt$1.publish("putShadingPatternDict"), lt$1(">>");
			}
		}(), function(t$1) {
			if (Object.keys(Ct$1).length > 0) {
				for (var e$1 in lt$1("/Pattern <<"), Ct$1) Ct$1.hasOwnProperty(e$1) && Ct$1[e$1] instanceof y$1.TilingPattern && Ct$1[e$1].objectNumber >= 0 && Ct$1[e$1].objectNumber < t$1 && lt$1("/" + e$1 + " " + Ct$1[e$1].objectNumber + " 0 R");
				Dt$1.publish("putTilingPatternDict"), lt$1(">>");
			}
		}(t.objectOid), function() {
			if (Object.keys(Bt$1).length > 0) {
				var t$1;
				for (t$1 in lt$1("/ExtGState <<"), Bt$1) Bt$1.hasOwnProperty(t$1) && Bt$1[t$1].objectNumber >= 0 && lt$1("/" + t$1 + " " + Bt$1[t$1].objectNumber + " 0 R");
				Dt$1.publish("putGStateDict"), lt$1(">>");
			}
		}(), function() {
			for (var t$1 in lt$1("/XObject <<"), zt$1) zt$1.hasOwnProperty(t$1) && zt$1[t$1].objectNumber >= 0 && lt$1("/" + t$1 + " " + zt$1[t$1].objectNumber + " 0 R");
			Dt$1.publish("putXobjectDict"), lt$1(">>");
		}(), lt$1(">>"), lt$1("endobj");
	}, de$1 = function(t) {
		It$1[t.fontName] = It$1[t.fontName] || {}, It$1[t.fontName][t.fontStyle] = t.id;
	}, pe$1 = function(t, e$1, n$1, r$1, i$2) {
		var a$2 = {
			id: "F" + (Object.keys(Ft$1).length + 1).toString(10),
			postScriptName: t,
			fontName: e$1,
			fontStyle: n$1,
			encoding: r$1,
			isStandardFont: i$2 || !1,
			metadata: {}
		};
		return Dt$1.publish("addFont", {
			font: a$2,
			instance: this
		}), Ft$1[a$2.id] = a$2, de$1(a$2), a$2.id;
	}, ge$1 = y$1.__private__.pdfEscape = y$1.pdfEscape = function(t, e$1) {
		return function(t$1, e$2) {
			var n$1, r$1, i$2, a$2, o$1, s$2, u$2, c$2, l$1;
			if (i$2 = (e$2 = e$2 || {}).sourceEncoding || "Unicode", o$1 = e$2.outputEncoding, (e$2.autoencode || o$1) && Ft$1[At$1].metadata && Ft$1[At$1].metadata[i$2] && Ft$1[At$1].metadata[i$2].encoding && (a$2 = Ft$1[At$1].metadata[i$2].encoding, !o$1 && Ft$1[At$1].encoding && (o$1 = Ft$1[At$1].encoding), !o$1 && a$2.codePages && (o$1 = a$2.codePages[0]), "string" == typeof o$1 && (o$1 = a$2[o$1]), o$1)) {
				for (u$2 = !1, s$2 = [], n$1 = 0, r$1 = t$1.length; n$1 < r$1; n$1++) (c$2 = o$1[t$1.charCodeAt(n$1)]) ? s$2.push(String.fromCharCode(c$2)) : s$2.push(t$1[n$1]), s$2[n$1].charCodeAt(0) >> 8 && (u$2 = !0);
				t$1 = s$2.join("");
			}
			for (n$1 = t$1.length; void 0 === u$2 && 0 !== n$1;) t$1.charCodeAt(n$1 - 1) >> 8 && (u$2 = !0), n$1--;
			if (!u$2) return t$1;
			for (s$2 = e$2.noBOM ? [] : [254, 255], n$1 = 0, r$1 = t$1.length; n$1 < r$1; n$1++) {
				if ((l$1 = (c$2 = t$1.charCodeAt(n$1)) >> 8) >> 8) throw new Error("Character at position " + n$1 + " of string '" + t$1 + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
				s$2.push(l$1), s$2.push(c$2 - (l$1 << 8));
			}
			return String.fromCharCode.apply(void 0, s$2);
		}(t, e$1).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
	}, me$1 = y$1.__private__.beginPage = function(t) {
		ot$1[++Et$1] = [], Rt$1[Et$1] = {
			objId: 0,
			contentsObjId: 0,
			userUnit: Number(f$1),
			artBox: null,
			bleedBox: null,
			cropBox: null,
			trimBox: null,
			mediaBox: {
				bottomLeftX: 0,
				bottomLeftY: 0,
				topRightX: Number(t[0]),
				topRightY: Number(t[1])
			}
		}, ye$1(Et$1), ct$1(ot$1[$$1]);
	}, ve$1 = function(t, e$1) {
		var n$1, i$2, a$2;
		switch (r = e$1 || r, "string" == typeof t && (n$1 = x$2(t.toLowerCase()), Array.isArray(n$1) && (i$2 = n$1[0], a$2 = n$1[1])), Array.isArray(t) && (i$2 = t[0] * St$1, a$2 = t[1] * St$1), isNaN(i$2) && (i$2 = s$1[0], a$2 = s$1[1]), (i$2 > 14400 || a$2 > 14400) && (o.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), i$2 = Math.min(14400, i$2), a$2 = Math.min(14400, a$2)), s$1 = [i$2, a$2], r.substr(0, 1)) {
			case "l":
				a$2 > i$2 && (s$1 = [a$2, i$2]);
				break;
			case "p": i$2 > a$2 && (s$1 = [a$2, i$2]);
		}
		me$1(s$1), Ze(Xe), lt$1(on), 0 !== fn && lt$1(fn + " J"), 0 !== dn && lt$1(dn + " j"), Dt$1.publish("addPage", { pageNumber: Et$1 });
	}, be$1 = function(t) {
		t > 0 && t <= Et$1 && (ot$1.splice(t, 1), Rt$1.splice(t, 1), Et$1--, $$1 > Et$1 && ($$1 = Et$1), this.setPage($$1));
	}, ye$1 = function(t) {
		t > 0 && t <= Et$1 && ($$1 = t);
	}, we$1 = y$1.__private__.getNumberOfPages = y$1.getNumberOfPages = function() {
		return ot$1.length - 1;
	}, Ne$1 = function(t, e$1, n$1) {
		var r$1, i$2 = void 0;
		return n$1 = n$1 || {}, t = void 0 !== t ? t : Ft$1[At$1].fontName, e$1 = void 0 !== e$1 ? e$1 : Ft$1[At$1].fontStyle, r$1 = t.toLowerCase(), void 0 !== It$1[r$1] && void 0 !== It$1[r$1][e$1] ? i$2 = It$1[r$1][e$1] : void 0 !== It$1[t] && void 0 !== It$1[t][e$1] ? i$2 = It$1[t][e$1] : !1 === n$1.disableWarning && o.warn("Unable to look up font label for font '" + t + "', '" + e$1 + "'. Refer to getFontList() for available fonts."), i$2 || n$1.noFallback || ((i$2 = It$1.times[e$1]) ?? (i$2 = It$1.times.normal)), i$2;
	}, Le$1 = y$1.__private__.putInfo = function() {
		var t = Xt$1(), e$1 = function(t$1) {
			return t$1;
		};
		for (var n$1 in null !== m$1 && (e$1 = je$1.encryptor(t, 0)), lt$1("<<"), lt$1("/Producer (" + ge$1(e$1("jsPDF " + E.version)) + ")"), xt$1) xt$1.hasOwnProperty(n$1) && xt$1[n$1] && lt$1("/" + n$1.substr(0, 1).toUpperCase() + n$1.substr(1) + " (" + ge$1(e$1(xt$1[n$1])) + ")");
		lt$1("/CreationDate (" + ge$1(e$1(W$1)) + ")"), lt$1(">>"), lt$1("endobj");
	}, xe$1 = y$1.__private__.putCatalog = function(t) {
		var e$1 = (t = t || {}).rootDictionaryObjId || Qt$1;
		switch (Xt$1(), lt$1("<<"), lt$1("/Type /Catalog"), lt$1("/Pages " + e$1 + " 0 R"), gt$1 || (gt$1 = "fullwidth"), gt$1) {
			case "fullwidth":
				lt$1("/OpenAction [3 0 R /FitH null]");
				break;
			case "fullheight":
				lt$1("/OpenAction [3 0 R /FitV null]");
				break;
			case "fullpage":
				lt$1("/OpenAction [3 0 R /Fit]");
				break;
			case "original":
				lt$1("/OpenAction [3 0 R /XYZ null null 1]");
				break;
			default:
				var n$1 = "" + gt$1;
				"%" === n$1.substr(n$1.length - 1) && (gt$1 = parseInt(gt$1) / 100), "number" == typeof gt$1 && lt$1("/OpenAction [3 0 R /XYZ null null " + T$1(gt$1) + "]");
		}
		switch (wt$1 || (wt$1 = "continuous"), wt$1) {
			case "continuous":
				lt$1("/PageLayout /OneColumn");
				break;
			case "single":
				lt$1("/PageLayout /SinglePage");
				break;
			case "two":
			case "twoleft":
				lt$1("/PageLayout /TwoColumnLeft");
				break;
			case "tworight": lt$1("/PageLayout /TwoColumnRight");
		}
		bt$1 && lt$1("/PageMode /" + bt$1), Dt$1.publish("putCatalog"), lt$1(">>"), lt$1("endobj");
	}, Ae$1 = y$1.__private__.putTrailer = function() {
		lt$1("trailer"), lt$1("<<"), lt$1("/Size " + (et$2 + 1)), lt$1("/Root " + et$2 + " 0 R"), lt$1("/Info " + (et$2 - 1) + " 0 R"), null !== m$1 && lt$1("/Encrypt " + je$1.oid + " 0 R"), lt$1("/ID [ <" + V$1 + "> <" + V$1 + "> ]"), lt$1(">>");
	}, Se$1 = y$1.__private__.putHeader = function() {
		lt$1("%PDF-" + w$1), lt$1("%ºß¬à");
	}, _e$1 = y$1.__private__.putXRef = function() {
		var t = "0000000000";
		lt$1("xref"), lt$1("0 " + (et$2 + 1)), lt$1("0000000000 65535 f ");
		for (var e$1 = 1; e$1 <= et$2; e$1++) "function" == typeof nt$1[e$1] ? lt$1((t + nt$1[e$1]()).slice(-10) + " 00000 n ") : void 0 !== nt$1[e$1] ? lt$1((t + nt$1[e$1]).slice(-10) + " 00000 n ") : lt$1("0000000000 00000 n ");
	}, Pe$1 = y$1.__private__.buildDocument = function() {
		var t;
		et$2 = 0, it$1 = 0, rt$1 = [], nt$1 = [], at$1 = [], Qt$1 = Kt$1(), te$1 = Kt$1(), ct$1(rt$1), Dt$1.publish("buildDocument"), Se$1(), oe$1(), function() {
			Dt$1.publish("putAdditionalObjects");
			for (var t$1 = 0; t$1 < at$1.length; t$1++) {
				var e$2 = at$1[t$1];
				Zt$1(e$2.objId, !0), lt$1(e$2.content), lt$1("endobj");
			}
			Dt$1.publish("postPutAdditionalObjects");
		}(), t = [], function() {
			for (var t$1 in Ft$1) Ft$1.hasOwnProperty(t$1) && (!1 === v$1 || !0 === v$1 && b$1.hasOwnProperty(t$1)) && se$1(Ft$1[t$1]);
		}(), function() {
			var t$1;
			for (t$1 in Bt$1) Bt$1.hasOwnProperty(t$1) && he$1(Bt$1[t$1]);
		}(), function() {
			for (var t$1 in zt$1) zt$1.hasOwnProperty(t$1) && ue$1(zt$1[t$1]);
		}(), function(t$1) {
			var e$2;
			for (e$2 in Ct$1) Ct$1.hasOwnProperty(e$2) && (Ct$1[e$2] instanceof M ? ce$1(Ct$1[e$2]) : Ct$1[e$2] instanceof q && le$1(Ct$1[e$2], t$1));
		}(t), Dt$1.publish("putResources"), t.forEach(fe$1), fe$1({
			resourcesOid: te$1,
			objectOid: Number.MAX_SAFE_INTEGER
		}), Dt$1.publish("postPutResources"), null !== m$1 && (je$1.oid = Xt$1(), lt$1("<<"), lt$1("/Filter /Standard"), lt$1("/V " + je$1.v), lt$1("/R " + je$1.r), lt$1("/U <" + je$1.toHexString(je$1.U) + ">"), lt$1("/O <" + je$1.toHexString(je$1.O) + ">"), lt$1("/P " + je$1.P), lt$1(">>"), lt$1("endobj")), Le$1(), xe$1();
		var e$1 = it$1;
		return _e$1(), Ae$1(), lt$1("startxref"), lt$1("" + e$1), lt$1("%%EOF"), ct$1(ot$1[$$1]), rt$1.join("\n");
	}, ke$1 = y$1.__private__.getBlob = function(t) {
		return new Blob([ft$1(t)], { type: "application/pdf" });
	}, Fe$1 = y$1.output = y$1.__private__.output = (Jt$1 = function(t, e$1) {
		switch ("string" == typeof (e$1 = e$1 || {}) ? e$1 = { filename: e$1 } : e$1.filename = e$1.filename || "generated.pdf", t) {
			case void 0: return Pe$1();
			case "save":
				y$1.save(e$1.filename);
				break;
			case "arraybuffer": return ft$1(Pe$1());
			case "blob": return ke$1(Pe$1());
			case "bloburi":
			case "bloburl":
				if (void 0 !== i.URL && "function" == typeof i.URL.createObjectURL) return i.URL && i.URL.createObjectURL(ke$1(Pe$1())) || void 0;
				o.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
				break;
			case "datauristring":
			case "dataurlstring":
				var n$1 = "", r$1 = Pe$1();
				try {
					n$1 = d(r$1);
				} catch (m$2) {
					n$1 = d(unescape(encodeURIComponent(r$1)));
				}
				return "data:application/pdf;filename=" + e$1.filename + ";base64," + n$1;
			case "pdfobjectnewwindow":
				if ("[object Window]" === Object.prototype.toString.call(i)) {
					var a$2 = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", s$2 = " integrity=\"sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==\" crossorigin=\"anonymous\"";
					e$1.pdfObjectUrl && (a$2 = e$1.pdfObjectUrl, s$2 = "");
					var u$2 = "<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src=\"" + a$2 + "\"" + s$2 + "><\/script><script >PDFObject.embed(\"" + this.output("dataurlstring") + "\", " + JSON.stringify(e$1) + ");<\/script></body></html>", c$2 = i.open();
					return null !== c$2 && c$2.document.write(u$2), c$2;
				}
				throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
			case "pdfjsnewwindow":
				if ("[object Window]" === Object.prototype.toString.call(i)) {
					var l$1 = "<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id=\"pdfViewer\" src=\"" + (e$1.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + e$1.filename + "\" width=\"500px\" height=\"400px\" /></body></html>", h$1 = i.open();
					if (null !== h$1) {
						h$1.document.write(l$1);
						var f$2 = this;
						h$1.document.documentElement.querySelector("#pdfViewer").onload = function() {
							h$1.document.title = e$1.filename, h$1.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(f$2.output("bloburl"));
						};
					}
					return h$1;
				}
				throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
			case "dataurlnewwindow":
				if ("[object Window]" !== Object.prototype.toString.call(i)) throw new Error("The option dataurlnewwindow just works in a browser-environment.");
				var p$2 = "<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src=\"" + this.output("datauristring", e$1) + "\"></iframe></body></html>", g$2 = i.open();
				if (null !== g$2 && (g$2.document.write(p$2), g$2.document.title = e$1.filename), g$2 || "undefined" == typeof safari) return g$2;
				break;
			case "datauri":
			case "dataurl": return i.document.location.href = this.output("datauristring", e$1);
			default: return null;
		}
	}, Jt$1.foo = function() {
		try {
			return Jt$1.apply(this, arguments);
		} catch (n$1) {
			var t = n$1.stack || "";
			~t.indexOf(" at ") && (t = t.split(" at ")[1]);
			var e$1 = "Error in function " + t.split("\n")[0].split("<")[0] + ": " + n$1.message;
			if (!i.console) throw new Error(e$1);
			i.console.error(e$1, n$1), i.alert && alert(e$1);
		}
	}, Jt$1.foo.bar = Jt$1, Jt$1.foo), Ie$1 = function(t) {
		return !0 === Array.isArray(Tt$1) && Tt$1.indexOf(t) > -1;
	};
	switch (a$1) {
		case "pt":
			St$1 = 1;
			break;
		case "mm":
			St$1 = 72 / 25.4;
			break;
		case "cm":
			St$1 = 72 / 2.54;
			break;
		case "in":
			St$1 = 72;
			break;
		case "px":
			St$1 = 1 == Ie$1("px_scaling") ? .75 : 96 / 72;
			break;
		case "pc":
		case "em":
			St$1 = 12;
			break;
		case "ex":
			St$1 = 6;
			break;
		default:
			if ("number" != typeof a$1) throw new Error("Invalid unit: " + a$1);
			St$1 = a$1;
	}
	var je$1 = null;
	K$1(), Y$1();
	var Ce = y$1.__private__.getPageInfo = y$1.getPageInfo = function(t) {
		if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
		return {
			objId: Rt$1[t].objId,
			pageNumber: t,
			pageContext: Rt$1[t]
		};
	}, Oe = y$1.__private__.getPageInfoByObjId = function(t) {
		if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
		for (var e$1 in Rt$1) if (Rt$1[e$1].objId === t) break;
		return Ce(e$1);
	}, Be = y$1.__private__.getCurrentPageInfo = y$1.getCurrentPageInfo = function() {
		return {
			objId: Rt$1[$$1].objId,
			pageNumber: $$1,
			pageContext: Rt$1[$$1]
		};
	};
	y$1.addPage = function() {
		return ve$1.apply(this, arguments), this;
	}, y$1.setPage = function() {
		return ye$1.apply(this, arguments), ct$1.call(this, ot$1[$$1]), this;
	}, y$1.insertPage = function(t) {
		return this.addPage(), this.movePage($$1, t), this;
	}, y$1.movePage = function(t, e$1) {
		var n$1, r$1;
		if (t > e$1) {
			n$1 = ot$1[t], r$1 = Rt$1[t];
			for (var i$2 = t; i$2 > e$1; i$2--) ot$1[i$2] = ot$1[i$2 - 1], Rt$1[i$2] = Rt$1[i$2 - 1];
			ot$1[e$1] = n$1, Rt$1[e$1] = r$1, this.setPage(e$1);
		} else if (t < e$1) {
			n$1 = ot$1[t], r$1 = Rt$1[t];
			for (var a$2 = t; a$2 < e$1; a$2++) ot$1[a$2] = ot$1[a$2 + 1], Rt$1[a$2] = Rt$1[a$2 + 1];
			ot$1[e$1] = n$1, Rt$1[e$1] = r$1, this.setPage(e$1);
		}
		return this;
	}, y$1.deletePage = function() {
		return be$1.apply(this, arguments), this;
	}, y$1.__private__.text = y$1.text = function(e$1, n$1, r$1, i$2, a$2) {
		var o$1, s$2, u$2, c$2, l$1, h$1, f$2, d$1, p$2, g$2 = (i$2 = i$2 || {}).scope || this;
		if ("number" == typeof e$1 && "number" == typeof n$1 && ("string" == typeof r$1 || Array.isArray(r$1))) {
			var m$2 = r$1;
			r$1 = n$1, n$1 = e$1, e$1 = m$2;
		}
		if (arguments[3] instanceof Wt$1 == 0 ? (u$2 = arguments[4], c$2 = arguments[5], "object" === _typeof(f$2 = arguments[3]) && null !== f$2 || ("string" == typeof u$2 && (c$2 = u$2, u$2 = null), "string" == typeof f$2 && (c$2 = f$2, f$2 = null), "number" == typeof f$2 && (u$2 = f$2, f$2 = null), i$2 = {
			flags: f$2,
			angle: u$2,
			align: c$2
		})) : (R$1("The transform parameter of text() with a Matrix value"), p$2 = a$2), isNaN(n$1) || isNaN(r$1) || null == e$1) throw new Error("Invalid arguments passed to jsPDF.text");
		if (0 === e$1.length) return g$2;
		var v$2, y$2 = "", w$2 = "number" == typeof i$2.lineHeightFactor ? i$2.lineHeightFactor : Je, N$2 = g$2.internal.scaleFactor;
		function L$2(t) {
			return t = t.split("	").join(Array(i$2.TabLen || 9).join(" ")), ge$1(t, f$2);
		}
		function x$3(t) {
			for (var e$2, n$2 = t.concat(), r$2 = [], i$3 = n$2.length; i$3--;) "string" == typeof (e$2 = n$2.shift()) ? r$2.push(e$2) : Array.isArray(t) && (1 === e$2.length || void 0 === e$2[1] && void 0 === e$2[2]) ? r$2.push(e$2[0]) : r$2.push([
				e$2[0],
				e$2[1],
				e$2[2]
			]);
			return r$2;
		}
		function A$2(t, e$2) {
			var n$2;
			if ("string" == typeof t) n$2 = e$2(t)[0];
			else if (Array.isArray(t)) {
				for (var r$2, i$3, a$3 = t.concat(), o$2 = [], s$3 = a$3.length; s$3--;) "string" == typeof (r$2 = a$3.shift()) ? o$2.push(e$2(r$2)[0]) : Array.isArray(r$2) && "string" == typeof r$2[0] && (i$3 = e$2(r$2[0], r$2[1], r$2[2]), o$2.push([
					i$3[0],
					i$3[1],
					i$3[2]
				]));
				n$2 = o$2;
			}
			return n$2;
		}
		var P$2 = !1, k$2 = !0;
		if ("string" == typeof e$1) P$2 = !0;
		else if (Array.isArray(e$1)) {
			var F$2 = e$1.concat();
			s$2 = [];
			for (var I$1, j$1 = F$2.length; j$1--;) ("string" != typeof (I$1 = F$2.shift()) || Array.isArray(I$1) && "string" != typeof I$1[0]) && (k$2 = !1);
			P$2 = k$2;
		}
		if (!1 === P$2) throw new Error("Type of text must be string or Array. \"" + e$1 + "\" is not recognized.");
		"string" == typeof e$1 && (e$1 = e$1.match(/[\r?\n]/) ? e$1.split(/\r\n|\r|\n/g) : [e$1]);
		var C$1 = pt$1 / g$2.internal.scaleFactor, O$1 = C$1 * (w$2 - 1);
		switch (i$2.baseline) {
			case "bottom":
				r$1 -= O$1;
				break;
			case "top":
				r$1 += C$1 - O$1;
				break;
			case "hanging":
				r$1 += C$1 - 2 * O$1;
				break;
			case "middle": r$1 += C$1 / 2 - O$1;
		}
		if ((h$1 = i$2.maxWidth || 0) > 0 && ("string" == typeof e$1 ? e$1 = g$2.splitTextToSize(e$1, h$1) : "[object Array]" === Object.prototype.toString.call(e$1) && (e$1 = e$1.reduce(function(t, e$2) {
			return t.concat(g$2.splitTextToSize(e$2, h$1));
		}, []))), o$1 = {
			text: e$1,
			x: n$1,
			y: r$1,
			options: i$2,
			mutex: {
				pdfEscape: ge$1,
				activeFontKey: At$1,
				fonts: Ft$1,
				activeFontSize: pt$1
			}
		}, Dt$1.publish("preProcessText", o$1), e$1 = o$1.text, u$2 = (i$2 = o$1.options).angle, p$2 instanceof Wt$1 == 0 && u$2 && "number" == typeof u$2) {
			u$2 *= Math.PI / 180, 0 === i$2.rotationDirection && (u$2 = -u$2), _$1 === S$1 && (u$2 = -u$2);
			var M$1 = Math.cos(u$2), q$1 = Math.sin(u$2);
			p$2 = new Wt$1(M$1, q$1, -q$1, M$1, 0, 0);
		} else u$2 && u$2 instanceof Wt$1 && (p$2 = u$2);
		_$1 !== S$1 || p$2 || (p$2 = Gt$1), void 0 !== (l$1 = i$2.charSpace || ln$1) && (y$2 += B$1(U$1(l$1)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), void 0 !== (d$1 = i$2.horizontalScale) && (y$2 += B$1(100 * d$1) + " Tz\n"), i$2.lang;
		var E$1 = -1, D$2 = void 0 !== i$2.renderingMode ? i$2.renderingMode : i$2.stroke, T$2 = g$2.internal.getCurrentPageInfo().pageContext;
		switch (D$2) {
			case 0:
			case !1:
			case "fill":
				E$1 = 0;
				break;
			case 1:
			case !0:
			case "stroke":
				E$1 = 1;
				break;
			case 2:
			case "fillThenStroke":
				E$1 = 2;
				break;
			case 3:
			case "invisible":
				E$1 = 3;
				break;
			case 4:
			case "fillAndAddForClipping":
				E$1 = 4;
				break;
			case 5:
			case "strokeAndAddPathForClipping":
				E$1 = 5;
				break;
			case 6:
			case "fillThenStrokeAndAddToPathForClipping":
				E$1 = 6;
				break;
			case 7:
			case "addToPathForClipping": E$1 = 7;
		}
		var z$2 = void 0 !== T$2.usedRenderingMode ? T$2.usedRenderingMode : -1;
		-1 !== E$1 ? y$2 += E$1 + " Tr\n" : -1 !== z$2 && (y$2 += "0 Tr\n"), -1 !== E$1 && (T$2.usedRenderingMode = E$1), c$2 = i$2.align || "left";
		var H$2, W$2 = pt$1 * w$2, V$2 = g$2.internal.pageSize.getWidth(), G$2 = Ft$1[At$1];
		l$1 = i$2.charSpace || ln$1, h$1 = i$2.maxWidth || 0, f$2 = Object.assign({
			autoencode: !0,
			noBOM: !0
		}, i$2.flags);
		var Y$2 = [], J$2 = function(t) {
			return g$2.getStringUnitWidth(t, {
				font: G$2,
				charSpace: l$1,
				fontSize: pt$1,
				doKerning: !1
			}) * pt$1 / N$2;
		};
		if ("[object Array]" === Object.prototype.toString.call(e$1)) {
			var X$2;
			s$2 = x$3(e$1), "left" !== c$2 && (H$2 = s$2.map(J$2));
			var K$2, Z$2 = 0;
			if ("right" === c$2) {
				n$1 -= H$2[0], e$1 = [], j$1 = s$2.length;
				for (var $$2 = 0; $$2 < j$1; $$2++) 0 === $$2 ? (K$2 = en(n$1), X$2 = nn(r$1)) : (K$2 = U$1(Z$2 - H$2[$$2]), X$2 = -W$2), e$1.push([
					s$2[$$2],
					K$2,
					X$2
				]), Z$2 = H$2[$$2];
			} else if ("center" === c$2) {
				n$1 -= H$2[0] / 2, e$1 = [], j$1 = s$2.length;
				for (var Q$2 = 0; Q$2 < j$1; Q$2++) 0 === Q$2 ? (K$2 = en(n$1), X$2 = nn(r$1)) : (K$2 = U$1((Z$2 - H$2[Q$2]) / 2), X$2 = -W$2), e$1.push([
					s$2[Q$2],
					K$2,
					X$2
				]), Z$2 = H$2[Q$2];
			} else if ("left" === c$2) {
				e$1 = [], j$1 = s$2.length;
				for (var tt$2 = 0; tt$2 < j$1; tt$2++) e$1.push(s$2[tt$2]);
			} else if ("justify" === c$2 && "Identity-H" === G$2.encoding) {
				e$1 = [], j$1 = s$2.length, h$1 = 0 !== h$1 ? h$1 : V$2;
				for (var et$3 = 0, nt$2 = 0; nt$2 < j$1; nt$2++) if (X$2 = 0 === nt$2 ? nn(r$1) : -W$2, K$2 = 0 === nt$2 ? en(n$1) : et$3, nt$2 < j$1 - 1) {
					var rt$2 = U$1((h$1 - H$2[nt$2]) / (s$2[nt$2].split(" ").length - 1)), it$2 = s$2[nt$2].split(" ");
					e$1.push([
						it$2[0] + " ",
						K$2,
						X$2
					]), et$3 = 0;
					for (var at$2 = 1; at$2 < it$2.length; at$2++) {
						var ot$2 = (J$2(it$2[at$2 - 1] + " " + it$2[at$2]) - J$2(it$2[at$2])) * N$2 + rt$2;
						at$2 == it$2.length - 1 ? e$1.push([
							it$2[at$2],
							ot$2,
							0
						]) : e$1.push([
							it$2[at$2] + " ",
							ot$2,
							0
						]), et$3 -= ot$2;
					}
				} else e$1.push([
					s$2[nt$2],
					K$2,
					X$2
				]);
				e$1.push([
					"",
					et$3,
					0
				]);
			} else {
				if ("justify" !== c$2) throw new Error("Unrecognized alignment option, use \"left\", \"center\", \"right\" or \"justify\".");
				for (e$1 = [], j$1 = s$2.length, h$1 = 0 !== h$1 ? h$1 : V$2, nt$2 = 0; nt$2 < j$1; nt$2++) {
					X$2 = 0 === nt$2 ? nn(r$1) : -W$2, K$2 = 0 === nt$2 ? en(n$1) : 0;
					var st$2 = s$2[nt$2].split(" ").length - 1, ut$2 = st$2 > 0 ? (h$1 - H$2[nt$2]) / st$2 : 0;
					nt$2 < j$1 - 1 ? Y$2.push(B$1(U$1(ut$2))) : Y$2.push(0), e$1.push([
						s$2[nt$2],
						K$2,
						X$2
					]);
				}
			}
		}
		!0 === ("boolean" == typeof i$2.R2L ? i$2.R2L : vt$1) && (e$1 = A$2(e$1, function(t, e$2, n$2) {
			return [
				t.split("").reverse().join(""),
				e$2,
				n$2
			];
		})), o$1 = {
			text: e$1,
			x: n$1,
			y: r$1,
			options: i$2,
			mutex: {
				pdfEscape: ge$1,
				activeFontKey: At$1,
				fonts: Ft$1,
				activeFontSize: pt$1
			}
		}, Dt$1.publish("postProcessText", o$1), e$1 = o$1.text, v$2 = o$1.mutex.isHex || !1;
		var ct$2 = Ft$1[At$1].encoding;
		"WinAnsiEncoding" !== ct$2 && "StandardEncoding" !== ct$2 || (e$1 = A$2(e$1, function(t, e$2, n$2) {
			return [
				L$2(t),
				e$2,
				n$2
			];
		})), s$2 = x$3(e$1), e$1 = [];
		for (var ht$2, ft$2, dt$2, gt$2 = Array.isArray(s$2[0]) ? 1 : 0, mt$2 = "", bt$2 = function(t, e$2, n$2) {
			var r$2 = "";
			return n$2 instanceof Wt$1 ? (n$2 = "number" == typeof i$2.angle ? Vt$1(n$2, new Wt$1(1, 0, 0, 1, t, e$2)) : Vt$1(new Wt$1(1, 0, 0, 1, t, e$2), n$2), _$1 === S$1 && (n$2 = Vt$1(new Wt$1(1, 0, 0, -1, 0, 0), n$2)), r$2 = n$2.join(" ") + " Tm\n") : r$2 = B$1(t) + " " + B$1(e$2) + " Td\n", r$2;
		}, yt$2 = 0; yt$2 < s$2.length; yt$2++) {
			switch (mt$2 = "", gt$2) {
				case 1:
					dt$2 = (v$2 ? "<" : "(") + s$2[yt$2][0] + (v$2 ? ">" : ")"), ht$2 = parseFloat(s$2[yt$2][1]), ft$2 = parseFloat(s$2[yt$2][2]);
					break;
				case 0: dt$2 = (v$2 ? "<" : "(") + s$2[yt$2] + (v$2 ? ">" : ")"), ht$2 = en(n$1), ft$2 = nn(r$1);
			}
			void 0 !== Y$2 && void 0 !== Y$2[yt$2] && (mt$2 = Y$2[yt$2] + " Tw\n"), 0 === yt$2 ? e$1.push(mt$2 + bt$2(ht$2, ft$2, p$2) + dt$2) : 0 === gt$2 ? e$1.push(mt$2 + dt$2) : 1 === gt$2 && e$1.push(mt$2 + bt$2(ht$2, ft$2, p$2) + dt$2);
		}
		e$1 = 0 === gt$2 ? e$1.join(" Tj\nT* ") : e$1.join(" Tj\n"), e$1 += " Tj\n";
		var wt$2 = "BT\n/";
		return wt$2 += At$1 + " " + pt$1 + " Tf\n", wt$2 += B$1(pt$1 * w$2) + " TL\n", wt$2 += un + "\n", wt$2 += y$2, wt$2 += e$1, lt$1(wt$2 += "ET"), b$1[At$1] = !0, g$2;
	};
	var Me = y$1.__private__.clip = y$1.clip = function(t) {
		return lt$1("evenodd" === t ? "W*" : "W"), this;
	};
	y$1.clipEvenOdd = function() {
		return Me("evenodd");
	}, y$1.__private__.discardPath = y$1.discardPath = function() {
		return lt$1("n"), this;
	};
	var qe = y$1.__private__.isValidStyle = function(t) {
		var e$1 = !1;
		return -1 !== [
			void 0,
			null,
			"S",
			"D",
			"F",
			"DF",
			"FD",
			"f",
			"f*",
			"B",
			"B*",
			"n"
		].indexOf(t) && (e$1 = !0), e$1;
	};
	y$1.__private__.setDefaultPathOperation = y$1.setDefaultPathOperation = function(t) {
		return qe(t) && (g$1 = t), this;
	};
	var Ee = y$1.__private__.getStyle = y$1.getStyle = function(t) {
		var e$1 = g$1;
		switch (t) {
			case "D":
			case "S":
				e$1 = "S";
				break;
			case "F":
				e$1 = "f";
				break;
			case "FD":
			case "DF":
				e$1 = "B";
				break;
			case "f":
			case "f*":
			case "B":
			case "B*": e$1 = t;
		}
		return e$1;
	}, Re = y$1.close = function() {
		return lt$1("h"), this;
	};
	y$1.stroke = function() {
		return lt$1("S"), this;
	}, y$1.fill = function(t) {
		return De("f", t), this;
	}, y$1.fillEvenOdd = function(t) {
		return De("f*", t), this;
	}, y$1.fillStroke = function(t) {
		return De("B", t), this;
	}, y$1.fillStrokeEvenOdd = function(t) {
		return De("B*", t), this;
	};
	var De = function(e$1, n$1) {
		"object" === _typeof(n$1) ? Ue(n$1, e$1) : lt$1(e$1);
	}, Te = function(t) {
		null === t || _$1 === S$1 && void 0 === t || (t = Ee(t), lt$1(t));
	};
	function ze(t, e$1, n$1, r$1, i$2) {
		var a$2 = new q(e$1 || this.boundingBox, n$1 || this.xStep, r$1 || this.yStep, this.gState, i$2 || this.matrix);
		a$2.stream = this.stream;
		var o$1 = t + "$$" + this.cloneIndex++ + "$$";
		return Yt$1(o$1, a$2), a$2;
	}
	var Ue = function(t, e$1) {
		var n$1 = Ot$1[t.key], r$1 = Ct$1[n$1];
		if (r$1 instanceof M) lt$1("q"), lt$1(He(e$1)), r$1.gState && y$1.setGState(r$1.gState), lt$1(t.matrix.toString() + " cm"), lt$1("/" + n$1 + " sh"), lt$1("Q");
		else if (r$1 instanceof q) {
			var i$2 = new Wt$1(1, 0, 0, -1, 0, _n());
			t.matrix && (i$2 = i$2.multiply(t.matrix || Gt$1), n$1 = ze.call(r$1, t.key, t.boundingBox, t.xStep, t.yStep, i$2).id), lt$1("q"), lt$1("/Pattern cs"), lt$1("/" + n$1 + " scn"), r$1.gState && y$1.setGState(r$1.gState), lt$1(e$1), lt$1("Q");
		}
	}, He = function(t) {
		switch (t) {
			case "f":
			case "F":
			case "n": return "W n";
			case "f*": return "W* n";
			case "B":
			case "S": return "W S";
			case "B*": return "W* S";
		}
	}, We = y$1.moveTo = function(t, e$1) {
		return lt$1(B$1(U$1(t)) + " " + B$1(H$1(e$1)) + " m"), this;
	}, Ve = y$1.lineTo = function(t, e$1) {
		return lt$1(B$1(U$1(t)) + " " + B$1(H$1(e$1)) + " l"), this;
	}, Ge = y$1.curveTo = function(t, e$1, n$1, r$1, i$2, a$2) {
		return lt$1([
			B$1(U$1(t)),
			B$1(H$1(e$1)),
			B$1(U$1(n$1)),
			B$1(H$1(r$1)),
			B$1(U$1(i$2)),
			B$1(H$1(a$2)),
			"c"
		].join(" ")), this;
	};
	y$1.__private__.line = y$1.line = function(t, e$1, n$1, r$1, i$2) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1) || !qe(i$2)) throw new Error("Invalid arguments passed to jsPDF.line");
		return _$1 === A$1 ? this.lines([[n$1 - t, r$1 - e$1]], t, e$1, [1, 1], i$2 || "S") : this.lines([[n$1 - t, r$1 - e$1]], t, e$1, [1, 1]).stroke();
	}, y$1.__private__.lines = y$1.lines = function(t, e$1, n$1, r$1, i$2, a$2) {
		var o$1, s$2, u$2, c$2, l$1, h$1, f$2, d$1, p$2, g$2, m$2, v$2;
		if ("number" == typeof t && (v$2 = n$1, n$1 = e$1, e$1 = t, t = v$2), r$1 = r$1 || [1, 1], a$2 = a$2 || !1, isNaN(e$1) || isNaN(n$1) || !Array.isArray(t) || !Array.isArray(r$1) || !qe(i$2) || "boolean" != typeof a$2) throw new Error("Invalid arguments passed to jsPDF.lines");
		for (We(e$1, n$1), o$1 = r$1[0], s$2 = r$1[1], c$2 = t.length, g$2 = e$1, m$2 = n$1, u$2 = 0; u$2 < c$2; u$2++) 2 === (l$1 = t[u$2]).length ? (g$2 = l$1[0] * o$1 + g$2, m$2 = l$1[1] * s$2 + m$2, Ve(g$2, m$2)) : (h$1 = l$1[0] * o$1 + g$2, f$2 = l$1[1] * s$2 + m$2, d$1 = l$1[2] * o$1 + g$2, p$2 = l$1[3] * s$2 + m$2, g$2 = l$1[4] * o$1 + g$2, m$2 = l$1[5] * s$2 + m$2, Ge(h$1, f$2, d$1, p$2, g$2, m$2));
		return a$2 && Re(), Te(i$2), this;
	}, y$1.path = function(t) {
		for (var e$1 = 0; e$1 < t.length; e$1++) {
			var n$1 = t[e$1], r$1 = n$1.c;
			switch (n$1.op) {
				case "m":
					We(r$1[0], r$1[1]);
					break;
				case "l":
					Ve(r$1[0], r$1[1]);
					break;
				case "c":
					Ge.apply(this, r$1);
					break;
				case "h": Re();
			}
		}
		return this;
	}, y$1.__private__.rect = y$1.rect = function(t, e$1, n$1, r$1, i$2) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1) || !qe(i$2)) throw new Error("Invalid arguments passed to jsPDF.rect");
		return _$1 === A$1 && (r$1 = -r$1), lt$1([
			B$1(U$1(t)),
			B$1(H$1(e$1)),
			B$1(U$1(n$1)),
			B$1(U$1(r$1)),
			"re"
		].join(" ")), Te(i$2), this;
	}, y$1.__private__.triangle = y$1.triangle = function(t, e$1, n$1, r$1, i$2, a$2, o$1) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1) || isNaN(i$2) || isNaN(a$2) || !qe(o$1)) throw new Error("Invalid arguments passed to jsPDF.triangle");
		return this.lines([
			[n$1 - t, r$1 - e$1],
			[i$2 - n$1, a$2 - r$1],
			[t - i$2, e$1 - a$2]
		], t, e$1, [1, 1], o$1, !0), this;
	}, y$1.__private__.roundedRect = y$1.roundedRect = function(t, e$1, n$1, r$1, i$2, a$2, o$1) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1) || isNaN(i$2) || isNaN(a$2) || !qe(o$1)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
		var s$2 = 4 / 3 * (Math.SQRT2 - 1);
		return i$2 = Math.min(i$2, .5 * n$1), a$2 = Math.min(a$2, .5 * r$1), this.lines([
			[n$1 - 2 * i$2, 0],
			[
				i$2 * s$2,
				0,
				i$2,
				a$2 - a$2 * s$2,
				i$2,
				a$2
			],
			[0, r$1 - 2 * a$2],
			[
				0,
				a$2 * s$2,
				-i$2 * s$2,
				a$2,
				-i$2,
				a$2
			],
			[2 * i$2 - n$1, 0],
			[
				-i$2 * s$2,
				0,
				-i$2,
				-a$2 * s$2,
				-i$2,
				-a$2
			],
			[0, 2 * a$2 - r$1],
			[
				0,
				-a$2 * s$2,
				i$2 * s$2,
				-a$2,
				i$2,
				-a$2
			]
		], t + i$2, e$1, [1, 1], o$1, !0), this;
	}, y$1.__private__.ellipse = y$1.ellipse = function(t, e$1, n$1, r$1, i$2) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1) || !qe(i$2)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
		var a$2 = 4 / 3 * (Math.SQRT2 - 1) * n$1, o$1 = 4 / 3 * (Math.SQRT2 - 1) * r$1;
		return We(t + n$1, e$1), Ge(t + n$1, e$1 - o$1, t + a$2, e$1 - r$1, t, e$1 - r$1), Ge(t - a$2, e$1 - r$1, t - n$1, e$1 - o$1, t - n$1, e$1), Ge(t - n$1, e$1 + o$1, t - a$2, e$1 + r$1, t, e$1 + r$1), Ge(t + a$2, e$1 + r$1, t + n$1, e$1 + o$1, t + n$1, e$1), Te(i$2), this;
	}, y$1.__private__.circle = y$1.circle = function(t, e$1, n$1, r$1) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || !qe(r$1)) throw new Error("Invalid arguments passed to jsPDF.circle");
		return this.ellipse(t, e$1, n$1, n$1, r$1);
	}, y$1.setFont = function(t, e$1, n$1) {
		return n$1 && (e$1 = F$1(e$1, n$1)), At$1 = Ne$1(t, e$1, { disableWarning: !1 }), this;
	};
	var Ye = y$1.__private__.getFont = y$1.getFont = function() {
		return Ft$1[Ne$1.apply(y$1, arguments)];
	};
	y$1.__private__.getFontList = y$1.getFontList = function() {
		var t, e$1, n$1 = {};
		for (t in It$1) if (It$1.hasOwnProperty(t)) for (e$1 in n$1[t] = [], It$1[t]) It$1[t].hasOwnProperty(e$1) && n$1[t].push(e$1);
		return n$1;
	}, y$1.addFont = function(t, e$1, n$1, r$1, i$2) {
		var a$2 = [
			"StandardEncoding",
			"MacRomanEncoding",
			"Identity-H",
			"WinAnsiEncoding"
		];
		return arguments[3] && -1 !== a$2.indexOf(arguments[3]) ? i$2 = arguments[3] : arguments[3] && -1 == a$2.indexOf(arguments[3]) && (n$1 = F$1(n$1, r$1)), pe$1.call(this, t, e$1, n$1, i$2 = i$2 || "Identity-H");
	};
	var Je, Xe = e.lineWidth || .200025, Ke = y$1.__private__.getLineWidth = y$1.getLineWidth = function() {
		return Xe;
	}, Ze = y$1.__private__.setLineWidth = y$1.setLineWidth = function(t) {
		return Xe = t, lt$1(B$1(U$1(t)) + " w"), this;
	};
	y$1.__private__.setLineDash = E.API.setLineDash = E.API.setLineDashPattern = function(t, e$1) {
		if (t = t || [], e$1 = e$1 || 0, isNaN(e$1) || !Array.isArray(t)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
		return t = t.map(function(t$1) {
			return B$1(U$1(t$1));
		}).join(" "), e$1 = B$1(U$1(e$1)), lt$1("[" + t + "] " + e$1 + " d"), this;
	};
	var $e = y$1.__private__.getLineHeight = y$1.getLineHeight = function() {
		return pt$1 * Je;
	};
	y$1.__private__.getLineHeight = y$1.getLineHeight = function() {
		return pt$1 * Je;
	};
	var Qe = y$1.__private__.setLineHeightFactor = y$1.setLineHeightFactor = function(t) {
		return "number" == typeof (t = t || 1.15) && (Je = t), this;
	}, tn = y$1.__private__.getLineHeightFactor = y$1.getLineHeightFactor = function() {
		return Je;
	};
	Qe(e.lineHeight);
	var en = y$1.__private__.getHorizontalCoordinate = function(t) {
		return U$1(t);
	}, nn = y$1.__private__.getVerticalCoordinate = function(t) {
		return _$1 === S$1 ? t : Rt$1[$$1].mediaBox.topRightY - Rt$1[$$1].mediaBox.bottomLeftY - U$1(t);
	}, rn = y$1.__private__.getHorizontalCoordinateString = y$1.getHorizontalCoordinateString = function(t) {
		return B$1(en(t));
	}, an = y$1.__private__.getVerticalCoordinateString = y$1.getVerticalCoordinateString = function(t) {
		return B$1(nn(t));
	}, on = e.strokeColor || "0 G";
	y$1.__private__.getStrokeColor = y$1.getDrawColor = function() {
		return ee$1(on);
	}, y$1.__private__.setStrokeColor = y$1.setDrawColor = function(t, e$1, n$1, r$1) {
		return on = ne$1({
			ch1: t,
			ch2: e$1,
			ch3: n$1,
			ch4: r$1,
			pdfColorType: "draw",
			precision: 2
		}), lt$1(on), this;
	};
	var sn = e.fillColor || "0 g";
	y$1.__private__.getFillColor = y$1.getFillColor = function() {
		return ee$1(sn);
	}, y$1.__private__.setFillColor = y$1.setFillColor = function(t, e$1, n$1, r$1) {
		return sn = ne$1({
			ch1: t,
			ch2: e$1,
			ch3: n$1,
			ch4: r$1,
			pdfColorType: "fill",
			precision: 2
		}), lt$1(sn), this;
	};
	var un = e.textColor || "0 g", cn = y$1.__private__.getTextColor = y$1.getTextColor = function() {
		return ee$1(un);
	};
	y$1.__private__.setTextColor = y$1.setTextColor = function(t, e$1, n$1, r$1) {
		return un = ne$1({
			ch1: t,
			ch2: e$1,
			ch3: n$1,
			ch4: r$1,
			pdfColorType: "text",
			precision: 3
		}), this;
	};
	var ln$1 = e.charSpace, hn = y$1.__private__.getCharSpace = y$1.getCharSpace = function() {
		return parseFloat(ln$1 || 0);
	};
	y$1.__private__.setCharSpace = y$1.setCharSpace = function(t) {
		if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
		return ln$1 = t, this;
	};
	var fn = 0;
	y$1.CapJoinStyles = {
		0: 0,
		butt: 0,
		but: 0,
		miter: 0,
		1: 1,
		round: 1,
		rounded: 1,
		circle: 1,
		2: 2,
		projecting: 2,
		project: 2,
		square: 2,
		bevel: 2
	}, y$1.__private__.setLineCap = y$1.setLineCap = function(t) {
		var e$1 = y$1.CapJoinStyles[t];
		if (void 0 === e$1) throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
		return fn = e$1, lt$1(e$1 + " J"), this;
	};
	var dn = 0;
	y$1.__private__.setLineJoin = y$1.setLineJoin = function(t) {
		var e$1 = y$1.CapJoinStyles[t];
		if (void 0 === e$1) throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
		return dn = e$1, lt$1(e$1 + " j"), this;
	}, y$1.__private__.setLineMiterLimit = y$1.__private__.setMiterLimit = y$1.setLineMiterLimit = y$1.setMiterLimit = function(t) {
		if (t = t || 0, isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
		return lt$1(B$1(U$1(t)) + " M"), this;
	}, y$1.GState = O, y$1.setGState = function(t) {
		(t = "string" == typeof t ? Bt$1[Mt$1[t]] : pn(null, t)).equals(qt$1) || (lt$1("/" + t.id + " gs"), qt$1 = t);
	};
	var pn = function(t, e$1) {
		if (!t || !Mt$1[t]) {
			var n$1 = !1;
			for (var r$1 in Bt$1) if (Bt$1.hasOwnProperty(r$1) && Bt$1[r$1].equals(e$1)) {
				n$1 = !0;
				break;
			}
			if (n$1) e$1 = Bt$1[r$1];
			else {
				var i$2 = "GS" + (Object.keys(Bt$1).length + 1).toString(10);
				Bt$1[i$2] = e$1, e$1.id = i$2;
			}
			return t && (Mt$1[t] = e$1.id), Dt$1.publish("addGState", e$1), e$1;
		}
	};
	y$1.addGState = function(t, e$1) {
		return pn(t, e$1), this;
	}, y$1.saveGraphicsState = function() {
		return lt$1("q"), jt$1.push({
			key: At$1,
			size: pt$1,
			color: un
		}), this;
	}, y$1.restoreGraphicsState = function() {
		lt$1("Q");
		var t = jt$1.pop();
		return At$1 = t.key, pt$1 = t.size, un = t.color, qt$1 = null, this;
	}, y$1.setCurrentTransformationMatrix = function(t) {
		return lt$1(t.toString() + " cm"), this;
	}, y$1.comment = function(t) {
		return lt$1("#" + t), this;
	};
	var gn = function(t, e$1) {
		var n$1 = t || 0;
		Object.defineProperty(this, "x", {
			enumerable: !0,
			get: function() {
				return n$1;
			},
			set: function(t$1) {
				isNaN(t$1) || (n$1 = parseFloat(t$1));
			}
		});
		var r$1 = e$1 || 0;
		Object.defineProperty(this, "y", {
			enumerable: !0,
			get: function() {
				return r$1;
			},
			set: function(t$1) {
				isNaN(t$1) || (r$1 = parseFloat(t$1));
			}
		});
		var i$2 = "pt";
		return Object.defineProperty(this, "type", {
			enumerable: !0,
			get: function() {
				return i$2;
			},
			set: function(t$1) {
				i$2 = t$1.toString();
			}
		}), this;
	}, mn = function(t, e$1, n$1, r$1) {
		gn.call(this, t, e$1), this.type = "rect";
		var i$2 = n$1 || 0;
		Object.defineProperty(this, "w", {
			enumerable: !0,
			get: function() {
				return i$2;
			},
			set: function(t$1) {
				isNaN(t$1) || (i$2 = parseFloat(t$1));
			}
		});
		var a$2 = r$1 || 0;
		return Object.defineProperty(this, "h", {
			enumerable: !0,
			get: function() {
				return a$2;
			},
			set: function(t$1) {
				isNaN(t$1) || (a$2 = parseFloat(t$1));
			}
		}), this;
	}, vn = function() {
		this.page = Et$1, this.currentPage = $$1, this.pages = ot$1.slice(0), this.pagesContext = Rt$1.slice(0), this.x = _t$1, this.y = Pt$1, this.matrix = kt$1, this.width = wn($$1), this.height = Ln($$1), this.outputDestination = ut$1, this.id = "", this.objectNumber = -1;
	};
	vn.prototype.restore = function() {
		Et$1 = this.page, $$1 = this.currentPage, Rt$1 = this.pagesContext, ot$1 = this.pages, _t$1 = this.x, Pt$1 = this.y, kt$1 = this.matrix, Nn($$1, this.width), xn($$1, this.height), ut$1 = this.outputDestination;
	};
	var bn = function(t, e$1, n$1, r$1, i$2) {
		Ht$1.push(new vn()), Et$1 = $$1 = 0, ot$1 = [], _t$1 = t, Pt$1 = e$1, kt$1 = i$2, me$1([n$1, r$1]);
	};
	for (var yn in y$1.beginFormObject = function(t, e$1, n$1, r$1, i$2) {
		return bn(t, e$1, n$1, r$1, i$2), this;
	}, y$1.endFormObject = function(t) {
		return function(t$1) {
			if (Ut$1[t$1]) Ht$1.pop().restore();
			else {
				var e$1 = new vn(), n$1 = "Xo" + (Object.keys(zt$1).length + 1).toString(10);
				e$1.id = n$1, Ut$1[t$1] = n$1, zt$1[n$1] = e$1, Dt$1.publish("addFormObject", e$1), Ht$1.pop().restore();
			}
		}(t), this;
	}, y$1.doFormObject = function(t, e$1) {
		var n$1 = zt$1[Ut$1[t]];
		return lt$1("q"), lt$1(e$1.toString() + " cm"), lt$1("/" + n$1.id + " Do"), lt$1("Q"), this;
	}, y$1.getFormObject = function(t) {
		var e$1 = zt$1[Ut$1[t]];
		return {
			x: e$1.x,
			y: e$1.y,
			width: e$1.width,
			height: e$1.height,
			matrix: e$1.matrix
		};
	}, y$1.save = function(t, e$1) {
		return t = t || "generated.pdf", (e$1 = e$1 || {}).returnPromise = e$1.returnPromise || !1, !1 === e$1.returnPromise ? (l(ke$1(Pe$1()), t), "function" == typeof l.unload && i.setTimeout && setTimeout(l.unload, 911), this) : new Promise(function(e$2, n$1) {
			try {
				var r$1 = l(ke$1(Pe$1()), t);
				"function" == typeof l.unload && i.setTimeout && setTimeout(l.unload, 911), e$2(r$1);
			} catch (a$2) {
				n$1(a$2.message);
			}
		});
	}, E.API) E.API.hasOwnProperty(yn) && ("events" === yn && E.API.events.length ? function(t, e$1) {
		var n$1, r$1, i$2;
		for (i$2 = e$1.length - 1; -1 !== i$2; i$2--) n$1 = e$1[i$2][0], r$1 = e$1[i$2][1], t.subscribe.apply(t, [n$1].concat("function" == typeof r$1 ? [r$1] : r$1));
	}(Dt$1, E.API.events) : y$1[yn] = E.API[yn]);
	function wn(t) {
		return Rt$1[t].mediaBox.topRightX - Rt$1[t].mediaBox.bottomLeftX;
	}
	function Nn(t, e$1) {
		Rt$1[t].mediaBox.topRightX = e$1 + Rt$1[t].mediaBox.bottomLeftX;
	}
	function Ln(t) {
		return Rt$1[t].mediaBox.topRightY - Rt$1[t].mediaBox.bottomLeftY;
	}
	function xn(t, e$1) {
		Rt$1[t].mediaBox.topRightY = e$1 + Rt$1[t].mediaBox.bottomLeftY;
	}
	var An = y$1.getPageWidth = function(t) {
		return wn(t = t || $$1) / St$1;
	}, Sn = y$1.setPageWidth = function(t, e$1) {
		Nn(t, e$1 * St$1);
	}, _n = y$1.getPageHeight = function(t) {
		return Ln(t = t || $$1) / St$1;
	}, Pn = y$1.setPageHeight = function(t, e$1) {
		xn(t, e$1 * St$1);
	};
	return y$1.internal = {
		pdfEscape: ge$1,
		getStyle: Ee,
		getFont: Ye,
		getFontSize: mt$1,
		getCharSpace: hn,
		getTextColor: cn,
		getLineHeight: $e,
		getLineHeightFactor: tn,
		getLineWidth: Ke,
		write: ht$1,
		getHorizontalCoordinate: en,
		getVerticalCoordinate: nn,
		getCoordinateString: rn,
		getVerticalCoordinateString: an,
		collections: {},
		newObject: Xt$1,
		newAdditionalObject: $t$1,
		newObjectDeferred: Kt$1,
		newObjectDeferredBegin: Zt$1,
		getFilters: re$1,
		putStream: ie$1,
		events: Dt$1,
		scaleFactor: St$1,
		pageSize: {
			getWidth: function() {
				return An($$1);
			},
			setWidth: function(t) {
				Sn($$1, t);
			},
			getHeight: function() {
				return _n($$1);
			},
			setHeight: function(t) {
				Pn($$1, t);
			}
		},
		encryptionOptions: m$1,
		encryption: je$1,
		getEncryptor: function(t) {
			return null !== m$1 ? je$1.encryptor(t, 0) : function(t$1) {
				return t$1;
			};
		},
		output: Fe$1,
		getNumberOfPages: we$1,
		pages: ot$1,
		out: lt$1,
		f2: T$1,
		f3: z$1,
		getPageInfo: Ce,
		getPageInfoByObjId: Oe,
		getCurrentPageInfo: Be,
		getPDFVersion: N$1,
		Point: gn,
		Rectangle: mn,
		Matrix: Wt$1,
		hasHotfix: Ie$1
	}, Object.defineProperty(y$1.internal.pageSize, "width", {
		get: function() {
			return An($$1);
		},
		set: function(t) {
			Sn($$1, t);
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(y$1.internal.pageSize, "height", {
		get: function() {
			return _n($$1);
		},
		set: function(t) {
			Pn($$1, t);
		},
		enumerable: !0,
		configurable: !0
	}), function(t) {
		for (var e$1 = 0, n$1 = dt$1.length; e$1 < n$1; e$1++) {
			var r$1 = pe$1.call(this, t[e$1][0], t[e$1][1], t[e$1][2], dt$1[e$1][3], !0);
			!1 === v$1 && (b$1[r$1] = !0);
			var i$2 = t[e$1][0].split("-");
			de$1({
				id: r$1,
				fontName: i$2[0],
				fontStyle: i$2[1] || ""
			});
		}
		Dt$1.publish("addFonts", {
			fonts: Ft$1,
			dictionary: It$1
		});
	}.call(y$1, dt$1), At$1 = "F1", ve$1(s$1, r), Dt$1.publish("initialized"), y$1;
}
I.prototype.lsbFirstWord = function(t) {
	return String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255);
}, I.prototype.toHexString = function(t) {
	return t.split("").map(function(t$1) {
		return ("0" + (255 & t$1.charCodeAt(0)).toString(16)).slice(-2);
	}).join("");
}, I.prototype.hexToBytes = function(t) {
	for (var e = [], n = 0; n < t.length; n += 2) e.push(String.fromCharCode(parseInt(t.substr(n, 2), 16)));
	return e.join("");
}, I.prototype.processOwnerPassword = function(t, e) {
	return k(S(e).substr(0, 5), t);
}, I.prototype.encryptor = function(t, e) {
	var n = S(this.encryptionKey + String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
	return function(t$1) {
		return k(n, t$1);
	};
}, O.prototype.equals = function(e) {
	var n, r = "id,objectNumber,equals";
	if (!e || _typeof(e) !== _typeof(this)) return !1;
	var i$2 = 0;
	for (n in this) if (!(r.indexOf(n) >= 0)) {
		if (this.hasOwnProperty(n) && !e.hasOwnProperty(n)) return !1;
		if (this[n] !== e[n]) return !1;
		i$2++;
	}
	for (n in e) e.hasOwnProperty(n) && r.indexOf(n) < 0 && i$2--;
	return 0 === i$2;
}, E.API = { events: [] }, E.version = "3.0.3";
var R = E.API, D = 1, T = function(t) {
	return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, z = function(t) {
	return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, U = function(t) {
	return t.toFixed(2);
}, H = function(t) {
	return t.toFixed(5);
};
R.__acroform__ = {};
var W = function(t, e) {
	t.prototype = Object.create(e.prototype), t.prototype.constructor = t;
}, V = function(t) {
	return t * D;
}, G = function(t) {
	var e = new ct(), n = xt.internal.getHeight(t) || 0, r = xt.internal.getWidth(t) || 0;
	return e.BBox = [
		0,
		0,
		Number(U(r)),
		Number(U(n))
	], e;
}, Y = R.__acroform__.setBit = function(t, e) {
	if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
	return t | 1 << e;
}, J = R.__acroform__.clearBit = function(t, e) {
	if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
	return t & ~(1 << e);
}, X = R.__acroform__.getBit = function(t, e) {
	if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
	return t & 1 << e ? 1 : 0;
}, K = R.__acroform__.getBitForPdf = function(t, e) {
	if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
	return X(t, e - 1);
}, Z = R.__acroform__.setBitForPdf = function(t, e) {
	if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
	return Y(t, e - 1);
}, $ = R.__acroform__.clearBitForPdf = function(t, e) {
	if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
	return J(t, e - 1);
}, Q = R.__acroform__.calculateCoordinates = function(t, e) {
	var n = e.internal.getHorizontalCoordinate, r = e.internal.getVerticalCoordinate, i$2 = t[0], a$1 = t[1], o$1 = t[2], s$1 = t[3], u$1 = {};
	return u$1.lowerLeft_X = n(i$2) || 0, u$1.lowerLeft_Y = r(a$1 + s$1) || 0, u$1.upperRight_X = n(i$2 + o$1) || 0, u$1.upperRight_Y = r(a$1) || 0, [
		Number(U(u$1.lowerLeft_X)),
		Number(U(u$1.lowerLeft_Y)),
		Number(U(u$1.upperRight_X)),
		Number(U(u$1.upperRight_Y))
	];
}, tt = function(t) {
	if (t.appearanceStreamContent) return t.appearanceStreamContent;
	if (t.V || t.DV) {
		var e = [], n = t._V || t.DV, r = et(t, n), i$2 = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
		e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(t.scope.__private__.encodeColorString(t.color)), e.push("/" + i$2 + " " + U(r.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(r.text), e.push("ET"), e.push("Q"), e.push("EMC");
		var a$1 = G(t);
		return a$1.scope = t.scope, a$1.stream = e.join("\n"), a$1;
	}
}, et = function(t, e) {
	var n = 0 === t.fontSize ? t.maxFontSize : t.fontSize, r = {
		text: "",
		fontSize: ""
	}, i$2 = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" ");
	i$2 = t.multiline ? i$2.map(function(t$1) {
		return t$1.split("\n");
	}) : i$2.map(function(t$1) {
		return [t$1];
	});
	var a$1 = n, o$1 = xt.internal.getHeight(t) || 0;
	o$1 = o$1 < 0 ? -o$1 : o$1;
	var s$1 = xt.internal.getWidth(t) || 0;
	s$1 = s$1 < 0 ? -s$1 : s$1;
	var u$1 = function(e$1, n$1, r$1) {
		if (e$1 + 1 < i$2.length) {
			var a$2 = n$1 + " " + i$2[e$1 + 1][0];
			return nt(a$2, t, r$1).width <= s$1 - 4;
		}
		return !1;
	};
	a$1++;
	t: for (; a$1 > 0;) {
		e = "", a$1--;
		var c$1, l$1, h$1 = nt("3", t, a$1).height, f$1 = t.multiline ? o$1 - a$1 : (o$1 - h$1) / 2, d$1 = f$1 += 2, p$1 = 0, g$1 = 0, m$1 = 0;
		if (a$1 <= 0) {
			e = "(...) Tj\n", e += "% Width of Text: " + nt(e, t, a$1 = 12).width + ", FieldWidth:" + s$1 + "\n";
			break;
		}
		for (var v$1 = "", b$1 = 0, y$1 = 0; y$1 < i$2.length; y$1++) if (i$2.hasOwnProperty(y$1)) {
			var w$1 = !1;
			if (1 !== i$2[y$1].length && m$1 !== i$2[y$1].length - 1) {
				if ((h$1 + 2) * (b$1 + 2) + 2 > o$1) continue t;
				v$1 += i$2[y$1][m$1], w$1 = !0, g$1 = y$1, y$1--;
			} else {
				v$1 = " " == (v$1 += i$2[y$1][m$1] + " ").substr(v$1.length - 1) ? v$1.substr(0, v$1.length - 1) : v$1;
				var N$1 = parseInt(y$1), L$1 = u$1(N$1, v$1, a$1), x$2 = y$1 >= i$2.length - 1;
				if (L$1 && !x$2) {
					v$1 += " ", m$1 = 0;
					continue;
				}
				if (L$1 || x$2) {
					if (x$2) g$1 = N$1;
					else if (t.multiline && (h$1 + 2) * (b$1 + 2) + 2 > o$1) continue t;
				} else {
					if (!t.multiline) continue t;
					if ((h$1 + 2) * (b$1 + 2) + 2 > o$1) continue t;
					g$1 = N$1;
				}
			}
			for (var A$1 = "", S$1 = p$1; S$1 <= g$1; S$1++) {
				var _$1 = i$2[S$1];
				if (t.multiline) {
					if (S$1 === g$1) {
						A$1 += _$1[m$1] + " ", m$1 = (m$1 + 1) % _$1.length;
						continue;
					}
					if (S$1 === p$1) {
						A$1 += _$1[_$1.length - 1] + " ";
						continue;
					}
				}
				A$1 += _$1[0] + " ";
			}
			switch (A$1 = " " == A$1.substr(A$1.length - 1) ? A$1.substr(0, A$1.length - 1) : A$1, l$1 = nt(A$1, t, a$1).width, t.textAlign) {
				case "right":
					c$1 = s$1 - l$1 - 2;
					break;
				case "center":
					c$1 = (s$1 - l$1) / 2;
					break;
				default: c$1 = 2;
			}
			e += U(c$1) + " " + U(d$1) + " Td\n", e += "(" + T(A$1) + ") Tj\n", e += -U(c$1) + " 0 Td\n", d$1 = -(a$1 + 2), l$1 = 0, p$1 = w$1 ? g$1 : g$1 + 1, b$1++, v$1 = "";
		}
		break;
	}
	return r.text = e, r.fontSize = a$1, r;
}, nt = function(t, e, n) {
	var r = e.scope.internal.getFont(e.fontName, e.fontStyle), i$2 = e.scope.getStringUnitWidth(t, {
		font: r,
		fontSize: parseFloat(n),
		charSpace: 0
	}) * parseFloat(n);
	return {
		height: e.scope.getStringUnitWidth("3", {
			font: r,
			fontSize: parseFloat(n),
			charSpace: 0
		}) * parseFloat(n) * 1.5,
		width: i$2
	};
}, rt = {
	fields: [],
	xForms: [],
	acroFormDictionaryRoot: null,
	printedOut: !1,
	internal: null,
	isInitialized: !1
}, it = function(t, e) {
	var n = {
		type: "reference",
		object: t
	};
	void 0 === e.internal.getPageInfo(t.page).pageContext.annotations.find(function(t$1) {
		return t$1.type === n.type && t$1.object === n.object;
	}) && e.internal.getPageInfo(t.page).pageContext.annotations.push(n);
}, at = function(e, n) {
	if (n.scope = e, void 0 !== e.internal && (void 0 === e.internal.acroformPlugin || !1 === e.internal.acroformPlugin.isInitialized)) {
		if (ht.FieldNum = 0, e.internal.acroformPlugin = JSON.parse(JSON.stringify(rt)), e.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
		D = e.internal.scaleFactor, e.internal.acroformPlugin.acroFormDictionaryRoot = new lt(), e.internal.acroformPlugin.acroFormDictionaryRoot.scope = e, e.internal.acroformPlugin.acroFormDictionaryRoot._eventID = e.internal.events.subscribe("postPutResources", function() {
			(function(t) {
				t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = !0;
			})(e);
		}), e.internal.events.subscribe("buildDocument", function() {
			(function(t) {
				t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
				var e$1 = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
				for (var n$1 in e$1) if (e$1.hasOwnProperty(n$1)) {
					var r = e$1[n$1];
					r.objId = void 0, r.hasAnnotation && it(r, t);
				}
			})(e);
		}), e.internal.events.subscribe("putCatalog", function() {
			(function(t) {
				if (void 0 === t.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
				t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
			})(e);
		}), e.internal.events.subscribe("postPutPages", function(n$1) {
			(function(e$1, n$2) {
				var r = !e$1;
				for (var i$2 in e$1 || (n$2.internal.newObjectDeferredBegin(n$2.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), n$2.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), e$1 = e$1 || n$2.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (e$1.hasOwnProperty(i$2)) {
					var a$1 = e$1[i$2], o$1 = [], s$1 = a$1.Rect;
					if (a$1.Rect && (a$1.Rect = Q(a$1.Rect, n$2)), n$2.internal.newObjectDeferredBegin(a$1.objId, !0), a$1.DA = xt.createDefaultAppearanceStream(a$1), "object" === _typeof(a$1) && "function" == typeof a$1.getKeyValueListForStream && (o$1 = a$1.getKeyValueListForStream()), a$1.Rect = s$1, a$1.hasAppearanceStream && !a$1.appearanceStreamContent) {
						var u$1 = tt(a$1);
						o$1.push({
							key: "AP",
							value: "<</N " + u$1 + ">>"
						}), n$2.internal.acroformPlugin.xForms.push(u$1);
					}
					if (a$1.appearanceStreamContent) {
						var c$1 = "";
						for (var l$1 in a$1.appearanceStreamContent) if (a$1.appearanceStreamContent.hasOwnProperty(l$1)) {
							var h$1 = a$1.appearanceStreamContent[l$1];
							if (c$1 += "/" + l$1 + " ", c$1 += "<<", Object.keys(h$1).length >= 1 || Array.isArray(h$1)) {
								for (var i$2 in h$1) if (h$1.hasOwnProperty(i$2)) {
									var f$1 = h$1[i$2];
									"function" == typeof f$1 && (f$1 = f$1.call(n$2, a$1)), c$1 += "/" + i$2 + " " + f$1 + " ", n$2.internal.acroformPlugin.xForms.indexOf(f$1) >= 0 || n$2.internal.acroformPlugin.xForms.push(f$1);
								}
							} else "function" == typeof (f$1 = h$1) && (f$1 = f$1.call(n$2, a$1)), c$1 += "/" + i$2 + " " + f$1, n$2.internal.acroformPlugin.xForms.indexOf(f$1) >= 0 || n$2.internal.acroformPlugin.xForms.push(f$1);
							c$1 += ">>";
						}
						o$1.push({
							key: "AP",
							value: "<<\n" + c$1 + ">>"
						});
					}
					n$2.internal.putStream({
						additionalKeyValues: o$1,
						objectId: a$1.objId
					}), n$2.internal.out("endobj");
				}
				r && function(e$2, n$3) {
					for (var r$1 in e$2) if (e$2.hasOwnProperty(r$1)) {
						var i$3 = r$1, a$2 = e$2[r$1];
						n$3.internal.newObjectDeferredBegin(a$2.objId, !0), "object" === _typeof(a$2) && "function" == typeof a$2.putStream && a$2.putStream(), delete e$2[i$3];
					}
				}(n$2.internal.acroformPlugin.xForms, n$2);
			})(n$1, e);
		}), e.internal.acroformPlugin.isInitialized = !0;
	}
}, ot = R.__acroform__.arrayToPdfArray = function(e, n, r) {
	var i$2 = function(t) {
		return t;
	};
	if (Array.isArray(e)) {
		for (var a$1 = "[", o$1 = 0; o$1 < e.length; o$1++) switch (0 !== o$1 && (a$1 += " "), _typeof(e[o$1])) {
			case "boolean":
			case "number":
			case "object":
				a$1 += e[o$1].toString();
				break;
			case "string": "/" !== e[o$1].substr(0, 1) ? (void 0 !== n && r && (i$2 = r.internal.getEncryptor(n)), a$1 += "(" + T(i$2(e[o$1].toString())) + ")") : a$1 += e[o$1].toString();
		}
		return a$1 + "]";
	}
	throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, st = function(t, e, n) {
	var r = function(t$1) {
		return t$1;
	};
	return void 0 !== e && n && (r = n.internal.getEncryptor(e)), (t = t || "").toString(), "(" + T(r(t)) + ")";
}, ut = function() {
	this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
		get: function() {
			if (void 0 === this._objId) {
				if (void 0 === this.scope) return;
				this._objId = this.scope.internal.newObjectDeferred();
			}
			return this._objId;
		},
		set: function(t) {
			this._objId = t;
		}
	}), Object.defineProperty(this, "scope", {
		value: this._scope,
		writable: !0
	});
};
ut.prototype.toString = function() {
	return this.objId + " 0 R";
}, ut.prototype.putStream = function() {
	var t = this.getKeyValueListForStream();
	this.scope.internal.putStream({
		data: this.stream,
		additionalKeyValues: t,
		objectId: this.objId
	}), this.scope.internal.out("endobj");
}, ut.prototype.getKeyValueListForStream = function() {
	var t = [], e = Object.getOwnPropertyNames(this).filter(function(t$1) {
		return "content" != t$1 && "appearanceStreamContent" != t$1 && "scope" != t$1 && "objId" != t$1 && "_" != t$1.substring(0, 1);
	});
	for (var n in e) if (!1 === Object.getOwnPropertyDescriptor(this, e[n]).configurable) {
		var r = e[n], i$2 = this[r];
		i$2 && (Array.isArray(i$2) ? t.push({
			key: r,
			value: ot(i$2, this.objId, this.scope)
		}) : i$2 instanceof ut ? (i$2.scope = this.scope, t.push({
			key: r,
			value: i$2.objId + " 0 R"
		})) : "function" != typeof i$2 && t.push({
			key: r,
			value: i$2
		}));
	}
	return t;
};
var ct = function() {
	ut.call(this), Object.defineProperty(this, "Type", {
		value: "/XObject",
		configurable: !1,
		writable: !0
	}), Object.defineProperty(this, "Subtype", {
		value: "/Form",
		configurable: !1,
		writable: !0
	}), Object.defineProperty(this, "FormType", {
		value: 1,
		configurable: !1,
		writable: !0
	});
	var t, e = [];
	Object.defineProperty(this, "BBox", {
		configurable: !1,
		get: function() {
			return e;
		},
		set: function(t$1) {
			e = t$1;
		}
	}), Object.defineProperty(this, "Resources", {
		value: "2 0 R",
		configurable: !1,
		writable: !0
	}), Object.defineProperty(this, "stream", {
		enumerable: !1,
		configurable: !0,
		set: function(e$1) {
			t = e$1.trim();
		},
		get: function() {
			return t || null;
		}
	});
};
W(ct, ut);
var lt = function() {
	ut.call(this);
	var t, e = [];
	Object.defineProperty(this, "Kids", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return e.length > 0 ? e : void 0;
		}
	}), Object.defineProperty(this, "Fields", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return e;
		}
	}), Object.defineProperty(this, "DA", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			if (t) {
				var e$1 = function(t$1) {
					return t$1;
				};
				return this.scope && (e$1 = this.scope.internal.getEncryptor(this.objId)), "(" + T(e$1(t)) + ")";
			}
		},
		set: function(e$1) {
			t = e$1;
		}
	});
};
W(lt, ut);
var ht = function t() {
	ut.call(this);
	var e = 4;
	Object.defineProperty(this, "F", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return e;
		},
		set: function(t$1) {
			if (isNaN(t$1)) throw new Error("Invalid value \"" + t$1 + "\" for attribute F supplied.");
			e = t$1;
		}
	}), Object.defineProperty(this, "showWhenPrinted", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(e, 3));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.F = Z(e, 3) : this.F = $(e, 3);
		}
	});
	var n = 0;
	Object.defineProperty(this, "Ff", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return n;
		},
		set: function(t$1) {
			if (isNaN(t$1)) throw new Error("Invalid value \"" + t$1 + "\" for attribute Ff supplied.");
			n = t$1;
		}
	});
	var r = [];
	Object.defineProperty(this, "Rect", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			if (0 !== r.length) return r;
		},
		set: function(t$1) {
			r = void 0 !== t$1 ? t$1 : [];
		}
	}), Object.defineProperty(this, "x", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !r || isNaN(r[0]) ? 0 : r[0];
		},
		set: function(t$1) {
			r[0] = t$1;
		}
	}), Object.defineProperty(this, "y", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !r || isNaN(r[1]) ? 0 : r[1];
		},
		set: function(t$1) {
			r[1] = t$1;
		}
	}), Object.defineProperty(this, "width", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !r || isNaN(r[2]) ? 0 : r[2];
		},
		set: function(t$1) {
			r[2] = t$1;
		}
	}), Object.defineProperty(this, "height", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return !r || isNaN(r[3]) ? 0 : r[3];
		},
		set: function(t$1) {
			r[3] = t$1;
		}
	});
	var i$2 = "";
	Object.defineProperty(this, "FT", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return i$2;
		},
		set: function(t$1) {
			switch (t$1) {
				case "/Btn":
				case "/Tx":
				case "/Ch":
				case "/Sig":
					i$2 = t$1;
					break;
				default: throw new Error("Invalid value \"" + t$1 + "\" for attribute FT supplied.");
			}
		}
	});
	var a$1 = null;
	Object.defineProperty(this, "T", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			if (!a$1 || a$1.length < 1) {
				if (this instanceof yt) return;
				a$1 = "FieldObject" + t.FieldNum++;
			}
			var e$1 = function(t$1) {
				return t$1;
			};
			return this.scope && (e$1 = this.scope.internal.getEncryptor(this.objId)), "(" + T(e$1(a$1)) + ")";
		},
		set: function(t$1) {
			a$1 = t$1.toString();
		}
	}), Object.defineProperty(this, "fieldName", {
		configurable: !0,
		enumerable: !0,
		get: function() {
			return a$1;
		},
		set: function(t$1) {
			a$1 = t$1;
		}
	});
	var o$1 = "helvetica";
	Object.defineProperty(this, "fontName", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return o$1;
		},
		set: function(t$1) {
			o$1 = t$1;
		}
	});
	var s$1 = "normal";
	Object.defineProperty(this, "fontStyle", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return s$1;
		},
		set: function(t$1) {
			s$1 = t$1;
		}
	});
	var u$1 = 0;
	Object.defineProperty(this, "fontSize", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return u$1;
		},
		set: function(t$1) {
			u$1 = t$1;
		}
	});
	var c$1 = void 0;
	Object.defineProperty(this, "maxFontSize", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return void 0 === c$1 ? 50 / D : c$1;
		},
		set: function(t$1) {
			c$1 = t$1;
		}
	});
	var l$1 = "black";
	Object.defineProperty(this, "color", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return l$1;
		},
		set: function(t$1) {
			l$1 = t$1;
		}
	});
	var h$1 = "/F1 0 Tf 0 g";
	Object.defineProperty(this, "DA", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			if (!(!h$1 || this instanceof yt || this instanceof Nt)) return st(h$1, this.objId, this.scope);
		},
		set: function(t$1) {
			t$1 = t$1.toString(), h$1 = t$1;
		}
	});
	var f$1 = null;
	Object.defineProperty(this, "DV", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			if (f$1) return this instanceof mt == 0 ? st(f$1, this.objId, this.scope) : f$1;
		},
		set: function(t$1) {
			t$1 = t$1.toString(), f$1 = this instanceof mt == 0 ? "(" === t$1.substr(0, 1) ? z(t$1.substr(1, t$1.length - 2)) : z(t$1) : t$1;
		}
	}), Object.defineProperty(this, "defaultValue", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return this instanceof mt == 1 ? z(f$1.substr(1, f$1.length - 1)) : f$1;
		},
		set: function(t$1) {
			t$1 = t$1.toString(), f$1 = this instanceof mt == 1 ? "/" + t$1 : t$1;
		}
	});
	var d$1 = null;
	Object.defineProperty(this, "_V", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			if (d$1) return d$1;
		},
		set: function(t$1) {
			this.V = t$1;
		}
	}), Object.defineProperty(this, "V", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			if (d$1) return this instanceof mt == 0 ? st(d$1, this.objId, this.scope) : d$1;
		},
		set: function(t$1) {
			t$1 = t$1.toString(), d$1 = this instanceof mt == 0 ? "(" === t$1.substr(0, 1) ? z(t$1.substr(1, t$1.length - 2)) : z(t$1) : t$1;
		}
	}), Object.defineProperty(this, "value", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return this instanceof mt == 1 ? z(d$1.substr(1, d$1.length - 1)) : d$1;
		},
		set: function(t$1) {
			t$1 = t$1.toString(), d$1 = this instanceof mt == 1 ? "/" + t$1 : t$1;
		}
	}), Object.defineProperty(this, "hasAnnotation", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return this.Rect;
		}
	}), Object.defineProperty(this, "Type", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return this.hasAnnotation ? "/Annot" : null;
		}
	}), Object.defineProperty(this, "Subtype", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return this.hasAnnotation ? "/Widget" : null;
		}
	});
	var p$1, g$1 = !1;
	Object.defineProperty(this, "hasAppearanceStream", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return g$1;
		},
		set: function(t$1) {
			t$1 = Boolean(t$1), g$1 = t$1;
		}
	}), Object.defineProperty(this, "page", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			if (p$1) return p$1;
		},
		set: function(t$1) {
			p$1 = t$1;
		}
	}), Object.defineProperty(this, "readOnly", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 1));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 1) : this.Ff = $(this.Ff, 1);
		}
	}), Object.defineProperty(this, "required", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 2));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 2) : this.Ff = $(this.Ff, 2);
		}
	}), Object.defineProperty(this, "noExport", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 3));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 3) : this.Ff = $(this.Ff, 3);
		}
	});
	var m$1 = null;
	Object.defineProperty(this, "Q", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			if (null !== m$1) return m$1;
		},
		set: function(t$1) {
			if (-1 === [
				0,
				1,
				2
			].indexOf(t$1)) throw new Error("Invalid value \"" + t$1 + "\" for attribute Q supplied.");
			m$1 = t$1;
		}
	}), Object.defineProperty(this, "textAlign", {
		get: function() {
			var t$1;
			switch (m$1) {
				case 0:
				default:
					t$1 = "left";
					break;
				case 1:
					t$1 = "center";
					break;
				case 2: t$1 = "right";
			}
			return t$1;
		},
		configurable: !0,
		enumerable: !0,
		set: function(t$1) {
			switch (t$1) {
				case "right":
				case 2:
					m$1 = 2;
					break;
				case "center":
				case 1:
					m$1 = 1;
					break;
				default: m$1 = 0;
			}
		}
	});
};
W(ht, ut);
var ft = function() {
	ht.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
	var t = 0;
	Object.defineProperty(this, "TI", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return t;
		},
		set: function(e$1) {
			t = e$1;
		}
	}), Object.defineProperty(this, "topIndex", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return t;
		},
		set: function(e$1) {
			t = e$1;
		}
	});
	var e = [];
	Object.defineProperty(this, "Opt", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return ot(e, this.objId, this.scope);
		},
		set: function(t$1) {
			var n, r = [];
			"string" == typeof (n = t$1) && (r = function(t$2, e$1, n$1) {
				n$1 || (n$1 = 1);
				for (var r$1, i$2 = []; r$1 = e$1.exec(t$2);) i$2.push(r$1[n$1]);
				return i$2;
			}(n, /\((.*?)\)/g)), e = r;
		}
	}), this.getOptions = function() {
		return e;
	}, this.setOptions = function(t$1) {
		e = t$1, this.sort && e.sort();
	}, this.addOption = function(t$1) {
		t$1 = (t$1 = t$1 || "").toString(), e.push(t$1), this.sort && e.sort();
	}, this.removeOption = function(t$1, n) {
		for (n = n || !1, t$1 = (t$1 = t$1 || "").toString(); -1 !== e.indexOf(t$1) && (e.splice(e.indexOf(t$1), 1), !1 !== n););
	}, Object.defineProperty(this, "combo", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 18));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 18) : this.Ff = $(this.Ff, 18);
		}
	}), Object.defineProperty(this, "edit", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 19));
		},
		set: function(t$1) {
			!0 === this.combo && (!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 19) : this.Ff = $(this.Ff, 19));
		}
	}), Object.defineProperty(this, "sort", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 20));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? (this.Ff = Z(this.Ff, 20), e.sort()) : this.Ff = $(this.Ff, 20);
		}
	}), Object.defineProperty(this, "multiSelect", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 22));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 22) : this.Ff = $(this.Ff, 22);
		}
	}), Object.defineProperty(this, "doNotSpellCheck", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 23));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 23) : this.Ff = $(this.Ff, 23);
		}
	}), Object.defineProperty(this, "commitOnSelChange", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 27));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 27) : this.Ff = $(this.Ff, 27);
		}
	}), this.hasAppearanceStream = !1;
};
W(ft, ht);
var dt = function() {
	ft.call(this), this.fontName = "helvetica", this.combo = !1;
};
W(dt, ft);
var pt = function() {
	dt.call(this), this.combo = !0;
};
W(pt, dt);
var gt = function() {
	pt.call(this), this.edit = !0;
};
W(gt, pt);
var mt = function() {
	ht.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 15));
		},
		set: function(t) {
			!0 === Boolean(t) ? this.Ff = Z(this.Ff, 15) : this.Ff = $(this.Ff, 15);
		}
	}), Object.defineProperty(this, "radio", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 16));
		},
		set: function(t) {
			!0 === Boolean(t) ? this.Ff = Z(this.Ff, 16) : this.Ff = $(this.Ff, 16);
		}
	}), Object.defineProperty(this, "pushButton", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 17));
		},
		set: function(t) {
			!0 === Boolean(t) ? this.Ff = Z(this.Ff, 17) : this.Ff = $(this.Ff, 17);
		}
	}), Object.defineProperty(this, "radioIsUnison", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 26));
		},
		set: function(t) {
			!0 === Boolean(t) ? this.Ff = Z(this.Ff, 26) : this.Ff = $(this.Ff, 26);
		}
	});
	var e, n = {};
	Object.defineProperty(this, "MK", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			var t = function(t$1) {
				return t$1;
			};
			if (this.scope && (t = this.scope.internal.getEncryptor(this.objId)), 0 !== Object.keys(n).length) {
				var e$1, r = [];
				for (e$1 in r.push("<<"), n) r.push("/" + e$1 + " (" + T(t(n[e$1])) + ")");
				return r.push(">>"), r.join("\n");
			}
		},
		set: function(e$1) {
			"object" === _typeof(e$1) && (n = e$1);
		}
	}), Object.defineProperty(this, "caption", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return n.CA || "";
		},
		set: function(t) {
			"string" == typeof t && (n.CA = t);
		}
	}), Object.defineProperty(this, "AS", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return e;
		},
		set: function(t) {
			e = t;
		}
	}), Object.defineProperty(this, "appearanceState", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return e.substr(1, e.length - 1);
		},
		set: function(t) {
			e = "/" + t;
		}
	});
};
W(mt, ht);
var vt = function() {
	mt.call(this), this.pushButton = !0;
};
W(vt, mt);
var bt = function() {
	mt.call(this), this.radio = !0, this.pushButton = !1;
	var t = [];
	Object.defineProperty(this, "Kids", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return t;
		},
		set: function(e) {
			t = void 0 !== e ? e : [];
		}
	});
};
W(bt, mt);
var yt = function() {
	var e, n;
	ht.call(this), Object.defineProperty(this, "Parent", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return e;
		},
		set: function(t) {
			e = t;
		}
	}), Object.defineProperty(this, "optionName", {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return n;
		},
		set: function(t) {
			n = t;
		}
	});
	var r, i$2 = {};
	Object.defineProperty(this, "MK", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			var t = function(t$1) {
				return t$1;
			};
			this.scope && (t = this.scope.internal.getEncryptor(this.objId));
			var e$1, n$1 = [];
			for (e$1 in n$1.push("<<"), i$2) n$1.push("/" + e$1 + " (" + T(t(i$2[e$1])) + ")");
			return n$1.push(">>"), n$1.join("\n");
		},
		set: function(e$1) {
			"object" === _typeof(e$1) && (i$2 = e$1);
		}
	}), Object.defineProperty(this, "caption", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return i$2.CA || "";
		},
		set: function(t) {
			"string" == typeof t && (i$2.CA = t);
		}
	}), Object.defineProperty(this, "AS", {
		enumerable: !1,
		configurable: !1,
		get: function() {
			return r;
		},
		set: function(t) {
			r = t;
		}
	}), Object.defineProperty(this, "appearanceState", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return r.substr(1, r.length - 1);
		},
		set: function(t) {
			r = "/" + t;
		}
	}), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = xt.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
W(yt, ht), bt.prototype.setAppearance = function(t) {
	if (!("createAppearanceStream" in t) || !("getCA" in t)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
	for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
		var n = this.Kids[e];
		n.appearanceStreamContent = t.createAppearanceStream(n.optionName), n.caption = t.getCA();
	}
}, bt.prototype.createOption = function(t) {
	var e = new yt();
	return e.Parent = this, e.optionName = t, this.Kids.push(e), At.call(this.scope, e), e;
};
var wt = function() {
	mt.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = xt.CheckBox.createAppearanceStream();
};
W(wt, mt);
var Nt = function() {
	ht.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 13));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 13) : this.Ff = $(this.Ff, 13);
		}
	}), Object.defineProperty(this, "fileSelect", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 21));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 21) : this.Ff = $(this.Ff, 21);
		}
	}), Object.defineProperty(this, "doNotSpellCheck", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 23));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 23) : this.Ff = $(this.Ff, 23);
		}
	}), Object.defineProperty(this, "doNotScroll", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 24));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 24) : this.Ff = $(this.Ff, 24);
		}
	}), Object.defineProperty(this, "comb", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 25));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 25) : this.Ff = $(this.Ff, 25);
		}
	}), Object.defineProperty(this, "richText", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 26));
		},
		set: function(t$1) {
			!0 === Boolean(t$1) ? this.Ff = Z(this.Ff, 26) : this.Ff = $(this.Ff, 26);
		}
	});
	var t = null;
	Object.defineProperty(this, "MaxLen", {
		enumerable: !0,
		configurable: !1,
		get: function() {
			return t;
		},
		set: function(e) {
			t = e;
		}
	}), Object.defineProperty(this, "maxLength", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return t;
		},
		set: function(e) {
			Number.isInteger(e) && (t = e);
		}
	}), Object.defineProperty(this, "hasAppearanceStream", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return this.V || this.DV;
		}
	});
};
W(Nt, ht);
var Lt = function() {
	Nt.call(this), Object.defineProperty(this, "password", {
		enumerable: !0,
		configurable: !0,
		get: function() {
			return Boolean(K(this.Ff, 14));
		},
		set: function(t) {
			!0 === Boolean(t) ? this.Ff = Z(this.Ff, 14) : this.Ff = $(this.Ff, 14);
		}
	}), this.password = !0;
};
W(Lt, Nt);
var xt = {
	CheckBox: {
		createAppearanceStream: function() {
			return {
				N: { On: xt.CheckBox.YesNormal },
				D: {
					On: xt.CheckBox.YesPushDown,
					Off: xt.CheckBox.OffPushDown
				}
			};
		},
		YesPushDown: function(t) {
			var e = G(t);
			e.scope = t.scope;
			var n = [], r = t.scope.internal.getFont(t.fontName, t.fontStyle).id, i$2 = t.scope.__private__.encodeColorString(t.color), a$1 = et(t, t.caption);
			return n.push("0.749023 g"), n.push("0 0 " + U(xt.internal.getWidth(t)) + " " + U(xt.internal.getHeight(t)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + r + " " + U(a$1.fontSize) + " Tf " + i$2), n.push("BT"), n.push(a$1.text), n.push("ET"), n.push("Q"), n.push("EMC"), e.stream = n.join("\n"), e;
		},
		YesNormal: function(t) {
			var e = G(t);
			e.scope = t.scope;
			var n = t.scope.internal.getFont(t.fontName, t.fontStyle).id, r = t.scope.__private__.encodeColorString(t.color), i$2 = [], a$1 = xt.internal.getHeight(t), o$1 = xt.internal.getWidth(t), s$1 = et(t, t.caption);
			return i$2.push("1 g"), i$2.push("0 0 " + U(o$1) + " " + U(a$1) + " re"), i$2.push("f"), i$2.push("q"), i$2.push("0 0 1 rg"), i$2.push("0 0 " + U(o$1 - 1) + " " + U(a$1 - 1) + " re"), i$2.push("W"), i$2.push("n"), i$2.push("0 g"), i$2.push("BT"), i$2.push("/" + n + " " + U(s$1.fontSize) + " Tf " + r), i$2.push(s$1.text), i$2.push("ET"), i$2.push("Q"), e.stream = i$2.join("\n"), e;
		},
		OffPushDown: function(t) {
			var e = G(t);
			e.scope = t.scope;
			var n = [];
			return n.push("0.749023 g"), n.push("0 0 " + U(xt.internal.getWidth(t)) + " " + U(xt.internal.getHeight(t)) + " re"), n.push("f"), e.stream = n.join("\n"), e;
		}
	},
	RadioButton: {
		Circle: {
			createAppearanceStream: function(t) {
				var e = {
					D: { Off: xt.RadioButton.Circle.OffPushDown },
					N: {}
				};
				return e.N[t] = xt.RadioButton.Circle.YesNormal, e.D[t] = xt.RadioButton.Circle.YesPushDown, e;
			},
			getCA: function() {
				return "l";
			},
			YesNormal: function(t) {
				var e = G(t);
				e.scope = t.scope;
				var n = [], r = xt.internal.getWidth(t) <= xt.internal.getHeight(t) ? xt.internal.getWidth(t) / 4 : xt.internal.getHeight(t) / 4;
				r = Number((.9 * r).toFixed(5));
				var i$2 = xt.internal.Bezier_C, a$1 = Number((r * i$2).toFixed(5));
				return n.push("q"), n.push("1 0 0 1 " + H(xt.internal.getWidth(t) / 2) + " " + H(xt.internal.getHeight(t) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + a$1 + " " + a$1 + " " + r + " 0 " + r + " c"), n.push("-" + a$1 + " " + r + " -" + r + " " + a$1 + " -" + r + " 0 c"), n.push("-" + r + " -" + a$1 + " -" + a$1 + " -" + r + " 0 -" + r + " c"), n.push(a$1 + " -" + r + " " + r + " -" + a$1 + " " + r + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e;
			},
			YesPushDown: function(t) {
				var e = G(t);
				e.scope = t.scope;
				var n = [], r = xt.internal.getWidth(t) <= xt.internal.getHeight(t) ? xt.internal.getWidth(t) / 4 : xt.internal.getHeight(t) / 4;
				r = Number((.9 * r).toFixed(5));
				var i$2 = Number((2 * r).toFixed(5)), a$1 = Number((i$2 * xt.internal.Bezier_C).toFixed(5)), o$1 = Number((r * xt.internal.Bezier_C).toFixed(5));
				return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + H(xt.internal.getWidth(t) / 2) + " " + H(xt.internal.getHeight(t) / 2) + " cm"), n.push(i$2 + " 0 m"), n.push(i$2 + " " + a$1 + " " + a$1 + " " + i$2 + " 0 " + i$2 + " c"), n.push("-" + a$1 + " " + i$2 + " -" + i$2 + " " + a$1 + " -" + i$2 + " 0 c"), n.push("-" + i$2 + " -" + a$1 + " -" + a$1 + " -" + i$2 + " 0 -" + i$2 + " c"), n.push(a$1 + " -" + i$2 + " " + i$2 + " -" + a$1 + " " + i$2 + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + H(xt.internal.getWidth(t) / 2) + " " + H(xt.internal.getHeight(t) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + o$1 + " " + o$1 + " " + r + " 0 " + r + " c"), n.push("-" + o$1 + " " + r + " -" + r + " " + o$1 + " -" + r + " 0 c"), n.push("-" + r + " -" + o$1 + " -" + o$1 + " -" + r + " 0 -" + r + " c"), n.push(o$1 + " -" + r + " " + r + " -" + o$1 + " " + r + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e;
			},
			OffPushDown: function(t) {
				var e = G(t);
				e.scope = t.scope;
				var n = [], r = xt.internal.getWidth(t) <= xt.internal.getHeight(t) ? xt.internal.getWidth(t) / 4 : xt.internal.getHeight(t) / 4;
				r = Number((.9 * r).toFixed(5));
				var i$2 = Number((2 * r).toFixed(5)), a$1 = Number((i$2 * xt.internal.Bezier_C).toFixed(5));
				return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + H(xt.internal.getWidth(t) / 2) + " " + H(xt.internal.getHeight(t) / 2) + " cm"), n.push(i$2 + " 0 m"), n.push(i$2 + " " + a$1 + " " + a$1 + " " + i$2 + " 0 " + i$2 + " c"), n.push("-" + a$1 + " " + i$2 + " -" + i$2 + " " + a$1 + " -" + i$2 + " 0 c"), n.push("-" + i$2 + " -" + a$1 + " -" + a$1 + " -" + i$2 + " 0 -" + i$2 + " c"), n.push(a$1 + " -" + i$2 + " " + i$2 + " -" + a$1 + " " + i$2 + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e;
			}
		},
		Cross: {
			createAppearanceStream: function(t) {
				var e = {
					D: { Off: xt.RadioButton.Cross.OffPushDown },
					N: {}
				};
				return e.N[t] = xt.RadioButton.Cross.YesNormal, e.D[t] = xt.RadioButton.Cross.YesPushDown, e;
			},
			getCA: function() {
				return "8";
			},
			YesNormal: function(t) {
				var e = G(t);
				e.scope = t.scope;
				var n = [], r = xt.internal.calculateCross(t);
				return n.push("q"), n.push("1 1 " + U(xt.internal.getWidth(t) - 2) + " " + U(xt.internal.getHeight(t) - 2) + " re"), n.push("W"), n.push("n"), n.push(U(r.x1.x) + " " + U(r.x1.y) + " m"), n.push(U(r.x2.x) + " " + U(r.x2.y) + " l"), n.push(U(r.x4.x) + " " + U(r.x4.y) + " m"), n.push(U(r.x3.x) + " " + U(r.x3.y) + " l"), n.push("s"), n.push("Q"), e.stream = n.join("\n"), e;
			},
			YesPushDown: function(t) {
				var e = G(t);
				e.scope = t.scope;
				var n = xt.internal.calculateCross(t), r = [];
				return r.push("0.749023 g"), r.push("0 0 " + U(xt.internal.getWidth(t)) + " " + U(xt.internal.getHeight(t)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + U(xt.internal.getWidth(t) - 2) + " " + U(xt.internal.getHeight(t) - 2) + " re"), r.push("W"), r.push("n"), r.push(U(n.x1.x) + " " + U(n.x1.y) + " m"), r.push(U(n.x2.x) + " " + U(n.x2.y) + " l"), r.push(U(n.x4.x) + " " + U(n.x4.y) + " m"), r.push(U(n.x3.x) + " " + U(n.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join("\n"), e;
			},
			OffPushDown: function(t) {
				var e = G(t);
				e.scope = t.scope;
				var n = [];
				return n.push("0.749023 g"), n.push("0 0 " + U(xt.internal.getWidth(t)) + " " + U(xt.internal.getHeight(t)) + " re"), n.push("f"), e.stream = n.join("\n"), e;
			}
		}
	},
	createDefaultAppearanceStream: function(t) {
		var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id, n = t.scope.__private__.encodeColorString(t.color);
		return "/" + e + " " + t.fontSize + " Tf " + n;
	}
};
xt.internal = {
	Bezier_C: .551915024494,
	calculateCross: function(t) {
		var e = xt.internal.getWidth(t), n = xt.internal.getHeight(t), r = Math.min(e, n);
		return {
			x1: {
				x: (e - r) / 2,
				y: (n - r) / 2 + r
			},
			x2: {
				x: (e - r) / 2 + r,
				y: (n - r) / 2
			},
			x3: {
				x: (e - r) / 2,
				y: (n - r) / 2
			},
			x4: {
				x: (e - r) / 2 + r,
				y: (n - r) / 2 + r
			}
		};
	}
}, xt.internal.getWidth = function(e) {
	var n = 0;
	return "object" === _typeof(e) && (n = V(e.Rect[2])), n;
}, xt.internal.getHeight = function(e) {
	var n = 0;
	return "object" === _typeof(e) && (n = V(e.Rect[3])), n;
};
var At = R.addField = function(t) {
	if (at(this, t), !(t instanceof ht)) throw new Error("Invalid argument passed to jsPDF.addField.");
	var e;
	return (e = t).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), t.page = t.scope.internal.getCurrentPageInfo().pageNumber, this;
};
R.AcroFormChoiceField = ft, R.AcroFormListBox = dt, R.AcroFormComboBox = pt, R.AcroFormEditBox = gt, R.AcroFormButton = mt, R.AcroFormPushButton = vt, R.AcroFormRadioButton = bt, R.AcroFormCheckBox = wt, R.AcroFormTextField = Nt, R.AcroFormPasswordField = Lt, R.AcroFormAppearance = xt, R.AcroForm = {
	ChoiceField: ft,
	ListBox: dt,
	ComboBox: pt,
	EditBox: gt,
	Button: mt,
	PushButton: vt,
	RadioButton: bt,
	CheckBox: wt,
	TextField: Nt,
	PasswordField: Lt,
	Appearance: xt
}, E.AcroForm = {
	ChoiceField: ft,
	ListBox: dt,
	ComboBox: pt,
	EditBox: gt,
	Button: mt,
	PushButton: vt,
	RadioButton: bt,
	CheckBox: wt,
	TextField: Nt,
	PasswordField: Lt,
	Appearance: xt
};
var St = E.AcroForm;
function _t(t) {
	return t.reduce(function(t$1, e, n) {
		return t$1[e] = n, t$1;
	}, {});
}
(function(e) {
	var n = "addImage_";
	e.__addimage__ = {};
	var r = "UNKNOWN", i$2 = {
		PNG: [[
			137,
			80,
			78,
			71
		]],
		TIFF: [[
			77,
			77,
			0,
			42
		], [
			73,
			73,
			42,
			0
		]],
		JPEG: [
			[
				255,
				216,
				255,
				224,
				void 0,
				void 0,
				74,
				70,
				73,
				70,
				0
			],
			[
				255,
				216,
				255,
				225,
				void 0,
				void 0,
				69,
				120,
				105,
				102,
				0,
				0
			],
			[
				255,
				216,
				255,
				219
			],
			[
				255,
				216,
				255,
				238
			]
		],
		JPEG2000: [[
			0,
			0,
			0,
			12,
			106,
			80,
			32,
			32
		]],
		GIF87a: [[
			71,
			73,
			70,
			56,
			55,
			97
		]],
		GIF89a: [[
			71,
			73,
			70,
			56,
			57,
			97
		]],
		WEBP: [[
			82,
			73,
			70,
			70,
			void 0,
			void 0,
			void 0,
			void 0,
			87,
			69,
			66,
			80
		]],
		BMP: [
			[66, 77],
			[66, 65],
			[67, 73],
			[67, 80],
			[73, 67],
			[80, 84]
		]
	}, a$1 = e.__addimage__.getImageFileTypeByImageData = function(t, e$1) {
		var n$1, a$2, o$2, s$2, u$2, c$2 = r;
		if ("RGBA" === (e$1 = e$1 || r) || void 0 !== t.data && t.data instanceof Uint8ClampedArray && "height" in t && "width" in t) return "RGBA";
		if (A$1(t)) for (u$2 in i$2) for (o$2 = i$2[u$2], n$1 = 0; n$1 < o$2.length; n$1 += 1) {
			for (s$2 = !0, a$2 = 0; a$2 < o$2[n$1].length; a$2 += 1) if (void 0 !== o$2[n$1][a$2] && o$2[n$1][a$2] !== t[a$2]) {
				s$2 = !1;
				break;
			}
			if (!0 === s$2) {
				c$2 = u$2;
				break;
			}
		}
		else for (u$2 in i$2) for (o$2 = i$2[u$2], n$1 = 0; n$1 < o$2.length; n$1 += 1) {
			for (s$2 = !0, a$2 = 0; a$2 < o$2[n$1].length; a$2 += 1) if (void 0 !== o$2[n$1][a$2] && o$2[n$1][a$2] !== t.charCodeAt(a$2)) {
				s$2 = !1;
				break;
			}
			if (!0 === s$2) {
				c$2 = u$2;
				break;
			}
		}
		return c$2 === r && e$1 !== r && (c$2 = e$1), c$2;
	}, o$1 = function t(e$1) {
		for (var n$1 = this.internal.write, r$1 = this.internal.putStream, i$3 = (0, this.internal.getFilters)(); -1 !== i$3.indexOf("FlateEncode");) i$3.splice(i$3.indexOf("FlateEncode"), 1);
		e$1.objectId = this.internal.newObject();
		var a$2 = [];
		if (a$2.push({
			key: "Type",
			value: "/XObject"
		}), a$2.push({
			key: "Subtype",
			value: "/Image"
		}), a$2.push({
			key: "Width",
			value: e$1.width
		}), a$2.push({
			key: "Height",
			value: e$1.height
		}), e$1.colorSpace === y$1.INDEXED ? a$2.push({
			key: "ColorSpace",
			value: "[/Indexed /DeviceRGB " + (e$1.palette.length / 3 - 1) + " " + ("sMask" in e$1 && void 0 !== e$1.sMask ? e$1.objectId + 2 : e$1.objectId + 1) + " 0 R]"
		}) : (a$2.push({
			key: "ColorSpace",
			value: "/" + e$1.colorSpace
		}), e$1.colorSpace === y$1.DEVICE_CMYK && a$2.push({
			key: "Decode",
			value: "[1 0 1 0 1 0 1 0]"
		})), a$2.push({
			key: "BitsPerComponent",
			value: e$1.bitsPerComponent
		}), "decodeParameters" in e$1 && void 0 !== e$1.decodeParameters && a$2.push({
			key: "DecodeParms",
			value: "<<" + e$1.decodeParameters + ">>"
		}), "transparency" in e$1 && Array.isArray(e$1.transparency) && e$1.transparency.length > 0) {
			for (var o$2 = "", s$2 = 0, u$2 = e$1.transparency.length; s$2 < u$2; s$2++) o$2 += e$1.transparency[s$2] + " " + e$1.transparency[s$2] + " ";
			a$2.push({
				key: "Mask",
				value: "[" + o$2 + "]"
			});
		}
		void 0 !== e$1.sMask && a$2.push({
			key: "SMask",
			value: e$1.objectId + 1 + " 0 R"
		});
		var c$2 = void 0 !== e$1.filter ? ["/" + e$1.filter] : void 0;
		if (r$1({
			data: e$1.data,
			additionalKeyValues: a$2,
			alreadyAppliedFilters: c$2,
			objectId: e$1.objectId
		}), n$1("endobj"), "sMask" in e$1 && void 0 !== e$1.sMask) {
			var l$2, h$2 = null !== (l$2 = e$1.sMaskBitsPerComponent) && void 0 !== l$2 ? l$2 : e$1.bitsPerComponent, f$1 = {
				width: e$1.width,
				height: e$1.height,
				colorSpace: "DeviceGray",
				bitsPerComponent: h$2,
				data: e$1.sMask
			};
			"filter" in e$1 && (f$1.decodeParameters = "/Predictor ".concat(e$1.predictor, " /Colors 1 /BitsPerComponent ").concat(h$2, " /Columns ").concat(e$1.width), f$1.filter = e$1.filter), t.call(this, f$1);
		}
		if (e$1.colorSpace === y$1.INDEXED) {
			var d$2 = this.internal.newObject();
			r$1({
				data: _$1(new Uint8Array(e$1.palette)),
				objectId: d$2
			}), n$1("endobj");
		}
	}, s$1 = function() {
		var t = this.internal.collections[n + "images"];
		for (var e$1 in t) o$1.call(this, t[e$1]);
	}, u$1 = function() {
		var t, e$1 = this.internal.collections[n + "images"], r$1 = this.internal.write;
		for (var i$3 in e$1) r$1("/I" + (t = e$1[i$3]).index, t.objectId, "0", "R");
	}, c$1 = function() {
		this.internal.collections[n + "images"] || (this.internal.collections[n + "images"] = {}, this.internal.events.subscribe("putResources", s$1), this.internal.events.subscribe("putXobjectDict", u$1));
	}, l$1 = function() {
		var t = this.internal.collections[n + "images"];
		return c$1.call(this), t;
	}, h$1 = function() {
		return Object.keys(this.internal.collections[n + "images"]).length;
	}, d$1 = function(t) {
		return "function" == typeof e["process" + t.toUpperCase()];
	}, p$1 = function(e$1) {
		return "object" === _typeof(e$1) && 1 === e$1.nodeType;
	}, g$1 = function(t, n$1) {
		if ("IMG" === t.nodeName && t.hasAttribute("src")) {
			var r$1 = "" + t.getAttribute("src");
			if (0 === r$1.indexOf("data:image/")) return f(unescape(r$1).split("base64,").pop());
			var i$3 = e.loadFile(r$1, !0);
			if (void 0 !== i$3) return i$3;
		}
		if ("CANVAS" === t.nodeName) {
			if (0 === t.width || 0 === t.height) throw new Error("Given canvas must have data. Canvas width: " + t.width + ", height: " + t.height);
			var a$2;
			switch (n$1) {
				case "PNG":
					a$2 = "image/png";
					break;
				case "WEBP":
					a$2 = "image/webp";
					break;
				default: a$2 = "image/jpeg";
			}
			return f(t.toDataURL(a$2, 1).split("base64,").pop());
		}
	}, m$1 = function(t) {
		var e$1 = this.internal.collections[n + "images"];
		if (e$1) {
			for (var r$1 in e$1) if (t === e$1[r$1].alias) return e$1[r$1];
		}
	}, v$1 = function(t, e$1, n$1) {
		return t || e$1 || (t = -96, e$1 = -96), t < 0 && (t = -1 * n$1.width * 72 / t / this.internal.scaleFactor), e$1 < 0 && (e$1 = -1 * n$1.height * 72 / e$1 / this.internal.scaleFactor), 0 === t && (t = e$1 * n$1.width / n$1.height), 0 === e$1 && (e$1 = t * n$1.height / n$1.width), [t, e$1];
	}, b$1 = function(t, e$1, n$1, r$1, i$3, a$2) {
		var o$2 = v$1.call(this, n$1, r$1, i$3), s$2 = this.internal.getCoordinateString, u$2 = this.internal.getVerticalCoordinateString, c$2 = l$1.call(this);
		if (n$1 = o$2[0], r$1 = o$2[1], c$2[i$3.index] = i$3, a$2) {
			a$2 *= Math.PI / 180;
			var h$2 = Math.cos(a$2), f$1 = Math.sin(a$2), d$2 = function(t$1) {
				return t$1.toFixed(4);
			}, p$2 = [
				d$2(h$2),
				d$2(f$1),
				d$2(-1 * f$1),
				d$2(h$2),
				0,
				0,
				"cm"
			];
		}
		this.internal.write("q"), a$2 ? (this.internal.write([
			1,
			"0",
			"0",
			1,
			s$2(t),
			u$2(e$1 + r$1),
			"cm"
		].join(" ")), this.internal.write(p$2.join(" ")), this.internal.write([
			s$2(n$1),
			"0",
			"0",
			s$2(r$1),
			"0",
			"0",
			"cm"
		].join(" "))) : this.internal.write([
			s$2(n$1),
			"0",
			"0",
			s$2(r$1),
			s$2(t),
			u$2(e$1 + r$1),
			"cm"
		].join(" ")), this.isAdvancedAPI() && this.internal.write([
			1,
			0,
			0,
			-1,
			0,
			0,
			"cm"
		].join(" ")), this.internal.write("/I" + i$3.index + " Do"), this.internal.write("Q");
	}, y$1 = e.color_spaces = {
		DEVICE_RGB: "DeviceRGB",
		DEVICE_GRAY: "DeviceGray",
		DEVICE_CMYK: "DeviceCMYK",
		CAL_GREY: "CalGray",
		CAL_RGB: "CalRGB",
		LAB: "Lab",
		ICC_BASED: "ICCBased",
		INDEXED: "Indexed",
		PATTERN: "Pattern",
		SEPARATION: "Separation",
		DEVICE_N: "DeviceN"
	};
	e.decode = {
		DCT_DECODE: "DCTDecode",
		FLATE_DECODE: "FlateDecode",
		LZW_DECODE: "LZWDecode",
		JPX_DECODE: "JPXDecode",
		JBIG2_DECODE: "JBIG2Decode",
		ASCII85_DECODE: "ASCII85Decode",
		ASCII_HEX_DECODE: "ASCIIHexDecode",
		RUN_LENGTH_DECODE: "RunLengthDecode",
		CCITT_FAX_DECODE: "CCITTFaxDecode"
	};
	var w$1 = e.image_compression = {
		NONE: "NONE",
		FAST: "FAST",
		MEDIUM: "MEDIUM",
		SLOW: "SLOW"
	}, N$1 = e.__addimage__.sHashCode = function(t) {
		var e$1, n$1, r$1 = 0;
		if ("string" == typeof t) for (n$1 = t.length, e$1 = 0; e$1 < n$1; e$1++) r$1 = (r$1 << 5) - r$1 + t.charCodeAt(e$1), r$1 |= 0;
		else if (A$1(t)) for (n$1 = t.byteLength / 2, e$1 = 0; e$1 < n$1; e$1++) r$1 = (r$1 << 5) - r$1 + t[e$1], r$1 |= 0;
		return r$1;
	}, L$1 = e.__addimage__.validateStringAsBase64 = function(t) {
		(t = t || "").toString().trim();
		var e$1 = !0;
		return 0 === t.length && (e$1 = !1), t.length % 4 != 0 && (e$1 = !1), !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) && (e$1 = !1), !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2)) && (e$1 = !1), e$1;
	}, x$2 = e.__addimage__.extractImageFromDataUrl = function(t) {
		if (null == t) return null;
		if (!(t = t.trim()).startsWith("data:")) return null;
		var e$1 = t.indexOf(",");
		return e$1 < 0 ? null : t.substring(0, e$1).trim().endsWith("base64") ? t.substring(e$1 + 1) : null;
	};
	e.__addimage__.isArrayBuffer = function(t) {
		return t instanceof ArrayBuffer;
	};
	var A$1 = e.__addimage__.isArrayBufferView = function(t) {
		return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array;
	}, S$1 = e.__addimage__.binaryStringToUint8Array = function(t) {
		for (var e$1 = t.length, n$1 = new Uint8Array(e$1), r$1 = 0; r$1 < e$1; r$1++) n$1[r$1] = t.charCodeAt(r$1);
		return n$1;
	}, _$1 = e.__addimage__.arrayBufferToBinaryString = function(t) {
		for (var e$1 = "", n$1 = A$1(t) ? t : new Uint8Array(t), r$1 = 0; r$1 < n$1.length; r$1 += 8192) e$1 += String.fromCharCode.apply(null, n$1.subarray(r$1, r$1 + 8192));
		return e$1;
	};
	e.addImage = function() {
		var e$1, n$1, i$3, a$2, o$2, s$2, u$2, l$2, h$2;
		if ("number" == typeof arguments[1] ? (n$1 = r, i$3 = arguments[1], a$2 = arguments[2], o$2 = arguments[3], s$2 = arguments[4], u$2 = arguments[5], l$2 = arguments[6], h$2 = arguments[7]) : (n$1 = arguments[1], i$3 = arguments[2], a$2 = arguments[3], o$2 = arguments[4], s$2 = arguments[5], u$2 = arguments[6], l$2 = arguments[7], h$2 = arguments[8]), "object" === _typeof(e$1 = arguments[0]) && !p$1(e$1) && "imageData" in e$1) {
			var f$1 = e$1;
			e$1 = f$1.imageData, n$1 = f$1.format || n$1 || r, i$3 = f$1.x || i$3 || 0, a$2 = f$1.y || a$2 || 0, o$2 = f$1.w || f$1.width || o$2, s$2 = f$1.h || f$1.height || s$2, u$2 = f$1.alias || u$2, l$2 = f$1.compression || l$2, h$2 = f$1.rotation || f$1.angle || h$2;
		}
		var d$2 = this.internal.getFilters();
		if (void 0 === l$2 && -1 !== d$2.indexOf("FlateEncode") && (l$2 = "SLOW"), isNaN(i$3) || isNaN(a$2)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
		c$1.call(this);
		var g$2 = P$1.call(this, e$1, n$1, u$2, l$2);
		return b$1.call(this, i$3, a$2, o$2, s$2, g$2, h$2), this;
	};
	var P$1 = function(t, n$1, i$3, o$2) {
		var s$2, u$2, c$2;
		if ("string" == typeof t && a$1(t) === r) {
			t = unescape(t);
			var l$2 = k$1(t, !1);
			("" !== l$2 || void 0 !== (l$2 = e.loadFile(t, !0))) && (t = l$2);
		}
		if (p$1(t) && (t = g$1(t, n$1)), n$1 = a$1(t, n$1), !d$1(n$1)) throw new Error("addImage does not support files of type '" + n$1 + "', please ensure that a plugin for '" + n$1 + "' support is added.");
		if ((null == (c$2 = i$3) || 0 === c$2.length) && (i$3 = function(t$1) {
			return "string" == typeof t$1 || A$1(t$1) ? N$1(t$1) : A$1(t$1.data) ? N$1(t$1.data) : null;
		}(t)), (s$2 = m$1.call(this, i$3)) || (t instanceof Uint8Array || "RGBA" === n$1 || (u$2 = t, t = S$1(t)), s$2 = this["process" + n$1.toUpperCase()](t, h$1.call(this), i$3, function(t$1) {
			return t$1 && "string" == typeof t$1 && (t$1 = t$1.toUpperCase()), t$1 in e.image_compression ? t$1 : w$1.NONE;
		}(o$2), u$2)), !s$2) throw new Error("An unknown error occurred whilst processing the image.");
		return s$2;
	}, k$1 = e.__addimage__.convertBase64ToBinaryString = function(t, e$1) {
		e$1 = "boolean" != typeof e$1 || e$1;
		var n$1, r$1 = "";
		if ("string" == typeof t) {
			var i$3;
			n$1 = null !== (i$3 = x$2(t)) && void 0 !== i$3 ? i$3 : t;
			try {
				r$1 = f(n$1);
			} catch (a$2) {
				if (e$1) throw L$1(n$1) ? /* @__PURE__ */ new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + a$2.message) : /* @__PURE__ */ new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
			}
		}
		return r$1;
	};
	e.getImageProperties = function(t) {
		var n$1, i$3, o$2 = "";
		if (p$1(t) && (t = g$1(t)), "string" == typeof t && a$1(t) === r && ("" === (o$2 = k$1(t, !1)) && (o$2 = e.loadFile(t) || ""), t = o$2), i$3 = a$1(t), !d$1(i$3)) throw new Error("addImage does not support files of type '" + i$3 + "', please ensure that a plugin for '" + i$3 + "' support is added.");
		if (t instanceof Uint8Array || (t = S$1(t)), !(n$1 = this["process" + i$3.toUpperCase()](t))) throw new Error("An unknown error occurred whilst processing the image");
		return n$1.fileType = i$3, n$1;
	};
})(E.API), function(t) {
	var e = function(t$1) {
		if (void 0 !== t$1 && "" != t$1) return !0;
	};
	E.API.events.push(["addPage", function(t$1) {
		this.internal.getPageInfo(t$1.pageNumber).pageContext.annotations = [];
	}]), t.events.push(["putPage", function(t$1) {
		for (var n, r, i$2, a$1 = this.internal.getCoordinateString, o$1 = this.internal.getVerticalCoordinateString, s$1 = this.internal.getPageInfoByObjId(t$1.objId), u$1 = t$1.pageContext.annotations, c$1 = !1, l$1 = 0; l$1 < u$1.length && !c$1; l$1++) switch ((n = u$1[l$1]).type) {
			case "link":
				(e(n.options.url) || e(n.options.pageNumber)) && (c$1 = !0);
				break;
			case "reference":
			case "text":
			case "freetext": c$1 = !0;
		}
		if (0 != c$1) {
			this.internal.write("/Annots [");
			for (var h$1 = 0; h$1 < u$1.length; h$1++) {
				n = u$1[h$1];
				var f$1 = this.internal.pdfEscape, d$1 = this.internal.getEncryptor(t$1.objId);
				switch (n.type) {
					case "reference":
						this.internal.write(" " + n.object.objId + " 0 R ");
						break;
					case "text":
						var p$1 = this.internal.newAdditionalObject(), g$1 = this.internal.newAdditionalObject(), m$1 = this.internal.getEncryptor(p$1.objId), v$1 = n.title || "Note";
						i$2 = "<</Type /Annot /Subtype /Text " + (r = "/Rect [" + a$1(n.bounds.x) + " " + o$1(n.bounds.y + n.bounds.h) + " " + a$1(n.bounds.x + n.bounds.w) + " " + o$1(n.bounds.y) + "] ") + "/Contents (" + f$1(m$1(n.contents)) + ")", i$2 += " /Popup " + g$1.objId + " 0 R", i$2 += " /P " + s$1.objId + " 0 R", i$2 += " /T (" + f$1(m$1(v$1)) + ") >>", p$1.content = i$2;
						var b$1 = p$1.objId + " 0 R";
						i$2 = "<</Type /Annot /Subtype /Popup " + (r = "/Rect [" + a$1(n.bounds.x + 30) + " " + o$1(n.bounds.y + n.bounds.h) + " " + a$1(n.bounds.x + n.bounds.w + 30) + " " + o$1(n.bounds.y) + "] ") + " /Parent " + b$1, n.open && (i$2 += " /Open true"), i$2 += " >>", g$1.content = i$2, this.internal.write(p$1.objId, "0 R", g$1.objId, "0 R");
						break;
					case "freetext":
						r = "/Rect [" + a$1(n.bounds.x) + " " + o$1(n.bounds.y) + " " + a$1(n.bounds.x + n.bounds.w) + " " + o$1(n.bounds.y + n.bounds.h) + "] ";
						var y$1 = n.color || "#000000";
						i$2 = "<</Type /Annot /Subtype /FreeText " + r + "/Contents (" + f$1(d$1(n.contents)) + ")", i$2 += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + y$1 + ")", i$2 += " /Border [0 0 0]", i$2 += " >>", this.internal.write(i$2);
						break;
					case "link":
						if (n.options.name) {
							var w$1 = this.annotations._nameMap[n.options.name];
							n.options.pageNumber = w$1.page, n.options.top = w$1.y;
						} else n.options.top || (n.options.top = 0);
						if (r = "/Rect [" + n.finalBounds.x + " " + n.finalBounds.y + " " + n.finalBounds.w + " " + n.finalBounds.h + "] ", i$2 = "", n.options.url) i$2 = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /A <</S /URI /URI (" + f$1(d$1(n.options.url)) + ") >>";
						else if (n.options.pageNumber) switch (i$2 = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(n.options.pageNumber).objId + " 0 R", n.options.magFactor = n.options.magFactor || "XYZ", n.options.magFactor) {
							case "Fit":
								i$2 += " /Fit]";
								break;
							case "FitH":
								i$2 += " /FitH " + n.options.top + "]";
								break;
							case "FitV":
								n.options.left = n.options.left || 0, i$2 += " /FitV " + n.options.left + "]";
								break;
							default:
								var N$1 = o$1(n.options.top);
								n.options.left = n.options.left || 0, void 0 === n.options.zoom && (n.options.zoom = 0), i$2 += " /XYZ " + n.options.left + " " + N$1 + " " + n.options.zoom + "]";
						}
						"" != i$2 && (i$2 += " >>", this.internal.write(i$2));
				}
			}
			this.internal.write("]");
		}
	}]), t.createAnnotation = function(t$1) {
		var e$1 = this.internal.getCurrentPageInfo();
		switch (t$1.type) {
			case "link":
				this.link(t$1.bounds.x, t$1.bounds.y, t$1.bounds.w, t$1.bounds.h, t$1);
				break;
			case "text":
			case "freetext": e$1.pageContext.annotations.push(t$1);
		}
	}, t.link = function(t$1, e$1, n, r, i$2) {
		var a$1 = this.internal.getCurrentPageInfo(), o$1 = this.internal.getCoordinateString, s$1 = this.internal.getVerticalCoordinateString;
		a$1.pageContext.annotations.push({
			finalBounds: {
				x: o$1(t$1),
				y: s$1(e$1),
				w: o$1(t$1 + n),
				h: s$1(e$1 + r)
			},
			options: i$2,
			type: "link"
		});
	}, t.textWithLink = function(t$1, e$1, n, r) {
		var i$2, a$1, o$1 = this.getTextWidth(t$1), s$1 = this.internal.getLineHeight() / this.internal.scaleFactor;
		if (void 0 !== r.maxWidth) {
			a$1 = r.maxWidth;
			var u$1 = this.splitTextToSize(t$1, a$1).length;
			i$2 = Math.ceil(s$1 * u$1);
		} else a$1 = o$1, i$2 = s$1;
		return this.text(t$1, e$1, n, r), n += .2 * s$1, "center" === r.align && (e$1 -= o$1 / 2), "right" === r.align && (e$1 -= o$1), this.link(e$1, n - s$1, a$1, i$2, r), o$1;
	}, t.getTextWidth = function(t$1) {
		var e$1 = this.internal.getFontSize();
		return this.getStringUnitWidth(t$1) * e$1 / this.internal.scaleFactor;
	};
}(E.API), function(t) {
	var e = {
		1569: [65152],
		1570: [65153, 65154],
		1571: [65155, 65156],
		1572: [65157, 65158],
		1573: [65159, 65160],
		1574: [
			65161,
			65162,
			65163,
			65164
		],
		1575: [65165, 65166],
		1576: [
			65167,
			65168,
			65169,
			65170
		],
		1577: [65171, 65172],
		1578: [
			65173,
			65174,
			65175,
			65176
		],
		1579: [
			65177,
			65178,
			65179,
			65180
		],
		1580: [
			65181,
			65182,
			65183,
			65184
		],
		1581: [
			65185,
			65186,
			65187,
			65188
		],
		1582: [
			65189,
			65190,
			65191,
			65192
		],
		1583: [65193, 65194],
		1584: [65195, 65196],
		1585: [65197, 65198],
		1586: [65199, 65200],
		1587: [
			65201,
			65202,
			65203,
			65204
		],
		1588: [
			65205,
			65206,
			65207,
			65208
		],
		1589: [
			65209,
			65210,
			65211,
			65212
		],
		1590: [
			65213,
			65214,
			65215,
			65216
		],
		1591: [
			65217,
			65218,
			65219,
			65220
		],
		1592: [
			65221,
			65222,
			65223,
			65224
		],
		1593: [
			65225,
			65226,
			65227,
			65228
		],
		1594: [
			65229,
			65230,
			65231,
			65232
		],
		1601: [
			65233,
			65234,
			65235,
			65236
		],
		1602: [
			65237,
			65238,
			65239,
			65240
		],
		1603: [
			65241,
			65242,
			65243,
			65244
		],
		1604: [
			65245,
			65246,
			65247,
			65248
		],
		1605: [
			65249,
			65250,
			65251,
			65252
		],
		1606: [
			65253,
			65254,
			65255,
			65256
		],
		1607: [
			65257,
			65258,
			65259,
			65260
		],
		1608: [65261, 65262],
		1609: [
			65263,
			65264,
			64488,
			64489
		],
		1610: [
			65265,
			65266,
			65267,
			65268
		],
		1649: [64336, 64337],
		1655: [64477],
		1657: [
			64358,
			64359,
			64360,
			64361
		],
		1658: [
			64350,
			64351,
			64352,
			64353
		],
		1659: [
			64338,
			64339,
			64340,
			64341
		],
		1662: [
			64342,
			64343,
			64344,
			64345
		],
		1663: [
			64354,
			64355,
			64356,
			64357
		],
		1664: [
			64346,
			64347,
			64348,
			64349
		],
		1667: [
			64374,
			64375,
			64376,
			64377
		],
		1668: [
			64370,
			64371,
			64372,
			64373
		],
		1670: [
			64378,
			64379,
			64380,
			64381
		],
		1671: [
			64382,
			64383,
			64384,
			64385
		],
		1672: [64392, 64393],
		1676: [64388, 64389],
		1677: [64386, 64387],
		1678: [64390, 64391],
		1681: [64396, 64397],
		1688: [64394, 64395],
		1700: [
			64362,
			64363,
			64364,
			64365
		],
		1702: [
			64366,
			64367,
			64368,
			64369
		],
		1705: [
			64398,
			64399,
			64400,
			64401
		],
		1709: [
			64467,
			64468,
			64469,
			64470
		],
		1711: [
			64402,
			64403,
			64404,
			64405
		],
		1713: [
			64410,
			64411,
			64412,
			64413
		],
		1715: [
			64406,
			64407,
			64408,
			64409
		],
		1722: [64414, 64415],
		1723: [
			64416,
			64417,
			64418,
			64419
		],
		1726: [
			64426,
			64427,
			64428,
			64429
		],
		1728: [64420, 64421],
		1729: [
			64422,
			64423,
			64424,
			64425
		],
		1733: [64480, 64481],
		1734: [64473, 64474],
		1735: [64471, 64472],
		1736: [64475, 64476],
		1737: [64482, 64483],
		1739: [64478, 64479],
		1740: [
			64508,
			64509,
			64510,
			64511
		],
		1744: [
			64484,
			64485,
			64486,
			64487
		],
		1746: [64430, 64431],
		1747: [64432, 64433]
	}, n = {
		65247: {
			65154: 65269,
			65156: 65271,
			65160: 65273,
			65166: 65275
		},
		65248: {
			65154: 65270,
			65156: 65272,
			65160: 65274,
			65166: 65276
		},
		65165: { 65247: { 65248: { 65258: 65010 } } },
		1617: {
			1612: 64606,
			1613: 64607,
			1614: 64608,
			1615: 64609,
			1616: 64610
		}
	}, r = {
		1612: 64606,
		1613: 64607,
		1614: 64608,
		1615: 64609,
		1616: 64610
	}, i$2 = [
		1570,
		1571,
		1573,
		1575
	];
	t.__arabicParser__ = {};
	var a$1 = t.__arabicParser__.isInArabicSubstitutionA = function(t$1) {
		return void 0 !== e[t$1.charCodeAt(0)];
	}, o$1 = t.__arabicParser__.isArabicLetter = function(t$1) {
		return "string" == typeof t$1 && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t$1);
	}, s$1 = t.__arabicParser__.isArabicEndLetter = function(t$1) {
		return o$1(t$1) && a$1(t$1) && e[t$1.charCodeAt(0)].length <= 2;
	}, u$1 = t.__arabicParser__.isArabicAlfLetter = function(t$1) {
		return o$1(t$1) && i$2.indexOf(t$1.charCodeAt(0)) >= 0;
	};
	t.__arabicParser__.arabicLetterHasIsolatedForm = function(t$1) {
		return o$1(t$1) && a$1(t$1) && e[t$1.charCodeAt(0)].length >= 1;
	};
	var c$1 = t.__arabicParser__.arabicLetterHasFinalForm = function(t$1) {
		return o$1(t$1) && a$1(t$1) && e[t$1.charCodeAt(0)].length >= 2;
	};
	t.__arabicParser__.arabicLetterHasInitialForm = function(t$1) {
		return o$1(t$1) && a$1(t$1) && e[t$1.charCodeAt(0)].length >= 3;
	};
	var l$1 = t.__arabicParser__.arabicLetterHasMedialForm = function(t$1) {
		return o$1(t$1) && a$1(t$1) && 4 == e[t$1.charCodeAt(0)].length;
	}, h$1 = t.__arabicParser__.resolveLigatures = function(t$1) {
		var e$1 = 0, r$1 = n, i$3 = "", a$2 = 0;
		for (e$1 = 0; e$1 < t$1.length; e$1 += 1) void 0 !== r$1[t$1.charCodeAt(e$1)] ? (a$2++, "number" == typeof (r$1 = r$1[t$1.charCodeAt(e$1)]) && (i$3 += String.fromCharCode(r$1), r$1 = n, a$2 = 0), e$1 === t$1.length - 1 && (r$1 = n, i$3 += t$1.charAt(e$1 - (a$2 - 1)), e$1 -= a$2 - 1, a$2 = 0)) : (r$1 = n, i$3 += t$1.charAt(e$1 - a$2), e$1 -= a$2, a$2 = 0);
		return i$3;
	};
	t.__arabicParser__.isArabicDiacritic = function(t$1) {
		return void 0 !== t$1 && void 0 !== r[t$1.charCodeAt(0)];
	};
	var f$1 = t.__arabicParser__.getCorrectForm = function(t$1, e$1, n$1) {
		return o$1(t$1) ? !1 === a$1(t$1) ? -1 : !c$1(t$1) || !o$1(e$1) && !o$1(n$1) || !o$1(n$1) && s$1(e$1) || s$1(t$1) && !o$1(e$1) || s$1(t$1) && u$1(e$1) || s$1(t$1) && s$1(e$1) ? 0 : l$1(t$1) && o$1(e$1) && !s$1(e$1) && o$1(n$1) && c$1(n$1) ? 3 : s$1(t$1) || !o$1(n$1) ? 1 : 2 : -1;
	}, d$1 = function(t$1) {
		var n$1 = 0, r$1 = 0, i$3 = 0, a$2 = "", s$2 = "", u$2 = "", c$2 = (t$1 = t$1 || "").split("\\s+"), l$2 = [];
		for (n$1 = 0; n$1 < c$2.length; n$1 += 1) {
			for (l$2.push(""), r$1 = 0; r$1 < c$2[n$1].length; r$1 += 1) a$2 = c$2[n$1][r$1], s$2 = c$2[n$1][r$1 - 1], u$2 = c$2[n$1][r$1 + 1], o$1(a$2) ? (i$3 = f$1(a$2, s$2, u$2), l$2[n$1] += -1 !== i$3 ? String.fromCharCode(e[a$2.charCodeAt(0)][i$3]) : a$2) : l$2[n$1] += a$2;
			l$2[n$1] = h$1(l$2[n$1]);
		}
		return l$2.join(" ");
	}, p$1 = t.__arabicParser__.processArabic = t.processArabic = function() {
		var t$1, e$1 = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text, n$1 = [];
		if (Array.isArray(e$1)) {
			var r$1 = 0;
			for (n$1 = [], r$1 = 0; r$1 < e$1.length; r$1 += 1) Array.isArray(e$1[r$1]) ? n$1.push([
				d$1(e$1[r$1][0]),
				e$1[r$1][1],
				e$1[r$1][2]
			]) : n$1.push([d$1(e$1[r$1])]);
			t$1 = n$1;
		} else t$1 = d$1(e$1);
		return "string" == typeof arguments[0] ? t$1 : (arguments[0].text = t$1, arguments[0]);
	};
	t.events.push(["preProcessText", p$1]);
}(E.API), E.API.autoPrint = function(t) {
	var e;
	return (t = t || {}).variant = t.variant || "non-conform", "javascript" === t.variant ? this.addJS("print({});") : (this.internal.events.subscribe("postPutResources", function() {
		e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
	}), this.internal.events.subscribe("putCatalog", function() {
		this.internal.out("/OpenAction " + e + " 0 R");
	})), this;
}, function(t) {
	var e = function() {
		var t$1 = void 0;
		Object.defineProperty(this, "pdf", {
			get: function() {
				return t$1;
			},
			set: function(e$2) {
				t$1 = e$2;
			}
		});
		var e$1 = 150;
		Object.defineProperty(this, "width", {
			get: function() {
				return e$1;
			},
			set: function(t$2) {
				e$1 = isNaN(t$2) || !1 === Number.isInteger(t$2) || t$2 < 0 ? 150 : t$2, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e$1 + 1);
			}
		});
		var n = 300;
		Object.defineProperty(this, "height", {
			get: function() {
				return n;
			},
			set: function(t$2) {
				n = isNaN(t$2) || !1 === Number.isInteger(t$2) || t$2 < 0 ? 300 : t$2, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = n + 1);
			}
		});
		var r = [];
		Object.defineProperty(this, "childNodes", {
			get: function() {
				return r;
			},
			set: function(t$2) {
				r = t$2;
			}
		});
		var i$2 = {};
		Object.defineProperty(this, "style", {
			get: function() {
				return i$2;
			},
			set: function(t$2) {
				i$2 = t$2;
			}
		}), Object.defineProperty(this, "parentNode", {});
	};
	e.prototype.getContext = function(t$1, e$1) {
		var n;
		if ("2d" !== (t$1 = t$1 || "2d")) return null;
		for (n in e$1) this.pdf.context2d.hasOwnProperty(n) && (this.pdf.context2d[n] = e$1[n]);
		return this.pdf.context2d._canvas = this, this.pdf.context2d;
	}, e.prototype.toDataURL = function() {
		throw new Error("toDataURL is not implemented.");
	}, t.events.push(["initialized", function() {
		this.canvas = new e(), this.canvas.pdf = this;
	}]);
}(E.API), function(e) {
	var n = {
		left: 0,
		top: 0,
		bottom: 0,
		right: 0
	}, r = !1, i$2 = function() {
		void 0 === this.internal.__cell__ && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, n), this.internal.__cell__.margins.width = this.getPageWidth(), a$1.call(this));
	}, a$1 = function() {
		this.internal.__cell__.lastCell = new o$1(), this.internal.__cell__.pages = 1;
	}, o$1 = function() {
		var t = arguments[0];
		Object.defineProperty(this, "x", {
			enumerable: !0,
			get: function() {
				return t;
			},
			set: function(e$2) {
				t = e$2;
			}
		});
		var e$1 = arguments[1];
		Object.defineProperty(this, "y", {
			enumerable: !0,
			get: function() {
				return e$1;
			},
			set: function(t$1) {
				e$1 = t$1;
			}
		});
		var n$1 = arguments[2];
		Object.defineProperty(this, "width", {
			enumerable: !0,
			get: function() {
				return n$1;
			},
			set: function(t$1) {
				n$1 = t$1;
			}
		});
		var r$1 = arguments[3];
		Object.defineProperty(this, "height", {
			enumerable: !0,
			get: function() {
				return r$1;
			},
			set: function(t$1) {
				r$1 = t$1;
			}
		});
		var i$3 = arguments[4];
		Object.defineProperty(this, "text", {
			enumerable: !0,
			get: function() {
				return i$3;
			},
			set: function(t$1) {
				i$3 = t$1;
			}
		});
		var a$2 = arguments[5];
		Object.defineProperty(this, "lineNumber", {
			enumerable: !0,
			get: function() {
				return a$2;
			},
			set: function(t$1) {
				a$2 = t$1;
			}
		});
		var o$2 = arguments[6];
		return Object.defineProperty(this, "align", {
			enumerable: !0,
			get: function() {
				return o$2;
			},
			set: function(t$1) {
				o$2 = t$1;
			}
		}), this;
	};
	o$1.prototype.clone = function() {
		return new o$1(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
	}, o$1.prototype.toArray = function() {
		return [
			this.x,
			this.y,
			this.width,
			this.height,
			this.text,
			this.lineNumber,
			this.align
		];
	}, e.setHeaderFunction = function(t) {
		return i$2.call(this), this.internal.__cell__.headerFunction = "function" == typeof t ? t : void 0, this;
	}, e.getTextDimensions = function(t, e$1) {
		i$2.call(this);
		var n$1 = (e$1 = e$1 || {}).fontSize || this.getFontSize(), r$1 = e$1.font || this.getFont(), a$2 = e$1.scaleFactor || this.internal.scaleFactor, o$2 = 0, s$2 = 0, u$2 = 0, c$1 = this;
		if (!Array.isArray(t) && "string" != typeof t) {
			if ("number" != typeof t) throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
			t = String(t);
		}
		var l$1 = e$1.maxWidth;
		l$1 > 0 ? "string" == typeof t ? t = this.splitTextToSize(t, l$1) : "[object Array]" === Object.prototype.toString.call(t) && (t = t.reduce(function(t$1, e$2) {
			return t$1.concat(c$1.splitTextToSize(e$2, l$1));
		}, [])) : t = Array.isArray(t) ? t : [t];
		for (var h$1 = 0; h$1 < t.length; h$1++) o$2 < (u$2 = this.getStringUnitWidth(t[h$1], { font: r$1 }) * n$1) && (o$2 = u$2);
		return 0 !== o$2 && (s$2 = t.length), {
			w: o$2 /= a$2,
			h: Math.max((s$2 * n$1 * this.getLineHeightFactor() - n$1 * (this.getLineHeightFactor() - 1)) / a$2, 0)
		};
	}, e.cellAddPage = function() {
		i$2.call(this), this.addPage();
		var t = this.internal.__cell__.margins || n;
		return this.internal.__cell__.lastCell = new o$1(t.left, t.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
	};
	var s$1 = e.cell = function() {
		var t = arguments[0] instanceof o$1 ? arguments[0] : new o$1(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
		i$2.call(this);
		var e$1 = this.internal.__cell__.lastCell, a$2 = this.internal.__cell__.padding, s$2 = this.internal.__cell__.margins || n, u$2 = this.internal.__cell__.tableHeaderRow, c$1 = this.internal.__cell__.printHeaders;
		return void 0 !== e$1.lineNumber && (e$1.lineNumber === t.lineNumber ? (t.x = (e$1.x || 0) + (e$1.width || 0), t.y = e$1.y || 0) : e$1.y + e$1.height + t.height + s$2.bottom > this.getPageHeight() ? (this.cellAddPage(), t.y = s$2.top, c$1 && u$2 && (this.printHeaderRow(t.lineNumber, !0), t.y += u$2[0].height)) : t.y = e$1.y + e$1.height || t.y), void 0 !== t.text[0] && (this.rect(t.x, t.y, t.width, t.height, !0 === r ? "FD" : void 0), "right" === t.align ? this.text(t.text, t.x + t.width - a$2, t.y + a$2, {
			align: "right",
			baseline: "top"
		}) : "center" === t.align ? this.text(t.text, t.x + t.width / 2, t.y + a$2, {
			align: "center",
			baseline: "top",
			maxWidth: t.width - a$2 - a$2
		}) : this.text(t.text, t.x + a$2, t.y + a$2, {
			align: "left",
			baseline: "top",
			maxWidth: t.width - a$2 - a$2
		})), this.internal.__cell__.lastCell = t, this;
	};
	e.table = function(e$1, r$1, c$1, l$1, h$1) {
		if (i$2.call(this), !c$1) throw new Error("No data for PDF table.");
		var f$1, d$1, p$1, g$1, m$1 = [], v$1 = [], b$1 = [], y$1 = {}, w$1 = {}, N$1 = [], L$1 = [], x$2 = (h$1 = h$1 || {}).autoSize || !1, A$1 = !1 !== h$1.printHeaders, S$1 = h$1.css && void 0 !== h$1.css["font-size"] ? 16 * h$1.css["font-size"] : h$1.fontSize || 12, _$1 = h$1.margins || Object.assign({ width: this.getPageWidth() }, n), P$1 = "number" == typeof h$1.padding ? h$1.padding : 3, k$1 = h$1.headerBackgroundColor || "#c8c8c8", F$1 = h$1.headerTextColor || "#000";
		if (a$1.call(this), this.internal.__cell__.printHeaders = A$1, this.internal.__cell__.margins = _$1, this.internal.__cell__.table_font_size = S$1, this.internal.__cell__.padding = P$1, this.internal.__cell__.headerBackgroundColor = k$1, this.internal.__cell__.headerTextColor = F$1, this.setFontSize(S$1), null == l$1) v$1 = m$1 = Object.keys(c$1[0]), b$1 = m$1.map(function() {
			return "left";
		});
		else if (Array.isArray(l$1) && "object" === _typeof(l$1[0])) for (m$1 = l$1.map(function(t) {
			return t.name;
		}), v$1 = l$1.map(function(t) {
			return t.prompt || t.name || "";
		}), b$1 = l$1.map(function(t) {
			return t.align || "left";
		}), f$1 = 0; f$1 < l$1.length; f$1 += 1) w$1[l$1[f$1].name] = .7499990551181103 * l$1[f$1].width;
		else Array.isArray(l$1) && "string" == typeof l$1[0] && (v$1 = m$1 = l$1, b$1 = m$1.map(function() {
			return "left";
		}));
		if (x$2 || Array.isArray(l$1) && "string" == typeof l$1[0]) for (f$1 = 0; f$1 < m$1.length; f$1 += 1) {
			for (y$1[g$1 = m$1[f$1]] = c$1.map(function(t) {
				return t[g$1];
			}), this.setFont(void 0, "bold"), N$1.push(this.getTextDimensions(v$1[f$1], {
				fontSize: this.internal.__cell__.table_font_size,
				scaleFactor: this.internal.scaleFactor
			}).w), d$1 = y$1[g$1], this.setFont(void 0, "normal"), p$1 = 0; p$1 < d$1.length; p$1 += 1) N$1.push(this.getTextDimensions(d$1[p$1], {
				fontSize: this.internal.__cell__.table_font_size,
				scaleFactor: this.internal.scaleFactor
			}).w);
			w$1[g$1] = Math.max.apply(null, N$1) + P$1 + P$1, N$1 = [];
		}
		if (A$1) {
			var I$1 = {};
			for (f$1 = 0; f$1 < m$1.length; f$1 += 1) I$1[m$1[f$1]] = {}, I$1[m$1[f$1]].text = v$1[f$1], I$1[m$1[f$1]].align = b$1[f$1];
			var j$1 = u$1.call(this, I$1, w$1);
			L$1 = m$1.map(function(t) {
				return new o$1(e$1, r$1, w$1[t], j$1, I$1[t].text, void 0, I$1[t].align);
			}), this.setTableHeaderRow(L$1), this.printHeaderRow(1, !1);
		}
		var C$1 = l$1.reduce(function(t, e$2) {
			return t[e$2.name] = e$2.align, t;
		}, {});
		for (f$1 = 0; f$1 < c$1.length; f$1 += 1) {
			"rowStart" in h$1 && h$1.rowStart instanceof Function && h$1.rowStart({
				row: f$1,
				data: c$1[f$1]
			}, this);
			var O$1 = u$1.call(this, c$1[f$1], w$1);
			for (p$1 = 0; p$1 < m$1.length; p$1 += 1) {
				var B$1 = c$1[f$1][m$1[p$1]];
				"cellStart" in h$1 && h$1.cellStart instanceof Function && h$1.cellStart({
					row: f$1,
					col: p$1,
					data: B$1
				}, this), s$1.call(this, new o$1(e$1, r$1, w$1[m$1[p$1]], O$1, B$1, f$1 + 2, C$1[m$1[p$1]]));
			}
		}
		return this.internal.__cell__.table_x = e$1, this.internal.__cell__.table_y = r$1, this;
	};
	var u$1 = function(t, e$1) {
		var n$1 = this.internal.__cell__.padding, r$1 = this.internal.__cell__.table_font_size, i$3 = this.internal.scaleFactor;
		return Object.keys(t).map(function(r$2) {
			var i$4 = t[r$2];
			return this.splitTextToSize(i$4.hasOwnProperty("text") ? i$4.text : i$4, e$1[r$2] - n$1 - n$1);
		}, this).map(function(t$1) {
			return this.getLineHeightFactor() * t$1.length * r$1 / i$3 + n$1 + n$1;
		}, this).reduce(function(t$1, e$2) {
			return Math.max(t$1, e$2);
		}, 0);
	};
	e.setTableHeaderRow = function(t) {
		i$2.call(this), this.internal.__cell__.tableHeaderRow = t;
	}, e.printHeaderRow = function(t, e$1) {
		if (i$2.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
		var n$1;
		if (r = !0, "function" == typeof this.internal.__cell__.headerFunction) {
			var a$2 = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
			this.internal.__cell__.lastCell = new o$1(a$2[0], a$2[1], a$2[2], a$2[3], void 0, -1);
		}
		this.setFont(void 0, "bold");
		for (var u$2 = [], c$1 = 0; c$1 < this.internal.__cell__.tableHeaderRow.length; c$1 += 1) {
			n$1 = this.internal.__cell__.tableHeaderRow[c$1].clone(), e$1 && (n$1.y = this.internal.__cell__.margins.top || 0, u$2.push(n$1)), n$1.lineNumber = t;
			var l$1 = this.getTextColor();
			this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), s$1.call(this, n$1), this.setTextColor(l$1);
		}
		u$2.length > 0 && this.setTableHeaderRow(u$2), this.setFont(void 0, "normal"), r = !1;
	};
}(E.API);
var Pt = {
	italic: [
		"italic",
		"oblique",
		"normal"
	],
	oblique: [
		"oblique",
		"italic",
		"normal"
	],
	normal: [
		"normal",
		"oblique",
		"italic"
	]
}, kt = [
	"ultra-condensed",
	"extra-condensed",
	"condensed",
	"semi-condensed",
	"normal",
	"semi-expanded",
	"expanded",
	"extra-expanded",
	"ultra-expanded"
], Ft = _t(kt), It = [
	100,
	200,
	300,
	400,
	500,
	600,
	700,
	800,
	900
], jt = _t(It);
function Ct(t) {
	var e = t.family.replace(/"|'/g, "").toLowerCase(), n = function(t$1) {
		return Pt[t$1 = t$1 || "normal"] ? t$1 : "normal";
	}(t.style), r = function(t$1) {
		return t$1 ? "number" == typeof t$1 ? t$1 >= 100 && t$1 <= 900 && t$1 % 100 == 0 ? t$1 : 400 : /^\d00$/.test(t$1) ? parseInt(t$1) : "bold" === t$1 ? 700 : 400 : 400;
	}(t.weight), i$2 = function(t$1) {
		return "number" == typeof Ft[t$1 = t$1 || "normal"] ? t$1 : "normal";
	}(t.stretch);
	return {
		family: e,
		style: n,
		weight: r,
		stretch: i$2,
		src: t.src || [],
		ref: t.ref || {
			name: e,
			style: [
				i$2,
				n,
				r
			].join(" ")
		}
	};
}
function Ot(t, e, n, r) {
	var i$2;
	for (i$2 = n; i$2 >= 0 && i$2 < e.length; i$2 += r) if (t[e[i$2]]) return t[e[i$2]];
	for (i$2 = n; i$2 >= 0 && i$2 < e.length; i$2 -= r) if (t[e[i$2]]) return t[e[i$2]];
}
var Bt = {
	"sans-serif": "helvetica",
	fixed: "courier",
	monospace: "courier",
	terminal: "courier",
	cursive: "times",
	fantasy: "times",
	serif: "times"
}, Mt = {
	caption: "times",
	icon: "times",
	menu: "times",
	"message-box": "times",
	"small-caption": "times",
	"status-bar": "times"
};
function qt(t) {
	return [
		t.stretch,
		t.style,
		t.weight,
		t.family
	].join(" ");
}
function Et(t) {
	return t.trimLeft();
}
function Rt(t, e) {
	for (var n = 0; n < t.length;) {
		if (t.charAt(n) === e) return [t.substring(0, n), t.substring(n + 1)];
		n += 1;
	}
	return null;
}
function Dt(t) {
	var e = t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
	return null === e ? null : [e[0], t.substring(e[0].length)];
}
var Tt, zt, Ut, Ht, Wt, Vt, Gt, Yt, Jt = ["times"];
function Xt(t, n, r, i$2, a$1) {
	var o$1 = 4, s$1 = $t;
	switch (a$1) {
		case E.API.image_compression.FAST:
			o$1 = 1, s$1 = Zt;
			break;
		case E.API.image_compression.MEDIUM:
			o$1 = 6, s$1 = Qt;
			break;
		case E.API.image_compression.SLOW: o$1 = 9, s$1 = te;
	}
	t = function(t$1, e, n$1, r$1) {
		for (var i$3, a$2 = t$1.length / e, o$2 = new Uint8Array(t$1.length + a$2), s$2 = [
			Kt,
			Zt,
			$t,
			Qt,
			te
		], u$2 = 0; u$2 < a$2; u$2 += 1) {
			var c$1 = u$2 * e, l$1 = t$1.subarray(c$1, c$1 + e);
			if (r$1) o$2.set(r$1(l$1, n$1, i$3), c$1 + u$2);
			else {
				for (var h$1 = s$2.length, f$1 = [], d$1 = 0; d$1 < h$1; d$1 += 1) f$1[d$1] = s$2[d$1](l$1, n$1, i$3);
				var p$1 = ne(f$1.concat());
				o$2.set(f$1[p$1], c$1 + u$2);
			}
			i$3 = l$1;
		}
		return o$2;
	}(t, n, Math.ceil(r * i$2 / 8), s$1);
	var u$1 = zlibSync(t, { level: o$1 });
	return E.API.__addimage__.arrayBufferToBinaryString(u$1);
}
function Kt(t) {
	var e = Array.apply([], t);
	return e.unshift(0), e;
}
function Zt(t, e) {
	var n = t.length, r = [];
	r[0] = 1;
	for (var i$2 = 0; i$2 < n; i$2 += 1) {
		var a$1 = t[i$2 - e] || 0;
		r[i$2 + 1] = t[i$2] - a$1 + 256 & 255;
	}
	return r;
}
function $t(t, e, n) {
	var r = t.length, i$2 = [];
	i$2[0] = 2;
	for (var a$1 = 0; a$1 < r; a$1 += 1) {
		var o$1 = n && n[a$1] || 0;
		i$2[a$1 + 1] = t[a$1] - o$1 + 256 & 255;
	}
	return i$2;
}
function Qt(t, e, n) {
	var r = t.length, i$2 = [];
	i$2[0] = 3;
	for (var a$1 = 0; a$1 < r; a$1 += 1) {
		var o$1 = t[a$1 - e] || 0, s$1 = n && n[a$1] || 0;
		i$2[a$1 + 1] = t[a$1] + 256 - (o$1 + s$1 >>> 1) & 255;
	}
	return i$2;
}
function te(t, e, n) {
	var r = t.length, i$2 = [];
	i$2[0] = 4;
	for (var a$1 = 0; a$1 < r; a$1 += 1) {
		var o$1 = ee(t[a$1 - e] || 0, n && n[a$1] || 0, n && n[a$1 - e] || 0);
		i$2[a$1 + 1] = t[a$1] - o$1 + 256 & 255;
	}
	return i$2;
}
function ee(t, e, n) {
	if (t === e && e === n) return t;
	var r = Math.abs(e - n), i$2 = Math.abs(t - n), a$1 = Math.abs(t + e - n - n);
	return r <= i$2 && r <= a$1 ? t : i$2 <= a$1 ? e : n;
}
function ne(t) {
	var e = t.map(function(t$1) {
		return t$1.reduce(function(t$2, e$1) {
			return t$2 + Math.abs(e$1);
		}, 0);
	});
	return e.indexOf(Math.min.apply(null, e));
}
function re(t, e, n) {
	var r = e * n, i$2 = Math.floor(r / 8), a$1 = 16 - (r - 8 * i$2 + n), o$1 = (1 << n) - 1;
	return ae(t, i$2) >> a$1 & o$1;
}
function ie(t, e, n, r) {
	var i$2 = n * r, a$1 = Math.floor(i$2 / 8), o$1 = 16 - (i$2 - 8 * a$1 + r), s$1 = (1 << r) - 1, u$1 = (e & s$1) << o$1;
	(function(t$1, e$1, n$1) {
		if (e$1 + 1 < t$1.byteLength) t$1.setUint16(e$1, n$1, !1);
		else {
			var r$1 = n$1 >> 8 & 255;
			t$1.setUint8(e$1, r$1);
		}
	})(t, a$1, ae(t, a$1) & ~(s$1 << o$1) & 65535 | u$1);
}
function ae(t, e) {
	return e + 1 < t.byteLength ? t.getUint16(e, !1) : t.getUint8(e) << 8;
}
function oe(t) {
	var e = 0;
	if (71 !== t[e++] || 73 !== t[e++] || 70 !== t[e++] || 56 !== t[e++] || 56 != (t[e++] + 1 & 253) || 97 !== t[e++]) throw new Error("Invalid GIF 87a/89a header.");
	var n = t[e++] | t[e++] << 8, r = t[e++] | t[e++] << 8, i$2 = t[e++], a$1 = i$2 >> 7, o$1 = 1 << 1 + (7 & i$2);
	t[e++], t[e++];
	var s$1 = null, u$1 = null;
	a$1 && (s$1 = e, u$1 = o$1, e += 3 * o$1);
	var c$1 = !0, l$1 = [], h$1 = 0, f$1 = null, d$1 = 0, p$1 = null;
	for (this.width = n, this.height = r; c$1 && e < t.length;) switch (t[e++]) {
		case 33:
			switch (t[e++]) {
				case 255:
					if (11 !== t[e] || 78 == t[e + 1] && 69 == t[e + 2] && 84 == t[e + 3] && 83 == t[e + 4] && 67 == t[e + 5] && 65 == t[e + 6] && 80 == t[e + 7] && 69 == t[e + 8] && 50 == t[e + 9] && 46 == t[e + 10] && 48 == t[e + 11] && 3 == t[e + 12] && 1 == t[e + 13] && 0 == t[e + 16]) e += 14, p$1 = t[e++] | t[e++] << 8, e++;
					else for (e += 12;;) {
						if (!((P$1 = t[e++]) >= 0)) throw Error("Invalid block size");
						if (0 === P$1) break;
						e += P$1;
					}
					break;
				case 249:
					if (4 !== t[e++] || 0 !== t[e + 4]) throw new Error("Invalid graphics extension block.");
					var g$1 = t[e++];
					h$1 = t[e++] | t[e++] << 8, f$1 = t[e++], 1 & g$1 || (f$1 = null), d$1 = g$1 >> 2 & 7, e++;
					break;
				case 254:
					for (;;) {
						if (!((P$1 = t[e++]) >= 0)) throw Error("Invalid block size");
						if (0 === P$1) break;
						e += P$1;
					}
					break;
				default: throw new Error("Unknown graphic control label: 0x" + t[e - 1].toString(16));
			}
			break;
		case 44:
			var m$1 = t[e++] | t[e++] << 8, v$1 = t[e++] | t[e++] << 8, b$1 = t[e++] | t[e++] << 8, y$1 = t[e++] | t[e++] << 8, w$1 = t[e++], N$1 = w$1 >> 6 & 1, L$1 = 1 << 1 + (7 & w$1), x$2 = s$1, A$1 = u$1, S$1 = !1;
			w$1 >> 7 && (S$1 = !0, x$2 = e, A$1 = L$1, e += 3 * L$1);
			var _$1 = e;
			for (e++;;) {
				var P$1;
				if (!((P$1 = t[e++]) >= 0)) throw Error("Invalid block size");
				if (0 === P$1) break;
				e += P$1;
			}
			l$1.push({
				x: m$1,
				y: v$1,
				width: b$1,
				height: y$1,
				has_local_palette: S$1,
				palette_offset: x$2,
				palette_size: A$1,
				data_offset: _$1,
				data_length: e - _$1,
				transparent_index: f$1,
				interlaced: !!N$1,
				delay: h$1,
				disposal: d$1
			});
			break;
		case 59:
			c$1 = !1;
			break;
		default: throw new Error("Unknown gif block: 0x" + t[e - 1].toString(16));
	}
	this.numFrames = function() {
		return l$1.length;
	}, this.loopCount = function() {
		return p$1;
	}, this.frameInfo = function(t$1) {
		if (t$1 < 0 || t$1 >= l$1.length) throw new Error("Frame index out of range.");
		return l$1[t$1];
	}, this.decodeAndBlitFrameBGRA = function(e$1, r$1) {
		var i$3 = this.frameInfo(e$1), a$2 = i$3.width * i$3.height, o$2 = new Uint8Array(a$2);
		se(t, i$3.data_offset, o$2, a$2);
		var s$2 = i$3.palette_offset, u$2 = i$3.transparent_index;
		null === u$2 && (u$2 = 256);
		var c$2 = i$3.width, l$2 = n - c$2, h$2 = c$2, f$2 = 4 * (i$3.y * n + i$3.x), d$2 = 4 * ((i$3.y + i$3.height) * n + i$3.x), p$2 = f$2, g$2 = 4 * l$2;
		!0 === i$3.interlaced && (g$2 += 4 * n * 7);
		for (var m$2 = 8, v$2 = 0, b$2 = o$2.length; v$2 < b$2; ++v$2) {
			var y$2 = o$2[v$2];
			if (0 === h$2 && (h$2 = c$2, (p$2 += g$2) >= d$2 && (g$2 = 4 * l$2 + 4 * n * (m$2 - 1), p$2 = f$2 + (c$2 + l$2) * (m$2 << 1), m$2 >>= 1)), y$2 === u$2) p$2 += 4;
			else {
				var w$2 = t[s$2 + 3 * y$2], N$2 = t[s$2 + 3 * y$2 + 1], L$2 = t[s$2 + 3 * y$2 + 2];
				r$1[p$2++] = L$2, r$1[p$2++] = N$2, r$1[p$2++] = w$2, r$1[p$2++] = 255;
			}
			--h$2;
		}
	}, this.decodeAndBlitFrameRGBA = function(e$1, r$1) {
		var i$3 = this.frameInfo(e$1), a$2 = i$3.width * i$3.height, o$2 = new Uint8Array(a$2);
		se(t, i$3.data_offset, o$2, a$2);
		var s$2 = i$3.palette_offset, u$2 = i$3.transparent_index;
		null === u$2 && (u$2 = 256);
		var c$2 = i$3.width, l$2 = n - c$2, h$2 = c$2, f$2 = 4 * (i$3.y * n + i$3.x), d$2 = 4 * ((i$3.y + i$3.height) * n + i$3.x), p$2 = f$2, g$2 = 4 * l$2;
		!0 === i$3.interlaced && (g$2 += 4 * n * 7);
		for (var m$2 = 8, v$2 = 0, b$2 = o$2.length; v$2 < b$2; ++v$2) {
			var y$2 = o$2[v$2];
			if (0 === h$2 && (h$2 = c$2, (p$2 += g$2) >= d$2 && (g$2 = 4 * l$2 + 4 * n * (m$2 - 1), p$2 = f$2 + (c$2 + l$2) * (m$2 << 1), m$2 >>= 1)), y$2 === u$2) p$2 += 4;
			else {
				var w$2 = t[s$2 + 3 * y$2], N$2 = t[s$2 + 3 * y$2 + 1], L$2 = t[s$2 + 3 * y$2 + 2];
				r$1[p$2++] = w$2, r$1[p$2++] = N$2, r$1[p$2++] = L$2, r$1[p$2++] = 255;
			}
			--h$2;
		}
	};
}
function se(t, e, n, r) {
	for (var i$2 = t[e++], a$1 = 1 << i$2, s$1 = a$1 + 1, u$1 = s$1 + 1, c$1 = i$2 + 1, l$1 = (1 << c$1) - 1, h$1 = 0, f$1 = 0, d$1 = 0, p$1 = t[e++], g$1 = new Int32Array(4096), m$1 = null;;) {
		for (; h$1 < 16 && 0 !== p$1;) f$1 |= t[e++] << h$1, h$1 += 8, 1 === p$1 ? p$1 = t[e++] : --p$1;
		if (h$1 < c$1) break;
		var v$1 = f$1 & l$1;
		if (f$1 >>= c$1, h$1 -= c$1, v$1 !== a$1) {
			if (v$1 === s$1) break;
			for (var b$1 = v$1 < u$1 ? v$1 : m$1, y$1 = 0, w$1 = b$1; w$1 > a$1;) w$1 = g$1[w$1] >> 8, ++y$1;
			var N$1 = w$1;
			if (d$1 + y$1 + (b$1 !== v$1 ? 1 : 0) > r) return void o.log("Warning, gif stream longer than expected.");
			n[d$1++] = N$1;
			var L$1 = d$1 += y$1;
			for (b$1 !== v$1 && (n[d$1++] = N$1), w$1 = b$1; y$1--;) w$1 = g$1[w$1], n[--L$1] = 255 & w$1, w$1 >>= 8;
			null !== m$1 && u$1 < 4096 && (g$1[u$1++] = m$1 << 8 | N$1, u$1 >= l$1 + 1 && c$1 < 12 && (++c$1, l$1 = l$1 << 1 | 1)), m$1 = v$1;
		} else u$1 = s$1 + 1, l$1 = (1 << (c$1 = i$2 + 1)) - 1, m$1 = null;
	}
	return d$1 !== r && o.log("Warning, gif stream shorter than expected."), n;
}
/**
* @license
Copyright (c) 2008, Adobe Systems Incorporated
All rights reserved.

Redistribution and use in source and binary forms, with or without 
modification, are permitted provided that the following conditions are
met:

* Redistributions of source code must retain the above copyright notice, 
this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the 
documentation and/or other materials provided with the distribution.

* Neither the name of Adobe Systems Incorporated nor the names of its 
contributors may be used to endorse or promote products derived from 
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/ function ue(t) {
	var e, n, r, i$2, a$1, o$1 = Math.floor, s$1 = new Array(64), u$1 = new Array(64), c$1 = new Array(64), l$1 = new Array(64), h$1 = new Array(65535), f$1 = new Array(65535), d$1 = new Array(64), p$1 = new Array(64), g$1 = [], m$1 = 0, v$1 = 7, b$1 = new Array(64), y$1 = new Array(64), w$1 = new Array(64), N$1 = new Array(256), L$1 = new Array(2048), x$2 = [
		0,
		1,
		5,
		6,
		14,
		15,
		27,
		28,
		2,
		4,
		7,
		13,
		16,
		26,
		29,
		42,
		3,
		8,
		12,
		17,
		25,
		30,
		41,
		43,
		9,
		11,
		18,
		24,
		31,
		40,
		44,
		53,
		10,
		19,
		23,
		32,
		39,
		45,
		52,
		54,
		20,
		22,
		33,
		38,
		46,
		51,
		55,
		60,
		21,
		34,
		37,
		47,
		50,
		56,
		59,
		61,
		35,
		36,
		48,
		49,
		57,
		58,
		62,
		63
	], A$1 = [
		0,
		0,
		1,
		5,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	], S$1 = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11
	], _$1 = [
		0,
		0,
		2,
		1,
		3,
		3,
		2,
		4,
		3,
		5,
		5,
		4,
		4,
		0,
		0,
		1,
		125
	], P$1 = [
		1,
		2,
		3,
		0,
		4,
		17,
		5,
		18,
		33,
		49,
		65,
		6,
		19,
		81,
		97,
		7,
		34,
		113,
		20,
		50,
		129,
		145,
		161,
		8,
		35,
		66,
		177,
		193,
		21,
		82,
		209,
		240,
		36,
		51,
		98,
		114,
		130,
		9,
		10,
		22,
		23,
		24,
		25,
		26,
		37,
		38,
		39,
		40,
		41,
		42,
		52,
		53,
		54,
		55,
		56,
		57,
		58,
		67,
		68,
		69,
		70,
		71,
		72,
		73,
		74,
		83,
		84,
		85,
		86,
		87,
		88,
		89,
		90,
		99,
		100,
		101,
		102,
		103,
		104,
		105,
		106,
		115,
		116,
		117,
		118,
		119,
		120,
		121,
		122,
		131,
		132,
		133,
		134,
		135,
		136,
		137,
		138,
		146,
		147,
		148,
		149,
		150,
		151,
		152,
		153,
		154,
		162,
		163,
		164,
		165,
		166,
		167,
		168,
		169,
		170,
		178,
		179,
		180,
		181,
		182,
		183,
		184,
		185,
		186,
		194,
		195,
		196,
		197,
		198,
		199,
		200,
		201,
		202,
		210,
		211,
		212,
		213,
		214,
		215,
		216,
		217,
		218,
		225,
		226,
		227,
		228,
		229,
		230,
		231,
		232,
		233,
		234,
		241,
		242,
		243,
		244,
		245,
		246,
		247,
		248,
		249,
		250
	], k$1 = [
		0,
		0,
		3,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0
	], F$1 = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11
	], I$1 = [
		0,
		0,
		2,
		1,
		2,
		4,
		4,
		3,
		4,
		7,
		5,
		4,
		4,
		0,
		1,
		2,
		119
	], j$1 = [
		0,
		1,
		2,
		3,
		17,
		4,
		5,
		33,
		49,
		6,
		18,
		65,
		81,
		7,
		97,
		113,
		19,
		34,
		50,
		129,
		8,
		20,
		66,
		145,
		161,
		177,
		193,
		9,
		35,
		51,
		82,
		240,
		21,
		98,
		114,
		209,
		10,
		22,
		36,
		52,
		225,
		37,
		241,
		23,
		24,
		25,
		26,
		38,
		39,
		40,
		41,
		42,
		53,
		54,
		55,
		56,
		57,
		58,
		67,
		68,
		69,
		70,
		71,
		72,
		73,
		74,
		83,
		84,
		85,
		86,
		87,
		88,
		89,
		90,
		99,
		100,
		101,
		102,
		103,
		104,
		105,
		106,
		115,
		116,
		117,
		118,
		119,
		120,
		121,
		122,
		130,
		131,
		132,
		133,
		134,
		135,
		136,
		137,
		138,
		146,
		147,
		148,
		149,
		150,
		151,
		152,
		153,
		154,
		162,
		163,
		164,
		165,
		166,
		167,
		168,
		169,
		170,
		178,
		179,
		180,
		181,
		182,
		183,
		184,
		185,
		186,
		194,
		195,
		196,
		197,
		198,
		199,
		200,
		201,
		202,
		210,
		211,
		212,
		213,
		214,
		215,
		216,
		217,
		218,
		226,
		227,
		228,
		229,
		230,
		231,
		232,
		233,
		234,
		242,
		243,
		244,
		245,
		246,
		247,
		248,
		249,
		250
	];
	function C$1(t$1, e$1) {
		for (var n$1 = 0, r$1 = 0, i$3 = new Array(), a$2 = 1; a$2 <= 16; a$2++) {
			for (var o$2 = 1; o$2 <= t$1[a$2]; o$2++) i$3[e$1[r$1]] = [], i$3[e$1[r$1]][0] = n$1, i$3[e$1[r$1]][1] = a$2, r$1++, n$1++;
			n$1 *= 2;
		}
		return i$3;
	}
	function O$1(t$1) {
		for (var e$1 = t$1[0], n$1 = t$1[1] - 1; n$1 >= 0;) e$1 & 1 << n$1 && (m$1 |= 1 << v$1), n$1--, --v$1 < 0 && (255 == m$1 ? (B$1(255), B$1(0)) : B$1(m$1), v$1 = 7, m$1 = 0);
	}
	function B$1(t$1) {
		g$1.push(t$1);
	}
	function M$1(t$1) {
		B$1(t$1 >> 8 & 255), B$1(255 & t$1);
	}
	function q$1(t$1, e$1, n$1, r$1, i$3) {
		for (var a$2, o$2 = i$3[0], s$2 = i$3[240], u$2 = function(t$2, e$2) {
			var n$2, r$2, i$4, a$3, o$3, s$3, u$3, c$3, l$3, h$2, f$2 = 0;
			for (l$3 = 0; l$3 < 8; ++l$3) {
				n$2 = t$2[f$2], r$2 = t$2[f$2 + 1], i$4 = t$2[f$2 + 2], a$3 = t$2[f$2 + 3], o$3 = t$2[f$2 + 4], s$3 = t$2[f$2 + 5], u$3 = t$2[f$2 + 6];
				var p$2 = n$2 + (c$3 = t$2[f$2 + 7]), g$3 = n$2 - c$3, m$3 = r$2 + u$3, v$3 = r$2 - u$3, b$3 = i$4 + s$3, y$3 = i$4 - s$3, w$3 = a$3 + o$3, N$2 = a$3 - o$3, L$2 = p$2 + w$3, x$3 = p$2 - w$3, A$2 = m$3 + b$3, S$2 = m$3 - b$3;
				t$2[f$2] = L$2 + A$2, t$2[f$2 + 4] = L$2 - A$2;
				var _$2 = .707106781 * (S$2 + x$3);
				t$2[f$2 + 2] = x$3 + _$2, t$2[f$2 + 6] = x$3 - _$2;
				var P$2 = .382683433 * ((L$2 = N$2 + y$3) - (S$2 = v$3 + g$3)), k$2 = .5411961 * L$2 + P$2, F$2 = 1.306562965 * S$2 + P$2, I$2 = .707106781 * (A$2 = y$3 + v$3), j$2 = g$3 + I$2, C$2 = g$3 - I$2;
				t$2[f$2 + 5] = C$2 + k$2, t$2[f$2 + 3] = C$2 - k$2, t$2[f$2 + 1] = j$2 + F$2, t$2[f$2 + 7] = j$2 - F$2, f$2 += 8;
			}
			for (f$2 = 0, l$3 = 0; l$3 < 8; ++l$3) {
				n$2 = t$2[f$2], r$2 = t$2[f$2 + 8], i$4 = t$2[f$2 + 16], a$3 = t$2[f$2 + 24], o$3 = t$2[f$2 + 32], s$3 = t$2[f$2 + 40], u$3 = t$2[f$2 + 48];
				var O$2 = n$2 + (c$3 = t$2[f$2 + 56]), B$2 = n$2 - c$3, M$2 = r$2 + u$3, q$2 = r$2 - u$3, E$2 = i$4 + s$3, R$1 = i$4 - s$3, D$1 = a$3 + o$3, T$1 = a$3 - o$3, z$1 = O$2 + D$1, U$1 = O$2 - D$1, H$1 = M$2 + E$2, W$1 = M$2 - E$2;
				t$2[f$2] = z$1 + H$1, t$2[f$2 + 32] = z$1 - H$1;
				var V$1 = .707106781 * (W$1 + U$1);
				t$2[f$2 + 16] = U$1 + V$1, t$2[f$2 + 48] = U$1 - V$1;
				var G$1 = .382683433 * ((z$1 = T$1 + R$1) - (W$1 = q$2 + B$2)), Y$1 = .5411961 * z$1 + G$1, J$1 = 1.306562965 * W$1 + G$1, X$1 = .707106781 * (H$1 = R$1 + q$2), K$1 = B$2 + X$1, Z$1 = B$2 - X$1;
				t$2[f$2 + 40] = Z$1 + Y$1, t$2[f$2 + 24] = Z$1 - Y$1, t$2[f$2 + 8] = K$1 + J$1, t$2[f$2 + 56] = K$1 - J$1, f$2++;
			}
			for (l$3 = 0; l$3 < 64; ++l$3) h$2 = t$2[l$3] * e$2[l$3], d$1[l$3] = h$2 > 0 ? h$2 + .5 | 0 : h$2 - .5 | 0;
			return d$1;
		}(t$1, e$1), c$2 = 0; c$2 < 64; ++c$2) p$1[x$2[c$2]] = u$2[c$2];
		var l$2 = p$1[0] - n$1;
		n$1 = p$1[0], 0 == l$2 ? O$1(r$1[0]) : (O$1(r$1[f$1[a$2 = 32767 + l$2]]), O$1(h$1[a$2]));
		for (var g$2 = 63; g$2 > 0 && 0 == p$1[g$2];) g$2--;
		if (0 == g$2) return O$1(o$2), n$1;
		for (var m$2, v$2 = 1; v$2 <= g$2;) {
			for (var b$2 = v$2; 0 == p$1[v$2] && v$2 <= g$2;) ++v$2;
			var y$2 = v$2 - b$2;
			if (y$2 >= 16) {
				m$2 = y$2 >> 4;
				for (var w$2 = 1; w$2 <= m$2; ++w$2) O$1(s$2);
				y$2 &= 15;
			}
			a$2 = 32767 + p$1[v$2], O$1(i$3[(y$2 << 4) + f$1[a$2]]), O$1(h$1[a$2]), v$2++;
		}
		return 63 != g$2 && O$1(o$2), n$1;
	}
	function E$1(t$1) {
		t$1 = Math.min(Math.max(t$1, 1), 100), a$1 != t$1 && (function(t$2) {
			for (var e$1 = [
				16,
				11,
				10,
				16,
				24,
				40,
				51,
				61,
				12,
				12,
				14,
				19,
				26,
				58,
				60,
				55,
				14,
				13,
				16,
				24,
				40,
				57,
				69,
				56,
				14,
				17,
				22,
				29,
				51,
				87,
				80,
				62,
				18,
				22,
				37,
				56,
				68,
				109,
				103,
				77,
				24,
				35,
				55,
				64,
				81,
				104,
				113,
				92,
				49,
				64,
				78,
				87,
				103,
				121,
				120,
				101,
				72,
				92,
				95,
				98,
				112,
				100,
				103,
				99
			], n$1 = 0; n$1 < 64; n$1++) {
				var r$1 = o$1((e$1[n$1] * t$2 + 50) / 100);
				r$1 = Math.min(Math.max(r$1, 1), 255), s$1[x$2[n$1]] = r$1;
			}
			for (var i$3 = [
				17,
				18,
				24,
				47,
				99,
				99,
				99,
				99,
				18,
				21,
				26,
				66,
				99,
				99,
				99,
				99,
				24,
				26,
				56,
				99,
				99,
				99,
				99,
				99,
				47,
				66,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99
			], a$2 = 0; a$2 < 64; a$2++) {
				var h$2 = o$1((i$3[a$2] * t$2 + 50) / 100);
				h$2 = Math.min(Math.max(h$2, 1), 255), u$1[x$2[a$2]] = h$2;
			}
			for (var f$2 = [
				1,
				1.387039845,
				1.306562965,
				1.175875602,
				1,
				.785694958,
				.5411961,
				.275899379
			], d$2 = 0, p$2 = 0; p$2 < 8; p$2++) for (var g$2 = 0; g$2 < 8; g$2++) c$1[d$2] = 1 / (s$1[x$2[d$2]] * f$2[p$2] * f$2[g$2] * 8), l$1[d$2] = 1 / (u$1[x$2[d$2]] * f$2[p$2] * f$2[g$2] * 8), d$2++;
		}(t$1 < 50 ? Math.floor(5e3 / t$1) : Math.floor(200 - 2 * t$1)), a$1 = t$1);
	}
	this.encode = function(t$1, a$2) {
		a$2 && E$1(a$2), g$1 = new Array(), m$1 = 0, v$1 = 7, M$1(65496), M$1(65504), M$1(16), B$1(74), B$1(70), B$1(73), B$1(70), B$1(0), B$1(1), B$1(1), B$1(0), M$1(1), M$1(1), B$1(0), B$1(0), function() {
			M$1(65499), M$1(132), B$1(0);
			for (var t$2 = 0; t$2 < 64; t$2++) B$1(s$1[t$2]);
			B$1(1);
			for (var e$1 = 0; e$1 < 64; e$1++) B$1(u$1[e$1]);
		}(), function(t$2, e$1) {
			M$1(65472), M$1(17), B$1(8), M$1(e$1), M$1(t$2), B$1(3), B$1(1), B$1(17), B$1(0), B$1(2), B$1(17), B$1(1), B$1(3), B$1(17), B$1(1);
		}(t$1.width, t$1.height), function() {
			M$1(65476), M$1(418), B$1(0);
			for (var t$2 = 0; t$2 < 16; t$2++) B$1(A$1[t$2 + 1]);
			for (var e$1 = 0; e$1 <= 11; e$1++) B$1(S$1[e$1]);
			B$1(16);
			for (var n$1 = 0; n$1 < 16; n$1++) B$1(_$1[n$1 + 1]);
			for (var r$1 = 0; r$1 <= 161; r$1++) B$1(P$1[r$1]);
			B$1(1);
			for (var i$3 = 0; i$3 < 16; i$3++) B$1(k$1[i$3 + 1]);
			for (var a$3 = 0; a$3 <= 11; a$3++) B$1(F$1[a$3]);
			B$1(17);
			for (var o$3 = 0; o$3 < 16; o$3++) B$1(I$1[o$3 + 1]);
			for (var s$2 = 0; s$2 <= 161; s$2++) B$1(j$1[s$2]);
		}(), M$1(65498), M$1(12), B$1(3), B$1(1), B$1(0), B$1(2), B$1(17), B$1(3), B$1(17), B$1(0), B$1(63), B$1(0);
		var o$2 = 0, h$2 = 0, f$2 = 0;
		m$1 = 0, v$1 = 7, this.encode.displayName = "_encode_";
		for (var d$2, p$2, N$2, x$3, C$2, R$1, D$1, T$1, z$1, U$1 = t$1.data, H$1 = t$1.width, W$1 = t$1.height, V$1 = 4 * H$1, G$1 = 0; G$1 < W$1;) {
			for (d$2 = 0; d$2 < V$1;) {
				for (C$2 = V$1 * G$1 + d$2, D$1 = -1, T$1 = 0, z$1 = 0; z$1 < 64; z$1++) R$1 = C$2 + (T$1 = z$1 >> 3) * V$1 + (D$1 = 4 * (7 & z$1)), G$1 + T$1 >= W$1 && (R$1 -= V$1 * (G$1 + 1 + T$1 - W$1)), d$2 + D$1 >= V$1 && (R$1 -= d$2 + D$1 - V$1 + 4), p$2 = U$1[R$1++], N$2 = U$1[R$1++], x$3 = U$1[R$1++], b$1[z$1] = (L$1[p$2] + L$1[N$2 + 256 | 0] + L$1[x$3 + 512 | 0] >> 16) - 128, y$1[z$1] = (L$1[p$2 + 768 | 0] + L$1[N$2 + 1024 | 0] + L$1[x$3 + 1280 | 0] >> 16) - 128, w$1[z$1] = (L$1[p$2 + 1280 | 0] + L$1[N$2 + 1536 | 0] + L$1[x$3 + 1792 | 0] >> 16) - 128;
				o$2 = q$1(b$1, c$1, o$2, e, r), h$2 = q$1(y$1, l$1, h$2, n, i$2), f$2 = q$1(w$1, l$1, f$2, n, i$2), d$2 += 32;
			}
			G$1 += 8;
		}
		if (v$1 >= 0) {
			var Y$1 = [];
			Y$1[1] = v$1 + 1, Y$1[0] = (1 << v$1 + 1) - 1, O$1(Y$1);
		}
		return M$1(65497), new Uint8Array(g$1);
	}, t = t || 50, function() {
		for (var t$1 = String.fromCharCode, e$1 = 0; e$1 < 256; e$1++) N$1[e$1] = t$1(e$1);
	}(), e = C$1(A$1, S$1), n = C$1(k$1, F$1), r = C$1(_$1, P$1), i$2 = C$1(I$1, j$1), function() {
		for (var t$1 = 1, e$1 = 2, n$1 = 1; n$1 <= 15; n$1++) {
			for (var r$1 = t$1; r$1 < e$1; r$1++) f$1[32767 + r$1] = n$1, h$1[32767 + r$1] = [], h$1[32767 + r$1][1] = n$1, h$1[32767 + r$1][0] = r$1;
			for (var i$3 = -(e$1 - 1); i$3 <= -t$1; i$3++) f$1[32767 + i$3] = n$1, h$1[32767 + i$3] = [], h$1[32767 + i$3][1] = n$1, h$1[32767 + i$3][0] = e$1 - 1 + i$3;
			t$1 <<= 1, e$1 <<= 1;
		}
	}(), function() {
		for (var t$1 = 0; t$1 < 256; t$1++) L$1[t$1] = 19595 * t$1, L$1[t$1 + 256 | 0] = 38470 * t$1, L$1[t$1 + 512 | 0] = 7471 * t$1 + 32768, L$1[t$1 + 768 | 0] = -11059 * t$1, L$1[t$1 + 1024 | 0] = -21709 * t$1, L$1[t$1 + 1280 | 0] = 32768 * t$1 + 8421375, L$1[t$1 + 1536 | 0] = -27439 * t$1, L$1[t$1 + 1792 | 0] = -5329 * t$1;
	}(), E$1(t);
}
/**
* @license
* Copyright (c) 2017 Aras Abbasi
*
* Licensed under the MIT License.
* http://opensource.org/licenses/mit-license
*/ function ce(t, e) {
	if (this.pos = 0, this.buffer = t, this.datav = new DataView(t.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === [
		"BM",
		"BA",
		"CI",
		"CP",
		"IC",
		"PT"
	].indexOf(this.flag)) throw new Error("Invalid BMP File");
	this.parseHeader(), this.parseBGR();
}
function le(t) {
	function e(t$1) {
		if (!t$1) throw Error("assert :P");
	}
	function n(t$1, e$1, n$1) {
		for (var r$1 = 0; 4 > r$1; r$1++) if (t$1[e$1 + r$1] != n$1.charCodeAt(r$1)) return !0;
		return !1;
	}
	function r(t$1, e$1, n$1, r$1, i$3) {
		for (var a$2 = 0; a$2 < i$3; a$2++) t$1[e$1 + a$2] = n$1[r$1 + a$2];
	}
	function i$2(t$1, e$1, n$1, r$1) {
		for (var i$3 = 0; i$3 < r$1; i$3++) t$1[e$1 + i$3] = n$1;
	}
	function a$1(t$1) {
		return new Int32Array(t$1);
	}
	function o$1(t$1, e$1) {
		for (var n$1 = [], r$1 = 0; r$1 < t$1; r$1++) n$1.push(new e$1());
		return n$1;
	}
	function s$1(t$1, e$1) {
		var n$1 = [];
		return function t$2(n$2, r$1, i$3) {
			for (var a$2 = i$3[r$1], o$2 = 0; o$2 < a$2 && (n$2.push(i$3.length > r$1 + 1 ? [] : new e$1()), !(i$3.length < r$1 + 1)); o$2++) t$2(n$2[o$2], r$1 + 1, i$3);
		}(n$1, 0, t$1), n$1;
	}
	var u$1 = function() {
		var t$1 = this;
		function u$2(t$2, e$1) {
			for (var n$1 = 1 << e$1 - 1 >>> 0; t$2 & n$1;) n$1 >>>= 1;
			return n$1 ? (t$2 & n$1 - 1) + n$1 : t$2;
		}
		function c$2(t$2, n$1, r$1, i$3, a$2) {
			e(!(i$3 % r$1));
			do
				t$2[n$1 + (i$3 -= r$1)] = a$2;
			while (0 < i$3);
		}
		function l$2(t$2, n$1, r$1, i$3, o$2) {
			if (e(2328 >= o$2), 512 >= o$2) var s$2 = a$1(512);
			else if (null == (s$2 = a$1(o$2))) return 0;
			return function(t$3, n$2, r$2, i$4, o$3, s$3) {
				var l$3, f$3, d$3 = n$2, p$3 = 1 << r$2, g$3 = a$1(16), m$3 = a$1(16);
				for (e(0 != o$3), e(null != i$4), e(null != t$3), e(0 < r$2), f$3 = 0; f$3 < o$3; ++f$3) {
					if (15 < i$4[f$3]) return 0;
					++g$3[i$4[f$3]];
				}
				if (g$3[0] == o$3) return 0;
				for (m$3[1] = 0, l$3 = 1; 15 > l$3; ++l$3) {
					if (g$3[l$3] > 1 << l$3) return 0;
					m$3[l$3 + 1] = m$3[l$3] + g$3[l$3];
				}
				for (f$3 = 0; f$3 < o$3; ++f$3) l$3 = i$4[f$3], 0 < i$4[f$3] && (s$3[m$3[l$3]++] = f$3);
				if (1 == m$3[15]) return (i$4 = new h$2()).g = 0, i$4.value = s$3[0], c$2(t$3, d$3, 1, p$3, i$4), p$3;
				var v$3, b$3 = -1, y$3 = p$3 - 1, w$3 = 0, N$3 = 1, L$3 = 1, x$4 = 1 << r$2;
				for (f$3 = 0, l$3 = 1, o$3 = 2; l$3 <= r$2; ++l$3, o$3 <<= 1) {
					if (N$3 += L$3 <<= 1, 0 > (L$3 -= g$3[l$3])) return 0;
					for (; 0 < g$3[l$3]; --g$3[l$3]) (i$4 = new h$2()).g = l$3, i$4.value = s$3[f$3++], c$2(t$3, d$3 + w$3, o$3, x$4, i$4), w$3 = u$2(w$3, l$3);
				}
				for (l$3 = r$2 + 1, o$3 = 2; 15 >= l$3; ++l$3, o$3 <<= 1) {
					if (N$3 += L$3 <<= 1, 0 > (L$3 -= g$3[l$3])) return 0;
					for (; 0 < g$3[l$3]; --g$3[l$3]) {
						if (i$4 = new h$2(), (w$3 & y$3) != b$3) {
							for (d$3 += x$4, v$3 = 1 << (b$3 = l$3) - r$2; 15 > b$3 && !(0 >= (v$3 -= g$3[b$3]));) ++b$3, v$3 <<= 1;
							p$3 += x$4 = 1 << (v$3 = b$3 - r$2), t$3[n$2 + (b$3 = w$3 & y$3)].g = v$3 + r$2, t$3[n$2 + b$3].value = d$3 - n$2 - b$3;
						}
						i$4.g = l$3 - r$2, i$4.value = s$3[f$3++], c$2(t$3, d$3 + (w$3 >> r$2), o$3, x$4, i$4), w$3 = u$2(w$3, l$3);
					}
				}
				return N$3 != 2 * m$3[15] - 1 ? 0 : p$3;
			}(t$2, n$1, r$1, i$3, o$2, s$2);
		}
		function h$2() {
			this.value = this.g = 0;
		}
		function f$2() {
			this.value = this.g = 0;
		}
		function d$2() {
			this.G = o$1(5, h$2), this.H = a$1(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o$1(Rn, f$2);
		}
		function p$2(t$2, n$1, r$1, i$3) {
			e(null != t$2), e(null != n$1), e(2147483648 > i$3), t$2.Ca = 254, t$2.I = 0, t$2.b = -8, t$2.Ka = 0, t$2.oa = n$1, t$2.pa = r$1, t$2.Jd = n$1, t$2.Yc = r$1 + i$3, t$2.Zc = 4 <= i$3 ? r$1 + i$3 - 4 + 1 : r$1, _$1(t$2);
		}
		function g$2(t$2, e$1) {
			for (var n$1 = 0; 0 < e$1--;) n$1 |= k$1(t$2, 128) << e$1;
			return n$1;
		}
		function m$2(t$2, e$1) {
			var n$1 = g$2(t$2, e$1);
			return P$1(t$2) ? -n$1 : n$1;
		}
		function v$2(t$2, n$1, r$1, i$3) {
			var a$2, o$2 = 0;
			for (e(null != t$2), e(null != n$1), e(4294967288 > i$3), t$2.Sb = i$3, t$2.Ra = 0, t$2.u = 0, t$2.h = 0, 4 < i$3 && (i$3 = 4), a$2 = 0; a$2 < i$3; ++a$2) o$2 += n$1[r$1 + a$2] << 8 * a$2;
			t$2.Ra = o$2, t$2.bb = i$3, t$2.oa = n$1, t$2.pa = r$1;
		}
		function b$2(t$2) {
			for (; 8 <= t$2.u && t$2.bb < t$2.Sb;) t$2.Ra >>>= 8, t$2.Ra += t$2.oa[t$2.pa + t$2.bb] << zn - 8 >>> 0, ++t$2.bb, t$2.u -= 8;
			x$3(t$2) && (t$2.h = 1, t$2.u = 0);
		}
		function y$2(t$2, n$1) {
			if (e(0 <= n$1), !t$2.h && n$1 <= Tn) {
				var r$1 = L$2(t$2) & Dn[n$1];
				return t$2.u += n$1, b$2(t$2), r$1;
			}
			return t$2.h = 1, t$2.u = 0;
		}
		function w$2() {
			this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
		}
		function N$2() {
			this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
		}
		function L$2(t$2) {
			return t$2.Ra >>> (t$2.u & zn - 1) >>> 0;
		}
		function x$3(t$2) {
			return e(t$2.bb <= t$2.Sb), t$2.h || t$2.bb == t$2.Sb && t$2.u > zn;
		}
		function A$2(t$2, e$1) {
			t$2.u = e$1, t$2.h = x$3(t$2);
		}
		function S$1(t$2) {
			t$2.u >= Un && (e(t$2.u >= Un), b$2(t$2));
		}
		function _$1(t$2) {
			e(null != t$2 && null != t$2.oa), t$2.pa < t$2.Zc ? (t$2.I = (t$2.oa[t$2.pa++] | t$2.I << 8) >>> 0, t$2.b += 8) : (e(null != t$2 && null != t$2.oa), t$2.pa < t$2.Yc ? (t$2.b += 8, t$2.I = t$2.oa[t$2.pa++] | t$2.I << 8) : t$2.Ka ? t$2.b = 0 : (t$2.I <<= 8, t$2.b += 8, t$2.Ka = 1));
		}
		function P$1(t$2) {
			return g$2(t$2, 1);
		}
		function k$1(t$2, e$1) {
			var n$1 = t$2.Ca;
			0 > t$2.b && _$1(t$2);
			var r$1 = t$2.b, i$3 = n$1 * e$1 >>> 8, a$2 = (t$2.I >>> r$1 > i$3) + 0;
			for (a$2 ? (n$1 -= i$3, t$2.I -= i$3 + 1 << r$1 >>> 0) : n$1 = i$3 + 1, r$1 = n$1, i$3 = 0; 256 <= r$1;) i$3 += 8, r$1 >>= 8;
			return r$1 = 7 ^ i$3 + Hn[r$1], t$2.b -= r$1, t$2.Ca = (n$1 << r$1) - 1, a$2;
		}
		function F$1(t$2, e$1, n$1) {
			t$2[e$1 + 0] = n$1 >> 24 & 255, t$2[e$1 + 1] = n$1 >> 16 & 255, t$2[e$1 + 2] = n$1 >> 8 & 255, t$2[e$1 + 3] = 255 & n$1;
		}
		function I$1(t$2, e$1) {
			return t$2[e$1 + 0] | t$2[e$1 + 1] << 8;
		}
		function j$1(t$2, e$1) {
			return I$1(t$2, e$1) | t$2[e$1 + 2] << 16;
		}
		function C$1(t$2, e$1) {
			return I$1(t$2, e$1) | I$1(t$2, e$1 + 2) << 16;
		}
		function O$1(t$2, n$1) {
			var r$1 = 1 << n$1;
			return e(null != t$2), e(0 < n$1), t$2.X = a$1(r$1), null == t$2.X ? 0 : (t$2.Mb = 32 - n$1, t$2.Xa = n$1, 1);
		}
		function B$1(t$2, n$1) {
			e(null != t$2), e(null != n$1), e(t$2.Xa == n$1.Xa), r(n$1.X, 0, t$2.X, 0, 1 << n$1.Xa);
		}
		function M$1() {
			this.X = [], this.Xa = this.Mb = 0;
		}
		function q$1(t$2, n$1, r$1, i$3) {
			e(null != r$1), e(null != i$3);
			var a$2 = r$1[0], o$2 = i$3[0];
			return 0 == a$2 && (a$2 = (t$2 * o$2 + n$1 / 2) / n$1), 0 == o$2 && (o$2 = (n$1 * a$2 + t$2 / 2) / t$2), 0 >= a$2 || 0 >= o$2 ? 0 : (r$1[0] = a$2, i$3[0] = o$2, 1);
		}
		function E$1(t$2, e$1) {
			return t$2 + (1 << e$1) - 1 >>> e$1;
		}
		function R$1(t$2, e$1) {
			return ((4278255360 & t$2) + (4278255360 & e$1) >>> 0 & 4278255360) + ((16711935 & t$2) + (16711935 & e$1) >>> 0 & 16711935) >>> 0;
		}
		function D$1(e$1, n$1) {
			t$1[n$1] = function(n$2, r$1, i$3, a$2, o$2, s$2, u$3) {
				var c$3;
				for (c$3 = 0; c$3 < o$2; ++c$3) {
					var l$3 = t$1[e$1](s$2[u$3 + c$3 - 1], i$3, a$2 + c$3);
					s$2[u$3 + c$3] = R$1(n$2[r$1 + c$3], l$3);
				}
			};
		}
		function T$1() {
			this.ud = this.hd = this.jd = 0;
		}
		function z$1(t$2, e$1) {
			return ((4278124286 & (t$2 ^ e$1)) >>> 1) + (t$2 & e$1) >>> 0;
		}
		function U$1(t$2) {
			return 0 <= t$2 && 256 > t$2 ? t$2 : 0 > t$2 ? 0 : 255 < t$2 ? 255 : void 0;
		}
		function H$1(t$2, e$1) {
			return U$1(t$2 + (t$2 - e$1 + .5 >> 1));
		}
		function W$1(t$2, e$1, n$1) {
			return Math.abs(e$1 - n$1) - Math.abs(t$2 - n$1);
		}
		function V$1(t$2, e$1, n$1, r$1, i$3, a$2, o$2) {
			for (r$1 = a$2[o$2 - 1], n$1 = 0; n$1 < i$3; ++n$1) a$2[o$2 + n$1] = r$1 = R$1(t$2[e$1 + n$1], r$1);
		}
		function G$1(t$2, e$1, n$1, r$1, i$3) {
			var a$2;
			for (a$2 = 0; a$2 < n$1; ++a$2) {
				var o$2 = t$2[e$1 + a$2], s$2 = o$2 >> 8 & 255, u$3 = 16711935 & (u$3 = (u$3 = 16711935 & o$2) + ((s$2 << 16) + s$2));
				r$1[i$3 + a$2] = (4278255360 & o$2) + u$3 >>> 0;
			}
		}
		function Y$1(t$2, e$1) {
			e$1.jd = 255 & t$2, e$1.hd = t$2 >> 8 & 255, e$1.ud = t$2 >> 16 & 255;
		}
		function J$1(t$2, e$1, n$1, r$1, i$3, a$2) {
			var o$2;
			for (o$2 = 0; o$2 < r$1; ++o$2) {
				var s$2 = e$1[n$1 + o$2], u$3 = s$2 >>> 8, c$3 = s$2, l$3 = 255 & (l$3 = (l$3 = s$2 >>> 16) + ((t$2.jd << 24 >> 24) * (u$3 << 24 >> 24) >>> 5));
				c$3 = 255 & (c$3 = (c$3 += (t$2.hd << 24 >> 24) * (u$3 << 24 >> 24) >>> 5) + ((t$2.ud << 24 >> 24) * (l$3 << 24 >> 24) >>> 5)), i$3[a$2 + o$2] = (4278255360 & s$2) + (l$3 << 16) + c$3;
			}
		}
		function X$1(e$1, n$1, r$1, i$3, a$2) {
			t$1[n$1] = function(t$2, e$2, n$2, r$2, o$2, s$2, u$3, c$3, l$3) {
				for (r$2 = u$3; r$2 < c$3; ++r$2) for (u$3 = 0; u$3 < l$3; ++u$3) o$2[s$2++] = a$2(n$2[i$3(t$2[e$2++])]);
			}, t$1[e$1] = function(e$2, n$2, o$2, s$2, u$3, c$3, l$3) {
				var h$3 = 8 >> e$2.b, f$3 = e$2.Ea, d$3 = e$2.K[0], p$3 = e$2.w;
				if (8 > h$3) for (e$2 = (1 << e$2.b) - 1, p$3 = (1 << h$3) - 1; n$2 < o$2; ++n$2) {
					var g$3, m$3 = 0;
					for (g$3 = 0; g$3 < f$3; ++g$3) g$3 & e$2 || (m$3 = i$3(s$2[u$3++])), c$3[l$3++] = a$2(d$3[m$3 & p$3]), m$3 >>= h$3;
				}
				else t$1["VP8LMapColor" + r$1](s$2, u$3, d$3, p$3, c$3, l$3, n$2, o$2, f$3);
			};
		}
		function K$1(t$2, e$1, n$1, r$1, i$3) {
			for (n$1 = e$1 + n$1; e$1 < n$1;) {
				var a$2 = t$2[e$1++];
				r$1[i$3++] = a$2 >> 16 & 255, r$1[i$3++] = a$2 >> 8 & 255, r$1[i$3++] = 255 & a$2;
			}
		}
		function Z$1(t$2, e$1, n$1, r$1, i$3) {
			for (n$1 = e$1 + n$1; e$1 < n$1;) {
				var a$2 = t$2[e$1++];
				r$1[i$3++] = a$2 >> 16 & 255, r$1[i$3++] = a$2 >> 8 & 255, r$1[i$3++] = 255 & a$2, r$1[i$3++] = a$2 >> 24 & 255;
			}
		}
		function $$1(t$2, e$1, n$1, r$1, i$3) {
			for (n$1 = e$1 + n$1; e$1 < n$1;) {
				var a$2 = (o$2 = t$2[e$1++]) >> 16 & 240 | o$2 >> 12 & 15, o$2 = 240 & o$2 | o$2 >> 28 & 15;
				r$1[i$3++] = a$2, r$1[i$3++] = o$2;
			}
		}
		function Q$1(t$2, e$1, n$1, r$1, i$3) {
			for (n$1 = e$1 + n$1; e$1 < n$1;) {
				var a$2 = (o$2 = t$2[e$1++]) >> 16 & 248 | o$2 >> 13 & 7, o$2 = o$2 >> 5 & 224 | o$2 >> 3 & 31;
				r$1[i$3++] = a$2, r$1[i$3++] = o$2;
			}
		}
		function tt$1(t$2, e$1, n$1, r$1, i$3) {
			for (n$1 = e$1 + n$1; e$1 < n$1;) {
				var a$2 = t$2[e$1++];
				r$1[i$3++] = 255 & a$2, r$1[i$3++] = a$2 >> 8 & 255, r$1[i$3++] = a$2 >> 16 & 255;
			}
		}
		function et$2(t$2, e$1, n$1, i$3, a$2, o$2) {
			if (0 == o$2) for (n$1 = e$1 + n$1; e$1 < n$1;) F$1(i$3, ((o$2 = t$2[e$1++])[0] >> 24 | o$2[1] >> 8 & 65280 | o$2[2] << 8 & 16711680 | o$2[3] << 24) >>> 0), a$2 += 32;
			else r(i$3, a$2, t$2, e$1, n$1);
		}
		function nt$1(e$1, n$1) {
			t$1[n$1][0] = t$1[e$1 + "0"], t$1[n$1][1] = t$1[e$1 + "1"], t$1[n$1][2] = t$1[e$1 + "2"], t$1[n$1][3] = t$1[e$1 + "3"], t$1[n$1][4] = t$1[e$1 + "4"], t$1[n$1][5] = t$1[e$1 + "5"], t$1[n$1][6] = t$1[e$1 + "6"], t$1[n$1][7] = t$1[e$1 + "7"], t$1[n$1][8] = t$1[e$1 + "8"], t$1[n$1][9] = t$1[e$1 + "9"], t$1[n$1][10] = t$1[e$1 + "10"], t$1[n$1][11] = t$1[e$1 + "11"], t$1[n$1][12] = t$1[e$1 + "12"], t$1[n$1][13] = t$1[e$1 + "13"], t$1[n$1][14] = t$1[e$1 + "0"], t$1[n$1][15] = t$1[e$1 + "0"];
		}
		function rt$1(t$2) {
			return t$2 == Ur || t$2 == Hr || t$2 == Wr || t$2 == Vr;
		}
		function it$1() {
			this.eb = [], this.size = this.A = this.fb = 0;
		}
		function at$1() {
			this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
		}
		function ot$1() {
			this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new it$1(), this.f.kb = new at$1(), this.sd = null;
		}
		function st$1() {
			this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
		}
		function ut$1() {
			this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
		}
		function ct$1(t$2) {
			return alert("todo:WebPSamplerProcessPlane"), t$2.T;
		}
		function lt$1(t$2, e$1) {
			var n$1 = t$2.T, i$3 = e$1.ba.f.RGBA, a$2 = i$3.eb, o$2 = i$3.fb + t$2.ka * i$3.A, s$2 = mi[e$1.ba.S], u$3 = t$2.y, c$3 = t$2.O, l$3 = t$2.f, h$3 = t$2.N, f$3 = t$2.ea, d$3 = t$2.W, p$3 = e$1.cc, g$3 = e$1.dc, m$3 = e$1.Mc, v$3 = e$1.Nc, b$3 = t$2.ka, y$3 = t$2.ka + t$2.T, w$3 = t$2.U, N$3 = w$3 + 1 >> 1;
			for (0 == b$3 ? s$2(u$3, c$3, null, null, l$3, h$3, f$3, d$3, l$3, h$3, f$3, d$3, a$2, o$2, null, null, w$3) : (s$2(e$1.ec, e$1.fc, u$3, c$3, p$3, g$3, m$3, v$3, l$3, h$3, f$3, d$3, a$2, o$2 - i$3.A, a$2, o$2, w$3), ++n$1); b$3 + 2 < y$3; b$3 += 2) p$3 = l$3, g$3 = h$3, m$3 = f$3, v$3 = d$3, h$3 += t$2.Rc, d$3 += t$2.Rc, o$2 += 2 * i$3.A, s$2(u$3, (c$3 += 2 * t$2.fa) - t$2.fa, u$3, c$3, p$3, g$3, m$3, v$3, l$3, h$3, f$3, d$3, a$2, o$2 - i$3.A, a$2, o$2, w$3);
			return c$3 += t$2.fa, t$2.j + y$3 < t$2.o ? (r(e$1.ec, e$1.fc, u$3, c$3, w$3), r(e$1.cc, e$1.dc, l$3, h$3, N$3), r(e$1.Mc, e$1.Nc, f$3, d$3, N$3), n$1--) : 1 & y$3 || s$2(u$3, c$3, null, null, l$3, h$3, f$3, d$3, l$3, h$3, f$3, d$3, a$2, o$2 + i$3.A, null, null, w$3), n$1;
		}
		function ht$1(t$2, n$1, r$1) {
			var i$3 = t$2.F, a$2 = [t$2.J];
			if (null != i$3) {
				var o$2 = t$2.U, s$2 = n$1.ba.S, u$3 = s$2 == Dr || s$2 == Wr;
				n$1 = n$1.ba.f.RGBA;
				var c$3 = [0], l$3 = t$2.ka;
				c$3[0] = t$2.T, t$2.Kb && (0 == l$3 ? --c$3[0] : (--l$3, a$2[0] -= t$2.width), t$2.j + t$2.ka + t$2.T == t$2.o && (c$3[0] = t$2.o - t$2.j - l$3));
				var h$3 = n$1.eb;
				l$3 = n$1.fb + l$3 * n$1.A, t$2 = Ar(i$3, a$2[0], t$2.width, o$2, c$3, h$3, l$3 + (u$3 ? 0 : 3), n$1.A), e(r$1 == c$3), t$2 && rt$1(s$2) && Lr(h$3, l$3, u$3, o$2, c$3, n$1.A);
			}
			return 0;
		}
		function ft$1(t$2) {
			var e$1 = t$2.ma, n$1 = e$1.ba.S, r$1 = 11 > n$1, i$3 = n$1 == qr || n$1 == Rr || n$1 == Dr || n$1 == Tr || 12 == n$1 || rt$1(n$1);
			if (e$1.memory = null, e$1.Ib = null, e$1.Jb = null, e$1.Nd = null, !Mn(e$1.Oa, t$2, i$3 ? 11 : 12)) return 0;
			if (i$3 && rt$1(n$1) && bn(), t$2.da) alert("todo:use_scaling");
			else {
				if (r$1) {
					if (e$1.Ib = ct$1, t$2.Kb) {
						if (n$1 = t$2.U + 1 >> 1, e$1.memory = a$1(t$2.U + 2 * n$1), null == e$1.memory) return 0;
						e$1.ec = e$1.memory, e$1.fc = 0, e$1.cc = e$1.ec, e$1.dc = e$1.fc + t$2.U, e$1.Mc = e$1.cc, e$1.Nc = e$1.dc + n$1, e$1.Ib = lt$1, bn();
					}
				} else alert("todo:EmitYUV");
				i$3 && (e$1.Jb = ht$1, r$1 && mn());
			}
			if (r$1 && !Ii) {
				for (t$2 = 0; 256 > t$2; ++t$2) ji[t$2] = 89858 * (t$2 - 128) + Si >> Ai, Bi[t$2] = -22014 * (t$2 - 128) + Si, Oi[t$2] = -45773 * (t$2 - 128), Ci[t$2] = 113618 * (t$2 - 128) + Si >> Ai;
				for (t$2 = _i; t$2 < Pi; ++t$2) e$1 = 76283 * (t$2 - 16) + Si >> Ai, Mi[t$2 - _i] = Vt$1(e$1, 255), qi[t$2 - _i] = Vt$1(e$1 + 8 >> 4, 15);
				Ii = 1;
			}
			return 1;
		}
		function dt$1(t$2) {
			var n$1 = t$2.ma, r$1 = t$2.U, i$3 = t$2.T;
			return e(!(1 & t$2.ka)), 0 >= r$1 || 0 >= i$3 ? 0 : (r$1 = n$1.Ib(t$2, n$1), null != n$1.Jb && n$1.Jb(t$2, n$1, r$1), n$1.Dc += r$1, 1);
		}
		function pt$1(t$2) {
			t$2.ma.memory = null;
		}
		function gt$1(t$2, e$1, n$1, r$1) {
			return 47 != y$2(t$2, 8) ? 0 : (e$1[0] = y$2(t$2, 14) + 1, n$1[0] = y$2(t$2, 14) + 1, r$1[0] = y$2(t$2, 1), 0 != y$2(t$2, 3) ? 0 : !t$2.h);
		}
		function mt$1(t$2, e$1) {
			if (4 > t$2) return t$2 + 1;
			var n$1 = t$2 - 2 >> 1;
			return (2 + (1 & t$2) << n$1) + y$2(e$1, n$1) + 1;
		}
		function vt$1(t$2, e$1) {
			return 120 < e$1 ? e$1 - 120 : 1 <= (n$1 = ((n$1 = Zr[e$1 - 1]) >> 4) * t$2 + (8 - (15 & n$1))) ? n$1 : 1;
			var n$1;
		}
		function bt$1(t$2, e$1, n$1) {
			var r$1 = L$2(n$1), i$3 = t$2[e$1 += 255 & r$1].g - 8;
			return 0 < i$3 && (A$2(n$1, n$1.u + 8), r$1 = L$2(n$1), e$1 += t$2[e$1].value, e$1 += r$1 & (1 << i$3) - 1), A$2(n$1, n$1.u + t$2[e$1].g), t$2[e$1].value;
		}
		function yt$1(t$2, n$1, r$1) {
			return r$1.g += t$2.g, r$1.value += t$2.value << n$1 >>> 0, e(8 >= r$1.g), t$2.g;
		}
		function wt$1(t$2, n$1, r$1) {
			var i$3 = t$2.xc;
			return e((n$1 = 0 == i$3 ? 0 : t$2.vc[t$2.md * (r$1 >> i$3) + (n$1 >> i$3)]) < t$2.Wb), t$2.Ya[n$1];
		}
		function Nt$1(t$2, n$1, i$3, a$2) {
			var o$2 = t$2.ab, s$2 = t$2.c * n$1, u$3 = t$2.C;
			n$1 = u$3 + n$1;
			var c$3 = i$3, l$3 = a$2;
			for (a$2 = t$2.Ta, i$3 = t$2.Ua; 0 < o$2--;) {
				var h$3 = t$2.gc[o$2], f$3 = u$3, d$3 = n$1, p$3 = c$3, g$3 = l$3, m$3 = (l$3 = a$2, c$3 = i$3, h$3.Ea);
				switch (e(f$3 < d$3), e(d$3 <= h$3.nc), h$3.hc) {
					case 2:
						Gn(p$3, g$3, (d$3 - f$3) * m$3, l$3, c$3);
						break;
					case 0:
						var v$3 = f$3, b$3 = d$3, y$3 = l$3, w$3 = c$3, N$3 = (_$2 = h$3).Ea;
						0 == v$3 && (Wn(p$3, g$3, null, null, 1, y$3, w$3), V$1(p$3, g$3 + 1, 0, 0, N$3 - 1, y$3, w$3 + 1), g$3 += N$3, w$3 += N$3, ++v$3);
						for (var L$3 = 1 << _$2.b, x$4 = L$3 - 1, A$3 = E$1(N$3, _$2.b), S$2 = _$2.K, _$2 = _$2.w + (v$3 >> _$2.b) * A$3; v$3 < b$3;) {
							var P$2 = S$2, k$2 = _$2, F$2 = 1;
							for (Vn(p$3, g$3, y$3, w$3 - N$3, 1, y$3, w$3); F$2 < N$3;) {
								var I$2 = (F$2 & ~x$4) + L$3;
								I$2 > N$3 && (I$2 = N$3), (0, Zn[P$2[k$2++] >> 8 & 15])(p$3, g$3 + +F$2, y$3, w$3 + F$2 - N$3, I$2 - F$2, y$3, w$3 + F$2), F$2 = I$2;
							}
							g$3 += N$3, w$3 += N$3, ++v$3 & x$4 || (_$2 += A$3);
						}
						d$3 != h$3.nc && r(l$3, c$3 - m$3, l$3, c$3 + (d$3 - f$3 - 1) * m$3, m$3);
						break;
					case 1:
						for (m$3 = p$3, b$3 = g$3, N$3 = (p$3 = h$3.Ea) - (w$3 = p$3 & ~(y$3 = (g$3 = 1 << h$3.b) - 1)), v$3 = E$1(p$3, h$3.b), L$3 = h$3.K, h$3 = h$3.w + (f$3 >> h$3.b) * v$3; f$3 < d$3;) {
							for (x$4 = L$3, A$3 = h$3, S$2 = new T$1(), _$2 = b$3 + w$3, P$2 = b$3 + p$3; b$3 < _$2;) Y$1(x$4[A$3++], S$2), $n(S$2, m$3, b$3, g$3, l$3, c$3), b$3 += g$3, c$3 += g$3;
							b$3 < P$2 && (Y$1(x$4[A$3++], S$2), $n(S$2, m$3, b$3, N$3, l$3, c$3), b$3 += N$3, c$3 += N$3), ++f$3 & y$3 || (h$3 += v$3);
						}
						break;
					case 3: if (p$3 == l$3 && g$3 == c$3 && 0 < h$3.b) {
						for (b$3 = l$3, p$3 = m$3 = c$3 + (d$3 - f$3) * m$3 - (w$3 = (d$3 - f$3) * E$1(h$3.Ea, h$3.b)), g$3 = l$3, y$3 = c$3, v$3 = [], w$3 = (N$3 = w$3) - 1; 0 <= w$3; --w$3) v$3[w$3] = g$3[y$3 + w$3];
						for (w$3 = N$3 - 1; 0 <= w$3; --w$3) b$3[p$3 + w$3] = v$3[w$3];
						Yn(h$3, f$3, d$3, l$3, m$3, l$3, c$3);
					} else Yn(h$3, f$3, d$3, p$3, g$3, l$3, c$3);
				}
				c$3 = a$2, l$3 = i$3;
			}
			l$3 != i$3 && r(a$2, i$3, c$3, l$3, s$2);
		}
		function Lt$1(t$2, n$1) {
			var r$1 = t$2.V, i$3 = t$2.Ba + t$2.c * t$2.C, a$2 = n$1 - t$2.C;
			if (e(n$1 <= t$2.l.o), e(16 >= a$2), 0 < a$2) {
				var o$2 = t$2.l, s$2 = t$2.Ta, u$3 = t$2.Ua, c$3 = o$2.width;
				if (Nt$1(t$2, a$2, r$1, i$3), a$2 = u$3 = [u$3], e((r$1 = t$2.C) < (i$3 = n$1)), e(o$2.v < o$2.va), i$3 > o$2.o && (i$3 = o$2.o), r$1 < o$2.j) {
					var l$3 = o$2.j - r$1;
					r$1 = o$2.j, a$2[0] += l$3 * c$3;
				}
				if (r$1 >= i$3 ? r$1 = 0 : (a$2[0] += 4 * o$2.v, o$2.ka = r$1 - o$2.j, o$2.U = o$2.va - o$2.v, o$2.T = i$3 - r$1, r$1 = 1), r$1) {
					if (u$3 = u$3[0], 11 > (r$1 = t$2.ca).S) {
						var h$3 = r$1.f.RGBA, f$3 = (i$3 = r$1.S, a$2 = o$2.U, o$2 = o$2.T, l$3 = h$3.eb, h$3.A), d$3 = o$2;
						for (h$3 = h$3.fb + t$2.Ma * h$3.A; 0 < d$3--;) {
							var p$3 = s$2, g$3 = u$3, m$3 = a$2, v$3 = l$3, b$3 = h$3;
							switch (i$3) {
								case Mr:
									Qn(p$3, g$3, m$3, v$3, b$3);
									break;
								case qr:
									tr(p$3, g$3, m$3, v$3, b$3);
									break;
								case Ur:
									tr(p$3, g$3, m$3, v$3, b$3), Lr(v$3, b$3, 0, m$3, 1, 0);
									break;
								case Er:
									rr(p$3, g$3, m$3, v$3, b$3);
									break;
								case Rr:
									et$2(p$3, g$3, m$3, v$3, b$3, 1);
									break;
								case Hr:
									et$2(p$3, g$3, m$3, v$3, b$3, 1), Lr(v$3, b$3, 0, m$3, 1, 0);
									break;
								case Dr:
									et$2(p$3, g$3, m$3, v$3, b$3, 0);
									break;
								case Wr:
									et$2(p$3, g$3, m$3, v$3, b$3, 0), Lr(v$3, b$3, 1, m$3, 1, 0);
									break;
								case Tr:
									er(p$3, g$3, m$3, v$3, b$3);
									break;
								case Vr:
									er(p$3, g$3, m$3, v$3, b$3), xr(v$3, b$3, m$3, 1, 0);
									break;
								case zr:
									nr(p$3, g$3, m$3, v$3, b$3);
									break;
								default: e(0);
							}
							u$3 += c$3, h$3 += f$3;
						}
						t$2.Ma += o$2;
					} else alert("todo:EmitRescaledRowsYUVA");
					e(t$2.Ma <= r$1.height);
				}
			}
			t$2.C = n$1, e(t$2.C <= t$2.i);
		}
		function xt$1(t$2) {
			var e$1;
			if (0 < t$2.ua) return 0;
			for (e$1 = 0; e$1 < t$2.Wb; ++e$1) {
				var n$1 = t$2.Ya[e$1].G, r$1 = t$2.Ya[e$1].H;
				if (0 < n$1[1][r$1[1] + 0].g || 0 < n$1[2][r$1[2] + 0].g || 0 < n$1[3][r$1[3] + 0].g) return 0;
			}
			return 1;
		}
		function At$1(t$2, n$1, r$1, i$3, a$2, o$2) {
			if (0 != t$2.Z) {
				var s$2 = t$2.qd, u$3 = t$2.rd;
				for (e(null != gi[t$2.Z]); n$1 < r$1; ++n$1) gi[t$2.Z](s$2, u$3, i$3, a$2, i$3, a$2, o$2), s$2 = i$3, u$3 = a$2, a$2 += o$2;
				t$2.qd = s$2, t$2.rd = u$3;
			}
		}
		function St$1(t$2, n$1) {
			var r$1 = t$2.l.ma, i$3 = 0 == r$1.Z || 1 == r$1.Z ? t$2.l.j : t$2.C;
			if (i$3 = t$2.C < i$3 ? i$3 : t$2.C, e(n$1 <= t$2.l.o), n$1 > i$3) {
				var a$2 = t$2.l.width, o$2 = r$1.ca, s$2 = r$1.tb + a$2 * i$3, u$3 = t$2.V, c$3 = t$2.Ba + t$2.c * i$3, l$3 = t$2.gc;
				e(1 == t$2.ab), e(3 == l$3[0].hc), Xn(l$3[0], i$3, n$1, u$3, c$3, o$2, s$2), At$1(r$1, i$3, n$1, o$2, s$2, a$2);
			}
			t$2.C = t$2.Ma = n$1;
		}
		function _t$1(t$2, n$1, r$1, i$3, a$2, o$2, s$2) {
			var u$3 = t$2.$ / i$3, c$3 = t$2.$ % i$3, l$3 = t$2.m, h$3 = t$2.s, f$3 = r$1 + t$2.$, d$3 = f$3;
			a$2 = r$1 + i$3 * a$2;
			var p$3 = r$1 + i$3 * o$2, g$3 = 280 + h$3.ua, m$3 = t$2.Pb ? u$3 : 16777216, v$3 = 0 < h$3.ua ? h$3.Wa : null, b$3 = h$3.wc, y$3 = f$3 < p$3 ? wt$1(h$3, c$3, u$3) : null;
			e(t$2.C < o$2), e(p$3 <= a$2);
			var w$3 = !1;
			t: for (;;) {
				for (; w$3 || f$3 < p$3;) {
					var N$3 = 0;
					if (u$3 >= m$3) {
						var _$2 = f$3 - r$1;
						e((m$3 = t$2).Pb), m$3.wd = m$3.m, m$3.xd = _$2, 0 < m$3.s.ua && B$1(m$3.s.Wa, m$3.s.vb), m$3 = u$3 + Qr;
					}
					if (c$3 & b$3 || (y$3 = wt$1(h$3, c$3, u$3)), e(null != y$3), y$3.Qb && (n$1[f$3] = y$3.qb, w$3 = !0), !w$3) if (S$1(l$3), y$3.jc) {
						N$3 = l$3, _$2 = n$1;
						var P$2 = f$3, k$2 = y$3.pd[L$2(N$3) & Rn - 1];
						e(y$3.jc), 256 > k$2.g ? (A$2(N$3, N$3.u + k$2.g), _$2[P$2] = k$2.value, N$3 = 0) : (A$2(N$3, N$3.u + k$2.g - 256), e(256 <= k$2.value), N$3 = k$2.value), 0 == N$3 && (w$3 = !0);
					} else N$3 = bt$1(y$3.G[0], y$3.H[0], l$3);
					if (l$3.h) break;
					if (w$3 || 256 > N$3) {
						if (!w$3) if (y$3.nd) n$1[f$3] = (y$3.qb | N$3 << 8) >>> 0;
						else {
							if (S$1(l$3), w$3 = bt$1(y$3.G[1], y$3.H[1], l$3), S$1(l$3), _$2 = bt$1(y$3.G[2], y$3.H[2], l$3), P$2 = bt$1(y$3.G[3], y$3.H[3], l$3), l$3.h) break;
							n$1[f$3] = (P$2 << 24 | w$3 << 16 | N$3 << 8 | _$2) >>> 0;
						}
						if (w$3 = !1, ++f$3, ++c$3 >= i$3 && (c$3 = 0, ++u$3, null != s$2 && u$3 <= o$2 && !(u$3 % 16) && s$2(t$2, u$3), null != v$3)) for (; d$3 < f$3;) N$3 = n$1[d$3++], v$3.X[(506832829 * N$3 & 4294967295) >>> v$3.Mb] = N$3;
					} else if (280 > N$3) {
						if (N$3 = mt$1(N$3 - 256, l$3), _$2 = bt$1(y$3.G[4], y$3.H[4], l$3), S$1(l$3), _$2 = vt$1(i$3, _$2 = mt$1(_$2, l$3)), l$3.h) break;
						if (f$3 - r$1 < _$2 || a$2 - f$3 < N$3) break t;
						for (P$2 = 0; P$2 < N$3; ++P$2) n$1[f$3 + P$2] = n$1[f$3 + P$2 - _$2];
						for (f$3 += N$3, c$3 += N$3; c$3 >= i$3;) c$3 -= i$3, ++u$3, null != s$2 && u$3 <= o$2 && !(u$3 % 16) && s$2(t$2, u$3);
						if (e(f$3 <= a$2), c$3 & b$3 && (y$3 = wt$1(h$3, c$3, u$3)), null != v$3) for (; d$3 < f$3;) N$3 = n$1[d$3++], v$3.X[(506832829 * N$3 & 4294967295) >>> v$3.Mb] = N$3;
					} else {
						if (!(N$3 < g$3)) break t;
						for (w$3 = N$3 - 280, e(null != v$3); d$3 < f$3;) N$3 = n$1[d$3++], v$3.X[(506832829 * N$3 & 4294967295) >>> v$3.Mb] = N$3;
						N$3 = f$3, e(!(w$3 >>> (_$2 = v$3).Xa)), n$1[N$3] = _$2.X[w$3], w$3 = !0;
					}
					w$3 || e(l$3.h == x$3(l$3));
				}
				if (t$2.Pb && l$3.h && f$3 < a$2) e(t$2.m.h), t$2.a = 5, t$2.m = t$2.wd, t$2.$ = t$2.xd, 0 < t$2.s.ua && B$1(t$2.s.vb, t$2.s.Wa);
				else {
					if (l$3.h) break t;
					s$2?.(t$2, u$3 > o$2 ? o$2 : u$3), t$2.a = 0, t$2.$ = f$3 - r$1;
				}
				return 1;
			}
			return t$2.a = 3, 0;
		}
		function Pt$1(t$2) {
			e(null != t$2), t$2.vc = null, t$2.yc = null, t$2.Ya = null;
			var n$1 = t$2.Wa;
			null != n$1 && (n$1.X = null), t$2.vb = null, e(null != t$2);
		}
		function kt$1() {
			var e$1 = new on();
			return null == e$1 ? null : (e$1.a = 0, e$1.xb = pi, nt$1("Predictor", "VP8LPredictors"), nt$1("Predictor", "VP8LPredictors_C"), nt$1("PredictorAdd", "VP8LPredictorsAdd"), nt$1("PredictorAdd", "VP8LPredictorsAdd_C"), Gn = G$1, $n = J$1, Qn = K$1, tr = Z$1, er = $$1, nr = Q$1, rr = tt$1, t$1.VP8LMapColor32b = Jn, t$1.VP8LMapColor8b = Kn, e$1);
		}
		function Ft$1(t$2, n$1, r$1, s$2, u$3) {
			var c$3 = 1, f$3 = [t$2], p$3 = [n$1], g$3 = s$2.m, m$3 = s$2.s, v$3 = null, b$3 = 0;
			t: for (;;) {
				if (r$1) for (; c$3 && y$2(g$3, 1);) {
					var w$3 = f$3, N$3 = p$3, x$4 = s$2, _$2 = 1, P$2 = x$4.m, k$2 = x$4.gc[x$4.ab], F$2 = y$2(P$2, 2);
					if (x$4.Oc & 1 << F$2) c$3 = 0;
					else {
						switch (x$4.Oc |= 1 << F$2, k$2.hc = F$2, k$2.Ea = w$3[0], k$2.nc = N$3[0], k$2.K = [null], ++x$4.ab, e(4 >= x$4.ab), F$2) {
							case 0:
							case 1:
								k$2.b = y$2(P$2, 3) + 2, _$2 = Ft$1(E$1(k$2.Ea, k$2.b), E$1(k$2.nc, k$2.b), 0, x$4, k$2.K), k$2.K = k$2.K[0];
								break;
							case 3:
								var I$2, j$2 = y$2(P$2, 8) + 1, C$2 = 16 < j$2 ? 0 : 4 < j$2 ? 1 : 2 < j$2 ? 2 : 3;
								if (w$3[0] = E$1(k$2.Ea, C$2), k$2.b = C$2, I$2 = _$2 = Ft$1(j$2, 1, 0, x$4, k$2.K)) {
									var B$2, M$2 = j$2, q$2 = k$2, D$2 = 1 << (8 >> q$2.b), T$2 = a$1(D$2);
									if (null == T$2) I$2 = 0;
									else {
										var z$2 = q$2.K[0], U$2 = q$2.w;
										for (T$2[0] = q$2.K[0][0], B$2 = 1; B$2 < 1 * M$2; ++B$2) T$2[B$2] = R$1(z$2[U$2 + B$2], T$2[B$2 - 1]);
										for (; B$2 < 4 * D$2; ++B$2) T$2[B$2] = 0;
										q$2.K[0] = null, q$2.K[0] = T$2, I$2 = 1;
									}
								}
								_$2 = I$2;
								break;
							case 2: break;
							default: e(0);
						}
						c$3 = _$2;
					}
				}
				if (f$3 = f$3[0], p$3 = p$3[0], c$3 && y$2(g$3, 1) && !(c$3 = 1 <= (b$3 = y$2(g$3, 4)) && 11 >= b$3)) {
					s$2.a = 3;
					break t;
				}
				var H$2;
				if (H$2 = c$3) e: {
					var W$2, V$2, G$2, Y$2 = s$2, J$2 = f$3, X$2 = p$3, K$2 = b$3, Z$2 = r$1, $$2 = Y$2.m, Q$2 = Y$2.s, tt$2 = [null], et$3 = 1, nt$2 = 0, rt$2 = $r[K$2];
					n: for (;;) {
						if (Z$2 && y$2($$2, 1)) {
							var it$2 = y$2($$2, 3) + 2, at$2 = E$1(J$2, it$2), ot$2 = E$1(X$2, it$2), st$2 = at$2 * ot$2;
							if (!Ft$1(at$2, ot$2, 0, Y$2, tt$2)) break n;
							for (tt$2 = tt$2[0], Q$2.xc = it$2, W$2 = 0; W$2 < st$2; ++W$2) {
								var ut$2 = tt$2[W$2] >> 8 & 65535;
								tt$2[W$2] = ut$2, ut$2 >= et$3 && (et$3 = ut$2 + 1);
							}
						}
						if ($$2.h) break n;
						for (V$2 = 0; 5 > V$2; ++V$2) {
							var ct$2 = Jr[V$2];
							!V$2 && 0 < K$2 && (ct$2 += 1 << K$2), nt$2 < ct$2 && (nt$2 = ct$2);
						}
						var lt$2 = o$1(et$3 * rt$2, h$2), ht$2 = et$3, ft$2 = o$1(ht$2, d$2);
						if (null == ft$2) var dt$2 = null;
						else e(65536 >= ht$2), dt$2 = ft$2;
						var pt$2 = a$1(nt$2);
						if (null == dt$2 || null == pt$2 || null == lt$2) {
							Y$2.a = 1;
							break n;
						}
						var gt$2 = lt$2;
						for (W$2 = G$2 = 0; W$2 < et$3; ++W$2) {
							var mt$2 = dt$2[W$2], vt$2 = mt$2.G, bt$2 = mt$2.H, wt$2 = 0, Nt$2 = 1, Lt$2 = 0;
							for (V$2 = 0; 5 > V$2; ++V$2) {
								ct$2 = Jr[V$2], vt$2[V$2] = gt$2, bt$2[V$2] = G$2, !V$2 && 0 < K$2 && (ct$2 += 1 << K$2);
								r: {
									var xt$2, At$2 = ct$2, St$2 = Y$2, kt$2 = pt$2, It$2 = gt$2, jt$2 = G$2, Ct$2 = 0, Ot$2 = St$2.m, Bt$2 = y$2(Ot$2, 1);
									if (i$2(kt$2, 0, 0, At$2), Bt$2) {
										var Mt$2 = y$2(Ot$2, 1) + 1, qt$2 = y$2(Ot$2, 1), Et$2 = y$2(Ot$2, 0 == qt$2 ? 1 : 8);
										kt$2[Et$2] = 1, 2 == Mt$2 && (kt$2[Et$2 = y$2(Ot$2, 8)] = 1);
										var Rt$2 = 1;
									} else {
										var Dt$2 = a$1(19), Tt$2 = y$2(Ot$2, 4) + 4;
										if (19 < Tt$2) {
											St$2.a = 3;
											var zt$2 = 0;
											break r;
										}
										for (xt$2 = 0; xt$2 < Tt$2; ++xt$2) Dt$2[Kr[xt$2]] = y$2(Ot$2, 3);
										var Ut$2 = void 0, Ht$2 = void 0, Wt$2 = St$2, Vt$2 = Dt$2, Gt$2 = At$2, Yt$2 = kt$2, Jt$2 = 0, Xt$2 = Wt$2.m, Kt$2 = 8, Zt$2 = o$1(128, h$2);
										i: for (; l$2(Zt$2, 0, 7, Vt$2, 19);) {
											if (y$2(Xt$2, 1)) {
												var $t$2 = 2 + 2 * y$2(Xt$2, 3);
												if ((Ut$2 = 2 + y$2(Xt$2, $t$2)) > Gt$2) break i;
											} else Ut$2 = Gt$2;
											for (Ht$2 = 0; Ht$2 < Gt$2 && Ut$2--;) {
												S$1(Xt$2);
												var Qt$2 = Zt$2[0 + (127 & L$2(Xt$2))];
												A$2(Xt$2, Xt$2.u + Qt$2.g);
												var te$2 = Qt$2.value;
												if (16 > te$2) Yt$2[Ht$2++] = te$2, 0 != te$2 && (Kt$2 = te$2);
												else {
													var ee$2 = 16 == te$2, ne$2 = te$2 - 16, re$2 = Yr[ne$2], ie$2 = y$2(Xt$2, Gr[ne$2]) + re$2;
													if (Ht$2 + ie$2 > Gt$2) break i;
													for (var ae$2 = ee$2 ? Kt$2 : 0; 0 < ie$2--;) Yt$2[Ht$2++] = ae$2;
												}
											}
											Jt$2 = 1;
											break i;
										}
										Jt$2 || (Wt$2.a = 3), Rt$2 = Jt$2;
									}
									(Rt$2 = Rt$2 && !Ot$2.h) && (Ct$2 = l$2(It$2, jt$2, 8, kt$2, At$2)), Rt$2 && 0 != Ct$2 ? zt$2 = Ct$2 : (St$2.a = 3, zt$2 = 0);
								}
								if (0 == zt$2) break n;
								if (Nt$2 && 1 == Xr[V$2] && (Nt$2 = 0 == gt$2[G$2].g), wt$2 += gt$2[G$2].g, G$2 += zt$2, 3 >= V$2) {
									var oe$2, se$2 = pt$2[0];
									for (oe$2 = 1; oe$2 < ct$2; ++oe$2) pt$2[oe$2] > se$2 && (se$2 = pt$2[oe$2]);
									Lt$2 += se$2;
								}
							}
							if (mt$2.nd = Nt$2, mt$2.Qb = 0, Nt$2 && (mt$2.qb = (vt$2[3][bt$2[3] + 0].value << 24 | vt$2[1][bt$2[1] + 0].value << 16 | vt$2[2][bt$2[2] + 0].value) >>> 0, 0 == wt$2 && 256 > vt$2[0][bt$2[0] + 0].value && (mt$2.Qb = 1, mt$2.qb += vt$2[0][bt$2[0] + 0].value << 8)), mt$2.jc = !mt$2.Qb && 6 > Lt$2, mt$2.jc) {
								var ue$2, ce$2 = mt$2;
								for (ue$2 = 0; ue$2 < Rn; ++ue$2) {
									var le$2 = ue$2, he$2 = ce$2.pd[le$2], fe$2 = ce$2.G[0][ce$2.H[0] + le$2];
									256 <= fe$2.value ? (he$2.g = fe$2.g + 256, he$2.value = fe$2.value) : (he$2.g = 0, he$2.value = 0, le$2 >>= yt$1(fe$2, 8, he$2), le$2 >>= yt$1(ce$2.G[1][ce$2.H[1] + le$2], 16, he$2), le$2 >>= yt$1(ce$2.G[2][ce$2.H[2] + le$2], 0, he$2), yt$1(ce$2.G[3][ce$2.H[3] + le$2], 24, he$2));
								}
							}
						}
						Q$2.vc = tt$2, Q$2.Wb = et$3, Q$2.Ya = dt$2, Q$2.yc = lt$2, H$2 = 1;
						break e;
					}
					H$2 = 0;
				}
				if (!(c$3 = H$2)) {
					s$2.a = 3;
					break t;
				}
				if (0 < b$3) {
					if (m$3.ua = 1 << b$3, !O$1(m$3.Wa, b$3)) {
						s$2.a = 1, c$3 = 0;
						break t;
					}
				} else m$3.ua = 0;
				var de$2 = s$2, pe$2 = f$3, ge$2 = p$3, me$2 = de$2.s, ve$2 = me$2.xc;
				if (de$2.c = pe$2, de$2.i = ge$2, me$2.md = E$1(pe$2, ve$2), me$2.wc = 0 == ve$2 ? -1 : (1 << ve$2) - 1, r$1) {
					s$2.xb = di;
					break t;
				}
				if (null == (v$3 = a$1(f$3 * p$3))) {
					s$2.a = 1, c$3 = 0;
					break t;
				}
				c$3 = (c$3 = _t$1(s$2, v$3, 0, f$3, p$3, p$3, null)) && !g$3.h;
				break t;
			}
			return c$3 ? (null != u$3 ? u$3[0] = v$3 : (e(null == v$3), e(r$1)), s$2.$ = 0, r$1 || Pt$1(m$3)) : Pt$1(m$3), c$3;
		}
		function It$1(t$2, n$1) {
			var r$1 = t$2.c * t$2.i, i$3 = r$1 + n$1 + 16 * n$1;
			return e(t$2.c <= n$1), t$2.V = a$1(i$3), null == t$2.V ? (t$2.Ta = null, t$2.Ua = 0, t$2.a = 1, 0) : (t$2.Ta = t$2.V, t$2.Ua = t$2.Ba + r$1 + n$1, 1);
		}
		function jt$1(t$2, n$1) {
			var r$1 = t$2.C, i$3 = n$1 - r$1, a$2 = t$2.V, o$2 = t$2.Ba + t$2.c * r$1;
			for (e(n$1 <= t$2.l.o); 0 < i$3;) {
				var s$2 = 16 < i$3 ? 16 : i$3, u$3 = t$2.l.ma, c$3 = t$2.l.width, l$3 = c$3 * s$2, h$3 = u$3.ca, f$3 = u$3.tb + c$3 * r$1, d$3 = t$2.Ta, p$3 = t$2.Ua;
				Nt$1(t$2, s$2, a$2, o$2), Sr(d$3, p$3, h$3, f$3, l$3), At$1(u$3, r$1, r$1 + s$2, h$3, f$3, c$3), i$3 -= s$2, a$2 += s$2 * t$2.c, r$1 += s$2;
			}
			e(r$1 == n$1), t$2.C = t$2.Ma = n$1;
		}
		function Ct$1() {
			this.ub = this.yd = this.td = this.Rb = 0;
		}
		function Ot$1() {
			this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
		}
		function Bt$1() {
			this.Fb = this.Bb = this.Cb = 0, this.Zb = a$1(4), this.Lb = a$1(4);
		}
		function Mt$1() {
			this.Yb = function() {
				var t$2 = [];
				return function t$3(e$1, n$1, r$1) {
					for (var i$3 = r$1[n$1], a$2 = 0; a$2 < i$3 && (e$1.push(r$1.length > n$1 + 1 ? [] : 0), !(r$1.length < n$1 + 1)); a$2++) t$3(e$1[a$2], n$1 + 1, r$1);
				}(t$2, 0, [3, 11]), t$2;
			}();
		}
		function qt$1() {
			this.jb = a$1(3), this.Wc = s$1([4, 8], Mt$1), this.Xc = s$1([4, 17], Mt$1);
		}
		function Et$1() {
			this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a$1(4), this.od = new a$1(4);
		}
		function Rt$1() {
			this.ld = this.La = this.dd = this.tc = 0;
		}
		function Dt$1() {
			this.Na = this.la = 0;
		}
		function Tt$1() {
			this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
		}
		function zt$1() {
			this.ad = a$1(384), this.Za = 0, this.Ob = a$1(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
		}
		function Ut$1() {
			this.uc = this.M = this.Nb = 0, this.wa = Array(new Rt$1()), this.Y = 0, this.ya = Array(new zt$1()), this.aa = 0, this.l = new Gt$1();
		}
		function Ht$1() {
			this.y = a$1(16), this.f = a$1(8), this.ea = a$1(8);
		}
		function Wt$1() {
			this.cb = this.a = 0, this.sc = "", this.m = new w$2(), this.Od = new Ct$1(), this.Kc = new Ot$1(), this.ed = new Et$1(), this.Qa = new Bt$1(), this.Ic = this.$c = this.Aa = 0, this.D = new Ut$1(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = o$1(8, w$2), this.ia = 0, this.pb = o$1(4, Tt$1), this.Pa = new qt$1(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [
				0,
				0,
				0,
				0
			], this.Gd = Array(new Ht$1()), this.Hd = 0, this.rb = Array(new Dt$1()), this.sb = 0, this.wa = Array(new Rt$1()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new zt$1()), this.L = this.aa = 0, this.gd = s$1([4, 2], Rt$1), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
		}
		function Vt$1(t$2, e$1) {
			return 0 > t$2 ? 0 : t$2 > e$1 ? e$1 : t$2;
		}
		function Gt$1() {
			this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
		}
		function Yt$1() {
			var t$2 = new Wt$1();
			return null != t$2 && (t$2.a = 0, t$2.sc = "OK", t$2.cb = 0, t$2.Xb = 0, ni || (ni = Zt$1)), t$2;
		}
		function Jt$1(t$2, e$1, n$1) {
			return 0 == t$2.a && (t$2.a = e$1, t$2.sc = n$1, t$2.cb = 0), 0;
		}
		function Xt$1(t$2, e$1, n$1) {
			return 3 <= n$1 && 157 == t$2[e$1 + 0] && 1 == t$2[e$1 + 1] && 42 == t$2[e$1 + 2];
		}
		function Kt$1(t$2, n$1) {
			if (null == t$2) return 0;
			if (t$2.a = 0, t$2.sc = "OK", null == n$1) return Jt$1(t$2, 2, "null VP8Io passed to VP8GetHeaders()");
			var r$1 = n$1.data, a$2 = n$1.w, o$2 = n$1.ha;
			if (4 > o$2) return Jt$1(t$2, 7, "Truncated header.");
			var s$2 = r$1[a$2 + 0] | r$1[a$2 + 1] << 8 | r$1[a$2 + 2] << 16, u$3 = t$2.Od;
			if (u$3.Rb = !(1 & s$2), u$3.td = s$2 >> 1 & 7, u$3.yd = s$2 >> 4 & 1, u$3.ub = s$2 >> 5, 3 < u$3.td) return Jt$1(t$2, 3, "Incorrect keyframe parameters.");
			if (!u$3.yd) return Jt$1(t$2, 4, "Frame not displayable.");
			a$2 += 3, o$2 -= 3;
			var c$3 = t$2.Kc;
			if (u$3.Rb) {
				if (7 > o$2) return Jt$1(t$2, 7, "cannot parse picture header");
				if (!Xt$1(r$1, a$2, o$2)) return Jt$1(t$2, 3, "Bad code word");
				c$3.c = 16383 & (r$1[a$2 + 4] << 8 | r$1[a$2 + 3]), c$3.Td = r$1[a$2 + 4] >> 6, c$3.i = 16383 & (r$1[a$2 + 6] << 8 | r$1[a$2 + 5]), c$3.Ud = r$1[a$2 + 6] >> 6, a$2 += 7, o$2 -= 7, t$2.za = c$3.c + 15 >> 4, t$2.Ub = c$3.i + 15 >> 4, n$1.width = c$3.c, n$1.height = c$3.i, n$1.Da = 0, n$1.j = 0, n$1.v = 0, n$1.va = n$1.width, n$1.o = n$1.height, n$1.da = 0, n$1.ib = n$1.width, n$1.hb = n$1.height, n$1.U = n$1.width, n$1.T = n$1.height, i$2((s$2 = t$2.Pa).jb, 0, 255, s$2.jb.length), e(null != (s$2 = t$2.Qa)), s$2.Cb = 0, s$2.Bb = 0, s$2.Fb = 1, i$2(s$2.Zb, 0, 0, s$2.Zb.length), i$2(s$2.Lb, 0, 0, s$2.Lb);
			}
			if (u$3.ub > o$2) return Jt$1(t$2, 7, "bad partition length");
			p$2(s$2 = t$2.m, r$1, a$2, u$3.ub), a$2 += u$3.ub, o$2 -= u$3.ub, u$3.Rb && (c$3.Ld = P$1(s$2), c$3.Kd = P$1(s$2)), c$3 = t$2.Qa;
			var l$3, h$3 = t$2.Pa;
			if (e(null != s$2), e(null != c$3), c$3.Cb = P$1(s$2), c$3.Cb) {
				if (c$3.Bb = P$1(s$2), P$1(s$2)) {
					for (c$3.Fb = P$1(s$2), l$3 = 0; 4 > l$3; ++l$3) c$3.Zb[l$3] = P$1(s$2) ? m$2(s$2, 7) : 0;
					for (l$3 = 0; 4 > l$3; ++l$3) c$3.Lb[l$3] = P$1(s$2) ? m$2(s$2, 6) : 0;
				}
				if (c$3.Bb) for (l$3 = 0; 3 > l$3; ++l$3) h$3.jb[l$3] = P$1(s$2) ? g$2(s$2, 8) : 255;
			} else c$3.Bb = 0;
			if (s$2.Ka) return Jt$1(t$2, 3, "cannot parse segment header");
			if ((c$3 = t$2.ed).zd = P$1(s$2), c$3.Tb = g$2(s$2, 6), c$3.wb = g$2(s$2, 3), c$3.Pc = P$1(s$2), c$3.Pc && P$1(s$2)) {
				for (h$3 = 0; 4 > h$3; ++h$3) P$1(s$2) && (c$3.vd[h$3] = m$2(s$2, 6));
				for (h$3 = 0; 4 > h$3; ++h$3) P$1(s$2) && (c$3.od[h$3] = m$2(s$2, 6));
			}
			if (t$2.L = 0 == c$3.Tb ? 0 : c$3.zd ? 1 : 2, s$2.Ka) return Jt$1(t$2, 3, "cannot parse filter header");
			var f$3 = o$2;
			if (o$2 = l$3 = a$2, a$2 = l$3 + f$3, c$3 = f$3, t$2.Xb = (1 << g$2(t$2.m, 2)) - 1, f$3 < 3 * (h$3 = t$2.Xb)) r$1 = 7;
			else {
				for (l$3 += 3 * h$3, c$3 -= 3 * h$3, f$3 = 0; f$3 < h$3; ++f$3) {
					var d$3 = r$1[o$2 + 0] | r$1[o$2 + 1] << 8 | r$1[o$2 + 2] << 16;
					d$3 > c$3 && (d$3 = c$3), p$2(t$2.Jc[+f$3], r$1, l$3, d$3), l$3 += d$3, c$3 -= d$3, o$2 += 3;
				}
				p$2(t$2.Jc[+h$3], r$1, l$3, c$3), r$1 = l$3 < a$2 ? 0 : 5;
			}
			if (0 != r$1) return Jt$1(t$2, r$1, "cannot parse partitions");
			for (r$1 = g$2(l$3 = t$2.m, 7), o$2 = P$1(l$3) ? m$2(l$3, 4) : 0, a$2 = P$1(l$3) ? m$2(l$3, 4) : 0, c$3 = P$1(l$3) ? m$2(l$3, 4) : 0, h$3 = P$1(l$3) ? m$2(l$3, 4) : 0, l$3 = P$1(l$3) ? m$2(l$3, 4) : 0, f$3 = t$2.Qa, d$3 = 0; 4 > d$3; ++d$3) {
				if (f$3.Cb) {
					var v$3 = f$3.Zb[d$3];
					f$3.Fb || (v$3 += r$1);
				} else {
					if (0 < d$3) {
						t$2.pb[d$3] = t$2.pb[0];
						continue;
					}
					v$3 = r$1;
				}
				var b$3 = t$2.pb[d$3];
				b$3.Sc[0] = ti[Vt$1(v$3 + o$2, 127)], b$3.Sc[1] = ei[Vt$1(v$3 + 0, 127)], b$3.Eb[0] = 2 * ti[Vt$1(v$3 + a$2, 127)], b$3.Eb[1] = 101581 * ei[Vt$1(v$3 + c$3, 127)] >> 16, 8 > b$3.Eb[1] && (b$3.Eb[1] = 8), b$3.Qc[0] = ti[Vt$1(v$3 + h$3, 117)], b$3.Qc[1] = ei[Vt$1(v$3 + l$3, 127)], b$3.lc = v$3 + l$3;
			}
			if (!u$3.Rb) return Jt$1(t$2, 4, "Not a key frame.");
			for (P$1(s$2), u$3 = t$2.Pa, r$1 = 0; 4 > r$1; ++r$1) {
				for (o$2 = 0; 8 > o$2; ++o$2) for (a$2 = 0; 3 > a$2; ++a$2) for (c$3 = 0; 11 > c$3; ++c$3) h$3 = k$1(s$2, ui[r$1][o$2][a$2][c$3]) ? g$2(s$2, 8) : oi[r$1][o$2][a$2][c$3], u$3.Wc[r$1][o$2].Yb[a$2][c$3] = h$3;
				for (o$2 = 0; 17 > o$2; ++o$2) u$3.Xc[r$1][o$2] = u$3.Wc[r$1][ci[o$2]];
			}
			return t$2.kc = P$1(s$2), t$2.kc && (t$2.Bd = g$2(s$2, 8)), t$2.cb = 1;
		}
		function Zt$1(t$2, e$1, n$1, r$1, i$3, a$2, o$2) {
			var s$2 = e$1[i$3].Yb[n$1];
			for (n$1 = 0; 16 > i$3; ++i$3) {
				if (!k$1(t$2, s$2[n$1 + 0])) return i$3;
				for (; !k$1(t$2, s$2[n$1 + 1]);) if (s$2 = e$1[++i$3].Yb[0], n$1 = 0, 16 == i$3) return 16;
				var u$3 = e$1[i$3 + 1].Yb;
				if (k$1(t$2, s$2[n$1 + 2])) {
					var c$3 = t$2, l$3 = 0;
					if (k$1(c$3, (f$3 = s$2)[(h$3 = n$1) + 3])) if (k$1(c$3, f$3[h$3 + 6])) {
						for (s$2 = 0, h$3 = 2 * (l$3 = k$1(c$3, f$3[h$3 + 8])) + (f$3 = k$1(c$3, f$3[h$3 + 9 + l$3])), l$3 = 0, f$3 = ri[h$3]; f$3[s$2]; ++s$2) l$3 += l$3 + k$1(c$3, f$3[s$2]);
						l$3 += 3 + (8 << h$3);
					} else k$1(c$3, f$3[h$3 + 7]) ? (l$3 = 7 + 2 * k$1(c$3, 165), l$3 += k$1(c$3, 145)) : l$3 = 5 + k$1(c$3, 159);
					else l$3 = k$1(c$3, f$3[h$3 + 4]) ? 3 + k$1(c$3, f$3[h$3 + 5]) : 2;
					s$2 = u$3[2];
				} else l$3 = 1, s$2 = u$3[1];
				u$3 = o$2 + ii[i$3], 0 > (c$3 = t$2).b && _$1(c$3);
				var h$3, f$3 = c$3.b, d$3 = (h$3 = c$3.Ca >> 1) - (c$3.I >> f$3) >> 31;
				--c$3.b, c$3.Ca += d$3, c$3.Ca |= 1, c$3.I -= (h$3 + 1 & d$3) << f$3, a$2[u$3] = ((l$3 ^ d$3) - d$3) * r$1[(0 < i$3) + 0];
			}
			return 16;
		}
		function $t$1(t$2) {
			var e$1 = t$2.rb[t$2.sb - 1];
			e$1.la = 0, e$1.Na = 0, i$2(t$2.zc, 0, 0, t$2.zc.length), t$2.ja = 0;
		}
		function Qt$1(t$2, e$1, n$1, r$1, i$3) {
			i$3 = t$2[e$1 + n$1 + 32 * r$1] + (i$3 >> 3), t$2[e$1 + n$1 + 32 * r$1] = -256 & i$3 ? 0 > i$3 ? 0 : 255 : i$3;
		}
		function te$1(t$2, e$1, n$1, r$1, i$3, a$2) {
			Qt$1(t$2, e$1, 0, n$1, r$1 + i$3), Qt$1(t$2, e$1, 1, n$1, r$1 + a$2), Qt$1(t$2, e$1, 2, n$1, r$1 - a$2), Qt$1(t$2, e$1, 3, n$1, r$1 - i$3);
		}
		function ee$1(t$2) {
			return (20091 * t$2 >> 16) + t$2;
		}
		function ne$1(t$2, e$1, n$1, r$1) {
			var i$3, o$2 = 0, s$2 = a$1(16);
			for (i$3 = 0; 4 > i$3; ++i$3) {
				var u$3 = t$2[e$1 + 0] + t$2[e$1 + 8], c$3 = t$2[e$1 + 0] - t$2[e$1 + 8], l$3 = (35468 * t$2[e$1 + 4] >> 16) - ee$1(t$2[e$1 + 12]), h$3 = ee$1(t$2[e$1 + 4]) + (35468 * t$2[e$1 + 12] >> 16);
				s$2[o$2 + 0] = u$3 + h$3, s$2[o$2 + 1] = c$3 + l$3, s$2[o$2 + 2] = c$3 - l$3, s$2[o$2 + 3] = u$3 - h$3, o$2 += 4, e$1++;
			}
			for (i$3 = o$2 = 0; 4 > i$3; ++i$3) u$3 = (t$2 = s$2[o$2 + 0] + 4) + s$2[o$2 + 8], c$3 = t$2 - s$2[o$2 + 8], l$3 = (35468 * s$2[o$2 + 4] >> 16) - ee$1(s$2[o$2 + 12]), Qt$1(n$1, r$1, 0, 0, u$3 + (h$3 = ee$1(s$2[o$2 + 4]) + (35468 * s$2[o$2 + 12] >> 16))), Qt$1(n$1, r$1, 1, 0, c$3 + l$3), Qt$1(n$1, r$1, 2, 0, c$3 - l$3), Qt$1(n$1, r$1, 3, 0, u$3 - h$3), o$2++, r$1 += 32;
		}
		function re$1(t$2, e$1, n$1, r$1) {
			var i$3 = t$2[e$1 + 0] + 4, a$2 = 35468 * t$2[e$1 + 4] >> 16, o$2 = ee$1(t$2[e$1 + 4]), s$2 = 35468 * t$2[e$1 + 1] >> 16;
			te$1(n$1, r$1, 0, i$3 + o$2, t$2 = ee$1(t$2[e$1 + 1]), s$2), te$1(n$1, r$1, 1, i$3 + a$2, t$2, s$2), te$1(n$1, r$1, 2, i$3 - a$2, t$2, s$2), te$1(n$1, r$1, 3, i$3 - o$2, t$2, s$2);
		}
		function ie$1(t$2, e$1, n$1, r$1, i$3) {
			ne$1(t$2, e$1, n$1, r$1), i$3 && ne$1(t$2, e$1 + 16, n$1, r$1 + 4);
		}
		function ae$1(t$2, e$1, n$1, r$1) {
			ar(t$2, e$1 + 0, n$1, r$1, 1), ar(t$2, e$1 + 32, n$1, r$1 + 128, 1);
		}
		function oe$1(t$2, e$1, n$1, r$1) {
			var i$3;
			for (t$2 = t$2[e$1 + 0] + 4, i$3 = 0; 4 > i$3; ++i$3) for (e$1 = 0; 4 > e$1; ++e$1) Qt$1(n$1, r$1, e$1, i$3, t$2);
		}
		function se$1(t$2, e$1, n$1, r$1) {
			t$2[e$1 + 0] && ur(t$2, e$1 + 0, n$1, r$1), t$2[e$1 + 16] && ur(t$2, e$1 + 16, n$1, r$1 + 4), t$2[e$1 + 32] && ur(t$2, e$1 + 32, n$1, r$1 + 128), t$2[e$1 + 48] && ur(t$2, e$1 + 48, n$1, r$1 + 128 + 4);
		}
		function ue$1(t$2, e$1, n$1, r$1) {
			var i$3, o$2 = a$1(16);
			for (i$3 = 0; 4 > i$3; ++i$3) {
				var s$2 = t$2[e$1 + 0 + i$3] + t$2[e$1 + 12 + i$3], u$3 = t$2[e$1 + 4 + i$3] + t$2[e$1 + 8 + i$3], c$3 = t$2[e$1 + 4 + i$3] - t$2[e$1 + 8 + i$3], l$3 = t$2[e$1 + 0 + i$3] - t$2[e$1 + 12 + i$3];
				o$2[0 + i$3] = s$2 + u$3, o$2[8 + i$3] = s$2 - u$3, o$2[4 + i$3] = l$3 + c$3, o$2[12 + i$3] = l$3 - c$3;
			}
			for (i$3 = 0; 4 > i$3; ++i$3) s$2 = (t$2 = o$2[0 + 4 * i$3] + 3) + o$2[3 + 4 * i$3], u$3 = o$2[1 + 4 * i$3] + o$2[2 + 4 * i$3], c$3 = o$2[1 + 4 * i$3] - o$2[2 + 4 * i$3], l$3 = t$2 - o$2[3 + 4 * i$3], n$1[r$1 + 0] = s$2 + u$3 >> 3, n$1[r$1 + 16] = l$3 + c$3 >> 3, n$1[r$1 + 32] = s$2 - u$3 >> 3, n$1[r$1 + 48] = l$3 - c$3 >> 3, r$1 += 64;
		}
		function ce$1(t$2, e$1, n$1) {
			var r$1, i$3 = e$1 - 32, a$2 = Or, o$2 = 255 - t$2[i$3 - 1];
			for (r$1 = 0; r$1 < n$1; ++r$1) {
				var s$2, u$3 = a$2, c$3 = o$2 + t$2[e$1 - 1];
				for (s$2 = 0; s$2 < n$1; ++s$2) t$2[e$1 + s$2] = u$3[c$3 + t$2[i$3 + s$2]];
				e$1 += 32;
			}
		}
		function le$1(t$2, e$1) {
			ce$1(t$2, e$1, 4);
		}
		function he$1(t$2, e$1) {
			ce$1(t$2, e$1, 8);
		}
		function fe$1(t$2, e$1) {
			ce$1(t$2, e$1, 16);
		}
		function de$1(t$2, e$1) {
			var n$1;
			for (n$1 = 0; 16 > n$1; ++n$1) r(t$2, e$1 + 32 * n$1, t$2, e$1 - 32, 16);
		}
		function pe$1(t$2, e$1) {
			var n$1;
			for (n$1 = 16; 0 < n$1; --n$1) i$2(t$2, e$1, t$2[e$1 - 1], 16), e$1 += 32;
		}
		function ge$1(t$2, e$1, n$1) {
			var r$1;
			for (r$1 = 0; 16 > r$1; ++r$1) i$2(e$1, n$1 + 32 * r$1, t$2, 16);
		}
		function me$1(t$2, e$1) {
			var n$1, r$1 = 16;
			for (n$1 = 0; 16 > n$1; ++n$1) r$1 += t$2[e$1 - 1 + 32 * n$1] + t$2[e$1 + n$1 - 32];
			ge$1(r$1 >> 5, t$2, e$1);
		}
		function ve$1(t$2, e$1) {
			var n$1, r$1 = 8;
			for (n$1 = 0; 16 > n$1; ++n$1) r$1 += t$2[e$1 - 1 + 32 * n$1];
			ge$1(r$1 >> 4, t$2, e$1);
		}
		function be$1(t$2, e$1) {
			var n$1, r$1 = 8;
			for (n$1 = 0; 16 > n$1; ++n$1) r$1 += t$2[e$1 + n$1 - 32];
			ge$1(r$1 >> 4, t$2, e$1);
		}
		function ye$1(t$2, e$1) {
			ge$1(128, t$2, e$1);
		}
		function we$1(t$2, e$1, n$1) {
			return t$2 + 2 * e$1 + n$1 + 2 >> 2;
		}
		function Ne$1(t$2, e$1) {
			var n$1, i$3 = e$1 - 32;
			for (i$3 = new Uint8Array([
				we$1(t$2[i$3 - 1], t$2[i$3 + 0], t$2[i$3 + 1]),
				we$1(t$2[i$3 + 0], t$2[i$3 + 1], t$2[i$3 + 2]),
				we$1(t$2[i$3 + 1], t$2[i$3 + 2], t$2[i$3 + 3]),
				we$1(t$2[i$3 + 2], t$2[i$3 + 3], t$2[i$3 + 4])
			]), n$1 = 0; 4 > n$1; ++n$1) r(t$2, e$1 + 32 * n$1, i$3, 0, i$3.length);
		}
		function Le$1(t$2, e$1) {
			var n$1 = t$2[e$1 - 1], r$1 = t$2[e$1 - 1 + 32], i$3 = t$2[e$1 - 1 + 64], a$2 = t$2[e$1 - 1 + 96];
			F$1(t$2, e$1 + 0, 16843009 * we$1(t$2[e$1 - 1 - 32], n$1, r$1)), F$1(t$2, e$1 + 32, 16843009 * we$1(n$1, r$1, i$3)), F$1(t$2, e$1 + 64, 16843009 * we$1(r$1, i$3, a$2)), F$1(t$2, e$1 + 96, 16843009 * we$1(i$3, a$2, a$2));
		}
		function xe$1(t$2, e$1) {
			var n$1, r$1 = 4;
			for (n$1 = 0; 4 > n$1; ++n$1) r$1 += t$2[e$1 + n$1 - 32] + t$2[e$1 - 1 + 32 * n$1];
			for (r$1 >>= 3, n$1 = 0; 4 > n$1; ++n$1) i$2(t$2, e$1 + 32 * n$1, r$1, 4);
		}
		function Ae$1(t$2, e$1) {
			var n$1 = t$2[e$1 - 1 + 0], r$1 = t$2[e$1 - 1 + 32], i$3 = t$2[e$1 - 1 + 64], a$2 = t$2[e$1 - 1 - 32], o$2 = t$2[e$1 + 0 - 32], s$2 = t$2[e$1 + 1 - 32], u$3 = t$2[e$1 + 2 - 32], c$3 = t$2[e$1 + 3 - 32];
			t$2[e$1 + 0 + 96] = we$1(r$1, i$3, t$2[e$1 - 1 + 96]), t$2[e$1 + 1 + 96] = t$2[e$1 + 0 + 64] = we$1(n$1, r$1, i$3), t$2[e$1 + 2 + 96] = t$2[e$1 + 1 + 64] = t$2[e$1 + 0 + 32] = we$1(a$2, n$1, r$1), t$2[e$1 + 3 + 96] = t$2[e$1 + 2 + 64] = t$2[e$1 + 1 + 32] = t$2[e$1 + 0 + 0] = we$1(o$2, a$2, n$1), t$2[e$1 + 3 + 64] = t$2[e$1 + 2 + 32] = t$2[e$1 + 1 + 0] = we$1(s$2, o$2, a$2), t$2[e$1 + 3 + 32] = t$2[e$1 + 2 + 0] = we$1(u$3, s$2, o$2), t$2[e$1 + 3 + 0] = we$1(c$3, u$3, s$2);
		}
		function Se$1(t$2, e$1) {
			var n$1 = t$2[e$1 + 1 - 32], r$1 = t$2[e$1 + 2 - 32], i$3 = t$2[e$1 + 3 - 32], a$2 = t$2[e$1 + 4 - 32], o$2 = t$2[e$1 + 5 - 32], s$2 = t$2[e$1 + 6 - 32], u$3 = t$2[e$1 + 7 - 32];
			t$2[e$1 + 0 + 0] = we$1(t$2[e$1 + 0 - 32], n$1, r$1), t$2[e$1 + 1 + 0] = t$2[e$1 + 0 + 32] = we$1(n$1, r$1, i$3), t$2[e$1 + 2 + 0] = t$2[e$1 + 1 + 32] = t$2[e$1 + 0 + 64] = we$1(r$1, i$3, a$2), t$2[e$1 + 3 + 0] = t$2[e$1 + 2 + 32] = t$2[e$1 + 1 + 64] = t$2[e$1 + 0 + 96] = we$1(i$3, a$2, o$2), t$2[e$1 + 3 + 32] = t$2[e$1 + 2 + 64] = t$2[e$1 + 1 + 96] = we$1(a$2, o$2, s$2), t$2[e$1 + 3 + 64] = t$2[e$1 + 2 + 96] = we$1(o$2, s$2, u$3), t$2[e$1 + 3 + 96] = we$1(s$2, u$3, u$3);
		}
		function _e$1(t$2, e$1) {
			var n$1 = t$2[e$1 - 1 + 0], r$1 = t$2[e$1 - 1 + 32], i$3 = t$2[e$1 - 1 + 64], a$2 = t$2[e$1 - 1 - 32], o$2 = t$2[e$1 + 0 - 32], s$2 = t$2[e$1 + 1 - 32], u$3 = t$2[e$1 + 2 - 32], c$3 = t$2[e$1 + 3 - 32];
			t$2[e$1 + 0 + 0] = t$2[e$1 + 1 + 64] = a$2 + o$2 + 1 >> 1, t$2[e$1 + 1 + 0] = t$2[e$1 + 2 + 64] = o$2 + s$2 + 1 >> 1, t$2[e$1 + 2 + 0] = t$2[e$1 + 3 + 64] = s$2 + u$3 + 1 >> 1, t$2[e$1 + 3 + 0] = u$3 + c$3 + 1 >> 1, t$2[e$1 + 0 + 96] = we$1(i$3, r$1, n$1), t$2[e$1 + 0 + 64] = we$1(r$1, n$1, a$2), t$2[e$1 + 0 + 32] = t$2[e$1 + 1 + 96] = we$1(n$1, a$2, o$2), t$2[e$1 + 1 + 32] = t$2[e$1 + 2 + 96] = we$1(a$2, o$2, s$2), t$2[e$1 + 2 + 32] = t$2[e$1 + 3 + 96] = we$1(o$2, s$2, u$3), t$2[e$1 + 3 + 32] = we$1(s$2, u$3, c$3);
		}
		function Pe$1(t$2, e$1) {
			var n$1 = t$2[e$1 + 0 - 32], r$1 = t$2[e$1 + 1 - 32], i$3 = t$2[e$1 + 2 - 32], a$2 = t$2[e$1 + 3 - 32], o$2 = t$2[e$1 + 4 - 32], s$2 = t$2[e$1 + 5 - 32], u$3 = t$2[e$1 + 6 - 32], c$3 = t$2[e$1 + 7 - 32];
			t$2[e$1 + 0 + 0] = n$1 + r$1 + 1 >> 1, t$2[e$1 + 1 + 0] = t$2[e$1 + 0 + 64] = r$1 + i$3 + 1 >> 1, t$2[e$1 + 2 + 0] = t$2[e$1 + 1 + 64] = i$3 + a$2 + 1 >> 1, t$2[e$1 + 3 + 0] = t$2[e$1 + 2 + 64] = a$2 + o$2 + 1 >> 1, t$2[e$1 + 0 + 32] = we$1(n$1, r$1, i$3), t$2[e$1 + 1 + 32] = t$2[e$1 + 0 + 96] = we$1(r$1, i$3, a$2), t$2[e$1 + 2 + 32] = t$2[e$1 + 1 + 96] = we$1(i$3, a$2, o$2), t$2[e$1 + 3 + 32] = t$2[e$1 + 2 + 96] = we$1(a$2, o$2, s$2), t$2[e$1 + 3 + 64] = we$1(o$2, s$2, u$3), t$2[e$1 + 3 + 96] = we$1(s$2, u$3, c$3);
		}
		function ke$1(t$2, e$1) {
			var n$1 = t$2[e$1 - 1 + 0], r$1 = t$2[e$1 - 1 + 32], i$3 = t$2[e$1 - 1 + 64], a$2 = t$2[e$1 - 1 + 96];
			t$2[e$1 + 0 + 0] = n$1 + r$1 + 1 >> 1, t$2[e$1 + 2 + 0] = t$2[e$1 + 0 + 32] = r$1 + i$3 + 1 >> 1, t$2[e$1 + 2 + 32] = t$2[e$1 + 0 + 64] = i$3 + a$2 + 1 >> 1, t$2[e$1 + 1 + 0] = we$1(n$1, r$1, i$3), t$2[e$1 + 3 + 0] = t$2[e$1 + 1 + 32] = we$1(r$1, i$3, a$2), t$2[e$1 + 3 + 32] = t$2[e$1 + 1 + 64] = we$1(i$3, a$2, a$2), t$2[e$1 + 3 + 64] = t$2[e$1 + 2 + 64] = t$2[e$1 + 0 + 96] = t$2[e$1 + 1 + 96] = t$2[e$1 + 2 + 96] = t$2[e$1 + 3 + 96] = a$2;
		}
		function Fe$1(t$2, e$1) {
			var n$1 = t$2[e$1 - 1 + 0], r$1 = t$2[e$1 - 1 + 32], i$3 = t$2[e$1 - 1 + 64], a$2 = t$2[e$1 - 1 + 96], o$2 = t$2[e$1 - 1 - 32], s$2 = t$2[e$1 + 0 - 32], u$3 = t$2[e$1 + 1 - 32], c$3 = t$2[e$1 + 2 - 32];
			t$2[e$1 + 0 + 0] = t$2[e$1 + 2 + 32] = n$1 + o$2 + 1 >> 1, t$2[e$1 + 0 + 32] = t$2[e$1 + 2 + 64] = r$1 + n$1 + 1 >> 1, t$2[e$1 + 0 + 64] = t$2[e$1 + 2 + 96] = i$3 + r$1 + 1 >> 1, t$2[e$1 + 0 + 96] = a$2 + i$3 + 1 >> 1, t$2[e$1 + 3 + 0] = we$1(s$2, u$3, c$3), t$2[e$1 + 2 + 0] = we$1(o$2, s$2, u$3), t$2[e$1 + 1 + 0] = t$2[e$1 + 3 + 32] = we$1(n$1, o$2, s$2), t$2[e$1 + 1 + 32] = t$2[e$1 + 3 + 64] = we$1(r$1, n$1, o$2), t$2[e$1 + 1 + 64] = t$2[e$1 + 3 + 96] = we$1(i$3, r$1, n$1), t$2[e$1 + 1 + 96] = we$1(a$2, i$3, r$1);
		}
		function Ie$1(t$2, e$1) {
			var n$1;
			for (n$1 = 0; 8 > n$1; ++n$1) r(t$2, e$1 + 32 * n$1, t$2, e$1 - 32, 8);
		}
		function je$1(t$2, e$1) {
			var n$1;
			for (n$1 = 0; 8 > n$1; ++n$1) i$2(t$2, e$1, t$2[e$1 - 1], 8), e$1 += 32;
		}
		function Ce(t$2, e$1, n$1) {
			var r$1;
			for (r$1 = 0; 8 > r$1; ++r$1) i$2(e$1, n$1 + 32 * r$1, t$2, 8);
		}
		function Oe(t$2, e$1) {
			var n$1, r$1 = 8;
			for (n$1 = 0; 8 > n$1; ++n$1) r$1 += t$2[e$1 + n$1 - 32] + t$2[e$1 - 1 + 32 * n$1];
			Ce(r$1 >> 4, t$2, e$1);
		}
		function Be(t$2, e$1) {
			var n$1, r$1 = 4;
			for (n$1 = 0; 8 > n$1; ++n$1) r$1 += t$2[e$1 + n$1 - 32];
			Ce(r$1 >> 3, t$2, e$1);
		}
		function Me(t$2, e$1) {
			var n$1, r$1 = 4;
			for (n$1 = 0; 8 > n$1; ++n$1) r$1 += t$2[e$1 - 1 + 32 * n$1];
			Ce(r$1 >> 3, t$2, e$1);
		}
		function qe(t$2, e$1) {
			Ce(128, t$2, e$1);
		}
		function Ee(t$2, e$1, n$1) {
			var r$1 = t$2[e$1 - n$1], i$3 = t$2[e$1 + 0], a$2 = 3 * (i$3 - r$1) + jr[1020 + t$2[e$1 - 2 * n$1] - t$2[e$1 + n$1]], o$2 = Cr[112 + (a$2 + 4 >> 3)];
			t$2[e$1 - n$1] = Or[255 + r$1 + Cr[112 + (a$2 + 3 >> 3)]], t$2[e$1 + 0] = Or[255 + i$3 - o$2];
		}
		function Re(t$2, e$1, n$1, r$1) {
			var i$3 = t$2[e$1 + 0], a$2 = t$2[e$1 + n$1];
			return Br[255 + t$2[e$1 - 2 * n$1] - t$2[e$1 - n$1]] > r$1 || Br[255 + a$2 - i$3] > r$1;
		}
		function De(t$2, e$1, n$1, r$1) {
			return 4 * Br[255 + t$2[e$1 - n$1] - t$2[e$1 + 0]] + Br[255 + t$2[e$1 - 2 * n$1] - t$2[e$1 + n$1]] <= r$1;
		}
		function Te(t$2, e$1, n$1, r$1, i$3) {
			var a$2 = t$2[e$1 - 3 * n$1], o$2 = t$2[e$1 - 2 * n$1], s$2 = t$2[e$1 - n$1], u$3 = t$2[e$1 + 0], c$3 = t$2[e$1 + n$1], l$3 = t$2[e$1 + 2 * n$1], h$3 = t$2[e$1 + 3 * n$1];
			return 4 * Br[255 + s$2 - u$3] + Br[255 + o$2 - c$3] > r$1 ? 0 : Br[255 + t$2[e$1 - 4 * n$1] - a$2] <= i$3 && Br[255 + a$2 - o$2] <= i$3 && Br[255 + o$2 - s$2] <= i$3 && Br[255 + h$3 - l$3] <= i$3 && Br[255 + l$3 - c$3] <= i$3 && Br[255 + c$3 - u$3] <= i$3;
		}
		function ze(t$2, e$1, n$1, r$1) {
			var i$3 = 2 * r$1 + 1;
			for (r$1 = 0; 16 > r$1; ++r$1) De(t$2, e$1 + r$1, n$1, i$3) && Ee(t$2, e$1 + r$1, n$1);
		}
		function Ue(t$2, e$1, n$1, r$1) {
			var i$3 = 2 * r$1 + 1;
			for (r$1 = 0; 16 > r$1; ++r$1) De(t$2, e$1 + r$1 * n$1, 1, i$3) && Ee(t$2, e$1 + r$1 * n$1, 1);
		}
		function He(t$2, e$1, n$1, r$1) {
			var i$3;
			for (i$3 = 3; 0 < i$3; --i$3) ze(t$2, e$1 += 4 * n$1, n$1, r$1);
		}
		function We(t$2, e$1, n$1, r$1) {
			var i$3;
			for (i$3 = 3; 0 < i$3; --i$3) Ue(t$2, e$1 += 4, n$1, r$1);
		}
		function Ve(t$2, e$1, n$1, r$1, i$3, a$2, o$2, s$2) {
			for (a$2 = 2 * a$2 + 1; 0 < i$3--;) {
				if (Te(t$2, e$1, n$1, a$2, o$2)) if (Re(t$2, e$1, n$1, s$2)) Ee(t$2, e$1, n$1);
				else {
					var u$3 = t$2, c$3 = e$1, l$3 = n$1, h$3 = u$3[c$3 - 2 * l$3], f$3 = u$3[c$3 - l$3], d$3 = u$3[c$3 + 0], p$3 = u$3[c$3 + l$3], g$3 = u$3[c$3 + 2 * l$3], m$3 = 27 * (b$3 = jr[1020 + 3 * (d$3 - f$3) + jr[1020 + h$3 - p$3]]) + 63 >> 7, v$3 = 18 * b$3 + 63 >> 7, b$3 = 9 * b$3 + 63 >> 7;
					u$3[c$3 - 3 * l$3] = Or[255 + u$3[c$3 - 3 * l$3] + b$3], u$3[c$3 - 2 * l$3] = Or[255 + h$3 + v$3], u$3[c$3 - l$3] = Or[255 + f$3 + m$3], u$3[c$3 + 0] = Or[255 + d$3 - m$3], u$3[c$3 + l$3] = Or[255 + p$3 - v$3], u$3[c$3 + 2 * l$3] = Or[255 + g$3 - b$3];
				}
				e$1 += r$1;
			}
		}
		function Ge(t$2, e$1, n$1, r$1, i$3, a$2, o$2, s$2) {
			for (a$2 = 2 * a$2 + 1; 0 < i$3--;) {
				if (Te(t$2, e$1, n$1, a$2, o$2)) if (Re(t$2, e$1, n$1, s$2)) Ee(t$2, e$1, n$1);
				else {
					var u$3 = t$2, c$3 = e$1, l$3 = n$1, h$3 = u$3[c$3 - l$3], f$3 = u$3[c$3 + 0], d$3 = u$3[c$3 + l$3], p$3 = Cr[112 + (4 + (g$3 = 3 * (f$3 - h$3)) >> 3)], g$3 = Cr[112 + (g$3 + 3 >> 3)], m$3 = p$3 + 1 >> 1;
					u$3[c$3 - 2 * l$3] = Or[255 + u$3[c$3 - 2 * l$3] + m$3], u$3[c$3 - l$3] = Or[255 + h$3 + g$3], u$3[c$3 + 0] = Or[255 + f$3 - p$3], u$3[c$3 + l$3] = Or[255 + d$3 - m$3];
				}
				e$1 += r$1;
			}
		}
		function Ye(t$2, e$1, n$1, r$1, i$3, a$2) {
			Ve(t$2, e$1, n$1, 1, 16, r$1, i$3, a$2);
		}
		function Je(t$2, e$1, n$1, r$1, i$3, a$2) {
			Ve(t$2, e$1, 1, n$1, 16, r$1, i$3, a$2);
		}
		function Xe(t$2, e$1, n$1, r$1, i$3, a$2) {
			var o$2;
			for (o$2 = 3; 0 < o$2; --o$2) Ge(t$2, e$1 += 4 * n$1, n$1, 1, 16, r$1, i$3, a$2);
		}
		function Ke(t$2, e$1, n$1, r$1, i$3, a$2) {
			var o$2;
			for (o$2 = 3; 0 < o$2; --o$2) Ge(t$2, e$1 += 4, 1, n$1, 16, r$1, i$3, a$2);
		}
		function Ze(t$2, e$1, n$1, r$1, i$3, a$2, o$2, s$2) {
			Ve(t$2, e$1, i$3, 1, 8, a$2, o$2, s$2), Ve(n$1, r$1, i$3, 1, 8, a$2, o$2, s$2);
		}
		function $e(t$2, e$1, n$1, r$1, i$3, a$2, o$2, s$2) {
			Ve(t$2, e$1, 1, i$3, 8, a$2, o$2, s$2), Ve(n$1, r$1, 1, i$3, 8, a$2, o$2, s$2);
		}
		function Qe(t$2, e$1, n$1, r$1, i$3, a$2, o$2, s$2) {
			Ge(t$2, e$1 + 4 * i$3, i$3, 1, 8, a$2, o$2, s$2), Ge(n$1, r$1 + 4 * i$3, i$3, 1, 8, a$2, o$2, s$2);
		}
		function tn(t$2, e$1, n$1, r$1, i$3, a$2, o$2, s$2) {
			Ge(t$2, e$1 + 4, 1, i$3, 8, a$2, o$2, s$2), Ge(n$1, r$1 + 4, 1, i$3, 8, a$2, o$2, s$2);
		}
		function en() {
			this.ba = new ot$1(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new ut$1(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
		}
		function nn() {
			this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
		}
		function rn() {
			this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
		}
		function an() {
			this.ua = 0, this.Wa = new M$1(), this.vb = new M$1(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new d$2(), this.yc = new h$2();
		}
		function on() {
			this.xb = this.a = 0, this.l = new Gt$1(), this.ca = new ot$1(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new N$2(), this.Pb = 0, this.wd = new N$2(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new an(), this.ab = 0, this.gc = o$1(4, rn), this.Oc = 0;
		}
		function sn() {
			this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Gt$1(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
		}
		function un(t$2, e$1, n$1, r$1, i$3, a$2, o$2) {
			for (t$2 = null == t$2 ? 0 : t$2[e$1 + 0], e$1 = 0; e$1 < o$2; ++e$1) i$3[a$2 + e$1] = t$2 + n$1[r$1 + e$1] & 255, t$2 = i$3[a$2 + e$1];
		}
		function cn(t$2, e$1, n$1, r$1, i$3, a$2, o$2) {
			var s$2;
			if (null == t$2) un(null, null, n$1, r$1, i$3, a$2, o$2);
			else for (s$2 = 0; s$2 < o$2; ++s$2) i$3[a$2 + s$2] = t$2[e$1 + s$2] + n$1[r$1 + s$2] & 255;
		}
		function ln$1(t$2, e$1, n$1, r$1, i$3, a$2, o$2) {
			if (null == t$2) un(null, null, n$1, r$1, i$3, a$2, o$2);
			else {
				var s$2, u$3 = t$2[e$1 + 0], c$3 = u$3, l$3 = u$3;
				for (s$2 = 0; s$2 < o$2; ++s$2) c$3 = l$3 + (u$3 = t$2[e$1 + s$2]) - c$3, l$3 = n$1[r$1 + s$2] + (-256 & c$3 ? 0 > c$3 ? 0 : 255 : c$3) & 255, c$3 = u$3, i$3[a$2 + s$2] = l$3;
			}
		}
		function hn(t$2, n$1, i$3, o$2) {
			var s$2 = n$1.width, u$3 = n$1.o;
			if (e(null != t$2 && null != n$1), 0 > i$3 || 0 >= o$2 || i$3 + o$2 > u$3) return null;
			if (!t$2.Cc) {
				if (null == t$2.ga) {
					var c$3;
					if (t$2.ga = new sn(), (c$3 = null == t$2.ga) || (c$3 = n$1.width * n$1.o, e(0 == t$2.Gb.length), t$2.Gb = a$1(c$3), t$2.Uc = 0, null == t$2.Gb ? c$3 = 0 : (t$2.mb = t$2.Gb, t$2.nb = t$2.Uc, t$2.rc = null, c$3 = 1), c$3 = !c$3), !c$3) {
						c$3 = t$2.ga;
						var l$3 = t$2.Fa, h$3 = t$2.P, f$3 = t$2.qc, d$3 = t$2.mb, p$3 = t$2.nb, g$3 = h$3 + 1, m$3 = f$3 - 1, b$3 = c$3.l;
						if (e(null != l$3 && null != d$3 && null != n$1), gi[0] = null, gi[1] = un, gi[2] = cn, gi[3] = ln$1, c$3.ca = d$3, c$3.tb = p$3, c$3.c = n$1.width, c$3.i = n$1.height, e(0 < c$3.c && 0 < c$3.i), 1 >= f$3) n$1 = 0;
						else if (c$3.$a = 3 & l$3[h$3 + 0], c$3.Z = l$3[h$3 + 0] >> 2 & 3, c$3.Lc = l$3[h$3 + 0] >> 4 & 3, h$3 = l$3[h$3 + 0] >> 6 & 3, 0 > c$3.$a || 1 < c$3.$a || 4 <= c$3.Z || 1 < c$3.Lc || h$3) n$1 = 0;
						else if (b$3.put = dt$1, b$3.ac = ft$1, b$3.bc = pt$1, b$3.ma = c$3, b$3.width = n$1.width, b$3.height = n$1.height, b$3.Da = n$1.Da, b$3.v = n$1.v, b$3.va = n$1.va, b$3.j = n$1.j, b$3.o = n$1.o, c$3.$a) t: {
							e(1 == c$3.$a), n$1 = kt$1();
							e: for (;;) {
								if (null == n$1) {
									n$1 = 0;
									break t;
								}
								if (e(null != c$3), c$3.mc = n$1, n$1.c = c$3.c, n$1.i = c$3.i, n$1.l = c$3.l, n$1.l.ma = c$3, n$1.l.width = c$3.c, n$1.l.height = c$3.i, n$1.a = 0, v$2(n$1.m, l$3, g$3, m$3), !Ft$1(c$3.c, c$3.i, 1, n$1, null)) break e;
								if (1 == n$1.ab && 3 == n$1.gc[0].hc && xt$1(n$1.s) ? (c$3.ic = 1, l$3 = n$1.c * n$1.i, n$1.Ta = null, n$1.Ua = 0, n$1.V = a$1(l$3), n$1.Ba = 0, null == n$1.V ? (n$1.a = 1, n$1 = 0) : n$1 = 1) : (c$3.ic = 0, n$1 = It$1(n$1, c$3.c)), !n$1) break e;
								n$1 = 1;
								break t;
							}
							c$3.mc = null, n$1 = 0;
						}
						else n$1 = m$3 >= c$3.c * c$3.i;
						c$3 = !n$1;
					}
					if (c$3) return null;
					1 != t$2.ga.Lc ? t$2.Ga = 0 : o$2 = u$3 - i$3;
				}
				e(null != t$2.ga), e(i$3 + o$2 <= u$3);
				t: {
					if (n$1 = (l$3 = t$2.ga).c, u$3 = l$3.l.o, 0 == l$3.$a) {
						if (g$3 = t$2.rc, m$3 = t$2.Vc, b$3 = t$2.Fa, h$3 = t$2.P + 1 + i$3 * n$1, f$3 = t$2.mb, d$3 = t$2.nb + i$3 * n$1, e(h$3 <= t$2.P + t$2.qc), 0 != l$3.Z) for (e(null != gi[l$3.Z]), c$3 = 0; c$3 < o$2; ++c$3) gi[l$3.Z](g$3, m$3, b$3, h$3, f$3, d$3, n$1), g$3 = f$3, m$3 = d$3, d$3 += n$1, h$3 += n$1;
						else for (c$3 = 0; c$3 < o$2; ++c$3) r(f$3, d$3, b$3, h$3, n$1), g$3 = f$3, m$3 = d$3, d$3 += n$1, h$3 += n$1;
						t$2.rc = g$3, t$2.Vc = m$3;
					} else {
						if (e(null != l$3.mc), n$1 = i$3 + o$2, e(null != (c$3 = l$3.mc)), e(n$1 <= c$3.i), c$3.C >= n$1) n$1 = 1;
						else if (l$3.ic || mn(), l$3.ic) {
							l$3 = c$3.V, g$3 = c$3.Ba, m$3 = c$3.c;
							var y$3 = c$3.i, w$3 = (b$3 = 1, h$3 = c$3.$ / m$3, f$3 = c$3.$ % m$3, d$3 = c$3.m, p$3 = c$3.s, c$3.$), N$3 = m$3 * y$3, L$3 = m$3 * n$1, A$3 = p$3.wc, _$2 = w$3 < L$3 ? wt$1(p$3, f$3, h$3) : null;
							e(w$3 <= N$3), e(n$1 <= y$3), e(xt$1(p$3));
							e: for (;;) {
								for (; !d$3.h && w$3 < L$3;) {
									if (f$3 & A$3 || (_$2 = wt$1(p$3, f$3, h$3)), e(null != _$2), S$1(d$3), 256 > (y$3 = bt$1(_$2.G[0], _$2.H[0], d$3))) l$3[g$3 + w$3] = y$3, ++w$3, ++f$3 >= m$3 && (f$3 = 0, ++h$3 <= n$1 && !(h$3 % 16) && St$1(c$3, h$3));
									else {
										if (!(280 > y$3)) {
											b$3 = 0;
											break e;
										}
										y$3 = mt$1(y$3 - 256, d$3);
										var P$2, k$2 = bt$1(_$2.G[4], _$2.H[4], d$3);
										if (S$1(d$3), !(w$3 >= (k$2 = vt$1(m$3, k$2 = mt$1(k$2, d$3))) && N$3 - w$3 >= y$3)) {
											b$3 = 0;
											break e;
										}
										for (P$2 = 0; P$2 < y$3; ++P$2) l$3[g$3 + w$3 + P$2] = l$3[g$3 + w$3 + P$2 - k$2];
										for (w$3 += y$3, f$3 += y$3; f$3 >= m$3;) f$3 -= m$3, ++h$3 <= n$1 && !(h$3 % 16) && St$1(c$3, h$3);
										w$3 < L$3 && f$3 & A$3 && (_$2 = wt$1(p$3, f$3, h$3));
									}
									e(d$3.h == x$3(d$3));
								}
								St$1(c$3, h$3 > n$1 ? n$1 : h$3);
								break e;
							}
							!b$3 || d$3.h && w$3 < N$3 ? (b$3 = 0, c$3.a = d$3.h ? 5 : 3) : c$3.$ = w$3, n$1 = b$3;
						} else n$1 = _t$1(c$3, c$3.V, c$3.Ba, c$3.c, c$3.i, n$1, jt$1);
						if (!n$1) {
							o$2 = 0;
							break t;
						}
					}
					i$3 + o$2 >= u$3 && (t$2.Cc = 1), o$2 = 1;
				}
				if (!o$2) return null;
				if (t$2.Cc && (null != (o$2 = t$2.ga) && (o$2.mc = null), t$2.ga = null, 0 < t$2.Ga)) return alert("todo:WebPDequantizeLevels"), null;
			}
			return t$2.nb + i$3 * s$2;
		}
		function fn(t$2, e$1, n$1, r$1, i$3, a$2) {
			for (; 0 < i$3--;) {
				var o$2, s$2 = t$2, u$3 = e$1 + (n$1 ? 1 : 0), c$3 = t$2, l$3 = e$1 + (n$1 ? 0 : 3);
				for (o$2 = 0; o$2 < r$1; ++o$2) {
					var h$3 = c$3[l$3 + 4 * o$2];
					255 != h$3 && (h$3 *= 32897, s$2[u$3 + 4 * o$2 + 0] = s$2[u$3 + 4 * o$2 + 0] * h$3 >> 23, s$2[u$3 + 4 * o$2 + 1] = s$2[u$3 + 4 * o$2 + 1] * h$3 >> 23, s$2[u$3 + 4 * o$2 + 2] = s$2[u$3 + 4 * o$2 + 2] * h$3 >> 23);
				}
				e$1 += a$2;
			}
		}
		function dn(t$2, e$1, n$1, r$1, i$3) {
			for (; 0 < r$1--;) {
				var a$2;
				for (a$2 = 0; a$2 < n$1; ++a$2) {
					var o$2 = t$2[e$1 + 2 * a$2 + 0], s$2 = 15 & (c$3 = t$2[e$1 + 2 * a$2 + 1]), u$3 = 4369 * s$2, c$3 = (240 & c$3 | c$3 >> 4) * u$3 >> 16;
					t$2[e$1 + 2 * a$2 + 0] = (240 & o$2 | o$2 >> 4) * u$3 >> 16 & 240 | (15 & o$2 | o$2 << 4) * u$3 >> 16 >> 4 & 15, t$2[e$1 + 2 * a$2 + 1] = 240 & c$3 | s$2;
				}
				e$1 += i$3;
			}
		}
		function pn(t$2, e$1, n$1, r$1, i$3, a$2, o$2, s$2) {
			var u$3, c$3, l$3 = 255;
			for (c$3 = 0; c$3 < i$3; ++c$3) {
				for (u$3 = 0; u$3 < r$1; ++u$3) {
					var h$3 = t$2[e$1 + u$3];
					a$2[o$2 + 4 * u$3] = h$3, l$3 &= h$3;
				}
				e$1 += n$1, o$2 += s$2;
			}
			return 255 != l$3;
		}
		function gn(t$2, e$1, n$1, r$1, i$3) {
			var a$2;
			for (a$2 = 0; a$2 < i$3; ++a$2) n$1[r$1 + a$2] = t$2[e$1 + a$2] >> 8;
		}
		function mn() {
			Lr = fn, xr = dn, Ar = pn, Sr = gn;
		}
		function vn(n$1, r$1, i$3) {
			t$1[n$1] = function(t$2, n$2, a$2, o$2, s$2, u$3, c$3, l$3, h$3, f$3, d$3, p$3, g$3, m$3, v$3, b$3, y$3) {
				var w$3, N$3 = y$3 - 1 >> 1, L$3 = s$2[u$3 + 0] | c$3[l$3 + 0] << 16, x$4 = h$3[f$3 + 0] | d$3[p$3 + 0] << 16;
				e(null != t$2);
				var A$3 = 3 * L$3 + x$4 + 131074 >> 2;
				for (r$1(t$2[n$2 + 0], 255 & A$3, A$3 >> 16, g$3, m$3), null != a$2 && (A$3 = 3 * x$4 + L$3 + 131074 >> 2, r$1(a$2[o$2 + 0], 255 & A$3, A$3 >> 16, v$3, b$3)), w$3 = 1; w$3 <= N$3; ++w$3) {
					var S$2 = s$2[u$3 + w$3] | c$3[l$3 + w$3] << 16, _$2 = h$3[f$3 + w$3] | d$3[p$3 + w$3] << 16, P$2 = L$3 + S$2 + x$4 + _$2 + 524296, k$2 = P$2 + 2 * (S$2 + x$4) >> 3;
					A$3 = k$2 + L$3 >> 1, L$3 = (P$2 = P$2 + 2 * (L$3 + _$2) >> 3) + S$2 >> 1, r$1(t$2[n$2 + 2 * w$3 - 1], 255 & A$3, A$3 >> 16, g$3, m$3 + (2 * w$3 - 1) * i$3), r$1(t$2[n$2 + 2 * w$3 - 0], 255 & L$3, L$3 >> 16, g$3, m$3 + (2 * w$3 - 0) * i$3), null != a$2 && (A$3 = P$2 + x$4 >> 1, L$3 = k$2 + _$2 >> 1, r$1(a$2[o$2 + 2 * w$3 - 1], 255 & A$3, A$3 >> 16, v$3, b$3 + (2 * w$3 - 1) * i$3), r$1(a$2[o$2 + 2 * w$3 + 0], 255 & L$3, L$3 >> 16, v$3, b$3 + (2 * w$3 + 0) * i$3)), L$3 = S$2, x$4 = _$2;
				}
				1 & y$3 || (A$3 = 3 * L$3 + x$4 + 131074 >> 2, r$1(t$2[n$2 + y$3 - 1], 255 & A$3, A$3 >> 16, g$3, m$3 + (y$3 - 1) * i$3), null != a$2 && (A$3 = 3 * x$4 + L$3 + 131074 >> 2, r$1(a$2[o$2 + y$3 - 1], 255 & A$3, A$3 >> 16, v$3, b$3 + (y$3 - 1) * i$3)));
			};
		}
		function bn() {
			mi[Mr] = vi, mi[qr] = yi, mi[Er] = bi, mi[Rr] = wi, mi[Dr] = Ni, mi[Tr] = Li, mi[zr] = xi, mi[Ur] = yi, mi[Hr] = wi, mi[Wr] = Ni, mi[Vr] = Li;
		}
		function yn(t$2) {
			return t$2 & ~Fi ? 0 > t$2 ? 0 : 255 : t$2 >> ki;
		}
		function wn(t$2, e$1) {
			return yn((19077 * t$2 >> 8) + (26149 * e$1 >> 8) - 14234);
		}
		function Nn(t$2, e$1, n$1) {
			return yn((19077 * t$2 >> 8) - (6419 * e$1 >> 8) - (13320 * n$1 >> 8) + 8708);
		}
		function Ln(t$2, e$1) {
			return yn((19077 * t$2 >> 8) + (33050 * e$1 >> 8) - 17685);
		}
		function xn(t$2, e$1, n$1, r$1, i$3) {
			r$1[i$3 + 0] = wn(t$2, n$1), r$1[i$3 + 1] = Nn(t$2, e$1, n$1), r$1[i$3 + 2] = Ln(t$2, e$1);
		}
		function An(t$2, e$1, n$1, r$1, i$3) {
			r$1[i$3 + 0] = Ln(t$2, e$1), r$1[i$3 + 1] = Nn(t$2, e$1, n$1), r$1[i$3 + 2] = wn(t$2, n$1);
		}
		function Sn(t$2, e$1, n$1, r$1, i$3) {
			var a$2 = Nn(t$2, e$1, n$1);
			e$1 = a$2 << 3 & 224 | Ln(t$2, e$1) >> 3, r$1[i$3 + 0] = 248 & wn(t$2, n$1) | a$2 >> 5, r$1[i$3 + 1] = e$1;
		}
		function _n(t$2, e$1, n$1, r$1, i$3) {
			var a$2 = 240 & Ln(t$2, e$1) | 15;
			r$1[i$3 + 0] = 240 & wn(t$2, n$1) | Nn(t$2, e$1, n$1) >> 4, r$1[i$3 + 1] = a$2;
		}
		function Pn(t$2, e$1, n$1, r$1, i$3) {
			r$1[i$3 + 0] = 255, xn(t$2, e$1, n$1, r$1, i$3 + 1);
		}
		function kn(t$2, e$1, n$1, r$1, i$3) {
			An(t$2, e$1, n$1, r$1, i$3), r$1[i$3 + 3] = 255;
		}
		function Fn(t$2, e$1, n$1, r$1, i$3) {
			xn(t$2, e$1, n$1, r$1, i$3), r$1[i$3 + 3] = 255;
		}
		function Vt$1(t$2, e$1) {
			return 0 > t$2 ? 0 : t$2 > e$1 ? e$1 : t$2;
		}
		function In(e$1, n$1, r$1) {
			t$1[e$1] = function(t$2, e$2, i$3, a$2, o$2, s$2, u$3, c$3, l$3) {
				for (var h$3 = c$3 + (-2 & l$3) * r$1; c$3 != h$3;) n$1(t$2[e$2 + 0], i$3[a$2 + 0], o$2[s$2 + 0], u$3, c$3), n$1(t$2[e$2 + 1], i$3[a$2 + 0], o$2[s$2 + 0], u$3, c$3 + r$1), e$2 += 2, ++a$2, ++s$2, c$3 += 2 * r$1;
				1 & l$3 && n$1(t$2[e$2 + 0], i$3[a$2 + 0], o$2[s$2 + 0], u$3, c$3);
			};
		}
		function jn(t$2, e$1, n$1) {
			return 0 == n$1 ? 0 == t$2 ? 0 == e$1 ? 6 : 5 : 0 == e$1 ? 4 : 0 : n$1;
		}
		function Cn(t$2, e$1, n$1, r$1, i$3) {
			switch (t$2 >>> 30) {
				case 3:
					ar(e$1, n$1, r$1, i$3, 0);
					break;
				case 2:
					or(e$1, n$1, r$1, i$3);
					break;
				case 1: ur(e$1, n$1, r$1, i$3);
			}
		}
		function On(t$2, e$1) {
			var n$1, a$2, o$2 = e$1.M, s$2 = e$1.Nb, u$3 = t$2.oc, c$3 = t$2.pc + 40, l$3 = t$2.oc, h$3 = t$2.pc + 584, f$3 = t$2.oc, d$3 = t$2.pc + 600;
			for (n$1 = 0; 16 > n$1; ++n$1) u$3[c$3 + 32 * n$1 - 1] = 129;
			for (n$1 = 0; 8 > n$1; ++n$1) l$3[h$3 + 32 * n$1 - 1] = 129, f$3[d$3 + 32 * n$1 - 1] = 129;
			for (0 < o$2 ? u$3[c$3 - 1 - 32] = l$3[h$3 - 1 - 32] = f$3[d$3 - 1 - 32] = 129 : (i$2(u$3, c$3 - 32 - 1, 127, 21), i$2(l$3, h$3 - 32 - 1, 127, 9), i$2(f$3, d$3 - 32 - 1, 127, 9)), a$2 = 0; a$2 < t$2.za; ++a$2) {
				var p$3 = e$1.ya[e$1.aa + a$2];
				if (0 < a$2) {
					for (n$1 = -1; 16 > n$1; ++n$1) r(u$3, c$3 + 32 * n$1 - 4, u$3, c$3 + 32 * n$1 + 12, 4);
					for (n$1 = -1; 8 > n$1; ++n$1) r(l$3, h$3 + 32 * n$1 - 4, l$3, h$3 + 32 * n$1 + 4, 4), r(f$3, d$3 + 32 * n$1 - 4, f$3, d$3 + 32 * n$1 + 4, 4);
				}
				var g$3 = t$2.Gd, m$3 = t$2.Hd + a$2, v$3 = p$3.ad, b$3 = p$3.Hc;
				if (0 < o$2 && (r(u$3, c$3 - 32, g$3[m$3].y, 0, 16), r(l$3, h$3 - 32, g$3[m$3].f, 0, 8), r(f$3, d$3 - 32, g$3[m$3].ea, 0, 8)), p$3.Za) {
					var y$3 = u$3, w$3 = c$3 - 32 + 16;
					for (0 < o$2 && (a$2 >= t$2.za - 1 ? i$2(y$3, w$3, g$3[m$3].y[15], 4) : r(y$3, w$3, g$3[m$3 + 1].y, 0, 4)), n$1 = 0; 4 > n$1; n$1++) y$3[w$3 + 128 + n$1] = y$3[w$3 + 256 + n$1] = y$3[w$3 + 384 + n$1] = y$3[w$3 + 0 + n$1];
					for (n$1 = 0; 16 > n$1; ++n$1, b$3 <<= 2) y$3 = u$3, w$3 = c$3 + Ei[n$1], hi[p$3.Ob[n$1]](y$3, w$3), Cn(b$3, v$3, 16 * +n$1, y$3, w$3);
				} else if (y$3 = jn(a$2, o$2, p$3.Ob[0]), li[y$3](u$3, c$3), 0 != b$3) for (n$1 = 0; 16 > n$1; ++n$1, b$3 <<= 2) Cn(b$3, v$3, 16 * +n$1, u$3, c$3 + Ei[n$1]);
				for (n$1 = p$3.Gc, y$3 = jn(a$2, o$2, p$3.Dd), fi[y$3](l$3, h$3), fi[y$3](f$3, d$3), b$3 = v$3, y$3 = l$3, w$3 = h$3, 255 & (p$3 = 0 | n$1) && (170 & p$3 ? sr(b$3, 256, y$3, w$3) : cr(b$3, 256, y$3, w$3)), p$3 = f$3, b$3 = d$3, 255 & (n$1 >>= 8) && (170 & n$1 ? sr(v$3, 320, p$3, b$3) : cr(v$3, 320, p$3, b$3)), o$2 < t$2.Ub - 1 && (r(g$3[m$3].y, 0, u$3, c$3 + 480, 16), r(g$3[m$3].f, 0, l$3, h$3 + 224, 8), r(g$3[m$3].ea, 0, f$3, d$3 + 224, 8)), n$1 = 8 * s$2 * t$2.B, g$3 = t$2.sa, m$3 = t$2.ta + 16 * a$2 + 16 * s$2 * t$2.R, v$3 = t$2.qa, p$3 = t$2.ra + 8 * a$2 + n$1, b$3 = t$2.Ha, y$3 = t$2.Ia + 8 * a$2 + n$1, n$1 = 0; 16 > n$1; ++n$1) r(g$3, m$3 + n$1 * t$2.R, u$3, c$3 + 32 * n$1, 16);
				for (n$1 = 0; 8 > n$1; ++n$1) r(v$3, p$3 + n$1 * t$2.B, l$3, h$3 + 32 * n$1, 8), r(b$3, y$3 + n$1 * t$2.B, f$3, d$3 + 32 * n$1, 8);
			}
		}
		function Bn(t$2, r$1, i$3, a$2, o$2, s$2, u$3, c$3, l$3) {
			var h$3 = [0], f$3 = [0], d$3 = 0, p$3 = null != l$3 ? l$3.kd : 0, g$3 = null != l$3 ? l$3 : new nn();
			if (null == t$2 || 12 > i$3) return 7;
			g$3.data = t$2, g$3.w = r$1, g$3.ha = i$3, r$1 = [r$1], i$3 = [i$3], g$3.gb = [g$3.gb];
			t: {
				var m$3 = r$1, b$3 = i$3, y$3 = g$3.gb;
				if (e(null != t$2), e(null != b$3), e(null != y$3), y$3[0] = 0, 12 <= b$3[0] && !n(t$2, m$3[0], "RIFF")) {
					if (n(t$2, m$3[0] + 8, "WEBP")) {
						y$3 = 3;
						break t;
					}
					var w$3 = C$1(t$2, m$3[0] + 4);
					if (12 > w$3 || 4294967286 < w$3) {
						y$3 = 3;
						break t;
					}
					if (p$3 && w$3 > b$3[0] - 8) {
						y$3 = 7;
						break t;
					}
					y$3[0] = w$3, m$3[0] += 12, b$3[0] -= 12;
				}
				y$3 = 0;
			}
			if (0 != y$3) return y$3;
			for (w$3 = 0 < g$3.gb[0], i$3 = i$3[0];;) {
				t: {
					var L$3 = t$2;
					b$3 = r$1, y$3 = i$3;
					var x$4 = h$3, A$3 = f$3, S$2 = m$3 = [0];
					if ((k$2 = d$3 = [d$3])[0] = 0, 8 > y$3[0]) y$3 = 7;
					else {
						if (!n(L$3, b$3[0], "VP8X")) {
							if (10 != C$1(L$3, b$3[0] + 4)) {
								y$3 = 3;
								break t;
							}
							if (18 > y$3[0]) {
								y$3 = 7;
								break t;
							}
							var _$2 = C$1(L$3, b$3[0] + 8), P$2 = 1 + j$1(L$3, b$3[0] + 12);
							if (2147483648 <= P$2 * (L$3 = 1 + j$1(L$3, b$3[0] + 15))) {
								y$3 = 3;
								break t;
							}
							null != S$2 && (S$2[0] = _$2), null != x$4 && (x$4[0] = P$2), null != A$3 && (A$3[0] = L$3), b$3[0] += 18, y$3[0] -= 18, k$2[0] = 1;
						}
						y$3 = 0;
					}
				}
				if (d$3 = d$3[0], m$3 = m$3[0], 0 != y$3) return y$3;
				if (b$3 = !!(2 & m$3), !w$3 && d$3) return 3;
				if (null != s$2 && (s$2[0] = !!(16 & m$3)), null != u$3 && (u$3[0] = b$3), null != c$3 && (c$3[0] = 0), u$3 = h$3[0], m$3 = f$3[0], d$3 && b$3 && null == l$3) {
					y$3 = 0;
					break;
				}
				if (4 > i$3) {
					y$3 = 7;
					break;
				}
				if (w$3 && d$3 || !w$3 && !d$3 && !n(t$2, r$1[0], "ALPH")) {
					i$3 = [i$3], g$3.na = [g$3.na], g$3.P = [g$3.P], g$3.Sa = [g$3.Sa];
					t: {
						_$2 = t$2, y$3 = r$1, w$3 = i$3;
						var k$2 = g$3.gb;
						x$4 = g$3.na, A$3 = g$3.P, S$2 = g$3.Sa, P$2 = 22, e(null != _$2), e(null != w$3), L$3 = y$3[0];
						var F$2 = w$3[0];
						for (e(null != x$4), e(null != S$2), x$4[0] = null, A$3[0] = null, S$2[0] = 0;;) {
							if (y$3[0] = L$3, w$3[0] = F$2, 8 > F$2) {
								y$3 = 7;
								break t;
							}
							var I$2 = C$1(_$2, L$3 + 4);
							if (4294967286 < I$2) {
								y$3 = 3;
								break t;
							}
							var O$2 = 8 + I$2 + 1 & -2;
							if (P$2 += O$2, 0 < k$2 && P$2 > k$2) {
								y$3 = 3;
								break t;
							}
							if (!n(_$2, L$3, "VP8 ") || !n(_$2, L$3, "VP8L")) {
								y$3 = 0;
								break t;
							}
							if (F$2[0] < O$2) {
								y$3 = 7;
								break t;
							}
							n(_$2, L$3, "ALPH") || (x$4[0] = _$2, A$3[0] = L$3 + 8, S$2[0] = I$2), L$3 += O$2, F$2 -= O$2;
						}
					}
					if (i$3 = i$3[0], g$3.na = g$3.na[0], g$3.P = g$3.P[0], g$3.Sa = g$3.Sa[0], 0 != y$3) break;
				}
				i$3 = [i$3], g$3.Ja = [g$3.Ja], g$3.xa = [g$3.xa];
				t: if (k$2 = t$2, y$3 = r$1, w$3 = i$3, x$4 = g$3.gb[0], A$3 = g$3.Ja, S$2 = g$3.xa, _$2 = y$3[0], L$3 = !n(k$2, _$2, "VP8 "), P$2 = !n(k$2, _$2, "VP8L"), e(null != k$2), e(null != w$3), e(null != A$3), e(null != S$2), 8 > w$3[0]) y$3 = 7;
				else {
					if (L$3 || P$2) {
						if (k$2 = C$1(k$2, _$2 + 4), 12 <= x$4 && k$2 > x$4 - 12) {
							y$3 = 3;
							break t;
						}
						if (p$3 && k$2 > w$3[0] - 8) {
							y$3 = 7;
							break t;
						}
						A$3[0] = k$2, y$3[0] += 8, w$3[0] -= 8, S$2[0] = P$2;
					} else S$2[0] = 5 <= w$3[0] && 47 == k$2[_$2 + 0] && !(k$2[_$2 + 4] >> 5), A$3[0] = w$3[0];
					y$3 = 0;
				}
				if (i$3 = i$3[0], g$3.Ja = g$3.Ja[0], g$3.xa = g$3.xa[0], r$1 = r$1[0], 0 != y$3) break;
				if (4294967286 < g$3.Ja) return 3;
				if (null == c$3 || b$3 || (c$3[0] = g$3.xa ? 2 : 1), u$3 = [u$3], m$3 = [m$3], g$3.xa) {
					if (5 > i$3) {
						y$3 = 7;
						break;
					}
					c$3 = u$3, p$3 = m$3, b$3 = s$2, null == t$2 || 5 > i$3 ? t$2 = 0 : 5 <= i$3 && 47 == t$2[r$1 + 0] && !(t$2[r$1 + 4] >> 5) ? (w$3 = [0], k$2 = [0], x$4 = [0], v$2(A$3 = new N$2(), t$2, r$1, i$3), gt$1(A$3, w$3, k$2, x$4) ? (null != c$3 && (c$3[0] = w$3[0]), null != p$3 && (p$3[0] = k$2[0]), null != b$3 && (b$3[0] = x$4[0]), t$2 = 1) : t$2 = 0) : t$2 = 0;
				} else {
					if (10 > i$3) {
						y$3 = 7;
						break;
					}
					c$3 = m$3, null == t$2 || 10 > i$3 || !Xt$1(t$2, r$1 + 3, i$3 - 3) ? t$2 = 0 : (p$3 = t$2[r$1 + 0] | t$2[r$1 + 1] << 8 | t$2[r$1 + 2] << 16, b$3 = 16383 & (t$2[r$1 + 7] << 8 | t$2[r$1 + 6]), t$2 = 16383 & (t$2[r$1 + 9] << 8 | t$2[r$1 + 8]), 1 & p$3 || 3 < (p$3 >> 1 & 7) || !(p$3 >> 4 & 1) || p$3 >> 5 >= g$3.Ja || !b$3 || !t$2 ? t$2 = 0 : (u$3 && (u$3[0] = b$3), c$3 && (c$3[0] = t$2), t$2 = 1));
				}
				if (!t$2) return 3;
				if (u$3 = u$3[0], m$3 = m$3[0], d$3 && (h$3[0] != u$3 || f$3[0] != m$3)) return 3;
				null != l$3 && (l$3[0] = g$3, l$3.offset = r$1 - l$3.w, e(4294967286 > r$1 - l$3.w), e(l$3.offset == l$3.ha - i$3));
				break;
			}
			return 0 == y$3 || 7 == y$3 && d$3 && null == l$3 ? (null != s$2 && (s$2[0] |= null != g$3.na && 0 < g$3.na.length), null != a$2 && (a$2[0] = u$3), null != o$2 && (o$2[0] = m$3), 0) : y$3;
		}
		function Mn(t$2, e$1, n$1) {
			var r$1 = e$1.width, i$3 = e$1.height, a$2 = 0, o$2 = 0, s$2 = r$1, u$3 = i$3;
			if (e$1.Da = null != t$2 && 0 < t$2.Da, e$1.Da && (s$2 = t$2.cd, u$3 = t$2.bd, a$2 = t$2.v, o$2 = t$2.j, 11 > n$1 || (a$2 &= -2, o$2 &= -2), 0 > a$2 || 0 > o$2 || 0 >= s$2 || 0 >= u$3 || a$2 + s$2 > r$1 || o$2 + u$3 > i$3)) return 0;
			if (e$1.v = a$2, e$1.j = o$2, e$1.va = a$2 + s$2, e$1.o = o$2 + u$3, e$1.U = s$2, e$1.T = u$3, e$1.da = null != t$2 && 0 < t$2.da, e$1.da) {
				if (!q$1(s$2, u$3, n$1 = [t$2.ib], a$2 = [t$2.hb])) return 0;
				e$1.ib = n$1[0], e$1.hb = a$2[0];
			}
			return e$1.ob = null != t$2 && t$2.ob, e$1.Kb = null == t$2 || !t$2.Sd, e$1.da && (e$1.ob = e$1.ib < 3 * r$1 / 4 && e$1.hb < 3 * i$3 / 4, e$1.Kb = 0), 1;
		}
		function qn(t$2) {
			if (null == t$2) return 2;
			if (11 > t$2.S) {
				var e$1 = t$2.f.RGBA;
				e$1.fb += (t$2.height - 1) * e$1.A, e$1.A = -e$1.A;
			} else e$1 = t$2.f.kb, t$2 = t$2.height, e$1.O += (t$2 - 1) * e$1.fa, e$1.fa = -e$1.fa, e$1.N += (t$2 - 1 >> 1) * e$1.Ab, e$1.Ab = -e$1.Ab, e$1.W += (t$2 - 1 >> 1) * e$1.Db, e$1.Db = -e$1.Db, null != e$1.F && (e$1.J += (t$2 - 1) * e$1.lb, e$1.lb = -e$1.lb);
			return 0;
		}
		function En(t$2, e$1, n$1, r$1) {
			if (null == r$1 || 0 >= t$2 || 0 >= e$1) return 2;
			if (null != n$1) {
				if (n$1.Da) {
					var i$3 = n$1.cd, o$2 = n$1.bd, s$2 = -2 & n$1.v, u$3 = -2 & n$1.j;
					if (0 > s$2 || 0 > u$3 || 0 >= i$3 || 0 >= o$2 || s$2 + i$3 > t$2 || u$3 + o$2 > e$1) return 2;
					t$2 = i$3, e$1 = o$2;
				}
				if (n$1.da) {
					if (!q$1(t$2, e$1, i$3 = [n$1.ib], o$2 = [n$1.hb])) return 2;
					t$2 = i$3[0], e$1 = o$2[0];
				}
			}
			r$1.width = t$2, r$1.height = e$1;
			t: {
				var c$3 = r$1.width, l$3 = r$1.height;
				if (t$2 = r$1.S, 0 >= c$3 || 0 >= l$3 || !(t$2 >= Mr && 13 > t$2)) t$2 = 2;
				else {
					if (0 >= r$1.Rd && null == r$1.sd) {
						s$2 = o$2 = i$3 = e$1 = 0;
						var h$3 = (u$3 = c$3 * zi[t$2]) * l$3;
						if (11 > t$2 || (o$2 = (l$3 + 1) / 2 * (e$1 = (c$3 + 1) / 2), 12 == t$2 && (s$2 = (i$3 = c$3) * l$3)), null == (l$3 = a$1(h$3 + 2 * o$2 + s$2))) {
							t$2 = 1;
							break t;
						}
						r$1.sd = l$3, 11 > t$2 ? ((c$3 = r$1.f.RGBA).eb = l$3, c$3.fb = 0, c$3.A = u$3, c$3.size = h$3) : ((c$3 = r$1.f.kb).y = l$3, c$3.O = 0, c$3.fa = u$3, c$3.Fd = h$3, c$3.f = l$3, c$3.N = 0 + h$3, c$3.Ab = e$1, c$3.Cd = o$2, c$3.ea = l$3, c$3.W = 0 + h$3 + o$2, c$3.Db = e$1, c$3.Ed = o$2, 12 == t$2 && (c$3.F = l$3, c$3.J = 0 + h$3 + 2 * o$2), c$3.Tc = s$2, c$3.lb = i$3);
					}
					if (e$1 = 1, i$3 = r$1.S, o$2 = r$1.width, s$2 = r$1.height, i$3 >= Mr && 13 > i$3) if (11 > i$3) t$2 = r$1.f.RGBA, e$1 &= (u$3 = Math.abs(t$2.A)) * (s$2 - 1) + o$2 <= t$2.size, e$1 &= u$3 >= o$2 * zi[i$3], e$1 &= null != t$2.eb;
					else {
						t$2 = r$1.f.kb, u$3 = (o$2 + 1) / 2, h$3 = (s$2 + 1) / 2, c$3 = Math.abs(t$2.fa), l$3 = Math.abs(t$2.Ab);
						var f$3 = Math.abs(t$2.Db), d$3 = Math.abs(t$2.lb), p$3 = d$3 * (s$2 - 1) + o$2;
						e$1 &= c$3 * (s$2 - 1) + o$2 <= t$2.Fd, e$1 &= l$3 * (h$3 - 1) + u$3 <= t$2.Cd, e$1 = (e$1 &= f$3 * (h$3 - 1) + u$3 <= t$2.Ed) & c$3 >= o$2 & l$3 >= u$3 & f$3 >= u$3, e$1 &= null != t$2.y, e$1 &= null != t$2.f, e$1 &= null != t$2.ea, 12 == i$3 && (e$1 &= d$3 >= o$2, e$1 &= p$3 <= t$2.Tc, e$1 &= null != t$2.F);
					}
					else e$1 = 0;
					t$2 = e$1 ? 0 : 2;
				}
			}
			return 0 != t$2 || null != n$1 && n$1.fd && (t$2 = qn(r$1)), t$2;
		}
		var Rn = 64, Dn = [
			0,
			1,
			3,
			7,
			15,
			31,
			63,
			127,
			255,
			511,
			1023,
			2047,
			4095,
			8191,
			16383,
			32767,
			65535,
			131071,
			262143,
			524287,
			1048575,
			2097151,
			4194303,
			8388607,
			16777215
		], Tn = 24, zn = 32, Un = 8, Hn = [
			0,
			0,
			1,
			1,
			2,
			2,
			2,
			2,
			3,
			3,
			3,
			3,
			3,
			3,
			3,
			3,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7
		];
		D$1("Predictor0", "PredictorAdd0"), t$1.Predictor0 = function() {
			return 4278190080;
		}, t$1.Predictor1 = function(t$2) {
			return t$2;
		}, t$1.Predictor2 = function(t$2, e$1, n$1) {
			return e$1[n$1 + 0];
		}, t$1.Predictor3 = function(t$2, e$1, n$1) {
			return e$1[n$1 + 1];
		}, t$1.Predictor4 = function(t$2, e$1, n$1) {
			return e$1[n$1 - 1];
		}, t$1.Predictor5 = function(t$2, e$1, n$1) {
			return z$1(z$1(t$2, e$1[n$1 + 1]), e$1[n$1 + 0]);
		}, t$1.Predictor6 = function(t$2, e$1, n$1) {
			return z$1(t$2, e$1[n$1 - 1]);
		}, t$1.Predictor7 = function(t$2, e$1, n$1) {
			return z$1(t$2, e$1[n$1 + 0]);
		}, t$1.Predictor8 = function(t$2, e$1, n$1) {
			return z$1(e$1[n$1 - 1], e$1[n$1 + 0]);
		}, t$1.Predictor9 = function(t$2, e$1, n$1) {
			return z$1(e$1[n$1 + 0], e$1[n$1 + 1]);
		}, t$1.Predictor10 = function(t$2, e$1, n$1) {
			return z$1(z$1(t$2, e$1[n$1 - 1]), z$1(e$1[n$1 + 0], e$1[n$1 + 1]));
		}, t$1.Predictor11 = function(t$2, e$1, n$1) {
			var r$1 = e$1[n$1 + 0];
			return 0 >= W$1(r$1 >> 24 & 255, t$2 >> 24 & 255, (e$1 = e$1[n$1 - 1]) >> 24 & 255) + W$1(r$1 >> 16 & 255, t$2 >> 16 & 255, e$1 >> 16 & 255) + W$1(r$1 >> 8 & 255, t$2 >> 8 & 255, e$1 >> 8 & 255) + W$1(255 & r$1, 255 & t$2, 255 & e$1) ? r$1 : t$2;
		}, t$1.Predictor12 = function(t$2, e$1, n$1) {
			var r$1 = e$1[n$1 + 0];
			return (U$1((t$2 >> 24 & 255) + (r$1 >> 24 & 255) - ((e$1 = e$1[n$1 - 1]) >> 24 & 255)) << 24 | U$1((t$2 >> 16 & 255) + (r$1 >> 16 & 255) - (e$1 >> 16 & 255)) << 16 | U$1((t$2 >> 8 & 255) + (r$1 >> 8 & 255) - (e$1 >> 8 & 255)) << 8 | U$1((255 & t$2) + (255 & r$1) - (255 & e$1))) >>> 0;
		}, t$1.Predictor13 = function(t$2, e$1, n$1) {
			var r$1 = e$1[n$1 - 1];
			return (H$1((t$2 = z$1(t$2, e$1[n$1 + 0])) >> 24 & 255, r$1 >> 24 & 255) << 24 | H$1(t$2 >> 16 & 255, r$1 >> 16 & 255) << 16 | H$1(t$2 >> 8 & 255, r$1 >> 8 & 255) << 8 | H$1(255 & t$2, 255 & r$1)) >>> 0;
		};
		var Wn = t$1.PredictorAdd0;
		t$1.PredictorAdd1 = V$1, D$1("Predictor2", "PredictorAdd2"), D$1("Predictor3", "PredictorAdd3"), D$1("Predictor4", "PredictorAdd4"), D$1("Predictor5", "PredictorAdd5"), D$1("Predictor6", "PredictorAdd6"), D$1("Predictor7", "PredictorAdd7"), D$1("Predictor8", "PredictorAdd8"), D$1("Predictor9", "PredictorAdd9"), D$1("Predictor10", "PredictorAdd10"), D$1("Predictor11", "PredictorAdd11"), D$1("Predictor12", "PredictorAdd12"), D$1("Predictor13", "PredictorAdd13");
		var Vn = t$1.PredictorAdd2;
		X$1("ColorIndexInverseTransform", "MapARGB", "32b", function(t$2) {
			return t$2 >> 8 & 255;
		}, function(t$2) {
			return t$2;
		}), X$1("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t$2) {
			return t$2;
		}, function(t$2) {
			return t$2 >> 8 & 255;
		});
		var Gn, Yn = t$1.ColorIndexInverseTransform, Jn = t$1.MapARGB, Xn = t$1.VP8LColorIndexInverseTransformAlpha, Kn = t$1.MapAlpha, Zn = t$1.VP8LPredictorsAdd = [];
		Zn.length = 16, (t$1.VP8LPredictors = []).length = 16, (t$1.VP8LPredictorsAdd_C = []).length = 16, (t$1.VP8LPredictors_C = []).length = 16;
		var $n, Qn, tr, er, nr, rr, ir, ar, or, sr, ur, cr, lr, hr, fr, dr, pr, gr, mr, vr, br, yr, wr, Nr, Lr, xr, Ar, Sr, _r = a$1(511), Pr = a$1(2041), kr = a$1(225), Fr = a$1(767), Ir = 0, jr = Pr, Cr = kr, Or = Fr, Br = _r, Mr = 0, qr = 1, Er = 2, Rr = 3, Dr = 4, Tr = 5, zr = 6, Ur = 7, Hr = 8, Wr = 9, Vr = 10, Gr = [
			2,
			3,
			7
		], Yr = [
			3,
			3,
			11
		], Jr = [
			280,
			256,
			256,
			256,
			40
		], Xr = [
			0,
			1,
			1,
			1,
			0
		], Kr = [
			17,
			18,
			0,
			1,
			2,
			3,
			4,
			5,
			16,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15
		], Zr = [
			24,
			7,
			23,
			25,
			40,
			6,
			39,
			41,
			22,
			26,
			38,
			42,
			56,
			5,
			55,
			57,
			21,
			27,
			54,
			58,
			37,
			43,
			72,
			4,
			71,
			73,
			20,
			28,
			53,
			59,
			70,
			74,
			36,
			44,
			88,
			69,
			75,
			52,
			60,
			3,
			87,
			89,
			19,
			29,
			86,
			90,
			35,
			45,
			68,
			76,
			85,
			91,
			51,
			61,
			104,
			2,
			103,
			105,
			18,
			30,
			102,
			106,
			34,
			46,
			84,
			92,
			67,
			77,
			101,
			107,
			50,
			62,
			120,
			1,
			119,
			121,
			83,
			93,
			17,
			31,
			100,
			108,
			66,
			78,
			118,
			122,
			33,
			47,
			117,
			123,
			49,
			63,
			99,
			109,
			82,
			94,
			0,
			116,
			124,
			65,
			79,
			16,
			32,
			98,
			110,
			48,
			115,
			125,
			81,
			95,
			64,
			114,
			126,
			97,
			111,
			80,
			113,
			127,
			96,
			112
		], $r = [
			2954,
			2956,
			2958,
			2962,
			2970,
			2986,
			3018,
			3082,
			3212,
			3468,
			3980,
			5004
		], Qr = 8, ti = [
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			17,
			18,
			19,
			20,
			20,
			21,
			21,
			22,
			22,
			23,
			23,
			24,
			25,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59,
			60,
			61,
			62,
			63,
			64,
			65,
			66,
			67,
			68,
			69,
			70,
			71,
			72,
			73,
			74,
			75,
			76,
			76,
			77,
			78,
			79,
			80,
			81,
			82,
			83,
			84,
			85,
			86,
			87,
			88,
			89,
			91,
			93,
			95,
			96,
			98,
			100,
			101,
			102,
			104,
			106,
			108,
			110,
			112,
			114,
			116,
			118,
			122,
			124,
			126,
			128,
			130,
			132,
			134,
			136,
			138,
			140,
			143,
			145,
			148,
			151,
			154,
			157
		], ei = [
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			60,
			62,
			64,
			66,
			68,
			70,
			72,
			74,
			76,
			78,
			80,
			82,
			84,
			86,
			88,
			90,
			92,
			94,
			96,
			98,
			100,
			102,
			104,
			106,
			108,
			110,
			112,
			114,
			116,
			119,
			122,
			125,
			128,
			131,
			134,
			137,
			140,
			143,
			146,
			149,
			152,
			155,
			158,
			161,
			164,
			167,
			170,
			173,
			177,
			181,
			185,
			189,
			193,
			197,
			201,
			205,
			209,
			213,
			217,
			221,
			225,
			229,
			234,
			239,
			245,
			249,
			254,
			259,
			264,
			269,
			274,
			279,
			284
		], ni = null, ri = [
			[
				173,
				148,
				140,
				0
			],
			[
				176,
				155,
				140,
				135,
				0
			],
			[
				180,
				157,
				141,
				134,
				130,
				0
			],
			[
				254,
				254,
				243,
				230,
				196,
				177,
				153,
				140,
				133,
				130,
				129,
				0
			]
		], ii = [
			0,
			1,
			4,
			8,
			5,
			2,
			3,
			6,
			9,
			12,
			13,
			10,
			7,
			11,
			14,
			15
		], ai = [
			-0,
			1,
			-1,
			2,
			-2,
			3,
			4,
			6,
			-3,
			5,
			-4,
			-5,
			-6,
			7,
			-7,
			8,
			-8,
			-9
		], oi = [
			[
				[
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						253,
						136,
						254,
						255,
						228,
						219,
						128,
						128,
						128,
						128,
						128
					],
					[
						189,
						129,
						242,
						255,
						227,
						213,
						255,
						219,
						128,
						128,
						128
					],
					[
						106,
						126,
						227,
						252,
						214,
						209,
						255,
						255,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						98,
						248,
						255,
						236,
						226,
						255,
						255,
						128,
						128,
						128
					],
					[
						181,
						133,
						238,
						254,
						221,
						234,
						255,
						154,
						128,
						128,
						128
					],
					[
						78,
						134,
						202,
						247,
						198,
						180,
						255,
						219,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						185,
						249,
						255,
						243,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						184,
						150,
						247,
						255,
						236,
						224,
						128,
						128,
						128,
						128,
						128
					],
					[
						77,
						110,
						216,
						255,
						236,
						230,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						101,
						251,
						255,
						241,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						170,
						139,
						241,
						252,
						236,
						209,
						255,
						255,
						128,
						128,
						128
					],
					[
						37,
						116,
						196,
						243,
						228,
						255,
						255,
						255,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						204,
						254,
						255,
						245,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						207,
						160,
						250,
						255,
						238,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						102,
						103,
						231,
						255,
						211,
						171,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						152,
						252,
						255,
						240,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						177,
						135,
						243,
						255,
						234,
						225,
						128,
						128,
						128,
						128,
						128
					],
					[
						80,
						129,
						211,
						255,
						194,
						224,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						246,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				]
			],
			[
				[
					[
						198,
						35,
						237,
						223,
						193,
						187,
						162,
						160,
						145,
						155,
						62
					],
					[
						131,
						45,
						198,
						221,
						172,
						176,
						220,
						157,
						252,
						221,
						1
					],
					[
						68,
						47,
						146,
						208,
						149,
						167,
						221,
						162,
						255,
						223,
						128
					]
				],
				[
					[
						1,
						149,
						241,
						255,
						221,
						224,
						255,
						255,
						128,
						128,
						128
					],
					[
						184,
						141,
						234,
						253,
						222,
						220,
						255,
						199,
						128,
						128,
						128
					],
					[
						81,
						99,
						181,
						242,
						176,
						190,
						249,
						202,
						255,
						255,
						128
					]
				],
				[
					[
						1,
						129,
						232,
						253,
						214,
						197,
						242,
						196,
						255,
						255,
						128
					],
					[
						99,
						121,
						210,
						250,
						201,
						198,
						255,
						202,
						128,
						128,
						128
					],
					[
						23,
						91,
						163,
						242,
						170,
						187,
						247,
						210,
						255,
						255,
						128
					]
				],
				[
					[
						1,
						200,
						246,
						255,
						234,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						109,
						178,
						241,
						255,
						231,
						245,
						255,
						255,
						128,
						128,
						128
					],
					[
						44,
						130,
						201,
						253,
						205,
						192,
						255,
						255,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						132,
						239,
						251,
						219,
						209,
						255,
						165,
						128,
						128,
						128
					],
					[
						94,
						136,
						225,
						251,
						218,
						190,
						255,
						255,
						128,
						128,
						128
					],
					[
						22,
						100,
						174,
						245,
						186,
						161,
						255,
						199,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						182,
						249,
						255,
						232,
						235,
						128,
						128,
						128,
						128,
						128
					],
					[
						124,
						143,
						241,
						255,
						227,
						234,
						128,
						128,
						128,
						128,
						128
					],
					[
						35,
						77,
						181,
						251,
						193,
						211,
						255,
						205,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						157,
						247,
						255,
						236,
						231,
						255,
						255,
						128,
						128,
						128
					],
					[
						121,
						141,
						235,
						255,
						225,
						227,
						255,
						255,
						128,
						128,
						128
					],
					[
						45,
						99,
						188,
						251,
						195,
						217,
						255,
						224,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						1,
						251,
						255,
						213,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						203,
						1,
						248,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						137,
						1,
						177,
						255,
						224,
						255,
						128,
						128,
						128,
						128,
						128
					]
				]
			],
			[
				[
					[
						253,
						9,
						248,
						251,
						207,
						208,
						255,
						192,
						128,
						128,
						128
					],
					[
						175,
						13,
						224,
						243,
						193,
						185,
						249,
						198,
						255,
						255,
						128
					],
					[
						73,
						17,
						171,
						221,
						161,
						179,
						236,
						167,
						255,
						234,
						128
					]
				],
				[
					[
						1,
						95,
						247,
						253,
						212,
						183,
						255,
						255,
						128,
						128,
						128
					],
					[
						239,
						90,
						244,
						250,
						211,
						209,
						255,
						255,
						128,
						128,
						128
					],
					[
						155,
						77,
						195,
						248,
						188,
						195,
						255,
						255,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						24,
						239,
						251,
						218,
						219,
						255,
						205,
						128,
						128,
						128
					],
					[
						201,
						51,
						219,
						255,
						196,
						186,
						128,
						128,
						128,
						128,
						128
					],
					[
						69,
						46,
						190,
						239,
						201,
						218,
						255,
						228,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						191,
						251,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						223,
						165,
						249,
						255,
						213,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						141,
						124,
						248,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						16,
						248,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						190,
						36,
						230,
						255,
						236,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						149,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						226,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						247,
						192,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						240,
						128,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						134,
						252,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						213,
						62,
						250,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						55,
						93,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				]
			],
			[
				[
					[
						202,
						24,
						213,
						235,
						186,
						191,
						220,
						160,
						240,
						175,
						255
					],
					[
						126,
						38,
						182,
						232,
						169,
						184,
						228,
						174,
						255,
						187,
						128
					],
					[
						61,
						46,
						138,
						219,
						151,
						178,
						240,
						170,
						255,
						216,
						128
					]
				],
				[
					[
						1,
						112,
						230,
						250,
						199,
						191,
						247,
						159,
						255,
						255,
						128
					],
					[
						166,
						109,
						228,
						252,
						211,
						215,
						255,
						174,
						128,
						128,
						128
					],
					[
						39,
						77,
						162,
						232,
						172,
						180,
						245,
						178,
						255,
						255,
						128
					]
				],
				[
					[
						1,
						52,
						220,
						246,
						198,
						199,
						249,
						220,
						255,
						255,
						128
					],
					[
						124,
						74,
						191,
						243,
						183,
						193,
						250,
						221,
						255,
						255,
						128
					],
					[
						24,
						71,
						130,
						219,
						154,
						170,
						243,
						182,
						255,
						255,
						128
					]
				],
				[
					[
						1,
						182,
						225,
						249,
						219,
						240,
						255,
						224,
						128,
						128,
						128
					],
					[
						149,
						150,
						226,
						252,
						216,
						205,
						255,
						171,
						128,
						128,
						128
					],
					[
						28,
						108,
						170,
						242,
						183,
						194,
						254,
						223,
						255,
						255,
						128
					]
				],
				[
					[
						1,
						81,
						230,
						252,
						204,
						203,
						255,
						192,
						128,
						128,
						128
					],
					[
						123,
						102,
						209,
						247,
						188,
						196,
						255,
						233,
						128,
						128,
						128
					],
					[
						20,
						95,
						153,
						243,
						164,
						173,
						255,
						203,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						222,
						248,
						255,
						216,
						213,
						128,
						128,
						128,
						128,
						128
					],
					[
						168,
						175,
						246,
						252,
						235,
						205,
						255,
						255,
						128,
						128,
						128
					],
					[
						47,
						116,
						215,
						255,
						211,
						212,
						255,
						255,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						121,
						236,
						253,
						212,
						214,
						255,
						255,
						128,
						128,
						128
					],
					[
						141,
						84,
						213,
						252,
						201,
						202,
						255,
						219,
						128,
						128,
						128
					],
					[
						42,
						80,
						160,
						240,
						162,
						185,
						255,
						205,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						244,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						238,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				]
			]
		], si = [
			[
				[
					231,
					120,
					48,
					89,
					115,
					113,
					120,
					152,
					112
				],
				[
					152,
					179,
					64,
					126,
					170,
					118,
					46,
					70,
					95
				],
				[
					175,
					69,
					143,
					80,
					85,
					82,
					72,
					155,
					103
				],
				[
					56,
					58,
					10,
					171,
					218,
					189,
					17,
					13,
					152
				],
				[
					114,
					26,
					17,
					163,
					44,
					195,
					21,
					10,
					173
				],
				[
					121,
					24,
					80,
					195,
					26,
					62,
					44,
					64,
					85
				],
				[
					144,
					71,
					10,
					38,
					171,
					213,
					144,
					34,
					26
				],
				[
					170,
					46,
					55,
					19,
					136,
					160,
					33,
					206,
					71
				],
				[
					63,
					20,
					8,
					114,
					114,
					208,
					12,
					9,
					226
				],
				[
					81,
					40,
					11,
					96,
					182,
					84,
					29,
					16,
					36
				]
			],
			[
				[
					134,
					183,
					89,
					137,
					98,
					101,
					106,
					165,
					148
				],
				[
					72,
					187,
					100,
					130,
					157,
					111,
					32,
					75,
					80
				],
				[
					66,
					102,
					167,
					99,
					74,
					62,
					40,
					234,
					128
				],
				[
					41,
					53,
					9,
					178,
					241,
					141,
					26,
					8,
					107
				],
				[
					74,
					43,
					26,
					146,
					73,
					166,
					49,
					23,
					157
				],
				[
					65,
					38,
					105,
					160,
					51,
					52,
					31,
					115,
					128
				],
				[
					104,
					79,
					12,
					27,
					217,
					255,
					87,
					17,
					7
				],
				[
					87,
					68,
					71,
					44,
					114,
					51,
					15,
					186,
					23
				],
				[
					47,
					41,
					14,
					110,
					182,
					183,
					21,
					17,
					194
				],
				[
					66,
					45,
					25,
					102,
					197,
					189,
					23,
					18,
					22
				]
			],
			[
				[
					88,
					88,
					147,
					150,
					42,
					46,
					45,
					196,
					205
				],
				[
					43,
					97,
					183,
					117,
					85,
					38,
					35,
					179,
					61
				],
				[
					39,
					53,
					200,
					87,
					26,
					21,
					43,
					232,
					171
				],
				[
					56,
					34,
					51,
					104,
					114,
					102,
					29,
					93,
					77
				],
				[
					39,
					28,
					85,
					171,
					58,
					165,
					90,
					98,
					64
				],
				[
					34,
					22,
					116,
					206,
					23,
					34,
					43,
					166,
					73
				],
				[
					107,
					54,
					32,
					26,
					51,
					1,
					81,
					43,
					31
				],
				[
					68,
					25,
					106,
					22,
					64,
					171,
					36,
					225,
					114
				],
				[
					34,
					19,
					21,
					102,
					132,
					188,
					16,
					76,
					124
				],
				[
					62,
					18,
					78,
					95,
					85,
					57,
					50,
					48,
					51
				]
			],
			[
				[
					193,
					101,
					35,
					159,
					215,
					111,
					89,
					46,
					111
				],
				[
					60,
					148,
					31,
					172,
					219,
					228,
					21,
					18,
					111
				],
				[
					112,
					113,
					77,
					85,
					179,
					255,
					38,
					120,
					114
				],
				[
					40,
					42,
					1,
					196,
					245,
					209,
					10,
					25,
					109
				],
				[
					88,
					43,
					29,
					140,
					166,
					213,
					37,
					43,
					154
				],
				[
					61,
					63,
					30,
					155,
					67,
					45,
					68,
					1,
					209
				],
				[
					100,
					80,
					8,
					43,
					154,
					1,
					51,
					26,
					71
				],
				[
					142,
					78,
					78,
					16,
					255,
					128,
					34,
					197,
					171
				],
				[
					41,
					40,
					5,
					102,
					211,
					183,
					4,
					1,
					221
				],
				[
					51,
					50,
					17,
					168,
					209,
					192,
					23,
					25,
					82
				]
			],
			[
				[
					138,
					31,
					36,
					171,
					27,
					166,
					38,
					44,
					229
				],
				[
					67,
					87,
					58,
					169,
					82,
					115,
					26,
					59,
					179
				],
				[
					63,
					59,
					90,
					180,
					59,
					166,
					93,
					73,
					154
				],
				[
					40,
					40,
					21,
					116,
					143,
					209,
					34,
					39,
					175
				],
				[
					47,
					15,
					16,
					183,
					34,
					223,
					49,
					45,
					183
				],
				[
					46,
					17,
					33,
					183,
					6,
					98,
					15,
					32,
					183
				],
				[
					57,
					46,
					22,
					24,
					128,
					1,
					54,
					17,
					37
				],
				[
					65,
					32,
					73,
					115,
					28,
					128,
					23,
					128,
					205
				],
				[
					40,
					3,
					9,
					115,
					51,
					192,
					18,
					6,
					223
				],
				[
					87,
					37,
					9,
					115,
					59,
					77,
					64,
					21,
					47
				]
			],
			[
				[
					104,
					55,
					44,
					218,
					9,
					54,
					53,
					130,
					226
				],
				[
					64,
					90,
					70,
					205,
					40,
					41,
					23,
					26,
					57
				],
				[
					54,
					57,
					112,
					184,
					5,
					41,
					38,
					166,
					213
				],
				[
					30,
					34,
					26,
					133,
					152,
					116,
					10,
					32,
					134
				],
				[
					39,
					19,
					53,
					221,
					26,
					114,
					32,
					73,
					255
				],
				[
					31,
					9,
					65,
					234,
					2,
					15,
					1,
					118,
					73
				],
				[
					75,
					32,
					12,
					51,
					192,
					255,
					160,
					43,
					51
				],
				[
					88,
					31,
					35,
					67,
					102,
					85,
					55,
					186,
					85
				],
				[
					56,
					21,
					23,
					111,
					59,
					205,
					45,
					37,
					192
				],
				[
					55,
					38,
					70,
					124,
					73,
					102,
					1,
					34,
					98
				]
			],
			[
				[
					125,
					98,
					42,
					88,
					104,
					85,
					117,
					175,
					82
				],
				[
					95,
					84,
					53,
					89,
					128,
					100,
					113,
					101,
					45
				],
				[
					75,
					79,
					123,
					47,
					51,
					128,
					81,
					171,
					1
				],
				[
					57,
					17,
					5,
					71,
					102,
					57,
					53,
					41,
					49
				],
				[
					38,
					33,
					13,
					121,
					57,
					73,
					26,
					1,
					85
				],
				[
					41,
					10,
					67,
					138,
					77,
					110,
					90,
					47,
					114
				],
				[
					115,
					21,
					2,
					10,
					102,
					255,
					166,
					23,
					6
				],
				[
					101,
					29,
					16,
					10,
					85,
					128,
					101,
					196,
					26
				],
				[
					57,
					18,
					10,
					102,
					102,
					213,
					34,
					20,
					43
				],
				[
					117,
					20,
					15,
					36,
					163,
					128,
					68,
					1,
					26
				]
			],
			[
				[
					102,
					61,
					71,
					37,
					34,
					53,
					31,
					243,
					192
				],
				[
					69,
					60,
					71,
					38,
					73,
					119,
					28,
					222,
					37
				],
				[
					68,
					45,
					128,
					34,
					1,
					47,
					11,
					245,
					171
				],
				[
					62,
					17,
					19,
					70,
					146,
					85,
					55,
					62,
					70
				],
				[
					37,
					43,
					37,
					154,
					100,
					163,
					85,
					160,
					1
				],
				[
					63,
					9,
					92,
					136,
					28,
					64,
					32,
					201,
					85
				],
				[
					75,
					15,
					9,
					9,
					64,
					255,
					184,
					119,
					16
				],
				[
					86,
					6,
					28,
					5,
					64,
					255,
					25,
					248,
					1
				],
				[
					56,
					8,
					17,
					132,
					137,
					255,
					55,
					116,
					128
				],
				[
					58,
					15,
					20,
					82,
					135,
					57,
					26,
					121,
					40
				]
			],
			[
				[
					164,
					50,
					31,
					137,
					154,
					133,
					25,
					35,
					218
				],
				[
					51,
					103,
					44,
					131,
					131,
					123,
					31,
					6,
					158
				],
				[
					86,
					40,
					64,
					135,
					148,
					224,
					45,
					183,
					128
				],
				[
					22,
					26,
					17,
					131,
					240,
					154,
					14,
					1,
					209
				],
				[
					45,
					16,
					21,
					91,
					64,
					222,
					7,
					1,
					197
				],
				[
					56,
					21,
					39,
					155,
					60,
					138,
					23,
					102,
					213
				],
				[
					83,
					12,
					13,
					54,
					192,
					255,
					68,
					47,
					28
				],
				[
					85,
					26,
					85,
					85,
					128,
					128,
					32,
					146,
					171
				],
				[
					18,
					11,
					7,
					63,
					144,
					171,
					4,
					4,
					246
				],
				[
					35,
					27,
					10,
					146,
					174,
					171,
					12,
					26,
					128
				]
			],
			[
				[
					190,
					80,
					35,
					99,
					180,
					80,
					126,
					54,
					45
				],
				[
					85,
					126,
					47,
					87,
					176,
					51,
					41,
					20,
					32
				],
				[
					101,
					75,
					128,
					139,
					118,
					146,
					116,
					128,
					85
				],
				[
					56,
					41,
					15,
					176,
					236,
					85,
					37,
					9,
					62
				],
				[
					71,
					30,
					17,
					119,
					118,
					255,
					17,
					18,
					138
				],
				[
					101,
					38,
					60,
					138,
					55,
					70,
					43,
					26,
					142
				],
				[
					146,
					36,
					19,
					30,
					171,
					255,
					97,
					27,
					20
				],
				[
					138,
					45,
					61,
					62,
					219,
					1,
					81,
					188,
					64
				],
				[
					32,
					41,
					20,
					117,
					151,
					142,
					20,
					21,
					163
				],
				[
					112,
					19,
					12,
					61,
					195,
					128,
					48,
					4,
					24
				]
			]
		], ui = [
			[
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						176,
						246,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						223,
						241,
						252,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						249,
						253,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						244,
						252,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						234,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						246,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						239,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						248,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						251,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						251,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						253,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						250,
						255,
						254,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				]
			],
			[
				[
					[
						217,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						225,
						252,
						241,
						253,
						255,
						255,
						254,
						255,
						255,
						255,
						255
					],
					[
						234,
						250,
						241,
						250,
						253,
						255,
						253,
						254,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						223,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						238,
						253,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						248,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						249,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						247,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						252,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						250,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				]
			],
			[
				[
					[
						186,
						251,
						250,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						234,
						251,
						244,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						251,
						251,
						243,
						253,
						254,
						255,
						254,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						236,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						251,
						253,
						253,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				]
			],
			[
				[
					[
						248,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						250,
						254,
						252,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						248,
						254,
						249,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						253,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						246,
						253,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						252,
						254,
						251,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						252,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						248,
						254,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						253,
						255,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						251,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						245,
						251,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						253,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						251,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						252,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						252,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						249,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						250,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				]
			]
		], ci = [
			0,
			1,
			2,
			3,
			6,
			4,
			5,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			7,
			0
		], li = [], hi = [], fi = [], di = 1, pi = 2, gi = [], mi = [];
		vn("UpsampleRgbLinePair", xn, 3), vn("UpsampleBgrLinePair", An, 3), vn("UpsampleRgbaLinePair", Fn, 4), vn("UpsampleBgraLinePair", kn, 4), vn("UpsampleArgbLinePair", Pn, 4), vn("UpsampleRgba4444LinePair", _n, 2), vn("UpsampleRgb565LinePair", Sn, 2);
		var vi = t$1.UpsampleRgbLinePair, bi = t$1.UpsampleBgrLinePair, yi = t$1.UpsampleRgbaLinePair, wi = t$1.UpsampleBgraLinePair, Ni = t$1.UpsampleArgbLinePair, Li = t$1.UpsampleRgba4444LinePair, xi = t$1.UpsampleRgb565LinePair, Ai = 16, Si = 1 << Ai - 1, _i = -227, Pi = 482, ki = 6, Fi = (256 << ki) - 1, Ii = 0, ji = a$1(256), Ci = a$1(256), Oi = a$1(256), Bi = a$1(256), Mi = a$1(Pi - _i), qi = a$1(Pi - _i);
		In("YuvToRgbRow", xn, 3), In("YuvToBgrRow", An, 3), In("YuvToRgbaRow", Fn, 4), In("YuvToBgraRow", kn, 4), In("YuvToArgbRow", Pn, 4), In("YuvToRgba4444Row", _n, 2), In("YuvToRgb565Row", Sn, 2);
		var Ei = [
			0,
			4,
			8,
			12,
			128,
			132,
			136,
			140,
			256,
			260,
			264,
			268,
			384,
			388,
			392,
			396
		], Ri = [
			0,
			2,
			8
		], Di = [
			8,
			7,
			6,
			4,
			4,
			2,
			2,
			2,
			1,
			1,
			1,
			1
		], Ti = 1;
		this.WebPDecodeRGBA = function(t$2, n$1, s$2, u$3, c$3) {
			var l$3 = qr, h$3 = new en(), f$3 = new ot$1();
			h$3.ba = f$3, f$3.S = l$3, f$3.width = [f$3.width], f$3.height = [f$3.height];
			var d$3 = f$3.width, p$3 = f$3.height, g$3 = new st$1();
			if (null == g$3 || null == t$2) var m$3 = 2;
			else e(null != g$3), m$3 = Bn(t$2, n$1, s$2, g$3.width, g$3.height, g$3.Pd, g$3.Qd, g$3.format, null);
			if (0 != m$3 ? d$3 = 0 : (null != d$3 && (d$3[0] = g$3.width[0]), null != p$3 && (p$3[0] = g$3.height[0]), d$3 = 1), d$3) {
				f$3.width = f$3.width[0], f$3.height = f$3.height[0], null != u$3 && (u$3[0] = f$3.width), null != c$3 && (c$3[0] = f$3.height);
				t: {
					if (u$3 = new Gt$1(), (c$3 = new nn()).data = t$2, c$3.w = n$1, c$3.ha = s$2, c$3.kd = 1, n$1 = [0], e(null != c$3), (0 == (t$2 = Bn(c$3.data, c$3.w, c$3.ha, null, null, null, n$1, null, c$3)) || 7 == t$2) && n$1[0] && (t$2 = 4), 0 == (n$1 = t$2)) {
						if (e(null != h$3), u$3.data = c$3.data, u$3.w = c$3.w + c$3.offset, u$3.ha = c$3.ha - c$3.offset, u$3.put = dt$1, u$3.ac = ft$1, u$3.bc = pt$1, u$3.ma = h$3, c$3.xa) {
							if (null == (t$2 = kt$1())) {
								h$3 = 1;
								break t;
							}
							if (function(t$3, n$2) {
								var r$1 = [0], i$3 = [0], a$2 = [0];
								e: for (;;) {
									if (null == t$3) return 0;
									if (null == n$2) return t$3.a = 2, 0;
									if (t$3.l = n$2, t$3.a = 0, v$2(t$3.m, n$2.data, n$2.w, n$2.ha), !gt$1(t$3.m, r$1, i$3, a$2)) {
										t$3.a = 3;
										break e;
									}
									if (t$3.xb = pi, n$2.width = r$1[0], n$2.height = i$3[0], !Ft$1(r$1[0], i$3[0], 1, t$3, null)) break e;
									return 1;
								}
								return e(0 != t$3.a), 0;
							}(t$2, u$3)) {
								if (u$3 = 0 == (n$1 = En(u$3.width, u$3.height, h$3.Oa, h$3.ba))) {
									e: {
										u$3 = t$2;
										n: for (;;) {
											if (null == u$3) {
												u$3 = 0;
												break e;
											}
											if (e(null != u$3.s.yc), e(null != u$3.s.Ya), e(0 < u$3.s.Wb), e(null != (s$2 = u$3.l)), e(null != (c$3 = s$2.ma)), 0 != u$3.xb) {
												if (u$3.ca = c$3.ba, u$3.tb = c$3.tb, e(null != u$3.ca), !Mn(c$3.Oa, s$2, Rr)) {
													u$3.a = 2;
													break n;
												}
												if (!It$1(u$3, s$2.width)) break n;
												if (s$2.da) break n;
												if ((s$2.da || rt$1(u$3.ca.S)) && mn(), 11 > u$3.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), null != u$3.ca.f.kb.F && mn()), u$3.Pb && 0 < u$3.s.ua && null == u$3.s.vb.X && !O$1(u$3.s.vb, u$3.s.Wa.Xa)) {
													u$3.a = 1;
													break n;
												}
												u$3.xb = 0;
											}
											if (!_t$1(u$3, u$3.V, u$3.Ba, u$3.c, u$3.i, s$2.o, Lt$1)) break n;
											c$3.Dc = u$3.Ma, u$3 = 1;
											break e;
										}
										e(0 != u$3.a), u$3 = 0;
									}
									u$3 = !u$3;
								}
								u$3 && (n$1 = t$2.a);
							} else n$1 = t$2.a;
						} else {
							if (null == (t$2 = new Yt$1())) {
								h$3 = 1;
								break t;
							}
							if (t$2.Fa = c$3.na, t$2.P = c$3.P, t$2.qc = c$3.Sa, Kt$1(t$2, u$3)) {
								if (0 == (n$1 = En(u$3.width, u$3.height, h$3.Oa, h$3.ba))) {
									if (t$2.Aa = 0, s$2 = h$3.Oa, e(null != (c$3 = t$2)), null != s$2) {
										if (0 < (d$3 = 0 > (d$3 = s$2.Md) ? 0 : 100 < d$3 ? 255 : 255 * d$3 / 100)) {
											for (p$3 = g$3 = 0; 4 > p$3; ++p$3) 12 > (m$3 = c$3.pb[p$3]).lc && (m$3.ia = d$3 * Di[0 > m$3.lc ? 0 : m$3.lc] >> 3), g$3 |= m$3.ia;
											g$3 && (alert("todo:VP8InitRandom"), c$3.ia = 1);
										}
										c$3.Ga = s$2.Id, 100 < c$3.Ga ? c$3.Ga = 100 : 0 > c$3.Ga && (c$3.Ga = 0);
									}
									(function(t$3, n$2) {
										if (null == t$3) return 0;
										if (null == n$2) return Jt$1(t$3, 2, "NULL VP8Io parameter in VP8Decode().");
										if (!t$3.cb && !Kt$1(t$3, n$2)) return 0;
										if (e(t$3.cb), null == n$2.ac || n$2.ac(n$2)) {
											n$2.ob && (t$3.L = 0);
											var s$3 = Ri[t$3.L];
											if (2 == t$3.L ? (t$3.yb = 0, t$3.zb = 0) : (t$3.yb = n$2.v - s$3 >> 4, t$3.zb = n$2.j - s$3 >> 4, 0 > t$3.yb && (t$3.yb = 0), 0 > t$3.zb && (t$3.zb = 0)), t$3.Va = n$2.o + 15 + s$3 >> 4, t$3.Hb = n$2.va + 15 + s$3 >> 4, t$3.Hb > t$3.za && (t$3.Hb = t$3.za), t$3.Va > t$3.Ub && (t$3.Va = t$3.Ub), 0 < t$3.L) {
												var u$4 = t$3.ed;
												for (s$3 = 0; 4 > s$3; ++s$3) {
													var c$4;
													if (t$3.Qa.Cb) {
														var l$4 = t$3.Qa.Lb[s$3];
														t$3.Qa.Fb || (l$4 += u$4.Tb);
													} else l$4 = u$4.Tb;
													for (c$4 = 0; 1 >= c$4; ++c$4) {
														var h$4 = t$3.gd[s$3][c$4], f$4 = l$4;
														if (u$4.Pc && (f$4 += u$4.vd[0], c$4 && (f$4 += u$4.od[0])), 0 < (f$4 = 0 > f$4 ? 0 : 63 < f$4 ? 63 : f$4)) {
															var d$4 = f$4;
															0 < u$4.wb && (d$4 = 4 < u$4.wb ? d$4 >> 2 : d$4 >> 1) > 9 - u$4.wb && (d$4 = 9 - u$4.wb), 1 > d$4 && (d$4 = 1), h$4.dd = d$4, h$4.tc = 2 * f$4 + d$4, h$4.ld = 40 <= f$4 ? 2 : 15 <= f$4 ? 1 : 0;
														} else h$4.tc = 0;
														h$4.La = c$4;
													}
												}
											}
											s$3 = 0;
										} else Jt$1(t$3, 6, "Frame setup failed"), s$3 = t$3.a;
										if (s$3 = 0 == s$3) {
											if (s$3) {
												t$3.$c = 0, 0 < t$3.Aa || (t$3.Ic = Ti);
												e: {
													s$3 = t$3.Ic, u$4 = 4 * (d$4 = t$3.za);
													var p$4 = 32 * d$4, g$4 = d$4 + 1, m$4 = 0 < t$3.L ? d$4 * (0 < t$3.Aa ? 2 : 1) : 0, v$3 = (2 == t$3.Aa ? 2 : 1) * d$4;
													if ((h$4 = u$4 + 832 + (c$4 = 3 * (16 * s$3 + Ri[t$3.L]) / 2 * p$4) + (l$4 = null != t$3.Fa && 0 < t$3.Fa.length ? t$3.Kc.c * t$3.Kc.i : 0)) != h$4) s$3 = 0;
													else {
														if (h$4 > t$3.Vb) {
															if (t$3.Vb = 0, t$3.Ec = a$1(h$4), t$3.Fc = 0, null == t$3.Ec) {
																s$3 = Jt$1(t$3, 1, "no memory during frame initialization.");
																break e;
															}
															t$3.Vb = h$4;
														}
														h$4 = t$3.Ec, f$4 = t$3.Fc, t$3.Ac = h$4, t$3.Bc = f$4, f$4 += u$4, t$3.Gd = o$1(p$4, Ht$1), t$3.Hd = 0, t$3.rb = o$1(g$4 + 1, Dt$1), t$3.sb = 1, t$3.wa = m$4 ? o$1(m$4, Rt$1) : null, t$3.Y = 0, t$3.D.Nb = 0, t$3.D.wa = t$3.wa, t$3.D.Y = t$3.Y, 0 < t$3.Aa && (t$3.D.Y += d$4), e(!0), t$3.oc = h$4, t$3.pc = f$4, f$4 += 832, t$3.ya = o$1(v$3, zt$1), t$3.aa = 0, t$3.D.ya = t$3.ya, t$3.D.aa = t$3.aa, 2 == t$3.Aa && (t$3.D.aa += d$4), t$3.R = 16 * d$4, t$3.B = 8 * d$4, d$4 = (p$4 = Ri[t$3.L]) * t$3.R, p$4 = p$4 / 2 * t$3.B, t$3.sa = h$4, t$3.ta = f$4 + d$4, t$3.qa = t$3.sa, t$3.ra = t$3.ta + 16 * s$3 * t$3.R + p$4, t$3.Ha = t$3.qa, t$3.Ia = t$3.ra + 8 * s$3 * t$3.B + p$4, t$3.$c = 0, f$4 += c$4, t$3.mb = l$4 ? h$4 : null, t$3.nb = l$4 ? f$4 : null, e(f$4 + l$4 <= t$3.Fc + t$3.Vb), $t$1(t$3), i$2(t$3.Ac, t$3.Bc, 0, u$4), s$3 = 1;
													}
												}
												if (s$3) {
													if (n$2.ka = 0, n$2.y = t$3.sa, n$2.O = t$3.ta, n$2.f = t$3.qa, n$2.N = t$3.ra, n$2.ea = t$3.Ha, n$2.Vd = t$3.Ia, n$2.fa = t$3.R, n$2.Rc = t$3.B, n$2.F = null, n$2.J = 0, !Ir) {
														for (s$3 = -255; 255 >= s$3; ++s$3) _r[255 + s$3] = 0 > s$3 ? -s$3 : s$3;
														for (s$3 = -1020; 1020 >= s$3; ++s$3) Pr[1020 + s$3] = -128 > s$3 ? -128 : 127 < s$3 ? 127 : s$3;
														for (s$3 = -112; 112 >= s$3; ++s$3) kr[112 + s$3] = -16 > s$3 ? -16 : 15 < s$3 ? 15 : s$3;
														for (s$3 = -255; 510 >= s$3; ++s$3) Fr[255 + s$3] = 0 > s$3 ? 0 : 255 < s$3 ? 255 : s$3;
														Ir = 1;
													}
													ir = ue$1, ar = ie$1, sr = ae$1, ur = oe$1, cr = se$1, or = re$1, lr = Ye, hr = Je, fr = Ze, dr = $e, pr = Xe, gr = Ke, mr = Qe, vr = tn, br = ze, yr = Ue, wr = He, Nr = We, hi[0] = xe$1, hi[1] = le$1, hi[2] = Ne$1, hi[3] = Le$1, hi[4] = Ae$1, hi[5] = _e$1, hi[6] = Se$1, hi[7] = Pe$1, hi[8] = Fe$1, hi[9] = ke$1, li[0] = me$1, li[1] = fe$1, li[2] = de$1, li[3] = pe$1, li[4] = ve$1, li[5] = be$1, li[6] = ye$1, fi[0] = Oe, fi[1] = he$1, fi[2] = Ie$1, fi[3] = je$1, fi[4] = Me, fi[5] = Be, fi[6] = qe, s$3 = 1;
												} else s$3 = 0;
											}
											s$3 && (s$3 = function(t$4, n$3) {
												for (t$4.M = 0; t$4.M < t$4.Va; ++t$4.M) {
													var o$2, s$4 = t$4.Jc[t$4.M & t$4.Xb], u$5 = t$4.m, c$5 = t$4;
													for (o$2 = 0; o$2 < c$5.za; ++o$2) {
														var l$5 = u$5, h$5 = c$5, f$5 = h$5.Ac, d$5 = h$5.Bc + 4 * o$2, p$5 = h$5.zc, g$5 = h$5.ya[h$5.aa + o$2];
														if (h$5.Qa.Bb ? g$5.$b = k$1(l$5, h$5.Pa.jb[0]) ? 2 + k$1(l$5, h$5.Pa.jb[2]) : k$1(l$5, h$5.Pa.jb[1]) : g$5.$b = 0, h$5.kc && (g$5.Ad = k$1(l$5, h$5.Bd)), g$5.Za = !k$1(l$5, 145) + 0, g$5.Za) {
															var m$5 = g$5.Ob, v$4 = 0;
															for (h$5 = 0; 4 > h$5; ++h$5) {
																var b$3, y$3 = p$5[0 + h$5];
																for (b$3 = 0; 4 > b$3; ++b$3) {
																	y$3 = si[f$5[d$5 + b$3]][y$3];
																	for (var w$3 = ai[k$1(l$5, y$3[0])]; 0 < w$3;) w$3 = ai[2 * w$3 + k$1(l$5, y$3[w$3])];
																	y$3 = -w$3, f$5[d$5 + b$3] = y$3;
																}
																r(m$5, v$4, f$5, d$5, 4), v$4 += 4, p$5[0 + h$5] = y$3;
															}
														} else y$3 = k$1(l$5, 156) ? k$1(l$5, 128) ? 1 : 3 : k$1(l$5, 163) ? 2 : 0, g$5.Ob[0] = y$3, i$2(f$5, d$5, y$3, 4), i$2(p$5, 0, y$3, 4);
														g$5.Dd = k$1(l$5, 142) ? k$1(l$5, 114) ? k$1(l$5, 183) ? 1 : 3 : 2 : 0;
													}
													if (c$5.m.Ka) return Jt$1(t$4, 7, "Premature end-of-partition0 encountered.");
													for (; t$4.ja < t$4.za; ++t$4.ja) {
														if (c$5 = s$4, l$5 = (u$5 = t$4).rb[u$5.sb - 1], f$5 = u$5.rb[u$5.sb + u$5.ja], o$2 = u$5.ya[u$5.aa + u$5.ja], d$5 = u$5.kc ? o$2.Ad : 0) l$5.la = f$5.la = 0, o$2.Za || (l$5.Na = f$5.Na = 0), o$2.Hc = 0, o$2.Gc = 0, o$2.ia = 0;
														else {
															var N$3, L$3;
															if (l$5 = f$5, f$5 = c$5, d$5 = u$5.Pa.Xc, p$5 = u$5.ya[u$5.aa + u$5.ja], g$5 = u$5.pb[p$5.$b], h$5 = p$5.ad, m$5 = 0, v$4 = u$5.rb[u$5.sb - 1], y$3 = b$3 = 0, i$2(h$5, m$5, 0, 384), p$5.Za) var x$4 = 0, A$3 = d$5[3];
															else {
																w$3 = a$1(16);
																var S$2 = l$5.Na + v$4.Na;
																if (S$2 = ni(f$5, d$5[1], S$2, g$5.Eb, 0, w$3, 0), l$5.Na = v$4.Na = (0 < S$2) + 0, 1 < S$2) ir(w$3, 0, h$5, m$5);
																else {
																	var _$2 = w$3[0] + 3 >> 3;
																	for (w$3 = 0; 256 > w$3; w$3 += 16) h$5[m$5 + w$3] = _$2;
																}
																x$4 = 1, A$3 = d$5[0];
															}
															var P$2 = 15 & l$5.la, F$2 = 15 & v$4.la;
															for (w$3 = 0; 4 > w$3; ++w$3) {
																var I$2 = 1 & F$2;
																for (_$2 = L$3 = 0; 4 > _$2; ++_$2) P$2 = P$2 >> 1 | (I$2 = (S$2 = ni(f$5, A$3, S$2 = I$2 + (1 & P$2), g$5.Sc, x$4, h$5, m$5)) > x$4) << 7, L$3 = L$3 << 2 | (3 < S$2 ? 3 : 1 < S$2 ? 2 : 0 != h$5[m$5 + 0]), m$5 += 16;
																P$2 >>= 4, F$2 = F$2 >> 1 | I$2 << 7, b$3 = (b$3 << 8 | L$3) >>> 0;
															}
															for (A$3 = P$2, x$4 = F$2 >> 4, N$3 = 0; 4 > N$3; N$3 += 2) {
																for (L$3 = 0, P$2 = l$5.la >> 4 + N$3, F$2 = v$4.la >> 4 + N$3, w$3 = 0; 2 > w$3; ++w$3) {
																	for (I$2 = 1 & F$2, _$2 = 0; 2 > _$2; ++_$2) S$2 = I$2 + (1 & P$2), P$2 = P$2 >> 1 | (I$2 = 0 < (S$2 = ni(f$5, d$5[2], S$2, g$5.Qc, 0, h$5, m$5))) << 3, L$3 = L$3 << 2 | (3 < S$2 ? 3 : 1 < S$2 ? 2 : 0 != h$5[m$5 + 0]), m$5 += 16;
																	P$2 >>= 2, F$2 = F$2 >> 1 | I$2 << 5;
																}
																y$3 |= L$3 << 4 * N$3, A$3 |= P$2 << 4 << N$3, x$4 |= (240 & F$2) << N$3;
															}
															l$5.la = A$3, v$4.la = x$4, p$5.Hc = b$3, p$5.Gc = y$3, p$5.ia = 43690 & y$3 ? 0 : g$5.ia, d$5 = !(b$3 | y$3);
														}
														if (0 < u$5.L && (u$5.wa[u$5.Y + u$5.ja] = u$5.gd[o$2.$b][o$2.Za], u$5.wa[u$5.Y + u$5.ja].La |= !d$5), c$5.Ka) return Jt$1(t$4, 7, "Premature end-of-file encountered.");
													}
													if ($t$1(t$4), u$5 = n$3, c$5 = 1, o$2 = (s$4 = t$4).D, l$5 = 0 < s$4.L && s$4.M >= s$4.zb && s$4.M <= s$4.Va, 0 == s$4.Aa) e: {
														if (o$2.M = s$4.M, o$2.uc = l$5, On(s$4, o$2), c$5 = 1, o$2 = (L$3 = s$4.D).Nb, l$5 = (y$3 = Ri[s$4.L]) * s$4.R, f$5 = y$3 / 2 * s$4.B, w$3 = 16 * o$2 * s$4.R, _$2 = 8 * o$2 * s$4.B, d$5 = s$4.sa, p$5 = s$4.ta - l$5 + w$3, g$5 = s$4.qa, h$5 = s$4.ra - f$5 + _$2, m$5 = s$4.Ha, v$4 = s$4.Ia - f$5 + _$2, F$2 = 0 == (P$2 = L$3.M), b$3 = P$2 >= s$4.Va - 1, 2 == s$4.Aa && On(s$4, L$3), L$3.uc) for (I$2 = (S$2 = s$4).D.M, e(S$2.D.uc), L$3 = S$2.yb; L$3 < S$2.Hb; ++L$3) {
															x$4 = L$3, A$3 = I$2;
															var j$2 = (C$2 = (z$2 = S$2).D).Nb;
															N$3 = z$2.R;
															var C$2 = C$2.wa[C$2.Y + x$4], O$2 = z$2.sa, B$2 = z$2.ta + 16 * j$2 * N$3 + 16 * x$4, M$2 = C$2.dd, q$2 = C$2.tc;
															if (0 != q$2) if (e(3 <= q$2), 1 == z$2.L) 0 < x$4 && yr(O$2, B$2, N$3, q$2 + 4), C$2.La && Nr(O$2, B$2, N$3, q$2), 0 < A$3 && br(O$2, B$2, N$3, q$2 + 4), C$2.La && wr(O$2, B$2, N$3, q$2);
															else {
																var E$2 = z$2.B, R$2 = z$2.qa, D$2 = z$2.ra + 8 * j$2 * E$2 + 8 * x$4, T$2 = z$2.Ha, z$2 = z$2.Ia + 8 * j$2 * E$2 + 8 * x$4;
																j$2 = C$2.ld, 0 < x$4 && (hr(O$2, B$2, N$3, q$2 + 4, M$2, j$2), dr(R$2, D$2, T$2, z$2, E$2, q$2 + 4, M$2, j$2)), C$2.La && (gr(O$2, B$2, N$3, q$2, M$2, j$2), vr(R$2, D$2, T$2, z$2, E$2, q$2, M$2, j$2)), 0 < A$3 && (lr(O$2, B$2, N$3, q$2 + 4, M$2, j$2), fr(R$2, D$2, T$2, z$2, E$2, q$2 + 4, M$2, j$2)), C$2.La && (pr(O$2, B$2, N$3, q$2, M$2, j$2), mr(R$2, D$2, T$2, z$2, E$2, q$2, M$2, j$2));
															}
														}
														if (s$4.ia && alert("todo:DitherRow"), null != u$5.put) {
															if (L$3 = 16 * P$2, P$2 = 16 * (P$2 + 1), F$2 ? (u$5.y = s$4.sa, u$5.O = s$4.ta + w$3, u$5.f = s$4.qa, u$5.N = s$4.ra + _$2, u$5.ea = s$4.Ha, u$5.W = s$4.Ia + _$2) : (L$3 -= y$3, u$5.y = d$5, u$5.O = p$5, u$5.f = g$5, u$5.N = h$5, u$5.ea = m$5, u$5.W = v$4), b$3 || (P$2 -= y$3), P$2 > u$5.o && (P$2 = u$5.o), u$5.F = null, u$5.J = null, null != s$4.Fa && 0 < s$4.Fa.length && L$3 < P$2 && (u$5.J = hn(s$4, u$5, L$3, P$2 - L$3), u$5.F = s$4.mb, null == u$5.F && 0 == u$5.F.length)) {
																c$5 = Jt$1(s$4, 3, "Could not decode alpha data.");
																break e;
															}
															L$3 < u$5.j && (y$3 = u$5.j - L$3, L$3 = u$5.j, e(!(1 & y$3)), u$5.O += s$4.R * y$3, u$5.N += s$4.B * (y$3 >> 1), u$5.W += s$4.B * (y$3 >> 1), null != u$5.F && (u$5.J += u$5.width * y$3)), L$3 < P$2 && (u$5.O += u$5.v, u$5.N += u$5.v >> 1, u$5.W += u$5.v >> 1, null != u$5.F && (u$5.J += u$5.v), u$5.ka = L$3 - u$5.j, u$5.U = u$5.va - u$5.v, u$5.T = P$2 - L$3, c$5 = u$5.put(u$5));
														}
														o$2 + 1 != s$4.Ic || b$3 || (r(s$4.sa, s$4.ta - l$5, d$5, p$5 + 16 * s$4.R, l$5), r(s$4.qa, s$4.ra - f$5, g$5, h$5 + 8 * s$4.B, f$5), r(s$4.Ha, s$4.Ia - f$5, m$5, v$4 + 8 * s$4.B, f$5));
													}
													if (!c$5) return Jt$1(t$4, 6, "Output aborted.");
												}
												return 1;
											}(t$3, n$2)), null != n$2.bc && n$2.bc(n$2), s$3 &= 1;
										}
										return s$3 ? (t$3.cb = 0, s$3) : 0;
									})(t$2, u$3) || (n$1 = t$2.a);
								}
							} else n$1 = t$2.a;
						}
						0 == n$1 && null != h$3.Oa && h$3.Oa.fd && (n$1 = qn(h$3.ba));
					}
					h$3 = n$1;
				}
				l$3 = 0 != h$3 ? null : 11 > l$3 ? f$3.f.RGBA.eb : f$3.f.kb.y;
			} else l$3 = null;
			return l$3;
		};
		var zi = [
			3,
			4,
			3,
			4,
			4,
			2,
			2,
			4,
			4,
			4,
			2,
			1,
			1
		];
	};
	function c$1(t$1, e$1) {
		for (var n$1 = "", r$1 = 0; r$1 < 4; r$1++) n$1 += String.fromCharCode(t$1[e$1++]);
		return n$1;
	}
	function l$1(t$1, e$1) {
		return t$1[e$1 + 0] | t$1[e$1 + 1] << 8;
	}
	function h$1(t$1, e$1) {
		return (t$1[e$1 + 0] | t$1[e$1 + 1] << 8 | t$1[e$1 + 2] << 16) >>> 0;
	}
	function f$1(t$1, e$1) {
		return (t$1[e$1 + 0] | t$1[e$1 + 1] << 8 | t$1[e$1 + 2] << 16 | t$1[e$1 + 3] << 24) >>> 0;
	}
	new u$1();
	var d$1 = [0], p$1 = [0], g$1 = [], m$1 = new u$1(), v$1 = t, b$1 = function(t$1, e$1) {
		var n$1 = {}, r$1 = 0, i$3 = !1, a$2 = 0, o$2 = 0;
		if (n$1.frames = [], !function(t$2, e$2) {
			for (var n$2 = 0; n$2 < 4; n$2++) if (t$2[e$2 + n$2] != "RIFF".charCodeAt(n$2)) return !0;
			return !1;
		}(t$1, e$1)) {
			for (f$1(t$1, e$1 += 4), e$1 += 8; e$1 < t$1.length;) {
				var s$2 = c$1(t$1, e$1), u$2 = f$1(t$1, e$1 += 4);
				e$1 += 4;
				var d$2 = u$2 + (1 & u$2);
				switch (s$2) {
					case "VP8 ":
					case "VP8L":
						void 0 === n$1.frames[r$1] && (n$1.frames[r$1] = {}), (m$2 = n$1.frames[r$1]).src_off = i$3 ? o$2 : e$1 - 8, m$2.src_size = a$2 + u$2 + 8, r$1++, i$3 && (i$3 = !1, a$2 = 0, o$2 = 0);
						break;
					case "VP8X":
						(m$2 = n$1.header = {}).feature_flags = t$1[e$1];
						var p$2 = e$1 + 4;
						m$2.canvas_width = 1 + h$1(t$1, p$2), p$2 += 3, m$2.canvas_height = 1 + h$1(t$1, p$2), p$2 += 3;
						break;
					case "ALPH":
						i$3 = !0, a$2 = d$2 + 8, o$2 = e$1 - 8;
						break;
					case "ANIM":
						(m$2 = n$1.header).bgcolor = f$1(t$1, e$1), p$2 = e$1 + 4, m$2.loop_count = l$1(t$1, p$2), p$2 += 2;
						break;
					case "ANMF":
						var g$2, m$2;
						(m$2 = n$1.frames[r$1] = {}).offset_x = 2 * h$1(t$1, e$1), e$1 += 3, m$2.offset_y = 2 * h$1(t$1, e$1), e$1 += 3, m$2.width = 1 + h$1(t$1, e$1), e$1 += 3, m$2.height = 1 + h$1(t$1, e$1), e$1 += 3, m$2.duration = h$1(t$1, e$1), e$1 += 3, g$2 = t$1[e$1++], m$2.dispose = 1 & g$2, m$2.blend = g$2 >> 1 & 1;
				}
				"ANMF" != s$2 && (e$1 += d$2);
			}
			return n$1;
		}
	}(v$1, 0);
	b$1.response = v$1, b$1.rgbaoutput = !0, b$1.dataurl = !1;
	var y$1 = b$1.header ? b$1.header : null, w$1 = b$1.frames ? b$1.frames : null;
	if (y$1) {
		y$1.loop_counter = y$1.loop_count, d$1 = [y$1.canvas_height], p$1 = [y$1.canvas_width];
		for (var N$1 = 0; N$1 < w$1.length && 0 != w$1[N$1].blend; N$1++);
	}
	var L$1 = w$1[0], x$2 = m$1.WebPDecodeRGBA(v$1, L$1.src_off, L$1.src_size, p$1, d$1);
	L$1.rgba = x$2, L$1.imgwidth = p$1[0], L$1.imgheight = d$1[0];
	for (var A$1 = 0; A$1 < p$1[0] * d$1[0] * 4; A$1++) g$1[A$1] = x$2[A$1];
	return this.width = p$1, this.height = d$1, this.data = g$1, this;
}
(function(e) {
	var n, r, i$2, a$1, s$1, u$1, c$1, l$1, f$1, d$1 = function(t) {
		return t = t || {}, this.isStrokeTransparent = t.isStrokeTransparent || !1, this.strokeOpacity = t.strokeOpacity || 1, this.strokeStyle = t.strokeStyle || "#000000", this.fillStyle = t.fillStyle || "#000000", this.isFillTransparent = t.isFillTransparent || !1, this.fillOpacity = t.fillOpacity || 1, this.font = t.font || "10px sans-serif", this.textBaseline = t.textBaseline || "alphabetic", this.textAlign = t.textAlign || "left", this.lineWidth = t.lineWidth || 1, this.lineJoin = t.lineJoin || "miter", this.lineCap = t.lineCap || "butt", this.path = t.path || [], this.transform = void 0 !== t.transform ? t.transform.clone() : new l$1(), this.globalCompositeOperation = t.globalCompositeOperation || "normal", this.globalAlpha = t.globalAlpha || 1, this.clip_path = t.clip_path || [], this.currentPoint = t.currentPoint || new u$1(), this.miterLimit = t.miterLimit || 10, this.lastPoint = t.lastPoint || new u$1(), this.lineDashOffset = t.lineDashOffset || 0, this.lineDash = t.lineDash || [], this.margin = t.margin || [
			0,
			0,
			0,
			0
		], this.prevPageLastElemOffset = t.prevPageLastElemOffset || 0, this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect, this;
	};
	e.events.push(["initialized", function() {
		this.context2d = new p$1(this), n = this.internal.f2, r = this.internal.getCoordinateString, i$2 = this.internal.getVerticalCoordinateString, a$1 = this.internal.getHorizontalCoordinate, s$1 = this.internal.getVerticalCoordinate, u$1 = this.internal.Point, c$1 = this.internal.Rectangle, l$1 = this.internal.Matrix, f$1 = new d$1();
	}]);
	var p$1 = function(t) {
		Object.defineProperty(this, "canvas", { get: function() {
			return {
				parentNode: !1,
				style: !1
			};
		} });
		var e$1 = t;
		Object.defineProperty(this, "pdf", { get: function() {
			return e$1;
		} });
		var n$1 = !1;
		Object.defineProperty(this, "pageWrapXEnabled", {
			get: function() {
				return n$1;
			},
			set: function(t$1) {
				n$1 = Boolean(t$1);
			}
		});
		var r$1 = !1;
		Object.defineProperty(this, "pageWrapYEnabled", {
			get: function() {
				return r$1;
			},
			set: function(t$1) {
				r$1 = Boolean(t$1);
			}
		});
		var i$3 = 0;
		Object.defineProperty(this, "posX", {
			get: function() {
				return i$3;
			},
			set: function(t$1) {
				isNaN(t$1) || (i$3 = t$1);
			}
		});
		var a$2 = 0;
		Object.defineProperty(this, "posY", {
			get: function() {
				return a$2;
			},
			set: function(t$1) {
				isNaN(t$1) || (a$2 = t$1);
			}
		}), Object.defineProperty(this, "margin", {
			get: function() {
				return f$1.margin;
			},
			set: function(t$1) {
				var e$2;
				"number" == typeof t$1 ? e$2 = [
					t$1,
					t$1,
					t$1,
					t$1
				] : ((e$2 = new Array(4))[0] = t$1[0], e$2[1] = t$1.length >= 2 ? t$1[1] : e$2[0], e$2[2] = t$1.length >= 3 ? t$1[2] : e$2[0], e$2[3] = t$1.length >= 4 ? t$1[3] : e$2[1]), f$1.margin = e$2;
			}
		});
		var o$1 = !1;
		Object.defineProperty(this, "autoPaging", {
			get: function() {
				return o$1;
			},
			set: function(t$1) {
				o$1 = t$1;
			}
		});
		var s$2 = 0;
		Object.defineProperty(this, "lastBreak", {
			get: function() {
				return s$2;
			},
			set: function(t$1) {
				s$2 = t$1;
			}
		});
		var u$2 = [];
		Object.defineProperty(this, "pageBreaks", {
			get: function() {
				return u$2;
			},
			set: function(t$1) {
				u$2 = t$1;
			}
		}), Object.defineProperty(this, "ctx", {
			get: function() {
				return f$1;
			},
			set: function(t$1) {
				t$1 instanceof d$1 && (f$1 = t$1);
			}
		}), Object.defineProperty(this, "path", {
			get: function() {
				return f$1.path;
			},
			set: function(t$1) {
				f$1.path = t$1;
			}
		});
		var c$2 = [];
		Object.defineProperty(this, "ctxStack", {
			get: function() {
				return c$2;
			},
			set: function(t$1) {
				c$2 = t$1;
			}
		}), Object.defineProperty(this, "fillStyle", {
			get: function() {
				return this.ctx.fillStyle;
			},
			set: function(t$1) {
				var e$2 = g$1(t$1);
				this.ctx.fillStyle = e$2.style, this.ctx.isFillTransparent = 0 === e$2.a, this.ctx.fillOpacity = e$2.a, this.pdf.setFillColor(e$2.r, e$2.g, e$2.b, { a: e$2.a }), this.pdf.setTextColor(e$2.r, e$2.g, e$2.b, { a: e$2.a });
			}
		}), Object.defineProperty(this, "strokeStyle", {
			get: function() {
				return this.ctx.strokeStyle;
			},
			set: function(t$1) {
				var e$2 = g$1(t$1);
				this.ctx.strokeStyle = e$2.style, this.ctx.isStrokeTransparent = 0 === e$2.a, this.ctx.strokeOpacity = e$2.a, 0 === e$2.a ? this.pdf.setDrawColor(255, 255, 255) : (e$2.a, this.pdf.setDrawColor(e$2.r, e$2.g, e$2.b));
			}
		}), Object.defineProperty(this, "lineCap", {
			get: function() {
				return this.ctx.lineCap;
			},
			set: function(t$1) {
				-1 !== [
					"butt",
					"round",
					"square"
				].indexOf(t$1) && (this.ctx.lineCap = t$1, this.pdf.setLineCap(t$1));
			}
		}), Object.defineProperty(this, "lineWidth", {
			get: function() {
				return this.ctx.lineWidth;
			},
			set: function(t$1) {
				isNaN(t$1) || (this.ctx.lineWidth = t$1, this.pdf.setLineWidth(t$1));
			}
		}), Object.defineProperty(this, "lineJoin", {
			get: function() {
				return this.ctx.lineJoin;
			},
			set: function(t$1) {
				-1 !== [
					"bevel",
					"round",
					"miter"
				].indexOf(t$1) && (this.ctx.lineJoin = t$1, this.pdf.setLineJoin(t$1));
			}
		}), Object.defineProperty(this, "miterLimit", {
			get: function() {
				return this.ctx.miterLimit;
			},
			set: function(t$1) {
				isNaN(t$1) || (this.ctx.miterLimit = t$1, this.pdf.setMiterLimit(t$1));
			}
		}), Object.defineProperty(this, "textBaseline", {
			get: function() {
				return this.ctx.textBaseline;
			},
			set: function(t$1) {
				this.ctx.textBaseline = t$1;
			}
		}), Object.defineProperty(this, "textAlign", {
			get: function() {
				return this.ctx.textAlign;
			},
			set: function(t$1) {
				-1 !== [
					"right",
					"end",
					"center",
					"left",
					"start"
				].indexOf(t$1) && (this.ctx.textAlign = t$1);
			}
		});
		var l$2 = null;
		var h$1 = null;
		Object.defineProperty(this, "fontFaces", {
			get: function() {
				return h$1;
			},
			set: function(t$1) {
				l$2 = null, h$1 = t$1;
			}
		}), Object.defineProperty(this, "font", {
			get: function() {
				return this.ctx.font;
			},
			set: function(t$1) {
				var e$2;
				if (this.ctx.font = t$1, null !== (e$2 = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t$1))) {
					var n$2 = e$2[1];
					e$2[2];
					var r$2 = e$2[3], i$4 = e$2[4];
					e$2[5];
					var a$3 = e$2[6], o$2 = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i$4)[2];
					i$4 = "px" === o$2 ? Math.floor(parseFloat(i$4) * this.pdf.internal.scaleFactor) : "em" === o$2 ? Math.floor(parseFloat(i$4) * this.pdf.getFontSize()) : Math.floor(parseFloat(i$4) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(i$4);
					var s$3 = function(t$2) {
						var e$3, n$3, r$3 = [], i$5 = t$2.trim();
						if ("" === i$5) return Jt;
						if (i$5 in Mt) return [Mt[i$5]];
						for (; "" !== i$5;) {
							switch (n$3 = null, e$3 = (i$5 = Et(i$5)).charAt(0)) {
								case "\"":
								case "'":
									n$3 = Rt(i$5.substring(1), e$3);
									break;
								default: n$3 = Dt(i$5);
							}
							if (null === n$3) return Jt;
							if (r$3.push(n$3[0]), "" !== (i$5 = Et(n$3[1])) && "," !== i$5.charAt(0)) return Jt;
							i$5 = i$5.replace(/^,/, "");
						}
						return r$3;
					}(a$3);
					if (this.fontFaces) {
						var u$3 = function(t$2, e$3) {
							if (null === l$2) l$2 = function(t$3) {
								for (var e$4 = {}, n$3 = 0; n$3 < t$3.length; ++n$3) {
									var r$3 = Ct(t$3[n$3]), i$5 = r$3.family, a$4 = r$3.stretch, o$3 = r$3.style, s$4 = r$3.weight;
									e$4[i$5] = e$4[i$5] || {}, e$4[i$5][a$4] = e$4[i$5][a$4] || {}, e$4[i$5][a$4][o$3] = e$4[i$5][a$4][o$3] || {}, e$4[i$5][a$4][o$3][s$4] = r$3;
								}
								return e$4;
							}(function(t$3) {
								var e$4 = [];
								return Object.keys(t$3).forEach(function(n$3) {
									t$3[n$3].forEach(function(t$4) {
										var r$3 = null;
										switch (t$4) {
											case "bold":
												r$3 = {
													family: n$3,
													weight: "bold"
												};
												break;
											case "italic":
												r$3 = {
													family: n$3,
													style: "italic"
												};
												break;
											case "bolditalic":
												r$3 = {
													family: n$3,
													weight: "bold",
													style: "italic"
												};
												break;
											case "":
											case "normal": r$3 = { family: n$3 };
										}
										null !== r$3 && (r$3.ref = {
											name: n$3,
											style: t$4
										}, e$4.push(r$3));
									});
								}), e$4;
							}(t$2.getFontList()).concat(e$3));
							return l$2;
						}(this.pdf, this.fontFaces), c$3 = s$3.map(function(t$2) {
							return {
								family: t$2,
								stretch: "normal",
								weight: r$2,
								style: n$2
							};
						}), h$2 = function(t$2, e$3, n$3) {
							for (var r$3 = (n$3 = n$3 || {}).defaultFontFamily || "times", i$5 = Object.assign({}, Bt, n$3.genericFontFamilies || {}), a$4 = null, o$3 = null, s$4 = 0; s$4 < e$3.length; ++s$4) if (i$5[(a$4 = Ct(e$3[s$4])).family] && (a$4.family = i$5[a$4.family]), t$2.hasOwnProperty(a$4.family)) {
								o$3 = t$2[a$4.family];
								break;
							}
							if (!(o$3 = o$3 || t$2[r$3])) throw new Error("Could not find a font-family for the rule '" + qt(a$4) + "' and default family '" + r$3 + "'.");
							if (o$3 = function(t$3, e$4) {
								if (e$4[t$3]) return e$4[t$3];
								var n$4 = Ft[t$3], r$4 = n$4 <= Ft.normal ? -1 : 1, i$6 = Ot(e$4, kt, n$4, r$4);
								if (!i$6) throw new Error("Could not find a matching font-stretch value for " + t$3);
								return i$6;
							}(a$4.stretch, o$3), o$3 = function(t$3, e$4) {
								if (e$4[t$3]) return e$4[t$3];
								for (var n$4 = Pt[t$3], r$4 = 0; r$4 < n$4.length; ++r$4) if (e$4[n$4[r$4]]) return e$4[n$4[r$4]];
								throw new Error("Could not find a matching font-style for " + t$3);
							}(a$4.style, o$3), !(o$3 = function(t$3, e$4) {
								if (e$4[t$3]) return e$4[t$3];
								if (400 === t$3 && e$4[500]) return e$4[500];
								if (500 === t$3 && e$4[400]) return e$4[400];
								var n$4 = jt[t$3], r$4 = Ot(e$4, It, n$4, t$3 < 400 ? -1 : 1);
								if (!r$4) throw new Error("Could not find a matching font-weight for value " + t$3);
								return r$4;
							}(a$4.weight, o$3))) throw new Error("Failed to resolve a font for the rule '" + qt(a$4) + "'.");
							return o$3;
						}(u$3, c$3);
						this.pdf.setFont(h$2.ref.name, h$2.ref.style);
					} else {
						var f$2 = "";
						("bold" === r$2 || parseInt(r$2, 10) >= 700 || "bold" === n$2) && (f$2 = "bold"), "italic" === n$2 && (f$2 += "italic"), 0 === f$2.length && (f$2 = "normal");
						for (var d$2 = "", p$2 = {
							arial: "Helvetica",
							Arial: "Helvetica",
							verdana: "Helvetica",
							Verdana: "Helvetica",
							helvetica: "Helvetica",
							Helvetica: "Helvetica",
							"sans-serif": "Helvetica",
							fixed: "Courier",
							monospace: "Courier",
							terminal: "Courier",
							cursive: "Times",
							fantasy: "Times",
							serif: "Times"
						}, g$2 = 0; g$2 < s$3.length; g$2++) {
							if (void 0 !== this.pdf.internal.getFont(s$3[g$2], f$2, {
								noFallback: !0,
								disableWarning: !0
							})) {
								d$2 = s$3[g$2];
								break;
							}
							if ("bolditalic" === f$2 && void 0 !== this.pdf.internal.getFont(s$3[g$2], "bold", {
								noFallback: !0,
								disableWarning: !0
							})) d$2 = s$3[g$2], f$2 = "bold";
							else if (void 0 !== this.pdf.internal.getFont(s$3[g$2], "normal", {
								noFallback: !0,
								disableWarning: !0
							})) {
								d$2 = s$3[g$2], f$2 = "normal";
								break;
							}
						}
						if ("" === d$2) {
							for (var m$2 = 0; m$2 < s$3.length; m$2++) if (p$2[s$3[m$2]]) {
								d$2 = p$2[s$3[m$2]];
								break;
							}
						}
						d$2 = "" === d$2 ? "Times" : d$2, this.pdf.setFont(d$2, f$2);
					}
				}
			}
		}), Object.defineProperty(this, "globalCompositeOperation", {
			get: function() {
				return this.ctx.globalCompositeOperation;
			},
			set: function(t$1) {
				this.ctx.globalCompositeOperation = t$1;
			}
		}), Object.defineProperty(this, "globalAlpha", {
			get: function() {
				return this.ctx.globalAlpha;
			},
			set: function(t$1) {
				this.ctx.globalAlpha = t$1;
			}
		}), Object.defineProperty(this, "lineDashOffset", {
			get: function() {
				return this.ctx.lineDashOffset;
			},
			set: function(t$1) {
				this.ctx.lineDashOffset = t$1, T$1.call(this);
			}
		}), Object.defineProperty(this, "lineDash", {
			get: function() {
				return this.ctx.lineDash;
			},
			set: function(t$1) {
				this.ctx.lineDash = t$1, T$1.call(this);
			}
		}), Object.defineProperty(this, "ignoreClearRect", {
			get: function() {
				return this.ctx.ignoreClearRect;
			},
			set: function(t$1) {
				this.ctx.ignoreClearRect = Boolean(t$1);
			}
		});
	};
	p$1.prototype.setLineDash = function(t) {
		this.lineDash = t;
	}, p$1.prototype.getLineDash = function() {
		return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
	}, p$1.prototype.fill = function() {
		x$2.call(this, "fill", !1);
	}, p$1.prototype.stroke = function() {
		x$2.call(this, "stroke", !1);
	}, p$1.prototype.beginPath = function() {
		this.path = [{ type: "begin" }];
	}, p$1.prototype.moveTo = function(t, e$1) {
		if (isNaN(t) || isNaN(e$1)) throw o.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
		var n$1 = this.ctx.transform.applyToPoint(new u$1(t, e$1));
		this.path.push({
			type: "mt",
			x: n$1.x,
			y: n$1.y
		}), this.ctx.lastPoint = new u$1(t, e$1);
	}, p$1.prototype.closePath = function() {
		var e$1 = new u$1(0, 0), n$1 = 0;
		for (n$1 = this.path.length - 1; -1 !== n$1; n$1--) if ("begin" === this.path[n$1].type && "object" === _typeof(this.path[n$1 + 1]) && "number" == typeof this.path[n$1 + 1].x) {
			e$1 = new u$1(this.path[n$1 + 1].x, this.path[n$1 + 1].y);
			break;
		}
		this.path.push({ type: "close" }), this.ctx.lastPoint = new u$1(e$1.x, e$1.y);
	}, p$1.prototype.lineTo = function(t, e$1) {
		if (isNaN(t) || isNaN(e$1)) throw o.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
		var n$1 = this.ctx.transform.applyToPoint(new u$1(t, e$1));
		this.path.push({
			type: "lt",
			x: n$1.x,
			y: n$1.y
		}), this.ctx.lastPoint = new u$1(n$1.x, n$1.y);
	}, p$1.prototype.clip = function() {
		this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), x$2.call(this, null, !0);
	}, p$1.prototype.quadraticCurveTo = function(t, e$1, n$1, r$1) {
		if (isNaN(n$1) || isNaN(r$1) || isNaN(t) || isNaN(e$1)) throw o.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
		var i$3 = this.ctx.transform.applyToPoint(new u$1(n$1, r$1)), a$2 = this.ctx.transform.applyToPoint(new u$1(t, e$1));
		this.path.push({
			type: "qct",
			x1: a$2.x,
			y1: a$2.y,
			x: i$3.x,
			y: i$3.y
		}), this.ctx.lastPoint = new u$1(i$3.x, i$3.y);
	}, p$1.prototype.bezierCurveTo = function(t, e$1, n$1, r$1, i$3, a$2) {
		if (isNaN(i$3) || isNaN(a$2) || isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1)) throw o.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
		var s$2 = this.ctx.transform.applyToPoint(new u$1(i$3, a$2)), c$2 = this.ctx.transform.applyToPoint(new u$1(t, e$1)), l$2 = this.ctx.transform.applyToPoint(new u$1(n$1, r$1));
		this.path.push({
			type: "bct",
			x1: c$2.x,
			y1: c$2.y,
			x2: l$2.x,
			y2: l$2.y,
			x: s$2.x,
			y: s$2.y
		}), this.ctx.lastPoint = new u$1(s$2.x, s$2.y);
	}, p$1.prototype.arc = function(t, e$1, n$1, r$1, i$3, a$2) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1) || isNaN(i$3)) throw o.error("jsPDF.context2d.arc: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.arc");
		if (a$2 = Boolean(a$2), !this.ctx.transform.isIdentity) {
			var s$2 = this.ctx.transform.applyToPoint(new u$1(t, e$1));
			t = s$2.x, e$1 = s$2.y;
			var c$2 = this.ctx.transform.applyToPoint(new u$1(0, n$1)), l$2 = this.ctx.transform.applyToPoint(new u$1(0, 0));
			n$1 = Math.sqrt(Math.pow(c$2.x - l$2.x, 2) + Math.pow(c$2.y - l$2.y, 2));
		}
		Math.abs(i$3 - r$1) >= 2 * Math.PI && (r$1 = 0, i$3 = 2 * Math.PI), this.path.push({
			type: "arc",
			x: t,
			y: e$1,
			radius: n$1,
			startAngle: r$1,
			endAngle: i$3,
			counterclockwise: a$2
		});
	}, p$1.prototype.arcTo = function(t, e$1, n$1, r$1, i$3) {
		throw new Error("arcTo not implemented.");
	}, p$1.prototype.rect = function(t, e$1, n$1, r$1) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1)) throw o.error("jsPDF.context2d.rect: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.rect");
		this.moveTo(t, e$1), this.lineTo(t + n$1, e$1), this.lineTo(t + n$1, e$1 + r$1), this.lineTo(t, e$1 + r$1), this.lineTo(t, e$1), this.lineTo(t + n$1, e$1), this.lineTo(t, e$1);
	}, p$1.prototype.fillRect = function(t, e$1, n$1, r$1) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1)) throw o.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
		if (!m$1.call(this)) {
			var i$3 = {};
			"butt" !== this.lineCap && (i$3.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (i$3.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(t, e$1, n$1, r$1), this.fill(), i$3.hasOwnProperty("lineCap") && (this.lineCap = i$3.lineCap), i$3.hasOwnProperty("lineJoin") && (this.lineJoin = i$3.lineJoin);
		}
	}, p$1.prototype.strokeRect = function(t, e$1, n$1, r$1) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1)) throw o.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
		v$1.call(this) || (this.beginPath(), this.rect(t, e$1, n$1, r$1), this.stroke());
	}, p$1.prototype.clearRect = function(t, e$1, n$1, r$1) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1)) throw o.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
		this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(t, e$1, n$1, r$1));
	}, p$1.prototype.save = function(t) {
		t = "boolean" != typeof t || t;
		for (var e$1 = this.pdf.internal.getCurrentPageInfo().pageNumber, n$1 = 0; n$1 < this.pdf.internal.getNumberOfPages(); n$1++) this.pdf.setPage(n$1 + 1), this.pdf.internal.out("q");
		if (this.pdf.setPage(e$1), t) {
			this.ctx.fontSize = this.pdf.internal.getFontSize();
			var r$1 = new d$1(this.ctx);
			this.ctxStack.push(this.ctx), this.ctx = r$1;
		}
	}, p$1.prototype.restore = function(t) {
		t = "boolean" != typeof t || t;
		for (var e$1 = this.pdf.internal.getCurrentPageInfo().pageNumber, n$1 = 0; n$1 < this.pdf.internal.getNumberOfPages(); n$1++) this.pdf.setPage(n$1 + 1), this.pdf.internal.out("Q");
		this.pdf.setPage(e$1), t && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
	}, p$1.prototype.toDataURL = function() {
		throw new Error("toDataUrl not implemented.");
	};
	var g$1 = function(t) {
		var e$1, n$1, r$1, i$3;
		if (!0 === t.isCanvasGradient && (t = t.getColor()), !t) return {
			r: 0,
			g: 0,
			b: 0,
			a: 0,
			style: t
		};
		if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t)) e$1 = 0, n$1 = 0, r$1 = 0, i$3 = 0;
		else {
			var a$2 = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
			if (null !== a$2) e$1 = parseInt(a$2[1]), n$1 = parseInt(a$2[2]), r$1 = parseInt(a$2[3]), i$3 = 1;
			else if (null !== (a$2 = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t))) e$1 = parseInt(a$2[1]), n$1 = parseInt(a$2[2]), r$1 = parseInt(a$2[3]), i$3 = parseFloat(a$2[4]);
			else {
				if (i$3 = 1, "string" == typeof t && "#" !== t.charAt(0)) {
					var o$1 = new h(t);
					t = o$1.ok ? o$1.toHex() : "#000000";
				}
				4 === t.length ? (e$1 = t.substring(1, 2), e$1 += e$1, n$1 = t.substring(2, 3), n$1 += n$1, r$1 = t.substring(3, 4), r$1 += r$1) : (e$1 = t.substring(1, 3), n$1 = t.substring(3, 5), r$1 = t.substring(5, 7)), e$1 = parseInt(e$1, 16), n$1 = parseInt(n$1, 16), r$1 = parseInt(r$1, 16);
			}
		}
		return {
			r: e$1,
			g: n$1,
			b: r$1,
			a: i$3,
			style: t
		};
	}, m$1 = function() {
		return this.ctx.isFillTransparent || 0 == this.globalAlpha;
	}, v$1 = function() {
		return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha);
	};
	p$1.prototype.fillText = function(t, e$1, n$1, r$1) {
		if (isNaN(e$1) || isNaN(n$1) || "string" != typeof t) throw o.error("jsPDF.context2d.fillText: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.fillText");
		if (r$1 = isNaN(r$1) ? void 0 : r$1, !m$1.call(this)) {
			var i$3 = E$1(this.ctx.transform.rotation), a$2 = this.ctx.transform.scaleX;
			j$1.call(this, {
				text: t,
				x: e$1,
				y: n$1,
				scale: a$2,
				angle: i$3,
				align: this.textAlign,
				maxWidth: r$1
			});
		}
	}, p$1.prototype.strokeText = function(t, e$1, n$1, r$1) {
		if (isNaN(e$1) || isNaN(n$1) || "string" != typeof t) throw o.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
		if (!v$1.call(this)) {
			r$1 = isNaN(r$1) ? void 0 : r$1;
			var i$3 = E$1(this.ctx.transform.rotation), a$2 = this.ctx.transform.scaleX;
			j$1.call(this, {
				text: t,
				x: e$1,
				y: n$1,
				scale: a$2,
				renderingMode: "stroke",
				angle: i$3,
				align: this.textAlign,
				maxWidth: r$1
			});
		}
	}, p$1.prototype.measureText = function(t) {
		if ("string" != typeof t) throw o.error("jsPDF.context2d.measureText: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.measureText");
		var e$1 = this.pdf, n$1 = this.pdf.internal.scaleFactor, r$1 = e$1.internal.getFontSize(), i$3 = e$1.getStringUnitWidth(t) * r$1 / e$1.internal.scaleFactor;
		return new function(t$1) {
			var e$2 = (t$1 = t$1 || {}).width || 0;
			return Object.defineProperty(this, "width", { get: function() {
				return e$2;
			} }), this;
		}({ width: i$3 *= Math.round(96 * n$1 / 72 * 1e4) / 1e4 });
	}, p$1.prototype.scale = function(t, e$1) {
		if (isNaN(t) || isNaN(e$1)) throw o.error("jsPDF.context2d.scale: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.scale");
		var n$1 = new l$1(t, 0, 0, e$1, 0, 0);
		this.ctx.transform = this.ctx.transform.multiply(n$1);
	}, p$1.prototype.rotate = function(t) {
		if (isNaN(t)) throw o.error("jsPDF.context2d.rotate: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.rotate");
		var e$1 = new l$1(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0);
		this.ctx.transform = this.ctx.transform.multiply(e$1);
	}, p$1.prototype.translate = function(t, e$1) {
		if (isNaN(t) || isNaN(e$1)) throw o.error("jsPDF.context2d.translate: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.translate");
		var n$1 = new l$1(1, 0, 0, 1, t, e$1);
		this.ctx.transform = this.ctx.transform.multiply(n$1);
	}, p$1.prototype.transform = function(t, e$1, n$1, r$1, i$3, a$2) {
		if (isNaN(t) || isNaN(e$1) || isNaN(n$1) || isNaN(r$1) || isNaN(i$3) || isNaN(a$2)) throw o.error("jsPDF.context2d.transform: Invalid arguments", arguments), /* @__PURE__ */ new Error("Invalid arguments passed to jsPDF.context2d.transform");
		var s$2 = new l$1(t, e$1, n$1, r$1, i$3, a$2);
		this.ctx.transform = this.ctx.transform.multiply(s$2);
	}, p$1.prototype.setTransform = function(t, e$1, n$1, r$1, i$3, a$2) {
		t = isNaN(t) ? 1 : t, e$1 = isNaN(e$1) ? 0 : e$1, n$1 = isNaN(n$1) ? 0 : n$1, r$1 = isNaN(r$1) ? 1 : r$1, i$3 = isNaN(i$3) ? 0 : i$3, a$2 = isNaN(a$2) ? 0 : a$2, this.ctx.transform = new l$1(t, e$1, n$1, r$1, i$3, a$2);
	};
	var b$1 = function() {
		return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
	};
	p$1.prototype.drawImage = function(t, e$1, n$1, r$1, i$3, a$2, o$1, s$2, u$2) {
		var h$1 = this.pdf.getImageProperties(t), f$2 = 1, d$2 = 1, p$2 = 1, g$2 = 1;
		void 0 !== r$1 && void 0 !== s$2 && (p$2 = s$2 / r$1, g$2 = u$2 / i$3, f$2 = h$1.width / r$1 * s$2 / r$1, d$2 = h$1.height / i$3 * u$2 / i$3), void 0 === a$2 && (a$2 = e$1, o$1 = n$1, e$1 = 0, n$1 = 0), void 0 !== r$1 && void 0 === s$2 && (s$2 = r$1, u$2 = i$3), void 0 === r$1 && void 0 === s$2 && (s$2 = h$1.width, u$2 = h$1.height);
		for (var m$2, v$2 = this.ctx.transform.decompose(), w$2 = E$1(v$2.rotate.shx), x$3 = new l$1(), S$2 = (x$3 = (x$3 = (x$3 = x$3.multiply(v$2.translate)).multiply(v$2.skew)).multiply(v$2.scale)).applyToRectangle(new c$1(a$2 - e$1 * p$2, o$1 - n$1 * g$2, r$1 * f$2, i$3 * d$2)), _$2 = y$1.call(this, S$2), P$2 = [], k$2 = 0; k$2 < _$2.length; k$2 += 1) -1 === P$2.indexOf(_$2[k$2]) && P$2.push(_$2[k$2]);
		if (L$1(P$2), this.autoPaging) for (var F$2 = P$2[0], I$2 = P$2[P$2.length - 1], j$2 = F$2; j$2 < I$2 + 1; j$2++) {
			this.pdf.setPage(j$2);
			var C$2 = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], O$2 = 1 === j$2 ? this.posY + this.margin[0] : this.margin[0], B$2 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], M$2 = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], q$2 = 1 === j$2 ? 0 : B$2 + (j$2 - 2) * M$2;
			if (0 !== this.ctx.clip_path.length) {
				var R$2 = this.path;
				m$2 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = N$1(m$2, this.posX + this.margin[3], -q$2 + O$2 + this.ctx.prevPageLastElemOffset), A$1.call(this, "fill", !0), this.path = R$2;
			}
			var D$2 = JSON.parse(JSON.stringify(S$2));
			D$2 = N$1([D$2], this.posX + this.margin[3], -q$2 + O$2 + this.ctx.prevPageLastElemOffset)[0];
			var T$2 = (j$2 > F$2 || j$2 < I$2) && b$1.call(this);
			T$2 && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], C$2, M$2, null).clip().discardPath()), this.pdf.addImage(t, "JPEG", D$2.x, D$2.y, D$2.w, D$2.h, null, null, w$2), T$2 && this.pdf.restoreGraphicsState();
		}
		else this.pdf.addImage(t, "JPEG", S$2.x, S$2.y, S$2.w, S$2.h, null, null, w$2);
	};
	var y$1 = function(t, e$1, n$1) {
		var r$1 = [];
		e$1 = e$1 || this.pdf.internal.pageSize.width, n$1 = n$1 || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
		var i$3 = this.posY + this.ctx.prevPageLastElemOffset;
		switch (t.type) {
			default:
			case "mt":
			case "lt":
				r$1.push(Math.floor((t.y + i$3) / n$1) + 1);
				break;
			case "arc":
				r$1.push(Math.floor((t.y + i$3 - t.radius) / n$1) + 1), r$1.push(Math.floor((t.y + i$3 + t.radius) / n$1) + 1);
				break;
			case "qct":
				var a$2 = R$1(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);
				r$1.push(Math.floor((a$2.y + i$3) / n$1) + 1), r$1.push(Math.floor((a$2.y + a$2.h + i$3) / n$1) + 1);
				break;
			case "bct":
				var o$1 = D$1(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);
				r$1.push(Math.floor((o$1.y + i$3) / n$1) + 1), r$1.push(Math.floor((o$1.y + o$1.h + i$3) / n$1) + 1);
				break;
			case "rect": r$1.push(Math.floor((t.y + i$3) / n$1) + 1), r$1.push(Math.floor((t.y + t.h + i$3) / n$1) + 1);
		}
		for (var s$2 = 0; s$2 < r$1.length; s$2 += 1) for (; this.pdf.internal.getNumberOfPages() < r$1[s$2];) w$1.call(this);
		return r$1;
	}, w$1 = function() {
		var t = this.fillStyle, e$1 = this.strokeStyle, n$1 = this.font, r$1 = this.lineCap, i$3 = this.lineWidth, a$2 = this.lineJoin;
		this.pdf.addPage(), this.fillStyle = t, this.strokeStyle = e$1, this.font = n$1, this.lineCap = r$1, this.lineWidth = i$3, this.lineJoin = a$2;
	}, N$1 = function(t, e$1, n$1) {
		for (var r$1 = 0; r$1 < t.length; r$1++) switch (t[r$1].type) {
			case "bct": t[r$1].x2 += e$1, t[r$1].y2 += n$1;
			case "qct": t[r$1].x1 += e$1, t[r$1].y1 += n$1;
			default: t[r$1].x += e$1, t[r$1].y += n$1;
		}
		return t;
	}, L$1 = function(t) {
		return t.sort(function(t$1, e$1) {
			return t$1 - e$1;
		});
	}, x$2 = function(t, e$1) {
		for (var n$1, r$1, i$3 = this.fillStyle, a$2 = this.strokeStyle, o$1 = this.lineCap, s$2 = this.lineWidth, u$2 = Math.abs(s$2 * this.ctx.transform.scaleX), c$2 = this.lineJoin, l$2 = JSON.parse(JSON.stringify(this.path)), h$1 = JSON.parse(JSON.stringify(this.path)), f$2 = [], d$2 = 0; d$2 < h$1.length; d$2++) if (void 0 !== h$1[d$2].x) for (var p$2 = y$1.call(this, h$1[d$2]), g$2 = 0; g$2 < p$2.length; g$2 += 1) -1 === f$2.indexOf(p$2[g$2]) && f$2.push(p$2[g$2]);
		for (var m$2 = 0; m$2 < f$2.length; m$2++) for (; this.pdf.internal.getNumberOfPages() < f$2[m$2];) w$1.call(this);
		if (L$1(f$2), this.autoPaging) for (var v$2 = f$2[0], x$3 = f$2[f$2.length - 1], S$2 = v$2; S$2 < x$3 + 1; S$2++) {
			this.pdf.setPage(S$2), this.fillStyle = i$3, this.strokeStyle = a$2, this.lineCap = o$1, this.lineWidth = u$2, this.lineJoin = c$2;
			var _$2 = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], P$2 = 1 === S$2 ? this.posY + this.margin[0] : this.margin[0], k$2 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], F$2 = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], I$2 = 1 === S$2 ? 0 : k$2 + (S$2 - 2) * F$2;
			if (0 !== this.ctx.clip_path.length) {
				var j$2 = this.path;
				n$1 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = N$1(n$1, this.posX + this.margin[3], -I$2 + P$2 + this.ctx.prevPageLastElemOffset), A$1.call(this, t, !0), this.path = j$2;
			}
			if (r$1 = JSON.parse(JSON.stringify(l$2)), this.path = N$1(r$1, this.posX + this.margin[3], -I$2 + P$2 + this.ctx.prevPageLastElemOffset), !1 === e$1 || 0 === S$2) {
				var C$2 = (S$2 > v$2 || S$2 < x$3) && b$1.call(this);
				C$2 && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], _$2, F$2, null).clip().discardPath()), A$1.call(this, t, e$1), C$2 && this.pdf.restoreGraphicsState();
			}
			this.lineWidth = s$2;
		}
		else this.lineWidth = u$2, A$1.call(this, t, e$1), this.lineWidth = s$2;
		this.path = l$2;
	}, A$1 = function(t, e$1) {
		if (("stroke" !== t || e$1 || !v$1.call(this)) && ("stroke" === t || e$1 || !m$1.call(this))) {
			for (var n$1, r$1, i$3 = [], a$2 = this.path, o$1 = 0; o$1 < a$2.length; o$1++) {
				var s$2 = a$2[o$1];
				switch (s$2.type) {
					case "begin":
						i$3.push({ begin: !0 });
						break;
					case "close":
						i$3.push({ close: !0 });
						break;
					case "mt":
						i$3.push({
							start: s$2,
							deltas: [],
							abs: []
						});
						break;
					case "lt":
						var u$2 = i$3.length;
						if (a$2[o$1 - 1] && !isNaN(a$2[o$1 - 1].x) && (n$1 = [s$2.x - a$2[o$1 - 1].x, s$2.y - a$2[o$1 - 1].y], u$2 > 0)) {
							for (; u$2 >= 0; u$2--) if (!0 !== i$3[u$2 - 1].close && !0 !== i$3[u$2 - 1].begin) {
								i$3[u$2 - 1].deltas.push(n$1), i$3[u$2 - 1].abs.push(s$2);
								break;
							}
						}
						break;
					case "bct":
						n$1 = [
							s$2.x1 - a$2[o$1 - 1].x,
							s$2.y1 - a$2[o$1 - 1].y,
							s$2.x2 - a$2[o$1 - 1].x,
							s$2.y2 - a$2[o$1 - 1].y,
							s$2.x - a$2[o$1 - 1].x,
							s$2.y - a$2[o$1 - 1].y
						], i$3[i$3.length - 1].deltas.push(n$1);
						break;
					case "qct":
						var c$2 = a$2[o$1 - 1].x + 2 / 3 * (s$2.x1 - a$2[o$1 - 1].x), l$2 = a$2[o$1 - 1].y + 2 / 3 * (s$2.y1 - a$2[o$1 - 1].y), h$1 = s$2.x + 2 / 3 * (s$2.x1 - s$2.x), f$2 = s$2.y + 2 / 3 * (s$2.y1 - s$2.y), d$2 = s$2.x, p$2 = s$2.y;
						n$1 = [
							c$2 - a$2[o$1 - 1].x,
							l$2 - a$2[o$1 - 1].y,
							h$1 - a$2[o$1 - 1].x,
							f$2 - a$2[o$1 - 1].y,
							d$2 - a$2[o$1 - 1].x,
							p$2 - a$2[o$1 - 1].y
						], i$3[i$3.length - 1].deltas.push(n$1);
						break;
					case "arc": i$3.push({
						deltas: [],
						abs: [],
						arc: !0
					}), Array.isArray(i$3[i$3.length - 1].abs) && i$3[i$3.length - 1].abs.push(s$2);
				}
			}
			r$1 = e$1 ? null : "stroke" === t ? "stroke" : "fill";
			for (var g$2 = !1, b$2 = 0; b$2 < i$3.length; b$2++) if (i$3[b$2].arc) for (var y$2 = i$3[b$2].abs, w$2 = 0; w$2 < y$2.length; w$2++) {
				var N$2 = y$2[w$2];
				"arc" === N$2.type ? P$1.call(this, N$2.x, N$2.y, N$2.radius, N$2.startAngle, N$2.endAngle, N$2.counterclockwise, void 0, e$1, !g$2) : C$1.call(this, N$2.x, N$2.y), g$2 = !0;
			}
			else if (!0 === i$3[b$2].close) this.pdf.internal.out("h"), g$2 = !1;
			else if (!0 !== i$3[b$2].begin) {
				var L$2 = i$3[b$2].start.x, x$3 = i$3[b$2].start.y;
				O$1.call(this, i$3[b$2].deltas, L$2, x$3), g$2 = !0;
			}
			r$1 && k$1.call(this, r$1), e$1 && F$1.call(this);
		}
	}, S$1 = function(t) {
		var e$1 = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, n$1 = e$1 * (this.pdf.internal.getLineHeightFactor() - 1);
		switch (this.ctx.textBaseline) {
			case "bottom": return t - n$1;
			case "top": return t + e$1 - n$1;
			case "hanging": return t + e$1 - 2 * n$1;
			case "middle": return t + e$1 / 2 - n$1;
			default: return t;
		}
	}, _$1 = function(t) {
		return t + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
	};
	p$1.prototype.createLinearGradient = function() {
		var t = function() {};
		return t.colorStops = [], t.addColorStop = function(t$1, e$1) {
			this.colorStops.push([t$1, e$1]);
		}, t.getColor = function() {
			return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1];
		}, t.isCanvasGradient = !0, t;
	}, p$1.prototype.createPattern = function() {
		return this.createLinearGradient();
	}, p$1.prototype.createRadialGradient = function() {
		return this.createLinearGradient();
	};
	var P$1 = function(t, e$1, n$1, r$1, i$3, a$2, o$1, s$2, u$2) {
		for (var c$2 = M$1.call(this, n$1, r$1, i$3, a$2), l$2 = 0; l$2 < c$2.length; l$2++) {
			var h$1 = c$2[l$2];
			0 === l$2 && (u$2 ? I$1.call(this, h$1.x1 + t, h$1.y1 + e$1) : C$1.call(this, h$1.x1 + t, h$1.y1 + e$1)), B$1.call(this, t, e$1, h$1.x2, h$1.y2, h$1.x3, h$1.y3, h$1.x4, h$1.y4);
		}
		s$2 ? F$1.call(this) : k$1.call(this, o$1);
	}, k$1 = function(t) {
		switch (t) {
			case "stroke":
				this.pdf.internal.out("S");
				break;
			case "fill": this.pdf.internal.out("f");
		}
	}, F$1 = function() {
		this.pdf.clip(), this.pdf.discardPath();
	}, I$1 = function(t, e$1) {
		this.pdf.internal.out(r(t) + " " + i$2(e$1) + " m");
	}, j$1 = function(t) {
		var e$1;
		switch (t.align) {
			case "right":
			case "end":
				e$1 = "right";
				break;
			case "center":
				e$1 = "center";
				break;
			default: e$1 = "left";
		}
		var n$1 = this.pdf.getTextDimensions(t.text), r$1 = S$1.call(this, t.y), i$3 = _$1.call(this, r$1) - n$1.h, a$2 = this.ctx.transform.applyToPoint(new u$1(t.x, r$1)), o$1 = this.ctx.transform.decompose(), s$2 = new l$1();
		s$2 = (s$2 = (s$2 = s$2.multiply(o$1.translate)).multiply(o$1.skew)).multiply(o$1.scale);
		for (var h$1, f$2, d$2, p$2 = this.ctx.transform.applyToRectangle(new c$1(t.x, r$1, n$1.w, n$1.h)), g$2 = s$2.applyToRectangle(new c$1(t.x, i$3, n$1.w, n$1.h)), m$2 = y$1.call(this, g$2), v$2 = [], w$2 = 0; w$2 < m$2.length; w$2 += 1) -1 === v$2.indexOf(m$2[w$2]) && v$2.push(m$2[w$2]);
		if (L$1(v$2), this.autoPaging) for (var x$3 = v$2[0], P$2 = v$2[v$2.length - 1], k$2 = x$3; k$2 < P$2 + 1; k$2++) {
			this.pdf.setPage(k$2);
			var F$2 = 1 === k$2 ? this.posY + this.margin[0] : this.margin[0], I$2 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], j$2 = this.pdf.internal.pageSize.height - this.margin[2], C$2 = j$2 - this.margin[0], O$2 = this.pdf.internal.pageSize.width - this.margin[1], B$2 = O$2 - this.margin[3], M$2 = 1 === k$2 ? 0 : I$2 + (k$2 - 2) * C$2;
			if (0 !== this.ctx.clip_path.length) {
				var q$2 = this.path;
				h$1 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = N$1(h$1, this.posX + this.margin[3], -1 * M$2 + F$2), A$1.call(this, "fill", !0), this.path = q$2;
			}
			var E$2 = N$1([JSON.parse(JSON.stringify(g$2))], this.posX + this.margin[3], -M$2 + F$2 + this.ctx.prevPageLastElemOffset)[0];
			t.scale >= .01 && (f$2 = this.pdf.internal.getFontSize(), this.pdf.setFontSize(f$2 * t.scale), d$2 = this.lineWidth, this.lineWidth = d$2 * t.scale);
			var R$2 = "text" !== this.autoPaging;
			if (R$2 || E$2.y + E$2.h <= j$2) {
				if (R$2 || E$2.y >= F$2 && E$2.x <= O$2) {
					var D$2 = R$2 ? t.text : this.pdf.splitTextToSize(t.text, t.maxWidth || O$2 - E$2.x)[0], T$2 = N$1([JSON.parse(JSON.stringify(p$2))], this.posX + this.margin[3], -M$2 + F$2 + this.ctx.prevPageLastElemOffset)[0], z$1 = R$2 && (k$2 > x$3 || k$2 < P$2) && b$1.call(this);
					z$1 && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], B$2, C$2, null).clip().discardPath()), this.pdf.text(D$2, T$2.x, T$2.y, {
						angle: t.angle,
						align: e$1,
						renderingMode: t.renderingMode
					}), z$1 && this.pdf.restoreGraphicsState();
				}
			} else E$2.y < j$2 && (this.ctx.prevPageLastElemOffset += j$2 - E$2.y);
			t.scale >= .01 && (this.pdf.setFontSize(f$2), this.lineWidth = d$2);
		}
		else t.scale >= .01 && (f$2 = this.pdf.internal.getFontSize(), this.pdf.setFontSize(f$2 * t.scale), d$2 = this.lineWidth, this.lineWidth = d$2 * t.scale), this.pdf.text(t.text, a$2.x + this.posX, a$2.y + this.posY, {
			angle: t.angle,
			align: e$1,
			renderingMode: t.renderingMode,
			maxWidth: t.maxWidth
		}), t.scale >= .01 && (this.pdf.setFontSize(f$2), this.lineWidth = d$2);
	}, C$1 = function(t, e$1, n$1, a$2) {
		n$1 = n$1 || 0, a$2 = a$2 || 0, this.pdf.internal.out(r(t + n$1) + " " + i$2(e$1 + a$2) + " l");
	}, O$1 = function(t, e$1, n$1) {
		return this.pdf.lines(t, e$1, n$1, null, null);
	}, B$1 = function(t, e$1, r$1, i$3, o$1, u$2, c$2, l$2) {
		this.pdf.internal.out([
			n(a$1(r$1 + t)),
			n(s$1(i$3 + e$1)),
			n(a$1(o$1 + t)),
			n(s$1(u$2 + e$1)),
			n(a$1(c$2 + t)),
			n(s$1(l$2 + e$1)),
			"c"
		].join(" "));
	}, M$1 = function(t, e$1, n$1, r$1) {
		for (var i$3 = 2 * Math.PI, a$2 = Math.PI / 2; e$1 > n$1;) e$1 -= i$3;
		var o$1 = Math.abs(n$1 - e$1);
		o$1 < i$3 && r$1 && (o$1 = i$3 - o$1);
		for (var s$2 = [], u$2 = r$1 ? -1 : 1, c$2 = e$1; o$1 > 1e-5;) {
			var l$2 = c$2 + u$2 * Math.min(o$1, a$2);
			s$2.push(q$1.call(this, t, c$2, l$2)), o$1 -= Math.abs(l$2 - c$2), c$2 = l$2;
		}
		return s$2;
	}, q$1 = function(t, e$1, n$1) {
		var r$1 = (n$1 - e$1) / 2, i$3 = t * Math.cos(r$1), a$2 = t * Math.sin(r$1), o$1 = i$3, s$2 = -a$2, u$2 = o$1 * o$1 + s$2 * s$2, c$2 = u$2 + o$1 * i$3 + s$2 * a$2, l$2 = 4 / 3 * (Math.sqrt(2 * u$2 * c$2) - c$2) / (o$1 * a$2 - s$2 * i$3), h$1 = o$1 - l$2 * s$2, f$2 = s$2 + l$2 * o$1, d$2 = h$1, p$2 = -f$2, g$2 = r$1 + e$1, m$2 = Math.cos(g$2), v$2 = Math.sin(g$2);
		return {
			x1: t * Math.cos(e$1),
			y1: t * Math.sin(e$1),
			x2: h$1 * m$2 - f$2 * v$2,
			y2: h$1 * v$2 + f$2 * m$2,
			x3: d$2 * m$2 - p$2 * v$2,
			y3: d$2 * v$2 + p$2 * m$2,
			x4: t * Math.cos(n$1),
			y4: t * Math.sin(n$1)
		};
	}, E$1 = function(t) {
		return 180 * t / Math.PI;
	}, R$1 = function(t, e$1, n$1, r$1, i$3, a$2) {
		var o$1 = t + .5 * (n$1 - t), s$2 = e$1 + .5 * (r$1 - e$1), u$2 = i$3 + .5 * (n$1 - i$3), l$2 = a$2 + .5 * (r$1 - a$2), h$1 = Math.min(t, i$3, o$1, u$2), f$2 = Math.max(t, i$3, o$1, u$2), d$2 = Math.min(e$1, a$2, s$2, l$2), p$2 = Math.max(e$1, a$2, s$2, l$2);
		return new c$1(h$1, d$2, f$2 - h$1, p$2 - d$2);
	}, D$1 = function(t, e$1, n$1, r$1, i$3, a$2, o$1, s$2) {
		var u$2, l$2, h$1, f$2, d$2, p$2, g$2, m$2, v$2, b$2, y$2, w$2, N$2, L$2, x$3 = n$1 - t, A$2 = r$1 - e$1, S$2 = i$3 - n$1, _$2 = a$2 - r$1, P$2 = o$1 - i$3, k$2 = s$2 - a$2;
		for (l$2 = 0; l$2 < 41; l$2++) v$2 = (g$2 = (h$1 = t + (u$2 = l$2 / 40) * x$3) + u$2 * ((d$2 = n$1 + u$2 * S$2) - h$1)) + u$2 * (d$2 + u$2 * (i$3 + u$2 * P$2 - d$2) - g$2), b$2 = (m$2 = (f$2 = e$1 + u$2 * A$2) + u$2 * ((p$2 = r$1 + u$2 * _$2) - f$2)) + u$2 * (p$2 + u$2 * (a$2 + u$2 * k$2 - p$2) - m$2), 0 == l$2 ? (y$2 = v$2, w$2 = b$2, N$2 = v$2, L$2 = b$2) : (y$2 = Math.min(y$2, v$2), w$2 = Math.min(w$2, b$2), N$2 = Math.max(N$2, v$2), L$2 = Math.max(L$2, b$2));
		return new c$1(Math.round(y$2), Math.round(w$2), Math.round(N$2 - y$2), Math.round(L$2 - w$2));
	}, T$1 = function() {
		if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
			var t, e$1, n$1 = (t = this.ctx.lineDash, e$1 = this.ctx.lineDashOffset, JSON.stringify({
				lineDash: t,
				lineDashOffset: e$1
			}));
			this.prevLineDash !== n$1 && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = n$1);
		}
	};
})(E.API), function(t) {
	var n = function(t$1) {
		var e, n$1, r$1, i$3, a$2, o$2, s$1, u$1, c$1, l$1;
		for (/[^\x00-\xFF]/.test(t$1), n$1 = [], r$1 = 0, i$3 = (t$1 += e = "\0\0\0\0".slice(t$1.length % 4 || 4)).length; i$3 > r$1; r$1 += 4) 0 !== (a$2 = (t$1.charCodeAt(r$1) << 24) + (t$1.charCodeAt(r$1 + 1) << 16) + (t$1.charCodeAt(r$1 + 2) << 8) + t$1.charCodeAt(r$1 + 3)) ? (o$2 = (a$2 = ((a$2 = ((a$2 = ((a$2 = (a$2 - (l$1 = a$2 % 85)) / 85) - (c$1 = a$2 % 85)) / 85) - (u$1 = a$2 % 85)) / 85) - (s$1 = a$2 % 85)) / 85) % 85, n$1.push(o$2 + 33, s$1 + 33, u$1 + 33, c$1 + 33, l$1 + 33)) : n$1.push(122);
		return function(t$2, e$1) {
			for (var n$2 = e$1; n$2 > 0; n$2--) t$2.pop();
		}(n$1, e.length), String.fromCharCode.apply(String, n$1) + "~>";
	}, r = function(t$1) {
		var e, n$1, r$1, i$3, a$2, o$2 = String, s$1 = "length", u$1 = 255, c$1 = "charCodeAt", l$1 = "slice", h$1 = "replace";
		for (t$1[l$1](-2), t$1 = t$1[l$1](0, -2)[h$1](/\s/g, "")[h$1]("z", "!!!!!"), r$1 = [], i$3 = 0, a$2 = (t$1 += e = "uuuuu"[l$1](t$1[s$1] % 5 || 5))[s$1]; a$2 > i$3; i$3 += 5) n$1 = 52200625 * (t$1[c$1](i$3) - 33) + 614125 * (t$1[c$1](i$3 + 1) - 33) + 7225 * (t$1[c$1](i$3 + 2) - 33) + 85 * (t$1[c$1](i$3 + 3) - 33) + (t$1[c$1](i$3 + 4) - 33), r$1.push(u$1 & n$1 >> 24, u$1 & n$1 >> 16, u$1 & n$1 >> 8, u$1 & n$1);
		return function(t$2, e$1) {
			for (var n$2 = e$1; n$2 > 0; n$2--) t$2.pop();
		}(r$1, e[s$1]), o$2.fromCharCode.apply(o$2, r$1);
	}, i$2 = function(t$1) {
		return t$1.split("").map(function(t$2) {
			return ("0" + t$2.charCodeAt().toString(16)).slice(-2);
		}).join("") + ">";
	}, a$1 = function(t$1) {
		var e = /* @__PURE__ */ new RegExp(/^([0-9A-Fa-f]{2})+$/);
		if (-1 !== (t$1 = t$1.replace(/\s/g, "")).indexOf(">") && (t$1 = t$1.substr(0, t$1.indexOf(">"))), t$1.length % 2 && (t$1 += "0"), !1 === e.test(t$1)) return "";
		for (var n$1 = "", r$1 = 0; r$1 < t$1.length; r$1 += 2) n$1 += String.fromCharCode("0x" + (t$1[r$1] + t$1[r$1 + 1]));
		return n$1;
	}, o$1 = function(t$1) {
		for (var n$1 = new Uint8Array(t$1.length), r$1 = t$1.length; r$1--;) n$1[r$1] = t$1.charCodeAt(r$1);
		return (n$1 = zlibSync(n$1)).reduce(function(t$2, e) {
			return t$2 + String.fromCharCode(e);
		}, "");
	};
	t.processDataByFilters = function(t$1, e) {
		var s$1 = 0, u$1 = t$1 || "", c$1 = [];
		for ("string" == typeof (e = e || []) && (e = [e]), s$1 = 0; s$1 < e.length; s$1 += 1) switch (e[s$1]) {
			case "ASCII85Decode":
			case "/ASCII85Decode":
				u$1 = r(u$1), c$1.push("/ASCII85Encode");
				break;
			case "ASCII85Encode":
			case "/ASCII85Encode":
				u$1 = n(u$1), c$1.push("/ASCII85Decode");
				break;
			case "ASCIIHexDecode":
			case "/ASCIIHexDecode":
				u$1 = a$1(u$1), c$1.push("/ASCIIHexEncode");
				break;
			case "ASCIIHexEncode":
			case "/ASCIIHexEncode":
				u$1 = i$2(u$1), c$1.push("/ASCIIHexDecode");
				break;
			case "FlateEncode":
			case "/FlateEncode":
				u$1 = o$1(u$1), c$1.push("/FlateDecode");
				break;
			default: throw new Error("The filter: \"" + e[s$1] + "\" is not implemented");
		}
		return {
			data: u$1,
			reverseChain: c$1.reverse().join(" ")
		};
	};
}(E.API), function(t) {
	t.loadFile = function(t$1, e, n) {
		return function(t$2, e$1, n$1) {
			e$1 = !1 !== e$1, n$1 = "function" == typeof n$1 ? n$1 : function() {};
			var r = void 0;
			try {
				r = function(t$3, e$2, n$2) {
					var r$1 = new XMLHttpRequest(), i$2 = 0, a$1 = function(t$4) {
						var e$3 = t$4.length, n$3 = [], r$2 = String.fromCharCode;
						for (i$2 = 0; i$2 < e$3; i$2 += 1) n$3.push(r$2(255 & t$4.charCodeAt(i$2)));
						return n$3.join("");
					};
					if (r$1.open("GET", t$3, !e$2), r$1.overrideMimeType("text/plain; charset=x-user-defined"), !1 === e$2 && (r$1.onload = function() {
						200 === r$1.status ? n$2(a$1(this.responseText)) : n$2(void 0);
					}), r$1.send(null), e$2 && 200 === r$1.status) return a$1(r$1.responseText);
				}(t$2, e$1, n$1);
			} catch (i$2) {}
			return r;
		}(t$1, e, n);
	}, t.loadImageFile = t.loadFile;
}(E.API), function(e) {
	function n() {
		return (i.html2canvas ? Promise.resolve(i.html2canvas) : import("./html2canvas.js").then(__toDynamicImportESM())).catch(function(t) {
			return Promise.reject(/* @__PURE__ */ new Error("Could not load html2canvas: " + t));
		}).then(function(t) {
			return t.default ? t.default : t;
		});
	}
	function r() {
		return (i.DOMPurify ? Promise.resolve(i.DOMPurify) : import("./purify.es-M_ipShze.js")).catch(function(t) {
			return Promise.reject(/* @__PURE__ */ new Error("Could not load dompurify: " + t));
		}).then(function(t) {
			return t.default ? t.default : t;
		});
	}
	var a$1 = function(e$1) {
		var n$1 = _typeof(e$1);
		return "undefined" === n$1 ? "undefined" : "string" === n$1 || e$1 instanceof String ? "string" : "number" === n$1 || e$1 instanceof Number ? "number" : "function" === n$1 || e$1 instanceof Function ? "function" : e$1 && e$1.constructor === Array ? "array" : e$1 && 1 === e$1.nodeType ? "element" : "object" === n$1 ? "object" : "unknown";
	}, o$1 = function(t, e$1) {
		var n$1 = document.createElement(t);
		for (var r$1 in e$1.className && (n$1.className = e$1.className), e$1.innerHTML && e$1.dompurify && (n$1.innerHTML = e$1.dompurify.sanitize(e$1.innerHTML)), e$1.style) n$1.style[r$1] = e$1.style[r$1];
		return n$1;
	}, s$1 = function t(e$1, n$1) {
		for (var r$1 = 3 === e$1.nodeType ? document.createTextNode(e$1.nodeValue) : e$1.cloneNode(!1), i$2 = e$1.firstChild; i$2; i$2 = i$2.nextSibling) !0 !== n$1 && 1 === i$2.nodeType && "SCRIPT" === i$2.nodeName || r$1.appendChild(t(i$2, n$1));
		return 1 === e$1.nodeType && ("CANVAS" === e$1.nodeName ? (r$1.width = e$1.width, r$1.height = e$1.height, r$1.getContext("2d").drawImage(e$1, 0, 0)) : "TEXTAREA" !== e$1.nodeName && "SELECT" !== e$1.nodeName || (r$1.value = e$1.value), r$1.addEventListener("load", function() {
			r$1.scrollTop = e$1.scrollTop, r$1.scrollLeft = e$1.scrollLeft;
		}, !0)), r$1;
	}, u$1 = function t(e$1) {
		var n$1 = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template))), r$1 = t.convert(Promise.resolve(), n$1);
		return (r$1 = r$1.setProgress(1, t, 1, [t])).set(e$1);
	};
	(u$1.prototype = Object.create(Promise.prototype)).constructor = u$1, u$1.convert = function(t, e$1) {
		return t.__proto__ = e$1 || u$1.prototype, t;
	}, u$1.template = {
		prop: {
			src: null,
			container: null,
			overlay: null,
			canvas: null,
			img: null,
			pdf: null,
			pageSize: null,
			callback: function() {}
		},
		progress: {
			val: 0,
			state: null,
			n: 0,
			stack: []
		},
		opt: {
			filename: "file.pdf",
			margin: [
				0,
				0,
				0,
				0
			],
			enableLinks: !0,
			x: 0,
			y: 0,
			html2canvas: {},
			jsPDF: {},
			backgroundColor: "transparent"
		}
	}, u$1.prototype.from = function(t, e$1) {
		return this.then(function() {
			switch (e$1 = e$1 || function(t$1) {
				switch (a$1(t$1)) {
					case "string": return "string";
					case "element": return "canvas" === t$1.nodeName.toLowerCase() ? "canvas" : "element";
					default: return "unknown";
				}
			}(t), e$1) {
				case "string": return this.then(r).then(function(e$2) {
					return this.set({ src: o$1("div", {
						innerHTML: t,
						dompurify: e$2
					}) });
				});
				case "element": return this.set({ src: t });
				case "canvas": return this.set({ canvas: t });
				case "img": return this.set({ img: t });
				default: return this.error("Unknown source type.");
			}
		});
	}, u$1.prototype.to = function(t) {
		switch (t) {
			case "container": return this.toContainer();
			case "canvas": return this.toCanvas();
			case "img": return this.toImg();
			case "pdf": return this.toPdf();
			default: return this.error("Invalid target.");
		}
	}, u$1.prototype.toContainer = function() {
		return this.thenList([function() {
			return this.prop.src || this.error("Cannot duplicate - no source HTML.");
		}, function() {
			return this.prop.pageSize || this.setPageSize();
		}]).then(function() {
			var t = {
				position: "relative",
				display: "inline-block",
				width: ("number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
				left: 0,
				right: 0,
				top: 0,
				margin: "auto",
				backgroundColor: this.opt.backgroundColor
			}, e$1 = s$1(this.prop.src, this.opt.html2canvas.javascriptEnabled);
			"BODY" === e$1.tagName && (t.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = o$1("div", {
				className: "html2pdf__overlay",
				style: {
					position: "fixed",
					overflow: "hidden",
					zIndex: 1e3,
					left: "-100000px",
					right: 0,
					bottom: 0,
					top: 0
				}
			}), this.prop.container = o$1("div", {
				className: "html2pdf__container",
				style: t
			}), this.prop.container.appendChild(e$1), this.prop.container.firstChild.appendChild(o$1("div", { style: {
				clear: "both",
				border: "0 none transparent",
				margin: 0,
				padding: 0,
				height: 0
			} })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
		});
	}, u$1.prototype.toCanvas = function() {
		return this.thenList([function() {
			return document.body.contains(this.prop.container) || this.toContainer();
		}]).then(n).then(function(t) {
			var e$1 = Object.assign({}, this.opt.html2canvas);
			return delete e$1.onrendered, t(this.prop.container, e$1);
		}).then(function(t) {
			(this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay);
		});
	}, u$1.prototype.toContext2d = function() {
		return this.thenList([function() {
			return document.body.contains(this.prop.container) || this.toContainer();
		}]).then(n).then(function(t) {
			var e$1 = this.opt.jsPDF, n$1 = this.opt.fontFaces, r$1 = "number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, i$2 = Object.assign({
				async: !0,
				allowTaint: !0,
				scale: r$1,
				scrollX: this.opt.scrollX || 0,
				scrollY: this.opt.scrollY || 0,
				backgroundColor: "#ffffff",
				imageTimeout: 15e3,
				logging: !0,
				proxy: null,
				removeContainer: !0,
				foreignObjectRendering: !1,
				useCORS: !1
			}, this.opt.html2canvas);
			if (delete i$2.onrendered, e$1.context2d.autoPaging = void 0 === this.opt.autoPaging || this.opt.autoPaging, e$1.context2d.posX = this.opt.x, e$1.context2d.posY = this.opt.y, e$1.context2d.margin = this.opt.margin, e$1.context2d.fontFaces = n$1, n$1) for (var a$2 = 0; a$2 < n$1.length; ++a$2) {
				var o$2 = n$1[a$2], s$2 = o$2.src.find(function(t$1) {
					return "truetype" === t$1.format;
				});
				s$2 && e$1.addFont(s$2.url, o$2.ref.name, o$2.ref.style);
			}
			return i$2.windowHeight = i$2.windowHeight || 0, i$2.windowHeight = 0 == i$2.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : i$2.windowHeight, e$1.context2d.save(!0), t(this.prop.container, i$2);
		}).then(function(t) {
			this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay);
		});
	}, u$1.prototype.toImg = function() {
		return this.thenList([function() {
			return this.prop.canvas || this.toCanvas();
		}]).then(function() {
			var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
			this.prop.img = document.createElement("img"), this.prop.img.src = t;
		});
	}, u$1.prototype.toPdf = function() {
		return this.thenList([function() {
			return this.toContext2d();
		}]).then(function() {
			this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
		});
	}, u$1.prototype.output = function(t, e$1, n$1) {
		return "img" === (n$1 = n$1 || "pdf").toLowerCase() || "image" === n$1.toLowerCase() ? this.outputImg(t, e$1) : this.outputPdf(t, e$1);
	}, u$1.prototype.outputPdf = function(t, e$1) {
		return this.thenList([function() {
			return this.prop.pdf || this.toPdf();
		}]).then(function() {
			return this.prop.pdf.output(t, e$1);
		});
	}, u$1.prototype.outputImg = function(t) {
		return this.thenList([function() {
			return this.prop.img || this.toImg();
		}]).then(function() {
			switch (t) {
				case void 0:
				case "img": return this.prop.img;
				case "datauristring":
				case "dataurlstring": return this.prop.img.src;
				case "datauri":
				case "dataurl": return document.location.href = this.prop.img.src;
				default: throw "Image output type \"" + t + "\" is not supported.";
			}
		});
	}, u$1.prototype.save = function(t) {
		return this.thenList([function() {
			return this.prop.pdf || this.toPdf();
		}]).set(t ? { filename: t } : null).then(function() {
			this.prop.pdf.save(this.opt.filename);
		});
	}, u$1.prototype.doCallback = function() {
		return this.thenList([function() {
			return this.prop.pdf || this.toPdf();
		}]).then(function() {
			this.prop.callback(this.prop.pdf);
		});
	}, u$1.prototype.set = function(t) {
		if ("object" !== a$1(t)) return this;
		var e$1 = Object.keys(t || {}).map(function(e$2) {
			if (e$2 in u$1.template.prop) return function() {
				this.prop[e$2] = t[e$2];
			};
			switch (e$2) {
				case "margin": return this.setMargin.bind(this, t.margin);
				case "jsPDF": return function() {
					return this.opt.jsPDF = t.jsPDF, this.setPageSize();
				};
				case "pageSize": return this.setPageSize.bind(this, t.pageSize);
				default: return function() {
					this.opt[e$2] = t[e$2];
				};
			}
		}, this);
		return this.then(function() {
			return this.thenList(e$1);
		});
	}, u$1.prototype.get = function(t, e$1) {
		return this.then(function() {
			var n$1 = t in u$1.template.prop ? this.prop[t] : this.opt[t];
			return e$1 ? e$1(n$1) : n$1;
		});
	}, u$1.prototype.setMargin = function(t) {
		return this.then(function() {
			switch (a$1(t)) {
				case "number": t = [
					t,
					t,
					t,
					t
				];
				case "array": if (2 === t.length && (t = [
					t[0],
					t[1],
					t[0],
					t[1]
				]), 4 === t.length) break;
				default: return this.error("Invalid margin array.");
			}
			this.opt.margin = t;
		}).then(this.setPageSize);
	}, u$1.prototype.setPageSize = function(t) {
		function e$1(t$1, e$2) {
			return Math.floor(t$1 * e$2 / 72 * 96);
		}
		return this.then(function() {
			(t = t || E.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t.inner = {
				width: t.width - this.opt.margin[1] - this.opt.margin[3],
				height: t.height - this.opt.margin[0] - this.opt.margin[2]
			}, t.inner.px = {
				width: e$1(t.inner.width, t.k),
				height: e$1(t.inner.height, t.k)
			}, t.inner.ratio = t.inner.height / t.inner.width), this.prop.pageSize = t;
		});
	}, u$1.prototype.setProgress = function(t, e$1, n$1, r$1) {
		return null != t && (this.progress.val = t), null != e$1 && (this.progress.state = e$1), null != n$1 && (this.progress.n = n$1), null != r$1 && (this.progress.stack = r$1), this.progress.ratio = this.progress.val / this.progress.state, this;
	}, u$1.prototype.updateProgress = function(t, e$1, n$1, r$1) {
		return this.setProgress(t ? this.progress.val + t : null, e$1 || null, n$1 ? this.progress.n + n$1 : null, r$1 ? this.progress.stack.concat(r$1) : null);
	}, u$1.prototype.then = function(t, e$1) {
		var n$1 = this;
		return this.thenCore(t, e$1, function(t$1, e$2) {
			return n$1.updateProgress(null, null, 1, [t$1]), Promise.prototype.then.call(this, function(e$3) {
				return n$1.updateProgress(null, t$1), e$3;
			}).then(t$1, e$2).then(function(t$2) {
				return n$1.updateProgress(1), t$2;
			});
		});
	}, u$1.prototype.thenCore = function(t, e$1, n$1) {
		n$1 = n$1 || Promise.prototype.then;
		var r$1 = this;
		t && (t = t.bind(r$1)), e$1 && (e$1 = e$1.bind(r$1));
		var i$2 = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? r$1 : u$1.convert(Object.assign({}, r$1), Promise.prototype), a$2 = n$1.call(i$2, t, e$1);
		return u$1.convert(a$2, r$1.__proto__);
	}, u$1.prototype.thenExternal = function(t, e$1) {
		return Promise.prototype.then.call(this, t, e$1);
	}, u$1.prototype.thenList = function(t) {
		var e$1 = this;
		return t.forEach(function(t$1) {
			e$1 = e$1.thenCore(t$1);
		}), e$1;
	}, u$1.prototype.catch = function(t) {
		t && (t = t.bind(this));
		var e$1 = Promise.prototype.catch.call(this, t);
		return u$1.convert(e$1, this);
	}, u$1.prototype.catchExternal = function(t) {
		return Promise.prototype.catch.call(this, t);
	}, u$1.prototype.error = function(t) {
		return this.then(function() {
			throw new Error(t);
		});
	}, u$1.prototype.using = u$1.prototype.set, u$1.prototype.saveAs = u$1.prototype.save, u$1.prototype.export = u$1.prototype.output, u$1.prototype.run = u$1.prototype.then, E.getPageSize = function(e$1, n$1, r$1) {
		if ("object" === _typeof(e$1)) {
			var i$2 = e$1;
			e$1 = i$2.orientation, n$1 = i$2.unit || n$1, r$1 = i$2.format || r$1;
		}
		n$1 = n$1 || "mm", r$1 = r$1 || "a4", e$1 = ("" + (e$1 || "P")).toLowerCase();
		var a$2, o$2 = ("" + r$1).toLowerCase(), s$2 = {
			a0: [2383.94, 3370.39],
			a1: [1683.78, 2383.94],
			a2: [1190.55, 1683.78],
			a3: [841.89, 1190.55],
			a4: [595.28, 841.89],
			a5: [419.53, 595.28],
			a6: [297.64, 419.53],
			a7: [209.76, 297.64],
			a8: [147.4, 209.76],
			a9: [104.88, 147.4],
			a10: [73.7, 104.88],
			b0: [2834.65, 4008.19],
			b1: [2004.09, 2834.65],
			b2: [1417.32, 2004.09],
			b3: [1000.63, 1417.32],
			b4: [708.66, 1000.63],
			b5: [498.9, 708.66],
			b6: [354.33, 498.9],
			b7: [249.45, 354.33],
			b8: [175.75, 249.45],
			b9: [124.72, 175.75],
			b10: [87.87, 124.72],
			c0: [2599.37, 3676.54],
			c1: [1836.85, 2599.37],
			c2: [1298.27, 1836.85],
			c3: [918.43, 1298.27],
			c4: [649.13, 918.43],
			c5: [459.21, 649.13],
			c6: [323.15, 459.21],
			c7: [229.61, 323.15],
			c8: [161.57, 229.61],
			c9: [113.39, 161.57],
			c10: [79.37, 113.39],
			dl: [311.81, 623.62],
			letter: [612, 792],
			"government-letter": [576, 756],
			legal: [612, 1008],
			"junior-legal": [576, 360],
			ledger: [1224, 792],
			tabloid: [792, 1224],
			"credit-card": [153, 243]
		};
		switch (n$1) {
			case "pt":
				a$2 = 1;
				break;
			case "mm":
				a$2 = 72 / 25.4;
				break;
			case "cm":
				a$2 = 72 / 2.54;
				break;
			case "in":
				a$2 = 72;
				break;
			case "px":
				a$2 = .75;
				break;
			case "pc":
			case "em":
				a$2 = 12;
				break;
			case "ex":
				a$2 = 6;
				break;
			default: throw "Invalid unit: " + n$1;
		}
		var u$2, c$1 = 0, l$1 = 0;
		if (s$2.hasOwnProperty(o$2)) c$1 = s$2[o$2][1] / a$2, l$1 = s$2[o$2][0] / a$2;
		else try {
			c$1 = r$1[1], l$1 = r$1[0];
		} catch (h$1) {
			throw new Error("Invalid format: " + r$1);
		}
		if ("p" === e$1 || "portrait" === e$1) e$1 = "p", l$1 > c$1 && (u$2 = l$1, l$1 = c$1, c$1 = u$2);
		else {
			if ("l" !== e$1 && "landscape" !== e$1) throw "Invalid orientation: " + e$1;
			e$1 = "l", c$1 > l$1 && (u$2 = l$1, l$1 = c$1, c$1 = u$2);
		}
		return {
			width: l$1,
			height: c$1,
			unit: n$1,
			k: a$2,
			orientation: e$1
		};
	}, e.html = function(t, e$1) {
		(e$1 = e$1 || {}).callback = e$1.callback || function() {}, e$1.html2canvas = e$1.html2canvas || {}, e$1.html2canvas.canvas = e$1.html2canvas.canvas || this.canvas, e$1.jsPDF = e$1.jsPDF || this, e$1.fontFaces = e$1.fontFaces ? e$1.fontFaces.map(Ct) : null;
		var n$1 = new u$1(e$1);
		return e$1.worker ? n$1 : n$1.from(t).doCallback();
	};
}(E.API), E.API.addJS = function(t) {
	return Ut = t, this.internal.events.subscribe("postPutResources", function() {
		Tt = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (Tt + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), zt = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + Ut + ")"), this.internal.out(">>"), this.internal.out("endobj");
	}), this.internal.events.subscribe("putCatalog", function() {
		void 0 !== Tt && void 0 !== zt && this.internal.out("/Names <</JavaScript " + Tt + " 0 R>>");
	}), this;
}, function(t) {
	var e;
	t.events.push(["postPutResources", function() {
		var t$1 = this, n = /^(\d+) 0 obj$/;
		if (this.outline.root.children.length > 0) for (var r = t$1.outline.render().split(/\r\n/), i$2 = 0; i$2 < r.length; i$2++) {
			var a$1 = r[i$2], o$1 = n.exec(a$1);
			if (null != o$1) {
				var s$1 = o$1[1];
				t$1.internal.newObjectDeferredBegin(s$1, !1);
			}
			t$1.internal.write(a$1);
		}
		if (this.outline.createNamedDestinations) {
			var u$1 = this.internal.pages.length, c$1 = [];
			for (i$2 = 0; i$2 < u$1; i$2++) {
				var l$1 = t$1.internal.newObject();
				c$1.push(l$1);
				var h$1 = t$1.internal.getPageInfo(i$2 + 1);
				t$1.internal.write("<< /D[" + h$1.objId + " 0 R /XYZ null null null]>> endobj");
			}
			var f$1 = t$1.internal.newObject();
			for (t$1.internal.write("<< /Names [ "), i$2 = 0; i$2 < c$1.length; i$2++) t$1.internal.write("(page_" + (i$2 + 1) + ")" + c$1[i$2] + " 0 R");
			t$1.internal.write(" ] >>", "endobj"), e = t$1.internal.newObject(), t$1.internal.write("<< /Dests " + f$1 + " 0 R"), t$1.internal.write(">>", "endobj");
		}
	}]), t.events.push(["putCatalog", function() {
		var t$1 = this;
		t$1.outline.root.children.length > 0 && (t$1.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && t$1.internal.write("/Names " + e + " 0 R"));
	}]), t.events.push(["initialized", function() {
		var t$1 = this;
		t$1.outline = {
			createNamedDestinations: !1,
			root: { children: [] }
		}, t$1.outline.add = function(t$2, e$1, n) {
			var r = {
				title: e$1,
				options: n,
				children: []
			};
			return t$2 ??= this.root, t$2.children.push(r), r;
		}, t$1.outline.render = function() {
			return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = t$1, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
		}, t$1.outline.genIds_r = function(e$1) {
			e$1.id = t$1.internal.newObjectDeferred();
			for (var n = 0; n < e$1.children.length; n++) this.genIds_r(e$1.children[n]);
		}, t$1.outline.renderRoot = function(t$2) {
			this.objStart(t$2), this.line("/Type /Outlines"), t$2.children.length > 0 && (this.line("/First " + this.makeRef(t$2.children[0])), this.line("/Last " + this.makeRef(t$2.children[t$2.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, t$2)), this.objEnd();
		}, t$1.outline.renderItems = function(e$1) {
			for (var n = this.ctx.pdf.internal.getVerticalCoordinateString, r = 0; r < e$1.children.length; r++) {
				var i$2 = e$1.children[r];
				this.objStart(i$2), this.line("/Title " + this.makeString(i$2.title)), this.line("/Parent " + this.makeRef(e$1)), r > 0 && this.line("/Prev " + this.makeRef(e$1.children[r - 1])), r < e$1.children.length - 1 && this.line("/Next " + this.makeRef(e$1.children[r + 1])), i$2.children.length > 0 && (this.line("/First " + this.makeRef(i$2.children[0])), this.line("/Last " + this.makeRef(i$2.children[i$2.children.length - 1])));
				var a$1 = this.count = this.count_r({ count: 0 }, i$2);
				if (a$1 > 0 && this.line("/Count " + a$1), i$2.options && i$2.options.pageNumber) {
					var o$1 = t$1.internal.getPageInfo(i$2.options.pageNumber);
					this.line("/Dest [" + o$1.objId + " 0 R /XYZ 0 " + n(0) + " 0]");
				}
				this.objEnd();
			}
			for (var s$1 = 0; s$1 < e$1.children.length; s$1++) this.renderItems(e$1.children[s$1]);
		}, t$1.outline.line = function(t$2) {
			this.ctx.val += t$2 + "\r\n";
		}, t$1.outline.makeRef = function(t$2) {
			return t$2.id + " 0 R";
		}, t$1.outline.makeString = function(e$1) {
			return "(" + t$1.internal.pdfEscape(e$1) + ")";
		}, t$1.outline.objStart = function(t$2) {
			this.ctx.val += "\r\n" + t$2.id + " 0 obj\r\n<<\r\n";
		}, t$1.outline.objEnd = function() {
			this.ctx.val += ">> \r\nendobj\r\n";
		}, t$1.outline.count_r = function(t$2, e$1) {
			for (var n = 0; n < e$1.children.length; n++) t$2.count++, this.count_r(t$2, e$1.children[n]);
			return t$2.count;
		};
	}]);
}(E.API), function(t) {
	var e = [
		192,
		193,
		194,
		195,
		196,
		197,
		198,
		199
	];
	t.processJPEG = function(t$1, n, r, i$2, a$1, o$1) {
		var s$1, u$1 = this.decode.DCT_DECODE, c$1 = null;
		if ("string" == typeof t$1 || this.__addimage__.isArrayBuffer(t$1) || this.__addimage__.isArrayBufferView(t$1)) {
			switch (t$1 = a$1 || t$1, t$1 = this.__addimage__.isArrayBuffer(t$1) ? new Uint8Array(t$1) : t$1, s$1 = function(t$2) {
				for (var n$1, r$1 = 256 * t$2.charCodeAt(4) + t$2.charCodeAt(5), i$3 = t$2.length, a$2 = {
					width: 0,
					height: 0,
					numcomponents: 1
				}, o$2 = 4; o$2 < i$3; o$2 += 2) {
					if (o$2 += r$1, -1 !== e.indexOf(t$2.charCodeAt(o$2 + 1))) {
						n$1 = 256 * t$2.charCodeAt(o$2 + 5) + t$2.charCodeAt(o$2 + 6), a$2 = {
							width: 256 * t$2.charCodeAt(o$2 + 7) + t$2.charCodeAt(o$2 + 8),
							height: n$1,
							numcomponents: t$2.charCodeAt(o$2 + 9)
						};
						break;
					}
					r$1 = 256 * t$2.charCodeAt(o$2 + 2) + t$2.charCodeAt(o$2 + 3);
				}
				return a$2;
			}(t$1 = this.__addimage__.isArrayBufferView(t$1) ? this.__addimage__.arrayBufferToBinaryString(t$1) : t$1), s$1.numcomponents) {
				case 1:
					o$1 = this.color_spaces.DEVICE_GRAY;
					break;
				case 4:
					o$1 = this.color_spaces.DEVICE_CMYK;
					break;
				case 3: o$1 = this.color_spaces.DEVICE_RGB;
			}
			c$1 = {
				data: t$1,
				width: s$1.width,
				height: s$1.height,
				colorSpace: o$1,
				bitsPerComponent: 8,
				filter: u$1,
				index: n,
				alias: r
			};
		}
		return c$1;
	};
}(E.API), E.API.processPNG = function(t, i$2, a$1, o$1) {
	if (this.__addimage__.isArrayBuffer(t) && (t = new Uint8Array(t)), this.__addimage__.isArrayBufferView(t)) {
		var s$1, u$1 = decodePng(t, { checkCrc: !0 }), c$1 = u$1.width, l$1 = u$1.height, h$1 = u$1.channels, f$1 = u$1.palette, d$1 = u$1.depth;
		s$1 = f$1 && 1 === h$1 ? function(t$1) {
			for (var e = t$1.width, r = t$1.height, i$3 = t$1.data, a$2 = t$1.palette, o$2 = t$1.depth, s$2 = !1, u$2 = [], c$2 = [], l$2 = void 0, h$2 = !1, f$2 = 0, d$2 = 0; d$2 < a$2.length; d$2++) {
				var p$2 = _slicedToArray(a$2[d$2], 4), g$2 = p$2[0], m$2 = p$2[1], v$2 = p$2[2], b$2 = p$2[3];
				u$2.push(g$2, m$2, v$2), null != b$2 && (0 === b$2 ? (f$2++, c$2.length < 1 && c$2.push(d$2)) : b$2 < 255 && (h$2 = !0));
			}
			if (h$2 || f$2 > 1) {
				s$2 = !0, c$2 = void 0;
				var y$2 = e * r;
				l$2 = new Uint8Array(y$2);
				for (var w$2 = new DataView(i$3.buffer), N$2 = 0; N$2 < y$2; N$2++) {
					var L$2 = re(w$2, N$2, o$2);
					l$2[N$2] = _slicedToArray(a$2[L$2], 4)[3];
				}
			} else 0 === f$2 && (c$2 = void 0);
			return {
				colorSpace: "Indexed",
				colorsPerPixel: 1,
				sMaskBitsPerComponent: s$2 ? 8 : void 0,
				colorBytes: i$3,
				alphaBytes: l$2,
				needSMask: s$2,
				palette: u$2,
				mask: c$2
			};
		}(u$1) : 2 === h$1 || 4 === h$1 ? function(t$1) {
			for (var e = t$1.data, n = t$1.width, r = t$1.height, i$3 = t$1.channels, a$2 = t$1.depth, o$2 = 2 === i$3 ? "DeviceGray" : "DeviceRGB", s$2 = i$3 - 1, u$2 = n * r, c$2 = s$2, l$2 = u$2 * c$2, h$2 = 1 * u$2, f$2 = Math.ceil(l$2 * a$2 / 8), d$2 = Math.ceil(h$2 * a$2 / 8), p$2 = new Uint8Array(f$2), g$2 = new Uint8Array(d$2), m$2 = new DataView(e.buffer), v$2 = new DataView(p$2.buffer), b$2 = new DataView(g$2.buffer), y$2 = !1, w$2 = 0; w$2 < u$2; w$2++) {
				for (var N$2 = w$2 * i$3, L$2 = 0; L$2 < c$2; L$2++) ie(v$2, re(m$2, N$2 + L$2, a$2), w$2 * c$2 + L$2, a$2);
				var x$3 = re(m$2, N$2 + c$2, a$2);
				x$3 < (1 << a$2) - 1 && (y$2 = !0), ie(b$2, x$3, 1 * w$2, a$2);
			}
			return {
				colorSpace: o$2,
				colorsPerPixel: s$2,
				sMaskBitsPerComponent: y$2 ? a$2 : void 0,
				colorBytes: p$2,
				alphaBytes: g$2,
				needSMask: y$2
			};
		}(u$1) : function(t$1) {
			var e = t$1.data, n = 1 === t$1.channels ? "DeviceGray" : "DeviceRGB";
			return {
				colorSpace: n,
				colorsPerPixel: "DeviceGray" === n ? 1 : 3,
				colorBytes: e instanceof Uint16Array ? function(t$2) {
					for (var e$1 = t$2.length, n$1 = new Uint8Array(2 * e$1), r = new DataView(n$1.buffer, n$1.byteOffset, n$1.byteLength), i$3 = 0; i$3 < e$1; i$3++) r.setUint16(2 * i$3, t$2[i$3], !1);
					return n$1;
				}(e) : e,
				needSMask: !1
			};
		}(u$1);
		var p$1, g$1, m$1, v$1 = s$1, b$1 = v$1.colorSpace, y$1 = v$1.colorsPerPixel, w$1 = v$1.sMaskBitsPerComponent, N$1 = v$1.colorBytes, L$1 = v$1.alphaBytes, x$2 = v$1.needSMask, A$1 = v$1.palette, S$1 = v$1.mask, _$1 = null;
		return o$1 !== E.API.image_compression.NONE && "function" == typeof zlibSync ? (_$1 = function(t$1) {
			var e;
			switch (t$1) {
				case E.API.image_compression.FAST:
					e = 11;
					break;
				case E.API.image_compression.MEDIUM:
					e = 13;
					break;
				case E.API.image_compression.SLOW:
					e = 14;
					break;
				default: e = 12;
			}
			return e;
		}(o$1), p$1 = this.decode.FLATE_DECODE, g$1 = "/Predictor ".concat(_$1, " /Colors ").concat(y$1, " /BitsPerComponent ").concat(d$1, " /Columns ").concat(c$1), t = Xt(N$1, Math.ceil(c$1 * y$1 * d$1 / 8), y$1, d$1, o$1), x$2 && (m$1 = Xt(L$1, Math.ceil(c$1 * w$1 / 8), 1, w$1, o$1))) : (p$1 = void 0, g$1 = void 0, t = N$1, x$2 && (m$1 = L$1)), (this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) && (t = this.__addimage__.arrayBufferToBinaryString(t)), (m$1 && this.__addimage__.isArrayBuffer(m$1) || this.__addimage__.isArrayBufferView(m$1)) && (m$1 = this.__addimage__.arrayBufferToBinaryString(m$1)), {
			alias: a$1,
			data: t,
			index: i$2,
			filter: p$1,
			decodeParameters: g$1,
			transparency: S$1,
			palette: A$1,
			sMask: m$1,
			predictor: _$1,
			width: c$1,
			height: l$1,
			bitsPerComponent: d$1,
			sMaskBitsPerComponent: w$1,
			colorSpace: b$1
		};
	}
}, function(t) {
	t.processGIF89A = function(e, n, r, i$2) {
		var a$1 = new oe(e), o$1 = a$1.width, s$1 = a$1.height, u$1 = [];
		a$1.decodeAndBlitFrameRGBA(0, u$1);
		var c$1 = {
			data: u$1,
			width: o$1,
			height: s$1
		}, l$1 = new ue(100).encode(c$1, 100);
		return t.processJPEG.call(this, l$1, n, r, i$2);
	}, t.processGIF87A = t.processGIF89A;
}(E.API), ce.prototype.parseHeader = function() {
	if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
		var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
		this.palette = new Array(t);
		for (var e = 0; e < t; e++) {
			var n = this.datav.getUint8(this.pos++, !0), r = this.datav.getUint8(this.pos++, !0), i$2 = this.datav.getUint8(this.pos++, !0), a$1 = this.datav.getUint8(this.pos++, !0);
			this.palette[e] = {
				red: i$2,
				green: r,
				blue: n,
				quad: a$1
			};
		}
	}
	this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, ce.prototype.parseBGR = function() {
	this.pos = this.offset;
	try {
		var t = "bit" + this.bitPP, e = this.width * this.height * 4;
		this.data = new Uint8Array(e), this[t]();
	} catch (n) {
		o.log("bit decode error:" + n);
	}
}, ce.prototype.bit1 = function() {
	var t, e = Math.ceil(this.width / 8), n = e % 4;
	for (t = this.height - 1; t >= 0; t--) {
		for (var r = this.bottom_up ? t : this.height - 1 - t, i$2 = 0; i$2 < e; i$2++) for (var a$1 = this.datav.getUint8(this.pos++, !0), o$1 = r * this.width * 4 + 8 * i$2 * 4, s$1 = 0; s$1 < 8 && 8 * i$2 + s$1 < this.width; s$1++) {
			var u$1 = this.palette[a$1 >> 7 - s$1 & 1];
			this.data[o$1 + 4 * s$1] = u$1.blue, this.data[o$1 + 4 * s$1 + 1] = u$1.green, this.data[o$1 + 4 * s$1 + 2] = u$1.red, this.data[o$1 + 4 * s$1 + 3] = 255;
		}
		0 !== n && (this.pos += 4 - n);
	}
}, ce.prototype.bit4 = function() {
	for (var t = Math.ceil(this.width / 2), e = t % 4, n = this.height - 1; n >= 0; n--) {
		for (var r = this.bottom_up ? n : this.height - 1 - n, i$2 = 0; i$2 < t; i$2++) {
			var a$1 = this.datav.getUint8(this.pos++, !0), o$1 = r * this.width * 4 + 2 * i$2 * 4, s$1 = a$1 >> 4, u$1 = 15 & a$1, c$1 = this.palette[s$1];
			if (this.data[o$1] = c$1.blue, this.data[o$1 + 1] = c$1.green, this.data[o$1 + 2] = c$1.red, this.data[o$1 + 3] = 255, 2 * i$2 + 1 >= this.width) break;
			c$1 = this.palette[u$1], this.data[o$1 + 4] = c$1.blue, this.data[o$1 + 4 + 1] = c$1.green, this.data[o$1 + 4 + 2] = c$1.red, this.data[o$1 + 4 + 3] = 255;
		}
		0 !== e && (this.pos += 4 - e);
	}
}, ce.prototype.bit8 = function() {
	for (var t = this.width % 4, e = this.height - 1; e >= 0; e--) {
		for (var n = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
			var i$2 = this.datav.getUint8(this.pos++, !0), a$1 = n * this.width * 4 + 4 * r;
			if (i$2 < this.palette.length) {
				var o$1 = this.palette[i$2];
				this.data[a$1] = o$1.red, this.data[a$1 + 1] = o$1.green, this.data[a$1 + 2] = o$1.blue, this.data[a$1 + 3] = 255;
			} else this.data[a$1] = 255, this.data[a$1 + 1] = 255, this.data[a$1 + 2] = 255, this.data[a$1 + 3] = 255;
		}
		0 !== t && (this.pos += 4 - t);
	}
}, ce.prototype.bit15 = function() {
	for (var t = this.width % 3, e = parseInt("11111", 2), n = this.height - 1; n >= 0; n--) {
		for (var r = this.bottom_up ? n : this.height - 1 - n, i$2 = 0; i$2 < this.width; i$2++) {
			var a$1 = this.datav.getUint16(this.pos, !0);
			this.pos += 2;
			var o$1 = (a$1 & e) / e * 255 | 0, s$1 = (a$1 >> 5 & e) / e * 255 | 0, u$1 = (a$1 >> 10 & e) / e * 255 | 0, c$1 = a$1 >> 15 ? 255 : 0, l$1 = r * this.width * 4 + 4 * i$2;
			this.data[l$1] = u$1, this.data[l$1 + 1] = s$1, this.data[l$1 + 2] = o$1, this.data[l$1 + 3] = c$1;
		}
		this.pos += t;
	}
}, ce.prototype.bit16 = function() {
	for (var t = this.width % 3, e = parseInt("11111", 2), n = parseInt("111111", 2), r = this.height - 1; r >= 0; r--) {
		for (var i$2 = this.bottom_up ? r : this.height - 1 - r, a$1 = 0; a$1 < this.width; a$1++) {
			var o$1 = this.datav.getUint16(this.pos, !0);
			this.pos += 2;
			var s$1 = (o$1 & e) / e * 255 | 0, u$1 = (o$1 >> 5 & n) / n * 255 | 0, c$1 = (o$1 >> 11) / e * 255 | 0, l$1 = i$2 * this.width * 4 + 4 * a$1;
			this.data[l$1] = c$1, this.data[l$1 + 1] = u$1, this.data[l$1 + 2] = s$1, this.data[l$1 + 3] = 255;
		}
		this.pos += t;
	}
}, ce.prototype.bit24 = function() {
	for (var t = this.height - 1; t >= 0; t--) {
		for (var e = this.bottom_up ? t : this.height - 1 - t, n = 0; n < this.width; n++) {
			var r = this.datav.getUint8(this.pos++, !0), i$2 = this.datav.getUint8(this.pos++, !0), a$1 = this.datav.getUint8(this.pos++, !0), o$1 = e * this.width * 4 + 4 * n;
			this.data[o$1] = a$1, this.data[o$1 + 1] = i$2, this.data[o$1 + 2] = r, this.data[o$1 + 3] = 255;
		}
		this.pos += this.width % 4;
	}
}, ce.prototype.bit32 = function() {
	for (var t = this.height - 1; t >= 0; t--) for (var e = this.bottom_up ? t : this.height - 1 - t, n = 0; n < this.width; n++) {
		var r = this.datav.getUint8(this.pos++, !0), i$2 = this.datav.getUint8(this.pos++, !0), a$1 = this.datav.getUint8(this.pos++, !0), o$1 = this.datav.getUint8(this.pos++, !0), s$1 = e * this.width * 4 + 4 * n;
		this.data[s$1] = a$1, this.data[s$1 + 1] = i$2, this.data[s$1 + 2] = r, this.data[s$1 + 3] = o$1;
	}
}, ce.prototype.getData = function() {
	return this.data;
}, function(t) {
	t.processBMP = function(e, n, r, i$2) {
		var a$1 = new ce(e, !1), o$1 = a$1.width, s$1 = a$1.height, u$1 = {
			data: a$1.getData(),
			width: o$1,
			height: s$1
		}, c$1 = new ue(100).encode(u$1, 100);
		return t.processJPEG.call(this, c$1, n, r, i$2);
	};
}(E.API), le.prototype.getData = function() {
	return this.data;
}, function(t) {
	t.processWEBP = function(e, n, r, i$2) {
		var a$1 = new le(e), o$1 = a$1.width, s$1 = a$1.height, u$1 = {
			data: a$1.getData(),
			width: o$1,
			height: s$1
		}, c$1 = new ue(100).encode(u$1, 100);
		return t.processJPEG.call(this, c$1, n, r, i$2);
	};
}(E.API), E.API.processRGBA = function(t, e, n) {
	for (var r = t.data, i$2 = r.length, a$1 = new Uint8Array(i$2 / 4 * 3), o$1 = new Uint8Array(i$2 / 4), s$1 = 0, u$1 = 0, c$1 = 0; c$1 < i$2; c$1 += 4) {
		var l$1 = r[c$1], h$1 = r[c$1 + 1], f$1 = r[c$1 + 2], d$1 = r[c$1 + 3];
		a$1[s$1++] = l$1, a$1[s$1++] = h$1, a$1[s$1++] = f$1, o$1[u$1++] = d$1;
	}
	var p$1 = this.__addimage__.arrayBufferToBinaryString(a$1);
	return {
		alpha: this.__addimage__.arrayBufferToBinaryString(o$1),
		data: p$1,
		index: e,
		alias: n,
		colorSpace: "DeviceRGB",
		bitsPerComponent: 8,
		width: t.width,
		height: t.height
	};
}, E.API.setLanguage = function(t) {
	return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), void 0 !== {
		af: "Afrikaans",
		sq: "Albanian",
		ar: "Arabic (Standard)",
		"ar-DZ": "Arabic (Algeria)",
		"ar-BH": "Arabic (Bahrain)",
		"ar-EG": "Arabic (Egypt)",
		"ar-IQ": "Arabic (Iraq)",
		"ar-JO": "Arabic (Jordan)",
		"ar-KW": "Arabic (Kuwait)",
		"ar-LB": "Arabic (Lebanon)",
		"ar-LY": "Arabic (Libya)",
		"ar-MA": "Arabic (Morocco)",
		"ar-OM": "Arabic (Oman)",
		"ar-QA": "Arabic (Qatar)",
		"ar-SA": "Arabic (Saudi Arabia)",
		"ar-SY": "Arabic (Syria)",
		"ar-TN": "Arabic (Tunisia)",
		"ar-AE": "Arabic (U.A.E.)",
		"ar-YE": "Arabic (Yemen)",
		an: "Aragonese",
		hy: "Armenian",
		as: "Assamese",
		ast: "Asturian",
		az: "Azerbaijani",
		eu: "Basque",
		be: "Belarusian",
		bn: "Bengali",
		bs: "Bosnian",
		br: "Breton",
		bg: "Bulgarian",
		my: "Burmese",
		ca: "Catalan",
		ch: "Chamorro",
		ce: "Chechen",
		zh: "Chinese",
		"zh-HK": "Chinese (Hong Kong)",
		"zh-CN": "Chinese (PRC)",
		"zh-SG": "Chinese (Singapore)",
		"zh-TW": "Chinese (Taiwan)",
		cv: "Chuvash",
		co: "Corsican",
		cr: "Cree",
		hr: "Croatian",
		cs: "Czech",
		da: "Danish",
		nl: "Dutch (Standard)",
		"nl-BE": "Dutch (Belgian)",
		en: "English",
		"en-AU": "English (Australia)",
		"en-BZ": "English (Belize)",
		"en-CA": "English (Canada)",
		"en-IE": "English (Ireland)",
		"en-JM": "English (Jamaica)",
		"en-NZ": "English (New Zealand)",
		"en-PH": "English (Philippines)",
		"en-ZA": "English (South Africa)",
		"en-TT": "English (Trinidad & Tobago)",
		"en-GB": "English (United Kingdom)",
		"en-US": "English (United States)",
		"en-ZW": "English (Zimbabwe)",
		eo: "Esperanto",
		et: "Estonian",
		fo: "Faeroese",
		fj: "Fijian",
		fi: "Finnish",
		fr: "French (Standard)",
		"fr-BE": "French (Belgium)",
		"fr-CA": "French (Canada)",
		"fr-FR": "French (France)",
		"fr-LU": "French (Luxembourg)",
		"fr-MC": "French (Monaco)",
		"fr-CH": "French (Switzerland)",
		fy: "Frisian",
		fur: "Friulian",
		gd: "Gaelic (Scots)",
		"gd-IE": "Gaelic (Irish)",
		gl: "Galacian",
		ka: "Georgian",
		de: "German (Standard)",
		"de-AT": "German (Austria)",
		"de-DE": "German (Germany)",
		"de-LI": "German (Liechtenstein)",
		"de-LU": "German (Luxembourg)",
		"de-CH": "German (Switzerland)",
		el: "Greek",
		gu: "Gujurati",
		ht: "Haitian",
		he: "Hebrew",
		hi: "Hindi",
		hu: "Hungarian",
		is: "Icelandic",
		id: "Indonesian",
		iu: "Inuktitut",
		ga: "Irish",
		it: "Italian (Standard)",
		"it-CH": "Italian (Switzerland)",
		ja: "Japanese",
		kn: "Kannada",
		ks: "Kashmiri",
		kk: "Kazakh",
		km: "Khmer",
		ky: "Kirghiz",
		tlh: "Klingon",
		ko: "Korean",
		"ko-KP": "Korean (North Korea)",
		"ko-KR": "Korean (South Korea)",
		la: "Latin",
		lv: "Latvian",
		lt: "Lithuanian",
		lb: "Luxembourgish",
		mk: "North Macedonia",
		ms: "Malay",
		ml: "Malayalam",
		mt: "Maltese",
		mi: "Maori",
		mr: "Marathi",
		mo: "Moldavian",
		nv: "Navajo",
		ng: "Ndonga",
		ne: "Nepali",
		no: "Norwegian",
		nb: "Norwegian (Bokmal)",
		nn: "Norwegian (Nynorsk)",
		oc: "Occitan",
		or: "Oriya",
		om: "Oromo",
		fa: "Persian",
		"fa-IR": "Persian/Iran",
		pl: "Polish",
		pt: "Portuguese",
		"pt-BR": "Portuguese (Brazil)",
		pa: "Punjabi",
		"pa-IN": "Punjabi (India)",
		"pa-PK": "Punjabi (Pakistan)",
		qu: "Quechua",
		rm: "Rhaeto-Romanic",
		ro: "Romanian",
		"ro-MO": "Romanian (Moldavia)",
		ru: "Russian",
		"ru-MO": "Russian (Moldavia)",
		sz: "Sami (Lappish)",
		sg: "Sango",
		sa: "Sanskrit",
		sc: "Sardinian",
		sd: "Sindhi",
		si: "Singhalese",
		sr: "Serbian",
		sk: "Slovak",
		sl: "Slovenian",
		so: "Somani",
		sb: "Sorbian",
		es: "Spanish",
		"es-AR": "Spanish (Argentina)",
		"es-BO": "Spanish (Bolivia)",
		"es-CL": "Spanish (Chile)",
		"es-CO": "Spanish (Colombia)",
		"es-CR": "Spanish (Costa Rica)",
		"es-DO": "Spanish (Dominican Republic)",
		"es-EC": "Spanish (Ecuador)",
		"es-SV": "Spanish (El Salvador)",
		"es-GT": "Spanish (Guatemala)",
		"es-HN": "Spanish (Honduras)",
		"es-MX": "Spanish (Mexico)",
		"es-NI": "Spanish (Nicaragua)",
		"es-PA": "Spanish (Panama)",
		"es-PY": "Spanish (Paraguay)",
		"es-PE": "Spanish (Peru)",
		"es-PR": "Spanish (Puerto Rico)",
		"es-ES": "Spanish (Spain)",
		"es-UY": "Spanish (Uruguay)",
		"es-VE": "Spanish (Venezuela)",
		sx: "Sutu",
		sw: "Swahili",
		sv: "Swedish",
		"sv-FI": "Swedish (Finland)",
		"sv-SV": "Swedish (Sweden)",
		ta: "Tamil",
		tt: "Tatar",
		te: "Teluga",
		th: "Thai",
		tig: "Tigre",
		ts: "Tsonga",
		tn: "Tswana",
		tr: "Turkish",
		tk: "Turkmen",
		uk: "Ukrainian",
		hsb: "Upper Sorbian",
		ur: "Urdu",
		ve: "Venda",
		vi: "Vietnamese",
		vo: "Volapuk",
		wa: "Walloon",
		cy: "Welsh",
		xh: "Xhosa",
		ji: "Yiddish",
		zu: "Zulu"
	}[t] && (this.internal.languageSettings.languageCode = t, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
		this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
	}), this.internal.languageSettings.isSubscribed = !0)), this;
}, Ht = E.API, Wt = Ht.getCharWidthsArray = function(e, n) {
	var r, i$2, a$1 = (n = n || {}).font || this.internal.getFont(), o$1 = n.fontSize || this.internal.getFontSize(), s$1 = n.charSpace || this.internal.getCharSpace(), u$1 = n.widths ? n.widths : a$1.metadata.Unicode.widths, c$1 = u$1.fof ? u$1.fof : 1, l$1 = n.kerning ? n.kerning : a$1.metadata.Unicode.kerning, h$1 = l$1.fof ? l$1.fof : 1, f$1 = !1 !== n.doKerning, d$1 = 0, p$1 = e.length, g$1 = 0, m$1 = u$1[0] || c$1, v$1 = [];
	for (r = 0; r < p$1; r++) i$2 = e.charCodeAt(r), "function" == typeof a$1.metadata.widthOfString ? v$1.push((a$1.metadata.widthOfGlyph(a$1.metadata.characterToGlyph(i$2)) + s$1 * (1e3 / o$1) || 0) / 1e3) : (d$1 = f$1 && "object" === _typeof(l$1[i$2]) && !isNaN(parseInt(l$1[i$2][g$1], 10)) ? l$1[i$2][g$1] / h$1 : 0, v$1.push((u$1[i$2] || m$1) / c$1 + d$1)), g$1 = i$2;
	return v$1;
}, Vt = Ht.getStringUnitWidth = function(t, e) {
	var n = (e = e || {}).fontSize || this.internal.getFontSize(), r = e.font || this.internal.getFont(), i$2 = e.charSpace || this.internal.getCharSpace();
	return Ht.processArabic && (t = Ht.processArabic(t)), "function" == typeof r.metadata.widthOfString ? r.metadata.widthOfString(t, n, i$2) / n : Wt.apply(this, arguments).reduce(function(t$1, e$1) {
		return t$1 + e$1;
	}, 0);
}, Gt = function(t, e, n, r) {
	for (var i$2 = [], a$1 = 0, o$1 = t.length, s$1 = 0; a$1 !== o$1 && s$1 + e[a$1] < n;) s$1 += e[a$1], a$1++;
	i$2.push(t.slice(0, a$1));
	var u$1 = a$1;
	for (s$1 = 0; a$1 !== o$1;) s$1 + e[a$1] > r && (i$2.push(t.slice(u$1, a$1)), s$1 = 0, u$1 = a$1), s$1 += e[a$1], a$1++;
	return u$1 !== a$1 && i$2.push(t.slice(u$1, a$1)), i$2;
}, Yt = function(t, e, n) {
	n || (n = {});
	var r, i$2, a$1, o$1, s$1, u$1, c$1, l$1 = [], h$1 = [l$1], f$1 = n.textIndent || 0, d$1 = 0, p$1 = 0, g$1 = t.split(" "), m$1 = Wt.apply(this, [" ", n])[0];
	if (u$1 = -1 === n.lineIndent ? g$1[0].length + 2 : n.lineIndent || 0) {
		var v$1 = Array(u$1).join(" "), b$1 = [];
		g$1.map(function(t$1) {
			(t$1 = t$1.split(/\s*\n/)).length > 1 ? b$1 = b$1.concat(t$1.map(function(t$2, e$1) {
				return (e$1 && t$2.length ? "\n" : "") + t$2;
			})) : b$1.push(t$1[0]);
		}), g$1 = b$1, u$1 = Vt.apply(this, [v$1, n]);
	}
	for (a$1 = 0, o$1 = g$1.length; a$1 < o$1; a$1++) {
		var y$1 = 0;
		if (r = g$1[a$1], u$1 && "\n" == r[0] && (r = r.substr(1), y$1 = 1), f$1 + d$1 + (p$1 = (i$2 = Wt.apply(this, [r, n])).reduce(function(t$1, e$1) {
			return t$1 + e$1;
		}, 0)) > e || y$1) {
			if (p$1 > e) {
				for (s$1 = Gt.apply(this, [
					r,
					i$2,
					e - (f$1 + d$1),
					e
				]), l$1.push(s$1.shift()), l$1 = [s$1.pop()]; s$1.length;) h$1.push([s$1.shift()]);
				p$1 = i$2.slice(r.length - (l$1[0] ? l$1[0].length : 0)).reduce(function(t$1, e$1) {
					return t$1 + e$1;
				}, 0);
			} else l$1 = [r];
			h$1.push(l$1), f$1 = p$1 + u$1, d$1 = m$1;
		} else l$1.push(r), f$1 += d$1 + p$1, d$1 = m$1;
	}
	return c$1 = u$1 ? function(t$1, e$1) {
		return (e$1 ? v$1 : "") + t$1.join(" ");
	} : function(t$1) {
		return t$1.join(" ");
	}, h$1.map(c$1);
}, Ht.splitTextToSize = function(t, e, n) {
	var r, i$2 = (n = n || {}).fontSize || this.internal.getFontSize(), a$1 = function(t$1) {
		if (t$1.widths && t$1.kerning) return {
			widths: t$1.widths,
			kerning: t$1.kerning
		};
		var e$1 = this.internal.getFont(t$1.fontName, t$1.fontStyle), n$1 = "Unicode";
		return e$1.metadata[n$1] ? {
			widths: e$1.metadata[n$1].widths || { 0: 1 },
			kerning: e$1.metadata[n$1].kerning || {}
		} : {
			font: e$1.metadata,
			fontSize: this.internal.getFontSize(),
			charSpace: this.internal.getCharSpace()
		};
	}.call(this, n);
	r = Array.isArray(t) ? t : String(t).split(/\r?\n/);
	var o$1 = 1 * this.internal.scaleFactor * e / i$2;
	a$1.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / i$2 : 0, a$1.lineIndent = n.lineIndent;
	var s$1, u$1, c$1 = [];
	for (s$1 = 0, u$1 = r.length; s$1 < u$1; s$1++) c$1 = c$1.concat(Yt.apply(this, [
		r[s$1],
		o$1,
		a$1
	]));
	return c$1;
}, function(e) {
	e.__fontmetrics__ = e.__fontmetrics__ || {};
	for (var n = "0123456789abcdef", r = "klmnopqrstuvwxyz", i$2 = {}, a$1 = {}, o$1 = 0; o$1 < 16; o$1++) i$2[r[o$1]] = n[o$1], a$1[n[o$1]] = r[o$1];
	var s$1 = function(t) {
		return "0x" + parseInt(t, 10).toString(16);
	}, u$1 = e.__fontmetrics__.compress = function(e$1) {
		var n$1, r$1, i$3, o$2, c$2 = ["{"];
		for (var l$2 in e$1) {
			if (n$1 = e$1[l$2], isNaN(parseInt(l$2, 10)) ? r$1 = "'" + l$2 + "'" : (l$2 = parseInt(l$2, 10), r$1 = (r$1 = s$1(l$2).slice(2)).slice(0, -1) + a$1[r$1.slice(-1)]), "number" == typeof n$1) n$1 < 0 ? (i$3 = s$1(n$1).slice(3), o$2 = "-") : (i$3 = s$1(n$1).slice(2), o$2 = ""), i$3 = o$2 + i$3.slice(0, -1) + a$1[i$3.slice(-1)];
			else {
				if ("object" !== _typeof(n$1)) throw new Error("Don't know what to do with value type " + _typeof(n$1) + ".");
				i$3 = u$1(n$1);
			}
			c$2.push(r$1 + i$3);
		}
		return c$2.push("}"), c$2.join("");
	}, c$1 = e.__fontmetrics__.uncompress = function(t) {
		if ("string" != typeof t) throw new Error("Invalid argument passed to uncompress.");
		for (var e$1, n$1, r$1, a$2, o$2 = {}, s$2 = 1, u$2 = o$2, c$2 = [], l$2 = "", h$2 = "", f$2 = t.length - 1, d$1 = 1; d$1 < f$2; d$1 += 1) "'" == (a$2 = t[d$1]) ? e$1 ? (r$1 = e$1.join(""), e$1 = void 0) : e$1 = [] : e$1 ? e$1.push(a$2) : "{" == a$2 ? (c$2.push([u$2, r$1]), u$2 = {}, r$1 = void 0) : "}" == a$2 ? ((n$1 = c$2.pop())[0][n$1[1]] = u$2, r$1 = void 0, u$2 = n$1[0]) : "-" == a$2 ? s$2 = -1 : void 0 === r$1 ? i$2.hasOwnProperty(a$2) ? (l$2 += i$2[a$2], r$1 = parseInt(l$2, 16) * s$2, s$2 = 1, l$2 = "") : l$2 += a$2 : i$2.hasOwnProperty(a$2) ? (h$2 += i$2[a$2], u$2[r$1] = parseInt(h$2, 16) * s$2, s$2 = 1, r$1 = void 0, h$2 = "") : h$2 += a$2;
		return o$2;
	}, l$1 = {
		codePages: ["WinAnsiEncoding"],
		WinAnsiEncoding: c$1("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
	}, h$1 = { Unicode: {
		Courier: l$1,
		"Courier-Bold": l$1,
		"Courier-BoldOblique": l$1,
		"Courier-Oblique": l$1,
		Helvetica: l$1,
		"Helvetica-Bold": l$1,
		"Helvetica-BoldOblique": l$1,
		"Helvetica-Oblique": l$1,
		"Times-Roman": l$1,
		"Times-Bold": l$1,
		"Times-BoldItalic": l$1,
		"Times-Italic": l$1
	} }, f$1 = { Unicode: {
		"Courier-Oblique": c$1("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
		"Times-BoldItalic": c$1("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
		"Helvetica-Bold": c$1("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
		Courier: c$1("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
		"Courier-BoldOblique": c$1("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
		"Times-Bold": c$1("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
		Symbol: c$1("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
		Helvetica: c$1("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
		"Helvetica-BoldOblique": c$1("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
		ZapfDingbats: c$1("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
		"Courier-Bold": c$1("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
		"Times-Italic": c$1("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
		"Times-Roman": c$1("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
		"Helvetica-Oblique": c$1("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
	} };
	e.events.push(["addFont", function(t) {
		var e$1 = t.font, n$1 = f$1.Unicode[e$1.postScriptName];
		n$1 && (e$1.metadata.Unicode = {}, e$1.metadata.Unicode.widths = n$1.widths, e$1.metadata.Unicode.kerning = n$1.kerning);
		var r$1 = h$1.Unicode[e$1.postScriptName];
		r$1 && (e$1.metadata.Unicode.encoding = r$1, e$1.encoding = r$1.codePages[0]);
	}]);
}(E.API), function(t) {
	var e = function(t$1) {
		for (var e$1 = t$1.length, n = new Uint8Array(e$1), r = 0; r < e$1; r++) n[r] = t$1.charCodeAt(r);
		return n;
	};
	t.API.events.push(["addFont", function(n) {
		var r = void 0, i$2 = n.font, a$1 = n.instance;
		if (!i$2.isStandardFont) {
			if (void 0 === a$1) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i$2.postScriptName + "').");
			if ("string" != typeof (r = !1 === a$1.existsFileInVFS(i$2.postScriptName) ? a$1.loadFile(i$2.postScriptName) : a$1.getFileFromVFS(i$2.postScriptName))) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i$2.postScriptName + "').");
			(function(n$1, r$1) {
				r$1 = /^\x00\x01\x00\x00/.test(r$1) ? e(r$1) : e(f(r$1)), n$1.metadata = t.API.TTFFont.open(r$1), n$1.metadata.Unicode = n$1.metadata.Unicode || {
					encoding: {},
					kerning: {},
					widths: []
				}, n$1.metadata.glyIdsUsed = [0];
			})(i$2, r);
		}
	}]);
}(E), E.API.addSvgAsImage = function(t, e, n, r, a$1, s$1, u$1, c$1) {
	if (isNaN(e) || isNaN(n)) throw o.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), /* @__PURE__ */ new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
	if (isNaN(r) || isNaN(a$1)) throw o.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), /* @__PURE__ */ new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
	var l$1 = document.createElement("canvas");
	l$1.width = r, l$1.height = a$1;
	var h$1 = l$1.getContext("2d");
	h$1.fillStyle = "#fff", h$1.fillRect(0, 0, l$1.width, l$1.height);
	var f$1 = {
		ignoreMouse: !0,
		ignoreAnimation: !0,
		ignoreDimensions: !0
	}, d$1 = this;
	return (i.canvg ? Promise.resolve(i.canvg) : import("./index.es-BTwxXvc2.js")).catch(function(t$1) {
		return Promise.reject(/* @__PURE__ */ new Error("Could not load canvg: " + t$1));
	}).then(function(t$1) {
		return t$1.default ? t$1.default : t$1;
	}).then(function(e$1) {
		return e$1.fromString(h$1, t, f$1);
	}, function() {
		return Promise.reject(/* @__PURE__ */ new Error("Could not load canvg."));
	}).then(function(t$1) {
		return t$1.render(f$1);
	}).then(function() {
		d$1.addImage(l$1.toDataURL("image/jpeg", 1), e, n, r, a$1, u$1, c$1);
	});
}, E.API.putTotalPages = function(t) {
	var e, n = 0;
	parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(t, "g"), n = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(t, this.internal.getFont()), "g"), n = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
	for (var r = 1; r <= this.internal.getNumberOfPages(); r++) for (var i$2 = 0; i$2 < this.internal.pages[r].length; i$2++) this.internal.pages[r][i$2] = this.internal.pages[r][i$2].replace(e, n);
	return this;
}, E.API.viewerPreferences = function(e, n) {
	var r;
	e = e || {}, n = n || !1;
	var i$2, a$1, o$1, s$1 = {
		HideToolbar: {
			defaultValue: !1,
			value: !1,
			type: "boolean",
			explicitSet: !1,
			valueSet: [!0, !1],
			pdfVersion: 1.3
		},
		HideMenubar: {
			defaultValue: !1,
			value: !1,
			type: "boolean",
			explicitSet: !1,
			valueSet: [!0, !1],
			pdfVersion: 1.3
		},
		HideWindowUI: {
			defaultValue: !1,
			value: !1,
			type: "boolean",
			explicitSet: !1,
			valueSet: [!0, !1],
			pdfVersion: 1.3
		},
		FitWindow: {
			defaultValue: !1,
			value: !1,
			type: "boolean",
			explicitSet: !1,
			valueSet: [!0, !1],
			pdfVersion: 1.3
		},
		CenterWindow: {
			defaultValue: !1,
			value: !1,
			type: "boolean",
			explicitSet: !1,
			valueSet: [!0, !1],
			pdfVersion: 1.3
		},
		DisplayDocTitle: {
			defaultValue: !1,
			value: !1,
			type: "boolean",
			explicitSet: !1,
			valueSet: [!0, !1],
			pdfVersion: 1.4
		},
		NonFullScreenPageMode: {
			defaultValue: "UseNone",
			value: "UseNone",
			type: "name",
			explicitSet: !1,
			valueSet: [
				"UseNone",
				"UseOutlines",
				"UseThumbs",
				"UseOC"
			],
			pdfVersion: 1.3
		},
		Direction: {
			defaultValue: "L2R",
			value: "L2R",
			type: "name",
			explicitSet: !1,
			valueSet: ["L2R", "R2L"],
			pdfVersion: 1.3
		},
		ViewArea: {
			defaultValue: "CropBox",
			value: "CropBox",
			type: "name",
			explicitSet: !1,
			valueSet: [
				"MediaBox",
				"CropBox",
				"TrimBox",
				"BleedBox",
				"ArtBox"
			],
			pdfVersion: 1.4
		},
		ViewClip: {
			defaultValue: "CropBox",
			value: "CropBox",
			type: "name",
			explicitSet: !1,
			valueSet: [
				"MediaBox",
				"CropBox",
				"TrimBox",
				"BleedBox",
				"ArtBox"
			],
			pdfVersion: 1.4
		},
		PrintArea: {
			defaultValue: "CropBox",
			value: "CropBox",
			type: "name",
			explicitSet: !1,
			valueSet: [
				"MediaBox",
				"CropBox",
				"TrimBox",
				"BleedBox",
				"ArtBox"
			],
			pdfVersion: 1.4
		},
		PrintClip: {
			defaultValue: "CropBox",
			value: "CropBox",
			type: "name",
			explicitSet: !1,
			valueSet: [
				"MediaBox",
				"CropBox",
				"TrimBox",
				"BleedBox",
				"ArtBox"
			],
			pdfVersion: 1.4
		},
		PrintScaling: {
			defaultValue: "AppDefault",
			value: "AppDefault",
			type: "name",
			explicitSet: !1,
			valueSet: ["AppDefault", "None"],
			pdfVersion: 1.6
		},
		Duplex: {
			defaultValue: "",
			value: "none",
			type: "name",
			explicitSet: !1,
			valueSet: [
				"Simplex",
				"DuplexFlipShortEdge",
				"DuplexFlipLongEdge",
				"none"
			],
			pdfVersion: 1.7
		},
		PickTrayByPDFSize: {
			defaultValue: !1,
			value: !1,
			type: "boolean",
			explicitSet: !1,
			valueSet: [!0, !1],
			pdfVersion: 1.7
		},
		PrintPageRange: {
			defaultValue: "",
			value: "",
			type: "array",
			explicitSet: !1,
			valueSet: null,
			pdfVersion: 1.7
		},
		NumCopies: {
			defaultValue: 1,
			value: 1,
			type: "integer",
			explicitSet: !1,
			valueSet: null,
			pdfVersion: 1.7
		}
	}, u$1 = Object.keys(s$1), c$1 = [], l$1 = 0, h$1 = 0, f$1 = 0;
	function d$1(t, e$1) {
		var n$1, r$1 = !1;
		for (n$1 = 0; n$1 < t.length; n$1 += 1) t[n$1] === e$1 && (r$1 = !0);
		return r$1;
	}
	if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(s$1)), this.internal.viewerpreferences.isSubscribed = !1), r = this.internal.viewerpreferences.configuration, "reset" === e || !0 === n) {
		var p$1 = u$1.length;
		for (f$1 = 0; f$1 < p$1; f$1 += 1) r[u$1[f$1]].value = r[u$1[f$1]].defaultValue, r[u$1[f$1]].explicitSet = !1;
	}
	if ("object" === _typeof(e)) {
		for (a$1 in e) if (o$1 = e[a$1], d$1(u$1, a$1) && void 0 !== o$1) {
			if ("boolean" === r[a$1].type && "boolean" == typeof o$1) r[a$1].value = o$1;
			else if ("name" === r[a$1].type && d$1(r[a$1].valueSet, o$1)) r[a$1].value = o$1;
			else if ("integer" === r[a$1].type && Number.isInteger(o$1)) r[a$1].value = o$1;
			else if ("array" === r[a$1].type) {
				for (l$1 = 0; l$1 < o$1.length; l$1 += 1) if (i$2 = !0, 1 === o$1[l$1].length && "number" == typeof o$1[l$1][0]) c$1.push(String(o$1[l$1] - 1));
				else if (o$1[l$1].length > 1) {
					for (h$1 = 0; h$1 < o$1[l$1].length; h$1 += 1) "number" != typeof o$1[l$1][h$1] && (i$2 = !1);
					!0 === i$2 && c$1.push([o$1[l$1][0] - 1, o$1[l$1][1] - 1].join(" "));
				}
				r[a$1].value = "[" + c$1.join(" ") + "]";
			} else r[a$1].value = r[a$1].defaultValue;
			r[a$1].explicitSet = !0;
		}
	}
	return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
		var t, e$1 = [];
		for (t in r) !0 === r[t].explicitSet && ("name" === r[t].type ? e$1.push("/" + t + " /" + r[t].value) : e$1.push("/" + t + " " + r[t].value));
		0 !== e$1.length && this.internal.write("/ViewerPreferences\n<<\n" + e$1.join("\n") + "\n>>");
	}), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = r, this;
}, function(t) {
	var e = function() {
		var t$1 = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><rdf:Description rdf:about=\"\" xmlns:jspdf=\"" + this.internal.__metadata__.namespaceuri + "\"><jspdf:metadata>", e$1 = unescape(encodeURIComponent("<x:xmpmeta xmlns:x=\"adobe:ns:meta/\">")), n$1 = unescape(encodeURIComponent(t$1)), r = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), i$2 = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), a$1 = unescape(encodeURIComponent("</x:xmpmeta>")), o$1 = n$1.length + r.length + i$2.length + e$1.length + a$1.length;
		this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o$1 + " >>"), this.internal.write("stream"), this.internal.write(e$1 + n$1 + r + i$2 + a$1), this.internal.write("endstream"), this.internal.write("endobj");
	}, n = function() {
		this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
	};
	t.addMetadata = function(t$1, r) {
		return void 0 === this.internal.__metadata__ && (this.internal.__metadata__ = {
			metadata: t$1,
			namespaceuri: r || "http://jspdf.default.namespaceuri/"
		}, this.internal.events.subscribe("putCatalog", n), this.internal.events.subscribe("postPutResources", e)), this;
	};
}(E.API), function(t) {
	var e = t.API, n = e.pdfEscape16 = function(t$1, e$1) {
		for (var n$1, r$1 = e$1.metadata.Unicode.widths, i$3 = [
			"",
			"0",
			"00",
			"000",
			"0000"
		], a$1 = [""], o$1 = 0, s$1 = t$1.length; o$1 < s$1; ++o$1) {
			if (n$1 = e$1.metadata.characterToGlyph(t$1.charCodeAt(o$1)), e$1.metadata.glyIdsUsed.push(n$1), e$1.metadata.toUnicode[n$1] = t$1.charCodeAt(o$1), -1 == r$1.indexOf(n$1) && (r$1.push(n$1), r$1.push([parseInt(e$1.metadata.widthOfGlyph(n$1), 10)])), "0" == n$1) return a$1.join("");
			n$1 = n$1.toString(16), a$1.push(i$3[4 - n$1.length], n$1);
		}
		return a$1.join("");
	}, r = function(t$1) {
		var e$1, n$1, r$1, i$3, a$1, o$1, s$1;
		for (a$1 = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", r$1 = [], o$1 = 0, s$1 = (n$1 = Object.keys(t$1).sort(function(t$2, e$2) {
			return t$2 - e$2;
		})).length; o$1 < s$1; o$1++) e$1 = n$1[o$1], r$1.length >= 100 && (a$1 += "\n" + r$1.length + " beginbfchar\n" + r$1.join("\n") + "\nendbfchar", r$1 = []), void 0 !== t$1[e$1] && null !== t$1[e$1] && "function" == typeof t$1[e$1].toString && (i$3 = ("0000" + t$1[e$1].toString(16)).slice(-4), e$1 = ("0000" + (+e$1).toString(16)).slice(-4), r$1.push("<" + e$1 + "><" + i$3 + ">"));
		return r$1.length && (a$1 += "\n" + r$1.length + " beginbfchar\n" + r$1.join("\n") + "\nendbfchar\n"), a$1 + "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
	};
	e.events.push(["putFont", function(e$1) {
		(function(e$2) {
			var n$1 = e$2.font, i$3 = e$2.out, a$1 = e$2.newObject, o$1 = e$2.putStream;
			if (n$1.metadata instanceof t.API.TTFFont && "Identity-H" === n$1.encoding) {
				for (var s$1 = n$1.metadata.Unicode.widths, u$1 = n$1.metadata.subset.encode(n$1.metadata.glyIdsUsed, 1), c$1 = "", l$1 = 0; l$1 < u$1.length; l$1++) c$1 += String.fromCharCode(u$1[l$1]);
				var h$1 = a$1();
				o$1({
					data: c$1,
					addLength1: !0,
					objectId: h$1
				}), i$3("endobj");
				var f$1 = a$1();
				o$1({
					data: r(n$1.metadata.toUnicode),
					addLength1: !0,
					objectId: f$1
				}), i$3("endobj");
				var d$1 = a$1();
				i$3("<<"), i$3("/Type /FontDescriptor"), i$3("/FontName /" + j(n$1.fontName)), i$3("/FontFile2 " + h$1 + " 0 R"), i$3("/FontBBox " + t.API.PDFObject.convert(n$1.metadata.bbox)), i$3("/Flags " + n$1.metadata.flags), i$3("/StemV " + n$1.metadata.stemV), i$3("/ItalicAngle " + n$1.metadata.italicAngle), i$3("/Ascent " + n$1.metadata.ascender), i$3("/Descent " + n$1.metadata.decender), i$3("/CapHeight " + n$1.metadata.capHeight), i$3(">>"), i$3("endobj");
				var p$1 = a$1();
				i$3("<<"), i$3("/Type /Font"), i$3("/BaseFont /" + j(n$1.fontName)), i$3("/FontDescriptor " + d$1 + " 0 R"), i$3("/W " + t.API.PDFObject.convert(s$1)), i$3("/CIDToGIDMap /Identity"), i$3("/DW 1000"), i$3("/Subtype /CIDFontType2"), i$3("/CIDSystemInfo"), i$3("<<"), i$3("/Supplement 0"), i$3("/Registry (Adobe)"), i$3("/Ordering (" + n$1.encoding + ")"), i$3(">>"), i$3(">>"), i$3("endobj"), n$1.objectNumber = a$1(), i$3("<<"), i$3("/Type /Font"), i$3("/Subtype /Type0"), i$3("/ToUnicode " + f$1 + " 0 R"), i$3("/BaseFont /" + j(n$1.fontName)), i$3("/Encoding /" + n$1.encoding), i$3("/DescendantFonts [" + p$1 + " 0 R]"), i$3(">>"), i$3("endobj"), n$1.isAlreadyPutted = !0;
			}
		})(e$1);
	}]), e.events.push(["putFont", function(e$1) {
		(function(e$2) {
			var n$1 = e$2.font, i$3 = e$2.out, a$1 = e$2.newObject, o$1 = e$2.putStream;
			if (n$1.metadata instanceof t.API.TTFFont && "WinAnsiEncoding" === n$1.encoding) {
				for (var s$1 = n$1.metadata.rawData, u$1 = "", c$1 = 0; c$1 < s$1.length; c$1++) u$1 += String.fromCharCode(s$1[c$1]);
				var l$1 = a$1();
				o$1({
					data: u$1,
					addLength1: !0,
					objectId: l$1
				}), i$3("endobj");
				var h$1 = a$1();
				o$1({
					data: r(n$1.metadata.toUnicode),
					addLength1: !0,
					objectId: h$1
				}), i$3("endobj");
				var f$1 = a$1();
				i$3("<<"), i$3("/Descent " + n$1.metadata.decender), i$3("/CapHeight " + n$1.metadata.capHeight), i$3("/StemV " + n$1.metadata.stemV), i$3("/Type /FontDescriptor"), i$3("/FontFile2 " + l$1 + " 0 R"), i$3("/Flags 96"), i$3("/FontBBox " + t.API.PDFObject.convert(n$1.metadata.bbox)), i$3("/FontName /" + j(n$1.fontName)), i$3("/ItalicAngle " + n$1.metadata.italicAngle), i$3("/Ascent " + n$1.metadata.ascender), i$3(">>"), i$3("endobj"), n$1.objectNumber = a$1();
				for (var d$1 = 0; d$1 < n$1.metadata.hmtx.widths.length; d$1++) n$1.metadata.hmtx.widths[d$1] = parseInt(n$1.metadata.hmtx.widths[d$1] * (1e3 / n$1.metadata.head.unitsPerEm));
				i$3("<</Subtype/TrueType/Type/Font/ToUnicode " + h$1 + " 0 R/BaseFont/" + j(n$1.fontName) + "/FontDescriptor " + f$1 + " 0 R/Encoding/" + n$1.encoding + " /FirstChar 29 /LastChar 255 /Widths " + t.API.PDFObject.convert(n$1.metadata.hmtx.widths) + ">>"), i$3("endobj"), n$1.isAlreadyPutted = !0;
			}
		})(e$1);
	}]);
	var i$2 = function(t$1) {
		var e$1, r$1 = t$1.text || "", i$3 = t$1.x, a$1 = t$1.y, o$1 = t$1.options || {}, s$1 = t$1.mutex || {}, u$1 = s$1.pdfEscape, c$1 = s$1.activeFontKey, l$1 = s$1.fonts, h$1 = c$1, f$1 = "", d$1 = 0, p$1 = "", g$1 = l$1[h$1].encoding;
		if ("Identity-H" !== l$1[h$1].encoding) return {
			text: r$1,
			x: i$3,
			y: a$1,
			options: o$1,
			mutex: s$1
		};
		for (p$1 = r$1, h$1 = c$1, Array.isArray(r$1) && (p$1 = r$1[0]), d$1 = 0; d$1 < p$1.length; d$1 += 1) l$1[h$1].metadata.hasOwnProperty("cmap") && (e$1 = l$1[h$1].metadata.cmap.unicode.codeMap[p$1[d$1].charCodeAt(0)]), e$1 || p$1[d$1].charCodeAt(0) < 256 && l$1[h$1].metadata.hasOwnProperty("Unicode") ? f$1 += p$1[d$1] : f$1 += "";
		var m$1 = "";
		return parseInt(h$1.slice(1)) < 14 || "WinAnsiEncoding" === g$1 ? m$1 = u$1(f$1, h$1).split("").map(function(t$2) {
			return t$2.charCodeAt(0).toString(16);
		}).join("") : "Identity-H" === g$1 && (m$1 = n(f$1, l$1[h$1])), s$1.isHex = !0, {
			text: m$1,
			x: i$3,
			y: a$1,
			options: o$1,
			mutex: s$1
		};
	};
	e.events.push(["postProcessText", function(t$1) {
		var e$1 = t$1.text || "", n$1 = [], r$1 = {
			text: e$1,
			x: t$1.x,
			y: t$1.y,
			options: t$1.options,
			mutex: t$1.mutex
		};
		if (Array.isArray(e$1)) {
			var a$1 = 0;
			for (a$1 = 0; a$1 < e$1.length; a$1 += 1) Array.isArray(e$1[a$1]) && 3 === e$1[a$1].length ? n$1.push([
				i$2(Object.assign({}, r$1, { text: e$1[a$1][0] })).text,
				e$1[a$1][1],
				e$1[a$1][2]
			]) : n$1.push(i$2(Object.assign({}, r$1, { text: e$1[a$1] })).text);
			t$1.text = n$1;
		} else t$1.text = i$2(Object.assign({}, r$1, { text: e$1 })).text;
	}]);
}(E), function(t) {
	var e = function() {
		return void 0 === this.internal.vFS && (this.internal.vFS = {}), !0;
	};
	t.existsFileInVFS = function(t$1) {
		return e.call(this), void 0 !== this.internal.vFS[t$1];
	}, t.addFileToVFS = function(t$1, n) {
		return e.call(this), this.internal.vFS[t$1] = n, this;
	}, t.getFileFromVFS = function(t$1) {
		return e.call(this), void 0 !== this.internal.vFS[t$1] ? this.internal.vFS[t$1] : null;
	};
}(E.API), function(t) {
	t.__bidiEngine__ = t.prototype.__bidiEngine__ = function(t$1) {
		var n$1, r, i$2, a$1, o$1, s$1, u$1, c$1 = e, l$1 = [
			[
				0,
				3,
				0,
				1,
				0,
				0,
				0
			],
			[
				0,
				3,
				0,
				1,
				2,
				2,
				0
			],
			[
				0,
				3,
				0,
				17,
				2,
				0,
				1
			],
			[
				0,
				3,
				5,
				5,
				4,
				1,
				0
			],
			[
				0,
				3,
				21,
				21,
				4,
				0,
				1
			],
			[
				0,
				3,
				5,
				5,
				4,
				2,
				0
			]
		], h$1 = [
			[
				2,
				0,
				1,
				1,
				0,
				1,
				0
			],
			[
				2,
				0,
				1,
				1,
				0,
				2,
				0
			],
			[
				2,
				0,
				2,
				1,
				3,
				2,
				0
			],
			[
				2,
				0,
				2,
				33,
				3,
				1,
				1
			]
		], f$1 = {
			L: 0,
			R: 1,
			EN: 2,
			AN: 3,
			N: 4,
			B: 5,
			S: 6
		}, d$1 = {
			0: 0,
			5: 1,
			6: 2,
			7: 3,
			32: 4,
			251: 5,
			254: 6,
			255: 7
		}, p$1 = [
			"(",
			")",
			"(",
			"<",
			">",
			"<",
			"[",
			"]",
			"[",
			"{",
			"}",
			"{",
			"«",
			"»",
			"«",
			"‹",
			"›",
			"‹",
			"⁅",
			"⁆",
			"⁅",
			"⁽",
			"⁾",
			"⁽",
			"₍",
			"₎",
			"₍",
			"≤",
			"≥",
			"≤",
			"〈",
			"〉",
			"〈",
			"﹙",
			"﹚",
			"﹙",
			"﹛",
			"﹜",
			"﹛",
			"﹝",
			"﹞",
			"﹝",
			"﹤",
			"﹥",
			"﹤"
		], g$1 = /* @__PURE__ */ new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), m$1 = !1, v$1 = 0;
		this.__bidiEngine__ = {};
		var b$1 = function(t$2) {
			var e$1 = t$2.charCodeAt(), n$2 = e$1 >> 8, r$1 = d$1[n$2];
			return void 0 !== r$1 ? c$1[256 * r$1 + (255 & e$1)] : 252 === n$2 || 253 === n$2 ? "AL" : g$1.test(n$2) ? "L" : 8 === n$2 ? "R" : "N";
		}, y$1 = function(t$2) {
			for (var e$1, n$2 = 0; n$2 < t$2.length; n$2++) {
				if ("L" === (e$1 = b$1(t$2.charAt(n$2)))) return !1;
				if ("R" === e$1) return !0;
			}
			return !1;
		}, w$1 = function(t$2, e$1, o$2, s$2) {
			var u$2, c$2, l$2, h$2, f$2 = e$1[s$2];
			switch (f$2) {
				case "L":
				case "R":
				case "LRE":
				case "RLE":
				case "LRO":
				case "RLO":
				case "PDF":
					m$1 = !1;
					break;
				case "N":
				case "AN": break;
				case "EN":
					m$1 && (f$2 = "AN");
					break;
				case "AL":
					m$1 = !0, f$2 = "R";
					break;
				case "WS":
				case "BN":
					f$2 = "N";
					break;
				case "CS":
					s$2 < 1 || s$2 + 1 >= e$1.length || "EN" !== (u$2 = o$2[s$2 - 1]) && "AN" !== u$2 || "EN" !== (c$2 = e$1[s$2 + 1]) && "AN" !== c$2 ? f$2 = "N" : m$1 && (c$2 = "AN"), f$2 = c$2 === u$2 ? c$2 : "N";
					break;
				case "ES":
					f$2 = "EN" === (u$2 = s$2 > 0 ? o$2[s$2 - 1] : "B") && s$2 + 1 < e$1.length && "EN" === e$1[s$2 + 1] ? "EN" : "N";
					break;
				case "ET":
					if (s$2 > 0 && "EN" === o$2[s$2 - 1]) {
						f$2 = "EN";
						break;
					}
					if (m$1) {
						f$2 = "N";
						break;
					}
					for (l$2 = s$2 + 1, h$2 = e$1.length; l$2 < h$2 && "ET" === e$1[l$2];) l$2++;
					f$2 = l$2 < h$2 && "EN" === e$1[l$2] ? "EN" : "N";
					break;
				case "NSM":
					if (i$2 && !a$1) {
						for (h$2 = e$1.length, l$2 = s$2 + 1; l$2 < h$2 && "NSM" === e$1[l$2];) l$2++;
						if (l$2 < h$2) {
							var d$2 = t$2[s$2], p$2 = d$2 >= 1425 && d$2 <= 2303 || 64286 === d$2;
							if (u$2 = e$1[l$2], p$2 && ("R" === u$2 || "AL" === u$2)) {
								f$2 = "R";
								break;
							}
						}
					}
					f$2 = s$2 < 1 || "B" === (u$2 = e$1[s$2 - 1]) ? "N" : o$2[s$2 - 1];
					break;
				case "B":
					m$1 = !1, n$1 = !0, f$2 = v$1;
					break;
				case "S": r = !0, f$2 = "N";
			}
			return f$2;
		}, N$1 = function(t$2, e$1, n$2) {
			var r$1 = t$2.split("");
			return n$2 && L$1(r$1, n$2, { hiLevel: v$1 }), r$1.reverse(), e$1 && e$1.reverse(), r$1.join("");
		}, L$1 = function(t$2, e$1, i$3) {
			var a$2, o$2, s$2, u$2, c$2, d$2 = -1, p$2 = t$2.length, g$2 = 0, y$2 = [], N$2 = v$1 ? h$1 : l$1, L$2 = [];
			for (m$1 = !1, n$1 = !1, r = !1, o$2 = 0; o$2 < p$2; o$2++) L$2[o$2] = b$1(t$2[o$2]);
			for (s$2 = 0; s$2 < p$2; s$2++) {
				if (c$2 = g$2, y$2[s$2] = w$1(t$2, L$2, y$2, s$2), a$2 = 240 & (g$2 = N$2[c$2][f$1[y$2[s$2]]]), g$2 &= 15, e$1[s$2] = u$2 = N$2[g$2][5], a$2 > 0) if (16 === a$2) {
					for (o$2 = d$2; o$2 < s$2; o$2++) e$1[o$2] = 1;
					d$2 = -1;
				} else d$2 = -1;
				if (N$2[g$2][6]) -1 === d$2 && (d$2 = s$2);
				else if (d$2 > -1) {
					for (o$2 = d$2; o$2 < s$2; o$2++) e$1[o$2] = u$2;
					d$2 = -1;
				}
				"B" === L$2[s$2] && (e$1[s$2] = 0), i$3.hiLevel |= u$2;
			}
			r && function(t$3, e$2, n$2) {
				for (var r$1 = 0; r$1 < n$2; r$1++) if ("S" === t$3[r$1]) {
					e$2[r$1] = v$1;
					for (var i$4 = r$1 - 1; i$4 >= 0 && "WS" === t$3[i$4]; i$4--) e$2[i$4] = v$1;
				}
			}(L$2, e$1, p$2);
		}, x$2 = function(t$2, e$1, r$1, i$3, a$2) {
			if (!(a$2.hiLevel < t$2)) {
				if (1 === t$2 && 1 === v$1 && !n$1) return e$1.reverse(), void (r$1 && r$1.reverse());
				for (var o$2, s$2, u$2, c$2, l$2 = e$1.length, h$2 = 0; h$2 < l$2;) {
					if (i$3[h$2] >= t$2) {
						for (u$2 = h$2 + 1; u$2 < l$2 && i$3[u$2] >= t$2;) u$2++;
						for (c$2 = h$2, s$2 = u$2 - 1; c$2 < s$2; c$2++, s$2--) o$2 = e$1[c$2], e$1[c$2] = e$1[s$2], e$1[s$2] = o$2, r$1 && (o$2 = r$1[c$2], r$1[c$2] = r$1[s$2], r$1[s$2] = o$2);
						h$2 = u$2;
					}
					h$2++;
				}
			}
		}, A$1 = function(t$2, e$1, n$2) {
			var r$1 = t$2.split(""), i$3 = { hiLevel: v$1 };
			return n$2 || (n$2 = []), L$1(r$1, n$2, i$3), function(t$3, e$2, n$3) {
				if (0 !== n$3.hiLevel && u$1) for (var r$2, i$4 = 0; i$4 < t$3.length; i$4++) 1 === e$2[i$4] && (r$2 = p$1.indexOf(t$3[i$4])) >= 0 && (t$3[i$4] = p$1[r$2 + 1]);
			}(r$1, n$2, i$3), x$2(2, r$1, e$1, n$2, i$3), x$2(1, r$1, e$1, n$2, i$3), r$1.join("");
		};
		return this.__bidiEngine__.doBidiReorder = function(t$2, e$1, n$2) {
			if (function(t$3, e$2) {
				if (e$2) for (var n$3 = 0; n$3 < t$3.length; n$3++) e$2[n$3] = n$3;
				void 0 === a$1 && (a$1 = y$1(t$3)), void 0 === s$1 && (s$1 = y$1(t$3));
			}(t$2, e$1), i$2 || !o$1 || s$1) if (i$2 && o$1 && a$1 ^ s$1) v$1 = a$1 ? 1 : 0, t$2 = N$1(t$2, e$1, n$2);
			else if (!i$2 && o$1 && s$1) v$1 = a$1 ? 1 : 0, t$2 = A$1(t$2, e$1, n$2), t$2 = N$1(t$2, e$1);
			else if (!i$2 || a$1 || o$1 || s$1) {
				if (i$2 && !o$1 && a$1 ^ s$1) t$2 = N$1(t$2, e$1), a$1 ? (v$1 = 0, t$2 = A$1(t$2, e$1, n$2)) : (v$1 = 1, t$2 = A$1(t$2, e$1, n$2), t$2 = N$1(t$2, e$1));
				else if (i$2 && a$1 && !o$1 && s$1) v$1 = 1, t$2 = A$1(t$2, e$1, n$2), t$2 = N$1(t$2, e$1);
				else if (!i$2 && !o$1 && a$1 ^ s$1) {
					var r$1 = u$1;
					a$1 ? (v$1 = 1, t$2 = A$1(t$2, e$1, n$2), v$1 = 0, u$1 = !1, t$2 = A$1(t$2, e$1, n$2), u$1 = r$1) : (v$1 = 0, t$2 = A$1(t$2, e$1, n$2), t$2 = N$1(t$2, e$1), v$1 = 1, u$1 = !1, t$2 = A$1(t$2, e$1, n$2), u$1 = r$1, t$2 = N$1(t$2, e$1));
				}
			} else v$1 = 0, t$2 = A$1(t$2, e$1, n$2);
			else v$1 = a$1 ? 1 : 0, t$2 = A$1(t$2, e$1, n$2);
			return t$2;
		}, this.__bidiEngine__.setOptions = function(t$2) {
			t$2 && (i$2 = t$2.isInputVisual, o$1 = t$2.isOutputVisual, a$1 = t$2.isInputRtl, s$1 = t$2.isOutputRtl, u$1 = t$2.isSymmetricSwapping);
		}, this.__bidiEngine__.setOptions(t$1), this.__bidiEngine__;
	};
	var e = [
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"S",
		"B",
		"S",
		"WS",
		"B",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"B",
		"B",
		"B",
		"S",
		"WS",
		"N",
		"N",
		"ET",
		"ET",
		"ET",
		"N",
		"N",
		"N",
		"N",
		"N",
		"ES",
		"CS",
		"ES",
		"CS",
		"CS",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"CS",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"N",
		"N",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"B",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"CS",
		"N",
		"ET",
		"ET",
		"ET",
		"ET",
		"N",
		"N",
		"N",
		"N",
		"L",
		"N",
		"N",
		"BN",
		"N",
		"N",
		"ET",
		"ET",
		"EN",
		"EN",
		"N",
		"L",
		"N",
		"N",
		"N",
		"EN",
		"L",
		"N",
		"N",
		"N",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"L",
		"N",
		"N",
		"N",
		"N",
		"N",
		"ET",
		"N",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"R",
		"NSM",
		"R",
		"NSM",
		"NSM",
		"R",
		"NSM",
		"NSM",
		"R",
		"NSM",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"N",
		"N",
		"N",
		"N",
		"N",
		"R",
		"R",
		"R",
		"R",
		"R",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"AN",
		"AN",
		"AN",
		"AN",
		"AN",
		"AN",
		"N",
		"N",
		"AL",
		"ET",
		"ET",
		"AL",
		"CS",
		"AL",
		"N",
		"N",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"AL",
		"AL",
		"N",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"AN",
		"AN",
		"AN",
		"AN",
		"AN",
		"AN",
		"AN",
		"AN",
		"AN",
		"AN",
		"ET",
		"AN",
		"AN",
		"AL",
		"AL",
		"AL",
		"NSM",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"AN",
		"N",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"AL",
		"AL",
		"NSM",
		"NSM",
		"N",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"AL",
		"AL",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"N",
		"AL",
		"AL",
		"NSM",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"N",
		"N",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"AL",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"R",
		"R",
		"N",
		"N",
		"N",
		"N",
		"R",
		"N",
		"N",
		"N",
		"N",
		"N",
		"WS",
		"WS",
		"WS",
		"WS",
		"WS",
		"WS",
		"WS",
		"WS",
		"WS",
		"WS",
		"WS",
		"BN",
		"BN",
		"BN",
		"L",
		"R",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"WS",
		"B",
		"LRE",
		"RLE",
		"PDF",
		"LRO",
		"RLO",
		"CS",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"CS",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"WS",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"N",
		"LRI",
		"RLI",
		"FSI",
		"PDI",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"BN",
		"EN",
		"L",
		"N",
		"N",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"ES",
		"ES",
		"N",
		"N",
		"N",
		"L",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"ES",
		"ES",
		"N",
		"N",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"N",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"ET",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"N",
		"N",
		"N",
		"R",
		"NSM",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"ES",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"N",
		"R",
		"R",
		"R",
		"R",
		"R",
		"N",
		"R",
		"N",
		"R",
		"R",
		"N",
		"R",
		"R",
		"N",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"R",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"NSM",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"CS",
		"N",
		"CS",
		"N",
		"N",
		"CS",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"ET",
		"N",
		"N",
		"ES",
		"ES",
		"N",
		"N",
		"N",
		"N",
		"N",
		"ET",
		"ET",
		"N",
		"N",
		"N",
		"N",
		"N",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"N",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"AL",
		"N",
		"N",
		"BN",
		"N",
		"N",
		"N",
		"ET",
		"ET",
		"ET",
		"N",
		"N",
		"N",
		"N",
		"N",
		"ES",
		"CS",
		"ES",
		"CS",
		"CS",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"EN",
		"CS",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"L",
		"L",
		"L",
		"L",
		"L",
		"L",
		"N",
		"N",
		"L",
		"L",
		"L",
		"N",
		"N",
		"N",
		"ET",
		"ET",
		"N",
		"N",
		"N",
		"ET",
		"ET",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N",
		"N"
	], n = new t.__bidiEngine__({ isInputVisual: !0 });
	t.API.events.push(["postProcessText", function(t$1) {
		var e$1 = t$1.text;
		t$1.x, t$1.y;
		var r = t$1.options || {};
		t$1.mutex, r.lang;
		var i$2 = [];
		if (r.isInputVisual = "boolean" != typeof r.isInputVisual || r.isInputVisual, n.setOptions(r), "[object Array]" === Object.prototype.toString.call(e$1)) {
			var a$1 = 0;
			for (i$2 = [], a$1 = 0; a$1 < e$1.length; a$1 += 1) "[object Array]" === Object.prototype.toString.call(e$1[a$1]) ? i$2.push([
				n.doBidiReorder(e$1[a$1][0]),
				e$1[a$1][1],
				e$1[a$1][2]
			]) : i$2.push([n.doBidiReorder(e$1[a$1])]);
			t$1.text = i$2;
		} else t$1.text = n.doBidiReorder(e$1);
		n.setOptions({ isInputVisual: !0 });
	}]);
}(E), E.API.TTFFont = function() {
	function t(t$1) {
		var e;
		if (this.rawData = t$1, e = this.contents = new fe(t$1), this.contents.pos = 4, "ttcf" === e.readString(4)) throw new Error("TTCF not supported.");
		e.pos = 0, this.parse(), this.subset = new je(this), this.registerTTF();
	}
	return t.open = function(e) {
		return new t(e);
	}, t.prototype.parse = function() {
		return this.directory = new de(this.contents), this.head = new me(this), this.name = new xe(this), this.cmap = new be(this), this.toUnicode = {}, this.hhea = new ye(this), this.maxp = new Ae(this), this.hmtx = new Se(this), this.post = new Ne(this), this.os2 = new we(this), this.loca = new Ie(this), this.glyf = new Pe(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [
			this.head.xMin,
			this.head.yMin,
			this.head.xMax,
			this.head.yMax
		];
	}, t.prototype.registerTTF = function() {
		var t$1, e, n, r, i$2;
		if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() {
			var e$1, n$1, r$1, i$3;
			for (i$3 = [], e$1 = 0, n$1 = (r$1 = this.bbox).length; e$1 < n$1; e$1++) t$1 = r$1[e$1], i$3.push(Math.round(t$1 * this.scaleFactor));
			return i$3;
		}.call(this), this.stemV = 0, this.post.exists ? (n = 255 & (r = this.post.italic_angle), 32768 & (e = r >> 16) && (e = -(1 + (65535 ^ e))), this.italicAngle = +(e + "." + n)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (i$2 = this.familyClass) || 2 === i$2 || 3 === i$2 || 4 === i$2 || 5 === i$2 || 7 === i$2, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
	}, t.prototype.characterToGlyph = function(t$1) {
		var e;
		return (null != (e = this.cmap.unicode) ? e.codeMap[t$1] : void 0) || 0;
	}, t.prototype.widthOfGlyph = function(t$1) {
		var e;
		return e = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t$1).advance * e;
	}, t.prototype.widthOfString = function(t$1, e, n) {
		var r, i$2, a$1, o$1;
		for (a$1 = 0, i$2 = 0, o$1 = (t$1 = "" + t$1).length; 0 <= o$1 ? i$2 < o$1 : i$2 > o$1; i$2 = 0 <= o$1 ? ++i$2 : --i$2) r = t$1.charCodeAt(i$2), a$1 += this.widthOfGlyph(this.characterToGlyph(r)) + n * (1e3 / e) || 0;
		return a$1 * (e / 1e3);
	}, t.prototype.lineHeight = function(t$1, e) {
		var n;
		return e ??= !1, n = e ? this.lineGap : 0, (this.ascender + n - this.decender) / 1e3 * t$1;
	}, t;
}();
var he, fe = function() {
	function t(t$1) {
		this.data = null != t$1 ? t$1 : [], this.pos = 0, this.length = this.data.length;
	}
	return t.prototype.readByte = function() {
		return this.data[this.pos++];
	}, t.prototype.writeByte = function(t$1) {
		return this.data[this.pos++] = t$1;
	}, t.prototype.readUInt32 = function() {
		return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
	}, t.prototype.writeUInt32 = function(t$1) {
		return this.writeByte(t$1 >>> 24 & 255), this.writeByte(t$1 >> 16 & 255), this.writeByte(t$1 >> 8 & 255), this.writeByte(255 & t$1);
	}, t.prototype.readInt32 = function() {
		var t$1;
		return (t$1 = this.readUInt32()) >= 2147483648 ? t$1 - 4294967296 : t$1;
	}, t.prototype.writeInt32 = function(t$1) {
		return t$1 < 0 && (t$1 += 4294967296), this.writeUInt32(t$1);
	}, t.prototype.readUInt16 = function() {
		return this.readByte() << 8 | this.readByte();
	}, t.prototype.writeUInt16 = function(t$1) {
		return this.writeByte(t$1 >> 8 & 255), this.writeByte(255 & t$1);
	}, t.prototype.readInt16 = function() {
		var t$1;
		return (t$1 = this.readUInt16()) >= 32768 ? t$1 - 65536 : t$1;
	}, t.prototype.writeInt16 = function(t$1) {
		return t$1 < 0 && (t$1 += 65536), this.writeUInt16(t$1);
	}, t.prototype.readString = function(t$1) {
		var e, n;
		for (n = [], e = 0; 0 <= t$1 ? e < t$1 : e > t$1; e = 0 <= t$1 ? ++e : --e) n[e] = String.fromCharCode(this.readByte());
		return n.join("");
	}, t.prototype.writeString = function(t$1) {
		var e, n, r;
		for (r = [], e = 0, n = t$1.length; 0 <= n ? e < n : e > n; e = 0 <= n ? ++e : --e) r.push(this.writeByte(t$1.charCodeAt(e)));
		return r;
	}, t.prototype.readShort = function() {
		return this.readInt16();
	}, t.prototype.writeShort = function(t$1) {
		return this.writeInt16(t$1);
	}, t.prototype.readLongLong = function() {
		var t$1, e, n, r, i$2, a$1, o$1, s$1;
		return t$1 = this.readByte(), e = this.readByte(), n = this.readByte(), r = this.readByte(), i$2 = this.readByte(), a$1 = this.readByte(), o$1 = this.readByte(), s$1 = this.readByte(), 128 & t$1 ? -1 * (72057594037927940 * (255 ^ t$1) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ n) + 4294967296 * (255 ^ r) + 16777216 * (255 ^ i$2) + 65536 * (255 ^ a$1) + 256 * (255 ^ o$1) + (255 ^ s$1) + 1) : 72057594037927940 * t$1 + 281474976710656 * e + 1099511627776 * n + 4294967296 * r + 16777216 * i$2 + 65536 * a$1 + 256 * o$1 + s$1;
	}, t.prototype.writeLongLong = function(t$1) {
		var e, n;
		return e = Math.floor(t$1 / 4294967296), n = 4294967295 & t$1, this.writeByte(e >> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e), this.writeByte(n >> 24 & 255), this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n);
	}, t.prototype.readInt = function() {
		return this.readInt32();
	}, t.prototype.writeInt = function(t$1) {
		return this.writeInt32(t$1);
	}, t.prototype.read = function(t$1) {
		var e, n;
		for (e = [], n = 0; 0 <= t$1 ? n < t$1 : n > t$1; n = 0 <= t$1 ? ++n : --n) e.push(this.readByte());
		return e;
	}, t.prototype.write = function(t$1) {
		var e, n, r, i$2;
		for (i$2 = [], n = 0, r = t$1.length; n < r; n++) e = t$1[n], i$2.push(this.writeByte(e));
		return i$2;
	}, t;
}(), de = function() {
	var t;
	function e(t$1) {
		var e$1, n, r;
		for (this.scalarType = t$1.readInt(), this.tableCount = t$1.readShort(), this.searchRange = t$1.readShort(), this.entrySelector = t$1.readShort(), this.rangeShift = t$1.readShort(), this.tables = {}, n = 0, r = this.tableCount; 0 <= r ? n < r : n > r; n = 0 <= r ? ++n : --n) e$1 = {
			tag: t$1.readString(4),
			checksum: t$1.readInt(),
			offset: t$1.readInt(),
			length: t$1.readInt()
		}, this.tables[e$1.tag] = e$1;
	}
	return e.prototype.encode = function(e$1) {
		var n, r, i$2, a$1, o$1, s$1, u$1, c$1, l$1, h$1, f$1, d$1, p$1;
		for (p$1 in f$1 = Object.keys(e$1).length, s$1 = Math.log(2), l$1 = 16 * Math.floor(Math.log(f$1) / s$1), a$1 = Math.floor(l$1 / s$1), c$1 = 16 * f$1 - l$1, (r = new fe()).writeInt(this.scalarType), r.writeShort(f$1), r.writeShort(l$1), r.writeShort(a$1), r.writeShort(c$1), i$2 = 16 * f$1, u$1 = r.pos + i$2, o$1 = null, d$1 = [], e$1) for (h$1 = e$1[p$1], r.writeString(p$1), r.writeInt(t(h$1)), r.writeInt(u$1), r.writeInt(h$1.length), d$1 = d$1.concat(h$1), "head" === p$1 && (o$1 = u$1), u$1 += h$1.length; u$1 % 4;) d$1.push(0), u$1++;
		return r.write(d$1), n = 2981146554 - t(r.data), r.pos = o$1 + 8, r.writeUInt32(n), r.data;
	}, t = function(t$1) {
		var e$1, n, r, i$2;
		for (t$1 = _e.call(t$1); t$1.length % 4;) t$1.push(0);
		for (r = new fe(t$1), n = 0, e$1 = 0, i$2 = t$1.length; e$1 < i$2; e$1 = e$1 += 4) n += r.readUInt32();
		return 4294967295 & n;
	}, e;
}(), pe = {}.hasOwnProperty, ge = function(t, e) {
	for (var n in e) pe.call(e, n) && (t[n] = e[n]);
	function r() {
		this.constructor = t;
	}
	return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
};
he = function() {
	function t(t$1) {
		var e;
		this.file = t$1, e = this.file.directory.tables[this.tag], this.exists = !!e, e && (this.offset = e.offset, this.length = e.length, this.parse(this.file.contents));
	}
	return t.prototype.parse = function() {}, t.prototype.encode = function() {}, t.prototype.raw = function() {
		return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
	}, t;
}();
var me = function() {
	function t() {
		return t.__super__.constructor.apply(this, arguments);
	}
	return ge(t, he), t.prototype.tag = "head", t.prototype.parse = function(t$1) {
		return t$1.pos = this.offset, this.version = t$1.readInt(), this.revision = t$1.readInt(), this.checkSumAdjustment = t$1.readInt(), this.magicNumber = t$1.readInt(), this.flags = t$1.readShort(), this.unitsPerEm = t$1.readShort(), this.created = t$1.readLongLong(), this.modified = t$1.readLongLong(), this.xMin = t$1.readShort(), this.yMin = t$1.readShort(), this.xMax = t$1.readShort(), this.yMax = t$1.readShort(), this.macStyle = t$1.readShort(), this.lowestRecPPEM = t$1.readShort(), this.fontDirectionHint = t$1.readShort(), this.indexToLocFormat = t$1.readShort(), this.glyphDataFormat = t$1.readShort();
	}, t.prototype.encode = function(t$1) {
		var e;
		return (e = new fe()).writeInt(this.version), e.writeInt(this.revision), e.writeInt(this.checkSumAdjustment), e.writeInt(this.magicNumber), e.writeShort(this.flags), e.writeShort(this.unitsPerEm), e.writeLongLong(this.created), e.writeLongLong(this.modified), e.writeShort(this.xMin), e.writeShort(this.yMin), e.writeShort(this.xMax), e.writeShort(this.yMax), e.writeShort(this.macStyle), e.writeShort(this.lowestRecPPEM), e.writeShort(this.fontDirectionHint), e.writeShort(t$1), e.writeShort(this.glyphDataFormat), e.data;
	}, t;
}(), ve = function() {
	function t(t$1, e) {
		var n, r, i$2, a$1, o$1, s$1, u$1, c$1, l$1, h$1, f$1, d$1, p$1, g$1, m$1, v$1, b$1;
		switch (this.platformID = t$1.readUInt16(), this.encodingID = t$1.readShort(), this.offset = e + t$1.readInt(), l$1 = t$1.pos, t$1.pos = this.offset, this.format = t$1.readUInt16(), this.length = t$1.readUInt16(), this.language = t$1.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format) {
			case 0:
				for (s$1 = 0; s$1 < 256; ++s$1) this.codeMap[s$1] = t$1.readByte();
				break;
			case 4: for (f$1 = t$1.readUInt16(), h$1 = f$1 / 2, t$1.pos += 6, i$2 = function() {
				var e$1, n$1;
				for (n$1 = [], s$1 = e$1 = 0; 0 <= h$1 ? e$1 < h$1 : e$1 > h$1; s$1 = 0 <= h$1 ? ++e$1 : --e$1) n$1.push(t$1.readUInt16());
				return n$1;
			}(), t$1.pos += 2, p$1 = function() {
				var e$1, n$1;
				for (n$1 = [], s$1 = e$1 = 0; 0 <= h$1 ? e$1 < h$1 : e$1 > h$1; s$1 = 0 <= h$1 ? ++e$1 : --e$1) n$1.push(t$1.readUInt16());
				return n$1;
			}(), u$1 = function() {
				var e$1, n$1;
				for (n$1 = [], s$1 = e$1 = 0; 0 <= h$1 ? e$1 < h$1 : e$1 > h$1; s$1 = 0 <= h$1 ? ++e$1 : --e$1) n$1.push(t$1.readUInt16());
				return n$1;
			}(), c$1 = function() {
				var e$1, n$1;
				for (n$1 = [], s$1 = e$1 = 0; 0 <= h$1 ? e$1 < h$1 : e$1 > h$1; s$1 = 0 <= h$1 ? ++e$1 : --e$1) n$1.push(t$1.readUInt16());
				return n$1;
			}(), r = (this.length - t$1.pos + this.offset) / 2, o$1 = function() {
				var e$1, n$1;
				for (n$1 = [], s$1 = e$1 = 0; 0 <= r ? e$1 < r : e$1 > r; s$1 = 0 <= r ? ++e$1 : --e$1) n$1.push(t$1.readUInt16());
				return n$1;
			}(), s$1 = m$1 = 0, b$1 = i$2.length; m$1 < b$1; s$1 = ++m$1) for (g$1 = i$2[s$1], n = v$1 = d$1 = p$1[s$1]; d$1 <= g$1 ? v$1 <= g$1 : v$1 >= g$1; n = d$1 <= g$1 ? ++v$1 : --v$1) 0 === c$1[s$1] ? a$1 = n + u$1[s$1] : 0 !== (a$1 = o$1[c$1[s$1] / 2 + (n - d$1) - (h$1 - s$1)] || 0) && (a$1 += u$1[s$1]), this.codeMap[n] = 65535 & a$1;
		}
		t$1.pos = l$1;
	}
	return t.encode = function(t$1, e) {
		var n, r, i$2, a$1, o$1, s$1, u$1, c$1, l$1, h$1, f$1, d$1, p$1, g$1, m$1, v$1, b$1, y$1, w$1, N$1, L$1, x$2, A$1, S$1, _$1, P$1, k$1, F$1, I$1, j$1, C$1, O$1, B$1, M$1, q$1, E$1, R$1, D$1, T$1, z$1, U$1, H$1, W$1, V$1, G$1, Y$1;
		switch (F$1 = new fe(), a$1 = Object.keys(t$1).sort(function(t$2, e$1) {
			return t$2 - e$1;
		}), e) {
			case "macroman":
				for (p$1 = 0, g$1 = function() {
					var t$2 = [];
					for (d$1 = 0; d$1 < 256; ++d$1) t$2.push(0);
					return t$2;
				}(), v$1 = { 0: 0 }, i$2 = {}, I$1 = 0, B$1 = a$1.length; I$1 < B$1; I$1++) v$1[W$1 = t$1[r = a$1[I$1]]] ?? (v$1[W$1] = ++p$1), i$2[r] = {
					old: t$1[r],
					new: v$1[t$1[r]]
				}, g$1[r] = v$1[t$1[r]];
				return F$1.writeUInt16(1), F$1.writeUInt16(0), F$1.writeUInt32(12), F$1.writeUInt16(0), F$1.writeUInt16(262), F$1.writeUInt16(0), F$1.write(g$1), {
					charMap: i$2,
					subtable: F$1.data,
					maxGlyphID: p$1 + 1
				};
			case "unicode":
				for (P$1 = [], l$1 = [], b$1 = 0, v$1 = {}, n = {}, m$1 = u$1 = null, j$1 = 0, M$1 = a$1.length; j$1 < M$1; j$1++) v$1[w$1 = t$1[r = a$1[j$1]]] ?? (v$1[w$1] = ++b$1), n[r] = {
					old: w$1,
					new: v$1[w$1]
				}, o$1 = v$1[w$1] - r, null != m$1 && o$1 === u$1 || (m$1 && l$1.push(m$1), P$1.push(r), u$1 = o$1), m$1 = r;
				for (m$1 && l$1.push(m$1), l$1.push(65535), P$1.push(65535), S$1 = 2 * (A$1 = P$1.length), x$2 = 2 * Math.pow(Math.log(A$1) / Math.LN2, 2), h$1 = Math.log(x$2 / 2) / Math.LN2, L$1 = 2 * A$1 - x$2, s$1 = [], N$1 = [], f$1 = [], d$1 = C$1 = 0, q$1 = P$1.length; C$1 < q$1; d$1 = ++C$1) {
					if (_$1 = P$1[d$1], c$1 = l$1[d$1], 65535 === _$1) {
						s$1.push(0), N$1.push(0);
						break;
					}
					if (_$1 - (k$1 = n[_$1].new) >= 32768) for (s$1.push(0), N$1.push(2 * (f$1.length + A$1 - d$1)), r = O$1 = _$1; _$1 <= c$1 ? O$1 <= c$1 : O$1 >= c$1; r = _$1 <= c$1 ? ++O$1 : --O$1) f$1.push(n[r].new);
					else s$1.push(k$1 - _$1), N$1.push(0);
				}
				for (F$1.writeUInt16(3), F$1.writeUInt16(1), F$1.writeUInt32(12), F$1.writeUInt16(4), F$1.writeUInt16(16 + 8 * A$1 + 2 * f$1.length), F$1.writeUInt16(0), F$1.writeUInt16(S$1), F$1.writeUInt16(x$2), F$1.writeUInt16(h$1), F$1.writeUInt16(L$1), U$1 = 0, E$1 = l$1.length; U$1 < E$1; U$1++) r = l$1[U$1], F$1.writeUInt16(r);
				for (F$1.writeUInt16(0), H$1 = 0, R$1 = P$1.length; H$1 < R$1; H$1++) r = P$1[H$1], F$1.writeUInt16(r);
				for (V$1 = 0, D$1 = s$1.length; V$1 < D$1; V$1++) o$1 = s$1[V$1], F$1.writeUInt16(o$1);
				for (G$1 = 0, T$1 = N$1.length; G$1 < T$1; G$1++) y$1 = N$1[G$1], F$1.writeUInt16(y$1);
				for (Y$1 = 0, z$1 = f$1.length; Y$1 < z$1; Y$1++) p$1 = f$1[Y$1], F$1.writeUInt16(p$1);
				return {
					charMap: n,
					subtable: F$1.data,
					maxGlyphID: b$1 + 1
				};
		}
	}, t;
}(), be = function() {
	function t() {
		return t.__super__.constructor.apply(this, arguments);
	}
	return ge(t, he), t.prototype.tag = "cmap", t.prototype.parse = function(t$1) {
		var e, n, r;
		for (t$1.pos = this.offset, this.version = t$1.readUInt16(), r = t$1.readUInt16(), this.tables = [], this.unicode = null, n = 0; 0 <= r ? n < r : n > r; n = 0 <= r ? ++n : --n) e = new ve(t$1, this.offset), this.tables.push(e), e.isUnicode && null == this.unicode && (this.unicode = e);
		return !0;
	}, t.encode = function(t$1, e) {
		var n, r;
		return e ??= "macroman", n = ve.encode(t$1, e), (r = new fe()).writeUInt16(0), r.writeUInt16(1), n.table = r.data.concat(n.subtable), n;
	}, t;
}(), ye = function() {
	function t() {
		return t.__super__.constructor.apply(this, arguments);
	}
	return ge(t, he), t.prototype.tag = "hhea", t.prototype.parse = function(t$1) {
		return t$1.pos = this.offset, this.version = t$1.readInt(), this.ascender = t$1.readShort(), this.decender = t$1.readShort(), this.lineGap = t$1.readShort(), this.advanceWidthMax = t$1.readShort(), this.minLeftSideBearing = t$1.readShort(), this.minRightSideBearing = t$1.readShort(), this.xMaxExtent = t$1.readShort(), this.caretSlopeRise = t$1.readShort(), this.caretSlopeRun = t$1.readShort(), this.caretOffset = t$1.readShort(), t$1.pos += 8, this.metricDataFormat = t$1.readShort(), this.numberOfMetrics = t$1.readUInt16();
	}, t;
}(), we = function() {
	function t() {
		return t.__super__.constructor.apply(this, arguments);
	}
	return ge(t, he), t.prototype.tag = "OS/2", t.prototype.parse = function(t$1) {
		if (t$1.pos = this.offset, this.version = t$1.readUInt16(), this.averageCharWidth = t$1.readShort(), this.weightClass = t$1.readUInt16(), this.widthClass = t$1.readUInt16(), this.type = t$1.readShort(), this.ySubscriptXSize = t$1.readShort(), this.ySubscriptYSize = t$1.readShort(), this.ySubscriptXOffset = t$1.readShort(), this.ySubscriptYOffset = t$1.readShort(), this.ySuperscriptXSize = t$1.readShort(), this.ySuperscriptYSize = t$1.readShort(), this.ySuperscriptXOffset = t$1.readShort(), this.ySuperscriptYOffset = t$1.readShort(), this.yStrikeoutSize = t$1.readShort(), this.yStrikeoutPosition = t$1.readShort(), this.familyClass = t$1.readShort(), this.panose = function() {
			var e, n;
			for (n = [], e = 0; e < 10; ++e) n.push(t$1.readByte());
			return n;
		}(), this.charRange = function() {
			var e, n;
			for (n = [], e = 0; e < 4; ++e) n.push(t$1.readInt());
			return n;
		}(), this.vendorID = t$1.readString(4), this.selection = t$1.readShort(), this.firstCharIndex = t$1.readShort(), this.lastCharIndex = t$1.readShort(), this.version > 0 && (this.ascent = t$1.readShort(), this.descent = t$1.readShort(), this.lineGap = t$1.readShort(), this.winAscent = t$1.readShort(), this.winDescent = t$1.readShort(), this.codePageRange = function() {
			var e, n;
			for (n = [], e = 0; e < 2; e = ++e) n.push(t$1.readInt());
			return n;
		}(), this.version > 1)) return this.xHeight = t$1.readShort(), this.capHeight = t$1.readShort(), this.defaultChar = t$1.readShort(), this.breakChar = t$1.readShort(), this.maxContext = t$1.readShort();
	}, t;
}(), Ne = function() {
	function t() {
		return t.__super__.constructor.apply(this, arguments);
	}
	return ge(t, he), t.prototype.tag = "post", t.prototype.parse = function(t$1) {
		var e, n, r;
		switch (t$1.pos = this.offset, this.format = t$1.readInt(), this.italicAngle = t$1.readInt(), this.underlinePosition = t$1.readShort(), this.underlineThickness = t$1.readShort(), this.isFixedPitch = t$1.readInt(), this.minMemType42 = t$1.readInt(), this.maxMemType42 = t$1.readInt(), this.minMemType1 = t$1.readInt(), this.maxMemType1 = t$1.readInt(), this.format) {
			case 65536:
			case 196608: break;
			case 131072:
				var i$2;
				for (n = t$1.readUInt16(), this.glyphNameIndex = [], i$2 = 0; 0 <= n ? i$2 < n : i$2 > n; i$2 = 0 <= n ? ++i$2 : --i$2) this.glyphNameIndex.push(t$1.readUInt16());
				for (this.names = [], r = []; t$1.pos < this.offset + this.length;) e = t$1.readByte(), r.push(this.names.push(t$1.readString(e)));
				return r;
			case 151552: return n = t$1.readUInt16(), this.offsets = t$1.read(n);
			case 262144: return this.map = function() {
				var e$1, n$1, r$1;
				for (r$1 = [], i$2 = e$1 = 0, n$1 = this.file.maxp.numGlyphs; 0 <= n$1 ? e$1 < n$1 : e$1 > n$1; i$2 = 0 <= n$1 ? ++e$1 : --e$1) r$1.push(t$1.readUInt32());
				return r$1;
			}.call(this);
		}
	}, t;
}(), Le = function(t, e) {
	this.raw = t, this.length = t.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
}, xe = function() {
	function t() {
		return t.__super__.constructor.apply(this, arguments);
	}
	return ge(t, he), t.prototype.tag = "name", t.prototype.parse = function(t$1) {
		var e, n, r, i$2, a$1, o$1, s$1, u$1, c$1, l$1, h$1;
		for (t$1.pos = this.offset, t$1.readShort(), e = t$1.readShort(), o$1 = t$1.readShort(), n = [], i$2 = 0; 0 <= e ? i$2 < e : i$2 > e; i$2 = 0 <= e ? ++i$2 : --i$2) n.push({
			platformID: t$1.readShort(),
			encodingID: t$1.readShort(),
			languageID: t$1.readShort(),
			nameID: t$1.readShort(),
			length: t$1.readShort(),
			offset: this.offset + o$1 + t$1.readShort()
		});
		for (s$1 = {}, i$2 = c$1 = 0, l$1 = n.length; c$1 < l$1; i$2 = ++c$1) r = n[i$2], t$1.pos = r.offset, u$1 = t$1.readString(r.length), a$1 = new Le(u$1, r), s$1[h$1 = r.nameID] ?? (s$1[h$1] = []), s$1[r.nameID].push(a$1);
		this.strings = s$1, this.copyright = s$1[0], this.fontFamily = s$1[1], this.fontSubfamily = s$1[2], this.uniqueSubfamily = s$1[3], this.fontName = s$1[4], this.version = s$1[5];
		try {
			this.postscriptName = s$1[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
		} catch (f$1) {
			this.postscriptName = s$1[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
		}
		return this.trademark = s$1[7], this.manufacturer = s$1[8], this.designer = s$1[9], this.description = s$1[10], this.vendorUrl = s$1[11], this.designerUrl = s$1[12], this.license = s$1[13], this.licenseUrl = s$1[14], this.preferredFamily = s$1[15], this.preferredSubfamily = s$1[17], this.compatibleFull = s$1[18], this.sampleText = s$1[19];
	}, t;
}(), Ae = function() {
	function t() {
		return t.__super__.constructor.apply(this, arguments);
	}
	return ge(t, he), t.prototype.tag = "maxp", t.prototype.parse = function(t$1) {
		return t$1.pos = this.offset, this.version = t$1.readInt(), this.numGlyphs = t$1.readUInt16(), this.maxPoints = t$1.readUInt16(), this.maxContours = t$1.readUInt16(), this.maxCompositePoints = t$1.readUInt16(), this.maxComponentContours = t$1.readUInt16(), this.maxZones = t$1.readUInt16(), this.maxTwilightPoints = t$1.readUInt16(), this.maxStorage = t$1.readUInt16(), this.maxFunctionDefs = t$1.readUInt16(), this.maxInstructionDefs = t$1.readUInt16(), this.maxStackElements = t$1.readUInt16(), this.maxSizeOfInstructions = t$1.readUInt16(), this.maxComponentElements = t$1.readUInt16(), this.maxComponentDepth = t$1.readUInt16();
	}, t;
}(), Se = function() {
	function t() {
		return t.__super__.constructor.apply(this, arguments);
	}
	return ge(t, he), t.prototype.tag = "hmtx", t.prototype.parse = function(t$1) {
		var e, n, r, i$2, a$1, o$1, s$1;
		for (t$1.pos = this.offset, this.metrics = [], e = 0, o$1 = this.file.hhea.numberOfMetrics; 0 <= o$1 ? e < o$1 : e > o$1; e = 0 <= o$1 ? ++e : --e) this.metrics.push({
			advance: t$1.readUInt16(),
			lsb: t$1.readInt16()
		});
		for (r = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
			var n$1, i$3;
			for (i$3 = [], e = n$1 = 0; 0 <= r ? n$1 < r : n$1 > r; e = 0 <= r ? ++n$1 : --n$1) i$3.push(t$1.readInt16());
			return i$3;
		}(), this.widths = function() {
			var t$2, e$1, n$1, r$1;
			for (r$1 = [], t$2 = 0, e$1 = (n$1 = this.metrics).length; t$2 < e$1; t$2++) i$2 = n$1[t$2], r$1.push(i$2.advance);
			return r$1;
		}.call(this), n = this.widths[this.widths.length - 1], s$1 = [], e = a$1 = 0; 0 <= r ? a$1 < r : a$1 > r; e = 0 <= r ? ++a$1 : --a$1) s$1.push(this.widths.push(n));
		return s$1;
	}, t.prototype.forGlyph = function(t$1) {
		return t$1 in this.metrics ? this.metrics[t$1] : {
			advance: this.metrics[this.metrics.length - 1].advance,
			lsb: this.leftSideBearings[t$1 - this.metrics.length]
		};
	}, t;
}(), _e = [].slice, Pe = function() {
	function t() {
		return t.__super__.constructor.apply(this, arguments);
	}
	return ge(t, he), t.prototype.tag = "glyf", t.prototype.parse = function() {
		return this.cache = {};
	}, t.prototype.glyphFor = function(t$1) {
		var e, n, r, i$2, a$1, o$1, s$1, u$1, c$1, l$1;
		return t$1 in this.cache ? this.cache[t$1] : (i$2 = this.file.loca, e = this.file.contents, n = i$2.indexOf(t$1), 0 === (r = i$2.lengthOf(t$1)) ? this.cache[t$1] = null : (e.pos = this.offset + n, a$1 = (o$1 = new fe(e.read(r))).readShort(), u$1 = o$1.readShort(), l$1 = o$1.readShort(), s$1 = o$1.readShort(), c$1 = o$1.readShort(), this.cache[t$1] = -1 === a$1 ? new Fe(o$1, u$1, l$1, s$1, c$1) : new ke(o$1, a$1, u$1, l$1, s$1, c$1), this.cache[t$1]));
	}, t.prototype.encode = function(t$1, e, n) {
		var r, i$2, a$1, o$1, s$1;
		for (a$1 = [], i$2 = [], o$1 = 0, s$1 = e.length; o$1 < s$1; o$1++) r = t$1[e[o$1]], i$2.push(a$1.length), r && (a$1 = a$1.concat(r.encode(n)));
		return i$2.push(a$1.length), {
			table: a$1,
			offsets: i$2
		};
	}, t;
}(), ke = function() {
	function t(t$1, e, n, r, i$2, a$1) {
		this.raw = t$1, this.numberOfContours = e, this.xMin = n, this.yMin = r, this.xMax = i$2, this.yMax = a$1, this.compound = !1;
	}
	return t.prototype.encode = function() {
		return this.raw.data;
	}, t;
}(), Fe = function() {
	function t(t$1, e, n, r, i$2) {
		var a$1, o$1;
		for (this.raw = t$1, this.xMin = e, this.yMin = n, this.xMax = r, this.yMax = i$2, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], a$1 = this.raw; o$1 = a$1.readShort(), this.glyphOffsets.push(a$1.pos), this.glyphIDs.push(a$1.readUInt16()), 32 & o$1;) a$1.pos += 1 & o$1 ? 4 : 2, 128 & o$1 ? a$1.pos += 8 : 64 & o$1 ? a$1.pos += 4 : 8 & o$1 && (a$1.pos += 2);
	}
	return t.prototype.encode = function() {
		var t$1, e, n;
		for (e = new fe(_e.call(this.raw.data)), t$1 = 0, n = this.glyphIDs.length; t$1 < n; ++t$1) e.pos = this.glyphOffsets[t$1];
		return e.data;
	}, t;
}(), Ie = function() {
	function t() {
		return t.__super__.constructor.apply(this, arguments);
	}
	return ge(t, he), t.prototype.tag = "loca", t.prototype.parse = function(t$1) {
		var e, n;
		return t$1.pos = this.offset, e = this.file.head.indexToLocFormat, this.offsets = 0 === e ? function() {
			var e$1, r;
			for (r = [], n = 0, e$1 = this.length; n < e$1; n += 2) r.push(2 * t$1.readUInt16());
			return r;
		}.call(this) : function() {
			var e$1, r;
			for (r = [], n = 0, e$1 = this.length; n < e$1; n += 4) r.push(t$1.readUInt32());
			return r;
		}.call(this);
	}, t.prototype.indexOf = function(t$1) {
		return this.offsets[t$1];
	}, t.prototype.lengthOf = function(t$1) {
		return this.offsets[t$1 + 1] - this.offsets[t$1];
	}, t.prototype.encode = function(t$1, e) {
		for (var n = new Uint32Array(this.offsets.length), r = 0, i$2 = 0, a$1 = 0; a$1 < n.length; ++a$1) if (n[a$1] = r, i$2 < e.length && e[i$2] == a$1) {
			++i$2, n[a$1] = r;
			var o$1 = this.offsets[a$1], s$1 = this.offsets[a$1 + 1] - o$1;
			s$1 > 0 && (r += s$1);
		}
		for (var u$1 = new Array(4 * n.length), c$1 = 0; c$1 < n.length; ++c$1) u$1[4 * c$1 + 3] = 255 & n[c$1], u$1[4 * c$1 + 2] = (65280 & n[c$1]) >> 8, u$1[4 * c$1 + 1] = (16711680 & n[c$1]) >> 16, u$1[4 * c$1] = (4278190080 & n[c$1]) >> 24;
		return u$1;
	}, t;
}(), je = function() {
	function t(t$1) {
		this.font = t$1, this.subset = {}, this.unicodes = {}, this.next = 33;
	}
	return t.prototype.generateCmap = function() {
		var t$1, e, n, r, i$2;
		for (e in r = this.font.cmap.tables[0].codeMap, t$1 = {}, i$2 = this.subset) n = i$2[e], t$1[e] = r[n];
		return t$1;
	}, t.prototype.glyphsFor = function(t$1) {
		var e, n, r, i$2, a$1, o$1, s$1;
		for (r = {}, a$1 = 0, o$1 = t$1.length; a$1 < o$1; a$1++) r[i$2 = t$1[a$1]] = this.font.glyf.glyphFor(i$2);
		for (i$2 in e = [], r) null != (n = r[i$2]) && n.compound && e.push.apply(e, n.glyphIDs);
		if (e.length > 0) for (i$2 in s$1 = this.glyphsFor(e)) n = s$1[i$2], r[i$2] = n;
		return r;
	}, t.prototype.encode = function(t$1, e) {
		var n, r, i$2, a$1, o$1, s$1, u$1, c$1, l$1, h$1, f$1, d$1, p$1, g$1, m$1;
		for (r in n = be.encode(this.generateCmap(), "unicode"), a$1 = this.glyphsFor(t$1), f$1 = { 0: 0 }, m$1 = n.charMap) f$1[(s$1 = m$1[r]).old] = s$1.new;
		for (d$1 in h$1 = n.maxGlyphID, a$1) d$1 in f$1 || (f$1[d$1] = h$1++);
		return c$1 = function(t$2) {
			var e$1, n$1;
			for (e$1 in n$1 = {}, t$2) n$1[t$2[e$1]] = e$1;
			return n$1;
		}(f$1), l$1 = Object.keys(c$1).sort(function(t$2, e$1) {
			return t$2 - e$1;
		}), p$1 = function() {
			var t$2, e$1, n$1;
			for (n$1 = [], t$2 = 0, e$1 = l$1.length; t$2 < e$1; t$2++) o$1 = l$1[t$2], n$1.push(c$1[o$1]);
			return n$1;
		}(), i$2 = this.font.glyf.encode(a$1, p$1, f$1), u$1 = this.font.loca.encode(i$2.offsets, p$1), g$1 = {
			cmap: this.font.cmap.raw(),
			glyf: i$2.table,
			loca: u$1,
			hmtx: this.font.hmtx.raw(),
			hhea: this.font.hhea.raw(),
			maxp: this.font.maxp.raw(),
			post: this.font.post.raw(),
			name: this.font.name.raw(),
			head: this.font.head.encode(e)
		}, this.font.os2.exists && (g$1["OS/2"] = this.font.os2.raw()), this.font.directory.encode(g$1);
	}, t;
}();
E.API.PDFObject = function() {
	var t;
	function e() {}
	return t = function(t$1, e$1) {
		return (Array(e$1 + 1).join("0") + t$1).slice(-e$1);
	}, e.convert = function(n) {
		var r, i$2, a$1, o$1;
		if (Array.isArray(n)) return "[" + function() {
			var t$1, i$3, a$2;
			for (a$2 = [], t$1 = 0, i$3 = n.length; t$1 < i$3; t$1++) r = n[t$1], a$2.push(e.convert(r));
			return a$2;
		}().join(" ") + "]";
		if ("string" == typeof n) return "/" + n;
		if (null != n ? n.isString : void 0) return "(" + n + ")";
		if (n instanceof Date) return "(D:" + t(n.getUTCFullYear(), 4) + t(n.getUTCMonth(), 2) + t(n.getUTCDate(), 2) + t(n.getUTCHours(), 2) + t(n.getUTCMinutes(), 2) + t(n.getUTCSeconds(), 2) + "Z)";
		if ("[object Object]" === {}.toString.call(n)) {
			for (i$2 in a$1 = ["<<"], n) o$1 = n[i$2], a$1.push("/" + i$2 + " " + e.convert(o$1));
			return a$1.push(">>"), a$1.join("\n");
		}
		return "" + n;
	}, e;
}();

//#endregion
export { St as AcroForm, xt as AcroFormAppearance, mt as AcroFormButton, wt as AcroFormCheckBox, ft as AcroFormChoiceField, pt as AcroFormComboBox, gt as AcroFormEditBox, dt as AcroFormListBox, Lt as AcroFormPasswordField, vt as AcroFormPushButton, bt as AcroFormRadioButton, Nt as AcroFormTextField, O as GState, M as ShadingPattern, q as TilingPattern, E as default, E as jsPDF };
//# sourceMappingURL=jspdf.js.map