!
function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        "undefined" != typeof window ? b = window: "undefined" != typeof global ? b = global: "undefined" != typeof self && (b = self),
        b.JSZip = a()
    }
} (function() {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    throw new Error("Cannot find module '" + g + "'")
                }
                var j = c[g] = {
                    exports: {}
                };
                b[g][0].call(j.exports,
                function(a) {
                    var c = b[g][1][a];
                    return e(c ? c: a)
                },
                j, j.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require,
        g = 0; g < d.length; g++) e(d[g]);
        return e
    } ({
        1 : [function(a, b, c) {
            "use strict";
            var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            c.encode = function(a) {
                for (var b, c, e, f, g, h, i, j = "",
                k = 0; k < a.length;) b = a.charCodeAt(k++),
                c = a.charCodeAt(k++),
                e = a.charCodeAt(k++),
                f = b >> 2,
                g = (3 & b) << 4 | c >> 4,
                h = (15 & c) << 2 | e >> 6,
                i = 63 & e,
                isNaN(c) ? h = i = 64 : isNaN(e) && (i = 64),
                j = j + d.charAt(f) + d.charAt(g) + d.charAt(h) + d.charAt(i);
                return j
            },
            c.decode = function(a) {
                var b, c, e, f, g, h, i, j = "",
                k = 0;
                for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length;) f = d.indexOf(a.charAt(k++)),
                g = d.indexOf(a.charAt(k++)),
                h = d.indexOf(a.charAt(k++)),
                i = d.indexOf(a.charAt(k++)),
                b = f << 2 | g >> 4,
                c = (15 & g) << 4 | h >> 2,
                e = (3 & h) << 6 | i,
                j += String.fromCharCode(b),
                64 != h && (j += String.fromCharCode(c)),
                64 != i && (j += String.fromCharCode(e));
                return j
            }
        },
        {}],
        2 : [function(a, b) {
            "use strict";
            function c() {
                this.compressedSize = 0,
                this.uncompressedSize = 0,
                this.crc32 = 0,
                this.compressionMethod = null,
                this.compressedContent = null
            }
            c.prototype = {
                getContent: function() {
                    return null
                },
                getCompressedContent: function() {
                    return null
                }
            },
            b.exports = c
        },
        {}],
        3 : [function(a, b, c) {
            "use strict";
            c.STORE = {
                magic: "\x00\x00",
                compress: function(a) {
                    return a
                },
                uncompress: function(a) {
                    return a
                },
                compressInputType: null,
                uncompressInputType: null
            },
            c.DEFLATE = a("./flate")
        },
        {
            "./flate": 8
        }],
        4 : [function(a, b) {
            "use strict";
            var c = a("./utils"),
            d = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
            b.exports = function(a, b) {
                if ("undefined" == typeof a || !a.length) return 0;
                var e = "string" !== c.getTypeOf(a);
                "undefined" == typeof b && (b = 0);
                var f = 0,
                g = 0,
                h = 0;
                b = -1 ^ b;
                for (var i = 0,
                j = a.length; j > i; i++) h = e ? a[i] : a.charCodeAt(i),
                g = 255 & (b ^ h),
                f = d[g],
                b = b >>> 8 ^ f;
                return - 1 ^ b
            }
        },
        {
            "./utils": 21
        }],
        5 : [function(a, b) {
            "use strict";
            function c() {
                this.data = null,
                this.length = 0,
                this.index = 0
            }
            var d = a("./utils");
            c.prototype = {
                checkOffset: function(a) {
                    this.checkIndex(this.index + a)
                },
                checkIndex: function(a) {
                    if (this.length < a || 0 > a) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + a + "). Corrupted zip ?")
                },
                setIndex: function(a) {
                    this.checkIndex(a),
                    this.index = a
                },
                skip: function(a) {
                    this.setIndex(this.index + a)
                },
                byteAt: function() {},
                readInt: function(a) {
                    var b, c = 0;
                    for (this.checkOffset(a), b = this.index + a - 1; b >= this.index; b--) c = (c << 8) + this.byteAt(b);
                    return this.index += a,
                    c
                },
                readString: function(a) {
                    return d.transformTo("string", this.readData(a))
                },
                readData: function() {},
                lastIndexOfSignature: function() {},
                readDate: function() {
                    var a = this.readInt(4);
                    return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (31 & a) << 1)
                }
            },
            b.exports = c
        },
        {
            "./utils": 21
        }],
        6 : [function(a, b, c) {
            "use strict";
            c.base64 = !1,
            c.binary = !1,
            c.dir = !1,
            c.createFolders = !1,
            c.date = null,
            c.compression = null,
            c.compressionOptions = null,
            c.comment = null,
            c.unixPermissions = null,
            c.dosPermissions = null
        },
        {}],
        7 : [function(a, b, c) {
            "use strict";
            var d = a("./utils");
            c.string2binary = function(a) {
                return d.string2binary(a)
            },
            c.string2Uint8Array = function(a) {
                return d.transformTo("uint8array", a)
            },
            c.uint8Array2String = function(a) {
                return d.transformTo("string", a)
            },
            c.string2Blob = function(a) {
                var b = d.transformTo("arraybuffer", a);
                return d.arrayBuffer2Blob(b)
            },
            c.arrayBuffer2Blob = function(a) {
                return d.arrayBuffer2Blob(a)
            },
            c.transformTo = function(a, b) {
                return d.transformTo(a, b)
            },
            c.getTypeOf = function(a) {
                return d.getTypeOf(a)
            },
            c.checkSupport = function(a) {
                return d.checkSupport(a)
            },
            c.MAX_VALUE_16BITS = d.MAX_VALUE_16BITS,
            c.MAX_VALUE_32BITS = d.MAX_VALUE_32BITS,
            c.pretty = function(a) {
                return d.pretty(a)
            },
            c.findCompression = function(a) {
                return d.findCompression(a)
            },
            c.isRegExp = function(a) {
                return d.isRegExp(a)
            }
        },
        {
            "./utils": 21
        }],
        8 : [function(a, b, c) {
            "use strict";
            var d = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
            e = a("pako");
            c.uncompressInputType = d ? "uint8array": "array",
            c.compressInputType = d ? "uint8array": "array",
            c.magic = "\b\x00",
            c.compress = function(a, b) {
                return e.deflateRaw(a, {
                    level: b.level || -1
                })
            },
            c.uncompress = function(a) {
                return e.inflateRaw(a)
            }
        },
        {
            pako: 24
        }],
        9 : [function(a, b) {
            "use strict";
            function c(a, b) {
                return this instanceof c ? (this.files = {},
                this.comment = null, this.root = "", a && this.load(a, b), void(this.clone = function() {
                    var a = new c;
                    for (var b in this)"function" != typeof this[b] && (a[b] = this[b]);
                    return a
                })) : new c(a, b)
            }
            var d = a("./base64");
            c.prototype = a("./object"),
            c.prototype.load = a("./load"),
            c.support = a("./support"),
            c.defaults = a("./defaults"),
            c.utils = a("./deprecatedPublicUtils"),
            c.base64 = {
                encode: function(a) {
                    return d.encode(a)
                },
                decode: function(a) {
                    return d.decode(a)
                }
            },
            c.compressions = a("./compressions"),
            b.exports = c
        },
        {
            "./base64": 1,
            "./compressions": 3,
            "./defaults": 6,
            "./deprecatedPublicUtils": 7,
            "./load": 10,
            "./object": 13,
            "./support": 17
        }],
        10 : [function(a, b) {
            "use strict";
            var c = a("./base64"),
            d = a("./zipEntries");
            b.exports = function(a, b) {
                var e, f, g, h;
                for (b = b || {},
                b.base64 && (a = c.decode(a)), f = new d(a, b), e = f.files, g = 0; g < e.length; g++) h = e[g],
                this.file(h.fileName, h.decompressed, {
                    binary: !0,
                    optimizedBinaryString: !0,
                    date: h.date,
                    dir: h.dir,
                    comment: h.fileComment.length ? h.fileComment: null,
                    unixPermissions: h.unixPermissions,
                    dosPermissions: h.dosPermissions,
                    createFolders: b.createFolders
                });
                return f.zipComment.length && (this.comment = f.zipComment),
                this
            }
        },
        {
            "./base64": 1,
            "./zipEntries": 22
        }],
        11 : [function(a, b) { (function(a) {
                "use strict";
                b.exports = function(b, c) {
                    return new a(b, c)
                },
                b.exports.test = function(b) {
                    return a.isBuffer(b)
                }
            }).call(this, "undefined" != typeof Buffer ? Buffer: void 0)
        },
        {}],
        12 : [function(a, b) {
            "use strict";
            function c(a) {
                this.data = a,
                this.length = this.data.length,
                this.index = 0
            }
            var d = a("./uint8ArrayReader");
            c.prototype = new d,
            c.prototype.readData = function(a) {
                this.checkOffset(a);
                var b = this.data.slice(this.index, this.index + a);
                return this.index += a,
                b
            },
            b.exports = c
        },
        {
            "./uint8ArrayReader": 18
        }],
        13 : [function(a, b) {
            "use strict";
            var c = a("./support"),
            d = a("./utils"),
            e = a("./crc32"),
            f = a("./signature"),
            g = a("./defaults"),
            h = a("./base64"),
            i = a("./compressions"),
            j = a("./compressedObject"),
            k = a("./nodeBuffer"),
            l = a("./utf8"),
            m = a("./stringWriter"),
            n = a("./uint8ArrayWriter"),
            o = function(a) {
                if (a._data instanceof j && (a._data = a._data.getContent(), a.options.binary = !0, a.options.base64 = !1, "uint8array" === d.getTypeOf(a._data))) {
                    var b = a._data;
                    a._data = new Uint8Array(b.length),
                    0 !== b.length && a._data.set(b, 0)
                }
                return a._data
            },
            p = function(a) {
                var b = o(a),
                e = d.getTypeOf(b);
                return "string" === e ? !a.options.binary && c.nodebuffer ? k(b, "utf-8") : a.asBinary() : b
            },
            q = function(a) {
                var b = o(this);
                return null === b || "undefined" == typeof b ? "": (this.options.base64 && (b = h.decode(b)), b = a && this.options.binary ? D.utf8decode(b) : d.transformTo("string", b), a || this.options.binary || (b = d.transformTo("string", D.utf8encode(b))), b)
            },
            r = function(a, b, c) {
                this.name = a,
                this.dir = c.dir,
                this.date = c.date,
                this.comment = c.comment,
                this.unixPermissions = c.unixPermissions,
                this.dosPermissions = c.dosPermissions,
                this._data = b,
                this.options = c,
                this._initialMetadata = {
                    dir: c.dir,
                    date: c.date
                }
            };
            r.prototype = {
                asText: function() {
                    return q.call(this, !0)
                },
                asBinary: function() {
                    return q.call(this, !1)
                },
                asNodeBuffer: function() {
                    var a = p(this);
                    return d.transformTo("nodebuffer", a)
                },
                asUint8Array: function() {
                    var a = p(this);
                    return d.transformTo("uint8array", a)
                },
                asArrayBuffer: function() {
                    return this.asUint8Array().buffer
                }
            };
            var s = function(a, b) {
                var c, d = "";
                for (c = 0; b > c; c++) d += String.fromCharCode(255 & a),
                a >>>= 8;
                return d
            },
            t = function() {
                var a, b, c = {};
                for (a = 0; a < arguments.length; a++) for (b in arguments[a]) arguments[a].hasOwnProperty(b) && "undefined" == typeof c[b] && (c[b] = arguments[a][b]);
                return c
            },
            u = function(a) {
                return a = a || {},
                a.base64 !== !0 || null !== a.binary && void 0 !== a.binary || (a.binary = !0),
                a = t(a, g),
                a.date = a.date || new Date,
                null !== a.compression && (a.compression = a.compression.toUpperCase()),
                a
            },
            v = function(a, b, c) {
                var e, f = d.getTypeOf(b);
                if (c = u(c), "string" == typeof c.unixPermissions && (c.unixPermissions = parseInt(c.unixPermissions, 8)), c.unixPermissions && 16384 & c.unixPermissions && (c.dir = !0), c.dosPermissions && 16 & c.dosPermissions && (c.dir = !0), c.dir && (a = x(a)), c.createFolders && (e = w(a)) && y.call(this, e, !0), c.dir || null === b || "undefined" == typeof b) c.base64 = !1,
                c.binary = !1,
                b = null,
                f = null;
                else if ("string" === f) c.binary && !c.base64 && c.optimizedBinaryString !== !0 && (b = d.string2binary(b));
                else {
                    if (c.base64 = !1, c.binary = !0, !(f || b instanceof j)) throw new Error("The data of '" + a + "' is in an unsupported format !");
                    "arraybuffer" === f && (b = d.transformTo("uint8array", b))
                }
                var g = new r(a, b, c);
                return this.files[a] = g,
                g
            },
            w = function(a) {
                "/" == a.slice( - 1) && (a = a.substring(0, a.length - 1));
                var b = a.lastIndexOf("/");
                return b > 0 ? a.substring(0, b) : ""
            },
            x = function(a) {
                return "/" != a.slice( - 1) && (a += "/"),
                a
            },
            y = function(a, b) {
                return b = "undefined" != typeof b ? b: !1,
                a = x(a),
                this.files[a] || v.call(this, a, null, {
                    dir: !0,
                    createFolders: b
                }),
                this.files[a]
            },
            z = function(a, b, c) {
                var f, g = new j;
                return a._data instanceof j ? (g.uncompressedSize = a._data.uncompressedSize, g.crc32 = a._data.crc32, 0 === g.uncompressedSize || a.dir ? (b = i.STORE, g.compressedContent = "", g.crc32 = 0) : a._data.compressionMethod === b.magic ? g.compressedContent = a._data.getCompressedContent() : (f = a._data.getContent(), g.compressedContent = b.compress(d.transformTo(b.compressInputType, f), c))) : (f = p(a), (!f || 0 === f.length || a.dir) && (b = i.STORE, f = ""), g.uncompressedSize = f.length, g.crc32 = e(f), g.compressedContent = b.compress(d.transformTo(b.compressInputType, f), c)),
                g.compressedSize = g.compressedContent.length,
                g.compressionMethod = b.magic,
                g
            },
            A = function(a, b) {
                var c = a;
                return a || (c = b ? 16893 : 33204),
                (65535 & c) << 16
            },
            B = function(a) {
                return 63 & (a || 0)
            },
            C = function(a, b, c, g, h) {
                var i, j, k, m, n = (c.compressedContent, d.transformTo("string", l.utf8encode(b.name))),
                o = b.comment || "",
                p = d.transformTo("string", l.utf8encode(o)),
                q = n.length !== b.name.length,
                r = p.length !== o.length,
                t = b.options,
                u = "",
                v = "",
                w = "";
                k = b._initialMetadata.dir !== b.dir ? b.dir: t.dir,
                m = b._initialMetadata.date !== b.date ? b.date: t.date;
                var x = 0,
                y = 0;
                k && (x |= 16),
                "UNIX" === h ? (y = 798, x |= A(b.unixPermissions, k)) : (y = 20, x |= B(b.dosPermissions, k)),
                i = m.getHours(),
                i <<= 6,
                i |= m.getMinutes(),
                i <<= 5,
                i |= m.getSeconds() / 2,
                j = m.getFullYear() - 1980,
                j <<= 4,
                j |= m.getMonth() + 1,
                j <<= 5,
                j |= m.getDate(),
                q && (v = s(1, 1) + s(e(n), 4) + n, u += "up" + s(v.length, 2) + v),
                r && (w = s(1, 1) + s(this.crc32(p), 4) + p, u += "uc" + s(w.length, 2) + w);
                var z = "";
                z += "\n\x00",
                z += q || r ? "\x00\b": "\x00\x00",
                z += c.compressionMethod,
                z += s(i, 2),
                z += s(j, 2),
                z += s(c.crc32, 4),
                z += s(c.compressedSize, 4),
                z += s(c.uncompressedSize, 4),
                z += s(n.length, 2),
                z += s(u.length, 2);
                var C = f.LOCAL_FILE_HEADER + z + n + u,
                D = f.CENTRAL_FILE_HEADER + s(y, 2) + z + s(p.length, 2) + "\x00\x00\x00\x00" + s(x, 4) + s(g, 4) + n + u + p;
                return {
                    fileRecord: C,
                    dirRecord: D,
                    compressedObject: c
                }
            },
            D = {
                load: function() {
                    throw new Error("Load method is not defined. Is the file jszip-load.js included ?")
                },
                filter: function(a) {
                    var b, c, d, e, f = [];
                    for (b in this.files) this.files.hasOwnProperty(b) && (d = this.files[b], e = new r(d.name, d._data, t(d.options)), c = b.slice(this.root.length, b.length), b.slice(0, this.root.length) === this.root && a(c, e) && f.push(e));
                    return f
                },
                file: function(a, b, c) {
                    if (1 === arguments.length) {
                        if (d.isRegExp(a)) {
                            var e = a;
                            return this.filter(function(a, b) {
                                return ! b.dir && e.test(a)
                            })
                        }
                        return this.filter(function(b, c) {
                            return ! c.dir && b === a
                        })[0] || null
                    }
                    return a = this.root + a,
                    v.call(this, a, b, c),
                    this
                },
                folder: function(a) {
                    if (!a) return this;
                    if (d.isRegExp(a)) return this.filter(function(b, c) {
                        return c.dir && a.test(b)
                    });
                    var b = this.root + a,
                    c = y.call(this, b),
                    e = this.clone();
                    return e.root = c.name,
                    e
                },
                remove: function(a) {
                    a = this.root + a;
                    var b = this.files[a];
                    if (b || ("/" != a.slice( - 1) && (a += "/"), b = this.files[a]), b && !b.dir) delete this.files[a];
                    else for (var c = this.filter(function(b, c) {
                        return c.name.slice(0, a.length) === a
                    }), d = 0; d < c.length; d++) delete this.files[c[d].name];
                    return this
                },
                generate: function(a) {
                    a = t(a || {},
                    {
                        base64: !0,
                        compression: "STORE",
                        compressionOptions: null,
                        type: "base64",
                        platform: "DOS",
                        comment: null,
                        mimeType: "application/zip"
                    }),
                    d.checkSupport(a.type),
                    ("darwin" === a.platform || "freebsd" === a.platform || "linux" === a.platform || "sunos" === a.platform) && (a.platform = "UNIX"),
                    "win32" === a.platform && (a.platform = "DOS");
                    var b, c, e = [],
                    g = 0,
                    j = 0,
                    k = d.transformTo("string", this.utf8encode(a.comment || this.comment || ""));
                    for (var l in this.files) if (this.files.hasOwnProperty(l)) {
                        var o = this.files[l],
                        p = o.options.compression || a.compression.toUpperCase(),
                        q = i[p];
                        if (!q) throw new Error(p + " is not a valid compression method !");
                        var r = o.options.compressionOptions || a.compressionOptions || {},
                        u = z.call(this, o, q, r),
                        v = C.call(this, l, o, u, g, a.platform);
                        g += v.fileRecord.length + u.compressedSize,
                        j += v.dirRecord.length,
                        e.push(v)
                    }
                    var w = "";
                    w = f.CENTRAL_DIRECTORY_END + "\x00\x00\x00\x00" + s(e.length, 2) + s(e.length, 2) + s(j, 4) + s(g, 4) + s(k.length, 2) + k;
                    var x = a.type.toLowerCase();
                    for (b = "uint8array" === x || "arraybuffer" === x || "blob" === x || "nodebuffer" === x ? new n(g + j + w.length) : new m(g + j + w.length), c = 0; c < e.length; c++) b.append(e[c].fileRecord),
                    b.append(e[c].compressedObject.compressedContent);
                    for (c = 0; c < e.length; c++) b.append(e[c].dirRecord);
                    b.append(w);
                    var y = b.finalize();
                    switch (a.type.toLowerCase()) {
                    case "uint8array":
                    case "arraybuffer":
                    case "nodebuffer":
                        return d.transformTo(a.type.toLowerCase(), y);
                    case "blob":
                        return d.arrayBuffer2Blob(d.transformTo("arraybuffer", y), a.mimeType);
                    case "base64":
                        return a.base64 ? h.encode(y) : y;
                    default:
                        return y
                    }
                },
                crc32: function(a, b) {
                    return e(a, b)
                },
                utf8encode: function(a) {
                    return d.transformTo("string", l.utf8encode(a))
                },
                utf8decode: function(a) {
                    return l.utf8decode(a)
                }
            };
            b.exports = D
        },
        {
            "./base64": 1,
            "./compressedObject": 2,
            "./compressions": 3,
            "./crc32": 4,
            "./defaults": 6,
            "./nodeBuffer": 11,
            "./signature": 14,
            "./stringWriter": 16,
            "./support": 17,
            "./uint8ArrayWriter": 19,
            "./utf8": 20,
            "./utils": 21
        }],
        14 : [function(a, b, c) {
            "use strict";
            c.LOCAL_FILE_HEADER = "PK",
            c.CENTRAL_FILE_HEADER = "PK",
            c.CENTRAL_DIRECTORY_END = "PK",
            c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK",
            c.ZIP64_CENTRAL_DIRECTORY_END = "PK",
            c.DATA_DESCRIPTOR = "PK\b"
        },
        {}],
        15 : [function(a, b) {
            "use strict";
            function c(a, b) {
                this.data = a,
                b || (this.data = e.string2binary(this.data)),
                this.length = this.data.length,
                this.index = 0
            }
            var d = a("./dataReader"),
            e = a("./utils");
            c.prototype = new d,
            c.prototype.byteAt = function(a) {
                return this.data.charCodeAt(a)
            },
            c.prototype.lastIndexOfSignature = function(a) {
                return this.data.lastIndexOf(a)
            },
            c.prototype.readData = function(a) {
                this.checkOffset(a);
                var b = this.data.slice(this.index, this.index + a);
                return this.index += a,
                b
            },
            b.exports = c
        },
        {
            "./dataReader": 5,
            "./utils": 21
        }],
        16 : [function(a, b) {
            "use strict";
            var c = a("./utils"),
            d = function() {
                this.data = []
            };
            d.prototype = {
                append: function(a) {
                    a = c.transformTo("string", a),
                    this.data.push(a)
                },
                finalize: function() {
                    return this.data.join("")
                }
            },
            b.exports = d
        },
        {
            "./utils": 21
        }],
        17 : [function(a, b, c) { (function(a) {
                "use strict";
                if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, c.nodebuffer = "undefined" != typeof a, c.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) c.blob = !1;
                else {
                    var b = new ArrayBuffer(0);
                    try {
                        c.blob = 0 === new Blob([b], {
                            type: "application/zip"
                        }).size
                    } catch(d) {
                        try {
                            var e = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                            f = new e;
                            f.append(b),
                            c.blob = 0 === f.getBlob("application/zip").size
                        } catch(d) {
                            c.blob = !1
                        }
                    }
                }
            }).call(this, "undefined" != typeof Buffer ? Buffer: void 0)
        },
        {}],
        18 : [function(a, b) {
            "use strict";
            function c(a) {
                a && (this.data = a, this.length = this.data.length, this.index = 0)
            }
            var d = a("./dataReader");
            c.prototype = new d,
            c.prototype.byteAt = function(a) {
                return this.data[a]
            },
            c.prototype.lastIndexOfSignature = function(a) {
                for (var b = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), e = a.charCodeAt(3), f = this.length - 4; f >= 0; --f) if (this.data[f] === b && this.data[f + 1] === c && this.data[f + 2] === d && this.data[f + 3] === e) return f;
                return - 1
            },
            c.prototype.readData = function(a) {
                if (this.checkOffset(a), 0 === a) return new Uint8Array(0);
                var b = this.data.subarray(this.index, this.index + a);
                return this.index += a,
                b
            },
            b.exports = c
        },
        {
            "./dataReader": 5
        }],
        19 : [function(a, b) {
            "use strict";
            var c = a("./utils"),
            d = function(a) {
                this.data = new Uint8Array(a),
                this.index = 0
            };
            d.prototype = {
                append: function(a) {
                    0 !== a.length && (a = c.transformTo("uint8array", a), this.data.set(a, this.index), this.index += a.length)
                },
                finalize: function() {
                    return this.data
                }
            },
            b.exports = d
        },
        {
            "./utils": 21
        }],
        20 : [function(a, b, c) {
            "use strict";
            for (var d = a("./utils"), e = a("./support"), f = a("./nodeBuffer"), g = new Array(256), h = 0; 256 > h; h++) g[h] = h >= 252 ? 6 : h >= 248 ? 5 : h >= 240 ? 4 : h >= 224 ? 3 : h >= 192 ? 2 : 1;
            g[254] = g[254] = 1;
            var i = function(a) {
                var b, c, d, f, g, h = a.length,
                i = 0;
                for (f = 0; h > f; f++) c = a.charCodeAt(f),
                55296 === (64512 & c) && h > f + 1 && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)),
                i += 128 > c ? 1 : 2048 > c ? 2 : 65536 > c ? 3 : 4;
                for (b = e.uint8array ? new Uint8Array(i) : new Array(i), g = 0, f = 0; i > g; f++) c = a.charCodeAt(f),
                55296 === (64512 & c) && h > f + 1 && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)),
                128 > c ? b[g++] = c: 2048 > c ? (b[g++] = 192 | c >>> 6, b[g++] = 128 | 63 & c) : 65536 > c ? (b[g++] = 224 | c >>> 12, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c) : (b[g++] = 240 | c >>> 18, b[g++] = 128 | c >>> 12 & 63, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c);
                return b
            },
            j = function(a, b) {
                var c;
                for (b = b || a.length, b > a.length && (b = a.length), c = b - 1; c >= 0 && 128 === (192 & a[c]);) c--;
                return 0 > c ? b: 0 === c ? b: c + g[a[c]] > b ? c: b
            },
            k = function(a) {
                var b, c, e, f, h = a.length,
                i = new Array(2 * h);
                for (c = 0, b = 0; h > b;) if (e = a[b++], 128 > e) i[c++] = e;
                else if (f = g[e], f > 4) i[c++] = 65533,
                b += f - 1;
                else {
                    for (e &= 2 === f ? 31 : 3 === f ? 15 : 7; f > 1 && h > b;) e = e << 6 | 63 & a[b++],
                    f--;
                    f > 1 ? i[c++] = 65533 : 65536 > e ? i[c++] = e: (e -= 65536, i[c++] = 55296 | e >> 10 & 1023, i[c++] = 56320 | 1023 & e)
                }
                return i.length !== c && (i.subarray ? i = i.subarray(0, c) : i.length = c),
                d.applyFromCharCode(i)
            };
            c.utf8encode = function(a) {
                return e.nodebuffer ? f(a, "utf-8") : i(a)
            },
            c.utf8decode = function(a) {
                if (e.nodebuffer) return d.transformTo("nodebuffer", a).toString("utf-8");
                a = d.transformTo(e.uint8array ? "uint8array": "array", a);
                for (var b = [], c = 0, f = a.length, g = 65536; f > c;) {
                    var h = j(a, Math.min(c + g, f));
                    b.push(e.uint8array ? k(a.subarray(c, h)) : k(a.slice(c, h))),
                    c = h
                }
                return b.join("")
            }
        },
        {
            "./nodeBuffer": 11,
            "./support": 17,
            "./utils": 21
        }],
        21 : [function(a, b, c) {
            "use strict";
            function d(a) {
                return a
            }
            function e(a, b) {
                for (var c = 0; c < a.length; ++c) b[c] = 255 & a.charCodeAt(c);
                return b
            }
            function f(a) {
                var b = 65536,
                d = [],
                e = a.length,
                f = c.getTypeOf(a),
                g = 0,
                h = !0;
                try {
                    switch (f) {
                    case "uint8array":
                        String.fromCharCode.apply(null, new Uint8Array(0));
                        break;
                    case "nodebuffer":
                        String.fromCharCode.apply(null, j(0))
                    }
                } catch(i) {
                    h = !1
                }
                if (!h) {
                    for (var k = "",
                    l = 0; l < a.length; l++) k += String.fromCharCode(a[l]);
                    return k
                }
                for (; e > g && b > 1;) try {
                    d.push("array" === f || "nodebuffer" === f ? String.fromCharCode.apply(null, a.slice(g, Math.min(g + b, e))) : String.fromCharCode.apply(null, a.subarray(g, Math.min(g + b, e)))),
                    g += b
                } catch(i) {
                    b = Math.floor(b / 2)
                }
                return d.join("")
            }
            function g(a, b) {
                for (var c = 0; c < a.length; c++) b[c] = a[c];
                return b
            }
            var h = a("./support"),
            i = a("./compressions"),
            j = a("./nodeBuffer");
            c.string2binary = function(a) {
                for (var b = "",
                c = 0; c < a.length; c++) b += String.fromCharCode(255 & a.charCodeAt(c));
                return b
            },
            c.arrayBuffer2Blob = function(a, b) {
                c.checkSupport("blob"),
                b = b || "application/zip";
                try {
                    return new Blob([a], {
                        type: b
                    })
                } catch(d) {
                    try {
                        var e = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                        f = new e;
                        return f.append(a),
                        f.getBlob(b)
                    } catch(d) {
                        throw new Error("Bug : can't construct the Blob.")
                    }
                }
            },
            c.applyFromCharCode = f;
            var k = {};
            k.string = {
                string: d,
                array: function(a) {
                    return e(a, new Array(a.length))
                },
                arraybuffer: function(a) {
                    return k.string.uint8array(a).buffer
                },
                uint8array: function(a) {
                    return e(a, new Uint8Array(a.length))
                },
                nodebuffer: function(a) {
                    return e(a, j(a.length))
                }
            },
            k.array = {
                string: f,
                array: d,
                arraybuffer: function(a) {
                    return new Uint8Array(a).buffer
                },
                uint8array: function(a) {
                    return new Uint8Array(a)
                },
                nodebuffer: function(a) {
                    return j(a)
                }
            },
            k.arraybuffer = {
                string: function(a) {
                    return f(new Uint8Array(a))
                },
                array: function(a) {
                    return g(new Uint8Array(a), new Array(a.byteLength))
                },
                arraybuffer: d,
                uint8array: function(a) {
                    return new Uint8Array(a)
                },
                nodebuffer: function(a) {
                    return j(new Uint8Array(a))
                }
            },
            k.uint8array = {
                string: f,
                array: function(a) {
                    return g(a, new Array(a.length))
                },
                arraybuffer: function(a) {
                    return a.buffer
                },
                uint8array: d,
                nodebuffer: function(a) {
                    return j(a)
                }
            },
            k.nodebuffer = {
                string: f,
                array: function(a) {
                    return g(a, new Array(a.length))
                },
                arraybuffer: function(a) {
                    return k.nodebuffer.uint8array(a).buffer
                },
                uint8array: function(a) {
                    return g(a, new Uint8Array(a.length))
                },
                nodebuffer: d
            },
            c.transformTo = function(a, b) {
                if (b || (b = ""), !a) return b;
                c.checkSupport(a);
                var d = c.getTypeOf(b),
                e = k[d][a](b);
                return e
            },
            c.getTypeOf = function(a) {
                return "string" == typeof a ? "string": "[object Array]" === Object.prototype.toString.call(a) ? "array": h.nodebuffer && j.test(a) ? "nodebuffer": h.uint8array && a instanceof Uint8Array ? "uint8array": h.arraybuffer && a instanceof ArrayBuffer ? "arraybuffer": void 0
            },
            c.checkSupport = function(a) {
                var b = h[a.toLowerCase()];
                if (!b) throw new Error(a + " is not supported by this browser")
            },
            c.MAX_VALUE_16BITS = 65535,
            c.MAX_VALUE_32BITS = -1,
            c.pretty = function(a) {
                var b, c, d = "";
                for (c = 0; c < (a || "").length; c++) b = a.charCodeAt(c),
                d += "\\x" + (16 > b ? "0": "") + b.toString(16).toUpperCase();
                return d
            },
            c.findCompression = function(a) {
                for (var b in i) if (i.hasOwnProperty(b) && i[b].magic === a) return i[b];
                return null
            },
            c.isRegExp = function(a) {
                return "[object RegExp]" === Object.prototype.toString.call(a)
            }
        },
        {
            "./compressions": 3,
            "./nodeBuffer": 11,
            "./support": 17
        }],
        22 : [function(a, b) {
            "use strict";
            function c(a, b) {
                this.files = [],
                this.loadOptions = b,
                a && this.load(a)
            }
            var d = a("./stringReader"),
            e = a("./nodeBufferReader"),
            f = a("./uint8ArrayReader"),
            g = a("./utils"),
            h = a("./signature"),
            i = a("./zipEntry"),
            j = a("./support"),
            k = a("./object");
            c.prototype = {
                checkSignature: function(a) {
                    var b = this.reader.readString(4);
                    if (b !== a) throw new Error("Corrupted zip or bug : unexpected signature (" + g.pretty(b) + ", expected " + g.pretty(a) + ")")
                },
                readBlockEndOfCentral: function() {
                    this.diskNumber = this.reader.readInt(2),
                    this.diskWithCentralDirStart = this.reader.readInt(2),
                    this.centralDirRecordsOnThisDisk = this.reader.readInt(2),
                    this.centralDirRecords = this.reader.readInt(2),
                    this.centralDirSize = this.reader.readInt(4),
                    this.centralDirOffset = this.reader.readInt(4),
                    this.zipCommentLength = this.reader.readInt(2),
                    this.zipComment = this.reader.readString(this.zipCommentLength),
                    this.zipComment = k.utf8decode(this.zipComment)
                },
                readBlockZip64EndOfCentral: function() {
                    this.zip64EndOfCentralSize = this.reader.readInt(8),
                    this.versionMadeBy = this.reader.readString(2),
                    this.versionNeeded = this.reader.readInt(2),
                    this.diskNumber = this.reader.readInt(4),
                    this.diskWithCentralDirStart = this.reader.readInt(4),
                    this.centralDirRecordsOnThisDisk = this.reader.readInt(8),
                    this.centralDirRecords = this.reader.readInt(8),
                    this.centralDirSize = this.reader.readInt(8),
                    this.centralDirOffset = this.reader.readInt(8),
                    this.zip64ExtensibleData = {};
                    for (var a, b, c, d = this.zip64EndOfCentralSize - 44,
                    e = 0; d > e;) a = this.reader.readInt(2),
                    b = this.reader.readInt(4),
                    c = this.reader.readString(b),
                    this.zip64ExtensibleData[a] = {
                        id: a,
                        length: b,
                        value: c
                    }
                },
                readBlockZip64EndOfCentralLocator: function() {
                    if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw new Error("Multi-volumes zip are not supported")
                },
                readLocalFiles: function() {
                    var a, b;
                    for (a = 0; a < this.files.length; a++) b = this.files[a],
                    this.reader.setIndex(b.localHeaderOffset),
                    this.checkSignature(h.LOCAL_FILE_HEADER),
                    b.readLocalPart(this.reader),
                    b.handleUTF8(),
                    b.processAttributes()
                },
                readCentralDir: function() {
                    var a;
                    for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === h.CENTRAL_FILE_HEADER;) a = new i({
                        zip64: this.zip64
                    },
                    this.loadOptions),
                    a.readCentralPart(this.reader),
                    this.files.push(a)
                },
                readEndOfCentral: function() {
                    var a = this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);
                    if ( - 1 === a) {
                        var b = !0;
                        try {
                            this.reader.setIndex(0),
                            this.checkSignature(h.LOCAL_FILE_HEADER),
                            b = !1
                        } catch(c) {}
                        throw new Error(b ? "Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html": "Corrupted zip : can't find end of central directory")
                    }
                    if (this.reader.setIndex(a), this.checkSignature(h.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === g.MAX_VALUE_16BITS || this.diskWithCentralDirStart === g.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === g.MAX_VALUE_16BITS || this.centralDirRecords === g.MAX_VALUE_16BITS || this.centralDirSize === g.MAX_VALUE_32BITS || this.centralDirOffset === g.MAX_VALUE_32BITS) {
                        if (this.zip64 = !0, a = this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR), -1 === a) throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                        this.reader.setIndex(a),
                        this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                        this.readBlockZip64EndOfCentralLocator(),
                        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                        this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),
                        this.readBlockZip64EndOfCentral()
                    }
                },
                prepareReader: function(a) {
                    var b = g.getTypeOf(a);
                    this.reader = "string" !== b || j.uint8array ? "nodebuffer" === b ? new e(a) : new f(g.transformTo("uint8array", a)) : new d(a, this.loadOptions.optimizedBinaryString)
                },
                load: function(a) {
                    this.prepareReader(a),
                    this.readEndOfCentral(),
                    this.readCentralDir(),
                    this.readLocalFiles()
                }
            },
            b.exports = c
        },
        {
            "./nodeBufferReader": 12,
            "./object": 13,
            "./signature": 14,
            "./stringReader": 15,
            "./support": 17,
            "./uint8ArrayReader": 18,
            "./utils": 21,
            "./zipEntry": 23
        }],
        23 : [function(a, b) {
            "use strict";
            function c(a, b) {
                this.options = a,
                this.loadOptions = b
            }
            var d = a("./stringReader"),
            e = a("./utils"),
            f = a("./compressedObject"),
            g = a("./object"),
            h = 0,
            i = 3;
            c.prototype = {
                isEncrypted: function() {
                    return 1 === (1 & this.bitFlag)
                },
                useUTF8: function() {
                    return 2048 === (2048 & this.bitFlag)
                },
                prepareCompressedContent: function(a, b, c) {
                    return function() {
                        var d = a.index;
                        a.setIndex(b);
                        var e = a.readData(c);
                        return a.setIndex(d),
                        e
                    }
                },
                prepareContent: function(a, b, c, d, f) {
                    return function() {
                        var a = e.transformTo(d.uncompressInputType, this.getCompressedContent()),
                        b = d.uncompress(a);
                        if (b.length !== f) throw new Error("Bug : uncompressed data size mismatch");
                        return b
                    }
                },
                readLocalPart: function(a) {
                    var b, c;
                    if (a.skip(22), this.fileNameLength = a.readInt(2), c = a.readInt(2), this.fileName = a.readString(this.fileNameLength), a.skip(c), -1 == this.compressedSize || -1 == this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
                    if (b = e.findCompression(this.compressionMethod), null === b) throw new Error("Corrupted zip : compression " + e.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
                    if (this.decompressed = new f, this.decompressed.compressedSize = this.compressedSize, this.decompressed.uncompressedSize = this.uncompressedSize, this.decompressed.crc32 = this.crc32, this.decompressed.compressionMethod = this.compressionMethod, this.decompressed.getCompressedContent = this.prepareCompressedContent(a, a.index, this.compressedSize, b), this.decompressed.getContent = this.prepareContent(a, a.index, this.compressedSize, b, this.uncompressedSize), this.loadOptions.checkCRC32 && (this.decompressed = e.transformTo("string", this.decompressed.getContent()), g.crc32(this.decompressed) !== this.crc32)) throw new Error("Corrupted zip : CRC32 mismatch")
                },
                readCentralPart: function(a) {
                    if (this.versionMadeBy = a.readInt(2), this.versionNeeded = a.readInt(2), this.bitFlag = a.readInt(2), this.compressionMethod = a.readString(2), this.date = a.readDate(), this.crc32 = a.readInt(4), this.compressedSize = a.readInt(4), this.uncompressedSize = a.readInt(4), this.fileNameLength = a.readInt(2), this.extraFieldsLength = a.readInt(2), this.fileCommentLength = a.readInt(2), this.diskNumberStart = a.readInt(2), this.internalFileAttributes = a.readInt(2), this.externalFileAttributes = a.readInt(4), this.localHeaderOffset = a.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                    this.fileName = a.readString(this.fileNameLength),
                    this.readExtraFields(a),
                    this.parseZIP64ExtraField(a),
                    this.fileComment = a.readString(this.fileCommentLength)
                },
                processAttributes: function() {
                    this.unixPermissions = null,
                    this.dosPermissions = null;
                    var a = this.versionMadeBy >> 8;
                    this.dir = 16 & this.externalFileAttributes ? !0 : !1,
                    a === h && (this.dosPermissions = 63 & this.externalFileAttributes),
                    a === i && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535),
                    this.dir || "/" !== this.fileName.slice( - 1) || (this.dir = !0)
                },
                parseZIP64ExtraField: function() {
                    if (this.extraFields[1]) {
                        var a = new d(this.extraFields[1].value);
                        this.uncompressedSize === e.MAX_VALUE_32BITS && (this.uncompressedSize = a.readInt(8)),
                        this.compressedSize === e.MAX_VALUE_32BITS && (this.compressedSize = a.readInt(8)),
                        this.localHeaderOffset === e.MAX_VALUE_32BITS && (this.localHeaderOffset = a.readInt(8)),
                        this.diskNumberStart === e.MAX_VALUE_32BITS && (this.diskNumberStart = a.readInt(4))
                    }
                },
                readExtraFields: function(a) {
                    var b, c, d, e = a.index;
                    for (this.extraFields = this.extraFields || {}; a.index < e + this.extraFieldsLength;) b = a.readInt(2),
                    c = a.readInt(2),
                    d = a.readString(c),
                    this.extraFields[b] = {
                        id: b,
                        length: c,
                        value: d
                    }
                },
                handleUTF8: function() {
                    if (this.useUTF8()) this.fileName = g.utf8decode(this.fileName),
                    this.fileComment = g.utf8decode(this.fileComment);
                    else {
                        var a = this.findExtraFieldUnicodePath();
                        null !== a && (this.fileName = a);
                        var b = this.findExtraFieldUnicodeComment();
                        null !== b && (this.fileComment = b)
                    }
                },
                findExtraFieldUnicodePath: function() {
                    var a = this.extraFields[28789];
                    if (a) {
                        var b = new d(a.value);
                        return 1 !== b.readInt(1) ? null: g.crc32(this.fileName) !== b.readInt(4) ? null: g.utf8decode(b.readString(a.length - 5))