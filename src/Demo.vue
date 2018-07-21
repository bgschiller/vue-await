<template>
  <div id="app">
    <h1>vue-await</h1>
    <p>
      Render blocks based on the status of a Promise
    </p>
    <div class="controls">
      <button @click="kickoff(resOrRej)">Start a {{seconds}} second timer</button>, then...
      <div class="resolve-or-reject">
        <label for="resolve">
          <input type="radio" id="resolve" value="resolve" v-model="resOrRej">
          Resolve
        </label>

        <label for="reject">
          <input type="radio" id="reject" value="reject" v-model="resOrRej">
          Reject
        </label>
      </div>
    </div>

    <Await :p="prom">
      <p>Waiting...</p>
      <p slot="then" slot-scope="[result]">Success: {{result}}</p>
      <p slot="catch" slot-scope="[error]">Error: {{error}}</p>
      <p slot="none">(no timer running)</p>
    </Await>

    <div class="clear">
      <button @click="prom = null">Clear</button>
    </div>

    <div class="code" v-html="code">
    </div>
    <footer>
      Learn more at
      <a href="https://github.com/bgschiller/vue-await">
        github.com/bgschiller/vue-await
      </a>
    </footer>
  </div>
</template>

<script>
import Await from "./Await.vue";

const code = `<div class="syntax"><pre><span></span> <span class="p">&lt;</span><span class="nt">Await</span> <span class="na">:p</span><span class="o">=</span><span class="s">"prom"</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>Waiting...<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">p</span> <span class="na">slot</span><span class="o">=</span><span class="s">"then"</span> <span class="na">slot-scope</span><span class="o">=</span><span class="s">"[result]"</span><span class="p">&gt;</span>
    Success: {{result}}
  <span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">p</span> <span class="na">slot</span><span class="o">=</span><span class="s">"catch"</span> <span class="na">slot-scope</span><span class="o">=</span><span class="s">"[error]"</span><span class="p">&gt;</span>
    Error: {{error}}
  <span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
  <span class="p">&lt;</span><span class="nt">p</span> <span class="na">slot</span><span class="o">=</span><span class="s">"none"</span><span class="p">&gt;</span>
    (no timer running)
  <span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">Await</span><span class="p">&gt;</span>
</pre></div>`;

export default {
  name: "app",
  components: {
    Await
  },
  data() {
    return {
      resOrRej: "resolve",
      prom: null,
      milliseconds: 3000,
      code
    };
  },
  methods: {
    kickoff() {
      this.prom = new Promise((res, rej) => {
        const { func, value } =
          this.resOrRej === "resolve"
            ? { func: res, value: "everything worked out!" }
            : { func: rej, value: "uh, oh..." };
        setTimeout(() => func(value), this.milliseconds);
      });
    }
  },
  computed: {
    seconds() {
      return this.milliseconds / 1000;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;
}

.controls {
  margin: 30px;
}
.clear {
  margin-bottom: 30px;
}
.resolve-or-reject {
  margin-top: 15px;
}
.resolve-or-reject label {
  margin: auto 10px;
}
div.code {
  width: 100%;
}
pre {
  width: 380px;
  margin: 0 auto;
  text-align: left;
  font-size: 16px;
}

html {
  height: 100%;
  box-sizing: border-box;
}

body {
  position: relative;
  margin: 0;
  padding-bottom: 7rem;
  min-height: calc(100% - 7rem);
}
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 2rem;
}

/* with thanks to pygments xcode theme */
pre .hll {
  background-color: #ffffcc;
}
pre {
  background: #f0f0f0;
}
pre .c {
  color: #60a0b0;
  font-style: italic;
} /* Comment */
pre .err {
  border: 1px solid #ff0000;
} /* Error */
pre .k {
  color: #007020;
  font-weight: bold;
} /* Keyword */
pre .o {
  color: #666666;
} /* Operator */
pre .ch {
  color: #60a0b0;
  font-style: italic;
} /* Comment.Hashbang */
pre .cm {
  color: #60a0b0;
  font-style: italic;
} /* Comment.Multiline */
pre .cp {
  color: #007020;
} /* Comment.Preproc */
pre .cpf {
  color: #60a0b0;
  font-style: italic;
} /* Comment.PreprocFile */
pre .c1 {
  color: #60a0b0;
  font-style: italic;
} /* Comment.Single */
pre .cs {
  color: #60a0b0;
  background-color: #fff0f0;
} /* Comment.Special */
pre .gd {
  color: #a00000;
} /* Generic.Deleted */
pre .ge {
  font-style: italic;
} /* Generic.Emph */
pre .gr {
  color: #ff0000;
} /* Generic.Error */
pre .gh {
  color: #000080;
  font-weight: bold;
} /* Generic.Heading */
pre .gi {
  color: #00a000;
} /* Generic.Inserted */
pre .go {
  color: #888888;
} /* Generic.Output */
pre .gp {
  color: #c65d09;
  font-weight: bold;
} /* Generic.Prompt */
pre .gs {
  font-weight: bold;
} /* Generic.Strong */
pre .gu {
  color: #800080;
  font-weight: bold;
} /* Generic.Subheading */
pre .gt {
  color: #0044dd;
} /* Generic.Traceback */
pre .kc {
  color: #007020;
  font-weight: bold;
} /* Keyword.Constant */
pre .kd {
  color: #007020;
  font-weight: bold;
} /* Keyword.Declaration */
pre .kn {
  color: #007020;
  font-weight: bold;
} /* Keyword.Namespace */
pre .kp {
  color: #007020;
} /* Keyword.Pseudo */
pre .kr {
  color: #007020;
  font-weight: bold;
} /* Keyword.Reserved */
pre .kt {
  color: #902000;
} /* Keyword.Type */
pre .m {
  color: #40a070;
} /* Literal.Number */
pre .s {
  color: #4070a0;
} /* Literal.String */
pre .na {
  color: #4070a0;
} /* Name.Attribute */
pre .nb {
  color: #007020;
} /* Name.Builtin */
pre .nc {
  color: #0e84b5;
  font-weight: bold;
} /* Name.Class */
pre .no {
  color: #60add5;
} /* Name.Constant */
pre .nd {
  color: #555555;
  font-weight: bold;
} /* Name.Decorator */
pre .ni {
  color: #d55537;
  font-weight: bold;
} /* Name.Entity */
pre .ne {
  color: #007020;
} /* Name.Exception */
pre .nf {
  color: #06287e;
} /* Name.Function */
pre .nl {
  color: #002070;
  font-weight: bold;
} /* Name.Label */
pre .nn {
  color: #0e84b5;
  font-weight: bold;
} /* Name.Namespace */
pre .nt {
  color: #062873;
  font-weight: bold;
} /* Name.Tag */
pre .nv {
  color: #bb60d5;
} /* Name.Variable */
pre .ow {
  color: #007020;
  font-weight: bold;
} /* Operator.Word */
pre .w {
  color: #bbbbbb;
} /* Text.Whitespace */
pre .mb {
  color: #40a070;
} /* Literal.Number.Bin */
pre .mf {
  color: #40a070;
} /* Literal.Number.Float */
pre .mh {
  color: #40a070;
} /* Literal.Number.Hex */
pre .mi {
  color: #40a070;
} /* Literal.Number.Integer */
pre .mo {
  color: #40a070;
} /* Literal.Number.Oct */
pre .sa {
  color: #4070a0;
} /* Literal.String.Affix */
pre .sb {
  color: #4070a0;
} /* Literal.String.Backtick */
pre .sc {
  color: #4070a0;
} /* Literal.String.Char */
pre .dl {
  color: #4070a0;
} /* Literal.String.Delimiter */
pre .sd {
  color: #4070a0;
  font-style: italic;
} /* Literal.String.Doc */
pre .s2 {
  color: #4070a0;
} /* Literal.String.Double */
pre .se {
  color: #4070a0;
  font-weight: bold;
} /* Literal.String.Escape */
pre .sh {
  color: #4070a0;
} /* Literal.String.Heredoc */
pre .si {
  color: #70a0d0;
  font-style: italic;
} /* Literal.String.Interpol */
pre .sx {
  color: #c65d09;
} /* Literal.String.Other */
pre .sr {
  color: #235388;
} /* Literal.String.Regex */
pre .s1 {
  color: #4070a0;
} /* Literal.String.Single */
pre .ss {
  color: #517918;
} /* Literal.String.Symbol */
pre .bp {
  color: #007020;
} /* Name.Builtin.Pseudo */
pre .fm {
  color: #06287e;
} /* Name.Function.Magic */
pre .vc {
  color: #bb60d5;
} /* Name.Variable.Class */
pre .vg {
  color: #bb60d5;
} /* Name.Variable.Global */
pre .vi {
  color: #bb60d5;
} /* Name.Variable.Instance */
pre .vm {
  color: #bb60d5;
} /* Name.Variable.Magic */
pre .il {
  color: #40a070;
} /* Literal.Number.Integer.Long */
.syntax pre .hll {
  background-color: #ffffcc;
}
.syntax pre {
  background: #ffffff;
}
.syntax pre .c {
  color: #177500;
} /* Comment */
.syntax pre .err {
  color: #000000;
} /* Error */
.syntax pre .k {
  color: #a90d91;
} /* Keyword */
.syntax pre .l {
  color: #1c01ce;
} /* Literal */
.syntax pre .n {
  color: #000000;
} /* Name */
.syntax pre .o {
  color: #000000;
} /* Operator */
.syntax pre .ch {
  color: #177500;
} /* Comment.Hashbang */
.syntax pre .cm {
  color: #177500;
} /* Comment.Multiline */
.syntax pre .cp {
  color: #633820;
} /* Comment.Preproc */
.syntax pre .cpf {
  color: #177500;
} /* Comment.PreprocFile */
.syntax pre .c1 {
  color: #177500;
} /* Comment.Single */
.syntax pre .cs {
  color: #177500;
} /* Comment.Special */
.syntax pre .kc {
  color: #a90d91;
} /* Keyword.Constant */
.syntax pre .kd {
  color: #a90d91;
} /* Keyword.Declaration */
.syntax pre .kn {
  color: #a90d91;
} /* Keyword.Namespace */
.syntax pre .kp {
  color: #a90d91;
} /* Keyword.Pseudo */
.syntax pre .kr {
  color: #a90d91;
} /* Keyword.Reserved */
.syntax pre .kt {
  color: #a90d91;
} /* Keyword.Type */
.syntax pre .ld {
  color: #1c01ce;
} /* Literal.Date */
.syntax pre .m {
  color: #1c01ce;
} /* Literal.Number */
.syntax pre .s {
  color: #c41a16;
} /* Literal.String */
.syntax pre .na {
  color: #836c28;
} /* Name.Attribute */
.syntax pre .nb {
  color: #a90d91;
} /* Name.Builtin */
.syntax pre .nc {
  color: #3f6e75;
} /* Name.Class */
.syntax pre .no {
  color: #000000;
} /* Name.Constant */
.syntax pre .nd {
  color: #000000;
} /* Name.Decorator */
.syntax pre .ni {
  color: #000000;
} /* Name.Entity */
.syntax pre .ne {
  color: #000000;
} /* Name.Exception */
.syntax pre .nf {
  color: #000000;
} /* Name.Function */
.syntax pre .nl {
  color: #000000;
} /* Name.Label */
.syntax pre .nn {
  color: #000000;
} /* Name.Namespace */
.syntax pre .nx {
  color: #000000;
} /* Name.Other */
.syntax pre .py {
  color: #000000;
} /* Name.Property */
.syntax pre .nt {
  color: #000000;
} /* Name.Tag */
.syntax pre .nv {
  color: #000000;
} /* Name.Variable */
.syntax pre .ow {
  color: #000000;
} /* Operator.Word */
.syntax pre .mb {
  color: #1c01ce;
} /* Literal.Number.Bin */
.syntax pre .mf {
  color: #1c01ce;
} /* Literal.Number.Float */
.syntax pre .mh {
  color: #1c01ce;
} /* Literal.Number.Hex */
.syntax pre .mi {
  color: #1c01ce;
} /* Literal.Number.Integer */
.syntax pre .mo {
  color: #1c01ce;
} /* Literal.Number.Oct */
.syntax pre .sa {
  color: #c41a16;
} /* Literal.String.Affix */
.syntax pre .sb {
  color: #c41a16;
} /* Literal.String.Backtick */
.syntax pre .sc {
  color: #2300ce;
} /* Literal.String.Char */
.syntax pre .dl {
  color: #c41a16;
} /* Literal.String.Delimiter */
.syntax pre .sd {
  color: #c41a16;
} /* Literal.String.Doc */
.syntax pre .s2 {
  color: #c41a16;
} /* Literal.String.Double */
.syntax pre .se {
  color: #c41a16;
} /* Literal.String.Escape */
.syntax pre .sh {
  color: #c41a16;
} /* Literal.String.Heredoc */
.syntax pre .si {
  color: #c41a16;
} /* Literal.String.Interpol */
.syntax pre .sx {
  color: #c41a16;
} /* Literal.String.Other */
.syntax pre .sr {
  color: #c41a16;
} /* Literal.String.Regex */
.syntax pre .s1 {
  color: #c41a16;
} /* Literal.String.Single */
.syntax pre .ss {
  color: #c41a16;
} /* Literal.String.Symbol */
.syntax pre .bp {
  color: #5b269a;
} /* Name.Builtin.Pseudo */
.syntax pre .fm {
  color: #000000;
} /* Name.Function.Magic */
.syntax pre .vc {
  color: #000000;
} /* Name.Variable.Class */
.syntax pre .vg {
  color: #000000;
} /* Name.Variable.Global */
.syntax pre .vi {
  color: #000000;
} /* Name.Variable.Instance */
.syntax pre .vm {
  color: #000000;
} /* Name.Variable.Magic */
.syntax pre .il {
  color: #1c01ce;
} /* Literal.Number.Integer.Long */
</style>
