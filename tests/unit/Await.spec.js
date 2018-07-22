import { assert } from "chai";
import { mount } from "@vue/test-utils";
import Await from "@/Await.vue";
import { emptyPromise } from "./utils";

const TestCase = {
  name: "TestCase",
  props: ["p"],
  template: `
  <Await :p="p">
    <span class="loading" />
    <span slot="then" class="success" slot-scope="results">
      {{ results[0] }}
    </span>
    <span slot="catch" class="error" slot-scope="errs">
      {{ errs[0] }}
    </span>
    <span slot="none" class="none" />
  </Await>
  `,
  components: {
    Await
  }
};

describe("Await.vue", () => {
  it("renders awaiting promise slots", () => {
    const p = emptyPromise();
    const wrapper = mount(TestCase, {
      propsData: { p }
    });
    assert.equal(wrapper.findAll(".loading").length, 1);
  });

  it("renders failed promise slots", async () => {
    const wrapper = mount(TestCase, {
      propsData: { p: Promise.reject(42) }
    });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const errors = wrapper.findAll(".error");
    assert.equal(errors.length, 1);
    const error = errors.at(0);
    assert.equal(error.text(), "42");
  });

  it("renders success promise slots", async () => {
    const wrapper = mount(TestCase, {
      propsData: { p: Promise.resolve(35) }
    });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const success = wrapper.find(".success");
    assert.equal(success.text(), "35");
  });

  it("lifts non-promises", async () => {
    const wrapper = mount(TestCase, {
      propsData: { p: 12 }
    });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const success = wrapper.find(".success");
    assert.equal(success.text(), "12");
  });

  it("lifts even falsy non-thenables", async () => {
    const wrapper = mount(TestCase, {
      propsData: { p: 0 }
    });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const success = wrapper.find(".success");
    assert.equal(success.text(), "0");
  });

  it("re-renders upon promise resolve", async () => {
    const p = emptyPromise();
    const wrapper = mount(TestCase, {
      propsData: { p }
    });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    assert.equal(wrapper.findAll(".loading").length, 1);

    p.resolve(15);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    assert.equal(wrapper.find(".success").text(), "15");
  });

  it("re-renders upon promise change", async () => {
    const wrapper = mount(TestCase, {
      propsData: { p: Promise.resolve(81) }
    });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    assert.equal(wrapper.find(".success").text(), "81");

    wrapper.setProps({ p: Promise.reject(14) });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    assert.equal(wrapper.find(".error").text(), "14");
  });
});
