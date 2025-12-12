const books = [
    { title: 'Ведьмак. Последнее желание', author: 'Анджей Сапковский', genre: 'фэнтези', tone: 'динамичное', age: '16+', size: 'средние', tags: ['магия', 'судьба', 'монстры'], heroes: ['Геральт', 'Йеннифэр'], summary: 'Сборник рассказов о ведьмаке Геральте, который балансирует между человеческим и монструозным мирами.' },
    { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', genre: 'классика', tone: 'романтичное', age: '16+', size: 'длинные', tags: ['Москва', 'сатира', 'дьявол'], heroes: ['Воланд', 'Маргарита'], summary: 'Роман о любви, философии и сатире, переплетающий библейскую и советскую реальности.' },
    { title: 'Три товарища', author: 'Эрих Мария Ремарк', genre: 'классика', tone: 'мрачное', age: '16+', size: 'средние', tags: ['дружба', 'потери', 'любовь'], heroes: ['Робби', 'Патриция'], summary: 'История дружбы и надежды в послевоенной Германии.' },
    { title: 'Дюна', author: 'Фрэнк Герберт', genre: 'научная фантастика', tone: 'динамичное', age: '16+', size: 'длинные', tags: ['пески', 'политика', 'экология'], heroes: ['Пол Атрейдес', 'Леди Джессика'], summary: 'Эпопея о борьбе за власть над планетой Арракис и уникальной пряностью меланж.' },
    { title: '451° по Фаренгейту', author: 'Рэй Брэдбери', genre: 'научная фантастика', tone: 'мрачное', age: '12+', size: 'средние', tags: ['антиутопия', 'цензура', 'книги'], heroes: ['Гай Монтэг'], summary: 'История пожарного, который начинает сомневаться в правильности сжигания книг.' },
    { title: 'Шерлок Холмс: Этюд в багровых тонах', author: 'Артур Конан Дойл', genre: 'детектив', tone: 'динамичное', age: '12+', size: 'короткие', tags: ['расследование', 'лондон', 'логика'], heroes: ['Шерлок Холмс', 'Доктор Ватсон'], summary: 'Первое дело легендарного дуэта, где раскрывается гений дедукции Холмса.' },
    { title: 'Пикник на обочине', author: 'Стругацкие', genre: 'научная фантастика', tone: 'мрачное', age: '16+', size: 'средние', tags: ['зона', 'аномалии', 'сталкер'], heroes: ['Редрик Шухарт'], summary: 'Постапокалиптическая история о сталкерах, проникающих в таинственную Зону.' },
    { title: 'Сияние', author: 'Стивен Кинг', genre: 'ужасы', tone: 'мрачное', age: '18+', size: 'средние', tags: ['отель', 'психология', 'мистика'], heroes: ['Джек Торранс', 'Дэнни'], summary: 'Семья Торрансов сталкивается с темнотой старого отеля и собственных страхов.' },
    { title: 'Хроники Нарнии', author: 'Клайв Льюис', genre: 'фэнтези', tone: 'вдохновляющее', age: '12+', size: 'средние', tags: ['магия', 'дети', 'добро'], heroes: ['Люси', 'Аслан'], summary: 'Дети попадают в волшебный мир и учатся отстаивать добро и веру.' },
    { title: 'Маленький принц', author: 'Антуан де Сент-Экзюпери', genre: 'классика', tone: 'вдохновляющее', age: '0+', size: 'короткие', tags: ['философия', 'путешествия', 'дружба'], heroes: ['Принц', 'Лис'], summary: 'Сказка-притча о смысле жизни, дружбе и ответственности за приручённых.' },
    { title: 'Ночной дозор', author: 'Сергей Лукьяненко', genre: 'фэнтези', tone: 'динамичное', age: '16+', size: 'длинные', tags: ['Москва', 'магия', 'свет и тьма'], heroes: ['Антон Городецкий'], summary: 'Битва Светлых и Тёмных магов за баланс в современном городе.' },
    { title: 'Метро 2033', author: 'Дмитрий Глуховский', genre: 'научная фантастика', tone: 'мрачное', age: '18+', size: 'длинные', tags: ['постапокалипсис', 'метро', 'выживание'], heroes: ['Артьом'], summary: 'Путешествие по постапокалиптическому метро Москвы с поиском спасения человечества.' }
];

const heroes = [
    { name: 'Геральт из Ривии', book: 'Ведьмак', trait: 'Циничный, но честный охотник на чудовищ.', focus: 'Моральные выборы и кодекс Ведьмаков.', tone: 'динамичное' },
    { name: 'Маргарита', book: 'Мастер и Маргарита', trait: 'Смелая и преданная, заключает сделку ради любви.', focus: 'Мотив жертвы и свободы.', tone: 'романтичное' },
    { name: 'Пол Атрейдес', book: 'Дюна', trait: 'Стратег и мессия пустыни.', focus: 'Политика, власть и экологический выбор.', tone: 'динамичное' },
    { name: 'Гай Монтэг', book: '451° по Фаренгейту', trait: 'Пожарный, который решает сохранить книги.', focus: 'Ценность знаний и свободы мысли.', tone: 'мрачное' },
    { name: 'Шерлок Холмс', book: 'Этюд в багровых тонах', trait: 'Детектив с гениальной дедукцией.', focus: 'Логика, факты и наблюдательность.', tone: 'динамичное' },
    { name: 'Маленький принц', book: 'Маленький принц', trait: 'Чистый взгляд на мир и ответственность.', focus: 'Дружба и поиск смысла.', tone: 'вдохновляющее' }
];

const authors = [
    { name: 'Анджей Сапковский', bio: 'Создатель вселенной Ведьмака, смешал славянский фольклор и мрачное фэнтези.', themes: ['антропология', 'мифология', 'ирония'] },
    { name: 'Михаил Булгаков', bio: 'Русский писатель и драматург, мастер магического реализма.', themes: ['сатира', 'любовь', 'свобода'] },
    { name: 'Фрэнк Герберт', bio: 'Автор «Дюны», исследовал экологию и политику будущего.', themes: ['экология', 'политика', 'религия'] },
    { name: 'Артур Конан Дойл', bio: 'Британский писатель, подаривший миру Шерлока Холмса.', themes: ['логика', 'приключения', 'дружба'] }
];

const sampleQuiz = [
    { book: 'Дюна', question: 'Что добывают на планете Арракис?', options: ['Золото', 'Воду', 'Пряность меланж', 'Кристаллы'], answer: 'Пряность меланж' },
    { book: 'Мастер и Маргарита', question: 'Кто сопровождает Воланда?', options: ['Бегемот', 'Дракон', 'Белая кошка', 'Фагот'], answer: 'Бегемот' },
    { book: '451° по Фаренгейту', question: 'Почему книги сжигают?', options: ['Заражают болезнями', 'Чтобы контролировать мысли', 'Содержат тайные карты', 'Пачкают руки'], answer: 'Чтобы контролировать мысли' }
];

const elements = {
    genreFilter: document.getElementById('genre-filter'),
    toneFilter: document.getElementById('tone-filter'),
    ageFilter: document.getElementById('age-filter'),
    searchInput: document.getElementById('search-input'),
    searchClear: document.getElementById('search-clear'),
    searchResults: document.getElementById('search-results'),
    recList: document.getElementById('rec-list'),
    prefForm: document.getElementById('pref-form'),
    prefGenres: document.getElementById('pref-genres'),
    prefSize: document.getElementById('pref-size'),
    heroList: document.getElementById('hero-list'),
    authorList: document.getElementById('author-list'),
    quizBody: document.getElementById('quiz-body'),
    quizFeedback: document.getElementById('quiz-feedback'),
    quizTitle: document.getElementById('quiz-title'),
    nextQuestion: document.getElementById('next-question'),
    questionForm: document.getElementById('question-form'),
    heroStats: document.getElementById('stat-heroes'),
    bookStats: document.getElementById('stat-books'),
    testStats: document.getElementById('stat-tests'),
    chipList: document.getElementById('live-tags'),
    overlay: document.getElementById('modal-overlay'),
    tabLogin: document.getElementById('tab-login'),
    tabRegister: document.getElementById('tab-register'),
    loginForm: document.getElementById('login-form'),
    registerForm: document.getElementById('register-form'),
    modalClose: document.getElementById('modal-close'),
    openLogin: document.getElementById('open-login'),
    openRegister: document.getElementById('open-register'),
    userChip: document.getElementById('user-chip'),
    userName: document.getElementById('user-name'),
    logout: document.getElementById('logout'),
};

typewriter(['тесты', 'рекомендации', 'герои', 'подборки']);

function typewriter(words) {
    const target = document.querySelector('.logo');
    let index = 0;
    let current = 0;
    setInterval(() => {
        const word = words[current];
        target.textContent = word.slice(0, index + 1) + '✦';
        index++;
        if (index === word.length) { current = (current + 1) % words.length; index = 0; }
    }, 260);
}

function populateGenres() {
    const genres = [...new Set(books.map(b => b.genre))];
    genres.forEach(g => {
        const option = document.createElement('option');
        option.value = g;
        option.textContent = g[0].toUpperCase() + g.slice(1);
        elements.genreFilter.appendChild(option);
    });
}

function renderChips() {
    const sample = ['безопасность данных', 'умный поиск', 'рекомендации', 'тесты', 'герои', 'писатели'];
    elements.chipList.innerHTML = '';
    sample.forEach(tag => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = tag;
        elements.chipList.appendChild(chip);
    });
}

function smartScore(book, query) {
    const q = query.toLowerCase();
    let score = 0;
    if (!q) score += 2;
    if (book.title.toLowerCase().includes(q)) score += 6;
    if (book.author.toLowerCase().includes(q)) score += 4;
    if (book.tags.some(t => t.toLowerCase().includes(q))) score += 3;
    if (book.heroes.some(h => h.toLowerCase().includes(q))) score += 3;
    if (book.summary.toLowerCase().includes(q)) score += 2;
    return score;
}

function applyFilters(book) {
    const genreOk = elements.genreFilter.value === 'all' || book.genre === elements.genreFilter.value;
    const toneOk = elements.toneFilter.value === 'all' || book.tone === elements.toneFilter.value;
    const ageOk = elements.ageFilter.value === 'all' || book.age === elements.ageFilter.value;
    return genreOk && toneOk && ageOk;
}

function renderSearch() {
    const query = elements.searchInput.value.trim();
    const results = books
        .filter(applyFilters)
        .map(book => ({ book, score: smartScore(book, query) }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 12);

    elements.searchResults.innerHTML = '';

    if (!results.length) {
        elements.searchResults.innerHTML = `<p class="muted">Ничего не найдено. Попробуйте изменить запрос или фильтры.</p>`;
        return;
    }

    results.forEach(({ book, score }) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="badge"><i class="fa-solid fa-wand-magic-sparkles"></i> рейтинг совпадения ${score}</div>
            <h3>${book.title}</h3>
            <div class="muted">${book.author} · ${book.genre} · ${book.age}</div>
            <p class="desc">${book.summary}</p>
            <div class="tags">${book.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        `;
        elements.searchResults.appendChild(card);
    });
}

function updateStats() {
    elements.bookStats.textContent = books.length;
    elements.heroStats.textContent = heroes.length;
    const stored = loadQuestions();
    elements.testStats.textContent = sampleQuiz.length + stored.length;
}

function renderRecommendations() {
    const preferredGenres = Array.from(elements.prefGenres.selectedOptions).map(o => o.value);
    const preferredSize = elements.prefSize.value;

    let list = [...books];
    if (preferredGenres.length) {
        list = list.filter(b => preferredGenres.includes(b.genre));
    }
    list = list.filter(b => b.size === preferredSize || preferredSize === 'средние');

    list = list.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 6);

    elements.recList.innerHTML = '';
    list.forEach(book => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p class="muted">${book.author}</p>
            <p class="desc">${book.summary}</p>
            <div class="tags">${book.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}</div>
        `;
        elements.recList.appendChild(card);
    });
}

function renderHeroes() {
    elements.heroList.innerHTML = '';
    heroes.forEach(h => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <h3>${h.name}</h3>
            <p class="muted">${h.book}</p>
            <p class="desc">${h.trait}</p>
            <div class="tag">Фокус: ${h.focus}</div>
        `;
        elements.heroList.appendChild(card);
    });
}

function renderAuthors() {
    elements.authorList.innerHTML = '';
    authors.forEach(a => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <strong>${a.name}</strong>
            <p class="muted">${a.bio}</p>
            <div class="tags">${a.themes.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        `;
        elements.authorList.appendChild(card);
    });
}

function loadQuestions() {
    const saved = localStorage.getItem('lv_questions');
    return saved ? JSON.parse(saved) : [];
}

function saveQuestion(question) {
    const updated = [...loadQuestions(), question];
    localStorage.setItem('lv_questions', JSON.stringify(updated));
    updateStats();
}

let currentQuestionIndex = 0;
let quizPool = [...sampleQuiz];

function buildQuizPool() {
    quizPool = [...sampleQuiz, ...loadQuestions()];
}

function renderQuestion() {
    if (!quizPool.length) {
        elements.quizBody.innerHTML = '<p class="muted">Добавьте вопросы, чтобы начать тест.</p>';
        return;
    }
    const q = quizPool[currentQuestionIndex % quizPool.length];
    elements.quizTitle.textContent = `${q.book} · вопрос ${currentQuestionIndex + 1}`;
    elements.quizBody.innerHTML = '';
    const title = document.createElement('h4');
    title.textContent = q.question;
    elements.quizBody.appendChild(title);

    q.options.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'option';
        label.innerHTML = `<input type="radio" name="quiz" value="${opt}"><span>${opt}</span>`;
        label.addEventListener('click', () => verifyAnswer(q, opt));
        elements.quizBody.appendChild(label);
    });
}

function verifyAnswer(question, choice) {
    const correct = choice === question.answer;
    elements.quizFeedback.textContent = correct ? 'Верно! Продолжай в том же духе.' : `Неверно. Правильный ответ: ${question.answer}`;
}

elements.nextQuestion.addEventListener('click', () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % Math.max(quizPool.length, 1);
    renderQuestion();
    elements.quizFeedback.textContent = '';
});

elements.questionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = {
        book: document.getElementById('q-book').value.trim(),
        question: document.getElementById('q-text').value.trim(),
        options: document.getElementById('q-options').value.split(',').map(o => o.trim()).filter(Boolean),
        answer: document.getElementById('q-answer').value.trim()
    };
    if (!question.book || !question.question || !question.options.length || !question.answer) return;
    saveQuestion(question);
    buildQuizPool();
    renderQuestion();
    elements.quizFeedback.textContent = 'Вопрос сохранён. Можно пройти тест!';
    e.target.reset();
});

function saveUsers(users) { localStorage.setItem('lv_users', JSON.stringify(users)); }
function loadUsers() { return JSON.parse(localStorage.getItem('lv_users') || '[]'); }
function saveCurrentUser(user) { localStorage.setItem('lv_current', JSON.stringify(user)); }
function loadCurrentUser() { const raw = localStorage.getItem('lv_current'); return raw ? JSON.parse(raw) : null; }

function showModal(tab = 'login') {
    elements.overlay.classList.remove('hidden');
    switchTab(tab);
}

function hideModal() { elements.overlay.classList.add('hidden'); }

function switchTab(tab) {
    const loginActive = tab === 'login';
    elements.tabLogin.classList.toggle('active', loginActive);
    elements.tabRegister.classList.toggle('active', !loginActive);
    elements.loginForm.classList.toggle('hidden', !loginActive);
    elements.registerForm.classList.toggle('hidden', loginActive);
}

elements.openLogin.addEventListener('click', () => showModal('login'));
elements.openRegister.addEventListener('click', () => showModal('register'));
elements.modalClose.addEventListener('click', hideModal);
elements.tabLogin.addEventListener('click', () => switchTab('login'));
elements.tabRegister.addEventListener('click', () => switchTab('register'));

function setUser(user) {
    if (user) {
        elements.userChip.classList.remove('hidden');
        elements.userName.textContent = user.name;
        elements.openLogin.style.display = 'none';
        elements.openRegister.style.display = 'none';
    } else {
        elements.userChip.classList.add('hidden');
        elements.openLogin.style.display = '';
        elements.openRegister.style.display = '';
    }
}

elements.registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    if (!name || !email || !password) return;
    const users = loadUsers();
    if (users.find(u => u.email === email)) {
        alert('Аккаунт с таким email уже есть.');
        return;
    }
    const user = { name, email, password, prefs: {} };
    users.push(user);
    saveUsers(users);
    saveCurrentUser(user);
    setUser(user);
    hideModal();
});

elements.loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const user = loadUsers().find(u => u.email === email && u.password === password);
    if (!user) return alert('Неверные данные.');
    saveCurrentUser(user);
    setUser(user);
    hideModal();
});

elements.logout.addEventListener('click', () => {
    localStorage.removeItem('lv_current');
    setUser(null);
});

elements.prefForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = loadCurrentUser();
    if (user) {
        user.prefs = {
            genres: Array.from(elements.prefGenres.selectedOptions).map(o => o.value),
            size: elements.prefSize.value
        };
        const users = loadUsers().map(u => u.email === user.email ? user : u);
        saveUsers(users);
        saveCurrentUser(user);
    }
    renderRecommendations();
});

elements.searchInput.addEventListener('input', renderSearch);
elements.genreFilter.addEventListener('change', renderSearch);
elements.toneFilter.addEventListener('change', renderSearch);
elements.ageFilter.addEventListener('change', renderSearch);
elements.searchClear.addEventListener('click', () => { elements.searchInput.value = ''; renderSearch(); });

document.getElementById('cta-start').addEventListener('click', () => window.scrollTo({ top: document.getElementById('tests').offsetTop - 20, behavior: 'smooth' }));
document.getElementById('cta-search').addEventListener('click', () => window.scrollTo({ top: document.getElementById('search').offsetTop - 20, behavior: 'smooth' }));

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideModal();
});

function init() {
    populateGenres();
    renderChips();
    renderSearch();
    renderRecommendations();
    renderHeroes();
    renderAuthors();
    buildQuizPool();
    renderQuestion();
    updateStats();
    const user = loadCurrentUser();
    setUser(user);
}

init();
