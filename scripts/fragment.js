"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.lsfiles = exports.isEmptyContent = void 0;
var fs_1 = require("fs");
var child_process_1 = require("child_process");
var path_1 = require("path");
var args = process.argv.slice(2);
if (args.length === 0) {
    process.exit(0);
}
var prettierobj = function (obj) {
    switch (typeof (obj)) {
        case 'string': {
            console.log(JSON.stringify(JSON.parse(obj), null, 2));
            break;
        }
        case 'object': {
            console.log(JSON.stringify(obj, null, 2));
            break;
        }
        default:
            console.log("not string or object :{obj}");
            break;
    }
};
var fragmentfile = path_1.posix.join(process.cwd().replace(/\\/g, '/'), args[0] + '-Fragments.md');
console.log(fragmentfile);
var isEmptyContent = function (path) {
    if ((0, fs_1.existsSync)(path) && (0, fs_1.readFileSync)(path).length === 0) {
        return true;
    }
    ;
    return false;
};
exports.isEmptyContent = isEmptyContent;
var write = function (str) {
    (0, fs_1.appendFileSync)(fragmentfile, str + '\n');
};
var contentnormalize = function (content) {
    var e_1, _a, e_2, _b, e_3, _c;
    try {
        for (var _d = __values(content.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
            var _f = __read(_e.value, 2), i = _f[0], fragment = _f[1];
            if (i === 0 && !(0, exports.isEmptyContent)(fragmentfile)) {
                (0, fs_1.unlinkSync)(fragmentfile);
            }
            ;
            try {
                for (var _g = (e_2 = void 0, __values(fragment.frags)), _h = _g.next(); !_h.done; _h = _g.next()) {
                    var j = _h.value;
                    try {
                        for (var _j = (e_3 = void 0, __values(j.text.split('\n').entries())), _k = _j.next(); !_k.done; _k = _j.next()) {
                            var _l = __read(_k.value, 2), k = _l[0], line = _l[1];
                            w: {
                                console.log({ k: k });
                                switch (k) {
                                    case 0: {
                                        var title = line.trim().substr(3, line.length).trim();
                                        if (title.length !== 0) {
                                            write(title);
                                            write("> ".concat(fragment.filename.replace(process.cwd() + '\\', '').replace(/\\/g, '/'), ":").concat(j.lineNumber));
                                            break;
                                        }
                                        console.log(JSON.stringify(title));
                                        break w;
                                    }
                                    default: {
                                        if (line.trim().substr(3, line.length).trim() === '') {
                                            break;
                                        }
                                        write(line.trim().substr(3, line.length).trim());
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_k && !_k.done && (_c = _j["return"])) _c.call(_j);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_h && !_h.done && (_b = _g["return"])) _b.call(_g);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
var lsfiles = function () {
    var e_4, _a;
    var content = [];
    var comp = Object.create(null);
    comp.frags = [];
    var multiline = '-U';
    var jsonoutput = '--json';
    var regex = String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["-P '(?<=^|\n)(?P<i>s*)/*\\.*(\nk<i>|*|.*)+\nk<i>\\*/'"], ["-P '(?<=^|\\n)(?P<i>\\s*)/\\*\\\\.*(\\n\\k<i>\\|\\*\\|.*)+\\n\\k<i>\\\\\\*/'"])));
    var ignoremdorg = "-g '!*.md' -g '!*.org' -g '!scripts/fragment.ts'";
    var ignorereult = "-g '!**/Fragments.md'";
    var workspace = process.cwd();
    var run = "rg ".concat(jsonoutput, " ").concat(multiline, " ").concat(regex, " ").concat(ignoremdorg, " ").concat(ignorereult, " ").concat(workspace, " ");
    var re = (0, child_process_1.execSync)(run, { shell: 'pwsh', encoding: 'utf-8' });
    var err;
    try {
        try {
            for (var _b = __values(re.split('\n')), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                err = i;
                prettierobj(i);
                if (i === '' || i === '\r') {
                    break;
                }
                ;
                var ctx = JSON.parse(i);
                if ((ctx === null || ctx === void 0 ? void 0 : ctx.type) === 'summary') {
                    prettierobj(content);
                    contentnormalize(content);
                    break;
                }
                if ((ctx === null || ctx === void 0 ? void 0 : ctx.type) === 'begin') {
                    comp.filename = ctx.data.path.text;
                }
                if ((ctx === null || ctx === void 0 ? void 0 : ctx.type) === 'match') {
                    comp.frags.push({ text: ctx.data.lines.text, lineNumber: ctx.data.line_number });
                }
                if ((ctx === null || ctx === void 0 ? void 0 : ctx.type) === 'end') {
                    content.push(Object.assign({}, comp));
                    comp.filename = '';
                    comp.frags = [];
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
    catch (error) {
        if (error.message.includes('JSON')) {
            console.log('JSON:', JSON.stringify(err));
        }
        else {
        }
    }
};
exports.lsfiles = lsfiles;
(0, exports.lsfiles)();
var templateObject_1;
