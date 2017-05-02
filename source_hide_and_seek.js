var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a},$jscomp.global=$jscomp.getGlobal(this),$jscomp.polyfill=function(a,b,c,d){if(b){for(c=$jscomp.global,a=a.split("."),d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={}),c=c[e]}a=a[a.length-1],d=c[a],b=b(d),b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}},$jscomp.polyfill("Object.getOwnPropertySymbols",function(a){return a||function(){return[]}},"es6-impl","es5"),$jscomp.owns=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},$jscomp.polyfill("Object.assign",function(a){return a||function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)$jscomp.owns(d,e)&&(a[e]=d[e])}return a}},"es6-impl","es3"),$jscomp.SYMBOL_PREFIX="jscomp_symbol_",$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){},$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)},$jscomp.symbolCounter_=0,$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++},$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator")),"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}}),$jscomp.initSymbolIterator=function(){}},$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},$jscomp.iteratorPrototype=function(a){return $jscomp.initSymbolIterator(),a={next:a},a[$jscomp.global.Symbol.iterator]=function(){return this},a},$jscomp.array=$jscomp.array||{},$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator(),a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}return d.next=function(){return{done:!0,value:void 0}},d.next()}};return d[Symbol.iterator]=function(){return d},d},$jscomp.polyfill("Array.prototype.keys",function(a){return a||function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6-impl","es3"),$jscomp.polyfill("Array.prototype.fill",function(a){return a||function(a,b,c){var d=this.length||0;for(0>b&&(b=Math.max(0,d+b)),(null==c||c>d)&&(c=d),c=Number(c),0>c&&(c=Math.max(0,d+c)),b=Number(b||0);b<c;b++)this[b]=a;return this}},"es6-impl","es3"),$jscomp.polyfill("Math.sign",function(a){return a||function(a){return a=Number(a),0===a||isNaN(a)?a:0<a?1:-1}},"es6-impl","es3"),$jscomp.polyfill("Object.setPrototypeOf",function(a){return a||("object"!=typeof"".__proto__?null:function(a,b){if(a.__proto__=b,a.__proto__!==b)throw new TypeError(a+" is not extensible");return a})},"es6","es5");
! function(p) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = p() : "function" == typeof define && define.amd ? define([], p) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).PIXI = p()
}(function() {
    return function b(e, k, a) {
        function l(d, m) {
            if (!k[d]) {
                if (!e[d]) {
                    var h = "function" == typeof require && require;
                    if (!m && h) return h(d, !0);
                    if (f) return f(d, !0);
                    h = Error("Cannot find module '" + d + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                h = k[d] = {
                    exports: {}
                };
                e[d][0].call(h.exports, function(a) {
                    var h = e[d][1][a];
                    return l(h ? h : a)
                }, h, h.exports, b, e, k, a)
            }
            return k[d].exports
        }
        for (var f = "function" == typeof require && require, d = 0; d < a.length; d++) l(a[d]);
        return l
    }({
        1: [function(b, e, k) {
            function a(a) {
                var d = 32;
                return a &= -a, a && d--, 65535 & a && (d -= 16), 16711935 & a && (d -= 8), 252645135 & a && (d -= 4), 858993459 & a && (d -= 2), 1431655765 & a && --d, d
            }
            "use restrict";
            k.INT_BITS = 32;
            k.INT_MAX = 2147483647;
            k.INT_MIN = -2147483648;
            k.sign = function(a) {
                return (0 < a) - (0 > a)
            };
            k.abs = function(a) {
                var d = a >> 31;
                return (a ^
                    d) - d
            };
            k.min = function(a, d) {
                return d ^ (a ^ d) & -(a < d)
            };
            k.max = function(a, d) {
                return a ^ (a ^ d) & -(a < d)
            };
            k.isPow2 = function(a) {
                return !(a & a - 1 || !a)
            };
            k.log2 = function(a) {
                var d, h;
                return d = (65535 < a) << 4, a >>>= d, h = (255 < a) << 3, a >>>= h, d |= h, h = (15 < a) << 2, a >>>= h, d |= h, h = (3 < a) << 1, a >>>= h, d |= h, d | a >> 1
            };
            k.log10 = function(a) {
                return 1E9 <= a ? 9 : 1E8 <= a ? 8 : 1E7 <= a ? 7 : 1E6 <= a ? 6 : 1E5 <= a ? 5 : 1E4 <= a ? 4 : 1E3 <= a ? 3 : 100 <= a ? 2 : 10 <= a ? 1 : 0
            };
            k.popCount = function(a) {
                return a -= a >>> 1 & 1431655765, a = (858993459 & a) + (a >>> 2 & 858993459), 16843009 * (a + (a >>> 4) & 252645135) >>> 24
            };
            k.countTrailingZeros =
                a;
            k.nextPow2 = function(a) {
                return a += 0 === a, --a, a |= a >>> 1, a |= a >>> 2, a |= a >>> 4, a |= a >>> 8, a |= a >>> 16, a + 1
            };
            k.prevPow2 = function(a) {
                return a |= a >>> 1, a |= a >>> 2, a |= a >>> 4, a |= a >>> 8, a |= a >>> 16, a - (a >>> 1)
            };
            k.parity = function(a) {
                return a ^= a >>> 16, a ^= a >>> 8, a ^= a >>> 4, a &= 15, 27030 >>> a & 1
            };
            var l = Array(256);
            ! function(a) {
                for (var d = 0; 256 > d; ++d) {
                    for (var h = d, f = d, q = 7, h = h >>> 1; h; h >>>= 1) f <<= 1, f |= 1 & h, --q;
                    a[d] = f << q & 255
                }
            }(l);
            k.reverse = function(a) {
                return l[255 & a] << 24 | l[a >>> 8 & 255] << 16 | l[a >>> 16 & 255] << 8 | l[a >>> 24 & 255]
            };
            k.interleave2 = function(a, d) {
                return a &=
                    65535, a = 16711935 & (a | a << 8), a = 252645135 & (a | a << 4), a = 858993459 & (a | a << 2), a = 1431655765 & (a | a << 1), d &= 65535, d = 16711935 & (d | d << 8), d = 252645135 & (d | d << 4), d = 858993459 & (d | d << 2), d = 1431655765 & (d | d << 1), a | d << 1
            };
            k.deinterleave2 = function(a, d) {
                return a = a >>> d & 1431655765, a = 858993459 & (a | a >>> 1), a = 252645135 & (a | a >>> 2), a = 16711935 & (a | a >>> 4), a = 65535 & (a | a >>> 16), a << 16 >> 16
            };
            k.interleave3 = function(a, d, h) {
                return a &= 1023, a = 4278190335 & (a | a << 16), a = 251719695 & (a | a << 8), a = 3272356035 & (a | a << 4), a = 1227133513 & (a | a << 2), d &= 1023, d = 4278190335 & (d | d <<
                    16), d = 251719695 & (d | d << 8), d = 3272356035 & (d | d << 4), d = 1227133513 & (d | d << 2), a |= d << 1, h &= 1023, h = 4278190335 & (h | h << 16), h = 251719695 & (h | h << 8), h = 3272356035 & (h | h << 4), h = 1227133513 & (h | h << 2), a | h << 2
            };
            k.deinterleave3 = function(a, d) {
                return a = a >>> d & 1227133513, a = 3272356035 & (a | a >>> 2), a = 251719695 & (a | a >>> 4), a = 4278190335 & (a | a >>> 8), a = 1023 & (a | a >>> 16), a << 22 >> 22
            };
            k.nextCombination = function(f) {
                var d = f | f - 1;
                return d + 1 | (~d & -~d) - 1 >>> a(f) + 1
            }
        }, {}],
        2: [function(b, e, k) {
            function a(a, q, r) {
                r = r || 2;
                var b = q && q.length,
                    e = b ? q[0] * r : a.length,
                    t = l(a,
                        0, e, r, !0),
                    u = [];
                if (!t) return u;
                var k, w, v, x;
                if (b) {
                    var F = r,
                        z, A, G;
                    x = [];
                    b = 0;
                    for (z = q.length; b < z; b++) A = q[b] * F, G = b < z - 1 ? q[b + 1] * F : a.length, A = l(a, A, G, F, !1), A === A.next && (A.steiner = !0), x.push(n(A));
                    x.sort(h);
                    for (b = 0; b < x.length; b++) {
                        q = x[b];
                        F = t;
                        if (F = m(q, F)) q = y(F, q), f(q, q.next);
                        t = f(t, t.next)
                    }
                }
                if (a.length > 80 * r) {
                    k = v = a[0];
                    w = b = a[1];
                    for (F = r; F < e; F += r) x = a[F], q = a[F + 1], x < k && (k = x), q < w && (w = q), x > v && (v = x), q > b && (b = q);
                    v = Math.max(v - k, b - w)
                }
                return d(t, u, r, k, w, v), u
            }

            function l(d, a, h, f, m) {
                var n;
                if (m === 0 < x(d, a, h, f))
                    for (m = a; m < h; m += f) n =
                        A(m, d[m], d[m + 1], n);
                else
                    for (m = h - f; m >= a; m -= f) n = A(m, d[m], d[m + 1], n);
                return n && u(n, n.next) && (B(n), n = n.next), n
            }

            function f(d, a) {
                if (!d) return d;
                a || (a = d);
                var h, f = d;
                do
                    if (h = !1, f.steiner || !u(f, f.next) && 0 !== t(f.prev, f, f.next)) f = f.next;
                    else {
                        if (B(f), f = a = f.prev, f === f.next) return null;
                        h = !0
                    }
                while (h || f !== a);
                return a
            }

            function d(a, h, m, n, b, l, e) {
                if (a) {
                    if (!e && l) {
                        var k = a,
                            x = k;
                        do null === x.z && (x.z = q(x.x, x.y, n, b, l)), x.prevZ = x.prev, x = x.nextZ = x.next; while (x !== k);
                        x.prevZ.nextZ = null;
                        x.prevZ = null;
                        var k = x,
                            F, z, A, G, C, E, D = 1;
                        do {
                            x = k;
                            G = k = null;
                            for (C = 0; x;) {
                                C++;
                                z = x;
                                for (F = E = 0; F < D && (E++, z = z.nextZ, z); F++);
                                for (F = D; 0 < E || 0 < F && z;) 0 === E ? (A = z, z = z.nextZ, F--) : 0 !== F && z ? x.z <= z.z ? (A = x, x = x.nextZ, E--) : (A = z, z = z.nextZ, F--) : (A = x, x = x.nextZ, E--), G ? G.nextZ = A : k = A, A.prevZ = G, G = A;
                                x = z
                            }
                            G.nextZ = null;
                            D *= 2
                        } while (1 < C)
                    }
                    for (x = a; a.prev !== a.next;) {
                        A = a.prev;
                        k = a.next;
                        if (l) a: {
                            z = a;F = n;
                            var P = b,
                                H = l;G = z.prev;C = z;E = z.next;
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
                            } if (z) h.push(A.i / m), h.push(a.i / m), h.push(k.i / m), B(a), x = a = k.next;
                        else if (a = k, a === x) {
                            if (e)
                                if (1 === e) {
                                    e = h;
                                    A = m;
                                    k = a;
                                    do x = k.prev, z = k.next.next, !u(x, z) && w(x, k, k.next, z) && v(x, z) && v(z, x) && (e.push(x.i / A), e.push(k.i / A), e.push(z.i / A), B(k), B(k.next), k = a = z), k = k.next; while (k !== a);
                                    a = k;
                                    d(a, h, m, n, b, l, 2)
                                } else {
                                    if (2 === e) a: {
                                        e = a;do {
                                            for (A = e.next.next; A !== e.prev;) {
                                                if (k = e.i !== A.i) {
                                                    k = e;
                                                    x = A;
                                                    if (z = k.next.i !== x.i && k.prev.i !== x.i) {
                                                        b: {
                                                            z = k;do {
                                                                if (z.i !== k.i && z.next.i !== k.i && z.i !== x.i && z.next.i !== x.i && w(z, z.next, k, x)) {
                                                                    z = !0;
                                                                    break b
                                                                }
                                                                z = z.next
                                                            } while (z !== k);z = !1
                                                        }
                                                        z = !z
                                                    }
                                                    if (z = z && v(k, x) && v(x, k)) {
                                                        z = k;
                                                        G = !1;
                                                        C = (k.x + x.x) / 2;
                                                        x = (k.y + x.y) / 2;
                                                        do z.y > x != z.next.y > x && C < (z.next.x - z.x) * (x - z.y) / (z.next.y - z.y) + z.x && (G = !G), z = z.next; while (z !== k);
                                                        z = G
                                                    }
                                                    k = z
                                                }
                                                if (k) {
                                                    a = y(e, A);
                                                    e = f(e, e.next);
                                                    a = f(a, a.next);
                                                    d(e, h, m, n, b, l);
                                                    d(a, h, m, n, b, l);
                                                    break a
                                                }
                                                A = A.next
                                            }
                                            e = e.next
                                        } while (e !== a)
                                    }
                                }
                            else d(f(a), h, m, n, b, l, 1);
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
                for (var l, b = h, e = h.x, t = h.y, u = 1 / 0, f = h.next; f !== b;) m >= f.x && f.x >= e && r(n < t ? m : q, n, e, t, n < t ? q : m, n, f.x, f.y) && (l = Math.abs(n - f.y) / (m - f.x), (l < u || l === u && f.x > h.x) && v(f, d) && (h = f, u = l)), f = f.next;
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

            function u(d, a) {
                return d.x === a.x && d.y === a.y
            }

            function w(d, a, h, f) {
                return !!(u(d, a) && u(h, f) || u(d, f) && u(h, a)) || 0 < t(d, a, h) != 0 < t(d, a, f) && 0 < t(h, f, d) != 0 < t(h, f, a)
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
        3: [function(b, e, k) {
            function a(d, a, f) {
                this.fn = d;
                this.context = a;
                this.once = f || !1
            }

            function l() {}
            var f = Object.prototype.hasOwnProperty,
                d = "function" != typeof Object.create && "~";
            l.prototype._events = void 0;
            l.prototype.eventNames =
                function() {
                    var a, m = this._events,
                        q = [];
                    if (!m) return q;
                    for (a in m) f.call(m, a) && q.push(d ? a.slice(1) : a);
                    return Object.getOwnPropertySymbols ? q.concat(Object.getOwnPropertySymbols(m)) : q
                };
            l.prototype.listeners = function(a, f) {
                var h = d ? d + a : a,
                    h = this._events && this._events[h];
                if (f) return !!h;
                if (!h) return [];
                if (h.fn) return [h.fn];
                for (var m = 0, r = h.length, b = Array(r); m < r; m++) b[m] = h[m].fn;
                return b
            };
            l.prototype.emit = function(a, f, q, n, r, b) {
                var h = d ? d + a : a;
                if (!this._events || !this._events[h]) return !1;
                var m, l = this._events[h],
                    e =
                    arguments.length;
                if ("function" == typeof l.fn) {
                    switch (l.once && this.removeListener(a, l.fn, void 0, !0), e) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, f), !0;
                        case 3:
                            return l.fn.call(l.context, f, q), !0;
                        case 4:
                            return l.fn.call(l.context, f, q, n), !0;
                        case 5:
                            return l.fn.call(l.context, f, q, n, r), !0;
                        case 6:
                            return l.fn.call(l.context, f, q, n, r, b), !0
                    }
                    h = 1;
                    for (m = Array(e - 1); h < e; h++) m[h - 1] = arguments[h];
                    l.fn.apply(l.context, m)
                } else
                    for (var t, k = l.length, h = 0; h < k; h++) switch (l[h].once && this.removeListener(a,
                        l[h].fn, void 0, !0), e) {
                        case 1:
                            l[h].fn.call(l[h].context);
                            break;
                        case 2:
                            l[h].fn.call(l[h].context, f);
                            break;
                        case 3:
                            l[h].fn.call(l[h].context, f, q);
                            break;
                        default:
                            if (!m)
                                for (t = 1, m = Array(e - 1); t < e; t++) m[t - 1] = arguments[t];
                            l[h].fn.apply(l[h].context, m)
                    }
                return !0
            };
            l.prototype.on = function(h, f, q) {
                f = new a(f, q || this);
                h = d ? d + h : h;
                return this._events || (this._events = d ? {} : Object.create(null)), this._events[h] ? this._events[h].fn ? this._events[h] = [this._events[h], f] : this._events[h].push(f) : this._events[h] = f, this
            };
            l.prototype.once =
                function(h, f, q) {
                    f = new a(f, q || this, !0);
                    h = d ? d + h : h;
                    return this._events || (this._events = d ? {} : Object.create(null)), this._events[h] ? this._events[h].fn ? this._events[h] = [this._events[h], f] : this._events[h].push(f) : this._events[h] = f, this
                };
            l.prototype.removeListener = function(a, f, q, n) {
                a = d ? d + a : a;
                if (!this._events || !this._events[a]) return this;
                var h = this._events[a],
                    m = [];
                if (f)
                    if (h.fn)(h.fn !== f || n && !h.once || q && h.context !== q) && m.push(h);
                    else
                        for (var b = 0, l = h.length; b < l; b++)(h[b].fn !== f || n && !h[b].once || q && h[b].context !==
                            q) && m.push(h[b]);
                return m.length ? this._events[a] = 1 === m.length ? m[0] : m : delete this._events[a], this
            };
            l.prototype.removeAllListeners = function(a) {
                return this._events ? (a ? delete this._events[d ? d + a : a] : this._events = d ? {} : Object.create(null), this) : this
            };
            l.prototype.off = l.prototype.removeListener;
            l.prototype.addListener = l.prototype.on;
            l.prototype.setMaxListeners = function() {
                return this
            };
            l.prefixed = d;
            "undefined" != typeof e && (e.exports = l)
        }, {}],
        4: [function(b, e, k) {
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
                    k = /BlackBerry/i,
                    w = /BB10/i,
                    v = /Opera Mini/i,
                    y = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
                    A = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
                    B = /(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)/i,
                    z = function(a) {
                        a = a || navigator.userAgent;
                        var l = a.split("[FBAN");
                        if ("undefined" !=
                            typeof l[1] && (a = l[0]), l = a.split("Twitter"), "undefined" != typeof l[1] && (a = l[0]), this.apple = {
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
                                blackberry: k.test(a),
                                blackberry10: w.test(a),
                                opera: v.test(a),
                                firefox: A.test(a),
                                chrome: y.test(a),
                                device: k.test(a) || w.test(a) || v.test(a) || A.test(a) || y.test(a)
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
        5: [function(b, e, k) {
            var a = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable;
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
                        for (var e = 0; e < m.length; e++) l.call(h,
                            m[e]) && (q[m[e]] = h[m[e]])
                    }
                }
                return q
            }
        }, {}],
        6: [function(b, e, k) {
            var a = new ArrayBuffer(0),
                l = function(f, d, h, m) {
                    this.gl = f;
                    this.buffer = f.createBuffer();
                    this.type = d || f.ARRAY_BUFFER;
                    this.drawType = m || f.STATIC_DRAW;
                    this.data = a;
                    h && this.upload(h)
                };
            l.prototype.upload = function(a, d, h) {
                h || this.bind();
                h = this.gl;
                a = a || this.data;
                this.data.byteLength >= a.byteLength ? h.bufferSubData(this.type, d || 0, a) : h.bufferData(this.type, a, this.drawType);
                this.data = a
            };
            l.prototype.bind = function() {
                this.gl.bindBuffer(this.type, this.buffer)
            };
            l.createVertexBuffer = function(a, d, h) {
                return new l(a, a.ARRAY_BUFFER, d, h)
            };
            l.createIndexBuffer = function(a, d, h) {
                return new l(a, a.ELEMENT_ARRAY_BUFFER, d, h)
            };
            l.create = function(a, d, h, m) {
                return new l(a, d, m)
            };
            l.prototype.destroy = function() {
                this.gl.deleteBuffer(this.buffer)
            };
            e.exports = l
        }, {}],
        7: [function(b, e, k) {
            var a = b("./GLTexture"),
                l = function(a, d, h) {
                    this.gl = a;
                    this.framebuffer = a.createFramebuffer();
                    this.texture = this.stencil = null;
                    this.width = d || 100;
                    this.height = h || 100
                };
            l.prototype.enableTexture = function(f) {
                var d =
                    this.gl;
                this.texture = f || new a(d);
                this.texture.bind();
                this.bind();
                d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, this.texture.texture, 0)
            };
            l.prototype.enableStencil = function() {
                if (!this.stencil) {
                    var a = this.gl;
                    this.stencil = a.createRenderbuffer();
                    a.bindRenderbuffer(a.RENDERBUFFER, this.stencil);
                    a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, this.stencil);
                    a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_STENCIL, this.width, this.height)
                }
            };
            l.prototype.clear =
                function(a, d, h, m) {
                    this.bind();
                    var f = this.gl;
                    f.clearColor(a, d, h, m);
                    f.clear(f.COLOR_BUFFER_BIT)
                };
            l.prototype.bind = function() {
                var a = this.gl;
                this.texture && this.texture.unbind();
                a.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer)
            };
            l.prototype.unbind = function() {
                var a = this.gl;
                a.bindFramebuffer(a.FRAMEBUFFER, null)
            };
            l.prototype.resize = function(a, d) {
                var h = this.gl;
                this.width = a;
                this.height = d;
                this.texture && this.texture.uploadData(null, a, d);
                this.stencil && (h.bindRenderbuffer(h.RENDERBUFFER, this.stencil), h.renderbufferStorage(h.RENDERBUFFER,
                    h.DEPTH_STENCIL, a, d))
            };
            l.prototype.destroy = function() {
                var a = this.gl;
                this.texture && this.texture.destroy();
                a.deleteFramebuffer(this.framebuffer);
                this.texture = this.stencil = this.gl = null
            };
            l.createRGBA = function(f, d, h) {
                var m = a.fromData(f, null, d, h);
                m.enableNearestScaling();
                m.enableWrapClamp();
                f = new l(f, d, h);
                return f.enableTexture(m), f.unbind(), f
            };
            l.createFloat32 = function(f, d, h, m) {
                m = new a.fromData(f, m, d, h);
                m.enableNearestScaling();
                m.enableWrapClamp();
                f = new l(f, d, h);
                return f.enableTexture(m), f.unbind(), f
            };
            e.exports = l
        }, {
            "./GLTexture": 9
        }],
        8: [function(b, e, k) {
            var a = b("./shader/compileProgram"),
                l = b("./shader/extractAttributes"),
                f = b("./shader/extractUniforms"),
                d = b("./shader/generateUniformAccessObject");
            b = function(h, m, q) {
                this.gl = h;
                this.program = a(h, m, q);
                this.attributes = l(h, this.program);
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
        9: [function(b, e, k) {
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
            var l = !1;
            a.prototype.uploadData = function(a, d, h) {
                this.bind();
                var f = this.gl;
                if (this.width = d || this.width, this.height = h || this.height, a instanceof Float32Array) {
                    if (!l) {
                        if (!f.getExtension("OES_texture_float")) throw Error("floating point textures not available");
                        l = !0
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
        10: [function(b, e, k) {
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
            var l = b("./setVertexAttribArrays");
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
                return l(a, this.attributes, this.nativeState), this.indexBuffer.bind(), this
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
        11: [function(b, e, k) {
            e.exports = function(a, b) {
                var f = a.getContext("webgl", b) || a.getContext("experimental-webgl", b);
                if (!f) throw Error("This browser does not support webGL. Try using the canvas renderer");
                return f
            }
        }, {}],
        12: [function(b, e, k) {
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
        13: [function(b, e, k) {
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
        14: [function(b, e, k) {
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
        15: [function(b, e, k) {
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
        16: [function(b, e, k) {
            var a = b("./mapType"),
                l = b("./mapSize"),
                f = function(d, a, f, q) {
                    gl.vertexAttribPointer(this.location, this.size, d || gl.FLOAT, a || !1, f || 0, q || 0)
                };
            e.exports = function(d, h) {
                for (var m = {}, q = d.getProgramParameter(h, d.ACTIVE_ATTRIBUTES), n = 0; n < q; n++) {
                    var b = d.getActiveAttrib(h, n),
                        e = a(d, b.type);
                    m[b.name] = {
                        type: e,
                        size: l(e),
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
        17: [function(b, e, k) {
            var a = b("./mapType"),
                l = b("./defaultValue");
            e.exports = function(f, d) {
                for (var h = {}, m = f.getProgramParameter(d, f.ACTIVE_UNIFORMS), q = 0; q < m; q++) {
                    var n = f.getActiveUniform(d, q),
                        b = n.name.replace(/\[.*?\]/, ""),
                        e = a(f, n.type);
                    h[b] = {
                        type: e,
                        size: n.size,
                        location: f.getUniformLocation(d, b),
                        value: l(e, n.size)
                    }
                }
                return h
            }
        }, {
            "./defaultValue": 15,
            "./mapType": 21
        }],
        18: [function(b, e, k) {
            var a =
                function(d) {
                    d = f.replace("%%", d);
                    return new Function(d)
                },
                l = function(a, f) {
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
                for (var m = Object.keys(h), n = 0; n < m.length; n++) {
                    for (var q = m[n], b = q.split("."), e = b[b.length - 1], k = f, B = 0; B < b.length - 1; B++) var z = k[b[B]] || {
                            data: {}
                        },
                        k = k[b[B]] = z;
                    b = k;
                    q = h[q];
                    b.data[e] = q;
                    b.gl = d;
                    Object.defineProperty(b, e, {
                        get: a(e),
                        set: l(e, q)
                    })
                }
                return f
            }
        }, {}],
        19: [function(b, e, k) {
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
        20: [function(b, e, k) {
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
        21: [function(b, e, k) {
            var a = null,
                l = {
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
                    var h = Object.keys(l);
                    a = {};
                    for (var m = 0; m < h.length; ++m) {
                        var q = h[m];
                        a[f[q]] = l[q]
                    }
                }
                return a[d]
            }
        }, {}],
        22: [function(b, e, k) {
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
                k.resolve = function() {
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
                k.normalize = function(d) {
                    var a = k.isAbsolute(d),
                        n = "/" === h(d, -1);
                    return d = b(f(d.split("/"), function(d) {
                        return !!d
                    }), !a).join("/"), d || a || (d = "."), d && n && (d += "/"), (a ? "/" : "") + d
                };
                k.isAbsolute = function(d) {
                    return "/" === d.charAt(0)
                };
                k.join = function() {
                    var d = Array.prototype.slice.call(arguments, 0);
                    return k.normalize(f(d, function(d, a) {
                        if ("string" != typeof d) throw new TypeError("Arguments to path.join must be strings");
                        return d
                    }).join("/"))
                };
                k.relative = function(d, a) {
                    function h(d) {
                        for (var a = 0; a < d.length && "" === d[a]; a++);
                        for (var h = d.length - 1; 0 <= h && "" === d[h]; h--);
                        return a > h ? [] : d.slice(a, h - a + 1)
                    }
                    d = k.resolve(d).substr(1);
                    a = k.resolve(a).substr(1);
                    for (var f = h(d.split("/")), m = h(a.split("/")), q = Math.min(f.length, m.length), b = q, e = 0; e < q; e++)
                        if (f[e] !== m[e]) {
                            b = e;
                            break
                        }
                    q = [];
                    for (e = b; e < f.length; e++) q.push("..");
                    return q = q.concat(m.slice(b)), q.join("/")
                };
                k.sep = "/";
                k.delimiter = ":";
                k.dirname = function(a) {
                    var h = d.exec(a).slice(1);
                    a = h[0];
                    h = h[1];
                    return a || h ? (h &&
                        (h = h.substr(0, h.length - 1)), a + h) : "."
                };
                k.basename = function(a, h) {
                    var f = d.exec(a).slice(1)[2];
                    return h && f.substr(-1 * h.length) === h && (f = f.substr(0, f.length - h.length)), f
                };
                k.extname = function(a) {
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
        23: [function(b, e, k) {
            function a() {
                throw Error("setTimeout has not been defined");
            }

            function l() {
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
                if ((t === l || !t) && clearTimeout) return t = clearTimeout, clearTimeout(d);
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
                v && u && (v = !1, u.length ? w = u.concat(w) : y = -1, w.length && m())
            }

            function m() {
                if (!v) {
                    var a =
                        f(h);
                    v = !0;
                    for (var n = w.length; n;) {
                        u = w;
                        for (w = []; ++y < n;) u && u[y].run();
                        y = -1;
                        n = w.length
                    }
                    u = null;
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
                t = "function" == typeof clearTimeout ? clearTimeout : l
            } catch (A) {
                t = l
            }!0;
            var u, w = [],
                v = !1,
                y = -1;
            b.nextTick = function(d) {
                var a = Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var h = 1; h < arguments.length; h++) a[h - 1] = arguments[h];
                w.push(new q(d, a));
                1 !== w.length || v || f(m)
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
        24: [function(b, e, k) {
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

                    function l(d, a, h) {
                        var f = 0;
                        d = h ? Q(d / C) : d >> 1;
                        for (d += Q(d / a); d > O * G >> 1; f += x) d = Q(d / O);
                        return Q(f + (O + 1) * d / (d + E))
                    }

                    function u(d) {
                        var a, h, m, b, e, r, t, k = [],
                            u = d.length,
                            w = 0,
                            v = D,
                            y = H;
                        h = d.lastIndexOf(J);
                        0 > h && (h = 0);
                        for (m = 0; m < h; ++m) 128 <= d.charCodeAt(m) && f("not-basic"), k.push(d.charCodeAt(m));
                        for (h = 0 < h ? h + 1 : 0; h < u;) {
                            m = w;
                            a = 1;
                            for (b = x; h >= u && f("invalid-input"), e = n(d.charCodeAt(h++)),
                                (e >= x || e > Q((z - w) / a)) && f("overflow"), w += e * a, r = b <= y ? F : b >= y + G ? G : b - y, !(e < r); b += x) t = x - r, a > Q(z / t) && f("overflow"), a *= t;
                            a = k.length + 1;
                            y = l(w - m, a, 0 == m);
                            Q(w / a) > z - v && f("overflow");
                            v += Q(w / a);
                            w %= a;
                            k.splice(w++, 0, v)
                        }
                        return q(k)
                    }

                    function w(d) {
                        var a, h, n, q, b, e, t, k, u, w, v, y, A, B = [];
                        d = m(d);
                        v = d.length;
                        a = D;
                        h = 0;
                        b = H;
                        for (e = 0; e < v; ++e) w = d[e], 128 > w && B.push(K(w));
                        for ((n = q = B.length) && B.push(J); n < v;) {
                            t = z;
                            for (e = 0; e < v; ++e) w = d[e], w >= a && w < t && (t = w);
                            y = n + 1;
                            t - a > Q((z - h) / y) && f("overflow");
                            h += (t - a) * y;
                            a = t;
                            for (e = 0; e < v; ++e)
                                if (w = d[e], w < a && ++h > z &&
                                    f("overflow"), w == a) {
                                    k = h;
                                    for (t = x; u = t <= b ? F : t >= b + G ? G : t - b, !(k < u); t += x) A = k - u, k = x - u, B.push(K(r(u + A % k, 0))), k = Q(A / k);
                                    B.push(K(r(k, 0)));
                                    b = l(h, y, n == q);
                                    h = 0;
                                    ++n
                                }++h;
                            ++a
                        }
                        return B.join("")
                    }
                    var v = "object" == typeof k && k && !k.nodeType && k,
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
                            decode: u,
                            encode: w,
                            toASCII: function(d) {
                                return h(d, function(d) {
                                    return L.test(d) ? "xn--" + w(d) : d
                                })
                            },
                            toUnicode: function(d) {
                                return h(d, function(d) {
                                    return I.test(d) ? u(d.slice(4).toLowerCase()) : d
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
        25: [function(b, e, k) {
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
                    var n, e, l, k;
                    l = b[f].replace(q, "%20");
                    k = l.indexOf(d);
                    0 <= k ? (n = l.substr(0, k), e = l.substr(k + 1)) : (n = l, e = "");
                    l = decodeURIComponent(n);
                    k = decodeURIComponent(e);
                    Object.prototype.hasOwnProperty.call(m,
                        l) ? a(m[l]) ? m[l].push(k) : m[l] = [m[l], k] : m[l] = k
                }
                return m
            };
            var a = Array.isArray || function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }
        }, {}],
        26: [function(b, e, k) {
            function a(d, a) {
                if (d.map) return d.map(a);
                for (var h = [], f = 0; f < d.length; f++) h.push(a(d[f], f));
                return h
            }
            var l = function(d) {
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
                        var n = encodeURIComponent(l(d)) + q;
                        return f(h[d]) ? a(h[d], function(d) {
                            return n + encodeURIComponent(l(d))
                        }).join(m) : n + encodeURIComponent(l(h[d]))
                    }).join(m) : n ? encodeURIComponent(l(n)) + q + encodeURIComponent(l(h)) : ""
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
        27: [function(b, e, k) {
            k.decode = k.parse = b("./decode");
            k.encode = k.stringify = b("./encode")
        }, {
            "./decode": 25,
            "./encode": 26
        }],
        28: [function(b, e, k) {
            function a() {
                this.href = this.path = this.pathname = this.query = this.search = this.hash = this.hostname = this.port = this.host = this.auth = this.slashes = this.protocol = null
            }

            function l(h, f, n) {
                if (h && d.isObject(h) && h instanceof a) return h;
                var m = new a;
                return m.parse(h, f, n), m
            }
            var f = b("punycode"),
                d = b("./util");
            k.parse = l;
            k.resolve = function(d, a) {
                return l(d, !1, !0).resolve(a)
            };
            k.resolveObject = function(d, a) {
                return d ? l(d, !1, !0).resolveObject(a) :
                    a
            };
            k.format = function(h) {
                return d.isString(h) && (h = l(h)), h instanceof a ? h.format() : a.prototype.format.call(h)
            };
            k.Url = a;
            var h = /^([a-z0-9.+-]+:)/i,
                m = /:[0-9]*$/,
                q = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
            e = "{}|\\^`".split("").concat('<>"` \r\n\t'.split(""));
            var n = ["'"].concat(e),
                r = ["%", "/", "?", ";", "#"].concat(n),
                t = ["/", "?", "#"],
                u = /^[+a-z0-9A-Z_-]{0,63}$/,
                w = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
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
                    var l = a.toLowerCase();
                    this.protocol = l;
                    e = e.substr(a.length)
                }
                if (b || a || e.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var k = "//" === e.substr(0, 2);
                    !k || a && y[a] || (e = e.substr(2), this.slashes = !0)
                }
                if (!y[a] && (k || a && !A[a])) {
                    k = -1;
                    for (b = 0; b < t.length; b++) a = e.indexOf(t[b]), -1 !== a && (-1 === k || a < k) && (k = a);
                    var x;
                    b = -1 === k ? e.lastIndexOf("@") : e.lastIndexOf("@", k); - 1 !== b && (x = e.slice(0, b), e = e.slice(b + 1), this.auth = decodeURIComponent(x));
                    k = -1;
                    for (b = 0; b < r.length; b++) a = e.indexOf(r[b]), -1 !== a && (-1 === k || a < k) && (k = a); - 1 === k && (k = e.length);
                    this.host = e.slice(0, k);
                    e = e.slice(k);
                    this.parseHost();
                    this.hostname = this.hostname || "";
                    x = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!x) {
                        var z = this.hostname.split(/\./);
                        b = 0;
                        for (k = z.length; b < k; b++)
                            if ((a = z[b]) && !a.match(u)) {
                                for (var F = "", I = 0, L = a.length; I < L; I++) F += 127 < a.charCodeAt(I) ? "x" : a[I];
                                if (!F.match(u)) {
                                    k = z.slice(0, b);
                                    b = z.slice(b + 1);
                                    (a = a.match(w)) && (k.push(a[1]), b.unshift(a[2]));
                                    b.length && (e = "/" + b.join(".") + e);
                                    this.hostname =
                                        k.join(".");
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
                if (!v[l])
                    for (b = 0, k = n.length; b < k; b++) x = n[b], -1 !== e.indexOf(x) && (a = encodeURIComponent(x), a === x && (a = escape(x)), e = e.split(x).join(a));
                b = e.indexOf("#"); - 1 !== b && (this.hash = e.substr(b), e = e.slice(0,
                    b));
                b = e.indexOf("?");
                if (-1 !== b ? (this.search = e.substr(b), this.query = e.substr(b + 1), m && (this.query = B.parse(this.query)), e = e.slice(0, b)) : m && (this.search = "", this.query = {}), e && (this.pathname = e), A[l] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) b = this.pathname || "", this.path = b + (this.search || "");
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
                return this.resolveObject(l(d, !1, !0)).format()
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
                    l = n = e || n || f.host && h.pathname,
                    m = f.pathname && f.pathname.split("/") || [],
                    b = h.pathname && h.pathname.split("/") || [],
                    q = f.protocol && !A[f.protocol];
                if (q && (f.hostname = "", f.port = null, f.host && ("" === m[0] ? m[0] = f.host : m.unshift(f.host)),
                        f.host = "", h.protocol && (h.hostname = null, h.port = null, h.host && ("" === b[0] ? b[0] = h.host : b.unshift(h.host)), h.host = null), n = n && ("" === b[0] || "" === m[0])), e) f.host = h.host || "" === h.host ? h.host : f.host, f.hostname = h.hostname || "" === h.hostname ? h.hostname : f.hostname, f.search = h.search, f.query = h.query, m = b;
                else if (b.length) m || (m = []), m.pop(), m = m.concat(b), f.search = h.search, f.query = h.query;
                else if (!d.isNullOrUndefined(h.search)) return q && (f.hostname = f.host = m.shift(), (q = !!(f.host && 0 < f.host.indexOf("@")) && f.host.split("@")) &&
                    (f.auth = q.shift(), f.host = f.hostname = q.shift())), f.search = h.search, f.query = h.query, d.isNull(f.pathname) && d.isNull(f.search) || (f.path = (f.pathname ? f.pathname : "") + (f.search ? f.search : "")), f.href = f.format(), f;
                if (!m.length) return f.pathname = null, f.search ? f.path = "/" + f.search : f.path = null, f.href = f.format(), f;
                for (var e = m.slice(-1)[0], b = (f.host || h.host || 1 < m.length) && ("." === e || ".." === e) || "" === e, r = 0, t = m.length; 0 <= t; t--) e = m[t], "." === e ? m.splice(t, 1) : ".." === e ? (m.splice(t, 1), r++) : r && (m.splice(t, 1), r--);
                if (!n && !l)
                    for (; r--; r) m.unshift("..");
                !n || "" === m[0] || m[0] && "/" === m[0].charAt(0) || m.unshift("");
                b && "/" !== m.join("/").substr(-1) && m.push("");
                l = "" === m[0] || m[0] && "/" === m[0].charAt(0);
                q && (f.hostname = f.host = l ? "" : m.length ? m.shift() : "", (q = !!(f.host && 0 < f.host.indexOf("@")) && f.host.split("@")) && (f.auth = q.shift(), f.host = f.hostname = q.shift()));
                return n = n || f.host && m.length, n && !l && m.unshift(""), m.length ? f.pathname = m.join("/") : (f.pathname = null, f.path = null), d.isNull(f.pathname) && d.isNull(f.search) || (f.path = (f.pathname ? f.pathname : "") + (f.search ? f.search :
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
        29: [function(b, e, k) {
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
        30: [function(b, e, k) {
            function a() {}

            function l(d, a, h) {
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
            f.prototype.emit = function(d, a, f, b, e, l) {
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
                            return q.fn.call(q.context, a, f, b, e, l), !0
                    }
                    m = 1;
                    for (n = Array(r - 1); m < r; m++) n[m - 1] = arguments[m];
                    q.fn.apply(q.context, n)
                } else
                    for (var t, k = q.length, m = 0; m < k; m++) switch (q[m].once && this.removeListener(d, q[m].fn, void 0, !0), r) {
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
                a = new l(a, f || this);
                d = h ? h + d : d;
                return this._events[d] ? this._events[d].fn ? this._events[d] = [this._events[d], a] : this._events[d].push(a) : (this._events[d] = a, this._eventsCount++), this
            };
            f.prototype.once = function(d, a, f) {
                a = new l(a, f || this, !0);
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
                    for (var q = 0, e = [], l = m.length; q < l; q++)(m[q].fn !== f || b && !m[q].once || n && m[q].context !== n) && e.push(m[q]);
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
        31: [function(b, e, k) {
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
        32: [function(b, e, k) {
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
                var l = b("parse-uri"),
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
                    var a = l(d, {
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
        33: [function(b, e, k) {
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

            function l(d) {
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
                this.abort(l(d) + " Request failed. Status: " + d.status + ', text: "' + d.statusText + '"')
            };
            a.prototype._xhrOnAbort = function() {
                this.abort(l(this.xhr) + " Request was aborted by the user.")
            };
            a.prototype._xdrOnTimeout = function() {
                this.abort(l(this.xhr) + " Request timed out.")
            };
            a.prototype._xhrOnLoad = function() {
                var d = this.xhr,
                    h = "undefined" == typeof d.status ? d.status : 200;
                if (!(200 === h || 204 === h || 0 === h && 0 < d.responseText.length)) return void this.abort("[" + d.status +
                    "]" + d.statusText + ":" + d.responseURL);
                if (this.xhrType === a.XHR_RESPONSE_TYPE.TEXT) this.data = d.responseText;
                else if (this.xhrType === a.XHR_RESPONSE_TYPE.JSON) try {
                    this.data = JSON.parse(d.responseText), this.isJson = !0
                } catch (u) {
                    return void this.abort("Error trying to parse loaded json:", u)
                } else if (this.xhrType === a.XHR_RESPONSE_TYPE.DOCUMENT) try {
                    if (window.DOMParser) this.data = (new DOMParser).parseFromString(d.responseText, "text/xml");
                    else {
                        var f = document.createElement("div");
                        f.innerHTML = d.responseText;
                        this.data =
                            f
                    }
                    this.isXml = !0
                } catch (u) {
                    return void this.abort("Error trying to parse loaded xml:", u)
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
        34: [function(b, e, k) {
            function a() {}

            function l(a) {
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
                                    f(d.data, l(m(d)))
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
        35: [function(b, e, k) {
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
        36: [function(b, e, k) {
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
        37: [function(b, e, k) {
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
        38: [function(b, e, k) {
            var a = b("../../Resource"),
                l = b("../../b64"),
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
                            if (b && 0 === b.indexOf("image")) return d.data = new Image, d.data.src = "data:" + b + ";base64," + l.encodeBinary(d.xhr.responseText), d.isImage = !0, void(d.data.onload = function() {
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
            e, k) {
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
            var l = b("../core"),
                f = b("ismobilejs");
            Object.assign(l.DisplayObject.prototype, b("./accessibleTarget"));
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
                        if (n.renderId !== this.renderId) n._accessibleActive = !1, l.utils.removeItems(this.children, d, 1), this.div.removeChild(n._accessibleDiv), this.pool.push(n._accessibleDiv), n._accessibleDiv = null, d--, 0 ===
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
            l.WebGLRenderer.registerPlugin("accessibility", a);
            l.CanvasRenderer.registerPlugin("accessibility", a)
        }, {
            "../core": 62,
            "./accessibleTarget": 40,
            ismobilejs: 4
        }],
        40: [function(b, e, k) {
            e.exports = {
                accessible: !1,
                accessibleTitle: null,
                accessibleHint: null,
                tabIndex: 0,
                _accessibleActive: !1,
                _accessibleDiv: !1
            }
        }, {}],
        41: [function(b, e, k) {
            e.exports = {
                accessibleTarget: b("./accessibleTarget"),
                AccessibilityManager: b("./AccessibilityManager")
            }
        }, {
            "./AccessibilityManager": 39,
            "./accessibleTarget": 40
        }],
        42: [function(b, e, k) {
            function a(d) {
                if (d instanceof Array) {
                    if ("precision" !== d[0].substring(0, 9)) return d = d.slice(0), d.unshift("precision " + f.PRECISION.DEFAULT + " float;"), d
                } else if ("precision" !== d.substring(0, 9)) return "precision " + f.PRECISION.DEFAULT + " float;\n" + d;
                return d
            }
            var l = b("pixi-gl-core").GLShader,
                f = b("./const");
            b = function(d, h, f, b) {
                l.call(this, d, a(h), a(f), b)
            };
            b.prototype = Object.create(l.prototype);
            b.prototype.constructor = b;
            e.exports = b
        }, {
            "./const": 43,
            "pixi-gl-core": 12
        }],
        43: [function(b, e, k) {
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
        44: [function(b, e, k) {
            function a() {
                this.minX = 1 / 0;
                this.minY = 1 / 0;
                this.maxX = -(1 / 0);
                this.maxY = -(1 / 0);
                this.rect = null
            }
            var l = b("../math").Rectangle;
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
                return this.minX > this.maxX || this.minY > this.maxY ? l.EMPTY : (a = a || new l(0, 0, 1, 1), a.x = this.minX, a.y = this.minY, a.width = this.maxX - this.minX, a.height = this.maxY - this.minY, a)
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
                    l = f.d,
                    k = f.tx,
                    f = f.ty,
                    v = this.minX,
                    y = this.minY,
                    A = this.maxX,
                    B = this.maxY,
                    z = a * d + e *
                    h + k,
                    x = q * d + l * h + f,
                    v = z < v ? z : v,
                    y = x < y ? x : y,
                    A = z > A ? z : A,
                    B = x > B ? x : B,
                    z = a * m + e * h + k,
                    x = q * m + l * h + f,
                    v = z < v ? z : v,
                    y = x < y ? x : y,
                    A = z > A ? z : A,
                    B = x > B ? x : B,
                    z = a * d + e * b + k,
                    x = q * d + l * b + f,
                    v = z < v ? z : v,
                    y = x < y ? x : y,
                    A = z > A ? z : A,
                    B = x > B ? x : B,
                    z = a * m + e * b + k,
                    x = q * m + l * b + f;
                this.minX = z < v ? z : v;
                this.minY = x < y ? x : y;
                this.maxX = z > A ? z : A;
                this.maxY = x > B ? x : B
            };
            a.prototype.addVertices = function(a, d, h, m) {
                var f = a.worldTransform;
                a = f.a;
                for (var n = f.b, b = f.c, e = f.d, l = f.tx, f = f.ty, k = this.minX, v = this.minY, y = this.maxX, A = this.maxY; h < m; h += 2) var B = d[h],
                    z = d[h + 1],
                    x = a * B + b * z + l,
                    B = e * z + n * B + f,
                    k = x < k ? x :
                    k,
                    v = B < v ? B : v,
                    y = x > y ? x : y,
                    A = B > A ? B : A;
                this.minX = k;
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
        45: [function(b, e, k) {
            function a() {
                f.call(this);
                this.children = []
            }
            var l = b("../utils"),
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
                l.removeItems(this.children, h, 1);
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
                    l.removeItems(this.children, a, 1);
                    this.onChildrenChange(a);
                    d.emit("removed", this)
                }
                return d
            };
            a.prototype.removeChildAt = function(a) {
                var d = this.getChildAt(a);
                return d.parent = null, l.removeItems(this.children, a, 1), this.onChildrenChange(a), d.emit("removed", this), d
            };
            a.prototype.removeChildren = function(a, h) {
                var d, f;
                d = a || 0;
                f = "number" == typeof h ? h : this.children.length;
                var n = f - d;
                if (0 < n && n <= f) {
                    d = this.children.splice(d, n);
                    for (f = 0; f < d.length; ++f) d[f].parent = null;
                    this.onChildrenChange(a);
                    for (f =
                        0; f < d.length; ++f) d[f].emit("removed", this);
                    return d
                }
                if (0 === n && 0 === this.children.length) return [];
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
            };
            a.prototype.updateTransform = function() {
                if (this._boundsID++, this.visible) {
                    this.transform.updateTransform(this.parent.transform);
                    this.worldAlpha = this.alpha * this.parent.worldAlpha;
                    for (var a = 0, h = this.children.length; a < h; ++a) this.children[a].updateTransform()
                }
            };
            a.prototype.containerUpdateTransform = a.prototype.updateTransform;
            a.prototype.calculateBounds = function() {
                if (this._bounds.clear(), this.visible) {
                    this._calculateBounds();
                    for (var a = 0; a < this.children.length; a++) {
                        var h = this.children[a];
                        h.calculateBounds();
                        this._bounds.addBounds(h._bounds)
                    }
                    this._boundsID = this._lastBoundsID
                }
            };
            a.prototype._calculateBounds = function() {};
            a.prototype.renderWebGL = function(a) {
                if (this.visible && !(0 >= this.worldAlpha) && this.renderable)
                    if (this._mask || this._filters) this.renderAdvancedWebGL(a);
                    else {
                        this._renderWebGL(a);
                        for (var d = 0, f = this.children.length; d <
                            f; ++d) this.children[d].renderWebGL(a)
                    }
            };
            a.prototype.renderAdvancedWebGL = function(a) {
                a.currentRenderer.flush();
                var d, f, b = this._filters,
                    n = this._mask;
                if (b) {
                    this._enabledFilters || (this._enabledFilters = []);
                    for (d = this._enabledFilters.length = 0; d < b.length; d++) b[d].enabled && this._enabledFilters.push(b[d]);
                    this._enabledFilters.length && a.filterManager.pushFilter(this, this._enabledFilters)
                }
                n && a.maskManager.pushMask(this, this._mask);
                a.currentRenderer.start();
                this._renderWebGL(a);
                d = 0;
                for (f = this.children.length; d <
                    f; d++) this.children[d].renderWebGL(a);
                a.currentRenderer.flush();
                n && a.maskManager.popMask(this, this._mask);
                b && this._enabledFilters && this._enabledFilters.length && a.filterManager.popFilter();
                a.currentRenderer.start()
            };
            a.prototype._renderWebGL = function(a) {};
            a.prototype._renderCanvas = function(a) {};
            a.prototype.renderCanvas = function(a) {
                if (this.visible && !(0 >= this.alpha) && this.renderable) {
                    this._mask && a.maskManager.pushMask(this._mask);
                    this._renderCanvas(a);
                    for (var d = 0, f = this.children.length; d < f; ++d) this.children[d].renderCanvas(a);
                    this._mask && a.maskManager.popMask(a)
                }
            };
            a.prototype.destroy = function(a) {
                f.prototype.destroy.call(this);
                var d = "boolean" == typeof a ? a : a && a.children,
                    m = this.children;
                if (this.children = null, d)
                    for (d = m.length - 1; 0 <= d; d--) {
                        var b = m[d];
                        b.parent = null;
                        b.destroy(a)
                    }
            }
        }, {
            "../utils": 116,
            "./DisplayObject": 46
        }],
        46: [function(b, e, k) {
            function a() {
                l.call(this);
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
            var l = b("eventemitter3"),
                f = b("../const"),
                d = b("./TransformStatic"),
                h = b("./Transform"),
                m = b("./Bounds"),
                q = b("../math"),
                n = new a;
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            Object.defineProperties(a.prototype, {
                x: {
                    get: function() {
                        return this.position.x
                    },
                    set: function(a) {
                        this.transform.position.x = a
                    }
                },
                y: {
                    get: function() {
                        return this.position.y
                    },
                    set: function(a) {
                        this.transform.position.y = a
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
                    set: function(a) {
                        this.transform.position.copy(a)
                    }
                },
                scale: {
                    get: function() {
                        return this.transform.scale
                    },
                    set: function(a) {
                        this.transform.scale.copy(a)
                    }
                },
                pivot: {
                    get: function() {
                        return this.transform.pivot
                    },
                    set: function(a) {
                        this.transform.pivot.copy(a)
                    }
                },
                skew: {
                    get: function() {
                        return this.transform.skew
                    },
                    set: function(a) {
                        this.transform.skew.copy(a)
                    }
                },
                rotation: {
                    get: function() {
                        return this.transform.rotation
                    },
                    set: function(a) {
                        this.transform.rotation = a
                    }
                },
                worldVisible: {
                    get: function() {
                        var a = this;
                        do {
                            if (!a.visible) return !1;
                            a = a.parent
                        } while (a);
                        return !0
                    }
                },
                mask: {
                    get: function() {
                        return this._mask
                    },
                    set: function(a) {
                        this._mask && (this._mask.renderable = !0);
                        (this._mask = a) && (this._mask.renderable = !1)
                    }
                },
                filters: {
                    get: function() {
                        return this._filters && this._filters.slice()
                    },
                    set: function(a) {
                        this._filters = a && a.slice()
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
            a.prototype.getBounds = function(a, d) {
                return a || (this.parent ? (this._recursivePostUpdateTransform(),
                    this.updateTransform()) : (this.parent = n, this.parent.transform._worldID++, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), d || (this._boundsRect || (this._boundsRect = new q.Rectangle), d = this._boundsRect), this._bounds.getRectangle(d)
            };
            a.prototype.getLocalBounds = function(a) {
                var d = this.transform,
                    h = this.parent;
                this.parent = null;
                this.transform = n.transform;
                a || (this._localBoundsRect || (this._localBoundsRect = new q.Rectangle), a = this._localBoundsRect);
                a = this.getBounds(!1,
                    a);
                return this.parent = h, this.transform = d, a
            };
            a.prototype.toGlobal = function(a, d, h) {
                return h || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = n, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(a, d)
            };
            a.prototype.toLocal = function(a, d, h, f) {
                return d && (a = d.toGlobal(a, h, f)), f || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = n, this.displayObjectUpdateTransform(), this.parent =
                    null)), this.worldTransform.applyInverse(a, h)
            };
            a.prototype.renderWebGL = function(a) {};
            a.prototype.renderCanvas = function(a) {};
            a.prototype.setParent = function(a) {
                if (!a || !a.addChild) throw Error("setParent: Argument must be a Container");
                return a.addChild(this), a
            };
            a.prototype.setTransform = function(a, d, h, f, m, b, n, q, e) {
                return this.position.x = a || 0, this.position.y = d || 0, this.scale.x = h ? h : 1, this.scale.y = f ? f : 1, this.rotation = m || 0, this.skew.x = b || 0, this.skew.y = n || 0, this.pivot.x = q || 0, this.pivot.y = e || 0, this
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
        47: [function(b, e, k) {
                function a() {
                    f.call(this);
                    this.position = new l.Point(0, 0);
                    this.scale = new l.Point(1, 1);
                    this.skew = new l.ObservablePoint(this.updateSkew, this, 0, 0);
                    this.pivot = new l.Point(0,
                        0);
                    this._rotation = 0;
                    this._sr = Math.sin(0);
                    this._cr = Math.cos(0);
                    this._cy = Math.cos(0);
                    this._sy = Math.sin(0);
                    this._nsx = Math.sin(0);
                    this._cx = Math.cos(0)
                }
                var l = b("../math"),
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
                    var a, h, f, b, n = this.localTransform;
                    a = this._cr *
                        this.scale.x;
                    h = this._sr * this.scale.x;
                    f = -this._sr * this.scale.y;
                    b = this._cr * this.scale.y;
                    n.a = this._cy * a + this._sy * f;
                    n.b = this._cy * h + this._sy * b;
                    n.c = this._nsx * a + this._cx * f;
                    n.d = this._nsx * h + this._cx * b
                };
                a.prototype.updateTransform = function(a) {
                    var d, f, b, n = a.worldTransform,
                        e = this.worldTransform,
                        l = this.localTransform;
                    a = this._cr * this.scale.x;
                    d = this._sr * this.scale.x;
                    f = -this._sr * this.scale.y;
                    b = this._cr * this.scale.y;
                    l.a = this._cy * a + this._sy * f;
                    l.b = this._cy * d + this._sy * b;
                    l.c = this._nsx * a + this._cx * f;
                    l.d = this._nsx * d + this._cx *
                        b;
                    l.tx = this.position.x - (this.pivot.x * l.a + this.pivot.y * l.c);
                    l.ty = this.position.y - (this.pivot.x * l.b + this.pivot.y * l.d);
                    e.a = l.a * n.a + l.b * n.c;
                    e.b = l.a * n.b + l.b * n.d;
                    e.c = l.c * n.a + l.d * n.c;
                    e.d = l.c * n.b + l.d * n.d;
                    e.tx = l.tx * n.a + l.ty * n.c + n.tx;
                    e.ty = l.tx * n.b + l.ty * n.d + n.ty;
                    this._worldID++
                };
                a.prototype.setFromMatrix = function(a) {
                    a.decompose(this)
                };
                Object.defineProperties(a.prototype, {
                    rotation: {
                        get: function() {
                            return this._rotation
                        },
                        set: function(a) {
                            this._rotation = a;
                            this._sr = Math.sin(a);
                            this._cr = Math.cos(a)
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
        48: [function(b, e, k) {
            function a() {
                this.worldTransform = new l.Matrix;
                this.localTransform = new l.Matrix;
                this._worldID = 0
            }
            var l = b("../math");
            a.prototype.constructor = a;
            a.prototype.updateLocalTransform = function() {};
            a.prototype.updateTransform = function(a) {
                a = a.worldTransform;
                var d = this.worldTransform,
                    h = this.localTransform;
                d.a = h.a * a.a + h.b * a.c;
                d.b = h.a * a.b + h.b * a.d;
                d.c = h.c * a.a + h.d * a.c;
                d.d = h.c * a.b + h.d * a.d;
                d.tx = h.tx * a.a + h.ty * a.c + a.tx;
                d.ty = h.tx * a.b + h.ty * a.d + a.ty;
                this._worldID++
            };
            a.prototype.updateWorldTransform = a.prototype.updateTransform;
            a.IDENTITY = new a;
            e.exports = a
        }, {
            "../math": 67
        }],
        49: [function(b, e, k) {
            function a() {
                f.call(this);
                this.position = new l.ObservablePoint(this.onChange, this, 0, 0);
                this.scale = new l.ObservablePoint(this.onChange, this, 1, 1);
                this.pivot = new l.ObservablePoint(this.onChange, this, 0, 0);
                this.skew = new l.ObservablePoint(this.updateSkew, this, 0, 0);
                this._rotation = 0;
                this._sr = Math.sin(0);
                this._cr = Math.cos(0);
                this._cy = Math.cos(0);
                this._sy = Math.sin(0);
                this._nsx = Math.sin(0);
                this._cx = Math.cos(0);
                this._currentLocalID = this._localID = 0
            }
            var l = b("../math"),
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
                var a = this.localTransform;
                if (this._localID !== this._currentLocalID) {
                    var h,
                        f, b, n;
                    h = this._cr * this.scale._x;
                    f = this._sr * this.scale._x;
                    b = -this._sr * this.scale._y;
                    n = this._cr * this.scale._y;
                    a.a = this._cy * h + this._sy * b;
                    a.b = this._cy * f + this._sy * n;
                    a.c = this._nsx * h + this._cx * b;
                    a.d = this._nsx * f + this._cx * n;
                    a.tx = this.position._x - (this.pivot._x * a.a + this.pivot._y * a.c);
                    a.ty = this.position._y - (this.pivot._x * a.b + this.pivot._y * a.d);
                    this._currentLocalID = this._localID;
                    this._parentID = -1
                }
            };
            a.prototype.updateTransform = function(a) {
                var d = a.worldTransform,
                    f = this.worldTransform,
                    b = this.localTransform;
                if (this._localID !==
                    this._currentLocalID) {
                    var n, e, l, k;
                    n = this._cr * this.scale._x;
                    e = this._sr * this.scale._x;
                    l = -this._sr * this.scale._y;
                    k = this._cr * this.scale._y;
                    b.a = this._cy * n + this._sy * l;
                    b.b = this._cy * e + this._sy * k;
                    b.c = this._nsx * n + this._cx * l;
                    b.d = this._nsx * e + this._cx * k;
                    b.tx = this.position._x - (this.pivot._x * b.a + this.pivot._y * b.c);
                    b.ty = this.position._y - (this.pivot._x * b.b + this.pivot._y * b.d);
                    this._currentLocalID = this._localID;
                    this._parentID = -1
                }
                this._parentID !== a._worldID && (f.a = b.a * d.a + b.b * d.c, f.b = b.a * d.b + b.b * d.d, f.c = b.c * d.a + b.d * d.c,
                    f.d = b.c * d.b + b.d * d.d, f.tx = b.tx * d.a + b.ty * d.c + d.tx, f.ty = b.tx * d.b + b.ty * d.d + d.ty, this._parentID = a._worldID, this._worldID++)
            };
            a.prototype.setFromMatrix = function(a) {
                a.decompose(this);
                this._localID++
            };
            Object.defineProperties(a.prototype, {
                rotation: {
                    get: function() {
                        return this._rotation
                    },
                    set: function(a) {
                        this._rotation = a;
                        this._sr = Math.sin(a);
                        this._cr = Math.cos(a);
                        this._localID++
                    }
                }
            });
            e.exports = a
        }, {
            "../math": 67,
            "./TransformBase": 48
        }],
        50: [function(b, e, k) {
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
                this._localBounds = new u;
                this.dirty = 0;
                this.fastRectDirty = -1;
                this.clearDirty = 0;
                this.boundsDirty = -1;
                this.cachedSpriteDirty = !1;
                this._spriteRect = null;
                this._fastRect = !1
            }
            var l, f = b("../display/Container"),
                d = b("../textures/RenderTexture"),
                h = b("../textures/Texture"),
                m = b("./GraphicsData"),
                q = b("../sprites/Sprite"),
                n = b("../math"),
                r =
                b("../const"),
                t = b("../utils"),
                u = b("../display/Bounds"),
                w = b("./utils/bezierCurveTo"),
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
                for (var h = 0; h < this.graphicsData.length; ++h) d.graphicsData.push(this.graphicsData[h].clone());
                return d.currentPath = d.graphicsData[d.graphicsData.length - 1], d.updateLocalBounds(), d
            };
            a.prototype.lineStyle = function(a, d, h) {
                if (this.lineWidth = a || 0, this.lineColor = d || 0, this.lineAlpha = void 0 === h ? 1 : h, this.currentPath) this.currentPath.shape.points.length ? (a = new n.Polygon(this.currentPath.shape.points.slice(-2)),
                    a.closed = !1, this.drawShape(a)) : (this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha);
                return this
            };
            a.prototype.moveTo = function(a, d) {
                var h = new n.Polygon([a, d]);
                return h.closed = !1, this.drawShape(h), this
            };
            a.prototype.lineTo = function(a, d) {
                return this.currentPath.shape.points.push(a, d), this.dirty++, this
            };
            a.prototype.quadraticCurveTo = function(a, d, h, f) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var m, b, n = this.currentPath.shape.points;
                0 === n.length && this.moveTo(0, 0);
                for (var e = n[n.length - 2], q = n[n.length - 1], l, r = 1; 20 >= r; ++r) l = r / 20, m = e + (a - e) * l, b = q + (d - q) * l, n.push(m + (a + (h - a) * l - m) * l, b + (d + (f - d) * l - b) * l);
                return this.dirty++, this
            };
            a.prototype.bezierCurveTo = function(a, d, h, f, m, b) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var n = this.currentPath.shape.points,
                    e = n[n.length - 2],
                    q = n[n.length - 1];
                return n.length -= 2,
                    w(e, q, a, d, h, f, m, b, n), this.dirty++, this
            };
            a.prototype.arcTo = function(a, d, h, f, m) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(a, d) : this.moveTo(a, d);
                var b = this.currentPath.shape.points,
                    n = b[b.length - 1] - d,
                    e = b[b.length - 2] - a;
                f -= d;
                h -= a;
                var q = Math.abs(n * h - e * f);
                if (1E-8 > q || 0 === m) b[b.length - 2] === a && b[b.length - 1] === d || b.push(a, d);
                else {
                    var l = n * n + e * e,
                        r = f * f + h * h,
                        t = n * f + e * h,
                        b = m * Math.sqrt(l) / q,
                        q = m * Math.sqrt(r) / q,
                        l = b * t / l,
                        r = q * t / r,
                        t = b * h + q * e,
                        k = b * f + q * n;
                    this.arc(t + a, k + d, m, Math.atan2(n *
                        (q + l) - k, e * (q + l) - t), Math.atan2(f * (b + r) - k, h * (b + r) - t), e * f > h * n)
                }
                return this.dirty++, this
            };
            a.prototype.arc = function(a, d, h, f, m, b) {
                if (b = b || !1, f === m) return this;
                !b && m <= f ? m += 2 * Math.PI : b && f <= m && (f += 2 * Math.PI);
                b = b ? -1 * (f - m) : m - f;
                var n = 40 * Math.ceil(Math.abs(b) / (2 * Math.PI));
                if (0 === b) return this;
                m = a + Math.cos(f) * h;
                var e = d + Math.sin(f) * h;
                this.currentPath ? this.currentPath.shape.points.push(m, e) : this.moveTo(m, e);
                m = this.currentPath.shape.points;
                b /= 2 * n;
                for (var e = 2 * b, q = Math.cos(b), l = Math.sin(b), n = n - 1, r = n % 1 / n, t = 0; t <= n; t++) {
                    var k =
                        b + f + e * (t + r * t),
                        u = Math.cos(k),
                        k = -Math.sin(k);
                    m.push((q * u + l * k) * h + a, (q * -k + l * u) * h + d)
                }
                return this.dirty++, this
            };
            a.prototype.beginFill = function(a, d) {
                return this.filling = !0, this.fillColor = a || 0, this.fillAlpha = void 0 === d ? 1 : d, this.currentPath && 2 >= this.currentPath.shape.points.length && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
            };
            a.prototype.endFill = function() {
                return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
            };
            a.prototype.drawRect =
                function(a, d, h, f) {
                    return this.drawShape(new n.Rectangle(a, d, h, f)), this
                };
            a.prototype.drawRoundedRect = function(a, d, h, f, m) {
                return this.drawShape(new n.RoundedRectangle(a, d, h, f, m)), this
            };
            a.prototype.drawCircle = function(a, d, h) {
                return this.drawShape(new n.Circle(a, d, h)), this
            };
            a.prototype.drawEllipse = function(a, d, h, f) {
                return this.drawShape(new n.Ellipse(a, d, h, f)), this
            };
            a.prototype.drawPolygon = function(a) {
                var d = a,
                    h = !0;
                if (d instanceof n.Polygon && (h = d.closed, d = d.points), !Array.isArray(d))
                    for (var d = Array(arguments.length),
                            f = 0; f < d.length; ++f) d[f] = arguments[f];
                d = new n.Polygon(d);
                return d.closed = h, this.drawShape(d), this
            };
            a.prototype.clear = function() {
                return this.lineWidth = 0, this.filling = !1, this.dirty++, this.clearDirty++, this.graphicsData = [], this
            };
            a.prototype.isFastRect = function() {
                return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === r.SHAPES.RECT && !this.graphicsData[0].lineWidth
            };
            a.prototype._renderWebGL = function(a) {
                this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect());
                this._fastRect ? this._renderSpriteRect(a) : (a.setObjectRenderer(a.plugins.graphics), a.plugins.graphics.render(this))
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
            a.prototype._renderCanvas = function(a) {
                !0 !== this.isMask && a.plugins.graphics.render(this)
            };
            a.prototype._calculateBounds = function() {
                if (this.renderable) {
                    this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.dirty++, this.cachedSpriteDirty = !0);
                    var a = this._localBounds;
                    this._bounds.addFrame(this.transform, a.minX, a.minY, a.maxX, a.maxY)
                }
            };
            a.prototype.containsPoint = function(a) {
                this.worldTransform.applyInverse(a, A);
                a = this.graphicsData;
                for (var d = 0; d < a.length; d++) {
                    var h = a[d];
                    if (h.fill && h.shape && h.shape.contains(A.x, A.y)) return !0
                }
                return !1
            };
            a.prototype.updateLocalBounds = function() {
                var a = 1 / 0,
                    d = -(1 / 0),
                    h = 1 / 0,
                    f = -(1 / 0);
                if (this.graphicsData.length)
                    for (var m, b, n, e, q, l = 0; l < this.graphicsData.length; l++)
                        if (n = this.graphicsData[l], b = n.type, q = n.lineWidth, m = n.shape, b === r.SHAPES.RECT || b === r.SHAPES.RREC) b = m.x - q / 2, n = m.y - q / 2, e = m.width + q, q = m.height + q, a = b < a ? b : a, d = b + e > d ? b + e : d, h = n < h ? n : h, f = n + q > f ? n + q : f;
                        else if (b === r.SHAPES.CIRC) b = m.x, n = m.y, e = m.radius + q / 2, q = m.radius + q / 2, a = b - e < a ? b - e : a, d = b + e > d ? b +
                    e : d, h = n - q < h ? n - q : h, f = n + q > f ? n + q : f;
                else if (b === r.SHAPES.ELIP) b = m.x, n = m.y, e = m.width + q / 2, q = m.height + q / 2, a = b - e < a ? b - e : a, d = b + e > d ? b + e : d, h = n - q < h ? n - q : h, f = n + q > f ? n + q : f;
                else
                    for (m = m.points, e = 0; e < m.length; e += 2) b = m[e], n = m[e + 1], a = b - q < a ? b - q : a, d = b + q > d ? b + q : d, h = n - q < h ? n - q : h, f = n + q > f ? n + q : f;
                else f = h = d = a = 0;
                l = this.boundsPadding;
                this._localBounds.minX = a - l;
                this._localBounds.maxX = d + 2 * l;
                this._localBounds.minY = h - l;
                this._localBounds.maxY = f + 2 * l
            };
            a.prototype.drawShape = function(a) {
                this.currentPath && 2 >= this.currentPath.shape.points.length &&
                    this.graphicsData.pop();
                this.currentPath = null;
                a = new m(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, a);
                return this.graphicsData.push(a), a.type === r.SHAPES.POLY && (a.shape.closed = a.shape.closed || this.filling, this.currentPath = a), this.dirty++, a
            };
            a.prototype.generateCanvasTexture = function(a, f) {
                f = f || 1;
                var m = this.getLocalBounds(),
                    b = new d.create(m.width * f, m.height * f);
                l || (l = new v);
                y.tx = -m.x;
                y.ty = -m.y;
                l.render(this, b, !1, y);
                m = h.fromCanvas(b.baseTexture._canvasRenderTarget.canvas,
                    a);
                return m.baseTexture.resolution = f, m
            };
            a.prototype.closePath = function() {
                var a = this.currentPath;
                return a && a.shape && a.shape.close(), this
            };
            a.prototype.addHole = function() {
                var a = this.graphicsData.pop();
                return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(a.shape), this.currentPath = null, this
            };
            a.prototype.destroy = function() {
                f.prototype.destroy.apply(this, arguments);
                for (var a = 0; a < this.graphicsData.length; ++a) this.graphicsData[a].destroy();
                for (var d in this._webgl)
                    for (a =
                        0; a < this._webgl[d].data.length; ++a) this._webgl[d].data[a].destroy();
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
        51: [function(b, e, k) {
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
        52: [function(b, e, k) {
            function a(a) {
                this.renderer =
                    a
            }
            k = b("../../renderers/canvas/CanvasRenderer");
            var l = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            k.registerPlugin("graphics", a);
            a.prototype.render = function(a) {
                var d = this.renderer,
                    h = d.context,
                    f = a.worldAlpha,
                    b = a.transform.worldTransform,
                    n = d.resolution;
                this._prevTint !== this.tint && (this.dirty = !0);
                h.setTransform(b.a * n, b.b * n, b.c * n, b.d * n, b.tx * n, b.ty * n);
                a.dirty && (this.updateGraphicsTint(a), a.dirty = !1);
                d.setBlendMode(a.blendMode);
                for (d = 0; d < a.graphicsData.length; d++) {
                    var b = a.graphicsData[d],
                        e = b.shape,
                        n = b._fillTint,
                        t = b._lineTint;
                    if (h.lineWidth = b.lineWidth, b.type === l.SHAPES.POLY) {
                        h.beginPath();
                        this.renderPolygon(e.points, e.closed, h);
                        for (var k = 0; k < b.holes.length; k++) this.renderPolygon(b.holes[k].points, !0, h);
                        b.fill && (h.globalAlpha = b.fillAlpha * f, h.fillStyle = "#" + ("00000" + (0 | n).toString(16)).substr(-6), h.fill());
                        b.lineWidth && (h.globalAlpha = b.lineAlpha * f, h.strokeStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6), h.stroke())
                    } else if (b.type === l.SHAPES.RECT)(b.fillColor || 0 === b.fillColor) && (h.globalAlpha =
                        b.fillAlpha * f, h.fillStyle = "#" + ("00000" + (0 | n).toString(16)).substr(-6), h.fillRect(e.x, e.y, e.width, e.height)), b.lineWidth && (h.globalAlpha = b.lineAlpha * f, h.strokeStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6), h.strokeRect(e.x, e.y, e.width, e.height));
                    else if (b.type === l.SHAPES.CIRC) h.beginPath(), h.arc(e.x, e.y, e.radius, 0, 2 * Math.PI), h.closePath(), b.fill && (h.globalAlpha = b.fillAlpha * f, h.fillStyle = "#" + ("00000" + (0 | n).toString(16)).substr(-6), h.fill()), b.lineWidth && (h.globalAlpha = b.lineAlpha * f, h.strokeStyle =
                        "#" + ("00000" + (0 | t).toString(16)).substr(-6), h.stroke());
                    else if (b.type === l.SHAPES.ELIP) {
                        var w = 2 * e.width,
                            v = 2 * e.height,
                            k = e.x - w / 2,
                            e = e.y - v / 2;
                        h.beginPath();
                        var y = w / 2 * .5522848,
                            A = v / 2 * .5522848,
                            B = k + w,
                            z = e + v,
                            w = k + w / 2,
                            v = e + v / 2;
                        h.moveTo(k, v);
                        h.bezierCurveTo(k, v - A, w - y, e, w, e);
                        h.bezierCurveTo(w + y, e, B, v - A, B, v);
                        h.bezierCurveTo(B, v + A, w + y, z, w, z);
                        h.bezierCurveTo(w - y, z, k, v + A, k, v);
                        h.closePath();
                        b.fill && (h.globalAlpha = b.fillAlpha * f, h.fillStyle = "#" + ("00000" + (0 | n).toString(16)).substr(-6), h.fill());
                        b.lineWidth && (h.globalAlpha =
                            b.lineAlpha * f, h.strokeStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6), h.stroke())
                    } else b.type === l.SHAPES.RREC && (k = e.x, v = e.y, y = e.width, A = e.height, e = e.radius, B = Math.min(y, A) / 2 | 0, e = e > B ? B : e, h.beginPath(), h.moveTo(k, v + e), h.lineTo(k, v + A - e), h.quadraticCurveTo(k, v + A, k + e, v + A), h.lineTo(k + y - e, v + A), h.quadraticCurveTo(k + y, v + A, k + y, v + A - e), h.lineTo(k + y, v + e), h.quadraticCurveTo(k + y, v, k + y - e, v), h.lineTo(k + e, v), h.quadraticCurveTo(k, v, k, v + e), h.closePath(), (b.fillColor || 0 === b.fillColor) && (h.globalAlpha = b.fillAlpha * f,
                        h.fillStyle = "#" + ("00000" + (0 | n).toString(16)).substr(-6), h.fill()), b.lineWidth && (h.globalAlpha = b.lineAlpha * f, h.strokeStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6), h.stroke()))
                }
            };
            a.prototype.updateGraphicsTint = function(a) {
                a._prevTint = a.tint;
                for (var d = (a.tint >> 16 & 255) / 255, h = (a.tint >> 8 & 255) / 255, f = (255 & a.tint) / 255, b = 0; b < a.graphicsData.length; b++) {
                    var n = a.graphicsData[b],
                        e = 0 | n.fillColor,
                        l = 0 | n.lineColor;
                    n._fillTint = ((e >> 16 & 255) / 255 * d * 255 << 16) + ((e >> 8 & 255) / 255 * h * 255 << 8) + (255 & e) / 255 * f * 255;
                    n._lineTint = ((l >>
                        16 & 255) / 255 * d * 255 << 16) + ((l >> 8 & 255) / 255 * h * 255 << 8) + (255 & l) / 255 * f * 255
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
        53: [function(b, e, k) {
            e.exports = function(a, b, f, d, h, m, e, n, r) {
                r = r || [];
                var q, l, k, v, y;
                r.push(a, b);
                for (var A, B = 1; 20 >= B; ++B) A = B / 20, q = 1 - A, l = q * q, k = l * q, v = A * A, y = v * A, r.push(k * a + 3 * l * A * f + 3 * q * v * h + y *
                    e, k * b + 3 * l * A * d + 3 * q * v * m + y * n);
                return r
            }
        }, {}],
        54: [function(b, e, k) {
            function a(a) {
                d.call(this, a);
                this.graphicsDataPool = [];
                this.primitiveShader = null;
                this.gl = a.gl;
                this.CONTEXT_UID = 0
            }
            var l = b("../../utils"),
                f = b("../../const"),
                d = b("../../renderers/webgl/utils/ObjectRenderer");
            k = b("../../renderers/webgl/WebGLRenderer");
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
            k.registerPlugin("graphics", a);
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
            a.prototype.render = function(a) {
                var d, h = this.renderer,
                    f = h.gl,
                    b = a._webGL[this.CONTEXT_UID];
                b && a.dirty === b.dirty || (this.updateGraphics(a), b = a._webGL[this.CONTEXT_UID]);
                h.bindShader(this.primitiveShader);
                h.state.setBlendMode(a.blendMode);
                for (var m = 0, n = b.data.length; m < n; m++) {
                    d = b.data[m];
                    var e = d.shader;
                    h.bindShader(e);
                    e.uniforms.translationMatrix = a.transform.worldTransform.toArray(!0);
                    e.uniforms.tint = l.hex2rgb(a.tint);
                    e.uniforms.alpha = a.worldAlpha;
                    d.vao.bind().draw(f.TRIANGLE_STRIP, d.indices.length).unbind()
                }
            };
            a.prototype.updateGraphics = function(a) {
                var d = this.renderer.gl,
                    h = a._webGL[this.CONTEXT_UID];
                h || (h = a._webGL[this.CONTEXT_UID] = {
                    lastIndex: 0,
                    data: [],
                    gl: d,
                    clearDirty: -1,
                    dirty: -1
                });
                h.dirty = a.dirty;
                if (a.clearDirty !== h.clearDirty) {
                    h.clearDirty = a.clearDirty;
                    for (d = 0; d < h.data.length; d++) this.graphicsDataPool.push(h.data[d]);
                    h.data = [];
                    h.lastIndex = 0
                }
                for (var b, d = h.lastIndex; d < a.graphicsData.length; d++) {
                    var m = a.graphicsData[d];
                    b = this.getWebGLData(h, 0);
                    m.type === f.SHAPES.POLY && q(m, b);
                    m.type === f.SHAPES.RECT ? n(m, b) : m.type === f.SHAPES.CIRC || m.type === f.SHAPES.ELIP ? t(m, b) : m.type === f.SHAPES.RREC && r(m, b);
                    h.lastIndex++
                }
                for (d =
                    0; d < h.data.length; d++) b = h.data[d], b.dirty && b.upload()
            };
            a.prototype.getWebGLData = function(a, d) {
                var f = a.data[a.data.length - 1];
                return (!f || 32E4 < f.points.length) && (f = this.graphicsDataPool.pop() || new h(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState), f.reset(d), a.data.push(f)), f.dirty = !0, f
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
        55: [function(b, e, k) {
            function a(a, d, h) {
                this.gl = a;
                this.color = [0, 0, 0];
                this.points = [];
                this.indices = [];
                this.buffer = l.GLBuffer.createVertexBuffer(a);
                this.indexBuffer = l.GLBuffer.createIndexBuffer(a);
                this.dirty = !0;
                this.glIndices = this.glPoints = null;
                this.shader = d;
                this.vao = (new l.VertexArrayObject(a, h)).addIndex(this.indexBuffer).addAttribute(this.buffer, d.attributes.aVertexPosition, a.FLOAT, !1, 24, 0).addAttribute(this.buffer,
                    d.attributes.aColor, a.FLOAT, !1, 24, 8)
            }
            var l = b("pixi-gl-core");
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
        56: [function(b, e, k) {
            function a(a) {
                l.call(this, a, "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}",
                    "varying vec4 vColor;\nvoid main(void){\n   gl_FragColor = vColor;\n}")
            }
            var l = b("../../../Shader");
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../../Shader": 42
        }],
        57: [function(b, e, k) {
            var a = b("./buildLine"),
                l = b("../../../const"),
                f = b("../../../utils");
            e.exports = function(d, h) {
                var b, e, n = d.shape,
                    r = n.x,
                    k = n.y;
                d.type === l.SHAPES.CIRC ? (b = n.radius, e = n.radius) : (b = n.width, e = n.height);
                var n = Math.floor(30 * Math.sqrt(n.radius)) || Math.floor(15 * Math.sqrt(n.width + n.height)),
                    u = 2 *
                    Math.PI / n,
                    w;
                if (d.fill) {
                    w = f.hex2rgb(d.fillColor);
                    var v = d.fillAlpha,
                        y = w[0] * v,
                        A = w[1] * v,
                        B = w[2] * v,
                        z = h.points,
                        x = h.indices,
                        F = z.length / 6;
                    x.push(F);
                    for (w = 0; w < n + 1; w++) z.push(r, k, y, A, B, v), z.push(r + Math.sin(u * w) * b, k + Math.cos(u * w) * e, y, A, B, v), x.push(F++, F++);
                    x.push(F - 1)
                }
                if (d.lineWidth) {
                    v = d.points;
                    d.points = [];
                    for (w = 0; w < n + 1; w++) d.points.push(r + Math.sin(u * w) * b, k + Math.cos(u * w) * e);
                    a(d, h);
                    d.points = v
                }
            }
        }, {
            "../../../const": 43,
            "../../../utils": 116,
            "./buildLine": 58
        }],
        58: [function(b, e, k) {
            var a = b("../../../math"),
                l = b("../../../utils");
            e.exports = function(f, d) {
                var h, b = f.points;
                if (0 !== b.length) {
                    var e = new a.Point(b[0], b[1]),
                        n = new a.Point(b[b.length - 2], b[b.length - 1]);
                    if (e.x === n.x && e.y === n.y) {
                        b = b.slice();
                        b.pop();
                        b.pop();
                        var n = new a.Point(b[b.length - 2], b[b.length - 1]),
                            r = n.x + .5 * (e.x - n.x),
                            e = n.y + .5 * (e.y - n.y);
                        b.unshift(r, e);
                        b.push(r, e)
                    }
                    var k, u, w, v, y, A, B, z, x, F, G, E, C, H, D, J, I, L, M, r = d.points,
                        e = d.indices,
                        n = b.length / 2,
                        N = b.length,
                        O = r.length / 6,
                        Q = f.lineWidth / 2;
                    h = l.hex2rgb(f.lineColor);
                    var K = f.lineAlpha,
                        T = h[0] * K,
                        R = h[1] * K,
                        P = h[2] * K;
                    w = b[0];
                    v = b[1];
                    y = b[2];
                    A = b[3];
                    x = -(v - A);
                    F = w - y;
                    M = Math.sqrt(x * x + F * F);
                    x = x / M * Q;
                    F = F / M * Q;
                    r.push(w - x, v - F, T, R, P, K);
                    r.push(w + x, v + F, T, R, P, K);
                    for (h = 1; h < n - 1; h++) w = b[2 * (h - 1)], v = b[2 * (h - 1) + 1], y = b[2 * h], A = b[2 * h + 1], B = b[2 * (h + 1)], z = b[2 * (h + 1) + 1], x = -(v - A), F = w - y, M = Math.sqrt(x * x + F * F), x /= M, F /= M, x *= Q, F *= Q, G = -(A - z), E = y - B, M = Math.sqrt(G * G + E * E), G /= M, E /= M, G *= Q, E *= Q, D = -F + v - (-F + A), J = -x + y - (-x + w), w = (-x + w) * (-F + A) - (-x + y) * (-F + v), v = -E + z - (-E + A), I = -G + y - (-G + B), B = (-G + B) * (-E + A) - (-G + y) * (-E + z), z = D * I - v * J, .1 > Math.abs(z) ? (r.push(y - x, A - F, T, R, P, K), r.push(y + x, A + F, T, R, P, K)) :
                        (k = (J * B - I * w) / z, u = (v * w - D * B) / z, L = (k - y) * (k - y) + (u - A) * (u - A), 19600 < L ? (C = x - G, H = F - E, M = Math.sqrt(C * C + H * H), C /= M, H /= M, C *= Q, H *= Q, r.push(y - C, A - H), r.push(T, R, P, K), r.push(y + C, A + H), r.push(T, R, P, K), r.push(y - C, A - H), r.push(T, R, P, K), N++) : (r.push(k, u), r.push(T, R, P, K), r.push(y - (k - y), A - (u - A)), r.push(T, R, P, K)));
                    w = b[2 * (n - 2)];
                    v = b[2 * (n - 2) + 1];
                    y = b[2 * (n - 1)];
                    A = b[2 * (n - 1) + 1];
                    x = -(v - A);
                    F = w - y;
                    M = Math.sqrt(x * x + F * F);
                    x = x / M * Q;
                    F = F / M * Q;
                    r.push(y - x, A - F);
                    r.push(T, R, P, K);
                    r.push(y + x, A + F);
                    r.push(T, R, P, K);
                    e.push(O);
                    for (h = 0; h < N; h++) e.push(O++);
                    e.push(O -
                        1)
                }
            }
        }, {
            "../../../math": 67,
            "../../../utils": 116
        }],
        59: [function(b, e, k) {
            var a = b("./buildLine"),
                l = b("../../../utils"),
                f = b("earcut");
            e.exports = function(d, h) {
                d.points = d.shape.points.slice();
                var b = d.points;
                if (d.fill && 6 <= b.length) {
                    for (var e = [], n = d.holes, r = 0; r < n.length; r++) {
                        var k = n[r];
                        e.push(b.length / 2);
                        b = b.concat(k.points)
                    }
                    var n = h.points,
                        k = h.indices,
                        u = b.length / 2,
                        r = l.hex2rgb(d.fillColor),
                        w = d.fillAlpha,
                        v = r[0] * w,
                        y = r[1] * w,
                        A = r[2] * w,
                        e = f(b, e, 2);
                    if (!e) return;
                    for (var B = n.length / 6, r = 0; r < e.length; r += 3) k.push(e[r] + B),
                        k.push(e[r] + B), k.push(e[r + 1] + B), k.push(e[r + 2] + B), k.push(e[r + 2] + B);
                    for (r = 0; r < u; r++) n.push(b[2 * r], b[2 * r + 1], v, y, A, w)
                }
                0 < d.lineWidth && a(d, h)
            }
        }, {
            "../../../utils": 116,
            "./buildLine": 58,
            earcut: 2
        }],
        60: [function(b, e, k) {
            var a = b("./buildLine"),
                l = b("../../../utils");
            e.exports = function(f, d) {
                var h = f.shape,
                    b = h.x,
                    e = h.y,
                    n = h.width,
                    h = h.height;
                if (f.fill) {
                    var r = l.hex2rgb(f.fillColor),
                        k = f.fillAlpha,
                        u = r[0] * k,
                        w = r[1] * k,
                        r = r[2] * k,
                        v = d.points,
                        y = d.indices,
                        A = v.length / 6;
                    v.push(b, e);
                    v.push(u, w, r, k);
                    v.push(b + n, e);
                    v.push(u, w, r, k);
                    v.push(b,
                        e + h);
                    v.push(u, w, r, k);
                    v.push(b + n, e + h);
                    v.push(u, w, r, k);
                    y.push(A, A, A + 1, A + 2, A + 3, A + 3)
                }
                f.lineWidth && (k = f.points, f.points = [b, e, b + n, e, b + n, e + h, b, e + h, b, e], a(f, d), f.points = k)
            }
        }, {
            "../../../utils": 116,
            "./buildLine": 58
        }],
        61: [function(b, e, k) {
            var a = b("earcut"),
                l = b("./buildLine"),
                f = b("../../../utils"),
                d = function(a, d, f, b, e, l, k) {
                    var h, m, n, q;
                    k = k || [];
                    for (var r, t = 0; 20 >= t; t++) r = t / 20, h = a + (f - a) * r, m = d + (b - d) * r, n = f + (e - f) * r, q = b + (l - b) * r, h += (n - h) * r, m += (q - m) * r, k.push(h, m);
                    return k
                };
            e.exports = function(h, b) {
                var m = h.shape,
                    n = m.x,
                    e =
                    m.y,
                    k = m.width,
                    u = m.height,
                    w = m.radius,
                    m = [];
                if (m.push(n, e + w), d(n, e + u - w, n, e + u, n + w, e + u, m), d(n + k - w, e + u, n + k, e + u, n + k, e + u - w, m), d(n + k, e + w, n + k, e, n + k - w, e, m), d(n + w, e, n, e, n, e + w + 1E-10, m), h.fill) {
                    var u = f.hex2rgb(h.fillColor),
                        n = h.fillAlpha,
                        e = u[0] * n,
                        k = u[1] * n,
                        u = u[2] * n,
                        w = b.points,
                        v = b.indices,
                        y = w.length / 6,
                        A = a(m, null, 2),
                        B;
                    for (B = 0; B < A.length; B += 3) v.push(A[B] + y), v.push(A[B] + y), v.push(A[B + 1] + y), v.push(A[B + 2] + y), v.push(A[B + 2] + y);
                    for (B = 0; B < m.length; B++) w.push(m[B], m[++B], e, k, u, n)
                }
                h.lineWidth && (n = h.points, h.points = m, l(h, b),
                    h.points = n)
            }
        }, {
            "../../../utils": 116,
            "./buildLine": 58,
            earcut: 2
        }],
        62: [function(b, e, k) {
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
        63: [function(b, e, k) {
            function a(a) {
                return 0 > a ? -1 : 0 < a ? 1 : 0
            }
            var l = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
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
                        for (var k = a(l[b] * l[r] + d[b] * f[r]), y = a(f[b] * l[r] + h[b] * f[r]), A = a(l[b] * d[r] + d[b] * h[r]), B = a(f[b] * d[r] + h[b] * h[r]), z = 0; 16 > z; z++)
                            if (l[z] === k && f[z] === y && d[z] === A && h[z] === B) {
                                e.push(z);
                                break
                            }
                }
                for (b = 0; 16 > b; b++) e = new q, e.set(l[b], f[b], d[b], h[b], 0, 0), m.push(e)
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
                uX: function(a) {
                    return l[a]
                },
                uY: function(a) {
                    return f[a]
                },
                vX: function(a) {
                    return d[a]
                },
                vY: function(a) {
                    return h[a]
                },
                inv: function(a) {
                    return 8 & a ? 15 & a : 7 & -a
                },
                add: function(a, d) {
                    return n[a][d]
                },
                sub: function(a, d) {
                    return n[a][r.inv(d)]
                },
                rotate180: function(a) {
                    return 4 ^ a
                },
                isSwapWidthHeight: function(a) {
                    return 2 === (3 & a)
                },
                byDirection: function(a, d) {
                    return 2 * Math.abs(a) <= Math.abs(d) ? 0 <= d ? r.S : r.N : 2 * Math.abs(d) <= Math.abs(a) ? 0 < a ? r.E : r.W : 0 < d ? 0 < a ? r.SE : r.SW : 0 < a ? r.NE : r.NW
                },
                matrixAppendRotationInv: function(a, d, h, f) {
                    d = m[r.inv(d)];
                    d.tx = h || 0;
                    d.ty = f || 0;
                    a.append(d)
                }
            };
            e.exports = r
        }, {
            "./Matrix": 64
        }],
        64: [function(b,
            e, k) {
            function a() {
                this.a = 1;
                this.c = this.b = 0;
                this.d = 1;
                this.ty = this.tx = 0;
                this.array = null
            }
            var l = b("./Point");
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
                var h = d || this.array;
                return a ? (h[0] = this.a, h[1] = this.b, h[2] = 0, h[3] =
                    this.c, h[4] = this.d, h[5] = 0, h[6] = this.tx, h[7] = this.ty, h[8] = 1) : (h[0] = this.a, h[1] = this.c, h[2] = this.tx, h[3] = this.b, h[4] = this.d, h[5] = this.ty, h[6] = 0, h[7] = 0, h[8] = 1), h
            };
            a.prototype.apply = function(a, d) {
                d = d || new l;
                var h = a.x,
                    f = a.y;
                return d.x = this.a * h + this.c * f + this.tx, d.y = this.b * h + this.d * f + this.ty, d
            };
            a.prototype.applyInverse = function(a, d) {
                d = d || new l;
                var h = 1 / (this.a * this.d + this.c * -this.b),
                    f = a.x,
                    b = a.y;
                return d.x = this.d * h * f + -this.c * h * b + (this.ty * this.c - this.tx * this.d) * h, d.y = this.a * h * b + -this.b * h * f + (-this.ty * this.a +
                    this.tx * this.b) * h, d
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
                var h = this.a,
                    f = this.c,
                    b = this.tx;
                return this.a = h * d - this.b * a, this.b = h * a + this.b * d, this.c = f * d - this.d * a, this.d = f * a + this.d * d, this.tx = b * d - this.ty * a, this.ty = b * a + this.ty * d, this
            };
            a.prototype.append = function(a) {
                var d = this.a,
                    h = this.b,
                    f = this.c,
                    b = this.d;
                return this.a = a.a * d + a.b * f, this.b = a.a * h + a.b * b, this.c = a.c * d + a.d * f, this.d = a.c * h + a.d * b, this.tx = a.tx * d + a.ty * f + this.tx, this.ty = a.tx * h + a.ty * b + this.ty, this
            };
            a.prototype.setTransform = function(a, d, h, b, e, n, l, k, u) {
                var f, m, q, r, t, z, x, F, G, E;
                return t = Math.sin(l), z = Math.cos(l), x = Math.cos(u), F = Math.sin(u), G = -Math.sin(k), E = Math.cos(k), f = z * e, m = t * e, q = -t * n, r = z * n, this.a = x * f + F * q, this.b = x * m + F * r, this.c = G * f + E * q, this.d = G * m + E * r, this.tx = a + (h * f + b * q), this.ty = d + (h * m + b * r), this
            };
            a.prototype.prepend = function(a) {
                var d = this.tx;
                if (1 !==
                    a.a || 0 !== a.b || 0 !== a.c || 1 !== a.d) {
                    var h = this.a,
                        f = this.c;
                    this.a = h * a.a + this.b * a.c;
                    this.b = h * a.b + this.b * a.d;
                    this.c = f * a.a + this.d * a.c;
                    this.d = f * a.b + this.d * a.d
                }
                return this.tx = d * a.a + this.ty * a.c + a.tx, this.ty = d * a.b + this.ty * a.d + a.ty, this
            };
            a.prototype.decompose = function(a) {
                var d = this.a,
                    h = this.b,
                    f = this.c,
                    b = this.d,
                    n = Math.atan2(-f, b),
                    e = Math.atan2(h, d);
                return 1E-5 > Math.abs(1 - n / e) ? (a.rotation = e, 0 > d && 0 <= b && (a.rotation += 0 >= a.rotation ? Math.PI : -Math.PI), a.skew.x = a.skew.y = 0) : (a.skew.x = n, a.skew.y = e), a.scale.x = Math.sqrt(d *
                    d + h * h), a.scale.y = Math.sqrt(f * f + b * b), a.position.x = this.tx, a.position.y = this.ty, a
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
        65: [function(b, e, k) {
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
        66: [function(b, e, k) {
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
        67: [function(b, e, k) {
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
        68: [function(b, e, k) {
            function a(a, h, b) {
                this.x = a || 0;
                this.y = h || 0;
                this.radius = b || 0;
                this.type = f.SHAPES.CIRC
            }
            var l = b("./Rectangle"),
                f = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.clone = function() {
                return new a(this.x, this.y, this.radius)
            };
            a.prototype.contains = function(a, h) {
                if (0 >= this.radius) return !1;
                var d = this.x - a,
                    f = this.y - h,
                    b = this.radius * this.radius;
                return d *= d, f *= f, d + f <= b
            };
            a.prototype.getBounds =
                function() {
                    return new l(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
                }
        }, {
            "../../const": 43,
            "./Rectangle": 71
        }],
        69: [function(b, e, k) {
            function a(a, h, b, e) {
                this.x = a || 0;
                this.y = h || 0;
                this.width = b || 0;
                this.height = e || 0;
                this.type = f.SHAPES.ELIP
            }
            var l = b("./Rectangle"),
                f = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.clone = function() {
                return new a(this.x, this.y, this.width, this.height)
            };
            a.prototype.contains = function(a, h) {
                if (0 >= this.width || 0 >= this.height) return !1;
                var d = (a - this.x) /
                    this.width,
                    f = (h - this.y) / this.height;
                return d *= d, f *= f, 1 >= d + f
            };
            a.prototype.getBounds = function() {
                return new l(this.x - this.width, this.y - this.height, this.width, this.height)
            }
        }, {
            "../../const": 43,
            "./Rectangle": 71
        }],
        70: [function(b, e, k) {
            function a(a) {
                var d = a;
                if (!Array.isArray(d))
                    for (var d = Array(arguments.length), b = 0; b < d.length; ++b) d[b] = arguments[b];
                if (d[0] instanceof l) {
                    for (var b = [], e = 0, n = d.length; e < n; e++) b.push(d[e].x, d[e].y);
                    d = b
                }
                this.closed = !0;
                this.points = d;
                this.type = f.SHAPES.POLY
            }
            var l = b("../Point"),
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
            a.prototype.contains = function(a, h) {
                for (var d = !1, f = this.points.length / 2, b = 0, e = f - 1; b < f; e = b++) {
                    var l = this.points[2 * b],
                        k = this.points[2 * b + 1],
                        w = this.points[2 * e],
                        e = this.points[2 * e + 1];
                    k > h != e > h && a < (w - l) * (h - k) / (e - k) + l && (d = !d)
                }
                return d
            }
        }, {
            "../../const": 43,
            "../Point": 66
        }],
        71: [function(b, e, k) {
            function a(a,
                d, h, b) {
                this.x = a || 0;
                this.y = d || 0;
                this.width = h || 0;
                this.height = b || 0;
                this.type = l.SHAPES.RECT
            }
            var l = b("../../const");
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
        72: [function(b, e, k) {
            function a(a, d, h, b, e) {
                this.x = a || 0;
                this.y = d || 0;
                this.width = h ||
                    0;
                this.height = b || 0;
                this.radius = e || 20;
                this.type = l.SHAPES.RREC
            }
            var l = b("../../const");
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
        73: [function(b, e, k) {
                function a(a, h, b, e) {
                    if (m.call(this), l.sayHello(a), e)
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
                var l = b("../utils");
                k = b("../math");
                var f = b("../const"),
                    d = b("../display/Container"),
                    h = b("../textures/RenderTexture"),
                    m = b("eventemitter3"),
                    q = new k.Matrix;
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
                            this._backgroundColorString = l.hex2string(a);
                            l.hex2rgb(a, this._backgroundColorRgba)
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
        74: [function(b, e, k) {
            function a(a, d, b) {
                b = b || {};
                l.call(this, "Canvas", a, d, b);
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
            var l = b("../SystemRenderer"),
                f = b("./utils/CanvasMaskManager"),
                d =
                b("./utils/CanvasRenderTarget"),
                h = b("./utils/mapCanvasBlendModesToPixi");
            k = b("../../utils");
            var m = b("../../const");
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            k.pluginTarget.mixin(a);
            a.prototype.render = function(a, h, f, b, e) {
                if (this.view) {
                    this.renderingToScreen = !h;
                    this.emit("prerender");
                    h ? (h = h.baseTexture || h, h._canvasRenderTarget || (h._canvasRenderTarget = new d(h.width, h.height, h.resolution), h.source = h._canvasRenderTarget.canvas, h.valid = !0), this.context = h._canvasRenderTarget.context,
                        this.resolution = h._canvasRenderTarget.resolution) : (this.context = this.rootContext, this.resolution = this.rootResolution);
                    var n = this.context;
                    (h || (this._lastObjectRendered = a), e) || (h = a.parent, e = this._tempDisplayObjectParent.transform.worldTransform, b ? b.copy(e) : e.identity(), a.parent = this._tempDisplayObjectParent, a.updateTransform(), a.parent = h);
                    n.setTransform(1, 0, 0, 1, 0, 0);
                    n.globalAlpha = 1;
                    n.globalCompositeOperation = this.blendModes[m.BLEND_MODES.NORMAL];
                    navigator.isCocoonJS && this.view.screencanvas && (n.fillStyle =
                        "black", n.clear());
                    (void 0 !== f ? f : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? n.clearRect(0, 0, this.width, this.height) : (n.fillStyle = this._backgroundColorString, n.fillRect(0, 0, this.width, this.height)));
                    f = this.context;
                    this.context = n;
                    a.renderCanvas(this);
                    this.context = f;
                    this.emit("postrender")
                }
            };
            a.prototype.setBlendMode = function(a) {
                this._activeBlendMode !== a && (this.context.globalCompositeOperation = this.blendModes[a])
            };
            a.prototype.destroy = function(a) {
                this.destroyPlugins();
                l.prototype.destroy.call(this,
                    a);
                this.context = null;
                this.refresh = !0;
                this.maskManager.destroy();
                this.smoothProperty = this.maskManager = null
            };
            a.prototype.resize = function(a, d) {
                l.prototype.resize.call(this, a, d);
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
        75: [function(b, e, k) {
            function a(a) {
                this.renderer = a
            }
            var l =
                b("../../../const");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.pushMask = function(a) {
                var d = this.renderer;
                d.context.save();
                var h = a.alpha,
                    f = a.transform.worldTransform,
                    b = d.resolution;
                d.context.setTransform(f.a * b, f.b * b, f.c * b, f.d * b, f.tx * b, f.ty * b);
                a._texture || (this.renderGraphicsShape(a), d.context.clip());
                a.worldAlpha = h
            };
            a.prototype.renderGraphicsShape = function(a) {
                var d = this.renderer.context,
                    h = a.graphicsData.length;
                if (0 !== h) {
                    d.beginPath();
                    for (var f = 0; f < h; f++) {
                        var b = a.graphicsData[f],
                            e = b.shape;
                        if (b.type ===
                            l.SHAPES.POLY) {
                            b = e.points;
                            d.moveTo(b[0], b[1]);
                            for (var k = 1; k < b.length / 2; k++) d.lineTo(b[2 * k], b[2 * k + 1]);
                            b[0] === b[b.length - 2] && b[1] === b[b.length - 1] && d.closePath()
                        } else if (b.type === l.SHAPES.RECT) d.rect(e.x, e.y, e.width, e.height), d.closePath();
                        else if (b.type === l.SHAPES.CIRC) d.arc(e.x, e.y, e.radius, 0, 2 * Math.PI), d.closePath();
                        else if (b.type === l.SHAPES.ELIP) {
                            var t = 2 * e.width,
                                k = 2 * e.height,
                                b = e.x - t / 2,
                                e = e.y - k / 2,
                                u = t / 2 * .5522848,
                                w = k / 2 * .5522848,
                                v = b + t,
                                y = e + k,
                                t = b + t / 2,
                                k = e + k / 2;
                            d.moveTo(b, k);
                            d.bezierCurveTo(b, k - w, t - u, e, t,
                                e);
                            d.bezierCurveTo(t + u, e, v, k - w, v, k);
                            d.bezierCurveTo(v, k + w, t + u, y, t, y);
                            d.bezierCurveTo(t - u, y, b, k + w, b, k);
                            d.closePath()
                        } else b.type === l.SHAPES.RREC && (b = e.x, k = e.y, u = e.width, w = e.height, e = e.radius, v = Math.min(u, w) / 2 | 0, e = e > v ? v : e, d.moveTo(b, k + e), d.lineTo(b, k + w - e), d.quadraticCurveTo(b, k + w, b + e, k + w), d.lineTo(b + u - e, k + w), d.quadraticCurveTo(b + u, k + w, b + u, k + w - e), d.lineTo(b + u, k + e), d.quadraticCurveTo(b + u, k, b + u - e, k), d.lineTo(b + e, k), d.quadraticCurveTo(b, k, b, k + e), d.closePath())
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
        76: [function(b, e, k) {
            function a(a, d, h) {
                this.canvas = document.createElement("canvas");
                this.context = this.canvas.getContext("2d");
                this.resolution = h || l.RESOLUTION;
                this.resize(a, d)
            }
            var l = b("../../../const");
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
        77: [function(b, e, k) {
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
        78: [function(b, e, k) {
            var a = b("../../../const"),
                l = b("./canUseNewCanvasBlendModes");
            e.exports = function(f) {
                return f = f || [], l() ? (f[a.BLEND_MODES.NORMAL] = "source-over", f[a.BLEND_MODES.ADD] =
                    "lighter", f[a.BLEND_MODES.MULTIPLY] = "multiply", f[a.BLEND_MODES.SCREEN] = "screen", f[a.BLEND_MODES.OVERLAY] = "overlay", f[a.BLEND_MODES.DARKEN] = "darken", f[a.BLEND_MODES.LIGHTEN] = "lighten", f[a.BLEND_MODES.COLOR_DODGE] = "color-dodge", f[a.BLEND_MODES.COLOR_BURN] = "color-burn", f[a.BLEND_MODES.HARD_LIGHT] = "hard-light", f[a.BLEND_MODES.SOFT_LIGHT] = "soft-light", f[a.BLEND_MODES.DIFFERENCE] = "difference", f[a.BLEND_MODES.EXCLUSION] = "exclusion", f[a.BLEND_MODES.HUE] = "hue", f[a.BLEND_MODES.SATURATION] = "saturate", f[a.BLEND_MODES.COLOR] =
                    "color", f[a.BLEND_MODES.LUMINOSITY] = "luminosity") : (f[a.BLEND_MODES.NORMAL] = "source-over", f[a.BLEND_MODES.ADD] = "lighter", f[a.BLEND_MODES.MULTIPLY] = "source-over", f[a.BLEND_MODES.SCREEN] = "source-over", f[a.BLEND_MODES.OVERLAY] = "source-over", f[a.BLEND_MODES.DARKEN] = "source-over", f[a.BLEND_MODES.LIGHTEN] = "source-over", f[a.BLEND_MODES.COLOR_DODGE] = "source-over", f[a.BLEND_MODES.COLOR_BURN] = "source-over", f[a.BLEND_MODES.HARD_LIGHT] = "source-over", f[a.BLEND_MODES.SOFT_LIGHT] = "source-over", f[a.BLEND_MODES.DIFFERENCE] =
                    "source-over", f[a.BLEND_MODES.EXCLUSION] = "source-over", f[a.BLEND_MODES.HUE] = "source-over", f[a.BLEND_MODES.SATURATION] = "source-over", f[a.BLEND_MODES.COLOR] = "source-over", f[a.BLEND_MODES.LUMINOSITY] = "source-over"), f
            }
        }, {
            "../../../const": 43,
            "./canUseNewCanvasBlendModes": 77
        }],
        79: [function(b, e, k) {
            function a(a) {
                this.renderer = a;
                this.checkCount = this.count = 0;
                this.maxIdle = 3600;
                this.checkCountMax = 600;
                this.mode = l.GC_MODES.DEFAULT
            }
            var l = b("../../const");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.update =
                function() {
                    this.count++;
                    this.mode !== l.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
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
        80: [function(b, e, k) {
            var a = b("pixi-gl-core").GLTexture,
                l = b("../../const"),
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
                        d.wrapMode === l.WRAP_MODES.CLAMP ? b.enableWrapClamp() : d.wrapMode === l.WRAP_MODES.REPEAT ? b.enableWrapRepeat() : b.enableWrapMirrorRepeat()) : b.enableWrapClamp(), d.scaleMode === l.SCALE_MODES.NEAREST ? b.enableNearestScaling() : b.enableLinearScaling());
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
        81: [function(b, e, k) {
            function a(a, b, e) {
                e = e || {};
                l.call(this, "WebGL", a, b, e);
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
                this.gl = e.context || u(this.view, this._contextOptions);
                this.CONTEXT_UID =
                    B++;
                this.state = new t(this.gl);
                this.renderingToScreen = !0;
                this._initContext();
                this.filterManager = new h(this);
                this.drawModes = w(this.gl);
                this._activeRenderTarget = this._activeShader = null;
                this._activeTextureLocation = 999;
                this._activeTexture = null;
                this.setBlendMode(0)
            }
            var l = b("../SystemRenderer"),
                f = b("./managers/MaskManager"),
                d = b("./managers/StencilManager"),
                h = b("./managers/FilterManager"),
                m = b("./utils/RenderTarget"),
                q = b("./utils/ObjectRenderer"),
                n = b("./TextureManager"),
                r = b("./TextureGarbageCollector"),
                t =
                b("./WebGLState"),
                u = b("pixi-gl-core").createContext,
                w = b("./utils/mapWebGLDrawModesToPixi"),
                v = b("./utils/validateContext");
            k = b("../../utils");
            var y = b("pixi-gl-core"),
                A = b("../../const"),
                B = 0;
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            k.pluginTarget.mixin(a);
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
            a.prototype.render = function(a, d, h, f, b) {
                if (this.renderingToScreen = !d, this.emit("prerender"), this.gl && !this.gl.isContextLost())(d || (this._lastObjectRendered = a), b) || (b = a.parent, a.parent = this._tempDisplayObjectParent, a.updateTransform(), a.parent = b), this.bindRenderTexture(d, f), this.currentRenderer.start(), (void 0 !== h ? h : this.clearBeforeRender) &&
                    this._activeRenderTarget.clear(), a.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender")
            };
            a.prototype.setObjectRenderer = function(a) {
                this.currentRenderer !== a && (this.currentRenderer.stop(), this.currentRenderer = a, this.currentRenderer.start())
            };
            a.prototype.flush = function() {
                this.setObjectRenderer(this.emptyRenderer)
            };
            a.prototype.resize = function(a, d) {
                l.prototype.resize.call(this, a, d);
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
                var h;
                if (a) {
                    h = a.baseTexture;
                    var f = this.gl;
                    h._glRenderTargets[this.CONTEXT_UID] ? (this._activeTextureLocation =
                        h._id, f.activeTexture(f.TEXTURE0 + h._id), f.bindTexture(f.TEXTURE_2D, null)) : (this.textureManager.updateTexture(h), f.bindTexture(f.TEXTURE_2D, null));
                    h = h._glRenderTargets[this.CONTEXT_UID];
                    h.setFrame(a.frame)
                } else h = this.rootRenderTarget;
                return h.transform = d, this.bindRenderTarget(h), this
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
                var h = this.gl;
                return d = d || 0, this._activeTextureLocation !== d && (this._activeTextureLocation = d, h.activeTexture(h.TEXTURE0 + d)), this._activeTexture = a, a._glTextures[this.CONTEXT_UID] ? (a.touched = this.textureGC.count,
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
                l.prototype.destroy.call(this, a);
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
        82: [function(b, e, k) {
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
                this.blendModes = l(a);
                this.nativeVaoExtension = a.getExtension("OES_vertex_array_object") || a.getExtension("MOZ_OES_vertex_array_object") ||
                    a.getExtension("WEBKIT_OES_vertex_array_object")
            }
            var l = b("./utils/mapWebGLBlendModesToPixi");
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
        83: [function(b, e, k) {
                function a(b, e, n) {
                    this.vertexSrc = b || a.defaultVertexSrc;
                    this.fragmentSrc = e || a.defaultFragmentSrc;
                    this.blendMode = d.BLEND_MODES.NORMAL;
                    this.uniformData =
                        n || l(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler");
                    this.uniforms = {};
                    for (var m in this.uniformData) this.uniforms[m] = this.uniformData[m].value;
                    this.glShaders = [];
                    h[this.vertexSrc + this.fragmentSrc] || (h[this.vertexSrc + this.fragmentSrc] = f.uid());
                    this.glShaderKey = h[this.vertexSrc + this.fragmentSrc];
                    this.padding = 4;
                    this.resolution = 1;
                    this.enabled = !0
                }
                var l = b("./extractUniformsFromSrc"),
                    f = b("../../../utils"),
                    d = b("../../../const"),
                    h = {};
                e.exports = a;
                a.prototype.apply = function(a, d, h, f) {
                    a.applyFilter(this,
                        d, h, f)
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
        84: [function(b, e, k) {
            function a(a) {
                var d, h = /^(projectionMatrix|uSampler|filterArea)$/,
                    f = {};
                a = a.replace(/\s+/g, " ").split(/\s*;\s*/);
                for (var b = 0; b < a.length; b++) {
                    var e = a[b].trim();
                    if (-1 < e.indexOf("uniform")) {
                        var k = e.split(" "),
                            e = k[1],
                            k = k[2],
                            t = 1; - 1 < k.indexOf("[") && (d = k.split(/\[|\]/), k = d[0], t *= Number(d[1]));
                        k.match(h) || (f[k] = {
                            value: l(e, t),
                            name: k,
                            type: e
                        })
                    }
                }
                return f
            }
            var l = b("pixi-gl-core").shader.defaultValue;
            e.exports = function(f,
                d, h) {
                f = a(f, h);
                d = a(d, h);
                return Object.assign(f, d)
            }
        }, {
            "pixi-gl-core": 12
        }],
        85: [function(b, e, k) {
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
                        l = h._texture.baseTexture;
                    b = b.identity();
                    var n = d.height / d.width;
                    b.translate(f.x / d.width, f.y / d.height);
                    b.scale(1, n);
                    f = d.width / l.width;
                    d = d.height / l.height;
                    return e.tx /= l.width * f, e.ty /= l.width * f, e.invert(), b.prepend(e), b.scale(1, 1 / n), b.scale(f, d), b.translate(h.anchor.x, h.anchor.y), b
                }
            }
        }, {
            "../../../math": 67
        }],
        86: [function(b, e, k) {
            function a(a) {
                var d = new f.Matrix;
                l.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
                    "#define GLSLIFY 1\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n");
                a.renderable = !1;
                this.maskSprite = a;
                this.maskMatrix = d
            }
            var l = b("../Filter"),
                f = b("../../../../math");
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.apply = function(a, h, f) {
                var d = this.maskSprite;
                this.uniforms.mask = d._texture;
                this.uniforms.otherMatrix = a.calculateSpriteMatrix(this.maskMatrix, d);
                this.uniforms.alpha = d.worldAlpha;
                a.applyFilter(this, h, f)
            }
        }, {
            "../../../../math": 67,
            "../Filter": 83
        }],
        87: [function(b, e, k) {
            function a(a) {
                l.call(this, a);
                this.gl = this.renderer.gl;
                this.quad = new d(this.gl, a.state.attribState);
                this.shaderCache = {};
                this.pool = {};
                this.filterData = null
            }
            var l = b("./WebGLManager"),
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
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports =
                a;
            a.prototype.pushFilter = function(a, d) {
                var h = this.renderer,
                    f = this.filterData;
                if (!f) {
                    var b = new r;
                    b.sourceFrame = b.destinationFrame = this.renderer._activeRenderTarget.size;
                    b.renderTarget = h._activeRenderTarget;
                    this.filterData = this.renderer._activeRenderTarget.filterData = f = {
                        index: 0,
                        stack: [b]
                    }
                }(b = f.stack[++f.index]) || (b = f.stack[f.index] = new r);
                var e = d[0].resolution,
                    m = d[0].padding,
                    n = a.filterArea || a.getBounds(!0),
                    l = b.sourceFrame,
                    q = b.destinationFrame;
                l.x = (n.x * e | 0) / e;
                l.y = (n.y * e | 0) / e;
                l.width = (n.width * e | 0) / e;
                l.height = (n.height * e | 0) / e;
                f.stack[0].renderTarget.transform || l.fit(f.stack[0].destinationFrame);
                l.pad(m);
                q.width = l.width;
                q.height = l.height;
                f = this.getPotRenderTarget(h.gl, l.width, l.height, e);
                b.target = a;
                b.filters = d;
                b.resolution = e;
                b.renderTarget = f;
                f.setFrame(q, l);
                h.bindRenderTarget(f);
                h.clear()
            };
            a.prototype.popFilter = function() {
                var a = this.filterData,
                    d = a.stack[a.index - 1],
                    h = a.stack[a.index];
                this.quad.map(h.renderTarget.size, h.sourceFrame).upload();
                var f = h.filters;
                if (1 === f.length) f[0].apply(this, h.renderTarget,
                    d.renderTarget, !1), this.freePotRenderTarget(h.renderTarget);
                else {
                    var b = h.renderTarget,
                        e = this.getPotRenderTarget(this.renderer.gl, h.sourceFrame.width, h.sourceFrame.height, 1);
                    e.setFrame(h.destinationFrame, h.sourceFrame);
                    for (h = 0; h < f.length - 1; h++) {
                        f[h].apply(this, b, e, !0);
                        var m = b,
                            b = e,
                            e = m
                    }
                    f[h].apply(this, b, d.renderTarget, !1);
                    this.freePotRenderTarget(b);
                    this.freePotRenderTarget(e)
                }
                a.index--;
                0 === a.index && (this.filterData = null)
            };
            a.prototype.applyFilter = function(a, d, h, f) {
                var b = this.renderer,
                    e = a.glShaders[b.CONTEXT_UID];
                if (e || (a.glShaderKey ? (e = this.shaderCache[a.glShaderKey], e || (e = a.glShaders[b.CONTEXT_UID] = this.shaderCache[a.glShaderKey] = new m(this.gl, a.vertexSrc, a.fragmentSrc))) : e = a.glShaders[b.CONTEXT_UID] = new m(this.gl, a.vertexSrc, a.fragmentSrc), this.quad.initVao(e)), b.bindRenderTarget(h), f) f = b.gl, f.disable(f.SCISSOR_TEST), b.clear(), f.enable(f.SCISSOR_TEST);
                h === b.maskManager.scissorRenderTarget && b.maskManager.pushScissorMask(null, b.maskManager.scissorData);
                b.bindShader(e);
                this.syncUniforms(e, a);
                d.texture.bind(0);
                b._activeTextureLocation = 0;
                b.state.setBlendMode(a.blendMode);
                this.quad.draw()
            };
            a.prototype.syncUniforms = function(a, d) {
                var h, f = d.uniformData,
                    b = d.uniforms,
                    e = 1;
                if (a.uniforms.data.filterArea) {
                    h = this.filterData.stack[this.filterData.index];
                    var m = a.uniforms.filterArea;
                    m[0] = h.renderTarget.size.width;
                    m[1] = h.renderTarget.size.height;
                    m[2] = h.sourceFrame.x;
                    m[3] = h.sourceFrame.y;
                    a.uniforms.filterArea = m
                }
                a.uniforms.data.filterClamp && (h = this.filterData.stack[this.filterData.index], m = a.uniforms.filterClamp, m[0] = .5 /
                    h.renderTarget.size.width, m[1] = .5 / h.renderTarget.size.height, m[2] = (h.sourceFrame.width - .5) / h.renderTarget.size.width, m[3] = (h.sourceFrame.height - .5) / h.renderTarget.size.height, a.uniforms.filterClamp = m);
                var n, l;
                for (l in f) "sampler2D" === f[l].type ? ((a.uniforms[l] = e, b[l].baseTexture) ? this.renderer.bindTexture(b[l].baseTexture, e) : (h = this.renderer.gl, this.renderer._activeTextureLocation = h.TEXTURE0 + e, h.activeTexture(h.TEXTURE0 + e), b[l].texture.bind()), e++) : "mat3" === f[l].type ? void 0 !== b[l].a ? a.uniforms[l] =
                    b[l].toArray(!0) : a.uniforms[l] = b[l] : "vec2" === f[l].type ? void 0 !== b[l].x ? (n = a.uniforms[l] || new Float32Array(2), n[0] = b[l].x, n[1] = b[l].y, a.uniforms[l] = n) : a.uniforms[l] = b[l] : "float" === f[l].type ? a.uniforms.data[l].value !== f[l] && (a.uniforms[l] = b[l]) : a.uniforms[l] = b[l]
            };
            a.prototype.getRenderTarget = function(a, d) {
                var h = this.filterData.stack[this.filterData.index],
                    f = this.getPotRenderTarget(this.renderer.gl, h.sourceFrame.width, h.sourceFrame.height, d || h.resolution);
                return f.setFrame(h.destinationFrame, h.sourceFrame),
                    f
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
                    var h = this.filterData.stack[this.filterData.index];
                    return q.calculateSpriteMatrix(a, h.sourceFrame, h.renderTarget.size, d)
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
                            for (var h = 0; h < d.length; h++) d[h].destroy(!0)
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
        88: [function(b, e, k) {
            function a(a) {
                l.call(this, a);
                this.scissor = !1;
                this.scissorRenderTarget =
                    this.scissorData = null;
                this.enableScissor = !0;
                this.alphaMaskPool = [];
                this.alphaMaskIndex = 0
            }
            var l = b("./WebGLManager"),
                f = b("../filters/spriteMask/SpriteMaskFilter");
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.pushMask = function(a, h) {
                if (h.texture) this.pushSpriteMask(a, h);
                else if (this.enableScissor && !this.scissor && !this.renderer.stencilManager.stencilMaskStack.length && h.isFastRect()) {
                    var d = h.worldTransform,
                        d = Math.atan2(d.b, d.a),
                        d = Math.round(180 / Math.PI * d);
                    d % 90 ?
                        this.pushStencilMask(h) : this.pushScissorMask(a, h)
                } else this.pushStencilMask(h)
            };
            a.prototype.popMask = function(a, h) {
                h.texture ? this.popSpriteMask(a, h) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(a, h) : this.popStencilMask(a, h)
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
            a.prototype.pushScissorMask = function(a, h) {
                h.renderable = !0;
                var d = this.renderer._activeRenderTarget,
                    f = h.getBounds();
                f.fit(d.size);
                h.renderable = !1;
                this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                var b = this.renderer.resolution;
                this.renderer.gl.scissor(f.x * b, (d.root ? d.size.height - f.y - f.height : f.y) * b, f.width * b, f.height * b);
                this.scissorRenderTarget = d;
                this.scissorData = h;
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
        89: [function(b, e, k) {
            function a(a) {
                l.call(this, a);
                this.stencilMaskStack = null
            }
            var l = b("./WebGLManager");
            a.prototype = Object.create(l.prototype);
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
                    h = this.stencilMaskStack;
                0 === h.length && (d.enable(d.STENCIL_TEST), d.clear(d.STENCIL_BUFFER_BIT), d.stencilFunc(d.ALWAYS, 1, 1));
                h.push(a);
                d.colorMask(!1, !1, !1, !1);
                d.stencilOp(d.KEEP, d.KEEP, d.INCR);
                this.renderer.plugins.graphics.render(a);
                d.colorMask(!0, !0, !0, !0);
                d.stencilFunc(d.NOTEQUAL, 0, h.length);
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
                l.prototype.destroy.call(this);
                this.stencilMaskStack.stencilStack = null
            }
        }, {
            "./WebGLManager": 90
        }],
        90: [function(b, e, k) {
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
        91: [function(b, e, k) {
            function a(a) {
                l.call(this, a)
            }
            var l = b("../managers/WebGLManager");
            a.prototype = Object.create(l.prototype);
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
        92: [function(b, e, k) {
            function a(a, h) {
                this.gl = a;
                this.vertices =
                    new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);
                this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
                this.interleaved = new Float32Array(16);
                for (var d = 0; 4 > d; d++) this.interleaved[4 * d] = this.vertices[2 * d], this.interleaved[4 * d + 1] = this.vertices[2 * d + 1], this.interleaved[4 * d + 2] = this.uvs[2 * d], this.interleaved[4 * d + 3] = this.uvs[2 * d + 1];
                this.indices = f(1);
                this.vertexBuffer = l.GLBuffer.createVertexBuffer(a, this.interleaved, a.STATIC_DRAW);
                this.indexBuffer = l.GLBuffer.createIndexBuffer(a, this.indices, a.STATIC_DRAW);
                this.vao = new l.VertexArrayObject(a,
                    h)
            }
            var l = b("pixi-gl-core"),
                f = b("../../../utils/createIndicesForQuads");
            a.prototype.constructor = a;
            a.prototype.initVao = function(a) {
                this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, a.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, a.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
            };
            a.prototype.map = function(a, h) {
                var d = 0,
                    f = 0;
                return this.uvs[0] = d, this.uvs[1] = f, this.uvs[2] = d + h.width / a.width, this.uvs[3] = f, this.uvs[4] = d + h.width / a.width, this.uvs[5] =
                    f + h.height / a.height, this.uvs[6] = d, this.uvs[7] = f + h.height / a.height, d = h.x, f = h.y, this.vertices[0] = d, this.vertices[1] = f, this.vertices[2] = d + h.width, this.vertices[3] = f, this.vertices[4] = d + h.width, this.vertices[5] = f + h.height, this.vertices[6] = d, this.vertices[7] = f + h.height, this
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
        93: [function(b, e, k) {
            var a = b("../../../math"),
                l = b("../../../const"),
                f = b("pixi-gl-core").GLFramebuffer;
            b = function(d, h, b, e, n, k) {
                this.gl = d;
                this.texture = this.frameBuffer = null;
                this.clearColor = [0, 0, 0, 0];
                this.size = new a.Rectangle(0, 0, 1, 1);
                this.resolution = n || l.RESOLUTION;
                this.projectionMatrix = new a.Matrix;
                this.frame = this.transform = null;
                this.defaultFrame = new a.Rectangle;
                this.stencilBuffer = this.sourceFrame = this.destinationFrame = null;
                this.stencilMaskStack = [];
                this.filterData = null;
                this.scaleMode = e || l.SCALE_MODES.DEFAULT;
                (this.root = k) ? (this.frameBuffer = new f(d, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = f.createRGBA(d, 100, 100), this.scaleMode === l.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() :
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
            b.prototype.setFrame = function(a, h) {
                this.destinationFrame = a || this.destinationFrame || this.defaultFrame;
                this.sourceFrame = h || this.sourceFrame || a
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
            b.prototype.calculateProjection = function(a, h) {
                var d = this.projectionMatrix;
                h = h || a;
                d.identity();
                this.root ? (d.a = 1 / a.width * 2, d.d = -1 / a.height * 2, d.tx = -1 - h.x * d.a, d.ty = 1 - h.y * d.d) : (d.a = 1 / a.width * 2, d.d = 1 / a.height * 2, d.tx = -1 - h.x * d.a, d.ty = -1 - h.y * d.d)
            };
            b.prototype.resize = function(a, h) {
                if (a |= 0, h |= 0, this.size.width !== a || this.size.height !== h) this.size.width = a, this.size.height = h, this.defaultFrame.width = a, this.defaultFrame.height = h, this.frameBuffer.resize(a *
                    this.resolution, h * this.resolution), this.calculateProjection(this.frame || this.size)
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
        94: [function(b, e, k) {
            function a(a) {
                for (var d = "", h = 0; h < a; h++) 0 < h && (d += "\nelse "), h < a - 1 && (d += "if(test == " + h + ".0){}");
                return d
            }
            var l = b("pixi-gl-core");
            e.exports = function(f, d) {
                var h = !d;
                if (h) {
                    var b = document.createElement("canvas");
                    b.width = 1;
                    b.height = 1;
                    d = l.createContext(b)
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
        95: [function(b, e, k) {
            var a = b("../../../const");
            e.exports = function(b, f) {
                return f = f || [], f[a.BLEND_MODES.NORMAL] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.ADD] = [b.ONE, b.DST_ALPHA], f[a.BLEND_MODES.MULTIPLY] = [b.DST_COLOR, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.SCREEN] = [b.ONE, b.ONE_MINUS_SRC_COLOR], f[a.BLEND_MODES.OVERLAY] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.DARKEN] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.LIGHTEN] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.COLOR_DODGE] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.COLOR_BURN] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.HARD_LIGHT] = [b.ONE,
                    b.ONE_MINUS_SRC_ALPHA
                ], f[a.BLEND_MODES.SOFT_LIGHT] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.DIFFERENCE] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.EXCLUSION] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.HUE] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.SATURATION] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.COLOR] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f[a.BLEND_MODES.LUMINOSITY] = [b.ONE, b.ONE_MINUS_SRC_ALPHA], f
            }
        }, {
            "../../../const": 43
        }],
        96: [function(b, e, k) {
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
        97: [function(b, e, k) {
            e.exports = function(a) {
                a.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
            }
        }, {}],
        98: [function(b,
            e, k) {
            function a(a) {
                d.call(this);
                this.anchor = new l.ObservablePoint(this.onAnchorUpdate, this);
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
            var l = b("../math"),
                f = b("../textures/Texture"),
                d = b("../display/Container"),
                h = b("../utils"),
                m = b("../const"),
                q = new l.Point;
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
                    var a, d, h, f, b = this._texture,
                        e = this.transform.worldTransform,
                        m = e.a,
                        l = e.b,
                        q = e.c,
                        k = e.d,
                        x = e.tx,
                        e = e.ty,
                        F = this.vertexData,
                        G = b.trim,
                        b = b.orig;
                    G ? (d = G.x - this.anchor._x * b.width, a = d + G.width, f = G.y - this.anchor._y *
                        b.height, h = f + G.height) : (a = b.width * (1 - this.anchor._x), d = b.width * -this.anchor._x, h = b.height * (1 - this.anchor._y), f = b.height * -this.anchor._y);
                    F[0] = m * d + q * f + x;
                    F[1] = k * f + l * d + e;
                    F[2] = m * a + q * f + x;
                    F[3] = k * f + l * a + e;
                    F[4] = m * a + q * h + x;
                    F[5] = k * h + l * a + e;
                    F[6] = m * d + q * h + x;
                    F[7] = k * h + l * d + e
                }
            };
            a.prototype.calculateTrimmedVertices = function() {
                this.vertexTrimmedData || (this.vertexTrimmedData = new Float32Array(8));
                var a, d, h, f, b = this.vertexTrimmedData;
                f = this._texture.orig;
                a = this.transform.worldTransform;
                var e = a.a,
                    m = a.b,
                    l = a.c,
                    q = a.d,
                    k = a.tx,
                    x = a.ty;
                a = f.width * (1 - this.anchor._x);
                d = f.width * -this.anchor._x;
                h = f.height * (1 - this.anchor._y);
                f = f.height * -this.anchor._y;
                b[0] = e * d + l * f + k;
                b[1] = q * f + m * d + x;
                b[2] = e * a + l * f + k;
                b[3] = q * f + m * a + x;
                b[4] = e * a + l * h + k;
                b[5] = q * h + m * a + x;
                b[6] = e * d + l * h + k;
                b[7] = q * h + m * d + x
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
                    (this._localBoundsRect = new l.Rectangle), a = this._localBoundsRect), this._bounds.getRectangle(a)) : d.prototype.getLocalBounds.call(this, a)
            };
            a.prototype.containsPoint = function(a) {
                this.worldTransform.applyInverse(a, q);
                var d;
                a = this._texture.orig.width;
                var h = this._texture.orig.height,
                    f = -a * this.anchor.x;
                return q.x > f && q.x < f + a && (d = -h * this.anchor.y, q.y > d && q.y < d + h)
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
        99: [function(b, e, k) {
            function a(a) {
                this.renderer = a
            }
            k = b("../../renderers/canvas/CanvasRenderer");
            var l = b("../../const"),
                f = b("../../math"),
                d = new f.Matrix,
                h = b("./CanvasTinter");
            a.prototype.constructor = a;
            e.exports = a;
            k.registerPlugin("sprite", a);
            a.prototype.render = function(a) {
                var b, e, m = a._texture,
                    k = this.renderer,
                    u = a.transform.worldTransform,
                    w = m._frame.width,
                    v = m._frame.height;
                if (!(0 >= m.orig.width || 0 >= m.orig.height) && m.baseTexture.source && (k.setBlendMode(a.blendMode), m.valid)) {
                    k.context.globalAlpha = a.worldAlpha;
                    var y = m.baseTexture.scaleMode === l.SCALE_MODES.LINEAR;
                    k.smoothProperty && k.context[k.smoothProperty] !==
                        y && (k.context[k.smoothProperty] = y);
                    m.trim ? (b = m.trim.width / 2 + m.trim.x - a.anchor.x * m.orig.width, e = m.trim.height / 2 + m.trim.y - a.anchor.y * m.orig.height) : (b = (.5 - a.anchor.x) * m.orig.width, e = (.5 - a.anchor.y) * m.orig.height);
                    m.rotate && (u.copy(d), u = d, f.GroupD8.matrixAppendRotationInv(u, m.rotate, b, e), b = 0, e = 0);
                    b -= w / 2;
                    e -= v / 2;
                    k.roundPixels ? (k.context.setTransform(u.a, u.b, u.c, u.d, u.tx * k.resolution | 0, u.ty * k.resolution | 0), b |= 0, e |= 0) : k.context.setTransform(u.a, u.b, u.c, u.d, u.tx * k.resolution, u.ty * k.resolution);
                    u = m.baseTexture.resolution;
                    16777215 !== a.tint ? (a.cachedTint !== a.tint && (a.cachedTint = a.tint, a.tintedTexture = h.getTintedTexture(a, a.tint)), k.context.drawImage(a.tintedTexture, 0, 0, w * u, v * u, b * k.resolution, e * k.resolution, w * k.resolution, v * k.resolution)) : k.context.drawImage(m.baseTexture.source, m._frame.x * u, m._frame.y * u, w * u, v * u, b * k.resolution, e * k.resolution, w * k.resolution, v * k.resolution)
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
        100: [function(b, e, k) {
            var a = b("../../utils");
            b = b("../../renderers/canvas/utils/canUseNewCanvasBlendModes");
            var l = e.exports = {
                getTintedTexture: function(a, d) {
                    var h = a.texture;
                    d = l.roundColor(d);
                    var f = "#" + ("00000" + (0 | d).toString(16)).substr(-6);
                    if (h.tintCache = h.tintCache || {}, h.tintCache[f]) return h.tintCache[f];
                    var b = l.canvas || document.createElement("canvas");
                    if (l.tintMethod(h, d, b), l.convertTintToImage) {
                        var e = new Image;
                        e.src = b.toDataURL();
                        h.tintCache[f] = e
                    } else h.tintCache[f] = b, l.canvas = null;
                    return b
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
                    for (var e = b.getImageData(0, 0, e.width, e.height), n = e.data, l = 0; l < n.length; l += 4) n[l + 0] *= f, n[l + 1] *= d, n[l + 2] *= h;
                    b.putImageData(e, 0, 0)
                },
                roundColor: function(f) {
                    var d = l.cacheStepsPerColorChannel;
                    f = a.hex2rgb(f);
                    return f[0] = Math.min(255, f[0] / d * d), f[1] = Math.min(255, f[1] / d * d), f[2] = Math.min(255,
                        f[2] / d * d), a.rgb2hex(f)
                },
                cacheStepsPerColorChannel: 8,
                convertTintToImage: !1,
                canUseMultiply: b(),
                tintMethod: 0
            };
            l.tintMethod = l.canUseMultiply ? l.tintWithMultiply : l.tintWithPerPixel
        }, {
            "../../renderers/canvas/utils/canUseNewCanvasBlendModes": 77,
            "../../utils": 116
        }],
        101: [function(b, e, k) {
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
        102: [function(b, e, k) {
            function a(a) {
                l.call(this, a);
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
            var l = b("../../renderers/webgl/utils/ObjectRenderer");
            k = b("../../renderers/webgl/WebGLRenderer");
            var f = b("../../utils/createIndicesForQuads"),
                d = b("./generateMultiTextureShader"),
                h = b("../../renderers/webgl/utils/checkMaxIfStatmentsInShader"),
                m = b("./BatchBuffer"),
                q = b("../../const"),
                n = b("pixi-gl-core"),
                r = b("bit-twiddle"),
                t = 0;
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            k.registerPlugin("sprite", a);
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
                    var a, h, f, b, e, m, l, k = this.renderer.gl,
                        q = r.nextPow2(this.currentIndex),
                        q = r.log2(q),
                        G = this.buffers[q],
                        E = this.sprites,
                        q = this.groups,
                        C = G.float32View,
                        H = G.uint32View,
                        D = 0,
                        J = 1,
                        I = 0,
                        L = q[0],
                        M = E[0].blendMode;
                    L.textureCount = 0;
                    L.start = 0;
                    L.blend = M;
                    t++;
                    for (var N = 0; N < this.currentIndex; N++) {
                        e = E[N];
                        if (a = e._texture.baseTexture, M !== e.blendMode && (M = e.blendMode, h = null, I = this.MAX_TEXTURES,
                                t++), h !== a && (h = a, a._enabled !== t && (I === this.MAX_TEXTURES && (t++, I = 0, L.size = N - L.start, L = q[J++], L.textureCount = 0, L.blend = M, L.start = N), a._enabled = t, a._id = I, L.textures[L.textureCount++] = a, I++)), f = e.vertexData, b = e._tintRGB + (255 * e.worldAlpha << 24), e = e._texture._uvs.uvsUint32, m = a._id, this.renderer.roundPixels) {
                            var O = this.renderer.resolution;
                            C[D] = (f[0] * O | 0) / O;
                            C[D + 1] = (f[1] * O | 0) / O;
                            C[D + 5] = (f[2] * O | 0) / O;
                            C[D + 6] = (f[3] * O | 0) / O;
                            C[D + 10] = (f[4] * O | 0) / O;
                            C[D + 11] = (f[5] * O | 0) / O;
                            C[D + 15] = (f[6] * O | 0) / O;
                            C[D + 16] = (f[7] * O | 0) / O
                        } else C[D] =
                            f[0], C[D + 1] = f[1], C[D + 5] = f[2], C[D + 6] = f[3], C[D + 10] = f[4], C[D + 11] = f[5], C[D + 15] = f[6], C[D + 16] = f[7];
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
                    this.vaoMax <= this.vertexCount && (this.vaoMax++, l = this.shaders[1], this.vertexBuffers[this.vertexCount] = n.GLBuffer.createVertexBuffer(k, null, k.STREAM_DRAW), this.vaos[this.vertexCount] = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(this.vertexBuffers[this.vertexCount],
                        l.attributes.aVertexPosition, k.FLOAT, !1, this.vertByteSize, 0).addAttribute(this.vertexBuffers[this.vertexCount], l.attributes.aTextureCoord, k.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(this.vertexBuffers[this.vertexCount], l.attributes.aColor, k.UNSIGNED_BYTE, !0, this.vertByteSize, 12).addAttribute(this.vertexBuffers[this.vertexCount], l.attributes.aTextureId, k.FLOAT, !1, this.vertByteSize, 16));
                    this.vertexBuffers[this.vertexCount].upload(G.vertices, 0);
                    this.vao = this.vaos[this.vertexCount].bind();
                    for (N =
                        0; N < J; N++) {
                        a = q[N];
                        h = a.textureCount;
                        (l = this.shaders[h - 1]) || (l = this.shaders[h - 1] = d(k, h));
                        this.renderer.bindShader(l);
                        for (l = 0; l < h; l++) this.renderer.bindTexture(a.textures[l], l);
                        this.renderer.state.setBlendMode(a.blend);
                        k.drawElements(k.TRIANGLES, 6 * a.size, k.UNSIGNED_SHORT, 12 * a.start)
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
                l.prototype.destroy.call(this);
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
        103: [function(b, e, k) {
            function a(a) {
                var d;
                d = "\n\n";
                for (var h = 0; h < a; h++) 0 < h && (d += "\nelse "), h < a - 1 && (d += "if(textureId == " + h + ".0)"), d += "\n{", d += "\n\tcolor = texture2D(uSamplers[" + h + "], vTextureCoord);", d += "\n}";
                return d += "\n", d + "\n"
            }
            var l = b("../../Shader");
            e.exports = function(f, d) {
                var h;
                h = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\nvoid main(void){\nvec4 color;\nfloat textureId = floor(vTextureId+0.5);\n%forloop%\ngl_FragColor = color * vColor;\n}".replace(/%count%/gi,
                    d);
                h = h.replace(/%forloop%/gi, a(d));
                h = new l(f, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vTextureId = aTextureId;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n",
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
        104: [function(b, e, k) {
            function a(a, h) {
                this.canvas = document.createElement("canvas");
                this.context = this.canvas.getContext("2d");
                this.resolution = m.RESOLUTION;
                this._styleListener = this._style = this._text = null;
                this._font = "";
                var b = f.fromCanvas(this.canvas);
                b.orig = new d.Rectangle;
                b.trim = new d.Rectangle;
                l.call(this, b);
                this.text = a;
                this.style = h;
                this.localStyleID = -1
            }
            var l = b("../sprites/Sprite"),
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
            a.prototype = Object.create(l.prototype);
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
                    var h;
                    a = (d.wordWrap ? this.wordWrap(this._text) : this._text).split(/(?:\r\n|\r|\n)/);
                    var f = Array(a.length),
                        b = 0,
                        e = this.determineFontProperties(this._font);
                    for (h = 0; h < a.length; h++) {
                        var m = this.context.measureText(a[h]).width + (a[h].length - 1) * d.letterSpacing;
                        f[h] = m;
                        b = Math.max(b, m)
                    }
                    h = b + d.strokeThickness;
                    d.dropShadow && (h += d.dropShadowDistance);
                    h += 2 * d.padding;
                    this.canvas.width = Math.ceil((h + this.context.lineWidth) * this.resolution);
                    m = this.style.lineHeight || e.fontSize + d.strokeThickness;
                    h = Math.max(m, e.fontSize + d.strokeThickness) + (a.length - 1) * m;
                    d.dropShadow && (h += d.dropShadowDistance);
                    this.canvas.height =
                        Math.ceil((h + 2 * this._style.padding) * this.resolution);
                    this.context.scale(this.resolution, this.resolution);
                    navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.context.font = this._font;
                    this.context.strokeStyle = d.stroke;
                    this.context.lineWidth = d.strokeThickness;
                    this.context.textBaseline = d.textBaseline;
                    this.context.lineJoin = d.lineJoin;
                    this.context.miterLimit = d.miterLimit;
                    var n, l;
                    if (d.dropShadow) {
                        0 < d.dropShadowBlur ? (this.context.shadowColor = d.dropShadowColor, this.context.shadowBlur =
                            d.dropShadowBlur) : this.context.fillStyle = d.dropShadowColor;
                        var k = Math.cos(d.dropShadowAngle) * d.dropShadowDistance,
                            q = Math.sin(d.dropShadowAngle) * d.dropShadowDistance;
                        for (h = 0; h < a.length; h++) n = d.strokeThickness / 2, l = d.strokeThickness / 2 + h * m + e.ascent, "right" === d.align ? n += b - f[h] : "center" === d.align && (n += (b - f[h]) / 2), d.fill && (this.drawLetterSpacing(a[h], n + k + d.padding, l + q + d.padding), d.stroke && d.strokeThickness && (this.context.strokeStyle = d.dropShadowColor, this.drawLetterSpacing(a[h], n + k + d.padding, l + q + d.padding, !0), this.context.strokeStyle = d.stroke))
                    }
                    this.context.fillStyle = this._generateFillStyle(d, a);
                    for (h = 0; h < a.length; h++) n = d.strokeThickness / 2, l = d.strokeThickness / 2 + h * m + e.ascent, "right" === d.align ? n += b - f[h] : "center" === d.align && (n += (b - f[h]) / 2), d.stroke && d.strokeThickness && this.drawLetterSpacing(a[h], n + d.padding, l + d.padding, !0), d.fill && this.drawLetterSpacing(a[h], n + d.padding, l + d.padding);
                    this.updateTexture()
                }
            };
            a.prototype.drawLetterSpacing = function(a, d, h, f) {
                var b = this._style.letterSpacing;
                if (0 === b) return void(f ?
                    this.context.strokeText(a, d, h) : this.context.fillText(a, d, h));
                for (var e = String.prototype.split.call(a, ""), m = 0, n = d; m < a.length;) d = e[m++], f ? this.context.strokeText(d, n, h) : this.context.fillText(d, n, h), n += this.context.measureText(d).width + b
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
                l.prototype.renderWebGL.call(this, a)
            };
            a.prototype._renderCanvas = function(a) {
                this.resolution !== a.resolution && (this.resolution = a.resolution, this.dirty = !0);
                this.updateText(!0);
                l.prototype._renderCanvas.call(this, a)
            };
            a.prototype.determineFontProperties = function(d) {
                var h = a.fontPropertiesCache[d];
                if (!h) {
                    var h = {},
                        f = a.fontPropertiesCanvas,
                        b = a.fontPropertiesContext;
                    b.font = d;
                    var e = Math.ceil(b.measureText("|M\u00c9q").width),
                        m = Math.ceil(b.measureText("M").width),
                        n = 2 * m,
                        m = 1.4 * m | 0;
                    f.width = e;
                    f.height = n;
                    b.fillStyle =
                        "#f00";
                    b.fillRect(0, 0, e, n);
                    b.font = d;
                    b.textBaseline = "alphabetic";
                    b.fillStyle = "#000";
                    b.fillText("|M\u00c9q", 0, m);
                    for (var l, f = b.getImageData(0, 0, e, n).data, b = f.length, k = 4 * e, q = 0, r = !1, e = 0; e < m; e++) {
                        for (l = 0; l < k; l += 4)
                            if (255 !== f[q + l]) {
                                r = !0;
                                break
                            }
                        if (r) break;
                        q += k
                    }
                    h.ascent = m - e;
                    q = b - k;
                    r = !1;
                    for (e = n; e > m; e--) {
                        for (l = 0; l < k; l += 4)
                            if (255 !== f[q + l]) {
                                r = !0;
                                break
                            }
                        if (r) break;
                        q -= k
                    }
                    h.descent = e - m;
                    h.fontSize = h.ascent + h.descent;
                    a.fontPropertiesCache[d] = h
                }
                return h
            };
            a.prototype.wordWrap = function(a) {
                var d = "";
                a = a.split("\n");
                for (var h =
                        this._style.wordWrapWidth, f = 0; f < a.length; f++) {
                    for (var b = h, e = a[f].split(" "), m = 0; m < e.length; m++) {
                        var n = this.context.measureText(e[m]).width;
                        if (this._style.breakWords && n > h)
                            for (var n = e[m].split(""), l = 0; l < n.length; l++) {
                                var k = this.context.measureText(n[l]).width;
                                k > b ? (d += "\n" + n[l], b = h - k) : (0 === l && (d += " "), d += n[l], b -= k)
                            } else l = n + this.context.measureText(" ").width, 0 === m || l > b ? (0 < m && (d += "\n"), d += e[m], b = h - n) : (b -= l, d += " " + e[m])
                    }
                    f < a.length - 1 && (d += "\n")
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
                    var h, f, b, e, n;
                    h = this.canvas.width / this.resolution;
                    f = this.canvas.height / this.resolution;
                    if (a.fillGradientType === m.TEXT_GRADIENT.LINEAR_VERTICAL)
                        for (f = this.context.createLinearGradient(h / 2, 0, h / 2, f), b = (a.fill.length + 1) * d.length, h = e = 0; h < d.length; h++) {
                            e += 1;
                            for (var l = 0; l < a.fill.length; l++) n =
                                e / b, f.addColorStop(n, a.fill[l]), e++
                        } else
                            for (f = this.context.createLinearGradient(0, f / 2, h, f / 2), b = a.fill.length + 1, e = 1, h = 0; h < a.fill.length; h++) n = e / b, f.addColorStop(n, a.fill[h]), e++;
                    return f
                }
                return a.fill
            };
            a.prototype.destroy = function(a) {
                "boolean" == typeof a && (a = {
                    children: a
                });
                a = Object.assign({}, n, a);
                l.prototype.destroy.call(this, a);
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
            e, k) {
            function a(a) {
                this.styleID = 0;
                Object.assign(this, this._defaults, a)
            }

            function l(a) {
                if ("number" == typeof a) return f.hex2string(a);
                if (Array.isArray(a))
                    for (var d = 0; d < a.length; ++d) "number" == typeof a[d] && (a[d] = f.hex2string(a[d]));
                return a
            }
            k = b("../const");
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
                fillGradientType: k.TEXT_GRADIENT.LINEAR_VERTICAL,
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
                    h;
                for (h in this._defaults) d[h] = this[h];
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
                        a = l(a);
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
                        a = l(a);
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
                        a = l(a);
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
        106: [function(b, e, k) {
            function a(a,
                h, b, e) {
                l.call(this, null, b);
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
            var l = b("./BaseTexture"),
                f = b("../const");
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.resize = function(a, h) {
                a === this.width && h === this.height || (this.valid =
                    0 < a && 0 < h, this.width = a, this.height = h, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
            };
            a.prototype.destroy = function() {
                l.prototype.destroy.call(this, !0);
                this.renderer = null
            }
        }, {
            "../const": 43,
            "./BaseTexture": 107
        }],
        107: [function(b, e, k) {
            function a(a, h, b) {
                d.call(this);
                this.uid = l.uid();
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
            var l = b("../utils"),
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
                    var h = this;
                    a.onload = function() {
                        a.onload = null;
                        a.onerror = null;
                        h.isLoading && (h.isLoading = !1, h._sourceLoaded(), h.emit("loaded", h))
                    };
                    a.onerror = function() {
                        a.onload = null;
                        a.onerror = null;
                        h.isLoading && (h.isLoading = !1, h.emit("error", h))
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
                this.imageUrl ? (delete l.BaseTextureCache[this.imageUrl], delete l.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete l.BaseTextureCache[this.source._pixiId];
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
                    var e = l.BaseTextureCache[d];
                    if (!e) {
                        var m = new Image;
                        void 0 === f && 0 !== d.indexOf("data:") && (m.crossOrigin = h(d));
                        e = new a(m, b);
                        e.imageUrl = d;
                        m.src = d;
                        l.BaseTextureCache[d] = e;
                        e.resolution = l.getResolutionOfUrl(d)
                    }
                    return e
                };
            a.fromCanvas = function(d, h) {
                d._pixiId || (d._pixiId = "canvas_" + l.uid());
                var f = l.BaseTextureCache[d._pixiId];
                return f || (f = new a(d, h), l.BaseTextureCache[d._pixiId] = f), f
            }
        }, {
            "../const": 43,
            "../utils": 116,
            "../utils/determineCrossOrigin": 115,
            "bit-twiddle": 1,
            eventemitter3: 3
        }],
        108: [function(b,
            e, k) {
            function a(a, h, b, e, n) {
                if (this.legacyRenderer = null, !(a instanceof l)) {
                    var d = h;
                    e = e || 0;
                    n = n || 1;
                    console.warn("v4 RenderTexture now expects a new BaseRenderTexture. Please use RenderTexture.create(" + d + ", " + b + ")");
                    this.legacyRenderer = a;
                    h = null;
                    a = new l(d, b, e, n)
                }
                f.call(this, a, h);
                this.valid = !0;
                this._updateUvs()
            }
            var l = b("./BaseRenderTexture"),
                f = b("./Texture");
            a.prototype = Object.create(f.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.resize = function(a, h, f) {
                this.valid = 0 < a && 0 < h;
                this._frame.width =
                    this.orig.width = a;
                this._frame.height = this.orig.height = h;
                f || this.baseTexture.resize(a, h);
                this._updateUvs()
            };
            a.create = function(d, h, f, b) {
                return new a(new l(d, h, f, b))
            }
        }, {
            "./BaseRenderTexture": 106,
            "./Texture": 109
        }],
        109: [function(b, e, k) {
            function a(d, f, b, e, l) {
                if (h.call(this), this.noFrame = !1, f || (this.noFrame = !0, f = new m.Rectangle(0, 0, 1, 1)), d instanceof a && (d = d.baseTexture), this.baseTexture = d, this._frame = f, this.trim = e, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.orig = b || f, this._rotate = +(l || 0), !0 ===
                    l) this._rotate = 2;
                else if (0 !== this._rotate % 2) throw "attempt to use diamond-shaped UVs. If you are sure, set rotation manually";
                d.hasLoaded ? (this.noFrame && (f = new m.Rectangle(0, 0, d.width, d.height), d.on("update", this.onBaseTextureUpdated, this)), this.frame = f) : d.once("loaded", this.onBaseTextureLoaded, this);
                this._updateID = 0
            }
            var l = b("./BaseTexture"),
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
            a.fromImage = function(d, h, f) {
                var b = q.TextureCache[d];
                return b || (b = new a(l.fromImage(d, h, f)), q.TextureCache[d] = b), b
            };
            a.fromFrame = function(a) {
                var d = q.TextureCache[a];
                if (!d) throw Error('The frameId "' + a + '" does not exist in the texture cache');
                return d
            };
            a.fromCanvas = function(d, h) {
                return new a(l.fromCanvas(d, h))
            };
            a.fromVideo = function(d, h) {
                return "string" == typeof d ? a.fromVideoUrl(d, h) : new a(f.fromVideo(d, h))
            };
            a.fromVideoUrl = function(d, h) {
                return new a(f.fromUrl(d, h))
            };
            a.from = function(d) {
                if ("string" == typeof d) {
                    var h = q.TextureCache[d];
                    return h ? h : null !== d.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) ? a.fromVideoUrl(d) : a.fromImage(d)
                }
                return d instanceof HTMLCanvasElement ? a.fromCanvas(d) : d instanceof HTMLVideoElement ? a.fromVideo(d) : d instanceof l ? new a(l) : d
            };
            a.addTextureToCache =
                function(a, d) {
                    q.TextureCache[d] = a
                };
            a.removeTextureFromCache = function(a) {
                var d = q.TextureCache[a];
                return delete q.TextureCache[a], delete q.BaseTextureCache[a], d
            };
            a.EMPTY = new a(new l);
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
        110: [function(b, e, k) {
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
            var l = b("../math/GroupD8");
            a.prototype.set = function(a, d, h) {
                var f = d.width,
                    b = d.height;
                if (h) {
                    d = a.width / 2 / f;
                    var e = a.height / 2 / b,
                        f = a.x / f + d;
                    a = a.y / b + e;
                    h = l.add(h, l.NW);
                    this.x0 = f + d * l.uX(h);
                    this.y0 = a + e * l.uY(h);
                    h = l.add(h, 2);
                    this.x1 = f + d * l.uX(h);
                    this.y1 = a + e * l.uY(h);
                    h = l.add(h, 2);
                    this.x2 = f + d * l.uX(h);
                    this.y2 = a + e * l.uY(h);
                    h = l.add(h, 2);
                    this.x3 = f + d * l.uX(h);
                    this.y3 = a + e * l.uY(h)
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
        111: [function(b, e, k) {
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

            function l(a, d) {
                d || (d = "video/" + a.substr(a.lastIndexOf(".") + 1));
                var h = document.createElement("source");
                return h.src =
                    a, h.type = d, h
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
            a.fromVideo = function(h, f) {
                h._pixiId ||
                    (h._pixiId = "video_" + d.uid());
                var b = d.BaseTextureCache[h._pixiId];
                return b || (b = new a(h, f), d.BaseTextureCache[h._pixiId] = b), b
            };
            a.fromUrl = function(d, f) {
                var h = document.createElement("video");
                if (Array.isArray(d))
                    for (var b = 0; b < d.length; ++b) h.appendChild(l(d[b].src || d[b], d[b].mime));
                else h.appendChild(l(d.src || d, d.mime));
                return h.load(), h.play(), a.fromVideo(h, f)
            };
            a.fromUrls = a.fromUrl
        }, {
            "../utils": 116,
            "./BaseTexture": 107
        }],
        112: [function(b, e, k) {
            function a() {
                var a = this;
                this._tick = function(h) {
                    a._requestId = null;
                    a.started && (a.update(h), a.started && null === a._requestId && a._emitter.listeners(d, !0) && (a._requestId = requestAnimationFrame(a._tick)))
                };
                this._emitter = new f;
                this._requestId = null;
                this._maxElapsedMS = 100;
                this.autoStart = !1;
                this.deltaTime = 1;
                this.elapsedMS = 1 / l.TARGET_FPMS;
                this.lastTime = 0;
                this.speed = 1;
                this.started = !1
            }
            var l = b("../const"),
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
                            1 / Math.min(Math.max(0, a) / 1E3, l.TARGET_FPMS)
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
                var h;
                a = a || performance.now();
                a > this.lastTime ?
                    (h = this.elapsedMS = a - this.lastTime, h > this._maxElapsedMS && (h = this._maxElapsedMS), this.deltaTime = h * l.TARGET_FPMS * this.speed, this._emitter.emit(d, this.deltaTime)) : this.deltaTime = this.elapsedMS = 0;
                this.lastTime = a
            };
            e.exports = a
        }, {
            "../const": 43,
            eventemitter3: 3
        }],
        113: [function(b, e, k) {
            b = b("./Ticker");
            k = new b;
            k.autoStart = !0;
            e.exports = {
                shared: k,
                Ticker: b
            }
        }, {
            "./Ticker": 112
        }],
        114: [function(b, e, k) {
            e.exports = function(a) {
                a *= 6;
                for (var b = new Uint16Array(a), f = 0, d = 0; f < a; f += 6, d += 4) b[f + 0] = d + 0, b[f + 1] = d + 1, b[f + 2] = d + 2, b[f + 3] =
                    d + 0, b[f + 4] = d + 2, b[f + 5] = d + 3;
                return b
            }
        }, {}],
        115: [function(b, e, k) {
            var a, l = b("url");
            e.exports = function(f, d) {
                if (0 === f.indexOf("data:")) return "";
                d = d || window.location;
                a || (a = document.createElement("a"));
                a.href = f;
                f = l.parse(a.href);
                var h = !f.port && "" === d.port || f.port === d.port;
                return f.hostname === d.hostname && h && f.protocol === d.protocol ? "" : "anonymous"
            }
        }, {
            url: 28
        }],
        116: [function(b, e, k) {
            var a = b("../const"),
                l = e.exports = {
                    _uid: 0,
                    _saidHello: !1,
                    EventEmitter: b("eventemitter3"),
                    pluginTarget: b("./pluginTarget"),
                    uid: function() {
                        return ++l._uid
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
                        l._saidHello || (-1 < navigator.userAgent.toLowerCase().indexOf("chrome") ? window.console.log.apply(console, ["\n %c %c %c Pixi.js " + a.VERSION + " - \u2730 " +
                            f + " \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"
                        ]) : window.console && window.console.log("Pixi.js " +
                            a.VERSION + " - " + f + " - http://www.pixijs.com/"), l._saidHello = !0)
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
        117: [function(b, e, k) {
            var a = b("ismobilejs");
            e.exports = function(b) {
                return a.tablet || a.phone ? 2 : b
            }
        }, {
            ismobilejs: 4
        }],
        118: [function(b, e, k) {
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
        119: [function(b, e, k) {
            var a = b("./core"),
                l = b("./mesh"),
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
                        return l.Mesh
                    }
                },
                Rope: {
                    get: function() {
                        return l.Rope
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
                            h = -1;
                        this._fontSize = 26;
                        for (a = 0; a < d.length; ++a)
                            if (d[a].match(/(px|pt|em|%)/)) {
                                h = a;
                                this._fontSize = d[a];
                                break
                            }
                        this._fontWeight = "normal";
                        for (a = 0; a < h; ++a)
                            if (d[a].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                                this._fontWeight = d[a];
                                break
                            }
                        if (-1 < h && h < d.length - 1) {
                            this._fontFamily = "";
                            for (a = h + 1; a < d.length; ++a) this._fontFamily += d[a] + " ";
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
        120: [function(b, e, k) {
            function a(a) {
                this.renderer = a;
                a.extract = this
            }
            var l = b("../../core"),
                f = new l.Rectangle;
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
                var d, b, e, n, k = this.renderer;
                a && (n = a instanceof l.RenderTexture ? a : k.generateTexture(a));
                n ? (d = n.baseTexture._canvasRenderTarget.context, b = n.baseTexture._canvasRenderTarget.resolution, e = n.frame) : (d = k.rootContext, b = k.rootResolution, e = f, e.width = this.renderer.width, e.height = this.renderer.height);
                n = e.width * b;
                k = e.height *
                    b;
                a = new l.CanvasRenderTarget(n, k);
                d = d.getImageData(e.x * b, e.y * b, n, k);
                return a.context.putImageData(d, 0, 0), a.canvas
            };
            a.prototype.pixels = function(a) {
                var d, b, e, n, k = this.renderer;
                return a && (n = a instanceof l.RenderTexture ? a : k.generateTexture(a)), n ? (d = n.baseTexture._canvasRenderTarget.context, b = n.baseTexture._canvasRenderTarget.resolution, e = n.frame) : (d = k.rootContext, b = k.rootResolution, e = f, e.width = k.width, e.height = k.height), d.getImageData(0, 0, e.width * b, e.height * b).data
            };
            a.prototype.destroy = function() {
                this.renderer =
                    this.renderer.extract = null
            };
            l.CanvasRenderer.registerPlugin("extract", a)
        }, {
            "../../core": 62
        }],
        121: [function(b, e, k) {
            e.exports = {
                webGL: b("./webgl/WebGLExtract"),
                canvas: b("./canvas/CanvasExtract")
            }
        }, {
            "./canvas/CanvasExtract": 120,
            "./webgl/WebGLExtract": 122
        }],
        122: [function(b, e, k) {
            function a(a) {
                this.renderer = a;
                a.extract = this
            }
            var l = b("../../core"),
                f = new l.Rectangle;
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
                var d, b, e, n, k = this.renderer,
                    t = !1;
                a && (n = a instanceof l.RenderTexture ? a : this.renderer.generateTexture(a));
                n ? (d = n.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], b = d.resolution, e = n.frame, t = !1) : (d = this.renderer.rootRenderTarget, b = d.resolution, t = !0, e = f, e.width = d.size.width, e.height = d.size.height);
                var u = e.width * b;
                a = e.height * b;
                n = new l.CanvasRenderTarget(u, a);
                d && (k.bindRenderTarget(d), d = new Uint8Array(4 * u * a), k = k.gl, k.readPixels(e.x * b, e.y * b, u, a, k.RGBA, k.UNSIGNED_BYTE,
                    d), b = n.context.getImageData(0, 0, u, a), b.data.set(d), n.context.putImageData(b, 0, 0), t && (n.context.scale(1, -1), n.context.drawImage(n.canvas, 0, -a)));
                return n.canvas
            };
            a.prototype.pixels = function(a) {
                var d, b, e, n, k = this.renderer;
                a && (n = a instanceof l.RenderTexture ? a : this.renderer.generateTexture(a));
                n ? (d = n.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], b = d.resolution, e = n.frame) : (d = this.renderer.rootRenderTarget, b = d.resolution, e = f, e.width = d.size.width, e.height = d.size.height);
                a = e.width * b;
                n = e.height *
                    b;
                var t = new Uint8Array(4 * a * n);
                d && (k.bindRenderTarget(d), d = k.gl, d.readPixels(e.x * b, e.y * b, a, n, d.RGBA, d.UNSIGNED_BYTE, t));
                return t
            };
            a.prototype.destroy = function() {
                this.renderer = this.renderer.extract = null
            };
            l.WebGLRenderer.registerPlugin("extract", a)
        }, {
            "../../core": 62
        }],
        123: [function(b, e, k) {
            function a(a, h) {
                l.Container.call(this);
                h = h || {};
                this.textHeight = this.textWidth = 0;
                this._glyphs = [];
                this._font = {
                    tint: void 0 !== h.tint ? h.tint : 16777215,
                    align: h.align || "left",
                    name: null,
                    size: 0
                };
                this.font = h.font;
                this._text = a;
                this.maxLineHeight = this.maxWidth = 0;
                this._anchor = new f(this.makeDirty, this, 0, 0);
                this.dirty = !1;
                this.updateText()
            }
            var l = b("../core"),
                f = b("../core/math/ObservablePoint");
            a.prototype = Object.create(l.Container.prototype);
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
                for (var d = a.fonts[this._font.name], h = new l.Point, f = null, b = [], e = 0, k = 0, t = [], u = 0, w = this._font.size / d.size, v = -1, y = 0, A = 0, B = 0; B < this.text.length; B++) {
                    var z = this.text.charCodeAt(B);
                    if (/(\s)/.test(this.text.charAt(B)) && (v = B, y = e), /(?:\r\n|\r|\n)/.test(this.text.charAt(B))) t.push(e), k = Math.max(k, e), u++, h.x = 0, h.y += d.lineHeight, f = null;
                    else if (-1 !== v && 0 < this.maxWidth && h.x * w > this.maxWidth) l.utils.removeItems(b,
                        v, B - v), B = v, v = -1, t.push(y), k = Math.max(k, y), u++, h.x = 0, h.y += d.lineHeight, f = null;
                    else {
                        var x = d.chars[z];
                        x && (f && x.kerning[f] && (h.x += x.kerning[f]), b.push({
                            texture: x.texture,
                            line: u,
                            charCode: z,
                            position: new l.Point(h.x + x.xOffset, h.y + x.yOffset)
                        }), e = h.x + (x.texture.width + x.xOffset), h.x += x.xAdvance, A = Math.max(A, x.yOffset + x.texture.height), f = z)
                    }
                }
                t.push(e);
                k = Math.max(k, e);
                f = [];
                for (B = 0; B <= u; B++) e = 0, "right" === this._font.align ? e = k - t[B] : "center" === this._font.align && (e = (k - t[B]) / 2), f.push(e);
                t = b.length;
                u = this.tint;
                for (B =
                    0; B < t; B++)(e = this._glyphs[B]) ? e.texture = b[B].texture : (e = new l.Sprite(b[B].texture), this._glyphs.push(e)), e.position.x = (b[B].position.x + f[b[B].line]) * w, e.position.y = b[B].position.y * w, e.scale.x = e.scale.y = w, e.tint = u, e.parent || this.addChild(e);
                for (B = t; B < this._glyphs.length; ++B) this.removeChild(this._glyphs[B]);
                if (this.textWidth = k * w, this.textHeight = (h.y + d.lineHeight) * w, 0 !== this.anchor.x || 0 !== this.anchor.y)
                    for (B = 0; B < t; B++) this._glyphs[B].x -= this.textWidth * this.anchor.x, this._glyphs[B].y -= this.textHeight *
                        this.anchor.y;
                this.maxLineHeight = A * w
            };
            a.prototype.updateTransform = function() {
                this.validate();
                this.containerUpdateTransform()
            };
            a.prototype.getLocalBounds = function() {
                return this.validate(), l.Container.prototype.getLocalBounds.call(this)
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
        124: [function(b, e, k) {
            function a(a) {
                l.Sprite.call(this, a[0] instanceof l.Texture ?
                    a[0] : a[0].texture);
                this._durations = this._textures = null;
                this.textures = a;
                this.animationSpeed = 1;
                this.loop = !0;
                this.onComplete = null;
                this._currentTime = 0;
                this.playing = !1
            }
            var l = b("../core");
            a.prototype = Object.create(l.Sprite.prototype);
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
                        if (a[0] instanceof l.Texture) this._textures = a, this._durations = null;
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
                this.playing && (this.playing = !1, l.ticker.shared.remove(this.update, this))
            };
            a.prototype.play = function() {
                this.playing || (this.playing = !0, l.ticker.shared.add(this.update, this))
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
                    for (var h = this._currentTime % 1 * this._durations[this.currentFrame], h = h + d / 60 * 1E3; 0 > h;) this._currentTime--, h += this._durations[this.currentFrame];
                    a = Math.sign(this.animationSpeed * a);
                    for (this._currentTime = Math.floor(this._currentTime); h >= this._durations[this.currentFrame];) h -= this._durations[this.currentFrame] *
                        a, this._currentTime += a;
                    this._currentTime += h / this._durations[this.currentFrame]
                } else this._currentTime += d;
                0 > this._currentTime && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : (this._texture = this._textures[this.currentFrame], this._textureID = -1)
            };
            a.prototype.destroy = function() {
                this.stop();
                l.Sprite.prototype.destroy.call(this)
            };
            a.fromFrames = function(f) {
                for (var d = [], h = 0; h < f.length; ++h) d.push(l.Texture.fromFrame(f[h]));
                return new a(d)
            };
            a.fromImages = function(f) {
                for (var d = [], h = 0; h < f.length; ++h) d.push(l.Texture.fromImage(f[h]));
                return new a(d)
            }
        }, {
            "../core": 62
        }],
        125: [function(b, e, k) {
            function a(a, d, h) {
                l.Sprite.call(this, a);
                this.tileScale = new l.Point(1, 1);
                this.tilePosition = new l.Point(0, 0);
                this._width = d || 100;
                this._height = h || 100;
                this._uvs = new l.TextureUvs;
                this._canvasPattern = null;
                this._glDatas = []
            }
            var l = b("../core"),
                f = new l.Point,
                d = b("../core/textures/Texture"),
                h =
                b("../core/sprites/canvas/CanvasTinter"),
                m = b("./webgl/TilingShader"),
                q = new Float32Array(4);
            a.prototype = Object.create(l.Sprite.prototype);
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
                    var h = a.gl,
                        f =
                        this._glDatas[a.CONTEXT_UID];
                    f || (f = {
                        shader: new m(h),
                        quad: new l.Quad(h)
                    }, this._glDatas[a.CONTEXT_UID] = f, f.quad.initVao(f.shader));
                    h = f.quad.vertices;
                    h[0] = h[6] = this._width * -this.anchor.x;
                    h[1] = h[3] = this._height * -this.anchor.y;
                    h[2] = h[4] = this._width * (1 - this.anchor.x);
                    h[5] = h[7] = this._height * (1 - this.anchor.y);
                    f.quad.upload();
                    a.bindShader(f.shader);
                    var b = d._uvs,
                        h = d._frame.width,
                        e = d._frame.height,
                        n = d.baseTexture.width,
                        d = d.baseTexture.height,
                        k = f.shader.uniforms.uPixelSize;
                    k[0] = 1 / n;
                    k[1] = 1 / d;
                    f.shader.uniforms.uPixelSize =
                        k;
                    k = f.shader.uniforms.uFrame;
                    k[0] = b.x0;
                    k[1] = b.y0;
                    k[2] = b.x1 - b.x0;
                    k[3] = b.y2 - b.y0;
                    f.shader.uniforms.uFrame = k;
                    b = f.shader.uniforms.uTransform;
                    b[0] = this.tilePosition.x % (h * this.tileScale.x) / this._width;
                    b[1] = this.tilePosition.y % (e * this.tileScale.y) / this._height;
                    b[2] = n / this._width * this.tileScale.x;
                    b[3] = d / this._height * this.tileScale.y;
                    f.shader.uniforms.uTransform = b;
                    f.shader.uniforms.translationMatrix = this.worldTransform.toArray(!0);
                    l.utils.hex2rgb(this.tint, q);
                    q[3] = this.worldAlpha;
                    f.shader.uniforms.uColor =
                        q;
                    a.bindTexture(this._texture, 0);
                    a.state.setBlendMode(this.blendMode);
                    f.quad.draw()
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
                        k = this.tilePosition.y / this.tileScale.y % d._frame.height;
                    if (!this._canvasPattern) {
                        var q = new l.CanvasRenderTarget(d._frame.width, d._frame.height);
                        16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint =
                            this.tint, this.tintedTexture = h.getTintedTexture(this, this.tint)), q.context.drawImage(this.tintedTexture, 0, 0)) : q.context.drawImage(m.source, -d._frame.x, -d._frame.y);
                        this._canvasPattern = q.context.createPattern(q.canvas, "repeat")
                    }
                    f.globalAlpha = this.worldAlpha;
                    f.setTransform(b.a * e, b.b * e, b.c * e, b.d * e, b.tx * e, b.ty * e);
                    f.scale(this.tileScale.x, this.tileScale.y);
                    f.translate(n + this.anchor.x * -this._width, k + this.anchor.y * -this._height);
                    d = a.blendModes[this.blendMode];
                    d !== a.context.globalCompositeOperation && (f.globalCompositeOperation =
                        d);
                    f.fillStyle = this._canvasPattern;
                    f.fillRect(-n, -k, this._width / this.tileScale.x, this._height / this.tileScale.y)
                }
            };
            a.prototype.getBounds = function() {
                var a, d, h, f, b = this._width;
                f = this._height;
                var e = b * (1 - this.anchor.x);
                a = b * -this.anchor.x;
                h = f * (1 - this.anchor.y);
                var m = f * -this.anchor.y;
                f = this.worldTransform;
                var l = f.a,
                    k = f.b,
                    q = f.c,
                    x = f.d,
                    F = f.tx,
                    G = f.ty;
                d = l * a + q * m + F;
                f = x * m + k * a + G;
                var b = l * e + q * m + F,
                    m = x * m + k * e + G,
                    E = l * e + q * h + F,
                    e = x * h + k * e + G,
                    l = l * a + q * h + F,
                    k = x * h + k * a + G;
                a = d;
                a = b < a ? b : a;
                a = E < a ? E : a;
                a = l < a ? l : a;
                h = f;
                h = m < h ? m : h;
                h = e < h ? e : h;
                h =
                    k < h ? k : h;
                d = b > d ? b : d;
                d = E > d ? E : d;
                f = m > f ? m : f;
                f = e > f ? e : f;
                b = this._bounds;
                return b.x = a, b.width = (l > d ? l : d) - a, b.y = h, b.height = (k > f ? k : f) - h, this._currentBounds = b, b
            };
            a.prototype.containsPoint = function(a) {
                this.worldTransform.applyInverse(a, f);
                var d;
                a = this._width;
                var h = this._height,
                    b = -a * this.anchor.x;
                return f.x > b && f.x < b + a && (d = -h * this.anchor.y, f.y > d && f.y < d + h)
            };
            a.prototype.destroy = function() {
                l.Sprite.prototype.destroy.call(this);
                this._uvs = this.tilePosition = this._tileScaleOffset = this.tileScale = null
            };
            a.from = function(h, f,
                b) {
                return new a(d.from(h), f, b)
            };
            a.fromFrame = function(d, h, f) {
                var b = l.utils.TextureCache[d];
                if (!b) throw Error('The frameId "' + d + '" does not exist in the texture cache ' + this);
                return new a(b, h, f)
            };
            a.fromImage = function(d, h, f, b, e) {
                return new a(l.Texture.fromImage(d, b, e), h, f)
            }
        }, {
            "../core": 62,
            "../core/sprites/canvas/CanvasTinter": 100,
            "../core/textures/Texture": 109,
            "./webgl/TilingShader": 130
        }],
        126: [function(b, e, k) {
                var a = b("../core");
                b = a.DisplayObject;
                var l = new a.Matrix;
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
                        var h = this.alpha;
                        this.alpha = 1;
                        d.currentRenderer.flush();
                        var f = this.getLocalBounds().clone();
                        this._filters && f.pad(this._filters[0].padding);
                        var b = d._activeRenderTarget,
                            e = d.filterManager.filterStack,
                            k = a.RenderTexture.create(0 | f.width, 0 | f.height);
                        l.tx = -f.x;
                        l.ty = -f.y;
                        this.transform.worldTransform.identity();
                        this.renderWebGL =
                            this._cacheData.originalRenderWebGL;
                        d.render(this, k, !0, l, !0);
                        d.bindRenderTarget(b);
                        d.filterManager.filterStack = e;
                        this.renderWebGL = this._renderCachedWebGL;
                        this.updateTransform = this.displayObjectUpdateTransform;
                        this.filterArea = this._mask = null;
                        d = new a.Sprite(k);
                        d.transform.worldTransform = this.transform.worldTransform;
                        d.anchor.x = -(f.x / f.width);
                        d.anchor.y = -(f.y / f.height);
                        d.alpha = h;
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
                        var h = this.getLocalBounds(),
                            f = this.alpha;
                        this.alpha = 1;
                        var b = d.context,
                            e = new a.RenderTexture.create(0 |
                                h.width, 0 | h.height);
                        this.transform.worldTransform.copy(l);
                        l.invert();
                        l.tx -= h.x;
                        l.ty -= h.y;
                        this.renderCanvas = this._cacheData.originalRenderCanvas;
                        d.render(this, e, !0, l, !1);
                        d.context = b;
                        this.renderCanvas = this._renderCachedCanvas;
                        this._calculateBounds = this._calculateCachedBounds;
                        this.filterArea = this._mask = null;
                        d = new a.Sprite(e);
                        d.transform.worldTransform = this.transform.worldTransform;
                        d.anchor.x = -(h.x / h.width);
                        d.anchor.y = -(h.y / h.height);
                        d._bounds = this._bounds;
                        d.alpha = f;
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
        127: [function(b, e, k) {
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
        128: [function(b, e, k) {
            var a = b("../core");
            a.DisplayObject.prototype.getGlobalPosition = function(b) {
                return b = b || new a.Point, this.parent ? (this.displayObjectUpdateTransform(), b.x = this.worldTransform.tx, b.y = this.worldTransform.ty) : (b.x = this.position.x,
                    b.y = this.position.y), b
            }
        }, {
            "../core": 62
        }],
        129: [function(b, e, k) {
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
        130: [function(b, e, k) {
            function a(a) {
                l.call(this, a, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\n\nuniform vec4 uFrame;\nuniform vec4 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vec2 coord = aTextureCoord;\n    coord -= uTransform.xy;\n    coord /= uTransform.zw;\n    vTextureCoord = coord;\n}\n",
                    "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform vec4 uFrame;\nuniform vec2 uPixelSize;\n\nvoid main(void)\n{\n\n   \tvec2 coord = mod(vTextureCoord, uFrame.zw);\n   \tcoord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);\n   \tcoord += uFrame.xy;\n\n   \tvec4 sample = texture2D(uSampler, coord);\n  \tvec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n   \tgl_FragColor = sample * color ;\n}\n")
            }
            var l = b("../../core/Shader");
            a.prototype =
                Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../core/Shader": 42
        }],
        131: [function(b, e, k) {
            function a(a, b, e) {
                l.Filter.call(this);
                this.blurXFilter = new f;
                this.blurYFilter = new d;
                this.resolution = 1;
                this.padding = 0;
                this.resolution = e || 1;
                this.quality = b || 4;
                this.blur = a || 8
            }
            var l = b("../../core"),
                f = b("./BlurXFilter"),
                d = b("./BlurYFilter");
            a.prototype = Object.create(l.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.apply = function(a, d, f) {
                var h = a.getRenderTarget(!0);
                this.blurXFilter.apply(a,
                    d, h, !0);
                this.blurYFilter.apply(a, h, f, !1);
                a.returnRenderTarget(h)
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
        132: [function(b, e, k) {
            function a(a, h, b) {
                var e = f(5, !0),
                    m = d(5);
                l.Filter.call(this, e, m);
                this.resolution = b || 1;
                this._quality = 0;
                this.quality = h || 4;
                this.strength =
                    a || 8;
                this.firstRun = !0
            }
            var l = b("../../core"),
                f = b("./generateBlurVertSource"),
                d = b("./generateBlurFragSource"),
                h = b("./getMaxBlurKernelSize");
            a.prototype = Object.create(l.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.apply = function(a, b, e, l) {
                if (this.firstRun) {
                    var m = h(a.renderer.gl);
                    this.vertexSrc = f(m, !0);
                    this.fragmentSrc = d(m);
                    this.firstRun = !1
                }
                if (this.uniforms.strength = 1 / e.size.width * (e.size.width / b.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes,
                    1 === this.passes) a.applyFilter(this, b, e, l);
                else {
                    for (var n = m = a.getRenderTarget(!0), k = 0; k < this.passes - 1; k++) {
                        a.applyFilter(this, b, n, !0);
                        var q = n,
                            n = b;
                        b = q
                    }
                    a.applyFilter(this, b, e, l);
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
        133: [function(b, e, k) {
            function a(a, h, b) {
                var e = f(5, !1),
                    m = d(5);
                l.Filter.call(this, e, m);
                this.resolution = b || 1;
                this._quality = 0;
                this.quality = h || 4;
                this.strength = a || 8;
                this.firstRun = !0
            }
            var l = b("../../core"),
                f = b("./generateBlurVertSource"),
                d = b("./generateBlurFragSource"),
                h = b("./getMaxBlurKernelSize");
            a.prototype = Object.create(l.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.apply = function(a, b, e, l) {
                if (this.firstRun) {
                    var m = h(a.renderer.gl);
                    this.vertexSrc = f(m, !1);
                    this.fragmentSrc = d(m);
                    this.firstRun = !1
                }
                if (this.uniforms.strength = 1 / e.size.height * (e.size.height / b.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) a.applyFilter(this, b, e, l);
                else {
                    for (var n = m = a.getRenderTarget(!0), k = 0; k < this.passes - 1; k++) {
                        a.applyFilter(this, b, n, !0);
                        var q = n,
                            n = b;
                        b = q
                    }
                    a.applyFilter(this, b, e, l);
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
        134: [function(b, e, k) {
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
                for (var f, d = a[b], h = d.length, e = "varying vec2 vBlurTexCoords[%size%];\nuniform sampler2D uSampler;\nvoid main(void)\n{\n\tgl_FragColor = vec4(0.0);\n\t%blur%\n}", l = "", n = 0; n < b; n++) {
                    var k = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", n);
                    f = n;
                    n >= h && (f = b - n - 1);
                    k = k.replace("%value%", d[f]);
                    l += k;
                    l += "\n"
                }
                return e = e.replace("%blur%", l), e.replace("%size%", b)
            }
        }, {}],
        135: [function(b, e, k) {
            e.exports =
                function(a, b) {
                    var f, d = Math.ceil(a / 2),
                        h = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform float strength;\nuniform mat3 projectionMatrix;\nvarying vec2 vBlurTexCoords[%size%];\nvoid main(void)\n{\ngl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n%blur%\n}",
                        e = "";
                    f = b ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
                    for (var l = 0; l < a; l++) var n =
                        f.replace("%index%", l),
                        n = n.replace("%sampleIndex%", l - (d - 1) + ".0"),
                        e = e + n,
                        e = e + "\n";
                    return h = h.replace("%blur%", e), h.replace("%size%", a)
                }
        }, {}],
        136: [function(b, e, k) {
            e.exports = function(a) {
                a = a.getParameter(a.MAX_VARYING_VECTORS);
                for (var b = 15; b > a;) b -= 2;
                return b
            }
        }, {}],
        137: [function(b, e, k) {
            function a() {
                l.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                    "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4] * c.a;\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9] * c.a;\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14] * c.a;\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19] * c.a;\n\n//    gl_FragColor = vec4(m[0]);\n}\n");
                this.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
            }
            var l = b("../../core");
            a.prototype = Object.create(l.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype._loadMatrix = function(a, d) {
                var h = a;
                d && (this._multiply(h, this.uniforms.m, a), h = this._colorMatrix(h));
                this.uniforms.m = h
            };
            a.prototype._multiply = function(a, d, h) {
                return a[0] = d[0] * h[0] + d[1] * h[5] + d[2] * h[10] + d[3] * h[15], a[1] = d[0] * h[1] + d[1] * h[6] + d[2] * h[11] + d[3] * h[16], a[2] = d[0] * h[2] + d[1] * h[7] + d[2] * h[12] + d[3] * h[17], a[3] = d[0] * h[3] + d[1] * h[8] +
                    d[2] * h[13] + d[3] * h[18], a[4] = d[0] * h[4] + d[1] * h[9] + d[2] * h[14] + d[3] * h[19], a[5] = d[5] * h[0] + d[6] * h[5] + d[7] * h[10] + d[8] * h[15], a[6] = d[5] * h[1] + d[6] * h[6] + d[7] * h[11] + d[8] * h[16], a[7] = d[5] * h[2] + d[6] * h[7] + d[7] * h[12] + d[8] * h[17], a[8] = d[5] * h[3] + d[6] * h[8] + d[7] * h[13] + d[8] * h[18], a[9] = d[5] * h[4] + d[6] * h[9] + d[7] * h[14] + d[8] * h[19], a[10] = d[10] * h[0] + d[11] * h[5] + d[12] * h[10] + d[13] * h[15], a[11] = d[10] * h[1] + d[11] * h[6] + d[12] * h[11] + d[13] * h[16], a[12] = d[10] * h[2] + d[11] * h[7] + d[12] * h[12] + d[13] * h[17], a[13] = d[10] * h[3] + d[11] * h[8] + d[12] * h[13] + d[13] *
                    h[18], a[14] = d[10] * h[4] + d[11] * h[9] + d[12] * h[14] + d[13] * h[19], a[15] = d[15] * h[0] + d[16] * h[5] + d[17] * h[10] + d[18] * h[15], a[16] = d[15] * h[1] + d[16] * h[6] + d[17] * h[11] + d[18] * h[16], a[17] = d[15] * h[2] + d[16] * h[7] + d[17] * h[12] + d[18] * h[17], a[18] = d[15] * h[3] + d[16] * h[8] + d[17] * h[13] + d[18] * h[18], a[19] = d[15] * h[4] + d[16] * h[9] + d[17] * h[14] + d[18] * h[19], a
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
                var h = Math.cos(a),
                    b = Math.sin(a),
                    f = Math.sqrt,
                    e = 1 / 3,
                    f = f(e);
                this._loadMatrix([h + (1 - h) * e, e * (1 - h) - f * b, e * (1 - h) + f * b, 0, 0, e * (1 - h) + f * b, h + e * (1 - h), e * (1 - h) - f * b, 0, 0, e * (1 - h) - f * b, e * (1 -
                    h) + f * b, h + e * (1 - h), 0, 0, 0, 0, 0, 1, 0], d)
            };
            a.prototype.contrast = function(a, d) {
                var h = (a || 0) + 1,
                    b = -128 * (h - 1);
                this._loadMatrix([h, 0, 0, 0, b, 0, h, 0, 0, b, 0, 0, h, 0, b, 0, 0, 0, 1, 0], d)
            };
            a.prototype.saturate = function(a, d) {
                var h = 2 * (a || 0) / 3 + 1,
                    b = -.5 * (h - 1);
                this._loadMatrix([h, b, b, 0, 0, b, h, b, 0, 0, b, b, h, 0, 0, 0, 0, 0, 1, 0], d)
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
            a.prototype.colorTone = function(a, d, h, b, e) {
                h = h || 16770432;
                b = b || 3375104;
                var f = (h >> 16 & 255) / 255,
                    m = (h >> 8 & 255) / 255;
                h = (255 & h) / 255;
                var l = (b >> 16 & 255) / 255,
                    k = (b >> 8 & 255) / 255;
                b = (255 & b) / 255;
                this._loadMatrix([.3, .59, .11, 0, 0, f, m, h, a || .2, 0, l, k, b, d || .15, 0, f - l, m - k, h - b, 0, 0], e)
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
        138: [function(b, e, k) {
            function a(a, d) {
                var h = new l.Matrix;
                a.renderable = !1;
                l.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}",
                    "#define GLSLIFY 1\nvarying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n");
                this.maskSprite = a;
                this.maskMatrix = h;
                this.uniforms.mapSampler =
                    a.texture;
                this.uniforms.filterMatrix = h.toArray(!0);
                this.uniforms.scale = {
                    x: 1,
                    y: 1
                };
                null !== d && void 0 !== d || (d = 20);
                this.scale = new l.Point(d, d)
            }
            var l = b("../../core");
            a.prototype = Object.create(l.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.apply = function(a, d, h) {
                var b = 1 / h.destinationFrame.width * (h.size.width / d.size.width);
                this.uniforms.filterMatrix = a.calculateSpriteMatrix(this.maskMatrix, this.maskSprite);
                this.uniforms.scale.x = this.scale.x * b;
                this.uniforms.scale.y = this.scale.y * b;
                a.applyFilter(this,
                    d, h)
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
        139: [function(b, e, k) {
            function a() {
                l.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}",
                    '#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n  \tvec2 fragCoord = vTextureCoord * filterArea.xy;\n\n  \tvec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n  \tgl_FragColor = color;\n}\n')
            }
            var l = b("../../core");
            a.prototype = Object.create(l.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../core": 62
        }],
        140: [function(b, e, k) {
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
        141: [function(b, e, k) {
            function a() {
                l.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                    "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(gl_FragCoord.xy) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n");
                this.noise = .5
            }
            var l =
                b("../../core");
            a.prototype = Object.create(l.Filter.prototype);
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
        142: [function(b, e, k) {
            function a() {
                l.Filter.call(this, "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                    "#define GLSLIFY 1\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n");
                this.glShaderKey = "void"
            }
            var l = b("../../core");
            a.prototype = Object.create(l.Filter.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../core": 62
        }],
        143: [function(b, e, k) {
            function a() {
                this.global = new l.Point;
                this.originalEvent = this.target = null
            }
            var l = b("../core");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.getLocalPosition = function(a,
                d, h) {
                return a.worldTransform.applyInverse(h || this.global, d)
            }
        }, {
            "../core": 62
        }],
        144: [function(b, e, k) {
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
                this._tempPoint = new l.Point;
                this.resolution = 1;
                this.setTargetElement(this.renderer.view, this.renderer.resolution)
            }
            var l = b("../core"),
                f = b("./InteractionData"),
                d = b("eventemitter3");
            Object.assign(l.DisplayObject.prototype,
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
                this.interactionDOMElement && (l.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none"), window.document.addEventListener("mousemove",
                    this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onMouseOver, !0), this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup",
                    this.onMouseUp, !0), this.eventsAdded = !0)
            };
            a.prototype.removeEvents = function() {
                this.interactionDOMElement && (l.ticker.shared.remove(this.update), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = ""), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout",
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
            a.prototype.dispatchEvent = function(a, d, b) {
                b.stopped || (b.target = a, b.type = d, a.emit(d, b), a[d] &&
                    a[d](b))
            };
            a.prototype.mapPositionToPoint = function(a, d, b) {
                var h;
                h = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                a.x = this.interactionDOMElement.width / h.width * (d - h.left) / this.resolution;
                a.y = this.interactionDOMElement.height / h.height * (b - h.top) / this.resolution
            };
            a.prototype.processInteractive = function(a, d, b, f, e) {
                if (!d || !d.visible) return !1;
                var h = !1,
                    m = e = d.interactive || e;
                if (d.hitArea && (m = !1), f && d._mask && (d._mask.containsPoint(a) || (f = !1)), f && d.filterArea && (d.filterArea.contains(a.x, a.y) || (f = !1)), d.interactiveChildren)
                    for (var l = d.children, n = l.length - 1; 0 <= n; n--) {
                        var k = l[n];
                        this.processInteractive(a, k, b, f, m) && k.parent && (h = !0, f = m = !1)
                    }
                return e && (f && !h && (d.hitArea ? (d.worldTransform.applyInverse(a, this._tempPoint), h = d.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : d.containsPoint && (h = d.containsPoint(a))), d.interactive && b(d, h)), h
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
                var h = this.mouse.originalEvent,
                    h = 2 === h.button || 3 === h.which;
                d && (a[h ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(a, h ? "rightdown" : "mousedown",
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
                var h = this.mouse.originalEvent,
                    b = (h = 2 === h.button || 3 === h.which) ? "_isRightDown" : "_isLeftDown";
                d ? (this.dispatchEvent(a, h ? "rightup" : "mouseup", this.eventData), a[b] && (a[b] = !1, this.dispatchEvent(a, h ? "rightclick" : "click", this.eventData))) : a[b] && (a[b] = !1, this.dispatchEvent(a, h ? "rightupoutside" : "mouseupoutside", this.eventData))
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
                for (var d = a.changedTouches, h = d.length, b = 0; b < h; b++) {
                    var f = this.getTouchData(d[b]);
                    f.originalEvent = a;
                    this.eventData.data = f;
                    this.eventData.stopped = !1;
                    this.processInteractive(f.global, this.renderer._lastObjectRendered, this.processTouchStart, !0);
                    this.emit("touchstart",
                        this.eventData);
                    this.returnTouchData(f)
                }
            };
            a.prototype.processTouchStart = function(a, d) {
                d && (a._touchDown = !0, this.dispatchEvent(a, "touchstart", this.eventData))
            };
            a.prototype.onTouchEnd = function(a) {
                this.autoPreventDefault && a.preventDefault();
                for (var d = a.changedTouches, h = d.length, b = 0; b < h; b++) {
                    var f = this.getTouchData(d[b]);
                    f.originalEvent = a;
                    this.eventData.data = f;
                    this.eventData.stopped = !1;
                    this.processInteractive(f.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0);
                    this.emit("touchend", this.eventData);
                    this.returnTouchData(f)
                }
            };
            a.prototype.processTouchEnd = function(a, d) {
                d ? (this.dispatchEvent(a, "touchend", this.eventData), a._touchDown && (a._touchDown = !1, this.dispatchEvent(a, "tap", this.eventData))) : a._touchDown && (a._touchDown = !1, this.dispatchEvent(a, "touchendoutside", this.eventData))
            };
            a.prototype.onTouchMove = function(a) {
                this.autoPreventDefault && a.preventDefault();
                for (var d = a.changedTouches, h = d.length, b = 0; b < h; b++) {
                    var f = this.getTouchData(d[b]);
                    f.originalEvent = a;
                    this.eventData.data = f;
                    this.eventData.stopped = !1;
                    this.processInteractive(f.global, this.renderer._lastObjectRendered, this.processTouchMove, this.moveWhenInside);
                    this.emit("touchmove", this.eventData);
                    this.returnTouchData(f)
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
            l.WebGLRenderer.registerPlugin("interaction", a);
            l.CanvasRenderer.registerPlugin("interaction", a)
        }, {
            "../core": 62,
            "./InteractionData": 143,
            "./interactiveTarget": 146,
            eventemitter3: 3
        }],
        145: [function(b, e, k) {
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
        146: [function(b, e, k) {
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
        147: [function(b, e, k) {
            function a(a, h) {
                var b = {},
                    e = a.data.getElementsByTagName("info")[0],
                    l = a.data.getElementsByTagName("common")[0];
                b.font = e.getAttribute("face");
                b.size = parseInt(e.getAttribute("size"), 10);
                b.lineHeight = parseInt(l.getAttribute("lineHeight"), 10);
                b.chars = {};
                l = a.data.getElementsByTagName("char");
                for (e = 0; e < l.length; e++) {
                    var m = parseInt(l[e].getAttribute("id"), 10),
                        k = new f.Rectangle(parseInt(l[e].getAttribute("x"), 10) + h.frame.x, parseInt(l[e].getAttribute("y"), 10) + h.frame.y, parseInt(l[e].getAttribute("width"), 10), parseInt(l[e].getAttribute("height"), 10));
                    b.chars[m] = {
                        xOffset: parseInt(l[e].getAttribute("xoffset"), 10),
                        yOffset: parseInt(l[e].getAttribute("yoffset"), 10),
                        xAdvance: parseInt(l[e].getAttribute("xadvance"), 10),
                        kerning: {},
                        texture: new f.Texture(h.baseTexture, k)
                    }
                }
                l = a.data.getElementsByTagName("kerning");
                for (e = 0; e < l.length; e++) {
                    var m = parseInt(l[e].getAttribute("first"), 10),
                        k = parseInt(l[e].getAttribute("second"), 10),
                        q = parseInt(l[e].getAttribute("amount"), 10);
                    b.chars[k] && (b.chars[k].kerning[m] = q)
                }
                a.bitmapFont = b;
                d.BitmapText.fonts[b.font] = b
            }
            var l = b("resource-loader").Resource,
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
                        loadType: l.LOAD_TYPE.IMAGE,
                        metadata: d.metadata.imageMetadata
                    }, function(h) {
                        a(d, h.texture);
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
        148: [function(b, e, k) {
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
        149: [function(b, e, k) {
            function a(d, h) {
                l.call(this, d, h);
                for (var b = 0; b < a._pixiMiddleware.length; ++b) this.use(a._pixiMiddleware[b]())
            }
            var l = b("resource-loader");
            k = b("./textureParser");
            var f = b("./spritesheetParser");
            b = b("./bitmapFontParser");
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a._pixiMiddleware = [l.middleware.parsing.blob, k, f, b];
            a.addPixiMiddleware = function(d) {
                a._pixiMiddleware.push(d)
            };
            e = l.Resource;
            e.setExtensionXhrType("fnt", e.XHR_RESPONSE_TYPE.DOCUMENT)
        }, {
            "./bitmapFontParser": 147,
            "./spritesheetParser": 150,
            "./textureParser": 151,
            "resource-loader": 36
        }],
        150: [function(b, e, k) {
            var a = b("resource-loader").Resource,
                l = b("path"),
                f = b("../core");
            e.exports = function() {
                return function(d, h) {
                    var b, e = d.name + "_image";
                    if (!d.data || !d.isJson || !d.data.frames || this.resources[e]) return h();
                    var n = {
                        crossOrigin: d.crossOrigin,
                        loadType: a.LOAD_TYPE.IMAGE,
                        metadata: d.metadata.imageMetadata
                    };
                    b = d.isDataUrl ? d.data.meta.image : l.dirname(d.url.replace(this.baseUrl, "")) + "/" + d.data.meta.image;
                    this.add(e, b, n, function(a) {
                        function b(h, b) {
                            for (var e = h; e - h < b && e < m.length;) {
                                var k = m[e],
                                    q = l[k].frame;
                                if (q) {
                                    var r = null,
                                        t = new f.Rectangle(0, 0, l[k].sourceSize.w /
                                            n, l[k].sourceSize.h / n),
                                        q = l[k].rotated ? new f.Rectangle(q.x / n, q.y / n, q.h / n, q.w / n) : new f.Rectangle(q.x / n, q.y / n, q.w / n, q.h / n);
                                    l[k].trimmed && (r = new f.Rectangle(l[k].spriteSourceSize.x / n, l[k].spriteSourceSize.y / n, l[k].spriteSourceSize.w / n, l[k].spriteSourceSize.h / n));
                                    d.textures[k] = new f.Texture(a.texture.baseTexture, q, t, r, l[k].rotated ? 2 : 0);
                                    f.utils.TextureCache[k] = d.textures[k]
                                }
                                e++
                            }
                        }

                        function e() {
                            b(1E3 * k, 1E3);
                            k++;
                            setTimeout(function() {
                                1E3 * k < m.length ? e() : h()
                            }, 0)
                        }
                        d.textures = {};
                        var l = d.data.frames,
                            m = Object.keys(l),
                            n = f.utils.getResolutionOfUrl(d.url),
                            k = 0;
                        1E3 >= m.length ? (b(0, 1E3), h()) : e()
                    })
                }
            }
        }, {
            "../core": 62,
            path: 22,
            "resource-loader": 36
        }],
        151: [function(b, e, k) {
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
        152: [function(b, e, k) {
            function a(d, h, b, f, e) {
                l.Container.call(this);
                this._texture = null;
                this.uvs = b || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
                this.vertices = h || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]);
                this.indices = f || new Uint16Array([0, 1, 3, 2]);
                this.indexDirty = this.dirty = 0;
                this.blendMode = l.BLEND_MODES.NORMAL;
                this.canvasPadding = 0;
                this.drawMode = e || a.DRAW_MODES.TRIANGLE_MESH;
                this.texture = d;
                this.shader = null;
                this.tintRgb = new Float32Array([1, 1, 1]);
                this._glDatas = []
            }
            var l = b("../core"),
                f = b("pixi-gl-core"),
                d = b("./webgl/MeshShader"),
                h = new l.Point,
                m = new l.Polygon;
            a.prototype = Object.create(l.Container.prototype);
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
                        return l.utils.rgb2hex(this.tintRgb)
                    },
                    set: function(a) {
                        this.tintRgb = l.utils.hex2rgb(a, this.tintRgb)
                    }
                }
            });
            a.prototype._renderWebGL = function(h) {
                h.flush();
                var b = h.gl,
                    e = this._glDatas[h.CONTEXT_UID];
                e || (e = {
                        shader: new d(b),
                        vertexBuffer: f.GLBuffer.createVertexBuffer(b, this.vertices, b.STREAM_DRAW),
                        uvBuffer: f.GLBuffer.createVertexBuffer(b, this.uvs, b.STREAM_DRAW),
                        indexBuffer: f.GLBuffer.createIndexBuffer(b, this.indices, b.STATIC_DRAW),
                        vao: new f.VertexArrayObject(b),
                        dirty: this.dirty,
                        indexDirty: this.indexDirty
                    }, e.vao = (new f.VertexArrayObject(b)).addIndex(e.indexBuffer).addAttribute(e.vertexBuffer, e.shader.attributes.aVertexPosition, b.FLOAT, !1, 8, 0).addAttribute(e.uvBuffer, e.shader.attributes.aTextureCoord, b.FLOAT, !1, 8, 0), this._glDatas[h.CONTEXT_UID] =
                    e);
                this.dirty !== e.dirty && (e.dirty = this.dirty, e.uvBuffer.upload());
                this.indexDirty !== e.indexDirty && (e.indexDirty = this.indexDirty, e.indexBuffer.upload());
                e.vertexBuffer.upload();
                h.bindShader(e.shader);
                h.bindTexture(this._texture, 0);
                h.state.setBlendMode(this.blendMode);
                e.shader.uniforms.translationMatrix = this.worldTransform.toArray(!0);
                e.shader.uniforms.alpha = this.worldAlpha;
                e.shader.uniforms.tint = this.tintRgb;
                h = this.drawMode === a.DRAW_MODES.TRIANGLE_MESH ? b.TRIANGLE_STRIP : b.TRIANGLES;
                e.vao.bind().draw(h,
                    this.indices.length).unbind()
            };
            a.prototype._renderCanvas = function(d) {
                var h = d.context,
                    b = this.worldTransform,
                    f = d.resolution;
                d.roundPixels ? h.setTransform(b.a * f, b.b * f, b.c * f, b.d * f, b.tx * f | 0, b.ty * f | 0) : h.setTransform(b.a * f, b.b * f, b.c * f, b.d * f, b.tx * f, b.ty * f);
                this.drawMode === a.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(h) : this._renderCanvasTriangles(h)
            };
            a.prototype._renderCanvasTriangleMesh = function(a) {
                for (var d = this.vertices, b = this.uvs, h = d.length / 2, f = 0; f < h - 2; f++) {
                    var e = 2 * f;
                    this._renderCanvasDrawTriangle(a,
                        d, b, e, e + 2, e + 4)
                }
            };
            a.prototype._renderCanvasTriangles = function(a) {
                for (var d = this.vertices, b = this.uvs, h = this.indices, f = h.length, e = 0; e < f; e += 3) this._renderCanvasDrawTriangle(a, d, b, 2 * h[e], 2 * h[e + 1], 2 * h[e + 2])
            };
            a.prototype._renderCanvasDrawTriangle = function(a, d, b, h, f, e) {
                var l = this._texture.baseTexture,
                    m = l.source,
                    k = l.width,
                    n = l.height,
                    q = d[h],
                    r = d[f],
                    t = d[e],
                    u = d[h + 1],
                    w = d[f + 1];
                d = d[e + 1];
                var C = b[h] * l.width,
                    H = b[f] * l.width,
                    D = b[e] * l.width;
                h = b[h + 1] * l.height;
                f = b[f + 1] * l.height;
                b = b[e + 1] * l.height;
                if (0 < this.canvasPadding) {
                    e =
                        this.canvasPadding / this.worldTransform.a;
                    var J = this.canvasPadding / this.worldTransform.d,
                        I = (q + r + t) / 3,
                        L = (u + w + d) / 3,
                        M = q - I,
                        N = u - L,
                        O = Math.sqrt(M * M + N * N),
                        q = I + M / O * (O + e),
                        u = L + N / O * (O + J),
                        M = r - I,
                        N = w - L,
                        O = Math.sqrt(M * M + N * N),
                        r = I + M / O * (O + e),
                        w = L + N / O * (O + J),
                        M = t - I,
                        N = d - L,
                        O = Math.sqrt(M * M + N * N),
                        t = I + M / O * (O + e);
                    d = L + N / O * (O + J)
                }
                a.save();
                a.beginPath();
                a.moveTo(q, u);
                a.lineTo(r, w);
                a.lineTo(t, d);
                a.closePath();
                a.clip();
                e = C * f + h * D + H * b - f * D - h * H - C * b;
                a.transform((q * f + h * t + r * b - f * t - h * r - q * b) / e, (u * f + h * d + w * b - f * d - h * w - u * b) / e, (C * r + q * D + H * t - r * D - q * H - C * t) /
                    e, (C * w + u * D + H * d - w * D - u * H - C * d) / e, (C * f * t + h * r * D + q * H * b - q * f * D - h * H * t - C * r * b) / e, (C * f * d + h * w * D + u * H * b - u * f * D - h * H * d - C * w * b) / e);
                a.drawImage(m, 0, 0, k * l.resolution, n * l.resolution, 0, 0, k, n);
                a.restore()
            };
            a.prototype.renderMeshFlat = function(a) {
                var d = this.context;
                a = a.vertices;
                var b = a.length / 2;
                d.beginPath();
                for (var h = 1; h < b - 2; h++) {
                    var f = 2 * h,
                        e = a[f + 2],
                        l = a[f + 4],
                        m = a[f + 3],
                        k = a[f + 5];
                    d.moveTo(a[f], a[f + 1]);
                    d.lineTo(e, m);
                    d.lineTo(l, k)
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
                for (var b = m.points, f = this.indices, e = this.indices.length, l = this.drawMode === a.DRAW_MODES.TRIANGLES ? 3 : 1, k = 0; k + 2 < e; k += l) {
                    var q = 2 * f[k],
                        y = 2 * f[k + 1],
                        A = 2 * f[k + 2];
                    if (b[0] = d[q], b[1] = d[q + 1], b[2] = d[y], b[3] = d[y + 1], b[4] = d[A], b[5] = d[A + 1], m.contains(h.x, h.y)) return !0
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
        153: [function(b, e, k) {
            function a(a, b, e, k, n) {
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
                d[4] = d[12] = d[20] = d[28] = 1 - this._uvw * k;
                d[9] = d[11] = d[13] = d[15] = this._uvh * e;
                d[17] = d[19] = d[21] = d[23] = 1 - this._uvh *
                    n;
                this.leftWidth = "undefined" != typeof b ? b : l;
                this.rightWidth = "undefined" != typeof k ? k : l;
                this.topHeight = "undefined" != typeof e ? e : l;
                this.bottomHeight = "undefined" != typeof n ? n : l
            }
            var l = 10,
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
                            b = this.vertices;
                        d[2] = d[10] = d[18] = d[26] = this._uvw * a;
                        b[2] = b[10] = b[18] = b[26] = a;
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
                            b = this.vertices;
                        d[4] = d[12] = d[20] = d[28] = 1 - this._uvw * a;
                        b[4] = b[12] = b[20] = b[28] = this._width - a;
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
                            b = this.vertices;
                        d[9] = d[11] = d[13] = d[15] = this._uvh * a;
                        b[9] = b[11] = b[13] = b[15] = a;
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
                            b = this.vertices;
                        d[17] = d[19] = d[21] = d[23] = 1 - this._uvh * a;
                        b[17] = b[19] = b[21] = b[23] = this._height - a;
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
                var b = this.worldTransform,
                    f = a.resolution;
                a.roundPixels ? d.setTransform(b.a * f, b.b * f, b.c * f, b.d * f, b.tx * f | 0, b.ty * f | 0) : d.setTransform(b.a * f, b.b * f, b.c * f, b.d * f, b.tx * f, b.ty * f);
                f = this._texture.baseTexture;
                a = f.source;
                b = f.width;
                f = f.height;
                this.drawSegment(d, a, b, f, 0, 1, 10,
                    11);
                this.drawSegment(d, a, b, f, 2, 3, 12, 13);
                this.drawSegment(d, a, b, f, 4, 5, 14, 15);
                this.drawSegment(d, a, b, f, 8, 9, 18, 19);
                this.drawSegment(d, a, b, f, 10, 11, 20, 21);
                this.drawSegment(d, a, b, f, 12, 13, 22, 23);
                this.drawSegment(d, a, b, f, 16, 17, 26, 27);
                this.drawSegment(d, a, b, f, 18, 19, 28, 29);
                this.drawSegment(d, a, b, f, 20, 21, 30, 31)
            };
            a.prototype.drawSegment = function(a, b, f, e, l, k, t, u) {
                var d = this.uvs,
                    h = this.vertices,
                    m = (d[t] - d[l]) * f,
                    n = (d[u] - d[k]) * e;
                t = h[t] - h[l];
                u = h[u] - h[k];
                1 > m && (m = 1);
                1 > n && (n = 1);
                1 > t && (t = 1);
                1 > u && (u = 1);
                a.drawImage(b, d[l] *
                    f, d[k] * e, m, n, h[l], h[k], t, u)
            }
        }, {
            "./Plane": 154
        }],
        154: [function(b, e, k) {
            function a(a, d, b) {
                l.call(this, a);
                this._ready = !0;
                this.verticesX = d || 10;
                this.verticesY = b || 10;
                this.drawMode = l.DRAW_MODES.TRIANGLES;
                this.refresh()
            }
            var l = b("./Mesh");
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.refresh = function() {
                var a = this.verticesX * this.verticesY,
                    d = [],
                    b = [],
                    e = [],
                    l = this.texture,
                    k = this.verticesX - 1,
                    r = this.verticesY - 1,
                    t, u = l.width / k,
                    w = l.height / r;
                for (t = 0; t < a; t++) {
                    var v = t % this.verticesX,
                        y = t / this.verticesX | 0;
                    d.push(v * u, y * w);
                    b.push(l._uvs.x0 + v / (this.verticesX - 1) * (l._uvs.x1 - l._uvs.x0), l._uvs.y0 + y / (this.verticesY - 1) * (l._uvs.y3 - l._uvs.y0))
                }
                a = k * r;
                for (t = 0; t < a; t++) l = t % k, r = t / k | 0, u = r * this.verticesX + l + 1, w = (r + 1) * this.verticesX + l, v = (r + 1) * this.verticesX + l + 1, e.push(r * this.verticesX + l, u, w), e.push(u, v, w);
                this.vertices = new Float32Array(d);
                this.uvs = new Float32Array(b);
                this.colors = new Float32Array([]);
                this.indices = new Uint16Array(e);
                this.indexDirty = !0
            };
            a.prototype._onTextureUpdate = function() {
                l.prototype._onTextureUpdate.call(this);
                this._ready && this.refresh()
            }
        }, {
            "./Mesh": 152
        }],
        155: [function(b, e, k) {
            function a(a, b) {
                l.call(this, a);
                this.points = b;
                this.vertices = new Float32Array(4 * b.length);
                this.uvs = new Float32Array(4 * b.length);
                this.colors = new Float32Array(2 * b.length);
                this.indices = new Uint16Array(2 * b.length);
                this._ready = !0;
                this.refresh()
            }
            var l = b("./Mesh"),
                f = b("../core");
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.refresh = function() {
                var a = this.points;
                if (!(1 > a.length) && this._texture._uvs) {
                    var b =
                        this.uvs,
                        e = this.indices,
                        l = this.colors,
                        k = this._texture._uvs,
                        r = new f.Point(k.x0, k.y0),
                        k = new f.Point(k.x2 - k.x0, k.y2 - k.y0);
                    b[0] = 0 + r.x;
                    b[1] = 0 + r.y;
                    b[2] = 0 + r.x;
                    b[3] = 1 * k.y + r.y;
                    l[0] = 1;
                    l[1] = 1;
                    e[0] = 0;
                    e[1] = 1;
                    for (var t, u = a.length, w = 1; w < u; w++) a = 4 * w, t = w / (u - 1), b[a] = t * k.x + r.x, b[a + 1] = 0 + r.y, b[a + 2] = t * k.x + r.x, b[a + 3] = 1 * k.y + r.y, a = 2 * w, l[a] = 1, l[a + 1] = 1, a = 2 * w, e[a] = a, e[a + 1] = a + 1;
                    this.indexDirty = this.dirty = !0
                }
            };
            a.prototype._onTextureUpdate = function() {
                l.prototype._onTextureUpdate.call(this);
                this._ready && this.refresh()
            };
            a.prototype.updateTransform =
                function() {
                    var a = this.points;
                    if (!(1 > a.length)) {
                        var b, f, e, l, k;
                        l = a[0];
                        for (var t, u = this.vertices, w = a.length, v = 0; v < w; v++) f = a[v], e = 4 * v, b = v < a.length - 1 ? a[v + 1] : f, t = -(b.x - l.x), b = b.y - l.y, l = 10 * (1 - v / (w - 1)), l = Math.sqrt(b * b + t * t), k = this._texture.height / 2, b /= l, t /= l, b *= k, t *= k, u[e] = f.x + b, u[e + 1] = f.y + t, u[e + 2] = f.x - b, u[e + 3] = f.y - t, l = f;
                        this.containerUpdateTransform()
                    }
                }
        }, {
            "../core": 62,
            "./Mesh": 152
        }],
        156: [function(b, e, k) {
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
        157: [function(b, e, k) {
            function a(a) {
                l.call(this, a, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nvarying vec2 vTextureCoord;\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform float alpha;\nuniform vec3 tint;\nuniform sampler2D uSampler;\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);\n}")
            }
            var l = b("../../core/Shader");
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../core/Shader": 42
        }],
        158: [function(b, e, k) {
            function a(a, d, b) {
                l.Container.call(this);
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
                this.blendMode = l.BLEND_MODES.NORMAL;
                this.roundPixels = !0;
                this.baseTexture = null;
                this.setProperties(d)
            }
            var l = b("../core");
            a.prototype = Object.create(l.Container.prototype);
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
                            b = this.worldTransform,
                            f = !0,
                            e, l, k, t, u = a.blendModes[this.blendMode];
                        u !== d.globalCompositeOperation && (d.globalCompositeOperation = u);
                        d.globalAlpha = this.worldAlpha;
                        this.displayObjectUpdateTransform();
                        for (u = 0; u < this.children.length; ++u) {
                            var w = this.children[u];
                            if (w.visible) {
                                var v = w.texture.frame;
                                (d.globalAlpha = this.worldAlpha * w.alpha, 0 === w.rotation % (2 * Math.PI)) ? (f && (d.setTransform(b.a, b.b, b.c, b.d, b.tx *
                                    a.resolution, b.ty * a.resolution), f = !1), e = w.anchor.x * -v.width * w.scale.x + w.position.x + .5, l = w.anchor.y * -v.height * w.scale.y + w.position.y + .5, k = v.width * w.scale.x, t = v.height * w.scale.y) : (f || (f = !0), w.displayObjectUpdateTransform(), e = w.worldTransform, a.roundPixels ? d.setTransform(e.a, e.b, e.c, e.d, e.tx * a.resolution | 0, e.ty * a.resolution | 0) : d.setTransform(e.a, e.b, e.c, e.d, e.tx * a.resolution, e.ty * a.resolution), e = w.anchor.x * -v.width + .5, l = w.anchor.y * -v.height + .5, k = v.width, t = v.height);
                                var y = w.texture.baseTexture.resolution;
                                d.drawImage(w.texture.baseTexture.source, v.x * y, v.y * y, v.width * y, v.height * y, e * y, l * y, k * y, t * y)
                            }
                        }
                    }
                };
            a.prototype.destroy = function() {
                if (l.Container.prototype.destroy.apply(this, arguments), this._buffers)
                    for (var a = 0; a < this._buffers.length; ++a) this._buffers[a].destroy();
                this._buffers = this._properties = null
            }
        }, {
            "../core": 62
        }],
        159: [function(b, e, k) {
            e.exports = {
                ParticleContainer: b("./ParticleContainer"),
                ParticleRenderer: b("./webgl/ParticleRenderer")
            }
        }, {
            "./ParticleContainer": 158,
            "./webgl/ParticleRenderer": 161
        }],
        160: [function(b,
            e, k) {
            function a(a, b, f, e) {
                this.gl = a;
                this.vertSize = 2;
                this.vertByteSize = 4 * this.vertSize;
                this.size = e;
                this.dynamicProperties = [];
                this.staticProperties = [];
                for (a = 0; a < b.length; a++) e = b[a], e = {
                    attribute: e.attribute,
                    size: e.size,
                    uploadFunction: e.uploadFunction,
                    offset: e.offset
                }, f[a] ? this.dynamicProperties.push(e) : this.staticProperties.push(e);
                this.staticStride = 0;
                this.staticData = this.staticBuffer = null;
                this.dynamicStride = 0;
                this.dynamicData = this.dynamicBuffer = null;
                this.initBuffers()
            }
            var l = b("pixi-gl-core"),
                f = b("../../core/utils/createIndicesForQuads");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.initBuffers = function() {
                var a, b, e = this.gl,
                    k = 0;
                this.indices = f(this.size);
                this.indexBuffer = l.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW);
                for (a = this.dynamicStride = 0; a < this.dynamicProperties.length; a++) b = this.dynamicProperties[a], b.offset = k, k += b.size, this.dynamicStride += b.size;
                this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4);
                this.dynamicBuffer = l.GLBuffer.createVertexBuffer(e, this.dynamicData, e.STREAM_DRAW);
                for (a = this.staticStride =
                    k = 0; a < this.staticProperties.length; a++) b = this.staticProperties[a], b.offset = k, k += b.size, this.staticStride += b.size;
                this.staticData = new Float32Array(this.size * this.staticStride * 4);
                this.staticBuffer = l.GLBuffer.createVertexBuffer(e, this.staticData, e.STATIC_DRAW);
                this.vao = (new l.VertexArrayObject(e)).addIndex(this.indexBuffer);
                for (a = 0; a < this.dynamicProperties.length; a++) b = this.dynamicProperties[a], this.vao.addAttribute(this.dynamicBuffer, b.attribute, e.FLOAT, !1, 4 * this.dynamicStride, 4 * b.offset);
                for (a = 0; a <
                    this.staticProperties.length; a++) b = this.staticProperties[a], this.vao.addAttribute(this.staticBuffer, b.attribute, e.FLOAT, !1, 4 * this.staticStride, 4 * b.offset)
            };
            a.prototype.uploadDynamic = function(a, b, f) {
                for (var d = 0; d < this.dynamicProperties.length; d++) {
                    var h = this.dynamicProperties[d];
                    h.uploadFunction(a, b, f, this.dynamicData, this.dynamicStride, h.offset)
                }
                this.dynamicBuffer.upload()
            };
            a.prototype.uploadStatic = function(a, b, f) {
                for (var d = 0; d < this.staticProperties.length; d++) {
                    var h = this.staticProperties[d];
                    h.uploadFunction(a,
                        b, f, this.staticData, this.staticStride, h.offset)
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
        161: [function(b, e, k) {
            function a(a) {
                l.ObjectRenderer.call(this, a);
                this.properties = this.indexBuffer = this.shader = null;
                this.tempMatrix = new l.Matrix;
                this.CONTEXT_UID = 0
            }
            var l = b("../../core"),
                f = b("./ParticleShader"),
                d = b("./ParticleBuffer");
            a.prototype = Object.create(l.ObjectRenderer.prototype);
            a.prototype.constructor = a;
            e.exports = a;
            l.WebGLRenderer.registerPlugin("particle", a);
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
                    b = d.length,
                    h = a._maxSize,
                    f = a._batchSize;
                if (0 !== b) {
                    b >
                        h && (b = h);
                    (h = a._glBuffers[this.renderer.CONTEXT_UID]) || (h = a._glBuffers[this.renderer.CONTEXT_UID] = this.generateBuffers(a));
                    this.renderer.setBlendMode(a.blendMode);
                    var e = this.renderer.gl,
                        l = a.worldTransform.copy(this.tempMatrix);
                    l.prepend(this.renderer._activeRenderTarget.projectionMatrix);
                    this.shader.uniforms.projectionMatrix = l.toArray(!0);
                    this.shader.uniforms.uAlpha = a.worldAlpha;
                    this.renderer.bindTexture(d[0]._texture.baseTexture);
                    for (var k = l = 0; l < b; l += f, k += 1) {
                        var v = b - l;
                        v > f && (v = f);
                        var y = h[k];
                        y.uploadDynamic(d,
                            l, v);
                        a._bufferToUpdate === k && (y.uploadStatic(d, l, v), a._bufferToUpdate = k + 1);
                        y.vao.bind().draw(e.TRIANGLES, 6 * v).unbind()
                    }
                }
            };
            a.prototype.generateBuffers = function(a) {
                var b = this.renderer.gl,
                    h = [],
                    f = a._maxSize,
                    e = a._batchSize,
                    l = a._properties;
                for (a = 0; a < f; a += e) h.push(new d(b, this.properties, l, e));
                return h
            };
            a.prototype.uploadVertices = function(a, d, b, f, e, l) {
                for (var h, k, m, n, q, r, t, x, F, G = 0; G < b; G++) h = a[d + G], k = h._texture, n = h.scale.x, q = h.scale.y, m = k.trim, k = k.orig, m ? (t = m.x - h.anchor.x * k.width, r = t + m.width, F = m.y - h.anchor.y *
                    k.height, x = F + m.height) : (r = k.width * (1 - h.anchor.x), t = k.width * -h.anchor.x, x = k.height * (1 - h.anchor.y), F = k.height * -h.anchor.y), f[l] = t * n, f[l + 1] = F * q, f[l + e] = r * n, f[l + e + 1] = F * q, f[l + 2 * e] = r * n, f[l + 2 * e + 1] = x * q, f[l + 3 * e] = t * n, f[l + 3 * e + 1] = x * q, l += 4 * e
            };
            a.prototype.uploadPosition = function(a, d, b, f, e, l) {
                for (var h = 0; h < b; h++) {
                    var k = a[d + h].position;
                    f[l] = k.x;
                    f[l + 1] = k.y;
                    f[l + e] = k.x;
                    f[l + e + 1] = k.y;
                    f[l + 2 * e] = k.x;
                    f[l + 2 * e + 1] = k.y;
                    f[l + 3 * e] = k.x;
                    f[l + 3 * e + 1] = k.y;
                    l += 4 * e
                }
            };
            a.prototype.uploadRotation = function(a, d, b, f, e, l) {
                for (var h = 0; h < b; h++) {
                    var k =
                        a[d + h].rotation;
                    f[l] = k;
                    f[l + e] = k;
                    f[l + 2 * e] = k;
                    f[l + 3 * e] = k;
                    l += 4 * e
                }
            };
            a.prototype.uploadUvs = function(a, d, b, f, e, l) {
                for (var h = 0; h < b; h++) {
                    var k = a[d + h]._texture._uvs;
                    k ? (f[l] = k.x0, f[l + 1] = k.y0, f[l + e] = k.x1, f[l + e + 1] = k.y1, f[l + 2 * e] = k.x2, f[l + 2 * e + 1] = k.y2, f[l + 3 * e] = k.x3, f[l + 3 * e + 1] = k.y3, l += 4 * e) : (f[l] = 0, f[l + 1] = 0, f[l + e] = 0, f[l + e + 1] = 0, f[l + 2 * e] = 0, f[l + 2 * e + 1] = 0, f[l + 3 * e] = 0, f[l + 3 * e + 1] = 0, l += 4 * e)
                }
            };
            a.prototype.uploadAlpha = function(a, d, b, f, e, l) {
                for (var h = 0; h < b; h++) {
                    var k = a[d + h].alpha;
                    f[l] = k;
                    f[l + e] = k;
                    f[l + 2 * e] = k;
                    f[l + 3 * e] = k;
                    l += 4 * e
                }
            };
            a.prototype.destroy = function() {
                this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer);
                l.ObjectRenderer.prototype.destroy.apply(this, arguments);
                this.shader.destroy();
                this.tempMatrix = this.indices = null
            }
        }, {
            "../../core": 62,
            "./ParticleBuffer": 160,
            "./ParticleShader": 162
        }],
        162: [function(b, e, k) {
            function a(a) {
                l.call(this, a, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float aColor;\nattribute vec2 aPositionCoord;\nattribute vec2 aScale;\nattribute float aRotation;\nuniform mat3 projectionMatrix;\nvarying vec2 vTextureCoord;\nvarying float vColor;\nvoid main(void){\n   vec2 v = aVertexPosition;\n   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n   v = v + aPositionCoord;\n   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = aColor;\n}",
                    "varying vec2 vTextureCoord;\nvarying float vColor;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvoid main(void){\n  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;\n  if (color.a == 0.0) discard;\n  gl_FragColor = color;\n}")
            }
            var l = b("../../core/Shader");
            a.prototype = Object.create(l.prototype);
            a.prototype.constructor = a;
            e.exports = a
        }, {
            "../../core/Shader": 42
        }],
        163: [function(b, e, k) {
            Math.sign || (Math.sign = function(a) {
                return a = +a, 0 === a || isNaN(a) ? a : 0 < a ? 1 : -1
            })
        }, {}],
        164: [function(b,
            e, k) {
            Object.assign || (Object.assign = b("object-assign"))
        }, {
            "object-assign": 5
        }],
        165: [function(b, e, k) {
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
        166: [function(b, e, k) {
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
                for (var f = Date.now(), d = ["ms", "moz", "webkit", "o"], h = 0; h < d.length && !a.requestAnimationFrame; ++h) a.requestAnimationFrame = a[d[h] + "RequestAnimationFrame"], a.cancelAnimationFrame = a[d[h] + "CancelAnimationFrame"] || a[d[h] + "CancelRequestAnimationFrame"];
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
        167: [function(b, e, k) {
            function a() {}
            b = b("../../core");
            a.prototype.constructor = a;
            e.exports = a;
            a.prototype.upload = function(a, b) {
                "function" == typeof a && (b = a);
                b()
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
        168: [function(b, e, k) {
            e.exports = {
                webGL: b("./webgl/WebGLPrepare"),
                canvas: b("./canvas/CanvasPrepare")
            }
        }, {
            "./canvas/CanvasPrepare": 167,
            "./webgl/WebGLPrepare": 169
        }],
        169: [function(b, e, k) {
            function a(a) {
                this.renderer = a;
                this.queue = [];
                this.addHooks = [];
                this.uploadHooks = [];
                this.completes = [];
                this.ticking = !1;
                this.register(d, l).register(h, f)
            }

            function l(a,
                d) {
                return d instanceof m.BaseTexture && (a.textureManager.updateTexture(d), !0)
            }

            function f(a, d) {
                return d instanceof m.Graphics && (a.plugins.graphics.updateGraphics(d), !0)
            }

            function d(a, d) {
                if (a instanceof m.BaseTexture) return -1 === d.indexOf(a) && d.push(a), !0;
                if (a._texture && a._texture instanceof m.Texture) {
                    var b = a._texture.baseTexture;
                    return -1 === d.indexOf(b) && d.push(b), !0
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
            a.prototype.upload = function(d, b) {
                "function" == typeof d && (b = d, d = null);
                d && this.add(d);
                this.queue.length ? (this.numLeft = a.UPLOADS_PER_FRAME, this.completes.push(b), this.ticking || (this.ticking = !0, q.add(this.tick, this))) : b()
            };
            a.prototype.tick = function() {
                for (var d, b; this.queue.length && 0 < this.numLeft;) {
                    var h = this.queue[0],
                        f = !1;
                    d = 0;
                    for (b = this.uploadHooks.length; d < b; d++)
                        if (this.uploadHooks[d](this.renderer, h)) {
                            this.numLeft--;
                            this.queue.shift();
                            f = !0;
                            break
                        }
                    f || this.queue.shift()
                }
                if (this.queue.length) this.numLeft =
                    a.UPLOADS_PER_FRAME;
                else
                    for (this.ticking = !1, q.remove(this.tick, this), h = this.completes.slice(0), d = this.completes.length = 0, b = h.length; d < b; d++) h[d]()
            };
            a.prototype.register = function(a, d) {
                return a && this.addHooks.push(a), d && this.uploadHooks.push(d), this
            };
            a.prototype.add = function(a) {
                var d, b;
                d = 0;
                for (b = this.addHooks.length; d < b && !this.addHooks[d](a, this.queue); d++);
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
        170: [function(b, e, k) {
            k = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
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
            k.PIXI = e
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
    if ("object" == typeof exports) module.exports = p();
    else {
        var b;
        "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self);
        b.p2 = p()
    }
}(function() {
    return function b(e, k, a) {
        function l(d, m) {
            if (!k[d]) {
                if (!e[d]) {
                    var h = "function" == typeof require && require;
                    if (!m && h) return h(d, !0);
                    if (f) return f(d, !0);
                    throw Error("Cannot find module '" + d + "'");
                }
                h = k[d] = {
                    exports: {}
                };
                e[d][0].call(h.exports, function(a) {
                    var b = e[d][1][a];
                    return l(b ? b : a)
                }, h, h.exports, b, e, k, a)
            }
            return k[d].exports
        }
        for (var f = "function" == typeof require && require, d = 0; d < a.length; d++) l(a[d]);
        return l
    }({
        1: [function(b, e, k) {
            function a() {}
            var l = b("./Scalar");
            e.exports = a;
            a.lineInt = function(a, d, b) {
                var h, f, e, k, t, u, w, v = [0, 0];
                return h = a[1][1] - a[0][1], f = a[0][0] - a[1][0], e = h * a[0][0] + f * a[0][1], k = d[1][1] - d[0][1], t = d[0][0] - d[1][0], u = k * d[0][0] + t * d[0][1], w = h * t - k * f, l.eq(w, 0, b || 0) || (v[0] = (t * e - f * u) / w, v[1] = (h * u - k * e) / w), v
            };
            a.segmentsIntersect = function(a, d, b, e) {
                var h = d[0] - a[0];
                d = d[1] - a[1];
                var f = e[0] - b[0],
                    l = e[1] - b[1];
                if (0 == f * d - l * h) return !1;
                e = (h * (b[1] - a[1]) + d * (a[0] - b[0])) / (f * d - l * h);
                a = (f * (a[1] - b[1]) + l * (b[0] - a[0])) / (l * h - f * d);
                return 0 <= e && 1 >= e && 0 <= a && 1 >= a
            }
        }, {
            "./Scalar": 4
        }],
        2: [function(b, e, k) {
            function a() {}
            e.exports = a;
            a.area = function(a, b, f) {
                return (b[0] - a[0]) * (f[1] - a[1]) - (f[0] - a[0]) * (b[1] - a[1])
            };
            a.left = function(d, b, f) {
                return 0 < a.area(d, b, f)
            };
            a.leftOn = function(d, b, f) {
                return 0 <= a.area(d, b, f)
            };
            a.right = function(d, b, f) {
                return 0 > a.area(d, b, f)
            };
            a.rightOn = function(d, b, f) {
                return 0 >= a.area(d, b, f)
            };
            var l = [],
                f = [];
            a.collinear = function(d, b, e, k) {
                return k ?
                    (l[0] = b[0] - d[0], l[1] = b[1] - d[1], f[0] = e[0] - b[0], f[1] = e[1] - b[1], k > Math.acos((l[0] * f[0] + l[1] * f[1]) / (Math.sqrt(l[0] * l[0] + l[1] * l[1]) * Math.sqrt(f[0] * f[0] + f[1] * f[1])))) : 0 == a.area(d, b, e)
            };
            a.sqdist = function(a, b) {
                var d = b[0] - a[0],
                    f = b[1] - a[1];
                return d * d + f * f
            }
        }, {}],
        3: [function(b, e, k) {
            function a() {
                this.vertices = []
            }

            function l(a, d, b, f, e) {
                var l = d[1] - a[1];
                d = a[0] - d[0];
                a = l * a[0] + d * a[1];
                var k = f[1] - b[1];
                f = b[0] - f[0];
                b = k * b[0] + f * b[1];
                var m = l * f - k * d;
                return h.eq(m, 0, e || 0) ? [0, 0] : [(f * a - d * b) / m, (l * b - k * a) / m]
            }
            var f = b("./Line"),
                d = b("./Point"),
                h = b("./Scalar");
            e.exports = a;
            a.prototype.at = function(a) {
                var d = this.vertices,
                    b = d.length;
                return d[0 > a ? a % b + b : a % b]
            };
            a.prototype.first = function() {
                return this.vertices[0]
            };
            a.prototype.last = function() {
                return this.vertices[this.vertices.length - 1]
            };
            a.prototype.clear = function() {
                this.vertices.length = 0
            };
            a.prototype.append = function(a, d, b) {
                if ("undefined" == typeof d) throw Error("From is not given!");
                if ("undefined" == typeof b) throw Error("To is not given!");
                if (d > b - 1) throw Error("lol1");
                if (b > a.vertices.length) throw Error("lol2");
                if (0 > d) throw Error("lol3");
                for (; b > d; d++) this.vertices.push(a.vertices[d])
            };
            a.prototype.makeCCW = function() {
                for (var a = 0, b = this.vertices, f = 1; f < this.vertices.length; ++f)(b[f][1] < b[a][1] || b[f][1] == b[a][1] && b[f][0] > b[a][0]) && (a = f);
                d.left(this.at(a - 1), this.at(a), this.at(a + 1)) || this.reverse()
            };
            a.prototype.reverse = function() {
                for (var a = [], d = 0, b = this.vertices.length; d !== b; d++) a.push(this.vertices.pop());
                this.vertices = a
            };
            a.prototype.isReflex = function(a) {
                return d.right(this.at(a - 1), this.at(a), this.at(a + 1))
            };
            var m = [],
                q = [];
            a.prototype.canSee = function(a, b) {
                var h, e;
                if (d.leftOn(this.at(a + 1), this.at(a), this.at(b)) && d.rightOn(this.at(a - 1), this.at(a), this.at(b))) return !1;
                e = d.sqdist(this.at(a), this.at(b));
                for (var l = 0; l !== this.vertices.length; ++l)
                    if ((l + 1) % this.vertices.length !== a && l !== a && d.leftOn(this.at(a), this.at(b), this.at(l + 1)) && d.rightOn(this.at(a), this.at(b), this.at(l)) && (m[0] = this.at(a), m[1] = this.at(b), q[0] = this.at(l), q[1] = this.at(l + 1), h = f.lineInt(m, q), d.sqdist(this.at(a), h) < e)) return !1;
                return !0
            };
            a.prototype.copy =
                function(d, b, f) {
                    f = f || new a;
                    if (f.clear(), b > d)
                        for (var h = d; b >= h; h++) f.vertices.push(this.vertices[h]);
                    else {
                        for (h = 0; b >= h; h++) f.vertices.push(this.vertices[h]);
                        for (h = d; h < this.vertices.length; h++) f.vertices.push(this.vertices[h])
                    }
                    return f
                };
            a.prototype.getCutEdges = function() {
                for (var d = [], b, f, h = new a, e = Number.MAX_VALUE, l = 0; l < this.vertices.length; ++l)
                    if (this.isReflex(l))
                        for (var k = 0; k < this.vertices.length; ++k)
                            if (this.canSee(l, k)) {
                                b = this.copy(l, k, h).getCutEdges();
                                f = this.copy(k, l, h).getCutEdges();
                                for (var m = 0; m <
                                    f.length; m++) b.push(f[m]);
                                b.length < e && (d = b, e = b.length, d.push([this.at(l), this.at(k)]))
                            }
                return d
            };
            a.prototype.decomp = function() {
                var a = this.getCutEdges();
                return 0 < a.length ? this.slice(a) : [this]
            };
            a.prototype.slice = function(a) {
                if (0 == a.length) return [this];
                if (a instanceof Array && a.length && a[0] instanceof Array && 2 == a[0].length && a[0][0] instanceof Array) {
                    for (var d = [this], b = 0; b < a.length; b++)
                        for (var f = a[b], h = 0; h < d.length; h++) {
                            var e = d[h].slice(f);
                            if (e) {
                                d.splice(h, 1);
                                d.push(e[0], e[1]);
                                break
                            }
                        }
                    return d
                }
                f = a;
                b = this.vertices.indexOf(f[0]);
                h = this.vertices.indexOf(f[1]);
                return -1 != b && -1 != h ? [this.copy(b, h), this.copy(h, b)] : !1
            };
            a.prototype.isSimple = function() {
                for (var a = this.vertices, d = 0; d < a.length - 1; d++)
                    for (var b = 0; d - 1 > b; b++)
                        if (f.segmentsIntersect(a[d], a[d + 1], a[b], a[b + 1])) return !1;
                for (d = 1; d < a.length - 2; d++)
                    if (f.segmentsIntersect(a[0], a[a.length - 1], a[d], a[d + 1])) return !1;
                return !0
            };
            a.prototype.quickDecomp = function(b, f, h, e, k, m) {
                k = k || 100;
                m = m || 0;
                e = e || 25;
                b = "undefined" != typeof b ? b : [];
                f = f || [];
                h = h || [];
                var n = [0, 0],
                    q = [0, 0],
                    t = [0, 0],
                    r, v, u = 0,
                    w = 0,
                    E = 0,
                    C =
                    0,
                    H = new a,
                    D = new a,
                    J = this.vertices;
                if (3 > J.length) return b;
                if (m++, m > k) return console.warn("quickDecomp: max level (" + k + ") reached."), b;
                for (var I = 0; I < this.vertices.length; ++I)
                    if (this.isReflex(I)) {
                        f.push(this.vertices[I]);
                        r = v = Number.MAX_VALUE;
                        for (var L = 0; L < this.vertices.length; ++L) d.left(this.at(I - 1), this.at(I), this.at(L)) && d.rightOn(this.at(I - 1), this.at(I), this.at(L - 1)) && (t = l(this.at(I - 1), this.at(I), this.at(L), this.at(L - 1)), d.right(this.at(I + 1), this.at(I), t) && (u = d.sqdist(this.vertices[I], t), v > u && (v =
                            u, q = t, E = L))), d.left(this.at(I + 1), this.at(I), this.at(L + 1)) && d.rightOn(this.at(I + 1), this.at(I), this.at(L)) && (t = l(this.at(I + 1), this.at(I), this.at(L), this.at(L + 1)), d.left(this.at(I - 1), this.at(I), t) && (u = d.sqdist(this.vertices[I], t), r > u && (r = u, n = t, w = L)));
                        if (E == (w + 1) % this.vertices.length) t[0] = (q[0] + n[0]) / 2, t[1] = (q[1] + n[1]) / 2, h.push(t), w > I ? (H.append(this, I, w + 1), H.vertices.push(t), D.vertices.push(t), 0 != E && D.append(this, E, this.vertices.length), D.append(this, 0, I + 1)) : (0 != I && H.append(this, I, this.vertices.length),
                            H.append(this, 0, w + 1), H.vertices.push(t), D.vertices.push(t), D.append(this, E, I + 1));
                        else {
                            if (E > w && (w += this.vertices.length), n = Number.MAX_VALUE, E > w) return b;
                            for (L = E; w >= L; ++L) d.leftOn(this.at(I - 1), this.at(I), this.at(L)) && d.rightOn(this.at(I + 1), this.at(I), this.at(L)) && (u = d.sqdist(this.at(I), this.at(L)), n > u && (n = u, C = L % this.vertices.length));
                            C > I ? (H.append(this, I, C + 1), 0 != C && D.append(this, C, J.length), D.append(this, 0, I + 1)) : (0 != I && H.append(this, I, J.length), H.append(this, 0, C + 1), D.append(this, C, I + 1))
                        }
                        return H.vertices.length <
                            D.vertices.length ? (H.quickDecomp(b, f, h, e, k, m), D.quickDecomp(b, f, h, e, k, m)) : (D.quickDecomp(b, f, h, e, k, m), H.quickDecomp(b, f, h, e, k, m)), b
                    }
                return b.push(this), b
            };
            a.prototype.removeCollinearPoints = function(a) {
                for (var b = 0, f = this.vertices.length - 1; 3 < this.vertices.length && 0 <= f; --f) d.collinear(this.at(f - 1), this.at(f), this.at(f + 1), a) && (this.vertices.splice(f % this.vertices.length, 1), f--, b++);
                return b
            }
        }, {
            "./Line": 1,
            "./Point": 2,
            "./Scalar": 4
        }],
        4: [function(b, e, k) {
            function a() {}
            e.exports = a;
            a.eq = function(a, b, d) {
                return d =
                    d || 0, Math.abs(a - b) < d
            }
        }, {}],
        5: [function(b, e, k) {
            e.exports = {
                Polygon: b("./Polygon"),
                Point: b("./Point")
            }
        }, {
            "./Point": 2,
            "./Polygon": 3
        }],
        6: [function(b, e, k) {
            e.exports = {
                name: "p2",
                version: "0.7.1",
                description: "A JavaScript 2D physics engine.",
                author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
                keywords: ["p2.js", "p2", "physics", "engine", "2d"],
                main: "./src/p2.js",
                engines: {
                    node: "*"
                },
                repository: {
                    type: "git",
                    url: "https://github.com/schteppe/p2.js.git"
                },
                bugs: {
                    url: "https://github.com/schteppe/p2.js/issues"
                },
                licenses: [{
                    type: "MIT"
                }],
                devDependencies: {
                    grunt: "^0.4.5",
                    "grunt-contrib-jshint": "^0.11.2",
                    "grunt-contrib-nodeunit": "^0.4.1",
                    "grunt-contrib-uglify": "~0.4.0",
                    "grunt-contrib-watch": "~0.5.0",
                    "grunt-browserify": "~2.0.1",
                    "grunt-contrib-concat": "^0.4.0"
                },
                dependencies: {
                    "poly-decomp": "0.1.1"
                }
            }
        }, {}],
        7: [function(b, e, k) {
            function a(a) {
                this.lowerBound = l.create();
                a && a.lowerBound && l.copy(this.lowerBound, a.lowerBound);
                this.upperBound = l.create();
                a && a.upperBound && l.copy(this.upperBound, a.upperBound)
            }
            var l = b("../math/vec2");
            b("../utils/Utils");
            e.exports = a;
            var f = l.create();
            a.prototype.setFromPoints = function(a, b, e, k) {
                var d = this.lowerBound,
                    h = this.upperBound;
                "number" != typeof e && (e = 0);
                0 !== e ? l.rotate(d, a[0], e) : l.copy(d, a[0]);
                l.copy(h, d);
                for (var m = Math.cos(e), q = Math.sin(e), w = 1; w < a.length; w++) {
                    var v = a[w];
                    if (0 !== e) {
                        var y = v[0],
                            v = v[1];
                        f[0] = m * y - q * v;
                        f[1] = q * y + m * v;
                        v = f
                    }
                    for (y = 0; 2 > y; y++) v[y] > h[y] && (h[y] = v[y]), v[y] < d[y] && (d[y] = v[y])
                }
                b && (l.add(this.lowerBound, this.lowerBound, b), l.add(this.upperBound, this.upperBound, b));
                k && (this.lowerBound[0] -=
                    k, this.lowerBound[1] -= k, this.upperBound[0] += k, this.upperBound[1] += k)
            };
            a.prototype.copy = function(a) {
                l.copy(this.lowerBound, a.lowerBound);
                l.copy(this.upperBound, a.upperBound)
            };
            a.prototype.extend = function(a) {
                for (var d = 2; d--;) {
                    var b = a.lowerBound[d];
                    this.lowerBound[d] > b && (this.lowerBound[d] = b);
                    b = a.upperBound[d];
                    this.upperBound[d] < b && (this.upperBound[d] = b)
                }
            };
            a.prototype.overlaps = function(a) {
                var d = this.lowerBound,
                    b = this.upperBound,
                    f = a.lowerBound;
                a = a.upperBound;
                return (f[0] <= b[0] && b[0] <= a[0] || d[0] <= a[0] &&
                    a[0] <= b[0]) && (f[1] <= b[1] && b[1] <= a[1] || d[1] <= a[1] && a[1] <= b[1])
            };
            a.prototype.containsPoint = function(a) {
                var d = this.lowerBound,
                    b = this.upperBound;
                return d[0] <= a[0] && a[0] <= b[0] && d[1] <= a[1] && a[1] <= b[1]
            };
            a.prototype.overlapsRay = function(a) {
                var d = 1 / a.direction[0],
                    b = 1 / a.direction[1],
                    f = (this.lowerBound[0] - a.from[0]) * d,
                    d = (this.upperBound[0] - a.from[0]) * d,
                    e = (this.lowerBound[1] - a.from[1]) * b,
                    b = (this.upperBound[1] - a.from[1]) * b;
                a = Math.max(Math.max(Math.min(f, d), Math.min(e, b)));
                f = Math.min(Math.min(Math.max(f, d), Math.max(e,
                    b)));
                return 0 > f ? -1 : a > f ? -1 : a
            }
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57
        }],
        8: [function(b, e, k) {
            function a(d) {
                this.type = d;
                this.result = [];
                this.world = null;
                this.boundingVolumeType = a.AABB
            }
            var l = b("../math/vec2"),
                f = b("../objects/Body");
            e.exports = a;
            a.AABB = 1;
            a.BOUNDING_CIRCLE = 2;
            a.prototype.setWorld = function(a) {
                this.world = a
            };
            a.prototype.getCollisionPairs = function(a) {};
            var d = l.create();
            a.boundingRadiusCheck = function(a, b) {
                l.sub(d, a.position, b.position);
                var f = l.squaredLength(d),
                    h = a.boundingRadius + b.boundingRadius;
                return h * h >= f
            };
            a.aabbCheck = function(a, d) {
                return a.getAABB().overlaps(d.getAABB())
            };
            a.prototype.boundingVolumeCheck = function(d, b) {
                var f;
                switch (this.boundingVolumeType) {
                    case a.BOUNDING_CIRCLE:
                        f = a.boundingRadiusCheck(d, b);
                        break;
                    case a.AABB:
                        f = a.aabbCheck(d, b);
                        break;
                    default:
                        throw Error("Bounding volume type not recognized: " + this.boundingVolumeType);
                }
                return f
            };
            a.canCollide = function(a, d) {
                var b = f.KINEMATIC,
                    h = f.STATIC;
                return a.type === h && d.type === h ? !1 : a.type === b && d.type === h || a.type === h && d.type === b ? !1 : a.type ===
                    b && d.type === b ? !1 : a.sleepState === f.SLEEPING && d.sleepState === f.SLEEPING ? !1 : a.sleepState === f.SLEEPING && d.type === h || d.sleepState === f.SLEEPING && a.type === h ? !1 : !0
            };
            a.NAIVE = 1;
            a.SAP = 2
        }, {
            "../math/vec2": 30,
            "../objects/Body": 31
        }],
        9: [function(b, e, k) {
            function a() {
                l.call(this, l.NAIVE)
            }
            var l = (b("../shapes/Circle"), b("../shapes/Plane"), b("../shapes/Shape"), b("../shapes/Particle"), b("../collision/Broadphase"));
            b("../math/vec2");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.getCollisionPairs = function(a) {
                a =
                    a.bodies;
                for (var d = this.result, b = d.length = 0, f = a.length; b !== f; b++)
                    for (var e = a[b], k = 0; b > k; k++) {
                        var r = a[k];
                        l.canCollide(e, r) && this.boundingVolumeCheck(e, r) && d.push(e, r)
                    }
                return d
            };
            a.prototype.aabbQuery = function(a, d, b) {
                b = b || [];
                a = a.bodies;
                for (var f = 0; f < a.length; f++) {
                    var h = a[f];
                    h.aabbNeedsUpdate && h.updateAABB();
                    h.aabb.overlaps(d) && b.push(h)
                }
                return b
            }
        }, {
            "../collision/Broadphase": 8,
            "../math/vec2": 30,
            "../shapes/Circle": 39,
            "../shapes/Particle": 43,
            "../shapes/Plane": 44,
            "../shapes/Shape": 45
        }],
        10: [function(b, e,
            k) {
            function a() {
                this.contactEquations = [];
                this.frictionEquations = [];
                this.enabledEquations = this.enableFriction = !0;
                this.slipForce = 10;
                this.frictionCoefficient = .3;
                this.surfaceVelocity = 0;
                this.contactEquationPool = new n({
                    size: 32
                });
                this.frictionEquationPool = new r({
                    size: 64
                });
                this.restitution = 0;
                this.stiffness = u.DEFAULT_STIFFNESS;
                this.relaxation = u.DEFAULT_RELAXATION;
                this.frictionStiffness = u.DEFAULT_STIFFNESS;
                this.frictionRelaxation = u.DEFAULT_RELAXATION;
                this.enableFrictionReduction = !0;
                this.collidingBodiesLastStep =
                    new t;
                this.contactSkinSize = .01
            }

            function l(a, b) {
                d.set(a.vertices[0], .5 * -b.length, -b.radius);
                d.set(a.vertices[1], .5 * b.length, -b.radius);
                d.set(a.vertices[2], .5 * b.length, b.radius);
                d.set(a.vertices[3], .5 * -b.length, b.radius)
            }

            function f(a, b, f, e) {
                var l = xa,
                    k = ya,
                    n = za,
                    q = Aa;
                b = b.vertices;
                for (var t = null, r = 0; r !== b.length + 1; r++) {
                    var v = b[(r + 1) % b.length];
                    d.rotate(l, b[r % b.length], e);
                    d.rotate(k, v, e);
                    m(l, l, f);
                    m(k, k, f);
                    h(n, l, a);
                    h(q, k, a);
                    v = d.crossLength(n, q);
                    if (null === t && (t = v), 0 >= v * t) return !1;
                    t = v
                }
                return !0
            }
            var d = b("../math/vec2"),
                h = d.sub,
                m = d.add,
                q = d.dot,
                n = (b("../utils/Utils"), b("../utils/ContactEquationPool")),
                r = b("../utils/FrictionEquationPool"),
                t = b("../utils/TupleDictionary"),
                u = b("../equations/Equation");
            k = (b("../equations/ContactEquation"), b("../equations/FrictionEquation"), b("../shapes/Circle"));
            var w = b("../shapes/Convex"),
                v = b("../shapes/Shape"),
                y = (b("../objects/Body"), b("../shapes/Box"));
            e.exports = a;
            var A = d.fromValues(0, 1),
                B = d.fromValues(0, 0),
                z = d.fromValues(0, 0),
                x = d.fromValues(0, 0),
                F = d.fromValues(0, 0),
                G = d.fromValues(0,
                    0),
                E = d.fromValues(0, 0),
                C = d.fromValues(0, 0),
                H = d.fromValues(0, 0),
                D = d.fromValues(0, 0),
                J = d.fromValues(0, 0),
                I = d.fromValues(0, 0),
                L = d.fromValues(0, 0),
                M = d.fromValues(0, 0),
                N = d.fromValues(0, 0),
                O = d.fromValues(0, 0),
                Q = d.fromValues(0, 0),
                K = d.fromValues(0, 0),
                T = d.fromValues(0, 0),
                R = [],
                P = d.create(),
                V = d.create();
            a.prototype.bodiesOverlap = function(a, d) {
                for (var b = 0, f = a.shapes.length; b !== f; b++) {
                    var h = a.shapes[b];
                    a.toWorldFrame(P, h.position);
                    for (var e = 0, l = d.shapes.length; e !== l; e++) {
                        var k = d.shapes[e];
                        if (d.toWorldFrame(V,
                                k.position), this[h.type | k.type](a, h, P, h.angle + a.angle, d, k, V, k.angle + d.angle, !0)) return !0
                    }
                }
                return !1
            };
            a.prototype.collidedLastStep = function(a, d) {
                return !!this.collidingBodiesLastStep.get(0 | a.id, 0 | d.id)
            };
            a.prototype.reset = function() {
                this.collidingBodiesLastStep.reset();
                for (var a = this.contactEquations, d = a.length; d--;) {
                    var b = a[d];
                    this.collidingBodiesLastStep.set(b.bodyA.id, b.bodyB.id, !0)
                }
                a = this.contactEquations;
                d = this.frictionEquations;
                for (b = 0; b < a.length; b++) this.contactEquationPool.release(a[b]);
                for (b =
                    0; b < d.length; b++) this.frictionEquationPool.release(d[b]);
                this.contactEquations.length = this.frictionEquations.length = 0
            };
            a.prototype.createContactEquation = function(a, d, b, f) {
                var h = this.contactEquationPool.get();
                return h.bodyA = a, h.bodyB = d, h.shapeA = b, h.shapeB = f, h.restitution = this.restitution, h.firstImpact = !this.collidedLastStep(a, d), h.stiffness = this.stiffness, h.relaxation = this.relaxation, h.needsUpdate = !0, h.enabled = this.enabledEquations, h.offset = this.contactSkinSize, h
            };
            a.prototype.createFrictionEquation =
                function(a, d, b, f) {
                    var h = this.frictionEquationPool.get();
                    return h.bodyA = a, h.bodyB = d, h.shapeA = b, h.shapeB = f, h.setSlipForce(this.slipForce), h.frictionCoefficient = this.frictionCoefficient, h.relativeVelocity = this.surfaceVelocity, h.enabled = this.enabledEquations, h.needsUpdate = !0, h.stiffness = this.frictionStiffness, h.relaxation = this.frictionRelaxation, h.contactEquations.length = 0, h
                };
            a.prototype.createFrictionFromContact = function(a) {
                var b = this.createFrictionEquation(a.bodyA, a.bodyB, a.shapeA, a.shapeB);
                return d.copy(b.contactPointA,
                    a.contactPointA), d.copy(b.contactPointB, a.contactPointB), d.rotate90cw(b.t, a.normalA), b.contactEquations.push(a), b
            };
            a.prototype.createFrictionFromAverage = function(a) {
                var b = this.contactEquations[this.contactEquations.length - 1],
                    f = this.createFrictionEquation(b.bodyA, b.bodyB, b.shapeA, b.shapeB),
                    h = b.bodyA;
                b.bodyB;
                d.set(f.contactPointA, 0, 0);
                d.set(f.contactPointB, 0, 0);
                d.set(f.t, 0, 0);
                for (var e = 0; e !== a; e++) b = this.contactEquations[this.contactEquations.length - 1 - e], b.bodyA === h ? (d.add(f.t, f.t, b.normalA), d.add(f.contactPointA,
                    f.contactPointA, b.contactPointA), d.add(f.contactPointB, f.contactPointB, b.contactPointB)) : (d.sub(f.t, f.t, b.normalA), d.add(f.contactPointA, f.contactPointA, b.contactPointB), d.add(f.contactPointB, f.contactPointB, b.contactPointA)), f.contactEquations.push(b);
                a = 1 / a;
                return d.scale(f.contactPointA, f.contactPointA, a), d.scale(f.contactPointB, f.contactPointB, a), d.normalize(f.t, f.t), d.rotate90cw(f.t, f.t), f
            };
            a.prototype[v.LINE | v.CONVEX] = a.prototype.convexLine = function(a, d, b, f, h, e, l, k, m) {
                return m ? !1 : 0
            };
            a.prototype[v.LINE |
                v.BOX] = a.prototype.lineBox = function(a, d, b, f, h, e, l, k, m) {
                return m ? !1 : 0
            };
            var Y = new y({
                    width: 1,
                    height: 1
                }),
                S = d.create();
            a.prototype[v.CAPSULE | v.CONVEX] = a.prototype[v.CAPSULE | v.BOX] = a.prototype.convexCapsule = function(a, b, f, h, e, k, m, n, q) {
                d.set(S, k.length / 2, 0);
                d.rotate(S, S, n);
                d.add(S, S, m);
                var t = this.circleConvex(e, k, S, n, a, b, f, h, q, k.radius);
                d.set(S, -k.length / 2, 0);
                d.rotate(S, S, n);
                d.add(S, S, m);
                var r = this.circleConvex(e, k, S, n, a, b, f, h, q, k.radius);
                if (q && (t || r)) return !0;
                l(Y, k);
                return this.convexConvex(a, b, f, h, e,
                    Y, m, n, q) + t + r
            };
            a.prototype[v.CAPSULE | v.LINE] = a.prototype.lineCapsule = function(a, d, b, f, h, e, l, k, m) {
                return m ? !1 : 0
            };
            var fa = d.create(),
                ga = d.create(),
                aa = new y({
                    width: 1,
                    height: 1
                });
            a.prototype[v.CAPSULE | v.CAPSULE] = a.prototype.capsuleCapsule = function(a, b, f, h, e, k, m, n, q) {
                for (var t, r = 0, v = 0; 2 > v; v++) {
                    d.set(fa, (0 === v ? -1 : 1) * b.length / 2, 0);
                    d.rotate(fa, fa, h);
                    d.add(fa, fa, f);
                    for (var u = 0; 2 > u; u++) {
                        d.set(ga, (0 === u ? -1 : 1) * k.length / 2, 0);
                        d.rotate(ga, ga, n);
                        d.add(ga, ga, m);
                        this.enableFrictionReduction && (t = this.enableFriction, this.enableFriction = !1);
                        var w = this.circleCircle(a, b, fa, h, e, k, ga, n, q, b.radius, k.radius);
                        if (this.enableFrictionReduction && (this.enableFriction = t), q && w) return !0;
                        r += w
                    }
                }
                this.enableFrictionReduction && (t = this.enableFriction, this.enableFriction = !1);
                l(aa, b);
                v = this.convexCapsule(a, aa, f, h, e, k, m, n, q);
                if (this.enableFrictionReduction && (this.enableFriction = t), q && v) return !0;
                if (r += v, this.enableFrictionReduction) t = this.enableFriction, this.enableFriction = !1;
                l(aa, k);
                a = this.convexCapsule(e, aa, m, n, a, b, f, h, q);
                return this.enableFrictionReduction &&
                    (this.enableFriction = t), q && a ? !0 : (r += a, this.enableFrictionReduction && r && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(r)), r)
            };
            a.prototype[v.LINE | v.LINE] = a.prototype.lineLine = function(a, d, b, f, h, e, l, k, m) {
                return m ? !1 : 0
            };
            a.prototype[v.PLANE | v.LINE] = a.prototype.planeLine = function(a, b, f, e, l, k, n, t, r) {
                var v = 0;
                d.set(B, -k.length / 2, 0);
                d.set(z, k.length / 2, 0);
                d.rotate(x, B, t);
                d.rotate(F, z, t);
                m(x, x, n);
                m(F, F, n);
                d.copy(B, x);
                d.copy(z, F);
                h(G, z, B);
                d.normalize(E, G);
                d.rotate90cw(D, E);
                d.rotate(H,
                    A, e);
                R[0] = B;
                R[1] = z;
                for (e = 0; e < R.length; e++) {
                    t = R[e];
                    h(C, t, f);
                    var u = q(C, H);
                    if (0 > u) {
                        if (r) return !0;
                        var w = this.createContactEquation(a, l, b, k);
                        v++;
                        d.copy(w.normalA, H);
                        d.normalize(w.normalA, w.normalA);
                        d.scale(C, H, u);
                        h(w.contactPointA, t, C);
                        h(w.contactPointA, w.contactPointA, a.position);
                        h(w.contactPointB, t, n);
                        m(w.contactPointB, w.contactPointB, n);
                        h(w.contactPointB, w.contactPointB, l.position);
                        this.contactEquations.push(w);
                        this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(w))
                    }
                }
                return r ?
                    !1 : (this.enableFrictionReduction || v && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(v)), v)
            };
            a.prototype[v.PARTICLE | v.CAPSULE] = a.prototype.particleCapsule = function(a, d, b, f, h, e, l, k, m) {
                return this.circleLine(a, d, b, f, h, e, l, k, m, e.radius, 0)
            };
            a.prototype[v.CIRCLE | v.LINE] = a.prototype.circleLine = function(a, b, f, e, l, k, n, t, r, v, w) {
                v = v || 0;
                w = "undefined" != typeof w ? w : b.radius;
                d.set(H, -k.length / 2, 0);
                d.set(D, k.length / 2, 0);
                d.rotate(J, H, t);
                d.rotate(I, D, t);
                m(J, J, n);
                m(I, I, n);
                d.copy(H, J);
                d.copy(D, I);
                h(E, D, H);
                d.normalize(C, E);
                d.rotate90cw(G, C);
                h(L, f, H);
                t = q(L, G);
                h(F, H, n);
                h(M, f, n);
                e = w + v;
                if (Math.abs(t) < e) {
                    d.scale(B, G, t);
                    h(x, f, B);
                    d.scale(z, G, q(G, M));
                    d.normalize(z, z);
                    d.scale(z, z, v);
                    m(x, x, z);
                    t = q(C, x);
                    var u = q(C, H),
                        y = q(C, D);
                    if (t > u && y > t) {
                        if (r) return !0;
                        b = this.createContactEquation(a, l, b, k);
                        return d.scale(b.normalA, B, -1), d.normalize(b.normalA, b.normalA), d.scale(b.contactPointA, b.normalA, w), m(b.contactPointA, b.contactPointA, f), h(b.contactPointA, b.contactPointA, a.position), h(b.contactPointB, x,
                            n), m(b.contactPointB, b.contactPointB, n), h(b.contactPointB, b.contactPointB, l.position), this.contactEquations.push(b), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b)), 1
                    }
                }
                R[0] = H;
                R[1] = D;
                for (u = 0; u < R.length; u++)
                    if (t = R[u], h(L, t, f), d.squaredLength(L) < Math.pow(e, 2)) {
                        if (r) return !0;
                        b = this.createContactEquation(a, l, b, k);
                        return d.copy(b.normalA, L), d.normalize(b.normalA, b.normalA), d.scale(b.contactPointA, b.normalA, w), m(b.contactPointA, b.contactPointA, f), h(b.contactPointA, b.contactPointA,
                            a.position), h(b.contactPointB, t, n), d.scale(N, b.normalA, -v), m(b.contactPointB, b.contactPointB, N), m(b.contactPointB, b.contactPointB, n), h(b.contactPointB, b.contactPointB, l.position), this.contactEquations.push(b), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b)), 1
                    }
                return 0
            };
            a.prototype[v.CIRCLE | v.CAPSULE] = a.prototype.circleCapsule = function(a, d, b, f, h, e, l, k, m) {
                return this.circleLine(a, d, b, f, h, e, l, k, m, e.radius)
            };
            a.prototype[v.CIRCLE | v.CONVEX] = a.prototype[v.CIRCLE | v.BOX] =
                a.prototype.circleConvex = function(a, b, e, l, k, n, q, t, r, v) {
                    v = "number" == typeof v ? v : b.radius;
                    l = !1;
                    for (var w = Number.MAX_VALUE, u = n.vertices, y = 0; y !== u.length + 1; y++) {
                        var A = u[(y + 1) % u.length];
                        if (d.rotate(B, u[y % u.length], t), d.rotate(z, A, t), m(B, B, q), m(z, z, q), h(x, z, B), d.normalize(F, x), d.rotate90cw(G, F), d.scale(N, G, -b.radius), m(N, N, e), f(N, n, q, t)) d.sub(O, B, N), A = Math.abs(d.dot(O, G)), w > A && (d.copy(Q, N), w = A, d.scale(M, G, A), d.add(M, M, N), l = !0)
                    }
                    if (l) {
                        if (r) return !0;
                        b = this.createContactEquation(a, k, b, n);
                        return d.sub(b.normalA,
                            Q, e), d.normalize(b.normalA, b.normalA), d.scale(b.contactPointA, b.normalA, v), m(b.contactPointA, b.contactPointA, e), h(b.contactPointA, b.contactPointA, a.position), h(b.contactPointB, M, q), m(b.contactPointB, b.contactPointB, q), h(b.contactPointB, b.contactPointB, k.position), this.contactEquations.push(b), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b)), 1
                    }
                    if (0 < v)
                        for (y = 0; y < u.length; y++)
                            if (d.rotate(I, u[y], t), m(I, I, q), h(J, I, e), d.squaredLength(J) < Math.pow(v, 2)) {
                                if (r) return !0;
                                b = this.createContactEquation(a,
                                    k, b, n);
                                return d.copy(b.normalA, J), d.normalize(b.normalA, b.normalA), d.scale(b.contactPointA, b.normalA, v), m(b.contactPointA, b.contactPointA, e), h(b.contactPointA, b.contactPointA, a.position), h(b.contactPointB, I, q), m(b.contactPointB, b.contactPointB, q), h(b.contactPointB, b.contactPointB, k.position), this.contactEquations.push(b), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b)), 1
                            }
                    return 0
                };
            var xa = d.create(),
                ya = d.create(),
                za = d.create(),
                Aa = d.create();
            a.prototype[v.PARTICLE |
                v.CONVEX] = a.prototype[v.PARTICLE | v.BOX] = a.prototype.particleConvex = function(a, b, e, l, k, n, t, r, v) {
                l = Number.MAX_VALUE;
                var u = !1,
                    w = n.vertices;
                if (!f(e, n, t, r)) return 0;
                if (v) return !0;
                for (v = 0; v !== w.length + 1; v++) {
                    var y = w[(v + 1) % w.length];
                    d.rotate(B, w[v % w.length], r);
                    d.rotate(z, y, r);
                    m(B, B, t);
                    m(z, z, t);
                    h(x, z, B);
                    d.normalize(F, x);
                    d.rotate90cw(G, F);
                    h(J, e, B);
                    q(J, G);
                    h(E, B, t);
                    h(C, e, t);
                    d.sub(K, B, e);
                    y = Math.abs(d.dot(K, G));
                    l > y && (l = y, d.scale(M, G, y), d.add(M, M, e), d.copy(T, G), u = !0)
                }
                return u ? (b = this.createContactEquation(a, k,
                    b, n), d.scale(b.normalA, T, -1), d.normalize(b.normalA, b.normalA), d.set(b.contactPointA, 0, 0), m(b.contactPointA, b.contactPointA, e), h(b.contactPointA, b.contactPointA, a.position), h(b.contactPointB, M, t), m(b.contactPointB, b.contactPointB, t), h(b.contactPointB, b.contactPointB, k.position), this.contactEquations.push(b), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b)), 1) : 0
            };
            a.prototype[v.CIRCLE] = a.prototype.circleCircle = function(a, b, f, e, l, k, n, q, t, r, v) {
                r = r || b.radius;
                v = v || k.radius;
                h(B, f, n);
                e = r + v;
                if (d.squaredLength(B) > Math.pow(e, 2)) return 0;
                if (t) return !0;
                b = this.createContactEquation(a, l, b, k);
                return h(b.normalA, n, f), d.normalize(b.normalA, b.normalA), d.scale(b.contactPointA, b.normalA, r), d.scale(b.contactPointB, b.normalA, -v), m(b.contactPointA, b.contactPointA, f), h(b.contactPointA, b.contactPointA, a.position), m(b.contactPointB, b.contactPointB, n), h(b.contactPointB, b.contactPointB, l.position), this.contactEquations.push(b), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b)),
                    1
            };
            a.prototype[v.PLANE | v.CONVEX] = a.prototype[v.PLANE | v.BOX] = a.prototype.planeConvex = function(a, b, f, e, l, k, n, t, r) {
                var v = 0;
                d.rotate(z, A, e);
                for (e = 0; e !== k.vertices.length; e++)
                    if (d.rotate(B, k.vertices[e], t), m(B, B, n), h(x, B, f), 0 >= q(x, z)) {
                        if (r) return !0;
                        v++;
                        var w = this.createContactEquation(a, l, b, k);
                        h(x, B, f);
                        d.copy(w.normalA, z);
                        var u = q(x, w.normalA);
                        d.scale(x, w.normalA, u);
                        h(w.contactPointB, B, l.position);
                        h(w.contactPointA, B, x);
                        h(w.contactPointA, w.contactPointA, a.position);
                        this.contactEquations.push(w);
                        this.enableFrictionReduction ||
                            this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(w))
                    }
                return this.enableFrictionReduction && this.enableFriction && v && this.frictionEquations.push(this.createFrictionFromAverage(v)), v
            };
            a.prototype[v.PARTICLE | v.PLANE] = a.prototype.particlePlane = function(a, b, f, e, l, k, m, n, t) {
                n = n || 0;
                h(B, f, m);
                d.rotate(z, A, n);
                e = q(B, z);
                if (0 < e) return 0;
                if (t) return !0;
                b = this.createContactEquation(l, a, k, b);
                return d.copy(b.normalA, z), d.scale(B, b.normalA, e), h(b.contactPointA, f, B), h(b.contactPointA, b.contactPointA,
                    l.position), h(b.contactPointB, f, a.position), this.contactEquations.push(b), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b)), 1
            };
            a.prototype[v.CIRCLE | v.PARTICLE] = a.prototype.circleParticle = function(a, b, f, e, l, k, n, q, t) {
                if (h(B, n, f), d.squaredLength(B) > Math.pow(b.radius, 2)) return 0;
                if (t) return !0;
                e = this.createContactEquation(a, l, b, k);
                return d.copy(e.normalA, B), d.normalize(e.normalA, e.normalA), d.scale(e.contactPointA, e.normalA, b.radius), m(e.contactPointA, e.contactPointA, f),
                    h(e.contactPointA, e.contactPointA, a.position), h(e.contactPointB, n, l.position), this.contactEquations.push(e), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(e)), 1
            };
            var qa = new k({
                    radius: 1
                }),
                ha = d.create(),
                ia = d.create();
            d.create();
            a.prototype[v.PLANE | v.CAPSULE] = a.prototype.planeCapsule = function(a, b, f, h, e, l, k, n, q) {
                d.set(ha, -l.length / 2, 0);
                d.rotate(ha, ha, n);
                m(ha, ha, k);
                d.set(ia, l.length / 2, 0);
                d.rotate(ia, ia, n);
                m(ia, ia, k);
                qa.radius = l.radius;
                var t;
                this.enableFrictionReduction &&
                    (t = this.enableFriction, this.enableFriction = !1);
                l = this.circlePlane(e, qa, ha, 0, a, b, f, h, q);
                a = this.circlePlane(e, qa, ia, 0, a, b, f, h, q);
                if (this.enableFrictionReduction && (this.enableFriction = t), q) return l || a;
                q = l + a;
                return this.enableFrictionReduction && q && this.frictionEquations.push(this.createFrictionFromAverage(q)), q
            };
            a.prototype[v.CIRCLE | v.PLANE] = a.prototype.circlePlane = function(a, b, f, e, l, k, n, t, r) {
                e = t || 0;
                h(B, f, n);
                d.rotate(z, A, e);
                e = q(z, B);
                if (e > b.radius) return 0;
                if (r) return !0;
                k = this.createContactEquation(l,
                    a, k, b);
                return d.copy(k.normalA, z), d.scale(k.contactPointB, k.normalA, -b.radius), m(k.contactPointB, k.contactPointB, f), h(k.contactPointB, k.contactPointB, a.position), d.scale(x, k.normalA, e), h(k.contactPointA, B, x), m(k.contactPointA, k.contactPointA, n), h(k.contactPointA, k.contactPointA, l.position), this.contactEquations.push(k), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(k)), 1
            };
            a.prototype[v.CONVEX] = a.prototype[v.CONVEX | v.BOX] = a.prototype[v.BOX] = a.prototype.convexConvex =
                function(b, f, e, l, k, n, t, r, v, w) {
                    var u = 0;
                    w = "number" == typeof w ? w : 0;
                    if (!a.findSeparatingAxis(f, e, l, n, t, r, B)) return 0;
                    h(H, t, e);
                    0 < q(B, H) && d.scale(B, B, -1);
                    var y = a.getClosestEdge(f, l, B, !0),
                        A = a.getClosestEdge(n, r, B);
                    if (-1 === y || -1 === A) return 0;
                    for (var M = 0; 2 > M; M++) {
                        var I = y,
                            P = A,
                            E = f,
                            L = n,
                            R = e,
                            S = t,
                            N = l,
                            T = r,
                            O = b,
                            J = k;
                        if (0 === M) {
                            var Q;
                            Q = I;
                            I = P;
                            P = Q;
                            Q = E;
                            E = L;
                            L = Q;
                            Q = R;
                            R = S;
                            S = Q;
                            Q = N;
                            N = T;
                            T = Q;
                            Q = O;
                            O = J;
                            J = Q
                        }
                        for (Q = P; P + 2 > Q; Q++) {
                            d.rotate(z, L.vertices[(Q + L.vertices.length) % L.vertices.length], T);
                            m(z, z, S);
                            for (var K = 0, Y = I - 1; I + 2 > Y; Y++) {
                                var V =
                                    E.vertices[(Y + E.vertices.length) % E.vertices.length],
                                    aa = E.vertices[(Y + 1 + E.vertices.length) % E.vertices.length];
                                d.rotate(x, V, N);
                                d.rotate(F, aa, N);
                                m(x, x, R);
                                m(F, F, R);
                                h(G, F, x);
                                d.rotate90cw(D, G);
                                d.normalize(D, D);
                                h(H, z, x);
                                V = q(D, H);
                                (Y === I && w >= V || Y !== I && 0 >= V) && K++
                            }
                            if (3 <= K) {
                                if (v) return !0;
                                K = this.createContactEquation(O, J, E, L);
                                u++;
                                V = E.vertices[I % E.vertices.length];
                                aa = E.vertices[(I + 1) % E.vertices.length];
                                d.rotate(x, V, N);
                                d.rotate(F, aa, N);
                                m(x, x, R);
                                m(F, F, R);
                                h(G, F, x);
                                d.rotate90cw(K.normalA, G);
                                d.normalize(K.normalA, K.normalA);
                                h(H, z, x);
                                V = q(K.normalA, H);
                                d.scale(C, K.normalA, V);
                                h(K.contactPointA, z, R);
                                h(K.contactPointA, K.contactPointA, C);
                                m(K.contactPointA, K.contactPointA, R);
                                h(K.contactPointA, K.contactPointA, O.position);
                                h(K.contactPointB, z, S);
                                m(K.contactPointB, K.contactPointB, S);
                                h(K.contactPointB, K.contactPointB, J.position);
                                this.contactEquations.push(K);
                                this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(K))
                            }
                        }
                    }
                    return this.enableFrictionReduction && this.enableFriction &&
                        u && this.frictionEquations.push(this.createFrictionFromAverage(u)), u
                };
            var la = d.fromValues(0, 0);
            a.projectConvexOntoAxis = function(a, b, f, h, e) {
                var l, k = null,
                    m = null;
                d.rotate(la, h, -f);
                for (f = 0; f < a.vertices.length; f++) l = a.vertices[f], l = q(l, la), (null === k || l > k) && (k = l), (null === m || m > l) && (m = l);
                m > k && (k = m = k);
                a = q(b, h);
                d.set(e, m + a, k + a)
            };
            var ra = d.fromValues(0, 0),
                sa = d.fromValues(0, 0),
                ta = d.fromValues(0, 0),
                U = d.fromValues(0, 0),
                ba = d.fromValues(0, 0),
                ca = d.fromValues(0, 0);
            a.findSeparatingAxis = function(b, f, e, l, k, m, n) {
                var q = null,
                    t, r = !1;
                if (b instanceof y && l instanceof y)
                    for (var v = 0; 2 !== v; v++) {
                        var w, u = e;
                        1 === v && (u = m);
                        for (var x = 0; 2 !== x; x++) {
                            0 === x ? d.set(U, 0, 1) : 1 === x && d.set(U, 1, 0);
                            0 !== u && d.rotate(U, U, u);
                            a.projectConvexOntoAxis(b, f, e, U, ba);
                            a.projectConvexOntoAxis(l, k, m, U, ca);
                            t = ba;
                            var A = ca;
                            ba[0] > ca[0] && (A = ba, t = ca);
                            A = A[0] - t[1];
                            t = 0 >= A;
                            (null === q || A > q) && (d.copy(n, U), q = A, r = t)
                        }
                    } else
                        for (v = 0; 2 !== v; v++)
                            for (w = b, u = e, 1 === v && (w = l, u = m), x = 0; x !== w.vertices.length; x++) d.rotate(sa, w.vertices[x], u), d.rotate(ta, w.vertices[(x + 1) % w.vertices.length],
                                u), h(ra, ta, sa), d.rotate90cw(U, ra), d.normalize(U, U), a.projectConvexOntoAxis(b, f, e, U, ba), a.projectConvexOntoAxis(l, k, m, U, ca), t = ba, A = ca, ba[0] > ca[0] && (A = ba, t = ca), A = A[0] - t[1], t = 0 >= A, (null === q || A > q) && (d.copy(n, U), q = A, r = t);
                return r
            };
            var na = d.fromValues(0, 0),
                ua = d.fromValues(0, 0),
                oa = d.fromValues(0, 0);
            a.getClosestEdge = function(a, b, f, e) {
                d.rotate(na, f, -b);
                e && d.scale(na, na, -1);
                b = -1;
                f = a.vertices.length;
                e = -1;
                for (var l = 0; l !== f; l++) {
                    h(ua, a.vertices[(l + 1) % f], a.vertices[l % f]);
                    d.rotate90cw(oa, ua);
                    d.normalize(oa, oa);
                    var k = q(oa, na);
                    (-1 === b || k > e) && (b = l % f, e = k)
                }
                return b
            };
            var da = d.create(),
                ea = d.create(),
                W = d.create(),
                ma = d.create(),
                va = d.create(),
                Z = d.create(),
                wa = d.create();
            a.prototype[v.CIRCLE | v.HEIGHTFIELD] = a.prototype.circleHeightfield = function(a, b, f, e, l, k, n, q, t, r) {
                e = k.heights;
                r = r || b.radius;
                q = k.elementWidth;
                var v = Math.floor((f[0] - r - n[0]) / q),
                    w = Math.ceil((f[0] + r - n[0]) / q);
                0 > v && (v = 0);
                w >= e.length && (w = e.length - 1);
                for (var u = e[v], x = e[w], y = v; w > y; y++) e[y] < x && (x = e[y]), e[y] > u && (u = e[y]);
                if (f[1] - r > u) return t ? !1 : 0;
                for (y = v; w > y; y++)
                    if (d.set(W,
                            y * q, e[y]), d.set(ma, (y + 1) * q, e[y + 1]), d.add(W, W, n), d.add(ma, ma, n), d.sub(Z, ma, W), d.rotate(Z, Z, Math.PI / 2), d.normalize(Z, Z), d.scale(da, Z, -r), d.add(da, da, f), d.sub(ea, da, W), u = d.dot(ea, Z), da[0] >= W[0] && da[0] < ma[0] && 0 >= u) {
                        if (t) return !0;
                        d.scale(ea, Z, -u);
                        d.add(va, da, ea);
                        d.copy(wa, Z);
                        x = this.createContactEquation(l, a, k, b);
                        d.copy(x.normalA, wa);
                        d.scale(x.contactPointB, x.normalA, -r);
                        m(x.contactPointB, x.contactPointB, f);
                        h(x.contactPointB, x.contactPointB, a.position);
                        d.copy(x.contactPointA, va);
                        d.sub(x.contactPointA, x.contactPointA,
                            l.position);
                        this.contactEquations.push(x);
                        this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(x))
                    }
                if (u = !1, 0 < r)
                    for (y = v; w >= y; y++)
                        if (d.set(W, y * q, e[y]), d.add(W, W, n), d.sub(ea, f, W), d.squaredLength(ea) < Math.pow(r, 2)) {
                            if (t) return !0;
                            u = !0;
                            x = this.createContactEquation(l, a, k, b);
                            d.copy(x.normalA, ea);
                            d.normalize(x.normalA, x.normalA);
                            d.scale(x.contactPointB, x.normalA, -r);
                            m(x.contactPointB, x.contactPointB, f);
                            h(x.contactPointB, x.contactPointB, a.position);
                            h(x.contactPointA, W, n);
                            m(x.contactPointA,
                                x.contactPointA, n);
                            h(x.contactPointA, x.contactPointA, l.position);
                            this.contactEquations.push(x);
                            this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(x))
                        }
                return u ? 1 : 0
            };
            var ja = d.create(),
                ka = d.create(),
                pa = d.create(),
                X = new w({
                    vertices: [d.create(), d.create(), d.create(), d.create()]
                });
            a.prototype[v.BOX | v.HEIGHTFIELD] = a.prototype[v.CONVEX | v.HEIGHTFIELD] = a.prototype.convexHeightfield = function(a, b, f, h, e, l, k, m, n) {
                m = l.heights;
                l = l.elementWidth;
                var q = Math.floor((a.aabb.lowerBound[0] - k[0]) /
                        l),
                    t = Math.ceil((a.aabb.upperBound[0] - k[0]) / l);
                0 > q && (q = 0);
                t >= m.length && (t = m.length - 1);
                for (var r = m[q], v = m[t], w = q; t > w; w++) m[w] < v && (v = m[w]), m[w] > r && (r = m[w]);
                if (a.aabb.lowerBound[1] > r) return n ? !1 : 0;
                r = 0;
                for (w = q; t > w; w++) d.set(ja, w * l, m[w]), d.set(ka, (w + 1) * l, m[w + 1]), d.add(ja, ja, k), d.add(ka, ka, k), d.set(pa, .5 * (ka[0] + ja[0]), .5 * (ka[1] + ja[1] - 100)), d.sub(X.vertices[0], ka, pa), d.sub(X.vertices[1], ja, pa), d.copy(X.vertices[2], X.vertices[1]), d.copy(X.vertices[3], X.vertices[0]), X.vertices[2][1] -= 100, X.vertices[3][1] -=
                    100, r += this.convexConvex(a, b, f, h, e, X, pa, 0, n);
                return r
            }
        }, {
            "../equations/ContactEquation": 21,
            "../equations/Equation": 22,
            "../equations/FrictionEquation": 23,
            "../math/vec2": 30,
            "../objects/Body": 31,
            "../shapes/Box": 37,
            "../shapes/Circle": 39,
            "../shapes/Convex": 40,
            "../shapes/Shape": 45,
            "../utils/ContactEquationPool": 48,
            "../utils/FrictionEquationPool": 49,
            "../utils/TupleDictionary": 56,
            "../utils/Utils": 57
        }],
        11: [function(b, e, k) {
            function a(d) {
                d = d || {};
                this.from = d.from ? l.fromValues(d.from[0], d.from[1]) : l.create();
                this.to = d.to ? l.fromValues(d.to[0], d.to[1]) : l.create();
                this.checkCollisionResponse = void 0 !== d.checkCollisionResponse ? d.checkCollisionResponse : !0;
                this.skipBackfaces = !!d.skipBackfaces;
                this.collisionMask = void 0 !== d.collisionMask ? d.collisionMask : -1;
                this.collisionGroup = void 0 !== d.collisionGroup ? d.collisionGroup : -1;
                this.mode = void 0 !== d.mode ? d.mode : a.ANY;
                this.callback = d.callback || function(a) {};
                this.direction = l.create();
                this.length = 1;
                this.update()
            }
            e.exports = a;
            var l = b("../math/vec2");
            b("../collision/RaycastResult");
            b("../shapes/Shape");
            b("../collision/AABB");
            a.prototype.constructor = a;
            a.CLOSEST = 1;
            a.ANY = 2;
            a.ALL = 4;
            a.prototype.update = function() {
                var a = this.direction;
                l.sub(a, this.to, this.from);
                this.length = l.length(a);
                l.normalize(a, a)
            };
            a.prototype.intersectBodies = function(a, d) {
                for (var b = 0, f = d.length; !a.shouldStop(this) && f > b; b++) {
                    var h = d[b],
                        e = h.getAABB();
                    (0 <= e.overlapsRay(this) || e.containsPoint(this.from)) && this.intersectBody(a, h)
                }
            };
            var f = l.create();
            a.prototype.intersectBody = function(a, d) {
                var b = this.checkCollisionResponse;
                if (!b || d.collisionResponse)
                    for (var h = 0, e = d.shapes.length; e > h; h++) {
                        var k = d.shapes[h];
                        if ((!b || k.collisionResponse) && 0 !== (this.collisionGroup & k.collisionMask) && 0 !== (k.collisionGroup & this.collisionMask) && (l.rotate(f, k.position, d.angle), l.add(f, f, d.position), this.intersectShape(a, k, k.angle + d.angle, f, d), a.shouldStop(this))) break
                    }
            };
            a.prototype.intersectShape = function(a, b, f, e, k) {
                var m = this.from,
                    n = this.direction;
                l.sub(d, e, m);
                var q = l.dot(d, n);
                (l.scale(h, n, q), l.add(h, h, m), l.squaredDistance(e, h)) > b.boundingRadius *
                    b.boundingRadius || (this._currentBody = k, this._currentShape = b, b.raycast(a, this, e, f), this._currentBody = this._currentShape = null)
            };
            a.prototype.getAABB = function(a) {
                var d = this.to,
                    b = this.from;
                l.set(a.lowerBound, Math.min(d[0], b[0]), Math.min(d[1], b[1]));
                l.set(a.upperBound, Math.max(d[0], b[0]), Math.max(d[1], b[1]))
            };
            l.create();
            a.prototype.reportIntersection = function(d, b, f, h) {
                var e = (this.from, this.to, this._currentShape),
                    k = this._currentBody;
                if (!(this.skipBackfaces && 0 < l.dot(f, this.direction))) switch (this.mode) {
                    case a.ALL:
                        d.set(f,
                            e, k, b, h);
                        this.callback(d);
                        break;
                    case a.CLOSEST:
                        (b < d.fraction || !d.hasHit()) && d.set(f, e, k, b, h);
                        break;
                    case a.ANY:
                        d.set(f, e, k, b, h)
                }
            };
            var d = l.create(),
                h = l.create()
        }, {
            "../collision/AABB": 7,
            "../collision/RaycastResult": 12,
            "../math/vec2": 30,
            "../shapes/Shape": 45
        }],
        12: [function(b, e, k) {
            function a() {
                this.normal = l.create();
                this.body = this.shape = null;
                this.fraction = this.faceIndex = -1;
                this.isStopped = !1
            }
            var l = b("../math/vec2"),
                f = b("../collision/Ray");
            e.exports = a;
            a.prototype.reset = function() {
                l.set(this.normal, 0, 0);
                this.body =
                    this.shape = null;
                this.fraction = this.faceIndex = -1;
                this.isStopped = !1
            };
            a.prototype.getHitDistance = function(a) {
                return l.distance(a.from, a.to) * this.fraction
            };
            a.prototype.hasHit = function() {
                return -1 !== this.fraction
            };
            a.prototype.getHitPoint = function(a, b) {
                l.lerp(a, b.from, b.to, this.fraction)
            };
            a.prototype.stop = function() {
                this.isStopped = !0
            };
            a.prototype.shouldStop = function(a) {
                return this.isStopped || -1 !== this.fraction && a.mode === f.ANY
            };
            a.prototype.set = function(a, b, f, e, k) {
                l.copy(this.normal, a);
                this.shape = b;
                this.body =
                    f;
                this.fraction = e;
                this.faceIndex = k
            }
        }, {
            "../collision/Ray": 11,
            "../math/vec2": 30
        }],
        13: [function(b, e, k) {
            function a() {
                f.call(this, f.SAP);
                this.axisList = [];
                this.axisIndex = 0;
                var a = this;
                this._addBodyHandler = function(d) {
                    a.axisList.push(d.body)
                };
                this._removeBodyHandler = function(d) {
                    d = a.axisList.indexOf(d.body); - 1 !== d && a.axisList.splice(d, 1)
                }
            }
            var l = b("../utils/Utils"),
                f = b("../collision/Broadphase");
            e.exports = a;
            a.prototype = new f;
            a.prototype.constructor = a;
            a.prototype.setWorld = function(a) {
                this.axisList.length = 0;
                l.appendArray(this.axisList, a.bodies);
                a.off("addBody", this._addBodyHandler).off("removeBody", this._removeBodyHandler);
                a.on("addBody", this._addBodyHandler).on("removeBody", this._removeBodyHandler);
                this.world = a
            };
            a.sortAxisList = function(a, b) {
                b |= 0;
                for (var d = 1, f = a.length; f > d; d++) {
                    for (var h = a[d], e = d - 1; 0 <= e && !(a[e].aabb.lowerBound[b] <= h.aabb.lowerBound[b]); e--) a[e + 1] = a[e];
                    a[e + 1] = h
                }
                return a
            };
            a.prototype.sortList = function() {
                a.sortAxisList(this.axisList, this.axisIndex)
            };
            a.prototype.getCollisionPairs = function(a) {
                a =
                    this.axisList;
                var d = this.result,
                    b = this.axisIndex;
                d.length = 0;
                for (var e = a.length; e--;) {
                    var l = a[e];
                    l.aabbNeedsUpdate && l.updateAABB()
                }
                this.sortList();
                e = 0;
                for (l = 0 | a.length; e !== l; e++)
                    for (var k = a[e], t = e + 1; l > t; t++) {
                        var u = a[t];
                        if (!(u.aabb.lowerBound[b] <= k.aabb.upperBound[b])) break;
                        f.canCollide(k, u) && this.boundingVolumeCheck(k, u) && d.push(k, u)
                    }
                return d
            };
            a.prototype.aabbQuery = function(a, b, f) {
                f = f || [];
                this.sortList();
                a = this.axisIndex;
                var d = "x";
                1 === a && (d = "y");
                2 === a && (d = "z");
                a = this.axisList;
                for (d = (b.lowerBound[d],
                        b.upperBound[d], 0); d < a.length; d++) {
                    var h = a[d];
                    h.aabbNeedsUpdate && h.updateAABB();
                    h.aabb.overlaps(b) && f.push(h)
                }
                return f
            }
        }, {
            "../collision/Broadphase": 8,
            "../utils/Utils": 57
        }],
        14: [function(b, e, k) {
            function a(a, d, b, e) {
                this.type = b;
                e = l.defaults(e, {
                    collideConnected: !0,
                    wakeUpBodies: !0
                });
                this.equations = [];
                this.bodyA = a;
                this.bodyB = d;
                this.collideConnected = e.collideConnected;
                e.wakeUpBodies && (a && a.wakeUp(), d && d.wakeUp())
            }
            e.exports = a;
            var l = b("../utils/Utils");
            a.prototype.update = function() {
                throw Error("method update() not implmemented in this Constraint subclass!");
            };
            a.DISTANCE = 1;
            a.GEAR = 2;
            a.LOCK = 3;
            a.PRISMATIC = 4;
            a.REVOLUTE = 5;
            a.prototype.setStiffness = function(a) {
                for (var d = this.equations, b = 0; b !== d.length; b++) {
                    var f = d[b];
                    f.stiffness = a;
                    f.needsUpdate = !0
                }
            };
            a.prototype.setRelaxation = function(a) {
                for (var d = this.equations, b = 0; b !== d.length; b++) {
                    var f = d[b];
                    f.relaxation = a;
                    f.needsUpdate = !0
                }
            }
        }, {
            "../utils/Utils": 57
        }],
        15: [function(b, e, k) {
            function a(a, b, e) {
                e = h.defaults(e, {
                    localAnchorA: [0, 0],
                    localAnchorB: [0, 0]
                });
                l.call(this, a, b, l.DISTANCE, e);
                this.localAnchorA = d.fromValues(e.localAnchorA[0],
                    e.localAnchorA[1]);
                this.localAnchorB = d.fromValues(e.localAnchorB[0], e.localAnchorB[1]);
                var k = this.localAnchorA,
                    m = this.localAnchorB;
                if (this.distance = 0, "number" == typeof e.distance) this.distance = e.distance;
                else {
                    var n = d.create(),
                        q = d.create(),
                        t = d.create();
                    d.rotate(n, k, a.angle);
                    d.rotate(q, m, b.angle);
                    d.add(t, b.position, q);
                    d.sub(t, t, n);
                    d.sub(t, t, a.position);
                    this.distance = d.length(t)
                }
                e = "undefined" == typeof e.maxForce ? Number.MAX_VALUE : e.maxForce;
                a = new f(a, b, -e, e);
                this.equations = [a];
                this.maxForce = e;
                var t = d.create(),
                    r = d.create(),
                    u = d.create(),
                    F = this;
                a.computeGq = function() {
                    var a = this.bodyA,
                        b = this.bodyB,
                        f = a.position,
                        h = b.position;
                    return d.rotate(r, k, a.angle), d.rotate(u, m, b.angle), d.add(t, h, u), d.sub(t, t, r), d.sub(t, t, f), d.length(t) - F.distance
                };
                this.setMaxForce(e);
                this.upperLimitEnabled = !1;
                this.upperLimit = 1;
                this.lowerLimitEnabled = !1;
                this.position = this.lowerLimit = 0
            }
            var l = b("./Constraint"),
                f = b("../equations/Equation"),
                d = b("../math/vec2"),
                h = b("../utils/Utils");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            var m =
                d.create(),
                q = d.create(),
                n = d.create();
            a.prototype.update = function() {
                var a = this.equations[0],
                    b = this.bodyA,
                    f = this.bodyB,
                    h = (this.distance, b.position),
                    e = f.position,
                    l = this.equations[0],
                    a = a.G;
                d.rotate(q, this.localAnchorA, b.angle);
                d.rotate(n, this.localAnchorB, f.angle);
                d.add(m, e, n);
                d.sub(m, m, q);
                d.sub(m, m, h);
                this.position = d.length(m);
                b = !1;
                if (this.upperLimitEnabled && this.position > this.upperLimit && (l.maxForce = 0, l.minForce = -this.maxForce, this.distance = this.upperLimit, b = !0), this.lowerLimitEnabled && this.position <
                    this.lowerLimit && (l.maxForce = this.maxForce, l.minForce = 0, this.distance = this.lowerLimit, b = !0), (this.lowerLimitEnabled || this.upperLimitEnabled) && !b) return void(l.enabled = !1);
                l.enabled = !0;
                d.normalize(m, m);
                l = d.crossLength(q, m);
                b = d.crossLength(n, m);
                a[0] = -m[0];
                a[1] = -m[1];
                a[2] = -l;
                a[3] = m[0];
                a[4] = m[1];
                a[5] = b
            };
            a.prototype.setMaxForce = function(a) {
                var d = this.equations[0];
                d.minForce = -a;
                d.maxForce = a
            };
            a.prototype.getMaxForce = function() {
                return this.equations[0].maxForce
            }
        }, {
            "../equations/Equation": 22,
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Constraint": 14
        }],
        16: [function(b, e, k) {
            function a(a, b, e) {
                e = e || {};
                l.call(this, a, b, l.GEAR, e);
                this.ratio = void 0 !== e.ratio ? e.ratio : 1;
                this.angle = void 0 !== e.angle ? e.angle : b.angle - this.ratio * a.angle;
                e.angle = this.angle;
                e.ratio = this.ratio;
                this.equations = [new f(a, b, e)];
                void 0 !== e.maxTorque && this.setMaxTorque(e.maxTorque)
            }
            var l = b("./Constraint"),
                f = (b("../equations/Equation"), b("../equations/AngleLockEquation"));
            b("../math/vec2");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.update =
                function() {
                    var a = this.equations[0];
                    a.ratio !== this.ratio && a.setRatio(this.ratio);
                    a.angle = this.angle
                };
            a.prototype.setMaxTorque = function(a) {
                this.equations[0].setMaxTorque(a)
            };
            a.prototype.getMaxTorque = function(a) {
                return this.equations[0].maxForce
            }
        }, {
            "../equations/AngleLockEquation": 20,
            "../equations/Equation": 22,
            "../math/vec2": 30,
            "./Constraint": 14
        }],
        17: [function(b, e, k) {
            function a(a, b, h) {
                h = h || {};
                l.call(this, a, b, l.LOCK, h);
                var e = "undefined" == typeof h.maxForce ? Number.MAX_VALUE : h.maxForce,
                    k = (h.localAngleB ||
                        0, new d(a, b, -e, e)),
                    m = new d(a, b, -e, e),
                    n = new d(a, b, -e, e),
                    q = f.create(),
                    t = f.create(),
                    r = this;
                k.computeGq = function() {
                    return f.rotate(q, r.localOffsetB, a.angle), f.sub(t, b.position, a.position), f.sub(t, t, q), t[0]
                };
                m.computeGq = function() {
                    return f.rotate(q, r.localOffsetB, a.angle), f.sub(t, b.position, a.position), f.sub(t, t, q), t[1]
                };
                var w = f.create(),
                    u = f.create();
                n.computeGq = function() {
                    return f.rotate(w, r.localOffsetB, b.angle - r.localAngleB), f.scale(w, w, -1), f.sub(t, a.position, b.position), f.add(t, t, w), f.rotate(u, w, -Math.PI /
                        2), f.normalize(u, u), f.dot(t, u)
                };
                this.localOffsetB = f.create();
                h.localOffsetB ? f.copy(this.localOffsetB, h.localOffsetB) : (f.sub(this.localOffsetB, b.position, a.position), f.rotate(this.localOffsetB, this.localOffsetB, -a.angle));
                this.localAngleB = 0;
                "number" == typeof h.localAngleB ? this.localAngleB = h.localAngleB : this.localAngleB = b.angle - a.angle;
                this.equations.push(k, m, n);
                this.setMaxForce(e)
            }
            var l = b("./Constraint"),
                f = b("../math/vec2"),
                d = b("../equations/Equation");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor =
                a;
            a.prototype.setMaxForce = function(a) {
                for (var d = this.equations, b = 0; b < this.equations.length; b++) d[b].maxForce = a, d[b].minForce = -a
            };
            a.prototype.getMaxForce = function() {
                return this.equations[0].maxForce
            };
            var h = f.create(),
                m = f.create(),
                q = f.create(),
                n = f.fromValues(1, 0),
                r = f.fromValues(0, 1);
            a.prototype.update = function() {
                var a = this.equations[0],
                    d = this.equations[1],
                    b = this.equations[2],
                    e = this.bodyB;
                f.rotate(h, this.localOffsetB, this.bodyA.angle);
                f.rotate(m, this.localOffsetB, e.angle - this.localAngleB);
                f.scale(m,
                    m, -1);
                f.rotate(q, m, Math.PI / 2);
                f.normalize(q, q);
                a.G[0] = -1;
                a.G[1] = 0;
                a.G[2] = -f.crossLength(h, n);
                a.G[3] = 1;
                d.G[0] = 0;
                d.G[1] = -1;
                d.G[2] = -f.crossLength(h, r);
                d.G[4] = 1;
                b.G[0] = -q[0];
                b.G[1] = -q[1];
                b.G[3] = q[0];
                b.G[4] = q[1];
                b.G[5] = f.crossLength(m, q)
            }
        }, {
            "../equations/Equation": 22,
            "../math/vec2": 30,
            "./Constraint": 14
        }],
        18: [function(b, e, k) {
            function a(a, b, e) {
                e = e || {};
                l.call(this, a, b, l.PRISMATIC, e);
                var k = h.fromValues(0, 0),
                    n = h.fromValues(1, 0),
                    q = h.fromValues(0, 0);
                e.localAnchorA && h.copy(k, e.localAnchorA);
                e.localAxisA && h.copy(n,
                    e.localAxisA);
                e.localAnchorB && h.copy(q, e.localAnchorB);
                this.localAnchorA = k;
                this.localAnchorB = q;
                this.localAxisA = n;
                var t = this.maxForce = "undefined" != typeof e.maxForce ? e.maxForce : Number.MAX_VALUE,
                    r = new d(a, b, -t, t),
                    v = new h.create,
                    w = new h.create,
                    u = new h.create,
                    y = new h.create;
                (r.computeGq = function() {
                    return h.dot(u, y)
                }, r.updateJacobian = function() {
                    var d = this.G,
                        f = a.position,
                        e = b.position;
                    h.rotate(v, k, a.angle);
                    h.rotate(w, q, b.angle);
                    h.add(u, e, w);
                    h.sub(u, u, f);
                    h.sub(u, u, v);
                    h.rotate(y, n, a.angle + Math.PI / 2);
                    d[0] = -y[0];
                    d[1] = -y[1];
                    d[2] = -h.crossLength(v, y) + h.crossLength(y, u);
                    d[3] = y[0];
                    d[4] = y[1];
                    d[5] = h.crossLength(w, y)
                }, this.equations.push(r), e.disableRotationalLock) || (r = new m(a, b, -t, t), this.equations.push(r));
                this.velocity = this.position = 0;
                this.lowerLimitEnabled = "undefined" != typeof e.lowerLimit ? !0 : !1;
                this.upperLimitEnabled = "undefined" != typeof e.upperLimit ? !0 : !1;
                this.lowerLimit = "undefined" != typeof e.lowerLimit ? e.lowerLimit : 0;
                this.upperLimit = "undefined" != typeof e.upperLimit ? e.upperLimit : 1;
                this.upperLimitEquation = new f(a,
                    b);
                this.lowerLimitEquation = new f(a, b);
                this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0;
                this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = t;
                this.motorEquation = new d(a, b);
                this.motorEnabled = !1;
                this.motorSpeed = 0;
                var A = this;
                e = this.motorEquation;
                e.computeGW;
                e.computeGq = function() {
                    return 0
                };
                e.computeGW = function() {
                    var a = this.bodyA,
                        d = this.bodyB;
                    return this.gmult(this.G, a.velocity, a.angularVelocity, d.velocity, d.angularVelocity) + A.motorSpeed
                }
            }
            var l = b("./Constraint"),
                f = b("../equations/ContactEquation"),
                d = b("../equations/Equation"),
                h = b("../math/vec2"),
                m = b("../equations/RotationalLockEquation");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            var q = h.create(),
                n = h.create(),
                r = h.create(),
                t = h.create(),
                u = h.create(),
                w = h.create();
            a.prototype.update = function() {
                var a = this.equations,
                    d = this.upperLimit,
                    b = this.lowerLimit,
                    f = this.upperLimitEquation,
                    e = this.lowerLimitEquation,
                    l = this.bodyA,
                    k = this.bodyB,
                    m = this.localAxisA,
                    E = this.localAnchorA,
                    C = this.localAnchorB;
                a[0].updateJacobian();
                h.rotate(q, m, l.angle);
                h.rotate(t,
                    E, l.angle);
                h.add(n, t, l.position);
                h.rotate(u, C, k.angle);
                h.add(r, u, k.position);
                m = this.position = h.dot(r, q) - h.dot(n, q);
                this.motorEnabled && (E = this.motorEquation.G, E[0] = q[0], E[1] = q[1], E[2] = h.crossLength(q, u), E[3] = -q[0], E[4] = -q[1], E[5] = -h.crossLength(q, t));
                this.upperLimitEnabled && m > d ? (h.scale(f.normalA, q, -1), h.sub(f.contactPointA, n, l.position), h.sub(f.contactPointB, r, k.position), h.scale(w, q, d), h.add(f.contactPointA, f.contactPointA, w), -1 === a.indexOf(f) && a.push(f)) : (d = a.indexOf(f), -1 !== d && a.splice(d, 1));
                this.lowerLimitEnabled &&
                    b > m ? (h.scale(e.normalA, q, 1), h.sub(e.contactPointA, n, l.position), h.sub(e.contactPointB, r, k.position), h.scale(w, q, b), h.sub(e.contactPointB, e.contactPointB, w), -1 === a.indexOf(e) && a.push(e)) : (d = a.indexOf(e), -1 !== d && a.splice(d, 1))
            };
            a.prototype.enableMotor = function() {
                this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0)
            };
            a.prototype.disableMotor = function() {
                if (this.motorEnabled) {
                    var a = this.equations.indexOf(this.motorEquation);
                    this.equations.splice(a, 1);
                    this.motorEnabled = !1
                }
            };
            a.prototype.setLimits = function(a, d) {
                "number" == typeof a ? (this.lowerLimit = a, this.lowerLimitEnabled = !0) : (this.lowerLimit = a, this.lowerLimitEnabled = !1);
                "number" == typeof d ? (this.upperLimit = d, this.upperLimitEnabled = !0) : (this.upperLimit = d, this.upperLimitEnabled = !1)
            }
        }, {
            "../equations/ContactEquation": 21,
            "../equations/Equation": 22,
            "../equations/RotationalLockEquation": 24,
            "../math/vec2": 30,
            "./Constraint": 14
        }],
        19: [function(b, e, k) {
            function a(a, b, e) {
                e = e || {};
                l.call(this, a, b, l.REVOLUTE, e);
                var k = this.maxForce = "undefined" !=
                    typeof e.maxForce ? e.maxForce : Number.MAX_VALUE;
                this.pivotA = m.create();
                this.pivotB = m.create();
                e.worldPivot ? (m.sub(this.pivotA, e.worldPivot, a.position), m.sub(this.pivotB, e.worldPivot, b.position), m.rotate(this.pivotA, this.pivotA, -a.angle), m.rotate(this.pivotB, this.pivotB, -b.angle)) : (m.copy(this.pivotA, e.localPivotA), m.copy(this.pivotB, e.localPivotB));
                var w = this.equations = [new f(a, b, -k, k), new f(a, b, -k, k)];
                e = w[0];
                var w = w[1],
                    v = this;
                e.computeGq = function() {
                    return m.rotate(q, v.pivotA, a.angle), m.rotate(n, v.pivotB,
                        b.angle), m.add(u, b.position, n), m.sub(u, u, a.position), m.sub(u, u, q), m.dot(u, r)
                };
                w.computeGq = function() {
                    return m.rotate(q, v.pivotA, a.angle), m.rotate(n, v.pivotB, b.angle), m.add(u, b.position, n), m.sub(u, u, a.position), m.sub(u, u, q), m.dot(u, t)
                };
                w.minForce = e.minForce = -k;
                w.maxForce = e.maxForce = k;
                this.motorEquation = new d(a, b);
                this.motorEnabled = !1;
                this.angle = 0;
                this.upperLimitEnabled = this.lowerLimitEnabled = !1;
                this.upperLimit = this.lowerLimit = 0;
                this.upperLimitEquation = new h(a, b);
                this.lowerLimitEquation = new h(a, b);
                this.upperLimitEquation.minForce = 0;
                this.lowerLimitEquation.maxForce = 0
            }
            var l = b("./Constraint"),
                f = b("../equations/Equation"),
                d = b("../equations/RotationalVelocityEquation"),
                h = b("../equations/RotationalLockEquation"),
                m = b("../math/vec2");
            e.exports = a;
            var q = m.create(),
                n = m.create(),
                r = m.fromValues(1, 0),
                t = m.fromValues(0, 1),
                u = m.create();
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.setLimits = function(a, d) {
                "number" == typeof a ? (this.lowerLimit = a, this.lowerLimitEnabled = !0) : (this.lowerLimit = a, this.lowerLimitEnabled = !1);
                "number" == typeof d ? (this.upperLimit = d, this.upperLimitEnabled = !0) : (this.upperLimit = d, this.upperLimitEnabled = !1)
            };
            a.prototype.update = function() {
                var a = this.bodyA,
                    d = this.bodyB,
                    b = this.pivotA,
                    f = this.pivotB,
                    h = this.equations,
                    e = (h[0], h[1], h[0]),
                    l = h[1],
                    k = this.upperLimit,
                    u = this.lowerLimit,
                    E = this.upperLimitEquation,
                    C = this.lowerLimitEquation,
                    H = this.angle = d.angle - a.angle;
                this.upperLimitEnabled && H > k ? (E.angle = k, -1 === h.indexOf(E) && h.push(E)) : (k = h.indexOf(E), -1 !== k && h.splice(k, 1));
                this.lowerLimitEnabled && u > H ? (C.angle =
                    u, -1 === h.indexOf(C) && h.push(C)) : (k = h.indexOf(C), -1 !== k && h.splice(k, 1));
                m.rotate(q, b, a.angle);
                m.rotate(n, f, d.angle);
                e.G[0] = -1;
                e.G[1] = 0;
                e.G[2] = -m.crossLength(q, r);
                e.G[3] = 1;
                e.G[4] = 0;
                e.G[5] = m.crossLength(n, r);
                l.G[0] = 0;
                l.G[1] = -1;
                l.G[2] = -m.crossLength(q, t);
                l.G[3] = 0;
                l.G[4] = 1;
                l.G[5] = m.crossLength(n, t)
            };
            a.prototype.enableMotor = function() {
                this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0)
            };
            a.prototype.disableMotor = function() {
                if (this.motorEnabled) {
                    var a = this.equations.indexOf(this.motorEquation);
                    this.equations.splice(a, 1);
                    this.motorEnabled = !1
                }
            };
            a.prototype.motorIsEnabled = function() {
                return !!this.motorEnabled
            };
            a.prototype.setMotorSpeed = function(a) {
                if (this.motorEnabled) {
                    var d = this.equations.indexOf(this.motorEquation);
                    this.equations[d].relativeVelocity = a
                }
            };
            a.prototype.getMotorSpeed = function() {
                return this.motorEnabled ? this.motorEquation.relativeVelocity : !1
            }
        }, {
            "../equations/Equation": 22,
            "../equations/RotationalLockEquation": 24,
            "../equations/RotationalVelocityEquation": 25,
            "../math/vec2": 30,
            "./Constraint": 14
        }],
        20: [function(b, e, k) {
            function a(a, d, b) {
                b = b || {};
                l.call(this, a, d, -Number.MAX_VALUE, Number.MAX_VALUE);
                this.angle = b.angle || 0;
                this.ratio = "number" == typeof b.ratio ? b.ratio : 1;
                this.setRatio(this.ratio)
            }
            var l = b("./Equation");
            b("../math/vec2");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.computeGq = function() {
                return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle
            };
            a.prototype.setRatio = function(a) {
                var d = this.G;
                d[2] = a;
                d[5] = -1;
                this.ratio = a
            };
            a.prototype.setMaxTorque = function(a) {
                this.maxForce =
                    a;
                this.minForce = -a
            }
        }, {
            "../math/vec2": 30,
            "./Equation": 22
        }],
        21: [function(b, e, k) {
            function a(a, d) {
                l.call(this, a, d, 0, Number.MAX_VALUE);
                this.contactPointA = f.create();
                this.penetrationVec = f.create();
                this.contactPointB = f.create();
                this.normalA = f.create();
                this.restitution = 0;
                this.firstImpact = !1;
                this.shapeB = this.shapeA = null
            }
            var l = b("./Equation"),
                f = b("../math/vec2");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.computeB = function(a, d, b) {
                var h = this.contactPointA,
                    e = this.contactPointB,
                    l = this.bodyA.position,
                    k = this.bodyB.position,
                    m = this.penetrationVec,
                    n = this.normalA,
                    q = this.G,
                    r = f.crossLength(h, n),
                    x = f.crossLength(e, n);
                q[0] = -n[0];
                q[1] = -n[1];
                q[2] = -r;
                q[3] = n[0];
                q[4] = n[1];
                q[5] = x;
                f.add(m, k, e);
                f.sub(m, m, l);
                f.sub(m, m, h);
                var F, G;
                this.firstImpact && 0 !== this.restitution ? (G = 0, F = 1 / d * (1 + this.restitution) * this.computeGW()) : (G = f.dot(n, m) + this.offset, F = this.computeGW());
                h = this.computeGiMf();
                return -G * a - F * d - b * h
            };
            var d = f.create(),
                h = f.create(),
                m = f.create();
            a.prototype.getVelocityAlongNormal = function() {
                return this.bodyA.getVelocityAtPoint(d,
                    this.contactPointA), this.bodyB.getVelocityAtPoint(h, this.contactPointB), f.subtract(m, d, h), f.dot(this.normalA, m)
            }
        }, {
            "../math/vec2": 30,
            "./Equation": 22
        }],
        22: [function(b, e, k) {
            function a(d, b, h, e) {
                this.minForce = "undefined" == typeof h ? -Number.MAX_VALUE : h;
                this.maxForce = "undefined" == typeof e ? Number.MAX_VALUE : e;
                this.bodyA = d;
                this.bodyB = b;
                this.stiffness = a.DEFAULT_STIFFNESS;
                this.relaxation = a.DEFAULT_RELAXATION;
                this.G = new f.ARRAY_TYPE(6);
                for (d = 0; 6 > d; d++) this.G[d] = 0;
                this.epsilon = this.b = this.a = this.offset = 0;
                this.timeStep =
                    1 / 60;
                this.needsUpdate = !0;
                this.relativeVelocity = this.multiplier = 0;
                this.enabled = !0
            }
            e.exports = a;
            var l = b("../math/vec2"),
                f = b("../utils/Utils");
            b("../objects/Body");
            a.prototype.constructor = a;
            a.DEFAULT_STIFFNESS = 1E6;
            a.DEFAULT_RELAXATION = 4;
            a.prototype.update = function() {
                var a = this.stiffness,
                    d = this.relaxation,
                    b = this.timeStep;
                this.a = 4 / (b * (1 + 4 * d));
                this.b = 4 * d / (1 + 4 * d);
                this.epsilon = 4 / (b * b * a * (1 + 4 * d));
                this.needsUpdate = !1
            };
            a.prototype.gmult = function(a, d, b, f, h) {
                return a[0] * d[0] + a[1] * d[1] + a[2] * b + a[3] * f[0] + a[4] * f[1] +
                    a[5] * h
            };
            a.prototype.computeB = function(a, d, b) {
                var f = this.computeGW(),
                    h = this.computeGq(),
                    e = this.computeGiMf();
                return -h * a - f * d - e * b
            };
            var d = l.create(),
                h = l.create();
            a.prototype.computeGq = function() {
                var a = this.G,
                    b = this.bodyA,
                    f = this.bodyB,
                    b = (b.position, f.position, b.angle);
                return this.gmult(a, d, b, h, f.angle) + this.offset
            };
            a.prototype.computeGW = function() {
                var a = this.bodyA,
                    d = this.bodyB;
                return this.gmult(this.G, a.velocity, a.angularVelocity, d.velocity, d.angularVelocity) + this.relativeVelocity
            };
            a.prototype.computeGWlambda =
                function() {
                    var a = this.bodyA,
                        d = this.bodyB;
                    return this.gmult(this.G, a.vlambda, a.wlambda, d.vlambda, d.wlambda)
                };
            var m = l.create(),
                q = l.create();
            a.prototype.computeGiMf = function() {
                var a = this.bodyA,
                    d = this.bodyB,
                    b = a.angularForce,
                    f = d.force,
                    h = d.angularForce,
                    e = d.invMassSolve,
                    k = a.invInertiaSolve,
                    n = d.invInertiaSolve,
                    t = this.G;
                return l.scale(m, a.force, a.invMassSolve), l.multiply(m, a.massMultiplier, m), l.scale(q, f, e), l.multiply(q, d.massMultiplier, q), this.gmult(t, m, b * k, q, h * n)
            };
            a.prototype.computeGiMGt = function() {
                var a =
                    this.bodyA,
                    d = this.bodyB,
                    b = a.invMassSolve,
                    f = d.invMassSolve,
                    h = this.G;
                return h[0] * h[0] * b * a.massMultiplier[0] + h[1] * h[1] * b * a.massMultiplier[1] + h[2] * h[2] * a.invInertiaSolve + h[3] * h[3] * f * d.massMultiplier[0] + h[4] * h[4] * f * d.massMultiplier[1] + h[5] * h[5] * d.invInertiaSolve
            };
            var n = l.create(),
                r = l.create(),
                t = l.create();
            l.create();
            l.create();
            l.create();
            a.prototype.addToWlambda = function(a) {
                var d = this.bodyA,
                    b = this.bodyB,
                    f = d.invMassSolve,
                    h = b.invMassSolve,
                    e = d.invInertiaSolve,
                    k = b.invInertiaSolve,
                    m = this.G;
                r[0] = m[0];
                r[1] = m[1];
                t[0] = m[3];
                t[1] = m[4];
                l.scale(n, r, f * a);
                l.multiply(n, n, d.massMultiplier);
                l.add(d.vlambda, d.vlambda, n);
                d.wlambda += e * m[2] * a;
                l.scale(n, t, h * a);
                l.multiply(n, n, b.massMultiplier);
                l.add(b.vlambda, b.vlambda, n);
                b.wlambda += k * m[5] * a
            };
            a.prototype.computeInvC = function(a) {
                return 1 / (this.computeGiMGt() + a)
            }
        }, {
            "../math/vec2": 30,
            "../objects/Body": 31,
            "../utils/Utils": 57
        }],
        23: [function(b, e, k) {
            function a(a, b, e) {
                f.call(this, a, b, -e, e);
                this.contactPointA = l.create();
                this.contactPointB = l.create();
                this.t = l.create();
                this.contactEquations = [];
                this.shapeB = this.shapeA = null;
                this.frictionCoefficient = .3
            }
            var l = b("../math/vec2"),
                f = b("./Equation");
            b("../utils/Utils");
            e.exports = a;
            a.prototype = new f;
            a.prototype.constructor = a;
            a.prototype.setSlipForce = function(a) {
                this.maxForce = a;
                this.minForce = -a
            };
            a.prototype.getSlipForce = function() {
                return this.maxForce
            };
            a.prototype.computeB = function(a, b, f) {
                a = (this.bodyA, this.bodyB, this.contactPointA);
                var d = this.contactPointB,
                    h = this.t,
                    e = this.G;
                e[0] = -h[0];
                e[1] = -h[1];
                e[2] = -l.crossLength(a, h);
                e[3] = h[0];
                e[4] = h[1];
                e[5] =
                    l.crossLength(d, h);
                a = this.computeGW();
                d = this.computeGiMf();
                return -a * b - f * d
            }
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Equation": 22
        }],
        24: [function(b, e, k) {
            function a(a, d, b) {
                b = b || {};
                l.call(this, a, d, -Number.MAX_VALUE, Number.MAX_VALUE);
                this.angle = b.angle || 0;
                a = this.G;
                a[2] = 1;
                a[5] = -1
            }
            var l = b("./Equation"),
                f = b("../math/vec2");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            var d = f.create(),
                h = f.create(),
                m = f.fromValues(1, 0),
                q = f.fromValues(0, 1);
            a.prototype.computeGq = function() {
                return f.rotate(d, m, this.bodyA.angle +
                    this.angle), f.rotate(h, q, this.bodyB.angle), f.dot(d, h)
            }
        }, {
            "../math/vec2": 30,
            "./Equation": 22
        }],
        25: [function(b, e, k) {
            function a(a, d) {
                l.call(this, a, d, -Number.MAX_VALUE, Number.MAX_VALUE);
                this.ratio = this.relativeVelocity = 1
            }
            var l = b("./Equation");
            b("../math/vec2");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.computeB = function(a, d, b) {
                a = this.G;
                a[2] = -1;
                a[5] = this.ratio;
                a = this.computeGiMf();
                return -this.computeGW() * d - b * a
            }
        }, {
            "../math/vec2": 30,
            "./Equation": 22
        }],
        26: [function(b, e, k) {
            b = function() {};
            e.exports = b;
            b.prototype = {
                constructor: b,
                on: function(a, b, f) {
                    b.context = f || this;
                    void 0 === this._listeners && (this._listeners = {});
                    f = this._listeners;
                    return void 0 === f[a] && (f[a] = []), -1 === f[a].indexOf(b) && f[a].push(b), this
                },
                has: function(a, b) {
                    if (void 0 === this._listeners) return !1;
                    var f = this._listeners;
                    if (b) {
                        if (void 0 !== f[a] && -1 !== f[a].indexOf(b)) return !0
                    } else if (void 0 !== f[a]) return !0;
                    return !1
                },
                off: function(a, b) {
                    if (void 0 === this._listeners) return this;
                    var f = this._listeners,
                        d = f[a].indexOf(b);
                    return -1 !== d && f[a].splice(d,
                        1), this
                },
                emit: function(a) {
                    if (void 0 === this._listeners) return this;
                    var b = this._listeners[a.type];
                    if (void 0 !== b) {
                        a.target = this;
                        for (var f = 0, d = b.length; d > f; f++) {
                            var h = b[f];
                            h.call(h.context, a)
                        }
                    }
                    return this
                }
            }
        }, {}],
        27: [function(b, e, k) {
            function a(d, b, e) {
                if (e = e || {}, !(d instanceof l && b instanceof l)) throw Error("First two arguments must be Material instances.");
                this.id = a.idCounter++;
                this.materialA = d;
                this.materialB = b;
                this.friction = "undefined" != typeof e.friction ? Number(e.friction) : .3;
                this.restitution = "undefined" !=
                    typeof e.restitution ? Number(e.restitution) : 0;
                this.stiffness = "undefined" != typeof e.stiffness ? Number(e.stiffness) : f.DEFAULT_STIFFNESS;
                this.relaxation = "undefined" != typeof e.relaxation ? Number(e.relaxation) : f.DEFAULT_RELAXATION;
                this.frictionStiffness = "undefined" != typeof e.frictionStiffness ? Number(e.frictionStiffness) : f.DEFAULT_STIFFNESS;
                this.frictionRelaxation = "undefined" != typeof e.frictionRelaxation ? Number(e.frictionRelaxation) : f.DEFAULT_RELAXATION;
                this.surfaceVelocity = "undefined" != typeof e.surfaceVelocity ?
                    Number(e.surfaceVelocity) : 0;
                this.contactSkinSize = .005
            }
            var l = b("./Material"),
                f = b("../equations/Equation");
            e.exports = a;
            a.idCounter = 0
        }, {
            "../equations/Equation": 22,
            "./Material": 28
        }],
        28: [function(b, e, k) {
            function a(b) {
                this.id = b || a.idCounter++
            }
            e.exports = a;
            a.idCounter = 0
        }, {}],
        29: [function(b, e, k) {
            var a = {
                GetArea: function(a) {
                    if (6 > a.length) return 0;
                    for (var b = a.length - 2, d = 0, e = 0; b > e; e += 2) d += (a[e + 2] - a[e]) * (a[e + 1] + a[e + 3]);
                    return d += (a[0] - a[b]) * (a[b + 1] + a[1]), .5 * -d
                },
                Triangulate: function(b) {
                    var f = b.length >> 1;
                    if (3 > f) return [];
                    for (var d = [], e = [], l = 0; f > l; l++) e.push(l);
                    for (l = 0; 3 < f;) {
                        var k = e[(l + 0) % f],
                            n = e[(l + 1) % f],
                            r = e[(l + 2) % f],
                            t = b[2 * k],
                            u = b[2 * k + 1],
                            w = b[2 * n],
                            v = b[2 * n + 1],
                            y = b[2 * r],
                            A = b[2 * r + 1],
                            B = !1;
                        if (a._convex(t, u, w, v, y, A))
                            for (var B = !0, z = 0; f > z; z++) {
                                var x = e[z];
                                if (x != k && x != n && x != r && a._PointInTriangle(b[2 * x], b[2 * x + 1], t, u, w, v, y, A)) {
                                    B = !1;
                                    break
                                }
                            }
                        if (B) d.push(k, n, r), e.splice((l + 1) % f, 1), f--, l = 0;
                        else if (l++ > 3 * f) break
                    }
                    return d.push(e[0], e[1], e[2]), d
                },
                _PointInTriangle: function(a, b, d, e, k, q, n, r) {
                    n -= d;
                    r -= e;
                    k -= d;
                    q -= e;
                    a -= d;
                    d = b - e;
                    b = n * n + r * r;
                    e = n * k + r *
                        q;
                    n = n * a + r * d;
                    r = k * k + q * q;
                    k = k * a + q * d;
                    q = 1 / (b * r - e * e);
                    r = (r * n - e * k) * q;
                    n = (b * k - e * n) * q;
                    return 0 <= r && 0 <= n && 1 > r + n
                },
                _convex: function(a, b, d, e, k, q) {
                    return 0 <= (b - e) * (k - d) + (d - a) * (q - e)
                }
            };
            e.exports = a
        }, {}],
        30: [function(b, e, k) {
            var a = e.exports = {},
                l = b("../utils/Utils");
            a.crossLength = function(a, d) {
                return a[0] * d[1] - a[1] * d[0]
            };
            a.crossVZ = function(b, d, e) {
                return a.rotate(b, d, -Math.PI / 2), a.scale(b, b, e), b
            };
            a.crossZV = function(b, d, e) {
                return a.rotate(b, e, Math.PI / 2), a.scale(b, b, d), b
            };
            a.rotate = function(a, d, b) {
                if (0 !== b) {
                    var f = Math.cos(b);
                    b = Math.sin(b);
                    var e = d[0];
                    d = d[1];
                    a[0] = f * e - b * d;
                    a[1] = b * e + f * d
                } else a[0] = d[0], a[1] = d[1]
            };
            a.rotate90cw = function(a, d) {
                var b = d[0];
                a[0] = d[1];
                a[1] = -b
            };
            a.toLocalFrame = function(b, d, e, k) {
                a.copy(b, d);
                a.sub(b, b, e);
                a.rotate(b, b, -k)
            };
            a.toGlobalFrame = function(b, d, e, k) {
                a.copy(b, d);
                a.rotate(b, b, k);
                a.add(b, b, e)
            };
            a.vectorToLocalFrame = function(b, d, e) {
                a.rotate(b, d, -e)
            };
            a.vectorToGlobalFrame = function(b, d, e) {
                a.rotate(b, d, e)
            };
            a.centroid = function(b, d, e, k) {
                return a.add(b, d, e), a.add(b, b, k), a.scale(b, b, 1 / 3), b
            };
            a.create = function() {
                var a =
                    new l.ARRAY_TYPE(2);
                return a[0] = 0, a[1] = 0, a
            };
            a.clone = function(a) {
                var d = new l.ARRAY_TYPE(2);
                return d[0] = a[0], d[1] = a[1], d
            };
            a.fromValues = function(a, d) {
                var b = new l.ARRAY_TYPE(2);
                return b[0] = a, b[1] = d, b
            };
            a.copy = function(a, d) {
                return a[0] = d[0], a[1] = d[1], a
            };
            a.set = function(a, d, b) {
                return a[0] = d, a[1] = b, a
            };
            a.add = function(a, d, b) {
                return a[0] = d[0] + b[0], a[1] = d[1] + b[1], a
            };
            a.subtract = function(a, d, b) {
                return a[0] = d[0] - b[0], a[1] = d[1] - b[1], a
            };
            a.sub = a.subtract;
            a.multiply = function(a, d, b) {
                return a[0] = d[0] * b[0], a[1] = d[1] * b[1],
                    a
            };
            a.mul = a.multiply;
            a.divide = function(a, d, b) {
                return a[0] = d[0] / b[0], a[1] = d[1] / b[1], a
            };
            a.div = a.divide;
            a.scale = function(a, d, b) {
                return a[0] = d[0] * b, a[1] = d[1] * b, a
            };
            a.distance = function(a, d) {
                var b = d[0] - a[0],
                    e = d[1] - a[1];
                return Math.sqrt(b * b + e * e)
            };
            a.dist = a.distance;
            a.squaredDistance = function(a, d) {
                var b = d[0] - a[0],
                    e = d[1] - a[1];
                return b * b + e * e
            };
            a.sqrDist = a.squaredDistance;
            a.length = function(a) {
                var d = a[0];
                a = a[1];
                return Math.sqrt(d * d + a * a)
            };
            a.len = a.length;
            a.squaredLength = function(a) {
                var d = a[0];
                a = a[1];
                return d * d + a * a
            };
            a.sqrLen = a.squaredLength;
            a.negate = function(a, d) {
                return a[0] = -d[0], a[1] = -d[1], a
            };
            a.normalize = function(a, d) {
                var b = d[0],
                    e = d[1],
                    b = b * b + e * e;
                return 0 < b && (b = 1 / Math.sqrt(b), a[0] = d[0] * b, a[1] = d[1] * b), a
            };
            a.dot = function(a, d) {
                return a[0] * d[0] + a[1] * d[1]
            };
            a.str = function(a) {
                return "vec2(" + a[0] + ", " + a[1] + ")"
            };
            a.lerp = function(a, d, b, e) {
                var f = d[0];
                d = d[1];
                return a[0] = f + e * (b[0] - f), a[1] = d + e * (b[1] - d), a
            };
            a.reflect = function(a, d, b) {
                var e = d[0] * b[0] + d[1] * b[1];
                a[0] = d[0] - 2 * b[0] * e;
                a[1] = d[1] - 2 * b[1] * e
            };
            a.getLineSegmentsIntersection =
                function(b, d, e, k, l) {
                    k = a.getLineSegmentsIntersectionFraction(d, e, k, l);
                    return 0 > k ? !1 : (b[0] = d[0] + k * (e[0] - d[0]), b[1] = d[1] + k * (e[1] - d[1]), !0)
                };
            a.getLineSegmentsIntersectionFraction = function(a, d, b, e) {
                var f, h, k = d[0] - a[0];
                d = d[1] - a[1];
                var l = e[0] - b[0];
                e = e[1] - b[1];
                return f = (-d * (a[0] - b[0]) + k * (a[1] - b[1])) / (-l * d + k * e), h = (l * (a[1] - b[1]) - e * (a[0] - b[0])) / (-l * d + k * e), 0 <= f && 1 >= f && 0 <= h && 1 >= h ? h : -1
            }
        }, {
            "../utils/Utils": 57
        }],
        31: [function(b, e, k) {
            function a(d) {
                d = d || {};
                q.call(this);
                this.id = d.id || ++a._idCounter;
                this.world = null;
                this.shapes = [];
                this.mass = d.mass || 0;
                this.invInertiaSolve = this.invMassSolve = this.invInertia = this.inertia = this.invMass = 0;
                this.fixedRotation = !!d.fixedRotation;
                this.fixedX = !!d.fixedX;
                this.fixedY = !!d.fixedY;
                this.massMultiplier = l.create();
                this.position = l.fromValues(0, 0);
                d.position && l.copy(this.position, d.position);
                this.interpolatedPosition = l.fromValues(0, 0);
                this.interpolatedAngle = 0;
                this.previousPosition = l.fromValues(0, 0);
                this.previousAngle = 0;
                this.velocity = l.fromValues(0, 0);
                d.velocity && l.copy(this.velocity, d.velocity);
                this.vlambda = l.fromValues(0, 0);
                this.wlambda = 0;
                this.angle = d.angle || 0;
                this.angularVelocity = d.angularVelocity || 0;
                this.force = l.create();
                d.force && l.copy(this.force, d.force);
                this.angularForce = d.angularForce || 0;
                this.damping = "number" == typeof d.damping ? d.damping : .1;
                this.angularDamping = "number" == typeof d.angularDamping ? d.angularDamping : .1;
                this.type = a.STATIC;
                "undefined" != typeof d.type ? this.type = d.type : d.mass ? this.type = a.DYNAMIC : this.type = a.STATIC;
                this.boundingRadius = 0;
                this.aabb = new m;
                this.aabbNeedsUpdate = !0;
                this.allowSleep = void 0 !== d.allowSleep ? d.allowSleep : !0;
                this.wantsToSleep = !1;
                this.sleepState = a.AWAKE;
                this.sleepSpeedLimit = void 0 !== d.sleepSpeedLimit ? d.sleepSpeedLimit : .2;
                this.sleepTimeLimit = void 0 !== d.sleepTimeLimit ? d.sleepTimeLimit : 1;
                this.gravityScale = void 0 !== d.gravityScale ? d.gravityScale : 1;
                this.collisionResponse = void 0 !== d.collisionResponse ? d.collisionResponse : !0;
                this.timeLastSleepy = this.idleTime = 0;
                this.ccdSpeedThreshold = void 0 !== d.ccdSpeedThreshold ? d.ccdSpeedThreshold : -1;
                this.ccdIterations = void 0 !==
                    d.ccdIterations ? d.ccdIterations : 10;
                this.concavePath = null;
                this._wakeUpAfterNarrowphase = !1;
                this.updateMassProperties()
            }
            var l = b("../math/vec2"),
                f = b("poly-decomp"),
                d = b("../shapes/Convex");
            k = b("../collision/RaycastResult");
            var h = b("../collision/Ray"),
                m = b("../collision/AABB"),
                q = b("../events/EventEmitter");
            e.exports = a;
            a.prototype = new q;
            a.prototype.constructor = a;
            a._idCounter = 0;
            a.prototype.updateSolveMassProperties = function() {
                this.sleepState === a.SLEEPING || this.type === a.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve =
                    0) : (this.invMassSolve = this.invMass, this.invInertiaSolve = this.invInertia)
            };
            a.prototype.setDensity = function(a) {
                this.mass = this.getArea() * a;
                this.updateMassProperties()
            };
            a.prototype.getArea = function() {
                for (var a = 0, d = 0; d < this.shapes.length; d++) a += this.shapes[d].area;
                return a
            };
            a.prototype.getAABB = function() {
                return this.aabbNeedsUpdate && this.updateAABB(), this.aabb
            };
            var n = new m,
                r = l.create();
            a.prototype.updateAABB = function() {
                for (var a = this.shapes, d = a.length, b = this.angle, e = 0; e !== d; e++) {
                    var f = a[e],
                        h = f.angle + b;
                    l.rotate(r, f.position, b);
                    l.add(r, r, this.position);
                    f.computeAABB(n, r, h);
                    0 === e ? this.aabb.copy(n) : this.aabb.extend(n)
                }
                this.aabbNeedsUpdate = !1
            };
            a.prototype.updateBoundingRadius = function() {
                for (var a = this.shapes, d = a.length, b = 0, e = 0; e !== d; e++) {
                    var f = a[e],
                        h = l.length(f.position),
                        f = f.boundingRadius;
                    h + f > b && (b = h + f)
                }
                this.boundingRadius = b
            };
            a.prototype.addShape = function(a, d, b) {
                if (a.body) throw Error("A shape can only be added to one body.");
                a.body = this;
                d ? l.copy(a.position, d) : l.set(a.position, 0, 0);
                a.angle = b || 0;
                this.shapes.push(a);
                this.updateMassProperties();
                this.updateBoundingRadius();
                this.aabbNeedsUpdate = !0
            };
            a.prototype.removeShape = function(a) {
                var d = this.shapes.indexOf(a);
                return -1 !== d ? (this.shapes.splice(d, 1), this.aabbNeedsUpdate = !0, a.body = null, !0) : !1
            };
            a.prototype.updateMassProperties = function() {
                if (this.type === a.STATIC || this.type === a.KINEMATIC) this.mass = Number.MAX_VALUE, this.invMass = 0, this.inertia = Number.MAX_VALUE, this.invInertia = 0;
                else {
                    var d = this.shapes,
                        b = d.length,
                        e = this.mass / b,
                        f = 0;
                    if (this.fixedRotation) this.inertia = Number.MAX_VALUE,
                        this.invInertia = 0;
                    else {
                        for (var h = 0; b > h; h++) var k = d[h],
                            m = l.squaredLength(k.position),
                            k = k.computeMomentOfInertia(e),
                            f = f + (k + e * m);
                        this.inertia = f;
                        this.invInertia = 0 < f ? 1 / f : 0
                    }
                    this.invMass = 1 / this.mass;
                    l.set(this.massMultiplier, this.fixedX ? 0 : 1, this.fixedY ? 0 : 1)
                }
            };
            l.create();
            a.prototype.applyForce = function(a, d) {
                if (l.add(this.force, this.force, a), d) {
                    var b = l.crossLength(d, a);
                    this.angularForce += b
                }
            };
            var t = l.create(),
                u = l.create(),
                w = l.create();
            a.prototype.applyForceLocal = function(a, d) {
                d = d || w;
                this.vectorToWorldFrame(t,
                    a);
                this.vectorToWorldFrame(u, d);
                this.applyForce(t, u)
            };
            var v = l.create();
            a.prototype.applyImpulse = function(d, b) {
                if (this.type === a.DYNAMIC && (l.scale(v, d, this.invMass), l.multiply(v, this.massMultiplier, v), l.add(this.velocity, v, this.velocity), b)) {
                    var e = l.crossLength(b, d),
                        e = e * this.invInertia;
                    this.angularVelocity += e
                }
            };
            var y = l.create(),
                A = l.create(),
                B = l.create();
            a.prototype.applyImpulseLocal = function(a, d) {
                d = d || B;
                this.vectorToWorldFrame(y, a);
                this.vectorToWorldFrame(A, d);
                this.applyImpulse(y, A)
            };
            a.prototype.toLocalFrame =
                function(a, d) {
                    l.toLocalFrame(a, d, this.position, this.angle)
                };
            a.prototype.toWorldFrame = function(a, d) {
                l.toGlobalFrame(a, d, this.position, this.angle)
            };
            a.prototype.vectorToLocalFrame = function(a, d) {
                l.vectorToLocalFrame(a, d, this.angle)
            };
            a.prototype.vectorToWorldFrame = function(a, d) {
                l.vectorToGlobalFrame(a, d, this.angle)
            };
            a.prototype.fromPolygon = function(a, b) {
                b = b || {};
                for (var e = this.shapes.length; 0 <= e; --e) this.removeShape(this.shapes[e]);
                var h = new f.Polygon;
                if (h.vertices = a, h.makeCCW(), "number" == typeof b.removeCollinearPoints &&
                    h.removeCollinearPoints(b.removeCollinearPoints), "undefined" == typeof b.skipSimpleCheck && !h.isSimple()) return !1;
                this.concavePath = h.vertices.slice(0);
                for (e = 0; e < this.concavePath.length; e++) {
                    var k = [0, 0];
                    l.copy(k, this.concavePath[e]);
                    this.concavePath[e] = k
                }
                for (var h = b.optimalDecomp ? h.decomp() : h.quickDecomp(), m = l.create(), e = 0; e !== h.length; e++) {
                    for (var n = new d({
                            vertices: h[e].vertices
                        }), q = 0; q !== n.vertices.length; q++) k = n.vertices[q], l.sub(k, k, n.centerOfMass);
                    l.scale(m, n.centerOfMass, 1);
                    n.updateTriangles();
                    n.updateCenterOfMass();
                    n.updateBoundingRadius();
                    this.addShape(n, m)
                }
                return this.adjustCenterOfMass(), this.aabbNeedsUpdate = !0, !0
            };
            var z = (l.fromValues(0, 0), l.fromValues(0, 0)),
                x = l.fromValues(0, 0),
                F = l.fromValues(0, 0);
            a.prototype.adjustCenterOfMass = function() {
                var a = 0;
                l.set(x, 0, 0);
                for (var d = 0; d !== this.shapes.length; d++) {
                    var b = this.shapes[d];
                    l.scale(z, b.position, b.area);
                    l.add(x, x, z);
                    a += b.area
                }
                l.scale(F, x, 1 / a);
                for (d = 0; d !== this.shapes.length; d++) b = this.shapes[d], l.sub(b.position, b.position, F);
                l.add(this.position,
                    this.position, F);
                for (d = 0; this.concavePath && d < this.concavePath.length; d++) l.sub(this.concavePath[d], this.concavePath[d], F);
                this.updateMassProperties();
                this.updateBoundingRadius()
            };
            a.prototype.setZeroForce = function() {
                l.set(this.force, 0, 0);
                this.angularForce = 0
            };
            a.prototype.resetConstraintVelocity = function() {
                l.set(this.vlambda, 0, 0);
                this.wlambda = 0
            };
            a.prototype.addConstraintVelocity = function() {
                var a = this.velocity;
                l.add(a, a, this.vlambda);
                this.angularVelocity += this.wlambda
            };
            a.prototype.applyDamping = function(d) {
                if (this.type ===
                    a.DYNAMIC) {
                    var b = this.velocity;
                    l.scale(b, b, Math.pow(1 - this.damping, d));
                    this.angularVelocity *= Math.pow(1 - this.angularDamping, d)
                }
            };
            a.prototype.wakeUp = function() {
                var d = this.sleepState;
                this.sleepState = a.AWAKE;
                this.idleTime = 0;
                d !== a.AWAKE && this.emit(a.wakeUpEvent)
            };
            a.prototype.sleep = function() {
                this.sleepState = a.SLEEPING;
                this.angularForce = this.angularVelocity = 0;
                l.set(this.velocity, 0, 0);
                l.set(this.force, 0, 0);
                this.emit(a.sleepEvent)
            };
            a.prototype.sleepTick = function(d, b, e) {
                this.allowSleep && this.type !== a.SLEEPING &&
                    (this.wantsToSleep = !1, (this.sleepState, l.squaredLength(this.velocity) + Math.pow(this.angularVelocity, 2)) >= Math.pow(this.sleepSpeedLimit, 2) ? (this.idleTime = 0, this.sleepState = a.AWAKE) : (this.idleTime += e, this.sleepState = a.SLEEPY), this.idleTime > this.sleepTimeLimit && (b ? this.wantsToSleep = !0 : this.sleep()))
            };
            a.prototype.overlaps = function(a) {
                return this.world.overlapKeeper.bodiesAreOverlapping(this, a)
            };
            var G = l.create(),
                E = l.create();
            a.prototype.integrate = function(a) {
                var d = this.invMass,
                    b = this.force,
                    e = this.position,
                    f = this.velocity;
                l.copy(this.previousPosition, this.position);
                this.previousAngle = this.angle;
                this.fixedRotation || (this.angularVelocity += this.angularForce * this.invInertia * a);
                l.scale(G, b, a * d);
                l.multiply(G, this.massMultiplier, G);
                l.add(f, G, f);
                this.integrateToTimeOfImpact(a) || (l.scale(E, f, a), l.add(e, e, E), this.fixedRotation || (this.angle += this.angularVelocity * a));
                this.aabbNeedsUpdate = !0
            };
            var C = new k,
                H = new h({
                    mode: h.ALL
                }),
                D = l.create(),
                J = l.create(),
                I = l.create(),
                L = l.create();
            a.prototype.integrateToTimeOfImpact =
                function(a) {
                    if (0 > this.ccdSpeedThreshold || l.squaredLength(this.velocity) < Math.pow(this.ccdSpeedThreshold, 2)) return !1;
                    l.normalize(D, this.velocity);
                    l.scale(J, this.velocity, a);
                    l.add(J, J, this.position);
                    l.sub(I, J, this.position);
                    var d;
                    a *= this.angularVelocity;
                    var b = l.length(I),
                        e = 1,
                        f = this;
                    if (C.reset(), H.callback = function(a) {
                            a.body !== f && (d = a.body, a.getHitPoint(J, H), l.sub(I, J, f.position), e = l.length(I) / b, a.stop())
                        }, l.copy(H.from, this.position), l.copy(H.to, J), H.update(), this.world.raycast(C, H), !d) return !1;
                    var h =
                        this.angle;
                    l.copy(L, this.position);
                    for (var k = 0, m = 0, n = 0, q = e; q >= m && k < this.ccdIterations;) k++, n = (q - m) / 2, l.scale(E, I, e), l.add(this.position, L, E), this.angle = h + a * e, this.updateAABB(), this.aabb.overlaps(d.aabb) && this.world.narrowphase.bodiesOverlap(this, d) ? m = n : q = n;
                    return e = n, l.copy(this.position, L), this.angle = h, l.scale(E, I, e), l.add(this.position, this.position, E), this.fixedRotation || (this.angle += a * e), !0
                };
            a.prototype.getVelocityAtPoint = function(a, d) {
                return l.crossVZ(a, d, this.angularVelocity), l.subtract(a, this.velocity,
                    a), a
            };
            a.sleepyEvent = {
                type: "sleepy"
            };
            a.sleepEvent = {
                type: "sleep"
            };
            a.wakeUpEvent = {
                type: "wakeup"
            };
            a.DYNAMIC = 1;
            a.STATIC = 2;
            a.KINEMATIC = 4;
            a.AWAKE = 0;
            a.SLEEPY = 1;
            a.SLEEPING = 2
        }, {
            "../collision/AABB": 7,
            "../collision/Ray": 11,
            "../collision/RaycastResult": 12,
            "../events/EventEmitter": 26,
            "../math/vec2": 30,
            "../shapes/Convex": 40,
            "poly-decomp": 5
        }],
        32: [function(b, e, k) {
            function a(a, d, b) {
                b = b || {};
                f.call(this, a, d, b);
                this.localAnchorA = l.fromValues(0, 0);
                this.localAnchorB = l.fromValues(0, 0);
                b.localAnchorA && l.copy(this.localAnchorA,
                    b.localAnchorA);
                b.localAnchorB && l.copy(this.localAnchorB, b.localAnchorB);
                b.worldAnchorA && this.setWorldAnchorA(b.worldAnchorA);
                b.worldAnchorB && this.setWorldAnchorB(b.worldAnchorB);
                a = l.create();
                d = l.create();
                this.getWorldAnchorA(a);
                this.getWorldAnchorB(d);
                a = l.distance(a, d);
                this.restLength = "number" == typeof b.restLength ? b.restLength : a
            }
            var l = b("../math/vec2"),
                f = b("./Spring");
            b("../utils/Utils");
            e.exports = a;
            a.prototype = new f;
            a.prototype.constructor = a;
            a.prototype.setWorldAnchorA = function(a) {
                this.bodyA.toLocalFrame(this.localAnchorA,
                    a)
            };
            a.prototype.setWorldAnchorB = function(a) {
                this.bodyB.toLocalFrame(this.localAnchorB, a)
            };
            a.prototype.getWorldAnchorA = function(a) {
                this.bodyA.toWorldFrame(a, this.localAnchorA)
            };
            a.prototype.getWorldAnchorB = function(a) {
                this.bodyB.toWorldFrame(a, this.localAnchorB)
            };
            var d = l.create(),
                h = l.create(),
                m = l.create(),
                q = l.create(),
                n = l.create(),
                r = l.create(),
                t = l.create(),
                u = l.create(),
                w = l.create();
            a.prototype.applyForce = function() {
                var a = this.stiffness,
                    b = this.damping,
                    e = this.restLength,
                    f = this.bodyA,
                    k = this.bodyB;
                this.getWorldAnchorA(n);
                this.getWorldAnchorB(r);
                l.sub(t, n, f.position);
                l.sub(u, r, k.position);
                l.sub(d, r, n);
                var x = l.len(d);
                l.normalize(h, d);
                l.sub(m, k.velocity, f.velocity);
                l.crossZV(w, k.angularVelocity, u);
                l.add(m, m, w);
                l.crossZV(w, f.angularVelocity, t);
                l.sub(m, m, w);
                l.scale(q, h, -a * (x - e) - b * l.dot(m, h));
                l.sub(f.force, f.force, q);
                l.add(k.force, k.force, q);
                a = l.crossLength(t, q);
                b = l.crossLength(u, q);
                f.angularForce -= a;
                k.angularForce += b
            }
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Spring": 34
        }],
        33: [function(b, e, k) {
            function a(a, d, b) {
                b = b || {};
                l.call(this, a, d, b);
                this.restAngle = "number" == typeof b.restAngle ? b.restAngle : d.angle - a.angle
            }
            var l = (b("../math/vec2"), b("./Spring"));
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.applyForce = function() {
                var a = this.bodyA,
                    d = this.bodyB,
                    b = -this.stiffness * (d.angle - a.angle - this.restAngle) - this.damping * (d.angularVelocity - a.angularVelocity) * 0;
                a.angularForce -= b;
                d.angularForce += b
            }
        }, {
            "../math/vec2": 30,
            "./Spring": 34
        }],
        34: [function(b, e, k) {
            function a(a, d, b) {
                b = l.defaults(b, {
                    stiffness: 100,
                    damping: 1
                });
                this.stiffness = b.stiffness;
                this.damping = b.damping;
                this.bodyA = a;
                this.bodyB = d
            }
            var l = (b("../math/vec2"), b("../utils/Utils"));
            e.exports = a;
            a.prototype.applyForce = function() {}
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57
        }],
        35: [function(b, e, k) {
            function a(a, d) {
                this.chassisBody = a;
                this.wheels = [];
                this.groundBody = new m({
                    mass: 0
                });
                this.world = null;
                var b = this;
                this.preStepCallback = function() {
                    b.update()
                }
            }

            function l(a, b) {
                b = b || {};
                this.vehicle = a;
                this.forwardEquation = new h(a.chassisBody, a.groundBody);
                this.sideEquation = new h(a.chassisBody,
                    a.groundBody);
                this.engineForce = this.steerValue = 0;
                this.setSideFriction(void 0 !== b.sideFriction ? b.sideFriction : 5);
                this.localForwardVector = f.fromValues(0, 1);
                b.localForwardVector && f.copy(this.localForwardVector, b.localForwardVector);
                this.localPosition = f.fromValues(0, 0);
                b.localPosition && f.copy(this.localPosition, b.localPosition);
                d.apply(this, a.chassisBody, a.groundBody);
                this.equations.push(this.forwardEquation, this.sideEquation);
                this.setBrakeForce(0)
            }
            var f = b("../math/vec2"),
                d = (b("../utils/Utils"), b("../constraints/Constraint")),
                h = b("../equations/FrictionEquation"),
                m = b("../objects/Body");
            e.exports = a;
            a.prototype.addToWorld = function(a) {
                this.world = a;
                a.addBody(this.groundBody);
                a.on("preStep", this.preStepCallback);
                for (var d = 0; d < this.wheels.length; d++) a.addConstraint(this.wheels[d])
            };
            a.prototype.removeFromWorld = function() {
                var a = this.world;
                a.removeBody(this.groundBody);
                a.off("preStep", this.preStepCallback);
                for (var d = 0; d < this.wheels.length; d++) a.removeConstraint(this.wheels[d]);
                this.world = null
            };
            a.prototype.addWheel = function(a) {
                a =
                    new l(this, a);
                return this.wheels.push(a), a
            };
            a.prototype.update = function() {
                for (var a = 0; a < this.wheels.length; a++) this.wheels[a].update()
            };
            l.prototype = new d;
            l.prototype.setBrakeForce = function(a) {
                this.forwardEquation.setSlipForce(a)
            };
            l.prototype.setSideFriction = function(a) {
                this.sideEquation.setSlipForce(a)
            };
            var q = f.create(),
                n = f.create();
            l.prototype.getSpeed = function() {
                return this.vehicle.chassisBody.vectorToWorldFrame(n, this.localForwardVector), this.vehicle.chassisBody.getVelocityAtPoint(q, n), f.dot(q,
                    n)
            };
            var r = f.create();
            l.prototype.update = function() {
                this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.t, this.localForwardVector);
                f.rotate(this.sideEquation.t, this.localForwardVector, Math.PI / 2);
                this.vehicle.chassisBody.vectorToWorldFrame(this.sideEquation.t, this.sideEquation.t);
                f.rotate(this.forwardEquation.t, this.forwardEquation.t, this.steerValue);
                f.rotate(this.sideEquation.t, this.sideEquation.t, this.steerValue);
                this.vehicle.chassisBody.toWorldFrame(this.forwardEquation.contactPointB,
                    this.localPosition);
                f.copy(this.sideEquation.contactPointB, this.forwardEquation.contactPointB);
                this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.contactPointA, this.localPosition);
                f.copy(this.sideEquation.contactPointA, this.forwardEquation.contactPointA);
                f.normalize(r, this.forwardEquation.t);
                f.scale(r, r, this.engineForce);
                this.vehicle.chassisBody.applyForce(r, this.forwardEquation.contactPointA)
            }
        }, {
            "../constraints/Constraint": 14,
            "../equations/FrictionEquation": 23,
            "../math/vec2": 30,
            "../objects/Body": 31,
            "../utils/Utils": 57
        }],
        36: [function(b, e, k) {
            b = e.exports = {
                AABB: b("./collision/AABB"),
                AngleLockEquation: b("./equations/AngleLockEquation"),
                Body: b("./objects/Body"),
                Broadphase: b("./collision/Broadphase"),
                Capsule: b("./shapes/Capsule"),
                Circle: b("./shapes/Circle"),
                Constraint: b("./constraints/Constraint"),
                ContactEquation: b("./equations/ContactEquation"),
                ContactEquationPool: b("./utils/ContactEquationPool"),
                ContactMaterial: b("./material/ContactMaterial"),
                Convex: b("./shapes/Convex"),
                DistanceConstraint: b("./constraints/DistanceConstraint"),
                Equation: b("./equations/Equation"),
                EventEmitter: b("./events/EventEmitter"),
                FrictionEquation: b("./equations/FrictionEquation"),
                FrictionEquationPool: b("./utils/FrictionEquationPool"),
                GearConstraint: b("./constraints/GearConstraint"),
                GSSolver: b("./solver/GSSolver"),
                Heightfield: b("./shapes/Heightfield"),
                Line: b("./shapes/Line"),
                LockConstraint: b("./constraints/LockConstraint"),
                Material: b("./material/Material"),
                Narrowphase: b("./collision/Narrowphase"),
                NaiveBroadphase: b("./collision/NaiveBroadphase"),
                Particle: b("./shapes/Particle"),
                Plane: b("./shapes/Plane"),
                Pool: b("./utils/Pool"),
                RevoluteConstraint: b("./constraints/RevoluteConstraint"),
                PrismaticConstraint: b("./constraints/PrismaticConstraint"),
                Ray: b("./collision/Ray"),
                RaycastResult: b("./collision/RaycastResult"),
                Box: b("./shapes/Box"),
                RotationalVelocityEquation: b("./equations/RotationalVelocityEquation"),
                SAPBroadphase: b("./collision/SAPBroadphase"),
                Shape: b("./shapes/Shape"),
                Solver: b("./solver/Solver"),
                Spring: b("./objects/Spring"),
                TopDownVehicle: b("./objects/TopDownVehicle"),
                LinearSpring: b("./objects/LinearSpring"),
                RotationalSpring: b("./objects/RotationalSpring"),
                Utils: b("./utils/Utils"),
                World: b("./world/World"),
                vec2: b("./math/vec2"),
                version: b("../package.json").version
            };
            Object.defineProperty(b, "Rectangle", {
                get: function() {
                    return console.warn("The Rectangle class has been renamed to Box."), this.Box
                }
            })
        }, {
            "../package.json": 6,
            "./collision/AABB": 7,
            "./collision/Broadphase": 8,
            "./collision/NaiveBroadphase": 9,
            "./collision/Narrowphase": 10,
            "./collision/Ray": 11,
            "./collision/RaycastResult": 12,
            "./collision/SAPBroadphase": 13,
            "./constraints/Constraint": 14,
            "./constraints/DistanceConstraint": 15,
            "./constraints/GearConstraint": 16,
            "./constraints/LockConstraint": 17,
            "./constraints/PrismaticConstraint": 18,
            "./constraints/RevoluteConstraint": 19,
            "./equations/AngleLockEquation": 20,
            "./equations/ContactEquation": 21,
            "./equations/Equation": 22,
            "./equations/FrictionEquation": 23,
            "./equations/RotationalVelocityEquation": 25,
            "./events/EventEmitter": 26,
            "./material/ContactMaterial": 27,
            "./material/Material": 28,
            "./math/vec2": 30,
            "./objects/Body": 31,
            "./objects/LinearSpring": 32,
            "./objects/RotationalSpring": 33,
            "./objects/Spring": 34,
            "./objects/TopDownVehicle": 35,
            "./shapes/Box": 37,
            "./shapes/Capsule": 38,
            "./shapes/Circle": 39,
            "./shapes/Convex": 40,
            "./shapes/Heightfield": 41,
            "./shapes/Line": 42,
            "./shapes/Particle": 43,
            "./shapes/Plane": 44,
            "./shapes/Shape": 45,
            "./solver/GSSolver": 46,
            "./solver/Solver": 47,
            "./utils/ContactEquationPool": 48,
            "./utils/FrictionEquationPool": 49,
            "./utils/Pool": 55,
            "./utils/Utils": 57,
            "./world/World": 61
        }],
        37: [function(b,
                e, k) {
                function a(a, b) {
                    "number" == typeof a && "number" == typeof b && (a = {
                        width: a,
                        height: b
                    }, console.warn("The Rectangle has been renamed to Box and its constructor signature has changed. Please use the following format: new Box({ width: 1, height: 1, ... })"));
                    a = a || {};
                    var e = this.width = a.width || 1,
                        h = this.height = a.height || 1,
                        e = [l.fromValues(-e / 2, -h / 2), l.fromValues(e / 2, -h / 2), l.fromValues(e / 2, h / 2), l.fromValues(-e / 2, h / 2)],
                        h = [l.fromValues(1, 0), l.fromValues(0, 1)];
                    a.vertices = e;
                    a.axes = h;
                    a.type = f.BOX;
                    d.call(this, a)
                }
                var l =
                    b("../math/vec2"),
                    f = b("./Shape"),
                    d = b("./Convex");
                e.exports = a;
                a.prototype = new d;
                a.prototype.constructor = a;
                a.prototype.computeMomentOfInertia = function(a) {
                    var d = this.width,
                        b = this.height;
                    return a * (b * b + d * d) / 12
                };
                a.prototype.updateBoundingRadius = function() {
                    var a = this.width,
                        d = this.height;
                    this.boundingRadius = Math.sqrt(a * a + d * d) / 2
                };
                l.create();
                l.create();
                l.create();
                l.create();
                a.prototype.computeAABB = function(a, d, b) {
                    a.setFromPoints(this.vertices, d, b, 0)
                };
                a.prototype.updateArea = function() {
                    this.area = this.width * this.height
                }
            },
            {
                "../math/vec2": 30,
                "./Convex": 40,
                "./Shape": 45
            }
        ],
        38: [function(b, e, k) {
            function a(a, d) {
                "number" == typeof a && "number" == typeof d && (a = {
                    length: a,
                    radius: d
                }, console.warn("The Capsule constructor signature has changed. Please use the following format: new Capsule({ radius: 1, length: 1 })"));
                a = a || {};
                this.length = a.length || 1;
                this.radius = a.radius || 1;
                a.type = l.CAPSULE;
                l.call(this, a)
            }
            var l = b("./Shape"),
                f = b("../math/vec2");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.computeMomentOfInertia = function(a) {
                var d =
                    this.radius,
                    b = this.length + d,
                    d = 2 * d;
                return a * (d * d + b * b) / 12
            };
            a.prototype.updateBoundingRadius = function() {
                this.boundingRadius = this.radius + this.length / 2
            };
            a.prototype.updateArea = function() {
                this.area = Math.PI * this.radius * this.radius + 2 * this.radius * this.length
            };
            var d = f.create();
            a.prototype.computeAABB = function(a, b, e) {
                var h = this.radius;
                f.set(d, this.length / 2, 0);
                0 !== e && f.rotate(d, d, e);
                f.set(a.upperBound, Math.max(d[0] + h, -d[0] + h), Math.max(d[1] + h, -d[1] + h));
                f.set(a.lowerBound, Math.min(d[0] - h, -d[0] - h), Math.min(d[1] -
                    h, -d[1] - h));
                f.add(a.lowerBound, a.lowerBound, b);
                f.add(a.upperBound, a.upperBound, b)
            };
            var h = f.create(),
                m = f.create(),
                q = f.create(),
                n = f.create(),
                r = f.fromValues(0, 1);
            a.prototype.raycast = function(a, d, b, e) {
                for (var k = d.from, l = d.to, t = (d.direction, h), w = this.length / 2, v = 0; 2 > v; v++) {
                    var u = this.radius * (2 * v - 1);
                    f.set(q, -w, u);
                    f.set(n, w, u);
                    f.toGlobalFrame(q, q, b, e);
                    f.toGlobalFrame(n, n, b, e);
                    var G = f.getLineSegmentsIntersectionFraction(k, l, q, n);
                    if (0 <= G && (f.rotate(m, r, e), f.scale(m, m, 2 * v - 1), d.reportIntersection(a, G, m, -1), a.shouldStop(d))) return
                }
                u =
                    Math.pow(this.radius, 2) + Math.pow(w, 2);
                for (v = 0; 2 > v; v++) {
                    f.set(q, w * (2 * v - 1), 0);
                    f.toGlobalFrame(q, q, b, e);
                    var E = Math.pow(l[0] - k[0], 2) + Math.pow(l[1] - k[1], 2),
                        C = 2 * ((l[0] - k[0]) * (k[0] - q[0]) + (l[1] - k[1]) * (k[1] - q[1])),
                        G = Math.pow(C, 2) - 4 * E * (Math.pow(k[0] - q[0], 2) + Math.pow(k[1] - q[1], 2) - Math.pow(this.radius, 2));
                    if (!(0 > G))
                        if (0 === G) {
                            if (f.lerp(t, k, l, G), f.squaredDistance(t, b) > u && (f.sub(m, t, q), f.normalize(m, m), d.reportIntersection(a, G, m, -1), a.shouldStop(d))) break
                        } else {
                            var G = Math.sqrt(G),
                                H = 1 / (2 * E),
                                E = (-C - G) * H,
                                C = (-C + G) * H;
                            if (0 <= E && 1 >= E && (f.lerp(t, k, l, E), f.squaredDistance(t, b) > u && (f.sub(m, t, q), f.normalize(m, m), d.reportIntersection(a, E, m, -1), a.shouldStop(d)))) break;
                            if (0 <= C && 1 >= C && (f.lerp(t, k, l, C), f.squaredDistance(t, b) > u && (f.sub(m, t, q), f.normalize(m, m), d.reportIntersection(a, C, m, -1), a.shouldStop(d)))) break
                        }
                }
            }
        }, {
            "../math/vec2": 30,
            "./Shape": 45
        }],
        39: [function(b, e, k) {
            function a(a) {
                "number" == typeof a && (a = {
                    radius: a
                }, console.warn("The Circle constructor signature has changed. Please use the following format: new Circle({ radius: 1 })"));
                a = a || {};
                this.radius = a.radius || 1;
                a.type = l.CIRCLE;
                l.call(this, a)
            }
            var l = b("./Shape"),
                f = b("../math/vec2");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.computeMomentOfInertia = function(a) {
                var d = this.radius;
                return a * d * d / 2
            };
            a.prototype.updateBoundingRadius = function() {
                this.boundingRadius = this.radius
            };
            a.prototype.updateArea = function() {
                this.area = Math.PI * this.radius * this.radius
            };
            a.prototype.computeAABB = function(a, d, b) {
                b = this.radius;
                f.set(a.upperBound, b, b);
                f.set(a.lowerBound, -b, -b);
                d && (f.add(a.lowerBound,
                    a.lowerBound, d), f.add(a.upperBound, a.upperBound, d))
            };
            var d = f.create(),
                h = f.create();
            a.prototype.raycast = function(a, b, e, k) {
                k = b.from;
                var l = b.to,
                    m = Math.pow(l[0] - k[0], 2) + Math.pow(l[1] - k[1], 2),
                    n = 2 * ((l[0] - k[0]) * (k[0] - e[0]) + (l[1] - k[1]) * (k[1] - e[1])),
                    q = Math.pow(n, 2) - 4 * m * (Math.pow(k[0] - e[0], 2) + Math.pow(k[1] - e[1], 2) - Math.pow(this.radius, 2));
                if (!(0 > q))
                    if (0 === q) f.lerp(d, k, l, q), f.sub(h, d, e), f.normalize(h, h), b.reportIntersection(a, q, h, -1);
                    else {
                        var q = Math.sqrt(q),
                            r = 1 / (2 * m),
                            m = (-n - q) * r,
                            n = (-n + q) * r;
                        0 <= m && 1 >= m && (f.lerp(d,
                            k, l, m), f.sub(h, d, e), f.normalize(h, h), b.reportIntersection(a, m, h, -1), a.shouldStop(b)) || 0 <= n && 1 >= n && (f.lerp(d, k, l, n), f.sub(h, d, e), f.normalize(h, h), b.reportIntersection(a, n, h, -1))
                    }
            }
        }, {
            "../math/vec2": 30,
            "./Shape": 45
        }],
        40: [function(b, e, k) {
            function a(a, d) {
                Array.isArray(a) && (a = {
                    vertices: a,
                    axes: d
                }, console.warn("The Convex constructor signature has changed. Please use the following format: new Convex({ vertices: [...], ... })"));
                a = a || {};
                this.vertices = [];
                for (var b = void 0 !== a.vertices ? a.vertices : [], e = 0; e < b.length; e++) {
                    var h =
                        f.create();
                    f.copy(h, b[e]);
                    this.vertices.push(h)
                }
                if (this.axes = [], a.axes)
                    for (e = 0; e < a.axes.length; e++) b = f.create(), f.copy(b, a.axes[e]), this.axes.push(b);
                else
                    for (e = 0; e < this.vertices.length; e++) {
                        var b = this.vertices[e],
                            h = this.vertices[(e + 1) % this.vertices.length],
                            k = f.create();
                        f.sub(k, h, b);
                        f.rotate90cw(k, k);
                        f.normalize(k, k);
                        this.axes.push(k)
                    }
                if (this.centerOfMass = f.fromValues(0, 0), this.triangles = [], this.vertices.length && (this.updateTriangles(), this.updateCenterOfMass()), this.boundingRadius = 0, a.type = l.CONVEX,
                    l.call(this, a), this.updateBoundingRadius(), this.updateArea(), 0 > this.area) throw Error("Convex vertices must be given in conter-clockwise winding.");
            }
            var l = b("./Shape"),
                f = b("../math/vec2"),
                d = b("../math/polyk");
            b("poly-decomp");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            var h = f.create(),
                m = f.create();
            a.prototype.projectOntoLocalAxis = function(a, d) {
                var b, e = null,
                    k = null;
                a = h;
                for (var l = 0; l < this.vertices.length; l++) b = this.vertices[l], b = f.dot(b, a), (null === e || b > e) && (e = b), (null === k || k > b) && (k = b);
                k >
                    e && (e = k = e);
                f.set(d, k, e)
            };
            a.prototype.projectOntoWorldAxis = function(a, d, b, e) {
                var h = m;
                this.projectOntoLocalAxis(a, e);
                0 !== b ? f.rotate(h, a, b) : h = a;
                a = f.dot(d, h);
                f.set(e, e[0] + a, e[1] + a)
            };
            a.prototype.updateTriangles = function() {
                this.triangles.length = 0;
                for (var a = [], b = 0; b < this.vertices.length; b++) {
                    var e = this.vertices[b];
                    a.push(e[0], e[1])
                }
                a = d.Triangulate(a);
                for (b = 0; b < a.length; b += 3) this.triangles.push([a[b], a[b + 1], a[b + 2]])
            };
            var q = f.create(),
                n = f.create();
            f.create();
            f.create();
            f.create();
            f.create();
            f.create();
            f.create();
            f.create();
            a.prototype.updateCenterOfMass = function() {
                var d = this.triangles,
                    b = this.vertices,
                    e = this.centerOfMass,
                    h, k, l;
                f.set(e, 0, 0);
                for (var m = 0, t = 0; t !== d.length; t++) l = d[t], h = b[l[0]], k = b[l[1]], l = b[l[2]], f.centroid(q, h, k, l), h = a.triangleArea(h, k, l), m += h, f.scale(n, q, h), f.add(e, e, n);
                f.scale(e, e, 1 / m)
            };
            a.prototype.computeMomentOfInertia = function(a) {
                for (var d = 0, b = 0, e = this.vertices.length, h = e - 1, k = 0; e > k; h = k, k++) var l = this.vertices[h],
                    m = this.vertices[k],
                    h = Math.abs(f.crossLength(l, m)),
                    l = f.dot(m, m) + f.dot(m, l) + f.dot(l,
                        l),
                    d = d + h * l,
                    b = b + h;
                return a / 6 * (d / b)
            };
            a.prototype.updateBoundingRadius = function() {
                for (var a = this.vertices, d = 0, b = 0; b !== a.length; b++) {
                    var e = f.squaredLength(a[b]);
                    e > d && (d = e)
                }
                this.boundingRadius = Math.sqrt(d)
            };
            a.triangleArea = function(a, d, b) {
                return .5 * ((d[0] - a[0]) * (b[1] - a[1]) - (b[0] - a[0]) * (d[1] - a[1]))
            };
            a.prototype.updateArea = function() {
                this.updateTriangles();
                this.area = 0;
                for (var d = this.triangles, b = this.vertices, e = 0; e !== d.length; e++) {
                    var f = d[e],
                        f = a.triangleArea(b[f[0]], b[f[1]], b[f[2]]);
                    this.area += f
                }
            };
            a.prototype.computeAABB =
                function(a, d, b) {
                    a.setFromPoints(this.vertices, d, b, 0)
                };
            var r = f.create(),
                t = f.create(),
                u = f.create();
            a.prototype.raycast = function(a, d, b, e) {
                var h = this.vertices;
                f.toLocalFrame(r, d.from, b, e);
                f.toLocalFrame(t, d.to, b, e);
                b = h.length;
                for (var k = 0; b > k && !a.shouldStop(d); k++) {
                    var l = h[k],
                        m = h[(k + 1) % b],
                        n = f.getLineSegmentsIntersectionFraction(r, t, l, m);
                    0 <= n && (f.sub(u, m, l), f.rotate(u, u, -Math.PI / 2 + e), f.normalize(u, u), d.reportIntersection(a, n, u, k))
                }
            }
        }, {
            "../math/polyk": 29,
            "../math/vec2": 30,
            "./Shape": 45,
            "poly-decomp": 5
        }],
        41: [function(b, e, k) {
            function a(a, d) {
                if (Array.isArray(a)) {
                    if (a = {
                            heights: a
                        }, "object" == typeof d)
                        for (var b in d) a[b] = d[b];
                    console.warn("The Heightfield constructor signature has changed. Please use the following format: new Heightfield({ heights: [...], ... })")
                }
                a = a || {};
                this.heights = a.heights ? a.heights.slice(0) : [];
                this.maxValue = a.maxValue || null;
                this.minValue = a.minValue || null;
                this.elementWidth = a.elementWidth || .1;
                void 0 !== a.maxValue && void 0 !== a.minValue || this.updateMaxMinValues();
                a.type = l.HEIGHTFIELD;
                l.call(this,
                    a)
            }
            var l = b("./Shape"),
                f = b("../math/vec2");
            b("../utils/Utils");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.updateMaxMinValues = function() {
                for (var a = this.heights, d = a[0], b = a[0], e = 0; e !== a.length; e++) {
                    var f = a[e];
                    f > d && (d = f);
                    b > f && (b = f)
                }
                this.maxValue = d;
                this.minValue = b
            };
            a.prototype.computeMomentOfInertia = function(a) {
                return Number.MAX_VALUE
            };
            a.prototype.updateBoundingRadius = function() {
                this.boundingRadius = Number.MAX_VALUE
            };
            a.prototype.updateArea = function() {
                for (var a = this.heights, d = 0, b =
                        0; b < a.length - 1; b++) d += (a[b] + a[b + 1]) / 2 * this.elementWidth;
                this.area = d
            };
            var d = [f.create(), f.create(), f.create(), f.create()];
            a.prototype.computeAABB = function(a, b, e) {
                f.set(d[0], 0, this.maxValue);
                f.set(d[1], this.elementWidth * this.heights.length, this.maxValue);
                f.set(d[2], this.elementWidth * this.heights.length, this.minValue);
                f.set(d[3], 0, this.minValue);
                a.setFromPoints(d, b, e)
            };
            a.prototype.getLineSegment = function(a, d, b) {
                var e = this.heights,
                    h = this.elementWidth;
                f.set(a, b * h, e[b]);
                f.set(d, (b + 1) * h, e[b + 1])
            };
            a.prototype.getSegmentIndex =
                function(a) {
                    return Math.floor(a[0] / this.elementWidth)
                };
            a.prototype.getClampedSegmentIndex = function(a) {
                a = this.getSegmentIndex(a);
                return Math.min(this.heights.length, Math.max(a, 0))
            };
            var h = (f.create(), f.create()),
                m = f.create(),
                q = f.create(),
                n = f.create(),
                r = f.create();
            f.fromValues(0, 1);
            a.prototype.raycast = function(a, d, b, e) {
                var k = d.from,
                    l = d.to,
                    t = (d.direction, h);
                f.toLocalFrame(n, k, b, e);
                f.toLocalFrame(r, l, b, e);
                b = this.getClampedSegmentIndex(n);
                k = this.getClampedSegmentIndex(r);
                for (b = 0; b < this.heights.length - 1 &&
                    !(this.getLineSegment(m, q, b), k = f.getLineSegmentsIntersectionFraction(n, r, m, q), 0 <= k && (f.sub(t, q, m), f.rotate(t, t, e + Math.PI / 2), f.normalize(t, t), d.reportIntersection(a, k, t, -1), a.shouldStop(d))); b++);
            }
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Shape": 45
        }],
        42: [function(b, e, k) {
            function a(a) {
                "number" == typeof a && (a = {
                    length: a
                }, console.warn("The Line constructor signature has changed. Please use the following format: new Line({ length: 1, ... })"));
                a = a || {};
                this.length = a.length || 1;
                a.type = l.LINE;
                l.call(this,
                    a)
            }
            var l = b("./Shape"),
                f = b("../math/vec2");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.computeMomentOfInertia = function(a) {
                return a * Math.pow(this.length, 2) / 12
            };
            a.prototype.updateBoundingRadius = function() {
                this.boundingRadius = this.length / 2
            };
            var d = [f.create(), f.create()];
            a.prototype.computeAABB = function(a, b, e) {
                var h = this.length / 2;
                f.set(d[0], -h, 0);
                f.set(d[1], h, 0);
                a.setFromPoints(d, b, e, 0)
            };
            var h = (f.create(), f.create()),
                m = f.create(),
                q = f.create(),
                n = f.fromValues(0, 1);
            a.prototype.raycast =
                function(a, d, b, e) {
                    var k = d.from,
                        l = d.to,
                        r = this.length / 2;
                    f.set(m, -r, 0);
                    f.set(q, r, 0);
                    f.toGlobalFrame(m, m, b, e);
                    f.toGlobalFrame(q, q, b, e);
                    b = f.getLineSegmentsIntersectionFraction(m, q, k, l);
                    0 <= b && (f.rotate(h, n, e), d.reportIntersection(a, b, h, -1))
                }
        }, {
            "../math/vec2": 30,
            "./Shape": 45
        }],
        43: [function(b, e, k) {
            function a(a) {
                a = a || {};
                a.type = l.PARTICLE;
                l.call(this, a)
            }
            var l = b("./Shape"),
                f = b("../math/vec2");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.computeMomentOfInertia = function(a) {
                return 0
            };
            a.prototype.updateBoundingRadius =
                function() {
                    this.boundingRadius = 0
                };
            a.prototype.computeAABB = function(a, b, e) {
                f.copy(a.lowerBound, b);
                f.copy(a.upperBound, b)
            }
        }, {
            "../math/vec2": 30,
            "./Shape": 45
        }],
        44: [function(b, e, k) {
            function a(a) {
                a = a || {};
                a.type = l.PLANE;
                l.call(this, a)
            }
            var l = b("./Shape"),
                f = b("../math/vec2");
            b("../utils/Utils");
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.computeMomentOfInertia = function(a) {
                return 0
            };
            a.prototype.updateBoundingRadius = function() {
                this.boundingRadius = Number.MAX_VALUE
            };
            a.prototype.computeAABB =
                function(a, d, b) {
                    d = b % (2 * Math.PI);
                    b = f.set;
                    var e = a.lowerBound;
                    a = a.upperBound;
                    b(e, -1E7, -1E7);
                    b(a, 1E7, 1E7);
                    0 === d ? a[1] = 0 : d === Math.PI / 2 ? e[0] = 0 : d === Math.PI ? e[1] = 0 : d === 3 * Math.PI / 2 && (a[0] = 0)
                };
            a.prototype.updateArea = function() {
                this.area = Number.MAX_VALUE
            };
            var d = f.create(),
                h = (f.create(), f.create(), f.create()),
                m = f.create();
            a.prototype.raycast = function(a, b, e, k) {
                var l = b.from,
                    n = b.to,
                    q = b.direction;
                f.set(h, 0, 1);
                f.rotate(h, h, k);
                f.sub(m, l, e);
                k = f.dot(m, h);
                f.sub(m, n, e);
                var r = f.dot(m, h);
                0 < k * r || f.squaredDistance(l, n) < k * k ||
                    (n = f.dot(h, q), f.sub(d, l, e), e = -f.dot(h, d) / n / b.length, b.reportIntersection(a, e, h, -1))
            }
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Shape": 45
        }],
        45: [function(b, e, k) {
            function a(b) {
                b = b || {};
                this.body = null;
                this.position = l.fromValues(0, 0);
                b.position && l.copy(this.position, b.position);
                this.angle = b.angle || 0;
                this.type = b.type || 0;
                this.id = a.idCounter++;
                this.boundingRadius = 0;
                this.collisionGroup = void 0 !== b.collisionGroup ? b.collisionGroup : 1;
                this.collisionResponse = void 0 !== b.collisionResponse ? b.collisionResponse : !0;
                this.collisionMask =
                    void 0 !== b.collisionMask ? b.collisionMask : 1;
                this.material = b.material || null;
                this.area = 0;
                this.sensor = void 0 !== b.sensor ? b.sensor : !1;
                this.type && this.updateBoundingRadius();
                this.updateArea()
            }
            e.exports = a;
            var l = b("../math/vec2");
            a.idCounter = 0;
            a.CIRCLE = 1;
            a.PARTICLE = 2;
            a.PLANE = 4;
            a.CONVEX = 8;
            a.LINE = 16;
            a.BOX = 32;
            Object.defineProperty(a, "RECTANGLE", {
                get: function() {
                    return console.warn("Shape.RECTANGLE is deprecated, use Shape.BOX instead."), a.BOX
                }
            });
            a.CAPSULE = 64;
            a.HEIGHTFIELD = 128;
            a.prototype.computeMomentOfInertia =
                function(a) {};
            a.prototype.updateBoundingRadius = function() {};
            a.prototype.updateArea = function() {};
            a.prototype.computeAABB = function(a, d, b) {};
            a.prototype.raycast = function(a, d, b, e) {}
        }, {
            "../math/vec2": 30
        }],
        46: [function(b, e, k) {
            function a(a) {
                f.call(this, a, f.GS);
                a = a || {};
                this.iterations = a.iterations || 10;
                this.tolerance = a.tolerance || 1E-7;
                this.arrayStep = 30;
                this.lambda = new d.ARRAY_TYPE(this.arrayStep);
                this.Bs = new d.ARRAY_TYPE(this.arrayStep);
                this.invCs = new d.ARRAY_TYPE(this.arrayStep);
                this.useZeroRHS = !1;
                this.frictionIterations =
                    void 0 !== a.frictionIterations ? 0 : a.frictionIterations;
                this.usedIterations = 0
            }
            var l = b("../math/vec2"),
                f = b("./Solver"),
                d = b("../utils/Utils"),
                h = b("../equations/FrictionEquation");
            e.exports = a;
            a.prototype = new f;
            a.prototype.constructor = a;
            a.prototype.solve = function(b, e) {
                this.sortEquations();
                var f, k = this.iterations,
                    m = this.frictionIterations,
                    q = this.equations,
                    w = q.length,
                    v = Math.pow(this.tolerance * w, 2),
                    y = e.bodies,
                    A = e.bodies.length,
                    B = (l.add, l.set, this.useZeroRHS),
                    z = this.lambda;
                if (this.usedIterations = 0, w)
                    for (var x =
                            0; x !== A; x++) f = y[x], f.updateSolveMassProperties();
                z.length < w && (z = this.lambda = new d.ARRAY_TYPE(w + this.arrayStep), this.Bs = new d.ARRAY_TYPE(w + this.arrayStep), this.invCs = new d.ARRAY_TYPE(w + this.arrayStep));
                for (var F = z.length; F--;) z[F] = 0;
                for (var F = this.invCs, G = this.Bs, z = this.lambda, x = 0; x !== q.length; x++) {
                    var E = q[x];
                    (E.timeStep !== b || E.needsUpdate) && (E.timeStep = b, E.update());
                    G[x] = E.computeB(E.a, E.b, b);
                    F[x] = E.computeInvC(E.epsilon)
                }
                var C;
                if (0 !== w) {
                    for (x = 0; x !== A; x++) f = y[x], f.resetConstraintVelocity();
                    if (m) {
                        for (f =
                            0; f !== m; f++) {
                            for (x = C = 0; x !== w; x++) E = q[x], E = a.iterateEquation(x, E, E.epsilon, G, F, z, B, b, f), C += Math.abs(E);
                            if (this.usedIterations++, v >= C * C) break
                        }
                        a.updateMultipliers(q, z, 1 / b);
                        for (x = 0; x !== w; x++)
                            if (m = q[x], m instanceof h) {
                                for (E = f = 0; E !== m.contactEquations.length; E++) f += m.contactEquations[E].multiplier;
                                f *= m.frictionCoefficient / m.contactEquations.length;
                                m.maxForce = f;
                                m.minForce = -f
                            }
                    }
                    for (f = 0; f !== k; f++) {
                        for (x = C = 0; x !== w; x++) E = q[x], E = a.iterateEquation(x, E, E.epsilon, G, F, z, B, b, f), C += Math.abs(E);
                        if (this.usedIterations++,
                            v >= C * C) break
                    }
                    for (x = 0; x !== A; x++) y[x].addConstraintVelocity();
                    a.updateMultipliers(q, z, 1 / b)
                }
            };
            a.updateMultipliers = function(a, d, b) {
                for (var e = a.length; e--;) a[e].multiplier = d[e] * b
            };
            a.iterateEquation = function(a, d, b, e, f, h, k, l, y) {
                var m = e[a],
                    n = f[a];
                f = h[a];
                var q = d.computeGWlambda();
                e = d.maxForce;
                y = d.minForce;
                k && (m = 0);
                b = n * (m - q - b * f);
                k = f + b;
                return y * l > k ? b = y * l - f : k > e * l && (b = e * l - f), h[a] += b, d.addToWlambda(b), b
            }
        }, {
            "../equations/FrictionEquation": 23,
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Solver": 47
        }],
        47: [function(b, e,
            k) {
            function a(a, b) {
                a = a || {};
                l.call(this);
                this.type = b;
                this.equations = [];
                this.equationSortFunction = a.equationSortFunction || !1
            }
            var l = (b("../utils/Utils"), b("../events/EventEmitter"));
            e.exports = a;
            a.prototype = new l;
            a.prototype.constructor = a;
            a.prototype.solve = function(a, b) {
                throw Error("Solver.solve should be implemented by subclasses!");
            };
            var f = {
                bodies: []
            };
            a.prototype.solveIsland = function(a, b) {
                this.removeAllEquations();
                b.equations.length && (this.addEquations(b.equations), f.bodies.length = 0, b.getBodies(f.bodies),
                    f.bodies.length && this.solve(a, f))
            };
            a.prototype.sortEquations = function() {
                this.equationSortFunction && this.equations.sort(this.equationSortFunction)
            };
            a.prototype.addEquation = function(a) {
                a.enabled && this.equations.push(a)
            };
            a.prototype.addEquations = function(a) {
                for (var d = 0, b = a.length; d !== b; d++) {
                    var e = a[d];
                    e.enabled && this.equations.push(e)
                }
            };
            a.prototype.removeEquation = function(a) {
                a = this.equations.indexOf(a); - 1 !== a && this.equations.splice(a, 1)
            };
            a.prototype.removeAllEquations = function() {
                this.equations.length =
                    0
            };
            a.GS = 1;
            a.ISLAND = 2
        }, {
            "../events/EventEmitter": 26,
            "../utils/Utils": 57
        }],
        48: [function(b, e, k) {
            function a() {
                f.apply(this, arguments)
            }
            var l = b("../equations/ContactEquation"),
                f = b("./Pool");
            e.exports = a;
            a.prototype = new f;
            a.prototype.constructor = a;
            a.prototype.create = function() {
                return new l
            };
            a.prototype.destroy = function(a) {
                return a.bodyA = a.bodyB = null, this
            }
        }, {
            "../equations/ContactEquation": 21,
            "./Pool": 55
        }],
        49: [function(b, e, k) {
            function a() {
                f.apply(this, arguments)
            }
            var l = b("../equations/FrictionEquation"),
                f = b("./Pool");
            e.exports = a;
            a.prototype = new f;
            a.prototype.constructor = a;
            a.prototype.create = function() {
                return new l
            };
            a.prototype.destroy = function(a) {
                return a.bodyA = a.bodyB = null, this
            }
        }, {
            "../equations/FrictionEquation": 23,
            "./Pool": 55
        }],
        50: [function(b, e, k) {
            function a() {
                f.apply(this, arguments)
            }
            var l = b("../world/IslandNode"),
                f = b("./Pool");
            e.exports = a;
            a.prototype = new f;
            a.prototype.constructor = a;
            a.prototype.create = function() {
                return new l
            };
            a.prototype.destroy = function(a) {
                return a.reset(), this
            }
        }, {
            "../world/IslandNode": 60,
            "./Pool": 55
        }],
        51: [function(b, e, k) {
            function a() {
                f.apply(this, arguments)
            }
            var l = b("../world/Island"),
                f = b("./Pool");
            e.exports = a;
            a.prototype = new f;
            a.prototype.constructor = a;
            a.prototype.create = function() {
                return new l
            };
            a.prototype.destroy = function(a) {
                return a.reset(), this
            }
        }, {
            "../world/Island": 58,
            "./Pool": 55
        }],
        52: [function(b, e, k) {
            function a() {
                this.overlappingShapesLastState = new l;
                this.overlappingShapesCurrentState = new l;
                this.recordPool = new f({
                    size: 16
                });
                this.tmpDict = new l;
                this.tmpArray1 = []
            }
            var l = b("./TupleDictionary"),
                f = (b("./OverlapKeeperRecord"), b("./OverlapKeeperRecordPool"));
            b("./Utils");
            e.exports = a;
            a.prototype.tick = function() {
                for (var a = this.overlappingShapesLastState, b = this.overlappingShapesCurrentState, e = a.keys.length; e--;) {
                    var f = a.keys[e],
                        k = a.getByKey(f);
                    b.getByKey(f);
                    k && this.recordPool.release(k)
                }
                a.reset();
                a.copy(b);
                b.reset()
            };
            a.prototype.setOverlapping = function(a, b, e, f) {
                var d = (this.overlappingShapesLastState, this.overlappingShapesCurrentState);
                if (!d.get(b.id, f.id)) {
                    var h = this.recordPool.get();
                    h.set(a,
                        b, e, f);
                    d.set(b.id, f.id, h)
                }
            };
            a.prototype.getNewOverlaps = function(a) {
                return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, a)
            };
            a.prototype.getEndOverlaps = function(a) {
                return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, a)
            };
            a.prototype.bodiesAreOverlapping = function(a, b) {
                for (var d = this.overlappingShapesCurrentState, e = d.keys.length; e--;) {
                    var f = d.data[d.keys[e]];
                    if (f.bodyA === a && f.bodyB === b || f.bodyA === b && f.bodyB === a) return !0
                }
                return !1
            };
            a.prototype.getDiff =
                function(a, b, e) {
                    e = e || [];
                    e.length = 0;
                    for (var d = b.keys.length; d--;) {
                        var f = b.keys[d],
                            h = b.data[f];
                        if (!h) throw Error("Key " + f + " had no data!");
                        a.data[f] || e.push(h)
                    }
                    return e
                };
            a.prototype.isNewOverlap = function(a, b) {
                var d = 0 | a.id,
                    e = 0 | b.id,
                    f = this.overlappingShapesCurrentState;
                return !this.overlappingShapesLastState.get(d, e) && !!f.get(d, e)
            };
            a.prototype.getNewBodyOverlaps = function(a) {
                this.tmpArray1.length = 0;
                var d = this.getNewOverlaps(this.tmpArray1);
                return this.getBodyDiff(d, a)
            };
            a.prototype.getEndBodyOverlaps = function(a) {
                this.tmpArray1.length =
                    0;
                var d = this.getEndOverlaps(this.tmpArray1);
                return this.getBodyDiff(d, a)
            };
            a.prototype.getBodyDiff = function(a, b) {
                b = b || [];
                for (var d = this.tmpDict, e = a.length; e--;) {
                    var f = a[e];
                    d.set(0 | f.bodyA.id, 0 | f.bodyB.id, f)
                }
                for (e = d.keys.length; e--;)(f = d.getByKey(d.keys[e])) && b.push(f.bodyA, f.bodyB);
                return d.reset(), b
            }
        }, {
            "./OverlapKeeperRecord": 53,
            "./OverlapKeeperRecordPool": 54,
            "./TupleDictionary": 56,
            "./Utils": 57
        }],
        53: [function(b, e, k) {
            function a(a, b, d, e) {
                this.shapeA = b;
                this.shapeB = e;
                this.bodyA = a;
                this.bodyB = d
            }
            e.exports =
                a;
            a.prototype.set = function(b, e, d, h) {
                a.call(this, b, e, d, h)
            }
        }, {}],
        54: [function(b, e, k) {
            function a() {
                f.apply(this, arguments)
            }
            var l = b("./OverlapKeeperRecord"),
                f = b("./Pool");
            e.exports = a;
            a.prototype = new f;
            a.prototype.constructor = a;
            a.prototype.create = function() {
                return new l
            };
            a.prototype.destroy = function(a) {
                return a.bodyA = a.bodyB = a.shapeA = a.shapeB = null, this
            }
        }, {
            "./OverlapKeeperRecord": 53,
            "./Pool": 55
        }],
        55: [function(b, e, k) {
            function a(a) {
                a = a || {};
                this.objects = [];
                void 0 !== a.size && this.resize(a.size)
            }
            e.exports = a;
            a.prototype.resize = function(a) {
                for (var b = this.objects; b.length > a;) b.pop();
                for (; b.length < a;) b.push(this.create());
                return this
            };
            a.prototype.get = function() {
                var a = this.objects;
                return a.length ? a.pop() : this.create()
            };
            a.prototype.release = function(a) {
                return this.destroy(a), this.objects.push(a), this
            }
        }, {}],
        56: [function(b, e, k) {
            function a() {
                this.data = {};
                this.keys = []
            }
            var l = b("./Utils");
            e.exports = a;
            a.prototype.getKey = function(a, d) {
                return a |= 0, d |= 0, (0 | a) === (0 | d) ? -1 : 0 | ((0 | a) > (0 | d) ? a << 16 | 65535 & d : d << 16 | 65535 & a)
            };
            a.prototype.getByKey =
                function(a) {
                    return a |= 0, this.data[a]
                };
            a.prototype.get = function(a, d) {
                return this.data[this.getKey(a, d)]
            };
            a.prototype.set = function(a, d, b) {
                if (!b) throw Error("No data!");
                a = this.getKey(a, d);
                return this.data[a] || this.keys.push(a), this.data[a] = b, a
            };
            a.prototype.reset = function() {
                for (var a = this.data, d = this.keys, b = d.length; b--;) delete a[d[b]];
                d.length = 0
            };
            a.prototype.copy = function(a) {
                this.reset();
                l.appendArray(this.keys, a.keys);
                for (var d = a.keys.length; d--;) {
                    var b = a.keys[d];
                    this.data[b] = a.data[b]
                }
            }
        }, {
            "./Utils": 57
        }],
        57: [function(b, e, k) {
            function a() {}
            e.exports = a;
            a.appendArray = function(a, b) {
                if (15E4 > b.length) a.push.apply(a, b);
                else
                    for (var d = 0, e = b.length; d !== e; ++d) a.push(b[d])
            };
            a.splice = function(a, b, d) {
                d = d || 1;
                for (var e = a.length - d; e > b; b++) a[b] = a[b + d];
                a.length = e
            };
            "undefined" != typeof P2_ARRAY_TYPE ? a.ARRAY_TYPE = P2_ARRAY_TYPE : "undefined" != typeof Float32Array ? a.ARRAY_TYPE = Float32Array : a.ARRAY_TYPE = Array;
            a.extend = function(a, b) {
                for (var d in b) a[d] = b[d]
            };
            a.defaults = function(a, b) {
                a = a || {};
                for (var d in b) d in a || (a[d] = b[d]);
                return a
            }
        }, {}],
        58: [function(b, e, k) {
            function a() {
                this.equations = [];
                this.bodies = []
            }
            var l = b("../objects/Body");
            e.exports = a;
            a.prototype.reset = function() {
                this.equations.length = this.bodies.length = 0
            };
            var f = [];
            a.prototype.getBodies = function(a) {
                a = a || [];
                for (var d = this.equations, b = f.length = 0; b !== d.length; b++) {
                    var e = d[b]; - 1 === f.indexOf(e.bodyA.id) && (a.push(e.bodyA), f.push(e.bodyA.id)); - 1 === f.indexOf(e.bodyB.id) && (a.push(e.bodyB), f.push(e.bodyB.id))
                }
                return a
            };
            a.prototype.wantsToSleep = function() {
                for (var a = 0; a <
                    this.bodies.length; a++) {
                    var b = this.bodies[a];
                    if (b.type === l.DYNAMIC && !b.wantsToSleep) return !1
                }
                return !0
            };
            a.prototype.sleep = function() {
                for (var a = 0; a < this.bodies.length; a++) this.bodies[a].sleep();
                return !0
            }
        }, {
            "../objects/Body": 31
        }],
        59: [function(b, e, k) {
            function a(a) {
                this.nodePool = new l({
                    size: 16
                });
                this.islandPool = new f({
                    size: 8
                });
                this.equations = [];
                this.islands = [];
                this.nodes = [];
                this.queue = []
            }
            var l = (b("../math/vec2"), b("./Island"), b("./IslandNode"), b("./../utils/IslandNodePool")),
                f = b("./../utils/IslandPool"),
                d = b("../objects/Body");
            e.exports = a;
            a.getUnvisitedNode = function(a) {
                for (var b = a.length, e = 0; e !== b; e++) {
                    var f = a[e];
                    if (!f.visited && f.body.type === d.DYNAMIC) return f
                }
                return !1
            };
            a.prototype.visit = function(a, d, b) {
                d.push(a.body);
                d = a.equations.length;
                for (var e = 0; e !== d; e++) {
                    var f = a.equations[e]; - 1 === b.indexOf(f) && b.push(f)
                }
            };
            a.prototype.bfs = function(b, e, f) {
                var h = this.queue;
                h.length = 0;
                h.push(b);
                b.visited = !0;
                for (this.visit(b, e, f); h.length;)
                    for (var k = h.pop(); b = a.getUnvisitedNode(k.neighbors);) b.visited = !0, this.visit(b,
                        e, f), b.body.type === d.DYNAMIC && h.push(b)
            };
            a.prototype.split = function(d) {
                var b = d.bodies;
                d = this.nodes;
                for (var e = this.equations; d.length;) this.nodePool.release(d.pop());
                for (var f = 0; f !== b.length; f++) {
                    var h = this.nodePool.get();
                    h.body = b[f];
                    d.push(h)
                }
                for (h = 0; h !== e.length; h++) {
                    var k = e[h],
                        f = b.indexOf(k.bodyA),
                        l = b.indexOf(k.bodyB),
                        f = d[f],
                        l = d[l];
                    f.neighbors.push(l);
                    l.neighbors.push(f);
                    f.equations.push(k);
                    l.equations.push(k)
                }
                b = this.islands;
                for (f = 0; f < b.length; f++) this.islandPool.release(b[f]);
                for (b.length = 0; e =
                    a.getUnvisitedNode(d);) f = this.islandPool.get(), this.bfs(e, f.bodies, f.equations), b.push(f);
                return b
            }
        }, {
            "../math/vec2": 30,
            "../objects/Body": 31,
            "./../utils/IslandNodePool": 50,
            "./../utils/IslandPool": 51,
            "./Island": 58,
            "./IslandNode": 60
        }],
        60: [function(b, e, k) {
            function a(a) {
                this.body = a;
                this.neighbors = [];
                this.equations = [];
                this.visited = !1
            }
            e.exports = a;
            a.prototype.reset = function() {
                this.equations.length = 0;
                this.neighbors.length = 0;
                this.visited = !1;
                this.body = null
            }
        }, {}],
        61: [function(b, e, k) {
            function a(d) {
                r.apply(this);
                d = d || {};
                this.springs = [];
                this.bodies = [];
                this.disabledBodyCollisionPairs = [];
                this.solver = d.solver || new l;
                this.narrowphase = new y(this);
                this.islandManager = new z;
                this.gravity = f.fromValues(0, -9.78);
                d.gravity && f.copy(this.gravity, d.gravity);
                this.frictionGravity = f.length(this.gravity) || 10;
                this.useFrictionGravityOnZeroGravity = this.useWorldGravityAsFrictionGravity = !0;
                this.broadphase = d.broadphase || new v;
                this.broadphase.setWorld(this);
                this.constraints = [];
                this.defaultMaterial = new u;
                this.defaultContactMaterial =
                    new w(this.defaultMaterial, this.defaultMaterial);
                this.lastTimeStep = 1 / 60;
                this.solveConstraints = this.applyGravity = this.applyDamping = this.applySpringForces = !0;
                this.contactMaterials = [];
                this.accumulator = this.time = 0;
                this.stepping = !1;
                this.bodiesToBeRemoved = [];
                this.islandSplit = "undefined" != typeof d.islandSplit ? !!d.islandSplit : !0;
                this.emitImpactEvent = !0;
                this._bodyIdCounter = this._constraintIdCounter = 0;
                this.postStepEvent = {
                    type: "postStep"
                };
                this.addBodyEvent = {
                    type: "addBody",
                    body: null
                };
                this.removeBodyEvent = {
                    type: "removeBody",
                    body: null
                };
                this.addSpringEvent = {
                    type: "addSpring",
                    spring: null
                };
                this.impactEvent = {
                    type: "impact",
                    bodyA: null,
                    bodyB: null,
                    shapeA: null,
                    shapeB: null,
                    contactEquation: null
                };
                this.postBroadphaseEvent = {
                    type: "postBroadphase",
                    pairs: null
                };
                this.sleepMode = a.NO_SLEEPING;
                this.beginContactEvent = {
                    type: "beginContact",
                    shapeA: null,
                    shapeB: null,
                    bodyA: null,
                    bodyB: null,
                    contactEquations: []
                };
                this.endContactEvent = {
                    type: "endContact",
                    shapeA: null,
                    shapeB: null,
                    bodyA: null,
                    bodyB: null
                };
                this.preSolveEvent = {
                    type: "preSolve",
                    contactEquations: null,
                    frictionEquations: null
                };
                this.overlappingShapesLastState = {
                    keys: []
                };
                this.overlappingShapesCurrentState = {
                    keys: []
                };
                this.overlapKeeper = new B
            }
            var l = b("../solver/GSSolver"),
                f = (b("../solver/Solver"), b("../collision/Ray"), b("../math/vec2")),
                d = b("../shapes/Circle"),
                h = b("../shapes/Convex"),
                m = (b("../shapes/Line"), b("../shapes/Plane")),
                q = b("../shapes/Capsule"),
                n = b("../shapes/Particle"),
                r = b("../events/EventEmitter"),
                t = b("../objects/Body"),
                u = (b("../shapes/Shape"), b("../objects/LinearSpring"), b("../material/Material")),
                w = b("../material/ContactMaterial");
            k = (b("../constraints/DistanceConstraint"), b("../constraints/Constraint"), b("../constraints/LockConstraint"), b("../constraints/RevoluteConstraint"), b("../constraints/PrismaticConstraint"), b("../constraints/GearConstraint"), b("../../package.json"), b("../collision/Broadphase"), b("../collision/AABB"));
            var v = b("../collision/SAPBroadphase"),
                y = b("../collision/Narrowphase"),
                A = b("../utils/Utils"),
                B = b("../utils/OverlapKeeper"),
                z = b("./IslandManager");
            b("../objects/RotationalSpring");
            e.exports = a;
            a.prototype = Object(r.prototype);
            a.prototype.constructor = a;
            a.NO_SLEEPING = 1;
            a.BODY_SLEEPING = 2;
            a.ISLAND_SLEEPING = 4;
            a.prototype.addConstraint = function(a) {
                this.constraints.push(a)
            };
            a.prototype.addContactMaterial = function(a) {
                this.contactMaterials.push(a)
            };
            a.prototype.removeContactMaterial = function(a) {
                a = this.contactMaterials.indexOf(a); - 1 !== a && A.splice(this.contactMaterials, a, 1)
            };
            a.prototype.getContactMaterial = function(a, d) {
                for (var b = this.contactMaterials, e = 0, f = b.length; e !== f; e++) {
                    var h = b[e];
                    if (h.materialA.id === a.id && h.materialB.id === d.id || h.materialA.id === d.id && h.materialB.id === a.id) return h
                }
                return !1
            };
            a.prototype.removeConstraint = function(a) {
                a = this.constraints.indexOf(a); - 1 !== a && A.splice(this.constraints, a, 1)
            };
            var x = (f.create(), f.create(), f.create(), f.create(), f.create(), f.create(), f.create()),
                F = f.fromValues(0, 0),
                G = f.fromValues(0, 0);
            f.fromValues(0, 0);
            f.fromValues(0, 0);
            a.prototype.step = function(a, d, b) {
                if (b = b || 10, d = d || 0, 0 === d) this.internalStep(a), this.time += a;
                else {
                    this.accumulator += d;
                    for (d = 0; this.accumulator >= a && b > d;) this.internalStep(a), this.time += a, this.accumulator -= a, d++;
                    a = this.accumulator % a / a;
                    for (b = 0; b !== this.bodies.length; b++) d = this.bodies[b], f.lerp(d.interpolatedPosition, d.previousPosition, d.position, a), d.interpolatedAngle = d.previousAngle + a * (d.angle - d.previousAngle)
                }
            };
            var E = [];
            a.prototype.internalStep = function(d) {
                this.stepping = !0;
                var b = this.springs.length,
                    e = this.springs,
                    h = this.bodies,
                    k = this.gravity,
                    l = this.solver,
                    m = this.bodies.length,
                    n = this.broadphase,
                    q = this.narrowphase,
                    r = this.constraints,
                    v = (f.scale, f.add),
                    w = (f.rotate, this.islandManager);
                if (this.overlapKeeper.tick(), this.lastTimeStep = d, this.useWorldGravityAsFrictionGravity) {
                    var u = f.length(this.gravity);
                    0 === u && this.useFrictionGravityOnZeroGravity || (this.frictionGravity = u)
                }
                if (this.applyGravity)
                    for (u = 0; u !== m; u++) {
                        var y = h[u],
                            F = y.force;
                        y.type === t.DYNAMIC && y.sleepState !== t.SLEEPING && (f.scale(x, k, y.mass * y.gravityScale), v(F, F, x))
                    }
                if (this.applySpringForces)
                    for (u = 0; u !== b; u++) e[u].applyForce();
                if (this.applyDamping)
                    for (u = 0; u !==
                        m; u++) y = h[u], y.type === t.DYNAMIC && y.applyDamping(d);
                b = n.getCollisionPairs(this);
                k = this.disabledBodyCollisionPairs;
                for (u = k.length - 2; 0 <= u; u -= 2)
                    for (e = b.length - 2; 0 <= e; e -= 2)(k[u] === b[e] && k[u + 1] === b[e + 1] || k[u + 1] === b[e] && k[u] === b[e + 1]) && b.splice(e, 2);
                k = r.length;
                for (u = 0; u !== k; u++)
                    if (n = r[u], !n.collideConnected)
                        for (e = b.length - 2; 0 <= e; e -= 2)(n.bodyA === b[e] && n.bodyB === b[e + 1] || n.bodyB === b[e] && n.bodyA === b[e + 1]) && b.splice(e, 2);
                this.postBroadphaseEvent.pairs = b;
                this.emit(this.postBroadphaseEvent);
                this.postBroadphaseEvent.pairs =
                    null;
                q.reset(this);
                u = 0;
                for (k = b.length; u !== k; u += 2)
                    for (n = b[u], v = b[u + 1], y = 0, F = n.shapes.length; y !== F; y++)
                        for (var z = n.shapes[y], B = z.position, G = z.angle, e = 0, C = v.shapes.length; e !== C; e++) {
                            var I = v.shapes[e],
                                D = I.position,
                                H = I.angle,
                                J = this.defaultContactMaterial;
                            if (z.material && I.material) {
                                var la = this.getContactMaterial(z.material, I.material);
                                la && (J = la)
                            }
                            this.runNarrowphase(q, n, z, B, G, v, I, D, H, J, this.frictionGravity)
                        }
                for (u = 0; u !== m; u++) b = h[u], b._wakeUpAfterNarrowphase && (b.wakeUp(), b._wakeUpAfterNarrowphase = !1);
                if (this.has("endContact")) {
                    this.overlapKeeper.getEndOverlaps(E);
                    u = this.endContactEvent;
                    for (e = E.length; e--;) b = E[e], u.shapeA = b.shapeA, u.shapeB = b.shapeB, u.bodyA = b.bodyA, u.bodyB = b.bodyB, this.emit(u);
                    E.length = 0
                }
                u = this.preSolveEvent;
                u.contactEquations = q.contactEquations;
                u.frictionEquations = q.frictionEquations;
                this.emit(u);
                u.contactEquations = u.frictionEquations = null;
                k = r.length;
                for (u = 0; u !== k; u++) r[u].update();
                if (q.contactEquations.length || q.frictionEquations.length || k)
                    if (this.islandSplit) {
                        w.equations.length = 0;
                        A.appendArray(w.equations, q.contactEquations);
                        A.appendArray(w.equations,
                            q.frictionEquations);
                        for (u = 0; u !== k; u++) A.appendArray(w.equations, r[u].equations);
                        w.split(this);
                        for (u = 0; u !== w.islands.length; u++) r = w.islands[u], r.equations.length && l.solveIsland(d, r)
                    } else {
                        l.addEquations(q.contactEquations);
                        l.addEquations(q.frictionEquations);
                        for (u = 0; u !== k; u++) l.addEquations(r[u].equations);
                        this.solveConstraints && l.solve(d, this);
                        l.removeAllEquations()
                    }
                for (u = 0; u !== m; u++) b = h[u], b.integrate(d);
                for (u = 0; u !== m; u++) h[u].setZeroForce();
                if (this.emitImpactEvent && this.has("impact"))
                    for (l = this.impactEvent,
                        u = 0; u !== q.contactEquations.length; u++) w = q.contactEquations[u], w.firstImpact && (l.bodyA = w.bodyA, l.bodyB = w.bodyB, l.shapeA = w.shapeA, l.shapeB = w.shapeB, l.contactEquation = w, this.emit(l));
                if (this.sleepMode === a.BODY_SLEEPING)
                    for (u = 0; u !== m; u++) h[u].sleepTick(this.time, !1, d);
                else if (this.sleepMode === a.ISLAND_SLEEPING && this.islandSplit) {
                    for (u = 0; u !== m; u++) h[u].sleepTick(this.time, !0, d);
                    for (u = 0; u < this.islandManager.islands.length; u++) r = this.islandManager.islands[u], r.wantsToSleep() && r.sleep()
                }
                this.stepping = !1;
                d = this.bodiesToBeRemoved;
                for (u = 0; u !== d.length; u++) this.removeBody(d[u]);
                d.length = 0;
                this.emit(this.postStepEvent)
            };
            a.prototype.runNarrowphase = function(a, d, b, e, h, k, l, m, n, q, r) {
                if (0 !== (b.collisionGroup & l.collisionMask) && 0 !== (l.collisionGroup & b.collisionMask) && (f.rotate(F, e, d.angle), f.rotate(G, m, k.angle), f.add(F, F, d.position), f.add(G, G, k.position), e = h + d.angle, n += k.angle, a.enableFriction = 0 < q.friction, a.frictionCoefficient = q.friction, a.slipForce = q.friction * r * (d.type === t.STATIC || d.type === t.KINEMATIC ? k.mass :
                        k.type === t.STATIC || k.type === t.KINEMATIC ? d.mass : d.mass * k.mass / (d.mass + k.mass)), a.restitution = q.restitution, a.surfaceVelocity = q.surfaceVelocity, a.frictionStiffness = q.frictionStiffness, a.frictionRelaxation = q.frictionRelaxation, a.stiffness = q.stiffness, a.relaxation = q.relaxation, a.contactSkinSize = q.contactSkinSize, a.enabledEquations = d.collisionResponse && k.collisionResponse && b.collisionResponse && l.collisionResponse, r = a[b.type | l.type]) && (h = b.sensor || l.sensor, q = a.frictionEquations.length, r = b.type < l.type ? r.call(a,
                        d, b, F, e, k, l, G, n, h) : r.call(a, k, l, G, n, d, b, F, e, h), q = a.frictionEquations.length - q, r)) {
                    d.allowSleep && d.type === t.DYNAMIC && d.sleepState === t.SLEEPING && k.sleepState === t.AWAKE && k.type !== t.STATIC && f.squaredLength(k.velocity) + Math.pow(k.angularVelocity, 2) >= 2 * Math.pow(k.sleepSpeedLimit, 2) && (d._wakeUpAfterNarrowphase = !0);
                    k.allowSleep && k.type === t.DYNAMIC && k.sleepState === t.SLEEPING && d.sleepState === t.AWAKE && d.type !== t.STATIC && f.squaredLength(d.velocity) + Math.pow(d.angularVelocity, 2) >= 2 * Math.pow(d.sleepSpeedLimit,
                        2) && (k._wakeUpAfterNarrowphase = !0);
                    if (this.overlapKeeper.setOverlapping(d, b, k, l), this.has("beginContact") && this.overlapKeeper.isNewOverlap(b, l)) {
                        e = this.beginContactEvent;
                        if (e.shapeA = b, e.shapeB = l, e.bodyA = d, e.bodyB = k, e.contactEquations.length = 0, "number" == typeof r)
                            for (d = a.contactEquations.length - r; d < a.contactEquations.length; d++) e.contactEquations.push(a.contactEquations[d]);
                        this.emit(e)
                    }
                    if ("number" == typeof r && 1 < q)
                        for (d = a.frictionEquations.length - q; d < a.frictionEquations.length; d++) b = a.frictionEquations[d],
                            b.setSlipForce(b.getSlipForce() / q)
                }
            };
            a.prototype.addSpring = function(a) {
                this.springs.push(a);
                var d = this.addSpringEvent;
                d.spring = a;
                this.emit(d);
                d.spring = null
            };
            a.prototype.removeSpring = function(a) {
                a = this.springs.indexOf(a); - 1 !== a && A.splice(this.springs, a, 1)
            };
            a.prototype.addBody = function(a) {
                if (-1 === this.bodies.indexOf(a)) {
                    this.bodies.push(a);
                    a.world = this;
                    var d = this.addBodyEvent;
                    d.body = a;
                    this.emit(d);
                    d.body = null
                }
            };
            a.prototype.removeBody = function(a) {
                if (this.stepping) this.bodiesToBeRemoved.push(a);
                else {
                    a.world =
                        null;
                    var d = this.bodies.indexOf(a); - 1 !== d && (A.splice(this.bodies, d, 1), this.removeBodyEvent.body = a, a.resetConstraintVelocity(), this.emit(this.removeBodyEvent), this.removeBodyEvent.body = null)
                }
            };
            a.prototype.getBodyById = function(a) {
                for (var d = this.bodies, b = 0; b < d.length; b++) {
                    var e = d[b];
                    if (e.id === a) return e
                }
                return !1
            };
            a.prototype.disableBodyCollision = function(a, d) {
                this.disabledBodyCollisionPairs.push(a, d)
            };
            a.prototype.enableBodyCollision = function(a, d) {
                for (var b = this.disabledBodyCollisionPairs, e = 0; e < b.length; e +=
                    2)
                    if (b[e] === a && b[e + 1] === d || b[e + 1] === a && b[e] === d) return void b.splice(e, 2)
            };
            a.prototype.clear = function() {
                this.time = 0;
                this.solver && this.solver.equations.length && this.solver.removeAllEquations();
                for (var d = this.constraints, b = d.length - 1; 0 <= b; b--) this.removeConstraint(d[b]);
                d = this.bodies;
                for (b = d.length - 1; 0 <= b; b--) this.removeBody(d[b]);
                d = this.springs;
                for (b = d.length - 1; 0 <= b; b--) this.removeSpring(d[b]);
                d = this.contactMaterials;
                for (b = d.length - 1; 0 <= b; b--) this.removeContactMaterial(d[b]);
                a.apply(this)
            };
            var C = f.create(),
                H = (f.fromValues(0, 0), f.fromValues(0, 0));
            a.prototype.hitTest = function(a, b, e) {
                e = e || 0;
                var k = new t({
                        position: a
                    }),
                    l = new n;
                k.addShape(l);
                for (var r = this.narrowphase, u = [], v = 0, x = b.length; v !== x; v++)
                    for (var w = b[v], y = 0, F = w.shapes.length; y !== F; y++) {
                        var z = w.shapes[y];
                        f.rotate(C, z.position, w.angle);
                        f.add(C, C, w.position);
                        var A = z.angle + w.angle;
                        (z instanceof d && r.circleParticle(w, z, C, A, k, l, a, 0, !0) || z instanceof h && r.particleConvex(k, l, a, 0, w, z, C, A, !0) || z instanceof m && r.particlePlane(k, l, a, 0, w, z, C, A, !0) || z instanceof q && r.particleCapsule(k, l, a, 0, w, z, C, A, !0) || z instanceof n && f.squaredLength(f.sub(H, C, a)) < e * e) && u.push(w)
                    }
                return u
            };
            a.prototype.setGlobalStiffness = function(a) {
                for (var d = this.constraints, b = 0; b !== d.length; b++)
                    for (var e = d[b], f = 0; f !== e.equations.length; f++) {
                        var h = e.equations[f];
                        h.stiffness = a;
                        h.needsUpdate = !0
                    }
                d = this.contactMaterials;
                for (b = 0; b !== d.length; b++) e = d[b], e.stiffness = e.frictionStiffness = a;
                e = this.defaultContactMaterial;
                e.stiffness = e.frictionStiffness = a
            };
            a.prototype.setGlobalRelaxation = function(a) {
                for (var d =
                        0; d !== this.constraints.length; d++)
                    for (var b = this.constraints[d], e = 0; e !== b.equations.length; e++) {
                        var f = b.equations[e];
                        f.relaxation = a;
                        f.needsUpdate = !0
                    }
                for (d = 0; d !== this.contactMaterials.length; d++) b = this.contactMaterials[d], b.relaxation = b.frictionRelaxation = a;
                b = this.defaultContactMaterial;
                b.relaxation = b.frictionRelaxation = a
            };
            var D = new k,
                J = [];
            a.prototype.raycast = function(a, d) {
                return d.getAABB(D), this.broadphase.aabbQuery(this, D, J), d.intersectBodies(a, J), J.length = 0, a.hasHit()
            }
        }, {
            "../../package.json": 6,
            "../collision/AABB": 7,
            "../collision/Broadphase": 8,
            "../collision/Narrowphase": 10,
            "../collision/Ray": 11,
            "../collision/SAPBroadphase": 13,
            "../constraints/Constraint": 14,
            "../constraints/DistanceConstraint": 15,
            "../constraints/GearConstraint": 16,
            "../constraints/LockConstraint": 17,
            "../constraints/PrismaticConstraint": 18,
            "../constraints/RevoluteConstraint": 19,
            "../events/EventEmitter": 26,
            "../material/ContactMaterial": 27,
            "../material/Material": 28,
            "../math/vec2": 30,
            "../objects/Body": 31,
            "../objects/LinearSpring": 32,
            "../objects/RotationalSpring": 33,
            "../shapes/Capsule": 38,
            "../shapes/Circle": 39,
            "../shapes/Convex": 40,
            "../shapes/Line": 42,
            "../shapes/Particle": 43,
            "../shapes/Plane": 44,
            "../shapes/Shape": 45,
            "../solver/GSSolver": 46,
            "../solver/Solver": 47,
            "../utils/OverlapKeeper": 52,
            "../utils/Utils": 57,
            "./IslandManager": 59
        }]
    }, {}, [36])(36)
});
! function(p) {
    function b(n) {
        if (z = u(b), !(a + m > n)) {
            k += n - a;
            a = n;
            v(n, k);
            n > f + 1E3 && (l = .25 * d + .75 * l, f = n, d = 0);
            d++;
            for (h = 0; k >= e;)
                if (y(e), k -= e, 240 <= ++h) {
                    r = !0;
                    break
                }
            A(k / e);
            B(l, r);
            r = !1
        }
    }
    var k = 0,
        a = 0,
        l = 20,
        e = 1E3 / l,
        f = 0,
        d = 0,
        h = 0,
        m = 0,
        q = !1,
        n = !1,
        r = !1,
        t = "object" == typeof window ? window : p,
        u = t.requestAnimationFrame || function() {
            var a = Date.now(),
                d, b;
            return function(f) {
                return d = Date.now(), b = Math.max(0, e - (d - a)), a = d + b, setTimeout(function() {
                    f(d + b)
                }, b)
            }
        }(),
        w = t.cancelAnimationFrame || clearTimeout,
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
            return l
        },
        getMaxAllowedFPS: function() {
            return 1E3 / m
        },
        setMaxAllowedFPS: function(a) {
            return "undefined" == typeof a && (a = 50), 0 === a ? this.stop() : m = 1E3 / a, this
        },
        resetFrameDelta: function() {
            var a = k;
            return k = 0, a
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
                (n = !0, z = u(function(e) {
                    A(1);
                    q = !0;
                    f = a = e;
                    d = 0;
                    z = u(b)
                })), this
        },
        stop: function() {
            return q = !1, n = !1, w(z), this
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
    for (var e = THREEx.KeyboardState.ALIAS, k = Object.keys(e), a = b.split("+"), l = 0; l < a.length; l++) {
        var f = a[l],
            d = !1;
        "shift" === f ? d = p.shiftKey ? !0 : !1 : "ctrl" === f ? d = p.ctrlKey ? !0 : !1 : "alt" === f ? d = p.altKey ? !0 : !1 : "meta" === f ? d = p.metaKey ? !0 : !1 : -1 !== k.indexOf(f) ? d = p.keyCode === e[f] ? !0 : !1 : p.keyCode === f.toUpperCase().charCodeAt(0) && (d = !0);
        if (!d) return !1
    }
    return !0
};
(function(p, b) {
    "object" === typeof exports && "object" === typeof module ? module.exports = b() : "function" === typeof define && define.amd ? define([], b) : "object" === typeof exports ? exports.dat = b() : p.dat = b()
})(this, function() {
    return function(p) {
        function b(k) {
            if (e[k]) return e[k].exports;
            var a = e[k] = {
                exports: {},
                id: k,
                loaded: !1
            };
            p[k].call(a.exports, a, a.exports, b);
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
            function k(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            b.__esModule = !0;
            p = e(2);
            p = k(p);
            var a = e(6),
                a = k(a),
                l = e(3),
                l = k(l),
                f = e(7),
                f = k(f),
                d = e(8),
                d = k(d),
                h = e(10),
                h = k(h),
                m = e(11),
                m = k(m),
                q = e(12),
                q = k(q),
                n = e(13),
                n = k(n),
                r = e(14),
                r = k(r),
                t = e(15),
                t = k(t),
                u = e(16),
                u = k(u),
                w = e(9),
                w = k(w);
            e = e(17);
            e = k(e);
            b["default"] = {
                color: {
                    Color: p["default"],
                    math: a["default"],
                    interpret: l["default"]
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
                    ColorController: u["default"]
                },
                dom: {
                    dom: w["default"]
                },
                gui: {
                    GUI: e["default"]
                },
                GUI: e["default"]
            }
        }, function(p, b, e) {
            function k(a) {
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

            function l(a, d) {
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
            var f = k(p);
            p = e(6);
            var d = k(p);
            p = e(4);
            var h = k(p);
            e = e(5);
            var m = k(e),
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
            l(q.prototype, "h");
            l(q.prototype, "s");
            l(q.prototype, "v");
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
            var k = (e = e(5)) && e.__esModule ? e : {
                    "default": e
                },
                a = [{
                    litmus: k["default"].isString,
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
                    litmus: k["default"].isNumber,
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
                    litmus: k["default"].isArray,
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
                    litmus: k["default"].isObject,
                    conversions: {
                        RGBA_OBJ: {
                            read: function(a) {
                                return k["default"].isNumber(a.r) && k["default"].isNumber(a.g) && k["default"].isNumber(a.b) && k["default"].isNumber(a.a) ? {
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
                                return k["default"].isNumber(a.r) &&
                                    k["default"].isNumber(a.g) && k["default"].isNumber(a.b) ? {
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
                                return k["default"].isNumber(a.h) && k["default"].isNumber(a.s) && k["default"].isNumber(a.v) && k["default"].isNumber(a.a) ? {
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
                                return k["default"].isNumber(a.h) && k["default"].isNumber(a.s) && k["default"].isNumber(a.v) ? {
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
                l = void 0,
                f = void 0;
            b["default"] = function() {
                f = !1;
                var d = 1 < arguments.length ? k["default"].toArray(arguments) : arguments[0];
                k["default"].each(a, function(a) {
                    if (a.litmus(d)) return k["default"].each(a.conversions, function(a, b) {
                        l = a.read(d);
                        if (!1 === f && !1 !== l) return f = l, l.conversionName = b, l.conversion = a, k["default"].BREAK
                    }), k["default"].BREAK
                });
                return f
            }
        }, function(p, b, e) {
            b.__esModule = !0;
            b["default"] = function(a) {
                if (1 === a.a || k["default"].isUndefined(a.a)) {
                    for (a =
                        a.hex.toString(16); 6 > a.length;) a = "0" + a;
                    return "#" + a
                }
                return "rgba(" + Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b) + "," + a.a + ")"
            };
            var k = (p = e(5)) && p.__esModule ? p : {
                "default": p
            }
        }, function(p, b) {
            b.__esModule = !0;
            var e = Array.prototype.forEach,
                k = Array.prototype.slice,
                a = {
                    BREAK: {},
                    extend: function(a) {
                        this.each(k.call(arguments, 1), function(b) {
                            (this.isObject(b) ? Object.keys(b) : []).forEach(function(d) {
                                this.isUndefined(b[d]) || (a[d] = b[d])
                            }.bind(this))
                        }, this);
                        return a
                    },
                    defaults: function(a) {
                        this.each(k.call(arguments,
                            1), function(b) {
                            (this.isObject(b) ? Object.keys(b) : []).forEach(function(d) {
                                this.isUndefined(a[d]) && (a[d] = b[d])
                            }.bind(this))
                        }, this);
                        return a
                    },
                    compose: function() {
                        var a = k.call(arguments);
                        return function() {
                            for (var b = k.call(arguments), d = a.length - 1; 0 <= d; d--) b = [a[d].apply(this, b)];
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
                        return a.toArray ? a.toArray() : k.call(a)
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
                hex_with_component: function(b, a, l) {
                    return l << (e = 8 * a) | b & ~(255 <<
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
            function k(a, d) {
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
            var l = (e = e(9)) && e.__esModule ? e : {
                "default": e
            };
            e = function(b) {
                function d(a, e) {
                    if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                    var f = k(this, b.call(this,
                        a, e));
                    f.__prev = f.getValue();
                    f.__checkbox = document.createElement("input");
                    f.__checkbox.setAttribute("type", "checkbox");
                    l["default"].bind(f.__checkbox, "change", function() {
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
            function k(d) {
                if ("0" === d || a["default"].isUndefined(d)) return 0;
                d = d.match(f);
                return a["default"].isNull(d) ? 0 : parseFloat(d[1])
            }
            b.__esModule = !0;
            var a = (p = e(5)) && p.__esModule ? p : {
                    "default": p
                },
                l = {};
            a["default"].each({
                HTMLEvents: ["change"],
                MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                KeyboardEvents: ["keydown"]
            }, function(d, b) {
                a["default"].each(d, function(a) {
                    l[a] = b
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
                        var h = l[b];
                        if (!h) throw Error("Event type " + b + " not supported.");
                        var k = document.createEvent(h);
                        switch (h) {
                            case "MouseEvents":
                                k.initMouseEvent(b, e.bubbles || !1, e.cancelable || !0, window, e.clickCount || 1, 0, 0, e.x || e.clientX || 0, e.y || e.clientY || 0, !1, !1, !1, !1, 0, null);
                                break;
                            case "KeyboardEvents":
                                h = k.initKeyboardEvent || k.initKeyEvent;
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
                                k.initEvent(b, e.bubbles || !1, e.cancelable || !0)
                        }
                        a["default"].defaults(k, f);
                        d.dispatchEvent(k)
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
                        return k(a["border-left-width"]) + k(a["border-right-width"]) + k(a["padding-left"]) + k(a["padding-right"]) + k(a.width)
                    },
                    getHeight: function(a) {
                        a = getComputedStyle(a);
                        return k(a["border-top-width"]) + k(a["border-bottom-width"]) + k(a["padding-top"]) + k(a["padding-bottom"]) + k(a.height)
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
            function k(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function a(a, d) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || "object" !== typeof d && "function" !== typeof d ? a : d
            }

            function l(a, d) {
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
            p = k(p);
            var f = e(9),
                d = k(f);
            e = e(5);
            var h = k(e);
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
                l(e, b);
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
            function k(a, d) {
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
            var l = (e = e(9)) && e.__esModule ? e : {
                "default": e
            };
            e = function(b) {
                function d(a, e) {
                    function f() {
                        m.setValue(m.__input.value)
                    }
                    if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                    var h = k(this, b.call(this, a, e)),
                        m = h;
                    h.__input = document.createElement("input");
                    h.__input.setAttribute("type", "text");
                    l["default"].bind(h.__input, "keyup", f);
                    l["default"].bind(h.__input, "change", f);
                    l["default"].bind(h.__input, "blur",
                        function() {
                            m.__onFinishChange && m.__onFinishChange.call(m, m.getValue())
                        });
                    l["default"].bind(h.__input, "keydown", function(a) {
                        13 === a.keyCode && this.blur()
                    });
                    h.updateDisplay();
                    h.domElement.appendChild(h.__input);
                    return h
                }
                a(d, b);
                d.prototype.updateDisplay = function() {
                    l["default"].isActive(this.__input) || (this.__input.value = this.getValue());
                    return b.prototype.updateDisplay.call(this)
                };
                return d
            }(p["default"]);
            b["default"] = e
        }, function(p, b, e) {
            function k(a, d) {
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
            var l = (e = e(5)) && e.__esModule ? e : {
                "default": e
            };
            e = function(b) {
                function d(e, f, k) {
                    if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                    e = b.call(this, e, f);
                    if (!this) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    e = !e || "object" !== typeof e && "function" !== typeof e ? this : e;
                    k = k || {};
                    e.__min = k.min;
                    e.__max = k.max;
                    e.__step = k.step;
                    l["default"].isUndefined(e.__step) ? e.__impliedStep = 0 === e.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(Math.abs(e.initialValue)) / Math.LN10)) / 10 : e.__impliedStep = e.__step;
                    e.__precision = a(e.__impliedStep);
                    return e
                }
                k(d, b);
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
            function k(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function a(a,
                d) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || "object" !== typeof d && "function" !== typeof d ? a : d
            }

            function l(a, d) {
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
            p = k(p);
            var f =
                e(9),
                d = k(f);
            e = e(5);
            var h = k(e);
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
                l(e, b);
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
            function k(a, b) {
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

            function l(a, b, e, f, k) {
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
                        q.setValue(l(a.clientX, d.left, d.right, q.__min, q.__max));
                        return !1
                    }

                    function n() {
                        f["default"].unbind(window, "mousemove", m);
                        f["default"].unbind(window, "mouseup", n);
                        q.__onFinishChange && q.__onFinishChange.call(q, q.getValue())
                    }
                    if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function");
                    var q = a = k(this, d.call(this, a, e, {
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
            function k(a, d) {
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
            var l = (e = e(9)) && e.__esModule ? e : {
                "default": e
            };
            e = function(b) {
                function d(a, e, f) {
                    if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                    var h = k(this, b.call(this, a, e));
                    h.__button = document.createElement("div");
                    h.__button.innerHTML = void 0 === f ? "Fire" : f;
                    l["default"].bind(h.__button, "click", function(a) {
                        a.preventDefault();
                        h.fire();
                        return !1
                    });
                    l["default"].addClass(h.__button, "button");
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
            function k(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function a(a, d) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || "object" !== typeof d && "function" !== typeof d ? a : d
            }

            function l(a, d) {
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
            p = k(p);
            var h = e(9),
                m = k(h),
                h = e(2),
                q = k(h),
                h = e(3),
                n = k(h);
            e = e(5);
            var r = k(e);
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
                l(e, b);
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
            function k(a) {
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

            function l(a, d) {
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
                    a.getRoot().__preset_select && b.isModified() && l(a.getRoot(), !0);
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
                e instanceof E["default"] ? D["default"].addClass(k, "color") : D["default"].addClass(k, w(e.getValue()));
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

            function u(a) {
                0 !== a.length && C["default"].call(window, function() {
                    u(a)
                });
                J["default"].each(a, function(a) {
                    a.updateDisplay()
                })
            }
            var w = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" === typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
            };
            b = e(18);
            b = k(b);
            var v = e(19),
                y = k(v),
                v = e(20),
                A = k(v),
                v = e(7),
                B = k(v),
                v = e(8),
                z = k(v),
                v = e(15),
                x = k(v),
                v = e(13),
                F = k(v),
                v = e(14),
                G = k(v),
                v = e(16),
                E = k(v),
                v = e(21),
                C = k(v),
                v = e(22),
                H = k(v),
                v = e(9),
                D = k(v),
                v = e(5),
                J = k(v);
            e = e(23);
            e = k(e);
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
                    l(this, !1);
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
                    a || l(this.getRoot(), !1)
                },
                listen: function(a) {
                    var d = 0 === this.__listening.length;
                    this.__listening.push(a);
                    d && u(this.__listening)
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
                load: function(b, k) {
                    var a = k || document,
                        e = a.createElement("link");
                    e.type = "text/css";
                    e.rel = "stylesheet";
                    e.href = b;
                    a.getElementsByTagName("head")[0].appendChild(e)
                },
                inject: function(b, k) {
                    var a = k || document,
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
            function k(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            b.__esModule = !0;
            p = e(10);
            var a = k(p);
            p = e(13);
            var l = k(p);
            p = e(14);
            var f = k(p);
            p = e(11);
            var d = k(p);
            p = e(15);
            var h = k(p);
            p = e(8);
            var m = k(p);
            e = e(5);
            var q = k(e);
            b["default"] = function(b, e, k, p, w) {
                var n = b[e];
                return q["default"].isArray(k) || q["default"].isObject(k) ? new a["default"](b, e, k) : q["default"].isNumber(n) ? q["default"].isNumber(k) && q["default"].isNumber(p) ? q["default"].isNumber(w) ? new f["default"](b, e, k, p, w) : new f["default"](b, e, k, p) : q["default"].isNumber(w) ?
                    new l["default"](b, e, {
                        min: k,
                        max: p,
                        step: w
                    }) : new l["default"](b, e, {
                        min: k,
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
            var k = (p = e(9)) && p.__esModule ? p : {
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
                    k["default"].makeFullscreen(this.backgroundElement);
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
                    k["default"].bind(this.backgroundElement, "click", function() {
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
                            k["default"].unbind(a.domElement,
                                "webkitTransitionEnd", m);
                            k["default"].unbind(a.domElement, "transitionend", m);
                            k["default"].unbind(a.domElement, "oTransitionEnd", m)
                        };
                    k["default"].bind(this.domElement, "webkitTransitionEnd", d);
                    k["default"].bind(this.domElement, "transitionend", d);
                    k["default"].bind(this.domElement, "oTransitionEnd", d);
                    this.backgroundElement.style.opacity = 0;
                    this.domElement.style.opacity = 0;
                    this.domElement.style.webkitTransform = "scale(1.1)"
                };
                b.prototype.layout = function() {
                    this.domElement.style.left = window.innerWidth / 2 - k["default"].getWidth(this.domElement) /
                        2 + "px";
                    this.domElement.style.top = window.innerHeight / 2 - k["default"].getHeight(this.domElement) / 2 + "px"
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

            function k(a, d) {
                for (var b in a) Object.hasOwnProperty.call(a, b) && d(b)
            }

            function a(a, d) {
                return k(d, function(b) {
                    a[b] = d[b]
                }), a
            }

            function l(a, d) {
                k(d, function(b) {
                    "undefined" == typeof a[b] && (a[b] = d[b])
                })
            }

            function f(a, b, e, f, h, k, l) {
                var m, n, p;
                a = k > a ? 0 : (a - k) / h;
                for (m in b) b.hasOwnProperty(m) && (n = l[m], p = "function" == typeof n ? n : r[n], b[m] = d(e[m], f[m], p, a));
                return b
            }

            function d(a, b, d, e) {
                return a + (b - a) * d(e)
            }

            function h(a, b) {
                var d = n.prototype.filter,
                    e = a._filterArgs;
                k(d, function(f) {
                    "undefined" != typeof d[f][b] && d[f][b].apply(a, e)
                })
            }

            function m(a, b, d, e, k, l, m, n, p, q, r) {
                A = b + d + e;
                B = Math.min(r || y(), A);
                z = B >= A;
                x = e - (A - B);
                a.isPlaying() && (z ? (p(m, a._attachment, x), a.stop(!0)) : (a._scheduleId = q(a._timeoutHandler, w), h(a, "beforeTween"), b + d > B ? f(1, k, l, m, 1, 1, n) : f(B, k, l, m, e, b + d, n), h(a, "afterTween"), p(k, a._attachment, x)))
            }

            function q(a, b) {
                var d = {},
                    e = typeof b;
                return "string" === e || "function" === e ? k(a, function(a) {
                    d[a] = b
                }) : k(a, function(a) {
                    d[a] || (d[a] = b[a] || u)
                }), d
            }

            function n(a,
                b) {
                this._currentState = a || {};
                this._configured = !1;
                this._scheduleFunction = t;
                "undefined" != typeof b && this.setConfig(b)
            }
            var r, t, u = "linear",
                w = 1E3 / 60,
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
                        k = this._targetState;
                    return l(k, f), this._easing = q(f, d.easing || u), this._filterArgs = [f, this._originalState, k, this._easing], h(this, "tweenCreated"), this
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
                    each: k,
                    tweenProps: f,
                    tweenProp: d,
                    applyFilter: h,
                    shallowCopy: a,
                    defaults: l,
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
        function e(a, b, e, d, h, k) {
            function f(a, b) {
                var d, e, f, h, k;
                f = a;
                for (k = 0; 8 > k; k++) {
                    if (h = ((l * f + m) * f + p) * f - a, (0 <= h ? h : 0 - h) < b) return f;
                    if (e = (3 * l * f + 2 * m) * f + p, 1E-6 > (0 <= e ? e : 0 - e)) break;
                    f -= h / e
                }
                if (d = 0, e = 1, f = a, d > f) return d;
                if (f > e) return e;
                for (; e > d;) {
                    h = ((l * f + m) * f + p) * f;
                    k = h - a;
                    if ((0 <= k ? k : 0 - k) < b) break;
                    a > h ? d = f : e = f;
                    f = .5 * (e - d) + d
                }
                return f
            }
            var l = 0,
                m = 0,
                p = 0,
                u = 0,
                w = 0,
                v = 0;
            return p = 3 * b, m = 3 * (d - b) - p, l = 1 - p - m, v = 3 * e, w = 3 * (h - e) - v, u = 1 - v - w,
                function(a, b) {
                    var d = f(a, b);
                    return ((u * d + w) * d + v) * d
                }(a, 1 / (200 * k))
        }

        function k(a, b, f, d) {
            return function(h) {
                return e(h, a, b, f, d, 1)
            }
        }
        b.setBezierFunction = function(a, e, f, d, h) {
            var l = k(e, f, d, h);
            return l.displayName = a, l.x1 = e, l.y1 = f, l.x2 = d, l.y2 = h, b.prototype.formula[a] = l
        };
        b.unsetBezierFunction = function(a) {
            delete b.prototype.formula[a]
        }
    })();
    (function() {
        var e = new b;
        e._filterArgs = [];
        b.interpolate = function(k, a, l, f, d) {
            var h = b.shallowCopy({}, k);
            d = d || 0;
            f = b.composeEasingObject(k, f || "linear");
            e.set({});
            var m = e._filterArgs;
            m.length = 0;
            m[0] = h;
            m[1] = k;
            m[2] = a;
            m[3] = f;
            b.applyFilter(e, "tweenCreated");
            b.applyFilter(e, "beforeTween");
            k = b.tweenProps(l, h, k, a, 1, d, f);
            return b.applyFilter(e, "afterTween"), k
        }
    })();
    (function(b) {
        function e(d) {
            b.each(d, function(b) {
                var e = d[b];
                "string" == typeof e && e.match(y) && (d[b] = l(y, e, a))
            })
        }

        function a(a) {
            var b = a;
            a = (b = b.replace(/#/,
                ""), 3 === b.length && (b = b.split(""), b = b[0] + b[0] + b[1] + b[1] + b[2] + b[2]), B[0] = parseInt(b.substr(0, 2), 16), B[1] = parseInt(b.substr(2, 2), 16), B[2] = parseInt(b.substr(4, 2), 16), B);
            return "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")"
        }

        function l(a, b, d) {
            var e = b.match(a);
            a = b.replace(a, A);
            if (e)
                for (var f = e.length, h = 0; f > h; h++) b = e.shift(), a = a.replace(A, d(b));
            return a
        }

        function f(a) {
            var b = a.match(u),
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
                        for (var f = e.match(u), h = e.match(t), e = (h ? (1 === h.length || e[0].match(r)) && h.unshift("") : h = ["", ""], h.join(A)), h = [], k = f.length, f = 0; k > f; f++) h.push("_" + b + "_" + f);
                        d[b] = {
                            formatString: e,
                            chunkNames: h
                        }
                    }
                }), d
        }

        function h(a, d) {
            b.each(d, function(b) {
                for (var e = a[b].match(u), f = e.length, h = 0; f > h; h++) a[d[b].chunkNames[h]] = +e[h];
                delete a[b]
            })
        }

        function m(a, d) {
            b.each(d, function(b) {
                for (var e = d[b].chunkNames, h, k = {}, m = e.length, n = 0; m > n; n++) h = e[n], k[h] = a[h], delete a[h];
                e = d[b].chunkNames;
                z.length = 0;
                h = e.length;
                for (m = 0; h > m; m++) z.push(k[e[m]]);
                k = z;
                e = d[b].formatString;
                h = k.length;
                for (m = 0; h > m; m++) e = e.replace(A, +k[m].toFixed(4));
                a[b] = l(w, e, f)
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
            u = /[0-9.\-]+/g,
            w = new RegExp("rgb\\(" + u.source + /,\s*/.source + u.source + /,\s*/.source + u.source + "\\)", "g"),
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
    p.on("ch", this.antiC);
    p.on("disconnect", function() { console.log("Something tried to disconnect you"); });
    p.on("connect_error", function() {})
};
network.antiC = function(p) {
    //g.isDefined(plyer) && (plyer.position[0] = p[0], plyer.position[1] = p[1])
};
network.disconnect = function() {
};
network.onExtraTabOpened = function() {
};
network.onLockCheckPoint = function(p) {
    p = p.split(",");
    var b = parseInt(p[0]),
        e = parseInt(p[1]);
    plyer.position = [b, e];
    plyer.gravityScale = 1;
    plyer.velocity[0] = 0;
    plyer.velocity[1] = 0
};
network.kick = function(p) {
    console.log("'" + p + "' has been targetted.");
    attachName = p;
    attachIndex = null;
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
function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}
network.onPlayersData = function(p) {
    p = p.substr(0, p.length - 1);
    p = p.split(",");
    indexOfLivePlayers = [];
    for (var b = 0; b < p.length && "" != p[0]; b += 6) {
        var e = parseInt(p[b]),
            k = physics.xAxis(parseFloat(p[b + 1]), 1),
            a = physics.yAxis(parseFloat(p[b + 2]), 1),
            l = p[b + 3],
            f = p[b + 4],
            d = p[b + 5],
            h;
        if (!isInt(f))  f = "0";
        newPlayersIndex[newPlayersIndex.length] = e;
        indexOfLivePlayers[newPlayersIndex.length] = e;
        if ("undefined" == typeof livePlayers[e] || null == livePlayers[e]) {
            h = {};
            h.last2Packets = [{
                x: k,
                y: a
            }, {
                x: k,
                y: a
            }];
            var m = {
                x: k,
                y: a,
                width: 30,
                height: 100,
                dynamic: !0,
                plzReturn: !0
            };
            "" == f && (f = 0);
            "" == d && (d = "white");
            h.gPlayer = graphics.createPlayerSpawn(graphicsWorld, {
                playerSpawn: JSON.stringify(m)
            }, "skins/" + f + ".png");
            h.gPlayer.nameText.style.fill = d;
            h.gPlayer.nameText.text = l;
            h.position = [k, a];
            h.gPlayer.index = e;
            livePlayers[e] = h;
            network.requestForBio(e)
        }
        h = livePlayers[e];
        h.last2Packets[0] = h.last2Packets[1];
        h.last2Packets[1] = {
            x: k,
            y: a
        };
        h.startX = h.last2Packets[0].x;
        h.startY = h.last2Packets[0].y;
        "" != f && graphics.loadTextureFromUrl("skins/" + f + ".png", "skins/0.png", h.gPlayer);
        "" != d && (h.gPlayer.nameText.style.fill =
            d);
        "" != l && (h.gPlayer.nameText.text = l)
    }
    for (b = 0; b < oldPlayersIndex.length; b++) "number" == typeof oldPlayersIndex[b] && -1 == newPlayersIndex.indexOf(oldPlayersIndex[b]) && (p = livePlayers[oldPlayersIndex[b]], null != p && (graphics.removeFromLayer(p.gPlayer), graphics.removeFromLayer(p.gPlayer.chatText), graphics.removeFromLayer(p.gPlayer.nameText)), livePlayers[oldPlayersIndex[b]] = null);
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
        for (var b = p.length, e, k; 0 !== b;) k = Math.floor(Math.random() * b), --b, e = p[b], p[b] = p[k], p[k] = e;
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
    getPoint: function(p, b, e, k, a) {
        g.distanceBetweenPoints(p, b, e, k);
        k = g.getSlopeGivenTwoPoints(p, b, e, k);
        var l = p + a / Math.sqrt(1 + Math.pow(k, 2)),
            f = p - a / Math.sqrt(1 + Math.pow(k, 2));
        return 0 == p && 0 == e ? [0, b + a] : l >= p && l <= e ? [l, k * (l - p) + b] : [f, k * (f - p) + b]
    },
    distanceBetweenPoints: function(p, b, e, k) {
        return Math.sqrt(Math.pow(p - e, 2) +
            Math.pow(b - k, 2))
    },
    getSlopeGivenTwoPoints: function(p, b, e, k) {
        return (b - k) / (p - e)
    },
    pointBetweenTwoPointsGivenXorYvalue: function(p, b, e, k, a, l) {
        null == a && null != l ? a = (l - b) / ((k - b) / (e - p)) + p : null == l && null != a ? l = (k - b) / (e - p) * (a - p) + b : c("both can't be null");
        return [a, l]
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
            var k = {
                focus: "visible",
                focusin: "visible",
                pageshow: "visible",
                blur: "hidden",
                focusout: "hidden",
                pagehide: "hidden"
            };
            e = e || window.event;
            e = e.type in k ? k[e.type] : this[b] ? "hidden" : "visible";
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
g.isServer() || (bCounter = 0);
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
physics.createRectangle = function(p, b, e, k, a, l, f) {
    e = e || 100;
    k = k || 100;
    a = a || 0;
    l = l || 0;
    fixedRotation = g.isDefined(f) ? !1 : !0;
    f = new p2.Box({
        width: physics.length(e, 0),
        height: physics.length(k, 0)
    });
    p = new p2.Body({
        mass: a,
        position: [physics.xAxis(p, 0), physics.yAxis(b, 0)],
        fixedRotation: fixedRotation
    });
    p.angle = -l;
    p.addShape(f);
    return p
};
physics.createCircle = function(p, b) {
    var e = new p2.Circle({
            radius: physics.length(50, 0)
        }),
        k = new p2.Body({
            mass: 1,
            position: [physics.xAxis(p, 0), physics.yAxis(b, 0)],
            fixedRotation: !0
        });
    k.addShape(e);
    return k
};
physics.createPlane = function(p, b) {
    var e = new p2.Plane,
        k = new p2.Body({
            position: [physics.xAxis(p, 0), physics.yAxis(b, 0)]
        });
    k.addShape(e);
    return k
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
    var k = new p2.RaycastResult;
    return {
        ray: e,
        result: k
    }
};
physics.drawRaysFromBelowPlayer = function(p, b) {
    var e = [b.position[0] + b.shapes[0].width / 2, b.position[1]],
        k = [b.position[0] - b.shapes[0].width / 2, b.position[1]],
        a = [b.position[0], b.position[1]],
        l = [k[0], k[1] - 10],
        f = [a[0], a[1] - 10];
    physics.setRayPosition(b.rayObjectS.ray, e, [e[0], e[1] - 10]);
    var d = physics.drawRayInWorld(p, b.rayObjectS.ray, b.rayObjectS.result),
        e = g.roundUpto(d[0]);
    physics.setRayPosition(b.rayObjectS.ray, k, l);
    d = physics.drawRayInWorld(p, b.rayObjectS.ray, b.rayObjectS.result);
    k = g.roundUpto(d[0]);
    physics.setRayPosition(b.rayObjectS.ray,
        a, f);
    d = physics.drawRayInWorld(p, b.rayObjectS.ray, b.rayObjectS.result);
    a = g.roundUpto(d[0]);
    k = g.abs(k - b.shapes[0].height / 2);
    a = g.abs(a - b.shapes[0].height / 2);
    e = g.abs(e - b.shapes[0].height / 2);
    return [k, a, e]
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
        }, e = "gravityScale collisionResponse velocityValue jumpValue mass invMass".split(" "), k = 0; k < e.length; k++) Object.defineProperty(p, e[k], new b)
};
physics.unPatch = function(p) {
    for (var b = function() {
            this.writable = this.enumerable = !0
        }, e = "gravityScale collisionResponse velocityValue jumpValue mass invMass".split(" "), k = 0; k < e.length; k++) Object.defineProperty(p, e[k], new b)
};
physics.velocity = function(p, b, e, k) {
    null != e && "undefined" != typeof e && (b.velocity[0] = physics.xAxis(e, 0));
    null != k && "undefined" != typeof k && (b.velocity[1] = physics.yAxis(k, 0))
};
physics.updateManualDynamicObjects = function(p) {
    for (var b = 0; b < p.allManualDynamicPhysicsObjects.length; b++) p.allManualDynamicPhysicsObjects[b].manualUpdate()
};
physics.lockTwoBodies = function(p, b, e, k) {
    k = k || [0, 0];
    b = new p2.LockConstraint(b, e);
    b.localOffsetB = k;
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
    var k = p / 100,
        a = p / 100;
    p = [b.position[0] + k, b.position[1] + a];
    b = [b.position[0] - k, b.position[1] - a];
    k = new p2.AABB;
    k.upperBound = p;
    k.lowerBound = b;
    return k.overlaps(e.aabb)
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
    if ("undefined" != typeof b.shapes) var k = b.shapes[0];
    "button" == e ? (k.collisionGroup = p.collisionGroup.ground, k.collisionMask = p.collisionGroup.player) : "block" == e ? (k.material = p.material.ground, k.collisionGroup = p.collisionGroup.ground, k.collisionMask = p.collisionGroup.player | p.collisionGroup.zombie | p.collisionGroup.ray | p.collisionGroup.ball) : "ball" == e ? (k.collisionGroup = p.collisionGroup.ball, k.collisionMask = p.collisionGroup.player | p.collisionGroup.ground | p.collisionGroup.ray) :
        "checkPoint" == e ? (k.collisionGroup = p.collisionGroup.ground, k.collisionMask = p.collisionGroup.player) : "player" == e ? (k.material = p.material.player, k.collisionGroup = p.collisionGroup.player, k.collisionMask = p.collisionGroup.ground | p.collisionGroup.ball | p.collisionGroup.poison | p.collisionGroup.player) : "rotatingPlatform" == e ? (k.material = p.material.ground, k.collisionGroup = p.collisionGroup.ground, k.collisionMask = p.collisionGroup.player | p.collisionGroup.zombie | p.collisionGroup.ray) : "gate" == e ? (k.material = p.material.ground,
            k.collisionGroup = p.collisionGroup.ground, k.collisionMask = p.collisionGroup.player | p.collisionGroup.zombie) : "leaver" == e ? (k.collisionGroup = p.collisionGroup.ground, k.collisionMask = p.collisionGroup.player) : "bridge" == e ? (k.material = p.material.ground, k.collisionGroup = p.collisionGroup.ground, k.collisionMask = p.collisionGroup.player | p.collisionGroup.zombie | p.collisionGroup.ray) : "zombie" == e ? (k.material = p.material.zombie, k.collisionGroup = p.collisionGroup.zombie, k.collisionMask = p.collisionGroup.ground) : "redZone" ==
        e ? (k.collisionGroup = p.collisionGroup.ground, k.collisionMask = p.collisionGroup.player) : "zombieSoul" == e ? (k.collisionGroup = p.collisionGroup.ground, k.collisionMask = p.collisionGroup.player) : "poison" == e ? (k.collisionGroup = p.collisionGroup.poison, k.collisionMask = p.collisionGroup.player | p.collisionGroup.zombie) : "ray" == e && (b.collisionGroup = p.collisionGroup.ray, b.collisionMask = p.collisionGroup.ground | p.collisionGroup.ball)
};
physics.spriteCounter = 0;
physics.createBlock = function(p, b) {
    var e = JSON.parse(b.block),
        k = physics.createRectangle(e.x, e.y, e.width, e.height, 0, e.rotation);
    k.dynamic = e.dynamic;
    physics.addWhomToCollide(p, k, "block");
    physics.addBodyToWorld(p, k);
    physics.addS(k);
    physics.addIfDynamic(k);
    k.shapes[0].sensor = e.sensor || !1;
    e.sensor && (k.onTouchEvent = function(a, b) {
        g.isServer() || (this.sprite.alpha = 0 == b ? this.sprite.alphaSensor : 1)
    })
};
physics.createBall = function(p, b) {
    var e = JSON.parse(b.block),
        e = physics.createCircle(e.x, e.y);
    e.dynamic = !0;
    physics.addWhomToCollide(p, e, "ball");
    physics.addBodyToWorld(p, e);
    physics.addS(e);
    physics.addIfDynamic(e);
    physics.addForNetwork(p, e);
    g.isServer() || (window.ballz = e);
    e.onTouchEvent = function(b, a) {};
    e.syncData = function() {
        return this.velocity[0] + "," + this.velocity[1] + "," + this.position[0] + "," + this.position[1]
    };
    e.applyData = function(b) {
        b = b.split(",");
        this.velocity = [parseFloat(b[0]), parseFloat(b[1])];
        10 ==
            bCounter && (this.position = [parseFloat(b[2]), parseFloat(b[3])], bCounter = 0);
        bCounter++
    }
};
physics.createPoison = function(p, b) {
    var e = JSON.parse(b.poison),
        k = physics.createRectangle(e.x, e.y, e.width, e.height, 0, e.rotation);
    physics.addBodyToWorld(p, k);
    k.dynamic = e.dynamic;
    physics.addWhomToCollide(p, k, "poison");
    physics.addS(k);
    physics.addIfDynamic(k);
    k.onTouchEvent = function(a, b) {
        0 == b && a.shapes[0].collisionGroup == this.world.collisionGroup.player && (a.position = [a.lastCheckPoint[0], a.lastCheckPoint[1]], a.validPosition = [a.lastCheckPoint[0], a.lastCheckPoint[1]])
    };
    k.syncData = function() {};
    k.applyData =
        function() {}
};
physics.createCheckPoint = function(p, b) {
    var e = JSON.parse(b.checkPoint),
        k = physics.createRectangle(e.x, e.y, e.width, e.height);
    k.shapes[0].sensor = !0;
    k.dynamic = e.dynamic;
    physics.addWhomToCollide(p, k, "checkPoint");
    physics.addBodyToWorld(p, k);
    physics.addS(k);
    physics.addIfDynamic(k);
    this.checkPointBodyRef = k;
    k.onTouchEvent = function(a, b) {
        0 == b && (a.lastCheckPoint = [this.position[0], this.position[1]])
    }
};
physics.createPlayerSpawn = function(p, b) {
    var e = {};
    g.isDefined(b) ? e = JSON.parse(b.playerSpawn) : (e.x = 0, e.y = 0, e.width = 100, e.height = 100, e.mass = 1, e.dynamic = !0);
    e.mass = 1;
    var k = physics.createRectangle(e.x, e.y, e.width, e.height, e.mass);
    k.rayObject = physics.createRay(p, "closest");
    k.rayObjectS = physics.createRay(p, "closest");
    k.damping = .9;
    k.dynamic = e.dynamic;
    k.lastCheckPoint = [k.position[0], k.position[1]];
    k.keys = [0, 0, 0];
    physics.addWhomToCollide(p, k, "player");
    physics.addS(k, e.plzReturn);
    physics.addIfDynamic(k, e.plzReturn);
    physics.addBodyToWorld(p, k);
    k.velocityValue = 300;
    k.jumpValue = 800;
    this.velocityValues = 900;
    this.jumpValues = 1000;
    g.isServer() && (k.gravityScale = 0);
    physics.patch(k);
    k.jump = function() {
        var margin = (plyer.shapes[0].width/100)*10;
        var fromRight = [plyer.position[0]+(plyer.shapes[0].width/2)-margin, plyer.position[1]];
        var fromLeft = [plyer.position[0]-(plyer.shapes[0].width/2)+margin, plyer.position[1]];
        var toRight = [fromRight[0], fromRight[1]-12];
        var toLeft = [fromLeft[0], fromLeft[1]-12];
        var fromC = plyer.position;
        var toC = [fromLeft[0], fromLeft[1]-12];
        physics.setRayPosition(plyer.rayObject.ray, fromRight, toRight);
        var disRight = physics.drawRayInWorld(physicsWorld, plyer.rayObject.ray, plyer.rayObject.result);
        physics.setRayPosition(plyer.rayObject.ray, fromLeft, toLeft);
        var disLeft = physics.drawRayInWorld(physicsWorld, plyer.rayObject.ray, plyer.rayObject.result);
        physics.setRayPosition(plyer.rayObject.ray, fromC, toC);
        var disC = physics.drawRayInWorld(physicsWorld, plyer.rayObject.ray, plyer.rayObject.result);
        disLeft = Math.round(disLeft*100);
        disC = Math.round(disC*100);
        disRight = Math.round(disRight*100);
        var neg  = Math.round((plyer.shapes[0].height/2)*100);
        disLeft = Math.abs(disLeft-neg);
        disC = Math.abs(disC-neg);
        disRight = Math.abs(disRight-neg);
        physics.velocity(physicsWorld, this, null, -this.jumpValues);
    };
    k.left = function() {
        physics.velocity(p, this, -this.velocityValues, null)
    };
    k.right = function() {
        physics.velocity(p, this, this.velocityValues, null)
    };
    k.doNohting = function() {
        physics.velocity(p, this, 0, null)
    };
    k.syncData = function() {
        return g.roundUpto(this.position[0]) + "," + g.roundUpto(this.position[1])
    };
    k.applyData = function(a) {
        a = a.split(",");
        var b = parseInt(a[0]);
        a = parseInt(a[1]);
        var e = physics.xAxis(b, 0),
            d = physics.yAxis(a, 0);
        this.position = [e, d];
        return [b, a]
    };
    k.onTouchEvent = function(a, b) {};
    g.isDefined(e.plzReturn) && (k.onTouchEvent = function() {});
    g.isServer() || g.isDefined(plyer) ||
        (window.plyer = k);
    g.isDefined(e.plzReturn) || g.isServer();
    return k
};
physics.createZombie = function(p, b) {
    var e = JSON.parse(b.zombie),
        k = physics.createRectangle(e.x, e.y, e.width, e.height, 1);
    k.damping = 0;
    k.dynamic = !0;
    k.yes = !0;
    k.zombieSpeed = e.zombieSpeed;
    k.isMoving = !1;
    physics.addS(k);
    physics.addIfDynamic(k);
    physics.addWhomToCollide(p, k, "zombie");
    physics.addForNetwork(p, k);
    physics.addBodyToWorld(p, k);
    e = physics.createRectangle(e.x, e.y, e.width, e.height, 1);
    e.shapes[0].sensor = !0;
    e.damping = 0;
    physics.addWhomToCollide(p, e, "zombieSoul");
    physics.addBodyToWorld(p, e);
    physics.lockTwoBodies(p,
        k, e);
    e.onTouchEvent = function(a, b) {
        a.shapes[0].collisionGroup == p.collisionGroup.player && 0 == b && (a.position = [a.lastCheckPoint[0], a.lastCheckPoint[1]])
    };
    k.syncData = function() {
        var a = Math.round(physics.xAxis(this.position[0], 1)),
            b = Math.round(physics.yAxis(this.position[1], 1));
        return a + "," + b + "," + this.direction
    };
    k.applyData = function(a) {};
    e = JSON.parse(b.redZone);
    e = physics.createRectangle(e.x, e.y, e.width, e.height, 1);
    e.shapes[0].sensor = !0;
    e.dynamic = !0;
    e.damping = 0;
    e.zombieBodyRef = k;
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
        k, e)
};
physics.createLeaverAndBridge = function(p, b) {
    var e = JSON.parse(b.leaver),
        k = JSON.parse("[" + b.linkedObjects + "]"),
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
    var l = function() {
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
    for (var m = 0; m < k.length; m++) {
        var q = k[m],
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
        n.setBridgeMotion = l;
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
    for (m = 0; m < a.length; m++) k = a[m], k = physics.createRectangle(k.x, k.y, k.width, k.height), k.shapes[0].sensor = !0, k.leaverBodyRef = e, k.imCpy = !0, k.leaverInteractionValue = "l", physics.addWhomToCollide(p, k, "leaver"), physics.addForNetwork(p, k), physics.addBodyToWorld(p, k), physics.addS(k), e.leaverCopyList[e.leaverCopyList.length] =
        k, k.onTouchEvent = f, k.syncData = d, k.applyData = h
};
physics.createButtonAndGate = function(p, b) {
    var e = JSON.parse(b.button),
        k = JSON.parse("[" + b.linkedObjects + "]"),
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
    var l = function(a, b) {
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
    e.onTouchEvent = l;
    e.syncData = f;
    e.applyData = d;
    for (var h = 0; h < k.length; h++) {
        var m = k[h],
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
    for (h = 0; h < a.length; h++) k = a[h], k = physics.createRectangle(k.x, k.y, k.width, k.height), k.shapes[0].sensor = !0, k.buttonBodyRef = e, k.gatesList = e.gatesList, k.buttonInteractionValue = 1, physics.addBodyToWorld(p, k), physics.addWhomToCollide(p, k, "button"), physics.addS(k), physics.addForNetwork(p, k), e.buttonCopyList[e.buttonCopyList.length] = k, k.onTouchEvent = l, k.syncData = f, k.applyData = d
};
physics.createRotatingPlatform = function(p, b) {
    var e = JSON.parse(b.platform),
        k = physics.createRectangle(e.x, e.y, e.width, e.height, 0, e.rotation, !1);
    physics.addWhomToCollide(p, k, "rotatingPlatform");
    k.angularVelocity = e.clockwise ? -e.rotatingSpeed : e.rotatingSpeed;
    k.dynamic = e.dynamic;
    physics.addBodyToWorld(p, k);
    physics.addS(k);
    physics.addIfDynamic(k);
    physics.addForNetwork(p, k);
    k.syncData = function() {
        return this.angle.toFixed(2)
    };
    k.applyData = function(a) {
        this.angle = parseFloat(a)
    };
    g.isServer() || (window.rpb = k)
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
        var k = b[e];
        "buttonAndGate" == k.type ? physics.createButtonAndGate(p, k) : "block" == k.type ? physics.createBlock(p, k) : "rotatingPlatform" == k.type ? physics.createRotatingPlatform(p, k) : "playerSpawn" == k.type ? (physics.playerSpawnObj = k, g.isServer() || null != plyer || (window.plyer = physics.createPlayerSpawn(p, k))) : "leaverAndBridge" == k.type ? physics.createLeaverAndBridge(p, k) : "poison" == k.type ? physics.createPoison(p, k) : "zombie" == k.type ? physics.createZombie(p, k) : "checkPoint" ==
            k.type ? physics.createCheckPoint(p, k) : "ball" == k.type && physics.createBall(p, k)
    }
};
var graphics = {};
window.zoomLevel = 1;
window.xInc = 0;
window.yInc = 0;
graphics.as = !1;
graphics.textList = [];
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
    if ("undefined" == typeof editorActive) {
        graphicsWorld.scale.x = zoomLevel;
        graphicsWorld.scale.y = zoomLevel;
        for (var p = 0; p < graphics.textList.length; p++) g.isDefined(graphics.textList[p].dynamic)
    }
};
graphics.createWorld = function() {
    var p = graphics.createContainer(),
        b = graphics.createContainer(),
        e = graphics.createContainer(),
        k = graphics.createContainer();
    k.addChild(p);
    k.addChild(b);
    k.addChild(e);
    k.down = p;
    k.mid = b;
    k.up = e;
    return k
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
graphics.createRectangle = function(p, b, e, k, a, l, f) {
    a = a || "0x000000";
    e = e || 100;
    k = k || 100;
    l = l || 0;
    f = f || 1;
    var d = new PIXI.Graphics;
    d.beginFill(a);
    d.drawRect(0, 0, e, k);
    d.rotation = l;
    d.x = p;
    d.y = b;
    d.alpha = f;
    d.pivot.x = e / 2;
    d.pivot.y = k / 2;
    return d
};
graphics.createTriangle = function(p, b, e, k, a, l, f) {
    a = a || "0x000000";
    e = e || 100;
    k = k || 100;
    l = l || 0;
    f = new PIXI.Graphics;
    f.beginFill(a);
    f.moveTo(0, 0);
    f.lineTo(-e / 2, k);
    f.lineTo(e / 2, k);
    f.endFill();
    f.pivot.x = -e / 2;
    a = graphics.createContainer();
    a.addChild(f);
    a.x = p;
    a.y = b;
    a.pivot.x = a.width / 2;
    a.pivot.y = a.height / 2;
    a.rotation = l;
    return a
};
graphics.createTextObject = function(p) {
    p = new PIXI.Text(p);
    p.anchor.set(.5, .5);
    return graphics.textList[graphics.textList.length] = p
};
graphics.getTextCords = function(p, b) {
    return {
        x: p * b.x,
        y: p * b.y
    }
};
graphics.createCircle = function(p, b, e, k) {
    k = k || "0x131cb9";
    e = e || 50;
    var a = new PIXI.Graphics;
    a.beginFill(k);
    a.drawCircle(0, 0, e);
    a.x = p;
    a.y = b;
    return a
};
graphics.createCheckPointSprite = function(p, b) {
    var e = graphics.createTriangle(15, 15, 30, 30, "0xde000d", 1.57),
        k = graphics.createLine([0, 0], [0, 60], "0x000000", 5);
    e.alpha = .7;
    var a = graphics.createContainer();
    a.addChild(e);
    a.addChild(k);
    a.x = p;
    a.y = b;
    a.pivot.x = a.width / 2;
    a.pivot.y = a.height / 2;
    return window.flag = a
};
graphics.createPlayer = function(p, b, e, k, a) {
    a = a || "0x000000";
    e = e || 30;
    var l = k || 100;
    k = graphics.createContainer();
    k.width = e;
    k.height = l;
    var f = graphics.createCircle(e / 2, e / 2, e / 2, a);
    k.addChild(f);
    a = graphics.createRectangle(0, e + 5, e, l - e - 5, a);
    a.pivot.x = a.pivot.y = 0;
    k.addChild(a);
    k.pivot.x = k.width / 2;
    k.pivot.y = k.height / 2;
    k.x = p;
    k.y = b;
    return k
};
graphics.cc = function(p, b) {};
graphics.createPlate = function(p, b, e, k, a, l, f) {
    var d = graphics.createContainer(),
        h = graphics.createRectangle(e / 100 * 10, 0, e / 100 * 80, k / 100 * 40, "0xcf2929", 1, 0, "plate", !1, null, !0);
    h.pivot.x = h.pivot.y = 0;
    e = graphics.createRectangle(0, h.height, e, k / 100 * 20, "0x666666", 1, 0, "plate", !1, null, !0);
    e.pivot.x = e.pivot.y = 0;
    d.addChild(h);
    d.addChild(e);
    d.pivot.x = d.width / 2;
    d.pivot.y = d.height / 2;
    d.x = p;
    d.y = b;
    d.interactive = a;
    d.on("click", l);
    d.dynamic = f;
    d.itemType = "plate";
    return d
};
graphics.createButton = function(p, b) {
    var e = graphics.createContainer(),
        k = graphics.createRectangle(3, 0, 24, 12, "0xcf2929"),
        a = graphics.createRectangle(0, k.height, 30, 6, "0x666666");
    k.pivot.x = k.pivot.y = a.pivot.x = a.pivot.y = 0;
    e.addChild(k);
    e.addChild(a);
    e.pivot.x = e.width / 2;
    e.pivot.y = e.height / 2;
    e.x = p;
    e.y = b;
    return e
};
graphics.createLeaver = function(p, b) {
    var e = graphics.createContainer(),
        k = graphics.createContainer(),
        a = graphics.createContainer(),
        l = graphics.createRectangle(0, 40, 40, 12, "0x666666");
    l.pivot.x = l.pivot.y = 0;
    var f = graphics.createCircle(8.8, 8.8, 8.8, "0xcf2929"),
        d = graphics.createLine([l.x + l.width / 2, l.y + l.height / 2], [f.x, f.y], "0x000000", 4);
    a.addChild(d);
    a.addChild(f);
    a.addChild(l);
    e.addChild(a);
    l = graphics.createRectangle(0, 40, 40, 12, "0x666666");
    l.pivot.x = l.pivot.y = 0;
    f = graphics.createCircle(a.width - 8.8, f.y, 8.8, "0xcf2929");
    d = graphics.createLine([l.x + l.width / 2, l.y + l.height / 2], [f.x, f.y], "0x000000", 4);
    k.addChild(d);
    k.addChild(f);
    k.addChild(l);
    k.alpha = 0;
    e.addChild(k);
    e.pivot.x = e.width / 2;
    e.pivot.y = e.height / 2;
    e.x = p;
    e.y = b;
    e.left = a;
    e.right = k;
    return e
};
graphics.createLine = function(p, b, e, k) {
    var a = new PIXI.Graphics;
    a.lineStyle(k, e, 1);
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
            k = window.renderer.view.height / 2,
            e = e / zoomLevel,
            k = k / zoomLevel;
        p.x = (e - b.x) * window.zoomLevel;
        p.y = (k - b.y) * window.zoomLevel
    }
};
graphics.addToGraphicsLayer = function(p, b) {
    graphics.addToLayer(p, b)
};
graphics.addToTextLayer = function(p, b) {
    graphics.addToLayer(p, b)
};
graphics.addToLayer = function(p, b) {
    "down" == b.layer ? p.down.addChild(b) : "mid" == b.layer ? p.mid.addChild(b) : "up" == b.layer ? p.up.addChild(b) : p.down.addChild(b)
};
graphics.removeFromLayer = function(p) {
    "down" == p.layer ? graphicsWorld.down.removeChild(p) : "mid" == p.layer ? graphicsWorld.mid.removeChild(p) : "up" == p.layer ? graphicsWorld.up.removeChild(p) : graphicsWorld.down.removeChild(p)
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
        k = JSON.parse("[" + b.linkedObjects + "]"),
        a = JSON.parse("[" + b.linkedLeaverObjects + "]"),
        e = graphics.createLeaver(e.x, e.y);
    e.bridgeList = [];
    e.leaverCopyList = [];
    e.pBodyMsg = function(a) {
        "l" == a ? (this.left.alpha = 1, this.right.alpha = 0) : (this.left.alpha = 0, this.right.alpha = 1)
    };
    graphics.addP(e);
    graphics.addToGraphicsLayer(p, e);
    for (var l = 0; l < k.length; l++) {
        var f = k[l],
            f = graphics.createRectangle(f.x, f.y, f.width, f.height);
        e.bridgeList[e.bridgeList.length] =
            f;
        graphics.addP(f);
        f.dynamic = !0;
        graphics.addIfDynamic(f);
        graphics.addToGraphicsLayer(p, f)
    }
    for (l = 0; l < a.length; l++) f = a[l], f = graphics.createLeaver(f.x, f.y), f.bridgeList = e.bridgeList, e.leaverCopyList[e.leaverCopyList.length] = f, graphics.addP(f), graphics.addToGraphicsLayer(p, f), f.pBodyMsg = function(a) {
        "l" == a ? (this.left.alpha = 1, this.right.alpha = 0) : (this.left.alpha = 0, this.right.alpha = 1)
    }
};
graphics.createButtonAndGate = function(p, b) {
    var e = JSON.parse(b.button),
        k = JSON.parse("[" + b.linkedObjects + "]"),
        a = JSON.parse("[" + b.linkedButtonObjects + "]"),
        e = graphics.createButton(e.x, e.y);
    e.gatesList = [];
    e.buttonCopyList = [];
    var l = function(a, b) {
        var d;
        d = "0" == b ? 0 : 1;
        "button" == a ? this.children[0].alpha = d : this.alpha = d
    };
    e.pBodyMsg = l;
    graphics.addP(e);
    graphics.addToGraphicsLayer(p, e);
    for (var f = 0; f < k.length; f++) {
        var d = k[f],
            h = graphics.createRectangle(d.x, d.y, d.width, d.height, d.fillColor, d.rotation);
        e.gatesList[e.gatesList.length] =
            h;
        graphics.addP(h);
        h.alpha = 0;
        graphics.addToGraphicsLayer(p, h);
        h.pBodyMsg = l;
        h.alpha = d.onButtonPressVisible ? 0 : 1;
        window.gs = h
    }
    for (f = 0; f < a.length; f++) k = a[f], k = graphics.createButton(k.x, k.y), k.gatesList = e.gatesList, e.buttonCopyList[e.buttonCopyList.length] = k, graphics.addP(k), graphics.addToGraphicsLayer(p, k), k.pBodyMsg = l
};
graphics.createText = function(p, b) {
    var e = JSON.parse(b.text),
        k = graphics.createTextObject(e.text);
    k.x = e.x;
    k.y = e.y;
    k.style.fontSize = e.fontSize;
    k.style.fill = e.fill;
    k.originalPosition = {
        x: k.x,
        y: k.y
    };
    k.originalFontSize = k.style.fontSize;
    graphics.textList[graphics.textList.length];
    graphics.addToTextLayer(p, k)
};
graphics.createBlock = function(p, b) {
    var e = JSON.parse(b.block),
        k = graphics.createRectangle(e.x, e.y, e.width, e.height, e.color, e.rotation, e.alpha);
    k.layer = e.layer;
    k.dynamic = e.dynamic;
    k.alphaSensor = e.alphaSensor;
    graphics.addP(k);
    graphics.addIfDynamic(k);
    graphics.addToGraphicsLayer(p, k)
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
        k = graphics.createRectangle(e.x, e.y, e.width, e.height, e.color, e.rotation);
    k.dynamic = e.dynamic;
    graphics.addP(k);
    graphics.addIfDynamic(k);
    graphics.addToGraphicsLayer(p, k)
};
graphics.createPlayerSpawn = function(p, b, e) {
    b = JSON.parse(b.playerSpawn);
    var k = new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture));
    graphics.loadTextureFromUrl(e, "skins/0.png", k);
    k.x = b.x;
    k.y = b.y;
    k.width = b.width;
    k.height = b.height;
    k.anchor.x = .5;
    k.anchor.y = .5;
    k.chatText = graphics.createTextObject("Type to chat..");
    k.chatText.originalFontSize = 17;
    k.chatText.dynamic = !0;
    k.chatText.style.fill = "black";
    k.chatText.style.stroke = "white";
    k.chatText.style.strokeThickness = 4;
    k.nameText = graphics.createTextObject("");
    k.nameText.originalFontSize = 17;
    k.nameText.dynamic = !0;
    k.nameText.style.fill = "white";
    k.nameText.style.stroke = "black";
    k.nameText.style.strokeThickness = 4;
    k.interactive = !0;
    k.buttonMode = !0;
    k.on("click", function() {
        window.cloneI = this.index;
        document.getElementsByClassName("kickContainer")[0].children[0].innerHTML = "TRACK this mofo: " + this.nameText.text;
        document.getElementsByClassName("kickContainer")[0].children[0].setAttribute("id", this.nameText.text);
        document.getElementsByClassName("kickContainer")[0].style.display ="inherit"
    });
    k.dynamic = b.dynamic;
    graphics.addP(k, b.plzReturn);
    graphics.addIfDynamic(k, b.plzReturn);
    k.layer = k.chatText.layer = k.nameText.layer = "mid";
    graphics.addToLayer(p, k);
    graphics.addToLayer(p, k.chatText);
    graphics.addToLayer(p, k.nameText);
    null == gPlayer ? window.gPlayer = k : k.chatText.text = "";
    return k
};
graphics.createPoison = function(p, b) {
    var e = JSON.parse(b.poison),
        k = graphics.createRectangle(e.x, e.y, e.width, e.height, "0x0eac3c", e.rotation);
    k.dynamic = e.dynamic;
    graphics.addP(k);
    graphics.addIfDynamic(k);
    graphics.addToGraphicsLayer(p, k)
};
graphics.createZombie = function(p, b) {
    var e = JSON.parse(b.zombie),
        k = graphics.createPlayer(e.x, e.y, e.width, e.height, "0x086902");
    k.dynamic = e.dynamic;
    graphics.addP(k);
    graphics.addIfDynamic(k);
    graphics.addToGraphicsLayer(p, k);
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
        var k = b[e];
        "buttonAndGate" == k.type ? graphics.createButtonAndGate(p, k) : "block" == k.type ? graphics.createBlock(p, k) : "rotatingPlatform" == k.type ? graphics.createRotatingPlatform(p, k) : "playerSpawn" == k.type ? graphics.createPlayerSpawn(p, k, "skins/0.png") : "leaverAndBridge" == k.type ? graphics.createLeaverAndBridge(p, k) : "poison" == k.type ? graphics.createPoison(p, k) : "zombie" == k.type ? graphics.createZombie(p, k) : "text" == k.type ? graphics.createText(p, k) : "checkPoint" ==
            k.type ? graphics.createCheckPoint(p, k) : "ball" == k.type && graphics.createBall(p, k)
    }
};
var gpConnector = {
    x: function(p, b) {
        "undefined" != typeof p && "undefined" != typeof b && (p.x = physics.xAxis(b.position[0], 1))
    },
    y: function(p, b) {
        "undefined" != typeof p && "undefined" != typeof b && (p.y = window.physics.yAxis(b.position[1], 1))
    },
    angle: function(p, b) {
        "undefined" != typeof p && "undefined" != typeof b && (p.rotation = -b.angle)
    },
    trackChat: function(p) {
        if ("undefined" != typeof p && "undefined" != typeof p.chatText)
            for (p.chatText.x = p.x, p.chatText.y = p.y - (p.height / 2 + p.chatText.height / 2 + 10), p.chatText.style.fontSize = Math.round(p.chatText.originalFontSize *
                    zoomLevel), p.chatText.style.strokeThickness = 2, p.nameText.x = p.x, p.nameText.y = p.y + (p.height / 2 + p.nameText.height / 2 + 10), p.nameText.style.fontSize = Math.round(p.nameText.originalFontSize * zoomLevel), p.nameText.style.strokeThickness = 2, p = 0; p < livePlayers.length; p++)
                if ("undefined" != typeof livePlayers[p] && null != livePlayers[p]) {
                    var b = livePlayers[p].gPlayer,
                        e = livePlayers[p].gPlayer.chatText,
                        k = livePlayers[p].gPlayer.nameText;
                    e.x = b.x;
                    e.y = b.y - (b.height / 2 + e.height / 2 + 10);
                    e.style.fontSize = Math.round(e.originalFontSize *
                        zoomLevel);
                    k.x = b.x;
                    k.y = b.y + (b.height / 2 + k.height / 2 + 10);
                    k.style.fontSize = Math.round(k.originalFontSize * zoomLevel)
                }
    },
    syncGPWorld: function(p, b) {
        for (var e = 0; e < p.length; e++) {
            var k = p[e],
                a = b[e];
            gpConnector.x(k, a);
            gpConnector.y(k, a);
            gpConnector.angle(k, a);
            gpConnector.trackChat(k)
        }
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
var foreverSpam = false;
var spamDelay = 0;
var spamWords = []
var spamIndex = 0;
var intervalJob = null;
var broadcastJob = null;

var attachName = null;
var attachIndex = null;
var attachIsFound = false;
var attachShouldGotoCheckpoint = false;
var attachJob = null;

var seekJob = null;
var seekIndex = null;  // index WITHIN `seekPlayersList` (not the index of the actual live players)
var seekPlayersList = null;  // will carry a snapshot of indexOfLivePlayers

/*
   if foreverSpam is active, will loop through spamWords
   otherwise will just output from the players current text
 */
function sendFullMessage() {
    if (foreverSpam) {
        gPlayer.chatText.text = spamWords[spamIndex];
        spamIndex = (++spamIndex) % spamWords.length;
    }
    network.sendMsg(13);  // line feed
    // now we can output
    for (var i = 0, len = gPlayer.chatText.text.length; i < len; i++)
        network.sendMsg(gPlayer.chatText.text[i]);
}

/* returns an array of lines at most 49 chars long */
function getLinesFromText(text) {
    var M = 49;
    var r = [];
    for (var i = 0; (i * M) <= text.length; i++) {
        // split the input by the size of M max chars per message
        r.push(text.slice(i * M, i * M + M));
    }
    return r;
}

function tokenizeAndAddToSpamWords(text) {
    var MAXLENGTH = 49;  // each line can have at most 49 characters
    var current = 0;    // length of string in spamWords[wordIndex] so far
    var wordIndex = spamWords.length - 1;   // index in `spamWords`

    var newlineSplit = text.split("\n");
    for (var j = 0; j < newlineSplit.length; j++) {
        if (newlineSplit[j].trim() === "")  continue;
        current = MAXLENGTH + 1;  // prepare new line (it'll be done below)
        var spaceSplit = newlineSplit[j].split(" ");
        for (var k = 0; k < spaceSplit.length; k++) {
            var word = spaceSplit[k].trim();
            if (word === "") {
                continue;
            } else if (word.length > MAXLENGTH) {
                // if over length, then just have this word appear in a full new line
                spamWords = spamWords.concat(getLinesFromText(word));
                wordIndex = spamWords.length - 1;
                current = spamWords[wordIndex].length;
            } else if (word.length + current + 1 > MAXLENGTH) {
                // if overflow, then start a new line
                spamWords.push(word);
                current = word.length;
                wordIndex++;
            } else {
                // if the word fits, then append to the current line (don't forget the space)
                spamWords[wordIndex] += " " + word;
                current = spamWords[wordIndex].length;
            }
        }
    }
}

/*
    Contains 2 states:
    - unattached, in which case it'll keep scanning until attached
    - attached, in which case it'll just stalk the other player

    **Note that it requires the stalker to have the window open
    (or at least disable the MainLoop.stop() call when the window is iconified)
 */
function attachToPlayer() {
    // scan and set attachIndex if found
    if (attachIndex === null) {
        var players = indexOfLivePlayers.slice();  // copy array just in case
        for (var i = 0; i < players.length; i++) {
            if (livePlayers[players[i]].gPlayer.nameText._text.toLowerCase() === attachName.toLowerCase()) {
                attachIndex = players[i];
                console.log("Found '" + attachName + "'!");
                break;
            }
        }
    }
    // attach if just found
    if (attachIndex !== null) {
        // if could not find player
        if (livePlayers[attachIndex] === null) {
            // and if we previously found them, do a one-time action (otherwise will just idle)
            if (attachIsFound) {
                attachIsFound = false;
                console.log("Lost sight of '" + attachName + "'!");
                plyer.damping = 0.9;
                plyer.massMultiplier = [0,2];
                // if it's a regular person, the only way they could've escaped is by returning to the last checkpoint
                if (attachShouldGotoCheckpoint)  plyer.position = plyer.lastCheckPoint.slice();
            }
        } else {
            // if we re-found them
            if (!attachIsFound) {
                attachIsFound = true;
                plyer.damping = 1;  // after travelling, completely stop (without 100% damping it'll "slide")
                plyer.massMultiplier=[0,0];
            }
            // otherwise if we already found them, just follow
            gotoPlayer(attachIndex);
        }
    }
}

// goes to a player
function gotoPlayer(index) {
    var p = livePlayers[index].position;
    if (p[0] != null && p[1] != null) {
        plyer.position = [p[0] / 100, p[1] / -100];
    }
}

// goes through `seekPlayersList`, then cancels the `seekJob` afterwards
function seekAllPlayers() {
    var p = livePlayers[seekPlayersList[seekIndex]];
    if (p !== null) {
        console.log("Seeking '" + p.gPlayer.nameText._text + "'...");
        gotoPlayer(seekPlayersList[seekIndex]);
    }
    seekIndex++;
    // clear job when the array has been processed
    if (seekIndex == seekPlayersList.length) {
        clearInterval(seekJob);
        seekJob = null;
    }
}

function handleInput() {
    keyboard.pressed("left") && (plyer.left(), left = 1, onceNullForce = !0);
    keyboard.pressed("left") || null == plyer || (left = 0);
    keyboard.pressed("right") && (plyer.right(), right = 1, onceNullForce = !0);
    keyboard.pressed("ctrl") && (plyer.position = [plyer.lastCheckPoint[0], plyer.lastCheckPoint[1]]);
    keyboard.pressed("right") || null == plyer || (right = 0);
    keyboard.pressed("up") && plyer.jump();
    keyboard.pressed("up");
    0 == right && 0 == left && null != plyer && 1 == onceNullForce && (plyer.doNohting(), onceNullForce = !1);
    var foreverDelay = 3250;
    var broadcastDelay = 4500;
    for (var p =0; p < keyboard.characterStack.length && null != gPlayer; p++) {
        var b = keyboard.characterStack[p];
        if (b === 8) {
            gPlayer.chatText.text = gPlayer.chatText.text.substr(0, gPlayer.chatText.text.length - 1), network.sendMsg(b);
        } else if (b === 13) {
            var t = gPlayer.chatText.text.trim();
            var split = t.split(" ", 3);  // split into an array
            while (split.length < 3)  split.push("");
            // clear text initially so less people see (since that's what b === 13 means anyways)
            gPlayer.chatText.text = "";
            network.sendMsg(b);
            // cancel broadcast only
            if (broadcastJob !== null)  clearInterval(broadcastJob);

            if (split[0] === "s") {  // speed
                plyer.velocityValues = parseInt(split[1]);
            } else if (split[0] === "j") {  // jump
                plyer.jumpValues = parseInt(split[1]);
            } else if (split[0] === "c") {  // checkpoint {number from 0 to ??}
                var n = parseInt(split[1]);
                if (!isNaN(n)) {
                    if (n === -1) { plyer.massMultiplier=[0,0];plyer.position=[-100.705, -3.708]; }
                    else {
                        plyer.massMultiplier=[0,2];
                        switch(n) {
                            case 0: plyer.lastCheckPoint=[1173, -83]; break;
                            case 1: plyer.lastCheckPoint=[-84.57, 0.97];break;
                            case 2: plyer.lastCheckPoint=[-29.05, -2.54];break;
                            case 3: plyer.lastCheckPoint=[11.91, -2.55];break;
                            case 4: plyer.lastCheckPoint=[44.1, -2.53];break;
                            case 5: plyer.lastCheckPoint=[96.77, 4.77];break;
                            case 6: plyer.lastCheckPoint=[114.61, -3.11];break;
                            case 7: plyer.lastCheckPoint=[168.64, -11.19];break;
                            case 8: plyer.lastCheckPoint=[242.19, -9.82];break;
                            case 9: plyer.lastCheckPoint=[285.41, -4.82];break;
                            case 10: plyer.lastCheckPoint=[259.48, -35.3];break;
                            case 11: plyer.lastCheckPoint=[297.64, -15.99];break;
                            case 12: plyer.lastCheckPoint=[412, -6.49];break;
                            case 13: plyer.lastCheckPoint=[631.11, -62.49];break;
                            case 14: plyer.lastCheckPoint=[639.77, -162.68];break;
                            case 15: plyer.lastCheckPoint=[586.82, -155.07];break;
                            case 16: plyer.lastCheckPoint=[579.63, -132.83];break;
                            case 17: plyer.lastCheckPoint=[513.43, -132.84];break;
                            case 18: plyer.lastCheckPoint=[505.96, -179.59];break;
                            case 19: plyer.lastCheckPoint=[459.4, -163.11];break;
                            case 20: plyer.lastCheckPoint=[420.61, -164.98];break;
                            case 21: plyer.lastCheckPoint=[387.96, -163.81];break;
                            case 22: plyer.lastCheckPoint=[380.04, -186.85];break;
                            case 23: plyer.lastCheckPoint=[437.7, -196.49];break;
                            case 24: plyer.lastCheckPoint=[482.89, -196.52];break;
                            case 25: plyer.lastCheckPoint=[520.55, -178.37];break;
                            case 26: plyer.lastCheckPoint=[568.33, -186.58];break;
                            case 27: plyer.lastCheckPoint=[679.46, -153.83];break;
                            case 28: plyer.lastCheckPoint=[713.39, -151.6];break;
                            case 29: plyer.lastCheckPoint=[754.35, -151.6];break;
                            case 30: plyer.lastCheckPoint=[819.65, -151.6];break;
                            case 31: plyer.lastCheckPoint=[891.12, -137.73];break;
                            case 32: plyer.lastCheckPoint=[1010.52, -83.8];break;
                            case 33: plyer.lastCheckPoint=[1031.05, -83.8];break;
                        }
                    }
                }
            } else if (split[0] === "l" && !foreverSpam) {  // lenny: ["l", {id}, {delay in ms}]
                var z = "";
                var n = parseInt(split[1]);

                if (!isNaN(n)) {
                    switch(n) {
                        case 1: z="( ͡° ͜ʖ ͡°)";break;
                        case 2: z="/╲\/\\╭( ͡° ͡° ͜ʖ ͡° ͡°)╮/\\╱\\";break;
                        case 3: z="ᕦ( ͡° ͜ʖ ͡°)ᕤ";break;
                        case 4: z="(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ,";break;
                        case 5: z="( ° ͜ʖ͡°)╭∩╮";break;
                        case 6: z="╭∩╮( ͡° ͜ʖ ͡°)╭∩╮";break;
                        case 7: z="ᕕ༼ ͠ຈ Ĺ̯ ͠ຈ ༽┌∩┐";break;
                        case 8: z="ᕦ( ͡°╭͜ʖ╮͡° )ᕤ";break;
                        case 9: z="[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]";break;
                        case 10: z="༼ つ Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗_Ỏ͖͈̞̩͎̻̫̫̜͉̠͕̭̭̫̫̹̗̰ ༽つ";break;
                        case 11: z="┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴";break;
                        case 12: z="(╯ ͡° ͜ʖ ͡°）╯︵ ┻━┻";break;
                        case 13: z="(╭ರ_•́)";break;
                        case 14: z="( ͡° ͜ʖ ͡°)8======ლ=D(˘ε˘ღ)";break;
                        case 15: z="(っ͡° ͜ʖ ͡°)っ";break;
                        case 16: z="( ͡° ͜ʖ ͡°)/ ( ͡° ͜ʖ ͡°)/ ( ͡° ͜ʖ ͡°)/ 卐卐卐";break;
                        case 17: z="̿̿ ̿̿ ̿̿ ̿'̿'̵͇̿̿з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿";break;
                        case 18: z="(͡ ͡° ͜ つ ͡͡°)";break;
                        case 19: z="( ಠ ͜ʖರೃ)";break;
                        case 20: z="ᕦ⁞ ✿ ᵒ̌ ᴥ ᵒ̌ ✿ ⁞ᕤ";break;
                    }
                    spamDelay = split[2] === "" ? broadcastDelay : parseInt(split[2]);
                    gPlayer.chatText.text = z;
                    sendFullMessage();
                    broadcastJob = setInterval(sendFullMessage, spamDelay);
                }
            } else if (split[0] === "spam" && !foreverSpam) {  // ["spam", {delay in ms}]
                foreverSpam = true;
                spamDelay = isNaN(parseInt(split[1])) ? foreverDelay : parseInt(split[1]);
                var inp = "", c = 1;
                while ((inp = window.prompt("Enter text #" + (c++) + " to spam forever")) !== "")
                    spamWords = spamWords.concat(getLinesFromText(inp));
                intervalJob = setInterval(sendFullMessage, spamDelay);
            } else if (split[0] === "fmt" && !foreverSpam) {  //  ["fmt", (delay)]
                // will try to fit only whole words in each set of 50 chars
                // rules: split by newlines. in each newline, will split by space only.
                // "whole" words are the strings in the split array
                gPlayer.chatText.text = "";
                network.sendMsg(b);
                foreverSpam = true;
                spamDelay = isNaN(parseInt(split[1])) ? foreverDelay : parseInt(split[1]);
                var inp = "", c = 1;
                while ((inp = window.prompt("Enter text #" + (c++) + " to formatted spam forever")) !== "")
                    tokenizeAndAddToSpamWords(inp.trim());
                intervalJob = setInterval(sendFullMessage, spamDelay);
            } else if (split[0] === "b" && !foreverSpam) {  // broadcast one line until ENTER is pressed
                gPlayer.chatText.text = "";
                network.sendMsg(b);
                spamDelay = isNaN(parseInt(split[1])) ? broadcastDelay : parseInt(split[1]);
                gPlayer.chatText.text = window.prompt("Enter text to continously broadcast until you press ENTER");
                sendFullMessage();
                broadcastJob = setInterval(sendFullMessage, spamDelay);
            } else if (t === "r" && foreverSpam) {  // restart the foreverSpam index
                spamIndex = 0;
            } else if (t === "q") {  // quit spam (must type in between intervals)
                clearInterval(intervalJob);
                foreverSpam = false;
                spamWords.length = 0;  // clear array
                spamIndex = 0;
            } else if (t === "a" && seekJob === null) {  // attach to player
                clearInterval(attachJob);
                attachIndex = null;
                attachIsFound = false;
                var t = window.prompt("Enter the name of the player you want to attach to (must be on-screen)");
                if (t !== "") {
                    attachName = t;
                }
                var d = window.prompt("Enter the delay in ms (otherwise will cancel)");
                attachShouldGotoCheckpoint = window.confirm("Should you go to the last checkpoint if you lose them?")
                if (!isNaN(parseInt(d))) {
                    attachToPlayer();
                    attachJob = setInterval(attachToPlayer, d);
                } else {
                    console.log("Set a correct delay. Attach cancelled.");
                    plyer.damping = 0.9;
                    plyer.massMultiplier = [0, 2];
                }
            } else if (t === "seek" && seekJob === null) {  // ["seek", {delay in ms}], will teleport to all current players
                clearInterval(attachJob);
                clearInterval(seekJob);
                var delay = 0.25;
                if (split.length === 2) {  // optional delay in milliseconds
                    delay = parseInt(split[1]) / 1000;
                }
                seekPlayersList = indexOfLivePlayers.slice();
                seekIndex = 0;
                seekJob = setInterval(seekAllPlayers, delay);
            }
            break;
        } else if (gPlayer.chatText.text.length < 50) {
            if ("undefined" == typeof removeDefaultTxt) {
                removeDefaultTxt = !0;
                gPlayer.chatText.text = "";
            }
            gPlayer.chatText.text += b;
            network.sendMsg(b);
        }
    }
    keyboard.characterStack = []
}

function checkMsgFrom() {
    for (var p = 0; p < network.msgFrom.length; p++)
        for (var b = network.msgFrom[p][0], e = network.msgFrom[p][1], b = null != livePlayers[b] && "undefined" != typeof livePlayers[b] ? livePlayers[b].gPlayer : null, l = 0; l < e.length; l++) {
            var a = e[l];
            8 === a && null != b ? b.chatText.text = b.chatText.text.substr(0, b.chatText.text.length - 1) :
            13 === a && null != b ? b.chatText.text = "" : null != b ?
            50 > b.chatText.text.length && (b.chatText.text += a) : null != b && (b.chatText.text = "", b.chatText.text = a)
        }
    network.msgFrom = []
}

function updateEnvironmentBasedOnNetwork() {
    for (var p = 0; p < network.environmentDataArray.length; p++)
        for (var b = network.environmentDataArray[p], b = b.substr(0, b.length - 1), b = b.split("|"), e = 0; e < b.length; e += 2) {
            var k = parseInt(b[e]);
            "undefined" != typeof physicsWorld.networkedPhysicsObjects[k] && physicsWorld.networkedPhysicsObjects[k].applyData(b[e + 1])
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
    updatePlayersBasedOnNetwork(p);
    handleInput();
    checkMsgFrom();
    updateEnvironmentBasedOnNetwork();
    physics.updateManualDynamicObjects(physicsWorld);
    gpConnector.syncGPWorld(allDynamicGraphicalObjects, allDynamicPhysicsObjects);
    graphics.camera(graphicsWorld, gPlayer);
    150 <= deltaTime && queueClientStat();
    physicsWorld.step(p / 1E3)
}

function start() {};