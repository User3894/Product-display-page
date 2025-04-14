document.addEventListener('DOMContentLoaded', () => {
    const appGrid = document.getElementById('appGrid');

    // --- بيانات التطبيقات ---
    // أضف تطبيقاتك هنا
    // استبدل الروابط والصور بالبيانات الفعلية
    const appsData = [
        {
            name: 'تطبيق الحضور والغياب',
            url: 'https://attendance-reg.netlify.app/', // رابط التطبيق الفعلي
            imageUrl: 'https://placehold.co/150x150/6a11cb/white?text=حضور' // رابط صورة الأيقونة أو الشعار
        },
        {
            name: 'لعبة أكس أو',
            url: 'https://tic-tac-game-now.netlify.app/',
            imageUrl: 'https://placehold.co/150x150/2575fc/white?text=مهام'
        },
        {
            name: 'حاسبة تقسيم الشبكة',
            url: 'https://calculate-the-ip-now.netlify.app/',
            imageUrl: 'https://placehold.co/150x150/ffb700/333?text=متجر'
        },
        {
            name: 'مدير المبيعات',
            url: 'https://resources-manager.netlify.app/',
            imageUrl: 'https://placehold.co/150x150/34a853/white?text=مدونة'
        },
        {
            name: 'مدير المشاريع',
            url: 'https://project-mag.netlify.app/',
            imageUrl: 'https://placehold.co/150x150/ea4335/white?text=حاسبة'
        },
         {
            name: 'قائمة المهام',
            url: 'https://to-do-list-pro1.netlify.app',
            imageUrl: 'https://placehold.co/150x150/7f8c8d/white?text=تحكم'
        }
        // ... أضف المزيد من التطبيقات هنا
    ];

    // --- توليد بطاقات التطبيقات ---
    if (appGrid) {
        appsData.forEach(app => {
            // إنشاء عنصر الرابط (البطاقة)
            const cardLink = document.createElement('a');
            cardLink.href = app.url;
            cardLink.classList.add('app-card');
            cardLink.target = '_blank'; // فتح في تبويب جديد
            cardLink.rel = 'noopener noreferrer'; // لأسباب أمنية
            cardLink.setAttribute('aria-label', `الانتقال إلى ${app.name}`); // للوصولية

            // إنشاء عنصر الصورة
            const img = document.createElement('img');
            img.src = app.imageUrl;
            img.alt = `شعار ${app.name}`;
            img.classList.add('app-icon');
            img.loading = 'lazy'; // تفعيل التحميل الكسول للصور

            // إنشاء عنصر اسم التطبيق
            const name = document.createElement('p');
            name.classList.add('app-name');
            name.textContent = app.name;

            // إضافة الصورة والاسم إلى البطاقة
            cardLink.appendChild(img);
            cardLink.appendChild(name);

            // إضافة البطاقة إلى الشبكة
            appGrid.appendChild(cardLink);
        });
    } else {
        console.error('لم يتم العثور على عنصر الشبكة #appGrid');
    }
});
