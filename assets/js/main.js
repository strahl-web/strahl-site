  // ─── Mobile nav accordion groups ───
  function toggleMobileGroup(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('open');
  }

  // ─── Mobile nav toggle ───
  function toggleMobileNav() {
    var nav = document.getElementById('mobile-nav');
    var btn = document.getElementById('nav-toggle');
    if (!nav) return;
    var isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    document.body.classList.toggle('nav-open', !isOpen);
  }
  function closeMobileNav() {
    var nav = document.getElementById('mobile-nav');
    if (nav) nav.style.display = 'none';
    document.body.classList.remove('nav-open');
  }

  // ─── Datasheet image switcher (3076) ───
  function dsSetImg(thumb, src) {
    document.querySelectorAll('#page-datasheet .ds-thumb').forEach(function(t) { t.classList.remove('active'); });
    thumb.classList.add('active');
    var main = document.getElementById('ds-main-photo');
    if (main) main.src = src;
  }

  // ─── Datasheet image switcher (4079) ───
  function ds4079SetImg(thumb, src) {
    document.querySelectorAll('#page-datasheet-4079 .ds-thumb').forEach(function(t) { t.classList.remove('active'); });
    thumb.classList.add('active');
    var main = document.getElementById('ds-4079-main-photo');
    if (main) main.src = src;
  }

  // ─── Datasheet image switcher (5276) ───
  function ds5276SetImg(thumb, src) {
    document.querySelectorAll('#page-datasheet-5276 .ds-thumb').forEach(function(t) { t.classList.remove('active'); });
    thumb.classList.add('active');
    var main = document.getElementById('ds-5276-main-photo');
    if (main) main.src = src;
  }

  // ─── Core page switcher ───
  function goTo(page) {
    closeMobileNav();
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    var target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.nav-dropdown').forEach(function(d) { d.classList.remove('open'); });
  }

  // ─── Dropdown toggle on click ───
  function toggleDropdown(e) {
    e.stopPropagation();
    var dropdown = e.currentTarget.closest('.nav-dropdown');
    var isOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.nav-dropdown').forEach(function(d) { d.classList.remove('open'); });
    if (!isOpen) dropdown.classList.add('open');
  }

  document.addEventListener('click', function() {
    document.querySelectorAll('.nav-dropdown').forEach(function(d) { d.classList.remove('open'); });
  });

  // ─── SKU links ───
  document.addEventListener('click', function(e) {
    var sku = e.target.closest('a.sku');
    if (!sku) return;
    e.preventDefault();
    var code = sku.textContent.trim();
    if (code === '3076/CK') goTo('datasheet');
    if (code === '4079/CK') goTo('datasheet-4079');
    if (code === '5276/CK') goTo('datasheet-5276');
  });

  // ─── DS sub-nav buttons (with anchor scroll) ───
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.ds-nav-btn');
    if (!btn) return;
    var navBar = btn.closest('.ds-nav-bar');
    if (navBar) navBar.querySelectorAll('.ds-nav-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var targetId = btn.getAttribute('data-target');
    if (targetId) {
      var target = document.getElementById(targetId);
      if (target) {
        var headerH = 68;  // header sticky
        var navH = navBar ? navBar.offsetHeight : 0;
        var offset = target.getBoundingClientRect().top + window.pageYOffset - headerH - navH - 16;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  });

// Datasheet: troca imagem principal com ID customizado
function dsSetImgCustom(imgId, thumb, src) {
  var el = document.getElementById(imgId);
  if (el) el.src = src;
  var panel = thumb.closest('.ds-thumbs');
  if (panel) panel.querySelectorAll('.ds-thumb').forEach(function(t){ t.classList.remove('active'); });
  thumb.classList.add('active');
}
