var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a},$jscomp.global=$jscomp.getGlobal(this),$jscomp.polyfill=function(a,b,c,d){if(b){for(c=$jscomp.global,a=a.split("."),d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={}),c=c[e]}a=a[a.length-1],d=c[a],b=b(d),b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}},$jscomp.polyfill("Object.getOwnPropertySymbols",function(a){return a?a:function(){return[]}},"es6-impl","es5"),$jscomp.owns=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},$jscomp.polyfill("Object.assign",function(a){return a?a:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)$jscomp.owns(d,e)&&(a[e]=d[e])}return a}},"es6-impl","es3"),$jscomp.SYMBOL_PREFIX="jscomp_symbol_",$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){},$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)},$jscomp.symbolCounter_=0,$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++},$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator")),"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}}),$jscomp.initSymbolIterator=function(){}},$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},$jscomp.iteratorPrototype=function(a){return $jscomp.initSymbolIterator(),a={next:a},a[$jscomp.global.Symbol.iterator]=function(){return this},a},$jscomp.array=$jscomp.array||{},$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator(),a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}return d.next=function(){return{done:!0,value:void 0}},d.next()}};return d[Symbol.iterator]=function(){return d},d},$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6-impl","es3"),$jscomp.polyfill("Array.prototype.fill",function(a){return a?a:function(a,b,c){var d=this.length||0;for(0>b&&(b=Math.max(0,d+b)),(null==c||c>d)&&(c=d),c=Number(c),0>c&&(c=Math.max(0,d+c)),b=Number(b||0);b<c;b++)this[b]=a;return this}},"es6-impl","es3"),$jscomp.polyfill("Math.sign",function(a){return a?a:function(a){return a=Number(a),0===a||isNaN(a)?a:0<a?1:-1}},"es6-impl","es3"),$jscomp.polyfill("Object.setPrototypeOf",function(a){return a?a:"object"!=typeof"".__proto__?null:function(a,b){if(a.__proto__=b,a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}},"es6","es5");
! function(p) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = p() : "function" == typeof define && define.amd ? define([], p) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).PIXI = p()
}(function() {
    return function b(e, l, a) {
        function k(d, m) {
            if (!l[d]) {
                if (!e[d]) {
                    var h = "function" == typeof require && require;
                    if (!m && h) return h(d, !0);
                    if (f) return f(d, !0);
                    h = Error("Cannot find module '" + d + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                h = l[d] = {
                    exports: {}
                };
                e[d][0].call(h.exports, function(f) {
                    var a = e[d][1][f];
                    return k(a ? a : f)
                }, h, h.exports, b, e, l, a)
            }
            return l[d].exports
        }
        for (var f = "function" == typeof require && require, d = 0; d < a.length; d++) k(a[d]);
        return k
    }({
        1: [function(b, e, l) {
            function a(f) {
                var d = 32;
                return f &= -f, f && d--, 65535 & f && (d -= 16), 16711935 & f && (d -= 8), 252645135 & f && (d -= 4), 858993459 & f && (d -= 2), 1431655765 & f && --d, d
            }
            "use restrict";
            l.INT_BITS = 32;
            l.INT_MAX = 2147483647;
            l.INT_MIN = -2147483648;
            l.sign = function(f) {
                return (0 < f) - (0 > f)
            };
            l.abs = function(f) {
                var d = f >> 31;
                return (f ^
                    d) - d
            };
            l.min = function(f, d) {
                return d ^ (f ^ d) & -(f < d)
            };
            l.max = function(f, d) {
                return f ^ (f ^ d) & -(f < d)
            };
            l.isPow2 = function(f) {
                return !(f & f - 1 || !f)
            };
            l.log2 = function(f) {
                var d, a;
                return d = (65535 < f) << 4, f >>>= d, a = (255 < f) << 3, f >>>= a, d |= a, a = (15 < f) << 2, f >>>= a, d |= a, a = (3 < f) << 1, f >>>= a, d |= a, d | f >> 1
            };
            l.log10 = function(a) {
                return 1E9 <= a ? 9 : 1E8 <= a ? 8 : 1E7 <= a ? 7 : 1E6 <= a ? 6 : 1E5 <= a ? 5 : 1E4 <= a ? 4 : 1E3 <= a ? 3 : 100 <= a ? 2 : 10 <= a ? 1 : 0
            };
            l.popCount = function(a) {
                return a -= a >>> 1 & 1431655765, a = (858993459 & a) + (a >>> 2 & 858993459), 16843009 * (a + (a >>> 4) & 252645135) >>> 24
            };
            l.countTrailingZeros =
                a;
            l.nextPow2 = function(a) {
                return a += 0 === a, --a, a |= a >>> 1, a |= a >>> 2, a |= a >>> 4, a |= a >>> 8, a |= a >>> 16, a + 1
            };
            l.prevPow2 = function(a) {
                return a |= a >>> 1, a |= a >>> 2, a |= a >>> 4, a |= a >>> 8, a |= a >>> 16, a - (a >>> 1)
            };
            l.parity = function(a) {
                return a ^= a >>> 16, a ^= a >>> 8, a ^= a >>> 4, a &= 15, 27030 >>> a & 1
            };
            var k = Array(256);
            ! function(a) {
                for (var d = 0; 256 > d; ++d) {
                    for (var h = d, f = d, q = 7, h = h >>> 1; h; h >>>= 1) f <<= 1, f |= 1 & h, --q;
                    a[d] = f << q & 255
                }
            }(k);
            l.reverse = function(a) {
                return k[255 & a] << 24 | k[a >>> 8 & 255] << 16 | k[a >>> 16 & 255] << 8 | k[a >>> 24 & 255]
            };
            l.interleave2 = function(a, d) {
                return a &=
                    65535, a = 16711935 & (a | a << 8), a = 252645135 & (a | a << 4), a = 858993459 & (a | a << 2), a = 1431655765 & (a | a << 1), d &= 65535, d = 16711935 & (d | d << 8), d = 252645135 & (d | d << 4), d = 858993459 & (d | d << 2), d = 1431655765 & (d | d << 1), a | d << 1
            };
            l.deinterleave2 = function(a, d) {
                return a = a >>> d & 1431655765, a = 858993459 & (a | a >>> 1), a = 252645135 & (a | a >>> 2), a = 16711935 & (a | a >>> 4), a = 65535 & (a | a >>> 16), a << 16 >> 16
            };
            l.interleave3 = function(a, d, h) {
                return a &= 1023, a = 4278190335 & (a | a << 16), a = 251719695 & (a | a << 8), a = 3272356035 & (a | a << 4), a = 1227133513 & (a | a << 2), d &= 1023, d = 4278190335 & (d | d <<
                    16), d = 251719695 & (d | d << 8), d = 3272356035 & (d | d << 4), d = 1227133513 & (d | d << 2), a |= d << 1, h &= 1023, h = 4278190335 & (h | h << 16), h = 251719695 & (h | h << 8), h = 3272356035 & (h | h << 4), h = 1227133513 & (h | h << 2), a | h << 2
            };
            l.deinterleave3 = function(a, d) {
                return a = a >>> d & 1227133513, a = 3272356035 & (a | a >>> 2), a = 251719695 & (a | a >>> 4), a = 4278190335 & (a | a >>> 8), a = 1023 & (a | a >>> 16), a << 22 >> 22
            };
            l.nextCombination = function(f) {
                var d = f | f - 1;
                return d + 1 | (~d & -~d) - 1 >>> a(f) + 1
            }
        }, {}],
        2: [function(b, e, l) {
            function a(a, q, r) {
                r = r || 2;
                var b = q && q.length,
                    e = b ? q[0] * r : a.length,
                    t = k(a,
                        0, e, r, !0),
                    w = [];
                if (!t) return w;
                var l, u, v, x;
                if (b) {
                    var F = r,
                        z, A, G;
                    x = [];
                    b = 0;
                    for (z = q.length; b < z; b++) A = q[b] * F, G = b < z - 1 ? q[b + 1] * F : a.length, A = k(a, A, G, F, !1), A === A.next && (A.steiner = !0), x.push(n(A));
                    x.sort(h);
                    for (b = 0; b < x.length; b++) {
                        q = x[b];
                        F = t;
                        if (F = m(q, F)) q = y(F, q), f(q, q.next);
                        t = f(t, t.next)
                    }
                }
                if (a.length > 80 * r) {
                    l = v = a[0];
                    u = b = a[1];
                    for (F = r; F < e; F += r) x = a[F], q = a[F + 1], x < l && (l = x), q < u && (u = q), x > v && (v = x), q > b && (b = q);
                    v = Math.max(v - l, b - u)
                }
                return d(t, w, r, l, u, v), w
            }

            function k(d, a, h, f, m) {
                var n;
                if (m === 0 < x(d, a, h, f))
                    for (m = a; m < h; m += f) n =
                        A(m, d[m], d[m + 1], n);
                else
                    for (m = h - f; m >= a; m -= f) n = A(m, d[m], d[m + 1], n);
                return n && w(n, n.next) && (B(n), n = n.next), n
            }

            function f(d, a) {
                if (!d) return d;
                a || (a = d);
                var h, f = d;
                do
                    if (h = !1, f.steiner || !w(f, f.next) && 0 !== t(f.prev, f, f.next)) f = f.next;
                    else {
                        if (B(f), f = a = f.prev, f === f.next) return null;
                        h = !0
                    }
                while (h || f !== a);
                return a
            }

            function d(a, h, m, n, b, k, e) {
                if (a) {
                    if (!e && k) {
                        var l = a,
                            x = l;
                        do null === x.z && (x.z = q(x.x, x.y, n, b, k)), x.prevZ = x.prev, x = x.nextZ = x.next; while (x !== l);
                        x.prevZ.nextZ = null;
                        x.prevZ = null;
                        var l = x,
                            F, z, A, G, C, E, D = 1;
                        do {
                            x = l;
                            G = l = null;
                            for (C = 0; x;) {
                                C++;
                                z = x;
                                for (F = E = 0; F < D && (E++, z = z.nextZ, z); F++);
                                for (F = D; 0 < E || 0 < F && z;) 0 === E ? (A = z, z = z.nextZ, F--) : 0 !== F && z ? x.z <= z.z ? (A = x, x = x.nextZ, E--) : (A = z, z = z.nextZ, F--) : (A = x, x = x.nextZ, E--), G ? G.nextZ = A : l = A, A.prevZ = G, G = A;
                                x = z
                            }
                            G.nextZ = null;
                            D *= 2
                        } while (1 < C)
                    }
                    for (x = a; a.prev !== a.next;) {
                        A = a.prev;
                        l = a.next;
                        if (k) a: {
                            z = a;F = n;
                            var P = b,
                                H = k;G = z.prev;C = z;E = z.next;
                            if (0 <= t(G, C, E)) z = !1;
                            else {
                                var J = G.x > C.x ? G.x > E.x ? G.x : E.x : C.x > E.x ? C.x : E.x,
                                    S = G.y > C.y ? G.y > E.y ? G.y : E.y : C.y > E.y ? C.y : E.y,
                                    D = q(G.x < C.x ? G.x < E.x ? G.x : E.x : C.x < E.x ? C.x :
                                        E.x, G.y < C.y ? G.y < E.y ? G.y : E.y : C.y < E.y ? C.y : E.y, F, P, H);
                                F = q(J, S, F, P, H);
                                for (P = z.nextZ; P && P.z <= F;) {
                                    if (P !== z.prev && P !== z.next && r(G.x, G.y, C.x, C.y, E.x, E.y, P.x, P.y) && 0 <= t(P.prev, P, P.next)) {
                                        z = !1;
                                        break a
                                    }
                                    P = P.nextZ
                                }
                                for (P = z.prevZ; P && P.z >= D;) {
                                    if (P !== z.prev && P !== z.next && r(G.x, G.y, C.x, C.y, E.x, E.y, P.x, P.y) && 0 <= t(P.prev, P, P.next)) {
                                        z = !1;
                                        break a
                                    }
                                    P = P.prevZ
                                }
                                z = !0
                            }
                        }
                        else a: if (z = a, G = z.prev, C = z, E = z.next, 0 <= t(G, C, E)) z = !1;
                            else {
                                for (D = z.next.next; D !== z.prev;) {
                                    if (r(G.x, G.y, C.x, C.y, E.x, E.y, D.x, D.y) && 0 <= t(D.prev, D, D.next)) {
                                        z = !1;
                                        break a
                                    }
                                    D =
                                        D.next
                                }
                                z = !0
                            } if (z) h.push(A.i / m), h.push(a.i / m), h.push(l.i / m), B(a), x = a = l.next;
                        else if (a = l, a === x) {
                            if (e)
                                if (1 === e) {
                                    e = h;
                                    A = m;
                                    l = a;
                                    do x = l.prev, z = l.next.next, !w(x, z) && u(x, l, l.next, z) && v(x, z) && v(z, x) && (e.push(x.i / A), e.push(l.i / A), e.push(z.i / A), B(l), B(l.next), l = a = z), l = l.next; while (l !== a);
                                    a = l;
                                    d(a, h, m, n, b, k, 2)
                                } else {
                                    if (2 === e) a: {
                                        e = a;do {
                                            for (A = e.next.next; A !== e.prev;) {
                                                if (l = e.i !== A.i) {
                                                    l = e;
                                                    x = A;
                                                    if (z = l.next.i !== x.i && l.prev.i !== x.i) {
                                                        b: {
                                                            z = l;do {
                                                                if (z.i !== l.i && z.next.i !== l.i && z.i !== x.i && z.next.i !== x.i && u(z, z.next, l, x)) {
                                                                    z = !0;
                                                                    break b
                                                                }
                                                                z = z.next
                                                            } while (z !== l);z = !1
                                                        }
                                                        z = !z
                                                    }
                                                    if (z = z && v(l, x) && v(x, l)) {
                                                        z = l;
                                                        G = !1;
                                                        C = (l.x + x.x) / 2;
                                                        x = (l.y + x.y) / 2;
                                                        do z.y > x != z.next.y > x && C < (z.next.x - z.x) * (x - z.y) / (z.next.y - z.y) + z.x && (G = !G), z = z.next; while (z !== l);
                                                        z = G
                                                    }
                                                    l = z
                                                }
                                                if (l) {
                                                    a = y(e, A);
                                                    e = f(e, e.next);
                                                    a = f(a, a.next);
                                                    d(e, h, m, n, b, k);
                                                    d(a, h, m, n, b, k);
                                                    break a
                                                }
                                                A = A.next
                                            }
                                            e = e.next
                                        } while (e !== a)
                                    }
                                }
                            else d(f(a), h, m, n, b, k, 1);
                            break
                        }
                    }
                }
            }

            function h(d, a) {
                return d.x - a.x
            }

            function m(d, a) {
                var h, f = a,
                    m = d.x,
                    n = d.y,
                    q = -(1 / 0);
                do {
                    if (n <= f.y && n >= f.next.y) {
                        var b = f.x + (n - f.y) * (f.next.x - f.x) / (f.next.y - f.y);
                        if (b <= m && b > q) {
                            if (q = b, b === m) {
                                if (n === f.y) return f;
                                if (n === f.next.y) return f.next
                            }
                            h = f.x < f.next.x ? f : f.next
                        }
                    }
                    f = f.next
                } while (f !== a);
                if (!h) return null;
                if (m === q) return h.prev;
                for (var k, b = h, e = h.x, t = h.y, w = 1 / 0, f = h.next; f !== b;) m >= f.x && f.x >= e && r(n < t ? m : q, n, e, t, n < t ? q : m, n, f.x, f.y) && (k = Math.abs(n - f.y) / (m - f.x), (k < w || k === w && f.x > h.x) && v(f, d) && (h = f, w = k)), f = f.next;
                return h
            }

            function q(d, a, h, f, m) {
                return d = 32767 * (d - h) / m, a = 32767 * (a - f) / m, d = 16711935 & (d | d << 8), d = 252645135 & (d | d << 4), d = 858993459 & (d | d << 2), d = 1431655765 & (d | d << 1), a = 16711935 &
                    (a | a << 8), a = 252645135 & (a | a << 4), a = 858993459 & (a | a << 2), a = 1431655765 & (a | a << 1), d | a << 1
            }

            function n(d) {
                var a = d,
                    h = d;
                do a.x < h.x && (h = a), a = a.next; while (a !== d);
                return h
            }

            function r(d, a, h, f, m, n, q, r) {
                return 0 <= (m - q) * (a - r) - (d - q) * (n - r) && 0 <= (d - q) * (f - r) - (h - q) * (a - r) && 0 <= (h - q) * (n - r) - (m - q) * (f - r)
            }

            function t(d, a, h) {
                return (a.y - d.y) * (h.x - a.x) - (a.x - d.x) * (h.y - a.y)
            }

            function w(d, a) {
                return d.x === a.x && d.y === a.y
            }

            function u(d, a, h, f) {
                return !!(w(d, a) && w(h, f) || w(d, f) && w(h, a)) || 0 < t(d, a, h) != 0 < t(d, a, f) && 0 < t(h, f, d) != 0 < t(h, f, a)
            }

            function v(d,
                a) {
                return 0 > t(d.prev, d, d.next) ? 0 <= t(d, a, d.next) && 0 <= t(d, d.prev, a) : 0 > t(d, a, d.prev) || 0 > t(d, d.next, a)
            }

            function y(d, a) {
                var h = new z(d.i, d.x, d.y),
                    f = new z(a.i, a.x, a.y),
                    m = d.next,
                    n = a.prev;
                return d.next = a, a.prev = d, h.next = m, m.prev = h, f.next = h, h.prev = f, n.next = f, f.prev = n, f
            }

            function A(d, a, h, f) {
                d = new z(d, a, h);
                return f ? (d.next = f.next, d.prev = f, f.next.prev = d, f.next = d) : (d.prev = d, d.next = d), d
            }

            function B(d) {
                d.next.prev = d.prev;
                d.prev.next = d.next;
                d.prevZ && (d.prevZ.nextZ = d.nextZ);
                d.nextZ && (d.nextZ.prevZ = d.prevZ)
            }

            function z(d,
                a, h) {
                this.i = d;
                this.x = a;
                this.y = h;
                this.nextZ = this.prevZ = this.z = this.next = this.prev = null;
                this.steiner = !1
            }

            function x(d, a, h, f) {
                for (var m = 0, n = h - f; a < h; a += f) m += (d[n] - d[a]) * (d[a + 1] + d[n + 1]), n = a;
                return m
            }
            e.exports = a;
            a.deviation = function(d, a, h, f) {
                var m = a && a.length,
                    n = Math.abs(x(d, 0, m ? a[0] * h : d.length, h));
                if (m)
                    for (var m = 0, q = a.length; m < q; m++) n -= Math.abs(x(d, a[m] * h, m < q - 1 ? a[m + 1] * h : d.length, h));
                for (m = a = 0; m < f.length; m += 3) {
                    var q = f[m] * h,
                        r = f[m + 1] * h,
                        b = f[m + 2] * h;
                    a += Math.abs((d[q] - d[b]) * (d[r + 1] - d[q + 1]) - (d[q] - d[r]) * (d[b + 1] -
                        d[q + 1]))
                }
                return 0 === n && 0 === a ? 0 : Math.abs((a - n) / n)
            };
            a.flatten = function(d) {
                for (var a = d[0][0].length, h = {
                        vertices: [],
                        holes: [],
                        dimensions: a
                    }, f = 0, m = 0; m < d.length; m++) {
                    for (var n = 0; n < d[m].length; n++)
                        for (var q = 0; q < a; q++) h.vertices.push(d[m][n][q]);
                    0 < m && (f += d[m - 1].length, h.holes.push(f))
                }
                return h
            }
        }, {}],
        3: [function(b, e, l) {
            function a(d, a, f) {
                this.fn = d;
                this.context = a;
                this.once = f || !1
            }

            function k() {}
            var f = Object.prototype.hasOwnProperty,
                d = "function" != typeof Object.create && "~";
            k.prototype._events = void 0;
            k.prototype.eventNames =
                function() {
                    var a, m = this._events,
                        q = [];
                    if (!m) return q;
                    for (a in m) f.call(m, a) && q.push(d ? a.slice(1) : a);
                    return Object.getOwnPropertySymbols ? q.concat(Object.getOwnPropertySymbols(m)) : q
                };
            k.prototype.listeners = function(a, f) {
                var h = d ? d + a : a,
                    h = this._events && this._events[h];
                if (f) return !!h;
                if (!h) return [];
                if (h.fn) return [h.fn];
                for (var m = 0, r = h.length, b = Array(r); m < r; m++) b[m] = h[m].fn;
                return b
            };
            k.prototype.emit = function(a, f, q, n, r, b) {
                var h = d ? d + a : a;
                if (!this._events || !this._events[h]) return !1;
                var m, k = this._events[h],
                    e =
                    arguments.length;
                if ("function" == typeof k.fn) {
                    switch (k.once && this.removeListener(a, k.fn, void 0, !0), e) {
                        case 1:
                            return k.fn.call(k.context), !0;
                        case 2:
                            return k.fn.call(k.context, f), !0;
                        case 3:
                            return k.fn.call(k.context, f, q), !0;
                        case 4:
                            return k.fn.call(k.context, f, q, n), !0;
                        case 5:
                            return k.fn.call(k.context, f, q, n, r), !0;
                        case 6:
                            return k.fn.call(k.context, f, q, n, r, b), !0
                    }
                    h = 1;
                    for (m = Array(e - 1); h < e; h++) m[h - 1] = arguments[h];
                    k.fn.apply(k.context, m)
                } else
                    for (var t, l = k.length, h = 0; h < l; h++) switch (k[h].once && this.removeListener(a,
                        k[h].fn, void 0, !0), e) {
                        case 1:
                            k[h].fn.call(k[h].context);
                            break;
                        case 2:
                            k[h].fn.call(k[h].context, f);
                            break;
                        case 3:
                            k[h].fn.call(k[h].context, f, q);
                            break;
                        default:
                            if (!m)
                                for (t = 1, m = Array(e - 1); t < e; t++) m[t - 1] = arguments[t];
                            k[h].fn.apply(k[h].context, m)
                    }
                return !0
            };
            k.prototype.on = function(h, f, q) {
                f = new a(f, q || this);
                h = d ? d + h : h;
                return this._events || (this._events = d ? {} : Object.create(null)), this._events[h] ? this._events[h].fn ? this._events[h] = [this._events[h], f] : this._events[h].push(f) : this._events[h] = f, this
            };
            k.prototype.once =
                function(h, f, q) {
                    f = new a(f, q || this, !0);
                    h = d ? d + h : h;
                    return this._events || (this._events = d ? {} : Object.create(null)), this._events[h] ? this._events[h].fn ? this._events[h] = [this._events[h], f] : this._events[h].push(f) : this._events[h] = f, this
                };
            k.prototype.removeListener = function(a, f, q, n) {
                a = d ? d + a : a;
                if (!this._events || !this._events[a]) return this;
                var h = this._events[a],
                    m = [];
                if (f)
                    if (h.fn)(h.fn !== f || n && !h.once || q && h.context !== q) && m.push(h);
                    else
                        for (var b = 0, k = h.length; b < k; b++)(h[b].fn !== f || n && !h[b].once || q && h[b].context !==
                            q) && m.push(h[b]);
                return m.length ? this._events[a] = 1 === m.length ? m[0] : m : delete this._events[a], this
            };
            k.prototype.removeAllListeners = function(a) {
                return this._events ? (a ? delete this._events[d ? d + a : a] : this._events = d ? {} : Object.create(null), this) : this
            };
            k.prototype.off = k.prototype.removeListener;
            k.prototype.addListener = k.prototype.on;
            k.prototype.setMaxListeners = function() {
                return this
            };
            k.prefixed = d;
            "undefined" != typeof e && (e.exports = k)
        }, {}],
        4: [function(b, e, l) {
            ! function(a) {
                var b = /iPhone/i,
                    f = /iPod/i,
                    d = /iPad/i,
                    h =
                    /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
                    m = /Android/i,
                    q = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
                    n = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
                    r = /IEMobile/i,
                    t = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
                    w = /BlackBerry/i,
                    l = /BB10/i,
                    v = /Opera Mini/i,
                    y = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
                    A = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
                    B = /(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)/i,
                    z = function(a) {
                        a = a || navigator.userAgent;
                        var k = a.split("[FBAN");
                        if ("undefined" !=
                            typeof k[1] && (a = k[0]), k = a.split("Twitter"), "undefined" != typeof k[1] && (a = k[0]), this.apple = {
                                phone: b.test(a),
                                ipod: f.test(a),
                                tablet: !b.test(a) && d.test(a),
                                device: b.test(a) || f.test(a) || d.test(a)
                            }, this.amazon = {
                                phone: q.test(a),
                                tablet: !q.test(a) && n.test(a),
                                device: q.test(a) || n.test(a)
                            }, this.android = {
                                phone: q.test(a) || h.test(a),
                                tablet: !q.test(a) && !h.test(a) && (n.test(a) || m.test(a)),
                                device: q.test(a) || n.test(a) || h.test(a) || m.test(a)
                            }, this.windows = {
                                phone: r.test(a),
                                tablet: t.test(a),
                                device: r.test(a) || t.test(a)
                            }, this.other = {
                                blackberry: w.test(a),
                                blackberry10: l.test(a),
                                opera: v.test(a),
                                firefox: A.test(a),
                                chrome: y.test(a),
                                device: w.test(a) || l.test(a) || v.test(a) || A.test(a) || y.test(a)
                            }, this.seven_inch = B.test(a), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
                    },
                    x = function() {
                        var d = new z;
                        return d.Class =
                            z, d
                    };
                "undefined" != typeof e && e.exports && "undefined" == typeof window ? e.exports = z : "undefined" != typeof e && e.exports && "undefined" != typeof window ? e.exports = x() : a.isMobile = x()
            }(this)
        }, {}],
        5: [function(b, e, l) {
            var a = Object.prototype.hasOwnProperty,
                k = Object.prototype.propertyIsEnumerable;
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var a = new String("abc");
                    if (a[5] = "de", "5" === Object.getOwnPropertyNames(a)[0]) return !1;
                    for (var d = {}, a = 0; 10 > a; a++) d["_" + String.fromCharCode(a)] = a;
                    if ("0123456789" !== Object.getOwnPropertyNames(d).map(function(a) {
                            return d[a]
                        }).join("")) return !1;
                    var h = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(d) {
                        h[d] = d
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, h)).join("")
                } catch (m) {
                    return !1
                }
            }() ? Object.assign : function(f, d) {
                var h, m, q;
                if (null === f || void 0 === f) throw new TypeError("Object.assign cannot be called with null or undefined");
                q = Object(f);
                for (var n = 1; n < arguments.length; n++) {
                    h = Object(arguments[n]);
                    for (var b in h) a.call(h, b) && (q[b] = h[b]);
                    if (Object.getOwnPropertySymbols) {
                        m = Object.getOwnPropertySymbols(h);
                        for (var e = 0; e < m.length; e++) k.call(h,
                            m[e]) && (q[m[e]] = h[m[e]])
                    }
                }
                return q
            }
        }, {}],
        6: [function(b, e, l) {
            var a = new ArrayBuffer(0),
                k = function(f, d, h, m) {
                    this.gl = f;
                    this.buffer = f.createBuffer();
                    this.type = d || f.ARRAY_BUFFER;
                    this.drawType = m || f.STATIC_DRAW;
                    this.data = a;
                    h && this.upload(h)
                };
            k.prototype.upload = function(a, d, h) {
                h || this.bind();
                h = this.gl;
                a = a || this.data;
                this.data.byteLength >= a.byteLength ? h.bufferSubData(this.type, d || 0, a) : h.bufferData(this.type, a, this.drawType);
                this.data = a
            };
            k.prototype.bind = function() {
                this.gl.bindBuffer(this.type, this.buffer)
            };
            k.createVertexBuffer = function(a, d, h) {
                return new k(a, a.ARRAY_BUFFER, d, h)
            };
            k.createIndexBuffer = function(a, d, h) {
                return new k(a, a.ELEMENT_ARRAY_BUFFER, d, h)
            };
            k.create = function(a, d, h, m) {
                return new k(a, d, m)
            };
            k.prototype.destroy = function() {
                this.gl.deleteBuffer(this.buffer)
            };
            e.exports = k
        }, {}],
        7: [function(b, e, l) {
            var a = b("./GLTexture"),
                k = function(a, d, h) {
                    this.gl = a;
                    this.framebuffer = a.createFramebuffer();
                    this.texture = this.stencil = null;
                    this.width = d || 100;
                    this.height = h || 100
                };
            k.prototype.enableTexture = function(f) {
                var d =
                    this.gl;
                this.texture = f || new a(d);
                this.texture.bind();
                this.bind();
                d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, this.texture.texture, 0)
            };
            k.prototype.enableStencil = function() {
                if (!this.stencil) {
                    var a = this.gl;
                    this.stencil = a.createRenderbuffer();
                    a.bindRenderbuffer(a.RENDERBUFFER, this.stencil);
                    a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, this.stencil);
                    a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_STENCIL, this.width, this.height)
                }
            };
            k.prototype.clear =
                function(a, d, h, m) {
                    this.bind();
                    var f = this.gl;
                    f.clearColor(a, d, h, m);
                    f.clear(f.COLOR_BUFFER_BIT)
                };
            k.prototype.bind = function() {
                var a = this.gl;
                this.texture && this.texture.unbind();
                a.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer)
            };
            k.prototype.unbind = function() {
                var a = this.gl;
                a.bindFramebuffer(a.FRAMEBUFFER, null)
            };
            k.prototype.resize = function(a, d) {
                var h = this.gl;
                this.width = a;
                this.height = d;
                this.texture && this.texture.uploadData(null, a, d);
                this.stencil && (h.bindRenderbuffer(h.RENDERBUFFER, this.stencil), h.renderbufferStorage(h.RENDERBUFFER,
                    h.DEPTH_STENCIL, a, d))
            };
            k.prototype.destroy = function() {
                var a = this.gl;
                this.texture && this.texture.destroy();
                a.deleteFramebuffer(this.framebuffer);
                this.texture = this.stencil = this.gl = null
            };
            k.createRGBA = function(f, d, h) {
                var m = a.fromData(f, null, d, h);
                m.enableNearestScaling();
                m.enableWrapClamp();
                f = new k(f, d, h);
                return f.enableTexture(m), f.unbind(), f
            };
            k.createFloat32 = function(f, d, h, m) {
                m = new a.fromData(f, m, d, h);
                m.enableNearestScaling();
                m.enableWrapClamp();
                f = new k(f, d, h);
                return f.enableTexture(m), f.unbind(), f
            };
            e.exports = k
        }, {
            "./GLTexture": 9
        }],
        8: [function(b, e, l) {
            var a = b("./shader/compileProgram"),
                k = b("./shader/extractAttributes"),
                f = b("./shader/extractUniforms"),
                d = b("./shader/generateUniformAccessObject");
            b = function(h, m, q) {
                this.gl = h;
                this.program = a(h, m, q);
                this.attributes = k(h, this.program);
                m = f(h, this.program);
                this.uniforms = d(h, m)
            };
            b.prototype.bind = function() {
                this.gl.useProgram(this.program)
            };
            b.prototype.destroy = function() {};
            e.exports = b
        }, {
            "./shader/compileProgram": 14,
            "./shader/extractAttributes": 16,
            "./shader/extractUniforms": 17,
            "./shader/generateUniformAccessObject": 18
        }],
        9: [function(b, e, l) {
            var a = function(a, d, h, m, q) {
                this.gl = a;
                this.texture = a.createTexture();
                this.premultiplyAlpha = this.mipmap = !1;
                this.width = d || 0;
                this.height = h || 0;
                this.format = m || a.RGBA;
                this.type = q || a.UNSIGNED_BYTE
            };
            a.prototype.upload = function(a) {
                this.bind();
                var d = this.gl;
                this.width = a.videoWidth || a.width;
                this.height = a.videoHeight || a.height;
                d.pixelStorei(d.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
                d.texImage2D(d.TEXTURE_2D, 0, this.format, this.format, this.type,
                    a)
            };
            var k = !1;
            a.prototype.uploadData = function(a, d, h) {
                this.bind();
                var f = this.gl;
                if (this.width = d || this.width, this.height = h || this.height, a instanceof Float32Array) {
                    if (!k) {
                        if (!f.getExtension("OES_texture_float")) throw Error("floating point textures not available");
                        k = !0
                    }
                    this.type = f.FLOAT
                } else this.type = f.UNSIGNED_BYTE;
                f.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
                f.texImage2D(f.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, a || null)
            };
            a.prototype.bind = function(a) {
                var d =
                    this.gl;
                void 0 !== a && d.activeTexture(d.TEXTURE0 + a);
                d.bindTexture(d.TEXTURE_2D, this.texture)
            };
            a.prototype.unbind = function() {
                var a = this.gl;
                a.bindTexture(a.TEXTURE_2D, null)
            };
            a.prototype.minFilter = function(a) {
                var d = this.gl;
                this.bind();
                this.mipmap ? d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, a ? d.LINEAR_MIPMAP_LINEAR : d.NEAREST_MIPMAP_NEAREST) : d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, a ? d.LINEAR : d.NEAREST)
            };
            a.prototype.magFilter = function(a) {
                var d = this.gl;
                this.bind();
                d.texParameteri(d.TEXTURE_2D,
                    d.TEXTURE_MAG_FILTER, a ? d.LINEAR : d.NEAREST)
            };
            a.prototype.enableMipmap = function() {
                var a = this.gl;
                this.bind();
                this.mipmap = !0;
                a.generateMipmap(a.TEXTURE_2D)
            };
            a.prototype.enableLinearScaling = function() {
                this.minFilter(!0);
                this.magFilter(!0)
            };
            a.prototype.enableNearestScaling = function() {
                this.minFilter(!1);
                this.magFilter(!1)
            };
            a.prototype.enableWrapClamp = function() {
                var a = this.gl;
                this.bind();
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE)
            };
            a.prototype.enableWrapRepeat = function() {
                var a = this.gl;
                this.bind();
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.REPEAT);
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.REPEAT)
            };
            a.prototype.enableWrapMirrorRepeat = function() {
                var a = this.gl;
                this.bind();
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.MIRRORED_REPEAT);
                a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.MIRRORED_REPEAT)
            };
            a.prototype.destroy = function() {
                this.gl.deleteTexture(this.texture)
            };
            a.fromSource = function(f, d, h) {
                f = new a(f);
                return f.premultiplyAlpha =
                    h || !1, f.upload(d), f
            };
            a.fromData = function(f, d, h, m) {
                f = new a(f);
                return f.uploadData(d, h, m), f
            };
            e.exports = a
        }, {}],
        10: [function(b, e, l) {
            function a(f, d) {
                if (this.nativeVaoExtension = null, a.FORCE_NATIVE || (this.nativeVaoExtension = f.getExtension("OES_vertex_array_object") || f.getExtension("MOZ_OES_vertex_array_object") || f.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = d, this.nativeVaoExtension) {
                    this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
                    var h = f.getParameter(f.MAX_VERTEX_ATTRIBS);
                    this.nativeState = {
                        tempAttribState: Array(h),
                        attribState: Array(h)
                    }
                }
                this.gl = f;
                this.attributes = [];
                this.indexBuffer = null;
                this.dirty = !1
            }
            var k = b("./setVertexAttribArrays");
            a.prototype.constructor = a;
            e.exports = a;
            a.FORCE_NATIVE = !1;
            a.prototype.bind = function() {
                return this.nativeVao ? (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty && (this.dirty = !1, this.activate())) : this.activate(), this
            };
            a.prototype.unbind = function() {
                return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this
            };
            a.prototype.activate = function() {
                for (var a = this.gl, d = null, h = 0; h < this.attributes.length; h++) {
                    var m = this.attributes[h];
                    d !== m.buffer && (m.buffer.bind(), d = m.buffer);
                    a.vertexAttribPointer(m.attribute.location, m.attribute.size, m.type || a.FLOAT, m.normalized || !1, m.stride || 0, m.start || 0)
                }
                return k(a, this.attributes, this.nativeState), this.indexBuffer.bind(), this
            };
            a.prototype.addAttribute = function(a, d, h, m, q, n) {
                return this.attributes.push({
                    buffer: a,
                    attribute: d,
                    location: d.location,
                    type: h || this.gl.FLOAT,
                    normalized: m ||
                        !1,
                    stride: q || 0,
                    start: n || 0
                }), this.dirty = !0, this
            };
            a.prototype.addIndex = function(a) {
                return this.indexBuffer = a, this.dirty = !0, this
            };
            a.prototype.clear = function() {
                return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this
            };
            a.prototype.draw = function(a, d, h) {
                var f = this.gl;
                return f.drawElements(a, d, f.UNSIGNED_SHORT, h || 0), this
            };
            a.prototype.destroy = function() {
                this.nativeState = this.attributes = this.indexBuffer = this.gl = null;
                this.nativeVao &&
                    this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao);
                this.nativeVao = this.nativeVaoExtension = null
            }
        }, {
            "./setVertexAttribArrays": 13
        }],
        11: [function(b, e, l) {
            e.exports = function(a, b) {
                var f = a.getContext("webgl", b) || a.getContext("experimental-webgl", b);
                if (!f) throw Error("This browser does not support webGL. Try using the canvas renderer");
                return f
            }
        }, {}],
        12: [function(b, e, l) {
            b = {
                createContext: b("./createContext"),
                setVertexAttribArrays: b("./setVertexAttribArrays"),
                GLBuffer: b("./GLBuffer"),
                GLFramebuffer: b("./GLFramebuffer"),
                GLShader: b("./GLShader"),
                GLTexture: b("./GLTexture"),
                VertexArrayObject: b("./VertexArrayObject"),
                shader: b("./shader")
            };
            "undefined" != typeof e && e.exports && (e.exports = b);
            "undefined" != typeof window && (window.pixi = {
                gl: b
            })
        }, {
            "./GLBuffer": 6,
            "./GLFramebuffer": 7,
            "./GLShader": 8,
            "./GLTexture": 9,
            "./VertexArrayObject": 10,
            "./createContext": 11,
            "./setVertexAttribArrays": 13,
            "./shader": 19
        }],
        13: [function(b, e, l) {
            e.exports = function(a, b, f) {
                var d;
                if (f) {
                    var h = f.tempAttribState,
                        m = f.attribState;
                    for (d = 0; d < h.length; d++) h[d] = !1;
                    for (d = 0; d < b.length; d++) h[b[d].attribute.location] = !0;
                    for (d = 0; d < m.length; d++) m[d] !== h[d] && (m[d] = h[d], f.attribState[d] ? a.enableVertexAttribArray(d) : a.disableVertexAttribArray(d))
                } else
                    for (d = 0; d < b.length; d++) a.enableVertexAttribArray(b[d].attribute.location)
            }
        }, {}],
        14: [function(b, e, l) {
            var a = function(a, f, d) {
                f = a.createShader(f);
                return a.shaderSource(f, d), a.compileShader(f), a.getShaderParameter(f, a.COMPILE_STATUS) ? f : (console.log(a.getShaderInfoLog(f)), null)
            };
            e.exports = function(b, f, d) {
                f = a(b, b.VERTEX_SHADER,
                    f);
                d = a(b, b.FRAGMENT_SHADER, d);
                var h = b.createProgram();
                return b.attachShader(h, f), b.attachShader(h, d), b.linkProgram(h), b.getProgramParameter(h, b.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", b.getProgramParameter(h, b.VALIDATE_STATUS)), console.error("gl.getError()", b.getError()), "" !== b.getProgramInfoLog(h) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", b.getProgramInfoLog(h)), b.deleteProgram(h), h = null), b.deleteShader(f), b.deleteShader(d),
                    h
            }
        }, {}],
        15: [function(b, e, l) {
            var a = function(a) {
                a = Array(a);
                for (var f = 0; f < a.length; f++) a[f] = !1;
                return a
            };
            e.exports = function(b, f) {
                switch (b) {
                    case "float":
                        return 0;
                    case "vec2":
                        return new Float32Array(2 * f);
                    case "vec3":
                        return new Float32Array(3 * f);
                    case "vec4":
                        return new Float32Array(4 * f);
                    case "int":
                    case "sampler2D":
                        return 0;
                    case "ivec2":
                        return new Int32Array(2 * f);
                    case "ivec3":
                        return new Int32Array(3 * f);
                    case "ivec4":
                        return new Int32Array(4 * f);
                    case "bool":
                        return !1;
                    case "bvec2":
                        return a(2 * f);
                    case "bvec3":
                        return a(3 *
                            f);
                    case "bvec4":
                        return a(4 * f);
                    case "mat2":
                        return new Float32Array([1, 0, 0, 1]);
                    case "mat3":
                        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                    case "mat4":
                        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            }
        }, {}],
        16: [function(b, e, l) {
            var a = b("./mapType"),
                k = b("./mapSize"),
                f = function(d, a, f, q) {
                    gl.vertexAttribPointer(this.location, this.size, d || gl.FLOAT, a || !1, f || 0, q || 0)
                };
            e.exports = function(d, h) {
                for (var m = {}, q = d.getProgramParameter(h, d.ACTIVE_ATTRIBUTES), n = 0; n < q; n++) {
                    var b = d.getActiveAttrib(h, n),
                        e = a(d, b.type);
                    m[b.name] = {
                        type: e,
                        size: k(e),
                        location: d.getAttribLocation(h, b.name),
                        pointer: f
                    }
                }
                return m
            }
        }, {
            "./mapSize": 20,
            "./mapType": 21
        }],
        17: [function(b, e, l) {
            var a = b("./mapType"),
                k = b("./defaultValue");
            e.exports = function(f, d) {
                for (var h = {}, m = f.getProgramParameter(d, f.ACTIVE_UNIFORMS), q = 0; q < m; q++) {
                    var n = f.getActiveUniform(d, q),
                        b = n.name.replace(/\[.*?\]/, ""),
                        e = a(f, n.type);
                    h[b] = {
                        type: e,
                        size: n.size,
                        location: f.getUniformLocation(d, b),
                        value: k(e, n.size)
                    }
                }
                return h
            }
        }, {
            "./defaultValue": 15,
            "./mapType": 21
        }],
        18: [function(b, e, l) {
            var a =
                function(d) {
                    d = f.replace("%%", d);
                    return new Function(d)
                },
                k = function(a, f) {
                    var n, q = d.replace(/%%/g, a);
                    return n = 1 === f.size ? h[f.type] : m[f.type], n && (q += "\nthis.gl." + n + ";"), new Function("value", q)
                },
                f = "return this.data.%%.value;",
                d = "this.data.%%.value = value;\nvar location = this.data.%%.location;",
                h = {
                    "float": "uniform1f(location, value)",
                    vec2: "uniform2f(location, value[0], value[1])",
                    vec3: "uniform3f(location, value[0], value[1], value[2])",
                    vec4: "uniform4f(location, value[0], value[1], value[2], value[3])",
                    "int": "uniform1i(location, value)",
                    ivec2: "uniform2i(location, value[0], value[1])",
                    ivec3: "uniform3i(location, value[0], value[1], value[2])",
                    ivec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                    bool: "uniform1i(location, value)",
                    bvec2: "uniform2i(location, value[0], value[1])",
                    bvec3: "uniform3i(location, value[0], value[1], value[2])",
                    bvec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                    mat2: "uniformMatrix2fv(location, false, value)",
                    mat3: "uniformMatrix3fv(location, false, value)",
                    mat4: "uniformMatrix4fv(location, false, value)",
                    sampler2D: "uniform1i(location, value)"
                },
                m = {
                    "float": "uniform1fv(location, value)",
                    vec2: "uniform2fv(location, value)",
                    vec3: "uniform3fv(location, value)",
                    vec4: "uniform4fv(location, value)",
                    "int": "uniform1iv(location, value)",
                    ivec2: "uniform2iv(location, value)",
                    ivec3: "uniform3iv(location, value)",
                    ivec4: "uniform4iv(location, value)",
                    bool: "uniform1iv(location, value)",
                    bvec2: "uniform2iv(location, value)",
                    bvec3: "uniform3iv(location, value)",
                    bvec4: "uniform4iv(location, value)",
                    sampler2D: "uniform1iv(location, value)"
                };
            e.exports = function(d, h) {
                var f = {
                    data: {}
                };
                f.gl = d;
                for (var n = Object.keys(h), m = 0; m < n.length; m++) {
                    for (var q = n[m], b = q.split("."), e = b[b.length - 1], l = f, B = 0; B < b.length - 1; B++) var z = l[b[B]] || {
                            data: {}
                        },
                        l = l[b[B]] = z;
                    b = l;
                    q = h[q];
                    b.data[e] = q;
                    b.gl = d;
                    Object.defineProperty(b, e, {
                        get: a(e),
                        set: k(e, q)
                    })
                }
                return f
            }
        }, {}],
        19: [function(b, e, l) {
            e.exports = {
                compileProgram: b("./compileProgram"),
                defaultValue: b("./defaultValue"),
                extractAttributes: b("./extractAttributes"),
                extractUniforms: b("./extractUniforms"),
                generateUniformAccessObject: b("./generateUniformAccessObject"),
                mapSize: b("./mapSize"),
                mapType: b("./mapType")
            }
        }, {
            "./compileProgram": 14,
            "./defaultValue": 15,
            "./extractAttributes": 16,
            "./extractUniforms": 17,
            "./generateUniformAccessObject": 18,
            "./mapSize": 20,
            "./mapType": 21
        }],
        20: [function(b, e, l) {
            var a = {
                "float": 1,
                vec2: 2,
                vec3: 3,
                vec4: 4,
                "int": 1,
                ivec2: 2,
                ivec3: 3,
                ivec4: 4,
                bool: 1,
                bvec2: 2,
                bvec3: 3,
                bvec4: 4,
                mat2: 4,
                mat3: 9,
                mat4: 16,
                sampler2D: 1
            };
            e.exports = function(b) {
                return a[b]
            }
        }, {}],
        21: [function(b, e, l) {
            var a = null,
                k = {
                    FLOAT: "float",
                    FLOAT_VEC2: "vec2",
                    FLOAT_VEC3: "vec3",
                    FLOAT_VEC4: "vec4",
                    INT: "int",
                    INT_VEC2: "ivec2",
                    INT_VEC3: "ivec3",
                    INT_VEC4: "ivec4",
                    BOOL: "bool",
                    BOOL_VEC2: "bvec2",
                    BOOL_VEC3: "bvec3",
                    BOOL_VEC4: "bvec4",
                    FLOAT_MAT2: "mat2",
                    FLOAT_MAT3: "mat3",
                    FLOAT_MAT4: "mat4",
                    SAMPLER_2D: "sampler2D"
                };
            e.exports = function(f, d) {
                if (!a) {
                    var h = Object.keys(k);
                    a = {};
                    for (var m = 0; m < h.length; ++m) {
                        var q = h[m];
                        a[f[q]] = k[q]
                    }
                }
                return a[d]
            }
        }, {}],
        22: [function(b, e, l) {
            (function(a) {
                function b(d, a) {
                    for (var h = 0, f = d.length - 1; 0 <= f; f--) {
                        var m = d[f];
                        "." === m ? d.splice(f,
                            1) : ".." === m ? (d.splice(f, 1), h++) : h && (d.splice(f, 1), h--)
                    }
                    if (a)
                        for (; h--; h) d.unshift("..");
                    return d
                }

                function f(d, a) {
                    if (d.filter) return d.filter(a);
                    for (var h = [], f = 0; f < d.length; f++) a(d[f], f, d) && h.push(d[f]);
                    return h
                }
                var d = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                l.resolve = function() {
                    for (var d = "", h = !1, n = arguments.length - 1; - 1 <= n && !h; n--) {
                        var r = 0 <= n ? arguments[n] : a.cwd();
                        if ("string" != typeof r) throw new TypeError("Arguments to path.resolve must be strings");
                        r && (d = r + "/" + d, h = "/" === r.charAt(0))
                    }
                    return d =
                        b(f(d.split("/"), function(d) {
                            return !!d
                        }), !h).join("/"), (h ? "/" : "") + d || "."
                };
                l.normalize = function(d) {
                    var a = l.isAbsolute(d),
                        n = "/" === h(d, -1);
                    return d = b(f(d.split("/"), function(d) {
                        return !!d
                    }), !a).join("/"), d || a || (d = "."), d && n && (d += "/"), (a ? "/" : "") + d
                };
                l.isAbsolute = function(d) {
                    return "/" === d.charAt(0)
                };
                l.join = function() {
                    var d = Array.prototype.slice.call(arguments, 0);
                    return l.normalize(f(d, function(d, a) {
                        if ("string" != typeof d) throw new TypeError("Arguments to path.join must be strings");
                        return d
                    }).join("/"))
                };
                l.relative = function(d, a) {
                    function h(d) {
                        for (var a = 0; a < d.length && "" === d[a]; a++);
                        for (var h = d.length - 1; 0 <= h && "" === d[h]; h--);
                        return a > h ? [] : d.slice(a, h - a + 1)
                    }
                    d = l.resolve(d).substr(1);
                    a = l.resolve(a).substr(1);
                    for (var f = h(d.split("/")), m = h(a.split("/")), q = Math.min(f.length, m.length), b = q, e = 0; e < q; e++)
                        if (f[e] !== m[e]) {
                            b = e;
                            break
                        }
                    q = [];
                    for (e = b; e < f.length; e++) q.push("..");
                    return q = q.concat(m.slice(b)), q.join("/")
                };
                l.sep = "/";
                l.delimiter = ":";
                l.dirname = function(a) {
                    var h = d.exec(a).slice(1);
                    a = h[0];
                    h = h[1];
                    return a || h ? (h &&
                        (h = h.substr(0, h.length - 1)), a + h) : "."
                };
                l.basename = function(a, h) {
                    var f = d.exec(a).slice(1)[2];
                    return h && f.substr(-1 * h.length) === h && (f = f.substr(0, f.length - h.length)), f
                };
                l.extname = function(a) {
                    return d.exec(a).slice(1)[3]
                };
                var h = "b" === "ab".substr(-1) ? function(d, a, h) {
                    return d.substr(a, h)
                } : function(d, a, h) {
                    return 0 > a && (a = d.length + a), d.substr(a, h)
                }
            }).call(this, b("_process"))
        }, {
            _process: 23
        }],
        23: [function(b, e, l) {
            function a() {
                throw Error("setTimeout has not been defined");
            }

            function k() {
                throw Error("clearTimeout has not been defined");
            }

            function f(d) {
                if (r === setTimeout) return setTimeout(d, 0);
                if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(d, 0);
                try {
                    return r(d, 0)
                } catch (B) {
                    try {
                        return r.call(null, d, 0)
                    } catch (z) {
                        return r.call(this, d, 0)
                    }
                }
            }

            function d(d) {
                if (t === clearTimeout) return clearTimeout(d);
                if ((t === k || !t) && clearTimeout) return t = clearTimeout, clearTimeout(d);
                try {
                    return t(d)
                } catch (B) {
                    try {
                        return t.call(null, d)
                    } catch (z) {
                        return t.call(this, d)
                    }
                }
            }

            function h() {
                v && w && (v = !1, w.length ? u = w.concat(u) : y = -1, u.length && m())
            }

            function m() {
                if (!v) {
                    var a =
                        f(h);
                    v = !0;
                    for (var n = u.length; n;) {
                        w = u;
                        for (u = []; ++y < n;) w && w[y].run();
                        y = -1;
                        n = u.length
                    }
                    w = null;
                    v = !1;
                    d(a)
                }
            }

            function q(d, a) {
                this.fun = d;
                this.array = a
            }

            function n() {}
            var r, t;
            b = e.exports = {};
            try {
                r = "function" == typeof setTimeout ? setTimeout : a
            } catch (A) {
                r = a
            }
            try {
                t = "function" == typeof clearTimeout ? clearTimeout : k
            } catch (A) {
                t = k
            }!0;
            var w, u = [],
                v = !1,
                y = -1;
            b.nextTick = function(d) {
                var a = Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var h = 1; h < arguments.length; h++) a[h - 1] = arguments[h];
                u.push(new q(d, a));
                1 !== u.length || v || f(m)
            };
            q.prototype.run = function() {
                this.fun.apply(null, this.array)
            };
            b.title = "browser";
            b.browser = !0;
            b.env = {};
            b.argv = [];
            b.version = "";
            b.versions = {};
            b.on = n;
            b.addListener = n;
            b.once = n;
            b.off = n;
            b.removeListener = n;
            b.removeAllListeners = n;
            b.emit = n;
            b.binding = function(d) {
                throw Error("process.binding is not supported");
            };
            b.cwd = function() {
                return "/"
            };
            b.chdir = function(d) {
                throw Error("process.chdir is not supported");
            };
            b.umask = function() {
                return 0
            }
        }, {}],
        24: [function(b, e, l) {
            (function(a) {
                ! function(b) {
                    function f(d) {
                        throw new RangeError(N[d]);
                    }

                    function d(d, a) {
                        for (var h = d.length, f = []; h--;) f[h] = a(d[h]);
                        return f
                    }

                    function h(a, h) {
                        var f = a.split("@"),
                            n = "";
                        1 < f.length && (n = f[0] + "@", a = f[1]);
                        a = a.replace(M, ".");
                        f = a.split(".");
                        f = d(f, h).join(".");
                        return n + f
                    }

                    function m(d) {
                        for (var a, h, f = [], n = 0, m = d.length; n < m;) a = d.charCodeAt(n++), 55296 <= a && 56319 >= a && n < m ? (h = d.charCodeAt(n++), 56320 == (64512 & h) ? f.push(((1023 & a) << 10) + (1023 & h) + 65536) : (f.push(a), n--)) : f.push(a);
                        return f
                    }

                    function q(a) {
                        return d(a, function(d) {
                            var a = "";
                            return 65535 < d && (d -= 65536, a += K(d >>> 10 & 1023 | 55296),
                                d = 56320 | 1023 & d), a + K(d)
                        }).join("")
                    }

                    function n(d) {
                        return 10 > d - 48 ? d - 22 : 26 > d - 65 ? d - 65 : 26 > d - 97 ? d - 97 : x
                    }

                    function r(d, a) {
                        return d + 22 + 75 * (26 > d) - ((0 != a) << 5)
                    }

                    function k(d, a, h) {
                        var f = 0;
                        d = h ? Q(d / C) : d >> 1;
                        for (d += Q(d / a); d > O * G >> 1; f += x) d = Q(d / O);
                        return Q(f + (O + 1) * d / (d + E))
                    }

                    function w(d) {
                        var a, h, m, b, r, e, t, w = [],
                            l = d.length,
                            u = 0,
                            v = D,
                            y = H;
                        h = d.lastIndexOf(J);
                        0 > h && (h = 0);
                        for (m = 0; m < h; ++m) 128 <= d.charCodeAt(m) && f("not-basic"), w.push(d.charCodeAt(m));
                        for (h = 0 < h ? h + 1 : 0; h < l;) {
                            m = u;
                            a = 1;
                            for (b = x; h >= l && f("invalid-input"), r = n(d.charCodeAt(h++)),
                                (r >= x || r > Q((z - u) / a)) && f("overflow"), u += r * a, e = b <= y ? F : b >= y + G ? G : b - y, !(r < e); b += x) t = x - e, a > Q(z / t) && f("overflow"), a *= t;
                            a = w.length + 1;
                            y = k(u - m, a, 0 == m);
                            Q(u / a) > z - v && f("overflow");
                            v += Q(u / a);
                            u %= a;
                            w.splice(u++, 0, v)
                        }
                        return q(w)
                    }

                    function u(d) {
                        var a, h, n, q, b, e, t, w, l, u, v, y, A, B = [];
                        d = m(d);
                        v = d.length;
                        a = D;
                        h = 0;
                        b = H;
                        for (e = 0; e < v; ++e) u = d[e], 128 > u && B.push(K(u));
                        for ((n = q = B.length) && B.push(J); n < v;) {
                            t = z;
                            for (e = 0; e < v; ++e) u = d[e], u >= a && u < t && (t = u);
                            y = n + 1;
                            t - a > Q((z - h) / y) && f("overflow");
                            h += (t - a) * y;
                            a = t;
                            for (e = 0; e < v; ++e)
                                if (u = d[e], u < a && ++h > z &&
                                    f("overflow"), u == a) {
                                    w = h;
                                    for (t = x; l = t <= b ? F : t >= b + G ? G : t - b, !(w < l); t += x) A = w - l, w = x - l, B.push(K(r(l + A % w, 0))), w = Q(A / w);
                                    B.push(K(r(w, 0)));
                                    b = k(h, y, n == q);
                                    h = 0;
                                    ++n
                                }++h;
                            ++a
                        }
                        return B.join("")
                    }
                    var v = "object" == typeof l && l && !l.nodeType && l,
                        y = "object" == typeof e && e && !e.nodeType && e,
                        A = "object" == typeof a && a;
                    A.global !== A && A.window !== A && A.self !== A || (b = A);
                    var B, z = 2147483647,
                        x = 36,
                        F = 1,
                        G = 26,
                        E = 38,
                        C = 700,
                        H = 72,
                        D = 128,
                        J = "-",
                        I = /^xn--/,
                        L = /[^\x20-\x7E]/,
                        M = /[\x2E\u3002\uFF0E\uFF61]/g,
                        N = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        O = x - F,
                        Q = Math.floor,
                        K = String.fromCharCode,
                        A = {
                            version: "1.4.1",
                            ucs2: {
                                decode: m,
                                encode: q
                            },
                            decode: w,
                            encode: u,
                            toASCII: function(d) {
                                return h(d, function(d) {
                                    return L.test(d) ? "xn--" + u(d) : d
                                })
                            },
                            toUnicode: function(d) {
                                return h(d, function(d) {
                                    return I.test(d) ? w(d.slice(4).toLowerCase()) : d
                                })
                            }
                        };
                    if (v && y)
                        if (e.exports == v) y.exports = A;
                        else
                            for (B in A) A.hasOwnProperty(B) && (v[B] = A[B]);
                    else b.punycode = A
                }(this)
            }).call(this, "undefined" !=
                typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        25: [function(b, e, l) {
            e.exports = function(b, f, d, h) {
                d = d || "=";
                var m = {};
                if ("string" != typeof b || 0 === b.length) return m;
                var q = /\+/g;
                b = b.split(f || "&");
                f = 1E3;
                h && "number" == typeof h.maxKeys && (f = h.maxKeys);
                h = b.length;
                0 < f && h > f && (h = f);
                for (f = 0; f < h; ++f) {
                    var n, e, k, w;
                    k = b[f].replace(q, "%20");
                    w = k.indexOf(d);
                    0 <= w ? (n = k.substr(0, w), e = k.substr(w + 1)) : (n = k, e = "");
                    k = decodeURIComponent(n);
                    w = decodeURIComponent(e);
                    Object.prototype.hasOwnProperty.call(m,
                        k) ? a(m[k]) ? m[k].push(w) : m[k] = [m[k], w] : m[k] = w
                }
                return m
            };
            var a = Array.isArray || function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }
        }, {}],
        26: [function(b, e, l) {
            function a(d, a) {
                if (d.map) return d.map(a);
                for (var h = [], f = 0; f < d.length; f++) h.push(a(d[f], f));
                return h
            }
            var k = function(d) {
                switch (typeof d) {
                    case "string":
                        return d;
                    case "boolean":
                        return d ? "true" : "false";
                    case "number":
                        return isFinite(d) ? d : "";
                    default:
                        return ""
                }
            };
            e.exports = function(h, m, q, n) {
                return m = m || "&", q = q || "=", null === h && (h = void 0),
                    "object" == typeof h ? a(d(h), function(d) {
                        var n = encodeURIComponent(k(d)) + q;
                        return f(h[d]) ? a(h[d], function(d) {
                            return n + encodeURIComponent(k(d))
                        }).join(m) : n + encodeURIComponent(k(h[d]))
                    }).join(m) : n ? encodeURIComponent(k(n)) + q + encodeURIComponent(k(h)) : ""
            };
            var f = Array.isArray || function(d) {
                    return "[object Array]" === Object.prototype.toString.call(d)
                },
                d = Object.keys || function(d) {
                    var a = [],
                        h;
                    for (h in d) Object.prototype.hasOwnProperty.call(d, h) && a.push(h);
                    return a
                }
        }, {}],
        27: [function(b, e, l) {
            l.decode = l.parse = b("./decode");
            l.encode = l.stringify = b("./encode")
        }, {
            "./decode": 25,
            "./encode": 26
        }],
        28: [function(b, e, l) {
            function a() {
                this.href = this.path = this.pathname = this.query = this.search = this.hash = this.hostname = this.port = this.host = this.auth = this.slashes = this.protocol = null
            }

            function k(h, f, n) {
                if (h && d.isObject(h) && h instanceof a) return h;
                var m = new a;
                return m.parse(h, f, n), m
            }
            var f = b("punycode"),
                d = b("./util");
            l.parse = k;
            l.resolve = function(d, a) {
                return k(d, !1, !0).resolve(a)
            };
            l.resolveObject = function(d, a) {
                return d ? k(d, !1, !0).resolveObject(a) :
                    a
            };
            l.format = function(h) {
                return d.isString(h) && (h = k(h)), h instanceof a ? h.format() : a.prototype.format.call(h)
            };
            l.Url = a;
            var h = /^([a-z0-9.+-]+:)/i,
                m = /:[0-9]*$/,
                q = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
            e = "{}|\\^`".split("").concat('<>"` \r\n\t'.split(""));
            var n = ["'"].concat(e),
                r = ["%", "/", "?", ";", "#"].concat(n),
                t = ["/", "?", "#"],
                w = /^[+a-z0-9A-Z_-]{0,63}$/,
                u = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                v = {
                    javascript: !0,
                    "javascript:": !0
                },
                y = {
                    javascript: !0,
                    "javascript:": !0
                },
                A = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                B = b("querystring");
            a.prototype.parse = function(a, m, b) {
                if (!d.isString(a)) throw new TypeError("Parameter 'url' must be a string, not " + typeof a);
                var e = a.indexOf("?"),
                    e = -1 !== e && e < a.indexOf("#") ? "?" : "#";
                a = a.split(e);
                a[0] = a[0].replace(/\\/g, "/");
                e = a = a.join(e);
                if (e = e.trim(), !b && 1 === a.split("#").length)
                    if (a = q.exec(e)) return this.path = e, this.href = e, this.pathname = a[1], a[2] ? (this.search = a[2], m ? this.query = B.parse(this.search.substr(1)) : this.query = this.search.substr(1)) :
                        m && (this.search = "", this.query = {}), this;
                if (a = h.exec(e)) {
                    a = a[0];
                    var k = a.toLowerCase();
                    this.protocol = k;
                    e = e.substr(a.length)
                }
                if (b || a || e.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var l = "//" === e.substr(0, 2);
                    !l || a && y[a] || (e = e.substr(2), this.slashes = !0)
                }
                if (!y[a] && (l || a && !A[a])) {
                    l = -1;
                    for (b = 0; b < t.length; b++) a = e.indexOf(t[b]), -1 !== a && (-1 === l || a < l) && (l = a);
                    var x;
                    b = -1 === l ? e.lastIndexOf("@") : e.lastIndexOf("@", l); - 1 !== b && (x = e.slice(0, b), e = e.slice(b + 1), this.auth = decodeURIComponent(x));
                    l = -1;
                    for (b = 0; b < r.length; b++) a = e.indexOf(r[b]), -1 !== a && (-1 === l || a < l) && (l = a); - 1 === l && (l = e.length);
                    this.host = e.slice(0, l);
                    e = e.slice(l);
                    this.parseHost();
                    this.hostname = this.hostname || "";
                    x = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!x) {
                        var z = this.hostname.split(/\./);
                        b = 0;
                        for (l = z.length; b < l; b++)
                            if ((a = z[b]) && !a.match(w)) {
                                for (var F = "", I = 0, L = a.length; I < L; I++) F += 127 < a.charCodeAt(I) ? "x" : a[I];
                                if (!F.match(w)) {
                                    l = z.slice(0, b);
                                    b = z.slice(b + 1);
                                    (a = a.match(u)) && (l.push(a[1]), b.unshift(a[2]));
                                    b.length && (e = "/" + b.join(".") + e);
                                    this.hostname =
                                        l.join(".");
                                    break
                                }
                            }
                    }
                    255 < this.hostname.length ? this.hostname = "" : this.hostname = this.hostname.toLowerCase();
                    x || (this.hostname = f.toASCII(this.hostname));
                    b = this.port ? ":" + this.port : "";
                    this.host = (this.hostname || "") + b;
                    this.href += this.host;
                    x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== e[0] && (e = "/" + e))
                }
                if (!v[k])
                    for (b = 0, l = n.length; b < l; b++) x = n[b], -1 !== e.indexOf(x) && (a = encodeURIComponent(x), a === x && (a = escape(x)), e = e.split(x).join(a));
                b = e.indexOf("#"); - 1 !== b && (this.hash = e.substr(b), e = e.slice(0,
                    b));
                b = e.indexOf("?");
                if (-1 !== b ? (this.search = e.substr(b), this.query = e.substr(b + 1), m && (this.query = B.parse(this.query)), e = e.slice(0, b)) : m && (this.search = "", this.query = {}), e && (this.pathname = e), A[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) b = this.pathname || "", this.path = b + (this.search || "");
                return this.href = this.format(), this
            };
            a.prototype.format = function() {
                var a = this.auth || "";
                a && (a = encodeURIComponent(a), a = a.replace(/%3A/i, ":"), a += "@");
                var h = this.protocol || "",
                    f = this.pathname ||
                    "",
                    n = this.hash || "",
                    m = !1,
                    q = "";
                this.host ? m = a + this.host : this.hostname && (m = a + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (m += ":" + this.port));
                this.query && d.isObject(this.query) && Object.keys(this.query).length && (q = B.stringify(this.query));
                a = this.search || q && "?" + q || "";
                return h && ":" !== h.substr(-1) && (h += ":"), this.slashes || (!h || A[h]) && !1 !== m ? (m = "//" + (m || ""), f && "/" !== f.charAt(0) && (f = "/" + f)) : m || (m = ""), n && "#" !== n.charAt(0) && (n = "#" + n), a && "?" !== a.charAt(0) && (a = "?" + a), f = f.replace(/[?#]/g,
                    function(d) {
                        return encodeURIComponent(d)
                    }), a = a.replace("#", "%23"), h + m + f + a + n
            };
            a.prototype.resolve = function(d) {
                return this.resolveObject(k(d, !1, !0)).format()
            };
            a.prototype.resolveObject = function(h) {
                if (d.isString(h)) {
                    var f = new a;
                    f.parse(h, !1, !0);
                    h = f
                }
                for (var f = new a, n = Object.keys(this), m = 0; m < n.length; m++) {
                    var q = n[m];
                    f[q] = this[q]
                }
                if (f.hash = h.hash, "" === h.href) return f.href = f.format(), f;
                if (h.slashes && !h.protocol) {
                    n = Object.keys(h);
                    for (m = 0; m < n.length; m++) q = n[m], "protocol" !== q && (f[q] = h[q]);
                    return A[f.protocol] &&
                        f.hostname && !f.pathname && (f.path = f.pathname = "/"), f.href = f.format(), f
                }
                if (h.protocol && h.protocol !== f.protocol) {
                    if (!A[h.protocol]) {
                        n = Object.keys(h);
                        for (m = 0; m < n.length; m++) q = n[m], f[q] = h[q];
                        return f.href = f.format(), f
                    }
                    if (f.protocol = h.protocol, h.host || y[h.protocol]) f.pathname = h.pathname;
                    else {
                        for (var b = (h.pathname || "").split("/"); b.length && !(h.host = b.shift()););
                        h.host || (h.host = "");
                        h.hostname || (h.hostname = "");
                        "" !== b[0] && b.unshift("");
                        2 > b.length && b.unshift("");
                        f.pathname = b.join("/")
                    }
                    if (f.search = h.search, f.query =
                        h.query, f.host = h.host || "", f.auth = h.auth, f.hostname = h.hostname || h.host, f.port = h.port, f.pathname || f.search) f.path = (f.pathname || "") + (f.search || "");
                    return f.slashes = f.slashes || h.slashes, f.href = f.format(), f
                }
                var n = f.pathname && "/" === f.pathname.charAt(0),
                    e = h.host || h.pathname && "/" === h.pathname.charAt(0),
                    r = n = e || n || f.host && h.pathname,
                    m = f.pathname && f.pathname.split("/") || [],
                    b = h.pathname && h.pathname.split("/") || [],
                    q = f.protocol && !A[f.protocol];
                if (q && (f.hostname = "", f.port = null, f.host && ("" === m[0] ? m[0] = f.host : m.unshift(f.host)),
                        f.host = "", h.protocol && (h.hostname = null, h.port = null, h.host && ("" === b[0] ? b[0] = h.host : b.unshift(h.host)), h.host = null), n = n && ("" === b[0] || "" === m[0])), e) f.host = h.host || "" === h.host ? h.host : f.host, f.hostname = h.hostname || "" === h.hostname ? h.hostname : f.hostname, f.search = h.search, f.query = h.query, m = b;
                else if (b.length) m || (m = []), m.pop(), m = m.concat(b), f.search = h.search, f.query = h.query;
                else if (!d.isNullOrUndefined(h.search)) return q && (f.hostname = f.host = m.shift(), (q = !!(f.host && 0 < f.host.indexOf("@")) && f.host.split("@")) &&
                    (f.auth = q.shift(), f.host = f.hostname = q.shift())), f.search = h.search, f.query = h.query, d.isNull(f.pathname) && d.isNull(f.search) || (f.path = (f.pathname ? f.pathname : "") + (f.search ? f.search : "")), f.href = f.format(), f;
                if (!m.length) return f.pathname = null, f.search ? f.path = "/" + f.search : f.path = null, f.href = f.format(), f;
                for (var e = m.slice(-1)[0], b = (f.host || h.host || 1 < m.length) && ("." === e || ".." === e) || "" === e, k = 0, t = m.length; 0 <= t; t--) e = m[t], "." === e ? m.splice(t, 1) : ".." === e ? (m.splice(t, 1), k++) : k && (m.splice(t, 1), k--);
                if (!n && !r)
                    for (; k--; k) m.unshift("..");
                !n || "" === m[0] || m[0] && "/" === m[0].charAt(0) || m.unshift("");
                b && "/" !== m.join("/").substr(-1) && m.push("");
                r = "" === m[0] || m[0] && "/" === m[0].charAt(0);
                q && (f.hostname = f.host = r ? "" : m.length ? m.shift() : "", (q = !!(f.host && 0 < f.host.indexOf("@")) && f.host.split("@")) && (f.auth = q.shift(), f.host = f.hostname = q.shift()));
                return n = n || f.host && m.length, n && !r && m.unshift(""), m.length ? f.pathname = m.join("/") : (f.pathname = null, f.path = null), d.isNull(f.pathname) && d.isNull(f.search) || (f.path = (f.pathname ? f.pathname : "") + (f.search ? f.search :
                    "")), f.auth = h.auth || f.auth, f.slashes = f.slashes || h.slashes, f.href = f.format(), f
            };
            a.prototype.parseHost = function() {
                var d = this.host,
                    a = m.exec(d);
                a && (a = a[0], ":" !== a && (this.port = a.substr(1)), d = d.substr(0, d.length - a.length));
                d && (this.hostname = d)
            }
        }, {
            "./util": 29,
            punycode: 24,
            querystring: 27
        }],
        29: [function(b, e, l) {
                e.exports = {
                    isString: function(a) {
                        return "string" == typeof a
                    },
                    isObject: function(a) {
                        return "object" == typeof a && null !== a
                    },
                    isNull: function(a) {
                        return null === a
                    },
                    isNullOrUndefined: function(a) {
                        return null == a
                    }
                }
            },
            {}
        ],
        30: [function(b, e, l) {
            function a() {}

            function k(d, a, h) {
                this.fn = d;
                this.context = a;
                this.once = h || !1
            }

            function f() {
                this._events = new a;
                this._eventsCount = 0
            }
            var d = Object.prototype.hasOwnProperty,
                h = "~";
            Object.create && (a.prototype = Object.create(null), (new a).__proto__ || (h = !1));
            f.prototype.eventNames = function() {
                var a, f, n = [];
                if (0 === this._eventsCount) return n;
                for (f in a = this._events) d.call(a, f) && n.push(h ? f.slice(1) : f);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(a)) : n
            };
            f.prototype.listeners =
                function(d, a) {
                    var f = this._events[h ? h + d : d];
                    if (a) return !!f;
                    if (!f) return [];
                    if (f.fn) return [f.fn];
                    for (var m = 0, q = f.length, b = Array(q); m < q; m++) b[m] = f[m].fn;
                    return b
                };
            f.prototype.emit = function(d, a, f, b, e, k) {
                var m = h ? h + d : d;
                if (!this._events[m]) return !1;
                var n, q = this._events[m],
                    r = arguments.length;
                if (q.fn) {
                    switch (q.once && this.removeListener(d, q.fn, void 0, !0), r) {
                        case 1:
                            return q.fn.call(q.context), !0;
                        case 2:
                            return q.fn.call(q.context, a), !0;
                        case 3:
                            return q.fn.call(q.context, a, f), !0;
                        case 4:
                            return q.fn.call(q.context,
                                a, f, b), !0;
                        case 5:
                            return q.fn.call(q.context, a, f, b, e), !0;
                        case 6:
                            return q.fn.call(q.context, a, f, b, e, k), !0
                    }
                    m = 1;
                    for (n = Array(r - 1); m < r; m++) n[m - 1] = arguments[m];
                    q.fn.apply(q.context, n)
                } else
                    for (var t, l = q.length, m = 0; m < l; m++) switch (q[m].once && this.removeListener(d, q[m].fn, void 0, !0), r) {
                        case 1:
                            q[m].fn.call(q[m].context);
                            break;
                        case 2:
                            q[m].fn.call(q[m].context, a);
                            break;
                        case 3:
                            q[m].fn.call(q[m].context, a, f);
                            break;
                        case 4:
                            q[m].fn.call(q[m].context, a, f, b);
                            break;
                        default:
                            if (!n)
                                for (t = 1, n = Array(r - 1); t < r; t++) n[t - 1] = arguments[t];
                            q[m].fn.apply(q[m].context, n)
                    }
                return !0
            };
            f.prototype.on = function(d, a, f) {
                a = new k(a, f || this);
                d = h ? h + d : d;
                return this._events[d] ? this._events[d].fn ? this._events[d] = [this._events[d], a] : this._events[d].push(a) : (this._events[d] = a, this._eventsCount++), this
            };
            f.prototype.once = function(d, a, f) {
                a = new k(a, f || this, !0);
                d = h ? h + d : d;
                return this._events[d] ? this._events[d].fn ? this._events[d] = [this._events[d], a] : this._events[d].push(a) : (this._events[d] = a, this._eventsCount++), this
            };
            f.prototype.removeListener = function(d, f,
                n, b) {
                d = h ? h + d : d;
                if (!this._events[d]) return this;
                if (!f) return 0 === --this._eventsCount ? this._events = new a : delete this._events[d], this;
                var m = this._events[d];
                if (m.fn) m.fn !== f || b && !m.once || n && m.context !== n || (0 === --this._eventsCount ? this._events = new a : delete this._events[d]);
                else {
                    for (var q = 0, e = [], r = m.length; q < r; q++)(m[q].fn !== f || b && !m[q].once || n && m[q].context !== n) && e.push(m[q]);
                    e.length ? this._events[d] = 1 === e.length ? e[0] : e : 0 === --this._eventsCount ? this._events = new a : delete this._events[d]
                }
                return this
            };
            f.prototype.removeAllListeners =
                function(d) {
                    var f;
                    return d ? (f = h ? h + d : d, this._events[f] && (0 === --this._eventsCount ? this._events = new a : delete this._events[f])) : (this._events = new a, this._eventsCount = 0), this
                };
            f.prototype.off = f.prototype.removeListener;
            f.prototype.addListener = f.prototype.on;
            f.prototype.setMaxListeners = function() {
                return this
            };
            f.prefixed = h;
            f.EventEmitter = f;
            "undefined" != typeof e && (e.exports = f)
        }, {}],
        31: [function(b, e, l) {
            e.exports = function(a, b) {
                b = b || {};
                for (var f = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
                        d = {
                            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                        }[b.strictMode ? "strict" : "loose"].exec(a), h = {}, m = 14; m--;) h[f[m]] = d[m] || "";
                return h.queryKey = {}, h[f[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(d, a, f) {
                    a &&
                        (h.queryKey[a] = f)
                }), h
            }
        }, {}],
        32: [function(b, e, l) {
                function a(d, a) {
                    h.call(this);
                    a = a || m;
                    this.baseUrl = d || "";
                    this.progress = 0;
                    this.loading = !1;
                    this._progressChunk = 0;
                    this._beforeMiddleware = [];
                    this._afterMiddleware = [];
                    this._boundLoadResource = this._loadResource.bind(this);
                    this._buffer = [];
                    this._numToLoad = 0;
                    this._queue = f.queue(this._boundLoadResource, a);
                    this.resources = {}
                }
                var k = b("parse-uri"),
                    f = b("./async"),
                    d = b("./Resource"),
                    h = b("eventemitter3"),
                    m = 10;
                a.prototype = Object.create(h.prototype);
                a.prototype.constructor =
                    a;
                e.exports = a;
                a.prototype.add = a.prototype.enqueue = function(a, h, f, m) {
                    if (Array.isArray(a)) {
                        for (h = 0; h < a.length; ++h) this.add(a[h]);
                        return this
                    }
                    if ("object" == typeof a && (m = h || a.callback || a.onComplete, f = a, h = a.url, a = a.name || a.key || a.url), "string" != typeof h && (m = f, f = h, h = a), "string" != typeof h) throw Error("No url passed to add resource to loader.");
                    if ("function" == typeof f && (m = f, f = null), this.resources[a]) throw Error('Resource with name "' + a + '" already exists.');
                    return h = this._prepareUrl(h), this.resources[a] = new d(a,
                        h, f), "function" == typeof m && this.resources[a].once("afterMiddleware", m), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[a]), this._progressChunk = (100 - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[a]), this._progressChunk = 100 / this._buffer.length), this
                };
                a.prototype.before = a.prototype.pre = function(d) {
                    return this._beforeMiddleware.push(d), this
                };
                a.prototype.after = a.prototype.use = function(d) {
                    return this._afterMiddleware.push(d), this
                };
                a.prototype.reset = function() {
                    this.progress = 0;
                    this.loading = !1;
                    this._progressChunk = 0;
                    this._numToLoad = this._buffer.length = 0;
                    this._queue.kill();
                    this._queue.started = !1;
                    for (var d in this.resources) {
                        var a = this.resources[d];
                        a.off("complete", this._onLoad, this);
                        a.isLoading && a.abort()
                    }
                    return this.resources = {}, this
                };
                a.prototype.load = function(d) {
                    if ("function" == typeof d && this.once("complete", d), this._queue.started) return this;
                    this.emit("start", this);
                    this.loading = !0;
                    for (d = 0; d < this._buffer.length; ++d) this._queue.push(this._buffer[d]);
                    return this._buffer.length = 0, this
                };
                a.prototype._prepareUrl = function(d) {
                    var a = k(d, {
                        strictMode: !0
                    });
                    return a.protocol || !a.path || 0 === a.path.indexOf("//") ? d : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== d.charAt(0) ? this.baseUrl + "/" + d : this.baseUrl + d
                };
                a.prototype._loadResource = function(d, a) {
                    var h = this;
                    d._dequeue = a;
                    f.eachSeries(this._beforeMiddleware, function(a, f) {
                        a.call(h, d, function() {
                            f(d.isComplete ? {} : null)
                        })
                    }, function() {
                        d.isComplete ? h._onLoad(d) : (d.once("complete",
                            h._onLoad, h), d.load())
                    })
                };
                a.prototype._onComplete = function() {
                    this.loading = !1;
                    this.emit("complete", this, this.resources)
                };
                a.prototype._onLoad = function(d) {
                    var a = this;
                    f.eachSeries(this._afterMiddleware, function(h, f) {
                        h.call(a, d, f)
                    }, function() {
                        d.emit("afterMiddleware", d);
                        a._numToLoad--;
                        a.progress += a._progressChunk;
                        a.emit("progress", a, d);
                        d.error ? a.emit("error", d.error, a, d) : a.emit("load", a, d);
                        0 === a._numToLoad && (a.progress = 100, a._onComplete())
                    });
                    d._dequeue()
                };
                a.LOAD_TYPE = d.LOAD_TYPE;
                a.XHR_RESPONSE_TYPE = d.XHR_RESPONSE_TYPE
            },
            {
                "./Resource": 33,
                "./async": 34,
                eventemitter3: 30,
                "parse-uri": 31
            }
        ],
        33: [function(b, e, l) {
            function a(a, h, f) {
                if (d.call(this), f = f || {}, "string" != typeof a || "string" != typeof h) throw Error("Both name and url are required for constructing a resource.");
                this.name = a;
                this.url = h;
                this.isDataUrl = 0 === this.url.indexOf("data:");
                this.data = null;
                this.crossOrigin = !0 === f.crossOrigin ? "anonymous" : f.crossOrigin;
                this.loadType = f.loadType || this._determineLoadType();
                this.xhrType = f.xhrType;
                this.metadata = f.metadata || {};
                this.xhr = this.error =
                    null;
                this.isLoading = this.isComplete = this.isVideo = this.isAudio = this.isImage = this.isXml = this.isJson = !1;
                this._dequeue = null;
                this._boundComplete = this.complete.bind(this);
                this._boundOnError = this._onError.bind(this);
                this._boundOnProgress = this._onProgress.bind(this);
                this._boundXhrOnError = this._xhrOnError.bind(this);
                this._boundXhrOnAbort = this._xhrOnAbort.bind(this);
                this._boundXhrOnLoad = this._xhrOnLoad.bind(this);
                this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
            }

            function k(d) {
                return d.toString().replace("object ",
                    "")
            }

            function f(d, a, h) {
                a && 0 === a.indexOf(".") && (a = a.substring(1));
                a && (d[a] = h)
            }
            var d = b("eventemitter3"),
                h = b("parse-uri"),
                m = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
                q = null;
            a.prototype = Object.create(d.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.complete = function() {
                if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress",
                        this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.isComplete) throw Error("Complete called again for an already completed resource.");
                this.isComplete = !0;
                this.isLoading = !1;
                this.emit("complete", this)
            };
            a.prototype.abort = function(d) {
                if (!this.error) {
                    if (this.error = Error(d), this.xhr) this.xhr.abort();
                    else if (this.xdr) this.xdr.abort();
                    else if (this.data)
                        if ("undefined" != typeof this.data.src) this.data.src = "";
                        else
                            for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                    this.complete()
                }
            };
            a.prototype.load = function(d) {
                if (!this.isLoading)
                    if (this.isComplete) {
                        if (d) {
                            var h = this;
                            setTimeout(function() {
                                d(h)
                            }, 1)
                        }
                    } else switch (d && this.once("complete",
                        d), this.isLoading = !0, this.emit("start", this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                        case a.LOAD_TYPE.IMAGE:
                            this._loadElement("image");
                            break;
                        case a.LOAD_TYPE.AUDIO:
                            this._loadSourceElement("audio");
                            break;
                        case a.LOAD_TYPE.VIDEO:
                            this._loadSourceElement("video");
                            break;
                        default:
                            m && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                    }
            };
            a.prototype._loadElement = function(d) {
                this.metadata.loadElement ? this.data = this.metadata.loadElement :
                    "image" === d && "undefined" != typeof window.Image ? this.data = new Image : this.data = document.createElement(d);
                this.crossOrigin && (this.data.crossOrigin = this.crossOrigin);
                this.metadata.skipSource || (this.data.src = this.url);
                d = "is" + d[0].toUpperCase() + d.substring(1);
                !1 === this[d] && (this[d] = !0);
                this.data.addEventListener("error", this._boundOnError, !1);
                this.data.addEventListener("load", this._boundComplete, !1);
                this.data.addEventListener("progress", this._boundOnProgress, !1)
            };
            a.prototype._loadSourceElement = function(d) {
                if (this.metadata.loadElement ?
                    this.data = this.metadata.loadElement : "audio" === d && "undefined" != typeof window.Audio ? this.data = new Audio : this.data = document.createElement(d), null === this.data) return void this.abort("Unsupported element " + d);
                if (!this.metadata.skipSource)
                    if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                    else if (Array.isArray(this.url))
                    for (var a = 0; a < this.url.length; ++a) this.data.appendChild(this._createSource(d, this.url[a]));
                else this.data.appendChild(this._createSource(d, this.url));
                this["is" +
                    d[0].toUpperCase() + d.substring(1)] = !0;
                this.data.addEventListener("error", this._boundOnError, !1);
                this.data.addEventListener("load", this._boundComplete, !1);
                this.data.addEventListener("progress", this._boundOnProgress, !1);
                this.data.addEventListener("canplaythrough", this._boundComplete, !1);
                this.data.load()
            };
            a.prototype._loadXhr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var d = this.xhr = new XMLHttpRequest;
                d.open("GET", this.url, !0);
                this.xhrType === a.XHR_RESPONSE_TYPE.JSON ||
                    this.xhrType === a.XHR_RESPONSE_TYPE.DOCUMENT ? d.responseType = a.XHR_RESPONSE_TYPE.TEXT : d.responseType = this.xhrType;
                d.addEventListener("error", this._boundXhrOnError, !1);
                d.addEventListener("abort", this._boundXhrOnAbort, !1);
                d.addEventListener("progress", this._boundOnProgress, !1);
                d.addEventListener("load", this._boundXhrOnLoad, !1);
                d.send()
            };
            a.prototype._loadXdr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var d = this.xhr = new XDomainRequest;
                d.timeout = 5E3;
                d.onerror = this._boundXhrOnError;
                d.ontimeout = this._boundXdrOnTimeout;
                d.onprogress = this._boundOnProgress;
                d.onload = this._boundXhrOnLoad;
                d.open("GET", this.url, !0);
                setTimeout(function() {
                    d.send()
                }, 0)
            };
            a.prototype._createSource = function(d, a, h) {
                h || (h = d + "/" + a.substr(a.lastIndexOf(".") + 1));
                d = document.createElement("source");
                return d.src = a, d.type = h, d
            };
            a.prototype._onError = function(d) {
                this.abort("Failed to load element using " + d.target.nodeName)
            };
            a.prototype._onProgress = function(d) {
                d && d.lengthComputable && this.emit("progress", this, d.loaded /
                    d.total)
            };
            a.prototype._xhrOnError = function() {
                var d = this.xhr;
                this.abort(k(d) + " Request failed. Status: " + d.status + ', text: "' + d.statusText + '"')
            };
            a.prototype._xhrOnAbort = function() {
                this.abort(k(this.xhr) + " Request was aborted by the user.")
            };
            a.prototype._xdrOnTimeout = function() {
                this.abort(k(this.xhr) + " Request timed out.")
            };
            a.prototype._xhrOnLoad = function() {
                var d = this.xhr,
                    h = "undefined" == typeof d.status ? d.status : 200;
                if (!(200 === h || 204 === h || 0 === h && 0 < d.responseText.length)) return void this.abort("[" + d.status +
                    "]" + d.statusText + ":" + d.responseURL);
                if (this.xhrType === a.XHR_RESPONSE_TYPE.TEXT) this.data = d.responseText;
                else if (this.xhrType === a.XHR_RESPONSE_TYPE.JSON) try {
                    this.data = JSON.parse(d.responseText), this.isJson = !0
                } catch (w) {
                    return void this.abort("Error trying to parse loaded json:", w)
                } else if (this.xhrType === a.XHR_RESPONSE_TYPE.DOCUMENT) try {
                    if (window.DOMParser) this.data = (new DOMParser).parseFromString(d.responseText, "text/xml");
                    else {
                        var f = document.createElement("div");
                        f.innerHTML = d.responseText;
                        this.data =
                            f
                    }
                    this.isXml = !0
                } catch (w) {
                    return void this.abort("Error trying to parse loaded xml:", w)
                } else this.data = d.response || d.responseText;
                this.complete()
            };
            a.prototype._determineCrossOrigin = function(d, a) {
                if (0 === d.indexOf("data:")) return "";
                a = a || window.location;
                q || (q = document.createElement("a"));
                q.href = d;
                d = h(q.href, {
                    strictMode: !0
                });
                var f = !d.port && "" === a.port || d.port === a.port,
                    m = d.protocol ? d.protocol + ":" : "";
                return d.host === a.hostname && f && m === a.protocol ? "" : "anonymous"
            };
            a.prototype._determineXhrType = function() {
                return a._xhrTypeMap[this._getExtension()] ||
                    a.XHR_RESPONSE_TYPE.TEXT
            };
            a.prototype._determineLoadType = function() {
                return a._loadTypeMap[this._getExtension()] || a.LOAD_TYPE.XHR
            };
            a.prototype._getExtension = function() {
                var d = this.url;
                if (this.isDataUrl) var a = d.indexOf("/"),
                    d = d.substring(a + 1, d.indexOf(";", a));
                else a = d.indexOf("?"), -1 !== a && (d = d.substring(0, a)), d = d.substring(d.lastIndexOf(".") + 1);
                return d.toLowerCase()
            };
            a.prototype._getMimeFromXhrType = function(d) {
                switch (d) {
                    case a.XHR_RESPONSE_TYPE.BUFFER:
                        return "application/octet-binary";
                    case a.XHR_RESPONSE_TYPE.BLOB:
                        return "application/blob";
                    case a.XHR_RESPONSE_TYPE.DOCUMENT:
                        return "application/xml";
                    case a.XHR_RESPONSE_TYPE.JSON:
                        return "application/json";
                    default:
                        return "text/plain"
                }
            };
            a.LOAD_TYPE = {
                XHR: 1,
                IMAGE: 2,
                AUDIO: 3,
                VIDEO: 4
            };
            a.XHR_RESPONSE_TYPE = {
                DEFAULT: "text",
                BUFFER: "arraybuffer",
                BLOB: "blob",
                DOCUMENT: "document",
                JSON: "json",
                TEXT: "text"
            };
            a._loadTypeMap = {
                gif: a.LOAD_TYPE.IMAGE,
                png: a.LOAD_TYPE.IMAGE,
                bmp: a.LOAD_TYPE.IMAGE,
                jpg: a.LOAD_TYPE.IMAGE,
                jpeg: a.LOAD_TYPE.IMAGE,
                tif: a.LOAD_TYPE.IMAGE,
                tiff: a.LOAD_TYPE.IMAGE,
                webp: a.LOAD_TYPE.IMAGE,
                tga: a.LOAD_TYPE.IMAGE,
                "svg+xml": a.LOAD_TYPE.IMAGE
            };
            a._xhrTypeMap = {
                xhtml: a.XHR_RESPONSE_TYPE.DOCUMENT,
                html: a.XHR_RESPONSE_TYPE.DOCUMENT,
                htm: a.XHR_RESPONSE_TYPE.DOCUMENT,
                xml: a.XHR_RESPONSE_TYPE.DOCUMENT,
                tmx: a.XHR_RESPONSE_TYPE.DOCUMENT,
                tsx: a.XHR_RESPONSE_TYPE.DOCUMENT,
                svg: a.XHR_RESPONSE_TYPE.DOCUMENT,
                gif: a.XHR_RESPONSE_TYPE.BLOB,
                png: a.XHR_RESPONSE_TYPE.BLOB,
                bmp: a.XHR_RESPONSE_TYPE.BLOB,
                jpg: a.XHR_RESPONSE_TYPE.BLOB,
                jpeg: a.XHR_RESPONSE_TYPE.BLOB,
                tif: a.XHR_RESPONSE_TYPE.BLOB,
                tiff: a.XHR_RESPONSE_TYPE.BLOB,
                webp: a.XHR_RESPONSE_TYPE.BLOB,
                tga: a.XHR_RESPONSE_TYPE.BLOB,
                json: a.XHR_RESPONSE_TYPE.JSON,
                text: a.XHR_RESPONSE_TYPE.TEXT,
                txt: a.XHR_RESPONSE_TYPE.TEXT
            };
            a.setExtensionLoadType = function(d, h) {
                f(a._loadTypeMap, d, h)
            };
            a.setExtensionXhrType = function(d, h) {
                f(a._xhrTypeMap, d, h)
            }
        }, {
            eventemitter3: 30,
            "parse-uri": 31
        }],
        34: [function(b, e, l) {
            function a() {}

            function k(a) {
                return function() {
                    if (null === a) throw Error("Callback was already called.");
                    var d = a;
                    a = null;
                    d.apply(this, arguments)
                }
            }
            e.exports = {
                eachSeries: function(a, d, h) {
                    var f = 0,
                        q = a.length;
                    ! function r(m) {
                        return m ||
                            f === q ? void(h && h(m)) : void d(a[f++], r)
                    }()
                },
                queue: function(f, d) {
                    function h(d, h, f) {
                        if (null != f && "function" != typeof f) throw Error("task callback must be a function");
                        if (n.started = !0, null == d && n.idle()) return void setTimeout(function() {
                            n.drain()
                        }, 1);
                        d = {
                            data: d,
                            callback: "function" == typeof f ? f : a
                        };
                        h ? n._tasks.unshift(d) : n._tasks.push(d);
                        setTimeout(function() {
                            n.process()
                        }, 1)
                    }

                    function m(d) {
                        return function() {
                            --q;
                            d.callback.apply(d, arguments);
                            null != arguments[0] && n.error(arguments[0], d.data);
                            q <= n.concurrency - n.buffer &&
                                n.unsaturated();
                            n.idle() && n.drain();
                            n.process()
                        }
                    }
                    if (null == d) d = 1;
                    else if (0 === d) throw Error("Concurrency must not be zero");
                    var q = 0,
                        n = {
                            _tasks: [],
                            concurrency: d,
                            saturated: a,
                            unsaturated: a,
                            buffer: d / 4,
                            empty: a,
                            drain: a,
                            error: a,
                            started: !1,
                            paused: !1,
                            push: function(d, a) {
                                h(d, !1, a)
                            },
                            kill: function() {
                                n.drain = a;
                                n._tasks = []
                            },
                            unshift: function(d, a) {
                                h(d, !0, a)
                            },
                            process: function() {
                                for (; !n.paused && q < n.concurrency && n._tasks.length;) {
                                    var d = n._tasks.shift();
                                    0 === n._tasks.length && n.empty();
                                    q += 1;
                                    q === n.concurrency && n.saturated();
                                    f(d.data, k(m(d)))
                                }
                            },
                            length: function() {
                                return n._tasks.length
                            },
                            running: function() {
                                return q
                            },
                            idle: function() {
                                return 0 === n._tasks.length + q
                            },
                            pause: function() {
                                !0 !== n.paused && (n.paused = !0)
                            },
                            resume: function() {
                                if (!1 !== n.paused) {
                                    n.paused = !1;
                                    for (var d = 1; d <= n.concurrency; d++) n.process()
                                }
                            }
                        };
                    return n
                }
            }
        }, {}],
        35: [function(b, e, l) {
            e.exports = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encodeBinary: function(a) {
                    for (var b, f = "", d = Array(4), h = 0, m; h < a.length;) {
                        b = Array(3);
                        for (m = 0; m < b.length; m++) h <
                            a.length ? b[m] = 255 & a.charCodeAt(h++) : b[m] = 0;
                        switch (d[0] = b[0] >> 2, d[1] = (3 & b[0]) << 4 | b[1] >> 4, d[2] = (15 & b[1]) << 2 | b[2] >> 6, d[3] = 63 & b[2], h - (a.length - 1)) {
                            case 2:
                                d[3] = 64;
                                d[2] = 64;
                                break;
                            case 1:
                                d[3] = 64
                        }
                        for (m = 0; m < d.length; m++) f += this._keyStr.charAt(d[m])
                    }
                    return f
                }
            }
        }, {}],
        36: [function(b, e, l) {
            e.exports = b("./Loader");
            e.exports.Resource = b("./Resource");
            e.exports.middleware = {
                caching: {
                    memory: b("./middlewares/caching/memory")
                },
                parsing: {
                    blob: b("./middlewares/parsing/blob")
                }
            };
            e.exports.async = b("./async")
        }, {
            "./Loader": 32,
            "./Resource": 33,
            "./async": 34,
            "./middlewares/caching/memory": 37,
            "./middlewares/parsing/blob": 38
        }],
        37: [function(b, e, l) {
            var a = {};
            e.exports = function() {
                return function(b, f) {
                    a[b.url] ? (b.data = a[b.url], b.complete()) : b.once("complete", function() {
                        a[this.url] = this.data
                    });
                    f()
                }
            }
        }, {}],
        38: [function(b, e, l) {
            var a = b("../../Resource"),
                k = b("../../b64"),
                f = window.URL || window.webkitURL;
            e.exports = function() {
                return function(d, h) {
                    if (!d.data) return void h();
                    if (d.xhr && d.xhrType === a.XHR_RESPONSE_TYPE.BLOB)
                        if (window.Blob && "string" != typeof d.data) {
                            if (0 ===
                                d.data.type.indexOf("image")) {
                                var m = f.createObjectURL(d.data);
                                return d.blob = d.data, d.data = new Image, d.data.src = m, d.isImage = !0, void(d.data.onload = function() {
                                    f.revokeObjectURL(m);
                                    d.data.onload = null;
                                    h()
                                })
                            }
                        } else {
                            var b = d.xhr.getResponseHeader("content-type");
                            if (b && 0 === b.indexOf("image")) return d.data = new Image, d.data.src = "data:" + b + ";base64," + k.encodeBinary(d.xhr.responseText), d.isImage = !0, void(d.data.onload = function() {
                                d.data.onload = null;
                                h()
                            })
                        }
                    h()
                }
            }
        }, {
            "../../Resource": 33,
            "../../b64": 35
        }],
        39: [function(b,
            e, l) {
            function a(d) {
                !f.tablet && !f.phone || navigator.isCocoonJS || this.createTouchHook();
                var a = document.createElement("div");
                a.style.width = "100px";
                a.style.height = "100px";
                a.style.position = "absolute";
                a.style.top = 0;
                a.style.left = 0;
                a.style.zIndex = 2;
                this.div = a;
                this.pool = [];
                this.renderId = 0;
                this.debug = !1;
                this.renderer = d;
                this.children = [];
                this._onKeyDown = this._onKeyDown.bind(this);
                this._onMouseMove = this._onMouseMove.bind(this);
                this.isMobileAccessabillity = this.isActive = !1;
                window.addEventListener("keydown", this._onKeyDown, !1)
            }
            var k = b("../core"),
                f = b("ismobilejs");
            Object.assign(k.DisplayObject.prototype, b("./accessibleTarget"));
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.createTouchHook = function() {
                var d = document.createElement("button");
                d.style.width = "1px";
                d.style.height = "1px";
                d.style.position = "absolute";
                d.style.top = "-1000px";
                d.style.left = "-1000px";
                d.style.zIndex = 2;
                d.style.backgroundColor = "#FF0000";
                d.title = "HOOK DIV";
                d.addEventListener("focus", function() {
                    this.isMobileAccessabillity = !0;
                    this.activate();
                    document.body.removeChild(d)
                }.bind(this));
                document.body.appendChild(d)
            };
            a.prototype.activate = function() {
                this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
            };
            a.prototype.deactivate = function() {
                this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove),
                    window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
            };
            a.prototype.updateAccessibleObjects = function(d) {
                if (d.visible) {
                    d.accessible && d.interactive && (d._accessibleActive || this.addChild(d), d.renderId = this.renderId);
                    d = d.children;
                    for (var a = d.length - 1; 0 <= a; a--) this.updateAccessibleObjects(d[a])
                }
            };
            a.prototype.update = function() {
                if (this.renderer.renderingToScreen) {
                    this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                    var d = this.renderer.view.getBoundingClientRect(),
                        a = d.width / this.renderer.width,
                        f = d.height / this.renderer.height,
                        b = this.div;
                    b.style.left = d.left + "px";
                    b.style.top = d.top + "px";
                    b.style.width = this.renderer.width + "px";
                    b.style.height = this.renderer.height + "px";
                    for (d = 0; d < this.children.length; d++) {
                        var n = this.children[d];
                        if (n.renderId !== this.renderId) n._accessibleActive = !1, k.utils.removeItems(this.children, d, 1), this.div.removeChild(n._accessibleDiv), this.pool.push(n._accessibleDiv), n._accessibleDiv = null, d--, 0 ===
                            this.children.length && this.deactivate();
                        else {
                            var b = n._accessibleDiv,
                                e = n.hitArea,
                                t = n.worldTransform;
                            n.hitArea ? (b.style.left = (t.tx + e.x * t.a) * a + "px", b.style.top = (t.ty + e.y * t.d) * f + "px", b.style.width = e.width * t.a * a + "px", b.style.height = e.height * t.d * f + "px") : (e = n.getBounds(), this.capHitArea(e), b.style.left = e.x * a + "px", b.style.top = e.y * f + "px", b.style.width = e.width * a + "px", b.style.height = e.height * f + "px")
                        }
                    }
                    this.renderId++
                }
            };
            a.prototype.capHitArea = function(d) {
                0 > d.x && (d.width += d.x, d.x = 0);
                0 > d.y && (d.height += d.y, d.y = 0);
                d.x + d.width > this.renderer.width && (d.width = this.renderer.width - d.x);
                d.y + d.height > this.renderer.height && (d.height = this.renderer.height - d.y)
            };
            a.prototype.addChild = function(d) {
                var a = this.pool.pop();
                a || (a = document.createElement("button"), a.style.width = "100px", a.style.height = "100px", a.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", a.style.position = "absolute", a.style.zIndex = 2, a.style.borderStyle = "none", a.addEventListener("click", this._onClick.bind(this)), a.addEventListener("focus", this._onFocus.bind(this)),
                    a.addEventListener("focusout", this._onFocusOut.bind(this)));
                d.accessibleTitle ? a.title = d.accessibleTitle : d.accessibleTitle || d.accessibleHint || (a.title = "displayObject " + this.tabIndex);
                d.accessibleHint && a.setAttribute("aria-label", d.accessibleHint);
                d._accessibleActive = !0;
                d._accessibleDiv = a;
                a.displayObject = d;
                this.children.push(d);
                this.div.appendChild(d._accessibleDiv);
                d._accessibleDiv.tabIndex = d.tabIndex
            };
            a.prototype._onClick = function(d) {
                var a = this.renderer.plugins.interaction;
                a.dispatchEvent(d.target.displayObject,
                    "click", a.eventData)
            };
            a.prototype._onFocus = function(d) {
                var a = this.renderer.plugins.interaction;
                a.dispatchEvent(d.target.displayObject, "mouseover", a.eventData)
            };
            a.prototype._onFocusOut = function(d) {
                var a = this.renderer.plugins.interaction;
                a.dispatchEvent(d.target.displayObject, "mouseout", a.eventData)
            };
            a.prototype._onKeyDown = function(d) {
                9 === d.keyCode && this.activate()
            };
            a.prototype._onMouseMove = function() {
                this.deactivate()
            };
            a.prototype.destroy = function() {
                this.div = null;
                for (var d = 0; d < this.children.length; d++) this.children[d].div =
                    null;
                window.document.removeEventListener("mousemove", this._onMouseMove);
                window.removeEventListener("keydown", this._onKeyDown);
                this.renderer = this.children = this.pool = null
            };
            k.WebGLRenderer.registerPlugin("accessibility", a);
            k.CanvasRenderer.registerPlugin("accessibility", a)
        }, {
            "../core": 62,
            "./accessibleTarget": 40,
            ismobilejs: 4
        }],
        40: [function(b, e, l) {
            e.exports = {
                accessible: !1,
                accessibleTitle: null,
                accessibleHint: null,
                tabIndex: 0,
                _accessibleActive: !1,
                _accessibleDiv: !1
            }
        }, {}],
        41: [function(b, e, l) {
            e.exports = {
                accessibleTarget: b("./accessibleTarget"),
                AccessibilityManager: b("./AccessibilityManager")
            }
        }, {
            "./AccessibilityManager": 39,
            "./accessibleTarget": 40
        }],
        42: [function(b, e, l) {
            function a(d) {
                if (d instanceof Array) {
                    if ("precision" !== d[0].substring(0, 9)) return d = d.slice(0), d.unshift("precision " + f.PRECISION.DEFAULT + " float;"), d
                } else if ("precision" !== d.substring(0, 9)) return "precision " + f.PRECISION.DEFAULT + " float;\n" + d;
                return d
            }
            var k = b("pixi-gl-core").GLShader,
                f = b("./const");
            b = function(d, h, f, b) {
                k.call(this, d, a(h), a(f), b)
            };
            b.prototype = Object.create(k.prototype);
            b.prototype.constructor = b;
            e.exports = b
        }, {
            "./const": 43,
            "pixi-gl-core": 12
        }],
        43: [function(b, e, l) {
            b = {
                VERSION: "4.0.3",
                PI_2: 2 * Math.PI,
                RAD_TO_DEG: 180 / Math.PI,
                DEG_TO_RAD: Math.PI / 180,
                TARGET_FPMS: .06,
                RENDERER_TYPE: {
                    UNKNOWN: 0,
                    WEBGL: 1,
                    CANVAS: 2
                },
                BLEND_MODES: {
                    NORMAL: 0,
                    ADD: 1,
                    MULTIPLY: 2,
                    SCREEN: 3,
                    OVERLAY: 4,
                    DARKEN: 5,
                    LIGHTEN: 6,
                    COLOR_DODGE: 7,
                    COLOR_BURN: 8,
                    HARD_LIGHT: 9,
                    SOFT_LIGHT: 10,
                    DIFFERENCE: 11,
                    EXCLUSION: 12,
                    HUE: 13,
                    SATURATION: 14,
                    COLOR: 15,
                    LUMINOSITY: 16
                },
                DRAW_MODES: {
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6
                },
                SCALE_MODES: {
                    DEFAULT: 0,
                    LINEAR: 0,
                    NEAREST: 1
                },
                WRAP_MODES: {
                    DEFAULT: 0,
                    CLAMP: 0,
                    REPEAT: 1,
                    MIRRORED_REPEAT: 2
                },
                GC_MODES: {
                    DEFAULT: 0,
                    AUTO: 0,
                    MANUAL: 1
                },
                MIPMAP_TEXTURES: !0,
                RETINA_PREFIX: /@(.+)x/,
                RESOLUTION: 1,
                FILTER_RESOLUTION: 1,
                DEFAULT_RENDER_OPTIONS: {
                    view: null,
                    resolution: 1,
                    antialias: !1,
                    forceFXAA: !1,
                    autoResize: !1,
                    transparent: !1,
                    backgroundColor: 0,
                    clearBeforeRender: !0,
                    preserveDrawingBuffer: !1,
                    roundPixels: !1
                },
                SHAPES: {
                    POLY: 0,
                    RECT: 1,
                    CIRC: 2,
                    ELIP: 3,
                    RREC: 4
                },
                PRECISION: {
                    DEFAULT: "mediump",
                    LOW: "lowp",
                    MEDIUM: "mediump",
                    HIGH: "highp"
                },
                TRANSFORM_MODE: {
                    DEFAULT: 0,
                    STATIC: 0,
                    DYNAMIC: 1
                },
                TEXT_GRADIENT: {
                    LINEAR_VERTICAL: 0,
                    LINEAR_HORIZONTAL: 1
                },
                SPRITE_BATCH_SIZE: 4096,
                SPRITE_MAX_TEXTURES: b("./utils/maxRecommendedTextures")(32)
            };
            e.exports = b
        }, {
            "./utils/maxRecommendedTextures": 117
        }],
        44: [function(b, e, l) {
            function a() {
                this.minX = 1 / 0;
                this.minY = 1 / 0;
                this.maxX = -(1 / 0);
                this.maxY = -(1 / 0);
                this.rect = null
            }
            var k = b("../math").Rectangle;
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.isEmpty = function() {
                return this.minX >
                    this.maxX || this.minY > this.maxY
            };
            a.prototype.clear = function() {
                this.updateID++;
                this.minX = 1 / 0;
                this.minY = 1 / 0;
                this.maxX = -(1 / 0);
                this.maxY = -(1 / 0)
            };
            a.prototype.getRectangle = function(a) {
                return this.minX > this.maxX || this.minY > this.maxY ? k.EMPTY : (a = a || new k(0, 0, 1, 1), a.x = this.minX, a.y = this.minY, a.width = this.maxX - this.minX, a.height = this.maxY - this.minY, a)
            };
            a.prototype.addPoint = function(a) {
                this.minX = Math.min(this.minX, a.x);
                this.maxX = Math.max(this.maxX, a.x);
                this.minY = Math.min(this.minY, a.y);
                this.maxY = Math.max(this.maxY,
                    a.y)
            };
            a.prototype.addQuad = function(a) {
                var d = this.minX,
                    h = this.minY,
                    f = this.maxX,
                    b = this.maxY,
                    n = a[0],
                    e = a[1],
                    d = n < d ? n : d,
                    h = e < h ? e : h,
                    f = n > f ? n : f,
                    b = e > b ? e : b,
                    n = a[2],
                    e = a[3],
                    d = n < d ? n : d,
                    h = e < h ? e : h,
                    f = n > f ? n : f,
                    b = e > b ? e : b,
                    n = a[4],
                    e = a[5],
                    d = n < d ? n : d,
                    h = e < h ? e : h,
                    f = n > f ? n : f,
                    b = e > b ? e : b,
                    n = a[6],
                    e = a[7];
                this.minX = n < d ? n : d;
                this.minY = e < h ? e : h;
                this.maxX = n > f ? n : f;
                this.maxY = e > b ? e : b
            };
            a.prototype.addFrame = function(a, d, h, m, b) {
                var f = a.worldTransform;
                a = f.a;
                var q = f.b,
                    e = f.c,
                    k = f.d,
                    l = f.tx,
                    f = f.ty,
                    v = this.minX,
                    y = this.minY,
                    A = this.maxX,
                    B = this.maxY,
                    z = a * d + e *
                    h + l,
                    x = q * d + k * h + f,
                    v = z < v ? z : v,
                    y = x < y ? x : y,
                    A = z > A ? z : A,
                    B = x > B ? x : B,
                    z = a * m + e * h + l,
                    x = q * m + k * h + f,
                    v = z < v ? z : v,
                    y = x < y ? x : y,
                    A = z > A ? z : A,
                    B = x > B ? x : B,
                    z = a * d + e * b + l,
                    x = q * d + k * b + f,
                    v = z < v ? z : v,
                    y = x < y ? x : y,
                    A = z > A ? z : A,
                    B = x > B ? x : B,
                    z = a * m + e * b + l,
                    x = q * m + k * b + f;
                this.minX = z < v ? z : v;
                this.minY = x < y ? x : y;
                this.maxX = z > A ? z : A;
                this.maxY = x > B ? x : B
            };
            a.prototype.addVertices = function(a, d, h, m) {
                var f = a.worldTransform;
                a = f.a;
                for (var n = f.b, b = f.c, e = f.d, k = f.tx, f = f.ty, l = this.minX, v = this.minY, y = this.maxX, A = this.maxY; h < m; h += 2) var B = d[h],
                    z = d[h + 1],
                    x = a * B + b * z + k,
                    B = e * z + n * B + f,
                    l = x < l ? x :
                    l,
                    v = B < v ? B : v,
                    y = x > y ? x : y,
                    A = B > A ? B : A;
                this.minX = l;
                this.minY = v;
                this.maxX = y;
                this.maxY = A
            };
            a.prototype.addBounds = function(a) {
                var d = this.minX,
                    h = this.minY,
                    f = this.maxX,
                    b = this.maxY;
                this.minX = a.minX < d ? a.minX : d;
                this.minY = a.minY < h ? a.minY : h;
                this.maxX = a.maxX > f ? a.maxX : f;
                this.maxY = a.maxY > b ? a.maxY : b
            }
        }, {
            "../math": 67
        }],
        45: [function(b, e, l) {
            function a() {
                f.call(this);
                this.children = []
            }
            var k = b("../utils"),
                f = b("./DisplayObject");
            a.prototype = Object.create(f.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                width: {
                    get: function() {
                        return this.scale.x * this.getLocalBounds().width
                    },
                    set: function(d) {
                        var a = this.getLocalBounds().width;
                        0 !== a ? this.scale.x = d / a : this.scale.x = 1;
                        this._width = d
                    }
                },
                height: {
                    get: function() {
                        return this.scale.y * this.getLocalBounds().height
                    },
                    set: function(d) {
                        var a = this.getLocalBounds().height;
                        0 !== a ? this.scale.y = d / a : this.scale.y = 1;
                        this._height = d
                    }
                }
            });
            a.prototype.onChildrenChange = function() {};
            a.prototype.addChild = function(d) {
                var a = arguments.length;
                if (1 < a)
                    for (var f = 0; f < a; f++) this.addChild(arguments[f]);
                else d.parent && d.parent.removeChild(d), d.parent = this, this.transform._parentID = -1, this.children.push(d), this.onChildrenChange(this.children.length - 1), d.emit("added", this);
                return d
            };
            a.prototype.addChildAt = function(d, a) {
                if (0 <= a && a <= this.children.length) return d.parent && d.parent.removeChild(d), d.parent = this, this.children.splice(a, 0, d), this.onChildrenChange(a), d.emit("added", this), d;
                throw Error(d + "addChildAt: The index " + a + " supplied is out of bounds " + this.children.length);
            };
            a.prototype.swapChildren =
                function(d, a) {
                    if (d !== a) {
                        var h = this.getChildIndex(d),
                            f = this.getChildIndex(a);
                        if (0 > h || 0 > f) throw Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");
                        this.children[h] = a;
                        this.children[f] = d;
                        this.onChildrenChange(h < f ? h : f)
                    }
                };
            a.prototype.getChildIndex = function(d) {
                d = this.children.indexOf(d);
                if (-1 === d) throw Error("The supplied DisplayObject must be a child of the caller");
                return d
            };
            a.prototype.setChildIndex = function(d, a) {
                if (0 > a || a >= this.children.length) throw Error("The supplied index is out of bounds");
                var h = this.getChildIndex(d);
                k.removeItems(this.children, h, 1);
                this.children.splice(a, 0, d);
                this.onChildrenChange(a)
            };
            a.prototype.getChildAt = function(d) {
                if (0 > d || d >= this.children.length) throw Error("getChildAt: Supplied index " + d + " does not exist in the child list, or the supplied DisplayObject is not a child of the caller");
                return this.children[d]
            };
            a.prototype.removeChild = function(d) {
                var a = arguments.length;
                if (1 < a)
                    for (var f = 0; f < a; f++) this.removeChild(arguments[f]);
                else {
                    a = this.children.indexOf(d);
                    if (-1 ===
                        a) return;
                    d.parent = null;
                    k.removeItems(this.children, a, 1);
                    this.onChildrenChange(a);
                    d.emit("removed", this)
                }
                return d
            };
            a.prototype.removeChildAt = function(d) {
                var a = this.getChildAt(d);
                return a.parent = null, k.removeItems(this.children, d, 1), this.onChildrenChange(d), a.emit("removed", this), a
            };
            a.prototype.removeChildren = function(d, a) {
                var h, f;
                h = d || 0;
                f = "number" == typeof a ? a : this.children.length;
                var n = f - h;
                if (0 < n && n <= f) {
                    h = this.children.splice(h, n);
                    for (f = 0; f < h.length; ++f) h[f].parent = null;
                    this.onChildrenChange(d);
                    for (f =
                        0; f < h.length; ++f) h[f].emit("removed", this);
                    return h
                }
                if (0 === n && 0 === this.children.length) return [];
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
            };
            a.prototype.updateTransform = function() {
                if (this._boundsID++, this.visible) {
                    this.transform.updateTransform(this.parent.transform);
                    this.worldAlpha = this.alpha * this.parent.worldAlpha;
                    for (var d = 0, a = this.children.length; d < a; ++d) this.children[d].updateTransform()
                }
            };
            a.prototype.containerUpdateTransform = a.prototype.updateTransform;
            a.prototype.calculateBounds = function() {
                if (this._bounds.clear(), this.visible) {
                    this._calculateBounds();
                    for (var d = 0; d < this.children.length; d++) {
                        var a = this.children[d];
                        a.calculateBounds();
                        this._bounds.addBounds(a._bounds)
                    }
                    this._boundsID = this._lastBoundsID
                }
            };
            a.prototype._calculateBounds = function() {};
            a.prototype.renderWebGL = function(d) {
                if (this.visible && !(0 >= this.worldAlpha) && this.renderable)
                    if (this._mask || this._filters) this.renderAdvancedWebGL(d);
                    else {
                        this._renderWebGL(d);
                        for (var a = 0, f = this.children.length; a <
                            f; ++a) this.children[a].renderWebGL(d)
                    }
            };
            a.prototype.renderAdvancedWebGL = function(d) {
                d.currentRenderer.flush();
                var a, f, b = this._filters,
                    n = this._mask;
                if (b) {
                    this._enabledFilters || (this._enabledFilters = []);
                    for (a = this._enabledFilters.length = 0; a < b.length; a++) b[a].enabled && this._enabledFilters.push(b[a]);
                    this._enabledFilters.length && d.filterManager.pushFilter(this, this._enabledFilters)
                }
                n && d.maskManager.pushMask(this, this._mask);
                d.currentRenderer.start();
                this._renderWebGL(d);
                a = 0;
                for (f = this.children.length; a <
                    f; a++) this.children[a].renderWebGL(d);
                d.currentRenderer.flush();
                n && d.maskManager.popMask(this, this._mask);
                b && this._enabledFilters && this._enabledFilters.length && d.filterManager.popFilter();
                d.currentRenderer.start()
            };
            a.prototype._renderWebGL = function(d) {};
            a.prototype._renderCanvas = function(d) {};
            a.prototype.renderCanvas = function(d) {
                if (this.visible && !(0 >= this.alpha) && this.renderable) {
                    this._mask && d.maskManager.pushMask(this._mask);
                    this._renderCanvas(d);
                    for (var a = 0, f = this.children.length; a < f; ++a) this.children[a].renderCanvas(d);
                    this._mask && d.maskManager.popMask(d)
                }
            };
            a.prototype.destroy = function(d) {
                f.prototype.destroy.call(this);
                var a = "boolean" == typeof d ? d : d && d.children,
                    m = this.children;
                if (this.children = null, a)
                    for (a = m.length - 1; 0 <= a; a--) {
                        var b = m[a];
                        b.parent = null;
                        b.destroy(d)
                    }
            }
        }, {
            "../utils": 116,
            "./DisplayObject": 46
        }],
        46: [function(b, e, l) {
            function a() {
                k.call(this);
                this.transform = new(f.TRANSFORM_MODE.DEFAULT === f.TRANSFORM_MODE.STATIC ? d : h);
                this.alpha = 1;
                this.renderable = this.visible = !0;
                this.parent = null;
                this.worldAlpha = 1;
                this._enabledFilters =
                    this._filters = this.filterArea = null;
                this._bounds = new m;
                this._boundsID = 0;
                this._lastBoundsID = -1;
                this._mask = this._localBoundsRect = this._boundsRect = null
            }
            var k = b("eventemitter3"),
                f = b("../const"),
                d = b("./TransformStatic"),
                h = b("./Transform"),
                m = b("./Bounds"),
                q = b("../math"),
                n = new a;
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                x: {
                    get: function() {
                        return this.position.x
                    },
                    set: function(d) {
                        this.transform.position.x = d
                    }
                },
                y: {
                    get: function() {
                        return this.position.y
                    },
                    set: function(d) {
                        this.transform.position.y = d
                    }
                },
                worldTransform: {
                    get: function() {
                        return this.transform.worldTransform
                    }
                },
                localTransform: {
                    get: function() {
                        return this.transform.localTransform
                    }
                },
                position: {
                    get: function() {
                        return this.transform.position
                    },
                    set: function(d) {
                        this.transform.position.copy(d)
                    }
                },
                scale: {
                    get: function() {
                        return this.transform.scale
                    },
                    set: function(d) {
                        this.transform.scale.copy(d)
                    }
                },
                pivot: {
                    get: function() {
                        return this.transform.pivot
                    },
                    set: function(d) {
                        this.transform.pivot.copy(d)
                    }
                },
                skew: {
                    get: function() {
                        return this.transform.skew
                    },
                    set: function(d) {
                        this.transform.skew.copy(d)
                    }
                },
                rotation: {
                    get: function() {
                        return this.transform.rotation
                    },
                    set: function(d) {
                        this.transform.rotation = d
                    }
                },
                worldVisible: {
                    get: function() {
                        var d = this;
                        do {
                            if (!d.visible) return !1;
                            d = d.parent
                        } while (d);
                        return !0
                    }
                },
                mask: {
                    get: function() {
                        return this._mask
                    },
                    set: function(d) {
                        this._mask && (this._mask.renderable = !0);
                        (this._mask = d) && (this._mask.renderable = !1)
                    }
                },
                filters: {
                    get: function() {
                        return this._filters && this._filters.slice()
                    },
                    set: function(d) {
                        this._filters = d && d.slice()
                    }
                }
            });
            a.prototype.updateTransform =
                function() {
                    this.transform.updateTransform(this.parent.transform);
                    this.worldAlpha = this.alpha * this.parent.worldAlpha;
                    this._bounds.updateID++
                };
            a.prototype.displayObjectUpdateTransform = a.prototype.updateTransform;
            a.prototype._recursivePostUpdateTransform = function() {
                this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(n.transform)
            };
            a.prototype.getBounds = function(d, a) {
                return d || (this.parent ? (this._recursivePostUpdateTransform(),
                    this.updateTransform()) : (this.parent = n, this.parent.transform._worldID++, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), a || (this._boundsRect || (this._boundsRect = new q.Rectangle), a = this._boundsRect), this._bounds.getRectangle(a)
            };
            a.prototype.getLocalBounds = function(d) {
                var a = this.transform,
                    f = this.parent;
                this.parent = null;
                this.transform = n.transform;
                d || (this._localBoundsRect || (this._localBoundsRect = new q.Rectangle), d = this._localBoundsRect);
                d = this.getBounds(!1,
                    d);
                return this.parent = f, this.transform = a, d
            };
            a.prototype.toGlobal = function(d, a, f) {
                return f || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = n, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(d, a)
            };
            a.prototype.toLocal = function(d, a, f, h) {
                return a && (d = a.toGlobal(d, f, h)), h || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = n, this.displayObjectUpdateTransform(), this.parent =
                    null)), this.worldTransform.applyInverse(d, f)
            };
            a.prototype.renderWebGL = function(d) {};
            a.prototype.renderCanvas = function(d) {};
            a.prototype.setParent = function(d) {
                if (!d || !d.addChild) throw Error("setParent: Argument must be a Container");
                return d.addChild(this), d
            };
            a.prototype.setTransform = function(d, a, f, h, m, n, b, q, e) {
                return this.position.x = d || 0, this.position.y = a || 0, this.scale.x = f ? f : 1, this.scale.y = h ? h : 1, this.rotation = m || 0, this.skew.x = n || 0, this.skew.y = b || 0, this.pivot.x = q || 0, this.pivot.y = e || 0, this
            };
            a.prototype.destroy =
                function() {
                    this.removeAllListeners();
                    this.parent && this.parent.removeChild(this);
                    this.filterArea = this._mask = this._currentBounds = this._bounds = this.parent = this.transform = null;
                    this.interactiveChildren = this.interactive = !1
                }
        }, {
            "../const": 43,
            "../math": 67,
            "./Bounds": 44,
            "./Transform": 47,
            "./TransformStatic": 49,
            eventemitter3: 3
        }],
        47: [function(b, e, l) {
                function a() {
                    f.call(this);
                    this.position = new k.Point(0, 0);
                    this.scale = new k.Point(1, 1);
                    this.skew = new k.ObservablePoint(this.updateSkew, this, 0, 0);
                    this.pivot = new k.Point(0,
                        0);
                    this._rotation = 0;
                    this._sr = Math.sin(0);
                    this._cr = Math.cos(0);
                    this._cy = Math.cos(0);
                    this._sy = Math.sin(0);
                    this._nsx = Math.sin(0);
                    this._cx = Math.cos(0)
                }
                var k = b("../math"),
                    f = b("./TransformBase");
                a.prototype = Object.create(f.prototype);
                a.prototype.constructor = a;
                a.prototype.updateSkew = function() {
                    this._cy = Math.cos(this.skew.y);
                    this._sy = Math.sin(this.skew.y);
                    this._nsx = Math.sin(this.skew.x);
                    this._cx = Math.cos(this.skew.x)
                };
                a.prototype.updateLocalTransform = function() {
                    var d, a, f, b, n = this.localTransform;
                    d = this._cr *
                        this.scale.x;
                    a = this._sr * this.scale.x;
                    f = -this._sr * this.scale.y;
                    b = this._cr * this.scale.y;
                    n.a = this._cy * d + this._sy * f;
                    n.b = this._cy * a + this._sy * b;
                    n.c = this._nsx * d + this._cx * f;
                    n.d = this._nsx * a + this._cx * b
                };
                a.prototype.updateTransform = function(d) {
                    var a, f, b, n = d.worldTransform,
                        e = this.worldTransform,
                        k = this.localTransform;
                    d = this._cr * this.scale.x;
                    a = this._sr * this.scale.x;
                    f = -this._sr * this.scale.y;
                    b = this._cr * this.scale.y;
                    k.a = this._cy * d + this._sy * f;
                    k.b = this._cy * a + this._sy * b;
                    k.c = this._nsx * d + this._cx * f;
                    k.d = this._nsx * a + this._cx *
                        b;
                    k.tx = this.position.x - (this.pivot.x * k.a + this.pivot.y * k.c);
                    k.ty = this.position.y - (this.pivot.x * k.b + this.pivot.y * k.d);
                    e.a = k.a * n.a + k.b * n.c;
                    e.b = k.a * n.b + k.b * n.d;
                    e.c = k.c * n.a + k.d * n.c;
                    e.d = k.c * n.b + k.d * n.d;
                    e.tx = k.tx * n.a + k.ty * n.c + n.tx;
                    e.ty = k.tx * n.b + k.ty * n.d + n.ty;
                    this._worldID++
                };
                a.prototype.setFromMatrix = function(d) {
                    d.decompose(this)
                };
                Object.defineProperties(a.prototype, {
                    rotation: {
                        get: function() {
                            return this._rotation
                        },
                        set: function(d) {
                            this._rotation = d;
                            this._sr = Math.sin(d);
                            this._cr = Math.cos(d)
                        }
                    }
                });
                e.exports = a
            },
            {
                "../math": 67,
                "./TransformBase": 48
            }
        ],
        48: [function(b, e, l) {
            function a() {
                this.worldTransform = new k.Matrix;
                this.localTransform = new k.Matrix;
                this._worldID = 0
            }
            var k = b("../math");
            a.prototype.constructor = a;
            a.prototype.updateLocalTransform = function() {};
            a.prototype.updateTransform = function(a) {
                a = a.worldTransform;
                var d = this.worldTransform,
                    f = this.localTransform;
                d.a = f.a * a.a + f.b * a.c;
                d.b = f.a * a.b + f.b * a.d;
                d.c = f.c * a.a + f.d * a.c;
                d.d = f.c * a.b + f.d * a.d;
                d.tx = f.tx * a.a + f.ty * a.c + a.tx;
                d.ty = f.tx * a.b + f.ty * a.d + a.ty;
                this._worldID++
            };
            a.prototype.updateWorldTransform = a.prototype.updateTransform;
            a.IDENTITY = new a;
            e.exports = a
        }, {
            "../math": 67
        }],
        49: [function(b, e, l) {
            function a() {
                f.call(this);
                this.position = new k.ObservablePoint(this.onChange, this, 0, 0);
                this.scale = new k.ObservablePoint(this.onChange, this, 1, 1);
                this.pivot = new k.ObservablePoint(this.onChange, this, 0, 0);
                this.skew = new k.ObservablePoint(this.updateSkew, this, 0, 0);
                this._rotation = 0;
                this._sr = Math.sin(0);
                this._cr = Math.cos(0);
                this._cy = Math.cos(0);
                this._sy = Math.sin(0);
                this._nsx = Math.sin(0);
                this._cx = Math.cos(0);
                this._currentLocalID = this._localID = 0
            }
            var k = b("../math"),
                f = b("./TransformBase");
            a.prototype = Object.create(f.prototype);
            a.prototype.constructor = a;
            a.prototype.onChange = function() {
                this._localID++
            };
            a.prototype.updateSkew = function() {
                this._cy = Math.cos(this.skew._y);
                this._sy = Math.sin(this.skew._y);
                this._nsx = Math.sin(this.skew._x);
                this._cx = Math.cos(this.skew._x);
                this._localID++
            };
            a.prototype.updateLocalTransform = function() {
                var d = this.localTransform;
                if (this._localID !== this._currentLocalID) {
                    var a,
                        f, b, n;
                    a = this._cr * this.scale._x;
                    f = this._sr * this.scale._x;
                    b = -this._sr * this.scale._y;
                    n = this._cr * this.scale._y;
                    d.a = this._cy * a + this._sy * b;
                    d.b = this._cy * f + this._sy * n;
                    d.c = this._nsx * a + this._cx * b;
                    d.d = this._nsx * f + this._cx * n;
                    d.tx = this.position._x - (this.pivot._x * d.a + this.pivot._y * d.c);
                    d.ty = this.position._y - (this.pivot._x * d.b + this.pivot._y * d.d);
                    this._currentLocalID = this._localID;
                    this._parentID = -1
                }
            };
            a.prototype.updateTransform = function(d) {
                var a = d.worldTransform,
                    f = this.worldTransform,
                    b = this.localTransform;
                if (this._localID !==
                    this._currentLocalID) {
                    var n, e, k, l;
                    n = this._cr * this.scale._x;
                    e = this._sr * this.scale._x;
                    k = -this._sr * this.scale._y;
                    l = this._cr * this.scale._y;
                    b.a = this._cy * n + this._sy * k;
                    b.b = this._cy * e + this._sy * l;
                    b.c = this._nsx * n + this._cx * k;
                    b.d = this._nsx * e + this._cx * l;
                    b.tx = this.position._x - (this.pivot._x * b.a + this.pivot._y * b.c);
                    b.ty = this.position._y - (this.pivot._x * b.b + this.pivot._y * b.d);
                    this._currentLocalID = this._localID;
                    this._parentID = -1
                }
                this._parentID !== d._worldID && (f.a = b.a * a.a + b.b * a.c, f.b = b.a * a.b + b.b * a.d, f.c = b.c * a.a + b.d * a.c,
                    f.d = b.c * a.b + b.d * a.d, f.tx = b.tx * a.a + b.ty * a.c + a.tx, f.ty = b.tx * a.b + b.ty * a.d + a.ty, this._parentID = d._worldID, this._worldID++)
            };
            a.prototype.setFromMatrix = function(d) {
                d.decompose(this);
                this._localID++
            };
            Object.defineProperties(a.prototype, {
                rotation: {
                    get: function() {
                        return this._rotation
                    },
                    set: function(d) {
                        this._rotation = d;
                        this._sr = Math.sin(d);
                        this._cr = Math.cos(d);
                        this._localID++
                    }
                }
            });
            e.exports = a
        }, {
            "../math": 67,
            "./TransformBase": 48
        }],
        50: [function(b, e, l) {
            function a() {
                f.call(this);
                this.fillAlpha = 1;
                this.lineColor =
                    this.lineWidth = 0;
                this.graphicsData = [];
                this._prevTint = this.tint = 16777215;
                this.blendMode = r.BLEND_MODES.NORMAL;
                this.currentPath = null;
                this._webGL = {};
                this.isMask = !1;
                this.boundsPadding = 0;
                this._localBounds = new w;
                this.dirty = 0;
                this.fastRectDirty = -1;
                this.clearDirty = 0;
                this.boundsDirty = -1;
                this.cachedSpriteDirty = !1;
                this._spriteRect = null;
                this._fastRect = !1
            }
            var k, f = b("../display/Container"),
                d = b("../textures/RenderTexture"),
                h = b("../textures/Texture"),
                m = b("./GraphicsData"),
                q = b("../sprites/Sprite"),
                n = b("../math"),
                r =
                b("../const"),
                t = b("../utils"),
                w = b("../display/Bounds"),
                u = b("./utils/bezierCurveTo"),
                v = b("../renderers/canvas/CanvasRenderer"),
                y = new n.Matrix,
                A = new n.Point,
                B = new Float32Array(4),
                z = new Float32Array(4);
            a._SPRITE_TEXTURE = null;
            a.prototype = Object.create(f.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.clone = function() {
                var d = new a;
                d.renderable = this.renderable;
                d.fillAlpha = this.fillAlpha;
                d.lineWidth = this.lineWidth;
                d.lineColor = this.lineColor;
                d.tint = this.tint;
                d.blendMode = this.blendMode;
                d.isMask =
                    this.isMask;
                d.boundsPadding = this.boundsPadding;
                d.dirty = 0;
                d.cachedSpriteDirty = this.cachedSpriteDirty;
                for (var f = 0; f < this.graphicsData.length; ++f) d.graphicsData.push(this.graphicsData[f].clone());
                return d.currentPath = d.graphicsData[d.graphicsData.length - 1], d.updateLocalBounds(), d
            };
            a.prototype.lineStyle = function(d, a, f) {
                if (this.lineWidth = d || 0, this.lineColor = a || 0, this.lineAlpha = void 0 === f ? 1 : f, this.currentPath) this.currentPath.shape.points.length ? (d = new n.Polygon(this.currentPath.shape.points.slice(-2)),
                    d.closed = !1, this.drawShape(d)) : (this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha);
                return this
            };
            a.prototype.moveTo = function(d, a) {
                var f = new n.Polygon([d, a]);
                return f.closed = !1, this.drawShape(f), this
            };
            a.prototype.lineTo = function(d, a) {
                return this.currentPath.shape.points.push(d, a), this.dirty++, this
            };
            a.prototype.quadraticCurveTo = function(d, a, f, h) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var m, b, n = this.currentPath.shape.points;
                0 === n.length && this.moveTo(0, 0);
                for (var e = n[n.length - 2], q = n[n.length - 1], k, r = 1; 20 >= r; ++r) k = r / 20, m = e + (d - e) * k, b = q + (a - q) * k, n.push(m + (d + (f - d) * k - m) * k, b + (a + (h - a) * k - b) * k);
                return this.dirty++, this
            };
            a.prototype.bezierCurveTo = function(d, a, f, h, m, b) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var n = this.currentPath.shape.points,
                    e = n[n.length - 2],
                    q = n[n.length - 1];
                return n.length -= 2,
                    u(e, q, d, a, f, h, m, b, n), this.dirty++, this
            };
            a.prototype.arcTo = function(d, a, f, h, m) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(d, a) : this.moveTo(d, a);
                var b = this.currentPath.shape.points,
                    n = b[b.length - 1] - a,
                    e = b[b.length - 2] - d;
                h -= a;
                f -= d;
                var q = Math.abs(n * f - e * h);
                if (1E-8 > q || 0 === m) b[b.length - 2] === d && b[b.length - 1] === a || b.push(d, a);
                else {
                    var k = n * n + e * e,
                        r = h * h + f * f,
                        t = n * h + e * f,
                        b = m * Math.sqrt(k) / q,
                        q = m * Math.sqrt(r) / q,
                        k = b * t / k,
                        r = q * t / r,
                        t = b * f + q * e,
                        l = b * h + q * n;
                    this.arc(t + d, l + a, m, Math.atan2(n *
                        (q + k) - l, e * (q + k) - t), Math.atan2(h * (b + r) - l, f * (b + r) - t), e * h > f * n)
                }
                return this.dirty++, this
            };
            a.prototype.arc = function(d, a, f, h, m, b) {
                if (b = b || !1, h === m) return this;
                !b && m <= h ? m += 2 * Math.PI : b && h <= m && (h += 2 * Math.PI);
                b = b ? -1 * (h - m) : m - h;
                var n = 40 * Math.ceil(Math.abs(b) / (2 * Math.PI));
                if (0 === b) return this;
                m = d + Math.cos(h) * f;
                var e = a + Math.sin(h) * f;
                this.currentPath ? this.currentPath.shape.points.push(m, e) : this.moveTo(m, e);
                m = this.currentPath.shape.points;
                b /= 2 * n;
                for (var e = 2 * b, q = Math.cos(b), k = Math.sin(b), n = n - 1, r = n % 1 / n, t = 0; t <= n; t++) {
                    var l =
                        b + h + e * (t + r * t),
                        w = Math.cos(l),
                        l = -Math.sin(l);
                    m.push((q * w + k * l) * f + d, (q * -l + k * w) * f + a)
                }
                return this.dirty++, this
            };
            a.prototype.beginFill = function(d, a) {
                return this.filling = !0, this.fillColor = d || 0, this.fillAlpha = void 0 === a ? 1 : a, this.currentPath && 2 >= this.currentPath.shape.points.length && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
            };
            a.prototype.endFill = function() {
                return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
            };
            a.prototype.drawRect =
                function(d, a, f, h) {
                    return this.drawShape(new n.Rectangle(d, a, f, h)), this
                };
            a.prototype.drawRoundedRect = function(d, a, f, h, m) {
                return this.drawShape(new n.RoundedRectangle(d, a, f, h, m)), this
            };
            a.prototype.drawCircle = function(d, a, f) {
                return this.drawShape(new n.Circle(d, a, f)), this
            };
            a.prototype.drawEllipse = function(d, a, f, h) {
                return this.drawShape(new n.Ellipse(d, a, f, h)), this
            };
            a.prototype.drawPolygon = function(d) {
                var a = d,
                    f = !0;
                if (a instanceof n.Polygon && (f = a.closed, a = a.points), !Array.isArray(a))
                    for (var a = Array(arguments.length),
                            h = 0; h < a.length; ++h) a[h] = arguments[h];
                a = new n.Polygon(a);
                return a.closed = f, this.drawShape(a), this
            };
            a.prototype.clear = function() {
                return this.lineWidth = 0, this.filling = !1, this.dirty++, this.clearDirty++, this.graphicsData = [], this
            };
            a.prototype.isFastRect = function() {
                return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === r.SHAPES.RECT && !this.graphicsData[0].lineWidth
            };
            a.prototype._renderWebGL = function(d) {
                this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect());
                this._fastRect ? this._renderSpriteRect(d) : (d.setObjectRenderer(d.plugins.graphics), d.plugins.graphics.render(this))
            };
            a.prototype._renderSpriteRect = function(d) {
                var f = this.graphicsData[0].shape;
                if (!this._spriteRect) {
                    if (!a._SPRITE_TEXTURE) {
                        var m = document.createElement("canvas");
                        m.width = 10;
                        m.height = 10;
                        var b = m.getContext("2d");
                        b.fillStyle = "white";
                        b.fillRect(0, 0, 10, 10);
                        a._SPRITE_TEXTURE = h.fromCanvas(m)
                    }
                    this._spriteRect = new q(a._SPRITE_TEXTURE)
                }
                16777215 === this.tint ? this._spriteRect.tint = this.graphicsData[0].fillColor :
                    (t.hex2rgb(this.graphicsData[0].fillColor, B), t.hex2rgb(this.tint, z), B[0] *= z[0], B[1] *= z[1], B[2] *= z[2], this._spriteRect.tint = t.rgb2hex(B));
                this._spriteRect.alpha = this.graphicsData[0].fillAlpha;
                this._spriteRect.worldAlpha = this.worldAlpha * this._spriteRect.alpha;
                a._SPRITE_TEXTURE._frame.width = f.width;
                a._SPRITE_TEXTURE._frame.height = f.height;
                this._spriteRect.transform.worldTransform = this.transform.worldTransform;
                this._spriteRect.anchor.set(-f.x / f.width, -f.y / f.height);
                this._spriteRect.onAnchorUpdate();
                this._spriteRect._renderWebGL(d)
            };
            a.prototype._renderCanvas = function(d) {
                !0 !== this.isMask && d.plugins.graphics.render(this)
            };
            a.prototype._calculateBounds = function() {
                if (this.renderable) {
                    this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.dirty++, this.cachedSpriteDirty = !0);
                    var d = this._localBounds;
                    this._bounds.addFrame(this.transform, d.minX, d.minY, d.maxX, d.maxY)
                }
            };
            a.prototype.containsPoint = function(d) {
                this.worldTransform.applyInverse(d, A);
                d = this.graphicsData;
                for (var a = 0; a < d.length; a++) {
                    var f = d[a];
                    if (f.fill && f.shape && f.shape.contains(A.x, A.y)) return !0
                }
                return !1
            };
            a.prototype.updateLocalBounds = function() {
                var d = 1 / 0,
                    a = -(1 / 0),
                    f = 1 / 0,
                    h = -(1 / 0);
                if (this.graphicsData.length)
                    for (var m, b, n, e, q, k = 0; k < this.graphicsData.length; k++)
                        if (n = this.graphicsData[k], b = n.type, q = n.lineWidth, m = n.shape, b === r.SHAPES.RECT || b === r.SHAPES.RREC) b = m.x - q / 2, n = m.y - q / 2, e = m.width + q, q = m.height + q, d = b < d ? b : d, a = b + e > a ? b + e : a, f = n < f ? n : f, h = n + q > h ? n + q : h;
                        else if (b === r.SHAPES.CIRC) b = m.x, n = m.y, e = m.radius + q / 2, q = m.radius + q / 2, d = b - e < d ? b - e : d, a = b + e > a ? b +
                    e : a, f = n - q < f ? n - q : f, h = n + q > h ? n + q : h;
                else if (b === r.SHAPES.ELIP) b = m.x, n = m.y, e = m.width + q / 2, q = m.height + q / 2, d = b - e < d ? b - e : d, a = b + e > a ? b + e : a, f = n - q < f ? n - q : f, h = n + q > h ? n + q : h;
                else
                    for (m = m.points, e = 0; e < m.length; e += 2) b = m[e], n = m[e + 1], d = b - q < d ? b - q : d, a = b + q > a ? b + q : a, f = n - q < f ? n - q : f, h = n + q > h ? n + q : h;
                else h = f = a = d = 0;
                k = this.boundsPadding;
                this._localBounds.minX = d - k;
                this._localBounds.maxX = a + 2 * k;
                this._localBounds.minY = f - k;
                this._localBounds.maxY = h + 2 * k
            };
            a.prototype.drawShape = function(d) {
                this.currentPath && 2 >= this.currentPath.shape.points.length &&
                    this.graphicsData.pop();
                this.currentPath = null;
                d = new m(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, d);
                return this.graphicsData.push(d), d.type === r.SHAPES.POLY && (d.shape.closed = d.shape.closed || this.filling, this.currentPath = d), this.dirty++, d
            };
            a.prototype.generateCanvasTexture = function(a, f) {
                f = f || 1;
                var m = this.getLocalBounds(),
                    b = new d.create(m.width * f, m.height * f);
                k || (k = new v);
                y.tx = -m.x;
                y.ty = -m.y;
                k.render(this, b, !1, y);
                m = h.fromCanvas(b.baseTexture._canvasRenderTarget.canvas,
                    a);
                return m.baseTexture.resolution = f, m
            };
            a.prototype.closePath = function() {
                var d = this.currentPath;
                return d && d.shape && d.shape.close(), this
            };
            a.prototype.addHole = function() {
                var d = this.graphicsData.pop();
                return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(d.shape), this.currentPath = null, this
            };
            a.prototype.destroy = function() {
                f.prototype.destroy.apply(this, arguments);
                for (var d = 0; d < this.graphicsData.length; ++d) this.graphicsData[d].destroy();
                for (var a in this._webgl)
                    for (d =
                        0; d < this._webgl[a].data.length; ++d) this._webgl[a].data[d].destroy();
                this._spriteRect && this._spriteRect.destroy();
                this._localBounds = this._webgl = this.currentPath = this.graphicsData = null
            }
        }, {
            "../const": 43,
            "../display/Bounds": 44,
            "../display/Container": 45,
            "../math": 67,
            "../renderers/canvas/CanvasRenderer": 74,
            "../sprites/Sprite": 98,
            "../textures/RenderTexture": 108,
            "../textures/Texture": 109,
            "../utils": 116,
            "./GraphicsData": 51,
            "./utils/bezierCurveTo": 53
        }],
        51: [function(b, e, l) {
            function a(a, f, d, h, m, b, n) {
                this.lineWidth =
                    a;
                this.lineColor = f;
                this.lineAlpha = d;
                this._lineTint = f;
                this.fillColor = h;
                this.fillAlpha = m;
                this._fillTint = h;
                this.fill = b;
                this.holes = [];
                this.shape = n;
                this.type = n.type
            }
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.clone = function() {
                return new a(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
            };
            a.prototype.addHole = function(a) {
                this.holes.push(a)
            };
            a.prototype.destroy = function() {
                this.holes = this.shape = null
            }
        }, {}],
        52: [function(b, e, l) {
            function a(a) {
                this.renderer =
                    a
            }
            l = b("../../renderers/canvas/CanvasRenderer");
            var k = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            l.registerPlugin("graphics", a);
            a.prototype.render = function(a) {
                var d = this.renderer,
                    f = d.context,
                    m = a.worldAlpha,
                    b = a.transform.worldTransform,
                    n = d.resolution;
                this._prevTint !== this.tint && (this.dirty = !0);
                f.setTransform(b.a * n, b.b * n, b.c * n, b.d * n, b.tx * n, b.ty * n);
                a.dirty && (this.updateGraphicsTint(a), a.dirty = !1);
                d.setBlendMode(a.blendMode);
                for (d = 0; d < a.graphicsData.length; d++) {
                    var b = a.graphicsData[d],
                        e = b.shape,
                        n = b._fillTint,
                        t = b._lineTint;
                    if (f.lineWidth = b.lineWidth, b.type === k.SHAPES.POLY) {
                        f.beginPath();
                        this.renderPolygon(e.points, e.closed, f);
                        for (var l = 0; l < b.holes.length; l++) this.renderPolygon(b.holes[l].points, !0, f);
                        b.fill && (f.globalAlpha = b.fillAlpha * m, f.fillStyle = "#" + ("00000" + (0 | n).toString(16)).substr(-6), f.fill());
                        b.lineWidth && (f.globalAlpha = b.lineAlpha * m, f.strokeStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6), f.stroke())
                    } else if (b.type === k.SHAPES.RECT)(b.fillColor || 0 === b.fillColor) && (f.globalAlpha =
                        b.fillAlpha * m, f.fillStyle = "#" + ("00000" + (0 | n).toString(16)).substr(-6), f.fillRect(e.x, e.y, e.width, e.height)), b.lineWidth && (f.globalAlpha = b.lineAlpha * m, f.strokeStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6), f.strokeRect(e.x, e.y, e.width, e.height));
                    else if (b.type === k.SHAPES.CIRC) f.beginPath(), f.arc(e.x, e.y, e.radius, 0, 2 * Math.PI), f.closePath(), b.fill && (f.globalAlpha = b.fillAlpha * m, f.fillStyle = "#" + ("00000" + (0 | n).toString(16)).substr(-6), f.fill()), b.lineWidth && (f.globalAlpha = b.lineAlpha * m, f.strokeStyle =
                        "#" + ("00000" + (0 | t).toString(16)).substr(-6), f.stroke());
                    else if (b.type === k.SHAPES.ELIP) {
                        var u = 2 * e.width,
                            v = 2 * e.height,
                            l = e.x - u / 2,
                            e = e.y - v / 2;
                        f.beginPath();
                        var y = u / 2 * .5522848,
                            A = v / 2 * .5522848,
                            B = l + u,
                            z = e + v,
                            u = l + u / 2,
                            v = e + v / 2;
                        f.moveTo(l, v);
                        f.bezierCurveTo(l, v - A, u - y, e, u, e);
                        f.bezierCurveTo(u + y, e, B, v - A, B, v);
                        f.bezierCurveTo(B, v + A, u + y, z, u, z);
                        f.bezierCurveTo(u - y, z, l, v + A, l, v);
                        f.closePath();
                        b.fill && (f.globalAlpha = b.fillAlpha * m, f.fillStyle = "#" + ("00000" + (0 | n).toString(16)).substr(-6), f.fill());
                        b.lineWidth && (f.globalAlpha =
                            b.lineAlpha * m, f.strokeStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6), f.stroke())
                    } else b.type === k.SHAPES.RREC && (l = e.x, v = e.y, y = e.width, A = e.height, e = e.radius, B = Math.min(y, A) / 2 | 0, e = e > B ? B : e, f.beginPath(), f.moveTo(l, v + e), f.lineTo(l, v + A - e), f.quadraticCurveTo(l, v + A, l + e, v + A), f.lineTo(l + y - e, v + A), f.quadraticCurveTo(l + y, v + A, l + y, v + A - e), f.lineTo(l + y, v + e), f.quadraticCurveTo(l + y, v, l + y - e, v), f.lineTo(l + e, v), f.quadraticCurveTo(l, v, l, v + e), f.closePath(), (b.fillColor || 0 === b.fillColor) && (f.globalAlpha = b.fillAlpha * m,
                        f.fillStyle = "#" + ("00000" + (0 | n).toString(16)).substr(-6), f.fill()), b.lineWidth && (f.globalAlpha = b.lineAlpha * m, f.strokeStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6), f.stroke()))
                }
            };
            a.prototype.updateGraphicsTint = function(a) {
                a._prevTint = a.tint;
                for (var d = (a.tint >> 16 & 255) / 255, f = (a.tint >> 8 & 255) / 255, m = (255 & a.tint) / 255, b = 0; b < a.graphicsData.length; b++) {
                    var n = a.graphicsData[b],
                        e = 0 | n.fillColor,
                        k = 0 | n.lineColor;
                    n._fillTint = ((e >> 16 & 255) / 255 * d * 255 << 16) + ((e >> 8 & 255) / 255 * f * 255 << 8) + (255 & e) / 255 * m * 255;
                    n._lineTint = ((k >>
                        16 & 255) / 255 * d * 255 << 16) + ((k >> 8 & 255) / 255 * f * 255 << 8) + (255 & k) / 255 * m * 255
                }
            };
            a.prototype.renderPolygon = function(a, d, h) {
                h.moveTo(a[0], a[1]);
                for (var f = 1; f < a.length / 2; f++) h.lineTo(a[2 * f], a[2 * f + 1]);
                d && h.closePath()
            };
            a.prototype.destroy = function() {
                this.renderer = null
            }
        }, {
            "../../const": 43,
            "../../renderers/canvas/CanvasRenderer": 74
        }],
        53: [function(b, e, l) {
            e.exports = function(a, b, f, d, h, m, e, n, r) {
                r = r || [];
                var q, k, l, v, y;
                r.push(a, b);
                for (var A, B = 1; 20 >= B; ++B) A = B / 20, q = 1 - A, k = q * q, l = k * q, v = A * A, y = v * A, r.push(l * a + 3 * k * A * f + 3 * q * v * h + y *
                    e, l * b + 3 * k * A * d + 3 * q * v * m + y * n);
                return r
            }
        }, {}],
        54: [function(b, e, l) {
            function a(a) {
                d.call(this, a);
                this.graphicsDataPool = [];
                this.primitiveShader = null;
                this.gl = a.gl;
                this.CONTEXT_UID = 0
            }
            var k = b("../../utils"),
                f = b("../../const"),
                d = b("../../renderers/webgl/utils/ObjectRenderer");
            l = b("../../renderers/webgl/WebGLRenderer");
            var h = b("./WebGLGraphicsData"),
                m = b("./shaders/PrimitiveShader"),
                q = b("./utils/buildPoly"),
                n = b("./utils/buildRectangle"),
                r = b("./utils/buildRoundedRectangle"),
                t = b("./utils/buildCircle");
            a.prototype =
                Object.create(d.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            l.registerPlugin("graphics", a);
            a.prototype.onContextChange = function() {
                this.gl = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID;
                this.primitiveShader = new m(this.gl)
            };
            a.prototype.destroy = function() {
                d.prototype.destroy.call(this);
                for (var a = 0; a < this.graphicsDataPool.length; ++a) this.graphicsDataPool[a].destroy();
                this.graphicsDataPool = null
            };
            a.prototype.render = function(d) {
                var a, f = this.renderer,
                    h = f.gl,
                    m = d._webGL[this.CONTEXT_UID];
                m && d.dirty === m.dirty || (this.updateGraphics(d), m = d._webGL[this.CONTEXT_UID]);
                f.bindShader(this.primitiveShader);
                f.state.setBlendMode(d.blendMode);
                for (var b = 0, n = m.data.length; b < n; b++) {
                    a = m.data[b];
                    var e = a.shader;
                    f.bindShader(e);
                    e.uniforms.translationMatrix = d.transform.worldTransform.toArray(!0);
                    e.uniforms.tint = k.hex2rgb(d.tint);
                    e.uniforms.alpha = d.worldAlpha;
                    a.vao.bind().draw(h.TRIANGLE_STRIP, a.indices.length).unbind()
                }
            };
            a.prototype.updateGraphics = function(d) {
                var a = this.renderer.gl,
                    h = d._webGL[this.CONTEXT_UID];
                h || (h = d._webGL[this.CONTEXT_UID] = {
                    lastIndex: 0,
                    data: [],
                    gl: a,
                    clearDirty: -1,
                    dirty: -1
                });
                h.dirty = d.dirty;
                if (d.clearDirty !== h.clearDirty) {
                    h.clearDirty = d.clearDirty;
                    for (a = 0; a < h.data.length; a++) this.graphicsDataPool.push(h.data[a]);
                    h.data = [];
                    h.lastIndex = 0
                }
                for (var m, a = h.lastIndex; a < d.graphicsData.length; a++) {
                    var b = d.graphicsData[a];
                    m = this.getWebGLData(h, 0);
                    b.type === f.SHAPES.POLY && q(b, m);
                    b.type === f.SHAPES.RECT ? n(b, m) : b.type === f.SHAPES.CIRC || b.type === f.SHAPES.ELIP ? t(b, m) : b.type === f.SHAPES.RREC && r(b, m);
                    h.lastIndex++
                }
                for (a =
                    0; a < h.data.length; a++) m = h.data[a], m.dirty && m.upload()
            };
            a.prototype.getWebGLData = function(d, a) {
                var f = d.data[d.data.length - 1];
                return (!f || 32E4 < f.points.length) && (f = this.graphicsDataPool.pop() || new h(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState), f.reset(a), d.data.push(f)), f.dirty = !0, f
            }
        }, {
            "../../const": 43,
            "../../renderers/webgl/WebGLRenderer": 81,
            "../../renderers/webgl/utils/ObjectRenderer": 91,
            "../../utils": 116,
            "./WebGLGraphicsData": 55,
            "./shaders/PrimitiveShader": 56,
            "./utils/buildCircle": 57,
            "./utils/buildPoly": 59,
            "./utils/buildRectangle": 60,
            "./utils/buildRoundedRectangle": 61
        }],
        55: [function(b, e, l) {
            function a(a, d, h) {
                this.gl = a;
                this.color = [0, 0, 0];
                this.points = [];
                this.indices = [];
                this.buffer = k.GLBuffer.createVertexBuffer(a);
                this.indexBuffer = k.GLBuffer.createIndexBuffer(a);
                this.dirty = !0;
                this.glIndices = this.glPoints = null;
                this.shader = d;
                this.vao = (new k.VertexArrayObject(a, h)).addIndex(this.indexBuffer).addAttribute(this.buffer, d.attributes.aVertexPosition, a.FLOAT, !1, 24, 0).addAttribute(this.buffer,
                    d.attributes.aColor, a.FLOAT, !1, 24, 8)
            }
            var k = b("pixi-gl-core");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.reset = function() {
                this.points.length = 0;
                this.indices.length = 0
            };
            a.prototype.upload = function() {
                this.glPoints = new Float32Array(this.points);
                this.buffer.upload(this.glPoints);
                this.glIndices = new Uint16Array(this.indices);
                this.indexBuffer.upload(this.glIndices);
                this.dirty = !1
            };
            a.prototype.destroy = function() {
                this.indices = this.points = this.color = null;
                this.vao.destroy();
                this.buffer.destroy();
                this.indexBuffer.destroy();
                this.glIndices = this.glPoints = this.indexBuffer = this.buffer = this.gl = null
            }
        }, {
            "pixi-gl-core": 12
        }],
        56: [function(b, e, l) {
            function a(a) {
                k.call(this, a, "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}",
                    "varying vec4 vColor;\nvoid main(void){\n   gl_FragColor = vColor;\n}")
            }
            var k = b("../../../Shader");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../../Shader": 42
        }],
        57: [function(b, e, l) {
            var a = b("./buildLine"),
                k = b("../../../const"),
                f = b("../../../utils");
            e.exports = function(d, h) {
                var m, b, n = d.shape,
                    e = n.x,
                    t = n.y;
                d.type === k.SHAPES.CIRC ? (m = n.radius, b = n.radius) : (m = n.width, b = n.height);
                var n = Math.floor(30 * Math.sqrt(n.radius)) || Math.floor(15 * Math.sqrt(n.width + n.height)),
                    l = 2 *
                    Math.PI / n,
                    u;
                if (d.fill) {
                    u = f.hex2rgb(d.fillColor);
                    var v = d.fillAlpha,
                        y = u[0] * v,
                        A = u[1] * v,
                        B = u[2] * v,
                        z = h.points,
                        x = h.indices,
                        F = z.length / 6;
                    x.push(F);
                    for (u = 0; u < n + 1; u++) z.push(e, t, y, A, B, v), z.push(e + Math.sin(l * u) * m, t + Math.cos(l * u) * b, y, A, B, v), x.push(F++, F++);
                    x.push(F - 1)
                }
                if (d.lineWidth) {
                    v = d.points;
                    d.points = [];
                    for (u = 0; u < n + 1; u++) d.points.push(e + Math.sin(l * u) * m, t + Math.cos(l * u) * b);
                    a(d, h);
                    d.points = v
                }
            }
        }, {
            "../../../const": 43,
            "../../../utils": 116,
            "./buildLine": 58
        }],
        58: [function(b, e, l) {
            var a = b("../../../math"),
                k = b("../../../utils");
            e.exports = function(f, d) {
                var h, m = f.points;
                if (0 !== m.length) {
                    var b = new a.Point(m[0], m[1]),
                        n = new a.Point(m[m.length - 2], m[m.length - 1]);
                    if (b.x === n.x && b.y === n.y) {
                        m = m.slice();
                        m.pop();
                        m.pop();
                        var n = new a.Point(m[m.length - 2], m[m.length - 1]),
                            e = n.x + .5 * (b.x - n.x),
                            b = n.y + .5 * (b.y - n.y);
                        m.unshift(e, b);
                        m.push(e, b)
                    }
                    var t, l, u, v, y, A, B, z, x, F, G, E, C, H, D, J, I, L, M, e = d.points,
                        b = d.indices,
                        n = m.length / 2,
                        N = m.length,
                        O = e.length / 6,
                        Q = f.lineWidth / 2;
                    h = k.hex2rgb(f.lineColor);
                    var K = f.lineAlpha,
                        T = h[0] * K,
                        R = h[1] * K,
                        P = h[2] * K;
                    u = m[0];
                    v = m[1];
                    y = m[2];
                    A = m[3];
                    x = -(v - A);
                    F = u - y;
                    M = Math.sqrt(x * x + F * F);
                    x = x / M * Q;
                    F = F / M * Q;
                    e.push(u - x, v - F, T, R, P, K);
                    e.push(u + x, v + F, T, R, P, K);
                    for (h = 1; h < n - 1; h++) u = m[2 * (h - 1)], v = m[2 * (h - 1) + 1], y = m[2 * h], A = m[2 * h + 1], B = m[2 * (h + 1)], z = m[2 * (h + 1) + 1], x = -(v - A), F = u - y, M = Math.sqrt(x * x + F * F), x /= M, F /= M, x *= Q, F *= Q, G = -(A - z), E = y - B, M = Math.sqrt(G * G + E * E), G /= M, E /= M, G *= Q, E *= Q, D = -F + v - (-F + A), J = -x + y - (-x + u), u = (-x + u) * (-F + A) - (-x + y) * (-F + v), v = -E + z - (-E + A), I = -G + y - (-G + B), B = (-G + B) * (-E + A) - (-G + y) * (-E + z), z = D * I - v * J, .1 > Math.abs(z) ? (e.push(y - x, A - F, T, R, P, K), e.push(y + x, A + F, T, R, P, K)) :
                        (t = (J * B - I * u) / z, l = (v * u - D * B) / z, L = (t - y) * (t - y) + (l - A) * (l - A), 19600 < L ? (C = x - G, H = F - E, M = Math.sqrt(C * C + H * H), C /= M, H /= M, C *= Q, H *= Q, e.push(y - C, A - H), e.push(T, R, P, K), e.push(y + C, A + H), e.push(T, R, P, K), e.push(y - C, A - H), e.push(T, R, P, K), N++) : (e.push(t, l), e.push(T, R, P, K), e.push(y - (t - y), A - (l - A)), e.push(T, R, P, K)));
                    u = m[2 * (n - 2)];
                    v = m[2 * (n - 2) + 1];
                    y = m[2 * (n - 1)];
                    A = m[2 * (n - 1) + 1];
                    x = -(v - A);
                    F = u - y;
                    M = Math.sqrt(x * x + F * F);
                    x = x / M * Q;
                    F = F / M * Q;
                    e.push(y - x, A - F);
                    e.push(T, R, P, K);
                    e.push(y + x, A + F);
                    e.push(T, R, P, K);
                    b.push(O);
                    for (h = 0; h < N; h++) b.push(O++);
                    b.push(O -
                        1)
                }
            }
        }, {
            "../../../math": 67,
            "../../../utils": 116
        }],
        59: [function(b, e, l) {
            var a = b("./buildLine"),
                k = b("../../../utils"),
                f = b("earcut");
            e.exports = function(d, h) {
                d.points = d.shape.points.slice();
                var b = d.points;
                if (d.fill && 6 <= b.length) {
                    for (var e = [], n = d.holes, r = 0; r < n.length; r++) {
                        var t = n[r];
                        e.push(b.length / 2);
                        b = b.concat(t.points)
                    }
                    var n = h.points,
                        t = h.indices,
                        l = b.length / 2,
                        r = k.hex2rgb(d.fillColor),
                        u = d.fillAlpha,
                        v = r[0] * u,
                        y = r[1] * u,
                        A = r[2] * u,
                        e = f(b, e, 2);
                    if (!e) return;
                    for (var B = n.length / 6, r = 0; r < e.length; r += 3) t.push(e[r] + B),
                        t.push(e[r] + B), t.push(e[r + 1] + B), t.push(e[r + 2] + B), t.push(e[r + 2] + B);
                    for (r = 0; r < l; r++) n.push(b[2 * r], b[2 * r + 1], v, y, A, u)
                }
                0 < d.lineWidth && a(d, h)
            }
        }, {
            "../../../utils": 116,
            "./buildLine": 58,
            earcut: 2
        }],
        60: [function(b, e, l) {
            var a = b("./buildLine"),
                k = b("../../../utils");
            e.exports = function(f, d) {
                var h = f.shape,
                    b = h.x,
                    e = h.y,
                    n = h.width,
                    h = h.height;
                if (f.fill) {
                    var r = k.hex2rgb(f.fillColor),
                        t = f.fillAlpha,
                        l = r[0] * t,
                        u = r[1] * t,
                        r = r[2] * t,
                        v = d.points,
                        y = d.indices,
                        A = v.length / 6;
                    v.push(b, e);
                    v.push(l, u, r, t);
                    v.push(b + n, e);
                    v.push(l, u, r, t);
                    v.push(b,
                        e + h);
                    v.push(l, u, r, t);
                    v.push(b + n, e + h);
                    v.push(l, u, r, t);
                    y.push(A, A, A + 1, A + 2, A + 3, A + 3)
                }
                f.lineWidth && (t = f.points, f.points = [b, e, b + n, e, b + n, e + h, b, e + h, b, e], a(f, d), f.points = t)
            }
        }, {
            "../../../utils": 116,
            "./buildLine": 58
        }],
        61: [function(b, e, l) {
            var a = b("earcut"),
                k = b("./buildLine"),
                f = b("../../../utils"),
                d = function(d, a, f, b, e, k, l) {
                    var h, m, n, q;
                    l = l || [];
                    for (var r, t = 0; 20 >= t; t++) r = t / 20, h = d + (f - d) * r, m = a + (b - a) * r, n = f + (e - f) * r, q = b + (k - b) * r, h += (n - h) * r, m += (q - m) * r, l.push(h, m);
                    return l
                };
            e.exports = function(h, b) {
                var m = h.shape,
                    n = m.x,
                    e =
                    m.y,
                    t = m.width,
                    l = m.height,
                    u = m.radius,
                    m = [];
                if (m.push(n, e + u), d(n, e + l - u, n, e + l, n + u, e + l, m), d(n + t - u, e + l, n + t, e + l, n + t, e + l - u, m), d(n + t, e + u, n + t, e, n + t - u, e, m), d(n + u, e, n, e, n, e + u + 1E-10, m), h.fill) {
                    var l = f.hex2rgb(h.fillColor),
                        n = h.fillAlpha,
                        e = l[0] * n,
                        t = l[1] * n,
                        l = l[2] * n,
                        u = b.points,
                        v = b.indices,
                        y = u.length / 6,
                        A = a(m, null, 2),
                        B;
                    for (B = 0; B < A.length; B += 3) v.push(A[B] + y), v.push(A[B] + y), v.push(A[B + 1] + y), v.push(A[B + 2] + y), v.push(A[B + 2] + y);
                    for (B = 0; B < m.length; B++) u.push(m[B], m[++B], e, t, l, n)
                }
                h.lineWidth && (n = h.points, h.points = m, k(h, b),
                    h.points = n)
            }
        }, {
            "../../../utils": 116,
            "./buildLine": 58,
            earcut: 2
        }],
        62: [function(b, e, l) {
            var a = e.exports = Object.assign(b("./const"), b("./math"), {
                utils: b("./utils"),
                ticker: b("./ticker"),
                DisplayObject: b("./display/DisplayObject"),
                Container: b("./display/Container"),
                Transform: b("./display/Transform"),
                TransformStatic: b("./display/TransformStatic"),
                TransformBase: b("./display/TransformBase"),
                Sprite: b("./sprites/Sprite"),
                CanvasSpriteRenderer: b("./sprites/canvas/CanvasSpriteRenderer"),
                CanvasTinter: b("./sprites/canvas/CanvasTinter"),
                SpriteRenderer: b("./sprites/webgl/SpriteRenderer"),
                Text: b("./text/Text"),
                TextStyle: b("./text/TextStyle"),
                Graphics: b("./graphics/Graphics"),
                GraphicsData: b("./graphics/GraphicsData"),
                GraphicsRenderer: b("./graphics/webgl/GraphicsRenderer"),
                CanvasGraphicsRenderer: b("./graphics/canvas/CanvasGraphicsRenderer"),
                Texture: b("./textures/Texture"),
                BaseTexture: b("./textures/BaseTexture"),
                RenderTexture: b("./textures/RenderTexture"),
                BaseRenderTexture: b("./textures/BaseRenderTexture"),
                VideoBaseTexture: b("./textures/VideoBaseTexture"),
                TextureUvs: b("./textures/TextureUvs"),
                CanvasRenderer: b("./renderers/canvas/CanvasRenderer"),
                CanvasRenderTarget: b("./renderers/canvas/utils/CanvasRenderTarget"),
                Shader: b("./Shader"),
                WebGLRenderer: b("./renderers/webgl/WebGLRenderer"),
                WebGLManager: b("./renderers/webgl/managers/WebGLManager"),
                ObjectRenderer: b("./renderers/webgl/utils/ObjectRenderer"),
                RenderTarget: b("./renderers/webgl/utils/RenderTarget"),
                Quad: b("./renderers/webgl/utils/Quad"),
                SpriteMaskFilter: b("./renderers/webgl/filters/spriteMask/SpriteMaskFilter"),
                Filter: b("./renderers/webgl/filters/Filter"),
                glCore: b("pixi-gl-core"),
                autoDetectRenderer: function(b, f, d, h) {
                    return b = b || 800, f = f || 600, !h && a.utils.isWebGLSupported() ? new a.WebGLRenderer(b, f, d) : new a.CanvasRenderer(b, f, d)
                }
            })
        }, {
            "./Shader": 42,
            "./const": 43,
            "./display/Container": 45,
            "./display/DisplayObject": 46,
            "./display/Transform": 47,
            "./display/TransformBase": 48,
            "./display/TransformStatic": 49,
            "./graphics/Graphics": 50,
            "./graphics/GraphicsData": 51,
            "./graphics/canvas/CanvasGraphicsRenderer": 52,
            "./graphics/webgl/GraphicsRenderer": 54,
            "./math": 67,
            "./renderers/canvas/CanvasRenderer": 74,
            "./renderers/canvas/utils/CanvasRenderTarget": 76,
            "./renderers/webgl/WebGLRenderer": 81,
            "./renderers/webgl/filters/Filter": 83,
            "./renderers/webgl/filters/spriteMask/SpriteMaskFilter": 86,
            "./renderers/webgl/managers/WebGLManager": 90,
            "./renderers/webgl/utils/ObjectRenderer": 91,
            "./renderers/webgl/utils/Quad": 92,
            "./renderers/webgl/utils/RenderTarget": 93,
            "./sprites/Sprite": 98,
            "./sprites/canvas/CanvasSpriteRenderer": 99,
            "./sprites/canvas/CanvasTinter": 100,
            "./sprites/webgl/SpriteRenderer": 102,
            "./text/Text": 104,
            "./text/TextStyle": 105,
            "./textures/BaseRenderTexture": 106,
            "./textures/BaseTexture": 107,
            "./textures/RenderTexture": 108,
            "./textures/Texture": 109,
            "./textures/TextureUvs": 110,
            "./textures/VideoBaseTexture": 111,
            "./ticker": 113,
            "./utils": 116,
            "pixi-gl-core": 12
        }],
        63: [function(b, e, l) {
            function a(d) {
                return 0 > d ? -1 : 0 < d ? 1 : 0
            }
            var k = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
                f = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
                d = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
                h = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
                m = [],
                q = b("./Matrix"),
                n = [];
            (function() {
                for (var b = 0; 16 > b; b++) {
                    var e = [];
                    n.push(e);
                    for (var r = 0; 16 > r; r++)
                        for (var l = a(k[b] * k[r] + d[b] * f[r]), y = a(f[b] * k[r] + h[b] * f[r]), A = a(k[b] * d[r] + d[b] * h[r]), B = a(f[b] * d[r] + h[b] * h[r]), z = 0; 16 > z; z++)
                            if (k[z] === l && f[z] === y && d[z] === A && h[z] === B) {
                                e.push(z);
                                break
                            }
                }
                for (b = 0; 16 > b; b++) e = new q, e.set(k[b], f[b], d[b], h[b], 0, 0), m.push(e)
            })();
            var r = {
                E: 0,
                SE: 1,
                S: 2,
                SW: 3,
                W: 4,
                NW: 5,
                N: 6,
                NE: 7,
                MIRROR_VERTICAL: 8,
                MIRROR_HORIZONTAL: 12,
                uX: function(d) {
                    return k[d]
                },
                uY: function(d) {
                    return f[d]
                },
                vX: function(a) {
                    return d[a]
                },
                vY: function(d) {
                    return h[d]
                },
                inv: function(d) {
                    return 8 & d ? 15 & d : 7 & -d
                },
                add: function(d, a) {
                    return n[d][a]
                },
                sub: function(d, a) {
                    return n[d][r.inv(a)]
                },
                rotate180: function(d) {
                    return 4 ^ d
                },
                isSwapWidthHeight: function(d) {
                    return 2 === (3 & d)
                },
                byDirection: function(d, a) {
                    return 2 * Math.abs(d) <= Math.abs(a) ? 0 <= a ? r.S : r.N : 2 * Math.abs(a) <= Math.abs(d) ? 0 < d ? r.E : r.W : 0 < a ? 0 < d ? r.SE : r.SW : 0 < d ? r.NE : r.NW
                },
                matrixAppendRotationInv: function(d, a, f, h) {
                    a = m[r.inv(a)];
                    a.tx = f || 0;
                    a.ty = h || 0;
                    d.append(a)
                }
            };
            e.exports = r
        }, {
            "./Matrix": 64
        }],
        64: [function(b,
            e, l) {
            function a() {
                this.a = 1;
                this.c = this.b = 0;
                this.d = 1;
                this.ty = this.tx = 0;
                this.array = null
            }
            var k = b("./Point");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.fromArray = function(a) {
                this.a = a[0];
                this.b = a[1];
                this.c = a[3];
                this.d = a[4];
                this.tx = a[2];
                this.ty = a[5]
            };
            a.prototype.set = function(a, d, h, b, e, n) {
                return this.a = a, this.b = d, this.c = h, this.d = b, this.tx = e, this.ty = n, this
            };
            a.prototype.toArray = function(a, d) {
                this.array || (this.array = new Float32Array(9));
                var f = d || this.array;
                return a ? (f[0] = this.a, f[1] = this.b, f[2] = 0, f[3] =
                    this.c, f[4] = this.d, f[5] = 0, f[6] = this.tx, f[7] = this.ty, f[8] = 1) : (f[0] = this.a, f[1] = this.c, f[2] = this.tx, f[3] = this.b, f[4] = this.d, f[5] = this.ty, f[6] = 0, f[7] = 0, f[8] = 1), f
            };
            a.prototype.apply = function(a, d) {
                d = d || new k;
                var f = a.x,
                    b = a.y;
                return d.x = this.a * f + this.c * b + this.tx, d.y = this.b * f + this.d * b + this.ty, d
            };
            a.prototype.applyInverse = function(a, d) {
                d = d || new k;
                var f = 1 / (this.a * this.d + this.c * -this.b),
                    b = a.x,
                    e = a.y;
                return d.x = this.d * f * b + -this.c * f * e + (this.ty * this.c - this.tx * this.d) * f, d.y = this.a * f * e + -this.b * f * b + (-this.ty * this.a +
                    this.tx * this.b) * f, d
            };
            a.prototype.translate = function(a, d) {
                return this.tx += a, this.ty += d, this
            };
            a.prototype.scale = function(a, d) {
                return this.a *= a, this.d *= d, this.c *= a, this.b *= d, this.tx *= a, this.ty *= d, this
            };
            a.prototype.rotate = function(a) {
                var d = Math.cos(a);
                a = Math.sin(a);
                var f = this.a,
                    b = this.c,
                    e = this.tx;
                return this.a = f * d - this.b * a, this.b = f * a + this.b * d, this.c = b * d - this.d * a, this.d = b * a + this.d * d, this.tx = e * d - this.ty * a, this.ty = e * a + this.ty * d, this
            };
            a.prototype.append = function(a) {
                var d = this.a,
                    f = this.b,
                    b = this.c,
                    e = this.d;
                return this.a = a.a * d + a.b * b, this.b = a.a * f + a.b * e, this.c = a.c * d + a.d * b, this.d = a.c * f + a.d * e, this.tx = a.tx * d + a.ty * b + this.tx, this.ty = a.tx * f + a.ty * e + this.ty, this
            };
            a.prototype.setTransform = function(a, d, h, b, e, n, k, l, w) {
                var f, m, q, r, t, z, x, F, G, E;
                return t = Math.sin(k), z = Math.cos(k), x = Math.cos(w), F = Math.sin(w), G = -Math.sin(l), E = Math.cos(l), f = z * e, m = t * e, q = -t * n, r = z * n, this.a = x * f + F * q, this.b = x * m + F * r, this.c = G * f + E * q, this.d = G * m + E * r, this.tx = a + (h * f + b * q), this.ty = d + (h * m + b * r), this
            };
            a.prototype.prepend = function(a) {
                var d = this.tx;
                if (1 !==
                    a.a || 0 !== a.b || 0 !== a.c || 1 !== a.d) {
                    var f = this.a,
                        b = this.c;
                    this.a = f * a.a + this.b * a.c;
                    this.b = f * a.b + this.b * a.d;
                    this.c = b * a.a + this.d * a.c;
                    this.d = b * a.b + this.d * a.d
                }
                return this.tx = d * a.a + this.ty * a.c + a.tx, this.ty = d * a.b + this.ty * a.d + a.ty, this
            };
            a.prototype.decompose = function(a) {
                var d = this.a,
                    f = this.b,
                    b = this.c,
                    e = this.d,
                    n = Math.atan2(-b, e),
                    k = Math.atan2(f, d);
                return 1E-5 > Math.abs(1 - n / k) ? (a.rotation = k, 0 > d && 0 <= e && (a.rotation += 0 >= a.rotation ? Math.PI : -Math.PI), a.skew.x = a.skew.y = 0) : (a.skew.x = n, a.skew.y = k), a.scale.x = Math.sqrt(d *
                    d + f * f), a.scale.y = Math.sqrt(b * b + e * e), a.position.x = this.tx, a.position.y = this.ty, a
            };
            a.prototype.invert = function() {
                var a = this.a,
                    d = this.b,
                    h = this.c,
                    b = this.d,
                    e = this.tx,
                    n = a * b - d * h;
                return this.a = b / n, this.b = -d / n, this.c = -h / n, this.d = a / n, this.tx = (h * this.ty - b * e) / n, this.ty = -(a * this.ty - d * e) / n, this
            };
            a.prototype.identity = function() {
                return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
            };
            a.prototype.clone = function() {
                var f = new a;
                return f.a = this.a, f.b = this.b, f.c = this.c, f.d = this.d, f.tx = this.tx, f.ty = this.ty,
                    f
            };
            a.prototype.copy = function(a) {
                return a.a = this.a, a.b = this.b, a.c = this.c, a.d = this.d, a.tx = this.tx, a.ty = this.ty, a
            };
            a.IDENTITY = new a;
            a.TEMP_MATRIX = new a
        }, {
            "./Point": 66
        }],
        65: [function(b, e, l) {
            function a(a, f, d, h) {
                this._x = d || 0;
                this._y = h || 0;
                this.cb = a;
                this.scope = f
            }
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                x: {
                    get: function() {
                        return this._x
                    },
                    set: function(a) {
                        this._x !== a && (this._x = a, this.cb.call(this.scope))
                    }
                },
                y: {
                    get: function() {
                        return this._y
                    },
                    set: function(a) {
                        this._y !== a && (this._y =
                            a, this.cb.call(this.scope))
                    }
                }
            });
            a.prototype.set = function(a, f) {
                var d = a || 0,
                    h = f || (0 !== f ? d : 0);
                this._x === d && this._y === h || (this._x = d, this._y = h, this.cb.call(this.scope))
            };
            a.prototype.copy = function(a) {
                this._x === a.x && this._y === a.y || (this._x = a.x, this._y = a.y, this.cb.call(this.scope))
            }
        }, {}],
        66: [function(b, e, l) {
            function a(a, f) {
                this.x = a || 0;
                this.y = f || 0
            }
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.clone = function() {
                return new a(this.x, this.y)
            };
            a.prototype.copy = function(a) {
                this.set(a.x, a.y)
            };
            a.prototype.equals =
                function(a) {
                    return a.x === this.x && a.y === this.y
                };
            a.prototype.set = function(a, f) {
                this.x = a || 0;
                this.y = f || (0 !== f ? this.x : 0)
            }
        }, {}],
        67: [function(b, e, l) {
            e.exports = {
                Point: b("./Point"),
                ObservablePoint: b("./ObservablePoint"),
                Matrix: b("./Matrix"),
                GroupD8: b("./GroupD8"),
                Circle: b("./shapes/Circle"),
                Ellipse: b("./shapes/Ellipse"),
                Polygon: b("./shapes/Polygon"),
                Rectangle: b("./shapes/Rectangle"),
                RoundedRectangle: b("./shapes/RoundedRectangle")
            }
        }, {
            "./GroupD8": 63,
            "./Matrix": 64,
            "./ObservablePoint": 65,
            "./Point": 66,
            "./shapes/Circle": 68,
            "./shapes/Ellipse": 69,
            "./shapes/Polygon": 70,
            "./shapes/Rectangle": 71,
            "./shapes/RoundedRectangle": 72
        }],
        68: [function(b, e, l) {
            function a(a, h, b) {
                this.x = a || 0;
                this.y = h || 0;
                this.radius = b || 0;
                this.type = f.SHAPES.CIRC
            }
            var k = b("./Rectangle"),
                f = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.clone = function() {
                return new a(this.x, this.y, this.radius)
            };
            a.prototype.contains = function(a, f) {
                if (0 >= this.radius) return !1;
                var d = this.x - a,
                    h = this.y - f,
                    b = this.radius * this.radius;
                return d *= d, h *= h, d + h <= b
            };
            a.prototype.getBounds =
                function() {
                    return new k(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
                }
        }, {
            "../../const": 43,
            "./Rectangle": 71
        }],
        69: [function(b, e, l) {
            function a(a, h, b, e) {
                this.x = a || 0;
                this.y = h || 0;
                this.width = b || 0;
                this.height = e || 0;
                this.type = f.SHAPES.ELIP
            }
            var k = b("./Rectangle"),
                f = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.clone = function() {
                return new a(this.x, this.y, this.width, this.height)
            };
            a.prototype.contains = function(a, f) {
                if (0 >= this.width || 0 >= this.height) return !1;
                var d = (a - this.x) /
                    this.width,
                    h = (f - this.y) / this.height;
                return d *= d, h *= h, 1 >= d + h
            };
            a.prototype.getBounds = function() {
                return new k(this.x - this.width, this.y - this.height, this.width, this.height)
            }
        }, {
            "../../const": 43,
            "./Rectangle": 71
        }],
        70: [function(b, e, l) {
            function a(a) {
                var d = a;
                if (!Array.isArray(d))
                    for (var d = Array(arguments.length), b = 0; b < d.length; ++b) d[b] = arguments[b];
                if (d[0] instanceof k) {
                    for (var b = [], e = 0, n = d.length; e < n; e++) b.push(d[e].x, d[e].y);
                    d = b
                }
                this.closed = !0;
                this.points = d;
                this.type = f.SHAPES.POLY
            }
            var k = b("../Point"),
                f = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.clone = function() {
                return new a(this.points.slice())
            };
            a.prototype.close = function() {
                var a = this.points;
                a[0] === a[a.length - 2] && a[1] === a[a.length - 1] || a.push(a[0], a[1])
            };
            a.prototype.contains = function(a, f) {
                for (var d = !1, h = this.points.length / 2, b = 0, e = h - 1; b < h; e = b++) {
                    var k = this.points[2 * b],
                        l = this.points[2 * b + 1],
                        u = this.points[2 * e],
                        e = this.points[2 * e + 1];
                    l > f != e > f && a < (u - k) * (f - l) / (e - l) + k && (d = !d)
                }
                return d
            }
        }, {
            "../../const": 43,
            "../Point": 66
        }],
        71: [function(b, e, l) {
            function a(a,
                d, h, b) {
                this.x = a || 0;
                this.y = d || 0;
                this.width = h || 0;
                this.height = b || 0;
                this.type = k.SHAPES.RECT
            }
            var k = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                left: {
                    get: function() {
                        return this.x
                    }
                },
                right: {
                    get: function() {
                        return this.x + this.width
                    }
                },
                top: {
                    get: function() {
                        return this.y
                    }
                },
                bottom: {
                    get: function() {
                        return this.y + this.height
                    }
                }
            });
            a.EMPTY = new a(0, 0, 0, 0);
            a.prototype.clone = function() {
                return new a(this.x, this.y, this.width, this.height)
            };
            a.prototype.copy = function(a) {
                return this.x =
                    a.x, this.y = a.y, this.width = a.width, this.height = a.height, this
            };
            a.prototype.contains = function(a, d) {
                return !(0 >= this.width || 0 >= this.height) && a >= this.x && a < this.x + this.width && d >= this.y && d < this.y + this.height
            };
            a.prototype.pad = function(a, d) {
                a = a || 0;
                d = d || (0 !== d ? a : 0);
                this.x -= a;
                this.y -= d;
                this.width += 2 * a;
                this.height += 2 * d
            };
            a.prototype.fit = function(a) {
                this.x < a.x && (this.width += this.x, 0 > this.width && (this.width = 0), this.x = a.x);
                this.y < a.y && (this.height += this.y, 0 > this.height && (this.height = 0), this.y = a.y);
                this.x + this.width >
                    a.x + a.width && (this.width = a.width - this.x, 0 > this.width && (this.width = 0));
                this.y + this.height > a.y + a.height && (this.height = a.height - this.y, 0 > this.height && (this.height = 0))
            };
            a.prototype.enlarge = function(f) {
                if (f !== a.EMPTY) {
                    var d = Math.min(this.x, f.x),
                        h = Math.max(this.x + this.width, f.x + f.width),
                        b = Math.min(this.y, f.y);
                    f = Math.max(this.y + this.height, f.y + f.height);
                    this.x = d;
                    this.width = h - d;
                    this.y = b;
                    this.height = f - b
                }
            }
        }, {
            "../../const": 43
        }],
        72: [function(b, e, l) {
            function a(a, d, h, b, e) {
                this.x = a || 0;
                this.y = d || 0;
                this.width = h ||
                    0;
                this.height = b || 0;
                this.radius = e || 20;
                this.type = k.SHAPES.RREC
            }
            var k = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.clone = function() {
                return new a(this.x, this.y, this.width, this.height, this.radius)
            };
            a.prototype.contains = function(a, d) {
                return !(0 >= this.width || 0 >= this.height) && a >= this.x && a <= this.x + this.width && d >= this.y && d <= this.y + this.height
            }
        }, {
            "../../const": 43
        }],
        73: [function(b, e, l) {
                function a(a, h, b, e) {
                    if (m.call(this), k.sayHello(a), e)
                        for (var n in f.DEFAULT_RENDER_OPTIONS) "undefined" ==
                            typeof e[n] && (e[n] = f.DEFAULT_RENDER_OPTIONS[n]);
                    else e = f.DEFAULT_RENDER_OPTIONS;
                    this.type = f.RENDERER_TYPE.UNKNOWN;
                    this.width = h || 800;
                    this.height = b || 600;
                    this.view = e.view || document.createElement("canvas");
                    this.resolution = e.resolution;
                    this.transparent = e.transparent;
                    this.autoResize = e.autoResize || !1;
                    this.blendModes = null;
                    this.preserveDrawingBuffer = e.preserveDrawingBuffer;
                    this.clearBeforeRender = e.clearBeforeRender;
                    this.roundPixels = e.roundPixels;
                    this._backgroundColor = 0;
                    this._backgroundColorRgba = [0, 0, 0, 0];
                    this._backgroundColorString = "#000000";
                    this.backgroundColor = e.backgroundColor || this._backgroundColor;
                    this._lastObjectRendered = this._tempDisplayObjectParent = new d
                }
                var k = b("../utils");
                l = b("../math");
                var f = b("../const"),
                    d = b("../display/Container"),
                    h = b("../textures/RenderTexture"),
                    m = b("eventemitter3"),
                    q = new l.Matrix;
                a.prototype = Object.create(m.prototype);
                a.prototype.constructor = a;
                e.exports = a;
                Object.defineProperties(a.prototype, {
                    backgroundColor: {
                        get: function() {
                            return this._backgroundColor
                        },
                        set: function(a) {
                            this._backgroundColor =
                                a;
                            this._backgroundColorString = k.hex2string(a);
                            k.hex2rgb(a, this._backgroundColorRgba)
                        }
                    }
                });
                a.prototype.resize = function(a, d) {
                    this.width = a * this.resolution;
                    this.height = d * this.resolution;
                    this.view.width = this.width;
                    this.view.height = this.height;
                    this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
                };
                a.prototype.generateTexture = function(a, d, f) {
                    var b = a.getLocalBounds();
                    d = h.create(0 | b.width, 0 | b.height, d, f);
                    return q.tx = -b.x, q.ty = -b.y, this.render(a,
                        d, !1, q, !0), d
                };
                a.prototype.destroy = function(a) {
                    a && this.view.parentNode && this.view.parentNode.removeChild(this.view);
                    this.type = f.RENDERER_TYPE.UNKNOWN;
                    this.height = this.width = 0;
                    this.view = null;
                    this.resolution = 0;
                    this.autoResize = this.transparent = !1;
                    this.blendModes = null;
                    this.roundPixels = this.clearBeforeRender = this.preserveDrawingBuffer = !1;
                    this._backgroundColor = 0;
                    this._backgroundColorString = this._backgroundColorRgba = null;
                    this.backgroundColor = 0;
                    this._lastObjectRendered = this._tempDisplayObjectParent = null
                }
            },
            {
                "../const": 43,
                "../display/Container": 45,
                "../math": 67,
                "../textures/RenderTexture": 108,
                "../utils": 116,
                eventemitter3: 3
            }
        ],
        74: [function(b, e, l) {
            function a(a, d, b) {
                b = b || {};
                k.call(this, "Canvas", a, d, b);
                this.type = m.RENDERER_TYPE.CANVAS;
                this.rootContext = this.view.getContext("2d", {
                    alpha: this.transparent
                });
                this.rootResolution = this.resolution;
                this.refresh = !0;
                this.maskManager = new f(this);
                this.smoothProperty = "imageSmoothingEnabled";
                this.rootContext.imageSmoothingEnabled || (this.rootContext.webkitImageSmoothingEnabled ?
                    this.smoothProperty = "webkitImageSmoothingEnabled" : this.rootContext.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : this.rootContext.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : this.rootContext.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled"));
                this.initPlugins();
                this.blendModes = h();
                this.context = this._activeBlendMode = null;
                this.renderingToScreen = !1;
                this.resize(a, d)
            }
            var k = b("../SystemRenderer"),
                f = b("./utils/CanvasMaskManager"),
                d =
                b("./utils/CanvasRenderTarget"),
                h = b("./utils/mapCanvasBlendModesToPixi");
            l = b("../../utils");
            var m = b("../../const");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            l.pluginTarget.mixin(a);
            a.prototype.render = function(a, f, h, b, e) {
                if (this.view) {
                    this.renderingToScreen = !f;
                    this.emit("prerender");
                    f ? (f = f.baseTexture || f, f._canvasRenderTarget || (f._canvasRenderTarget = new d(f.width, f.height, f.resolution), f.source = f._canvasRenderTarget.canvas, f.valid = !0), this.context = f._canvasRenderTarget.context,
                        this.resolution = f._canvasRenderTarget.resolution) : (this.context = this.rootContext, this.resolution = this.rootResolution);
                    var n = this.context;
                    (f || (this._lastObjectRendered = a), e) || (f = a.parent, e = this._tempDisplayObjectParent.transform.worldTransform, b ? b.copy(e) : e.identity(), a.parent = this._tempDisplayObjectParent, a.updateTransform(), a.parent = f);
                    n.setTransform(1, 0, 0, 1, 0, 0);
                    n.globalAlpha = 1;
                    n.globalCompositeOperation = this.blendModes[m.BLEND_MODES.NORMAL];
                    navigator.isCocoonJS && this.view.screencanvas && (n.fillStyle =
                        "black", n.clear());
                    (void 0 !== h ? h : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? n.clearRect(0, 0, this.width, this.height) : (n.fillStyle = this._backgroundColorString, n.fillRect(0, 0, this.width, this.height)));
                    h = this.context;
                    this.context = n;
                    a.renderCanvas(this);
                    this.context = h;
                    this.emit("postrender")
                }
            };
            a.prototype.setBlendMode = function(a) {
                this._activeBlendMode !== a && (this.context.globalCompositeOperation = this.blendModes[a])
            };
            a.prototype.destroy = function(a) {
                this.destroyPlugins();
                k.prototype.destroy.call(this,
                    a);
                this.context = null;
                this.refresh = !0;
                this.maskManager.destroy();
                this.smoothProperty = this.maskManager = null
            };
            a.prototype.resize = function(a, d) {
                k.prototype.resize.call(this, a, d);
                this.smoothProperty && (this.rootContext[this.smoothProperty] = m.SCALE_MODES.DEFAULT === m.SCALE_MODES.LINEAR)
            }
        }, {
            "../../const": 43,
            "../../utils": 116,
            "../SystemRenderer": 73,
            "./utils/CanvasMaskManager": 75,
            "./utils/CanvasRenderTarget": 76,
            "./utils/mapCanvasBlendModesToPixi": 78
        }],
        75: [function(b, e, l) {
            function a(a) {
                this.renderer = a
            }
            var k =
                b("../../../const");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.pushMask = function(a) {
                var d = this.renderer;
                d.context.save();
                var f = a.alpha,
                    b = a.transform.worldTransform,
                    e = d.resolution;
                d.context.setTransform(b.a * e, b.b * e, b.c * e, b.d * e, b.tx * e, b.ty * e);
                a._texture || (this.renderGraphicsShape(a), d.context.clip());
                a.worldAlpha = f
            };
            a.prototype.renderGraphicsShape = function(a) {
                var d = this.renderer.context,
                    f = a.graphicsData.length;
                if (0 !== f) {
                    d.beginPath();
                    for (var b = 0; b < f; b++) {
                        var e = a.graphicsData[b],
                            n = e.shape;
                        if (e.type ===
                            k.SHAPES.POLY) {
                            e = n.points;
                            d.moveTo(e[0], e[1]);
                            for (var r = 1; r < e.length / 2; r++) d.lineTo(e[2 * r], e[2 * r + 1]);
                            e[0] === e[e.length - 2] && e[1] === e[e.length - 1] && d.closePath()
                        } else if (e.type === k.SHAPES.RECT) d.rect(n.x, n.y, n.width, n.height), d.closePath();
                        else if (e.type === k.SHAPES.CIRC) d.arc(n.x, n.y, n.radius, 0, 2 * Math.PI), d.closePath();
                        else if (e.type === k.SHAPES.ELIP) {
                            var l = 2 * n.width,
                                r = 2 * n.height,
                                e = n.x - l / 2,
                                n = n.y - r / 2,
                                w = l / 2 * .5522848,
                                u = r / 2 * .5522848,
                                v = e + l,
                                y = n + r,
                                l = e + l / 2,
                                r = n + r / 2;
                            d.moveTo(e, r);
                            d.bezierCurveTo(e, r - u, l - w, n, l,
                                n);
                            d.bezierCurveTo(l + w, n, v, r - u, v, r);
                            d.bezierCurveTo(v, r + u, l + w, y, l, y);
                            d.bezierCurveTo(l - w, y, e, r + u, e, r);
                            d.closePath()
                        } else e.type === k.SHAPES.RREC && (e = n.x, r = n.y, w = n.width, u = n.height, n = n.radius, v = Math.min(w, u) / 2 | 0, n = n > v ? v : n, d.moveTo(e, r + n), d.lineTo(e, r + u - n), d.quadraticCurveTo(e, r + u, e + n, r + u), d.lineTo(e + w - n, r + u), d.quadraticCurveTo(e + w, r + u, e + w, r + u - n), d.lineTo(e + w, r + n), d.quadraticCurveTo(e + w, r, e + w - n, r), d.lineTo(e + n, r), d.quadraticCurveTo(e, r, e, r + n), d.closePath())
                    }
                }
            };
            a.prototype.popMask = function(a) {
                a.context.restore()
            };
            a.prototype.destroy = function() {}
        }, {
            "../../../const": 43
        }],
        76: [function(b, e, l) {
            function a(a, d, h) {
                this.canvas = document.createElement("canvas");
                this.context = this.canvas.getContext("2d");
                this.resolution = h || k.RESOLUTION;
                this.resize(a, d)
            }
            var k = b("../../../const");
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                width: {
                    get: function() {
                        return this.canvas.width
                    },
                    set: function(a) {
                        this.canvas.width = a
                    }
                },
                height: {
                    get: function() {
                        return this.canvas.height
                    },
                    set: function(a) {
                        this.canvas.height =
                            a
                    }
                }
            });
            a.prototype.clear = function() {
                this.context.setTransform(1, 0, 0, 1, 0, 0);
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            };
            a.prototype.resize = function(a, d) {
                this.canvas.width = a * this.resolution;
                this.canvas.height = d * this.resolution
            };
            a.prototype.destroy = function() {
                this.canvas = this.context = null
            }
        }, {
            "../../../const": 43
        }],
        77: [function(b, e, l) {
            var a = function(a) {
                var f = document.createElement("canvas");
                f.width = 6;
                f.height = 1;
                var d = f.getContext("2d");
                return d.fillStyle = a, d.fillRect(0, 0, 6, 1), f
            };
            e.exports =
                function() {
                    if ("undefined" == typeof document) return !1;
                    var b = a("#ff00ff"),
                        f = a("#ffff00"),
                        d = document.createElement("canvas");
                    d.width = 6;
                    d.height = 1;
                    d = d.getContext("2d");
                    d.globalCompositeOperation = "multiply";
                    d.drawImage(b, 0, 0);
                    d.drawImage(f, 2, 0);
                    b = d.getImageData(2, 0, 1, 1);
                    if (!b) return !1;
                    b = b.data;
                    return 255 === b[0] && 0 === b[1] && 0 === b[2]
                }
        }, {}],
        78: [function(b, e, l) {
            var a = b("../../../const"),
                k = b("./canUseNewCanvasBlendModes");
            e.exports = function(f) {
                return f = f || [], k() ? (f[a.BLEND_MODES.NORMAL] = "source-over", f[a.BLEND_MODES.ADD] =
                    "lighter", f[a.BLEND_MODES.MULTIPLY] = "multiply", f[a.BLEND_MODES.SCREEN] = "screen", f[a.BLEND_MODES.OVERLAY] = "overlay", f[a.BLEND_MODES.DARKEN] = "darken", f[a.BLEND_MODES.LIGHTEN] = "lighten", f[a.BLEND_MODES.COLOR_DODGE] = "color-dodge", f[a.BLEND_MODES.COLOR_BURN] = "color-burn", f[a.BLEND_MODES.HARD_LIGHT] = "hard-light", f[a.BLEND_MODES.SOFT_LIGHT] = "soft-light", f[a.BLEND_MODES.DIFFERENCE] = "difference", f[a.BLEND_MODES.EXCLUSION] = "exclusion", f[a.BLEND_MODES.HUE] = "hue", f[a.BLEND_MODES.SATURATION] = "saturate", f[a.BLEND_MODES.COLOR] =
                    "color", f[a.BLEND_MODES.LUMINOSITY] = "luminosity") : (f[a.BLEND_MODES.NORMAL] = "source-over", f[a.BLEND_MODES.ADD] = "lighter", f[a.BLEND_MODES.MULTIPLY] = "source-over", f[a.BLEND_MODES.SCREEN] = "source-over", f[a.BLEND_MODES.OVERLAY] = "source-over", f[a.BLEND_MODES.DARKEN] = "source-over", f[a.BLEND_MODES.LIGHTEN] = "source-over", f[a.BLEND_MODES.COLOR_DODGE] = "source-over", f[a.BLEND_MODES.COLOR_BURN] = "source-over", f[a.BLEND_MODES.HARD_LIGHT] = "source-over", f[a.BLEND_MODES.SOFT_LIGHT] = "source-over", f[a.BLEND_MODES.DIFFERENCE] =
                    "source-over", f[a.BLEND_MODES.EXCLUSION] = "source-over", f[a.BLEND_MODES.HUE] = "source-over", f[a.BLEND_MODES.SATURATION] = "source-over", f[a.BLEND_MODES.COLOR] = "source-over", f[a.BLEND_MODES.LUMINOSITY] = "source-over"), f
            }
        }, {
            "../../../const": 43,
            "./canUseNewCanvasBlendModes": 77
        }],
        79: [function(b, e, l) {
            function a(a) {
                this.renderer = a;
                this.checkCount = this.count = 0;
                this.maxIdle = 3600;
                this.checkCountMax = 600;
                this.mode = k.GC_MODES.DEFAULT
            }
            var k = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.update =
                function() {
                    this.count++;
                    this.mode !== k.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
                };
            a.prototype.run = function() {
                var a, d;
                d = this.renderer.textureManager;
                var h = d._managedTextures,
                    b = !1;
                for (a = 0; a < h.length; a++) {
                    var e = h[a];
                    !e._glRenderTargets && this.count - e.touched > this.maxIdle && (d.destroyTexture(e, !0), h[a] = null, b = !0)
                }
                if (b) {
                    for (a = d = 0; a < h.length; a++) null !== h[a] && (h[d++] = h[a]);
                    h.length = d
                }
            };
            a.prototype.unload = function(a) {
                var d = this.renderer.textureManager;
                a._texture && d.destroyTexture(a._texture, !0);
                for (d = a.children.length - 1; 0 <= d; d--) this.unload(a.children[d])
            }
        }, {
            "../../const": 43
        }],
        80: [function(b, e, l) {
            var a = b("pixi-gl-core").GLTexture,
                k = b("../../const"),
                f = b("./utils/RenderTarget"),
                d = b("../../utils");
            b = function(a) {
                this.renderer = a;
                this.gl = a.gl;
                this._managedTextures = []
            };
            b.prototype.bindTexture = function() {};
            b.prototype.getTexture = function() {};
            b.prototype.updateTexture = function(d) {
                d = d.baseTexture || d;
                var h = !!d._glRenderTargets;
                if (d.hasLoaded) {
                    var b = d._glTextures[this.renderer.CONTEXT_UID];
                    b ? h ? d._glRenderTargets[this.renderer.CONTEXT_UID].resize(d.width, d.height) : b.upload(d.source) : (h ? (h = new f(this.gl, d.width, d.height, d.scaleMode, d.resolution), h.resize(d.width, d.height), d._glRenderTargets[this.renderer.CONTEXT_UID] = h, b = h.texture) : (b = new a(this.gl), b.premultiplyAlpha = !0, b.upload(d.source)), d._glTextures[this.renderer.CONTEXT_UID] = b, d.on("update", this.updateTexture, this), d.on("dispose", this.destroyTexture, this), this._managedTextures.push(d), d.isPowerOfTwo ? (d.mipmap && b.enableMipmap(),
                        d.wrapMode === k.WRAP_MODES.CLAMP ? b.enableWrapClamp() : d.wrapMode === k.WRAP_MODES.REPEAT ? b.enableWrapRepeat() : b.enableWrapMirrorRepeat()) : b.enableWrapClamp(), d.scaleMode === k.SCALE_MODES.NEAREST ? b.enableNearestScaling() : b.enableLinearScaling());
                    return b
                }
            };
            b.prototype.destroyTexture = function(a, f) {
                if (a = a.baseTexture || a, a.hasLoaded && a._glTextures[this.renderer.CONTEXT_UID] && (a._glTextures[this.renderer.CONTEXT_UID].destroy(), a.off("update", this.updateTexture, this), a.off("dispose", this.destroyTexture, this),
                        delete a._glTextures[this.renderer.CONTEXT_UID], !f)) {
                    var h = this._managedTextures.indexOf(a); - 1 !== h && d.removeItems(this._managedTextures, h, 1)
                }
            };
            b.prototype.removeAll = function() {
                for (var a = 0; a < this._managedTextures.length; ++a) {
                    var d = this._managedTextures[a];
                    d._glTextures[this.renderer.CONTEXT_UID] && delete d._glTextures[this.renderer.CONTEXT_UID]
                }
            };
            b.prototype.destroy = function() {
                for (var a = 0; a < this._managedTextures.length; ++a) {
                    var d = this._managedTextures[a];
                    this.destroyTexture(d, !0);
                    d.off("update", this.updateTexture,
                        this);
                    d.off("dispose", this.destroyTexture, this)
                }
                this._managedTextures = null
            };
            e.exports = b
        }, {
            "../../const": 43,
            "../../utils": 116,
            "./utils/RenderTarget": 93,
            "pixi-gl-core": 12
        }],
        81: [function(b, e, l) {
            function a(a, b, e) {
                e = e || {};
                k.call(this, "WebGL", a, b, e);
                this.type = A.RENDERER_TYPE.WEBGL;
                this.handleContextLost = this.handleContextLost.bind(this);
                this.handleContextRestored = this.handleContextRestored.bind(this);
                this.view.addEventListener("webglcontextlost", this.handleContextLost, !1);
                this.view.addEventListener("webglcontextrestored",
                    this.handleContextRestored, !1);
                this._contextOptions = {
                    alpha: this.transparent,
                    antialias: e.antialias,
                    premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                    stencil: !0,
                    preserveDrawingBuffer: e.preserveDrawingBuffer
                };
                this._backgroundColorRgba[3] = this.transparent ? 0 : 1;
                this.maskManager = new f(this);
                this.stencilManager = new d(this);
                this.currentRenderer = this.emptyRenderer = new q(this);
                this.initPlugins();
                e.context && v(e.context);
                this.gl = e.context || w(this.view, this._contextOptions);
                this.CONTEXT_UID =
                    B++;
                this.state = new t(this.gl);
                this.renderingToScreen = !0;
                this._initContext();
                this.filterManager = new h(this);
                this.drawModes = u(this.gl);
                this._activeRenderTarget = this._activeShader = null;
                this._activeTextureLocation = 999;
                this._activeTexture = null;
                this.setBlendMode(0)
            }
            var k = b("../SystemRenderer"),
                f = b("./managers/MaskManager"),
                d = b("./managers/StencilManager"),
                h = b("./managers/FilterManager"),
                m = b("./utils/RenderTarget"),
                q = b("./utils/ObjectRenderer"),
                n = b("./TextureManager"),
                r = b("./TextureGarbageCollector"),
                t =
                b("./WebGLState"),
                w = b("pixi-gl-core").createContext,
                u = b("./utils/mapWebGLDrawModesToPixi"),
                v = b("./utils/validateContext");
            l = b("../../utils");
            var y = b("pixi-gl-core"),
                A = b("../../const"),
                B = 0;
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            l.pluginTarget.mixin(a);
            a.prototype._initContext = function() {
                var a = this.gl;
                this.textureManager = new n(this);
                this.textureGC = new r(this);
                this.state.resetToDefault();
                this.rootRenderTarget = new m(a, this.width, this.height, null, this.resolution, !0);
                this.rootRenderTarget.clearColor = this._backgroundColorRgba;
                this.bindRenderTarget(this.rootRenderTarget);
                this.emit("context", a);
                this.resize(this.width, this.height)
            };
            a.prototype.render = function(a, d, f, h, b) {
                if (this.renderingToScreen = !d, this.emit("prerender"), this.gl && !this.gl.isContextLost())(d || (this._lastObjectRendered = a), b) || (b = a.parent, a.parent = this._tempDisplayObjectParent, a.updateTransform(), a.parent = b), this.bindRenderTexture(d, h), this.currentRenderer.start(), (void 0 !== f ? f : this.clearBeforeRender) &&
                    this._activeRenderTarget.clear(), a.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender")
            };
            a.prototype.setObjectRenderer = function(a) {
                this.currentRenderer !== a && (this.currentRenderer.stop(), this.currentRenderer = a, this.currentRenderer.start())
            };
            a.prototype.flush = function() {
                this.setObjectRenderer(this.emptyRenderer)
            };
            a.prototype.resize = function(a, d) {
                k.prototype.resize.call(this, a, d);
                this.rootRenderTarget.resize(a, d);
                this._activeRenderTarget === this.rootRenderTarget &&
                    (this.rootRenderTarget.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)))
            };
            a.prototype.setBlendMode = function(a) {
                this.state.setBlendMode(a)
            };
            a.prototype.clear = function(a) {
                this._activeRenderTarget.clear(a)
            };
            a.prototype.setTransform = function(a) {
                this._activeRenderTarget.transform = a
            };
            a.prototype.bindRenderTexture = function(a, d) {
                var f;
                if (a) {
                    f = a.baseTexture;
                    var h = this.gl;
                    f._glRenderTargets[this.CONTEXT_UID] ? (this._activeTextureLocation =
                        f._id, h.activeTexture(h.TEXTURE0 + f._id), h.bindTexture(h.TEXTURE_2D, null)) : (this.textureManager.updateTexture(f), h.bindTexture(h.TEXTURE_2D, null));
                    f = f._glRenderTargets[this.CONTEXT_UID];
                    f.setFrame(a.frame)
                } else f = this.rootRenderTarget;
                return f.transform = d, this.bindRenderTarget(f), this
            };
            a.prototype.bindRenderTarget = function(a) {
                return a !== this._activeRenderTarget && (this._activeRenderTarget = a, a.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = a.projectionMatrix.toArray(!0)),
                    this.stencilManager.setMaskStack(a.stencilMaskStack)), this
            };
            a.prototype.bindShader = function(a) {
                return this._activeShader !== a && (this._activeShader = a, a.bind(), a.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0)), this
            };
            a.prototype.bindTexture = function(a, d) {
                a = a.baseTexture || a;
                var f = this.gl;
                return d = d || 0, this._activeTextureLocation !== d && (this._activeTextureLocation = d, f.activeTexture(f.TEXTURE0 + d)), this._activeTexture = a, a._glTextures[this.CONTEXT_UID] ? (a.touched = this.textureGC.count,
                    a._glTextures[this.CONTEXT_UID].bind()) : this.textureManager.updateTexture(a), this
            };
            a.prototype.createVao = function() {
                return new y.VertexArrayObject(this.gl, this.state.attribState)
            };
            a.prototype.reset = function() {
                return this.setObjectRenderer(this.emptyRenderer), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget, this._activeTextureLocation = 999, this._activeTexture = null, this.rootRenderTarget.activate(), this.state.resetToDefault(), this
            };
            a.prototype.handleContextLost = function(a) {
                a.preventDefault()
            };
            a.prototype.handleContextRestored = function() {
                this._initContext();
                this.textureManager.removeAll()
            };
            a.prototype.destroy = function(a) {
                this.destroyPlugins();
                this.view.removeEventListener("webglcontextlost", this.handleContextLost);
                this.view.removeEventListener("webglcontextrestored", this.handleContextRestored);
                this.textureManager.destroy();
                k.prototype.destroy.call(this, a);
                this.uid = 0;
                this.maskManager.destroy();
                this.stencilManager.destroy();
                this.filterManager.destroy();
                this._contextOptions = this.handleContextRestored =
                    this.handleContextLost = this.currentRenderer = this.textureManager = this.filterManager = this.maskManager = null;
                this.gl.useProgram(null);
                this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext();
                this.gl = null
            }
        }, {
            "../../const": 43,
            "../../utils": 116,
            "../SystemRenderer": 73,
            "./TextureGarbageCollector": 79,
            "./TextureManager": 80,
            "./WebGLState": 82,
            "./managers/FilterManager": 87,
            "./managers/MaskManager": 88,
            "./managers/StencilManager": 89,
            "./utils/ObjectRenderer": 91,
            "./utils/RenderTarget": 93,
            "./utils/mapWebGLDrawModesToPixi": 96,
            "./utils/validateContext": 97,
            "pixi-gl-core": 12
        }],
        82: [function(b, e, l) {
            function a(a) {
                this.activeState = new Uint8Array(16);
                this.defaultState = new Uint8Array(16);
                this.defaultState[0] = 1;
                this.stackIndex = 0;
                this.stack = [];
                this.gl = a;
                this.maxAttribs = a.getParameter(a.MAX_VERTEX_ATTRIBS);
                this.attribState = {
                    tempAttribState: Array(this.maxAttribs),
                    attribState: Array(this.maxAttribs)
                };
                this.blendModes = k(a);
                this.nativeVaoExtension = a.getExtension("OES_vertex_array_object") || a.getExtension("MOZ_OES_vertex_array_object") ||
                    a.getExtension("WEBKIT_OES_vertex_array_object")
            }
            var k = b("./utils/mapWebGLBlendModesToPixi");
            a.prototype.push = function() {
                var a = this.stack[++this.stackIndex];
                a || (a = this.stack[this.stackIndex] = new Uint8Array(16));
                for (var d = 0; d < this.activeState.length; d++) this.activeState[d] = a[d]
            };
            a.prototype.pop = function() {
                var a = this.stack[--this.stackIndex];
                this.setState(a)
            };
            a.prototype.setState = function(a) {
                this.setBlend(a[0]);
                this.setDepthTest(a[1]);
                this.setFrontFace(a[2]);
                this.setCullFace(a[3]);
                this.setBlendMode(a[4])
            };
            a.prototype.setBlend = function(a) {
                if (!(this.activeState[0] === a | 0)) {
                    this.activeState[0] = 0 | a;
                    var d = this.gl;
                    a ? d.enable(d.BLEND) : d.disable(d.BLEND)
                }
            };
            a.prototype.setBlendMode = function(a) {
                a !== this.activeState[4] && (this.activeState[4] = a, this.gl.blendFunc(this.blendModes[a][0], this.blendModes[a][1]))
            };
            a.prototype.setDepthTest = function(a) {
                if (!(this.activeState[1] === a | 0)) {
                    this.activeState[1] = 0 | a;
                    var d = this.gl;
                    a ? d.enable(d.DEPTH_TEST) : d.disable(d.DEPTH_TEST)
                }
            };
            a.prototype.setCullFace = function(a) {
                if (!(this.activeState[3] ===
                        a | 0)) {
                    this.activeState[3] = 0 | a;
                    var d = this.gl;
                    a ? d.enable(d.CULL_FACE) : d.disable(d.CULL_FACE)
                }
            };
            a.prototype.setFrontFace = function(a) {
                if (!(this.activeState[2] === a | 0)) {
                    this.activeState[2] = 0 | a;
                    var d = this.gl;
                    a ? d.frontFace(d.CW) : d.frontFace(d.CCW)
                }
            };
            a.prototype.resetAttributes = function() {
                var a;
                for (a = 0; a < this.attribState.tempAttribState.length; a++) this.attribState.tempAttribState[a] = 0;
                for (a = 0; a < this.attribState.attribState.length; a++) this.attribState.attribState[a] = 0;
                var d = this.gl;
                for (a = 1; a < this.maxAttribs; a++) d.disableVertexAttribArray(a)
            };
            a.prototype.resetToDefault = function() {
                this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null);
                this.resetAttributes();
                for (var a = 0; a < this.activeState.length; a++) this.activeState[a] = 32;
                a = this.gl;
                a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !1);
                this.setState(this.defaultState)
            };
            e.exports = a
        }, {
            "./utils/mapWebGLBlendModesToPixi": 95
        }],
        83: [function(b, e, l) {
                function a(b, e, n) {
                    this.vertexSrc = b || a.defaultVertexSrc;
                    this.fragmentSrc = e || a.defaultFragmentSrc;
                    this.blendMode = d.BLEND_MODES.NORMAL;
                    this.uniformData =
                        n || k(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler");
                    this.uniforms = {};
                    for (var m in this.uniformData) this.uniforms[m] = this.uniformData[m].value;
                    this.glShaders = [];
                    h[this.vertexSrc + this.fragmentSrc] || (h[this.vertexSrc + this.fragmentSrc] = f.uid());
                    this.glShaderKey = h[this.vertexSrc + this.fragmentSrc];
                    this.padding = 4;
                    this.resolution = 1;
                    this.enabled = !0
                }
                var k = b("./extractUniformsFromSrc"),
                    f = b("../../../utils"),
                    d = b("../../../const"),
                    h = {};
                e.exports = a;
                a.prototype.apply = function(a, d, f, h) {
                    a.applyFilter(this,
                        d, f, h)
                };
                a.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord ;\n}";
                a.defaultFragmentSrc = "varying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\nuniform sampler2D uSampler;\nuniform sampler2D filterSampler;\nvoid main(void){\n   vec4 masky = texture2D(filterSampler, vFilterCoord);\n   vec4 sample = texture2D(uSampler, vTextureCoord);\n   vec4 color;\n   if(mod(vFilterCoord.x, 1.0) > 0.5)\n   {\n     color = vec4(1.0, 0.0, 0.0, 1.0);\n   }\n   else\n   {\n     color = vec4(0.0, 1.0, 0.0, 1.0);\n   }\n   gl_FragColor = mix(sample, masky, 0.5);\n   gl_FragColor *= sample.a;\n}"
            },
            {
                "../../../const": 43,
                "../../../utils": 116,
                "./extractUniformsFromSrc": 84
            }
        ],
        84: [function(b, e, l) {
            function a(a) {
                var d, f = /^(projectionMatrix|uSampler|filterArea)$/,
                    b = {};
                a = a.replace(/\s+/g, " ").split(/\s*;\s*/);
                for (var e = 0; e < a.length; e++) {
                    var n = a[e].trim();
                    if (-1 < n.indexOf("uniform")) {
                        var r = n.split(" "),
                            n = r[1],
                            r = r[2],
                            l = 1; - 1 < r.indexOf("[") && (d = r.split(/\[|\]/), r = d[0], l *= Number(d[1]));
                        r.match(f) || (b[r] = {
                            value: k(n, l),
                            name: r,
                            type: n
                        })
                    }
                }
                return b
            }
            var k = b("pixi-gl-core").shader.defaultValue;
            e.exports = function(f,
                d, h) {
                f = a(f, h);
                d = a(d, h);
                return Object.assign(f, d)
            }
        }, {
            "pixi-gl-core": 12
        }],
        85: [function(b, e, l) {
            var a = b("../../../math");
            e.exports = {
                calculateScreenSpaceMatrix: function(a, f, d) {
                    a = a.identity();
                    return a.translate(f.x / d.width, f.y / d.height), a.scale(d.width, d.height), a
                },
                calculateNormalizedScreenSpaceMatrix: function(a, f, d) {
                    a = a.identity();
                    a.translate(f.x / d.width, f.y / d.height);
                    return a.scale(d.width / f.width, d.height / f.height), a
                },
                calculateSpriteMatrix: function(b, f, d, h) {
                    var e = h.worldTransform.copy(a.Matrix.TEMP_MATRIX),
                        k = h._texture.baseTexture;
                    b = b.identity();
                    var n = d.height / d.width;
                    b.translate(f.x / d.width, f.y / d.height);
                    b.scale(1, n);
                    f = d.width / k.width;
                    d = d.height / k.height;
                    return e.tx /= k.width * f, e.ty /= k.width * f, e.invert(), b.prepend(e), b.scale(1, 1 / n), b.scale(f, d), b.translate(h.anchor.x, h.anchor.y), b
                }
            }
        }, {
            "../../../math": 67
        }],
        86: [function(b, e, l) {
            function a(a) {
                var d = new f.Matrix;
                k.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
                    "#define GLSLIFY 1\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n");
                a.renderable = !1;
                this.maskSprite = a;
                this.maskMatrix = d
            }
            var k = b("../Filter"),
                f = b("../../../../math");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.apply = function(a, f, b) {
                var d = this.maskSprite;
                this.uniforms.mask = d._texture;
                this.uniforms.otherMatrix = a.calculateSpriteMatrix(this.maskMatrix, d);
                this.uniforms.alpha = d.worldAlpha;
                a.applyFilter(this, f, b)
            }
        }, {
            "../../../../math": 67,
            "../Filter": 83
        }],
        87: [function(b, e, l) {
            function a(a) {
                k.call(this, a);
                this.gl = this.renderer.gl;
                this.quad = new d(this.gl, a.state.attribState);
                this.shaderCache = {};
                this.pool = {};
                this.filterData = null
            }
            var k = b("./WebGLManager"),
                f = b("../utils/RenderTarget"),
                d = b("../utils/Quad"),
                h = b("../../../math"),
                m = b("../../../Shader"),
                q = b("../filters/filterTransforms"),
                n = b("bit-twiddle"),
                r = function() {
                    this.renderTarget = null;
                    this.sourceFrame = new h.Rectangle;
                    this.destinationFrame = new h.Rectangle;
                    this.filters = [];
                    this.target = null;
                    this.resolution = 1
                };
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports =
                a;
            a.prototype.pushFilter = function(a, d) {
                var f = this.renderer,
                    h = this.filterData;
                if (!h) {
                    var b = new r;
                    b.sourceFrame = b.destinationFrame = this.renderer._activeRenderTarget.size;
                    b.renderTarget = f._activeRenderTarget;
                    this.filterData = this.renderer._activeRenderTarget.filterData = h = {
                        index: 0,
                        stack: [b]
                    }
                }(b = h.stack[++h.index]) || (b = h.stack[h.index] = new r);
                var e = d[0].resolution,
                    m = d[0].padding,
                    n = a.filterArea || a.getBounds(!0),
                    k = b.sourceFrame,
                    q = b.destinationFrame;
                k.x = (n.x * e | 0) / e;
                k.y = (n.y * e | 0) / e;
                k.width = (n.width * e | 0) / e;
                k.height = (n.height * e | 0) / e;
                h.stack[0].renderTarget.transform || k.fit(h.stack[0].destinationFrame);
                k.pad(m);
                q.width = k.width;
                q.height = k.height;
                h = this.getPotRenderTarget(f.gl, k.width, k.height, e);
                b.target = a;
                b.filters = d;
                b.resolution = e;
                b.renderTarget = h;
                h.setFrame(q, k);
                f.bindRenderTarget(h);
                f.clear()
            };
            a.prototype.popFilter = function() {
                var a = this.filterData,
                    d = a.stack[a.index - 1],
                    f = a.stack[a.index];
                this.quad.map(f.renderTarget.size, f.sourceFrame).upload();
                var h = f.filters;
                if (1 === h.length) h[0].apply(this, f.renderTarget,
                    d.renderTarget, !1), this.freePotRenderTarget(f.renderTarget);
                else {
                    var b = f.renderTarget,
                        e = this.getPotRenderTarget(this.renderer.gl, f.sourceFrame.width, f.sourceFrame.height, 1);
                    e.setFrame(f.destinationFrame, f.sourceFrame);
                    for (f = 0; f < h.length - 1; f++) {
                        h[f].apply(this, b, e, !0);
                        var m = b,
                            b = e,
                            e = m
                    }
                    h[f].apply(this, b, d.renderTarget, !1);
                    this.freePotRenderTarget(b);
                    this.freePotRenderTarget(e)
                }
                a.index--;
                0 === a.index && (this.filterData = null)
            };
            a.prototype.applyFilter = function(a, d, f, h) {
                var b = this.renderer,
                    e = a.glShaders[b.CONTEXT_UID];
                if (e || (a.glShaderKey ? (e = this.shaderCache[a.glShaderKey], e || (e = a.glShaders[b.CONTEXT_UID] = this.shaderCache[a.glShaderKey] = new m(this.gl, a.vertexSrc, a.fragmentSrc))) : e = a.glShaders[b.CONTEXT_UID] = new m(this.gl, a.vertexSrc, a.fragmentSrc), this.quad.initVao(e)), b.bindRenderTarget(f), h) h = b.gl, h.disable(h.SCISSOR_TEST), b.clear(), h.enable(h.SCISSOR_TEST);
                f === b.maskManager.scissorRenderTarget && b.maskManager.pushScissorMask(null, b.maskManager.scissorData);
                b.bindShader(e);
                this.syncUniforms(e, a);
                d.texture.bind(0);
                b._activeTextureLocation = 0;
                b.state.setBlendMode(a.blendMode);
                this.quad.draw()
            };
            a.prototype.syncUniforms = function(a, d) {
                var f, h = d.uniformData,
                    b = d.uniforms,
                    e = 1;
                if (a.uniforms.data.filterArea) {
                    f = this.filterData.stack[this.filterData.index];
                    var m = a.uniforms.filterArea;
                    m[0] = f.renderTarget.size.width;
                    m[1] = f.renderTarget.size.height;
                    m[2] = f.sourceFrame.x;
                    m[3] = f.sourceFrame.y;
                    a.uniforms.filterArea = m
                }
                a.uniforms.data.filterClamp && (f = this.filterData.stack[this.filterData.index], m = a.uniforms.filterClamp, m[0] = .5 /
                    f.renderTarget.size.width, m[1] = .5 / f.renderTarget.size.height, m[2] = (f.sourceFrame.width - .5) / f.renderTarget.size.width, m[3] = (f.sourceFrame.height - .5) / f.renderTarget.size.height, a.uniforms.filterClamp = m);
                var n, k;
                for (k in h) "sampler2D" === h[k].type ? ((a.uniforms[k] = e, b[k].baseTexture) ? this.renderer.bindTexture(b[k].baseTexture, e) : (f = this.renderer.gl, this.renderer._activeTextureLocation = f.TEXTURE0 + e, f.activeTexture(f.TEXTURE0 + e), b[k].texture.bind()), e++) : "mat3" === h[k].type ? void 0 !== b[k].a ? a.uniforms[k] =
                    b[k].toArray(!0) : a.uniforms[k] = b[k] : "vec2" === h[k].type ? void 0 !== b[k].x ? (n = a.uniforms[k] || new Float32Array(2), n[0] = b[k].x, n[1] = b[k].y, a.uniforms[k] = n) : a.uniforms[k] = b[k] : "float" === h[k].type ? a.uniforms.data[k].value !== h[k] && (a.uniforms[k] = b[k]) : a.uniforms[k] = b[k]
            };
            a.prototype.getRenderTarget = function(a, d) {
                var f = this.filterData.stack[this.filterData.index],
                    h = this.getPotRenderTarget(this.renderer.gl, f.sourceFrame.width, f.sourceFrame.height, d || f.resolution);
                return h.setFrame(f.destinationFrame, f.sourceFrame),
                    h
            };
            a.prototype.returnRenderTarget = function(a) {
                return this.freePotRenderTarget(a)
            };
            a.prototype.calculateScreenSpaceMatrix = function(a) {
                var d = this.filterData.stack[this.filterData.index];
                return q.calculateScreenSpaceMatrix(a, d.sourceFrame, d.renderTarget.size)
            };
            a.prototype.calculateNormalizedScreenSpaceMatrix = function(a) {
                var d = this.filterData.stack[this.filterData.index];
                return q.calculateNormalizedScreenSpaceMatrix(a, d.sourceFrame, d.renderTarget.size, d.destinationFrame)
            };
            a.prototype.calculateSpriteMatrix =
                function(a, d) {
                    var f = this.filterData.stack[this.filterData.index];
                    return q.calculateSpriteMatrix(a, f.sourceFrame, f.renderTarget.size, d)
                };
            a.prototype.destroy = function() {
                this.shaderCache = [];
                this.emptyPool()
            };
            a.prototype.getPotRenderTarget = function(a, d, h, b) {
                d = n.nextPow2(d * b);
                h = n.nextPow2(h * b);
                var e = (65535 & d) << 16 | 65535 & h;
                this.pool[e] || (this.pool[e] = []);
                a = this.pool[e].pop() || new f(a, d, h, null, 1);
                return a.resolution = b, a.defaultFrame.width = a.size.width = d / b, a.defaultFrame.height = a.size.height = h / b, a
            };
            a.prototype.emptyPool =
                function() {
                    for (var a in this.pool) {
                        var d = this.pool[a];
                        if (d)
                            for (var f = 0; f < d.length; f++) d[f].destroy(!0)
                    }
                    this.pool = {}
                };
            a.prototype.freePotRenderTarget = function(a) {
                this.pool[(65535 & a.size.width * a.resolution) << 16 | 65535 & a.size.height * a.resolution].push(a)
            }
        }, {
            "../../../Shader": 42,
            "../../../math": 67,
            "../filters/filterTransforms": 85,
            "../utils/Quad": 92,
            "../utils/RenderTarget": 93,
            "./WebGLManager": 90,
            "bit-twiddle": 1
        }],
        88: [function(b, e, l) {
            function a(a) {
                k.call(this, a);
                this.scissor = !1;
                this.scissorRenderTarget =
                    this.scissorData = null;
                this.enableScissor = !0;
                this.alphaMaskPool = [];
                this.alphaMaskIndex = 0
            }
            var k = b("./WebGLManager"),
                f = b("../filters/spriteMask/SpriteMaskFilter");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.pushMask = function(a, f) {
                if (f.texture) this.pushSpriteMask(a, f);
                else if (this.enableScissor && !this.scissor && !this.renderer.stencilManager.stencilMaskStack.length && f.isFastRect()) {
                    var d = f.worldTransform,
                        d = Math.atan2(d.b, d.a),
                        d = Math.round(180 / Math.PI * d);
                    d % 90 ?
                        this.pushStencilMask(f) : this.pushScissorMask(a, f)
                } else this.pushStencilMask(f)
            };
            a.prototype.popMask = function(a, f) {
                f.texture ? this.popSpriteMask(a, f) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(a, f) : this.popStencilMask(a, f)
            };
            a.prototype.pushSpriteMask = function(a, h) {
                var d = this.alphaMaskPool[this.alphaMaskIndex];
                d || (d = this.alphaMaskPool[this.alphaMaskIndex] = [new f(h)]);
                d[0].resolution = this.renderer.resolution;
                d[0].maskSprite = h;
                a.filterArea = h.getBounds(!0);
                this.renderer.filterManager.pushFilter(a, d);
                this.alphaMaskIndex++
            };
            a.prototype.popSpriteMask = function() {
                this.renderer.filterManager.popFilter();
                this.alphaMaskIndex--
            };
            a.prototype.pushStencilMask = function(a) {
                this.renderer.currentRenderer.stop();
                this.renderer.stencilManager.pushStencil(a)
            };
            a.prototype.popStencilMask = function() {
                this.renderer.currentRenderer.stop();
                this.renderer.stencilManager.popStencil()
            };
            a.prototype.pushScissorMask = function(a, f) {
                f.renderable = !0;
                var d = this.renderer._activeRenderTarget,
                    h = f.getBounds();
                h.fit(d.size);
                f.renderable = !1;
                this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                var b = this.renderer.resolution;
                this.renderer.gl.scissor(h.x * b, (d.root ? d.size.height - h.y - h.height : h.y) * b, h.width * b, h.height * b);
                this.scissorRenderTarget = d;
                this.scissorData = f;
                this.scissor = !0
            };
            a.prototype.popScissorMask = function() {
                this.scissorData = this.scissorRenderTarget = null;
                this.scissor = !1;
                var a = this.renderer.gl;
                a.disable(a.SCISSOR_TEST)
            }
        }, {
            "../filters/spriteMask/SpriteMaskFilter": 86,
            "./WebGLManager": 90
        }],
        89: [function(b, e, l) {
            function a(a) {
                k.call(this, a);
                this.stencilMaskStack = null
            }
            var k = b("./WebGLManager");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.setMaskStack = function(a) {
                this.stencilMaskStack = a;
                var d = this.renderer.gl;
                0 === a.length ? d.disable(d.STENCIL_TEST) : d.enable(d.STENCIL_TEST)
            };
            a.prototype.pushStencil = function(a) {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
                this.renderer._activeRenderTarget.attachStencilBuffer();
                var d = this.renderer.gl,
                    f = this.stencilMaskStack;
                0 === f.length && (d.enable(d.STENCIL_TEST), d.clear(d.STENCIL_BUFFER_BIT), d.stencilFunc(d.ALWAYS, 1, 1));
                f.push(a);
                d.colorMask(!1, !1, !1, !1);
                d.stencilOp(d.KEEP, d.KEEP, d.INCR);
                this.renderer.plugins.graphics.render(a);
                d.colorMask(!0, !0, !0, !0);
                d.stencilFunc(d.NOTEQUAL, 0, f.length);
                d.stencilOp(d.KEEP, d.KEEP, d.KEEP)
            };
            a.prototype.popStencil = function() {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
                var a = this.renderer.gl,
                    d = this.stencilMaskStack,
                    h = d.pop();
                0 === d.length ? a.disable(a.STENCIL_TEST) :
                    (a.colorMask(!1, !1, !1, !1), a.stencilOp(a.KEEP, a.KEEP, a.DECR), this.renderer.plugins.graphics.render(h), a.colorMask(!0, !0, !0, !0), a.stencilFunc(a.NOTEQUAL, 0, d.length), a.stencilOp(a.KEEP, a.KEEP, a.KEEP))
            };
            a.prototype.destroy = function() {
                k.prototype.destroy.call(this);
                this.stencilMaskStack.stencilStack = null
            }
        }, {
            "./WebGLManager": 90
        }],
        90: [function(b, e, l) {
            function a(a) {
                this.renderer = a;
                this.renderer.on("context", this.onContextChange, this)
            }
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.onContextChange = function() {};
            a.prototype.destroy = function() {
                this.renderer.off("context", this.onContextChange, this);
                this.renderer = null
            }
        }, {}],
        91: [function(b, e, l) {
            function a(a) {
                k.call(this, a)
            }
            var k = b("../managers/WebGLManager");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.start = function() {};
            a.prototype.stop = function() {
                this.flush()
            };
            a.prototype.flush = function() {};
            a.prototype.render = function(a) {}
        }, {
            "../managers/WebGLManager": 90
        }],
        92: [function(b, e, l) {
            function a(a, h) {
                this.gl = a;
                this.vertices =
                    new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);
                this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
                this.interleaved = new Float32Array(16);
                for (var d = 0; 4 > d; d++) this.interleaved[4 * d] = this.vertices[2 * d], this.interleaved[4 * d + 1] = this.vertices[2 * d + 1], this.interleaved[4 * d + 2] = this.uvs[2 * d], this.interleaved[4 * d + 3] = this.uvs[2 * d + 1];
                this.indices = f(1);
                this.vertexBuffer = k.GLBuffer.createVertexBuffer(a, this.interleaved, a.STATIC_DRAW);
                this.indexBuffer = k.GLBuffer.createIndexBuffer(a, this.indices, a.STATIC_DRAW);
                this.vao = new k.VertexArrayObject(a,
                    h)
            }
            var k = b("pixi-gl-core"),
                f = b("../../../utils/createIndicesForQuads");
            a.prototype.constructor = a;
            a.prototype.initVao = function(a) {
                this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, a.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, a.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
            };
            a.prototype.map = function(a, f) {
                var d = 0,
                    h = 0;
                return this.uvs[0] = d, this.uvs[1] = h, this.uvs[2] = d + f.width / a.width, this.uvs[3] = h, this.uvs[4] = d + f.width / a.width, this.uvs[5] =
                    h + f.height / a.height, this.uvs[6] = d, this.uvs[7] = h + f.height / a.height, d = f.x, h = f.y, this.vertices[0] = d, this.vertices[1] = h, this.vertices[2] = d + f.width, this.vertices[3] = h, this.vertices[4] = d + f.width, this.vertices[5] = h + f.height, this.vertices[6] = d, this.vertices[7] = h + f.height, this
            };
            a.prototype.draw = function() {
                return this.vao.bind().draw(this.gl.TRIANGLES, 6, 0).unbind(), this
            };
            a.prototype.upload = function() {
                for (var a = 0; 4 > a; a++) this.interleaved[4 * a] = this.vertices[2 * a], this.interleaved[4 * a + 1] = this.vertices[2 * a + 1], this.interleaved[4 *
                    a + 2] = this.uvs[2 * a], this.interleaved[4 * a + 3] = this.uvs[2 * a + 1];
                return this.vertexBuffer.upload(this.interleaved), this
            };
            a.prototype.destroy = function() {
                var a = this.gl;
                a.deleteBuffer(this.vertexBuffer);
                a.deleteBuffer(this.indexBuffer)
            };
            e.exports = a
        }, {
            "../../../utils/createIndicesForQuads": 114,
            "pixi-gl-core": 12
        }],
        93: [function(b, e, l) {
            var a = b("../../../math"),
                k = b("../../../const"),
                f = b("pixi-gl-core").GLFramebuffer;
            b = function(d, h, b, e, n, r) {
                this.gl = d;
                this.texture = this.frameBuffer = null;
                this.clearColor = [0, 0, 0, 0];
                this.size = new a.Rectangle(0, 0, 1, 1);
                this.resolution = n || k.RESOLUTION;
                this.projectionMatrix = new a.Matrix;
                this.frame = this.transform = null;
                this.defaultFrame = new a.Rectangle;
                this.stencilBuffer = this.sourceFrame = this.destinationFrame = null;
                this.stencilMaskStack = [];
                this.filterData = null;
                this.scaleMode = e || k.SCALE_MODES.DEFAULT;
                (this.root = r) ? (this.frameBuffer = new f(d, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = f.createRGBA(d, 100, 100), this.scaleMode === k.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() :
                    this.frameBuffer.texture.enableLinearScaling(), this.texture = this.frameBuffer.texture);
                this.setFrame();
                this.resize(h, b)
            };
            b.prototype.constructor = b;
            e.exports = b;
            b.prototype.clear = function(a) {
                a = a || this.clearColor;
                this.frameBuffer.clear(a[0], a[1], a[2], a[3])
            };
            b.prototype.attachStencilBuffer = function() {
                this.root || this.frameBuffer.enableStencil()
            };
            b.prototype.setFrame = function(a, f) {
                this.destinationFrame = a || this.destinationFrame || this.defaultFrame;
                this.sourceFrame = f || this.sourceFrame || a
            };
            b.prototype.activate =
                function() {
                    var a = this.gl;
                    this.frameBuffer.bind();
                    this.calculateProjection(this.destinationFrame, this.sourceFrame);
                    this.transform && this.projectionMatrix.append(this.transform);
                    this.destinationFrame !== this.sourceFrame ? (a.enable(a.SCISSOR_TEST), a.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : a.disable(a.SCISSOR_TEST);
                    a.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width *
                        this.resolution | 0, this.destinationFrame.height * this.resolution | 0)
                };
            b.prototype.calculateProjection = function(a, f) {
                var d = this.projectionMatrix;
                f = f || a;
                d.identity();
                this.root ? (d.a = 1 / a.width * 2, d.d = -1 / a.height * 2, d.tx = -1 - f.x * d.a, d.ty = 1 - f.y * d.d) : (d.a = 1 / a.width * 2, d.d = 1 / a.height * 2, d.tx = -1 - f.x * d.a, d.ty = -1 - f.y * d.d)
            };
            b.prototype.resize = function(a, f) {
                if (a |= 0, f |= 0, this.size.width !== a || this.size.height !== f) this.size.width = a, this.size.height = f, this.defaultFrame.width = a, this.defaultFrame.height = f, this.frameBuffer.resize(a *
                    this.resolution, f * this.resolution), this.calculateProjection(this.frame || this.size)
            };
            b.prototype.destroy = function() {
                this.frameBuffer.destroy();
                this.texture = this.frameBuffer = null
            }
        }, {
            "../../../const": 43,
            "../../../math": 67,
            "pixi-gl-core": 12
        }],
        94: [function(b, e, l) {
            function a(a) {
                for (var d = "", f = 0; f < a; f++) 0 < f && (d += "\nelse "), f < a - 1 && (d += "if(test == " + f + ".0){}");
                return d
            }
            var k = b("pixi-gl-core");
            e.exports = function(f, d) {
                var h = !d;
                if (h) {
                    var b = document.createElement("canvas");
                    b.width = 1;
                    b.height = 1;
                    d = k.createContext(b)
                }
                for (b =
                    d.createShader(d.FRAGMENT_SHADER);;) {
                    var e = "precision mediump float;\nvoid main(void){\nfloat test = 0.1;\n%forloop%\ngl_FragColor = vec4(0.0);\n}".replace(/%forloop%/gi, a(f));
                    if (d.shaderSource(b, e), d.compileShader(b), d.getShaderParameter(b, d.COMPILE_STATUS)) break;
                    f = f / 2 | 0
                }
                return h && d.getExtension("WEBGL_lose_context") && d.getExtension("WEBGL_lose_context").loseContext(), f
            }
        }, {
            "pixi-gl-core": 12
        }],
        95: [function(b, e, l) {
            var a = b("../../../const");
            e.exports = function(b, f) {
                return f = f || [], f[a.BLEND_MODES.NORMAL] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.ADD] = [b.ONE, b.DST_ALPHA], f[a.BLEND_MODES.MULTIPLY] = [b.DST_COLOR, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.SCREEN] = [b.ONE, b.ONE_MINUS_SRC_COLOR], f[a.BLEND_MODES.OVERLAY] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.DARKEN] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.LIGHTEN] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.COLOR_DODGE] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.COLOR_BURN] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.HARD_LIGHT] = [b.ONE,
                    b.ONE_MINUS_SRC_ALPHA
                ], f[a.BLEND_MODES.SOFT_LIGHT] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.DIFFERENCE] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.EXCLUSION] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.HUE] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.SATURATION] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.COLOR] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.LUMINOSITY] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f
            }
        }, {
            "../../../const": 43
        }],
        96: [function(b, e, l) {
            var a = b("../../../const");
            e.exports = function(b,
                f) {
                f = f || {};
                f[a.DRAW_MODES.POINTS] = b.POINTS;
                f[a.DRAW_MODES.LINES] = b.LINES;
                f[a.DRAW_MODES.LINE_LOOP] = b.LINE_LOOP;
                f[a.DRAW_MODES.LINE_STRIP] = b.LINE_STRIP;
                f[a.DRAW_MODES.TRIANGLES] = b.TRIANGLES;
                f[a.DRAW_MODES.TRIANGLE_STRIP] = b.TRIANGLE_STRIP;
                f[a.DRAW_MODES.TRIANGLE_FAN] = b.TRIANGLE_FAN
            }
        }, {
            "../../../const": 43
        }],
        97: [function(b, e, l) {
            e.exports = function(a) {
                a.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
            }
        }, {}],
        98: [function(b,
            e, l) {
            function a(a) {
                d.call(this);
                this.anchor = new k.ObservablePoint(this.onAnchorUpdate, this);
                this._texture = null;
                this._height = this._width = 0;
                this._tintRGB = this._tint = null;
                this.tint = 16777215;
                this.blendMode = m.BLEND_MODES.NORMAL;
                this.shader = null;
                this.cachedTint = 16777215;
                this.texture = a || f.EMPTY;
                this.vertexData = new Float32Array(8);
                this.vertexTrimmedData = null;
                this._textureID = this._transformID = -1
            }
            var k = b("../math"),
                f = b("../textures/Texture"),
                d = b("../display/Container"),
                h = b("../utils"),
                m = b("../const"),
                q = new k.Point;
            a.prototype = Object.create(d.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                width: {
                    get: function() {
                        return Math.abs(this.scale.x) * this.texture.orig.width
                    },
                    set: function(a) {
                        var d = h.sign(this.scale.x) || 1;
                        this.scale.x = d * a / this.texture.orig.width;
                        this._width = a
                    }
                },
                height: {
                    get: function() {
                        return Math.abs(this.scale.y) * this.texture.orig.height
                    },
                    set: function(a) {
                        var d = h.sign(this.scale.y) || 1;
                        this.scale.y = d * a / this.texture.orig.height;
                        this._height = a
                    }
                },
                tint: {
                    get: function() {
                        return this._tint
                    },
                    set: function(a) {
                        this._tint = a;
                        this._tintRGB = (a >> 16) + (65280 & a) + ((255 & a) << 16)
                    }
                },
                texture: {
                    get: function() {
                        return this._texture
                    },
                    set: function(a) {
                        this._texture !== a && (this._texture = a, this.cachedTint = 16777215, this._textureID = -1, a && (a.baseTexture.hasLoaded ? this._onTextureUpdate() : a.once("update", this._onTextureUpdate, this)))
                    }
                }
            });
            a.prototype._onTextureUpdate = function() {
                this._textureID = -1;
                this._width && (this.scale.x = h.sign(this.scale.x) * this._width / this.texture.orig.width);
                this._height && (this.scale.y = h.sign(this.scale.y) *
                    this._height / this.texture.orig.height)
            };
            a.prototype.onAnchorUpdate = function() {
                this._transformID = -1
            };
            a.prototype.calculateVertices = function() {
                if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
                    this._transformID = this.transform._worldID;
                    this._textureID = this._texture._updateID;
                    var a, d, f, h, b = this._texture,
                        e = this.transform.worldTransform,
                        m = e.a,
                        k = e.b,
                        q = e.c,
                        l = e.d,
                        x = e.tx,
                        e = e.ty,
                        F = this.vertexData,
                        G = b.trim,
                        b = b.orig;
                    G ? (d = G.x - this.anchor._x * b.width, a = d + G.width, h = G.y - this.anchor._y *
                        b.height, f = h + G.height) : (a = b.width * (1 - this.anchor._x), d = b.width * -this.anchor._x, f = b.height * (1 - this.anchor._y), h = b.height * -this.anchor._y);
                    F[0] = m * d + q * h + x;
                    F[1] = l * h + k * d + e;
                    F[2] = m * a + q * h + x;
                    F[3] = l * h + k * a + e;
                    F[4] = m * a + q * f + x;
                    F[5] = l * f + k * a + e;
                    F[6] = m * d + q * f + x;
                    F[7] = l * f + k * d + e
                }
            };
            a.prototype.calculateTrimmedVertices = function() {
                this.vertexTrimmedData || (this.vertexTrimmedData = new Float32Array(8));
                var a, d, f, h, b = this.vertexTrimmedData;
                h = this._texture.orig;
                a = this.transform.worldTransform;
                var e = a.a,
                    m = a.b,
                    k = a.c,
                    q = a.d,
                    l = a.tx,
                    x = a.ty;
                a = h.width * (1 - this.anchor._x);
                d = h.width * -this.anchor._x;
                f = h.height * (1 - this.anchor._y);
                h = h.height * -this.anchor._y;
                b[0] = e * d + k * h + l;
                b[1] = q * h + m * d + x;
                b[2] = e * a + k * h + l;
                b[3] = q * h + m * a + x;
                b[4] = e * a + k * f + l;
                b[5] = q * f + m * a + x;
                b[6] = e * d + k * f + l;
                b[7] = q * f + m * d + x
            };
            a.prototype._renderWebGL = function(a) {
                this.calculateVertices();
                a.setObjectRenderer(a.plugins.sprite);
                a.plugins.sprite.render(this)
            };
            a.prototype._renderCanvas = function(a) {
                a.plugins.sprite.render(this)
            };
            a.prototype._calculateBounds = function() {
                var a = this._texture.trim,
                    d = this._texture.orig;
                !a || a.width === d.width && a.height === d.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
            };
            a.prototype.getLocalBounds = function(a) {
                return 0 === this.children.length ? (this._bounds.minX = -this._texture.orig.width * this.anchor._x, this._bounds.minY = -this._texture.orig.height * this.anchor._y, this._bounds.maxX = this._texture.orig.width, this._bounds.maxY = this._texture.orig.height, a || (this._localBoundsRect ||
                    (this._localBoundsRect = new k.Rectangle), a = this._localBoundsRect), this._bounds.getRectangle(a)) : d.prototype.getLocalBounds.call(this, a)
            };
            a.prototype.containsPoint = function(a) {
                this.worldTransform.applyInverse(a, q);
                var d;
                a = this._texture.orig.width;
                var f = this._texture.orig.height,
                    h = -a * this.anchor.x;
                return q.x > h && q.x < h + a && (d = -f * this.anchor.y, q.y > d && q.y < d + f)
            };
            a.prototype.destroy = function(a) {
                d.prototype.destroy.call(this, a);
                this.anchor = null;
                ("boolean" == typeof a ? a : a && a.texture) && this._texture.destroy(!!("boolean" ==
                    typeof a ? a : a && a.baseTexture));
                this.shader = this._texture = null
            };
            a.from = function(d) {
                return new a(f.from(d))
            };
            a.fromFrame = function(d) {
                var f = h.TextureCache[d];
                if (!f) throw Error('The frameId "' + d + '" does not exist in the texture cache');
                return new a(f)
            };
            a.fromImage = function(d, h, b) {
                return new a(f.fromImage(d, h, b))
            }
        }, {
            "../const": 43,
            "../display/Container": 45,
            "../math": 67,
            "../textures/Texture": 109,
            "../utils": 116
        }],
        99: [function(b, e, l) {
            function a(a) {
                this.renderer = a
            }
            l = b("../../renderers/canvas/CanvasRenderer");
            var k = b("../../const"),
                f = b("../../math"),
                d = new f.Matrix,
                h = b("./CanvasTinter");
            a.prototype.constructor = a;
            e.exports = a;
            l.registerPlugin("sprite", a);
            a.prototype.render = function(a) {
                var b, e, m = a._texture,
                    l = this.renderer,
                    w = a.transform.worldTransform,
                    u = m._frame.width,
                    v = m._frame.height;
                if (!(0 >= m.orig.width || 0 >= m.orig.height) && m.baseTexture.source && (l.setBlendMode(a.blendMode), m.valid)) {
                    l.context.globalAlpha = a.worldAlpha;
                    var y = m.baseTexture.scaleMode === k.SCALE_MODES.LINEAR;
                    l.smoothProperty && l.context[l.smoothProperty] !==
                        y && (l.context[l.smoothProperty] = y);
                    m.trim ? (b = m.trim.width / 2 + m.trim.x - a.anchor.x * m.orig.width, e = m.trim.height / 2 + m.trim.y - a.anchor.y * m.orig.height) : (b = (.5 - a.anchor.x) * m.orig.width, e = (.5 - a.anchor.y) * m.orig.height);
                    m.rotate && (w.copy(d), w = d, f.GroupD8.matrixAppendRotationInv(w, m.rotate, b, e), b = 0, e = 0);
                    b -= u / 2;
                    e -= v / 2;
                    l.roundPixels ? (l.context.setTransform(w.a, w.b, w.c, w.d, w.tx * l.resolution | 0, w.ty * l.resolution | 0), b |= 0, e |= 0) : l.context.setTransform(w.a, w.b, w.c, w.d, w.tx * l.resolution, w.ty * l.resolution);
                    w = m.baseTexture.resolution;
                    16777215 !== a.tint ? (a.cachedTint !== a.tint && (a.cachedTint = a.tint, a.tintedTexture = h.getTintedTexture(a, a.tint)), l.context.drawImage(a.tintedTexture, 0, 0, u * w, v * w, b * l.resolution, e * l.resolution, u * l.resolution, v * l.resolution)) : l.context.drawImage(m.baseTexture.source, m._frame.x * w, m._frame.y * w, u * w, v * w, b * l.resolution, e * l.resolution, u * l.resolution, v * l.resolution)
                }
            };
            a.prototype.destroy = function() {
                this.renderer = null
            }
        }, {
            "../../const": 43,
            "../../math": 67,
            "../../renderers/canvas/CanvasRenderer": 74,
            "./CanvasTinter": 100
        }],
        100: [function(b, e, l) {
            var a = b("../../utils");
            b = b("../../renderers/canvas/utils/canUseNewCanvasBlendModes");
            var k = e.exports = {
                getTintedTexture: function(a, d) {
                    var f = a.texture;
                    d = k.roundColor(d);
                    var b = "#" + ("00000" + (0 | d).toString(16)).substr(-6);
                    if (f.tintCache = f.tintCache || {}, f.tintCache[b]) return f.tintCache[b];
                    var e = k.canvas || document.createElement("canvas");
                    if (k.tintMethod(f, d, e), k.convertTintToImage) {
                        var n = new Image;
                        n.src = e.toDataURL();
                        f.tintCache[b] = n
                    } else f.tintCache[b] = e, k.canvas = null;
                    return e
                },
                tintWithMultiply: function(a,
                    d, h) {
                    var f = h.getContext("2d"),
                        b = a._frame.clone(),
                        e = a.baseTexture.resolution;
                    b.x *= e;
                    b.y *= e;
                    b.width *= e;
                    b.height *= e;
                    h.width = b.width;
                    h.height = b.height;
                    f.fillStyle = "#" + ("00000" + (0 | d).toString(16)).substr(-6);
                    f.fillRect(0, 0, b.width, b.height);
                    f.globalCompositeOperation = "multiply";
                    f.drawImage(a.baseTexture.source, b.x, b.y, b.width, b.height, 0, 0, b.width, b.height);
                    f.globalCompositeOperation = "destination-atop";
                    f.drawImage(a.baseTexture.source, b.x, b.y, b.width, b.height, 0, 0, b.width, b.height)
                },
                tintWithOverlay: function(a,
                    d, h) {
                    var f = h.getContext("2d"),
                        b = a._frame.clone(),
                        e = a.baseTexture.resolution;
                    b.x *= e;
                    b.y *= e;
                    b.width *= e;
                    b.height *= e;
                    h.width = b.width;
                    h.height = b.height;
                    f.globalCompositeOperation = "copy";
                    f.fillStyle = "#" + ("00000" + (0 | d).toString(16)).substr(-6);
                    f.fillRect(0, 0, b.width, b.height);
                    f.globalCompositeOperation = "destination-atop";
                    f.drawImage(a.baseTexture.source, b.x, b.y, b.width, b.height, 0, 0, b.width, b.height)
                },
                tintWithPerPixel: function(f, d, h) {
                    var b = h.getContext("2d"),
                        e = f._frame.clone(),
                        n = f.baseTexture.resolution;
                    e.x *= n;
                    e.y *= n;
                    e.width *= n;
                    e.height *= n;
                    h.width = e.width;
                    h.height = e.height;
                    b.globalCompositeOperation = "copy";
                    b.drawImage(f.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
                    h = a.hex2rgb(d);
                    f = h[0];
                    d = h[1];
                    h = h[2];
                    for (var e = b.getImageData(0, 0, e.width, e.height), n = e.data, k = 0; k < n.length; k += 4) n[k + 0] *= f, n[k + 1] *= d, n[k + 2] *= h;
                    b.putImageData(e, 0, 0)
                },
                roundColor: function(f) {
                    var d = k.cacheStepsPerColorChannel;
                    f = a.hex2rgb(f);
                    return f[0] = Math.min(255, f[0] / d * d), f[1] = Math.min(255, f[1] / d * d), f[2] = Math.min(255,
                        f[2] / d * d), a.rgb2hex(f)
                },
                cacheStepsPerColorChannel: 8,
                convertTintToImage: !1,
                canUseMultiply: b(),
                tintMethod: 0
            };
            k.tintMethod = k.canUseMultiply ? k.tintWithMultiply : k.tintWithPerPixel
        }, {
            "../../renderers/canvas/utils/canUseNewCanvasBlendModes": 77,
            "../../utils": 116
        }],
        101: [function(b, e, l) {
            b = function(a) {
                this.vertices = new ArrayBuffer(a);
                this.float32View = new Float32Array(this.vertices);
                this.uint32View = new Uint32Array(this.vertices)
            };
            e.exports = b;
            b.prototype.destroy = function() {
                this.colors = this.uvs = this.positions =
                    this.vertices = null
            }
        }, {}],
        102: [function(b, e, l) {
            function a(a) {
                k.call(this, a);
                this.vertSize = 5;
                this.vertByteSize = 4 * this.vertSize;
                this.size = q.SPRITE_BATCH_SIZE;
                this.buffers = [];
                for (a = 1; a <= r.nextPow2(this.size); a *= 2) this.buffers.push(new m(4 * a * this.vertByteSize));
                this.indices = f(this.size);
                this.shaders = null;
                t = this.currentIndex = 0;
                this.groups = [];
                for (a = 0; a < this.size; a++) this.groups[a] = {
                    textures: [],
                    textureCount: 0,
                    ids: [],
                    size: 0,
                    start: 0,
                    blend: 0
                };
                this.sprites = [];
                this.vertexBuffers = [];
                this.vaos = [];
                this.vaoMax = 2;
                this.vertexCount = 0;
                this.renderer.on("prerender", this.onPrerender, this)
            }
            var k = b("../../renderers/webgl/utils/ObjectRenderer");
            l = b("../../renderers/webgl/WebGLRenderer");
            var f = b("../../utils/createIndicesForQuads"),
                d = b("./generateMultiTextureShader"),
                h = b("../../renderers/webgl/utils/checkMaxIfStatmentsInShader"),
                m = b("./BatchBuffer"),
                q = b("../../const"),
                n = b("pixi-gl-core"),
                r = b("bit-twiddle"),
                t = 0;
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            l.registerPlugin("sprite", a);
            a.prototype.onContextChange = function() {
                var a = this.renderer.gl;
                this.MAX_TEXTURES = Math.min(a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS), q.SPRITE_MAX_TEXTURES);
                this.MAX_TEXTURES = h(this.MAX_TEXTURES, a);
                this.shaders = Array(this.MAX_TEXTURES);
                this.shaders[0] = d(a, 1);
                this.shaders[1] = d(a, 2);
                this.indexBuffer = n.GLBuffer.createIndexBuffer(a, this.indices, a.STATIC_DRAW);
                for (var f = this.shaders[1], b = 0; b < this.vaoMax; b++) this.vertexBuffers[b] = n.GLBuffer.createVertexBuffer(a, null, a.STREAM_DRAW), this.vaos[b] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[b],
                    f.attributes.aVertexPosition, a.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[b], f.attributes.aTextureCoord, a.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[b], f.attributes.aColor, a.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[b], f.attributes.aTextureId, a.FLOAT, !1, this.vertByteSize, 16);
                this.vao = this.vaos[0];
                this.currentBlendMode = 99999
            };
            a.prototype.onPrerender = function() {
                this.vertexCount = 0
            };
            a.prototype.render = function(a) {
                this.currentIndex >=
                    this.size && this.flush();
                a.texture._uvs && (this.sprites[this.currentIndex++] = a)
            };
            a.prototype.flush = function() {
                if (0 !== this.currentIndex) {
                    var a, f, h, b, e, m, k, q = this.renderer.gl,
                        l = r.nextPow2(this.currentIndex),
                        l = r.log2(l),
                        G = this.buffers[l],
                        E = this.sprites,
                        l = this.groups,
                        C = G.float32View,
                        H = G.uint32View,
                        D = 0,
                        J = 1,
                        I = 0,
                        L = l[0],
                        M = E[0].blendMode;
                    L.textureCount = 0;
                    L.start = 0;
                    L.blend = M;
                    t++;
                    for (var N = 0; N < this.currentIndex; N++) {
                        e = E[N];
                        if (a = e._texture.baseTexture, M !== e.blendMode && (M = e.blendMode, f = null, I = this.MAX_TEXTURES,
                                t++), f !== a && (f = a, a._enabled !== t && (I === this.MAX_TEXTURES && (t++, I = 0, L.size = N - L.start, L = l[J++], L.textureCount = 0, L.blend = M, L.start = N), a._enabled = t, a._id = I, L.textures[L.textureCount++] = a, I++)), h = e.vertexData, b = e._tintRGB + (255 * e.worldAlpha << 24), e = e._texture._uvs.uvsUint32, m = a._id, this.renderer.roundPixels) {
                            var O = this.renderer.resolution;
                            C[D] = (h[0] * O | 0) / O;
                            C[D + 1] = (h[1] * O | 0) / O;
                            C[D + 5] = (h[2] * O | 0) / O;
                            C[D + 6] = (h[3] * O | 0) / O;
                            C[D + 10] = (h[4] * O | 0) / O;
                            C[D + 11] = (h[5] * O | 0) / O;
                            C[D + 15] = (h[6] * O | 0) / O;
                            C[D + 16] = (h[7] * O | 0) / O
                        } else C[D] =
                            h[0], C[D + 1] = h[1], C[D + 5] = h[2], C[D + 6] = h[3], C[D + 10] = h[4], C[D + 11] = h[5], C[D + 15] = h[6], C[D + 16] = h[7];
                        H[D + 2] = e[0];
                        H[D + 7] = e[1];
                        H[D + 12] = e[2];
                        H[D + 17] = e[3];
                        H[D + 3] = H[D + 8] = H[D + 13] = H[D + 18] = b;
                        C[D + 4] = C[D + 9] = C[D + 14] = C[D + 19] = m;
                        D += 20
                    }
                    L.size = N - L.start;
                    this.vertexCount++;
                    this.vaoMax <= this.vertexCount && (this.vaoMax++, k = this.shaders[1], this.vertexBuffers[this.vertexCount] = n.GLBuffer.createVertexBuffer(q, null, q.STREAM_DRAW), this.vaos[this.vertexCount] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[this.vertexCount],
                        k.attributes.aVertexPosition, q.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[this.vertexCount], k.attributes.aTextureCoord, q.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[this.vertexCount], k.attributes.aColor, q.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[this.vertexCount], k.attributes.aTextureId, q.FLOAT, !1, this.vertByteSize, 16));
                    this.vertexBuffers[this.vertexCount].upload(G.vertices, 0);
                    this.vao = this.vaos[this.vertexCount].bind();
                    for (N =
                        0; N < J; N++) {
                        a = l[N];
                        f = a.textureCount;
                        (k = this.shaders[f - 1]) || (k = this.shaders[f - 1] = d(q, f));
                        this.renderer.bindShader(k);
                        for (k = 0; k < f; k++) this.renderer.bindTexture(a.textures[k], k);
                        this.renderer.state.setBlendMode(a.blend);
                        q.drawElements(q.TRIANGLES, 6 * a.size, q.UNSIGNED_SHORT, 12 * a.start)
                    }
                    this.currentIndex = 0
                }
            };
            a.prototype.start = function() {};
            a.prototype.stop = function() {
                this.flush();
                this.vao.unbind()
            };
            a.prototype.destroy = function() {
                for (var a = 0; a < this.vaoMax; a++) this.vertexBuffers[a].destroy(), this.vaos[a].destroy();
                this.indexBuffer.destroy();
                this.renderer.off("prerender", this.onPrerender, this);
                k.prototype.destroy.call(this);
                for (a = 0; a < this.shaders.length; a++) this.shaders[a] && this.shaders[a].destroy();
                this.sprites = this.indices = this.indexBuffer = this.vaos = this.vertexBuffers = null;
                for (a = 0; a < this.buffers.length; a++) this.buffers[a].destroy()
            }
        }, {
            "../../const": 43,
            "../../renderers/webgl/WebGLRenderer": 81,
            "../../renderers/webgl/utils/ObjectRenderer": 91,
            "../../renderers/webgl/utils/checkMaxIfStatmentsInShader": 94,
            "../../utils/createIndicesForQuads": 114,
            "./BatchBuffer": 101,
            "./generateMultiTextureShader": 103,
            "bit-twiddle": 1,
            "pixi-gl-core": 12
        }],
        103: [function(b, e, l) {
            function a(a) {
                var d;
                d = "\n\n";
                for (var f = 0; f < a; f++) 0 < f && (d += "\nelse "), f < a - 1 && (d += "if(textureId == " + f + ".0)"), d += "\n{", d += "\n\tcolor = texture2D(uSamplers[" + f + "], vTextureCoord);", d += "\n}";
                return d += "\n", d + "\n"
            }
            var k = b("../../Shader");
            e.exports = function(f, d) {
                var h;
                h = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\nvoid main(void){\nvec4 color;\nfloat textureId = floor(vTextureId+0.5);\n%forloop%\ngl_FragColor = color * vColor;\n}".replace(/%count%/gi,
                    d);
                h = h.replace(/%forloop%/gi, a(d));
                h = new k(f, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vTextureId = aTextureId;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
                    h, {
                        aVertexPosition: 3,
                        aColor: 2,
                        aTextureCoord: 1,
                        aTextureId: 0
                    });
                for (var b = [], e = 0; e < d; e++) b[e] = e;
                return h.bind(), h.uniforms.uSamplers = b, h
            }
        }, {
            "../../Shader": 42
        }],
        104: [function(b, e, l) {
            function a(a, h) {
                this.canvas = document.createElement("canvas");
                this.context = this.canvas.getContext("2d");
                this.resolution = m.RESOLUTION;
                this._styleListener = this._style = this._text = null;
                this._font = "";
                var b = f.fromCanvas(this.canvas);
                b.orig = new d.Rectangle;
                b.trim = new d.Rectangle;
                k.call(this, b);
                this.text = a;
                this.style = h;
                this.localStyleID = -1
            }
            var k = b("../sprites/Sprite"),
                f = b("../textures/Texture"),
                d = b("../math"),
                h = b("../utils"),
                m = b("../const"),
                q = b("./TextStyle"),
                n = {
                    texture: !0,
                    children: !1,
                    baseTexture: !0
                };
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.fontPropertiesCache = {};
            a.fontPropertiesCanvas = document.createElement("canvas");
            a.fontPropertiesContext = a.fontPropertiesCanvas.getContext("2d");
            Object.defineProperties(a.prototype, {
                width: {
                    get: function() {
                        return this.updateText(!0), Math.abs(this.scale.x) * this.texture.orig.width
                    },
                    set: function(a) {
                        this.updateText(!0);
                        var d = h.sign(this.scale.x) || 1;
                        this.scale.x = d * a / this.texture.orig.width;
                        this._width = a
                    }
                },
                height: {
                    get: function() {
                        return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
                    },
                    set: function(a) {
                        this.updateText(!0);
                        var d = h.sign(this.scale.y) || 1;
                        this.scale.y = d * a / this.texture.orig.height;
                        this._height = a
                    }
                },
                style: {
                    get: function() {
                        return this._style
                    },
                    set: function(a) {
                        a = a || {};
                        a instanceof q ? this._style = a : this._style = new q(a);
                        this.localStyleID = -1;
                        this.dirty = !0
                    }
                },
                text: {
                    get: function() {
                        return this._text
                    },
                    set: function(a) {
                        a = (a || " ").toString();
                        this._text !== a && (this._text = a, this.dirty = !0)
                    }
                }
            });
            a.prototype.updateText = function(a) {
                var d = this._style;
                if (this.localStyleID !== d.styleID && (this.dirty = !0, this.localStyleID = d.styleID), this.dirty || !a) {
                    this._font = d.fontStyle + " " + d.fontVariant + " " + d.fontWeight + " " + ("number" == typeof d.fontSize ? d.fontSize + "px" : d.fontSize) + " " + d.fontFamily;
                    this.context.font = this._font;
                    var f;
                    a = (d.wordWrap ? this.wordWrap(this._text) : this._text).split(/(?:\r\n|\r|\n)/);
                    var h = Array(a.length),
                        b = 0,
                        e = this.determineFontProperties(this._font);
                    for (f = 0; f < a.length; f++) {
                        var m = this.context.measureText(a[f]).width + (a[f].length - 1) * d.letterSpacing;
                        h[f] = m;
                        b = Math.max(b, m)
                    }
                    f = b + d.strokeThickness;
                    d.dropShadow && (f += d.dropShadowDistance);
                    f += 2 * d.padding;
                    this.canvas.width = Math.ceil((f + this.context.lineWidth) * this.resolution);
                    m = this.style.lineHeight || e.fontSize + d.strokeThickness;
                    f = Math.max(m, e.fontSize + d.strokeThickness) + (a.length - 1) * m;
                    d.dropShadow && (f += d.dropShadowDistance);
                    this.canvas.height =
                        Math.ceil((f + 2 * this._style.padding) * this.resolution);
                    this.context.scale(this.resolution, this.resolution);
                    navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.context.font = this._font;
                    this.context.strokeStyle = d.stroke;
                    this.context.lineWidth = d.strokeThickness;
                    this.context.textBaseline = d.textBaseline;
                    this.context.lineJoin = d.lineJoin;
                    this.context.miterLimit = d.miterLimit;
                    var n, k;
                    if (d.dropShadow) {
                        0 < d.dropShadowBlur ? (this.context.shadowColor = d.dropShadowColor, this.context.shadowBlur =
                            d.dropShadowBlur) : this.context.fillStyle = d.dropShadowColor;
                        var q = Math.cos(d.dropShadowAngle) * d.dropShadowDistance,
                            l = Math.sin(d.dropShadowAngle) * d.dropShadowDistance;
                        for (f = 0; f < a.length; f++) n = d.strokeThickness / 2, k = d.strokeThickness / 2 + f * m + e.ascent, "right" === d.align ? n += b - h[f] : "center" === d.align && (n += (b - h[f]) / 2), d.fill && (this.drawLetterSpacing(a[f], n + q + d.padding, k + l + d.padding), d.stroke && d.strokeThickness && (this.context.strokeStyle = d.dropShadowColor, this.drawLetterSpacing(a[f], n + q + d.padding, k + l + d.padding, !0), this.context.strokeStyle = d.stroke))
                    }
                    this.context.fillStyle = this._generateFillStyle(d, a);
                    for (f = 0; f < a.length; f++) n = d.strokeThickness / 2, k = d.strokeThickness / 2 + f * m + e.ascent, "right" === d.align ? n += b - h[f] : "center" === d.align && (n += (b - h[f]) / 2), d.stroke && d.strokeThickness && this.drawLetterSpacing(a[f], n + d.padding, k + d.padding, !0), d.fill && this.drawLetterSpacing(a[f], n + d.padding, k + d.padding);
                    this.updateTexture()
                }
            };
            a.prototype.drawLetterSpacing = function(a, d, f, h) {
                var b = this._style.letterSpacing;
                if (0 === b) return void(h ?
                    this.context.strokeText(a, d, f) : this.context.fillText(a, d, f));
                for (var e = String.prototype.split.call(a, ""), m = 0, n = d; m < a.length;) d = e[m++], h ? this.context.strokeText(d, n, f) : this.context.fillText(d, n, f), n += this.context.measureText(d).width + b
            };
            a.prototype.updateTexture = function() {
                var a = this._texture,
                    d = this._style;
                a.baseTexture.hasLoaded = !0;
                a.baseTexture.resolution = this.resolution;
                a.baseTexture.realWidth = this.canvas.width;
                a.baseTexture.realHeight = this.canvas.height;
                a.baseTexture.width = this.canvas.width / this.resolution;
                a.baseTexture.height = this.canvas.height / this.resolution;
                a.trim.width = a._frame.width = this.canvas.width / this.resolution;
                a.trim.height = a._frame.height = this.canvas.height / this.resolution;
                a.trim.x = -d.padding;
                a.trim.y = -d.padding;
                a.orig.width = a._frame.width - 2 * d.padding;
                a.orig.height = a._frame.height - 2 * d.padding;
                this._onTextureUpdate();
                a.baseTexture.emit("update", a.baseTexture);
                this.dirty = !1
            };
            a.prototype.renderWebGL = function(a) {
                this.resolution !== a.resolution && (this.resolution = a.resolution, this.dirty = !0);
                this.updateText(!0);
                k.prototype.renderWebGL.call(this, a)
            };
            a.prototype._renderCanvas = function(a) {
                this.resolution !== a.resolution && (this.resolution = a.resolution, this.dirty = !0);
                this.updateText(!0);
                k.prototype._renderCanvas.call(this, a)
            };
            a.prototype.determineFontProperties = function(d) {
                var f = a.fontPropertiesCache[d];
                if (!f) {
                    var f = {},
                        h = a.fontPropertiesCanvas,
                        b = a.fontPropertiesContext;
                    b.font = d;
                    var e = Math.ceil(b.measureText("|M\u00c9q").width),
                        m = Math.ceil(b.measureText("M").width),
                        n = 2 * m,
                        m = 1.4 * m | 0;
                    h.width = e;
                    h.height = n;
                    b.fillStyle =
                        "#f00";
                    b.fillRect(0, 0, e, n);
                    b.font = d;
                    b.textBaseline = "alphabetic";
                    b.fillStyle = "#000";
                    b.fillText("|M\u00c9q", 0, m);
                    for (var k, h = b.getImageData(0, 0, e, n).data, b = h.length, q = 4 * e, l = 0, r = !1, e = 0; e < m; e++) {
                        for (k = 0; k < q; k += 4)
                            if (255 !== h[l + k]) {
                                r = !0;
                                break
                            }
                        if (r) break;
                        l += q
                    }
                    f.ascent = m - e;
                    l = b - q;
                    r = !1;
                    for (e = n; e > m; e--) {
                        for (k = 0; k < q; k += 4)
                            if (255 !== h[l + k]) {
                                r = !0;
                                break
                            }
                        if (r) break;
                        l -= q
                    }
                    f.descent = e - m;
                    f.fontSize = f.ascent + f.descent;
                    a.fontPropertiesCache[d] = f
                }
                return f
            };
            a.prototype.wordWrap = function(a) {
                var d = "";
                a = a.split("\n");
                for (var f =
                        this._style.wordWrapWidth, h = 0; h < a.length; h++) {
                    for (var b = f, e = a[h].split(" "), m = 0; m < e.length; m++) {
                        var n = this.context.measureText(e[m]).width;
                        if (this._style.breakWords && n > f)
                            for (var n = e[m].split(""), k = 0; k < n.length; k++) {
                                var q = this.context.measureText(n[k]).width;
                                q > b ? (d += "\n" + n[k], b = f - q) : (0 === k && (d += " "), d += n[k], b -= q)
                            } else k = n + this.context.measureText(" ").width, 0 === m || k > b ? (0 < m && (d += "\n"), d += e[m], b = f - n) : (b -= k, d += " " + e[m])
                    }
                    h < a.length - 1 && (d += "\n")
                }
                return d
            };
            a.prototype._calculateBounds = function() {
                this.updateText(!0);
                this.calculateVertices();
                this._bounds.addQuad(this.vertexData)
            };
            a.prototype._onStyleChange = function() {
                this.dirty = !0
            };
            a.prototype._generateFillStyle = function(a, d) {
                if (Array.isArray(a.fill)) {
                    if (navigator.isCocoonJS) return a.fill[0];
                    var f, h, b, e, n;
                    f = this.canvas.width / this.resolution;
                    h = this.canvas.height / this.resolution;
                    if (a.fillGradientType === m.TEXT_GRADIENT.LINEAR_VERTICAL)
                        for (h = this.context.createLinearGradient(f / 2, 0, f / 2, h), b = (a.fill.length + 1) * d.length, f = e = 0; f < d.length; f++) {
                            e += 1;
                            for (var k = 0; k < a.fill.length; k++) n =
                                e / b, h.addColorStop(n, a.fill[k]), e++
                        } else
                            for (h = this.context.createLinearGradient(0, h / 2, f, h / 2), b = a.fill.length + 1, e = 1, f = 0; f < a.fill.length; f++) n = e / b, h.addColorStop(n, a.fill[f]), e++;
                    return h
                }
                return a.fill
            };
            a.prototype.destroy = function(a) {
                "boolean" == typeof a && (a = {
                    children: a
                });
                a = Object.assign({}, n, a);
                k.prototype.destroy.call(this, a);
                this._style = this.canvas = this.context = null
            }
        }, {
            "../const": 43,
            "../math": 67,
            "../sprites/Sprite": 98,
            "../textures/Texture": 109,
            "../utils": 116,
            "./TextStyle": 105
        }],
        105: [function(b,
            e, l) {
            function a(a) {
                this.styleID = 0;
                Object.assign(this, this._defaults, a)
            }

            function k(a) {
                if ("number" == typeof a) return f.hex2string(a);
                if (Array.isArray(a))
                    for (var d = 0; d < a.length; ++d) "number" == typeof a[d] && (a[d] = f.hex2string(a[d]));
                return a
            }
            l = b("../const");
            var f = b("../utils");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype._defaults = {
                align: "left",
                breakWords: !1,
                dropShadow: !1,
                dropShadowAngle: Math.PI / 6,
                dropShadowBlur: 0,
                dropShadowColor: "#000000",
                dropShadowDistance: 5,
                fill: "black",
                fillGradientType: l.TEXT_GRADIENT.LINEAR_VERTICAL,
                fontFamily: "Arial",
                fontSize: 26,
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 0,
                lineJoin: "miter",
                miterLimit: 10,
                padding: 0,
                stroke: "black",
                strokeThickness: 0,
                textBaseline: "alphabetic",
                wordWrap: !1,
                wordWrapWidth: 100
            };
            a.prototype.clone = function() {
                var d = {},
                    f;
                for (f in this._defaults) d[f] = this[f];
                return new a(d)
            };
            a.prototype.reset = function() {
                Object.assign(this, this._defaults)
            };
            Object.defineProperties(a.prototype, {
                align: {
                    get: function() {
                        return this._align
                    },
                    set: function(a) {
                        this._align !==
                            a && (this._align = a, this.styleID++)
                    }
                },
                breakWords: {
                    get: function() {
                        return this._breakWords
                    },
                    set: function(a) {
                        this._breakWords !== a && (this._breakWords = a, this.styleID++)
                    }
                },
                dropShadow: {
                    get: function() {
                        return this._dropShadow
                    },
                    set: function(a) {
                        this._dropShadow !== a && (this._dropShadow = a, this.styleID++)
                    }
                },
                dropShadowAngle: {
                    get: function() {
                        return this._dropShadowAngle
                    },
                    set: function(a) {
                        this._dropShadowAngle !== a && (this._dropShadowAngle = a, this.styleID++)
                    }
                },
                dropShadowBlur: {
                    get: function() {
                        return this._dropShadowBlur
                    },
                    set: function(a) {
                        this._dropShadowBlur !==
                            a && (this._dropShadowBlur = a, this.styleID++)
                    }
                },
                dropShadowColor: {
                    get: function() {
                        return this._dropShadowColor
                    },
                    set: function(a) {
                        a = k(a);
                        this._dropShadowColor !== a && (this._dropShadowColor = a, this.styleID++)
                    }
                },
                dropShadowDistance: {
                    get: function() {
                        return this._dropShadowDistance
                    },
                    set: function(a) {
                        this._dropShadowDistance !== a && (this._dropShadowDistance = a, this.styleID++)
                    }
                },
                fill: {
                    get: function() {
                        return this._fill
                    },
                    set: function(a) {
                        a = k(a);
                        this._fill !== a && (this._fill = a, this.styleID++)
                    }
                },
                fillGradientType: {
                    get: function() {
                        return this._fillGradientType
                    },
                    set: function(a) {
                        this._fillGradientType !== a && (this._fillGradientType = a, this.styleID++)
                    }
                },
                fontFamily: {
                    get: function() {
                        return this._fontFamily
                    },
                    set: function(a) {
                        this.fontFamily !== a && (this._fontFamily = a, this.styleID++)
                    }
                },
                fontSize: {
                    get: function() {
                        return this._fontSize
                    },
                    set: function(a) {
                        this._fontSize !== a && (this._fontSize = a, this.styleID++)
                    }
                },
                fontStyle: {
                    get: function() {
                        return this._fontStyle
                    },
                    set: function(a) {
                        this._fontStyle !== a && (this._fontStyle = a, this.styleID++)
                    }
                },
                fontVariant: {
                    get: function() {
                        return this._fontVariant
                    },
                    set: function(a) {
                        this._fontVariant !== a && (this._fontVariant = a, this.styleID++)
                    }
                },
                fontWeight: {
                    get: function() {
                        return this._fontWeight
                    },
                    set: function(a) {
                        this._fontWeight !== a && (this._fontWeight = a, this.styleID++)
                    }
                },
                letterSpacing: {
                    get: function() {
                        return this._letterSpacing
                    },
                    set: function(a) {
                        this._letterSpacing !== a && (this._letterSpacing = a, this.styleID++)
                    }
                },
                lineHeight: {
                    get: function() {
                        return this._lineHeight
                    },
                    set: function(a) {
                        this._lineHeight !== a && (this._lineHeight = a, this.styleID++)
                    }
                },
                lineJoin: {
                    get: function() {
                        return this._lineJoin
                    },
                    set: function(a) {
                        this._lineJoin !== a && (this._lineJoin = a, this.styleID++)
                    }
                },
                miterLimit: {
                    get: function() {
                        return this._miterLimit
                    },
                    set: function(a) {
                        this._miterLimit !== a && (this._miterLimit = a, this.styleID++)
                    }
                },
                padding: {
                    get: function() {
                        return this._padding
                    },
                    set: function(a) {
                        this._padding !== a && (this._padding = a, this.styleID++)
                    }
                },
                stroke: {
                    get: function() {
                        return this._stroke
                    },
                    set: function(a) {
                        a = k(a);
                        this._stroke !== a && (this._stroke = a, this.styleID++)
                    }
                },
                strokeThickness: {
                    get: function() {
                        return this._strokeThickness
                    },
                    set: function(a) {
                        this._strokeThickness !==
                            a && (this._strokeThickness = a, this.styleID++)
                    }
                },
                textBaseline: {
                    get: function() {
                        return this._textBaseline
                    },
                    set: function(a) {
                        this._textBaseline !== a && (this._textBaseline = a, this.styleID++)
                    }
                },
                wordWrap: {
                    get: function() {
                        return this._wordWrap
                    },
                    set: function(a) {
                        this._wordWrap !== a && (this._wordWrap = a, this.styleID++)
                    }
                },
                wordWrapWidth: {
                    get: function() {
                        return this._wordWrapWidth
                    },
                    set: function(a) {
                        this._wordWrapWidth !== a && (this._wordWrapWidth = a, this.styleID++)
                    }
                }
            })
        }, {
            "../const": 43,
            "../utils": 116
        }],
        106: [function(b, e, l) {
            function a(a,
                h, b, e) {
                k.call(this, null, b);
                this.resolution = e || f.RESOLUTION;
                this.width = a || 100;
                this.height = h || 100;
                this.realWidth = this.width * this.resolution;
                this.realHeight = this.height * this.resolution;
                this.scaleMode = b || f.SCALE_MODES.DEFAULT;
                this.hasLoaded = !0;
                this._glRenderTargets = [];
                this._canvasRenderTarget = null;
                this.valid = !1
            }
            var k = b("./BaseTexture"),
                f = b("../const");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.resize = function(a, f) {
                a === this.width && f === this.height || (this.valid =
                    0 < a && 0 < f, this.width = a, this.height = f, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
            };
            a.prototype.destroy = function() {
                k.prototype.destroy.call(this, !0);
                this.renderer = null
            }
        }, {
            "../const": 43,
            "./BaseTexture": 107
        }],
        107: [function(b, e, l) {
            function a(a, h, b) {
                d.call(this);
                this.uid = k.uid();
                this.touched = 0;
                this.resolution = b || f.RESOLUTION;
                this.realHeight = this.realWidth = this.height = this.width = 100;
                this.scaleMode = h || f.SCALE_MODES.DEFAULT;
                this.isLoading =
                    this.hasLoaded = !1;
                this.source = null;
                this.premultipliedAlpha = !0;
                this.imageUrl = null;
                this.isPowerOfTwo = !1;
                this.mipmap = f.MIPMAP_TEXTURES;
                this.wrapMode = f.WRAP_MODES.DEFAULT;
                this._glTextures = [];
                this._id = this._enabled = 0;
                a && this.loadSource(a)
            }
            var k = b("../utils"),
                f = b("../const"),
                d = b("eventemitter3"),
                h = b("../utils/determineCrossOrigin"),
                m = b("bit-twiddle");
            a.prototype = Object.create(d.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.update = function() {
                this.realWidth = this.source.naturalWidth || this.source.videoWidth ||
                    this.source.width;
                this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height;
                this.width = this.realWidth / this.resolution;
                this.height = this.realHeight / this.resolution;
                this.isPowerOfTwo = m.isPow2(this.realWidth) && m.isPow2(this.realHeight);
                this.emit("update", this)
            };
            a.prototype.loadSource = function(a) {
                var d = this.isLoading;
                if (this.hasLoaded = !1, this.isLoading = !1, d && this.source && (this.source.onload = null, this.source.onerror = null), this.source = a, (this.source.complete || this.source.getContext) &&
                    this.source.width && this.source.height) this._sourceLoaded();
                else if (!a.getContext) {
                    this.isLoading = !0;
                    var f = this;
                    a.onload = function() {
                        a.onload = null;
                        a.onerror = null;
                        f.isLoading && (f.isLoading = !1, f._sourceLoaded(), f.emit("loaded", f))
                    };
                    a.onerror = function() {
                        a.onload = null;
                        a.onerror = null;
                        f.isLoading && (f.isLoading = !1, f.emit("error", f))
                    };
                    a.complete && a.src && (this.isLoading = !1, a.onload = null, a.onerror = null, a.width && a.height ? (this._sourceLoaded(), d && this.emit("loaded", this)) : d && this.emit("error", this))
                }
            };
            a.prototype._sourceLoaded =
                function() {
                    this.hasLoaded = !0;
                    this.update()
                };
            a.prototype.destroy = function() {
                this.imageUrl ? (delete k.BaseTextureCache[this.imageUrl], delete k.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete k.BaseTextureCache[this.source._pixiId];
                this.source = null;
                this.dispose()
            };
            a.prototype.dispose = function() {
                this.emit("dispose", this)
            };
            a.prototype.updateSourceImage = function(a) {
                this.source.src = a;
                this.loadSource(this.source)
            };
            a.fromImage =
                function(d, f, b) {
                    var e = k.BaseTextureCache[d];
                    if (!e) {
                        var m = new Image;
                        void 0 === f && 0 !== d.indexOf("data:") && (m.crossOrigin = h(d));
                        e = new a(m, b);
                        e.imageUrl = d;
                        m.src = d;
                        k.BaseTextureCache[d] = e;
                        e.resolution = k.getResolutionOfUrl(d)
                    }
                    return e
                };
            a.fromCanvas = function(d, f) {
                d._pixiId || (d._pixiId = "canvas_" + k.uid());
                var h = k.BaseTextureCache[d._pixiId];
                return h || (h = new a(d, f), k.BaseTextureCache[d._pixiId] = h), h
            }
        }, {
            "../const": 43,
            "../utils": 116,
            "../utils/determineCrossOrigin": 115,
            "bit-twiddle": 1,
            eventemitter3: 3
        }],
        108: [function(b,
            e, l) {
            function a(a, h, b, e, n) {
                if (this.legacyRenderer = null, !(a instanceof k)) {
                    var d = h;
                    e = e || 0;
                    n = n || 1;
                    console.warn("v4 RenderTexture now expects a new BaseRenderTexture. Please use RenderTexture.create(" + d + ", " + b + ")");
                    this.legacyRenderer = a;
                    h = null;
                    a = new k(d, b, e, n)
                }
                f.call(this, a, h);
                this.valid = !0;
                this._updateUvs()
            }
            var k = b("./BaseRenderTexture"),
                f = b("./Texture");
            a.prototype = Object.create(f.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.resize = function(a, f, b) {
                this.valid = 0 < a && 0 < f;
                this._frame.width =
                    this.orig.width = a;
                this._frame.height = this.orig.height = f;
                b || this.baseTexture.resize(a, f);
                this._updateUvs()
            };
            a.create = function(d, f, b, e) {
                return new a(new k(d, f, b, e))
            }
        }, {
            "./BaseRenderTexture": 106,
            "./Texture": 109
        }],
        109: [function(b, e, l) {
            function a(d, f, b, e, k) {
                if (h.call(this), this.noFrame = !1, f || (this.noFrame = !0, f = new m.Rectangle(0, 0, 1, 1)), d instanceof a && (d = d.baseTexture), this.baseTexture = d, this._frame = f, this.trim = e, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.orig = b || f, this._rotate = +(k || 0), !0 ===
                    k) this._rotate = 2;
                else if (0 !== this._rotate % 2) throw "attempt to use diamond-shaped UVs. If you are sure, set rotation manually";
                d.hasLoaded ? (this.noFrame && (f = new m.Rectangle(0, 0, d.width, d.height), d.on("update", this.onBaseTextureUpdated, this)), this.frame = f) : d.once("loaded", this.onBaseTextureLoaded, this);
                this._updateID = 0
            }
            var k = b("./BaseTexture"),
                f = b("./VideoBaseTexture"),
                d = b("./TextureUvs"),
                h = b("eventemitter3"),
                m = b("../math"),
                q = b("../utils");
            a.prototype = Object.create(h.prototype);
            a.prototype.constructor =
                a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                frame: {
                    get: function() {
                        return this._frame
                    },
                    set: function(a) {
                        if (this._frame = a, this.noFrame = !1, a.x + a.width > this.baseTexture.width || a.y + a.height > this.baseTexture.height) throw Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                        this.valid = a && a.width && a.height && this.baseTexture.hasLoaded;
                        this.trim || this.rotate || (this.orig = a);
                        this.valid && this._updateUvs()
                    }
                },
                rotate: {
                    get: function() {
                        return this._rotate
                    },
                    set: function(a) {
                        this._rotate =
                            a;
                        this.valid && this._updateUvs()
                    }
                },
                width: {
                    get: function() {
                        return this.orig ? this.orig.width : 0
                    }
                },
                height: {
                    get: function() {
                        return this.orig ? this.orig.height : 0
                    }
                }
            });
            a.prototype.update = function() {
                this.baseTexture.update()
            };
            a.prototype.onBaseTextureLoaded = function(a) {
                this._updateID++;
                this.noFrame ? this.frame = new m.Rectangle(0, 0, a.width, a.height) : this.frame = this._frame;
                this.baseTexture.on("update", this.onBaseTextureUpdated, this);
                this.emit("update", this)
            };
            a.prototype.onBaseTextureUpdated = function(a) {
                this._updateID++;
                this._frame.width = a.width;
                this._frame.height = a.height;
                this.emit("update", this)
            };
            a.prototype.destroy = function(a) {
                this.baseTexture && (a && (q.TextureCache[this.baseTexture.imageUrl] && delete q.TextureCache[this.baseTexture.imageUrl], this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null);
                this.orig = this.trim = this._uvs = this._frame = null;
                this.valid = !1;
                this.off("dispose", this.dispose, this);
                this.off("update",
                    this.update, this)
            };
            a.prototype.clone = function() {
                return new a(this.baseTexture, this.frame, this.orig, this.trim, this.rotate)
            };
            a.prototype._updateUvs = function() {
                this._uvs || (this._uvs = new d);
                this._uvs.set(this._frame, this.baseTexture, this.rotate);
                this._updateID++
            };
            a.fromImage = function(d, f, h) {
                var b = q.TextureCache[d];
                return b || (b = new a(k.fromImage(d, f, h)), q.TextureCache[d] = b), b
            };
            a.fromFrame = function(a) {
                var d = q.TextureCache[a];
                if (!d) throw Error('The frameId "' + a + '" does not exist in the texture cache');
                return d
            };
            a.fromCanvas = function(d, f) {
                return new a(k.fromCanvas(d, f))
            };
            a.fromVideo = function(d, h) {
                return "string" == typeof d ? a.fromVideoUrl(d, h) : new a(f.fromVideo(d, h))
            };
            a.fromVideoUrl = function(d, h) {
                return new a(f.fromUrl(d, h))
            };
            a.from = function(d) {
                if ("string" == typeof d) {
                    var f = q.TextureCache[d];
                    return f ? f : null !== d.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) ? a.fromVideoUrl(d) : a.fromImage(d)
                }
                return d instanceof HTMLCanvasElement ? a.fromCanvas(d) : d instanceof HTMLVideoElement ? a.fromVideo(d) : d instanceof k ? new a(k) : d
            };
            a.addTextureToCache =
                function(a, d) {
                    q.TextureCache[d] = a
                };
            a.removeTextureFromCache = function(a) {
                var d = q.TextureCache[a];
                return delete q.TextureCache[a], delete q.BaseTextureCache[a], d
            };
            a.EMPTY = new a(new k);
            a.EMPTY.destroy = function() {};
            a.EMPTY.on = function() {};
            a.EMPTY.once = function() {};
            a.EMPTY.emit = function() {}
        }, {
            "../math": 67,
            "../utils": 116,
            "./BaseTexture": 107,
            "./TextureUvs": 110,
            "./VideoBaseTexture": 111,
            eventemitter3: 3
        }],
        110: [function(b, e, l) {
            function a() {
                this.y0 = this.x0 = 0;
                this.x1 = 1;
                this.y1 = 0;
                this.y2 = this.x2 = 1;
                this.x3 = 0;
                this.y3 =
                    1;
                this.uvsUint32 = new Uint32Array(4)
            }
            e.exports = a;
            var k = b("../math/GroupD8");
            a.prototype.set = function(a, d, h) {
                var f = d.width,
                    b = d.height;
                if (h) {
                    d = a.width / 2 / f;
                    var e = a.height / 2 / b,
                        f = a.x / f + d;
                    a = a.y / b + e;
                    h = k.add(h, k.NW);
                    this.x0 = f + d * k.uX(h);
                    this.y0 = a + e * k.uY(h);
                    h = k.add(h, 2);
                    this.x1 = f + d * k.uX(h);
                    this.y1 = a + e * k.uY(h);
                    h = k.add(h, 2);
                    this.x2 = f + d * k.uX(h);
                    this.y2 = a + e * k.uY(h);
                    h = k.add(h, 2);
                    this.x3 = f + d * k.uX(h);
                    this.y3 = a + e * k.uY(h)
                } else this.x0 = a.x / f, this.y0 = a.y / b, this.x1 = (a.x + a.width) / f, this.y1 = a.y / b, this.x2 = (a.x + a.width) / f,
                    this.y2 = (a.y + a.height) / b, this.x3 = a.x / f, this.y3 = (a.y + a.height) / b;
                this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535;
                this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535;
                this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535;
                this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535
            }
        }, {
            "../math/GroupD8": 63
        }],
        111: [function(b, e, l) {
            function a(a, d) {
                if (!a) throw Error("No video source element specified.");
                (a.readyState === a.HAVE_ENOUGH_DATA || a.readyState === a.HAVE_FUTURE_DATA) &&
                a.width && a.height && (a.complete = !0);
                f.call(this, a, d);
                this.autoUpdate = !1;
                this._onUpdate = this._onUpdate.bind(this);
                this._onCanPlay = this._onCanPlay.bind(this);
                a.complete || (a.addEventListener("canplay", this._onCanPlay), a.addEventListener("canplaythrough", this._onCanPlay), a.addEventListener("play", this._onPlayStart.bind(this)), a.addEventListener("pause", this._onPlayStop.bind(this)));
                this.__loaded = !1
            }

            function k(a, d) {
                d || (d = "video/" + a.substr(a.lastIndexOf(".") + 1));
                var f = document.createElement("source");
                return f.src =
                    a, f.type = d, f
            }
            var f = b("./BaseTexture"),
                d = b("../utils");
            a.prototype = Object.create(f.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype._onUpdate = function() {
                this.autoUpdate && (window.requestAnimationFrame(this._onUpdate), this.update())
            };
            a.prototype._onPlayStart = function() {
                this.hasLoaded || this._onCanPlay();
                this.autoUpdate || (window.requestAnimationFrame(this._onUpdate), this.autoUpdate = !0)
            };
            a.prototype._onPlayStop = function() {
                this.autoUpdate = !1
            };
            a.prototype._onCanPlay = function() {
                this.hasLoaded = !0;
                this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.source.play(), this.__loaded || (this.__loaded = !0, this.emit("loaded", this)))
            };
            a.prototype.destroy = function() {
                this.source && this.source._pixiId && (delete d.BaseTextureCache[this.source._pixiId], delete this.source._pixiId);
                f.prototype.destroy.call(this)
            };
            a.fromVideo = function(f, b) {
                f._pixiId ||
                    (f._pixiId = "video_" + d.uid());
                var h = d.BaseTextureCache[f._pixiId];
                return h || (h = new a(f, b), d.BaseTextureCache[f._pixiId] = h), h
            };
            a.fromUrl = function(d, f) {
                var h = document.createElement("video");
                if (Array.isArray(d))
                    for (var b = 0; b < d.length; ++b) h.appendChild(k(d[b].src || d[b], d[b].mime));
                else h.appendChild(k(d.src || d, d.mime));
                return h.load(), h.play(), a.fromVideo(h, f)
            };
            a.fromUrls = a.fromUrl
        }, {
            "../utils": 116,
            "./BaseTexture": 107
        }],
        112: [function(b, e, l) {
            function a() {
                var a = this;
                this._tick = function(f) {
                    a._requestId = null;
                    a.started && (a.update(f), a.started && null === a._requestId && a._emitter.listeners(d, !0) && (a._requestId = requestAnimationFrame(a._tick)))
                };
                this._emitter = new f;
                this._requestId = null;
                this._maxElapsedMS = 100;
                this.autoStart = !1;
                this.deltaTime = 1;
                this.elapsedMS = 1 / k.TARGET_FPMS;
                this.lastTime = 0;
                this.speed = 1;
                this.started = !1
            }
            var k = b("../const"),
                f = b("eventemitter3"),
                d = "tick";
            Object.defineProperties(a.prototype, {
                FPS: {
                    get: function() {
                        return 1E3 / this.elapsedMS
                    }
                },
                minFPS: {
                    get: function() {
                        return 1E3 / this._maxElapsedMS
                    },
                    set: function(a) {
                        this._maxElapsedMS =
                            1 / Math.min(Math.max(0, a) / 1E3, k.TARGET_FPMS)
                    }
                }
            });
            a.prototype._requestIfNeeded = function() {
                null === this._requestId && this._emitter.listeners(d, !0) && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
            };
            a.prototype._cancelIfNeeded = function() {
                null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
            };
            a.prototype._startIfPossible = function() {
                this.started ? this._requestIfNeeded() : this.autoStart && this.start()
            };
            a.prototype.add = function(a, f) {
                return this._emitter.on(d,
                    a, f), this._startIfPossible(), this
            };
            a.prototype.addOnce = function(a, f) {
                return this._emitter.once(d, a, f), this._startIfPossible(), this
            };
            a.prototype.remove = function(a, f) {
                return this._emitter.off(d, a, f), this._emitter.listeners(d, !0) || this._cancelIfNeeded(), this
            };
            a.prototype.start = function() {
                this.started || (this.started = !0, this._requestIfNeeded())
            };
            a.prototype.stop = function() {
                this.started && (this.started = !1, this._cancelIfNeeded())
            };
            a.prototype.update = function(a) {
                var f;
                a = a || performance.now();
                a > this.lastTime ?
                    (f = this.elapsedMS = a - this.lastTime, f > this._maxElapsedMS && (f = this._maxElapsedMS), this.deltaTime = f * k.TARGET_FPMS * this.speed, this._emitter.emit(d, this.deltaTime)) : this.deltaTime = this.elapsedMS = 0;
                this.lastTime = a
            };
            e.exports = a
        }, {
            "../const": 43,
            eventemitter3: 3
        }],
        113: [function(b, e, l) {
            b = b("./Ticker");
            l = new b;
            l.autoStart = !0;
            e.exports = {
                shared: l,
                Ticker: b
            }
        }, {
            "./Ticker": 112
        }],
        114: [function(b, e, l) {
            e.exports = function(a) {
                a *= 6;
                for (var b = new Uint16Array(a), f = 0, d = 0; f < a; f += 6, d += 4) b[f + 0] = d + 0, b[f + 1] = d + 1, b[f + 2] = d + 2, b[f + 3] =
                    d + 0, b[f + 4] = d + 2, b[f + 5] = d + 3;
                return b
            }
        }, {}],
        115: [function(b, e, l) {
            var a, k = b("url");
            e.exports = function(f, d) {
                if (0 === f.indexOf("data:")) return "";
                d = d || window.location;
                a || (a = document.createElement("a"));
                a.href = f;
                f = k.parse(a.href);
                var h = !f.port && "" === d.port || f.port === d.port;
                return f.hostname === d.hostname && h && f.protocol === d.protocol ? "" : "anonymous"
            }
        }, {
            url: 28
        }],
        116: [function(b, e, l) {
            var a = b("../const"),
                k = e.exports = {
                    _uid: 0,
                    _saidHello: !1,
                    EventEmitter: b("eventemitter3"),
                    pluginTarget: b("./pluginTarget"),
                    uid: function() {
                        return ++k._uid
                    },
                    hex2rgb: function(a, d) {
                        return d = d || [], d[0] = (a >> 16 & 255) / 255, d[1] = (a >> 8 & 255) / 255, d[2] = (255 & a) / 255, d
                    },
                    hex2string: function(a) {
                        return a = a.toString(16), a = "000000".substr(0, 6 - a.length) + a, "#" + a
                    },
                    rgb2hex: function(a) {
                        return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
                    },
                    getResolutionOfUrl: function(f) {
                        return (f = a.RETINA_PREFIX.exec(f)) ? parseFloat(f[1]) : 1
                    },
                    sayHello: function(f) {
                        k._saidHello || (-1 < navigator.userAgent.toLowerCase().indexOf("chrome") ? window.console.log.apply(console, ["\n %c %c %c Pixi.js " + a.VERSION + " - \u2730 " +
                            f + " \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"
                        ]) : window.console && window.console.log("Pixi.js " +
                            a.VERSION + " - " + f + " - http://www.pixijs.com/"), k._saidHello = !0)
                    },
                    isWebGLSupported: function() {
                        var a = {
                            stencil: !0,
                            failIfMajorPerformanceCaveat: !0
                        };
                        try {
                            if (!window.WebGLRenderingContext) return !1;
                            var d = document.createElement("canvas"),
                                h = d.getContext("webgl", a) || d.getContext("experimental-webgl", a),
                                b = !(!h || !h.getContextAttributes().stencil);
                            if (h) {
                                var e = h.getExtension("WEBGL_lose_context");
                                e && e.loseContext()
                            }
                            return b
                        } catch (n) {
                            return !1
                        }
                    },
                    sign: function(a) {
                        return a ? 0 > a ? -1 : 1 : 0
                    },
                    removeItems: function(a, d, h) {
                        var f =
                            a.length;
                        if (!(d >= f || 0 === h)) {
                            h = d + h > f ? f - d : h;
                            for (f -= h; d < f; ++d) a[d] = a[d + h];
                            a.length = f
                        }
                    },
                    TextureCache: {},
                    BaseTextureCache: {}
                }
        }, {
            "../const": 43,
            "./pluginTarget": 118,
            eventemitter3: 3
        }],
        117: [function(b, e, l) {
            var a = b("ismobilejs");
            e.exports = function(b) {
                return a.tablet || a.phone ? 2 : b
            }
        }, {
            ismobilejs: 4
        }],
        118: [function(b, e, l) {
            function a(a) {
                a.__plugins = {};
                a.registerPlugin = function(f, d) {
                    a.__plugins[f] = d
                };
                a.prototype.initPlugins = function() {
                    this.plugins = this.plugins || {};
                    for (var f in a.__plugins) this.plugins[f] = new a.__plugins[f](this)
                };
                a.prototype.destroyPlugins = function() {
                    for (var a in this.plugins) this.plugins[a].destroy(), this.plugins[a] = null;
                    this.plugins = null
                }
            }
            e.exports = {
                mixin: function(b) {
                    a(b)
                }
            }
        }, {}],
        119: [function(b, e, l) {
            var a = b("./core"),
                k = b("./mesh"),
                f = b("./particles"),
                d = b("./extras");
            b = b("./filters");
            a.SpriteBatch = function() {
                throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.");
            };
            a.AssetLoader = function() {
                throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.");
            };
            Object.defineProperties(a, {
                Stage: {
                    get: function() {
                        return a.Container
                    }
                },
                DisplayObjectContainer: {
                    get: function() {
                        return a.Container
                    }
                },
                Strip: {
                    get: function() {
                        return k.Mesh
                    }
                },
                Rope: {
                    get: function() {
                        return k.Rope
                    }
                },
                ParticleContainer: {
                    get: function() {
                        return f.ParticleContainer
                    }
                },
                MovieClip: {
                    get: function() {
                        return d.MovieClip
                    }
                },
                TilingSprite: {
                    get: function() {
                        return d.TilingSprite
                    }
                },
                BitmapText: {
                    get: function() {
                        return d.BitmapText
                    }
                },
                blendModes: {
                    get: function() {
                        return a.BLEND_MODES
                    }
                },
                scaleModes: {
                    get: function() {
                        return a.SCALE_MODES
                    }
                },
                BaseTextureCache: {
                    get: function() {
                        return a.utils.BaseTextureCache
                    }
                },
                TextureCache: {
                    get: function() {
                        return a.utils.TextureCache
                    }
                },
                math: {
                    get: function() {
                        return a
                    }
                },
                AbstractFilter: {
                    get: function() {
                        return a.Filter
                    }
                },
                TransformManual: {
                    get: function() {
                        return a.TransformBase
                    }
                }
            });
            a.DisplayObject.prototype.generateTexture = function(a, d, f) {
                return a.generateTexture(this, d, f)
            };
            a.Graphics.prototype.generateTexture = function(a, d) {
                return this.generateCanvasTexture(a, d)
            };
            a.RenderTexture.prototype.render = function(a, d, f, b) {
                this.legacyRenderer.render(a,
                    this, f, d, !b)
            };
            a.RenderTexture.prototype.getImage = function(a) {
                return this.legacyRenderer.extract.image(a)
            };
            a.RenderTexture.prototype.getBase64 = function(a) {
                return this.legacyRenderer.extract.base64(a)
            };
            a.RenderTexture.prototype.getCanvas = function(a) {
                return this.legacyRenderer.extract.canvas(a)
            };
            a.RenderTexture.prototype.getPixels = function(a) {
                return this.legacyRenderer.pixels(a)
            };
            a.Sprite.prototype.setTexture = function(a) {
                this.texture = a
            };
            d.BitmapText.prototype.setText = function(a) {
                this.text = a
            };
            a.Text.prototype.setText =
                function(a) {
                    this.text = a
                };
            a.Text.prototype.setStyle = function(a) {
                this.style = a
            };
            Object.defineProperties(a.TextStyle.prototype, {
                font: {
                    get: function() {
                        return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + ("number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize) + " " + this._fontFamily
                    },
                    set: function(a) {
                        1 < a.indexOf("italic") ? this._fontStyle = "italic" : -1 < a.indexOf("oblique") ? this._fontStyle = "oblique" : this._fontStyle = "normal"; - 1 < a.indexOf("small-caps") ? this._fontVariant = "small-caps" :
                            this._fontVariant = "normal";
                        var d = a.split(" "),
                            f = -1;
                        this._fontSize = 26;
                        for (a = 0; a < d.length; ++a)
                            if (d[a].match(/(px|pt|em|%)/)) {
                                f = a;
                                this._fontSize = d[a];
                                break
                            }
                        this._fontWeight = "normal";
                        for (a = 0; a < f; ++a)
                            if (d[a].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                                this._fontWeight = d[a];
                                break
                            }
                        if (-1 < f && f < d.length - 1) {
                            this._fontFamily = "";
                            for (a = f + 1; a < d.length; ++a) this._fontFamily += d[a] + " ";
                            this._fontFamily = this._fontFamily.slice(0, -1)
                        } else this._fontFamily = "Arial";
                        this.styleID++
                    }
                }
            });
            a.Texture.prototype.setFrame =
                function(a) {
                    this.frame = a
                };
            Object.defineProperties(b, {
                AbstractFilter: {
                    get: function() {
                        return a.AbstractFilter
                    }
                },
                SpriteMaskFilter: {
                    get: function() {
                        return a.SpriteMaskFilter
                    }
                }
            });
            a.utils.uuid = function() {
                return a.utils.uid()
            };
            a.utils.canUseNewCanvasBlendModes = function() {
                return a.CanvasTinter.canUseMultiply
            }
        }, {
            "./core": 62,
            "./extras": 129,
            "./filters": 140,
            "./mesh": 156,
            "./particles": 159
        }],
        120: [function(b, e, l) {
            function a(a) {
                this.renderer = a;
                a.extract = this
            }
            var k = b("../../core"),
                f = new k.Rectangle;
            a.prototype.constructor =
                a;
            e.exports = a;
            a.prototype.image = function(a) {
                var d = new Image;
                return d.src = this.base64(a), d
            };
            a.prototype.base64 = function(a) {
                return this.canvas(a).toDataURL()
            };
            a.prototype.canvas = function(a) {
                var d, b, e, n, l = this.renderer;
                a && (n = a instanceof k.RenderTexture ? a : l.generateTexture(a));
                n ? (d = n.baseTexture._canvasRenderTarget.context, b = n.baseTexture._canvasRenderTarget.resolution, e = n.frame) : (d = l.rootContext, b = l.rootResolution, e = f, e.width = this.renderer.width, e.height = this.renderer.height);
                n = e.width * b;
                l = e.height *
                    b;
                a = new k.CanvasRenderTarget(n, l);
                d = d.getImageData(e.x * b, e.y * b, n, l);
                return a.context.putImageData(d, 0, 0), a.canvas
            };
            a.prototype.pixels = function(a) {
                var d, b, e, n, l = this.renderer;
                return a && (n = a instanceof k.RenderTexture ? a : l.generateTexture(a)), n ? (d = n.baseTexture._canvasRenderTarget.context, b = n.baseTexture._canvasRenderTarget.resolution, e = n.frame) : (d = l.rootContext, b = l.rootResolution, e = f, e.width = l.width, e.height = l.height), d.getImageData(0, 0, e.width * b, e.height * b).data
            };
            a.prototype.destroy = function() {
                this.renderer =
                    this.renderer.extract = null
            };
            k.CanvasRenderer.registerPlugin("extract", a)
        }, {
            "../../core": 62
        }],
        121: [function(b, e, l) {
            e.exports = {
                webGL: b("./webgl/WebGLExtract"),
                canvas: b("./canvas/CanvasExtract")
            }
        }, {
            "./canvas/CanvasExtract": 120,
            "./webgl/WebGLExtract": 122
        }],
        122: [function(b, e, l) {
            function a(a) {
                this.renderer = a;
                a.extract = this
            }
            var k = b("../../core"),
                f = new k.Rectangle;
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.image = function(a) {
                var d = new Image;
                return d.src = this.base64(a), d
            };
            a.prototype.base64 = function(a) {
                return this.canvas(a).toDataURL()
            };
            a.prototype.canvas = function(a) {
                var d, b, e, n, l = this.renderer,
                    t = !1;
                a && (n = a instanceof k.RenderTexture ? a : this.renderer.generateTexture(a));
                n ? (d = n.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], b = d.resolution, e = n.frame, t = !1) : (d = this.renderer.rootRenderTarget, b = d.resolution, t = !0, e = f, e.width = d.size.width, e.height = d.size.height);
                var w = e.width * b;
                a = e.height * b;
                n = new k.CanvasRenderTarget(w, a);
                d && (l.bindRenderTarget(d), d = new Uint8Array(4 * w * a), l = l.gl, l.readPixels(e.x * b, e.y * b, w, a, l.RGBA, l.UNSIGNED_BYTE,
                    d), b = n.context.getImageData(0, 0, w, a), b.data.set(d), n.context.putImageData(b, 0, 0), t && (n.context.scale(1, -1), n.context.drawImage(n.canvas, 0, -a)));
                return n.canvas
            };
            a.prototype.pixels = function(a) {
                var d, b, e, n, l = this.renderer;
                a && (n = a instanceof k.RenderTexture ? a : this.renderer.generateTexture(a));
                n ? (d = n.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], b = d.resolution, e = n.frame) : (d = this.renderer.rootRenderTarget, b = d.resolution, e = f, e.width = d.size.width, e.height = d.size.height);
                a = e.width * b;
                n = e.height *
                    b;
                var t = new Uint8Array(4 * a * n);
                d && (l.bindRenderTarget(d), d = l.gl, d.readPixels(e.x * b, e.y * b, a, n, d.RGBA, d.UNSIGNED_BYTE, t));
                return t
            };
            a.prototype.destroy = function() {
                this.renderer = this.renderer.extract = null
            };
            k.WebGLRenderer.registerPlugin("extract", a)
        }, {
            "../../core": 62
        }],
        123: [function(b, e, l) {
            function a(a, b) {
                k.Container.call(this);
                b = b || {};
                this.textHeight = this.textWidth = 0;
                this._glyphs = [];
                this._font = {
                    tint: void 0 !== b.tint ? b.tint : 16777215,
                    align: b.align || "left",
                    name: null,
                    size: 0
                };
                this.font = b.font;
                this._text = a;
                this.maxLineHeight = this.maxWidth = 0;
                this._anchor = new f(this.makeDirty, this, 0, 0);
                this.dirty = !1;
                this.updateText()
            }
            var k = b("../core"),
                f = b("../core/math/ObservablePoint");
            a.prototype = Object.create(k.Container.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                tint: {
                    get: function() {
                        return this._font.tint
                    },
                    set: function(a) {
                        this._font.tint = "number" == typeof a && 0 <= a ? a : 16777215;
                        this.dirty = !0
                    }
                },
                align: {
                    get: function() {
                        return this._font.align
                    },
                    set: function(a) {
                        this._font.align = a ||
                            "left";
                        this.dirty = !0
                    }
                },
                anchor: {
                    get: function() {
                        return this._anchor
                    },
                    set: function(a) {
                        "number" == typeof a ? this._anchor.set(a) : this._anchor.copy(a)
                    }
                },
                font: {
                    get: function() {
                        return this._font
                    },
                    set: function(d) {
                        d && ("string" == typeof d ? (d = d.split(" "), this._font.name = 1 === d.length ? d[0] : d.slice(1).join(" "), this._font.size = 2 <= d.length ? parseInt(d[0], 10) : a.fonts[this._font.name].size) : (this._font.name = d.name, this._font.size = "number" == typeof d.size ? d.size : parseInt(d.size, 10)), this.dirty = !0)
                    }
                },
                text: {
                    get: function() {
                        return this._text
                    },
                    set: function(a) {
                        a = a.toString() || " ";
                        this._text !== a && (this._text = a, this.dirty = !0)
                    }
                }
            });
            a.prototype.updateText = function() {
                for (var d = a.fonts[this._font.name], f = new k.Point, b = null, e = [], n = 0, l = 0, t = [], w = 0, u = this._font.size / d.size, v = -1, y = 0, A = 0, B = 0; B < this.text.length; B++) {
                    var z = this.text.charCodeAt(B);
                    if (/(\s)/.test(this.text.charAt(B)) && (v = B, y = n), /(?:\r\n|\r|\n)/.test(this.text.charAt(B))) t.push(n), l = Math.max(l, n), w++, f.x = 0, f.y += d.lineHeight, b = null;
                    else if (-1 !== v && 0 < this.maxWidth && f.x * u > this.maxWidth) k.utils.removeItems(e,
                        v, B - v), B = v, v = -1, t.push(y), l = Math.max(l, y), w++, f.x = 0, f.y += d.lineHeight, b = null;
                    else {
                        var x = d.chars[z];
                        x && (b && x.kerning[b] && (f.x += x.kerning[b]), e.push({
                            texture: x.texture,
                            line: w,
                            charCode: z,
                            position: new k.Point(f.x + x.xOffset, f.y + x.yOffset)
                        }), n = f.x + (x.texture.width + x.xOffset), f.x += x.xAdvance, A = Math.max(A, x.yOffset + x.texture.height), b = z)
                    }
                }
                t.push(n);
                l = Math.max(l, n);
                b = [];
                for (B = 0; B <= w; B++) n = 0, "right" === this._font.align ? n = l - t[B] : "center" === this._font.align && (n = (l - t[B]) / 2), b.push(n);
                t = e.length;
                w = this.tint;
                for (B =
                    0; B < t; B++)(n = this._glyphs[B]) ? n.texture = e[B].texture : (n = new k.Sprite(e[B].texture), this._glyphs.push(n)), n.position.x = (e[B].position.x + b[e[B].line]) * u, n.position.y = e[B].position.y * u, n.scale.x = n.scale.y = u, n.tint = w, n.parent || this.addChild(n);
                for (B = t; B < this._glyphs.length; ++B) this.removeChild(this._glyphs[B]);
                if (this.textWidth = l * u, this.textHeight = (f.y + d.lineHeight) * u, 0 !== this.anchor.x || 0 !== this.anchor.y)
                    for (B = 0; B < t; B++) this._glyphs[B].x -= this.textWidth * this.anchor.x, this._glyphs[B].y -= this.textHeight *
                        this.anchor.y;
                this.maxLineHeight = A * u
            };
            a.prototype.updateTransform = function() {
                this.validate();
                this.containerUpdateTransform()
            };
            a.prototype.getLocalBounds = function() {
                return this.validate(), k.Container.prototype.getLocalBounds.call(this)
            };
            a.prototype.validate = function() {
                this.dirty && (this.updateText(), this.dirty = !1)
            };
            a.prototype.makeDirty = function() {
                this.dirty = !0
            };
            a.fonts = {}
        }, {
            "../core": 62,
            "../core/math/ObservablePoint": 65
        }],
        124: [function(b, e, l) {
            function a(a) {
                k.Sprite.call(this, a[0] instanceof k.Texture ?
                    a[0] : a[0].texture);
                this._durations = this._textures = null;
                this.textures = a;
                this.animationSpeed = 1;
                this.loop = !0;
                this.onComplete = null;
                this._currentTime = 0;
                this.playing = !1
            }
            var k = b("../core");
            a.prototype = Object.create(k.Sprite.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                totalFrames: {
                    get: function() {
                        return this._textures.length
                    }
                },
                textures: {
                    get: function() {
                        return this._textures
                    },
                    set: function(a) {
                        if (a[0] instanceof k.Texture) this._textures = a, this._durations = null;
                        else {
                            this._textures = [];
                            this._durations = [];
                            for (var d = 0; d < a.length; d++) this._textures.push(a[d].texture), this._durations.push(a[d].time)
                        }
                    }
                },
                currentFrame: {
                    get: function() {
                        var a = Math.floor(this._currentTime) % this._textures.length;
                        return 0 > a && (a += this._textures.length), a
                    }
                }
            });
            a.prototype.stop = function() {
                this.playing && (this.playing = !1, k.ticker.shared.remove(this.update, this))
            };
            a.prototype.play = function() {
                this.playing || (this.playing = !0, k.ticker.shared.add(this.update, this))
            };
            a.prototype.gotoAndStop = function(a) {
                this.stop();
                this._currentTime =
                    a;
                this._texture = this._textures[this.currentFrame];
                this._textureID = -1
            };
            a.prototype.gotoAndPlay = function(a) {
                this._currentTime = a;
                this.play()
            };
            a.prototype.update = function(a) {
                var d = this.animationSpeed * a;
                if (null !== this._durations) {
                    for (var f = this._currentTime % 1 * this._durations[this.currentFrame], f = f + d / 60 * 1E3; 0 > f;) this._currentTime--, f += this._durations[this.currentFrame];
                    a = Math.sign(this.animationSpeed * a);
                    for (this._currentTime = Math.floor(this._currentTime); f >= this._durations[this.currentFrame];) f -= this._durations[this.currentFrame] *
                        a, this._currentTime += a;
                    this._currentTime += f / this._durations[this.currentFrame]
                } else this._currentTime += d;
                0 > this._currentTime && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : (this._texture = this._textures[this.currentFrame], this._textureID = -1)
            };
            a.prototype.destroy = function() {
                this.stop();
                k.Sprite.prototype.destroy.call(this)
            };
            a.fromFrames = function(f) {
                for (var d = [], b = 0; b < f.length; ++b) d.push(k.Texture.fromFrame(f[b]));
                return new a(d)
            };
            a.fromImages = function(f) {
                for (var d = [], b = 0; b < f.length; ++b) d.push(k.Texture.fromImage(f[b]));
                return new a(d)
            }
        }, {
            "../core": 62
        }],
        125: [function(b, e, l) {
            function a(a, d, f) {
                k.Sprite.call(this, a);
                this.tileScale = new k.Point(1, 1);
                this.tilePosition = new k.Point(0, 0);
                this._width = d || 100;
                this._height = f || 100;
                this._uvs = new k.TextureUvs;
                this._canvasPattern = null;
                this._glDatas = []
            }
            var k = b("../core"),
                f = new k.Point,
                d = b("../core/textures/Texture"),
                h =
                b("../core/sprites/canvas/CanvasTinter"),
                m = b("./webgl/TilingShader"),
                q = new Float32Array(4);
            a.prototype = Object.create(k.Sprite.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                width: {
                    get: function() {
                        return this._width
                    },
                    set: function(a) {
                        this._width = a
                    }
                },
                height: {
                    get: function() {
                        return this._height
                    },
                    set: function(a) {
                        this._height = a
                    }
                }
            });
            a.prototype._onTextureUpdate = function() {};
            a.prototype._renderWebGL = function(a) {
                var d = this._texture;
                if (d && d._uvs) {
                    a.flush();
                    var f = a.gl,
                        b =
                        this._glDatas[a.CONTEXT_UID];
                    b || (b = {
                        shader: new m(f),
                        quad: new k.Quad(f)
                    }, this._glDatas[a.CONTEXT_UID] = b, b.quad.initVao(b.shader));
                    f = b.quad.vertices;
                    f[0] = f[6] = this._width * -this.anchor.x;
                    f[1] = f[3] = this._height * -this.anchor.y;
                    f[2] = f[4] = this._width * (1 - this.anchor.x);
                    f[5] = f[7] = this._height * (1 - this.anchor.y);
                    b.quad.upload();
                    a.bindShader(b.shader);
                    var h = d._uvs,
                        f = d._frame.width,
                        e = d._frame.height,
                        n = d.baseTexture.width,
                        d = d.baseTexture.height,
                        l = b.shader.uniforms.uPixelSize;
                    l[0] = 1 / n;
                    l[1] = 1 / d;
                    b.shader.uniforms.uPixelSize =
                        l;
                    l = b.shader.uniforms.uFrame;
                    l[0] = h.x0;
                    l[1] = h.y0;
                    l[2] = h.x1 - h.x0;
                    l[3] = h.y2 - h.y0;
                    b.shader.uniforms.uFrame = l;
                    h = b.shader.uniforms.uTransform;
                    h[0] = this.tilePosition.x % (f * this.tileScale.x) / this._width;
                    h[1] = this.tilePosition.y % (e * this.tileScale.y) / this._height;
                    h[2] = n / this._width * this.tileScale.x;
                    h[3] = d / this._height * this.tileScale.y;
                    b.shader.uniforms.uTransform = h;
                    b.shader.uniforms.translationMatrix = this.worldTransform.toArray(!0);
                    k.utils.hex2rgb(this.tint, q);
                    q[3] = this.worldAlpha;
                    b.shader.uniforms.uColor =
                        q;
                    a.bindTexture(this._texture, 0);
                    a.state.setBlendMode(this.blendMode);
                    b.quad.draw()
                }
            };
            a.prototype._renderCanvas = function(a) {
                var d = this._texture;
                if (d.baseTexture.hasLoaded) {
                    var f = a.context,
                        b = this.worldTransform,
                        e = a.resolution,
                        m = d.baseTexture,
                        n = this.tilePosition.x / this.tileScale.x % d._frame.width,
                        l = this.tilePosition.y / this.tileScale.y % d._frame.height;
                    if (!this._canvasPattern) {
                        var q = new k.CanvasRenderTarget(d._frame.width, d._frame.height);
                        16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint =
                            this.tint, this.tintedTexture = h.getTintedTexture(this, this.tint)), q.context.drawImage(this.tintedTexture, 0, 0)) : q.context.drawImage(m.source, -d._frame.x, -d._frame.y);
                        this._canvasPattern = q.context.createPattern(q.canvas, "repeat")
                    }
                    f.globalAlpha = this.worldAlpha;
                    f.setTransform(b.a * e, b.b * e, b.c * e, b.d * e, b.tx * e, b.ty * e);
                    f.scale(this.tileScale.x, this.tileScale.y);
                    f.translate(n + this.anchor.x * -this._width, l + this.anchor.y * -this._height);
                    d = a.blendModes[this.blendMode];
                    d !== a.context.globalCompositeOperation && (f.globalCompositeOperation =
                        d);
                    f.fillStyle = this._canvasPattern;
                    f.fillRect(-n, -l, this._width / this.tileScale.x, this._height / this.tileScale.y)
                }
            };
            a.prototype.getBounds = function() {
                var a, d, f, b, h = this._width;
                b = this._height;
                var e = h * (1 - this.anchor.x);
                a = h * -this.anchor.x;
                f = b * (1 - this.anchor.y);
                var m = b * -this.anchor.y;
                b = this.worldTransform;
                var k = b.a,
                    l = b.b,
                    q = b.c,
                    x = b.d,
                    F = b.tx,
                    G = b.ty;
                d = k * a + q * m + F;
                b = x * m + l * a + G;
                var h = k * e + q * m + F,
                    m = x * m + l * e + G,
                    E = k * e + q * f + F,
                    e = x * f + l * e + G,
                    k = k * a + q * f + F,
                    l = x * f + l * a + G;
                a = d;
                a = h < a ? h : a;
                a = E < a ? E : a;
                a = k < a ? k : a;
                f = b;
                f = m < f ? m : f;
                f = e < f ? e : f;
                f =
                    l < f ? l : f;
                d = h > d ? h : d;
                d = E > d ? E : d;
                b = m > b ? m : b;
                b = e > b ? e : b;
                h = this._bounds;
                return h.x = a, h.width = (k > d ? k : d) - a, h.y = f, h.height = (l > b ? l : b) - f, this._currentBounds = h, h
            };
            a.prototype.containsPoint = function(a) {
                this.worldTransform.applyInverse(a, f);
                var d;
                a = this._width;
                var b = this._height,
                    h = -a * this.anchor.x;
                return f.x > h && f.x < h + a && (d = -b * this.anchor.y, f.y > d && f.y < d + b)
            };
            a.prototype.destroy = function() {
                k.Sprite.prototype.destroy.call(this);
                this._uvs = this.tilePosition = this._tileScaleOffset = this.tileScale = null
            };
            a.from = function(f, b,
                h) {
                return new a(d.from(f), b, h)
            };
            a.fromFrame = function(d, f, b) {
                var h = k.utils.TextureCache[d];
                if (!h) throw Error('The frameId "' + d + '" does not exist in the texture cache ' + this);
                return new a(h, f, b)
            };
            a.fromImage = function(d, f, b, h, e) {
                return new a(k.Texture.fromImage(d, h, e), f, b)
            }
        }, {
            "../core": 62,
            "../core/sprites/canvas/CanvasTinter": 100,
            "../core/textures/Texture": 109,
            "./webgl/TilingShader": 130
        }],
        126: [function(b, e, l) {
                var a = b("../core");
                b = a.DisplayObject;
                var k = new a.Matrix;
                b.prototype._cacheAsBitmap = !1;
                b.prototype._cacheData = !1;
                var f = function() {
                    this.sprite = this.originalFilterArea = this.originalMask = this.originalDestroy = this.originalHitTest = this.originalUpdateTransform = this.originalGetLocalBounds = this.originalCalculateBounds = this.originalRenderCanvas = this.originalRenderWebGL = null
                };
                Object.defineProperties(b.prototype, {
                    cacheAsBitmap: {
                        get: function() {
                            return this._cacheAsBitmap
                        },
                        set: function(a) {
                            if (this._cacheAsBitmap !== a) {
                                this._cacheAsBitmap = a;
                                var d;
                                a ? (this._cacheData || (this._cacheData = new f), d = this._cacheData, d.originalRenderWebGL =
                                    this.renderWebGL, d.originalRenderCanvas = this.renderCanvas, d.originalUpdateTransform = this.updateTransform, d.originalCalculateBounds = this._calculateBounds, d.originalGetLocalBounds = this.getLocalBounds, d.originalDestroy = this.destroy, d.originalContainsPoint = this.containsPoint, d.originalMask = this._mask, d.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (d = this._cacheData, d.sprite && this._destroyCachedDisplayObject(),
                                    this.renderWebGL = d.originalRenderWebGL, this.renderCanvas = d.originalRenderCanvas, this._calculateBounds = d.originalCalculateBounds, this.getLocalBounds = d.originalGetLocalBounds, this.destroy = d.originalDestroy, this.updateTransform = d.originalUpdateTransform, this.containsPoint = d.originalContainsPoint, this._mask = d.originalMask, this.filterArea = d.originalFilterArea)
                            }
                        }
                    }
                });
                b.prototype._renderCachedWebGL = function(a) {
                    !this.visible || 0 >= this.worldAlpha || !this.renderable || (this._initCachedDisplayObject(a), this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(a))
                };
                b.prototype._initCachedDisplayObject = function(d) {
                    if (!this._cacheData || !this._cacheData.sprite) {
                        var f = this.alpha;
                        this.alpha = 1;
                        d.currentRenderer.flush();
                        var b = this.getLocalBounds().clone();
                        this._filters && b.pad(this._filters[0].padding);
                        var e = d._activeRenderTarget,
                            n = d.filterManager.filterStack,
                            l = a.RenderTexture.create(0 | b.width, 0 | b.height);
                        k.tx = -b.x;
                        k.ty = -b.y;
                        this.transform.worldTransform.identity();
                        this.renderWebGL =
                            this._cacheData.originalRenderWebGL;
                        d.render(this, l, !0, k, !0);
                        d.bindRenderTarget(e);
                        d.filterManager.filterStack = n;
                        this.renderWebGL = this._renderCachedWebGL;
                        this.updateTransform = this.displayObjectUpdateTransform;
                        this.filterArea = this._mask = null;
                        d = new a.Sprite(l);
                        d.transform.worldTransform = this.transform.worldTransform;
                        d.anchor.x = -(b.x / b.width);
                        d.anchor.y = -(b.y / b.height);
                        d.alpha = f;
                        d._bounds = this._bounds;
                        this._calculateBounds = this._calculateCachedBounds;
                        this.getLocalBounds = this._getCachedLocalBounds;
                        this._cacheData.sprite =
                            d;
                        this.transform._parentID = -1;
                        this.updateTransform();
                        this.containsPoint = d.containsPoint.bind(d)
                    }
                };
                b.prototype._renderCachedCanvas = function(a) {
                    !this.visible || 0 >= this.worldAlpha || !this.renderable || (this._initCachedDisplayObjectCanvas(a), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(a))
                };
                b.prototype._initCachedDisplayObjectCanvas = function(d) {
                    if (!this._cacheData || !this._cacheData.sprite) {
                        var f = this.getLocalBounds(),
                            b = this.alpha;
                        this.alpha = 1;
                        var e = d.context,
                            n = new a.RenderTexture.create(0 |
                                f.width, 0 | f.height);
                        this.transform.worldTransform.copy(k);
                        k.invert();
                        k.tx -= f.x;
                        k.ty -= f.y;
                        this.renderCanvas = this._cacheData.originalRenderCanvas;
                        d.render(this, n, !0, k, !1);
                        d.context = e;
                        this.renderCanvas = this._renderCachedCanvas;
                        this._calculateBounds = this._calculateCachedBounds;
                        this.filterArea = this._mask = null;
                        d = new a.Sprite(n);
                        d.transform.worldTransform = this.transform.worldTransform;
                        d.anchor.x = -(f.x / f.width);
                        d.anchor.y = -(f.y / f.height);
                        d._bounds = this._bounds;
                        d.alpha = b;
                        this.updateTransform();
                        this.updateTransform =
                            this.displayObjectUpdateTransform;
                        this._cacheData.sprite = d;
                        this.containsPoint = d.containsPoint.bind(d)
                    }
                };
                b.prototype._calculateCachedBounds = function() {
                    return this._cacheData.sprite._calculateBounds()
                };
                b.prototype._getCachedLocalBounds = function() {
                    return this._cacheData.sprite.getLocalBounds()
                };
                b.prototype._destroyCachedDisplayObject = function() {
                    this._cacheData.sprite._texture.destroy(!0);
                    this._cacheData.sprite = null
                };
                b.prototype._cacheAsBitmapDestroy = function() {
                    this.cacheAsBitmap = !1;
                    this.destroy()
                }
            },
            {
                "../core": 62
            }
        ],
        127: [function(b, e, l) {
            b = b("../core");
            b.DisplayObject.prototype.name = null;
            b.Container.prototype.getChildByName = function(a) {
                for (var b = 0; b < this.children.length; b++)
                    if (this.children[b].name === a) return this.children[b];
                return null
            }
        }, {
            "../core": 62
        }],
        128: [function(b, e, l) {
            var a = b("../core");
            a.DisplayObject.prototype.getGlobalPosition = function(b) {
                return b = b || new a.Point, this.parent ? (this.displayObjectUpdateTransform(), b.x = this.worldTransform.tx, b.y = this.worldTransform.ty) : (b.x = this.position.x,
                    b.y = this.position.y), b
            }
        }, {
            "../core": 62
        }],
        129: [function(b, e, l) {
            b("./cacheAsBitmap");
            b("./getChildByName");
            b("./getGlobalPosition");
            e.exports = {
                MovieClip: b("./MovieClip"),
                TilingSprite: b("./TilingSprite"),
                BitmapText: b("./BitmapText")
            }
        }, {
            "./BitmapText": 123,
            "./MovieClip": 124,
            "./TilingSprite": 125,
            "./cacheAsBitmap": 126,
            "./getChildByName": 127,
            "./getGlobalPosition": 128
        }],
        130: [function(b, e, l) {
            function a(a) {
                k.call(this, a, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\n\nuniform vec4 uFrame;\nuniform vec4 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vec2 coord = aTextureCoord;\n    coord -= uTransform.xy;\n    coord /= uTransform.zw;\n    vTextureCoord = coord;\n}\n",
                    "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uFrame;\nuniform vec2 uPixelSize;\n\nvoid main(void)\n{\n\n   \tvec2 coord = mod(vTextureCoord, uFrame.zw);\n   \tcoord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);\n   \tcoord += uFrame.xy;\n\n   \tvec4 sample = texture2D(uSampler, coord);\n  \tvec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n   \tgl_FragColor = sample * color ;\n}\n")
            }
            var k = b("../../core/Shader");
            a.prototype =
                Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../core/Shader": 42
        }],
        131: [function(b, e, l) {
            function a(a, b, e) {
                k.Filter.call(this);
                this.blurXFilter = new f;
                this.blurYFilter = new d;
                this.resolution = 1;
                this.padding = 0;
                this.resolution = e || 1;
                this.quality = b || 4;
                this.blur = a || 8
            }
            var k = b("../../core"),
                f = b("./BlurXFilter"),
                d = b("./BlurYFilter");
            a.prototype = Object.create(k.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.apply = function(a, d, f) {
                var b = a.getRenderTarget(!0);
                this.blurXFilter.apply(a,
                    d, b, !0);
                this.blurYFilter.apply(a, b, f, !1);
                a.returnRenderTarget(b)
            };
            Object.defineProperties(a.prototype, {
                blur: {
                    get: function() {
                        return this.blurXFilter.blur
                    },
                    set: function(a) {
                        this.blurXFilter.blur = this.blurYFilter.blur = a;
                        this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                    }
                },
                quality: {
                    get: function() {
                        return this.blurXFilter.quality
                    },
                    set: function(a) {
                        this.blurXFilter.quality = this.blurYFilter.quality = a
                    }
                },
                blurX: {
                    get: function() {
                        return this.blurXFilter.blur
                    },
                    set: function(a) {
                        this.blurXFilter.blur =
                            a;
                        this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                    }
                },
                blurY: {
                    get: function() {
                        return this.blurYFilter.blur
                    },
                    set: function(a) {
                        this.blurYFilter.blur = a;
                        this.padding = 2 * Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength))
                    }
                }
            })
        }, {
            "../../core": 62,
            "./BlurXFilter": 132,
            "./BlurYFilter": 133
        }],
        132: [function(b, e, l) {
            function a(a, b, h) {
                var e = f(5, !0),
                    m = d(5);
                k.Filter.call(this, e, m);
                this.resolution = h || 1;
                this._quality = 0;
                this.quality = b || 4;
                this.strength =
                    a || 8;
                this.firstRun = !0
            }
            var k = b("../../core"),
                f = b("./generateBlurVertSource"),
                d = b("./generateBlurFragSource"),
                h = b("./getMaxBlurKernelSize");
            a.prototype = Object.create(k.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.apply = function(a, b, e, k) {
                if (this.firstRun) {
                    var m = h(a.renderer.gl);
                    this.vertexSrc = f(m, !0);
                    this.fragmentSrc = d(m);
                    this.firstRun = !1
                }
                if (this.uniforms.strength = 1 / e.size.width * (e.size.width / b.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes,
                    1 === this.passes) a.applyFilter(this, b, e, k);
                else {
                    for (var n = m = a.getRenderTarget(!0), l = 0; l < this.passes - 1; l++) {
                        a.applyFilter(this, b, n, !0);
                        var q = n,
                            n = b;
                        b = q
                    }
                    a.applyFilter(this, b, e, k);
                    a.returnRenderTarget(m)
                }
            };
            Object.defineProperties(a.prototype, {
                blur: {
                    get: function() {
                        return this.strength
                    },
                    set: function(a) {
                        this.padding = 2 * Math.abs(a);
                        this.strength = a
                    }
                },
                quality: {
                    get: function() {
                        return this._quality
                    },
                    set: function(a) {
                        this.passes = this._quality = a
                    }
                }
            })
        }, {
            "../../core": 62,
            "./generateBlurFragSource": 134,
            "./generateBlurVertSource": 135,
            "./getMaxBlurKernelSize": 136
        }],
        133: [function(b, e, l) {
            function a(a, b, h) {
                var e = f(5, !1),
                    m = d(5);
                k.Filter.call(this, e, m);
                this.resolution = h || 1;
                this._quality = 0;
                this.quality = b || 4;
                this.strength = a || 8;
                this.firstRun = !0
            }
            var k = b("../../core"),
                f = b("./generateBlurVertSource"),
                d = b("./generateBlurFragSource"),
                h = b("./getMaxBlurKernelSize");
            a.prototype = Object.create(k.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.apply = function(a, b, e, k) {
                if (this.firstRun) {
                    var m = h(a.renderer.gl);
                    this.vertexSrc = f(m, !1);
                    this.fragmentSrc = d(m);
                    this.firstRun = !1
                }
                if (this.uniforms.strength = 1 / e.size.height * (e.size.height / b.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) a.applyFilter(this, b, e, k);
                else {
                    for (var n = m = a.getRenderTarget(!0), l = 0; l < this.passes - 1; l++) {
                        a.applyFilter(this, b, n, !0);
                        var q = n,
                            n = b;
                        b = q
                    }
                    a.applyFilter(this, b, e, k);
                    a.returnRenderTarget(m)
                }
            };
            Object.defineProperties(a.prototype, {
                blur: {
                    get: function() {
                        return this.strength
                    },
                    set: function(a) {
                        this.padding = 2 *
                            Math.abs(a);
                        this.strength = a
                    }
                },
                quality: {
                    get: function() {
                        return this._quality
                    },
                    set: function(a) {
                        this.passes = this._quality = a
                    }
                }
            })
        }, {
            "../../core": 62,
            "./generateBlurFragSource": 134,
            "./generateBlurVertSource": 135,
            "./getMaxBlurKernelSize": 136
        }],
        134: [function(b, e, l) {
            var a = {
                5: [.153388, .221461, .250301],
                7: [.071303, .131514, .189879, .214607],
                9: [.028532, .067234, .124009, .179044, .20236],
                11: [.0093, .028002, .065984, .121703, .175713, .198596],
                13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
                15: [4.89E-4, .002403,
                    .009246, .02784, .065602, .120999, .174697, .197448
                ]
            };
            e.exports = function(b) {
                for (var f, d = a[b], h = d.length, e = "varying vec2 vBlurTexCoords[%size%];\nuniform sampler2D uSampler;\nvoid main(void)\n{\n\tgl_FragColor = vec4(0.0);\n\t%blur%\n}", k = "", n = 0; n < b; n++) {
                    var l = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", n);
                    f = n;
                    n >= h && (f = b - n - 1);
                    l = l.replace("%value%", d[f]);
                    k += l;
                    k += "\n"
                }
                return e = e.replace("%blur%", k), e.replace("%size%", b)
            }
        }, {}],
        135: [function(b, e, l) {
            e.exports =
                function(a, b) {
                    var f, d = Math.ceil(a / 2),
                        h = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform float strength;\nuniform mat3 projectionMatrix;\nvarying vec2 vBlurTexCoords[%size%];\nvoid main(void)\n{\ngl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n%blur%\n}",
                        e = "";
                    f = b ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
                    for (var k = 0; k < a; k++) var n =
                        f.replace("%index%", k),
                        n = n.replace("%sampleIndex%", k - (d - 1) + ".0"),
                        e = e + n,
                        e = e + "\n";
                    return h = h.replace("%blur%", e), h.replace("%size%", a)
                }
        }, {}],
        136: [function(b, e, l) {
            e.exports = function(a) {
                a = a.getParameter(a.MAX_VARYING_VECTORS);
                for (var b = 15; b > a;) b -= 2;
                return b
            }
        }, {}],
        137: [function(b, e, l) {
            function a() {
                k.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                    "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n//    gl_FragColor = vec4(m[0]);\n}\n");
                this.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
            }
            var k = b("../../core");
            a.prototype = Object.create(k.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype._loadMatrix = function(a, d) {
                var f = a;
                d && (this._multiply(f, this.uniforms.m, a), f = this._colorMatrix(f));
                this.uniforms.m = f
            };
            a.prototype._multiply = function(a, d, b) {
                return a[0] = d[0] * b[0] + d[1] * b[5] + d[2] * b[10] + d[3] * b[15], a[1] = d[0] * b[1] + d[1] * b[6] + d[2] * b[11] + d[3] * b[16], a[2] = d[0] * b[2] + d[1] * b[7] + d[2] * b[12] + d[3] * b[17], a[3] = d[0] * b[3] + d[1] * b[8] +
                    d[2] * b[13] + d[3] * b[18], a[4] = d[0] * b[4] + d[1] * b[9] + d[2] * b[14] + d[3] * b[19], a[5] = d[5] * b[0] + d[6] * b[5] + d[7] * b[10] + d[8] * b[15], a[6] = d[5] * b[1] + d[6] * b[6] + d[7] * b[11] + d[8] * b[16], a[7] = d[5] * b[2] + d[6] * b[7] + d[7] * b[12] + d[8] * b[17], a[8] = d[5] * b[3] + d[6] * b[8] + d[7] * b[13] + d[8] * b[18], a[9] = d[5] * b[4] + d[6] * b[9] + d[7] * b[14] + d[8] * b[19], a[10] = d[10] * b[0] + d[11] * b[5] + d[12] * b[10] + d[13] * b[15], a[11] = d[10] * b[1] + d[11] * b[6] + d[12] * b[11] + d[13] * b[16], a[12] = d[10] * b[2] + d[11] * b[7] + d[12] * b[12] + d[13] * b[17], a[13] = d[10] * b[3] + d[11] * b[8] + d[12] * b[13] + d[13] *
                    b[18], a[14] = d[10] * b[4] + d[11] * b[9] + d[12] * b[14] + d[13] * b[19], a[15] = d[15] * b[0] + d[16] * b[5] + d[17] * b[10] + d[18] * b[15], a[16] = d[15] * b[1] + d[16] * b[6] + d[17] * b[11] + d[18] * b[16], a[17] = d[15] * b[2] + d[16] * b[7] + d[17] * b[12] + d[18] * b[17], a[18] = d[15] * b[3] + d[16] * b[8] + d[17] * b[13] + d[18] * b[18], a[19] = d[15] * b[4] + d[16] * b[9] + d[17] * b[14] + d[18] * b[19], a
            };
            a.prototype._colorMatrix = function(a) {
                a = new Float32Array(a);
                return a[4] /= 255, a[9] /= 255, a[14] /= 255, a[19] /= 255, a
            };
            a.prototype.brightness = function(a, d) {
                this._loadMatrix([a, 0, 0, 0, 0, 0, a,
                    0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 1, 0
                ], d)
            };
            a.prototype.greyscale = function(a, d) {
                this._loadMatrix([a, a, a, 0, 0, a, a, a, 0, 0, a, a, a, 0, 0, 0, 0, 0, 1, 0], d)
            };
            a.prototype.grayscale = a.prototype.greyscale;
            a.prototype.blackAndWhite = function(a) {
                this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], a)
            };
            a.prototype.hue = function(a, d) {
                a = (a || 0) / 180 * Math.PI;
                var f = Math.cos(a),
                    b = Math.sin(a),
                    e = Math.sqrt,
                    n = 1 / 3,
                    e = e(n);
                this._loadMatrix([f + (1 - f) * n, n * (1 - f) - e * b, n * (1 - f) + e * b, 0, 0, n * (1 - f) + e * b, f + n * (1 - f), n * (1 - f) - e * b, 0, 0, n * (1 - f) - e * b, n * (1 -
                    f) + e * b, f + n * (1 - f), 0, 0, 0, 0, 0, 1, 0], d)
            };
            a.prototype.contrast = function(a, d) {
                var f = (a || 0) + 1,
                    b = -128 * (f - 1);
                this._loadMatrix([f, 0, 0, 0, b, 0, f, 0, 0, b, 0, 0, f, 0, b, 0, 0, 0, 1, 0], d)
            };
            a.prototype.saturate = function(a, d) {
                var f = 2 * (a || 0) / 3 + 1,
                    b = -.5 * (f - 1);
                this._loadMatrix([f, b, b, 0, 0, b, f, b, 0, 0, b, b, f, 0, 0, 0, 0, 0, 1, 0], d)
            };
            a.prototype.desaturate = function() {
                this.saturate(-1)
            };
            a.prototype.negative = function(a) {
                this._loadMatrix([0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0], a)
            };
            a.prototype.sepia = function(a) {
                this._loadMatrix([.393, .7689999,
                    .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0
                ], a)
            };
            a.prototype.technicolor = function(a) {
                this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], a)
            };
            a.prototype.polaroid = function(a) {
                this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483,
                    0, 0, 0, 0, 0, 1, 0
                ], a)
            };
            a.prototype.toBGR = function(a) {
                this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], a)
            };
            a.prototype.kodachrome = function(a) {
                this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], a)
            };
            a.prototype.browni = function(a) {
                this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], a)
            };
            a.prototype.vintage = function(a) {
                this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], a)
            };
            a.prototype.colorTone = function(a, d, b, e, k) {
                b = b || 16770432;
                e = e || 3375104;
                var f = (b >> 16 & 255) / 255,
                    h = (b >> 8 & 255) / 255;
                b = (255 & b) / 255;
                var m = (e >> 16 & 255) / 255,
                    l = (e >> 8 & 255) / 255;
                e = (255 & e) / 255;
                this._loadMatrix([.3, .59, .11, 0, 0, f, h, b, a || .2, 0, m, l, e, d || .15, 0, f - m, h - l, b - e, 0, 0], k)
            };
            a.prototype.night = function(a, d) {
                a = a || .1;
                this._loadMatrix([-2 * a, -a, 0, 0, 0, -a, 0, a, 0, 0, 0, a, 2 * a, 0, 0, 0, 0, 0, 1, 0], d)
            };
            a.prototype.predator = function(a, d) {
                this._loadMatrix([11.224130630493164 * a, -4.794486999511719 * a, -2.8746118545532227 * a, 0 * a, .40342438220977783 *
                    a, -3.6330697536468506 * a, 9.193157196044922 * a, -2.951810836791992 * a, 0 * a, -1.316135048866272 * a, -3.2184197902679443 * a, -4.2375030517578125 * a, 7.476448059082031 * a, 0 * a, .8044459223747253 * a, 0, 0, 0, 1, 0
                ], d)
            };
            a.prototype.lsd = function(a) {
                this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], a)
            };
            a.prototype.reset = function() {
                this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
            };
            Object.defineProperties(a.prototype, {
                matrix: {
                    get: function() {
                        return this.uniforms.m
                    },
                    set: function(a) {
                        this.uniforms.m =
                            a
                    }
                }
            })
        }, {
            "../../core": 62
        }],
        138: [function(b, e, l) {
            function a(a, d) {
                var f = new k.Matrix;
                a.renderable = !1;
                k.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}",
                    "#define GLSLIFY 1\nvarying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n");
                this.maskSprite = a;
                this.maskMatrix = f;
                this.uniforms.mapSampler =
                    a.texture;
                this.uniforms.filterMatrix = f.toArray(!0);
                this.uniforms.scale = {
                    x: 1,
                    y: 1
                };
                null !== d && void 0 !== d || (d = 20);
                this.scale = new k.Point(d, d)
            }
            var k = b("../../core");
            a.prototype = Object.create(k.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.apply = function(a, d, b) {
                var f = 1 / b.destinationFrame.width * (b.size.width / d.size.width);
                this.uniforms.filterMatrix = a.calculateSpriteMatrix(this.maskMatrix, this.maskSprite);
                this.uniforms.scale.x = this.scale.x * f;
                this.uniforms.scale.y = this.scale.y * f;
                a.applyFilter(this,
                    d, b)
            };
            Object.defineProperties(a.prototype, {
                map: {
                    get: function() {
                        return this.uniforms.mapSampler
                    },
                    set: function(a) {
                        this.uniforms.mapSampler = a
                    }
                }
            })
        }, {
            "../../core": 62
        }],
        139: [function(b, e, l) {
            function a() {
                k.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}",
                    '#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n  \tvec2 fragCoord = vTextureCoord * filterArea.xy;\n\n  \tvec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n  \tgl_FragColor = color;\n}\n')
            }
            var k = b("../../core");
            a.prototype = Object.create(k.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../core": 62
        }],
        140: [function(b, e, l) {
            e.exports = {
                FXAAFilter: b("./fxaa/FXAAFilter"),
                NoiseFilter: b("./noise/NoiseFilter"),
                DisplacementFilter: b("./displacement/DisplacementFilter"),
                BlurFilter: b("./blur/BlurFilter"),
                BlurXFilter: b("./blur/BlurXFilter"),
                BlurYFilter: b("./blur/BlurYFilter"),
                ColorMatrixFilter: b("./colormatrix/ColorMatrixFilter"),
                VoidFilter: b("./void/VoidFilter")
            }
        }, {
            "./blur/BlurFilter": 131,
            "./blur/BlurXFilter": 132,
            "./blur/BlurYFilter": 133,
            "./colormatrix/ColorMatrixFilter": 137,
            "./displacement/DisplacementFilter": 138,
            "./fxaa/FXAAFilter": 139,
            "./noise/NoiseFilter": 141,
            "./void/VoidFilter": 142
        }],
        141: [function(b, e, l) {
            function a() {
                k.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                    "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n");
                this.noise = .5
            }
            var k =
                b("../../core");
            a.prototype = Object.create(k.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                noise: {
                    get: function() {
                        return this.uniforms.noise
                    },
                    set: function(a) {
                        this.uniforms.noise = a
                    }
                }
            })
        }, {
            "../../core": 62
        }],
        142: [function(b, e, l) {
            function a() {
                k.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                    "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n");
                this.glShaderKey = "void"
            }
            var k = b("../../core");
            a.prototype = Object.create(k.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../core": 62
        }],
        143: [function(b, e, l) {
            function a() {
                this.global = new k.Point;
                this.originalEvent = this.target = null
            }
            var k = b("../core");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.getLocalPosition = function(a,
                d, b) {
                return a.worldTransform.applyInverse(b || this.global, d)
            }
        }, {
            "../core": 62
        }],
        144: [function(b, e, l) {
            function a(a, b) {
                d.call(this);
                b = b || {};
                this.renderer = a;
                this.autoPreventDefault = void 0 === b.autoPreventDefault || b.autoPreventDefault;
                this.interactionFrequency = b.interactionFrequency || 10;
                this.mouse = new f;
                this.mouse.global.set(-999999);
                this.eventData = {
                    stopped: !1,
                    target: null,
                    type: null,
                    data: this.mouse,
                    stopPropagation: function() {
                        this.stopped = !0
                    }
                };
                this.interactiveDataPool = [];
                this.interactionDOMElement = null;
                this.eventsAdded =
                    this.moveWhenInside = !1;
                this.onMouseUp = this.onMouseUp.bind(this);
                this.processMouseUp = this.processMouseUp.bind(this);
                this.onMouseDown = this.onMouseDown.bind(this);
                this.processMouseDown = this.processMouseDown.bind(this);
                this.onMouseMove = this.onMouseMove.bind(this);
                this.processMouseMove = this.processMouseMove.bind(this);
                this.onMouseOut = this.onMouseOut.bind(this);
                this.processMouseOverOut = this.processMouseOverOut.bind(this);
                this.onMouseOver = this.onMouseOver.bind(this);
                this.onTouchStart = this.onTouchStart.bind(this);
                this.processTouchStart = this.processTouchStart.bind(this);
                this.onTouchEnd = this.onTouchEnd.bind(this);
                this.processTouchEnd = this.processTouchEnd.bind(this);
                this.onTouchMove = this.onTouchMove.bind(this);
                this.processTouchMove = this.processTouchMove.bind(this);
                this.currentCursorStyle = this.defaultCursorStyle = "inherit";
                this._tempPoint = new k.Point;
                this.resolution = 1;
                this.setTargetElement(this.renderer.view, this.renderer.resolution)
            }
            var k = b("../core"),
                f = b("./InteractionData"),
                d = b("eventemitter3");
            Object.assign(k.DisplayObject.prototype,
                b("./interactiveTarget"));
            a.prototype = Object.create(d.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.setTargetElement = function(a, d) {
                this.removeEvents();
                this.interactionDOMElement = a;
                this.resolution = d || 1;
                this.addEvents()
            };
            a.prototype.addEvents = function() {
                this.interactionDOMElement && (k.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none"), window.document.addEventListener("mousemove",
                    this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onMouseOver, !0), this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup",
                    this.onMouseUp, !0), this.eventsAdded = !0)
            };
            a.prototype.removeEvents = function() {
                this.interactionDOMElement && (k.ticker.shared.remove(this.update), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = ""), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout",
                    this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onMouseOver, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !1)
            };
            a.prototype.update = function(a) {
                if (this._deltaTime +=
                    a, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
                    if (this.didMove) return void(this.didMove = !1);
                    this.cursor = this.defaultCursorStyle;
                    this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0);
                    this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
                }
            };
            a.prototype.dispatchEvent = function(a, d, f) {
                f.stopped || (f.target = a, f.type = d, a.emit(d, f), a[d] &&
                    a[d](f))
            };
            a.prototype.mapPositionToPoint = function(a, d, f) {
                var b;
                b = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                a.x = this.interactionDOMElement.width / b.width * (d - b.left) / this.resolution;
                a.y = this.interactionDOMElement.height / b.height * (f - b.top) / this.resolution
            };
            a.prototype.processInteractive = function(a, d, f, b, e) {
                if (!d || !d.visible) return !1;
                var h = !1,
                    m = e = d.interactive || e;
                if (d.hitArea && (m = !1), b && d._mask && (d._mask.containsPoint(a) || (b = !1)), b && d.filterArea && (d.filterArea.contains(a.x, a.y) || (b = !1)), d.interactiveChildren)
                    for (var n = d.children, k = n.length - 1; 0 <= k; k--) {
                        var l = n[k];
                        this.processInteractive(a, l, f, b, m) && l.parent && (h = !0, b = m = !1)
                    }
                return e && (b && !h && (d.hitArea ? (d.worldTransform.applyInverse(a, this._tempPoint), h = d.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : d.containsPoint && (h = d.containsPoint(a))), d.interactive && f(d, h)), h
            };
            a.prototype.onMouseDown = function(a) {
                this.mouse.originalEvent = a;
                this.eventData.data = this.mouse;
                this.eventData.stopped = !1;
                this.mapPositionToPoint(this.mouse.global, a.clientX, a.clientY);
                this.autoPreventDefault && this.mouse.originalEvent.preventDefault();
                this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0);
                this.emit(2 === a.button || 3 === a.which ? "rightdown" : "mousedown", this.eventData)
            };
            a.prototype.processMouseDown = function(a, d) {
                var f = this.mouse.originalEvent,
                    f = 2 === f.button || 3 === f.which;
                d && (a[f ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(a, f ? "rightdown" : "mousedown",
                    this.eventData))
            };
            a.prototype.onMouseUp = function(a) {
                this.mouse.originalEvent = a;
                this.eventData.data = this.mouse;
                this.eventData.stopped = !1;
                this.mapPositionToPoint(this.mouse.global, a.clientX, a.clientY);
                this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0);
                this.emit(2 === a.button || 3 === a.which ? "rightup" : "mouseup", this.eventData)
            };
            a.prototype.processMouseUp = function(a, d) {
                var f = this.mouse.originalEvent,
                    b = (f = 2 === f.button || 3 === f.which) ? "_isRightDown" : "_isLeftDown";
                d ? (this.dispatchEvent(a, f ? "rightup" : "mouseup", this.eventData), a[b] && (a[b] = !1, this.dispatchEvent(a, f ? "rightclick" : "click", this.eventData))) : a[b] && (a[b] = !1, this.dispatchEvent(a, f ? "rightupoutside" : "mouseupoutside", this.eventData))
            };
            a.prototype.onMouseMove = function(a) {
                this.mouse.originalEvent = a;
                this.eventData.data = this.mouse;
                this.eventData.stopped = !1;
                this.mapPositionToPoint(this.mouse.global, a.clientX, a.clientY);
                this.didMove = !0;
                this.cursor = this.defaultCursorStyle;
                this.processInteractive(this.mouse.global,
                    this.renderer._lastObjectRendered, this.processMouseMove, !0);
                this.emit("mousemove", this.eventData);
                this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
            };
            a.prototype.processMouseMove = function(a, d) {
                this.processMouseOverOut(a, d);
                this.moveWhenInside && !d || this.dispatchEvent(a, "mousemove", this.eventData)
            };
            a.prototype.onMouseOut = function(a) {
                this.mouse.originalEvent = a;
                this.eventData.data = this.mouse;
                this.eventData.stopped = !1;
                this.mapPositionToPoint(this.mouse.global,
                    a.clientX, a.clientY);
                this.interactionDOMElement.style.cursor = this.defaultCursorStyle;
                this.mapPositionToPoint(this.mouse.global, a.clientX, a.clientY);
                this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1);
                this.emit("mouseout", this.eventData)
            };
            a.prototype.processMouseOverOut = function(a, d) {
                d ? (a._over || (a._over = !0, this.dispatchEvent(a, "mouseover", this.eventData)), a.buttonMode && (this.cursor = a.defaultCursor)) : a._over && (a._over = !1, this.dispatchEvent(a, "mouseout",
                    this.eventData))
            };
            a.prototype.onMouseOver = function(a) {
                this.mouse.originalEvent = a;
                this.eventData.data = this.mouse;
                this.eventData.stopped = !1;
                this.emit("mouseover", this.eventData)
            };
            a.prototype.onTouchStart = function(a) {
                this.autoPreventDefault && a.preventDefault();
                for (var d = a.changedTouches, f = d.length, b = 0; b < f; b++) {
                    var h = this.getTouchData(d[b]);
                    h.originalEvent = a;
                    this.eventData.data = h;
                    this.eventData.stopped = !1;
                    this.processInteractive(h.global, this.renderer._lastObjectRendered, this.processTouchStart, !0);
                    this.emit("touchstart",
                        this.eventData);
                    this.returnTouchData(h)
                }
            };
            a.prototype.processTouchStart = function(a, d) {
                d && (a._touchDown = !0, this.dispatchEvent(a, "touchstart", this.eventData))
            };
            a.prototype.onTouchEnd = function(a) {
                this.autoPreventDefault && a.preventDefault();
                for (var d = a.changedTouches, f = d.length, b = 0; b < f; b++) {
                    var e = this.getTouchData(d[b]);
                    e.originalEvent = a;
                    this.eventData.data = e;
                    this.eventData.stopped = !1;
                    this.processInteractive(e.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0);
                    this.emit("touchend", this.eventData);
                    this.returnTouchData(e)
                }
            };
            a.prototype.processTouchEnd = function(a, d) {
                d ? (this.dispatchEvent(a, "touchend", this.eventData), a._touchDown && (a._touchDown = !1, this.dispatchEvent(a, "tap", this.eventData))) : a._touchDown && (a._touchDown = !1, this.dispatchEvent(a, "touchendoutside", this.eventData))
            };
            a.prototype.onTouchMove = function(a) {
                this.autoPreventDefault && a.preventDefault();
                for (var d = a.changedTouches, f = d.length, b = 0; b < f; b++) {
                    var e = this.getTouchData(d[b]);
                    e.originalEvent = a;
                    this.eventData.data = e;
                    this.eventData.stopped = !1;
                    this.processInteractive(e.global, this.renderer._lastObjectRendered, this.processTouchMove, this.moveWhenInside);
                    this.emit("touchmove", this.eventData);
                    this.returnTouchData(e)
                }
            };
            a.prototype.processTouchMove = function(a, d) {
                this.moveWhenInside && !d || this.dispatchEvent(a, "touchmove", this.eventData)
            };
            a.prototype.getTouchData = function(a) {
                var d = this.interactiveDataPool.pop();
                return d || (d = new f), d.identifier = a.identifier, this.mapPositionToPoint(d.global, a.clientX, a.clientY), navigator.isCocoonJS && (d.global.x /=
                    this.resolution, d.global.y /= this.resolution), a.globalX = d.global.x, a.globalY = d.global.y, d
            };
            a.prototype.returnTouchData = function(a) {
                this.interactiveDataPool.push(a)
            };
            a.prototype.destroy = function() {
                this.removeEvents();
                this.removeAllListeners();
                this._tempPoint = this.processTouchMove = this.onTouchMove = this.processTouchEnd = this.onTouchEnd = this.processTouchStart = this.onTouchStart = this.onMouseOver = this.processMouseOverOut = this.onMouseOut = this.processMouseMove = this.onMouseMove = this.processMouseDown = this.onMouseDown =
                    this.processMouseUp = this.onMouseUp = this.interactionDOMElement = this.interactiveDataPool = this.eventData = this.mouse = this.renderer = null
            };
            k.WebGLRenderer.registerPlugin("interaction", a);
            k.CanvasRenderer.registerPlugin("interaction", a)
        }, {
            "../core": 62,
            "./InteractionData": 143,
            "./interactiveTarget": 146,
            eventemitter3: 3
        }],
        145: [function(b, e, l) {
            e.exports = {
                InteractionData: b("./InteractionData"),
                InteractionManager: b("./InteractionManager"),
                interactiveTarget: b("./interactiveTarget")
            }
        }, {
            "./InteractionData": 143,
            "./InteractionManager": 144,
            "./interactiveTarget": 146
        }],
        146: [function(b, e, l) {
            e.exports = {
                interactive: !1,
                interactiveChildren: !0,
                hitArea: null,
                buttonMode: !1,
                defaultCursor: "pointer",
                _over: !1,
                _isLeftDown: !1,
                _isRightDown: !1,
                _touchDown: !1
            }
        }, {}],
        147: [function(b, e, l) {
            function a(a, b) {
                var e = {},
                    h = a.data.getElementsByTagName("info")[0],
                    m = a.data.getElementsByTagName("common")[0];
                e.font = h.getAttribute("face");
                e.size = parseInt(h.getAttribute("size"), 10);
                e.lineHeight = parseInt(m.getAttribute("lineHeight"), 10);
                e.chars = {};
                m = a.data.getElementsByTagName("char");
                for (h = 0; h < m.length; h++) {
                    var k = parseInt(m[h].getAttribute("id"), 10),
                        l = new f.Rectangle(parseInt(m[h].getAttribute("x"), 10) + b.frame.x, parseInt(m[h].getAttribute("y"), 10) + b.frame.y, parseInt(m[h].getAttribute("width"), 10), parseInt(m[h].getAttribute("height"), 10));
                    e.chars[k] = {
                        xOffset: parseInt(m[h].getAttribute("xoffset"), 10),
                        yOffset: parseInt(m[h].getAttribute("yoffset"), 10),
                        xAdvance: parseInt(m[h].getAttribute("xadvance"), 10),
                        kerning: {},
                        texture: new f.Texture(b.baseTexture, l)
                    }
                }
                m = a.data.getElementsByTagName("kerning");
                for (h = 0; h < m.length; h++) {
                    var k = parseInt(m[h].getAttribute("first"), 10),
                        l = parseInt(m[h].getAttribute("second"), 10),
                        q = parseInt(m[h].getAttribute("amount"), 10);
                    e.chars[l] && (e.chars[l].kerning[k] = q)
                }
                a.bitmapFont = e;
                d.BitmapText.fonts[e.font] = e
            }
            var k = b("resource-loader").Resource,
                f = b("../core"),
                d = b("../extras"),
                h = b("path");
            e.exports = function() {
                return function(d, b) {
                    if (!d.data || !d.isXml || 0 === d.data.getElementsByTagName("page").length || 0 === d.data.getElementsByTagName("info").length || null === d.data.getElementsByTagName("info")[0].getAttribute("face")) return b();
                    var e = d.isDataUrl ? "" : h.dirname(d.url);
                    d.isDataUrl && ("." === e && (e = ""), this.baseUrl && e && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (e += "/"), e = e.replace(this.baseUrl, "")));
                    e && "/" !== e.charAt(e.length - 1) && (e += "/");
                    e += d.data.getElementsByTagName("page")[0].getAttribute("file");
                    f.utils.TextureCache[e] ? (a(d, f.utils.TextureCache[e]), b()) : this.add(d.name + "_image", e, {
                        crossOrigin: d.crossOrigin,
                        loadType: k.LOAD_TYPE.IMAGE,
                        metadata: d.metadata.imageMetadata
                    }, function(f) {
                        a(d, f.texture);
                        b()
                    })
                }
            }
        }, {
            "../core": 62,
            "../extras": 129,
            path: 22,
            "resource-loader": 36
        }],
        148: [function(b, e, l) {
            e.exports = {
                Loader: b("./loader"),
                bitmapFontParser: b("./bitmapFontParser"),
                spritesheetParser: b("./spritesheetParser"),
                textureParser: b("./textureParser"),
                Resource: b("resource-loader").Resource
            }
        }, {
            "./bitmapFontParser": 147,
            "./loader": 149,
            "./spritesheetParser": 150,
            "./textureParser": 151,
            "resource-loader": 36
        }],
        149: [function(b, e, l) {
            function a(d, f) {
                k.call(this, d, f);
                for (var b = 0; b < a._pixiMiddleware.length; ++b) this.use(a._pixiMiddleware[b]())
            }
            var k = b("resource-loader");
            l = b("./textureParser");
            var f = b("./spritesheetParser");
            b = b("./bitmapFontParser");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a._pixiMiddleware = [k.middleware.parsing.blob, l, f, b];
            a.addPixiMiddleware = function(d) {
                a._pixiMiddleware.push(d)
            };
            e = k.Resource;
            e.setExtensionXhrType("fnt", e.XHR_RESPONSE_TYPE.DOCUMENT)
        }, {
            "./bitmapFontParser": 147,
            "./spritesheetParser": 150,
            "./textureParser": 151,
            "resource-loader": 36
        }],
        150: [function(b, e, l) {
            var a = b("resource-loader").Resource,
                k = b("path"),
                f = b("../core");
            e.exports = function() {
                return function(d, b) {
                    var e, h = d.name + "_image";
                    if (!d.data || !d.isJson || !d.data.frames || this.resources[h]) return b();
                    var n = {
                        crossOrigin: d.crossOrigin,
                        loadType: a.LOAD_TYPE.IMAGE,
                        metadata: d.metadata.imageMetadata
                    };
                    e = d.isDataUrl ? d.data.meta.image : k.dirname(d.url.replace(this.baseUrl, "")) + "/" + d.data.meta.image;
                    this.add(h, e, n, function(a) {
                        function e(b, e) {
                            for (var h = b; h - b < e && h < n.length;) {
                                var l = n[h],
                                    q = m[l].frame;
                                if (q) {
                                    var r = null,
                                        t = new f.Rectangle(0, 0, m[l].sourceSize.w /
                                            k, m[l].sourceSize.h / k),
                                        q = m[l].rotated ? new f.Rectangle(q.x / k, q.y / k, q.h / k, q.w / k) : new f.Rectangle(q.x / k, q.y / k, q.w / k, q.h / k);
                                    m[l].trimmed && (r = new f.Rectangle(m[l].spriteSourceSize.x / k, m[l].spriteSourceSize.y / k, m[l].spriteSourceSize.w / k, m[l].spriteSourceSize.h / k));
                                    d.textures[l] = new f.Texture(a.texture.baseTexture, q, t, r, m[l].rotated ? 2 : 0);
                                    f.utils.TextureCache[l] = d.textures[l]
                                }
                                h++
                            }
                        }

                        function h() {
                            e(1E3 * l, 1E3);
                            l++;
                            setTimeout(function() {
                                1E3 * l < n.length ? h() : b()
                            }, 0)
                        }
                        d.textures = {};
                        var m = d.data.frames,
                            n = Object.keys(m),
                            k = f.utils.getResolutionOfUrl(d.url),
                            l = 0;
                        1E3 >= n.length ? (e(0, 1E3), b()) : h()
                    })
                }
            }
        }, {
            "../core": 62,
            path: 22,
            "resource-loader": 36
        }],
        151: [function(b, e, l) {
            var a = b("../core");
            e.exports = function() {
                return function(b, f) {
                    if (b.data && b.isImage) {
                        var d = new a.BaseTexture(b.data, null, a.utils.getResolutionOfUrl(b.url));
                        d.imageUrl = b.url;
                        b.texture = new a.Texture(d);
                        a.utils.BaseTextureCache[b.url] = d;
                        a.utils.TextureCache[b.url] = b.texture
                    }
                    f()
                }
            }
        }, {
            "../core": 62
        }],
        152: [function(b, e, l) {
            function a(d, f, b, e, h) {
                k.Container.call(this);
                this._texture = null;
                this.uvs = b || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
                this.vertices = f || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]);
                this.indices = e || new Uint16Array([0, 1, 3, 2]);
                this.indexDirty = this.dirty = 0;
                this.blendMode = k.BLEND_MODES.NORMAL;
                this.canvasPadding = 0;
                this.drawMode = h || a.DRAW_MODES.TRIANGLE_MESH;
                this.texture = d;
                this.shader = null;
                this.tintRgb = new Float32Array([1, 1, 1]);
                this._glDatas = []
            }
            var k = b("../core"),
                f = b("pixi-gl-core"),
                d = b("./webgl/MeshShader"),
                h = new k.Point,
                m = new k.Polygon;
            a.prototype = Object.create(k.Container.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                texture: {
                    get: function() {
                        return this._texture
                    },
                    set: function(a) {
                        this._texture !== a && (this._texture = a, a && (a.baseTexture.hasLoaded ? this._onTextureUpdate() : a.once("update", this._onTextureUpdate, this)))
                    }
                },
                tint: {
                    get: function() {
                        return k.utils.rgb2hex(this.tintRgb)
                    },
                    set: function(a) {
                        this.tintRgb = k.utils.hex2rgb(a, this.tintRgb)
                    }
                }
            });
            a.prototype._renderWebGL = function(b) {
                b.flush();
                var e = b.gl,
                    h = this._glDatas[b.CONTEXT_UID];
                h || (h = {
                        shader: new d(e),
                        vertexBuffer: f.GLBuffer.createVertexBuffer(e, this.vertices, e.STREAM_DRAW),
                        uvBuffer: f.GLBuffer.createVertexBuffer(e, this.uvs, e.STREAM_DRAW),
                        indexBuffer: f.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW),
                        vao: new f.VertexArrayObject(e),
                        dirty: this.dirty,
                        indexDirty: this.indexDirty
                    }, h.vao = (new f.VertexArrayObject(e)).addIndex(h.indexBuffer).addAttribute(h.vertexBuffer, h.shader.attributes.aVertexPosition, e.FLOAT, !1, 8, 0).addAttribute(h.uvBuffer, h.shader.attributes.aTextureCoord, e.FLOAT, !1, 8, 0), this._glDatas[b.CONTEXT_UID] =
                    h);
                this.dirty !== h.dirty && (h.dirty = this.dirty, h.uvBuffer.upload());
                this.indexDirty !== h.indexDirty && (h.indexDirty = this.indexDirty, h.indexBuffer.upload());
                h.vertexBuffer.upload();
                b.bindShader(h.shader);
                b.bindTexture(this._texture, 0);
                b.state.setBlendMode(this.blendMode);
                h.shader.uniforms.translationMatrix = this.worldTransform.toArray(!0);
                h.shader.uniforms.alpha = this.worldAlpha;
                h.shader.uniforms.tint = this.tintRgb;
                b = this.drawMode === a.DRAW_MODES.TRIANGLE_MESH ? e.TRIANGLE_STRIP : e.TRIANGLES;
                h.vao.bind().draw(b,
                    this.indices.length).unbind()
            };
            a.prototype._renderCanvas = function(d) {
                var f = d.context,
                    b = this.worldTransform,
                    e = d.resolution;
                d.roundPixels ? f.setTransform(b.a * e, b.b * e, b.c * e, b.d * e, b.tx * e | 0, b.ty * e | 0) : f.setTransform(b.a * e, b.b * e, b.c * e, b.d * e, b.tx * e, b.ty * e);
                this.drawMode === a.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(f) : this._renderCanvasTriangles(f)
            };
            a.prototype._renderCanvasTriangleMesh = function(a) {
                for (var d = this.vertices, f = this.uvs, b = d.length / 2, e = 0; e < b - 2; e++) {
                    var h = 2 * e;
                    this._renderCanvasDrawTriangle(a,
                        d, f, h, h + 2, h + 4)
                }
            };
            a.prototype._renderCanvasTriangles = function(a) {
                for (var d = this.vertices, f = this.uvs, b = this.indices, e = b.length, h = 0; h < e; h += 3) this._renderCanvasDrawTriangle(a, d, f, 2 * b[h], 2 * b[h + 1], 2 * b[h + 2])
            };
            a.prototype._renderCanvasDrawTriangle = function(a, d, f, b, e, h) {
                var m = this._texture.baseTexture,
                    k = m.source,
                    n = m.width,
                    l = m.height,
                    q = d[b],
                    r = d[e],
                    t = d[h],
                    u = d[b + 1],
                    w = d[e + 1];
                d = d[h + 1];
                var C = f[b] * m.width,
                    H = f[e] * m.width,
                    D = f[h] * m.width;
                b = f[b + 1] * m.height;
                e = f[e + 1] * m.height;
                f = f[h + 1] * m.height;
                if (0 < this.canvasPadding) {
                    h =
                        this.canvasPadding / this.worldTransform.a;
                    var J = this.canvasPadding / this.worldTransform.d,
                        I = (q + r + t) / 3,
                        L = (u + w + d) / 3,
                        M = q - I,
                        N = u - L,
                        O = Math.sqrt(M * M + N * N),
                        q = I + M / O * (O + h),
                        u = L + N / O * (O + J),
                        M = r - I,
                        N = w - L,
                        O = Math.sqrt(M * M + N * N),
                        r = I + M / O * (O + h),
                        w = L + N / O * (O + J),
                        M = t - I,
                        N = d - L,
                        O = Math.sqrt(M * M + N * N),
                        t = I + M / O * (O + h);
                    d = L + N / O * (O + J)
                }
                a.save();
                a.beginPath();
                a.moveTo(q, u);
                a.lineTo(r, w);
                a.lineTo(t, d);
                a.closePath();
                a.clip();
                h = C * e + b * D + H * f - e * D - b * H - C * f;
                a.transform((q * e + b * t + r * f - e * t - b * r - q * f) / h, (u * e + b * d + w * f - e * d - b * w - u * f) / h, (C * r + q * D + H * t - r * D - q * H - C * t) /
                    h, (C * w + u * D + H * d - w * D - u * H - C * d) / h, (C * e * t + b * r * D + q * H * f - q * e * D - b * H * t - C * r * f) / h, (C * e * d + b * w * D + u * H * f - u * e * D - b * H * d - C * w * f) / h);
                a.drawImage(k, 0, 0, n * m.resolution, l * m.resolution, 0, 0, n, l);
                a.restore()
            };
            a.prototype.renderMeshFlat = function(a) {
                var d = this.context;
                a = a.vertices;
                var f = a.length / 2;
                d.beginPath();
                for (var b = 1; b < f - 2; b++) {
                    var e = 2 * b,
                        h = a[e + 2],
                        m = a[e + 4],
                        k = a[e + 3],
                        l = a[e + 5];
                    d.moveTo(a[e], a[e + 1]);
                    d.lineTo(h, k);
                    d.lineTo(m, l)
                }
                d.fillStyle = "#FF0000";
                d.fill();
                d.closePath()
            };
            a.prototype._onTextureUpdate = function() {};
            a.prototype._calculateBounds =
                function() {
                    this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length)
                };
            a.prototype.containsPoint = function(d) {
                if (!this.getBounds().contains(d.x, d.y)) return !1;
                this.worldTransform.applyInverse(d, h);
                d = this.vertices;
                for (var f = m.points, b = this.indices, e = this.indices.length, k = this.drawMode === a.DRAW_MODES.TRIANGLES ? 3 : 1, l = 0; l + 2 < e; l += k) {
                    var q = 2 * b[l],
                        y = 2 * b[l + 1],
                        A = 2 * b[l + 2];
                    if (f[0] = d[q], f[1] = d[q + 1], f[2] = d[y], f[3] = d[y + 1], f[4] = d[A], f[5] = d[A + 1], m.contains(h.x, h.y)) return !0
                }
                return !1
            };
            a.DRAW_MODES = {
                TRIANGLE_MESH: 0,
                TRIANGLES: 1
            }
        }, {
            "../core": 62,
            "./webgl/MeshShader": 157,
            "pixi-gl-core": 12
        }],
        153: [function(b, e, l) {
            function a(a, b, e, l, n) {
                f.call(this, a, 4, 4);
                var d = this.uvs;
                d[6] = d[14] = d[22] = d[30] = 1;
                d[25] = d[27] = d[29] = d[31] = 1;
                this._origWidth = a.width;
                this._origHeight = a.height;
                this._uvw = 1 / this._origWidth;
                this._uvh = 1 / this._origHeight;
                this.width = a.width;
                this.height = a.height;
                d[2] = d[10] = d[18] = d[26] = this._uvw * b;
                d[4] = d[12] = d[20] = d[28] = 1 - this._uvw * l;
                d[9] = d[11] = d[13] = d[15] = this._uvh * e;
                d[17] = d[19] = d[21] = d[23] = 1 - this._uvh *
                    n;
                this.leftWidth = "undefined" != typeof b ? b : k;
                this.rightWidth = "undefined" != typeof l ? l : k;
                this.topHeight = "undefined" != typeof e ? e : k;
                this.bottomHeight = "undefined" != typeof n ? n : k
            }
            var k = 10,
                f = b("./Plane");
            a.prototype = Object.create(f.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                width: {
                    get: function() {
                        return this._width
                    },
                    set: function(a) {
                        this._width = a;
                        this.updateVerticalVertices()
                    }
                },
                height: {
                    get: function() {
                        return this._height
                    },
                    set: function(a) {
                        this._height = a;
                        this.updateHorizontalVertices()
                    }
                },
                leftWidth: {
                    get: function() {
                        return this._leftWidth
                    },
                    set: function(a) {
                        this._leftWidth = a;
                        var d = this.uvs,
                            f = this.vertices;
                        d[2] = d[10] = d[18] = d[26] = this._uvw * a;
                        f[2] = f[10] = f[18] = f[26] = a;
                        this.dirty = !0
                    }
                },
                rightWidth: {
                    get: function() {
                        return this._rightWidth
                    },
                    set: function(a) {
                        this._rightWidth = a;
                        var d = this.uvs,
                            f = this.vertices;
                        d[4] = d[12] = d[20] = d[28] = 1 - this._uvw * a;
                        f[4] = f[12] = f[20] = f[28] = this._width - a;
                        this.dirty = !0
                    }
                },
                topHeight: {
                    get: function() {
                        return this._topHeight
                    },
                    set: function(a) {
                        this._topHeight = a;
                        var d = this.uvs,
                            f = this.vertices;
                        d[9] = d[11] = d[13] = d[15] = this._uvh * a;
                        f[9] = f[11] = f[13] = f[15] = a;
                        this.dirty = !0
                    }
                },
                bottomHeight: {
                    get: function() {
                        return this._bottomHeight
                    },
                    set: function(a) {
                        this._bottomHeight = a;
                        var d = this.uvs,
                            f = this.vertices;
                        d[17] = d[19] = d[21] = d[23] = 1 - this._uvh * a;
                        f[17] = f[19] = f[21] = f[23] = this._height - a;
                        this.dirty = !0
                    }
                }
            });
            a.prototype.updateHorizontalVertices = function() {
                var a = this.vertices;
                a[9] = a[11] = a[13] = a[15] = this._topHeight;
                a[17] = a[19] = a[21] = a[23] = this._height - this._bottomHeight;
                a[25] = a[27] = a[29] = a[31] = this._height
            };
            a.prototype.updateVerticalVertices =
                function() {
                    var a = this.vertices;
                    a[2] = a[10] = a[18] = a[26] = this._leftWidth;
                    a[4] = a[12] = a[20] = a[28] = this._width - this._rightWidth;
                    a[6] = a[14] = a[22] = a[30] = this._width
                };
            a.prototype._renderCanvas = function(a) {
                var d = a.context;
                d.globalAlpha = this.worldAlpha;
                var f = this.worldTransform,
                    b = a.resolution;
                a.roundPixels ? d.setTransform(f.a * b, f.b * b, f.c * b, f.d * b, f.tx * b | 0, f.ty * b | 0) : d.setTransform(f.a * b, f.b * b, f.c * b, f.d * b, f.tx * b, f.ty * b);
                b = this._texture.baseTexture;
                a = b.source;
                f = b.width;
                b = b.height;
                this.drawSegment(d, a, f, b, 0, 1, 10,
                    11);
                this.drawSegment(d, a, f, b, 2, 3, 12, 13);
                this.drawSegment(d, a, f, b, 4, 5, 14, 15);
                this.drawSegment(d, a, f, b, 8, 9, 18, 19);
                this.drawSegment(d, a, f, b, 10, 11, 20, 21);
                this.drawSegment(d, a, f, b, 12, 13, 22, 23);
                this.drawSegment(d, a, f, b, 16, 17, 26, 27);
                this.drawSegment(d, a, f, b, 18, 19, 28, 29);
                this.drawSegment(d, a, f, b, 20, 21, 30, 31)
            };
            a.prototype.drawSegment = function(a, f, b, e, k, l, t, w) {
                var d = this.uvs,
                    h = this.vertices,
                    m = (d[t] - d[k]) * b,
                    n = (d[w] - d[l]) * e;
                t = h[t] - h[k];
                w = h[w] - h[l];
                1 > m && (m = 1);
                1 > n && (n = 1);
                1 > t && (t = 1);
                1 > w && (w = 1);
                a.drawImage(f, d[k] *
                    b, d[l] * e, m, n, h[k], h[l], t, w)
            }
        }, {
            "./Plane": 154
        }],
        154: [function(b, e, l) {
            function a(a, d, b) {
                k.call(this, a);
                this._ready = !0;
                this.verticesX = d || 10;
                this.verticesY = b || 10;
                this.drawMode = k.DRAW_MODES.TRIANGLES;
                this.refresh()
            }
            var k = b("./Mesh");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.refresh = function() {
                var a = this.verticesX * this.verticesY,
                    d = [],
                    b = [],
                    e = [],
                    k = this.texture,
                    n = this.verticesX - 1,
                    l = this.verticesY - 1,
                    t, w = k.width / n,
                    u = k.height / l;
                for (t = 0; t < a; t++) {
                    var v = t % this.verticesX,
                        y = t / this.verticesX | 0;
                    d.push(v * w, y * u);
                    b.push(k._uvs.x0 + v / (this.verticesX - 1) * (k._uvs.x1 - k._uvs.x0), k._uvs.y0 + y / (this.verticesY - 1) * (k._uvs.y3 - k._uvs.y0))
                }
                a = n * l;
                for (t = 0; t < a; t++) k = t % n, l = t / n | 0, w = l * this.verticesX + k + 1, u = (l + 1) * this.verticesX + k, v = (l + 1) * this.verticesX + k + 1, e.push(l * this.verticesX + k, w, u), e.push(w, v, u);
                this.vertices = new Float32Array(d);
                this.uvs = new Float32Array(b);
                this.colors = new Float32Array([]);
                this.indices = new Uint16Array(e);
                this.indexDirty = !0
            };
            a.prototype._onTextureUpdate = function() {
                k.prototype._onTextureUpdate.call(this);
                this._ready && this.refresh()
            }
        }, {
            "./Mesh": 152
        }],
        155: [function(b, e, l) {
            function a(a, f) {
                k.call(this, a);
                this.points = f;
                this.vertices = new Float32Array(4 * f.length);
                this.uvs = new Float32Array(4 * f.length);
                this.colors = new Float32Array(2 * f.length);
                this.indices = new Uint16Array(2 * f.length);
                this._ready = !0;
                this.refresh()
            }
            var k = b("./Mesh"),
                f = b("../core");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.refresh = function() {
                var a = this.points;
                if (!(1 > a.length) && this._texture._uvs) {
                    var b =
                        this.uvs,
                        e = this.indices,
                        k = this.colors,
                        n = this._texture._uvs,
                        l = new f.Point(n.x0, n.y0),
                        n = new f.Point(n.x2 - n.x0, n.y2 - n.y0);
                    b[0] = 0 + l.x;
                    b[1] = 0 + l.y;
                    b[2] = 0 + l.x;
                    b[3] = 1 * n.y + l.y;
                    k[0] = 1;
                    k[1] = 1;
                    e[0] = 0;
                    e[1] = 1;
                    for (var t, w = a.length, u = 1; u < w; u++) a = 4 * u, t = u / (w - 1), b[a] = t * n.x + l.x, b[a + 1] = 0 + l.y, b[a + 2] = t * n.x + l.x, b[a + 3] = 1 * n.y + l.y, a = 2 * u, k[a] = 1, k[a + 1] = 1, a = 2 * u, e[a] = a, e[a + 1] = a + 1;
                    this.indexDirty = this.dirty = !0
                }
            };
            a.prototype._onTextureUpdate = function() {
                k.prototype._onTextureUpdate.call(this);
                this._ready && this.refresh()
            };
            a.prototype.updateTransform =
                function() {
                    var a = this.points;
                    if (!(1 > a.length)) {
                        var f, b, e, k, l;
                        k = a[0];
                        for (var t, w = this.vertices, u = a.length, v = 0; v < u; v++) b = a[v], e = 4 * v, f = v < a.length - 1 ? a[v + 1] : b, t = -(f.x - k.x), f = f.y - k.y, k = 10 * (1 - v / (u - 1)), k = Math.sqrt(f * f + t * t), l = this._texture.height / 2, f /= k, t /= k, f *= l, t *= l, w[e] = b.x + f, w[e + 1] = b.y + t, w[e + 2] = b.x - f, w[e + 3] = b.y - t, k = b;
                        this.containerUpdateTransform()
                    }
                }
        }, {
            "../core": 62,
            "./Mesh": 152
        }],
        156: [function(b, e, l) {
                e.exports = {
                    Mesh: b("./Mesh"),
                    Plane: b("./Plane"),
                    NineSlicePlane: b("./NineSlicePlane"),
                    Rope: b("./Rope"),
                    MeshShader: b("./webgl/MeshShader")
                }
            },
            {
                "./Mesh": 152,
                "./NineSlicePlane": 153,
                "./Plane": 154,
                "./Rope": 155,
                "./webgl/MeshShader": 157
            }
        ],
        157: [function(b, e, l) {
            function a(a) {
                k.call(this, a, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nvarying vec2 vTextureCoord;\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform float alpha;\nuniform vec3 tint;\nuniform sampler2D uSampler;\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);\n}")
            }
            var k = b("../../core/Shader");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../core/Shader": 42
        }],
        158: [function(b, e, l) {
            function a(a, d, b) {
                k.Container.call(this);
                b = b || 15E3;
                a = a || 15E3;
                16384 < b && (b = 16384);
                b > a && (b = a);
                this._properties = [!1, !0, !1, !1, !1];
                this._maxSize = a;
                this._batchSize = b;
                this._glBuffers = [];
                this._bufferToUpdate = 0;
                this.interactiveChildren = !1;
                this.blendMode = k.BLEND_MODES.NORMAL;
                this.roundPixels = !0;
                this.baseTexture = null;
                this.setProperties(d)
            }
            var k = b("../core");
            a.prototype = Object.create(k.Container.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.setProperties = function(a) {
                a && (this._properties[0] = "scale" in a ? !!a.scale : this._properties[0], this._properties[1] = "position" in a ? !!a.position : this._properties[1], this._properties[2] = "rotation" in a ? !!a.rotation : this._properties[2], this._properties[3] = "uvs" in a ? !!a.uvs : this._properties[3], this._properties[4] = "alpha" in a ? !!a.alpha : this._properties[4])
            };
            a.prototype.updateTransform = function() {
                this.displayObjectUpdateTransform()
            };
            a.prototype.renderWebGL = function(a) {
                this.visible && !(0 >= this.worldAlpha) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", function() {
                    this.onChildrenChange(0)
                }, this)), a.setObjectRenderer(a.plugins.particle), a.plugins.particle.render(this))
            };
            a.prototype.onChildrenChange = function(a) {
                a = Math.floor(a / this._batchSize);
                a < this._bufferToUpdate && (this._bufferToUpdate = a)
            };
            a.prototype.renderCanvas =
                function(a) {
                    if (this.visible && !(0 >= this.worldAlpha) && this.children.length && this.renderable) {
                        var d = a.context,
                            f = this.worldTransform,
                            b = !0,
                            e, k, l, t, w = a.blendModes[this.blendMode];
                        w !== d.globalCompositeOperation && (d.globalCompositeOperation = w);
                        d.globalAlpha = this.worldAlpha;
                        this.displayObjectUpdateTransform();
                        for (w = 0; w < this.children.length; ++w) {
                            var u = this.children[w];
                            if (u.visible) {
                                var v = u.texture.frame;
                                (d.globalAlpha = this.worldAlpha * u.alpha, 0 === u.rotation % (2 * Math.PI)) ? (b && (d.setTransform(f.a, f.b, f.c, f.d, f.tx *
                                    a.resolution, f.ty * a.resolution), b = !1), e = u.anchor.x * -v.width * u.scale.x + u.position.x + .5, k = u.anchor.y * -v.height * u.scale.y + u.position.y + .5, l = v.width * u.scale.x, t = v.height * u.scale.y) : (b || (b = !0), u.displayObjectUpdateTransform(), e = u.worldTransform, a.roundPixels ? d.setTransform(e.a, e.b, e.c, e.d, e.tx * a.resolution | 0, e.ty * a.resolution | 0) : d.setTransform(e.a, e.b, e.c, e.d, e.tx * a.resolution, e.ty * a.resolution), e = u.anchor.x * -v.width + .5, k = u.anchor.y * -v.height + .5, l = v.width, t = v.height);
                                var y = u.texture.baseTexture.resolution;
                                d.drawImage(u.texture.baseTexture.source, v.x * y, v.y * y, v.width * y, v.height * y, e * y, k * y, l * y, t * y)
                            }
                        }
                    }
                };
            a.prototype.destroy = function() {
                if (k.Container.prototype.destroy.apply(this, arguments), this._buffers)
                    for (var a = 0; a < this._buffers.length; ++a) this._buffers[a].destroy();
                this._buffers = this._properties = null
            }
        }, {
            "../core": 62
        }],
        159: [function(b, e, l) {
            e.exports = {
                ParticleContainer: b("./ParticleContainer"),
                ParticleRenderer: b("./webgl/ParticleRenderer")
            }
        }, {
            "./ParticleContainer": 158,
            "./webgl/ParticleRenderer": 161
        }],
        160: [function(b,
            e, l) {
            function a(a, f, b, e) {
                this.gl = a;
                this.vertSize = 2;
                this.vertByteSize = 4 * this.vertSize;
                this.size = e;
                this.dynamicProperties = [];
                this.staticProperties = [];
                for (a = 0; a < f.length; a++) e = f[a], e = {
                    attribute: e.attribute,
                    size: e.size,
                    uploadFunction: e.uploadFunction,
                    offset: e.offset
                }, b[a] ? this.dynamicProperties.push(e) : this.staticProperties.push(e);
                this.staticStride = 0;
                this.staticData = this.staticBuffer = null;
                this.dynamicStride = 0;
                this.dynamicData = this.dynamicBuffer = null;
                this.initBuffers()
            }
            var k = b("pixi-gl-core"),
                f = b("../../core/utils/createIndicesForQuads");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.initBuffers = function() {
                var a, b, e = this.gl,
                    l = 0;
                this.indices = f(this.size);
                this.indexBuffer = k.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW);
                for (a = this.dynamicStride = 0; a < this.dynamicProperties.length; a++) b = this.dynamicProperties[a], b.offset = l, l += b.size, this.dynamicStride += b.size;
                this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4);
                this.dynamicBuffer = k.GLBuffer.createVertexBuffer(e, this.dynamicData, e.STREAM_DRAW);
                for (a = this.staticStride =
                    l = 0; a < this.staticProperties.length; a++) b = this.staticProperties[a], b.offset = l, l += b.size, this.staticStride += b.size;
                this.staticData = new Float32Array(this.size * this.staticStride * 4);
                this.staticBuffer = k.GLBuffer.createVertexBuffer(e, this.staticData, e.STATIC_DRAW);
                this.vao = (new k.VertexArrayObject(e)).addIndex(this.indexBuffer);
                for (a = 0; a < this.dynamicProperties.length; a++) b = this.dynamicProperties[a], this.vao.addAttribute(this.dynamicBuffer, b.attribute, e.FLOAT, !1, 4 * this.dynamicStride, 4 * b.offset);
                for (a = 0; a <
                    this.staticProperties.length; a++) b = this.staticProperties[a], this.vao.addAttribute(this.staticBuffer, b.attribute, e.FLOAT, !1, 4 * this.staticStride, 4 * b.offset)
            };
            a.prototype.uploadDynamic = function(a, f, b) {
                for (var d = 0; d < this.dynamicProperties.length; d++) {
                    var e = this.dynamicProperties[d];
                    e.uploadFunction(a, f, b, this.dynamicData, this.dynamicStride, e.offset)
                }
                this.dynamicBuffer.upload()
            };
            a.prototype.uploadStatic = function(a, f, b) {
                for (var d = 0; d < this.staticProperties.length; d++) {
                    var e = this.staticProperties[d];
                    e.uploadFunction(a,
                        f, b, this.staticData, this.staticStride, e.offset)
                }
                this.staticBuffer.upload()
            };
            a.prototype.bind = function() {
                this.vao.bind()
            };
            a.prototype.destroy = function() {
                this.dynamicData = this.dynamicProperties = null;
                this.dynamicBuffer.destroy();
                this.staticData = this.staticProperties = null;
                this.staticBuffer.destroy()
            }
        }, {
            "../../core/utils/createIndicesForQuads": 114,
            "pixi-gl-core": 12
        }],
        161: [function(b, e, l) {
            function a(a) {
                k.ObjectRenderer.call(this, a);
                this.properties = this.indexBuffer = this.shader = null;
                this.tempMatrix = new k.Matrix;
                this.CONTEXT_UID = 0
            }
            var k = b("../../core"),
                f = b("./ParticleShader"),
                d = b("./ParticleBuffer");
            a.prototype = Object.create(k.ObjectRenderer.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            k.WebGLRenderer.registerPlugin("particle", a);
            a.prototype.onContextChange = function() {
                var a = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID;
                this.shader = new f(a);
                this.properties = [{
                    attribute: this.shader.attributes.aVertexPosition,
                    size: 2,
                    uploadFunction: this.uploadVertices,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aPositionCoord,
                    size: 2,
                    uploadFunction: this.uploadPosition,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aRotation,
                    size: 1,
                    uploadFunction: this.uploadRotation,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aTextureCoord,
                    size: 2,
                    uploadFunction: this.uploadUvs,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aColor,
                    size: 1,
                    uploadFunction: this.uploadAlpha,
                    offset: 0
                }]
            };
            a.prototype.start = function() {
                this.renderer.bindShader(this.shader)
            };
            a.prototype.render = function(a) {
                var d = a.children,
                    f = d.length,
                    b = a._maxSize,
                    e = a._batchSize;
                if (0 !== f) {
                    f >
                        b && (f = b);
                    (b = a._glBuffers[this.renderer.CONTEXT_UID]) || (b = a._glBuffers[this.renderer.CONTEXT_UID] = this.generateBuffers(a));
                    this.renderer.setBlendMode(a.blendMode);
                    var h = this.renderer.gl,
                        k = a.worldTransform.copy(this.tempMatrix);
                    k.prepend(this.renderer._activeRenderTarget.projectionMatrix);
                    this.shader.uniforms.projectionMatrix = k.toArray(!0);
                    this.shader.uniforms.uAlpha = a.worldAlpha;
                    this.renderer.bindTexture(d[0]._texture.baseTexture);
                    for (var l = k = 0; k < f; k += e, l += 1) {
                        var v = f - k;
                        v > e && (v = e);
                        var y = b[l];
                        y.uploadDynamic(d,
                            k, v);
                        a._bufferToUpdate === l && (y.uploadStatic(d, k, v), a._bufferToUpdate = l + 1);
                        y.vao.bind().draw(h.TRIANGLES, 6 * v).unbind()
                    }
                }
            };
            a.prototype.generateBuffers = function(a) {
                var f = this.renderer.gl,
                    b = [],
                    e = a._maxSize,
                    h = a._batchSize,
                    k = a._properties;
                for (a = 0; a < e; a += h) b.push(new d(f, this.properties, k, h));
                return b
            };
            a.prototype.uploadVertices = function(a, d, f, b, e, k) {
                for (var h, m, n, l, q, r, t, x, F, G = 0; G < f; G++) h = a[d + G], m = h._texture, l = h.scale.x, q = h.scale.y, n = m.trim, m = m.orig, n ? (t = n.x - h.anchor.x * m.width, r = t + n.width, F = n.y - h.anchor.y *
                    m.height, x = F + n.height) : (r = m.width * (1 - h.anchor.x), t = m.width * -h.anchor.x, x = m.height * (1 - h.anchor.y), F = m.height * -h.anchor.y), b[k] = t * l, b[k + 1] = F * q, b[k + e] = r * l, b[k + e + 1] = F * q, b[k + 2 * e] = r * l, b[k + 2 * e + 1] = x * q, b[k + 3 * e] = t * l, b[k + 3 * e + 1] = x * q, k += 4 * e
            };
            a.prototype.uploadPosition = function(a, d, f, b, e, k) {
                for (var h = 0; h < f; h++) {
                    var m = a[d + h].position;
                    b[k] = m.x;
                    b[k + 1] = m.y;
                    b[k + e] = m.x;
                    b[k + e + 1] = m.y;
                    b[k + 2 * e] = m.x;
                    b[k + 2 * e + 1] = m.y;
                    b[k + 3 * e] = m.x;
                    b[k + 3 * e + 1] = m.y;
                    k += 4 * e
                }
            };
            a.prototype.uploadRotation = function(a, d, f, b, e, k) {
                for (var h = 0; h < f; h++) {
                    var m =
                        a[d + h].rotation;
                    b[k] = m;
                    b[k + e] = m;
                    b[k + 2 * e] = m;
                    b[k + 3 * e] = m;
                    k += 4 * e
                }
            };
            a.prototype.uploadUvs = function(a, d, f, b, e, k) {
                for (var h = 0; h < f; h++) {
                    var m = a[d + h]._texture._uvs;
                    m ? (b[k] = m.x0, b[k + 1] = m.y0, b[k + e] = m.x1, b[k + e + 1] = m.y1, b[k + 2 * e] = m.x2, b[k + 2 * e + 1] = m.y2, b[k + 3 * e] = m.x3, b[k + 3 * e + 1] = m.y3, k += 4 * e) : (b[k] = 0, b[k + 1] = 0, b[k + e] = 0, b[k + e + 1] = 0, b[k + 2 * e] = 0, b[k + 2 * e + 1] = 0, b[k + 3 * e] = 0, b[k + 3 * e + 1] = 0, k += 4 * e)
                }
            };
            a.prototype.uploadAlpha = function(a, d, f, b, e, k) {
                for (var h = 0; h < f; h++) {
                    var m = a[d + h].alpha;
                    b[k] = m;
                    b[k + e] = m;
                    b[k + 2 * e] = m;
                    b[k + 3 * e] = m;
                    k += 4 * e
                }
            };
            a.prototype.destroy = function() {
                this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer);
                k.ObjectRenderer.prototype.destroy.apply(this, arguments);
                this.shader.destroy();
                this.tempMatrix = this.indices = null
            }
        }, {
            "../../core": 62,
            "./ParticleBuffer": 160,
            "./ParticleShader": 162
        }],
        162: [function(b, e, l) {
            function a(a) {
                k.call(this, a, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float aColor;\nattribute vec2 aPositionCoord;\nattribute vec2 aScale;\nattribute float aRotation;\nuniform mat3 projectionMatrix;\nvarying vec2 vTextureCoord;\nvarying float vColor;\nvoid main(void){\n   vec2 v = aVertexPosition;\n   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n   v = v + aPositionCoord;\n   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = aColor;\n}",
                    "varying vec2 vTextureCoord;\nvarying float vColor;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvoid main(void){\n  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;\n  if (color.a == 0.0) discard;\n  gl_FragColor = color;\n}")
            }
            var k = b("../../core/Shader");
            a.prototype = Object.create(k.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../core/Shader": 42
        }],
        163: [function(b, e, l) {
            Math.sign || (Math.sign = function(a) {
                return a = +a, 0 === a || isNaN(a) ? a : 0 < a ? 1 : -1
            })
        }, {}],
        164: [function(b,
            e, l) {
            Object.assign || (Object.assign = b("object-assign"))
        }, {
            "object-assign": 5
        }],
        165: [function(b, e, l) {
            b("./Object.assign");
            b("./requestAnimationFrame");
            b("./Math.sign");
            window.ArrayBuffer || (window.ArrayBuffer = Array);
            window.Float32Array || (window.Float32Array = Array);
            window.Uint32Array || (window.Uint32Array = Array);
            window.Uint16Array || (window.Uint16Array = Array)
        }, {
            "./Math.sign": 163,
            "./Object.assign": 164,
            "./requestAnimationFrame": 166
        }],
        166: [function(b, e, l) {
            (function(a) {
                if (Date.now && Date.prototype.getTime || (Date.now =
                        function() {
                            return (new Date).getTime()
                        }), !a.performance || !a.performance.now) {
                    var b = Date.now();
                    a.performance || (a.performance = {});
                    a.performance.now = function() {
                        return Date.now() - b
                    }
                }
                for (var f = Date.now(), d = ["ms", "moz", "webkit", "o"], e = 0; e < d.length && !a.requestAnimationFrame; ++e) a.requestAnimationFrame = a[d[e] + "RequestAnimationFrame"], a.cancelAnimationFrame = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
                a.requestAnimationFrame || (a.requestAnimationFrame = function(a) {
                    if ("function" != typeof a) throw new TypeError(a +
                        "is not a function");
                    var d = Date.now(),
                        b = 16 + f - d;
                    return 0 > b && (b = 0), f = d, setTimeout(function() {
                        f = Date.now();
                        a(performance.now())
                    }, b)
                });
                a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
                    clearTimeout(a)
                })
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        167: [function(b, e, l) {
            function a() {}
            b = b("../../core");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.upload = function(a, f) {
                "function" == typeof a && (f = a);
                f()
            };
            a.prototype.register =
                function() {
                    return this
                };
            a.prototype.add = function() {
                return this
            };
            a.prototype.destroy = function() {};
            b.CanvasRenderer.registerPlugin("prepare", a)
        }, {
            "../../core": 62
        }],
        168: [function(b, e, l) {
            e.exports = {
                webGL: b("./webgl/WebGLPrepare"),
                canvas: b("./canvas/CanvasPrepare")
            }
        }, {
            "./canvas/CanvasPrepare": 167,
            "./webgl/WebGLPrepare": 169
        }],
        169: [function(b, e, l) {
            function a(a) {
                this.renderer = a;
                this.queue = [];
                this.addHooks = [];
                this.uploadHooks = [];
                this.completes = [];
                this.ticking = !1;
                this.register(d, k).register(h, f)
            }

            function k(a,
                d) {
                return d instanceof m.BaseTexture && (a.textureManager.updateTexture(d), !0)
            }

            function f(a, d) {
                return d instanceof m.Graphics && (a.plugins.graphics.updateGraphics(d), !0)
            }

            function d(a, d) {
                if (a instanceof m.BaseTexture) return -1 === d.indexOf(a) && d.push(a), !0;
                if (a._texture && a._texture instanceof m.Texture) {
                    var f = a._texture.baseTexture;
                    return -1 === d.indexOf(f) && d.push(f), !0
                }
                return !1
            }

            function h(a, d) {
                return a instanceof m.Graphics && (d.push(a), !0)
            }
            var m = b("../../core"),
                q = m.ticker.shared;
            a.UPLOADS_PER_FRAME = 4;
            a.prototype.constructor =
                a;
            e.exports = a;
            a.prototype.upload = function(d, f) {
                "function" == typeof d && (f = d, d = null);
                d && this.add(d);
                this.queue.length ? (this.numLeft = a.UPLOADS_PER_FRAME, this.completes.push(f), this.ticking || (this.ticking = !0, q.add(this.tick, this))) : f()
            };
            a.prototype.tick = function() {
                for (var d, f; this.queue.length && 0 < this.numLeft;) {
                    var b = this.queue[0],
                        e = !1;
                    d = 0;
                    for (f = this.uploadHooks.length; d < f; d++)
                        if (this.uploadHooks[d](this.renderer, b)) {
                            this.numLeft--;
                            this.queue.shift();
                            e = !0;
                            break
                        }
                    e || this.queue.shift()
                }
                if (this.queue.length) this.numLeft =
                    a.UPLOADS_PER_FRAME;
                else
                    for (this.ticking = !1, q.remove(this.tick, this), b = this.completes.slice(0), d = this.completes.length = 0, f = b.length; d < f; d++) b[d]()
            };
            a.prototype.register = function(a, d) {
                return a && this.addHooks.push(a), d && this.uploadHooks.push(d), this
            };
            a.prototype.add = function(a) {
                var d, f;
                d = 0;
                for (f = this.addHooks.length; d < f && !this.addHooks[d](a, this.queue); d++);
                if (a instanceof m.Container)
                    for (d = a.children.length - 1; 0 <= d; d--) this.add(a.children[d]);
                return this
            };
            a.prototype.destroy = function() {
                this.ticking &&
                    q.remove(this.tick, this);
                this.ticking = !1;
                this.queue = this.completes = this.renderer = this.uploadHooks = this.addHooks = null
            };
            m.WebGLRenderer.registerPlugin("prepare", a)
        }, {
            "../../core": 62
        }],
        170: [function(b, e, l) {
            l = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
            b("./polyfill");
            e = e.exports = b("./core");
            e.extras = b("./extras");
            e.filters = b("./filters");
            e.interaction = b("./interaction");
            e.loaders = b("./loaders");
            e.mesh = b("./mesh");
            e.particles = b("./particles");
            e.accessibility =
                b("./accessibility");
            e.extract = b("./extract");
            e.prepare = b("./prepare");
            e.loader = new e.loaders.Loader;
            Object.assign(e, b("./deprecation"));
            l.PIXI = e
        }, {
            "./accessibility": 41,
            "./core": 62,
            "./deprecation": 119,
            "./extract": 121,
            "./extras": 129,
            "./filters": 140,
            "./interaction": 145,
            "./loaders": 148,
            "./mesh": 156,
            "./particles": 159,
            "./polyfill": 165,
            "./prepare": 168
        }]
    }, {}, [170])(170)
});
! function(p) {
! function(p) {
    function b(n) {
        if (z = w(b), !(a + m > n)) {
            l += n - a;
            a = n;
            v(n, l);
            n > f + 1E3 && (k = .25 * d + .75 * k, f = n, d = 0);
            d++;
            for (h = 0; l >= e;)
                if (y(e), l -= e, 240 <= ++h) {
                    r = !0;
                    break
                }
            A(l / e);
            B(k, r);
            r = !1
        }
    }
    var e = 1E3 / 30,
        l = 0,
        a = 50,
        k = 30,
        f = 0,
        d = 0,
        h = 0,
        m = 0,
        q = !1,
        n = !1,
        r = !1,
        t = "object" == typeof window ? window : p,
        w = t.requestAnimationFrame || function() {
            var a = Date.now(),
                d, b;
            return function(f) {
                return d = Date.now(), b = Math.max(0, e - (d - a)), a = d + b, setTimeout(function() {
                    f(d + b)
                }, b)
            }
        }(),
        u = t.cancelAnimationFrame || clearTimeout,
        v = t = function() {},
        y = t,
        A = t,
        B = t,
        z;
    p.MainLoop = {
        getSimulationTimestep: function() {
            return e
        },
        setSimulationTimestep: function(a) {
            return e = a, this
        },
        getFPS: function() {
            return k
        },
        getMaxAllowedFPS: function() {
            return 1E3 / m
        },
        setMaxAllowedFPS: function(a) {
            // 1000 / 50 == 20 FPS (initial value, if `a` is not given)
            return "undefined" == typeof a && (a = 50), 0 === a ? this.stop() : m = 1E3 / a, this
        },
        resetFrameDelta: function() {
            var a = l;
            return l = 0, a
        },
        setBegin: function(a) {
            return v = a || v, this
        },
        setUpdate: function(a) {
            return y = a || y, this
        },
        setDraw: function(a) {
            return A = a || A, this
        },
        setEnd: function(a) {
            return B = a || B, this
        },
        start: function() {
            return n ||
                (n = !0, z = w(function(e) {
                    A(1);
                    q = !0;
                    f = a = e;
                    d = 0;
                    z = w(b)
                })), this
        },
        stop: function() {
            return q = !1, n = !1, u(z), this
        },
        isRunning: function() {
            return q
        }
    };
    "function" == typeof define && define.amd ? define(p.MainLoop) : "object" == typeof module && null !== module && "object" == typeof module.exports && (module.exports = p.MainLoop)
}(this);
var THREEx = THREEx || {};
THREEx.KeyboardState = function(p) {
    this.domElement = p || document;
    this.keyCodes = {};
    this.modifiers = {};
    var b = this;
    this._onKeyDown = function(e) {
        b._onKeyChange(e)
    };
    this._onKeyUp = function(e) {
        b._onKeyChange(e)
    };
    this.domElement.addEventListener("keydown", this._onKeyDown, !1);
    this.domElement.addEventListener("keyup", this._onKeyUp, !1);
    this._onBlur = function() {
        for (var e in b.keyCodes) b.keyCodes[e] = !1;
        for (e in b.modifiers) b.modifiers[e] = !1
    };
    window.addEventListener("blur", this._onBlur, !1);
    window.onkeypress = function(b) {
        37 !=
            b.keyCode && 38 != b.keyCode && 39 != b.keyCode && 40 != b.keyCode && (keyboard.characterStack[keyboard.characterStack.length] = 13 != b.keyCode ? String.fromCharCode(b.keyCode || b.charCode) : b.keyCode)
    };
    window.onkeydown = function(b) {
        8 == b.keyCode && (keyboard.characterStack[keyboard.characterStack.length] = b.keyCode, b.preventDefault())
    };
    window.onkeyup = function() {}
};
THREEx.KeyboardState.prototype.destroy = function() {
    this.domElement.removeEventListener("keydown", this._onKeyDown, !1);
    this.domElement.removeEventListener("keyup", this._onKeyUp, !1);
    window.removeEventListener("blur", this._onBlur, !1)
};
THREEx.KeyboardState.MODIFIERS = ["shift", "ctrl", "alt", "meta"];
THREEx.KeyboardState.ALIAS = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    space: 32,
    pageup: 33,
    pagedown: 34,
    tab: 9,
    escape: 27,
    enter: 13
};
THREEx.KeyboardState.prototype._onKeyChange = function(p) {
    this.keyCodes[p.keyCode] = "keydown" === p.type ? !0 : !1;
    this.modifiers.shift = p.shiftKey;
    this.modifiers.ctrl = p.ctrlKey;
    this.modifiers.alt = p.altKey;
    this.modifiers.meta = p.metaKey
};
THREEx.KeyboardState.prototype.pressed = function(p) {
    p = p.split("+");
    for (var b = 0; b < p.length; b++) {
        var e = p[b];
        if (!(-1 !== THREEx.KeyboardState.MODIFIERS.indexOf(e) ? this.modifiers[e] : -1 != Object.keys(THREEx.KeyboardState.ALIAS).indexOf(e) ? this.keyCodes[THREEx.KeyboardState.ALIAS[e]] : this.keyCodes[e.toUpperCase().charCodeAt(0)])) return !1
    }
    return !0
};
THREEx.KeyboardState.prototype.eventMatches = function(p, b) {
    for (var e = THREEx.KeyboardState.ALIAS, l = Object.keys(e), a = b.split("+"), k = 0; k < a.length; k++) {
        var f = a[k],
            d = !1;
        "shift" === f ? d = p.shiftKey ? !0 : !1 : "ctrl" === f ? d = p.ctrlKey ? !0 : !1 : "alt" === f ? d = p.altKey ? !0 : !1 : "meta" === f ? d = p.metaKey ? !0 : !1 : -1 !== l.indexOf(f) ? d = p.keyCode === e[f] ? !0 : !1 : p.keyCode === f.toUpperCase().charCodeAt(0) && (d = !0);
        if (!d) return !1
    }
    return !0
};
(function(p, b) {
    "object" === typeof exports && "object" === typeof module ? module.exports = b() : "function" === typeof define && define.amd ? define([], b) : "object" === typeof exports ? exports.dat = b() : p.dat = b()
})(this, function() {
    return function(p) {
        function b(l) {
            if (e[l]) return e[l].exports;
            var a = e[l] = {
                exports: {},
                id: l,
                loaded: !1
            };
            p[l].call(a.exports, a, a.exports, b);
            a.loaded = !0;
            return a.exports
        }
        var e = {};
        b.m = p;
        b.c = e;
        b.p = "";
        return b(0)
    }([function(p, b, e) {
            b = e(1);
            p.exports = (b && b.__esModule ? b : {
                "default": b
            })["default"]
        }, function(p,
            b, e) {
            function l(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            b.__esModule = !0;
            p = e(2);
            p = l(p);
            var a = e(6),
                a = l(a),
                k = e(3),
                k = l(k),
                f = e(7),
                f = l(f),
                d = e(8),
                d = l(d),
                h = e(10),
                h = l(h),
                m = e(11),
                m = l(m),
                q = e(12),
                q = l(q),
                n = e(13),
                n = l(n),
                r = e(14),
                r = l(r),
                t = e(15),
                t = l(t),
                w = e(16),
                w = l(w),
                u = e(9),
                u = l(u);
            e = e(17);
            e = l(e);
            b["default"] = {
                color: {
                    Color: p["default"],
                    math: a["default"],
                    interpret: k["default"]
                },
                controllers: {
                    Controller: f["default"],
                    BooleanController: d["default"],
                    OptionController: h["default"],
                    StringController: m["default"],
                    NumberController: q["default"],
                    NumberControllerBox: n["default"],
                    NumberControllerSlider: r["default"],
                    FunctionController: t["default"],
                    ColorController: w["default"]
                },
                dom: {
                    dom: u["default"]
                },
                gui: {
                    GUI: e["default"]
                },
                GUI: e["default"]
            }
        }, function(p, b, e) {
            function l(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function a(a, d, b) {
                Object.defineProperty(a, d, {
                    get: function() {
                        if ("RGB" === this.__state.space) return this.__state[d];
                        q.recalculateRGB(this, d, b);
                        return this.__state[d]
                    },
                    set: function(a) {
                        "RGB" !== this.__state.space && (q.recalculateRGB(this, d, b),
                            this.__state.space = "RGB");
                        this.__state[d] = a
                    }
                })
            }

            function k(a, d) {
                Object.defineProperty(a, d, {
                    get: function() {
                        if ("HSV" === this.__state.space) return this.__state[d];
                        q.recalculateHSV(this);
                        return this.__state[d]
                    },
                    set: function(a) {
                        "HSV" !== this.__state.space && (q.recalculateHSV(this), this.__state.space = "HSV");
                        this.__state[d] = a
                    }
                })
            }
            b.__esModule = !0;
            p = e(3);
            var f = l(p);
            p = e(6);
            var d = l(p);
            p = e(4);
            var h = l(p);
            e = e(5);
            var m = l(e),
                q = function() {
                    function a() {
                        if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
                        this.__state = f["default"].apply(this, arguments);
                        if (!1 === this.__state) throw Error("Failed to interpret color arguments");
                        this.__state.a = this.__state.a || 1
                    }
                    a.prototype.toString = function() {
                        return (0, h["default"])(this)
                    };
                    a.prototype.toOriginal = function() {
                        return this.__state.conversion.write(this)
                    };
                    return a
                }();
            q.recalculateRGB = function(a, b, e) {
                if ("HEX" === a.__state.space) a.__state[b] = d["default"].component_from_hex(a.__state.hex, e);
                else if ("HSV" === a.__state.space) m["default"].extend(a.__state, d["default"].hsv_to_rgb(a.__state.h,
                    a.__state.s, a.__state.v));
                else throw Error("Corrupted color state");
            };
            q.recalculateHSV = function(a) {
                var b = d["default"].rgb_to_hsv(a.r, a.g, a.b);
                m["default"].extend(a.__state, {
                    s: b.s,
                    v: b.v
                });
                m["default"].isNaN(b.h) ? m["default"].isUndefined(a.__state.h) && (a.__state.h = 0) : a.__state.h = b.h
            };
            q.COMPONENTS = "r g b h s v hex a".split(" ");
            a(q.prototype, "r", 2);
            a(q.prototype, "g", 1);
            a(q.prototype, "b", 0);
            k(q.prototype, "h");
            k(q.prototype, "s");
            k(q.prototype, "v");
            Object.defineProperty(q.prototype, "a", {
                get: function() {
                    return this.__state.a
                },
                set: function(a) {
                    this.__state.a = a
                }
            });
            Object.defineProperty(q.prototype, "hex", {
                get: function() {
                    this.__state.hex = d["default"].rgb_to_hex(this.r, this.g, this.b);
                    return this.__state.hex
                },
                set: function(a) {
                    this.__state.space = "HEX";
                    this.__state.hex = a
                }
            });
            b["default"] = q
        }, function(p, b, e) {
            b.__esModule = !0;
            p = (p = e(4)) && p.__esModule ? p : {
                "default": p
            };
            var l = (e = e(5)) && e.__esModule ? e : {
                    "default": e
                },
                a = [{
                    litmus: l["default"].isString,
                    conversions: {
                        THREE_CHAR_HEX: {
                            read: function(a) {
                                a = a.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                                return null === a ? !1 : {
                                    space: "HEX",
                                    hex: parseInt("0x" + a[1].toString() + a[1].toString() + a[2].toString() + a[2].toString() + a[3].toString() + a[3].toString(), 0)
                                }
                            },
                            write: p["default"]
                        },
                        SIX_CHAR_HEX: {
                            read: function(a) {
                                a = a.match(/^#([A-F0-9]{6})$/i);
                                return null === a ? !1 : {
                                    space: "HEX",
                                    hex: parseInt("0x" + a[1].toString(), 0)
                                }
                            },
                            write: p["default"]
                        },
                        CSS_RGB: {
                            read: function(a) {
                                a = a.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                return null === a ? !1 : {
                                    space: "RGB",
                                    r: parseFloat(a[1]),
                                    g: parseFloat(a[2]),
                                    b: parseFloat(a[3])
                                }
                            },
                            write: p["default"]
                        },
                        CSS_RGBA: {
                            read: function(a) {
                                a = a.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                return null === a ? !1 : {
                                    space: "RGB",
                                    r: parseFloat(a[1]),
                                    g: parseFloat(a[2]),
                                    b: parseFloat(a[3]),
                                    a: parseFloat(a[4])
                                }
                            },
                            write: p["default"]
                        }
                    }
                }, {
                    litmus: l["default"].isNumber,
                    conversions: {
                        HEX: {
                            read: function(a) {
                                return {
                                    space: "HEX",
                                    hex: a,
                                    conversionName: "HEX"
                                }
                            },
                            write: function(a) {
                                return a.hex
                            }
                        }
                    }
                }, {
                    litmus: l["default"].isArray,
                    conversions: {
                        RGB_ARRAY: {
                            read: function(a) {
                                return 3 !== a.length ? !1 : {
                                    space: "RGB",
                                    r: a[0],
                                    g: a[1],
                                    b: a[2]
                                }
                            },
                            write: function(a) {
                                return [a.r, a.g, a.b]
                            }
                        },
                        RGBA_ARRAY: {
                            read: function(a) {
                                return 4 !== a.length ? !1 : {
                                    space: "RGB",
                                    r: a[0],
                                    g: a[1],
                                    b: a[2],
                                    a: a[3]
                                }
                            },
                            write: function(a) {
                                return [a.r, a.g, a.b, a.a]
                            }
                        }
                    }
                }, {
                    litmus: l["default"].isObject,
                    conversions: {
                        RGBA_OBJ: {
                            read: function(a) {
                                return l["default"].isNumber(a.r) && l["default"].isNumber(a.g) && l["default"].isNumber(a.b) && l["default"].isNumber(a.a) ? {
                                    space: "RGB",
                                    r: a.r,
                                    g: a.g,
                                    b: a.b,
                                    a: a.a
                                } : !1
                            },
                            write: function(a) {
                                return {
                                    r: a.r,
                                    g: a.g,
                                    b: a.b,
                                    a: a.a
                                }
                            }
                        },
                        RGB_OBJ: {
                            read: function(a) {
                                return l["default"].isNumber(a.r) &&
                                    l["default"].isNumber(a.g) && l["default"].isNumber(a.b) ? {
                                        space: "RGB",
                                        r: a.r,
                                        g: a.g,
                                        b: a.b
                                    } : !1
                            },
                            write: function(a) {
                                return {
                                    r: a.r,
                                    g: a.g,
                                    b: a.b
                                }
                            }
                        },
                        HSVA_OBJ: {
                            read: function(a) {
                                return l["default"].isNumber(a.h) && l["default"].isNumber(a.s) && l["default"].isNumber(a.v) && l["default"].isNumber(a.a) ? {
                                    space: "HSV",
                                    h: a.h,
                                    s: a.s,
                                    v: a.v,
                                    a: a.a
                                } : !1
                            },
                            write: function(a) {
                                return {
                                    h: a.h,
                                    s: a.s,
                                    v: a.v,
                                    a: a.a
                                }
                            }
                        },
                        HSV_OBJ: {
                            read: function(a) {
                                return l["default"].isNumber(a.h) && l["default"].isNumber(a.s) && l["default"].isNumber(a.v) ? {
                                    space: "HSV",
                                    h: a.h,
                                    s: a.s,
                                    v: a.v
                                } : !1
                            },
                            write: function(a) {
                                return {
                                    h: a.h,
                                    s: a.s,
                                    v: a.v
                                }
                            }
                        }
                    }
                }],
                k = void 0,
                f = void 0;
            b["default"] = function() {
                f = !1;
                var d = 1 < arguments.length ? l["default"].toArray(arguments) : arguments[0];
                l["default"].each(a, function(a) {
                    if (a.litmus(d)) return l["default"].each(a.conversions, function(a, b) {
                        k = a.read(d);
                        if (!1 === f && !1 !== k) return f = k, k.conversionName = b, k.conversion = a, l["default"].BREAK
                    }), l["default"].BREAK
                });
                return f
            }
        }, function(p, b, e) {
            b.__esModule = !0;
            b["default"] = function(a) {
                if (1 === a.a || l["default"].isUndefined(a.a)) {
                    for (a =
                        a.hex.toString(16); 6 > a.length;) a = "0" + a;
                    return "#" + a
                }
                return "rgba(" + Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b) + "," + a.a + ")"
            };
            var l = (p = e(5)) && p.__esModule ? p : {
                "default": p
            }
        }, function(p, b) {
            b.__esModule = !0;
            var e = Array.prototype.forEach,
                l = Array.prototype.slice,
                a = {
                    BREAK: {},
                    extend: function(a) {
                        this.each(l.call(arguments, 1), function(b) {
                            (this.isObject(b) ? Object.keys(b) : []).forEach(function(d) {
                                this.isUndefined(b[d]) || (a[d] = b[d])
                            }.bind(this))
                        }, this);
                        return a
                    },
                    defaults: function(a) {
                        this.each(l.call(arguments,
                            1), function(b) {
                            (this.isObject(b) ? Object.keys(b) : []).forEach(function(d) {
                                this.isUndefined(a[d]) && (a[d] = b[d])
                            }.bind(this))
                        }, this);
                        return a
                    },
                    compose: function() {
                        var a = l.call(arguments);
                        return function() {
                            for (var b = l.call(arguments), d = a.length - 1; 0 <= d; d--) b = [a[d].apply(this, b)];
                            return b[0]
                        }
                    },
                    each: function(a, b, d) {
                        if (a)
                            if (e && a.forEach && a.forEach === e) a.forEach(b, d);
                            else if (a.length === a.length + 0) {
                            var f, k;
                            f = 0;
                            for (k = a.length; f < k && !(f in a && b.call(d, a[f], f) === this.BREAK); f++);
                        } else
                            for (f in a)
                                if (b.call(d, a[f],
                                        f) === this.BREAK) break
                    },
                    defer: function(a) {
                        setTimeout(a, 0)
                    },
                    debounce: function(a, b) {
                        var d = void 0;
                        return function() {
                            var e = arguments,
                                f = !d;
                            clearTimeout(d);
                            d = setTimeout(function() {
                                d = null
                            }, b);
                            f && a.apply(this, e)
                        }
                    },
                    toArray: function(a) {
                        return a.toArray ? a.toArray() : l.call(a)
                    },
                    isUndefined: function(a) {
                        return void 0 === a
                    },
                    isNull: function(a) {
                        return null === a
                    },
                    isNaN: function(a) {
                        function b(d) {
                            return a.apply(this, arguments)
                        }
                        b.toString = function() {
                            return a.toString()
                        };
                        return b
                    }(function(a) {
                        return isNaN(a)
                    }),
                    isArray: Array.isArray ||
                        function(a) {
                            return a.constructor === Array
                        },
                    isObject: function(a) {
                        return a === Object(a)
                    },
                    isNumber: function(a) {
                        return a === a + 0
                    },
                    isString: function(a) {
                        return a === a + ""
                    },
                    isBoolean: function(a) {
                        return !1 === a || !0 === a
                    },
                    isFunction: function(a) {
                        return "[object Function]" === Object.prototype.toString.call(a)
                    }
                };
            b["default"] = a
        }, function(p, b) {
            b.__esModule = !0;
            var e = void 0;
            b["default"] = {
                hsv_to_rgb: function(b, a, e) {
                    var f = b / 60 - Math.floor(b / 60),
                        d = e * (1 - a),
                        h = e * (1 - f * a);
                    a = e * (1 - (1 - f) * a);
                    b = [
                        [e, a, d],
                        [h, e, d],
                        [d, e, a],
                        [d, h, e],
                        [a, d, e],
                        [e,
                            d, h
                        ]
                    ][Math.floor(b / 60) % 6];
                    return {
                        r: 255 * b[0],
                        g: 255 * b[1],
                        b: 255 * b[2]
                    }
                },
                rgb_to_hsv: function(b, a, e) {
                    var f = Math.max(b, a, e),
                        d = f - Math.min(b, a, e);
                    if (0 === f) return {
                        h: NaN,
                        s: 0,
                        v: 0
                    };
                    b = (b === f ? (a - e) / d : a === f ? 2 + (e - b) / d : 4 + (b - a) / d) / 6;
                    0 > b && (b += 1);
                    return {
                        h: 360 * b,
                        s: d / f,
                        v: f / 255
                    }
                },
                rgb_to_hex: function(b, a, e) {
                    b = this.hex_with_component(0, 2, b);
                    b = this.hex_with_component(b, 1, a);
                    return b = this.hex_with_component(b, 0, e)
                },
                component_from_hex: function(b, a) {
                    return b >> 8 * a & 255
                },
                hex_with_component: function(b, a, k) {
                    return k << (e = 8 * a) | b & ~(255 <<
                        e)
                }
            }
        }, function(p, b) {
            b.__esModule = !0;
            var e = function() {
                function b(a, e) {
                    if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function");
                    this.initialValue = a[e];
                    this.domElement = document.createElement("div");
                    this.object = a;
                    this.property = e;
                    this.__onFinishChange = this.__onChange = void 0
                }
                b.prototype.onChange = function(a) {
                    this.__onChange = a;
                    return this
                };
                b.prototype.onFinishChange = function(a) {
                    this.__onFinishChange = a;
                    return this
                };
                b.prototype.setValue = function(a) {
                    this.object[this.property] = a;
                    this.__onChange &&
                        this.__onChange.call(this, a);
                    this.updateDisplay();
                    return this
                };
                b.prototype.getValue = function() {
                    return this.object[this.property]
                };
                b.prototype.updateDisplay = function() {
                    return this
                };
                b.prototype.isModified = function() {
                    return this.initialValue !== this.getValue()
                };
                return b
            }();
            b["default"] = e
        }, function(p, b, e) {
            function l(a, d) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || "object" !== typeof d && "function" !== typeof d ? a : d
            }

            function a(a, d) {
                if ("function" !== typeof d &&
                    null !== d) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                a.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                d && (Object.setPrototypeOf ? Object.setPrototypeOf(a, d) : a.__proto__ = d)
            }
            b.__esModule = !0;
            p = (p = e(7)) && p.__esModule ? p : {
                "default": p
            };
            var k = (e = e(9)) && e.__esModule ? e : {
                "default": e
            };
            e = function(b) {
                function d(a, e) {
                    if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                    var f = l(this, b.call(this,
                        a, e));
                    f.__prev = f.getValue();
                    f.__checkbox = document.createElement("input");
                    f.__checkbox.setAttribute("type", "checkbox");
                    k["default"].bind(f.__checkbox, "change", function() {
                        f.setValue(!f.__prev)
                    }, !1);
                    f.domElement.appendChild(f.__checkbox);
                    f.updateDisplay();
                    return f
                }
                a(d, b);
                d.prototype.setValue = function(a) {
                    a = b.prototype.setValue.call(this, a);
                    this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
                    this.__prev = this.getValue();
                    return a
                };
                d.prototype.updateDisplay = function() {
                    !0 === this.getValue() ?
                        (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1;
                    return b.prototype.updateDisplay.call(this)
                };
                return d
            }(p["default"]);
            b["default"] = e
        }, function(p, b, e) {
            function l(d) {
                if ("0" === d || a["default"].isUndefined(d)) return 0;
                d = d.match(f);
                return a["default"].isNull(d) ? 0 : parseFloat(d[1])
            }
            b.__esModule = !0;
            var a = (p = e(5)) && p.__esModule ? p : {
                    "default": p
                },
                k = {};
            a["default"].each({
                HTMLEvents: ["change"],
                MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                KeyboardEvents: ["keydown"]
            }, function(d, b) {
                a["default"].each(d, function(a) {
                    k[a] = b
                })
            });
            var f = /(\d+(\.\d+)?)px/,
                d = {
                    makeSelectable: function(a, d) {
                        void 0 !== a && void 0 !== a.style && (a.onselectstart = d ? function() {
                            return !1
                        } : function() {}, a.style.MozUserSelect = d ? "auto" : "none", a.style.KhtmlUserSelect = d ? "auto" : "none", a.unselectable = d ? "on" : "off")
                    },
                    makeFullscreen: function(d, b, e) {
                        a["default"].isUndefined(b) && (b = !0);
                        a["default"].isUndefined(e) && (e = !0);
                        d.style.position = "absolute";
                        b && (d.style.left = 0, d.style.right = 0);
                        e &&
                            (d.style.top = 0, d.style.bottom = 0)
                    },
                    fakeEvent: function(d, b, e, f) {
                        e = e || {};
                        var h = k[b];
                        if (!h) throw Error("Event type " + b + " not supported.");
                        var l = document.createEvent(h);
                        switch (h) {
                            case "MouseEvents":
                                l.initMouseEvent(b, e.bubbles || !1, e.cancelable || !0, window, e.clickCount || 1, 0, 0, e.x || e.clientX || 0, e.y || e.clientY || 0, !1, !1, !1, !1, 0, null);
                                break;
                            case "KeyboardEvents":
                                h = l.initKeyboardEvent || l.initKeyEvent;
                                a["default"].defaults(e, {
                                    cancelable: !0,
                                    ctrlKey: !1,
                                    altKey: !1,
                                    shiftKey: !1,
                                    metaKey: !1,
                                    keyCode: void 0,
                                    charCode: void 0
                                });
                                h(b, e.bubbles || !1, e.cancelable, window, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.keyCode, e.charCode);
                                break;
                            default:
                                l.initEvent(b, e.bubbles || !1, e.cancelable || !0)
                        }
                        a["default"].defaults(l, f);
                        d.dispatchEvent(l)
                    },
                    bind: function(a, b, e, f) {
                        a.addEventListener ? a.addEventListener(b, e, f || !1) : a.attachEvent && a.attachEvent("on" + b, e);
                        return d
                    },
                    unbind: function(a, b, e, f) {
                        a.removeEventListener ? a.removeEventListener(b, e, f || !1) : a.detachEvent && a.detachEvent("on" + b, e);
                        return d
                    },
                    addClass: function(a, b) {
                        if (void 0 === a.className) a.className =
                            b;
                        else if (a.className !== b) {
                            var e = a.className.split(/ +/); - 1 === e.indexOf(b) && (e.push(b), a.className = e.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                        }
                        return d
                    },
                    removeClass: function(a, b) {
                        if (b)
                            if (a.className === b) a.removeAttribute("class");
                            else {
                                var e = a.className.split(/ +/),
                                    f = e.indexOf(b); - 1 !== f && (e.splice(f, 1), a.className = e.join(" "))
                            }
                        else a.className = void 0;
                        return d
                    },
                    hasClass: function(a, d) {
                        return (new RegExp("(?:^|\\s+)" + d + "(?:\\s+|$)")).test(a.className) || !1
                    },
                    getWidth: function(a) {
                        a = getComputedStyle(a);
                        return l(a["border-left-width"]) + l(a["border-right-width"]) + l(a["padding-left"]) + l(a["padding-right"]) + l(a.width)
                    },
                    getHeight: function(a) {
                        a = getComputedStyle(a);
                        return l(a["border-top-width"]) + l(a["border-bottom-width"]) + l(a["padding-top"]) + l(a["padding-bottom"]) + l(a.height)
                    },
                    getOffset: function(a) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (a.offsetParent) {
                            do d.left += a.offsetLeft, d.top += a.offsetTop, a = a.offsetParent; while (a)
                        }
                        return d
                    },
                    isActive: function(a) {
                        return a === document.activeElement && (a.type || a.href)
                    }
                };
            b["default"] =
                d
        }, function(p, b, e) {
            function l(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function a(a, d) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || "object" !== typeof d && "function" !== typeof d ? a : d
            }

            function k(a, d) {
                if ("function" !== typeof d && null !== d) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                a.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                d && (Object.setPrototypeOf ?
                    Object.setPrototypeOf(a, d) : a.__proto__ = d)
            }
            b.__esModule = !0;
            p = e(7);
            p = l(p);
            var f = e(9),
                d = l(f);
            e = e(5);
            var h = l(e);
            e = function(b) {
                function e(f, k, l) {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    var m = a(this, b.call(this, f, k)),
                        n = l;
                    m.__select = document.createElement("select");
                    h["default"].isArray(n) && function() {
                        var a = {};
                        h["default"].each(n, function(d) {
                            a[d] = d
                        });
                        n = a
                    }();
                    h["default"].each(n, function(a, d) {
                        var b = document.createElement("option");
                        b.innerHTML = d;
                        b.setAttribute("value",
                            a);
                        m.__select.appendChild(b)
                    });
                    m.updateDisplay();
                    d["default"].bind(m.__select, "change", function() {
                        m.setValue(this.options[this.selectedIndex].value)
                    });
                    m.domElement.appendChild(m.__select);
                    return m
                }
                k(e, b);
                e.prototype.setValue = function(a) {
                    a = b.prototype.setValue.call(this, a);
                    this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
                    return a
                };
                e.prototype.updateDisplay = function() {
                    if (d["default"].isActive(this.__select)) return this;
                    this.__select.value = this.getValue();
                    return b.prototype.updateDisplay.call(this)
                };
                return e
            }(p["default"]);
            b["default"] = e
        }, function(p, b, e) {
            function l(a, d) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || "object" !== typeof d && "function" !== typeof d ? a : d
            }

            function a(a, d) {
                if ("function" !== typeof d && null !== d) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                a.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                d && (Object.setPrototypeOf ? Object.setPrototypeOf(a,
                    d) : a.__proto__ = d)
            }
            b.__esModule = !0;
            p = (p = e(7)) && p.__esModule ? p : {
                "default": p
            };
            var k = (e = e(9)) && e.__esModule ? e : {
                "default": e
            };
            e = function(b) {
                function d(a, e) {
                    function f() {
                        m.setValue(m.__input.value)
                    }
                    if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                    var h = l(this, b.call(this, a, e)),
                        m = h;
                    h.__input = document.createElement("input");
                    h.__input.setAttribute("type", "text");
                    k["default"].bind(h.__input, "keyup", f);
                    k["default"].bind(h.__input, "change", f);
                    k["default"].bind(h.__input, "blur",
                        function() {
                            m.__onFinishChange && m.__onFinishChange.call(m, m.getValue())
                        });
                    k["default"].bind(h.__input, "keydown", function(a) {
                        13 === a.keyCode && this.blur()
                    });
                    h.updateDisplay();
                    h.domElement.appendChild(h.__input);
                    return h
                }
                a(d, b);
                d.prototype.updateDisplay = function() {
                    k["default"].isActive(this.__input) || (this.__input.value = this.getValue());
                    return b.prototype.updateDisplay.call(this)
                };
                return d
            }(p["default"]);
            b["default"] = e
        }, function(p, b, e) {
            function l(a, d) {
                if ("function" !== typeof d && null !== d) throw new TypeError("Super expression must either be null or a function, not " +
                    typeof d);
                a.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                d && (Object.setPrototypeOf ? Object.setPrototypeOf(a, d) : a.__proto__ = d)
            }

            function a(a) {
                a = a.toString();
                return -1 < a.indexOf(".") ? a.length - a.indexOf(".") - 1 : 0
            }
            b.__esModule = !0;
            p = (p = e(7)) && p.__esModule ? p : {
                "default": p
            };
            var k = (e = e(5)) && e.__esModule ? e : {
                "default": e
            };
            e = function(b) {
                function d(e, f, l) {
                    if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                    e = b.call(this, e, f);
                    if (!this) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    e = !e || "object" !== typeof e && "function" !== typeof e ? this : e;
                    l = l || {};
                    e.__min = l.min;
                    e.__max = l.max;
                    e.__step = l.step;
                    k["default"].isUndefined(e.__step) ? e.__impliedStep = 0 === e.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(Math.abs(e.initialValue)) / Math.LN10)) / 10 : e.__impliedStep = e.__step;
                    e.__precision = a(e.__impliedStep);
                    return e
                }
                l(d, b);
                d.prototype.setValue = function(a) {
                    void 0 !== this.__min && a < this.__min ? a = this.__min :
                        void 0 !== this.__max && a > this.__max && (a = this.__max);
                    void 0 !== this.__step && 0 !== a % this.__step && (a = Math.round(a / this.__step) * this.__step);
                    return b.prototype.setValue.call(this, a)
                };
                d.prototype.min = function(a) {
                    this.__min = a;
                    return this
                };
                d.prototype.max = function(a) {
                    this.__max = a;
                    return this
                };
                d.prototype.step = function(d) {
                    this.__impliedStep = this.__step = d;
                    this.__precision = a(d);
                    return this
                };
                return d
            }(p["default"]);
            b["default"] = e
        }, function(p, b, e) {
            function l(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function a(a,
                d) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || "object" !== typeof d && "function" !== typeof d ? a : d
            }

            function k(a, d) {
                if ("function" !== typeof d && null !== d) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                a.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                d && (Object.setPrototypeOf ? Object.setPrototypeOf(a, d) : a.__proto__ = d)
            }
            b.__esModule = !0;
            p = e(12);
            p = l(p);
            var f =
                e(9),
                d = l(f);
            e = e(5);
            var h = l(e);
            e = function(b) {
                function e(f, k, l) {
                    function m() {
                        var a = parseFloat(q.__input.value);
                        h["default"].isNaN(a) || q.setValue(a)
                    }

                    function n(a) {
                        document.activeElement.blur();
                        var d = r - a.clientY;
                        q.setValue(q.getValue() + d * q.__impliedStep);
                        r = a.clientY
                    }

                    function p() {
                        d["default"].unbind(window, "mousemove", n);
                        d["default"].unbind(window, "mouseup", p)
                    }
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    f = a(this, b.call(this, f, k, l));
                    f.__truncationSuspended = !1;
                    var q =
                        f,
                        r = void 0;
                    f.__input = document.createElement("input");
                    f.__input.setAttribute("type", "text");
                    d["default"].bind(f.__input, "change", m);
                    d["default"].bind(f.__input, "blur", function() {
                        m();
                        q.__onFinishChange && q.__onFinishChange.call(q, q.getValue())
                    });
                    d["default"].bind(f.__input, "mousedown", function(a) {
                        d["default"].bind(window, "mousemove", n);
                        d["default"].bind(window, "mouseup", p);
                        r = a.clientY
                    });
                    d["default"].bind(f.__input, "keydown", function(a) {
                        13 === a.keyCode && (q.__truncationSuspended = !0, this.blur(), q.__truncationSuspended = !1)
                    });
                    f.updateDisplay();
                    f.domElement.appendChild(f.__input);
                    return f
                }
                k(e, b);
                e.prototype.updateDisplay = function() {
                    if (d["default"].isActive(this.__input)) return this;
                    var a = this.__input,
                        e;
                    if (this.__truncationSuspended) e = this.getValue();
                    else {
                        e = this.getValue();
                        var f = Math.pow(10, this.__precision);
                        e = Math.round(e * f) / f
                    }
                    a.value = e;
                    return b.prototype.updateDisplay.call(this)
                };
                return e
            }(p["default"]);
            b["default"] = e
        }, function(p, b, e) {
            function l(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" !== typeof b && "function" !== typeof b ? a : b
            }

            function a(a, b) {
                if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }

            function k(a, b, e, f, k) {
                return f + (a - b) / (e - b) * (k - f)
            }
            b.__esModule = !0;
            p = (p = e(12)) && p.__esModule ? p : {
                "default": p
            };
            var f = (e = e(9)) && e.__esModule ?
                e : {
                    "default": e
                };
            e = function(d) {
                function b(a, e, h, p, t) {
                    function m(a) {
                        a.preventDefault();
                        var d = q.__background.getBoundingClientRect();
                        q.setValue(k(a.clientX, d.left, d.right, q.__min, q.__max));
                        return !1
                    }

                    function n() {
                        f["default"].unbind(window, "mousemove", m);
                        f["default"].unbind(window, "mouseup", n);
                        q.__onFinishChange && q.__onFinishChange.call(q, q.getValue())
                    }
                    if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function");
                    var q = a = l(this, d.call(this, a, e, {
                        min: h,
                        max: p,
                        step: t
                    }));
                    a.__background = document.createElement("div");
                    a.__foreground = document.createElement("div");
                    f["default"].bind(a.__background, "mousedown", function(a) {
                        document.activeElement.blur();
                        f["default"].bind(window, "mousemove", m);
                        f["default"].bind(window, "mouseup", n);
                        m(a)
                    });
                    f["default"].addClass(a.__background, "slider");
                    f["default"].addClass(a.__foreground, "slider-fg");
                    a.updateDisplay();
                    a.__background.appendChild(a.__foreground);
                    a.domElement.appendChild(a.__background);
                    return a
                }
                a(b, d);
                b.prototype.updateDisplay = function() {
                    var a = (this.getValue() - this.__min) /
                        (this.__max - this.__min);
                    this.__foreground.style.width = 100 * a + "%";
                    return d.prototype.updateDisplay.call(this)
                };
                return b
            }(p["default"]);
            b["default"] = e
        }, function(p, b, e) {
            function l(a, d) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || "object" !== typeof d && "function" !== typeof d ? a : d
            }

            function a(a, d) {
                if ("function" !== typeof d && null !== d) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                a.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                d && (Object.setPrototypeOf ? Object.setPrototypeOf(a, d) : a.__proto__ = d)
            }
            b.__esModule = !0;
            p = (p = e(7)) && p.__esModule ? p : {
                "default": p
            };
            var k = (e = e(9)) && e.__esModule ? e : {
                "default": e
            };
            e = function(b) {
                function d(a, e, f) {
                    if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                    var h = l(this, b.call(this, a, e));
                    h.__button = document.createElement("div");
                    h.__button.innerHTML = void 0 === f ? "Fire" : f;
                    k["default"].bind(h.__button, "click", function(a) {
                        a.preventDefault();
                        h.fire();
                        return !1
                    });
                    k["default"].addClass(h.__button, "button");
                    h.domElement.appendChild(h.__button);
                    return h
                }
                a(d, b);
                d.prototype.fire = function() {
                    this.__onChange && this.__onChange.call(this);
                    this.getValue().call(this.object);
                    this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
                };
                return d
            }(p["default"]);
            b["default"] = e
        }, function(p, b, e) {
            function l(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function a(a, d) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || "object" !== typeof d && "function" !== typeof d ? a : d
            }

            function k(a, d) {
                if ("function" !== typeof d && null !== d) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                a.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                d && (Object.setPrototypeOf ? Object.setPrototypeOf(a, d) : a.__proto__ = d)
            }

            function f(a, d, b, e) {
                a.style.background = "";
                r["default"].each(t, function(f) {
                    a.style.cssText += "background: " + f + "linear-gradient(" + d +
                        ", " + b + " 0%, " + e + " 100%); "
                })
            }

            function d(a) {
                a.style.background = "";
                a.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";
                a.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
                a.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
                a.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
                a.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
            }
            b.__esModule = !0;
            p = e(7);
            p = l(p);
            var h = e(9),
                m = l(h),
                h = e(2),
                q = l(h),
                h = e(3),
                n = l(h);
            e = e(5);
            var r = l(e);
            e = function(b) {
                function e(h, k) {
                    function l(a) {
                        w(a);
                        m["default"].bind(window, "mousemove", w);
                        m["default"].bind(window, "mouseup", p)
                    }

                    function p() {
                        m["default"].unbind(window, "mousemove", w);
                        m["default"].unbind(window, "mouseup", p);
                        v()
                    }

                    function t() {
                        var a = (0, n["default"])(this.value);
                        !1 !== a ? (H.__color.__state = a, H.setValue(H.__color.toOriginal())) : this.value = H.__color.toString()
                    }

                    function u() {
                        m["default"].unbind(window, "mousemove", y);
                        m["default"].unbind(window, "mouseup", u);
                        v()
                    }

                    function v() {
                        H.__onFinishChange && H.__onFinishChange.call(H, H.__color.toString())
                    }

                    function w(a) {
                        a.preventDefault();
                        var d = H.__saturation_field.getBoundingClientRect(),
                            b = (a.clientX - d.left) / (d.right - d.left);
                        a = 1 - (a.clientY - d.top) / (d.bottom - d.top);
                        1 < a ? a = 1 : 0 > a && (a = 0);
                        1 < b ? b = 1 : 0 > b && (b = 0);
                        H.__color.v = a;
                        H.__color.s = b;
                        H.setValue(H.__color.toOriginal());
                        return !1
                    }

                    function y(a) {
                        a.preventDefault();
                        var d = H.__hue_field.getBoundingClientRect();
                        a = 1 - (a.clientY - d.top) / (d.bottom - d.top);
                        1 < a ? a = 1 : 0 > a && (a = 0);
                        H.__color.h = 360 * a;
                        H.setValue(H.__color.toOriginal());
                        return !1
                    }
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                    var C = a(this, b.call(this, h, k));
                    C.__color =
                        new q["default"](C.getValue());
                    C.__temp = new q["default"](0);
                    var H = C;
                    C.domElement = document.createElement("div");
                    m["default"].makeSelectable(C.domElement, !1);
                    C.__selector = document.createElement("div");
                    C.__selector.className = "selector";
                    C.__saturation_field = document.createElement("div");
                    C.__saturation_field.className = "saturation-field";
                    C.__field_knob = document.createElement("div");
                    C.__field_knob.className = "field-knob";
                    C.__field_knob_border = "2px solid ";
                    C.__hue_knob = document.createElement("div");
                    C.__hue_knob.className =
                        "hue-knob";
                    C.__hue_field = document.createElement("div");
                    C.__hue_field.className = "hue-field";
                    C.__input = document.createElement("input");
                    C.__input.type = "text";
                    C.__input_textShadow = "0 1px 1px ";
                    m["default"].bind(C.__input, "keydown", function(a) {
                        13 === a.keyCode && t.call(this)
                    });
                    m["default"].bind(C.__input, "blur", t);
                    m["default"].bind(C.__selector, "mousedown", function() {
                        m["default"].addClass(this, "drag").bind(window, "mouseup", function() {
                            m["default"].removeClass(H.__selector, "drag")
                        })
                    });
                    var D = document.createElement("div");
                    r["default"].extend(C.__selector.style, {
                        width: "122px",
                        height: "102px",
                        padding: "3px",
                        backgroundColor: "#222",
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                    });
                    r["default"].extend(C.__field_knob.style, {
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        border: C.__field_knob_border + (.5 > C.__color.v ? "#fff" : "#000"),
                        boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                        borderRadius: "12px",
                        zIndex: 1
                    });
                    r["default"].extend(C.__hue_knob.style, {
                        position: "absolute",
                        width: "15px",
                        height: "2px",
                        borderRight: "4px solid #fff",
                        zIndex: 1
                    });
                    r["default"].extend(C.__saturation_field.style, {
                        width: "100px",
                        height: "100px",
                        border: "1px solid #555",
                        marginRight: "3px",
                        display: "inline-block",
                        cursor: "pointer"
                    });
                    r["default"].extend(D.style, {
                        width: "100%",
                        height: "100%",
                        background: "none"
                    });
                    f(D, "top", "rgba(0,0,0,0)", "#000");
                    r["default"].extend(C.__hue_field.style, {
                        width: "15px",
                        height: "100px",
                        border: "1px solid #555",
                        cursor: "ns-resize",
                        position: "absolute",
                        top: "3px",
                        right: "3px"
                    });
                    d(C.__hue_field);
                    r["default"].extend(C.__input.style, {
                        outline: "none",
                        textAlign: "center",
                        color: "#fff",
                        border: 0,
                        fontWeight: "bold",
                        textShadow: C.__input_textShadow + "rgba(0,0,0,0.7)"
                    });
                    m["default"].bind(C.__saturation_field, "mousedown", l);
                    m["default"].bind(C.__field_knob, "mousedown", l);
                    m["default"].bind(C.__hue_field, "mousedown", function(a) {
                        y(a);
                        m["default"].bind(window, "mousemove", y);
                        m["default"].bind(window, "mouseup", u)
                    });
                    C.__saturation_field.appendChild(D);
                    C.__selector.appendChild(C.__field_knob);
                    C.__selector.appendChild(C.__saturation_field);
                    C.__selector.appendChild(C.__hue_field);
                    C.__hue_field.appendChild(C.__hue_knob);
                    C.domElement.appendChild(C.__input);
                    C.domElement.appendChild(C.__selector);
                    C.updateDisplay();
                    return C
                }
                k(e, b);
                e.prototype.updateDisplay = function() {
                    var a = (0, n["default"])(this.getValue());
                    if (!1 !== a) {
                        var d = !1;
                        r["default"].each(q["default"].COMPONENTS, function(b) {
                            if (!r["default"].isUndefined(a[b]) && !r["default"].isUndefined(this.__color.__state[b]) && a[b] !== this.__color.__state[b]) return d = !0, {}
                        }, this);
                        d && r["default"].extend(this.__color.__state, a)
                    }
                    r["default"].extend(this.__temp.__state, this.__color.__state);
                    this.__temp.a = 1;
                    var b = .5 > this.__color.v ||
                        .5 < this.__color.s ? 255 : 0,
                        e = 255 - b;
                    r["default"].extend(this.__field_knob.style, {
                        marginLeft: 100 * this.__color.s - 7 + "px",
                        marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                        backgroundColor: this.__temp.toString(),
                        border: this.__field_knob_border + "rgb(" + b + "," + b + "," + b + ")"
                    });
                    this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px";
                    this.__temp.s = 1;
                    this.__temp.v = 1;
                    f(this.__saturation_field, "left", "#fff", this.__temp.toString());
                    r["default"].extend(this.__input.style, {
                        backgroundColor: this.__input.value = this.__color.toString(),
                        color: "rgb(" + b + "," + b + "," + b + ")",
                        textShadow: this.__input_textShadow + "rgba(" + e + "," + e + "," + e + ",.7)"
                    })
                };
                return e
            }(p["default"]);
            var t = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
            b["default"] = e
        }, function(p, b, e) {
            function l(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function a(a, d, b) {
                var e = document.createElement("li");
                d && e.appendChild(d);
                b ? a.__ul.insertBefore(e, b) : a.__ul.appendChild(e);
                a.onResize();
                return e
            }

            function k(a, d) {
                var b = a.__preset_select[a.__preset_select.selectedIndex];
                b.innerHTML = d ? b.value + "*" : b.value
            }

            function f(a, d, b) {
                b.__li = d;
                b.__gui = a;
                J["default"].extend(b, {
                    options: function(d) {
                        if (1 < arguments.length) {
                            var e = b.__li.nextElementSibling;
                            b.remove();
                            return h(a, b.object, b.property, {
                                before: e,
                                factoryArgs: [J["default"].toArray(arguments)]
                            })
                        }
                        if (J["default"].isArray(d) || J["default"].isObject(d)) return e = b.__li.nextElementSibling, b.remove(), h(a, b.object, b.property, {
                            before: e,
                            factoryArgs: [d]
                        })
                    },
                    name: function(a) {
                        b.__li.firstElementChild.firstElementChild.innerHTML = a;
                        return b
                    },
                    listen: function() {
                        b.__gui.listen(b);
                        return b
                    },
                    remove: function() {
                        b.__gui.remove(b);
                        return b
                    }
                });
                if (b instanceof G["default"])(function() {
                    var a = new F["default"](b.object, b.property, {
                        min: b.__min,
                        max: b.__max,
                        step: b.__step
                    });
                    J["default"].each(["updateDisplay", "onChange", "onFinishChange", "step"], function(d) {
                        var e = b[d],
                            f = a[d];
                        b[d] = a[d] = function() {
                            var d = Array.prototype.slice.call(arguments);
                            f.apply(a, d);
                            return e.apply(b, d)
                        }
                    });
                    D["default"].addClass(d, "has-slider");
                    b.domElement.insertBefore(a.domElement, b.domElement.firstElementChild)
                })();
                else if (b instanceof F["default"]) {
                    var e = function(d) {
                        if (J["default"].isNumber(b.__min) && J["default"].isNumber(b.__max)) {
                            d = b.__li.firstElementChild.firstElementChild.innerHTML;
                            var e = -1 < b.__gui.__listening.indexOf(b);
                            b.remove();
                            var f = h(a, b.object, b.property, {
                                before: b.__li.nextElementSibling,
                                factoryArgs: [b.__min, b.__max, b.__step]
                            });
                            f.name(d);
                            e && f.listen();
                            return f
                        }
                        return d
                    };
                    b.min = J["default"].compose(e, b.min);
                    b.max = J["default"].compose(e, b.max)
                } else b instanceof z["default"] ? (D["default"].bind(d, "click", function() {
                    D["default"].fakeEvent(b.__checkbox,
                        "click")
                }), D["default"].bind(b.__checkbox, "click", function(a) {
                    a.stopPropagation()
                })) : b instanceof x["default"] ? (D["default"].bind(d, "click", function() {
                    D["default"].fakeEvent(b.__button, "click")
                }), D["default"].bind(d, "mouseover", function() {
                    D["default"].addClass(b.__button, "hover")
                }), D["default"].bind(d, "mouseout", function() {
                    D["default"].removeClass(b.__button, "hover")
                })) : b instanceof E["default"] && (D["default"].addClass(d, "color"), b.updateDisplay = J["default"].compose(function(a) {
                    d.style.borderLeftColor =
                        b.__color.toString();
                    return a
                }, b.updateDisplay), b.updateDisplay());
                b.setValue = J["default"].compose(function(d) {
                    a.getRoot().__preset_select && b.isModified() && k(a.getRoot(), !0);
                    return d
                }, b.setValue)
            }

            function d(a, d) {
                var b = a.getRoot(),
                    e = b.__rememberedObjects.indexOf(d.object);
                if (-1 !== e) {
                    var f = b.__rememberedObjectIndecesToControllers[e];
                    void 0 === f && (f = {}, b.__rememberedObjectIndecesToControllers[e] = f);
                    f[d.property] = d;
                    if (b.load && b.load.remembered) {
                        b = b.load.remembered;
                        if (b[a.preset]) b = b[a.preset];
                        else if (b.Default) b =
                            b.Default;
                        else return;
                        b[e] && void 0 !== b[e][d.property] && (e = b[e][d.property], d.initialValue = e, d.setValue(e))
                    }
                }
            }

            function h(b, e, h, k) {
                if (void 0 === e[h]) throw Error('Object "' + e + '" has no property "' + h + '"');
                k.color ? e = new E["default"](e, h) : (e = [e, h].concat(k.factoryArgs), e = A["default"].apply(b, e));
                k.before instanceof B["default"] && (k.before = k.before.__li);
                d(b, e);
                D["default"].addClass(e.domElement, "c");
                h = document.createElement("span");
                D["default"].addClass(h, "property-name");
                h.innerHTML = e.property;
                var l = document.createElement("div");
                l.appendChild(h);
                l.appendChild(e.domElement);
                k = a(b, l, k.before);
                D["default"].addClass(k, K.CLASS_CONTROLLER_ROW);
                e instanceof E["default"] ? D["default"].addClass(k, "color") : D["default"].addClass(k, u(e.getValue()));
                f(b, k, e);
                b.__controllers.push(e);
                return e
            }

            function m(a, d, b) {
                var e = document.createElement("option");
                e.innerHTML = d;
                e.value = d;
                a.__preset_select.appendChild(e);
                b && (a.__preset_select.selectedIndex = a.__preset_select.length - 1)
            }

            function q(a) {
                var d = a.__save_row = document.createElement("li");
                D["default"].addClass(a.domElement,
                    "has-save");
                a.__ul.insertBefore(d, a.__ul.firstChild);
                D["default"].addClass(d, "save-row");
                var b = document.createElement("span");
                b.innerHTML = "&nbsp;";
                D["default"].addClass(b, "button gears");
                var e = document.createElement("span");
                e.innerHTML = "Save";
                D["default"].addClass(e, "button");
                D["default"].addClass(e, "save");
                var f = document.createElement("span");
                f.innerHTML = "New";
                D["default"].addClass(f, "button");
                D["default"].addClass(f, "save-as");
                var h = document.createElement("span");
                h.innerHTML = "Revert";
                D["default"].addClass(h,
                    "button");
                D["default"].addClass(h, "revert");
                var k = a.__preset_select = document.createElement("select");
                a.load && a.load.remembered ? J["default"].each(a.load.remembered, function(d, b) {
                    m(a, b, b === a.preset)
                }) : m(a, "Default", !1);
                D["default"].bind(k, "change", function() {
                    for (var d = 0; d < a.__preset_select.length; d++) a.__preset_select[d].innerHTML = a.__preset_select[d].value;
                    a.preset = this.value
                });
                d.appendChild(k);
                d.appendChild(b);
                d.appendChild(e);
                d.appendChild(f);
                d.appendChild(h);
                I && function() {
                    var d = document.getElementById("dg-local-explain"),
                        b = document.getElementById("dg-local-storage");
                    document.getElementById("dg-save-locally").style.display = "block";
                    "true" === localStorage.getItem(document.location.href + ".isLocal") && b.setAttribute("checked", "checked");
                    d.style.display = a.useLocalStorage ? "block" : "none";
                    D["default"].bind(b, "change", function() {
                        a.useLocalStorage = !a.useLocalStorage;
                        d.style.display = a.useLocalStorage ? "block" : "none"
                    })
                }();
                var l = document.getElementById("dg-new-constructor");
                D["default"].bind(l, "keydown", function(a) {
                    !a.metaKey || 67 !==
                        a.which && 67 !== a.keyCode || L.hide()
                });
                D["default"].bind(b, "click", function() {
                    l.innerHTML = JSON.stringify(a.getSaveObject(), void 0, 2);
                    L.show();
                    l.focus();
                    l.select()
                });
                D["default"].bind(e, "click", function() {
                    a.save()
                });
                D["default"].bind(f, "click", function() {
                    var d = prompt("Enter a new preset name.");
                    d && a.saveAs(d)
                });
                D["default"].bind(h, "click", function() {
                    a.revert()
                })
            }

            function n(a) {
                function d(d) {
                    d.preventDefault();
                    a.width += f - d.clientX;
                    a.onResize();
                    f = d.clientX;
                    return !1
                }

                function b() {
                    D["default"].removeClass(a.__closeButton,
                        K.CLASS_DRAG);
                    D["default"].unbind(window, "mousemove", d);
                    D["default"].unbind(window, "mouseup", b)
                }

                function e(e) {
                    e.preventDefault();
                    f = e.clientX;
                    D["default"].addClass(a.__closeButton, K.CLASS_DRAG);
                    D["default"].bind(window, "mousemove", d);
                    D["default"].bind(window, "mouseup", b);
                    return !1
                }
                var f = void 0;
                a.__resize_handle = document.createElement("div");
                J["default"].extend(a.__resize_handle.style, {
                    width: "6px",
                    marginLeft: "-3px",
                    height: "200px",
                    cursor: "ew-resize",
                    position: "absolute"
                });
                D["default"].bind(a.__resize_handle,
                    "mousedown", e);
                D["default"].bind(a.__closeButton, "mousedown", e);
                a.domElement.insertBefore(a.__resize_handle, a.domElement.firstElementChild)
            }

            function r(a, d) {
                a.domElement.style.width = d + "px";
                a.__save_row && a.autoPlace && (a.__save_row.style.width = d + "px");
                a.__closeButton && (a.__closeButton.style.width = d + "px")
            }

            function t(a, d) {
                var b = {};
                J["default"].each(a.__rememberedObjects, function(e, f) {
                    var h = {};
                    J["default"].each(a.__rememberedObjectIndecesToControllers[f], function(a, b) {
                        h[b] = d ? a.initialValue : a.getValue()
                    });
                    b[f] = h
                });
                return b
            }

            function w(a) {
                0 !== a.length && C["default"].call(window, function() {
                    w(a)
                });
                J["default"].each(a, function(a) {
                    a.updateDisplay()
                })
            }
            var u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" === typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
            };
            b = e(18);
            b = l(b);
            var v = e(19),
                y = l(v),
                v = e(20),
                A = l(v),
                v = e(7),
                B = l(v),
                v = e(8),
                z = l(v),
                v = e(15),
                x = l(v),
                v = e(13),
                F = l(v),
                v = e(14),
                G = l(v),
                v = e(16),
                E = l(v),
                v = e(21),
                C = l(v),
                v = e(22),
                H = l(v),
                v = e(9),
                D = l(v),
                v = e(5),
                J = l(v);
            e = e(23);
            e = l(e);
            b["default"].inject(e["default"]);
            var I;
            try {
                I = "localStorage" in window && null !== window.localStorage
            } catch (T) {
                I = !1
            }
            var L = void 0,
                M = !0,
                N = void 0,
                O = !1,
                Q = [],
                K = function R(d) {
                    function b() {
                        var a = e.getRoot();
                        a.width += 1;
                        J["default"].defer(function() {
                            --a.width
                        })
                    }
                    var e = this,
                        f = d || {};
                    this.domElement = document.createElement("div");
                    this.__ul = document.createElement("ul");
                    this.domElement.appendChild(this.__ul);
                    D["default"].addClass(this.domElement, "dg");
                    this.__folders = {};
                    this.__controllers = [];
                    this.__rememberedObjects = [];
                    this.__rememberedObjectIndecesToControllers = [];
                    this.__listening = [];
                    f = J["default"].defaults(f, {
                        autoPlace: !0,
                        width: R.DEFAULT_WIDTH
                    });
                    f = J["default"].defaults(f, {
                        resizable: f.autoPlace,
                        hideable: f.autoPlace
                    });
                    J["default"].isUndefined(f.load) ? f.load = {
                        preset: "Default"
                    } : f.preset && (f.load.preset = f.preset);
                    J["default"].isUndefined(f.parent) && f.hideable && Q.push(this);
                    f.resizable = J["default"].isUndefined(f.parent) && f.resizable;
                    f.autoPlace && J["default"].isUndefined(f.scrollable) &&
                        (f.scrollable = !0);
                    var h = I && "true" === localStorage.getItem(document.location.href + ".isLocal"),
                        k = void 0;
                    Object.defineProperties(this, {
                        parent: {
                            get: function() {
                                return f.parent
                            }
                        },
                        scrollable: {
                            get: function() {
                                return f.scrollable
                            }
                        },
                        autoPlace: {
                            get: function() {
                                return f.autoPlace
                            }
                        },
                        preset: {
                            get: function() {
                                return e.parent ? e.getRoot().preset : f.load.preset
                            },
                            set: function(a) {
                                e.parent ? e.getRoot().preset = a : f.load.preset = a;
                                for (a = 0; a < this.__preset_select.length; a++) this.__preset_select[a].value === this.preset && (this.__preset_select.selectedIndex =
                                    a);
                                e.revert()
                            }
                        },
                        width: {
                            get: function() {
                                return f.width
                            },
                            set: function(a) {
                                f.width = a;
                                r(e, a)
                            }
                        },
                        name: {
                            get: function() {
                                return f.name
                            },
                            set: function(a) {
                                f.name = a;
                                titleRowName && (titleRowName.innerHTML = f.name)
                            }
                        },
                        closed: {
                            get: function() {
                                return f.closed
                            },
                            set: function(a) {
                                f.closed = a;
                                f.closed ? D["default"].addClass(e.__ul, R.CLASS_CLOSED) : D["default"].removeClass(e.__ul, R.CLASS_CLOSED);
                                this.onResize();
                                e.__closeButton && (e.__closeButton.innerHTML = a ? R.TEXT_OPEN : R.TEXT_CLOSED)
                            }
                        },
                        load: {
                            get: function() {
                                return f.load
                            }
                        },
                        useLocalStorage: {
                            get: function() {
                                return h
                            },
                            set: function(a) {
                                I && ((h = a) ? D["default"].bind(window, "unload", k) : D["default"].unbind(window, "unload", k), localStorage.setItem(document.location.href + ".isLocal", a))
                            }
                        }
                    });
                    J["default"].isUndefined(f.parent) ? (f.closed = !1, D["default"].addClass(this.domElement, R.CLASS_MAIN), D["default"].makeSelectable(this.domElement, !1), I && h && (e.useLocalStorage = !0, d = localStorage.getItem(document.location.href + ".gui")) && (f.load = JSON.parse(d)), this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = R.TEXT_CLOSED,
                        D["default"].addClass(this.__closeButton, R.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), D["default"].bind(this.__closeButton, "click", function() {
                            e.closed = !e.closed
                        })) : (void 0 === f.closed && (f.closed = !0), d = document.createTextNode(f.name), D["default"].addClass(d, "controller-name"), d = a(e, d), D["default"].addClass(this.__ul, R.CLASS_CLOSED), D["default"].addClass(d, "title"), D["default"].bind(d, "click", function(a) {
                        a.preventDefault();
                        e.closed = !e.closed;
                        return !1
                    }), f.closed || (this.closed = !1));
                    f.autoPlace && (J["default"].isUndefined(f.parent) && (M && (N = document.createElement("div"), D["default"].addClass(N, "dg"), D["default"].addClass(N, R.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(N), M = !1), N.appendChild(this.domElement), D["default"].addClass(this.domElement, R.CLASS_AUTO_PLACE)), this.parent || r(e, f.width));
                    this.__resizeHandler = function() {
                        e.onResize()
                    };
                    D["default"].bind(window, "resize", this.__resizeHandler);
                    D["default"].bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler);
                    D["default"].bind(this.__ul, "transitionend", this.__resizeHandler);
                    D["default"].bind(this.__ul, "oTransitionEnd", this.__resizeHandler);
                    this.onResize();
                    f.resizable && n(this);
                    this.saveToLocalStorageIfPossible = k = function() {
                        I && "true" === localStorage.getItem(document.location.href + ".isLocal") && localStorage.setItem(document.location.href + ".gui", JSON.stringify(e.getSaveObject()))
                    };
                    f.parent || b()
                };
            K.toggleHide = function() {
                O = !O;
                J["default"].each(Q, function(a) {
                    a.domElement.style.display = O ? "none" : ""
                })
            };
            K.CLASS_AUTO_PLACE =
                "a";
            K.CLASS_AUTO_PLACE_CONTAINER = "ac";
            K.CLASS_MAIN = "main";
            K.CLASS_CONTROLLER_ROW = "cr";
            K.CLASS_TOO_TALL = "taller-than-window";
            K.CLASS_CLOSED = "closed";
            K.CLASS_CLOSE_BUTTON = "close-button";
            K.CLASS_DRAG = "drag";
            K.DEFAULT_WIDTH = 245;
            K.TEXT_CLOSED = "Close Controls";
            K.TEXT_OPEN = "Open Controls";
            K._keydownHandler = function(a) {
                "text" === document.activeElement.type || 72 !== a.which && 72 !== a.keyCode || K.toggleHide()
            };
            D["default"].bind(window, "keydown", K._keydownHandler, !1);
            J["default"].extend(K.prototype, {
                add: function(a,
                    d) {
                    return h(this, a, d, {
                        factoryArgs: Array.prototype.slice.call(arguments, 2)
                    })
                },
                addColor: function(a, d) {
                    return h(this, a, d, {
                        color: !0
                    })
                },
                remove: function(a) {
                    this.__ul.removeChild(a.__li);
                    this.__controllers.splice(this.__controllers.indexOf(a), 1);
                    var d = this;
                    J["default"].defer(function() {
                        d.onResize()
                    })
                },
                destroy: function() {
                    this.autoPlace && N.removeChild(this.domElement);
                    D["default"].unbind(window, "keydown", K._keydownHandler, !1);
                    D["default"].unbind(window, "resize", this.__resizeHandler);
                    this.saveToLocalStorageIfPossible &&
                        D["default"].unbind(window, "unload", this.saveToLocalStorageIfPossible)
                },
                addFolder: function(d) {
                    if (void 0 !== this.__folders[d]) throw Error('You already have a folder in this GUI by the name "' + d + '"');
                    var b = {
                        name: d,
                        parent: this
                    };
                    b.autoPlace = this.autoPlace;
                    this.load && this.load.folders && this.load.folders[d] && (b.closed = this.load.folders[d].closed, b.load = this.load.folders[d]);
                    b = new K(b);
                    this.__folders[d] = b;
                    d = a(this, b.domElement);
                    D["default"].addClass(d, "folder");
                    return b
                },
                open: function() {
                    this.closed = !1
                },
                close: function() {
                    this.closed = !0
                },
                onResize: J["default"].debounce(function() {
                    var a = this.getRoot();
                    if (a.scrollable) {
                        var d = D["default"].getOffset(a.__ul).top,
                            b = 0;
                        J["default"].each(a.__ul.childNodes, function(d) {
                            a.autoPlace && d === a.__save_row || (b += D["default"].getHeight(d))
                        });
                        window.innerHeight - d - 20 < b ? (D["default"].addClass(a.domElement, K.CLASS_TOO_TALL), a.__ul.style.height = window.innerHeight - d - 20 + "px") : (D["default"].removeClass(a.domElement, K.CLASS_TOO_TALL), a.__ul.style.height = "auto")
                    }
                    a.__resize_handle && J["default"].defer(function() {
                        a.__resize_handle.style.height =
                            a.__ul.offsetHeight + "px"
                    });
                    a.__closeButton && (a.__closeButton.style.width = a.width + "px")
                }, 200),
                remember: function() {
                    J["default"].isUndefined(L) && (L = new H["default"], L.domElement.innerHTML = y["default"]);
                    if (this.parent) throw Error("You can only call remember on a top level GUI.");
                    var a = this;
                    J["default"].each(Array.prototype.slice.call(arguments), function(d) {
                        0 === a.__rememberedObjects.length && q(a); - 1 === a.__rememberedObjects.indexOf(d) && a.__rememberedObjects.push(d)
                    });
                    this.autoPlace && r(this, this.width)
                },
                getRoot: function() {
                    for (var a = this; a.parent;) a = a.parent;
                    return a
                },
                getSaveObject: function() {
                    var a = this.load;
                    a.closed = this.closed;
                    0 < this.__rememberedObjects.length && (a.preset = this.preset, a.remembered || (a.remembered = {}), a.remembered[this.preset] = t(this));
                    a.folders = {};
                    J["default"].each(this.__folders, function(d, b) {
                        a.folders[b] = d.getSaveObject()
                    });
                    return a
                },
                save: function() {
                    this.load.remembered || (this.load.remembered = {});
                    this.load.remembered[this.preset] = t(this);
                    k(this, !1);
                    this.saveToLocalStorageIfPossible()
                },
                saveAs: function(a) {
                    this.load.remembered || (this.load.remembered = {}, this.load.remembered.Default = t(this, !0));
                    this.load.remembered[a] = t(this);
                    this.preset = a;
                    m(this, a, !0);
                    this.saveToLocalStorageIfPossible()
                },
                revert: function(a) {
                    J["default"].each(this.__controllers, function(b) {
                        this.getRoot().load.remembered ? d(a || this.getRoot(), b) : b.setValue(b.initialValue);
                        b.__onFinishChange && b.__onFinishChange.call(b, b.getValue())
                    }, this);
                    J["default"].each(this.__folders, function(a) {
                        a.revert(a)
                    });
                    a || k(this.getRoot(), !1)
                },
                listen: function(a) {
                    var d = 0 === this.__listening.length;
                    this.__listening.push(a);
                    d && w(this.__listening)
                },
                updateDisplay: function() {
                    J["default"].each(this.__controllers, function(a) {
                        a.updateDisplay()
                    });
                    J["default"].each(this.__folders, function(a) {
                        a.updateDisplay()
                    })
                }
            });
            p.exports = K
        }, function(p, b) {
            p.exports = {
                load: function(b, l) {
                    var a = l || document,
                        e = a.createElement("link");
                    e.type = "text/css";
                    e.rel = "stylesheet";
                    e.href = b;
                    a.getElementsByTagName("head")[0].appendChild(e)
                },
                inject: function(b, l) {
                    var a = l || document,
                        e =
                        document.createElement("style");
                    e.type = "text/css";
                    e.innerHTML = b;
                    a = a.getElementsByTagName("head")[0];
                    try {
                        a.appendChild(e)
                    } catch (f) {}
                }
            }
        }, function(p, b) {
            p.exports = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'
        },
        function(p, b, e) {
            function l(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            b.__esModule = !0;
            p = e(10);
            var a = l(p);
            p = e(13);
            var k = l(p);
            p = e(14);
            var f = l(p);
            p = e(11);
            var d = l(p);
            p = e(15);
            var h = l(p);
            p = e(8);
            var m = l(p);
            e = e(5);
            var q = l(e);
            b["default"] = function(b, e, l, p, u) {
                var n = b[e];
                return q["default"].isArray(l) || q["default"].isObject(l) ? new a["default"](b, e, l) : q["default"].isNumber(n) ? q["default"].isNumber(l) && q["default"].isNumber(p) ? q["default"].isNumber(u) ? new f["default"](b, e, l, p, u) : new f["default"](b, e, l, p) : q["default"].isNumber(u) ?
                    new k["default"](b, e, {
                        min: l,
                        max: p,
                        step: u
                    }) : new k["default"](b, e, {
                        min: l,
                        max: p
                    }) : q["default"].isString(n) ? new d["default"](b, e) : q["default"].isFunction(n) ? new h["default"](b, e, "") : q["default"].isBoolean(n) ? new m["default"](b, e) : null
            }
        },
        function(p, b) {
            function e(b) {
                setTimeout(b, 1E3 / 60)
            }
            b.__esModule = !0;
            b["default"] = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || e
        },
        function(p, b, e) {
            b.__esModule = !0;
            var l = (p = e(9)) && p.__esModule ? p : {
                    "default": p
                },
                a = (e = e(5)) && e.__esModule ? e : {
                    "default": e
                };
            e = function() {
                function b() {
                    if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function");
                    this.backgroundElement = document.createElement("div");
                    a["default"].extend(this.backgroundElement.style, {
                        backgroundColor: "rgba(0,0,0,0.8)",
                        top: 0,
                        left: 0,
                        display: "none",
                        zIndex: "1000",
                        opacity: 0,
                        WebkitTransition: "opacity 0.2s linear",
                        transition: "opacity 0.2s linear"
                    });
                    l["default"].makeFullscreen(this.backgroundElement);
                    this.backgroundElement.style.position = "fixed";
                    this.domElement = document.createElement("div");
                    a["default"].extend(this.domElement.style, {
                        position: "fixed",
                        display: "none",
                        zIndex: "1001",
                        opacity: 0,
                        WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                        transition: "transform 0.2s ease-out, opacity 0.2s linear"
                    });
                    document.body.appendChild(this.backgroundElement);
                    document.body.appendChild(this.domElement);
                    var e = this;
                    l["default"].bind(this.backgroundElement, "click", function() {
                        e.hide()
                    })
                }
                b.prototype.show =
                    function() {
                        var b = this;
                        this.backgroundElement.style.display = "block";
                        this.domElement.style.display = "block";
                        this.domElement.style.opacity = 0;
                        this.domElement.style.webkitTransform = "scale(1.1)";
                        this.layout();
                        a["default"].defer(function() {
                            b.backgroundElement.style.opacity = 1;
                            b.domElement.style.opacity = 1;
                            b.domElement.style.webkitTransform = "scale(1)"
                        })
                    };
                b.prototype.hide = function() {
                    var a = this,
                        d = function m() {
                            a.domElement.style.display = "none";
                            a.backgroundElement.style.display = "none";
                            l["default"].unbind(a.domElement,
                                "webkitTransitionEnd", m);
                            l["default"].unbind(a.domElement, "transitionend", m);
                            l["default"].unbind(a.domElement, "oTransitionEnd", m)
                        };
                    l["default"].bind(this.domElement, "webkitTransitionEnd", d);
                    l["default"].bind(this.domElement, "transitionend", d);
                    l["default"].bind(this.domElement, "oTransitionEnd", d);
                    this.backgroundElement.style.opacity = 0;
                    this.domElement.style.opacity = 0;
                    this.domElement.style.webkitTransform = "scale(1.1)"
                };
                b.prototype.layout = function() {
                    this.domElement.style.left = window.innerWidth / 2 - l["default"].getWidth(this.domElement) /
                        2 + "px";
                    this.domElement.style.top = window.innerHeight / 2 - l["default"].getHeight(this.domElement) / 2 + "px"
                };
                return b
            }();
            b["default"] = e
        },
        function(p, b, e) {
            b = p.exports = e(24)();
            b.push([p.id, ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid transparent; }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: #000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.color {\n    border-left: 3px solid; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2FA1D6; }\n    .dg .cr.number input[type=text] {\n      color: #2FA1D6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2FA1D6;\n    max-width: 100%; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n",
                ""
            ])
        },
        function(p, b) {
            p.exports = function() {
                var b = [];
                b.toString = function() {
                    for (var b = [], a = 0; a < this.length; a++) {
                        var e = this[a];
                        e[2] ? b.push("@media " + e[2] + "{" + e[1] + "}") : b.push(e[1])
                    }
                    return b.join("")
                };
                b.i = function(e, a) {
                    "string" === typeof e && (e = [
                        [null, e, ""]
                    ]);
                    for (var k = {}, f = 0; f < this.length; f++) {
                        var d = this[f][0];
                        "number" === typeof d && (k[d] = !0)
                    }
                    for (f = 0; f < e.length; f++) d = e[f], "number" === typeof d[0] && k[d[0]] || (a && !d[2] ? d[2] = a : a && (d[2] = "(" + d[2] + ") and (" + a + ")"), b.push(d))
                };
                return b
            }
        }
    ])
});
(function() {
    var p = this || Function("return this")(),
        b = function() {
            function b() {}

            function l(a, d) {
                for (var b in a) Object.hasOwnProperty.call(a, b) && d(b)
            }

            function a(a, d) {
                return l(d, function(b) {
                    a[b] = d[b]
                }), a
            }

            function k(a, d) {
                l(d, function(b) {
                    "undefined" == typeof a[b] && (a[b] = d[b])
                })
            }

            function f(a, b, e, f, h, k, l) {
                var m, n, p;
                a = k > a ? 0 : (a - k) / h;
                for (m in b) b.hasOwnProperty(m) && (n = l[m], p = "function" == typeof n ? n : r[n], b[m] = d(e[m], f[m], p, a));
                return b
            }

            function d(a, d, b, e) {
                return a + (d - a) * b(e)
            }

            function h(a, d) {
                var b = n.prototype.filter,
                    e = a._filterArgs;
                l(b, function(f) {
                    "undefined" != typeof b[f][d] && b[f][d].apply(a, e)
                })
            }

            function m(a, d, b, e, k, l, m, n, p, q, r) {
                A = d + b + e;
                B = Math.min(r || y(), A);
                z = B >= A;
                x = e - (A - B);
                a.isPlaying() && (z ? (p(m, a._attachment, x), a.stop(!0)) : (a._scheduleId = q(a._timeoutHandler, u), h(a, "beforeTween"), d + b > B ? f(1, k, l, m, 1, 1, n) : f(B, k, l, m, e, d + b, n), h(a, "afterTween"), p(k, a._attachment, x)))
            }

            function q(a, d) {
                var b = {},
                    e = typeof d;
                return "string" === e || "function" === e ? l(a, function(a) {
                    b[a] = d
                }) : l(a, function(a) {
                    b[a] || (b[a] = d[a] || w)
                }), b
            }

            function n(a,
                d) {
                this._currentState = a || {};
                this._configured = !1;
                this._scheduleFunction = t;
                "undefined" != typeof d && this.setConfig(d)
            }
            var r, t, w = "linear",
                u = 1E3 / 60,
                v = Date.now ? Date.now : function() {
                    return +new Date
                },
                y = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : v;
            t = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
            var A,
                B, z, x;
            return n.prototype.tween = function(a) {
                    return this._isTweening ? this : (void 0 === a && this._configured || this.setConfig(a), this._timestamp = y(), this._start(this.get(), this._attachment), this.resume())
                }, n.prototype.setConfig = function(d) {
                    d = d || {};
                    this._configured = !0;
                    this._attachment = d.attachment;
                    this._scheduleId = this._pausedAtTime = null;
                    this._delay = d.delay || 0;
                    this._start = d.start || b;
                    this._step = d.step || b;
                    this._finish = d.finish || b;
                    this._duration = d.duration || 500;
                    this._currentState = a({}, d.from) || this.get();
                    this._originalState =
                        this.get();
                    this._targetState = a({}, d.to) || this.get();
                    var e = this;
                    this._timeoutHandler = function() {
                        m(e, e._timestamp, e._delay, e._duration, e._currentState, e._originalState, e._targetState, e._easing, e._step, e._scheduleFunction)
                    };
                    var f = this._currentState,
                        l = this._targetState;
                    return k(l, f), this._easing = q(f, d.easing || w), this._filterArgs = [f, this._originalState, l, this._easing], h(this, "tweenCreated"), this
                }, n.prototype.get = function() {
                    return a({}, this._currentState)
                }, n.prototype.set = function(a) {
                    this._currentState =
                        a
                }, n.prototype.pause = function() {
                    return this._pausedAtTime = y(), this._isPaused = !0, this
                }, n.prototype.resume = function() {
                    return this._isPaused && (this._timestamp += y() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
                }, n.prototype.seek = function(a) {
                    a = Math.max(a, 0);
                    var d = y();
                    return 0 === this._timestamp + a ? this : (this._timestamp = d - a, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, m(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState,
                        this._targetState, this._easing, this._step, this._scheduleFunction, d), this.pause()), this)
                }, n.prototype.stop = function(a) {
                    return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = b, (p.cancelAnimationFrame || p.webkitCancelAnimationFrame || p.oCancelAnimationFrame || p.msCancelAnimationFrame || p.mozCancelRequestAnimationFrame || p.clearTimeout)(this._scheduleId), a && (h(this, "beforeTween"), f(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), h(this, "afterTween"), h(this, "afterTweenEnd"),
                        this._finish.call(this, this._currentState, this._attachment)), this
                }, n.prototype.isPlaying = function() {
                    return this._isTweening && !this._isPaused
                }, n.prototype.setScheduleFunction = function(a) {
                    this._scheduleFunction = a
                }, n.prototype.dispose = function() {
                    for (var a in this) this.hasOwnProperty(a) && delete this[a]
                }, n.prototype.filter = {}, n.prototype.formula = {
                    linear: function(a) {
                        return a
                    }
                }, r = n.prototype.formula, a(n, {
                    now: y,
                    each: l,
                    tweenProps: f,
                    tweenProp: d,
                    applyFilter: h,
                    shallowCopy: a,
                    defaults: k,
                    composeEasingObject: q
                }),
                "function" == typeof SHIFTY_DEBUG_NOW && (p.timeoutHandler = m), "object" == typeof exports ? module.exports = n : "function" == typeof define && define.amd ? define(function() {
                    return n
                }) : "undefined" == typeof p.Tweenable && (p.Tweenable = n), n
        }();
    ! function() {
        b.shallowCopy(b.prototype.formula, {
            easeInQuad: function(b) {
                return Math.pow(b, 2)
            },
            easeOutQuad: function(b) {
                return -(Math.pow(b - 1, 2) - 1)
            },
            easeInOutQuad: function(b) {
                return 1 > (b /= .5) ? .5 * Math.pow(b, 2) : -.5 * ((b -= 2) * b - 2)
            },
            easeInCubic: function(b) {
                return Math.pow(b, 3)
            },
            easeOutCubic: function(b) {
                return Math.pow(b -
                    1, 3) + 1
            },
            easeInOutCubic: function(b) {
                return 1 > (b /= .5) ? .5 * Math.pow(b, 3) : .5 * (Math.pow(b - 2, 3) + 2)
            },
            easeInQuart: function(b) {
                return Math.pow(b, 4)
            },
            easeOutQuart: function(b) {
                return -(Math.pow(b - 1, 4) - 1)
            },
            easeInOutQuart: function(b) {
                return 1 > (b /= .5) ? .5 * Math.pow(b, 4) : -.5 * ((b -= 2) * Math.pow(b, 3) - 2)
            },
            easeInQuint: function(b) {
                return Math.pow(b, 5)
            },
            easeOutQuint: function(b) {
                return Math.pow(b - 1, 5) + 1
            },
            easeInOutQuint: function(b) {
                return 1 > (b /= .5) ? .5 * Math.pow(b, 5) : .5 * (Math.pow(b - 2, 5) + 2)
            },
            easeInSine: function(b) {
                return -Math.cos(Math.PI /
                    2 * b) + 1
            },
            easeOutSine: function(b) {
                return Math.sin(Math.PI / 2 * b)
            },
            easeInOutSine: function(b) {
                return -.5 * (Math.cos(Math.PI * b) - 1)
            },
            easeInExpo: function(b) {
                return 0 === b ? 0 : Math.pow(2, 10 * (b - 1))
            },
            easeOutExpo: function(b) {
                return 1 === b ? 1 : -Math.pow(2, -10 * b) + 1
            },
            easeInOutExpo: function(b) {
                return 0 === b ? 0 : 1 === b ? 1 : 1 > (b /= .5) ? .5 * Math.pow(2, 10 * (b - 1)) : .5 * (-Math.pow(2, -10 * --b) + 2)
            },
            easeInCirc: function(b) {
                return -(Math.sqrt(1 - b * b) - 1)
            },
            easeOutCirc: function(b) {
                return Math.sqrt(1 - Math.pow(b - 1, 2))
            },
            easeInOutCirc: function(b) {
                return 1 >
                    (b /= .5) ? -.5 * (Math.sqrt(1 - b * b) - 1) : .5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
            },
            easeOutBounce: function(b) {
                return 1 / 2.75 > b ? 7.5625 * b * b : 2 / 2.75 > b ? 7.5625 * (b -= 1.5 / 2.75) * b + .75 : 2.5 / 2.75 > b ? 7.5625 * (b -= 2.25 / 2.75) * b + .9375 : 7.5625 * (b -= 2.625 / 2.75) * b + .984375
            },
            easeInBack: function(b) {
                return b * b * (2.70158 * b - 1.70158)
            },
            easeOutBack: function(b) {
                return --b * b * (2.70158 * b + 1.70158) + 1
            },
            easeInOutBack: function(b) {
                var e = 1.70158;
                return 1 > (b /= .5) ? .5 * b * b * (((e *= 1.525) + 1) * b - e) : .5 * ((b -= 2) * b * (((e *= 1.525) + 1) * b + e) + 2)
            },
            elastic: function(b) {
                return -1 * Math.pow(4, -8 * b) * Math.sin(2 * (6 * b - 1) * Math.PI / 2) + 1
            },
            swingFromTo: function(b) {
                var e = 1.70158;
                return 1 > (b /= .5) ? .5 * b * b * (((e *= 1.525) + 1) * b - e) : .5 * ((b -= 2) * b * (((e *= 1.525) + 1) * b + e) + 2)
            },
            swingFrom: function(b) {
                return b * b * (2.70158 * b - 1.70158)
            },
            swingTo: function(b) {
                return --b * b * (2.70158 * b + 1.70158) + 1
            },
            bounce: function(b) {
                return 1 / 2.75 > b ? 7.5625 * b * b : 2 / 2.75 > b ? 7.5625 * (b -= 1.5 / 2.75) * b + .75 : 2.5 / 2.75 > b ? 7.5625 * (b -= 2.25 / 2.75) * b + .9375 : 7.5625 * (b -= 2.625 / 2.75) * b + .984375
            },
            bouncePast: function(b) {
                return 1 / 2.75 > b ? 7.5625 * b * b : 2 / 2.75 > b ? 2 - (7.5625 * (b -= 1.5 /
                    2.75) * b + .75) : 2.5 / 2.75 > b ? 2 - (7.5625 * (b -= 2.25 / 2.75) * b + .9375) : 2 - (7.5625 * (b -= 2.625 / 2.75) * b + .984375)
            },
            easeFromTo: function(b) {
                return 1 > (b /= .5) ? .5 * Math.pow(b, 4) : -.5 * ((b -= 2) * Math.pow(b, 3) - 2)
            },
            easeFrom: function(b) {
                return Math.pow(b, 4)
            },
            easeTo: function(b) {
                return Math.pow(b, .25)
            }
        })
    }();
    (function() {
        function e(a, b, e, d, h, l) {
            function f(a, b) {
                var d, e, f, h, l;
                f = a;
                for (l = 0; 8 > l; l++) {
                    if (h = ((k * f + m) * f + p) * f - a, (0 <= h ? h : 0 - h) < b) return f;
                    if (e = (3 * k * f + 2 * m) * f + p, 1E-6 > (0 <= e ? e : 0 - e)) break;
                    f -= h / e
                }
                if (d = 0, e = 1, f = a, d > f) return d;
                if (f > e) return e;
                for (; e > d;) {
                    h = ((k * f + m) * f + p) * f;
                    l = h - a;
                    if ((0 <= l ? l : 0 - l) < b) break;
                    a > h ? d = f : e = f;
                    f = .5 * (e - d) + d
                }
                return f
            }
            var k = 0,
                m = 0,
                p = 0,
                w = 0,
                u = 0,
                v = 0;
            return p = 3 * b, m = 3 * (d - b) - p, k = 1 - p - m, v = 3 * e, u = 3 * (h - e) - v, w = 1 - v - u,
                function(a, b) {
                    var d = f(a, b);
                    return ((w * d + u) * d + v) * d
                }(a, 1 / (200 * l))
        }

        function l(a, b, f, d) {
            return function(h) {
                return e(h, a, b, f, d, 1)
            }
        }
        b.setBezierFunction = function(a, e, f, d, h) {
            var k = l(e, f, d, h);
            return k.displayName = a, k.x1 = e, k.y1 = f, k.x2 = d, k.y2 = h, b.prototype.formula[a] = k
        };
        b.unsetBezierFunction = function(a) {
            delete b.prototype.formula[a]
        }
    })();
    (function() {
        var e = new b;
        e._filterArgs = [];
        b.interpolate = function(l, a, k, f, d) {
            var h = b.shallowCopy({}, l);
            d = d || 0;
            f = b.composeEasingObject(l, f || "linear");
            e.set({});
            var m = e._filterArgs;
            m.length = 0;
            m[0] = h;
            m[1] = l;
            m[2] = a;
            m[3] = f;
            b.applyFilter(e, "tweenCreated");
            b.applyFilter(e, "beforeTween");
            l = b.tweenProps(k, h, l, a, 1, d, f);
            return b.applyFilter(e, "afterTween"), l
        }
    })();
    (function(b) {
        function e(d) {
            b.each(d, function(b) {
                var e = d[b];
                "string" == typeof e && e.match(y) && (d[b] = k(y, e, a))
            })
        }

        function a(a) {
            var b = a;
            a = (b = b.replace(/#/,
                ""), 3 === b.length && (b = b.split(""), b = b[0] + b[0] + b[1] + b[1] + b[2] + b[2]), B[0] = parseInt(b.substr(0, 2), 16), B[1] = parseInt(b.substr(2, 2), 16), B[2] = parseInt(b.substr(4, 2), 16), B);
            return "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")"
        }

        function k(a, b, d) {
            var e = b.match(a);
            a = b.replace(a, A);
            if (e)
                for (var f = e.length, h = 0; f > h; h++) b = e.shift(), a = a.replace(A, d(b));
            return a
        }

        function f(a) {
            var b = a.match(w),
                d = b.length;
            a = a.match(v)[0];
            for (var e = 0; d > e; e++) a += parseInt(b[e], 10) + ",";
            return a.slice(0, -1) + ")"
        }

        function d(a) {
            var d = {};
            return b.each(a,
                function(b) {
                    var e = a[b];
                    if ("string" == typeof e) {
                        for (var f = e.match(w), h = e.match(t), e = (h ? (1 === h.length || e[0].match(r)) && h.unshift("") : h = ["", ""], h.join(A)), h = [], k = f.length, f = 0; k > f; f++) h.push("_" + b + "_" + f);
                        d[b] = {
                            formatString: e,
                            chunkNames: h
                        }
                    }
                }), d
        }

        function h(a, d) {
            b.each(d, function(b) {
                for (var e = a[b].match(w), f = e.length, h = 0; f > h; h++) a[d[b].chunkNames[h]] = +e[h];
                delete a[b]
            })
        }

        function m(a, d) {
            b.each(d, function(b) {
                for (var e = d[b].chunkNames, h, l = {}, m = e.length, n = 0; m > n; n++) h = e[n], l[h] = a[h], delete a[h];
                e = d[b].chunkNames;
                z.length = 0;
                h = e.length;
                for (m = 0; h > m; m++) z.push(l[e[m]]);
                l = z;
                e = d[b].formatString;
                h = l.length;
                for (m = 0; h > m; m++) e = e.replace(A, +l[m].toFixed(4));
                a[b] = k(u, e, f)
            })
        }

        function p(a, d) {
            b.each(d, function(b) {
                var e, f = d[b].chunkNames,
                    h = f.length,
                    k = a[b];
                if ("string" == typeof k) {
                    var k = k.split(" "),
                        l = k[k.length - 1];
                    for (e = 0; h > e; e++) a[f[e]] = k[e] || l
                } else
                    for (e = 0; h > e; e++) a[f[e]] = k;
                delete a[b]
            })
        }

        function n(a, d) {
            b.each(d, function(b) {
                var e = d[b].chunkNames,
                    f = e.length,
                    h = a[e[0]];
                if ("string" === typeof h) {
                    for (var h = "", k = 0; f > k; k++) h += " " +
                        a[e[k]], delete a[e[k]];
                    a[b] = h.substr(1)
                } else a[b] = h
            })
        }
        var r = /(\d|\-|\.)/,
            t = /([^\-0-9\.]+)/g,
            w = /[0-9.\-]+/g,
            u = new RegExp("rgb\\(" + w.source + /,\s*/.source + w.source + /,\s*/.source + w.source + "\\)", "g"),
            v = /^.*\(/,
            y = /#([0-9]|[a-f]){3,6}/gi,
            A = "VAL",
            B = [],
            z = [];
        b.prototype.filter.token = {
            tweenCreated: function(a, b, f, h) {
                e(a);
                e(b);
                e(f);
                this._tokenData = d(a)
            },
            beforeTween: function(a, b, d, e) {
                p(e, this._tokenData);
                h(a, this._tokenData);
                h(b, this._tokenData);
                h(d, this._tokenData)
            },
            afterTween: function(a, b, d, e) {
                m(a, this._tokenData);
                m(b, this._tokenData);
                m(d, this._tokenData);
                n(e, this._tokenData)
            }
        }
    })(b)
}).call(null);
window.network = {};
network.msgFrom = [];
network.environmentDataArray = [];
network.playersData = [];
network.keyStats = [-1, -1, -1];
network.ipR = [];
network.serversCount = 0;
network.connectThreshold = 0;
network.addSocket = function(p) {
    network.socket = p;
    p.on("a", this.onPlayersData);
    p.on("e", this.environmentData);
    p.on("m", this.onMsg);
    p.on("n", this.onOtherPlayerName);
    p.on("c", this.onOtherPlayerNameChange);
    p.on("kr", function() { console.log("Lol they tried to kick you"); });
    p.on("disconnect", function() { console.log("Something tried to disconnect you"); });
    p.on("connect_error", function() {})
};
network.disconnect = function() {
    "undefined" == typeof network.doNotTriggerDisconnect && (alert("Disconnected from server, PLEASE RELOAD"), location.reload())
};
network.onExtraTabOpened = function() {
    console.log("onExtraTabOpened");
    window.location = "/spam.html";
    network.doNotTriggerDisconnect = !0
};
network.onLockCheckPoint = function(p) {
    p = p.split(",");
    var b = parseInt(p[0]),
        e = parseInt(p[1]);
    plyer.position = [b, e];
    console.log("onLockCheckPoint: " + p);
    plyer.gravityScale = 1;
    plyer.velocity[0] = 0;
    plyer.velocity[1] = 0
};
network.kick = function(p) {
    null != this.socket && this.socket.emit("k", p)
};
network.onOtherPlayerNameChange = function(p) {
    p = p.split(",");
    g.isDefined(livePlayers[parseInt(index)]) && (livePlayers[parseInt(p[0])].gPlayer.nameText.text = p[1])
};
network.onMsg = function(p) {
    network.msgFrom[network.msgFrom.length] = p
};
network.sendMsg = function(p) {
    null != this.socket && this.socket.emit("1", p)
};
network.requestForBio = function(p) {
    this.socket.emit("b", p)
};
network.sendMyBio = function(p) {
    this.socket.emit("d", p)
};
network.environmentData = function(p) {
    "" != p && (network.environmentDataArray[network.environmentDataArray.length] = p)
};
window.livePlayers = [];
window.indexOfLivePlayers = [];
var oldPlayersIndex = [],
    newPlayersIndex = [];
network.onResetToLastCheckPoint = function(p) {
    p = p.split(",");
    var b = physics.xAxis(parseInt(p[0]), 0);
    p = physics.yAxis(parseInt(p[1]), 0);
    plyer.position = [b, p]
};
network.onPlayersData = function(p) {
    p = p.substr(0, p.length - 1);
    p = p.split(",");
    indexOfLivePlayers = [];
    for (var b = 0; b < p.length && "" != p[0]; b += 5) {
        var e = parseInt(p[b]),
            l = physics.xAxis(parseFloat(p[b + 1]), 1),
            a = physics.yAxis(parseFloat(p[b + 2]), 1),
            k = p[b + 3],
            f = p[b + 4],
            d;
        newPlayersIndex[newPlayersIndex.length] = e;
        indexOfLivePlayers[newPlayersIndex.length] = e;
        if ("undefined" == typeof livePlayers[e] || null == livePlayers[e]) {
            d = {};
            d.last2Packets = [{
                x: l,
                y: a
            }, {
                x: l,
                y: a
            }];
            var h = {
                x: l,
                y: a,
                width: 30,
                height: 100,
                dynamic: !0,
                plzReturn: !0
            };
            console.log("skin: " + f);
            f = 0;
            d.gPlayer = graphics.createPlayerSpawn(graphicsWorld, {
                playerSpawn: JSON.stringify(h)
            }, "skins/" + f + ".png");
            d.position = [l, a];
            d.gPlayer.index = e;
            livePlayers[e] = d;
            network.requestForBio(e);
            d.gPlayer.currentSkin = f
        }
        d = livePlayers[e];
        d.last2Packets[0] = d.last2Packets[1];
        d.last2Packets[1] = {
            x: l,
            y: a
        };
        d.startX = d.last2Packets[0].x;
        d.startY = d.last2Packets[0].y;
        d.gPlayer.currentSkin != f && (d.gPlayer.currentSkin = f, console.log("now loading skin: " + f), graphics.loadTextureFromUrl("skins/" + f + ".png",
            "skins/0.png", d.gPlayer));
        "" != k && (d.gPlayer.nameText.text = k)
    }
    for (b = 0; b < oldPlayersIndex.length; b++) "number" == typeof oldPlayersIndex[b] && -1 == newPlayersIndex.indexOf(oldPlayersIndex[b]) && (p = livePlayers[oldPlayersIndex[b]], graphicsWorld.graphicsLayer.removeChild(p.gPlayer), graphicsWorld.textLayer.removeChild(p.gPlayer.chatText), graphicsWorld.textLayer.removeChild(p.gPlayer.nameText), livePlayers[oldPlayersIndex[b]] = null);
    indexOfLivePlayers = oldPlayersIndex = newPlayersIndex;
    newPlayersIndex = []
};
network.sendPlayerStats = function(p) {
    null != this.socket && "" != p && "" != p && this.socket.emit("0", p)
};
var g = {
    generateNameId: function() {
        for (var p = "", b = 0; 2 > b; b++) p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
        return "Bro " + p
    },
    isNumber: function(p) {
        return "number" !== typeof p || isNaN(p) ? !1 : !0
    },
    shuffleArray: function(p) {
        for (var b = p.length, e, l; 0 !== b;) l = Math.floor(Math.random() * b), --b, e = p[b], p[b] = p[l], p[l] = e;
        return p
    },
    per: function(p, b) {
        return p / 100 * b
    },
    ajaxGetReq: function(p, b) {
        var e = new XMLHttpRequest;
        e.withCredentials = !0;
        e.evtHandler = b;
        e.onreadystatechange =
            function() {
                4 == this.readyState && 200 == this.status && this.evtHandler(e.responseText)
            };
        e.open("GET", p, !0);
        e.send()
    },
    getRandomNumber: function(p, b) {
        return Math.floor(Math.random() * b + p)
    },
    isStorageSupported: function() {
        try {
            return localStorage.setItem("testing", "testing"), localStorage.removeItem("testing"), !0
        } catch (p) {
            return !1
        }
    },
    isItemStored: function(p) {
        p = localStorage.getItem(p);
        return null == p || "undefined" == typeof p ? !1 : !0
    },
    setItem: function(p, b) {
        localStorage.setItem(p, b)
    },
    getItem: function(p) {
        return localStorage.getItem(p)
    },
    deleteFromArray: function(p, b) {
        return p.splice(b, 1)
    },
    isOnce: function(p) {
        return p.isOnce = g.isDefined(p.isOnce) ? !1 : !0
    },
    copyArray: function(p) {
        for (var b = [], e = 0; e < p.length; e++) b[b.length] = p[e];
        return b
    },
    c: function(p) {
        console.log(p)
    },
    isDefined: function(p) {
        return "undefined" == typeof p ? !1 : !0
    },
    toInt: function(p) {
        return parseInt(p)
    },
    round: function(p) {
        return Math.round(p)
    },
    roundUpto: function(p) {
        return parseFloat(p.toFixed(2))
    },
    hmm: function(p) {
        1 == p.moving && (p.position[0] += p.directionX * p.speed, p.position[1] += p.directionY *
            p.speed, Math.sqrt(Math.pow(p.position[0] - p.startX, 2) + Math.pow(p.position[1] - p.startY, 2)) >= p.distance && (p.position[0] = p.endX, p.position[1] = p.endY, p.moving = !1))
    },
    abs: function(p) {
        return Math.abs(p)
    },
    getPoint: function(p, b, e, l, a) {
        g.distanceBetweenPoints(p, b, e, l);
        l = g.getSlopeGivenTwoPoints(p, b, e, l);
        var k = p + a / Math.sqrt(1 + Math.pow(l, 2)),
            f = p - a / Math.sqrt(1 + Math.pow(l, 2));
        return 0 == p && 0 == e ? [0, b + a] : k >= p && k <= e ? [k, l * (k - p) + b] : [f, l * (f - p) + b]
    },
    distanceBetweenPoints: function(p, b, e, l) {
        return Math.sqrt(Math.pow(p - e, 2) +
            Math.pow(b - l, 2))
    },
    getSlopeGivenTwoPoints: function(p, b, e, l) {
        return (b - l) / (p - e)
    },
    pointBetweenTwoPointsGivenXorYvalue: function(p, b, e, l, a, k) {
        null == a && null != k ? a = (k - b) / ((l - b) / (e - p)) + p : null == k && null != a ? k = (l - b) / (e - p) * (a - p) + b : c("both can't be null");
        return [a, k]
    },
    getPointAtDistanceGivenTwoPoints: function(p, b, e) {
        return [0 > p[1] - b[1] ? b[1] - e : b[1] + e, 0]
    },
    isServer: function() {
        return "undefined" === typeof window ? !0 : !1
    },
    msToHMS: function(p) {
        p /= 1E3;
        var b = parseInt(p / 3600);
        p %= 3600;
        var e = parseInt(p / 60);
        return b + ":" + e + ":" + p % 60 +
            ":"
    },
    addWindowNotActiveTrigger: function() {
        function p(e) {
            var l = {
                focus: "visible",
                focusin: "visible",
                pageshow: "visible",
                blur: "hidden",
                focusout: "hidden",
                pagehide: "hidden"
            };
            e = e || window.event;
            e = e.type in l ? l[e.type] : this[b] ? "hidden" : "visible";
            console.log(document.body.className);
            "visible" == e ? MainLoop.start() : "hidden" == e ? MainLoop.stop() : MainLoop.start()
        }
        var b = "hidden";
        b in document ? document.addEventListener("visibilitychange", p) : (b = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", p) :
            (b = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", p) : (b = "msHidden") in document ? document.addEventListener("msvisibilitychange", p) : "onfocusin" in document ? document.onfocusin = document.onfocusout = p : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = p;
        void 0 !== document[b] && p({
            type: document[b] ? "blur" : "focus"
        })
    }
};
g.isServer() && (module.exports = g);
if ("undefined" === typeof window) var g = require("./generalFunctions.js"),
    p2 = require("./lib/p2.min.js");
var physics = {};
g.isServer() && (module.exports = physics);
physics.allowedPonits = [];
physics.length = function(p, b) {
    return 0 == b ? p / 100 : 100 * p
};
physics.xAxis = function(p, b) {
    return physics.length(p, b)
};
physics.yAxis = function(p, b) {
    return -1 * physics.length(p, b)
};
physics.createWorld = function() {
    var p = new p2.World;
    p.allManualDynamicPhysicsObjects = [];
    p.networkedPhysicsObjects = [];
    this.defineAllContactMaterials(p);
    this.defineCollisionGroup(p);
    this.attachContactEvents(p);
    return p
};
physics.createRectangle = function(p, b, e, l, a, k, f) {
    e = e || 100;
    l = l || 100;
    a = a || 0;
    k = k || 0;
    fixedRotation = g.isDefined(f) ? !1 : !0;
    f = new p2.Box({
        width: physics.length(e, 0),
        height: physics.length(l, 0)
    });
    p = new p2.Body({
        mass: a,
        position: [physics.xAxis(p, 0), physics.yAxis(b, 0)],
        fixedRotation: fixedRotation
    });
    p.angle = -k;
    p.addShape(f);
    return p
};
physics.createCircle = function(p, b) {
    var e = new p2.Circle({
            radius: physics.length(100, 0)
        }),
        l = new p2.Body({
            mass: 1,
            position: [physics.xAxis(p, 0), physics.yAxis(b, 0)],
            fixedRotation: !0
        });
    l.addShape(e);
    return l
};
physics.createPlane = function(p, b) {
    var e = new p2.Plane,
        l = new p2.Body({
            position: [physics.xAxis(p, 0), physics.yAxis(b, 0)]
        });
    l.addShape(e);
    return l
};
physics.addBodyToWorld = function(p, b) {
    p.addBody(b);
    return !0
};
physics.createRay = function(p, b) {
    b = "any" == b ? p2.Ray.ANY : "closest" == b ? p2.Ray.CLOSEST : p2.Ray.ALL;
    var e = new p2.Ray({
        mode: b,
        callback: null
    });
    physics.addWhomToCollide(p, e, "ray");
    var l = new p2.RaycastResult;
    return {
        ray: e,
        result: l
    }
};
physics.drawRaysFromBelowPlayer = function(p, b) {
    var e = [b.position[0] + b.shapes[0].width / 2, b.position[1]],
        l = [b.position[0] - b.shapes[0].width / 2, b.position[1]],
        a = [b.position[0], b.position[1]],
        k = [l[0], l[1] - 10],
        f = [a[0], a[1] - 10];
    physics.setRayPosition(b.rayObjectS.ray, e, [e[0], e[1] - 10]);
    var d = physics.drawRayInWorld(p, b.rayObjectS.ray, b.rayObjectS.result),
        e = g.roundUpto(d[0]);
    physics.setRayPosition(b.rayObjectS.ray, l, k);
    d = physics.drawRayInWorld(p, b.rayObjectS.ray, b.rayObjectS.result);
    l = g.roundUpto(d[0]);
    physics.setRayPosition(b.rayObjectS.ray,
        a, f);
    d = physics.drawRayInWorld(p, b.rayObjectS.ray, b.rayObjectS.result);
    a = g.roundUpto(d[0]);
    l = g.abs(l - b.shapes[0].height / 2);
    a = g.abs(a - b.shapes[0].height / 2);
    e = g.abs(e - b.shapes[0].height / 2);
    return [l, a, e]
};
physics.setRayPosition = function(p, b, e) {
    p.from = b;
    p.to = e;
    p.update()
};
physics.getRayPosition = function(p) {
    return {
        from: p.from,
        to: p.to
    }
};
physics.drawRayInWorld = function(p, b, e) {
    e.reset();
    return p.raycast(e, b) ? (p = [0, 0], e.getHitPoint(p, b), [e.getHitDistance(b), p[0], p[1]]) : [3, "infinite", "infinite"]
};
physics.patch = function(p) {
    for (var b = function() {
            this.writable = this.enumerable = !1
        }, e = ["gravityScale", "collisionResponse", "velocityValue", "jumpValue", "mass"], l = 0; l < e.length; l++) Object.defineProperty(p, e[l], new b)
};
physics.velocity = function(p, b, e, l) {
    null != e && "undefined" != typeof e && (b.velocity[0] = physics.xAxis(e, 0));
    null != l && "undefined" != typeof l && (b.velocity[1] = physics.yAxis(l, 0))
};
physics.updateManualDynamicObjects = function(p) {
    for (var b = 0; b < p.allManualDynamicPhysicsObjects.length; b++) p.allManualDynamicPhysicsObjects[b].manualUpdate()
};
physics.lockTwoBodies = function(p, b, e, l) {
    l = l || [0, 0];
    b = new p2.LockConstraint(b, e);
    b.localOffsetB = l;
    b.collideConnected = !1;
    p.addConstraint(b)
};
physics.addIfManualDynamic = function(p, b) {
    "undefined" != typeof b.manualUpdate && (p.allManualDynamicPhysicsObjects[p.allManualDynamicPhysicsObjects.length] = b)
};
physics.addIfDynamic = function(p, b) {
    g.isServer() || g.isDefined(b) || p.dynamic && (allDynamicPhysicsObjects[allDynamicPhysicsObjects.length] = p)
};
physics.attachContactEvents = function(p) {
    p.on("beginContact", function(b) {
        if ("undefined" != typeof b.bodyA.onTouchEvent) b.bodyA.onTouchEvent(b.bodyB, 0);
        if ("undefined" != typeof b.bodyB.onTouchEvent) b.bodyB.onTouchEvent(b.bodyA, 0)
    });
    p.on("endContact", function(b) {
        if ("undefined" != typeof b.bodyA.onTouchEvent) b.bodyA.onTouchEvent(b.bodyB, 1);
        if ("undefined" != typeof b.bodyB.onTouchEvent) b.bodyB.onTouchEvent(b.bodyA, 1)
    })
};
physics.addS = function(p, b) {
    g.isServer() || g.isDefined(b) || (p.sprite = graphics.spritesWithPbody[physics.spriteCounter], physics.spriteCounter++)
};
physics.addForNetwork = function(p, b) {
    b.eid = p.networkedPhysicsObjects.length;
    p.networkedPhysicsObjects[p.networkedPhysicsObjects.length] = b
};
physics.amiInFov = function(p, b, e) {
    if ("undefined" == typeof e) return !1;
    var l = p / 100,
        a = p / 100;
    p = [b.position[0] + l, b.position[1] + a];
    b = [b.position[0] - l, b.position[1] - a];
    l = new p2.AABB;
    l.upperBound = p;
    l.lowerBound = b;
    return l.overlaps(e.aabb)
};
physics.defineAllContactMaterials = function(p) {
    p.material = {};
    p.material.player = new p2.Material;
    p.material.ground = new p2.Material;
    p.material.zombie = new p2.Material;
    p.addContactMaterial(new p2.ContactMaterial(p.material.player, p.material.ground, {
        friction: .3
    }));
    p.addContactMaterial(new p2.ContactMaterial(p.material.zombie, p.material.ground, {
        friction: .3
    }));
    p.addContactMaterial(new p2.ContactMaterial(p.material.player, p.material.zombie, {
        friction: .3
    }))
};
physics.defineCollisionGroup = function(p) {
    p.collisionGroup = {};
    p.collisionGroup.player = Math.pow(2, 0);
    p.collisionGroup.ground = Math.pow(2, 1);
    p.collisionGroup.zombie = Math.pow(2, 2);
    p.collisionGroup.ray = Math.pow(2, 3);
    p.collisionGroup.ball = Math.pow(2, 4);
    p.collisionGroup.invisible = Math.pow(2, 5);
    p.collisionGroup.poison = Math.pow(2, 6)
};
physics.addWhomToCollide = function(p, b, e) {
    if ("undefined" != typeof b.shapes) var l = b.shapes[0];
    "button" == e ? (l.collisionGroup = p.collisionGroup.ground, l.collisionMask = p.collisionGroup.player) : "block" == e ? (l.material = p.material.ground, l.collisionGroup = p.collisionGroup.ground, l.collisionMask = p.collisionGroup.player | p.collisionGroup.zombie | p.collisionGroup.ray | p.collisionGroup.ball) : "ball" == e ? (l.collisionGroup = p.collisionGroup.ball, l.collisionMask = p.collisionGroup.player | p.collisionGroup.ground | p.collisionGroup.ray) :
        "checkPoint" == e ? (l.collisionGroup = p.collisionGroup.ground, l.collisionMask = p.collisionGroup.player) : "player" == e ? (l.material = p.material.player, l.collisionGroup = p.collisionGroup.player, l.collisionMask = p.collisionGroup.ground | p.collisionGroup.ball | p.collisionGroup.poison) : "rotatingPlatform" == e ? (l.material = p.material.ground, l.collisionGroup = p.collisionGroup.ground, l.collisionMask = p.collisionGroup.player | p.collisionGroup.zombie | p.collisionGroup.ray) : "gate" == e ? (l.material = p.material.ground, l.collisionGroup =
            p.collisionGroup.ground, l.collisionMask = p.collisionGroup.player | p.collisionGroup.zombie) : "leaver" == e ? (l.collisionGroup = p.collisionGroup.ground, l.collisionMask = p.collisionGroup.player) : "bridge" == e ? (l.material = p.material.ground, l.collisionGroup = p.collisionGroup.ground, l.collisionMask = p.collisionGroup.player | p.collisionGroup.zombie | p.collisionGroup.ray) : "zombie" == e ? (l.material = p.material.zombie, l.collisionGroup = p.collisionGroup.zombie, l.collisionMask = p.collisionGroup.ground) : "redZone" == e ? (l.collisionGroup =
            p.collisionGroup.ground, l.collisionMask = p.collisionGroup.player) : "zombieSoul" == e ? (l.collisionGroup = p.collisionGroup.ground, l.collisionMask = p.collisionGroup.player) : "poison" == e ? (l.collisionGroup = p.collisionGroup.poison, l.collisionMask = p.collisionGroup.player | p.collisionGroup.zombie) : "ray" == e && (b.collisionGroup = p.collisionGroup.ray, b.collisionMask = p.collisionGroup.ground | p.collisionGroup.ball)
};
physics.spriteCounter = 0;
physics.createBlock = function(p, b) {
    var e = JSON.parse(b.block),
        l = physics.createRectangle(e.x, e.y, e.width, e.height, 0, e.rotation);
    l.dynamic = e.dynamic;
    physics.addWhomToCollide(p, l, "block");
    physics.addBodyToWorld(p, l);
    physics.addS(l);
    physics.addIfDynamic(l);
    this.onTouchEvent = function(a, b) {}
};
physics.createBall = function(p, b) {
    var e = JSON.parse(b.block),
        e = physics.createCircle(e.x, e.y);
    e.dynamic = !0;
    physics.addWhomToCollide(p, e, "ball");
    physics.addBodyToWorld(p, e);
    physics.addS(e);
    physics.addIfDynamic(e);
    g.isServer() || (window.b = e)
};
physics.createPoison = function(p, b) {
    /*
    var e = JSON.parse(b.poison),
        l = physics.createRectangle(e.x, e.y, e.width, e.height, 0, e.rotation);
    physics.addBodyToWorld(p, l);
    l.dynamic = e.dynamic;
    physics.addWhomToCollide(p, l, "poison");
    physics.addS(l);
    physics.addIfDynamic(l);
    l.onTouchEvent = function(a, b) {
        0 == b && a.shapes[0].collisionGroup == this.world.collisionGroup.player && (a.position = [a.lastCheckPoint[0], a.lastCheckPoint[1]], a.validPosition = [a.lastCheckPoint[0], a.lastCheckPoint[1]])
    };
    l.syncData = function() {};
    l.applyData =
        function() {}
    */
};
physics.createCheckPoint = function(p, b) {
    var e = JSON.parse(b.checkPoint),
        l = physics.createRectangle(e.x, e.y, e.width, e.height);
    l.shapes[0].sensor = !0;
    l.dynamic = e.dynamic;
    physics.addWhomToCollide(p, l, "checkPoint");
    physics.addBodyToWorld(p, l);
    physics.addS(l);
    physics.addIfDynamic(l);
    this.checkPointBodyRef = l;
    l.onTouchEvent = function(a, b) {
        0 == b && (a.lastCheckPoint = [this.position[0], this.position[1]])
    }
};
physics.createPlayerSpawn = function(p, b) {
    var e = JSON.parse(b.playerSpawn),
        l, a, k = physics.createRay(p, "closest");
    g.isServer() || g.isDefined(e.plzReturn) ? (sensorValue = !0, l = 0, a = null) : (sensorValue = !1, l = 1, a = physics.createRay(p, "closest"));
    var f = physics.createRectangle(e.x, e.y, e.width, e.height, 1);
    f.gravityScale = l;
    f.rayObject = a;
    f.rayObjectS = k;
    f.damping = .9;
    f.shapes[0].sensor = sensorValue;
    f.dynamic = e.dynamic;
    f.lastCheckPoint = [f.position[0], f.position[1]];
    f.old = [f.position[0], f.position[1]];
    physics.allowedPonits[physics.allowedPonits.length] = {
        x: e.x,
        y: e.y
    };
    f.mine = "player";
    physics.addWhomToCollide(p, f, "player");
    physics.addS(f, e.plzReturn);
    physics.addIfDynamic(f, e.plzReturn);
    physics.addBodyToWorld(p, f);
    f.onGround = 0;
    f.velocityValue = 300;
    f.jumpValue = 800;
    f.velocityValues = 900;
    f.jumpValues = 1000;
    this.velocityValues = 900;
    this.jumpValues = 1000;
    physics.patch(f);
    f.jump = function(){
        var margin = (ply.shapes[0].width/100)*10;
        var fromRight = [ply.position[0]+(ply.shapes[0].width/2)-margin, ply.position[1]];
        var fromLeft = [ply.position[0]-(ply.shapes[0].width/2)+margin, ply.position[1]];
        var toRight = [fromRight[0], fromRight[1]-12];
        var toLeft = [fromLeft[0], fromLeft[1]-12];
        var fromC = ply.position;
        var toC = [fromLeft[0], fromLeft[1]-12];
        physics.setRayPosition(ply.rayObject.ray, fromRight, toRight);
        var disRight = physics.drawRayInWorld(physicsWorld, ply.rayObject.ray, ply.rayObject.result);
        physics.setRayPosition(ply.rayObject.ray, fromLeft, toLeft);
        var disLeft = physics.drawRayInWorld(physicsWorld, ply.rayObject.ray, ply.rayObject.result);
        physics.setRayPosition(ply.rayObject.ray, fromC, toC);
        var disC = physics.drawRayInWorld(physicsWorld, ply.rayObject.ray, ply.rayObject.result);
        disLeft = Math.round(disLeft*100);
        disC = Math.round(disC*100);
        disRight = Math.round(disRight*100);
        var neg  = Math.round((ply.shapes[0].height/2)*100);
        disLeft = Math.abs(disLeft-neg);
        disC = Math.abs(disC-neg);
        disRight = Math.abs(disRight-neg);
        physics.velocity(physicsWorld, this, null, -this.jumpValues);
    }
    f.left = function() {
        physics.velocity(p, this, -this.velocityValues, null)
    };
    f.right = function() {
        physics.velocity(p, this, this.velocityValues, null)
    };
    f.doNohting = function() {
        physics.velocity(p, this, 0, null)
    };
    f.syncData = function() {
        return g.roundUpto(this.position[0]) + "," + g.roundUpto(this.position[1])
    };
    f.applyData = function(a) {
        a = a.split(",");
        var b = parseInt(a[0]);
        a = parseInt(a[1]);
        var d = physics.xAxis(b, 0),
            e = physics.yAxis(a, 0);
        this.position = [d, e];
        return [b, a]
    };
    f.onTouchEvent = function(a, b) {};
    g.isDefined(e.plzReturn) && (f.onTouchEvent = function() {});
    g.isServer() || g.isDefined(plyer) || (window.plyer = f);
    g.isDefined(e.plzReturn) || g.isServer();
    window.plyer.massMultiplier = [0, 2];
    window.ply = window.plyer;
    return f
};
physics.createZombie = function(p, b) {
    var e = JSON.parse(b.zombie),
        l = physics.createRectangle(e.x, e.y, e.width, e.height, 1);
    l.damping = 0;
    l.dynamic = !0;
    l.yes = !0;
    l.zombieSpeed = e.zombieSpeed;
    l.isMoving = !1;
    physics.addS(l);
    physics.addIfDynamic(l);
    physics.addWhomToCollide(p, l, "zombie");
    physics.addForNetwork(p, l);
    physics.addBodyToWorld(p, l);
    e = physics.createRectangle(e.x, e.y, e.width, e.height, 1);
    e.shapes[0].sensor = !0;
    e.damping = 0;
    physics.addWhomToCollide(p, e, "zombieSoul");
    physics.addBodyToWorld(p, e);
    physics.lockTwoBodies(p,
        l, e);
    e.onTouchEvent = function(a, b) {
        a.shapes[0].collisionGroup == p.collisionGroup.player && 0 == b && (a.position = [a.lastCheckPoint[0], a.lastCheckPoint[1]])
    };
    l.syncData = function() {
        var a = Math.round(physics.xAxis(this.position[0], 1)),
            b = Math.round(physics.yAxis(this.position[1], 1));
        return a + "," + b + "," + this.direction
    };
    l.applyData = function(a) {};
    e = JSON.parse(b.redZone);
    e = physics.createRectangle(e.x, e.y, e.width, e.height, 1);
    e.shapes[0].sensor = !0;
    e.dynamic = !0;
    e.damping = 0;
    e.zombieBodyRef = l;
    e.playersCount = 0;
    physics.addS(e);
    physics.addIfDynamic(e);
    physics.addWhomToCollide(p, e, "redZone");
    physics.addBodyToWorld(p, e);
    e.onTouchEvent = function(a, b) {
        0 == b ? (this.palyerRef = a, this.playersCount++, g.c("in red zone")) : (g.c("out red zone"), this.playersCount--)
    };
    e.manualUpdate = function(a) {
        a = 0;
        0 < this.playersCount && (a = this.zombieBodyRef.position[0] < this.palyerRef.position[0] ? 1 : -1);
        physics.velocity(p, this.zombieBodyRef, a * this.zombieBodyRef.zombieSpeed, null);
        this.zombieBodyRef.direction = a
    };
    physics.addIfManualDynamic(p, e);
    physics.lockTwoBodies(p,
        l, e)
};
physics.createLeaverAndBridge = function(p, b) {
    var e = JSON.parse(b.leaver),
        l = JSON.parse("[" + b.linkedObjects + "]"),
        a = JSON.parse("[" + b.linkedLeaverObjects + "]"),
        e = physics.createRectangle(e.x, e.y, e.width, e.height);
    e.bridgeList = [];
    e.leaverCopyList = [];
    e.shapes[0].sensor = !0;
    e.leaverBodyRef = e;
    e.leaverInteractionValue = "l";
    e.movingDirection = "ab";
    physics.addWhomToCollide(p, e, "leaver");
    physics.addBodyToWorld(p, e);
    physics.addS(e);
    physics.addForNetwork(p, e);
    var k = function() {
            var a, b;
            "ba" == this.leaverBodyRef.movingDirection ? (a =
                this.handleB[0] < this.handleA[0] ? 1 : -1, b = this.handleB[1] < this.handleA[1] ? 1 : -1, this.velocity[0] = this.horiSpeed * a, this.velocity[1] = this.vertSpeed * b) : "ab" == this.leaverBodyRef.movingDirection ? (a = this.handleB[0] < this.handleA[0] ? -1 : 1, b = this.handleB[1] < this.handleA[1] ? -1 : 1, this.velocity[0] = this.horiSpeed * a, this.velocity[1] = this.vertSpeed * b) : this.velocity = [0, 0]
        },
        f = function(a, b) {
            if (1 != b && g.isServer()) {
                this.leaverInteractionValue = "l" == this.leaverInteractionValue ? "r" : "l";
                this.leaverBodyRef.movingDirection = "ab" ==
                    this.leaverBodyRef.movingDirection ? "ba" : "ab";
                for (var d = 0; d < this.leaverBodyRef.bridgeList.length; d++) this.leaverBodyRef.bridgeList[d].setBridgeMotion();
                console.log("this.leaverInteractionValue: " + this.leaverInteractionValue)
            }
        },
        d = function() {
            return this.leaverInteractionValue
        },
        h = function(a) {
            this.leaverInteractionValue = a;
            this.sprite.pBodyMsg(this.leaverInteractionValue)
        };
    e.onTouchEvent = f;
    e.syncData = d;
    e.applyData = h;
    for (var m = 0; m < l.length; m++) {
        var q = l[m],
            n = physics.createRectangle(q.x, q.y, q.width, q.height);
        physics.addBodyToWorld(p, n);
        physics.addWhomToCollide(p, n, "bridge");
        physics.addForNetwork(p, n);
        physics.addS(n);
        n.dynamic = !0;
        physics.addIfDynamic(n);
        n.movingSpeed = q.movingSpeed;
        n.handleA = [physics.xAxis(q.handleX, 0), physics.yAxis(q.handleY, 0)];
        n.handleB = [g.roundUpto(n.position[0]), g.roundUpto(n.position[1])];
        n.horiSpeed = g.abs(g.abs(n.handleA[0]) - g.abs(n.handleB[0])) / n.movingSpeed;
        n.vertSpeed = g.abs(g.abs(n.handleA[1]) - g.abs(n.handleB[1])) / n.movingSpeed;
        g.abs(g.abs(n.handleA[0]) - g.abs(n.handleB[0])) < g.abs(g.abs(n.handleA[1]) -
            g.abs(n.handleB[1])) ? n.choosenIndex = 1 : n.choosenIndex = 0;
        e.bridgeList[e.bridgeList.length] = n;
        n.leaverBodyRef = e;
        n.leaverChanged = !1;
        n.moving = !1;
        n.nowRun = !1;
        n.setBridgeMotion = k;
        g.isServer() || (window.myBr = n);
        n.syncData = function() {
            var a = g.roundUpto(this.position[0]),
                b = g.roundUpto(this.position[1]);
            return a + "," + b + "," + (0 == this.velocity[0] && 0 == this.velocity[1] ? "" : this.leaverBodyRef.movingDirection)
        };
        n.applyData = function(a) {
            a = a.split(",");
            var b = parseFloat(a[0]),
                d = parseFloat(a[1]);
            this.position = [b, d];
            a = a[2];
            "" != a && (this.leaverBodyRef.movingDirection = a, this.setBridgeMotion())
        };
        n.manualUpdate = function(a) {
            this.position[this.choosenIndex] < this.handleA[this.choosenIndex] && this.position[this.choosenIndex] < this.handleB[this.choosenIndex] && (this.position = a = this.handleB[this.choosenIndex] < this.handleA[this.choosenIndex] ? [this.handleB[0], this.handleB[1]] : [this.handleA[0], this.handleA[1]], this.velocity = [0, 0]);
            this.position[this.choosenIndex] > this.handleA[this.choosenIndex] && this.position[this.choosenIndex] > this.handleB[this.choosenIndex] &&
                (this.position = a = this.handleB[this.choosenIndex] < this.handleA[this.choosenIndex] ? [this.handleA[0], this.handleA[1]] : [this.handleB[0], this.handleB[1]], this.velocity = [0, 0])
        };
        physics.addIfManualDynamic(p, n)
    }
    for (m = 0; m < a.length; m++) l = a[m], l = physics.createRectangle(l.x, l.y, l.width, l.height), l.shapes[0].sensor = !0, l.leaverBodyRef = e, l.imCpy = !0, l.leaverInteractionValue = "l", physics.addWhomToCollide(p, l, "leaver"), physics.addForNetwork(p, l), physics.addBodyToWorld(p, l), physics.addS(l), e.leaverCopyList[e.leaverCopyList.length] =
        l, l.onTouchEvent = f, l.syncData = d, l.applyData = h
};
physics.createButtonAndGate = function(p, b) {
    var e = JSON.parse(b.button),
        l = JSON.parse("[" + b.linkedObjects + "]"),
        a = JSON.parse("[" + b.linkedButtonObjects + "]"),
        e = physics.createRectangle(e.x, e.y, e.width, e.height);
    e.gatesList = [];
    e.buttonCopyList = [];
    e.shapes[0].sensor = !0;
    e.buttonBodyRef = e;
    e.buttonInteractionValue = 1;
    physics.addWhomToCollide(p, e, "button");
    physics.addBodyToWorld(p, e);
    physics.addS(e);
    physics.addForNetwork(p, e);
    var k = function(a, b) {
            if ("undefined" === typeof window) {
                this.buttonInteractionValue = b;
                "undefined" ==
                typeof this.pressCount && (this.pressCount = 0);
                0 == this.buttonInteractionValue ? this.pressCount++ : this.pressCount--;
                0 < this.pressCount && (this.buttonInteractionValue = 0);
                var d = [],
                    e;
                e = d[0] = this.buttonBodyRef.buttonInteractionValue;
                for (var f = 0; f < this.buttonBodyRef.buttonCopyList.length; f++) d[d.length] = this.buttonBodyRef.buttonCopyList[f].buttonInteractionValue;
                for (f = 1; f < d.length; f++) e = parseInt(e) & parseInt(d[f]);
                d = 0 == e ? !0 : !1;
                for (f = 0; f < this.buttonBodyRef.gatesList.length; f++) e = this.buttonBodyRef.gatesList[f],
                    e.shapes[0].sensor = d ? !e.onButtonPressVisible : e.onButtonPressVisible
            }
        },
        f = function() {
            return this.buttonInteractionValue
        },
        d = function(a) {
            this.buttonInteractionValue = a;
            this.sprite.pBodyMsg("button", a)
        };
    e.onTouchEvent = k;
    e.syncData = f;
    e.applyData = d;
    for (var h = 0; h < l.length; h++) {
        var m = l[h],
            q = physics.createRectangle(m.x, m.y, m.width, m.height, 0, m.rotation);
        q.networkValue = 1;
        q.onButtonPressVisible = m.onButtonPressVisible;
        q.shapes[0].sensor = q.onButtonPressVisible ? !0 : !1;
        physics.addWhomToCollide(p, q, "gate");
        physics.addForNetwork(p,
            q);
        physics.addBodyToWorld(p, q);
        physics.addS(q);
        e.gatesList[e.gatesList.length] = q;
        "undefined" != typeof buttonC && 3 == buttonC && (q.makeIn = !0);
        q.syncData = function() {
            return this.shapes[0].sensor ? "0" : "1"
        };
        q.applyData = function(a) {
            this.shapes[0].sensor = "0" == a ? !0 : !1;
            this.shapes[0].sensor ? (this.shapes[0].collisionGroup = this.world.collisionGroup.invisible, this.sprite.pBodyMsg("gate", "0")) : (this.shapes[0].collisionGroup = this.world.collisionGroup.ground, this.shapes[0].collisionMask = this.world.collisionGroup.player |
                this.world.collisionGroup.ray, this.sprite.pBodyMsg("gate", "1"))
        }
    }
    for (h = 0; h < a.length; h++) l = a[h], l = physics.createRectangle(l.x, l.y, l.width, l.height), l.shapes[0].sensor = !0, l.buttonBodyRef = e, l.gatesList = e.gatesList, l.buttonInteractionValue = 1, physics.addBodyToWorld(p, l), physics.addWhomToCollide(p, l, "button"), physics.addS(l), physics.addForNetwork(p, l), e.buttonCopyList[e.buttonCopyList.length] = l, l.onTouchEvent = k, l.syncData = f, l.applyData = d
};
physics.createRotatingPlatform = function(p, b) {
    var e = JSON.parse(b.platform),
        l = physics.createRectangle(e.x, e.y, e.width, e.height, 0, e.rotation, !1);
    physics.addWhomToCollide(p, l, "rotatingPlatform");
    l.angularVelocity = e.clockwise ? -e.rotatingSpeed : e.rotatingSpeed;
    l.dynamic = e.dynamic;
    physics.addBodyToWorld(p, l);
    physics.addS(l);
    physics.addIfDynamic(l);
    physics.addForNetwork(p, l);
    l.syncData = function() {
        return this.angle.toFixed(2)
    };
    l.applyData = function(a) {
        this.angle = parseFloat(a)
    };
    g.isServer() || (window.rpb = l)
};
physics.reset = function() {
    physicsWorld = physics.createWorld();
    allDynamicPhysicsObjects = [];
    allDynamicGraphicalObjects = [];
    physics.attachContactEvents(physicsWorld);
    window.plyer = null
};
physics.parseMap = function(p, b) {
    for (var e = 0; e < b.length; e++) {
        var l = b[e];
        "buttonAndGate" == l.type ? physics.createButtonAndGate(p, l) : "block" == l.type ? physics.createBlock(p, l) : "rotatingPlatform" == l.type ? physics.createRotatingPlatform(p, l) : "playerSpawn" == l.type ? (physics.playerSpawnObj = l, g.isServer() || null != plyer || (window.plyer = physics.createPlayerSpawn(p, l))) : "leaverAndBridge" == l.type ? physics.createLeaverAndBridge(p, l) : "poison" == l.type ? physics.createPoison(p, l) : "zombie" == l.type ? physics.createZombie(p, l) : "checkPoint" ==
            l.type ? physics.createCheckPoint(p, l) : "ball" == l.type && physics.createBall(p, l)
    }
};
var graphics = {};
window.zoomLevel = 1;
window.xInc = 0;
window.yInc = 0;
graphics.as = !1;
graphics.createRenderer = function(p, b, e) {
    p = PIXI.autoDetectRenderer(p, b);
    p.backgroundColor = e;
    p.autoResize = !0;
    p.view.style.marginLeft = "0px";
    p.view.style.marginTop = "0px";
    p.resize(window.innerWidth, window.innerHeight);
    document.body.appendChild(p.view);
    return p
};
graphics.lock = function() {
    g.isStorageSupported() && null !== localStorage.getItem("666") && (document.getElementsByClassName("share")[0].style.display = "none", graphics.as = !0)
};
graphics.handleResize = function() {
    window.renderer.resize(window.innerWidth, window.innerHeight);
    window.zoomLevel = window.innerWidth / 1600;
    "undefined" != typeof editorActive && (zoomLevel = 1);
    graphicsWorld.graphicsLayer.scale.x = zoomLevel;
    graphicsWorld.graphicsLayer.scale.y = zoomLevel;
    for (var p = 0; p < graphicsWorld.textLayer.children.length; p++) {
        var b = graphicsWorld.textLayer.children[p];
        g.isDefined(b.dynamic) || (b.x = b.originalPosition.x * zoomLevel, b.y = b.originalPosition.y * zoomLevel, b.style.fontSize = b.originalFontSize *
            zoomLevel)
    }
};
graphics.createWorld = function() {
    var p = graphics.createContainer(),
        b = graphics.createContainer(),
        e = graphics.createContainer();
    e.addChild(b);
    e.addChild(p);
    e.graphicsLayer = b;
    e.textLayer = p;
    return e
};
graphics.createContainer = function() {
    return new PIXI.Container
};
graphics.setBio = function(p, b) {
    gPlayer.nameText.text = p;
    this.loadTextureFromUrl("skins/" + b + ".png", "skins/0.png", gPlayer)
};
graphics.replaceSpriteTexture = function(p, b) {
    p.setTexture(b.texture)
};
graphics.loadTextureFromUrl = function(p, b, e) {
    "" != p && g.isDefined(p) || (p = b);
    p = new PIXI.BaseTexture.fromImage(p);
    p.hasLoaded ? (b = new PIXI.Texture(p), e.setTexture(b)) : (g.isDefined(p.ref) || (p.ref = []), p.ref[p.ref.length] = {
        sprite: e,
        altImageUrl: b
    }, p.on("loaded", function() {
        if (0 != this.ref.length) {
            for (var b = new PIXI.Texture(this), a = 0; a < this.ref.length; a++) this.ref[a].sprite.setTexture(b);
            this.ref = []
        }
    }))
};
graphics.createRectangle = function(p, b, e, l, a, k, f) {
    a = a || "0x000000";
    e = e || 100;
    l = l || 100;
    k = k || 0;
    f = f || 1;
    var d = new PIXI.Graphics;
    d.beginFill(a);
    d.drawRect(0, 0, e, l);
    d.rotation = k;
    d.x = p;
    d.y = b;
    d.alpha = f;
    d.pivot.x = e / 2;
    d.pivot.y = l / 2;
    return d
};
graphics.createTriangle = function(p, b, e, l, a, k, f) {
    a = a || "0x000000";
    e = e || 100;
    l = l || 100;
    k = k || 0;
    f = new PIXI.Graphics;
    f.beginFill(a);
    f.moveTo(0, 0);
    f.lineTo(-e / 2, l);
    f.lineTo(e / 2, l);
    f.endFill();
    f.pivot.x = -e / 2;
    a = graphics.createContainer();
    a.addChild(f);
    a.x = p;
    a.y = b;
    a.pivot.x = a.width / 2;
    a.pivot.y = a.height / 2;
    a.rotation = k;
    return a
};
graphics.createTextObject = function(p) {
    p = new PIXI.Text(p);
    p.anchor.set(.5, .5);
    return p
};
graphics.getTextCords = function(p, b) {
    return {
        x: p * b.x,
        y: p * b.y
    }
};
graphics.createCircle = function(p, b, e, l) {
    l = l || "0x131cb9";
    e = e || 50;
    var a = new PIXI.Graphics;
    a.beginFill(l);
    a.drawCircle(0, 0, e);
    a.x = p;
    a.y = b;
    return a
};
graphics.createCheckPointSprite = function(p, b) {
    var e = graphics.createTriangle(15, 15, 30, 30, "0xde000d", 1.57),
        l = graphics.createLine([0, 0], [0, 60], "0x000000", 5);
    e.alpha = .7;
    var a = graphics.createContainer();
    a.addChild(e);
    a.addChild(l);
    a.x = p;
    a.y = b;
    a.pivot.x = a.width / 2;
    a.pivot.y = a.height / 2;
    return window.flag = a
};
graphics.createPlayer = function(p, b, e, l, a) {
    a = a || "0x000000";
    e = e || 30;
    var k = l || 100;
    l = graphics.createContainer();
    l.width = e;
    l.height = k;
    var f = graphics.createCircle(e / 2, e / 2, e / 2, a);
    l.addChild(f);
    a = graphics.createRectangle(0, e + 5, e, k - e - 5, a);
    a.pivot.x = a.pivot.y = 0;
    l.addChild(a);
    l.pivot.x = l.width / 2;
    l.pivot.y = l.height / 2;
    l.x = p;
    l.y = b;
    return l
};
graphics.cc = function(p, b) {};
graphics.createPlate = function(p, b, e, l, a, k, f) {
    var d = graphics.createContainer(),
        h = graphics.createRectangle(e / 100 * 10, 0, e / 100 * 80, l / 100 * 40, "0xcf2929", 1, 0, "plate", !1, null, !0);
    h.pivot.x = h.pivot.y = 0;
    e = graphics.createRectangle(0, h.height, e, l / 100 * 20, "0x666666", 1, 0, "plate", !1, null, !0);
    e.pivot.x = e.pivot.y = 0;
    d.addChild(h);
    d.addChild(e);
    d.pivot.x = d.width / 2;
    d.pivot.y = d.height / 2;
    d.x = p;
    d.y = b;
    d.interactive = a;
    d.on("click", k);
    d.dynamic = f;
    d.itemType = "plate";
    return d
};
graphics.createButton = function(p, b) {
    var e = graphics.createContainer(),
        l = graphics.createRectangle(3, 0, 24, 12, "0x00ff00"),
        a = graphics.createRectangle(0, l.height, 30, 6, "0x666666");
    l.pivot.x = l.pivot.y = a.pivot.x = a.pivot.y = 0;
    e.addChild(l);
    e.addChild(a);
    e.pivot.x = e.width / 2;
    e.pivot.y = e.height / 2;
    e.x = p;
    e.y = b;
    return e
};
graphics.createLeaver = function(p, b) {
    var e = graphics.createContainer(),
        l = graphics.createContainer(),
        a = graphics.createContainer(),
        k = graphics.createRectangle(0, 40, 40, 12, "0x666666");
    k.pivot.x = k.pivot.y = 0;
    var f = graphics.createCircle(8.8, 8.8, 8.8, "0xcf2929"),
        d = graphics.createLine([k.x + k.width / 2, k.y + k.height / 2], [f.x, f.y], "0x000000", 4);
    a.addChild(d);
    a.addChild(f);
    a.addChild(k);
    e.addChild(a);
    k = graphics.createRectangle(0, 40, 40, 12, "0x666666");
    k.pivot.x = k.pivot.y = 0;
    f = graphics.createCircle(a.width - 8.8, f.y, 8.8, "0xcf2929");
    d = graphics.createLine([k.x + k.width / 2, k.y + k.height / 2], [f.x, f.y], "0x000000", 4);
    l.addChild(d);
    l.addChild(f);
    l.addChild(k);
    l.alpha = 0;
    e.addChild(l);
    e.pivot.x = e.width / 2;
    e.pivot.y = e.height / 2;
    e.x = p;
    e.y = b;
    e.left = a;
    e.right = l;
    return e
};
graphics.createLine = function(p, b, e, l) {
    var a = new PIXI.Graphics;
    a.lineStyle(l, e, 1);
    a.moveTo(p[0], p[1]);
    a.lineTo(b[0], b[1]);
    return a
};
graphics.drawLine = function(p, b, e) {
    p && (e.removeChild(b), p = graphics.createLine([p.from.x, p.from.y], [p.to.x, p.to.y], 16120149, 1), e.addChild(p))
};
graphics.camera = function(p, b) {
    if ("undefined" != typeof b && null != b) {
        var e = window.renderer.view.width / 2,
            l = window.renderer.view.height / 2,
            e = e / zoomLevel,
            l = l / zoomLevel;
        p.x = (e - b.x) * window.zoomLevel;
        p.y = (l - b.y) * window.zoomLevel
    }
};
graphics.addToGraphicsLayer = function(p, b) {
    p.graphicsLayer.addChild(b)
};
graphics.addToTextLayer = function(p, b) {
    p.textLayer.addChild(b)
};
graphics.addIfDynamic = function(p, b) {
    g.isDefined(b) || p.dynamic && (allDynamicGraphicalObjects[allDynamicGraphicalObjects.length] = p)
};
graphics.addP = function(p, b) {
    g.isDefined(b) || (graphics.spritesWithPbody[graphics.spritesWithPbody.length] = p)
};
graphics.spritesWithPbody = [];
graphics.createLeaverAndBridge = function(p, b) {
    var e = JSON.parse(b.leaver),
        l = JSON.parse("[" + b.linkedObjects + "]"),
        a = JSON.parse("[" + b.linkedLeaverObjects + "]"),
        e = graphics.createLeaver(e.x, e.y);
    e.bridgeList = [];
    e.leaverCopyList = [];
    e.pBodyMsg = function(a) {
        "l" == a ? (this.left.alpha = 1, this.right.alpha = 0) : (this.left.alpha = 0, this.right.alpha = 1)
    };
    graphics.addP(e);
    graphics.addToGraphicsLayer(p, e);
    for (var k = 0; k < l.length; k++) {
        var f = l[k],
            f = graphics.createRectangle(f.x, f.y, f.width, f.height);
        e.bridgeList[e.bridgeList.length] =
            f;
        graphics.addP(f);
        f.dynamic = !0;
        graphics.addIfDynamic(f);
        graphics.addToGraphicsLayer(p, f)
    }
    for (k = 0; k < a.length; k++) f = a[k], f = graphics.createLeaver(f.x, f.y), f.bridgeList = e.bridgeList, e.leaverCopyList[e.leaverCopyList.length] = f, graphics.addP(f), graphics.addToGraphicsLayer(p, f), f.pBodyMsg = function(a) {
        "l" == a ? (this.left.alpha = 1, this.right.alpha = 0) : (this.left.alpha = 0, this.right.alpha = 1)
    }
};
graphics.createButtonAndGate = function(p, b) {
    var e = JSON.parse(b.button),
        l = JSON.parse("[" + b.linkedObjects + "]"),
        a = JSON.parse("[" + b.linkedButtonObjects + "]"),
        e = graphics.createButton(e.x, e.y);
    e.gatesList = [];
    e.buttonCopyList = [];
    var k = function(a, b) {
        var d;
        d = "0" == b ? 0 : 1;
        "button" == a ? this.children[0].alpha = d : this.alpha = d
    };
    e.pBodyMsg = k;
    graphics.addP(e);
    graphics.addToGraphicsLayer(p, e);
    for (var f = 0; f < l.length; f++) {
        var d = l[f],
            h = graphics.createRectangle(d.x, d.y, d.width, d.height, d.fillColor, d.rotation);
        e.gatesList[e.gatesList.length] =
            h;
        graphics.addP(h);
        h.alpha = 0;
        graphics.addToGraphicsLayer(p, h);
        h.pBodyMsg = k;
        h.alpha = d.onButtonPressVisible ? 0 : 1;
        window.gs = h
    }
    for (f = 0; f < a.length; f++) l = a[f], l = graphics.createButton(l.x, l.y), l.gatesList = e.gatesList, e.buttonCopyList[e.buttonCopyList.length] = l, graphics.addP(l), graphics.addToGraphicsLayer(p, l), l.pBodyMsg = k
};
graphics.createText = function(p, b) {
    var e = JSON.parse(b.text),
        l = graphics.createTextObject(e.text);
    l.x = e.x;
    l.y = e.y;
    l.style.fontSize = e.fontSize;
    l.style.fill = e.fill;
    l.originalPosition = {
        x: l.x,
        y: l.y
    };
    l.originalFontSize = l.style.fontSize;
    graphics.addToTextLayer(p, l)
};
graphics.createBlock = function(p, b) {
    var e = JSON.parse(b.block),
        l = graphics.createRectangle(e.x, e.y, e.width, e.height, e.color, e.rotation, e.alpha);
    l.dynamic = e.dynamic;
    graphics.addP(l);
    graphics.addIfDynamic(l);
    graphics.addToGraphicsLayer(p, l)
};
graphics.createBall = function(p, b) {
    var e = JSON.parse(b.block),
        e = graphics.createCircle(e.x, e.y);
    e.dynamic = !0;
    graphics.addP(e);
    graphics.addIfDynamic(e);
    graphics.addToGraphicsLayer(p, e)
};
graphics.createCheckPoint = function(p, b) {
    var e = JSON.parse(b.checkPoint),
        e = graphics.createCheckPointSprite(e.x, e.y);
    e.dynamic = e.dynamic;
    graphics.addP(e);
    graphics.addIfDynamic(e);
    graphics.addToGraphicsLayer(p, e)
};
graphics.createRotatingPlatform = function(p, b) {
    var e = JSON.parse(b.platform),
        l = graphics.createRectangle(e.x, e.y, e.width, e.height, e.color, e.rotation);
    l.dynamic = e.dynamic;
    graphics.addP(l);
    graphics.addIfDynamic(l);
    graphics.addToGraphicsLayer(p, l)
};
graphics.createPlayerSpawn = function(p, b, e) {
    b = JSON.parse(b.playerSpawn);
    var l = new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture));
    graphics.loadTextureFromUrl(e, "skins/0.png", l);
    l.x = b.x;
    l.y = b.y;
    l.width = b.width;
    l.height = b.height;
    l.anchor.x = .5;
    l.anchor.y = .5;
    l.chatText = graphics.createTextObject("Type to chat..");
    l.chatText.originalFontSize = 17;
    l.chatText.dynamic = !0;
    l.chatText.style.fill = "black";
    l.chatText.style.stroke = "white";
    l.chatText.style.strokeThickness = 4;
    l.nameText = graphics.createTextObject("");
    l.nameText.originalFontSize = 17;
    l.nameText.dynamic = !0;
    l.nameText.style.fill = "white";
    l.nameText.style.stroke = "black";
    l.nameText.style.strokeThickness = 4;
    l.interactive = !0;
    l.buttonMode = !0;
    l.on("click", function() {
        window.cloneI = this.index;
        document.getElementsByClassName("kickContainer")[0].children[0].innerHTML = "KICK this mofo: " + this.nameText.text;
        document.getElementsByClassName("kickContainer")[0].children[0].setAttribute("id", this.nameText.text);
        document.getElementsByClassName("kickContainer")[0].style.display = "inherit"
    });
    l.dynamic = b.dynamic;
    graphics.addP(l, b.plzReturn);
    graphics.addIfDynamic(l, b.plzReturn);
    graphics.addToGraphicsLayer(p, l);
    graphics.addToTextLayer(p, l.chatText);
    graphics.addToTextLayer(p, l.nameText);
    null == gPlayer ? window.gPlayer = l : l.chatText.text = "";
    return l
};
graphics.createPoison = function(p, b) {
    /*
    var e = JSON.parse(b.poison),
        l = graphics.createRectangle(e.x, e.y, e.width, e.height, "0x0eac3c", e.rotation);
    l.dynamic = e.dynamic;
    graphics.addP(l);
    graphics.addIfDynamic(l);
    graphics.addToGraphicsLayer(p, l)
    */
};
graphics.createZombie = function(p, b) {
    var e = JSON.parse(b.zombie),
        l = graphics.createPlayer(e.x, e.y, e.width, e.height, "0x086902");
    l.dynamic = e.dynamic;
    graphics.addP(l);
    graphics.addIfDynamic(l);
    graphics.addToGraphicsLayer(p, l);
    e = JSON.parse(b.redZone);
    e = graphics.createRectangle(e.x, e.y, e.width, e.height, "0xcd1919");
    e.alpha = 0;
    e.dynamic = !0;
    graphics.addP(e);
    graphics.addIfDynamic(e);
    graphics.addToGraphicsLayer(p, e)
};
graphics.parseMap = function(p, b) {
    for (var e = 0; e < b.length; e++) {
        var l = b[e];
        "buttonAndGate" == l.type ? graphics.createButtonAndGate(p, l) : "block" == l.type ? graphics.createBlock(p, l) : "rotatingPlatform" == l.type ? graphics.createRotatingPlatform(p, l) : "playerSpawn" == l.type ? graphics.createPlayerSpawn(p, l, "skins/0.png") : "leaverAndBridge" == l.type ? graphics.createLeaverAndBridge(p, l) : "poison" == l.type ? graphics.createPoison(p, l) : "zombie" == l.type ? graphics.createZombie(p, l) : "text" == l.type ? graphics.createText(p, l) : "checkPoint" ==
            l.type ? graphics.createCheckPoint(p, l) : "ball" == l.type && graphics.createBall(p, l)
    }
};
var gpConnector = {
    x: function(p, b) {
        "undefined" != typeof p && "undefined" != typeof b && (p.x = window.physics.xAxis(b.position[0], 1))
    },
    y: function(p, b) {
        "undefined" != typeof p && "undefined" != typeof b && (p.y = window.physics.yAxis(b.position[1], 1))
    },
    angle: function(p, b) {
        "undefined" != typeof p && "undefined" != typeof b && (p.rotation = -b.angle)
    }
};
window.mar = 1;
gpConnector.trackChat = function(p) {
    if ("undefined" != typeof p && "undefined" != typeof p.chatText)
        for (p.chatText.x = p.x * zoomLevel, p.chatText.y = (p.y - (p.height / 2 + p.chatText.height / 2 + 10)) * zoomLevel, p.chatText.style.fontSize = Math.round(p.chatText.originalFontSize * zoomLevel), p.chatText.style.strokeThickness = 2, p.nameText.x = p.x * zoomLevel, p.nameText.y = (p.y + (p.height / 2 + p.nameText.height / 2 + 10)) * zoomLevel, p.nameText.style.fontSize = Math.round(p.nameText.originalFontSize * zoomLevel), p.nameText.style.strokeThickness = 2,
            p = 0; p < livePlayers.length; p++)
            if ("undefined" != typeof livePlayers[p] && null != livePlayers[p]) {
                var b = livePlayers[p].gPlayer,
                    e = livePlayers[p].gPlayer.chatText,
                    l = livePlayers[p].gPlayer.nameText;
                e.x = b.x * zoomLevel;
                e.y = (b.y - (b.height / 2 + e.height / 2 + 10)) * zoomLevel;
                e.style.fontSize = Math.round(e.originalFontSize * zoomLevel);
                l.x = b.x * zoomLevel;
                l.y = (b.y + (b.height / 2 + l.height / 2 + 10)) * zoomLevel;
                l.style.fontSize = Math.round(l.originalFontSize * zoomLevel)
            }
};
gpConnector.syncGPWorld = function(p, b) {
    for (var e = 0; e < p.length; e++) {
        var l = p[e],
            a = b[e];
        gpConnector.x(l, a);
        gpConnector.y(l, a);
        gpConnector.angle(l, a);
        gpConnector.trackChat(l)
    }
};
var keyboard = new THREEx.KeyboardState;
keyboard.characterStack = [];
window.allDynamicPhysicsObjects = [];
window.allDynamicGraphicalObjects = [];
window.plyer = null;
window.gPlayer = null;
window.customSpeed = 300;
window.clientStatBuffer = "";
window.xCounter = 0;
window.xAxisBuffer = "";
window.deltaTime = 0;
window.yAxisBuffer = [];
window.jumpY = !1;
window.jumpPointBuffer = ["", ""];

function setUpClientLoop() {
    MainLoop.setBegin(null);
    MainLoop.setUpdate(update);
    MainLoop.setDraw(draw);
    MainLoop.setEnd(null);
    MainLoop.start()
}
var right = 0,
    left = 0,
    onceNullForce = !1;

function handleInput() {
    keyboard.pressed("left") && (plyer.left(), left = 1, onceNullForce = !0);
    keyboard.pressed("left") || null == plyer || (left = 0);
    keyboard.pressed("right") && (plyer.right(), right = 1, onceNullForce = !0);
    keyboard.pressed("ctrl") && (plyer.position = [plyer.lastCheckPoint[0], plyer.lastCheckPoint[1]]);
    keyboard.pressed("right") || null == plyer || (right = 0);
    keyboard.pressed("up") && plyer.jump();
    keyboard.pressed("up");
    0 == right && 0 == left && null != plyer && 1 == onceNullForce && (plyer.doNohting(), onceNullForce = !1);
    for (var p =
            0; p < keyboard.characterStack.length && null != gPlayer; p++) {
        var b = keyboard.characterStack[p];
        8 === b ? (gPlayer.chatText.text = gPlayer.chatText.text.substr(0, gPlayer.chatText.text.length - 1), network.sendMsg(b)) : 13 === b ? (gPlayer.chatText.text = "", network.sendMsg(b)) : 50 > gPlayer.chatText.text.length && ("undefined" == typeof removeDefaultTxt && (removeDefaultTxt = !0, gPlayer.chatText.text = ""), gPlayer.chatText.text += b, network.sendMsg(b))
    }
    keyboard.characterStack = []
}

function checkMsgFrom() {
    for (var p = 0; p < network.msgFrom.length; p++)
        for (var b = network.msgFrom[p][0], e = network.msgFrom[p][1], b = null != livePlayers[b] && "undefined" != typeof livePlayers[b] ? livePlayers[b].gPlayer : null, l = 0; l < e.length; l++) {
            var a = e[l];
            8 === a && null != b ? b.chatText.text = b.chatText.text.substr(0, b.chatText.text.length - 1) : 13 === a && null != b ? b.chatText.text = "" : null != b ? 50 > b.chatText.text.length && (b.chatText.text += a) : null != b && (b.chatText.text = "", b.chatText.text = a)
        }
    network.msgFrom = []
}

function updateEnvironmentBasedOnNetwork() {
    for (var p = 0; p < network.environmentDataArray.length; p++)
        for (var b = network.environmentDataArray[p], b = b.substr(0, b.length - 1), b = b.split("|"), e = 0; e < b.length; e += 2) {
            var l = parseInt(b[e]);
            "undefined" != typeof physicsWorld.networkedPhysicsObjects[l] && physicsWorld.networkedPhysicsObjects[l].applyData(b[e + 1])
        }
    network.environmentDataArray = []
}

function updatePlayersBasedOnNetwork(p) {
    for (var b = 0; b < indexOfLivePlayers.length; b++) {
        var e = livePlayers[indexOfLivePlayers[b]];
        if ("undefined" == typeof e || null == e) break;
        e.endX = e.last2Packets[1].x;
        e.endY = e.last2Packets[1].y;
        e.distance = g.distanceBetweenPoints(e.startX, e.startY, e.endX, e.endY);
        0 == e.distance && (e.distance = 1);
        e.directionX = (e.endX - e.startX) / e.distance;
        e.directionY = (e.endY - e.startY) / e.distance;
        e.moving = !0;
        e.speed = p / 1E3 * window.customSpeed;
        g.hmm(e);
        e.startX = e.position[0];
        e.startY = e.position[1];
        e.gPlayer.x = e.position[0];
        e.gPlayer.y = e.position[1]
    }
}

function initializeOverlayMenu() {}

function queueClientStat() {
    if ("undefined" != typeof plyer && null != plyer) {
        var p = [deltaTime, g.roundUpto(plyer.position[0]), g.roundUpto(plyer.position[1])];
        network.sendPlayerStats(p);
        jumpPointBuffer = ["", ""];
        deltaTime = 0
    }
}

function initializeCanvas() {
    window.renderer = graphics.createRenderer(window.innerWidth, window.innerHeight, 16777215);
    window.addEventListener("resize", graphics.handleResize);
    window.physicsWorld = physics.createWorld();
    window.graphicsWorld = graphics.createWorld()
}

function draw() {
    renderer.render(graphicsWorld)
}
var prev = Date.now();

function update(p) {
    deltaTime += p;
    handleInput();
    checkMsgFrom();
    updateEnvironmentBasedOnNetwork();
    updatePlayersBasedOnNetwork(p);
    physics.updateManualDynamicObjects(physicsWorld);
    gpConnector.syncGPWorld(allDynamicGraphicalObjects, allDynamicPhysicsObjects);
    graphics.camera(graphicsWorld, gPlayer);
    150 <= deltaTime && queueClientStat();
    physicsWorld.step(p / 1E3)
}

function start() {
    initializeCanvas();
    setUpClientLoop();
    g.addWindowNotActiveTrigger();
    var p = [{
            playerSpawn: '{"x":-8457,"y":-58,"width":30,"height":100,"dynamic":true}',
            type: "playerSpawn"
        }, {
            block: '{"x":-1250,"y":753,"width":16309.999999999998,"height":950,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":10334,"y":2226,"width":1970,"height":670,"color":"0x000000","rotation":2.11,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            checkPoint: '{"x":9677,"y":-477,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            poison: '{"x":12415,"y":874,"width":1210,"height":720,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":12079,"y":783,"width":81,"height":900,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":12388,"y":783,"width":81,"height":900,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":12698,"y":783,"width":81,"height":900,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":13581,"y":783,"width":1230,"height":900,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":14608,"y":313,"width":490.00000000000006,"height":1100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":14515,"y":1507,"width":1610.0000000000002,"height":730,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":14271,"y":1100,"width":150,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":14410,"y":1186,"width":290,"height":200,"color":"0x000000","rotation":0.72,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":16326,"y":1507,"width":1050,"height":730,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":15560,"y":1697,"width":483,"height":350,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            button: '{"x":15214,"y":1133,"width":30,"height":18}',
            linkedObjects: '{"x":15562,"y":1172,"width":493,"height":60,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: '{"x":15889,"y":1133,"width":30,"height":18}',
            type: "buttonAndGate"
        },
        {
            block: '{"x":17141,"y":1253,"width":620,"height":100,"color":"0x000000","rotation":0.2,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":17528,"y":1576,"width":190,"height":620,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":17543,"y":1257,"width":30,"height":18}',
            linkedObjects: '{"x":17918,"y":1289,"width":100,"height":50,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":18259,"y":1289,"width":100,"height":50,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":18600,"y":1290,"width":100,"height":50,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: '{"x":18940,"y":1258,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            block: '{"x":19568,"y":1579,"width":1470,"height":625,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":18228,"y":1664,"width":1210,"height":440,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":19874,"y":1416,"width":100,"height":810,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":19774,"y":1453,"width":100,"height":625,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":19973,"y":1311,"width":100,"height":860,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":20073,"y":1184,"width":100,"height":860,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":20173,"y":1056,"width":100,"height":860,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":20271,"y":927,"width":120,"height":860,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":20372,"y":803,"width":100,"height":860,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":20472,"y":671,"width":100,"height":860,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":20983,"y":1050,"width":1870,"height":100,"color":"0x000000","rotation":1,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":22901,"y":1850,"width":6470,"height":170,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":20440,"y":1393,"width":1030,"height":860,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":20785,"y":1093,"width":1460,"height":420,"color":"0x000000","rotation":1,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":21107,"y":1734,"width":600,"height":250,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":21369,"y":1053,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":22458,"y":1594,"width":2420,"height":400,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":21492,"y":1603,"width":620,"height":380,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":21472,"y":1445,"width":440.00000000000006,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":21223,"y":1597,"width":670,"height":290,"color":"0x000000","rotation":1,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":21759,"y":1054,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":22141,"y":1055,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":22533,"y":1055,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":22917,"y":1054,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":23309,"y":1054,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":25686,"y":1470,"width":4060,"height":929.9999999999999,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            checkPoint: '{"x":16864,"y":1119,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            leaver: '{"x":25083,"y":788,"width":40,"height":52}',
            linkedObjects: '{"x":25518,"y":946,"width":70,"height":150,"dynamic":true,"handleX":25518,"handleY":761,"movingSpeed":1,"fillColor":"0xFF0000"}',
            linkedLeaverObjects: '{"x":25085,"y":979,"width":40,"height":52}',
            type: "leaverAndBridge"
        }, {
            block: '{"x":24728,"y":724,"width":210,"height":320,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":25396,"y":849,"width":1130,"height":70,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":26123,"y":955,"width":100,"height":160,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":26250,"y":632,"width":2410,"height":150,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":26161,"y":1260,"width":100,"height":1350,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":24882,"y":764,"width":100,"height":150,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":26993,"y":979,"width":40,"height":52}',
            linkedObjects: '{"x":26556,"y":781,"width":70,"height":150,"dynamic":true,"handleX":26556,"handleY":945,"movingSpeed":1,"fillColor":"0x00FF00"}',
            linkedLeaverObjects: '{"x":26993,"y":788,"width":40,"height":52}',
            type: "leaverAndBridge"
        }, {
            block: '{"x":27028,"y":849,"width":1330,"height":70,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":27947,"y":369,"width":580,"height":1030,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":25965,"y":859,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":27613,"y":772,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":27421,"y":696,"width":100,"height":22,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":27865,"y":1470,"width":869.9999999999999,"height":440.00000000000006,"color":"0x000000","rotation":0.79,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":29725,"y":1833,"width":410.00000000000006,"height":419.99999999999994,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            platform: '{"x":30183,"y":1673,"width":100,"height":100,"color":"0x000000","rotation":0,"rotatingSpeed":2,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        }, {
            platform: '{"x":30491,"y":1674,"width":100,"height":100,"color":"0x000000","rotation":0,"rotatingSpeed":2,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        }, {
            platform: '{"x":30802,"y":1674,"width":100,"height":100,"color":"0x000000","rotation":0,"rotatingSpeed":2,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        }, {
            platform: '{"x":31110,"y":1673,"width":100,"height":100,"color":"0x000000","rotation":0,"rotatingSpeed":2,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        },
        {
            block: '{"x":31773,"y":1779,"width":830.0000000000001,"height":310,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":30646,"y":1889,"width":1434,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":31447,"y":1971,"width":3900,"height":180,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":33224,"y":1697,"width":2150,"height":440.00000000000006,"color":"0x000000","rotation":3.1,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":35177,"y":1660,"width":1820,"height":420,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":35497,"y":1424,"width":40,"height":52}',
            linkedObjects: '{"x":35126,"y":1434,"width":140,"height":30,"dynamic":true,"handleX":35127,"handleY":743,"movingSpeed":20,"fillColor":"0x0000FF"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            button: '{"x":34891,"y":1442,"width":30,"height":18}',
            linkedObjects: '{"x":35380,"y":1290,"width":40,"height":500,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":35640,"y":1013,"width":560,"height":570,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":35964,"y":1243,"width":243.00000000000003,"height":1030,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":33376,"y":1445,"width":40,"height":52}',
            linkedObjects: '{"x":33901,"y":1434,"width":150,"height":30,"dynamic":true,"handleX":33902,"handleY":711,"movingSpeed":11,"fillColor":"0xFFFF00"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            block: '{"x":34133,"y":1166,"width":310,"height":630,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":36037,"y":675,"width":100,"height":1770,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":37458,"y":-457,"width":3570,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":7855,"y":885,"width":4160,"height":690,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":38003,"y":845,"width":3990,"height":2110,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":36510,"y":-218,"width":30,"height":18}',
            linkedObjects: '{"x":36829,"y":-307,"width":50,"height":200,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: '{"x":37148,"y":-219,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            button: '{"x":37222,"y":-219,"width":30,"height":18}',
            linkedObjects: '{"x":37541,"y":-310,"width":50,"height":200,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: '{"x":37860,"y":-219,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            button: '{"x":38629,"y":-219,"width":30,"height":18}',
            linkedObjects: '{"x":38947,"y":-310,"width":50,"height":200,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: '{"x":39267,"y":-219,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            button: '{"x":37924,"y":-219,"width":30,"height":18}',
            linkedObjects: '{"x":38243,"y":-310,"width":50,"height":200,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: '{"x":38564,"y":-219,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            block: '{"x":40325,"y":586,"width":1580,"height":670,"color":"0x000000","rotation":0.78,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":43049,"y":680,"width":3000,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":42219,"y":1024,"width":7240,"height":700,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":42894,"y":680,"width":300,"height":300,"color":"0x000000","rotation":0.78,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":42295,"y":679,"width":300,"height":300,"color":"0x000000","rotation":0.78,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":43495,"y":679,"width":300,"height":300,"color":"0x000000","rotation":0.78,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":41696,"y":680,"width":300,"height":300,"color":"0x000000","rotation":0.78,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":44097,"y":675,"width":300,"height":300,"color":"0x000000","rotation":0.78,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":44652,"y":470,"width":1170,"height":110.00000000000001,"color":"0x000000","rotation":2.18,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45883,"y":1334,"width":100,"height":1710,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":46033,"y":1299,"width":100,"height":1770,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":46185,"y":654,"width":100,"height":480,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":46339,"y":505,"width":100,"height":180,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45688,"y":464,"width":490.00000000000006,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":47810,"y":1586,"width":100,"height":1090,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":48057,"y":610,"width":36,"height":50,"dynamic":false,"rotation":0}',
            type: "poison"
        },
        {
            poison: '{"x":45958,"y":2084,"width":50,"height":88,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":47939,"y":844,"width":3470.0000000000005,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":46955,"y":1068,"width":1810.0000000000002,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":48958,"y":2178,"width":6250,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":49078,"y":369,"width":5220,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            platform: '{"x":53942,"y":3720,"width":280,"height":42,"color":"0x000000","rotation":0,"rotatingSpeed":0.5,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        }, {
            poison: '{"x":47886,"y":2078,"width":52,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":51476,"y":1388,"width":100,"height":1650,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":47959,"y":1524,"width":100,"height":1290,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":49078,"y":-171,"width":5220,"height":1080,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":49624,"y":1552,"width":100,"height":1330,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":49704,"y":2079,"width":62.00000000000001,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        },
        {
            block: '{"x":49782,"y":1424,"width":100,"height":1520,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45114,"y":7,"width":340,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45361,"y":239,"width":570,"height":100,"color":"0x000000","rotation":1.1300000000000001,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":48869,"y":614,"width":5160,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":51644,"y":608,"width":100,"height":2640,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":52322,"y":2841,"width":100,"height":1430,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":52033,"y":3613,"width":100,"height":2970,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":52177,"y":3528,"width":100,"height":2800,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":52105,"y":4868,"width":44,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":52127,"y":5008,"width":200,"height":180,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":52466,"y":2579,"width":100,"height":1503,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":52972,"y":5049,"width":1660.0000000000002,"height":2700,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":52743,"y":3506,"width":830.0000000000001,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":52743,"y":3280,"width":500,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":53260,"y":3315,"width":520,"height":100,"color":"0x000000","rotation":2.16,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":55344,"y":3124,"width":3960,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":54722,"y":4814,"width":1280,"height":2230,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":55402,"y":6248,"width":4900,"height":300,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":53110,"y":3084,"width":540,"height":100,"color":"0x000000","rotation":2.2,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":57229,"y":3778,"width":190,"height":1210.0000000000002,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":55507,"y":3999,"width":150,"height":1830,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":55314,"y":2887,"width":4170,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":55397,"y":4777,"width":70,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":55412,"y":4876,"width":340,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58325,"y":4205,"width":100,"height":210,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":57446,"y":3147,"width":100,"height":620,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58183,"y":4332,"width":1720,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":58668,"y":4234,"width":590,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":58993,"y":3846,"width":100,"height":980.0000000000001,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":58221,"y":3406,"width":1450,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":56365,"y":3777,"width":1660.0000000000002,"height":1210,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            text: '{"x":58168,"y":3849,"fontSize":41,"fill":"#000000","text":"In case you did\'t notice, there is a way down the rotating platform!"}',
            type: "text"
        }, {
            block: '{"x":52071,"y":1878,"width":890,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45215,"y":598,"width":1310,"height":190,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45107,"y":457,"width":509.99999999999994,"height":690,"color":"0x000000","rotation":2.11,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45145,"y":190,"width":380,"height":260,"color":"0x000000","rotation":1.1400000000000001,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":56366,"y":5408,"width":2320,"height":1040,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58359,"y":6463,"width":270,"height":1220,"color":"0x000000","rotation":1.97,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":61532,"y":6698,"width":1330,"height":250,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            text: '{"x":55288,"y":6018,"fontSize":25,"fill":"#000000","text":"You are on right path now >>"}',
            type: "text"
        }, {
            checkPoint: '{"x":63111,"y":6249,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            leaver: '{"x":61924,"y":6547,"width":40,"height":52}',
            linkedObjects: '{"x":62247,"y":6623,"width":100,"height":100,"dynamic":true,"handleX":62247,"handleY":6523,"movingSpeed":1,"fillColor":"0xFF00FF"},{"x":62347,"y":6623,"width":100,"height":100,"dynamic":true,"handleX":62347,"handleY":6423,"movingSpeed":1,"fillColor":"0x000000"},{"x":62447,"y":6623,"width":100,"height":100,"dynamic":true,"handleX":62447,"handleY":6323,"movingSpeed":1,"fillColor":"0x000000"},{"x":62547,"y":6623,"width":100,"height":100,"dynamic":true,"handleX":62547,"handleY":6223,"movingSpeed":1,"fillColor":"0x000000"}',
            linkedLeaverObjects: '{"x":62662,"y":6247,"width":40,"height":52}',
            type: "leaverAndBridge"
        }, {
            block: '{"x":62876,"y":6473,"width":560,"height":400,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":62646,"y":6123,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63531,"y":5841,"width":1779,"height":500.00000000000006,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63341,"y":6470,"width":460.00000000000006,"height":290,"color":"0x000000","rotation":0.24,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63718,"y":6526,"width":240,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":64238,"y":6526,"width":240,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63978,"y":7137,"width":280,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63718,"y":7755,"width":240,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":64237,"y":7755,"width":240,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63978,"y":8372,"width":280,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            platform: '{"x":63978,"y":6526,"width":280,"height":30,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        }, {
            platform: '{"x":63718,"y":7137,"width":240,"height":30,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":true}',
            type: "rotatingPlatform"
        }, {
            platform: '{"x":64238,"y":7137,"width":240,"height":30,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        }, {
            platform: '{"x":63978,"y":7755,"width":280,"height":30,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":true}',
            type: "rotatingPlatform"
        }, {
            platform: '{"x":63718,"y":8372,"width":240,"height":30,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        },
        {
            platform: '{"x":64237,"y":8372,"width":240,"height":30,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":true}',
            type: "rotatingPlatform"
        }, {
            poison: '{"x":63718,"y":6461,"width":240,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":64235,"y":6461,"width":240,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":63978,"y":7072,"width":280,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":63718,"y":7690,"width":240,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":64238,"y":7690,"width":240,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":63978,"y":8307,"width":280,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":64008,"y":9023,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63777,"y":9676,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":64184,"y":10326,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63970,"y":11048,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":64169,"y":12400,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63786,"y":14400,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63714,"y":11722,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":64113,"y":13726,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63978,"y":13070,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":63978,"y":13040,"width":100,"height":30,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":64113,"y":13696,"width":100,"height":30,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":63714,"y":11692,"width":100,"height":30,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":63786,"y":14370,"width":100,"height":30,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":63970,"y":11018,"width":100,"height":30,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":64169,"y":12370,"width":100,"height":30,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":64184,"y":10296,"width":100,"height":30,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":63777,"y":9647,"width":100,"height":30,"dynamic":false,"rotation":0}',
            type: "poison"
        },
        {
            poison: '{"x":64008,"y":8993,"width":100,"height":30,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":64841,"y":10342,"width":969.9999999999999,"height":12000,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63549,"y":10895,"width":100,"height":9020,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63321,"y":6623,"width":420,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":67880,"y":15830,"width":2560,"height":850,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":69429,"y":15925,"width":540,"height":660,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":68961,"y":15199,"width":395,"height":90,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":69118,"y":15128,"width":40,"height":52}',
            linkedObjects: '{"x":69209,"y":15420,"width":100,"height":30,"dynamic":true,"handleX":69522,"handleY":15420,"movingSpeed":8,"fillColor":"0x000000"}',
            linkedLeaverObjects: '{"x":69713,"y":15158,"width":40,"height":52}',
            type: "leaverAndBridge"
        }, {
            leaver: '{"x":68934,"y":15128,"width":40,"height":52}',
            linkedObjects: '{"x":69522,"y":14962,"width":100,"height":30,"dynamic":true,"handleX":69309,"handleY":14962,"movingSpeed":8,"fillColor":"0x000000"}',
            linkedLeaverObjects: '{"x":69897,"y":15158,"width":40,"height":52}',
            type: "leaverAndBridge"
        }, {
            leaver: '{"x":69026,"y":15128,"width":40,"height":52}',
            linkedObjects: '{"x":69622,"y":15420,"width":100,"height":30,"dynamic":true,"handleX":69622,"handleY":14962,"movingSpeed":8,"fillColor":"0x000000"}',
            linkedLeaverObjects: '{"x":69805,"y":15158,"width":40,"height":52}',
            type: "leaverAndBridge"
        }, {
            leaver: '{"x":68842,"y":15128,"width":40,"height":52}',
            linkedObjects: '{"x":69209,"y":14962,"width":100,"height":30,"dynamic":true,"handleX":69209,"handleY":14542,"movingSpeed":8,"fillColor":"0x000000"}',
            linkedLeaverObjects: '{"x":69989,"y":15158,"width":40,"height":52}',
            type: "leaverAndBridge"
        }, {
            block: '{"x":68872,"y":14577,"width":535,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":69149,"y":14902,"width":20,"height":750,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":69072,"y":15124,"width":50,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":68888,"y":15124,"width":50,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":68980,"y":15124,"width":50,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":68751,"y":15124,"width":140,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":68414,"y":15379,"width":40,"height":52}',
            linkedObjects: '{"x":68631,"y":15375,"width":100,"height":60,"dynamic":true,"handleX":68631,"handleY":15124,"movingSpeed":4,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            block: '{"x":69356,"y":15274,"width":434.99999999999994,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":70587,"y":15719,"width":1830,"height":1070,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":69682,"y":14902,"width":20,"height":750,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":69959,"y":14577,"width":535,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":69414,"y":14557,"width":310,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":69759,"y":15154,"width":50,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":69851,"y":15154,"width":50,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":69943,"y":15154,"width":50,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":70185,"y":15154,"width":350,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":70383,"y":15199,"width":120,"height":100,"color":"0x000000","rotation":0.58,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":69474,"y":14814,"width":430,"height":60,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":69359,"y":15194,"width":400,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":69566,"y":15195,"width":15,"height":120,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":69265,"y":14759,"width":15,"height":170,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":69472,"y":14734,"width":400,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":69265,"y":14736,"width":15,"height":120,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":71825,"y":15244,"width":30,"height":120,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":72068,"y":15321,"width":30,"height":480,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":72302,"y":15187,"width":30,"height":420,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":72546,"y":15088,"width":30,"height":430,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":72790,"y":15044,"width":30,"height":550,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":73033,"y":15110,"width":30,"height":890,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":73277,"y":14966,"width":30,"height":810,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":74252,"y":15371,"width":30,"height":580,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":74496,"y":15344,"width":30,"height":320,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":74008,"y":15587,"width":30,"height":1220,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":73764,"y":15519,"width":30,"height":1500,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":73520,"y":15325,"width":30,"height":1320,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":75684,"y":15719,"width":1730,"height":1070,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":73159,"y":15843,"width":3320.0000000000005,"height":1100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":73110,"y":16325,"width":4340,"height":220.00000000000003,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":71452,"y":15743,"width":100,"height":1050,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":13756.75346643497,"y":31716.237268436696,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":78533,"y":15028,"width":4620,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":75890,"y":15158,"width":40,"height":52}',
            linkedObjects: '{"x":76063,"y":15169,"width":100,"height":30,"dynamic":true,"handleX":76063,"handleY":14995,"movingSpeed":4,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            leaver: '{"x":76974,"y":14952,"width":40,"height":52}',
            linkedObjects: '{"x":76599,"y":15199,"width":200,"height":30,"dynamic":true,"handleX":77239,"handleY":15199,"movingSpeed":8,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            leaver: '{"x":77725,"y":14952,"width":40,"height":52}',
            linkedObjects: '{"x":77339,"y":15199,"width":200,"height":30,"dynamic":true,"handleX":77980,"handleY":15199,"movingSpeed":8,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            leaver: '{"x":78449,"y":14952,"width":40,"height":52}',
            linkedObjects: '{"x":78078,"y":15199,"width":200,"height":30,"dynamic":true,"handleX":78718,"handleY":15199,"movingSpeed":8,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            leaver: '{"x":79068,"y":14953,"width":40,"height":52}',
            linkedObjects: '{"x":78818,"y":15199,"width":200,"height":30,"dynamic":true,"handleX":80678,"handleY":15199,"movingSpeed":20,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            button: '{"x":79328,"y":14969,"width":30,"height":18}',
            linkedObjects: '{"x":79328,"y":15131,"width":30,"height":200,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":79870,"y":14969,"width":30,"height":18}',
            linkedObjects: '{"x":79872,"y":15131,"width":30,"height":200,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":80407,"y":14969,"width":30,"height":18}',
            linkedObjects: '{"x":80407,"y":15131,"width":30,"height":200,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            poison: '{"x":78664,"y":15859,"width":4230,"height":790,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            button: '{"x":81115,"y":15175,"width":30,"height":18}',
            linkedObjects: '{"x":80828,"y":14874,"width":30,"height":210,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        },
        {
            block: '{"x":81643,"y":15719,"width":1830,"height":1070,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":78868,"y":14663,"width":3950,"height":220.00000000000003,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":83396,"y":14654,"width":2039.9999999999998,"height":170,"dynamic":false,"rotation":2.5}',
            type: "poison"
        }, {
            block: '{"x":82631,"y":15212,"width":110.00000000000001,"height":170,"color":"0x000000","rotation":2.5,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":83078,"y":14878,"width":110.00000000000001,"height":170,"color":"0x000000","rotation":2.5,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":83526,"y":14543,"width":110.00000000000001,"height":170,"color":"0x000000","rotation":2.5,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":83302,"y":14711,"width":110.00000000000001,"height":170,"color":"0x000000","rotation":2.5,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":82855,"y":15045,"width":110.00000000000001,"height":170,"color":"0x000000","rotation":2.5,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":83750,"y":14376,"width":110.00000000000001,"height":170,"color":"0x000000","rotation":2.5,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":83974,"y":14209,"width":110.00000000000001,"height":170,"color":"0x000000","rotation":2.5,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":84198,"y":14041,"width":110.00000000000001,"height":170,"color":"0x000000","rotation":2.5,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":83434,"y":14791,"width":2520,"height":350,"color":"0x000000","rotation":2.5,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":82403,"y":15243,"width":350,"height":100,"color":"0x000000","rotation":3.0100000000000002,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":86643,"y":14046,"width":4610,"height":300,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            text: '{"x":85084,"y":13781,"fontSize":23,"fill":"#000000","text":"May be you\'ll be wondering that you have not seen any ZOMBIE!"}',
            type: "text"
        }, {
            text: '{"x":86629,"y":13782,"fontSize":23,"fill":"#000000","text":"So we have lots of ZOMBIES FOR YOU"}',
            type: "text"
        }, {
            text: '{"x":88148,"y":13784,"fontSize":23,"fill":"#ff0000","text":"Welcome to the ZOMBIE CITY"}',
            type: "text"
        }, {
            block: '{"x":88898,"y":13846,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":89168,"y":13996,"width":440.00000000000006,"height":400,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            zombie: '{"x":89540,"y":13896,"width":30,"height":100,"zombieSpeed":200,"dynamic":true}',
            redZone: '{"x":89540,"y":13896,"width":300,"height":660,"dynamic":false}',
            type: "zombie"
        }, {
            block: '{"x":89908,"y":13996,"width":440.00000000000006,"height":400,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":90773,"y":14089,"width":4630,"height":280,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":90648,"y":13996,"width":440.00000000000006,"height":400,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":91387,"y":13996,"width":440.00000000000006,"height":400,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            zombie: '{"x":90295,"y":13888,"width":30,"height":100,"zombieSpeed":200,"dynamic":true}',
            redZone: '{"x":90295,"y":13888,"width":300,"height":690,"dynamic":false}',
            type: "zombie"
        }, {
            zombie: '{"x":91006,"y":13874,"width":30,"height":100,"zombieSpeed":200,"dynamic":true}',
            redZone: '{"x":91006,"y":13874,"width":300,"height":720,"dynamic":false}',
            type: "zombie"
        }, {
            zombie: '{"x":91755,"y":13859,"width":30,"height":100,"zombieSpeed":200,"dynamic":true}',
            redZone: '{"x":91755,"y":13859,"width":300,"height":620.0000000000001,"dynamic":false}',
            type: "zombie"
        }, {
            block: '{"x":92486,"y":13996,"width":1160,"height":400,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":93725,"y":13200,"width":1860.0000000000002,"height":70,"color":"0x000000","rotation":2.4,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":96084,"y":11387,"width":8250,"height":133,"color":"0x000000","rotation":2.4,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            zombie: '{"x":93266,"y":13817,"width":30,"height":100,"zombieSpeed":290,"dynamic":true}',
            redZone: '{"x":93266,"y":13817,"width":460.00000000000006,"height":2200,"dynamic":false}',
            type: "zombie"
        }, {
            block: '{"x":94699,"y":12572,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":95669,"y":11420,"width":1820,"height":70,"color":"0x000000","rotation":2.4,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":94914,"y":12305,"width":70,"height":600,"color":"0x000000","rotation":0.31,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":95000,"y":12229,"width":70,"height":380,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":94972,"y":12307,"width":100,"height":260,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            zombie: '{"x":95136,"y":12085,"width":30,"height":100,"zombieSpeed":290,"dynamic":true}',
            redZone: '{"x":95136,"y":12085,"width":460.00000000000006,"height":1880,"dynamic":false}',
            type: "zombie"
        }, {
            block: '{"x":96628,"y":10805,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":97611,"y":9640,"width":2100,"height":72,"color":"0x000000","rotation":2.4,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":96815,"y":10539,"width":100,"height":420,"color":"0x000000","rotation":0.24,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":96875,"y":10464,"width":100,"height":300,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            zombie: '{"x":97003,"y":10375,"width":30,"height":100,"zombieSpeed":290,"dynamic":true}',
            redZone: '{"x":97003,"y":10375,"width":460.00000000000006,"height":2090,"dynamic":false}',
            type: "zombie"
        }, {
            block: '{"x":93076,"y":13932,"width":50,"height":220.00000000000003,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":98674,"y":8931,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":99340,"y":8607,"width":520,"height":110.00000000000001,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":100658,"y":8533,"width":2120,"height":260,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":101784,"y":8598,"width":660,"height":130,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":101792,"y":8524,"width":30,"height":18}',
            linkedObjects: '{"x":101954,"y":8209,"width":20,"height":120,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            zombie: '{"x":101753,"y":8479,"width":30,"height":100,"zombieSpeed":50,"dynamic":true}',
            redZone: '{"x":101753,"y":8479,"width":460.00000000000006,"height":300,"dynamic":false}',
            type: "zombie"
        }, {
            block: '{"x":101722,"y":8413,"width":100,"height":20,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":101861,"y":8413,"width":100,"height":20,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":101965,"y":8273,"width":850,"height":20,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":102000,"y":8413,"width":100,"height":20,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":103072,"y":8534,"width":2120,"height":260,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":101929,"y":8524,"width":30,"height":18}',
            linkedObjects: '{"x":102193,"y":8208,"width":20,"height":120,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":102018,"y":7902,"width":960,"height":500,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":102153,"y":8395,"width":30,"height":18}',
            linkedObjects: '{"x":102042,"y":8343,"width":20,"height":140,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":106213,"y":8700,"width":5550,"height":400,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            zombie: '{"x":104668,"y":8448,"width":30,"height":100,"zombieSpeed":250,"dynamic":true}',
            redZone: '{"x":104668,"y":8448,"width":830,"height":300,"dynamic":false}',
            type: "zombie"
        }, {
            block: '{"x":105249,"y":8450,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":106426,"y":8450,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":107605,"y":8451,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            zombie: '{"x":105822,"y":8450,"width":30,"height":100,"zombieSpeed":250,"dynamic":true}',
            redZone: '{"x":105822,"y":8450,"width":830,"height":300,"dynamic":false}',
            type: "zombie"
        }, {
            zombie: '{"x":107033,"y":8427,"width":30,"height":100,"zombieSpeed":250,"dynamic":true}',
            redZone: '{"x":107033,"y":8427,"width":830,"height":300,"dynamic":false}',
            type: "zombie"
        }, {
            zombie: '{"x":108268,"y":8448,"width":30,"height":100,"zombieSpeed":250,"dynamic":true}',
            redZone: '{"x":108268,"y":8448,"width":830,"height":300,"dynamic":false}',
            type: "zombie"
        }, {
            block: '{"x":108785,"y":8452,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":109895,"y":7897,"width":2690,"height":380,"color":"0x000000","rotation":2.45,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":111392,"y":7808,"width":1150,"height":1820,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":114727,"y":9016,"width":7830,"height":1000,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":113513,"y":8473,"width":1689.9999999999998,"height":180,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":112010,"y":8507,"width":30,"height":18}',
            linkedObjects: '{"x":112785,"y":8234,"width":20,"height":100,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0},{"x":113645,"y":8238,"width":20,"height":110.00000000000001,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: '{"x":113773,"y":8277,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            zombie: '{"x":112303,"y":8461,"width":30,"height":100,"zombieSpeed":150,"dynamic":true}',
            redZone: '{"x":112303,"y":8461,"width":820,"height":300,"dynamic":false}',
            type: "zombie"
        }, {
            block: '{"x":113215,"y":6644,"width":880.0000000000001,"height":3080,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":113390,"y":8334,"width":1230,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":112338,"y":8052,"width":770,"height":20,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":115910,"y":8873,"width":5320,"height":980.0000000000001,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":117460,"y":7033,"width":20,"height":2700,"color":"0xf50000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            text: '{"x":117913,"y":8247,"fontSize":20,"fill":"#000000","text":"LIMBRO, August Hallgren Wernstedt, Izan BF, Micah Wu, Somebody Epic, Willemijn Kuijper, "}',
            type: "text"
        }, {
            text: '{"x":117601,"y":8034,"fontSize":50,"fill":"#000000","text":"This is not"}',
            type: "text"
        }, {
            text: '{"x":117902,"y":8271,"fontSize":20,"fill":"#000000","text":"Bokito180, James Smith, Robert Johnson, David Williams, Richard Moore, Charles Martin, "}',
            type: "text"
        }, {
            text: '{"x":117797,"y":8295,"fontSize":20,"fill":"#000000","text":"Bilal(Terror), Kevin Garcia, Jeffrey White, Brian Smith, Steve Brown"}',
            type: "text"
        }, {
            text: '{"x":117756,"y":8221,"fontSize":20,"fill":"#1f33cd","text":"People who contributed in designing/coding/ideas/security"}',
            type: "text"
        }, {
            text: '{"x":117617,"y":8357,"fontSize":20,"fill":"#000000","text":"Thank you all for playing :)"}',
            type: "text"
        }, {
            text: '{"x":117787,"y":8077,"fontSize":20,"fill":"#000000","text":"Game will keep on updating and the map will change occasionally"}',
            type: "text"
        }, {
            text: '{"x":117770,"y":8100,"fontSize":20,"fill":"#003cff","text":"feedback.brofist@gmail.com"}',
            type: "text"
        }, {
            text: '{"x":117567,"y":8099,"fontSize":20,"fill":"#000000","text":"Let me know at"}',
            type: "text"
        }, {
            text: '{"x":117627,"y":8122,"fontSize":20,"fill":"#000000","text":"If you have some great Ideas"}',
            type: "text"
        }, {
            block: '{"x":120745,"y":6409,"width":5670,"height":4410,"color":"0xffffff","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":118591,"y":8525,"width":100,"height":4320,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            checkPoint: '{"x":24219,"y":982,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":41200,"y":649,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":67946,"y":15383,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":71339,"y":15160,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":81965,"y":15161,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":103105,"y":8379,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            text: '{"x":117836,"y":8034,"fontSize":50,"fill":"#f53131","text":"THE END"}',
            type: "text"
        }, {
            block: '{"x":75156,"y":15019,"width":100,"height":100,"color":"0xffffff","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":67933,"y":15163,"width":100,"height":100,"color":"0xffffff","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":24197,"y":836,"width":210,"height":100,"color":"0xffffff","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":28384,"y":1261,"width":59,"height":30.000000000000004,"color":"0xffffff","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":57852,"y":5673,"width":110.00000000000001,"height":280,"color":"0xffffff","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":71325,"y":14829,"width":100,"height":100,"color":"0xffffff","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":81957,"y":14828,"width":100,"height":100,"color":"0xffffff","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":103084,"y":8065,"width":100,"height":100,"color":"0xffffff","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":16851,"y":836,"width":100,"height":100,"color":"0xffffff","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":61131,"y":7511,"width":4810,"height":900,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":60591,"y":6626,"width":100,"height":110.00000000000001,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":60615,"y":6723,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":60636,"y":6820,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":60655,"y":6917,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":60672,"y":7015,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":59676,"y":6876,"width":1900,"height":610,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":99554,"y":8526,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58225,"y":4242,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":84284,"y":13972,"width":170,"height":100,"color":"0x000000","rotation":2.94,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":40271,"y":-309,"width":420,"height":1590,"color":"0x000000","rotation":0.58,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":40973,"y":-1098,"width":30,"height":18}',
            linkedObjects: '{"x":41664,"y":-1040,"width":50,"height":100,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: '{"x":41674,"y":-829,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            block: '{"x":42549,"y":-1494,"width":1720,"height":3060,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":40768,"y":-454,"width":380,"height":1090,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":41084,"y":-1040,"width":1110,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":41463,"y":-770,"width":910,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":41607,"y":-829,"width":30,"height":18}',
            linkedObjects: '{"x":40983,"y":-770,"width":50,"height":100,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: '{"x":40973,"y":-558,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            block: '{"x":41294,"y":-499,"width":690,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":41043,"y":-558,"width":30,"height":18}',
            linkedObjects: '{"x":41664,"y":-499,"width":50,"height":100,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: '{"x":41674,"y":-288,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            block: '{"x":41373,"y":-229,"width":730,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":41602,"y":-288,"width":30,"height":18}',
            linkedObjects: '{"x":40983,"y":-229,"width":50,"height":100,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: '{"x":40973,"y":-18,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            block: '{"x":40991,"y":41,"width":280,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":40455,"y":-159,"width":440.00000000000006,"height":500,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":40288,"y":257,"width":480,"height":540,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":27798,"y":1350,"width":1290,"height":690,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":28454,"y":804,"width":90,"height":600,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":28180,"y":979,"width":40,"height":52}',
            linkedObjects: '{"x":28389,"y":1011,"width":180,"height":40,"dynamic":true,"handleX":28389,"handleY":523,"movingSpeed":13,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            block: '{"x":28743,"y":554,"width":490.00000000000006,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":29118,"y":766,"width":260,"height":500,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            button: '{"x":28891,"y":495,"width":30,"height":18}',
            linkedObjects: '{"x":29288,"y":526,"width":80,"height":20,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: '{"x":29772,"y":495,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            poison: '{"x":29418,"y":651,"width":180,"height":270,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":29114,"y":1060,"width":1410,"height":178,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":29769,"y":803,"width":100,"height":600,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":29466,"y":945,"width":40,"height":52}',
            linkedObjects: '{"x":29669,"y":956,"width":100,"height":30,"dynamic":true,"handleX":29669,"handleY":514,"movingSpeed":12,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            block: '{"x":28738,"y":810,"width":500,"height":420,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":30037,"y":391,"width":170,"height":1900,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":29517,"y":1333,"width":1210,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":29509,"y":346,"width":40,"height":940,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":29428,"y":796,"width":200,"height":40,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            checkPoint: '{"x":28541,"y":482,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":75435,"y":15163,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":89112,"y":13773,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":101052,"y":8380,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            poison: '{"x":8036,"y":424,"width":3297.9999999999995,"height":320,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":9656,"y":48,"width":560,"height":1000,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":7109,"y":-393,"width":400,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":6575,"y":0,"width":1110,"height":100,"color":"0x000000","rotation":2.31,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":2719,"y":56,"width":409.99999999999994,"height":2080,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":2255,"y":270,"width":30,"height":18}',
            linkedObjects: '{"x":2274,"y":56,"width":100,"height":20,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":2464,"y":-57,"width":100,"height":20,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":2274,"y":-173,"width":100,"height":20,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":2464,"y":-286,"width":100,"height":20,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":2465,"y":173,"width":100,"height":20,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":2274,"y":-403,"width":100,"height":20,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":2464,"y":-515,"width":100,"height":20,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":2274,"y":-861,"width":100,"height":20,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":2274,"y":-632,"width":100,"height":20,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0},{"x":2464,"y":-745,"width":100,"height":20,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: '{"x":2461,"y":-993,"width":30,"height":18}',
            type: "buttonAndGate"
        }, {
            block: '{"x":2025,"y":-639,"width":400,"height":1410,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":2464,"y":-974,"width":100,"height":20,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-1227,"y":-834,"width":370,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-1062,"y":-915,"width":40,"height":180,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":-578,"y":-894,"width":30,"height":18}',
            linkedObjects: '{"x":-1117,"y":-995,"width":150,"height":20,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":-852,"y":-720,"width":100,"height":570,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-1795,"y":-391,"width":71,"height":1240,"color":"0x000000","rotation":0.72,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-2402,"y":228,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":56,"y":-369,"width":71,"height":1240,"color":"0x000000","rotation":2.49,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-478,"y":-835,"width":370,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-643,"y":-914,"width":40,"height":180,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":-1063,"y":-1014,"width":30,"height":18}',
            linkedObjects: '{"x":-548,"y":-994,"width":150,"height":20,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":-1697,"y":-1327,"width":1010,"height":684,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":610,"y":233,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":695,"y":-296,"width":160,"height":1570,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":125,"y":-1034,"width":1300,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            checkPoint: '{"x":1191,"y":255,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":4410,"y":253,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            block: '{"x":-4450,"y":226,"width":100,"height":240,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-4550,"y":217,"width":100,"height":420,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-7680,"y":202,"width":2180,"height":390,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-6100,"y":57,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-5810,"y":57,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-5520,"y":57,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-5230,"y":57,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":-4940,"y":57,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-4650,"y":57,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-4351,"y":256,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-6558,"y":254,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":-6589,"y":180,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":-6694,"y":-2,"width":30,"height":18}',
            linkedObjects: '{"x":-6515,"y":17,"width":150,"height":20,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":-6390,"y":57,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8459,"y":-490,"width":430,"height":70,"color":"0x000000","rotation":2.38,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8200,"y":-486,"width":430,"height":70,"color":"0x000000","rotation":0.79,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8070,"y":-232,"width":90,"height":250,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8153,"y":-508,"width":50,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8138,"y":-661,"width":20,"height":20,"color":"0x000000","rotation":3.63,"alpha":0.4,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8147,"y":-694,"width":10,"height":10,"color":"0x000000","rotation":0.79,"alpha":0.45,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8140,"y":-624,"width":20,"height":20,"color":"0x000000","rotation":0.79,"alpha":0.48,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8152,"y":-587,"width":30,"height":30,"color":"0x000000","rotation":0.79,"alpha":0.43,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8160,"y":-634,"width":20,"height":20,"color":"0x000000","rotation":0,"alpha":0.3,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8159,"y":-668,"width":20,"height":20,"color":"0x000000","rotation":0.86,"alpha":0.34,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8159,"y":-615,"width":10,"height":10,"color":"0x000000","rotation":0,"alpha":0.43,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8155,"y":-730,"width":10,"height":10,"color":"0x000000","rotation":1.97,"alpha":0.43,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8123,"y":-699,"width":10,"height":10,"color":"0x000000","rotation":1.69,"alpha":0.31,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8425,"y":-28,"width":210,"height":40,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8528,"y":-30,"width":20,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8330,"y":29,"width":20,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            text: '{"x":-8453,"y":-187,"fontSize":19,"fill":"#000000","text":"z"}',
            type: "text"
        }, {
            text: '{"x":-8466,"y":-188,"fontSize":16,"fill":"#000000","text":"Z"}',
            type: "text"
        }, {
            text: '{"x":-8464,"y":-164,"fontSize":22,"fill":"#000000","text":"Z"}',
            type: "text"
        }, {
            text: '{"x":-8459,"y":-206,"fontSize":12,"fill":"#000000","text":"Z"}',
            type: "text"
        }, {
            text: '{"x":-8449,"y":-165,"fontSize":10,"fill":"#000000","text":"Z"}',
            type: "text"
        }, {
            text: '{"x":-8467,"y":-221,"fontSize":9,"fill":"#000000","text":"Z"}',
            type: "text"
        }, {
            text: '{"x":-8328,"y":-276,"fontSize":16,"fill":"#000000","text":"Wake up and move with arrow keys"}',
            type: "text"
        }, {
            text: '{"x":-909,"y":-1141,"fontSize":16,"fill":"#000000","text":"A GAME WHERE WE HELP EACH OTHER LIKE"}',
            type: "text"
        }, {
            text: '{"x":-3363,"y":201,"fontSize":16,"fill":"#000000","text":"WELCOME TO BROFIST.IO"}',
            type: "text"
        }, {
            text: '{"x":-689,"y":-1142,"fontSize":16,"fill":"#1e00ff","text":"BROTHERS"}',
            type: "text"
        }, {
            checkPoint: '{"x":-2906,"y":254,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            text: '{"x":4380,"y":113,"fontSize":16,"fill":"#000000","text":"YOU CAN ALWAYS USE \\"Ctrl\\" KEY TO GO BACK TO LAST CHECKPOINT"}',
            type: "text"
        }, {
            block: '{"x":63363,"y":16941,"width":2140,"height":1300,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            checkPoint: '{"x":63977,"y":16268,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            block: '{"x":62243,"y":16341,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":62143,"y":16341,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":62043,"y":16341,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":61843,"y":16341,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":61644,"y":16341,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":61444,"y":16341,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":61244,"y":16341,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":61044,"y":16341,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":60219,"y":16846,"width":550,"height":1110,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":61943,"y":16341,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":61744,"y":16341,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":61544,"y":16341,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":61344,"y":16341,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":61144,"y":16341,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":60944,"y":16341,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":58449,"y":16249,"width":550,"height":1430,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            platform: '{"x":59376,"y":15662,"width":100,"height":100,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        },
        {
            platform: '{"x":59528,"y":15839,"width":100,"height":100,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        }, {
            platform: '{"x":59677,"y":16012,"width":100,"height":100,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        }, {
            platform: '{"x":59836,"y":16178,"width":100,"height":100,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        },
        {
            checkPoint: '{"x":58682,"y":15507,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            block: '{"x":58224,"y":15485,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":58019,"y":14396,"width":100,"height":1960.0000000000002,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":58094,"y":15351,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58251,"y":15212,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58251,"y":14933,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58094,"y":14795,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58251,"y":14657,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58094,"y":14519,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58251,"y":14380,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58251,"y":14103,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":58326,"y":14370,"width":100,"height":1739.9999999999998,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":58094,"y":14242,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":58094,"y":13964,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58251,"y":13826,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":55890,"y":13358,"width":4180,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":56034,"y":13268,"width":100,"height":80,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":55835,"y":13268,"width":100,"height":80,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":55635,"y":13268,"width":100,"height":80,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":55436,"y":13268,"width":100,"height":80,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":55236,"y":13268,"width":100,"height":80,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":55036,"y":13268,"width":100,"height":80,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":53540,"y":13359,"width":20,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":53270,"y":13359,"width":20,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":53000,"y":13359,"width":20,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":52730,"y":13359,"width":20,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":52460,"y":13359,"width":20,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":51325,"y":13359,"width":1210,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":50652,"y":13612,"width":100,"height":570,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50407,"y":13642,"width":100,"height":630,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50677,"y":16210,"width":100,"height":480,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50628,"y":14110,"width":100,"height":580,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50436,"y":16198,"width":100,"height":600,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50392,"y":14076,"width":100,"height":600,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50651,"y":14441,"width":100,"height":690,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50426,"y":15760,"width":100,"height":330,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50659,"y":15791,"width":100,"height":409.99999999999994,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50411,"y":15375,"width":100,"height":500,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50646,"y":15282,"width":100,"height":750,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50411,"y":14425,"width":100,"height":550,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50396,"y":14962,"width":100,"height":640,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50628,"y":14949,"width":100,"height":540,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50700,"y":16623,"width":100,"height":490.00000000000006,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50460,"y":16740,"width":100,"height":520,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50486,"y":17071,"width":100,"height":890,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50716,"y":17187,"width":100,"height":660,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":52266,"y":18420,"width":940,"height":1120,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":50281,"y":15345,"width":160,"height":4340,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":50386,"y":16176,"width":100,"height":2680,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":50721,"y":14659,"width":100,"height":2700,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":49701,"y":12765,"width":1320,"height":1090,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":50776,"y":16589,"width":100,"height":1200,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":50792,"y":17285,"width":100,"height":440,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":52190,"y":13359,"width":20,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":60744,"y":16341,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":60844,"y":16341,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":60644,"y":16341,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":60544,"y":16341,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":58903,"y":15584,"width":360,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            platform: '{"x":59218,"y":15491,"width":100,"height":100,"color":"0x000000","rotation":0,"rotatingSpeed":1.5,"dynamic":true,"clockwise":false}',
            type: "rotatingPlatform"
        }, {
            block: '{"x":58094,"y":15072,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58094,"y":13688,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58251,"y":13549,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58342,"y":13524,"width":150,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":57884,"y":13423,"width":390,"height":229.99999999999997,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58084,"y":13390,"width":130,"height":100,"color":"0x000000","rotation":0.86,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58039,"y":13422,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":57980,"y":14521,"width":100,"height":2080,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":58102,"y":15510,"width":145,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":58060,"y":15609,"width":260,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58069,"y":15391,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58301,"y":15252,"width":150,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58367,"y":14382,"width":100,"height":1770,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":59334,"y":16775,"width":1220,"height":380,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            checkPoint: '{"x":57963,"y":13283,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":51343,"y":13284,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            poison: '{"x":56234,"y":13268,"width":100,"height":80,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":56434,"y":13268,"width":100,"height":80,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":56634,"y":13268,"width":100,"height":80,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":52879,"y":14325,"width":2000,"height":240,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":51879,"y":13928,"width":100,"height":1040,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":53850,"y":13927,"width":100,"height":1040,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":65852,"y":16835,"width":3180,"height":590,"color":"0x000000","rotation":2.24,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            checkPoint: '{"x":52055,"y":17837,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            leaver: '{"x":52572,"y":17834,"width":40,"height":52}',
            linkedObjects: '{"x":52738,"y":17875,"width":200,"height":30,"dynamic":true,"handleX":54402,"handleY":17875,"movingSpeed":20,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            block: '{"x":53273,"y":17835,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":53833,"y":17835,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":54925,"y":18515,"width":1050,"height":1350,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":56011,"y":18386,"width":1540,"height":300,"color":"0x000000","rotation":0.58,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":56909,"y":19382,"width":710,"height":1400,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":58814,"y":18633,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":57974,"y":18593,"width":1580,"height":20,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":57214,"y":18633,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":56962,"y":18657,"width":40,"height":52}',
            linkedObjects: '{"x":57339,"y":18686,"width":200,"height":20,"dynamic":true,"handleX":60474,"handleY":18687,"movingSpeed":18,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            block: '{"x":59414,"y":18633,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":59214,"y":18633,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":59014,"y":18633,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":58914,"y":18633,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":59114,"y":18633,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":59314,"y":18633,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":59514,"y":18633,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":59614,"y":18633,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":59814,"y":18633,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":59714,"y":18633,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":61126,"y":19513,"width":1130,"height":1860.0000000000002,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":63807,"y":18430,"width":2760,"height":180,"color":"0x000000","rotation":2.66,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":62198,"y":18884,"width":1150,"height":260,"color":"0x000000","rotation":0.31,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":64778,"y":16595,"width":690,"height":590,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":64831.76868955925,"y":14939.491320827214,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":9639,"y":572,"width":430,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":53568,"y":18527,"width":1664.0000000000002,"height":730,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":58913,"y":19842,"width":3299,"height":400,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":50551,"y":18485,"width":580,"height":1000,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":50791,"y":17686,"width":100,"height":610,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":50090,"y":17910,"width":100,"height":540,"color":"0x000000","rotation":2.2,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            checkPoint: '{"x":50596,"y":17959,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            block: '{"x":49636,"y":17579,"width":100,"height":195,"color":"0x000000","rotation":2.2,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":48379,"y":16662,"width":100,"height":195,"color":"0x000000","rotation":2.2,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":49008,"y":17121,"width":100,"height":195,"color":"0x000000","rotation":2.2,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":48065,"y":16433,"width":100,"height":195,"color":"0x000000","rotation":2.2,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":49322,"y":17350,"width":100,"height":195,"color":"0x000000","rotation":2.2,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":48693,"y":16892,"width":100,"height":195,"color":"0x000000","rotation":2.2,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":47671,"y":16386,"width":690,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":48761,"y":18289,"width":3000,"height":390,"dynamic":false,"rotation":0}',
            type: "poison"
        },
        {
            block: '{"x":46522,"y":17226,"width":1610.0000000000002,"height":1780,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45398,"y":16378,"width":100,"height":100,"color":"0x000000","rotation":0.86,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45103,"y":16502,"width":100,"height":100,"color":"0x000000","rotation":0.37,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":44828,"y":16376,"width":100,"height":100,"color":"0x000000","rotation":0.31,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":44481,"y":16466,"width":100,"height":100,"color":"0x000000","rotation":1,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":44208,"y":16382,"width":100,"height":100,"color":"0x000000","rotation":1.76,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":43945,"y":16520,"width":100,"height":100,"color":"0x000000","rotation":1.1400000000000001,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":43651,"y":16425,"width":100,"height":100,"color":"0x000000","rotation":0.44,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":43332,"y":16518,"width":100,"height":100,"color":"0x000000","rotation":0.44,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":44417,"y":17086,"width":2600,"height":680,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":42460,"y":17003,"width":1320,"height":969.9999999999999,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":40651,"y":16799,"width":2300,"height":430,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":41460,"y":16534,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":41060,"y":16534,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":40660,"y":16534,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":40258,"y":16534,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":39858,"y":16534,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":39089,"y":16709,"width":1010,"height":610,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":38424,"y":16454,"width":350,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":37775,"y":16456,"width":350,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":37125,"y":16456,"width":350,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":36476,"y":16456,"width":350,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":35826,"y":16456,"width":350,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":35069,"y":17177,"width":570,"height":1540,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":33906,"y":16871,"width":1270,"height":3310,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":37480,"y":18760,"width":1570,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":38565,"y":18760,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":38390,"y":18760,"width":250,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":38740,"y":18760,"width":250,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":39090,"y":18760,"width":250,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":39790,"y":18760,"width":250,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":40140,"y":18760,"width":250,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":39440,"y":18760,"width":250,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":38915,"y":18760,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":40315,"y":18760,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":39265,"y":18760,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":39615,"y":18760,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":39965,"y":18760,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":40490,"y":18760,"width":250,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":41440,"y":18990,"width":1650,"height":560,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":42598,"y":19233,"width":1290,"height":100,"color":"0x000000","rotation":0.86,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":43464,"y":19938,"width":960,"height":530,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":44456,"y":19739,"width":100,"height":100,"color":"0x000000","rotation":0.44,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":44308,"y":19739,"width":100,"height":100,"color":"0x000000","rotation":1.1400000000000001,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":44382,"y":19723,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":47665,"y":20380,"width":1220,"height":1410,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":44889,"y":19741,"width":100,"height":100,"color":"0x000000","rotation":1.1,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45467,"y":19742,"width":100,"height":100,"color":"0x000000","rotation":1.1,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":46046,"y":19742,"width":100,"height":100,"color":"0x000000","rotation":1.1,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":46625,"y":19742,"width":100,"height":100,"color":"0x000000","rotation":1.1,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45034,"y":19740,"width":100,"height":100,"color":"0x000000","rotation":0.44,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45613,"y":19740,"width":100,"height":100,"color":"0x000000","rotation":0.44,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":46192,"y":19741,"width":100,"height":100,"color":"0x000000","rotation":0.44,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":46769,"y":19741,"width":100,"height":100,"color":"0x000000","rotation":0.44,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":45539,"y":19725,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":46696,"y":19725,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":44960,"y":19724,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":46118,"y":19725,"width":100,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":49287,"y":19658,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":49504,"y":19576,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":49702,"y":19489,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":50556,"y":19327,"width":960,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":51413,"y":18611,"width":1680,"height":110.00000000000001,"color":"0x000000","rotation":2.11,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":48813,"y":18534,"width":2980,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":47277,"y":18164,"width":100,"height":840,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":36969,"y":16858,"width":3229.9999999999995,"height":310,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            checkPoint: '{"x":45940,"y":16311,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":42061,"y":16498,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":38796,"y":16381,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":38004,"y":18685,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":43770,"y":19649,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":48289,"y":19652,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            poison: '{"x":45029,"y":20965,"width":4050,"height":240,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            poison: '{"x":50054,"y":20766,"width":3560,"height":640,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":34969,"y":18701,"width":1040,"height":100,"color":"0x000000","rotation":0.44,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":35716,"y":18822,"width":100,"height":660,"color":"0x000000","rotation":1.27,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":36381,"y":18749,"width":780,"height":100,"color":"0x000000","rotation":0.03,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":48557,"y":19725,"width":1050,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":49886,"y":19401,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":46698,"y":19759,"width":190,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":46120,"y":19757,"width":190,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":45542,"y":19758,"width":190,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":44963,"y":19758,"width":190,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":44382,"y":19756,"width":195,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            checkPoint: '{"x":25948,"y":3530,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            checkPoint: '{"x":56833,"y":18658,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            block: '{"x":35947,"y":405,"width":1140,"height":480,"color":"0x000000","rotation":2.11,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            text: '{"x":117551,"y":8319,"fontSize":20,"fill":"#000000","text":"Yuno Gasai"}',
            type: "text"
        }, {
            block: '{"x":7569,"y":-393,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":0.78,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":7878,"y":-393,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":0.71,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":8187,"y":-393,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":0.5,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":8497,"y":-393,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":0.4,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":8807,"y":-393,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":0.13,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":9117,"y":-393,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":0.02,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":9426,"y":577,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9192,"y":-353,"width":1210,"height":71,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8803,"y":57,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8901,"y":156,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9001,"y":254,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8700,"y":206,"width":320,"height":200,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8904,"y":254,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10062,"y":658,"width":1470,"height":760,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9558,"y":290,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9508,"y":234,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9538,"y":239,"width":50,"height":10,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10148,"y":284,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10168,"y":239,"width":50,"height":10,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10018,"y":239,"width":50,"height":10,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9688,"y":239,"width":50,"height":10,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":-9718,"y":234,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9668,"y":284,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10038,"y":284,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9988,"y":234,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":-10498,"y":239,"width":50,"height":10,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10198,"y":234,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10518,"y":284,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10468,"y":234,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":-11390,"y":-104,"width":260,"height":100,"color":"0x1498aa","rotation":2.45,"alpha":0.7000000000000001,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10679,"y":234,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10649,"y":239,"width":50,"height":10,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10628,"y":284,"width":10,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9616,"y":249,"width":10,"height":70,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9616,"y":210,"width":100,"height":10,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10091,"y":209,"width":100,"height":10,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10092,"y":249,"width":10,"height":70,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":-10573,"y":209,"width":100,"height":10,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10574,"y":249,"width":10,"height":70,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9579,"y":195,"width":10,"height":20,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10126,"y":194,"width":10,"height":20,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11172,"y":-43,"width":100,"height":100,"color":"0x0e7526","rotation":2.31,"alpha":0.58,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11143.167120307624,"y":-307.2172101654019,"width":100,"height":100,"color":"0xd44e4e","rotation":0,"alpha":0.27,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11269,"y":70,"width":980.0000000000001,"height":1840,"color":"0x000000","rotation":0,"alpha":0.18,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11089.180728084082,"y":122.4244946136095,"width":320,"height":190,"color":"0x257ad9","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10939,"y":-354,"width":210,"height":320,"color":"0x6929b1","rotation":0,"alpha":0.41000000000000003,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11424.346246471898,"y":129.1727936415521,"width":190,"height":570,"color":"0x5e3dc8","rotation":1.41,"alpha":0.17,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11140,"y":-300,"width":470,"height":940,"color":"0xc1e325","rotation":2.73,"alpha":0.27,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11138.668254288994,"y":-158.75463155066498,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11103,"y":-206,"width":70,"height":520,"color":"0x5a7696","rotation":1.07,"alpha":0.73,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10935,"y":208,"width":200,"height":470,"color":"0x1f7193","rotation":0,"alpha":0.36,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10884.482324236491,"y":293.3814033214884,"width":100,"height":100,"color":"0xb3229a","rotation":0,"alpha":0.28,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11335,"y":405,"width":100,"height":520,"color":"0xebc721","rotation":1.83,"alpha":0.4,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11245,"y":-125,"width":100,"height":869.9999999999999,"color":"0x1ef71e","rotation":0.31,"alpha":0.4,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11240,"y":311,"width":509.99999999999994,"height":459.99999999999994,"color":"0xcd4b4b","rotation":0.79,"alpha":0.11,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11069,"y":144,"width":170,"height":720,"color":"0xc51e9e","rotation":0,"alpha":0.2,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11396,"y":7,"width":400,"height":520,"color":"0x2d8209","rotation":1.27,"alpha":0.2,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11145,"y":115,"width":100,"height":290,"color":"0x281ddc","rotation":2.38,"alpha":0.43,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11041.942634888484,"y":-3.543753907985472,"width":150,"height":170,"color":"0x24b378","rotation":1.97,"alpha":0.58,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10889,"y":89,"width":100,"height":100,"color":"0x0f9696","rotation":2.31,"alpha":0.47000000000000003,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11023,"y":311,"width":100,"height":100,"color":"0x914d4d","rotation":0.58,"alpha":0.42,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11085,"y":-32,"width":270,"height":220.00000000000003,"color":"0xd72d87","rotation":1.48,"alpha":0.3,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11107,"y":-81,"width":190,"height":229.99999999999997,"color":"0xd43d3d","rotation":0,"alpha":0.6900000000000001,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10787,"y":226,"width":100,"height":1470,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10962,"y":-49,"width":180,"height":190,"color":"0x10a029","rotation":1.07,"alpha":0.31,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11184,"y":549,"width":540,"height":459.99999999999994,"color":"0x83e82a","rotation":0.51,"alpha":0.37,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10993,"y":672,"width":190,"height":340,"color":"0xe13434","rotation":2.73,"alpha":0.19,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10266,"y":-306,"width":1060,"height":100,"color":"0x000000","rotation":3.0100000000000002,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":28566,"y":1510,"width":409.99999999999994,"height":740,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":28358.794796406746,"y":1332.6173977037342,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":3928,"y":-934,"width":2020,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":3397,"y":-1173,"width":30,"height":18}',
            linkedObjects: '{"x":3207,"y":-1059,"width":30,"height":150,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":3837,"y":-1149,"width":1720,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":2813,"y":-1033,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":4536,"y":-1173,"width":30,"height":18}',
            linkedObjects: '{"x":4347,"y":-1059,"width":30,"height":150,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":3777,"y":-1173,"width":30,"height":18}',
            linkedObjects: '{"x":3587,"y":-1059,"width":30,"height":150,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":4157,"y":-993,"width":30,"height":18}',
            linkedObjects: '{"x":4347,"y":-1238,"width":30,"height":150,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":4157,"y":-1173,"width":30,"height":18}',
            linkedObjects: '{"x":3967,"y":-1059,"width":30,"height":150,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":3777,"y":-993,"width":30,"height":18}',
            linkedObjects: '{"x":3967,"y":-1239,"width":30,"height":150,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":3017,"y":-993,"width":30,"height":18}',
            linkedObjects: '{"x":3207,"y":-1239,"width":30,"height":150,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":3397,"y":-993,"width":30,"height":18}',
            linkedObjects: '{"x":3587,"y":-1239,"width":30,"height":150,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":3095,"y":-1361,"width":2540,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":4888,"y":-1031,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":4388,"y":-1362,"width":100,"height":45,"color":"0x000000","rotation":0.65,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":4377,"y":-1339,"width":130,"height":28.000000000000004,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":4248,"y":-532,"width":1900,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5304,"y":-911,"width":409.99999999999994,"height":860,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":10831,"y":377,"width":610,"height":2410,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":8685,"y":2861,"width":2940,"height":630,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":7173,"y":3270,"width":100,"height":1450,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":6515,"y":3945,"width":1230,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":3977,"y":2864,"width":800,"height":300,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":4641,"y":2705,"width":30,"height":18}',
            linkedObjects: '{"x":4821,"y":2589,"width":51,"height":270,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":5653,"y":3550,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5753,"y":3650,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5950,"y":3847,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5850,"y":3748,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5553,"y":3451,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5453,"y":3353,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5353,"y":3255,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5254,"y":3158,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5156,"y":3059,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5056,"y":2960,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":4957,"y":2863,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":4642,"y":2764,"width":530,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":4799,"y":2440,"width":409.99999999999994,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5952,"y":3416,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5353,"y":2827,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5553,"y":3024,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":5751,"y":3220,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        },
        {
            block: '{"x":5158,"y":2636,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":6149,"y":3649,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":4955,"y":2804,"width":30,"height":18}',
            linkedObjects: '{"x":5058,"y":2572,"width":100,"height":100,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":5551,"y":3392,"width":30,"height":18}',
            linkedObjects: '{"x":5651,"y":3156,"width":100,"height":100,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":5155,"y":3000,"width":30,"height":18}',
            linkedObjects: '{"x":5253,"y":2762,"width":100,"height":100,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":5947,"y":3788,"width":30,"height":18}',
            linkedObjects: '{"x":6049,"y":3550,"width":100,"height":100,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":5352,"y":3196,"width":30,"height":18}',
            linkedObjects: '{"x":5454,"y":2959,"width":100,"height":100,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":5753,"y":3591,"width":30,"height":18}',
            linkedObjects: '{"x":5852,"y":3352,"width":100,"height":100,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":6214,"y":3718,"width":229.99999999999997,"height":40,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":6474,"y":3846,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":4852,"y":-1326,"width":1050,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":1609,"y":-744,"width":1370,"height":30,"color":"0x000000","rotation":1.83,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":6628,"y":-971,"width":2320,"height":30,"color":"0x000000","rotation":0.24,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":9338,"y":-697,"width":3180,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":11456,"y":870,"width":710,"height":1070,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":1383,"y":-94,"width":130,"height":35,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":1096,"y":-688,"width":1300,"height":30,"color":"0x000000","rotation":1.2,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":89,"y":-1285,"width":1570,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-967,"y":-1466,"width":670,"height":30,"color":"0x000000","rotation":0.58,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-3164,"y":-878,"width":2460,"height":30,"color":"0x000000","rotation":2.59,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-5897,"y":-240,"width":3400,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-7786,"y":-551,"width":750,"height":30,"color":"0x000000","rotation":1,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-8708,"y":-858,"width":1460,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-1776,"y":2967,"width":12390,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-2003,"y":2651,"width":10390,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-1906,"y":2792,"width":10390,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-2105,"y":2511,"width":10390,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-2203,"y":2371,"width":10390,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":3527,"y":2867,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-2838,"y":2581,"width":100,"height":110.00000000000001,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":1337,"y":2862,"width":100,"height":110.00000000000001,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-748,"y":2722,"width":100,"height":120,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-2689,"y":2113,"width":11160,"height":270,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-4943,"y":2301,"width":100,"height":110.00000000000001,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-9457,"y":2258,"width":3370.0000000000005,"height":100,"color":"0x000000","rotation":0.44,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-11927,"y":1544,"width":1939.9999999999998,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-10348,"y":-1081,"width":1889.9999999999998,"height":30,"color":"0x000000","rotation":0.24,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-12446,"y":-1304,"width":2370,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-13636,"y":141,"width":3260,"height":100,"color":"0x000000","rotation":1.07,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-14757,"y":-1168,"width":860,"height":300,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-13835,"y":-1303,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-14085,"y":-1303,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-2191,"y":-1513,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":10502,"y":-737,"width":50,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":1823,"y":-1396,"width":105,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":-15137,"y":-1965,"width":100,"height":1300,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            checkPoint: '{"x":11461,"y":311,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }, {
            block: '{"x":28962,"y":1718,"width":100,"height":869.9999999999999,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":28277,"y":2199,"width":1470,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":28206,"y":1740,"width":1130,"height":390,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":27531,"y":2499,"width":140,"height":700,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":27028,"y":2898,"width":1145,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":26408,"y":2623,"width":100,"height":790,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":26758,"y":2573,"width":40,"height":52}',
            linkedObjects: '{"x":26535,"y":2833,"width":160,"height":30,"dynamic":true,"handleX":26535,"handleY":2243,"movingSpeed":11,"fillColor":"0x000000"}',
            linkedLeaverObjects: '{"x":26294,"y":2571,"width":40,"height":52}',
            type: "leaverAndBridge"
        }, {
            block: '{"x":26179,"y":2278,"width":360,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":26659,"y":2413,"width":100,"height":370,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":26779,"y":2623,"width":340,"height":50,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":26119,"y":2779,"width":480,"height":365,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":26560,"y":3014,"width":2080,"height":270,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":27179,"y":2798,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":26973,"y":2648,"width":100,"height":50,"color":"0x000000","rotation":0.65,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":25785,"y":2872,"width":530,"height":229.99999999999997,"color":"0x000000","rotation":2.31,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":25340,"y":2820,"width":100,"height":2970,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":25794,"y":3930,"width":810,"height":750,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":27228,"y":4256,"width":3729.9999999999995,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            leaver: '{"x":26382,"y":4180,"width":40,"height":52}',
            linkedObjects: '{"x":26249,"y":4191,"width":100,"height":30,"dynamic":true,"handleX":26249,"handleY":3579,"movingSpeed":11,"fillColor":"0x000000"}',
            linkedLeaverObjects: "",
            type: "leaverAndBridge"
        }, {
            block: '{"x":26525,"y":3927,"width":140,"height":260,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":27499,"y":4007,"width":2030,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":26875,"y":4198,"width":30,"height":18}',
            linkedObjects: '{"x":26875,"y":3812,"width":100,"height":30,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":27205,"y":3812,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            button: '{"x":27535,"y":4197,"width":30,"height":18}',
            linkedObjects: '{"x":27535,"y":3812,"width":100,"height":30,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":28195,"y":4197,"width":30,"height":18}',
            linkedObjects: '{"x":28195,"y":3812,"width":100,"height":30,"fillColor":"0x000000","onButtonPressVisible":true,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            button: '{"x":28533,"y":3788,"width":30,"height":18}',
            linkedObjects: '{"x":28509,"y":4140,"width":100,"height":190,"fillColor":"0x000000","onButtonPressVisible":false,"rotation":0}',
            linkedButtonObjects: "",
            type: "buttonAndGate"
        }, {
            block: '{"x":27865,"y":3812,"width":100,"height":30,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":29443,"y":3624,"width":1530,"height":100,"color":"0x000000","rotation":2.11,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":28599,"y":3927,"width":250,"height":260,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            poison: '{"x":27534,"y":3910,"width":1880,"height":100,"dynamic":false,"rotation":0}',
            type: "poison"
        }, {
            block: '{"x":29294,"y":2274,"width":1280,"height":100,"color":"0x000000","rotation":2.04,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":28057,"y":3089,"width":2680,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":28831,"y":2992,"width":100,"height":100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":30137,"y":2986,"width":690,"height":90,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            block: '{"x":30432,"y":2444,"width":100,"height":1100,"color":"0x000000","rotation":0,"alpha":1,"dynamic":false}',
            type: "block"
        }, {
            checkPoint: '{"x":29764,"y":1599,"width":35.011940144638515,"height":70,"dynamic":false}',
            type: "checkPoint"
        }
    ];
    graphics.parseMap(graphicsWorld, p);
    physics.parseMap(physicsWorld, p);
    graphics.handleResize()
};
