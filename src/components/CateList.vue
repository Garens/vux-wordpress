<template>
    <div style="padding: 5px 0px;">
        <flexbox class="flex-box">
            <flexbox-item :span="3">
                <div class="flex-item">
                    <i slot="icon" class="fa fa-bars"></i>{{cateName}}</div>
            </flexbox-item>
            <flexbox-item :span="6">
                <div class="flex-item">
                    <i slot="icon" class="fa fa-calendar"></i>{{time}}</div>
            </flexbox-item>
            <flexbox-item :span="3">
                <div class="flex-item">
                    <i slot="icon" class="fa fa-user"></i>{{userName}}</div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
    import {
        Flexbox,
        FlexboxItem
    } from "vux";
    import {
        mapActions,
        mapState,
        mapGetters
    } from "vuex";
    export default {
        name: "cateCom",
        data() {
            return {
                cateName: "",
                userName: "",
                time: ""
            };
        },
        props: ["cate", "pubDate", "author"],
        computed: {
            ...mapGetters({
                getCategories: "getCategories",
                getUsers: "getUsers"
            })
        },
        watch: {
            getCategories: function(newVal, oldVal) {
                this.initCate();
            },
            getUsers: function(newVal, oldVal) {
                this.initCate();
            },
        },
        components: {
            Flexbox,
            FlexboxItem
        },
        mounted() {
            this.initCate();
        },
        methods: {
            async initCate() {
                if (this.getCategories) {
                    this.getCategories.forEach(item => {
                        if (item.id == this.cate[0]) {
                            this.cateName = item.name;
                        }
                    });
                }
                if (this.getUsers) {
                    this.getUsers.forEach(item => {
                        if (item.id == this.author) {
                            this.userName = item.name;
                        }
                    });
                }
                this.time = this.pubDate.replace("T", " ");
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .flex-box {
        font-size: 14px;
        color: rgb(150, 150, 150);
        height: 30px;
        line-height: 30px;
        overflow: hidden;
    }
    .flex-box i {
        padding: 0px 5px;
    }
</style>

