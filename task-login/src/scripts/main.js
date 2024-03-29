(($) => {

    class Toggle {
  
      constructor(element, options) {
  
        this.defaults = {
          icon: 'fa-eye'
        };
  
        this.options = this.assignOptions(options);
  
        this.$element = element;
        this.$button = $(`<button class="btn-toggle-pass"><i class="fa ${this.options.icon}"></i></button>`);
  
        this.init();
      };
  
      assignOptions(options) {
  
        return $.extend({}, this.defaults, options);
      }
  
      init() {
  
        this._appendButton();
        this.bindEvents();
      }
  
      _appendButton() {
        this.$element.after(this.$button);
      }
  
      bindEvents() {
  
        this.$button.on('click touchstart', this.handleClick.bind(this));
      }
  
      handleClick() {
  
        let type = this.$element.attr('type');
  
        type = type === 'password' ? 'text' : 'password';
  
        this.$element.attr('type', type);
        this.$button.toggleClass('active');
      }
    }
  
    $.fn.togglePassword = function (options) {
      return this.each(function () {
        new Toggle($(this), options);
      });
    }
  
  })(jQuery);
  
  $(document).ready(function() {
    $('.password').togglePassword();
    $('.password-custom').togglePassword({
        'icon': 'fa-lock'
    });
  })


$("#login-signup").click(function(){
  $("#register-section").css("display", "block");
  $("#login-section").css("display", "none");
});

$("#register-cancel").click(function() {
  $("#register-section").css("display", "none");
  $("#login-section").css("display", "block");
})