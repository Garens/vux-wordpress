<template>
	<div style="padding: 10px;">
		<card  v-if="article" :header="{title: article.title.rendered }">
			<div slot="content" class="card-padding">
				<cate-list :cate="article.categories" :pubDate="article.date" :author="article.author"></cate-list>
				<p slot="content" v-html="article.content.rendered"></p>
			</div>            
        </card>
		<p class="pagging">
			<span style="float: left;">
				<x-button mini><i class="fa fa-angle-left" aria-hidden="true"></i>上一篇</x-button>
			</span>
			<span style="float: right;">
				<x-button mini>下一篇<i class="fa fa-angle-right" aria-hidden="true"></i></x-button>
			</span>
		</p>
		<divider>我是有底线的</divider>
	</div>
</template>

<script>
	import {
		Card,Flexbox,FlexboxItem,Divider,XButton
	} from 'vux'
	import CateList from './CateList.vue';
	export default {
		name: 'article-cont',
		data() {
			return {
				article: null
			}
		},
		components: {
			Card,Flexbox,FlexboxItem,Divider,CateList,XButton
        },
        mounted() {
			this.$nextTick(() => {
				if(this.$route.query && this.$route.query.id) {
					const id = this.$route.query.id;
					this.initArticle(id);
				} else {
					this.$router.replace('/404');
				}
			})
			
        },
        methods: {
			async initArticle(id) {
				const res = await this.$http.get('/api/posts/' + id);
				console.log(res.data);
				if(res.status == 200) {
					this.article = res.data;
				}
			}
        },
        
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.card-padding {
		padding: 15px;
		padding-top: 5px;
	}
	.flex-box {
		padding-bottom: 10px;
		color: rgb(150, 150, 150);
		font-size: 14px;
		border-bottom: 1px solid #E5E5E5;
	}
	.flex-item i {
		padding: 0px 5px;
	}
	.pagging {
		padding: 10px 15px;
		height: 30px;
	}
	.pagging i {
		padding: 0px 5px;
	}
</style>

