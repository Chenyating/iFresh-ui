<template>
<div :class="classes">
    <span v-if="showTotal" class="total">共{{total}}条</span>
    <div class="page-item" @click="pre()">
        <if-icon type='left' size="25" />
    </div>
    <!-- 简单 -->
    <div v-if="simple" class="simple">
        <if-number v-model="currentPage"></if-number>
        <span>/</span>
        <span>{{Math.ceil(total/everyPageis)}}</span>
    </div>
    <!-- 默认 -->
    <div v-else>
        <div @click="changepage(i)" :class="i==currentPage?'now-page':'page-item'" v-for="(i,index) in pageNumber" :key="index">{{i}}</div>
    </div>
    <div class="page-item" @click="next()">
        <if-icon type='right' size="25" />
    </div>
    <if-select v-if="showSizer" v-model="everyPageis">
        <if-option v-for="item in everyPage" :value="item" :key="item">{{ item }}条/页</if-option>
    </if-select>
</div>
</template>

<script>
import ifSelect from '../../Select/src/index.vue'
import ifInput from '../../Input/src/index.vue'
const preCls = 'if-page'
export default {
    name: 'if-page',
    components: {
        ifSelect,
        ifInput
    },
    props: {
        circular: {
            type: Boolean,
            default: false
        },
        total: {
            type: Number,
            default: 100
        },
        current: {
            type: String,
            default: '1'
        },
        every: {
            type: Number,
            default: 10
        },
        showSizer: {
            type: Boolean,
            default: false
        },
        showTotal: {
            type: Boolean,
            default: false
        },
        simple: {
            type: Boolean,
            default: false
        },

    },
    data() {
        return {
            everyPageis: this.every,
            everyPage: [10, 20, 30, 40],
            currentPage: this.current,
        }
    },
    computed: {
        pageNumber() {
            var pageNumber = Math.ceil(this.total / this.everyPageis);
            // 页数小于6，显示页数
            if (pageNumber <= 6) {
                return pageNumber
            } else {
                if (this.currentPage <= 2 || this.currentPage >= pageNumber - 2) {
                    return [1, 2, 3, '…', pageNumber - 3, pageNumber - 2, pageNumber - 1, pageNumber]
                } else {
                    return ['…', this.currentPage - 1, this.currentPage, this.currentPage + 1, '…']
                }
            }
        },
        classes() {
            return [`${preCls}`, {
                [`${preCls}-simple`]: this.simple,
                [`${preCls}-circular`]: this.circular,
            }]
        }
    },
    methods: {
        changepage(num) {
            if (num == '…') {
                return
            }
            this.currentPage = num;
            this.$emit('change', this.currentPage);
        },
        pre() {
            if (this.currentPage == 1) {
                this.currentPage = 1;
            } else {
                this.currentPage--
            }
            this.currentPage = this.currentPage.toString();
            this.$emit('change', this.currentPage);
        },
        next() {
            if (this.currentPage == Math.ceil(this.total / this.everyPageis)) {
                this.currentPage = Math.ceil(this.total / this.everyPageis)
            } else {
                this.currentPage++
            }
            this.currentPage = this.currentPage.toString();
            this.$emit('change', this.currentPage);
        }
    }
}
</script>

<style lang="less">
@import './public/assets/style/index.less';

.if-page {
    .t-content();
    display: inline-flex;
    .if-select{
    height: 32px !important;
        .input{
                width: 100px !important;
                height: 32px !important;
            }
    }
}

.total {
    line-height: @line-height;
}

.page-item {
    display: inline-block;
    text-align: center;
    line-height: 30px;
    .border-all();
    .s-square(30px);
    border-radius: @border-radius;
    margin: @d-mini;
    margin-top: 0;
    cursor: pointer;
}

.now-page {
    .page-item();
    background: @c-primary;
    color: @white;
}

.if-page-circular {

    .page-item,
    .now-page {
        border-radius: 30px;
    }

}

.if-page-simple {
    .page-item {
        display: inline-block;
        text-align: center;
        line-height: 30px;
        border: solid 0px @white;
        .s-square(30px);
        border-radius: @border-radius;
        margin: 0;
        cursor: pointer;
    }

    .simple {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .t-content();
        width: 100px;

        span {
            margin: 0 @d-mini;
        }
    }

    .if-number {
        display: inline-block;
        text-align: center;
        .border-all();
        margin-right: @d-mini;
        border-radius: @border-radius;
        padding-left: @d-mini;
        cursor: pointer;
    }
}
</style>
