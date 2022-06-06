window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
            // item.classList.add('hide');
            // item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].style.display = 'block';
        // tabContent[i].classList.add('show', 'fade');
        // tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('mouseover', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

});

//Other

// function func1(a, b, c) {
//     console.log(arguments);
//     console.log(typeof arguments);

//     console.log(arguments[0]);
//     // expected output: 1

//     console.log(arguments[1]);
//     // expected output: 2

//     console.log(arguments[2]);
//     // expected output: 3

//     console.log(arguments[3]);
//     // expected output: 4

//     console.log('объекты arguments js итерируемые ===========================');
//     for (let value of arguments) {
//         console.log(value);
//     }
//     console.log('===========================');

//     const arr = Array.from(arguments);
//     console.log(arr);
//     console.log(typeof arr);

// }

// func1(1, 2, 3, 4, 'word', {
//     a: 'apple'
// }, ['dog', 'cat'], undefined, null, NaN, false);

// // Ввод: натуральное число n
// // Вывод: количество простых чисел строго меньше n

// const n = 101; // натуральное число n > 1
// let arrBoolean = [];
// for (let i = 2; i < n; i++) {
//     arrBoolean[i] = true;
// }

// for (let i = 2; i * i <= (n - 1); i++) {
//     if (arrBoolean[i] === true) {
//         for (let j = i * i; j <= (n - 1); j += i) {
//             arrBoolean[j] = false;
//         }
//     }
// }

// let count = 0;
// for (let i = 2; i < n; i++) {
//     if (arrBoolean[i]) {
//         count++;
//         console.log(`Простое число: ${i}`);
//     }
// }
// console.log(`ВЫВОД: количество простых чисел строго меньше натурального ${n}: ${count}`);

// Вход: натуральное число n (n > 1).
// Выход: все простые числа от 2 до n.

// Пусть A — булевый массив, индексируемый числами от 2 до n,
// изначально заполненный значениями true.

//  для i := 2, 3, 4, ..., пока i * i ≤ n:
//   если A[i] = true:
//     для j := i * i, i * i + i, i * i + 2i, ..., пока j ≤ n:
//       A[j] := false

//  возвращаем: все числа i, для которых A[i] = true.