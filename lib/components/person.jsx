(function () {

  var React = require('react');

  // Local modules
  var actions = require('../api/actions');

  // Local components
  var Button = require('./button.jsx'),
      Glyph = require('./glyph.jsx');
  
  var Person = React.createClass({

    className: 'person',

    getInitialState: function() {
      var state = this.props;
      state._edit = false;
      state._removed = false;
      state._saved = false;
      return state;
    },

    changeFIO: function (e) {
      this.setState({fio: e.target.value});
    },

    changeAge: function (e) {
      this.setState({age: e.target.value});
    },

    changeEmail: function (e) {
      this.setState({email: e.target.value});
    },

    changePhone: function (e) {
      this.setState({phone: e.target.value});
    },

    edit: function () {
      this.setState({_edit: true});
    },
  
    close: function () {
      this.setState({_edit: false});
    },
  
    remove: function () {
      this.setState({_removed: true});
    },

    saved: function (err) {
      var self = this;
      self.setState({_saved: true});
      setTimeout(function() {
        self.setState({_saved: false});
      }, 1000);
    },

    save: function () {
      actions.call('person.save', {
        id: this.props.id,
        state: this.state
      }, this.saved);
    },

    show_if: function (value) {
      return !value ? 'hidden' : '';
    },
  
    render: function() {
      //console.log('PERSON', this.props);
      return (
        <div className={[
            this.className, 
            this.show_if(!this.state._removed)
          ].join(' ')}>
          <span className="col-sm-3">{this.props.fio || 'Новая персона'}</span>
          <Button type="btn btn-primary btn-xs" onClick={this.edit}>
              <Glyph type="pencil"/>&nbsp;
              Редактировать
          </Button>
          &nbsp;
          <Button type="btn btn-danger btn-xs" onClick={this.remove}>
              <Glyph type="remove"/>&nbsp;
              Удалить
          </Button>
          <div className={this.show_if(this.state._edit)}>
            <h5>
                <span className="col-sm-3 text-info">Редактирование персоны</span>
                <Button type="btn btn-primary btn-xs" onClick={this.save}>
                    <Glyph type="floppy-save"/>&nbsp;
                    Cохранить
                </Button>
                &nbsp;
                <Button type="btn btn-warning btn-xs" onClick={this.close}>
                    <Glyph type="remove"/>&nbsp;
                    Закрыть
                </Button>
                &nbsp;
                <span className={['text-info', this.show_if(this.state._saved)].join(' ')}>
                  <Glyph type="saved" />
                  &nbsp;
                  Данные успешно сохранены
                </span>
            </h5>
            <div className="form-group">
                <label className="col-sm-2 control-label">ФИО</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                      placeholder="Фамилия, Имя, Отчество" 
                      onChange={this.changeFIO}
                      value={this.state.fio}
                      ng-model="person.FIO"/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">Возраст</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control"
                      onChange={this.changeAge}
                      value={this.state.age}
                      placeholder="Возраст" ng-model="person.Age"/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">Телефон</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                      onChange={this.changePhone}
                      value={this.state.phone}
                      placeholder="Телефон" ng-model="person.Phone"/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">E-mail</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" 
                      onChange={this.changeEmail}
                      value={this.state.email}
                      placeholder="E-mail" ng-model="person.Email"/>
                </div>
            </div>
          </div>
        </div>
      );
    }
  
  });
  
  module.exports = Person;

} ());