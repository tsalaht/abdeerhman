interface Feature {
    title: string;
    
    description2: string;
    description: string;
    description3?: string;
    description4?: string;
    description5?: string;
    description6?: string;

    imageSource: any; 
}
const data: Feature[] =[
    {
        title:'مميزات اخرى',
        description:'تميز بمميزات جديدة كل فترة!',
        description2:'أرسل تعابير جاهزة في دردشة الجلسة. ميز اسمك بوسام المشتركين. أولوية الدعم الفني. والمزيد من المميزات.',
        imageSource:require('../assets/crown-removebg-preview.png')
    },
    {
        title:' مزايا إضافية للدوريات',
        description:' مشاركات لا محدودة وخصومات اضافية.',
        description2:'   استمتع بمحاولات لا نهائية في الدوريات العامة. واحصل على خصم على تذاكر الدوريات.   ',
        imageSource:require('../assets/winner cup.png')
    },
    {
        title: '           لعب لا محدود     ',
        description:'     وفر وقتك وجهدك بالاشتراك معنا             ',
        description2:'   العب بدون إعلانات وبدون دفع بالألماس واكسب قطع الألماس في مشروع اليوم بدون إعلانات.   ',
        imageSource:require('../assets/infinity.png')
    },
    {
        title: '          ملكية وإدارة الجلسات   ',
        description:'     جلسة تتحكم في كل خصائصها من نوع اللعب ومستوى اللاعبين.           ',
        description2:'  اغلاق الجلسات بكلمة مرور.   ',
        imageSource:require('../assets/tarot card with crown.png'),
        description3:'  اختر ادنى مستوى للاعبين، سرعة اللعب.   ',
        description4:'          حدد اللعب المصنف أو الودي. حر أو محدود.   ',
        description5:'        يمكنك اسكات وطرد اللاعبين في الجلسات الودية',
    },
    {
        title: '          القطع والقيد    ',
        description:'     لعب احترافي وتنافسي يكسبك نقاط أكثر.          ',
        description2:'  لعب واقعي وحماسي. احترف فن القطع والتقييد لتكسب نقاط أكثر  ',
        imageSource:require('../assets/stacked plastic cards.png')
    },
]
export {data}