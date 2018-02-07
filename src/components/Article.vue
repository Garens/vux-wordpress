<template>
	<div style="padding: 10px;">
		<card :header="{title: '22222' }">
            <p slot="content" class="card-padding">{{ ' 我用的是vux起的一个项目（移动端，基于vue的），因为是移动端的，需要在手机上测试，发现用http://localhost:8081/访问的挺好的，但是换到ip就访问不了，期初我以为是代理的原因，将电脑的代理给关掉了。还是不行，然后改为127.0.0.1访问，发现可以访问，用0.0.0.0访问也可以，就是ip不行。然后就各种google，百度。别人家的方法---都试了好多，发现没效（有点怀疑人生，怀疑是不是我电脑的问题），但是结果就在这，ip就是不可以访问！！！！' }}</p>
        </card>
	</div>
</template>

<script>
	import {
		Card
	} from 'vux'
	export default {
		name: 'article',
		data() {
			return {
				
			}
		},
		components: {
			Card
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.card-padding {
		padding: 15px;
	}
</style>

