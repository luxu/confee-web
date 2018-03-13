const install = Vue => {

    Object.defineProperty(Vue.prototype, '$loader', {
        
        get () {

            console.log(this)

            return {

                show() {

                    console.log(this)

                }
            }
        }
    })
}

// this.$loader.show()

// this.$loader.hide()

export default { install }