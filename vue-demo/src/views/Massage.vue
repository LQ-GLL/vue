<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${id}?id=${m.id}`">{{m.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr>
    <router-view />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: []
      }
    },

    mounted () {
      setTimeout(() => {
        const message = [
          {id: 1, title: 'message001'},
          {id: 3, title: 'message003'},
          {id: 5, title: 'message005'},
        ]
        this.messages = messages
      },500)
    },

    methods: {
      pushShow (id) {
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow (id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>
