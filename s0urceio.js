! function(t, e, n, i) {
    "use strict";

    function a(t, n, i) {
        var a = new Date;
        a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3);
        var o = "expires=" + a.toUTCString();
        e.cookie = t + "=" + n + ";" + o + ";path=/"
    }

    function o(t) {
        for (var n = t + "=", i = e.cookie.split(";"), a = 0; a < i.length; a++) {
            for (var o = i[a];
                " " == o.charAt(0);) o = o.substring(1);
            if (0 == o.indexOf(n)) return o.substring(n.length, o.length)
        }
        return ""
    }

    function r(t) {
        1 != ft.isMuted && (ft.sounds[t] == i && (ft.sounds[t] = {
            clips: [],
            index: 0,
            sr: "../client/sound/" + t + ".mp3"
        }), ft.sounds[t].clips[ft.sounds[t].index] == i && ft.sounds[t].clips.push(new Audio(ft.sounds[t].sr)), ft.sounds[t].clips[ft.sounds[t].index].play(), ft.sounds[t].index += 1, ft.sounds[t].index >= 5 && (ft.sounds[t].index = 0))
    }

    function c(t, e) {
        return 2 == e ? "Costs: <img src='../client/img/icon-bt.png' class='icon-small window-bt-icon'>" + (tt.coins.rate * nt.attackCostMult).toFixed(4) : null == st ? "No Description" : 0 == e && 1 == tt.unlocked.firewall[t].state ? st.Firewall[t].desc : 1 == e && 1 == tt.unlocked.market[t].state ? st.Market[t].desc : "Unlock by mining more BT coins."
    }

    function l(t, e) {
        null == st ? dt.push({
            id: t,
            type: e
        }) : 0 == e ? (n(n(st.Firewall[t].id).children().eq(0)).attr("src", st.Firewall[t].img), n(n(st.Firewall[t].id).children().eq(1).children().eq(0)).text(st.Firewall[t].title), tt.unlocked.firewall[t].state = !0) : 1 == e && (n(n(st.Market[t].id).children().eq(0)).attr("src", st.Market[t].img), n(n(st.Market[t].id).children().eq(1).children().eq(0)).text(st.Market[t].title), n(n(st.Market[t].id + "-inv").children().eq(0)).text(st.Market[t].title), n(n(st.Market[t].id + "-inv").children().eq(1)).attr("src", st.Market[t].img), tt.unlocked.market[t].state = !0)
    }

    function s(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }

    function d() {
        for (var t = "", e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", n = s(3, 8), i = 0; i < n; i++) t += e.charAt(Math.floor(Math.random() * e.length));
        return t
    }

    function u(t) {
        if (0 == t.type) {
            0 == t.port ? t.port = "A" : 1 == t.port ? t.port = "B" : 2 == t.port && (t.port = "C");
            var e = "<div class='window-log-message window-log-message-danger'><img src='../client/img/icon-danger.png' class='icon-small'> You're being hacked by <div id='hackedid-form' class='button' data-text='" + t.id + "'></div> on Port " + t.port + "</div>",
                i = n(e),
                a = i.find("#hackedid-form").text(t.name);
            a.click(function() {
                N(n(this).attr("data-text"))
            }), n(".window-log-content").append(i), ct.event_msg += 1, a = null
        } else if (1 == t.type) {
            var e = "<div class='window-log-message'><img src='../client/img/icon-success.png' class='icon-small'> You hacked <div id='hackedid-form' class='button' data-text='" + t.id + "'></div> and gained <img src='../client/img/icon-bt.png' class='icon-small window-bt-icon'><span class='log-gained'>" + t.amount + "</span></div>",
                i = n(e),
                a = i.find("#hackedid-form").text(t.name);
            a.click(function() {
                N(n(this).attr("data-text"))
            }), n(".window-log-content").append(i), ct.event_msg += 1, a = null
        }
        if (2 == t.type) {
            var e = "<div class='window-log-message window-log-message-danger'><img src='../client/img/icon-danger.png' class='icon-small'> Target is disconnected from the Server.</div>",
                i = n(e);
            n(".window-log-content").append(i), ct.event_msg += 1
        }
        n(".window-log-content").stop().animate({
            scrollTop: n(".window-log-content")[0].scrollHeight
        }, 800), ct.event_msg > 10 && (ct.event_msg -= 1, n(".window-log-content").children().eq(0).remove()), e = null, i = null
    }

    function w() {
        n(".window-chat-content").stop().animate({
            scrollTop: n(".window-chat-content")[0].scrollHeight
        }, 800)
    }

    function p(t) {
        var e = "<div class='window-chat-msg-wrapper'><div class='window-chat-names'><span class='window-chat-name-own'></span> > <span class='window-chat-name-other' data-id='" + rt.id + "'></span></div><span></span></div>",
            i = n(e);
        i.children().eq(0).children().eq(0).text($.name), i.children().eq(0).children().eq(1).text(rt.name), i.children().eq(1).text(t), i.children().eq(0).children().eq(1).click(function() {
            N(n(this).attr("data-id")), rt.id = n(this).attr("data-id"), rt.name = n(this).text(), n("#chat-toplayer").text(rt.name), n("#chat-input").focus()
        }), n(".window-chat-content").append(i), ct.chat_msg += 1, ct.chat_msg > 10 && (ct.chat_msg -= 1, n(".window-chat-content").children().eq(0).remove()), e = null, i = null, w()
    }

    function h(t) {
        var e = "<div class='window-chat-msg-wrapper'><div class='window-chat-names'><span class='window-chat-name-other' data-id='" + t.id + "'></span></div><span></span></div>",
            i = n(e);
        i.children().eq(0).children().eq(0).text(t.name), i.children().eq(1).text(t.message), i.children().eq(0).children().eq(0).click(function() {
            N(n(this).attr("data-id")), rt.id = n(this).attr("data-id"), rt.name = n(this).text(), n("#chat-toplayer").text(rt.name), n("#chat-input").focus()
        }), n(".window-chat-content").append(i), ct.chat_msg += 1, ct.chat_msg > 10 && (ct.chat_msg -= 1, n(".window-chat-content").children().eq(0).remove()), 0 == n("#window-chat").is(":visible") && n("#desktop-chat-new").show(), e = null, i = null, w()
    }

    function f() {
        if (null == rt.id) return void n('input[id="chat-input"]').val("");
        var t = n('input[id="chat-input"]').val();
        t.substring(0, Math.min(t.length, 48)), "" !== t && (it.push({
            task: 300,
            id: rt.id,
            message: t
        }), p(t)), n('input[id="chat-input"]').val(""), t = null, w()
    }

    function m() {
        var t = tt.coins.value;
        t >= tt.coins.rate * nt.attackCostMult ? 0 == tt.unlocked.firewall[0].state ? l(0, 0) : n(tt.unlocked.firewall[0].name).css("opacity", "1.0") : n(tt.unlocked.firewall[0].name).css("opacity", "0.4"), t >= tt.coins.rate * nt.attackCostMult * 10 ? 0 == tt.unlocked.firewall[1].state ? l(1, 0) : n(tt.unlocked.firewall[1].name).css("opacity", "1.0") : n(tt.unlocked.firewall[1].name).css("opacity", "0.4");
        for (var e = 2; e < tt.unlocked.firewall.length; e++) t >= tt.firewall[0].upgrades[e].f_cost ? 0 == tt.unlocked.firewall[e].state ? l(e, 0) : n(tt.unlocked.firewall[e].name).css("opacity", "1.0") : n(tt.unlocked.firewall[e].name).css("opacity", "0.4");
        for (var e = 0; e < tt.unlocked.market.length; e++) t >= tt.market[e].f_cost ? 0 == tt.unlocked.market[e].state ? l(e, 1) : n(tt.unlocked.market[e].name).css("opacity", "1.0") : n(tt.unlocked.market[e].name).css("opacity", "0.4")
    }

    function g() {
        function t(t) {
            tt.vis_firewall = t, 1 == tt.vis_firewall ? (n("#window-firewall-page1").hide(), n("#window-firewall-page2").show()) : (n("#window-firewall-page1").show(), n("#window-firewall-page2").hide())
        }
        n("#window-chat").click(function() {
            n("#chat-input").focus()
        }), n("#chat-input-form").click(function() {
            n("#chat-input").focus()
        }), n("#chat-button").click(function() {
            f()
        }), n("#chat-input-form").submit(function() {
            f()
        }), n("input[id='my-playerid-input']").prop("readonly", !0), n("input[id='my-playerid-input']").click(function() {
            n(this).select()
        }), n("#cdm-target-name").click(function() {
            null !== ut.id && N(ut.id)
        }), n("#window-firewall-pagebutton").click(function() {
            t(!1)
        }), n("#window-firewall-part1").click(function() {
            $.selection.firewall = 0, n("#window-firewall-page1-name").text("Firewall A"), t(!0), 6 == ht.current && (ht.clearHints(), setTimeout(function() {
                ht.animate(7)
            }, 8e3))
        }), n("#window-firewall-part2").click(function() {
            $.selection.firewall = 1, n("#window-firewall-page1-name").text("Firewall B"), t(!0), ht.animate(7)
        }), n("#window-firewall-part3").click(function() {
            $.selection.firewall = 2, n("#window-firewall-page1-name").text("Firewall C"), t(!0), ht.animate(7)
        }), n("#shop-firewall-charge1").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (tt.firewall[$.selection.firewall].charges < tt.firewall[$.selection.firewall].max_charges ? (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), r("click"), it.push({
                task: 102,
                id: 0,
                fid: $.selection.firewall
            })) : (y(t.pageX, t.pageY, "Fully Charged", "#c77f02"), r("fail")))
        }), n("#shop-firewall-charge10").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (tt.firewall[$.selection.firewall].charges < tt.firewall[$.selection.firewall].max_charges ? (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), r("click"), it.push({
                task: 102,
                id: 1,
                fid: $.selection.firewall
            })) : (y(t.pageX, t.pageY, "Fully charged", "#c77f02"), r("fail")))
        }), n("#shop-firewall-max_charge10").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (tt.firewall[$.selection.firewall].max_charges < 150 ? (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), r("click"), it.push({
                task: 102,
                id: 2,
                fid: $.selection.firewall
            })) : (y(t.pageX, t.pageY, "Reached maximum charge size", "#c77f02"), r("fail")))
        }), n("#shop-firewall-difficulty").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (tt.firewall[$.selection.firewall].strength < 4 ? (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), r("click"), it.push({
                task: 102,
                id: 3,
                fid: $.selection.firewall
            })) : (y(t.pageX, t.pageY, "Reached maximum strength", "#c77f02"), r("fail")))
        }), n("#shop-firewall-regen").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (tt.firewall[$.selection.firewall].regeneration < 10 ? (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), r("click"), it.push({
                task: 102,
                id: 4,
                fid: $.selection.firewall
            })) : (y(t.pageX, t.pageY, "Reached maximum regeneration", "#c77f02"), r("fail")))
        })
    }

    function k() {
        n("#shop-basic-miner").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), r("click"), x(), it.push({
                task: 103,
                id: 0
            }), _("#shop-basic-miner-inv"))
        }), n("#shop-advanced-miner").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), x(), r("click"), it.push({
                task: 103,
                id: 1
            }), _("#shop-advanced-miner-inv"))
        }), n("#shop-mining-drill").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), x(), r("click"), it.push({
                task: 103,
                id: 2
            }), _("#shop-mining-drill-inv"))
        }), n("#shop-data-center").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), x(), r("click"), it.push({
                task: 103,
                id: 3
            }), _("#shop-data-center-inv"))
        }), n("#shop-bot-net").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), x(), r("click"), it.push({
                task: 103,
                id: 4
            }), _("#shop-bot-net-inv"))
        }), n("#shop-quantum-server").click(function(t) {
            tt.coins.value >= n(this).children().eq(1).children().eq(3).text() && (y(t.pageX, t.pageY, "+ " + n(this).children().eq(1).children().eq(0).text(), "#2d533f"), x(), r("click"), it.push({
                task: 103,
                id: 5
            }), _("#shop-quantum-server-inv"))
        })
    }

    function v() {
        var t = o("vid_adin_s0urce");
        t !== i && (t = parseInt(t), (t == i || isNaN(t)) && (a("vid_adin_s0urce", 0, 180), t = 0), Z = t + 1, a("vid_adin_s0urce", Z, 180)), null !== V && 2 == Z ? V.startPreRoll() : E()
    }

    function x() {
        n("#window-miner-coins-rate").css("background-color", "rgba(191, 207, 210, 0.4)"), setTimeout(function() {
            n("#window-miner-coins-rate").css("background-color", "rgba(191, 207, 210, 0)")
        }, 100), setTimeout(function() {
            n("#window-miner-coins-rate").css("background-color", "rgba(191, 207, 210, 0.4)")
        }, 200), setTimeout(function() {
            n("#window-miner-coins-rate").css("background-color", "rgba(191, 207, 210, 0)")
        }, 300)
    }

    function y(t, e, i, a) {
        var o = "<div>" + i + "</div>",
            r = n(o);
        n("#game-page").append(r), n(r).css({
            position: "absolute",
            "z-index": 80,
            "pointer-events": "none",
            "background-color": a,
            padding: "2px 4px 2px 4px",
            "font-size": "20px",
            "border-radius": 2,
            left: t,
            top: e
        }), n(r).animate({
            top: e - 160,
            opacity: 0
        }, 1400, function() {
            n(r).remove(), r = null
        })
    }

    function b(t) {
        var e = et[t].toLowerCase();
        n(".my-player-rank-icon").attr("src", "../client/img/icon-rank-" + e + ".png");
        var i = "<div class='rank-popup'><img src='../client/img/icon-rank-" + e + ".png' class='rank-popup-img'><div class='rank-popup-new'>New Rank!</div><div class='rank-popup-name'>" + et[t] + "</div></div>",
            a = n(i);
        n("#game-page").append(a), n(a).animate({
            opacity: 1
        }, 200, function() {
            n(a).animate({
                bottom: "80px"
            }, 600, function() {
                n(a).delay(8e3).animate({
                    opacity: 0
                }, 200, function() {
                    n(a).remove(), a = null
                })
            })
        }), q(t)
    }

    function q(t) {
        var e = n("#window-rank-container").children().length;
        t > e - 1 ? t = e - 1 : t < 0 && (t = 0);
        for (var i = 0; i < e; i++) n("#window-rank-container").children().eq(i).attr("class", "rank-element"), t >= i ? (n("#window-rank-container").children().eq(i).children().eq(0).attr("class", "rank-img"), n("#window-rank-container").children().eq(i).children().eq(1).attr("class", "rank-name")) : (n("#window-rank-container").children().eq(i).children().eq(0).attr("class", "rank-img rank-img-locked"), n("#window-rank-container").children().eq(i).children().eq(1).attr("class", "rank-name rank-name-locked"));
        n("#window-rank-container").children().eq(t).attr("class", "rank-element rank-current"), e = null
    }

    function _(t) {
        var e = n(t).children(".miner-list-background"),
            i = n(t).children(".window-miner-list-icon");
        e.animate({
            opacity: .8
        }, 150, function() {
            e.animate({
                opacity: 0
            }, 150), i.animate({
                width: "65px",
                height: "65px",
                top: "20px",
                left: "0"
            }, 150, function() {
                i.delay(50).animate({
                    width: "45px",
                    height: "45px",
                    top: "30px",
                    left: "10px"
                }, 200)
            })
        })
    }

    function F() {
        "" !== n('input[id="targetmessage-input"]').val() && (it.push({
            task: 106,
            text: n('input[id="targetmessage-input"]').val()
        }), ut.lastHackedID == ot.id && n("#window-other-message1").text(n('input[id="targetmessage-input"]').val())), C("#topwindow-success")
    }

    function M(t) {
        n(t).show(), n(t).animate({
            opacity: 1
        }, 200)
    }

    function C(t) {
        n(t).animate({
            opacity: 0
        }, 150, function() {
            n(t).hide()
        })
    }

    function N(t) {
        it.push({
            task: 105,
            id: t
        })
    }

    function Y() {
        it.push({
            task: 104,
            desc: n('input[id="playerquote-type-word"]').val()
        }), n("#window-my-playerquote-wrapper-new").hide(), n("#window-my-playerquote-wrapper").show()
    }

    function T(t) {
        var e = n(t).children(".window-title");
        n(".window-title").css("background-color", "#3e4c5f"), n(".window").css("border-color", "#3e4c5f"), n(e).css("background-color", "#4d647a"), n(t).css("border-color", "#4d647a"), X(t)
    }

    function X(t) {
        var e = mt.length;
        t = t.replace("#", "");
        for (var i = 0; i < e; i++)
            if (mt[i] == t) {
                mt.splice(i, 1), mt.push(t);
                break
            }
        for (var i = 0; i < e; i++) n("#" + mt[i]).css("z-index", i)
    }

    function L() {
        n(".window-tool-text").stop().animate({
            scrollTop: n(".window-tool-text")[0].scrollHeight
        }, 800)
    }

    function A(t) {
        var e = "<br><span style='color: #e96666'>" + t.text + "</span><br>",
            a = n(e);
        n("#cdm-text-container").append(a), L(), t.extra !== i && t.extra.overlay !== i && (ht.animate(5), n("#hacking-reward").text(t.extra.overlay.value.toFixed(4)), M("#topwindow-success"), n("#targetmessage-input").focus(), r("hacked"), u({
            type: 1,
            id: ut.id,
            name: ut.name,
            amount: t.extra.overlay.value.toFixed(4)
        }), ut.lastHackedID = ut.id), t.action !== i && 0 == t.action && I()
    }

    function H(t) {
        n("#window-my-playerlevel").text(t.content.level), n("input[id='my-playerid-input']").val(t.content.id), n("#window-my-playerquote").text(t.content.desc), n("#window-my-message1").text(t.content.comm.first), n("#window-my-message2").text(t.content.comm.second), n("#my-player-flag").attr("class", "flag " + t.content.country)
    }

    function I() {
        null == ut.id, null == ut.name, wt.words = [], wt.currentWordNr = 0, n(".tool-type-img").attr("src", "../client/img/words/template.png")
    }

    function E() {
        $.name = n('input[id="login-input"]').val(), a("username", $.name, 180), "" == $.name && ($.name = "Anon" + s(1, 1e3)), n("#window-my-playername").text($.name), Q.emit("signIn", {
            name: $.name
        }), b(0), n("#checkbox-tutorial").is(":checked") ? ht.enabled = !0 : ht.enabled = !1, a("tutorial_s0urce", ht.enabled, 180), ht.animate(0)
    }

    function R(t) {
        tt.coins.value >= tt.coins.rate * nt.attackCostMult && (B(), ht.animate(3), ut.name = ot.name, ut.level = ot.level, ut.id = ot.id, ut.port = t + 1, it.push({
            task: 100,
            id: ut.id,
            port: t
        }))
    }

    function W() {
        n("#cdm-text-container").empty(), n("#window-tool").show(), n("#cdm-target-name").text(ut.name), n("#cdm-target-level").text(ut.level), n("input[id='cdm-target-id']").val(ut.id), n("#progressbar-firewall-amount").width("0%"), 1 == ut.port ? n("#progressbar-firewall-port").text("Firewall A") : 2 == ut.port ? n("#progressbar-firewall-port").text("Firewall B") : 3 == ut.port && n("#progressbar-firewall-port").text("Firewall C"), n("#tool-type-word").focus()
    }

    function P(t) {
        wt.words = t, wt.currentWordNr = 0, n(".tool-type-img").attr("src", "../client/img/words" + wt.words[wt.currentWordNr][1])
    }

    function D(t) {
        var e = 100 - Math.round(t.charges / t.max_charges * 100);
        n("#progressbar-firewall-amount").width(e + "%")
    }

    function B() {
        ut.cdm.currentBlock = s(0, lt.template.length - 1), ut.cdm.currentLine = 0, ut.cdm.maxLine = lt.template[ut.cdm.currentBlock].length
    }

    function S() {
        var t = n('input[id="tool-type-word"]').val();
        if (wt.words != i && wt.words[wt.currentWordNr] != i) {
            if (wt.words.length > 0 && t == wt.words[wt.currentWordNr][0]) {
                ht.animate(4), ut.cdm.currentLine >= ut.cdm.maxLine && B();
                var e = lt.template[ut.cdm.currentBlock][ut.cdm.currentLine],
                    a = n(e);
                ut.cdm.currentLine += 1, a.find(".user-word").text(wt.words[wt.currentWordNr][0]);
                for (var o = a.find(".random-word"), c = 0; c < o.length; c++) n(o[c]).text(d());
                n("#cdm-text-container").append(a), it.push({
                    task: 101,
                    word: wt.words[wt.currentWordNr][0]
                }), wt.currentWordNr += 1, wt.currentWordNr < 10 ? n(".tool-type-img").attr("src", "../client/img/words" + wt.words[wt.currentWordNr][1]) : n(".tool-type-img").attr("src", "../client/img/words/template.png"), r("success")
            } else n("#tool-type").css("background-color", "#f2b7b0"), setTimeout(function() {
                n("#tool-type").css("background-color", "#d24f4f"), setTimeout(function() {
                    n("#tool-type").css("background-color", "#60e6a3")
                }, 250)
            }, 100), r("fail");
            n('input[id="tool-type-word"]').val(""), L()
        }
    }

    function O(t) {
        ot = t, n("#other-player-flag").attr("class", "flag " + ot.country), n(".other-rank-icon").attr("src", "../client/img/icon-rank-" + et[ot.achievmentRank].toLowerCase() + ".png"), n("#window-other-port1").toggleClass(n("#window-other-port1").attr("class").split(" ")[1] + " window-other-attackbutton-default"), n("#window-other-port2").toggleClass(n("#window-other-port2").attr("class").split(" ")[1] + " window-other-attackbutton-default"), n("#window-other-port3").toggleClass(n("#window-other-port3").attr("class").split(" ")[1] + " window-other-attackbutton-default"), n("#window-other-button").show(), n("#window-other-attackbutton-wrapper").hide(), n("#window-other").show(), T("#window-other"), ht.animate(1), n("#window-other-playerlevel").text(ot.level), n("#window-other-playername").text(ot.name), n("#window-other-playerquote").text(ot.desc), n("#window-other-message1").text(ot.comm.first), n("#window-other-message2").text(ot.comm.second), n("#window-other").show()
    }

    function j(t) {
        1 == t.hacked ? (n("#window-firewall-part" + (t.port + 1)).css("background-image", "url(/client/img/firewall-frame-red.png)"), n("#window-firewall-part" + (t.port + 1)).hover(function() {
            n(this).css("background-image", "url(/client/img/firewall-frame-red-hover.png)")
        }, function() {
            n(this).css("background-image", "url(/client/img/firewall-frame-red.png)")
        })) : (n("#window-firewall-part" + (t.port + 1)).css("background-image", "url(/client/img/firewall-frame.png)"), n("#window-firewall-part" + (t.port + 1)).hover(function() {
            n(this).css("background-image", "url(/client/img/firewall-frame-hover.png)")
        }, function() {
            n(this).css("background-image", "url(/client/img/firewall-frame.png)")
        }))
    }

    function z(t) {
        if (0 != tt.gotFirstPack) {
            var e = 0;
            n("#window-my-coinamount").text(tt.coins.value.toFixed(4)), n("#window-my-gainamount").text(tt.coins.rate.toFixed(4)), e = tt.firewall[0].charges / tt.firewall[0].max_charges * 100, n("#window-firewall-part1-amount").height(e + "%"), n(".firewall-part1-charges").text(tt.firewall[0].charges), n(".firewall-part1-charges-max").text(tt.firewall[0].max_charges), e = tt.firewall[1].charges / tt.firewall[1].max_charges * 100, n("#window-firewall-part2-amount").height(e + "%"), n(".firewall-part2-charges").text(tt.firewall[1].charges), n(".firewall-part2-charges-max").text(tt.firewall[1].max_charges), e = tt.firewall[2].charges / tt.firewall[2].max_charges * 100, n("#window-firewall-part3-amount").height(e + "%"), n(".firewall-part3-charges").text(tt.firewall[2].charges), n(".firewall-part3-charges-max").text(tt.firewall[2].max_charges);
            for (var i = 0; i < tt.unlocked.market.length; i++) n(tt.unlocked.market[i].name + "-amount").text(tt.market[i].amount), n(tt.unlocked.market[i].name + "-value").text(tt.market[i].f_cost.toFixed(4));
            if (1 == tt.vis_firewall) {
                n("#shop-charges").text(tt.firewall[$.selection.firewall].charges), n("#shop-max-charges").text(tt.firewall[$.selection.firewall].max_charges), n("#shop-strength").text(tt.firewall[$.selection.firewall].strength), n("#shop-regen").text(tt.firewall[$.selection.firewall].regeneration), n(tt.unlocked.firewall[0].name + "-value").text((tt.coins.rate * nt.chargeCostMult).toFixed(4)), n(tt.unlocked.firewall[1].name + "-value").text((tt.coins.rate * nt.chargeCostMult * 10).toFixed(4));
                for (var i = 2; i < tt.unlocked.firewall.length; i++) n(tt.unlocked.firewall[i].name + "-value").text(tt.firewall[$.selection.firewall].upgrades[i].f_cost.toFixed(4))
            }
            tt.coins.value >= tt.coins.rate * nt.attackCostMult ? (n("#window-other-port1").css("opacity", "1.0"), n("#window-other-port2").css("opacity", "1.0"), n("#window-other-port3").css("opacity", "1.0")) : (n("#window-other-port1").css("opacity", "0.4"), n("#window-other-port2").css("opacity", "0.4"), n("#window-other-port3").css("opacity", "0.4")), m()
        }
    }

    function G(t) {
        t.topFive[0] !== i && (n("#leaderboard-first-name").text(t.topFive[0].name), n("#leaderboard-first-rank").attr("src", "../client/img/icon-rank-" + et[t.topFive[0].achievmentRank].toLowerCase() + ".png"), null !== t.topFive[0].country && "string" == typeof t.topFive[0].country && t.topFive[0].country.length < 3 && n("#leaderboard-first-country").attr("class", "flag " + t.topFive[0].country)), t.topFive[1] !== i && (n("#leaderboard-second-name").text(t.topFive[1].name), n("#leaderboard-second-rank").attr("src", "../client/img/icon-rank-" + et[t.topFive[1].achievmentRank].toLowerCase() + ".png"), null !== t.topFive[1].country && "string" == typeof t.topFive[0].country && t.topFive[1].country.length < 3 && n("#leaderboard-second-country").attr("class", "flag " + t.topFive[1].country)), t.topFive[2] !== i && (n("#leaderboard-third-name").text(t.topFive[2].name), n("#leaderboard-third-rank").attr("src", "../client/img/icon-rank-" + et[t.topFive[2].achievmentRank].toLowerCase() + ".png"), null !== t.topFive[2].country && "string" == typeof t.topFive[2].country && t.topFive[2].country.length < 3 && n("#leaderboard-third-country").attr("class", "flag " + t.topFive[2].country)), n("#player-list").empty(), at = [];
        for (var e = 0; e < t.data.length; e++) {
            var a = !1,
                o = "",
                r = "<img src='../client/img/icon-rank-" + et[t.data[e].achievmentRank].toLowerCase() + ".png' class='icon-small icon-profile-rank'>",
                c = "<span class='f16 window-list-table-flag'><span class='flag " + t.data[e].country + "'></span></span>";
            t.data[e].id == $.id ? (a = !0, o = "<tr class='window-list-table-own' data-queue='" + e + "'><td class='list-table-rank'><span class='list-table-rank-content'>RANK</span></td><td class='list-table-name'>" + r + c + "<span>NAME</span><span id='list-own-name'>(me)</span></tr>") : o = "<tr class='window-list-table-select' data-queue='" + e + "'><td class='list-table-rank'><span class='list-table-rank-content'>RANK</span></td><td class='list-table-name'>" + r + c + "<span>NAME</span></td></tr>";
            var l = n(o);
            l.children().eq(0).children().eq(0).text(t.data[e].rank), l.children().eq(1).children().eq(2).text(t.data[e].name), at[e] = t.data[e], n("#player-list").append(l), 0 == a && l.click(function() {
                O(at[this.getAttribute("data-queue")])
            })
        }
    }

    function U() {
        it.length > 0 && (Q.emit("playerRequest", it), it = [])
    }

    function J() {
        "undefined" != typeof aipPlayer ? V = new aipPlayer({
            AD_WIDTH: 960,
            AD_HEIGHT: 540,
            AD_FULLSCREEN: !0,
            AD_CENTERPLAYER: !1,
            LOADING_TEXT: "loading advertisement",
            PREROLL_ELEM: e.getElementById("preroll"),
            AIP_COMPLETE: function() {
                Z >= 2 && a("vid_adin_s0urce", 0, 180), E()
            },
            AIP_REMOVE: function() {}
        }) : E()
    }

    function K(t, n) {
        var i = e.head || e.getElementsByTagName("head")[0],
            a = e.createElement("script"),
            o = !0;
        a.async = "async", a.type = "text/javascript", a.charset = "UTF-8", a.src = t, a.onload = a.onreadystatechange = function() {
            !o || a.readyState && !/loaded|complete/.test(a.readyState) || (o = !1, n(), a.onload = a.onreadystatechange = null)
        }, i.appendChild(a)
    }
    var Q = io.connect(),
        V = null,
        Z = 0,
        $ = {
            name: "Anon",
            id: null,
            selection: {
                firewall: 0
            },
            country: null
        },
        tt = {
            gotFirstPack: !1,
            coins: {},
            firewall: {},
            market: {},
            vis_firewall: !1,
            unlocked: {
                firewall: [{
                    name: "#shop-firewall-charge1",
                    state: !1
                }, {
                    name: "#shop-firewall-charge10",
                    state: !1
                }, {
                    name: "#shop-firewall-max_charge10",
                    state: !1
                }, {
                    name: "#shop-firewall-difficulty",
                    state: !1
                }, {
                    name: "#shop-firewall-regen",
                    state: !1
                }],
                market: [{
                    name: "#shop-basic-miner",
                    state: !1
                }, {
                    name: "#shop-advanced-miner",
                    state: !1
                }, {
                    name: "#shop-mining-drill",
                    state: !1
                }, {
                    name: "#shop-data-center",
                    state: !1
                }, {
                    name: "#shop-bot-net",
                    state: !1
                }, {
                    name: "#shop-quantum-server",
                    state: !1
                }]
            }
        },
        et = ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master"],
        nt = {
            attackCostMult: -1,
            chargeCostMult: -1
        },
        it = [],
        at = [],
        ot = null,
        rt = {},
        ct = {
            chat_msg: 0,
            event_msg: 0
        },
        lt = null,
        st = null,
        dt = [],
        ut = {
            id: null,
            name: "",
            lastHackedID: null,
            cdm: {
                currentLine: 0,
                maxLine: 0,
                currentBlock: 0
            }
        },
        wt = {
            words: [],
            currentWordNr: 0
        },
        pt = {
            initWidth: 0,
            initHeight: 0,
            dragging: null,
            focus: null,
            offX: 0,
            offY: 0,
            zIndexTop: 10,
            zIndexBottom: 0,
            isHoveringClose: !1,
            hoverInfo: null,
            country: null,
            cdm_mark_id: !1
        },
        ht = {
            current: -1,
            elements: ["#tutorial-targetlist", "#tutorial-target", "#tutorial-targetport", "#tutorial-cdm", "#tutorial-cdmprogress", "#tutorial-mycomputer", "#tutorial-firewall", "#tutorial-myminers", "#tutorial-blackmarket"],
            _length: 0,
            enabled: !0
        };
    ht._length = ht.elements.length;
    var ft = {
        isMuted: !1,
        sounds: {}
    };
    n(e).ready(function() {
        var t = o("username");
        t !== i && "" !== t && n('input[id="login-input"]').val(t), t = null, "false" == o("tutorial_s0urce") ? (ht.enabled = !1, n("#checkbox-tutorial").prop("checked", !1)) : (ht.enabled = !0, n("#checkbox-tutorial").prop("checked", !0)), "false" == o("sound_s0urce") ? (n("#settings-button-sound").text("Sound: Off"), ft.isMuted = !0) : (n("#settings-button-sound").text("Sound: On"), ft.isMuted = !1), pt.initWidth = n(e).width(), pt.initHeight = n(e).height(), n(e).ready(function() {
            n("#tool-type-word").bind("cut copy paste", function(t) {
                t.preventDefault()
            })
        }), n(e).on("contextmenu", function() {
            return !1
        }), n("#settings-button-sound").click(function() {
            0 == ft.isMuted ? (n(this).text("Sound: Off"), ft.isMuted = !0, a("sound_s0urce", "false", 180)) : (n(this).text("Sound: On"), ft.isMuted = !1, a("sound_s0urce", "true", 180))
        }), g(), k(), n("#targetid-button").click(function() {
            N(n('input[id="targetid-input"]').val())
        }), n("#targetid-input-form").submit(function() {
            N(n('input[id="targetid-input"]').val())
        }), n("#toppower-restart-button").click(function() {
            it.push({
                task: 666
            }), q(0), C("#topwindow-power")
        }), n("#login-play").click(function() {
            v()
        }), n("#login-input-form").submit(function() {
            v()
        }), n("#targetmessage-input-form").submit(function() {
            F()
        }), n("#targetmessage-button-send").click(function() {
            F()
        }), n("#tool-type-form").submit(function() {
            S()
        }), n("input[id='cdm-target-id']").prop("readonly", !0), n("input[id='cdm-target-id']").click(function() {
            pt.cdm_mark_id = !0, n(this).select()
        }), n("#window-other").css({
            top: n(e).height() / 2 - 185,
            left: 120
        }), n("#window-shop").css({
            top: n(e).height() / 2 - 221,
            left: n(e).width() / 2 - 175
        }), n("#window-log").css({
            top: n(e).height() - 210,
            left: 30
        }), n("#window-power").css({
            top: n(e).height() / 2 - 95,
            left: n(e).width() / 2 - 181
        }), n("#window-settings").css({
            top: n(e).height() / 2 - 95,
            left: n(e).width() / 2 - 181
        }), n("#window-chat").css({
            top: n(e).height() / 2 - 155,
            left: n(e).width() / 2 - 181
        }), n("#window-rank").css({
            top: n(e).height() / 2 - 238,
            left: n(e).width() / 2 - 101
        }), pt.initWidth > 1500 ? (n("#window-miner").css({
            top: 30,
            left: 1145
        }), n("#window-computer").css({
            top: 30,
            left: 545
        }), n("#window-list").css({
            top: 30,
            left: 265
        }), n("#window-tool").css({
            top: 380,
            left: 560
        })) : pt.initWidth > 1380 ? (n("#window-miner").css({
            top: 30,
            left: 1035
        }), n("#window-computer").css({
            top: 30,
            left: 435
        }), n("#window-list").css({
            top: 30,
            left: 155
        }), n("#window-tool").css({
            top: 380,
            left: 450
        })) : (n("#window-miner").css({
            top: 30,
            left: pt.initWidth - 352
        }), n("#window-computer").css({
            top: 30,
            left: 435
        }), n("#window-list").css({
            top: 30,
            left: 155
        }), n("#window-tool").css({
            top: pt.initHeight - 436,
            left: 450
        })), n("#power-restart-button").click(function() {
            M("#topwindow-power")
        }), n(".targetmessage-button-cancel").click(function() {
            C("#topwindow-success")
        }), n(".toppower-button-cancel").click(function() {
            C("#topwindow-power")
        }), n("#window-other-port1").click(function() {
            tt.coins.value < tt.coins.rate * nt.attackCostMult || (n("#window-other-port1").attr("class", "button window-other-attackbutton-clicked"), n("#window-other-port2").attr("class", "button window-other-attackbutton-default"), n("#window-other-port3").attr("class", "button window-other-attackbutton-default"), T("#window-tool"), n("#tool-type-word").focus(), R(0))
        }), n("#window-other-port2").click(function() {
            tt.coins.value < tt.coins.rate * nt.attackCostMult || (n("#window-other-port1").attr("class", "button window-other-attackbutton-default"), n("#window-other-port2").attr("class", "button window-other-attackbutton-clicked"), n("#window-other-port3").attr("class", "button window-other-attackbutton-default"), T("#window-tool"), n("#tool-type-word").focus(), R(1))
        }), n("#window-other-port3").click(function() {
            tt.coins.value < tt.coins.rate * nt.attackCostMult || (n("#window-other-port1").attr("class", "button window-other-attackbutton-default"), n("#window-other-port2").attr("class", "button window-other-attackbutton-default"), n("#window-other-port3").attr("class", "button window-other-attackbutton-clicked"), T("#window-tool"), n("#tool-type-word").focus(), R(2))
        }), n("#window-other-chatbutton").click(function() {
            rt = ot, n("#chat-toplayer").text(rt.name), n("#window-chat").show(), T("#window-chat"), n("#chat-input").focus()
        }), n("#chat-toplayer").click(function() {
            N(rt.id)
        }), n(".desktop-element").click(function() {
            var t = "#" + this.id.replace("desktop", "window");
            n(t).show(), T(t), "#window-chat" == t && n("#chat-input").focus(), "desktop-chat" == n(this).attr("id") ? n("#desktop-chat-new").hide() : "desktop-computer" == n(this).attr("id") ? ht.animate(6) : "desktop-miner" == n(this).attr("id") ? ht.animate(8) : "desktop-shop" == n(this).attr("id") && ht.clearHints()
        }), n(".window").click(function() {
            pt.focus = n(this).attr("id"), "window-tool" == pt.focus && (n("#tool-type-word").focus(), 1 == pt.cdm_mark_id && (pt.cdm_mark_id = !1, n("input[id='cdm-target-id']").select()))
        }), n("#window-other-button").click(function() {
            ht.animate(2), n(this).hide(), n("#window-other-attackbutton-wrapper").show()
        }), n(".window-close").click(function() {
            n(this).parent().parent().hide()
        }), n(".topwindow-close").click(function() {
            n(this).parent().parent().parent().hide()
        }), n(".topwindow-close-button").click(function() {
            n(this).parent().parent().parent().parent().hide()
        }), n(".window-close").hover(function() {
            pt.isHoveringClose = !0
        }, function() {
            pt.isHoveringClose = !1
        }), n("#window-my-playerquote-wrapper").click(function() {
            n(this).hide(), n("#window-my-playerquote-wrapper-new").show(), n("#playerquote-type-word").focus()
        }), n("#playerquote-input-form").submit(function() {
            Y()
        }), n("#playerquote-button").click(function() {
            Y()
        }), n(".window-title").mousedown(function(t) {
            var e = n(this).parent().attr("id");
            if (null == pt.dragging && !pt.isHoveringClose && e) {
                pt.dragging = e, T("#" + pt.dragging);
                var i = n(this).offset();
                pt.offX = t.pageX - i.left, pt.offY = t.pageY - i.top
            }
        }), n(".window").mousedown(function() {
            var t = "#" + n(this).attr("id");
            t && T(t)
        }), n(".window-shop-element").hover(function() {
            pt.hoverInfo = n(this).attr("id"), n("#hoverinfo-name").html(c(n(this).attr("data-id"), n(this).attr("data-type"))), n("#hoverinfo").show()
        }, function() {
            pt.hoverInfo = null, n("#hoverinfo").hide()
        }), n(".window-shop-element").click(function(t) {
            2 == n(this).attr("data-type") && tt.coins.value >= tt.coins.rate * nt.attackCostMult && (y(t.pageX, t.pageY, "- " + (tt.coins.rate * nt.attackCostMult).toFixed(4), "#c77f02"), r("click"))
        }), n(e.body).mousemove(function(t) {
            pt.dragging && n("#" + pt.dragging).css({
                left: t.pageX - pt.offX,
                top: t.pageY - pt.offY
            }), null !== pt.hoverInfo && n("#hoverinfo").css({
                left: t.pageX + 30,
                top: t.pageY
            })
        }), n(e.body).mouseup(function() {
            pt.dragging = null
        }), n.getJSON("/client/js/codeTemplate.json", function(t) {
            lt = t
        }), n.getJSON("/client/js/shop.json", function(t) {
            st = t;
            for (var e = 0; e < dt.length; e++) l(dt[e].id, dt[e].type)
        }), Q.emit("getInstanceData")
    }), ht.animate = function(t) {
        0 != ht.enabled && ht.current + 1 === t && (ht.current = t, ht.clearHints(), n(ht.elements[t]).show())
    }, ht.clearHints = function() {
        for (var t = 0; t < ht._length; t++) n(ht.elements[t]).hide()
    };
    var mt = ["window-computer", "window-miner", "window-shop", "window-tool", "window-list", "window-other", "window-log", "window-power", "window-settings", "window-chat", "window-rank"];
    setInterval(z, 200), Q.on("prepareClient", function(t) {
        $.id = t.id, n("#login-page").hide(), n("#game-page").show()
    }), Q.on("streamPackage", function(t) {
        t !== i && (tt.coins = t.coins, tt.firewall = t.firewall, tt.market = t.market, tt.gotFirstPack = !0)
    }), Q.on("mainPackage", function(t) {
        for (var e = 0; e < t.unique.length; e++) 2008 == t.unique[e].task ? G(t.unique[e]) : 2009 == t.unique[e].task ? H(t.unique[e]) : 2006 == t.unique[e].task ? h(t.unique[e]) : 2002 == t.unique[e].task ? W() : 2001 == t.unique[e].task ? P(t.unique[e].words) : 2004 == t.unique[e].task ? D(t.unique[e].state) : 2003 == t.unique[e].task ? A(t.unique[e]) : 2007 == t.unique[e].task ? O(t.unique[e].data) : 2005 == t.unique[e].task ? j(t.unique[e].data) : 2e3 == t.unique[e].task ? u(t.unique[e].data) : 3001 == t.unique[e].task && b(t.unique[e].rank)
    }), setInterval(U, 100), K("//api.adinplay.com/player/v2/LGN/s0urce.io/player.min.js", J)
}(window, document, jQuery);
