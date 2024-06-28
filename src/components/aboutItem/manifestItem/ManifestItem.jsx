import React from 'react'
import './manifestItem.css'

const ManifestItem = () => {
    return (
        <div className='manifest'>
            <h1>Нижегородское IT-сообщество</h1>
            <p>it52 — это некоммерческое сообщество энтузиастов, которые думают, что могут сделать жизнь нижегородского айтишника немного лучше. Мы помогаем организовывать профильные мероприятия, ведём афишу событий, курируем несколько чатиков в телеграме и групп в соцсетях, и кажется, что у нас получается.</p>
            <h2>Манифест</h2>
            <ul>
                <li style={{ listStyleType: 'disc' }}>Мы выступаем за открытое распространение знаний для всех и каждого.</li>
                <li style={{ listStyleType: 'disc' }}>Мы выступаем за общество, которое продвигает вежливость в общении, уважение к человеческому достоинству и право на свободу мысли.</li>
                <li style={{ listStyleType: 'disc' }}>Мы выступаем за общество, которое поддерживает критическое мышление, аргументированные дискуссии, распространение знаний и достоверность фактов.</li>
                <li style={{ listStyleType: 'disc' }}>Мы выступаем за взаимодействие, которое способствует сотрудничеству между различными сообществами ради общего блага.</li>
            </ul>
            <h2>Наши принципы</h2>
            <ul>
                <li style={{ listStyleType: 'decimal' }}>Взаимодействие - это неотъемлемая часть современной жизни, ключевой компонент в образовании, общении, сотрудничестве, бизнесе, развлечении и структуре общества в целом.</li>
                <li style={{ listStyleType: 'decimal' }}>Сообщества должны быть общественными ресурсами, которые должны оставаться открытыми и доступными.</li>
                <li style={{ listStyleType: 'decimal' }}>Люди должны иметь возможность формировать сообщества и свое пребывание в них.</li>
                <li style={{ listStyleType: 'decimal' }}>Прозрачные процессы способствуют сотрудничеству, повышают ответственность и доверие.</li>
                <li style={{ listStyleType: 'decimal' }}>Коммерческое участие в развитии сообществ дает большую выгоду; при этом важно соблюдать баланс между коммерческим доходом и общественной пользой</li>
            </ul>
        </div>
    )
}

export default ManifestItem