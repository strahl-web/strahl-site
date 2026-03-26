  // ─── Mobile nav toggle ───
  function toggleMobileNav() {
    document.body.classList.toggle('nav-open');
  }
  function closeMobileNav() {
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
  });

  // ─── DS sub-nav buttons (with anchor scroll) ───
  document.querySelectorAll('.ds-nav-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var navBar = this.closest('.ds-nav-bar');
      navBar.querySelectorAll('.ds-nav-btn').forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      var targetId = this.getAttribute('data-target');
      if (targetId) {
        var target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
