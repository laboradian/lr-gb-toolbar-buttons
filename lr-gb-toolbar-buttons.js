( function( wp ) {
	var withSelect = wp.data.withSelect;
	var ifCondition = wp.compose.ifCondition;
	var compose = wp.compose.compose;

	// 太字
	(function() {
		var MyCustomButton = function( props ) {
			return wp.element.createElement(
				wp.editor.RichTextToolbarButton, {
					// https://developer.wordpress.org/resource/dashicons/#editor-code
					icon: 'editor-bold',
					title: '太字',
					onClick: function() {
						props.onChange( wp.richText.toggleFormat(
							props.value,
							{ type: 'lr-gb-toolbar-buttons/huto' }
						) );
					},
					isActive: props.isActive,
				}
			);
		}

		// ボタンを表示するブロックタイプを限定する
		var ConditionalButton = compose(
			withSelect( function( select ) {
				return {
					selectedBlock: select( 'core/editor' ).getSelectedBlock()
				}
			} ),
			ifCondition( function( props ) {
				return (
					props.selectedBlock &&
					props.selectedBlock.name === 'core/paragraph'
				);
			} )
		)( MyCustomButton );

		wp.richText.registerFormatType(
			'lr-gb-toolbar-buttons/huto', {
				title: '太字',
				tagName: 'span',
				//className: null,
				className: 'huto',
				edit: ConditionalButton,
			}
		);
	})();

	// 太字（赤）
	(function() {
		var MyCustomButton = function( props ) {
			return wp.element.createElement(
				wp.editor.RichTextToolbarButton, {
					// https://developer.wordpress.org/resource/dashicons/#editor-code
					icon: 'editor-textcolor',
					title: '太字（赤）',
					onClick: function() {
						props.onChange( wp.richText.toggleFormat(
							props.value,
							{ type: 'lr-gb-toolbar-buttons/hutoaka' }
						) );
					},
					isActive: props.isActive,
				}
			);
		}

		// ボタンを表示するブロックタイプを限定する
		var ConditionalButton = compose(
			withSelect( function( select ) {
				return {
					selectedBlock: select( 'core/editor' ).getSelectedBlock()
				}
			} ),
			ifCondition( function( props ) {
				return (
					props.selectedBlock &&
					props.selectedBlock.name === 'core/paragraph'
				);
			} )
		)( MyCustomButton );

		wp.richText.registerFormatType(
			'lr-gb-toolbar-buttons/hutoaka', {
				title: '太字（赤）',
				tagName: 'span',
				className: 'hutoaka',
				edit: ConditionalButton,
			}
		);
	})();

	// 大文字
	(function() {
		var MyCustomButton = function( props ) {
			return wp.element.createElement(
				wp.editor.RichTextToolbarButton, {
					// https://developer.wordpress.org/resource/dashicons/#editor-code
					icon: 'plus',
					title: '大文字',
					onClick: function() {
						props.onChange( wp.richText.toggleFormat(
							props.value,
							{ type: 'lr-gb-toolbar-buttons/oomozi' }
						) );
					},
					isActive: props.isActive,
				}
			);
		}

		// ボタンを表示するブロックタイプを限定する
		var ConditionalButton = compose(
			withSelect( function( select ) {
				return {
					selectedBlock: select( 'core/editor' ).getSelectedBlock()
				}
			} ),
			ifCondition( function( props ) {
				return (
					props.selectedBlock &&
					props.selectedBlock.name === 'core/paragraph'
				);
			} )
		)( MyCustomButton );

		wp.richText.registerFormatType(
			'lr-gb-toolbar-buttons/oomozi', {
				title: '大文字',
				tagName: 'span',
				className: 'oomozi',
				edit: ConditionalButton,
			}
		);
	})();

	// 小文字
	(function() {
		var MyCustomButton = function( props ) {
			return wp.element.createElement(
				wp.editor.RichTextToolbarButton, {
					// https://developer.wordpress.org/resource/dashicons/#editor-code
					icon: 'plus',
					title: '小文字',
					onClick: function() {
						props.onChange( wp.richText.toggleFormat(
							props.value,
							{ type: 'lr-gb-toolbar-buttons/komozi' }
						) );
					},
					isActive: props.isActive,
				}
			);
		}

		// ボタンを表示するブロックタイプを限定する
		var ConditionalButton = compose(
			withSelect( function( select ) {
				return {
					selectedBlock: select( 'core/editor' ).getSelectedBlock()
				}
			} ),
			ifCondition( function( props ) {
				return (
					props.selectedBlock &&
					props.selectedBlock.name === 'core/paragraph'
				);
			} )
		)( MyCustomButton );

		wp.richText.registerFormatType(
			'lr-gb-toolbar-buttons/komozi', {
				title: '小文字',
				tagName: 'span',
				className: 'komozi',
				edit: ConditionalButton,
			}
		);
	})();

	// 黄マーカー
	(function() {
		var MyCustomButton = function( props ) {
			return wp.element.createElement(
				wp.editor.RichTextToolbarButton, {
					// https://developer.wordpress.org/resource/dashicons/#editor-code
					icon: 'edit',
					title: '黄マーカー',
					onClick: function() {
						props.onChange( wp.richText.toggleFormat(
							props.value,
							{ type: 'lr-gb-toolbar-buttons/ymarker' }
						) );
					},
					isActive: props.isActive,
				}
			);
		}

		// ボタンを表示するブロックタイプを限定する
		var ConditionalButton = compose(
			withSelect( function( select ) {
				return {
					selectedBlock: select( 'core/editor' ).getSelectedBlock()
				}
			} ),
			ifCondition( function( props ) {
				return (
					props.selectedBlock &&
					props.selectedBlock.name === 'core/paragraph'
				);
			} )
		)( MyCustomButton );

		wp.richText.registerFormatType(
			'lr-gb-toolbar-buttons/ymarker', {
				title: '黄マーカー',
				tagName: 'span',
				className: 'ymarker',
				edit: ConditionalButton,
			}
		);
	})();

	// 赤マーカー
	(function() {
		var MyCustomButton = function( props ) {
			return wp.element.createElement(
				wp.editor.RichTextToolbarButton, {
					// https://developer.wordpress.org/resource/dashicons/#editor-code
					icon: 'edit',
					title: '赤マーカー',
					onClick: function() {
						props.onChange( wp.richText.toggleFormat(
							props.value,
							{ type: 'lr-gb-toolbar-buttons/rmarker' }
						) );
					},
					isActive: props.isActive,
				}
			);
		}

		// ボタンを表示するブロックタイプを限定する
		var ConditionalButton = compose(
			withSelect( function( select ) {
				return {
					selectedBlock: select( 'core/editor' ).getSelectedBlock()
				}
			} ),
			ifCondition( function( props ) {
				return (
					props.selectedBlock &&
					props.selectedBlock.name === 'core/paragraph'
				);
			} )
		)( MyCustomButton );

		wp.richText.registerFormatType(
			'lr-gb-toolbar-buttons/rmarker', {
				title: '赤マーカー',
				tagName: 'span',
				className: 'rmarker',
				edit: ConditionalButton,
			}
		);
	})();

} )( window.wp );

