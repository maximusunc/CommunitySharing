// users table
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		name: {
			type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2,25]
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isEmail: true
				}
			},
			address1: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2,100]
				}
			},
			address2: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2,100]
				}
			},
			city: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2,100]
				}
			},
			state: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2]
				}
			},
			zip: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2,100]
				}
			}
		});

	User.associate = function(models) {
		User.hasMany(models.Item, {
			onDelete: "CASCADE"
			},
			foreignKey: {
				allowNull: false
			});
		User.hasMany(models.Share, {
			onDelete: "CASCADE",
			},
			foreignKey: {
				allowNull: false
			});
		}
	}
	return User;
};