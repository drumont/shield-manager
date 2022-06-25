import utils from "./utils/utils";
import { Context } from "@/plugins/shield/models/context";

import moment from 'moment'

const shieldPlugin = {

    install(Vue: any, options: any) {
        const context = new Context(options)


        Vue.mixin({
            created() {
                utils.saveToken(context)
            }
        });

        Vue.prototype.$shield = function() {
            return context.getContext().token
        }

        Vue.prototype.$user = function() {
            return context.getUser()
        }

        Vue.prototype.$isAuth = function() {
            let now = moment().unix();
            return now < context.getExpiresIn();
        }
    },

};

export default shieldPlugin;
