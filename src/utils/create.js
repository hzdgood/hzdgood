import Vue from "vue";

export function create(components, props){
    let Ctor = Vue.extend(components);

    const vm = new Vue({
        render(h){
            return h(components,{props})
        }
    }).$mount()
    document.body.appendChild(vm.$el)

    const comp = vm.$children[0]
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp;
}