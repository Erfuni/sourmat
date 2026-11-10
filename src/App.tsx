import { useState } from 'react';

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-sourmat-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sourmat-orange rounded-lg flex items-center justify-center">
              <i className="fas fa-gem text-white text-lg"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide">SOURMAT</h1>
              <p className="text-[10px] text-gray-400 -mt-1">Source of Material</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <a href="#market" className="hover:text-sourmat-orange transition-colors">بازار مواد معدنی</a>
            <a href="#categories" className="hover:text-sourmat-orange transition-colors">دسته‌بندی‌ها</a>
            <a href="#equipment" className="hover:text-sourmat-orange transition-colors">ماشین‌آلات</a>
            <a href="#services" className="hover:text-sourmat-orange transition-colors">خدمات</a>
            <a href="#knowledge" className="hover:text-sourmat-orange transition-colors">مرکز دانش</a>
            <a href="#companies" className="hover:text-sourmat-orange transition-colors">شرکت‌ها</a>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-sm px-3 py-2 hover:text-sourmat-orange transition-colors">
              <i className="fas fa-search ml-1"></i> جست‌وجو
            </button>
            <button className="text-sm px-4 py-2 border border-gray-600 rounded-lg hover:border-sourmat-orange transition-colors">
              ورود / ثبت‌نام
            </button>
            <button className="text-sm px-4 py-2 bg-sourmat-orange text-white rounded-lg hover:bg-sourmat-orange-dark transition-colors font-medium">
              <i className="fas fa-plus ml-1"></i> ثبت آگهی
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-sourmat-gray-dark border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            <a href="#market" className="block text-sm py-2 hover:text-sourmat-orange">بازار مواد معدنی</a>
            <a href="#categories" className="block text-sm py-2 hover:text-sourmat-orange">دسته‌بندی‌ها</a>
            <a href="#equipment" className="block text-sm py-2 hover:text-sourmat-orange">ماشین‌آلات</a>
            <a href="#services" className="block text-sm py-2 hover:text-sourmat-orange">خدمات</a>
            <a href="#knowledge" className="block text-sm py-2 hover:text-sourmat-orange">مرکز دانش</a>
            <a href="#companies" className="block text-sm py-2 hover:text-sourmat-orange">شرکت‌ها</a>
            <div className="pt-3 border-t border-gray-700 flex gap-2">
              <button className="flex-1 text-sm px-4 py-2 border border-gray-600 rounded-lg">ورود / ثبت‌نام</button>
              <button className="flex-1 text-sm px-4 py-2 bg-sourmat-orange rounded-lg font-medium">ثبت آگهی</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-sourmat-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-sourmat-orange rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-sourmat-orange/10 border border-sourmat-orange/30 rounded-full px-4 py-2 mb-6">
            <i className="fas fa-circle text-sourmat-orange text-[8px]"></i>
            <span className="text-sourmat-orange text-sm font-medium">پلتفرم تخصصی صنعت معدن</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            بازار آنلاین
            <span className="gradient-text"> مواد معدنی</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            پلتفرم تخصصی خرید، فروش و تأمین مواد معدنی. ارتباط مستقیم میان خریداران، فروشندگان و متخصصان صنعت معدن.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-sourmat-orange text-white rounded-xl font-bold text-lg hover:bg-sourmat-orange-dark transition-all shadow-lg shadow-sourmat-orange/20 animate-pulse-glow">
              <i className="fas fa-shopping-cart ml-2"></i>
              خرید مواد معدنی
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              <i className="fas fa-store ml-2"></i>
              فروش مواد معدنی
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              <i className="fas fa-truck ml-2"></i>
              ماشین‌آلات معدنی
            </button>
          </div>

          {/* Quick Search */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center gap-3">
              <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                <i className="fas fa-search text-gray-400"></i>
                <input
                  type="text"
                  placeholder="جست‌وجوی آگهی، ماده معدنی، شرکت..."
                  className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm"
                />
              </div>
              <button className="px-6 py-3 bg-sourmat-orange text-white rounded-xl font-medium hover:bg-sourmat-orange-dark transition-colors">
                جست‌وجو
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-sourmat-orange">۱۲۰۰+</div>
              <div className="text-gray-400 text-sm mt-1">آگهی فعال</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-sourmat-orange">۳۵۰+</div>
              <div className="text-gray-400 text-sm mt-1">شرکت ثبت‌شده</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-sourmat-orange">۵۰+</div>
              <div className="text-gray-400 text-sm mt-1">نوع ماده معدنی</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-sourmat-orange">۲۸</div>
              <div className="text-gray-400 text-sm mt-1">استان تحت پوشش</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Categories Section
function Categories() {
  const categories = [
    { name: 'مواد معدنی فلزی', icon: 'fa-coins', items: ['مس', 'کرومیت', 'منگنز', 'طلا', 'آلومینیوم'], color: 'from-amber-500 to-orange-600' },
    { name: 'مواد معدنی غیرفلزی', icon: 'fa-cubes', items: ['سیلیس', 'دولومیت', 'باریت', 'بنتونیت', 'تالک'], color: 'from-blue-500 to-indigo-600' },
    { name: 'سنگ‌های ساختمانی', icon: 'fa-mountain', items: ['مرمریت', 'گرانیت', 'تراورتن', 'چینی'], color: 'from-emerald-500 to-teal-600' },
    { name: 'مصالح معدنی', icon: 'fa-building', items: ['آهک', 'شن و ماسه', 'گچ', 'سیمان'], color: 'from-purple-500 to-violet-600' },
    { name: 'محصولات فرآوری‌شده', icon: 'fa-industry', items: ['کنسانتره', 'گندله', 'شمش', 'ورق'], color: 'from-red-500 to-rose-600' },
    { name: 'خاک‌های صنعتی', icon: 'fa-flask', items: ['کائولن', 'بنتونیت', 'فولر', 'زئولیت'], color: 'from-cyan-500 to-blue-600' },
  ];

  return (
    <section id="categories" className="py-16 lg:py-24 bg-sourmat-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-sourmat-black mb-4">دسته‌بندی مواد معدنی</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">تمامی مواد معدنی در دسته‌بندی‌های تخصصی برای جست‌وجوی آسان‌تر</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 card-hover cursor-pointer border border-gray-100">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4`}>
                <i className={`fas ${cat.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-sourmat-black mb-3">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <span key={i} className="text-xs bg-sourmat-gray text-gray-600 px-3 py-1.5 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a href="#" className="text-sourmat-orange text-sm font-medium hover:underline">
                  مشاهده آگهی‌ها <i className="fas fa-arrow-left mr-1 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Listings
function FeaturedListings() {
  const listings = [
    { type: 'sell', title: 'سنگ آهن هماتیت عیار ۶۲٪', category: 'مواد فلزی', quantity: '۵۰۰۰ تن', price: 'توافقی', location: 'کرمان', date: '۲ ساعت پیش', verified: true },
    { type: 'buy', title: 'خرید سیلیس مش ۳۰ برای صنایع شیشه', category: 'غیرفلزی', quantity: '۲۰۰ تن', price: '۱,۲۰۰,۰۰۰ ریال/تن', location: 'اصفهان', date: '۵ ساعت پیش', verified: false },
    { type: 'sell', title: 'کنسانتره مس با عیار ۲۵٪', category: 'فرآوری‌شده', quantity: '۱۰۰۰ تن', price: 'تماس بگیرید', location: 'آذربایجان شرقی', date: '۱ روز پیش', verified: true },
    { type: 'sell', title: 'سنگ مرمریت دهبید سفید', category: 'ساختمانی', quantity: '۳۰۰ متر مربع', price: '۲,۵۰۰,۰۰۰ ریال/متر', location: 'فارس', date: '۱ روز پیش', verified: true },
    { type: 'buy', title: 'درخواست خرید باریت API Grade', category: 'غیرفلزی', quantity: '۱۰۰ تن', price: 'توافقی', location: 'تهران', date: '۲ روز پیش', verified: false },
    { type: 'sell', title: 'کرومیت عیار ۴۲٪ - تولیدی', category: 'مواد فلزی', quantity: 'نامحدود', price: 'تماس بگیرید', location: 'خراسان جنوبی', date: '۳ روز پیش', verified: true },
  ];

  return (
    <section id="market" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-sourmat-black mb-2">آگهی‌های خرید و فروش</h2>
            <p className="text-gray-600">جدیدترین آگهی‌های بازار مواد معدنی</p>
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <button className="px-4 py-2 bg-sourmat-orange text-white rounded-lg text-sm font-medium">همه</button>
            <button className="px-4 py-2 bg-sourmat-gray text-gray-700 rounded-lg text-sm hover:bg-gray-200">فروش</button>
            <button className="px-4 py-2 bg-sourmat-gray text-gray-700 rounded-lg text-sm hover:bg-gray-200">خرید</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 card-hover">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  listing.type === 'sell'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {listing.type === 'sell' ? 'فروش' : 'خرید'}
                </span>
                {listing.verified && (
                  <span className="flex items-center gap-1 text-xs text-sourmat-orange">
                    <i className="fas fa-check-circle"></i> تأییدشده
                  </span>
                )}
              </div>

              <h3 className="font-bold text-sourmat-black mb-2 text-sm leading-relaxed">{listing.title}</h3>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <i className="fas fa-tag text-gray-400 w-4 text-center"></i>
                  <span>{listing.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-weight-hanging text-gray-400 w-4 text-center"></i>
                  <span>{listing.quantity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-money-bill text-gray-400 w-4 text-center"></i>
                  <span className="font-medium text-sourmat-black">{listing.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-gray-400 w-4 text-center"></i>
                  <span>{listing.location}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">{listing.date}</span>
                <button className="text-xs text-sourmat-orange font-medium hover:underline">
                  مشاهده جزئیات <i className="fas fa-arrow-left mr-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 border-2 border-sourmat-orange text-sourmat-orange rounded-xl font-medium hover:bg-sourmat-orange hover:text-white transition-all">
            مشاهده همه آگهی‌ها
          </button>
        </div>
      </div>
    </section>
  );
}

// Equipment Section
function Equipment() {
  const equipment = [
    { title: 'سنگ‌شکن فکی ۱۲۰×۸۰', brand: 'سازنده ایرانی', year: '۱۴۰۲', status: 'نو', location: 'اصفهان', price: 'تماس بگیرید' },
    { title: 'بال میل ۲×۳ متر', brand: 'POLYSIUS', year: '۱۳۹۸', status: 'کارکرده', location: 'کرمان', price: '۸,۵۰۰,۰۰۰,۰۰۰ ریال' },
    { title: 'بیل مکانیکی کوماتسو PC400', brand: 'Komatsu', year: '۱۴۰۰', status: 'کارکرده', location: 'یزد', price: 'توافقی' },
    { title: 'سرند ارتعاشی سه طبقه', brand: 'Metso', year: '۱۴۰۱', status: 'نو', location: 'تهران', price: 'تماس بگیرید' },
  ];

  return (
    <section id="equipment" className="py-16 lg:py-24 bg-sourmat-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">ماشین‌آلات و تجهیزات معدنی</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">خرید، فروش و اجاره تجهیزات استخراج، حفاری، خردایش و فرآوری</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {equipment.map((item, idx) => (
            <div key={idx} className="bg-sourmat-gray-dark rounded-2xl p-6 border border-gray-700 card-hover">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sourmat-orange/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-cogs text-sourmat-orange text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{item.title}</h3>
                    <p className="text-gray-400 text-xs">{item.brand}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.status === 'نو' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'
                }`}>
                  {item.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <i className="fas fa-calendar text-xs"></i>
                  <span>سال {item.year}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <i className="fas fa-map-marker-alt text-xs"></i>
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
                <span className="text-sourmat-orange font-medium text-sm">{item.price}</span>
                <button className="text-xs text-gray-400 hover:text-sourmat-orange transition-colors">
                  جزئیات بیشتر <i className="fas fa-arrow-left mr-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Categories */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'استخراج', icon: 'fa-mountain' },
            { name: 'حفاری', icon: 'fa-oil-well' },
            { name: 'خردایش', icon: 'fa-gears' },
            { name: 'فرآوری', icon: 'fa-flask' },
            { name: 'حمل‌ونقل', icon: 'fa-truck' },
            { name: 'آزمایشگاهی', icon: 'fa-microscope' },
          ].map((cat, idx) => (
            <div key={idx} className="bg-white/5 border border-gray-700 rounded-xl p-4 text-center hover:border-sourmat-orange/50 transition-colors cursor-pointer">
              <i className={`fas ${cat.icon} text-sourmat-orange text-xl mb-2`}></i>
              <p className="text-white text-xs font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    { title: 'مشاوره اکتشاف و استخراج', icon: 'fa-compass', desc: 'خدمات تخصصی اکتشاف معادن و طراحی روش‌های استخراج' },
    { title: 'فرآوری مواد معدنی', icon: 'fa-industry', desc: 'طراحی و راه‌اندازی خطوط فرآوری و بهینه‌سازی فرایند' },
    { title: 'آزمایشگاه و آنالیز', icon: 'fa-vial', desc: 'آنالیز شیمیایی، فیزیکی و تعیین عیار مواد معدنی' },
    { title: 'زمین‌شناسی', icon: 'fa-earth-americas', desc: 'مطالعات زمین‌شناسی، نقشه‌برداری و مدل‌سازی ذخیره' },
    { title: 'حمل‌ونقل و لجستیک', icon: 'fa-truck-fast', desc: 'خدمات حمل مواد معدنی از معدن تا مقصد' },
    { title: 'خدمات مهندسی', icon: 'fa-drafting-compass', desc: 'طراحی معدن، نظارت و پیمانکاری پروژه‌های معدنی' },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-sourmat-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-sourmat-black mb-4">خدمات و مشاوره تخصصی</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">دسترسی به متخصصان و ارائه‌دهندگان خدمات حرفه‌ای صنعت معدن</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 card-hover border border-gray-100 group">
              <div className="w-14 h-14 bg-sourmat-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sourmat-orange group-hover:shadow-lg transition-all">
                <i className={`fas ${service.icon} text-sourmat-orange text-xl group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="font-bold text-sourmat-black mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-1 text-sourmat-orange text-sm font-medium mt-4 hover:underline">
                درخواست خدمات <i className="fas fa-arrow-left text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Knowledge Center
function Knowledge() {
  const articles = [
    { title: 'راهنمای جامع شناخت سنگ‌های ساختمانی', category: 'دانشنامه مواد', date: '۱۵ آبان ۱۴۰۵', readTime: '۸ دقیقه' },
    { title: 'تفاوت کنسانتره و گندله سنگ آهن', category: 'فرآوری', date: '۱۲ آبان ۱۴۰۵', readTime: '۵ دقیقه' },
    { title: 'روش‌های نوین اکتشاف معدن', category: 'اکتشاف', date: '۱۰ آبان ۱۴۰۵', readTime: '۱۲ دقیقه' },
    { title: 'تحلیل بازار مس در سال ۲۰۲۶', category: 'بازار', date: '۸ آبان ۱۴۰۵', readTime: '۶ دقیقه' },
  ];

  return (
    <section id="knowledge" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-sourmat-black mb-2">مرکز دانش و مقالات</h2>
            <p className="text-gray-600">مرجع اطلاعات فنی و علمی صنعت معدن</p>
          </div>
          <button className="mt-4 sm:mt-0 px-5 py-2 border border-sourmat-orange text-sourmat-orange rounded-lg text-sm font-medium hover:bg-sourmat-orange hover:text-white transition-all">
            همه مقالات
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <div key={idx} className="flex gap-4 p-5 bg-sourmat-gray rounded-2xl card-hover cursor-pointer">
              <div className="w-16 h-16 bg-sourmat-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-newspaper text-sourmat-orange text-xl"></i>
              </div>
              <div className="flex-1">
                <span className="text-xs text-sourmat-orange font-medium bg-sourmat-orange/10 px-2 py-0.5 rounded-full">
                  {article.category}
                </span>
                <h3 className="font-bold text-sourmat-black text-sm mt-2 leading-relaxed">{article.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                  <span><i className="fas fa-calendar ml-1"></i>{article.date}</span>
                  <span><i className="fas fa-clock ml-1"></i>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Companies Section
function Companies() {
  const companies = [
    { name: 'شرکت معدنی پارس گوهر', type: 'تولیدکننده', location: 'کرمان', verified: true },
    { name: 'گروه صنعتی سنگ ایران', type: 'تأمین‌کننده', location: 'اصفهان', verified: true },
    { name: 'معدن سیلیس ممتاز', type: 'بهره‌بردار معدن', location: 'سمنان', verified: true },
    { name: 'بازرگانی معدن آسیا', type: 'بازرگانی', location: 'تهران', verified: false },
    { name: 'فرآوری کانی سبز', type: 'فرآوری', location: 'یزد', verified: true },
    { name: 'تجهیزات معدنی البرز', type: 'تجهیزات', location: 'البرز', verified: true },
  ];

  return (
    <section id="companies" className="py-16 lg:py-24 bg-sourmat-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-sourmat-black mb-4">شرکت‌ها و فعالان صنعت</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">معرفی شرکت‌ها، معادن، تولیدکنندگان و تأمین‌کنندگان معتبر</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((company, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 card-hover border border-gray-100 flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-sourmat-black to-sourmat-gray-dark rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-building text-sourmat-orange text-lg"></i>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sourmat-black text-sm">{company.name}</h3>
                  {company.verified && (
                    <i className="fas fa-check-circle text-sourmat-orange text-xs"></i>
                  )}
                </div>
                <p className="text-gray-500 text-xs mt-1">{company.type}</p>
                <p className="text-gray-400 text-xs mt-0.5">
                  <i className="fas fa-map-marker-alt ml-1"></i>{company.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-sourmat-black text-white rounded-xl font-medium hover:bg-sourmat-gray-dark transition-colors">
            ثبت شرکت شما <i className="fas fa-arrow-left mr-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-sourmat-orange to-sourmat-orange-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
          به SOURMAT بپیوندید
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          با ثبت‌نام رایگان، آگهی خرید و فروش خود را منتشر کنید و به شبکه فعالان صنعت معدن متصل شوید.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-sourmat-orange rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            <i className="fas fa-user-plus ml-2"></i>
            ثبت‌نام رایگان
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur text-white border border-white/30 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors">
            <i className="fas fa-plus ml-2"></i>
            ثبت آگهی
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-sourmat-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-sourmat-orange rounded-lg flex items-center justify-center">
                <i className="fas fa-gem text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold">SOURMAT</h3>
                <p className="text-[10px] text-gray-400">Source of Material</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              بازار آنلاین تخصصی مواد معدنی و خدمات صنعت معدن. پلتفرم B2B برای ارتباط خریداران، فروشندگان و متخصصان.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sourmat-orange">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">بازار مواد معدنی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ماشین‌آلات معدنی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">خدمات و مشاوره</a></li>
              <li><a href="#" className="hover:text-white transition-colors">مرکز دانش</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ثبت آگهی</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4 text-sourmat-orange">دسته‌بندی‌ها</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">مواد معدنی فلزی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">مواد معدنی غیرفلزی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سنگ‌های ساختمانی</a></li>
              <li><a href="#" className="hover:text-white transition-colors">محصولات فرآوری‌شده</a></li>
              <li><a href="#" className="hover:text-white transition-colors">مصالح معدنی</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sourmat-orange">تماس با ما</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-sourmat-orange"></i>
                <span>info@sourmat.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-sourmat-orange"></i>
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-sourmat-orange"></i>
                <span>تهران، ایران</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sourmat-orange transition-colors">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sourmat-orange transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sourmat-orange transition-colors">
                <i className="fab fa-telegram text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sourmat-orange transition-colors">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © ۱۴۰۵ SOURMAT. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">قوانین و مقررات</a>
            <a href="#" className="hover:text-white transition-colors">حریم خصوصی</a>
            <a href="#" className="hover:text-white transition-colors">درباره ما</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// RFQ Section
function RFQSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-l from-sourmat-black to-sourmat-gray-dark rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-sourmat-orange/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sourmat-orange/20 rounded-full px-3 py-1.5 mb-4">
                <i className="fas fa-file-invoice text-sourmat-orange text-xs"></i>
                <span className="text-sourmat-orange text-xs font-medium">درخواست قیمت (RFQ)</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                درخواست تأمین مواد معدنی
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                مشخصات ماده معدنی موردنیاز خود را ثبت کنید و از فروشندگان معتبر پیشنهاد دریافت کنید. فرایند ساده و سریع برای تأمین مواد اولیه.
              </p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-sourmat-orange"></i>
                  ثبت درخواست با مشخصات فنی دقیق
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-sourmat-orange"></i>
                  دریافت پیشنهاد از چندین فروشنده
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-sourmat-orange"></i>
                  مقایسه و انتخاب بهترین پیشنهاد
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-sourmat-orange"></i>
                  ارتباط مستقیم با تأمین‌کنندگان
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">ثبت درخواست سریع</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="نام ماده معدنی"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 text-sm outline-none focus:border-sourmat-orange"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="مقدار (تن)"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 text-sm outline-none focus:border-sourmat-orange"
                  />
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-gray-400 text-sm outline-none focus:border-sourmat-orange">
                    <option>دسته‌بندی</option>
                    <option>فلزی</option>
                    <option>غیرفلزی</option>
                    <option>ساختمانی</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="محل تحویل"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 text-sm outline-none focus:border-sourmat-orange"
                />
                <textarea
                  placeholder="توضیحات و مشخصات فنی..."
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 text-sm outline-none focus:border-sourmat-orange resize-none"
                ></textarea>
                <button className="w-full py-3 bg-sourmat-orange text-white rounded-xl font-bold hover:bg-sourmat-orange-dark transition-colors">
                  ارسال درخواست
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How it works
function HowItWorks() {
  const steps = [
    { step: '۱', title: 'ثبت‌نام', desc: 'حساب کاربری خود را به‌صورت رایگان ایجاد کنید', icon: 'fa-user-plus' },
    { step: '۲', title: 'ثبت آگهی', desc: 'آگهی خرید یا فروش مواد معدنی خود را منتشر کنید', icon: 'fa-pen-to-square' },
    { step: '۳', title: 'جست‌وجو و فیلتر', desc: 'آگهی‌های مرتبط را پیدا و مقایسه کنید', icon: 'fa-search' },
    { step: '۴', title: 'ارتباط و معامله', desc: 'با طرف مقابل وارد مذاکره شوید', icon: 'fa-handshake' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-sourmat-black mb-4">چگونه کار می‌کند؟</h2>
          <p className="text-gray-600">در چهار قدم ساده به بازار مواد معدنی متصل شوید</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 -translate-x-1/2"></div>
              )}
              <div className="relative z-10 w-20 h-20 bg-sourmat-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${step.icon} text-sourmat-orange text-2xl`}></i>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-sourmat-orange text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="font-bold text-sourmat-black mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <Hero />
      <HowItWorks />
      <Categories />
      <FeaturedListings />
      <RFQSection />
      <Equipment />
      <Services />
      <Knowledge />
      <Companies />
      <CTA />
      <Footer />
    </div>
  );
}
