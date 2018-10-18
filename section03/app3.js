Vue.component('card', {

    props: ['title','content'],
    template: `
    <div class="card">
         <div class="card-body">
            <h3 class="card-title"> {{ title }}</h3>
        <div class="card-text">
            {{ content }}    
        </div>

        <button @click="deleteArticle" class="btn btn-danger btn-sm"> Delete Me</button>
        </div>
    </div>
    `
    ,

    methods: {
        deleteArticle() {
            this.$emit(`delete-article`, this.title)
        }
    }


});

new Vue({
el: '#app',
data: {
    articles:[{
        title: 'What is Vue.js?',
        content:'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.'
    },{
        title: 'Getting Started',
        content:'The easiest way to try out Vue.js is using the JSFiddle Hello World example. Feel free to open it in another tab and follow along as we go through some basic examples. ' 
    },{
        title: 'Declarative Rendering',
        content:'At the core of Vue.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:'
    }]
    },
    methods: {
        removeArticle(event){
        this.articles = this.articles.filter(article => article.title !== event)
        }
    }

});