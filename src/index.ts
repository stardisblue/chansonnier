import forEach from 'lodash/forEach'
import chansonTemplate from './chansonTemplate';


function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

interface Chanson {
    title: string
    content: string
    author?: string
    date?: string
    url?: string
    colonnes?: number
}

ready(function () {
    const chansons: Chanson[] = window.chansons || []

    const main = document.querySelector('main')

    forEach(chansons, (chanson) => {

        chanson.content = chanson.content
            .replace('\\colonneSuivante', '<div class="colonne-suivante"></div>')
            .replace(/\\sauterLigne{(\d+)}/g, (ignore, nb: number) => {
                console.log(nb)
                return '<br/>'.repeat(nb - 1)
            })
            .replace(/\\choeur{([^}]+)}/g, '[$1]')
            .replace('\\bis', '(bis)')


        main.appendChild(chansonTemplate(chanson))
    })
})