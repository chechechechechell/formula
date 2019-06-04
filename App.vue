<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		background-color: #f5f5f5;
		color: #000000;
	}
	.whCenter {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.wCenter {
		display: flex;
		justify-content: center;
	}
	
	.hCenter {
		display: flex;
		align-items: center;
	}
	button::after{ border: none;} 
	
</style>
