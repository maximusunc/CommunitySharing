module.exports = function(sequelize, DataTypes) {
	var Share = sequelize.define("Share", {
		shared_date: {
		        type: 'TIMESTAMP',
		        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		        allowNull: false
		    },
		returned_date: {
			type: 'TIMESTAMP',
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			allowNull: false
		}

	});

	Share.associate = function(models) {
		Share.hasOne(models.User, {
			foreignKey: {
					allowNull: false
				}
			});
		Share.hasOne(models.Item, {
			foreignKey: {
				allowNull: false
			}
		})
	};

	return Share;

};

