
import moment from 'moment'
import 'moment/locale/fr';


moment.locale('fr')
export default function (chanson) {
    const { title, author, url, content, date, colonnes, parskip } = chanson

    const section = document.createElement('section')
    section.classList.add('ma4--np')

    const h1 = document.createElement('h1')
    h1.classList.add('small-caps')
    h1.innerHTML = title
    section.appendChild(h1)

    const p = document.createElement('p')
    p.classList.add('f6', 'i')
    section.appendChild(p)

    if (author) {
        const authorSpan = document.createElement('span')
        authorSpan.classList.add('author')
        authorSpan.innerHTML = author + '. '
        p.appendChild(authorSpan)
    }

    if (date) {
        const dateSpan = document.createElement('em')
        dateSpan.classList.add('date')
        dateSpan.innerHTML = 'dernière modification le ' + moment(date).format('LLL') + '. '
        p.appendChild(dateSpan)
    }

    const permalien = document.createElement('a')
    permalien.href = url
    permalien.innerHTML = 'permalien'
    p.appendChild(permalien)

    const article = document.createElement('article')
    article.style.columnCount = colonnes
    article.classList.add('mv4')
    if (parskip) {
        article.classList.add('p-mt' + parskip)
    }
    article.innerHTML = content
    section.appendChild(article)

    return section
}